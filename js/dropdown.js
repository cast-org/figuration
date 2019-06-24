/**
 * --------------------------------------------------------------------------
 * Figuration (v4.0.0-alpha.5): dropdown.js
 * Licensed under MIT (https://github.com/cast-org/figuration/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

(function($) {
    'use strict';

    var CFW_Widget_Dropdown = function(element, options) {
        this.$element = $(element);
        this.$target = null;
        this.instance = null;
        this.timerHide = null;
        this.hasContainer = {
            helper: null,
            parent: null,
            previous: null
        };
        this.inNavbar = this._insideNavbar();

        var parsedData = this.$element.CFW_parseData('dropdown', CFW_Widget_Dropdown.DEFAULTS);
        this.settings = $.extend({}, CFW_Widget_Dropdown.DEFAULTS, parsedData, options);

        // Touch enabled-browser flag - override not allowed
        this.settings.isTouch = $.CFW_isTouch;

        this.c = CFW_Widget_Dropdown.CLASSES;

        this._init();
    };

    CFW_Widget_Dropdown.CLASSES = {
        // Class names
        isMenu      : 'dropdown-menu',
        hasSubMenu  : 'dropdown-submenu',
        showSubMenu : 'show-menu',
        backLink    : 'dropdown-back',
        hover       : 'dropdown-hover'
    };

    CFW_Widget_Dropdown.DEFAULTS = {
        target    : null,
        isSubmenu : false,  // Used internally
        delay     : 350,    // Delay for hiding menu (milliseconds)
        hover     : false,  // Enable hover style navigation
        backlink  : false,  // Insert back links into submenus
        backtop   : false,  // Should back links start at top level
        backtext  : 'Back', // Text for back links
        container : false,   // Where to place dropdown in DOM
        variants  : 'dropdown-menu-reverse dropup'
    };

    var clearMenus = function(e) {
        var KEYCODE_TAB = 9;    // Tab

        // Ignore right-click
        var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)
        if (e && e.which === RIGHT_MOUSE_BUTTON_WHICH) { return; }

        var $items = $('[data-cfw="dropdown"]');
        // Do menu items in reverse to close from bottom up
        for (var i = $items.length; i--;) {
            var $trigger = $($items[i]);
            var itemData = $trigger.data('cfw.dropdown');
            if (!itemData) {
                continue;
            }

            var $itemMenu = itemData.$target;
            if (!$itemMenu.hasClass('open')) {
                continue;
            }

            // Ignore clicks into input areas and tab navigation movement inside a menu
            if (e && (e.type === 'click' && /label|input|textarea/i.test(e.target.tagName) || e.type === 'keyup' && e.which !== KEYCODE_TAB)) {
                continue;
            }

            // Ignore if focus if still inside menu
            if (e && this === e.target || $itemMenu[0].contains(e.target)) {
                continue;
            }

            var eventProperties = {
                relatedTarget: $trigger[0]
            };
            if (e && e.type === 'click') {
                eventProperties.clickEvent = e;
            }

            if (!$trigger.CFW_trigger('beforeHide.cfw.dropdown', eventProperties)) {
                continue;
            }

            // Remove empty mouseover listener for iOS work-around
            if (!itemData.settings.isSubmenu && $.CFW_isTouch) {
                $('body').children().off('mouseover', null, $.noop);
            }

            $trigger
                .attr('aria-expanded', 'false')
                .removeClass('open');
            $itemMenu
                .removeClass('open');

            $trigger.CFW_Dropdown('containerReset');

            $trigger.CFW_trigger('afterHide.cfw.dropdown', eventProperties);
        }
    };

    CFW_Widget_Dropdown.prototype = {
        _init : function() {
            if (typeof Popper === 'undefined') {
                throw new TypeError('Figurations\'s Dropdown widget requires Popper.js (https://popper.js.org)');
            }

            var $selfRef = this;

            // Get target menu
            var selector = this.$element.CFW_getSelectorFromChain('dropdown', this.settings.target);
            var $target = $(selector);

            // Target by sibling class
            if (!$target.length) {
                $target = $(this.$element.siblings('.dropdown-menu, ul, ol')[0]);
            }
            if (!$target.length) { return; }
            this.$target = $target;

            // Get previous sibling to menu if container is to be used
            if (this._useContainer()) {
                this.hasContainer = {
                    parent   : this.$target.parent(),
                    previous : this.$target.prev()
                };
            }

            this.$element.attr('data-cfw', 'dropdown');
            // Get `id`s
            this.instance = this.$element.CFW_getID('cfw-dropdown');
            this.$target.CFW_getID('cfw-dropdown');

            // Set default ARIA and class
            this.$element
                .attr('aria-expanded', 'false');
            this.$target
                .attr('aria-labelledby', this.instance)
                .addClass(this.c.isMenu);

            // Toggle on the trigger
            this.$element.on('click.cfw.dropdown', function(e) {
                e.preventDefault();
                e.stopPropagation();
                $selfRef.toggle(e);
            });

            // Add 'Back' links
            this._addBacklink();

            // Find submenu items
            var $subToggle = this.$target.children('li').children('ul, ol').parent();
            $subToggle.each(function() {
                var $this = $(this);
                var $subElement = $this.children('a').eq(0);
                var $subTarget = $this.children('ul, ol').eq(0);
                var subOptions = {};

                if ($subElement.length && $subTarget.length) {
                    $this.addClass($selfRef.c.hasSubMenu);
                    if ($subElement[0].nodeName === 'A') {
                        $subElement.attr('role', 'button');
                    }
                    // Pass parent settings, with some overrides
                    // then add dropdown functionality to submenu
                    subOptions = {
                        isSubmenu: true,
                        target: $subTarget.CFW_getID('cfw-dropdown')
                    };
                    subOptions = $.extend({}, $selfRef.settings, subOptions);
                    $subElement.CFW_Dropdown(subOptions);
                }

                // Manipulate directions of submenus
                var $dirNode = $this.closest('.dropdown-menu-reverse, .dropdown-menu-forward');
                if ($dirNode.hasClass('dropdown-menu-reverse')) {
                    $this.addClass('dropdown-subalign-reverse');
                } else {
                    $this.addClass('dropdown-subalign-forward');
                }
            });

            // Set role on dividers
            this.$target.find('.dropdown-divider').attr('role', 'separator');

            // Add keyboard navigation
            this._navEnableKeyboard();

            // Touch OFF - Hover mode
            if (!this.settings.isTouch && this.settings.hover) {
                this._navEnableHover();
            }

            this.$element.CFW_trigger('init.cfw.dropdown');
        },

        _findMenuItems : function() {
            var showing = this.$target.hasClass('open');
            var $menu = this.$target;
            if (!showing && this.settings.isSubmenu) {
                $menu = this.$element.closest('.dropdown-menu');
            }

            var $items = $menu.children('li').find('a, .dropdown-item, button, input, textarea');
            $items = $items.filter(':not(.disabled, :disabled):not(:has(input)):not(:has(textarea)):visible');
            return $items;
        },

        _addBacklink : function() {
            var $selfRef = this;
            if (this.settings.backlink && this.settings.backtop && !this.settings.isSubmenu ||
                this.settings.backlink && this.settings.isSubmenu) {
                var $backItem = $('<li class="' + this.c.backLink + '"><button type="button" class="dropdown-item">' + this.settings.backtext + '</button></li>')
                    .prependTo(this.$target);

                $backItem.children('button').on('click.cfw.dropdown.modeClick', function() {
                    $selfRef.hide();
                    $selfRef.$element.focus();
                });
            }
        },

        _navEnableKeyboard : function() {
            var $selfRef = this;
            $.each([this.$element, this.$target], function() {
                $(this).on('keydown.cfw.dropdown', function(e) {
                    $selfRef._actionsKeydown(e);
                });
            });
        },

        /* eslint-disable complexity */
        _actionsKeydown : function(e) {
            var showing = this.$target.hasClass('open');

            var KEYCODE_UP = 38;    // Arrow up
            var KEYCODE_RIGHT = 39; // Arrow right
            var KEYCODE_DOWN = 40;  // Arrow down
            var KEYCODE_LEFT = 37;  // Arrow left
            var KEYCODE_ESC = 27;   // Escape
            var KEYCODE_SPACE = 32; // Space
            var KEYCODE_TAB = 9;    // Tab

            var REGEX_KEYS = new RegExp('^(' + KEYCODE_UP + '|' + KEYCODE_RIGHT + '|' + KEYCODE_DOWN + '|' + KEYCODE_LEFT + '|' + KEYCODE_ESC + '|' + KEYCODE_SPACE + '|' + KEYCODE_TAB + ')$');
            var REGEX_ARROWS = new RegExp('^(' + KEYCODE_UP + '|' + KEYCODE_RIGHT + '|' + KEYCODE_DOWN + '|' + KEYCODE_LEFT + ')$');

            var isInput = /input|textarea/i.test(e.target.tagName);
            var isCheck = isInput && /checkbox|radio/i.test($(e.target).prop('type'));
            var isRealButton = /button/i.test(e.target.tagName);
            var isRoleButton = /button/i.test($(e.target).attr('role'));

            if (!REGEX_KEYS.test(e.which)) { return; }
            // Ignore space in inputs and buttons
            if ((isInput || isRealButton) && e.which === KEYCODE_SPACE) { return; }
            // Ignore arrows in inputs, except for checkbox/radio
            if (isInput && !isCheck && REGEX_ARROWS.test(e.which)) { return; }

            // Allow ESC and LEFT to propagate if menu is closed
            if (!showing && e.which === KEYCODE_ESC || e.which === KEYCODE_LEFT && $(e.target).is(this.$element)) {
                return;
            }

            var $items = null;
            var index = -1;

            // Handle TAB if using a container
            if (e.which === KEYCODE_TAB) {
                if (this.hasContainer.helper !== null) {
                    $items = this._findMenuItems();
                    if (!$items.length) { return; }

                    // Find current focused menu item
                    index = $items.index(document.activeElement);
                    if (index < 0 && isCheck) {
                        index = $items.index($(e.target).closest('.dropdown-item')[0]);
                    }

                    if (showing && $(e.target).is(this.$element) && !e.shiftKey) {
                        e.which = KEYCODE_DOWN;
                    } else if (e.shiftKey && index === 0) {
                        this.$element.trigger('focus');
                        e.preventDefault();
                        e.stopPropagation();
                        return;
                    } else if (!e.shiftKey && index === $items.length - 1) {
                        this.$element.trigger('focus');
                        return;
                    } else {
                        return;
                    }
                } else {
                    return;
                }
            }

            e.preventDefault();
            e.stopPropagation();

            // Close current focused menu with ESC
            if (e.which === KEYCODE_ESC) {
                this.hide();
                this.$element.trigger('focus');
            }

            // Ignore disabled items
            if (this.$element.is('.disabled, :disabled')) {
                return;
            }

            // Emulate button behaviour
            if (isRoleButton && e.which === KEYCODE_SPACE) {
                this.toggle(e);
                return;
            }

            // Open/close menus
            if (e.which === KEYCODE_UP || e.which === KEYCODE_DOWN) {
                // Open menu if top level
                if (!showing && !this.settings.isSubmenu) {
                    this.show();
                }
            }

            // Right
            if (e.which === KEYCODE_RIGHT) {
                if (!showing && this.settings.isSubmenu) {
                    this.show();
                }
            }

            // Left
            if (e.which === KEYCODE_LEFT) {
                this.hide();
                this.$element.trigger('focus');
            }

            // Focus control
            $items = this._findMenuItems();
            if (!$items.length) { return; }

            // Find current focused menu item
            index = $items.index(document.activeElement);
            if (index < 0 && isCheck) {
                index = $items.index($(e.target).closest('.dropdown-item')[0]);
            }

            if (e.which === KEYCODE_UP && index > 0) { index--; } // up
            if (e.which === KEYCODE_DOWN && index < $items.length - 1) { index++; } // down
            /* eslint-disable-next-line no-bitwise */
            if (!~index) { index = 0; } // force first item

            $items.eq(index).trigger('focus');
        },
        /* eslint-enable complexity */

        _navEnableHover : function() {
            var $selfRef = this;
            if (!this.settings.isTouch) {
                $.each([this.$element, this.$target], function() {
                    $(this).on('mouseenter.cfw.dropdown.modeHover', function(e) {
                        $selfRef._actionsHoverEnter(e);
                    });
                    $(this).on('mouseleave.cfw.dropdown.modeHover', function(e) {
                        $selfRef._actionsHoverLeave(e);
                    });
                });
            }
        },

        _navDisableHover : function() {
            this.$element.off('.cfw.dropdown.modeHover');
            this.$target.off('.cfw.dropdown.modeHover');
        },

        _actionsHoverEnter : function(e) {
            clearTimeout(this.timerHide);
            clearMenus(e);
            this.show();
        },

        _actionsHoverLeave : function(e) {
            var $selfRef = this;
            var $node = $(e.target);

            clearTimeout(this.timerHide);
            if ($node.is(this.$element) || $node.is(this.$target) || this.$target[0].contains($node[0])) {
                this.timerHide = setTimeout(function() {
                    $selfRef.timerHide = null;
                    $selfRef.hide();
                }, this.settings.delay);
            }
        },

        _insideNavbar : function() {
            return this.$element.closest('.navbar-collapse').length > 0;
        },

        _useContainer : function() {
            // return !this.settings.isSubmenu && this.settings.container && !this.inNavbar;
            return !this.settings.isSubmenu && this.settings.container;
        },

        _containerPlacement : function() {
            var elRect = this.$element[0].getBoundingClientRect();
            elRect =  $.extend({}, elRect, this.$element.offset());
            this.hasContainer.helper.css({
                top: elRect.top,
                left: elRect.left,
                width: elRect.width,
                height: elRect.height
            });
        },

        _containerSet : function() {
            if (this._useContainer()) {
                this.hasContainer.helper = $(document.createElement('div'));
                this.hasContainer.helper
                    .appendTo(this.settings.container)
                    .append(this.$target)
                    .addClass('dropdown-container');

                $(window).on('resize.cfw.dropdown.' + this.instance, this._containerPlacement.bind(this));

                this._containerPlacement();
            }
        },

        containerReset : function() {
            if (this._useContainer()) {
                $(window).off('resize.cfw.dropdown.' + this.instance);
                if (this.hasContainer.previous.length) {
                    this.$target.insertAfter($(this.hasContainer.previous));
                } else {
                    this.$target.appendTo($(this.hasContainer.parent));
                }
                if (this.hasContainer.helper !== null) {
                    this.hasContainer.helper
                        .off('keydown.cfw.dropdown')
                        .off('focusout.cfw.dropdown');
                    this.hasContainer.helper.remove();
                }
                this.hasContainer.helper = null;
            }
        },

        toggle : function(e) {
            if (e) {
                e.preventDefault();
                e.stopPropagation();
            }

            if (this.$element.is('.disabled, :disabled')) {
                return;
            }

            var showing = this.$target.hasClass('open');

            clearMenus(e);

            if (showing) {
                this.hide();
            } else {
                this.show();
            }
        },

        show : function() {
            var $selfRef = this;

            if (this.$element.is('.disabled, :disabled') || this.$target.hasClass('open')) {
                return;
            }

            var eventProperties = {
                relatedTarget: this.$element[0]
            };
            if (!this.$element.CFW_trigger('beforeShow.cfw.dropdown', eventProperties)) {
                return;
            }

            // Move root menu if container is to be used
            this._containerSet();

            this.$element
                .attr('aria-expanded', 'true')
                .addClass('open');
            this.$target
                .addClass('open')
                .find('li').redraw();

            // Handle loss of focus
            $(document)
                .on('focusin.cfw.dropdown.' + this.instance, function(e) {
                    if ($selfRef.$element[0] !== e.target && !$selfRef.$target.has(e.target).length) {
                        $selfRef.hide();
                    }
                });

            this.$element.CFW_trigger('afterShow.cfw.dropdown', eventProperties);
        },

        hide : function() {
            if (this.$element.is('.disabled, :disabled') || !this.$target.hasClass('open')) {
                return;
            }

            var eventProperties = {
                relatedTarget: this.$element[0]
            };
            if (!this.$element.CFW_trigger('beforeHide.cfw.dropdown', eventProperties)) {
                return;
            }

            $(document).off('focusin.cfw.dropdown.' + this.instance);

            this.$element
                .attr('aria-expanded', 'false')
                .removeClass('open');
            this.$target
                .removeClass('open');

            this.containerReset();

            this.$element
                .CFW_trigger('afterHide.cfw.dropdown', eventProperties);
        },

        dispose : function() {
            var $subToggle = this.$target.children('li').children('ul, ol').children('a');
            // Do menu items in reverse to dispose from bottom up
            for (var i = $subToggle.length; i--;) {
                $subToggle[i].eq(0).CFW_Dropdown('dispose');
            }
            this._navDisableHover();
            this.hide();

            $(document).off('.cfw.dropdown.' + this.instance);
            $(window).off('.cfw.dropdown.' + this.instance);
            this.$target.find('.' + this.c.backLink).remove();
            this.$target.off('.cfw.dropdown');
            this.$element
                .off('.cfw.dropdown')
                .removeData('cfw.dropdown');

            this.$element = null;
            this.$target = null;
            this.instance = null;
            this.timerHide = null;
            this.hasContainer = null;
            this.inNavbar = null;
            this.settings = null;
        }
    };

    $.fn.redraw = function() {
        return this.offsetHeight;
    };

    var Plugin = function(option) {
        var args = [].splice.call(arguments, 1);
        return this.each(function() {
            var $this = $(this);
            var data = $this.data('cfw.dropdown');
            var options = typeof option === 'object' && option;

            if (!data) {
                $this.data('cfw.dropdown', data = new CFW_Widget_Dropdown(this, options));
            }
            if (typeof option === 'string') {
                data[option].apply(data, args);
            }
        });
    };

    $.fn.CFW_Dropdown = Plugin;
    $.fn.CFW_Dropdown.Constructor = CFW_Widget_Dropdown;

    // Handle closing menu when clicked outside of menu area
    $(window).ready(function() {
        $(document).on('click', clearMenus);
    });
}(jQuery));
