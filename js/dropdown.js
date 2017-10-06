/**
 * --------------------------------------------------------------------------
 * Figuration (v3.0.1): dropdown.js
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

        var parsedData = this.$element.CFW_parseData('dropdown', CFW_Widget_Dropdown.DEFAULTS);
        this.settings = $.extend({}, CFW_Widget_Dropdown.DEFAULTS, parsedData, options);

        // Touch enabled-browser flag - override not allowed
        this.settings.isTouch = $.CFW_isTouch;

        this.$tmpContainer = null;
        this.noContainer = this._containerOverride();

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
        delay     : 350,    // Delay for hiding menu (milliseconds)
        hover     : false,  // Enable hover style navigation
        backlink  : false,  // Insert back links into submenus
        backtop   : false,  // Should back links start at top level
        backtext  : 'Back', // Text for back links
        container : false,   // Where to place dropdown in DOM
        variants  : 'dropdown-menu-reverse dropup'
    };

    function getParent($node) {
        var $parent;
        var selector = $node.CFW_getSelectorFromElement('dropdown');
        if (selector) {
            $parent = $(selector).parent();
        }

        return $parent || $node.parent();
    }

    function clearMenus(e) {
        // Ignore right-click
        if (e && e.which === 3) { return; }

        // Ignore clicks into input areas
        if (e && e.type === 'click' && /input|textarea/i.test(e.target.tagName)) {
            return;
        }

        // Find currently open menu root
        $('[data-cfw="dropdown"]').each(function() {
            var $parent = getParent($(this));
            if (!$parent.hasClass('open')) { return; }
            $(this).CFW_Dropdown('hideRev');
        });
    }

    CFW_Widget_Dropdown.prototype = {
        _init : function() {
            var $selfRef = this;

            // Get target menu
            var selector = this.$element.CFW_getSelectorFromChain('dropdown', this.settings.target);
            var $target = $(selector);

            // Target by sibling class
            if (!$target.length) {
                $target = $(this.$element.siblings('.dropdown-menu')[0]);
            }
            if (!$target.length) { return false; }
            this.$target = $target;

            this.$element.attr('data-cfw', 'dropdown');

            // Check for presence of trigger id - set if not present
            this.instance = this.$element.CFW_getID('cfw-dropdown');

            // Check for id on top level menu - set if not present
            /* var menuID = */ this.$target.CFW_getID('cfw-dropdown');
            this.$target.attr({
                'aria-hidden': 'true',
                'aria-labelledby': this.instance
            })
            .addClass(this.c.isMenu);

            // Set tabindex=-1 so that sub-menu links can't receive keyboard focus from tabbing
            $('a', this.$target).attr('tabIndex', -1).not('.disabled, :disabled');

            // Set ARIA on trigger
            this.$element.attr({
                'aria-haspopup': 'true',
                'aria-expanded': 'false'
            });

            if (this.settings.backlink && this.settings.backtop) {
                var $backTop = $('<li class="' + this.c.backLink + '"><a href="#">' + this.settings.backtext + '</a></li>')
                    .prependTo(this.$target);
                if (this.$target.hasClass('dropdown-menu-reverse')) {
                    $backTop.addClass('dropdown-back-reverse');
                }
            }

            // Check for sub menu items and add indicator, id, and direction as needed
            this.$target.find('ul').each(function() {
                var $subMenu = $(this);
                var $subLink = $subMenu.closest('li').find('a').eq(0);
                var subLinkID = $subLink.CFW_getID('cfw-dropdown');
                // var subMenuID = $subMenu.CFW_getID('cfw-dropdown');

                var $dirNode = $subMenu.closest('.dropdown-menu-reverse, .dropdown-menu-forward');
                if ($dirNode.hasClass('dropdown-menu-reverse')) {
                    $subMenu.closest('li').addClass('dropdown-subalign-reverse');
                } else {
                    $subMenu.closest('li').addClass('dropdown-subalign-forward');
                }

                if ($selfRef.settings.backlink) {
                    var $backElm = $('<li class="' + $selfRef.c.backLink + '"><a href="#">' + $selfRef.settings.backtext + '</a></li>')
                        .prependTo($subMenu);
                    if ($dirNode.hasClass('dropdown-menu-reverse')) {
                        $backElm.addClass('dropdown-back-reverse');
                    }
                }

                $subMenu.attr({
                    // 'role': 'menu',
                    'aria-hidden': 'true',
                    'aria-labelledby': subLinkID
                })
                .addClass($selfRef.c.isMenu)
                .closest('li').addClass($selfRef.c.hasSubMenu);

                $subLink.attr({
                    'aria-haspopup': 'true',
                    'aria-expanded': 'false'
                });
            });

            // Set role on dividers
            $('.dropdown-divider', this.$target).attr('role', 'separator');

            // Touch OFF - Hover mode
            if (!this.settings.isTouch && this.settings.hover) {
                this.navEnableHover();
            }

            // Default Mode - Click mode
            // Touch ON - handle click/tap style navigation
            this.navEnableClick();

            // Always on - Keyboard navigation
            this.navEnableKeyboard();

            this.$element.CFW_trigger('init.cfw.dropdown');
        },

        navEnableClick : function() {
            var $selfRef = this;
            // Trigger
            this.$element.on('click.cfw.dropdown.modeClick', function(e) {
                $selfRef.toggleMenu(e, $selfRef.$element, $selfRef.$target);
            });
            // Sub menu
            var $subelement = this.$target.find('ul').closest('li').find('a:eq(0)');
            if ($subelement.length) {
                $subelement.on('click.cfw.dropdown.modeClick', function(e) {
                    var $subMenuElm = $(this).parent().find('ul').eq(0);
                    $selfRef.toggleMenu(e, $(this), $subMenuElm);
                });
            }
            // Back link
            var $backLinkElm = this.$target.find('.' + this.c.backLink);
            if ($backLinkElm.length) {
                $backLinkElm.on('click.cfw.dropdown.modeClick', function(e) {
                    if (e) {
                        e.stopPropagation();
                        e.preventDefault();
                    }

                    if ($selfRef.settings.backtop && ($(this).closest('ul')[0] == $selfRef.$target[0])) {
                        $selfRef.closeUp($(this).closest('li'));
                    } else {
                        $selfRef.closeUp($(this).closest('.' + $selfRef.c.hasSubMenu));
                    }
                });
            }
        },

        navEnableHover : function() {
            var $selfRef = this;
            if (!this.settings.isTouch) {
                $.each([this.$element, this.$target, this.$target.find('.' + this.c.hasSubMenu)], function() {
                    $(this).on('mouseenter.cfw.dropdown.modeHover', function(e) {
                        $selfRef._actionsHoverEnter(e, this);
                    });
                    $(this).on('mouseleave.cfw.dropdown.modeHover', function(e) {
                        $selfRef._actionsHoverLeave(e, this);
                    });
                });
            }
        },

        navDisableHover : function() {
            this.$element.off('.cfw.dropdown.modeHover');
            this.$target.find('.' + this.c.hasSubMenu).off('.cfw.dropdown.modeHover');
        },

        navEnableKeyboard : function() {
            var $selfRef = this;

            // Auto-closing of inactive sub menus
            this.$target.find('a').on('focus.cfw.dropdown', function() {
                var $node = $(this);
                $selfRef.$target.find('.' + $selfRef.c.hasSubMenu + '.open').each(function() {
                    // Ignore parents of item being focused - needed for nesting
                    if (!$(this).find($node).length) {
                        var $snode = $(this).children('a');
                        var $ssubNode = $node.parent().find('ul').eq(0);
                        $selfRef.hideMenu(null, $snode, $ssubNode);
                    }
                });
            });

            // Key handling
            $.each([this.$element, this.$target, this.$target.find('.' + this.c.hasSubMenu)], function() {
                $(this).on('keydown.cfw.dropdown', function(e) {
                    $selfRef._actionsKeydown(e, this);
                });
            });
        },

        toggleMenu : function(e, $trigger, $menu) {
            if ($trigger.add().parent().is('.disabled, :disabled')) { return; }

            var $parent  = getParent($trigger);
            var showing = $parent.hasClass('open');

            // Check to see if link should be followed (sub-menu open and link is not '#')
            var nodeHref = $trigger.attr('href');
            if (nodeHref && !(/^#$/.test(nodeHref)) && showing) {
                clearMenus();
                return;
            }

            if (e) e.stopPropagation();

            if (!showing) {
                this.showMenu(e, $trigger, $menu);
            } else {
                this.hideMenu(e, $trigger, $menu);
            }

            $trigger.trigger('focus');
        },

        showMenu : function(e, $trigger, $menu) {
            var $selfRef = this;

            if (e) e.preventDefault();

            var $parent  = getParent($trigger);
            var showing = $parent.hasClass('open');
            if (showing) { return; }

            if (!$trigger.CFW_trigger('beforeShow.cfw.dropdown')) {
                return;
            }

            if ($trigger.is(this.$element)) {
                if (this.settings.isTouch) {
                    // Add empty function for mouseover listeners on immediate
                    // children of `<body>` due to missing event delegation on iOS
                    // Allows 'click' event to bubble up in Safari
                    // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
                    $('body').children().on('mouseover', null, $.noop);
                }
                clearMenus();
                if (!$parent.hasClass(this.c.hover)) {
                    $trigger.trigger('focus');
                }

                // Handle loss of focus
                $(document)
                    .on('focusin.cfw.dropdown.' + this.instance, function(e) {
                        if ($selfRef.$element[0] !== e.target && !$selfRef.$target.has(e.target).length) {
                            $selfRef.hideRev();
                        }
                    });
            }

            // Find other open sub menus and close them
            this.$target.find('.' + this.c.hasSubMenu + '.open').each(function() {
                // Ignore parents of item to be shown - needed for nesting
                if (!$(this).find($trigger).length) {
                    var $snode = $(this).children('a');
                    var $ssubNode = $trigger.parent().find('ul').eq(0);
                    $selfRef.hideMenu(null, $snode, $ssubNode);
                }
            });

            if ($trigger.is(this.$element)) {
                // Move target if container is to be used
                if (this.settings.container && !this.noContainer) {
                    this.$tmpContainer = $(document.createElement('div'));
                    this.$tmpContainer
                        .appendTo(this.settings.container)
                        .append(this.$target)
                        .addClass('dropdown-container open');

                    var variantTypes = this.settings.variants.split(' ');
                    for (var i = variantTypes.length; i--;) {
                        var varName = variantTypes[i];
                        if ($parent.hasClass(varName)) {
                            this.$tmpContainer.addClass(varName);
                        }
                    }

                    $(window).on('resize.cfw.dropdown.' + this.instance, $.proxy(this._containerPlacement, this));
                    this._containerPlacement();
                }
            }

            $parent.addClass('open');
            $trigger.attr('aria-expanded', 'true');
            $menu.removeAttr('aria-hidden');
            //  .children('li').not('.disabled, :disabled');
            //  .children('a').attr('tabIndex', 0);
            this.$target.find('li').redraw();

            $trigger.CFW_trigger('afterShow.cfw.dropdown');
        },

        hideMenu : function(e, $trigger, $menu, triggerFocus) {
            if (e) e.preventDefault();

            if (triggerFocus === undefined) { triggerFocus = true; }

            var $parent  = getParent($trigger);
            var showing = $parent.hasClass('open');
            if (!showing) { return; }

            if (!$trigger.CFW_trigger('beforeHide.cfw.dropdown')) {
                return;
            }

            if ($trigger.is(this.$element)) {
                $(document).off('focusin.cfw.dropdown.' + this.instance);
                if (this.settings.isTouch) {
                    // Remove empty mouseover listener for iOS work-around
                    $('body').children().off('mouseover', null, $.noop);
                }
            }

            // Find open sub menus
            var openSubMenus = $menu.find('.' + this.c.hasSubMenu + '.open');
            if (openSubMenus.length) {
                var openSubMenusRev = openSubMenus.toArray().reverse();
                for (var i = 0; i < openSubMenusRev.length; i++) {
                    var $node = $(openSubMenusRev[i]).children('a');
                    var $subNode = $node.parent().find('ul').eq(0);
                    this.hideMenu(null, $node, $subNode);
                }
            }

            $parent.removeClass('open');
            $trigger.attr('aria-expanded', 'false');

            if ($trigger.is(this.$element)) {
                if (this.settings.container && !this.noContainer) {
                    $(window).off('resize.cfw.dropdown.' + this.instance);
                    this.$target
                        .appendTo($parent);
                    this.$tmpContainer && this.$tmpContainer.remove();
                    this.$tmpContainer = null;
                }
            }

            $menu.attr('aria-hidden', 'true')
                .find('a').attr('tabIndex', -1);

            if ($trigger.is(this.$element)) {
                if (triggerFocus) {
                    $trigger.trigger('focus');
                }
            } else if (!$parent.hasClass(this.c.hover)) {
                $trigger.trigger('focus');
            }
            $parent.removeClass(this.c.hover);
            $trigger.CFW_trigger('afterHide.cfw.dropdown');
        },

        toggle : function() {
            this.toggleMenu(null, this.$element, this.$target);
        },

        show : function() {
            this.showMenu(null, this.$element, this.$target);
        },

        hide : function() {
            this.hideMenu(null, this.$element, this.$target);
        },

        hideRev : function() {
            this.hideMenu(null, this.$element, this.$target, false);
        },

        closeUp : function($node) {
            var $subNode;
            if ($node.hasClass('open')) {
                $node = $node.find('a').eq(0);
            } else {
                $node = $node.closest('.open').find('[data-cfw="dropdown"], a').eq(0);
            }

            $subNode = $node.find('ul').eq(0);
            this.hideMenu(null, $node, $subNode);

            var $parent = getParent($node);
            if (!$parent.hasClass(this.c.hover)) {
                $node.trigger('focus');
            }
            $parent.removeClass(this.c.hover);
        },

        _actionsKeydown : function(e, node) {
            var isInput = /input|textarea/i.test(e.target.tagName);
            var isCheck = isInput && /checkbox|radio/i.test($(e.target).prop('type'));
            var isRealButton = /button/i.test(e.target.tagName);
            var isRoleButton = /button/i.test($(e.target).attr('role'));

            // 37-left, 38-up, 39-right, 40-down, 27-esc, 32-space, 9-tab
            if (!/^(37|38|39|40|27|32|9)$/.test(e.which)) { return; }
            // Ignore space in inputs and buttons
            if ((isInput || isRealButton) && e.which == 32) { return; }
            // Ignore arrows in inputs, except for checkbox/radio
            if (isInput && !isCheck && /^(37|38|39|40)$/.test(e.which)) { return; }

            var $node = $(node);
            var $items = null;

            // Close menu when tab pressed, move to next item
            if (e.which == 9) {
                // Emulate arrow up/down if input
                if (isInput) {
                    e.which = (e.shiftKey) ? 38 : 40;
                } else {
                    clearMenus();
                    this.$element.trigger('focus');
                    return;
                }
            }

            // Allow ESC to propagate if menu is closed
            if (e.which == 27 && $(e.target).is(this.$element) && !getParent($(e.target)).hasClass('open')) {
                return;
            }

            e.stopPropagation();
            e.preventDefault();

            // Close current focused menu with ESC
            if (e.which == 27) {
                if ($node.is(this.$element) || $node.is(this.$target)) {
                    this.hideMenu(null, this.$element, this.$target);
                    return;
                }
                if ($node.hasClass(this.c.hasSubMenu)) {
                    this.closeUp($node);
                    return;
                }
            }

            // Arrow key navigation
            var $eTarget = $(e.target);
            var $parent = null;

            // Find parent menu
            if ($node.is(this.$element) || $node.is(this.$target)) {
                $parent = this.$target;
            } else {
                $parent = $eTarget.closest('.dropdown-menu');
            }

            $parent.removeClass(this.c.hover);

            // Emulate button behaviour
            if (isRoleButton && e.which == 32) {
                this.toggleMenu(null, $node, $parent);
                return;
            }

            // Up/Down
            if (e.which == 38 || e.which == 40) {
                if ($parent.is(':hidden')) {
                    this.showMenu(null, $node, $parent);
                    return;
                }

                $items = $parent.children('li').find('a, .dropdown-item, input, textarea');
                $items = $items.filter(':not(.disabled, :disabled):not(:has(input)):not(:has(textarea)):visible');
                if (!$items.length) { return; }

                // Find current focused menu item
                var index = $items.index(e.target);
                if (index < 0 && isCheck) {
                    index = $items.index($(e.target).closest('.dropdown-item')[0]);
                }

                if (e.which == 38 && index > 0)                 { index--;   } // up
                if (e.which == 40 && index < $items.length - 1) { index++;   } // down
                if (!~index)                                    { index = 0; } // force first item

                $items.eq(index).trigger('focus');
            } // END - Up/Down

            // Left/Right
            if (e.which == 37 || e.which == 39) {
                // Only for children of menu
                if (!$.contains(this.$target[0], $eTarget[0])) { return; }
                // Only if has submenu class
                if (!$eTarget.closest('li.dropdown-submenu')) { return; }

                // Open/close sub-menu as needed
                var $subMenuElm = $eTarget.parent().find('ul').eq(0);
                var $parMenuElm = $eTarget.closest('li.dropdown-submenu').parent('ul.dropdown-menu');
                var subHidden = $subMenuElm.is(':hidden');
                var parHidden = $parMenuElm.is(':hidden');

                if (e.which == 39 && subHidden) {
                    this.showMenu(null, $eTarget, $subMenuElm);
                    $items = $subMenuElm.children('li').find('a, .dropdown-item, input, textarea');
                    $items = $items.filter(':not(.disabled, :disabled):not(:has(input)):not(:has(textarea)):visible');
                    $items.eq(0).trigger('focus');
                    return;
                }

                if (e.which == 37 && !parHidden) {
                    this.closeUp($node);
                    return;
                }
            } // END - Left/Right
        },

        _actionsHoverEnter : function(e, node) {
            var $node = $(node);

            clearTimeout(this.timerHide);
            if ($node.is(this.$element)) {
                getParent($node).addClass(this.c.hover);
                this.showMenu(null, this.$element, this.$target);
                return;
            }
            if ($node.hasClass(this.c.hasSubMenu)) {
                $node = $node.find('a').eq(0);
                var $subNode = $node.parent().find('ul').eq(0);
                getParent($node).addClass(this.c.hover);
                this.showMenu(null, $node, $subNode);
                return;
            }
        },

        _actionsHoverLeave : function(e, node) {
            var $selfRef = this;
            var $node = $(node);

            clearTimeout(this.timerHide);
            if ($node.is(this.$element) || $node.is(this.$target)) {
                this.timerHide = setTimeout(function() {
                    $selfRef.timerHide = null;
                    $selfRef.hideMenu(null, $selfRef.$element, $selfRef.$target);
                }, this.settings.delay);
                return;
            }
            if ($node.hasClass(this.c.hasSubMenu)) {
                $node = $node.find('a').eq(0);
                var $subNode = $node.find('ul').eq(0);

                this.timerHide = setTimeout(function() {
                    $selfRef.timerHide = null;
                    $selfRef.hideMenu(null, $node, $subNode);
                }, $selfRef.settings.delay);
                return;
            }
        },

        _containerOverride : function() {
            return this.$element.closest('.navbar-collapse').length > 0;
        },

        _containerPlacement : function() {
            var elRect = this.$element[0].getBoundingClientRect();
            elRect =  $.extend({}, elRect, this.$element.offset());
            this.$tmpContainer.css({
                top: elRect.top,
                left: elRect.left,
                width: elRect.width,
                height: elRect.height
            });
        },

        dispose : function() {
            $(document).off('.cfw.dropdown.' + this.instance);
            $(window).off('.cfw.dropdown.' + this.instance);
            this.$element.CFW_Dropdown('hideRev');
            this.$target.find('.' + this.c.backLink).remove();
            this.$target.find('.' + this.c.hasSubMenu).off('.cfw.dropdown');
            this.$target.find('a').off('.cfw.dropdown');
            this.$target.off('.cfw.dropdown');
            this.$element
                .off('.cfw.dropdown')
                .removeData('cfw.dropdown');

            this.$element = null;
            this.$target = null;
            this.instance = null;
            this.timerHide = null;
            this.$tmpContainer = null;
            this.noContainer = null;
            this.settings = null;
        }
    };

    $.fn.redraw = function() {
        return this.offsetHeight;
    };

    function Plugin(option) {
        var args = [].splice.call(arguments, 1);
        return this.each(function() {
            var $this = $(this);
            var data = $this.data('cfw.dropdown');
            var options = typeof option === 'object' && option;

            if (!data) {
                $this.data('cfw.dropdown', (data = new CFW_Widget_Dropdown(this, options)));
            }
            if (typeof option === 'string') {
                data[option].apply(data, args);
            }
        });
    }

    $.fn.CFW_Dropdown = Plugin;
    $.fn.CFW_Dropdown.Constructor = CFW_Widget_Dropdown;

    // Handle closing menu when clicked outside of menu area
    $(window).ready(function() {
        $(document).on('click', clearMenus);
    });

})(jQuery);
