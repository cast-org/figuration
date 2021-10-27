/**
 * --------------------------------------------------------------------------
 * Figuration (v4.2.2): dropdown.js
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
        this.popper = null;

        var parsedData = this.$element.CFW_parseData('dropdown', CFW_Widget_Dropdown.DEFAULTS);
        this.settings = $.extend({}, CFW_Widget_Dropdown.DEFAULTS, parsedData, options);

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
        reference : 'toggle',
        boundary  : 'scrollParent',
        flip      : true,
        display   : 'dynamic',
        popperConfig    : null,
        autoClose : true,
        loop      : true,  // Loop around ends
        startEnd  : true   // Up arrow from control starts at last menu item
    };

    /* eslint-disable complexity */
    var clearMenus = function(e) {
        if (e) {
            // Ignore right-click
            var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)
            if (e.which === RIGHT_MOUSE_BUTTON_WHICH) {
                return;
            }

            // Ignore tab key event
            var KEYCODE_TAB = 9;    // Tab
            if (e.type === 'keyup' && e.which !== KEYCODE_TAB) {
                return;
            }

            // Ignore input areas
            if (/label|input|textarea|select/i.test(e.target.tagName)) {
                return;
            }
        }

        var $items = $('[data-cfw="dropdown"]');
        // Do menu items in reverse to close from bottom up
        for (var i = $items.length; i--;) {
            var $trigger = $($items[i]);
            var itemData = $trigger.data('cfw.dropdown');
            if (!itemData) {
                continue;
            }

            var $itemMenu = itemData.$target;
            if ($itemMenu === null) {
                continue;
            }
            if (!$itemMenu.hasClass('open')) {
                continue;
            }

            if (e) {
                // Ignore clicks on trigger or child of trigger
                if (itemData.$element[0] === e.target || itemData.$element[0].contains(e.target)) {
                    continue;
                }

                // Auto close determination
                if (itemData.settings.autoClose === false) {
                    continue;
                }
                var isMenuTarget = itemData.$target[0] === e.target || itemData.$target[0].contains(e.target);
                if ((itemData.settings.autoClose === 'inside' && !isMenuTarget) ||
                    (itemData.settings.autoClose === 'outside' && isMenuTarget)) {
                    continue;
                }

                // Ignore clicks for
                // - menu triggers
                // - 'back' buttons
                if (e.type === 'click') {
                    if (this === e.target ||
                    ($(e.target).is('[data-cfw="dropdown"]') && $itemMenu[0].contains(e.target)) ||
                    $(e.target).closest('.dropdown-back').length) {
                        continue;
                    }
                }

                // Ignore if hover/mouse
                // - if still inside menu
                if (e.type === 'mouseenter') {
                    if (this === e.target || $itemMenu[0].contains(e.target)) {
                        continue;
                    }
                }
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

            $trigger.CFW_Dropdown('_hideComplete', eventProperties);
        }
    };
    /* eslint-enable complexity */

    CFW_Widget_Dropdown.prototype = {
        _init : function() {
            var $selfRef = this;

            if (typeof this.settings.reference === 'object' &&
                !this._isElement(this.settings.reference) &&
                typeof this.settings.reference.getBoundingClientRect !== 'function'
            ) {
                // Popper virtual elements require a getBoundingClientRect method
                throw new Error('CFW_Dropdown: Option "reference" provided type "object" without a required "getBoundingClientRect" method.');
            }

            // Get target menu
            var selector = this.$element.CFW_getSelectorFromChain('dropdown', this.settings.target);
            var $target = $(selector);

            // Target by next sibling class
            if (!$target.length) {
                $target = $(this.$element.next('.dropdown-menu, ul, ol')[0]);
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
                var $dirNode = $subTarget.closest('.dropreverse, .dropend, .dropstart');
                if ($dirNode.hasClass('dropreverse') || $dirNode.hasClass('dropstart')) {
                    $subTarget.addClass('dropdown-subalign-reverse');
                } else {
                    $subTarget.addClass('dropdown-subalign-forward');
                }
            });

            // Set role on dividers
            this.$target.find('.dropdown-divider').attr('role', 'separator');

            // Add keyboard navigation
            this._navEnableKeyboard();

            // Touch OFF - Hover mode
            if (!$.CFW_isTouch && this.settings.hover) {
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

            var $items = $menu.children('li').find('a, .dropdown-item, button, input, textarea, select');
            $items = $items.filter(':not(.disabled, :disabled):not(:has(input)):not(:has(textarea):not(:has(select)):visible');
            return $items;
        },

        _addBacklink : function() {
            var $selfRef = this;
            if ((this.settings.backlink && this.settings.backtop && !this.settings.isSubmenu) ||
                (this.settings.backlink && this.settings.isSubmenu)) {
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

            var isInput = /input|textarea|select/i.test(e.target.tagName);
            var isCheck = isInput && /checkbox|radio/i.test($(e.target).prop('type'));
            var isRealButton = /button/i.test(e.target.tagName);
            var isRoleButton = /button/i.test($(e.target).attr('role'));

            if (!REGEX_KEYS.test(e.which)) { return; }
            // Ignore space in inputs and buttons
            if ((isInput || isRealButton) && e.which === KEYCODE_SPACE) { return; }
            // Ignore arrows in inputs, except for checkbox/radio
            if (isInput && !isCheck && REGEX_ARROWS.test(e.which)) { return; }

            // Allow ESC and LEFT to propagate if menu is closed
            if (!showing && (e.which === KEYCODE_ESC || e.which === KEYCODE_LEFT) && $(e.target).is(this.$element)) {
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
            if ($.CFW_isDisabled(this.$element)) {
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
            if (e.which === KEYCODE_LEFT && this.settings.isSubmenu) {
                this.hide();
                this.$element.trigger('focus');
                return;
            }

            // Focus control
            $items = this._findMenuItems();
            if (!$items.length) { return; }

            // Find current focused menu item
            index = $items.index(document.activeElement);
            if (index < 0 && isCheck) {
                index = $items.index($(e.target).closest('.dropdown-item')[0]);
            }

            var nextItem = $items[index];
            var doIncrement = e.which === KEYCODE_DOWN || e.which === KEYCODE_RIGHT;
            nextItem = $.CFW_getNextActiveElement($items.toArray(), $items[index], doIncrement, this.settings.loop, this.settings.startEnd && !this.settings.subMenu);
            $(nextItem).trigger('focus');
        },
        /* eslint-enable complexity */

        _navEnableHover : function() {
            var $selfRef = this;
            if (!$.CFW_isTouch) {
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

        _isElement : function(node) {
            return (node[0] || node).nodeType;
        },

        _getReference : function() {
            var reference = this.$element[0];

            if (this.hasContainer.helper !== null) {
                reference = this.hasContainer.helper;
            }

            if (this.settings.reference === 'parent') {
                reference = this.$element.parent().get(0);
            } else if (this._isElement(this.settings.reference)) {
                reference = this.settings.reference;

                // Check for jQuery element
                if (typeof this.settings.reference.jquery !== 'undefined') {
                    reference = this.settings.reference[0];
                }
            } else if (typeof this.settings.reference === 'object') {
                reference = this.settings.reference;
            }

            return reference;
        },

        _getPlacement : function() {
            var isRTL = $.CFW_isRTL(this.$element[0]);
            var attachmentMap = {
                AUTO: 'auto',
                TOP: isRTL ? 'top-end' : 'top-start',
                TOPEND: isRTL ? 'top-start' : 'top-end',
                FORWARD: isRTL ? 'left-start' : 'right-start',
                FORWARDEND: isRTL ? 'left-end' : 'right-end',
                BOTTOM: isRTL ? 'bottom-end' : 'bottom-start',
                BOTTOMEND: isRTL ? 'bottom-start' : 'bottom-end',
                REVERSE: isRTL ? 'right-start' : 'left-start',
                REVERSEEND: isRTL ? 'right-end' : 'left-end'
            };

            var $dirNode = this.$target.closest('.dropup, .dropreverse, .dropstart, .dropend');
            var dirV = $dirNode.hasClass('dropup') ? 'TOP' : 'BOTTOM';
            var appendV = $dirNode.hasClass('dropreverse') ? 'END' : '';
            var dirH = $dirNode.hasClass('dropstart') || $dirNode.hasClass('dropreverse') ? 'REVERSE' : 'FORWARD';
            var appendH = $dirNode.hasClass('dropup') ? 'END' : '';

            var placement = attachmentMap[dirV + appendV];

            if ($dirNode.hasClass('dropstart') || $dirNode.hasClass('dropend')) {
                placement = attachmentMap[dirH + appendH];
            }

            if (this.settings.isSubmenu) {
                placement = attachmentMap[dirH + appendH];
            }
            return placement;
        },

        _getPopperConfig : function() {
            var defaultConfig = {
                placement: this._getPlacement(),
                modifiers: {
                    flip: {
                        enabled: this.settings.flip,
                        behavior: 'flip'
                    },
                    preventOverflow: {
                        boundariesElement: this.settings.boundary
                    }
                }
            };

            // Use deep merge
            var returnConfig = $.extend(true, defaultConfig, this.settings.popperConfig);
            return returnConfig;
        },

        popperReset : function() {
            if (this.popper) {
                this.popper.destroy();
            }
        },

        _popperLocate: function() {
            var isStatic = Boolean(window.getComputedStyle(this.$target[0], null).getPropertyValue('position').toLowerCase() === 'static');

            if (this.settings.display !== 'dynamic') { return; }
            if (isStatic) { return; }

            if (typeof Popper === 'undefined') {
                throw new TypeError('Figurations\'s Dropdown widget requires Popper (https://popper.js.org)');
            }

            this.popper = new Popper(this._getReference(), this.$target[0], this._getPopperConfig());
        },

        toggle : function(e) {
            if (e) {
                e.preventDefault();
            }

            if ($.CFW_isDisabled(this.$element)) {
                return;
            }

            var showing = this.$target.hasClass('open');
            if (showing) {
                this.hide();
            } else {
                clearMenus(e);
                this.show();
            }
        },

        show : function() {
            var $selfRef = this;

            if ($.CFW_isDisabled(this.$element) || this.$target.hasClass('open')) {
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
                .addClass('open');

            // Handle loss of focus
            $(document)
                .on('focusin.cfw.dropdown.' + this.instance, function(e) {
                    if ($selfRef.$element[0] !== e.target && !$selfRef.$target.has(e.target).length) {
                        var isMenuTarget = $selfRef.$target[0] === e.target || $selfRef.$target[0].contains(e.target);
                        if ($selfRef.settings.autoClose === false) {
                            return;
                        }
                        if (($selfRef.settings.autoClose === 'inside' && !isMenuTarget) ||
                            ($selfRef.settings.autoClose === 'outside' && isMenuTarget)) {
                            return;
                        }
                        $selfRef.hide();
                    }
                });

            // Add empty function for mouseover listeners on immediate
            // children of `<body>` due to missing event delegation on iOS
            // Allows 'click' event to bubble up in Safari
            // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
            if (!this.settings.isSubmenu && $.CFW_isTouch) {
                $('body').children().on('mouseover.cfw.dropdown', $.noop);
            }

            this._popperLocate();

            this.$element.CFW_trigger('afterShow.cfw.dropdown', eventProperties);
        },

        hide : function() {
            var eventProperties = {
                relatedTarget: this.$element[0]
            };

            if ($.CFW_isDisabled(this.$element) || !this.$target.hasClass('open')) {
                return;
            }

            if (!this.$element.CFW_trigger('beforeHide.cfw.dropdown', eventProperties)) {
                return;
            }

            // Close any open nested menus - in reverse to close from bottom up
            var $items = this.$target.find('[data-cfw="dropdown"].open');
            for (var i = $items.length; i--;) {
                var $trigger = $($items[i]);
                var itemData = $trigger.data('cfw.dropdown');
                if (!itemData) {
                    continue;
                }
                $trigger.CFW_Dropdown('_hideComplete');
            }

            this._hideComplete(eventProperties);
        },

        _hideComplete : function(eventProperties) {
            $(document).off('focusin.cfw.dropdown.' + this.instance);

            // Remove empty mouseover listener for iOS work-around
            if (!this.settings.isSubmenu && $.CFW_isTouch) {
                $('body').children().off('mouseover.cfw.dropdown');
            }

            this.$target
                .removeClass('open');

            this.containerReset();
            this.popperReset();

            this.$element
                .attr('aria-expanded', 'false')
                .removeClass('open')
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
            if (this.popper) {
                this.popper.destroy();
            }
            this.popper = null;
        }
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
