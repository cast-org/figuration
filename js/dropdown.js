/**
 * --------------------------------------------------------------------------
 * Figuration (v2.0.0): dropdown.js
 * Licensed under MIT (https://github.com/cast-org/figuration/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

(function($) {
    'use strict';

    // Includes touch recognition fix for IE11
    // Partially from: https://github.com/Modernizr/Modernizr/blob/master/feature-detects/touchevents.js
    /* global DocumentTouch */
    var $msTouch = window.navigator.msMaxTouchPoints === undefined ? false : window.navigator.msMaxTouchPoints;
    var $isTouch = (('ontouchstart' in window) || $msTouch || window.DocumentTouch && document instanceof DocumentTouch) ? true : false;

    var CFW_Widget_Dropdown = function(element, options) {
        this.$triggerElm = $(element);
        this.$menuElm = null;

        this.timerHide = null;

        this.settings = $.extend({}, CFW_Widget_Dropdown.DEFAULTS, this._parseDataAttr(), options);
        this.settings.isTouch = $isTouch;   // Touch enabled-browser flag - override not allowed

        this.c = CFW_Widget_Dropdown.CLASSES;

        this._init();
    };

    CFW_Widget_Dropdown.CLASSES = {
        // Class names
        isMenu          : 'dropdown-menu',
        hasSubMenu      : 'dropdown-submenu',
        showSubMenu     : 'show-menu',
        backdrop        : 'dropdown-backdrop',
        backLink        : 'dropdown-back'
    };

    CFW_Widget_Dropdown.DEFAULTS = {
        // Default Settings
        delay           : 350,          // Delay for hiding menu (milliseconds)
        hover           : false,        // Enable hover style navigation
        backlink        : false,        // Insert back links into submenus
        backtop         : false,        // Should back links start at top level
        backtext        : 'Back'        // Text for back links
    };

    function getParent($node) {
        var $parent;
        var selector = $node.attr('data-cfw-dropdown-target');
        if (selector) {
            $parent = $(selector);
        }
        if ($parent && $parent.length) {
            return $parent;
        } else {
            return $node.parent();
        }
    }

    function clearMenus(e) {
        // Ignore right-click
        if (e && e.which === 3) { return; }
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
            var menuID = this.settings.toggle;
            // if ((menuID === undefined) || (menuID.length <= 0)) { return false; }

            // Find target by id/css selector
            var $menuElm = $(this.settings.toggle);
            if (menuID !== undefined && !$menuElm.length) {
                $menuElm = $('[data-cfw-dropdown-target="' + menuID + '"]');
            }
            // Target by href selector
            if (!$menuElm.length) {
                var selector = this.$triggerElm.attr('href');
                selector = selector && /#[]A-Za-z]/.test(selector);
                if (selector) {
                    $menuElm = $(selector);
                }
                // $menuElm = $(this.$triggerElm.attr('href'));
            }
            // Target by sibling class
            if (!$menuElm.length) {
                $menuElm = $(this.$triggerElm.siblings('.dropdown-menu')[0]);
            }
            if (!$menuElm.length) { return false; }
            this.$menuElm = $menuElm;

            this.$triggerElm.attr('data-cfw', 'dropdown');

            // Check for presence of trigger id - set if not present
            var triggerID = this._getID(this.$triggerElm, 'cfw-dropdown');

            // Top Level: add ARIA/roles and define all sub-menu links as menuitem (unless 'disabled')
            // Set tabIndex=-1 so that sub-menu links can't receive keyboard focus from tabbing

            // Check for id on top level menu - set if not present
            menuID = this._getID(this.$menuElm, 'cfw-dropdown');
            this.$menuElm.attr({
                // 'role': 'menu',
                'aria-hidden': 'true',
                'aria-labelledby': triggerID
            })
            .addClass(this.c.isMenu);
            $('a', this.$menuElm).attr('tabIndex', -1).not('.disabled, :disabled');
            //  .attr('role', 'menuitem');
            // Set ARIA on trigger
            this.$triggerElm.attr({
                'aria-haspopup': 'true',
                'aria-expanded': 'false'
            });

            if ($selfRef.settings.backlink && $selfRef.settings.backtop) {
                this.$menuElm.prepend('<li class="' + CFW_Widget_Dropdown.CLASSES.backLink + '"><a href="#">' + $selfRef.settings.backtext + '</a></li>');
            }

            // Check for sub menu items and add indicator and id as needed
            this.$menuElm.find('ul').each(function() {
                var $subMenu = $(this);
                var $subLink = $subMenu.closest('li').find('a').eq(0);
                var subLinkID = $selfRef._getID($subLink, 'cfw-dropdown');
                // var subMenuID = $selfRef._getID($subMenu, 'cfw-dropdown');

                if ($selfRef.settings.backlink) {
                    $subMenu.prepend('<li class="' + CFW_Widget_Dropdown.CLASSES.backLink + '"><a href="#">' + $selfRef.settings.backtext + '</a></li>');
                }

                $subMenu.attr({
                    // 'role': 'menu',
                    'aria-hidden': 'true',
                    'aria-labelledby': subLinkID
                })
                .addClass(CFW_Widget_Dropdown.CLASSES.isMenu)
                .closest('li').addClass(CFW_Widget_Dropdown.CLASSES.hasSubMenu);

                $subLink.attr({
                    'aria-haspopup': 'true',
                    'aria-expanded': 'false'
                });
            });

            // Set role on all li items - including any injected ones
            // $('li', this.$menuElm).attr('role', 'presentation');
            $('li.divider, .dropdown-divider', this.$menuElm).attr('role', 'separator');

            // Touch OFF - Hover mode
            if (!this.settings.isTouch && this.settings.hover) {
                this.navEnableHover();
            }

            // Default Mode - Click mode
            // Touch ON - handle click/tap style navigation
            this.navEnableClick();

            // Always on - Keyboard navigation
            this.navEnableKeyboard();

            // Loss of focus
            /*
             ** Causing issues with nested dropdowns on touchscreen **
             *
            $(this.$triggerElm).add(this.$menuElm).on('focusout.cfw.dropdown', function(e) {
                // Need slight delay or <body> will always be reported
                setTimeout(function() {
                    if (!$.contains($selfRef.$menuElm[0], document.activeElement)
                        && $selfRef.$triggerElm[0] != document.activeElement) {
                        $selfRef.hideRev();
                    }
                }, 150);
            });
            */

            this._trigger(this.$triggerElm, 'init.cfw.dropdown');
        },

        navEnableClick : function() {
            var $selfRef = this;
            // Trigger
            this.$triggerElm.on('click.cfw.dropdown.modeClick', function(e) {
                $selfRef.toggleMenu(e, $selfRef.$triggerElm, $selfRef.$menuElm);
            });
            // Sub menu
            var $subTriggerElm = this.$menuElm.find('ul').closest('li').find('a:eq(0)');
            if ($subTriggerElm.length) {
                $subTriggerElm.on('click.cfw.dropdown.modeClick', function(e) {
                    var $subMenuElm = $(this).parent().find('ul').eq(0);
                    $selfRef.toggleMenu(e, $(this), $subMenuElm);
                });
            }
            // Back link
            var $backLinkElm = this.$menuElm.find('.' + CFW_Widget_Dropdown.CLASSES.backLink);
            if ($backLinkElm.length) {
                $backLinkElm.on('click.cfw.dropdown.modeClick', function(e) {
                    if (e) {
                        e.stopPropagation();
                        e.preventDefault();
                    }

                    if ($selfRef.settings.backtop && ($(this).closest('ul')[0] == $selfRef.$menuElm[0])) {
                        $selfRef.closeUp($(this).closest('li'));
                    } else {
                        $selfRef.closeUp($(this).closest('.' + CFW_Widget_Dropdown.CLASSES.hasSubMenu));
                    }
                });
            }
        },

        navEnableHover : function() {
            var $selfRef = this;
            if (!this.settings.isTouch) {
                $.each([this.$triggerElm, this.$menuElm, this.$menuElm.find('.' + CFW_Widget_Dropdown.CLASSES.hasSubMenu)], function() {
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
            this.$triggerElm.off('.cfw.dropdown.modeHover');
            this.$menuElm.find('.' + CFW_Widget_Dropdown.CLASSES.hasSubMenu).off('.cfw.dropdown.modeHover');
        },

        navEnableKeyboard : function() {
            var $selfRef = this;

            // Auto-closing of inactive sub menus
            this.$menuElm.find('a').on('focus', function() {
                var $node = $(this);
                $selfRef.$menuElm.find('.' + CFW_Widget_Dropdown.CLASSES.hasSubMenu + '.open').each(function() {
                    // Ignore parents of item being focused - needed for nesting
                    if (!$(this).find($node).length) {
                        var $snode = $(this).children('a');
                        var $ssubNode = $node.parent().find('ul').eq(0);
                        $selfRef.hideMenu(null, $snode, $ssubNode);
                    }
                });
            });

            // Key handling
            $.each([this.$triggerElm, this.$menuElm, this.$menuElm.find('.' + CFW_Widget_Dropdown.CLASSES.hasSubMenu)], function() {
                $(this).on('keydown.cfw.dropdown', function(e) {
                    $selfRef._actionsKeydown(e, this);
                });
            });
        },

        toggleMenu : function(e, $nodeTrigger, $nodeMenu) {
            if ($nodeTrigger.is('.disabled, :disabled')) { return; }

            // var $node = $(node);
            // var $subNode = $node.parent().find('ul').eq(0);

            var $parent  = getParent($nodeTrigger);
            var showing = $parent.hasClass('open');

            // Check to see if link should be followed (subMenu open and link is not '#')
            var nodeHref = $nodeTrigger.attr('href');
            if (nodeHref && !(/^#$/.test(nodeHref)) && showing) {
                clearMenus();
                return;
            }

            if (e) {
                e.stopPropagation();
            }
            if ($nodeTrigger.parent().is('.disabled, :disabled')) { return; }

            if (!showing) {
                this.showMenu(e, $nodeTrigger, $nodeMenu);
            } else {
                this.hideMenu(e, $nodeTrigger, $nodeMenu);
            }

            $nodeTrigger.trigger('focus');
        },

        showMenu : function(e, $nodeTrigger, $nodeMenu) {
            var $selfRef = this;

            if (e) {
                e.preventDefault();
            }
            var $parent  = getParent($nodeTrigger);
            var showing = $parent.hasClass('open');
            if (showing) { return; }

            if (!this._trigger($nodeTrigger, 'beforeShow.cfw.dropdown')) {
                return;
            }

            if ($nodeTrigger.is(this.$triggerElm)) {
                if (this.settings.isTouch) {
                    $('.' + this.c.backdrop).remove();
                    $(document.createElement('div'))
                        .addClass(this.c.backdrop)
                        .insertAfter(this.$menuElm)
                        .on('click', clearMenus);
                }
                clearMenus();
                if (!$parent.hasClass('hover')) {
                    $nodeTrigger.trigger('focus');
                }
            }

            // Find other open sub menus and close them
            this.$menuElm.find('.' + CFW_Widget_Dropdown.CLASSES.hasSubMenu + '.open').each(function() {
                // Ignore parents of item to be shown - needed for nesting
                if (!$(this).find($nodeTrigger).length) {
                    var $snode = $(this).children('a');
                    var $ssubNode = $nodeTrigger.parent().find('ul').eq(0);
                    $selfRef.hideMenu(null, $snode, $ssubNode);
                }
            });

            $parent.addClass('open');
            $nodeTrigger.attr('aria-expanded', 'true');
            $nodeMenu.removeAttr('aria-hidden')
                .children('li').not('.disabled, :disabled');
            //  .children('a').attr('tabIndex', 0);
            this.$menuElm.find('li').redraw();

            this._trigger($nodeTrigger, 'afterShow.cfw.dropdown');
        },

        hideMenu : function(e, $nodeTrigger, $nodeMenu) {
            if (e) {
                e.preventDefault();
            }

            var $parent  = getParent($nodeTrigger);
            var showing = $parent.hasClass('open');
            if (!showing) { return; }

            if (!this._trigger($nodeTrigger, 'beforeHide.cfw.dropdown')) {
                return;
            }

            if ($nodeTrigger.is(this.$triggerElm)) {
                $('.' + this.c.backdrop).remove();
            }

            // Find open sub menus
            var openSubMenus = $nodeMenu.find('.' + CFW_Widget_Dropdown.CLASSES.hasSubMenu + '.open');
            if (openSubMenus.length) {
                var openSubMenusRev = openSubMenus.toArray().reverse();
                for (var i = 0; i < openSubMenusRev.length; i++) {
                    var $node = $(openSubMenusRev[i]).children('a');
                    var $subNode = $node.parent().find('ul').eq(0);
                    this.hideMenu(null, $node, $subNode);
                }
            }

            $parent.removeClass('open');
            $nodeTrigger.attr('aria-expanded', 'false');
            $nodeMenu.attr('aria-hidden', 'true')
                .find('a').attr('tabIndex', -1);
            if (!$parent.hasClass('hover')) {
                $nodeTrigger.trigger('focus');
            }
            $parent.removeClass('hover');
            this._trigger($nodeTrigger, 'afterHide.cfw.dropdown');
        },

        toggle : function() {
            this.toggleMenu(null, this.$triggerElm, this.$menuElm);
        },

        show : function() {
            this.showMenu(null, this.$triggerElm, this.$menuElm);
        },

        hide : function() {
            this.hideMenu(null, this.$triggerElm, this.$menuElm);
        },

        hideRev : function() {
            this.hideMenu(null, this.$triggerElm, this.$menuElm);
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
            if (!$parent.hasClass('hover')) {
                $node.trigger('focus');
            }
            $parent.removeClass('hover');
        },

        _actionsKeydown : function(e, node) {
            // 37-left, 38-up, 39-right, 40-down, 27-esc, 32-space, 9-tab
            if (!/(37|38|39|40|27|32|9)/.test(e.which)) { return; }

            var $node = $(node);
            var $items = null;

            // Close menu when tab pressed, move to next item
            if (e.which == 9) {
                clearMenus();
                return;
            }

            e.stopPropagation();
            e.preventDefault();

            // Close current focused menu with ESC
            if (e.which == 27) {
                if ($node.is(this.$triggerElm) || $node.is(this.$menuElm)) {
                    this.hideMenu(null, this.$triggerElm, this.$menuElm);
                    return;
                }
                if ($node.hasClass(CFW_Widget_Dropdown.CLASSES.hasSubMenu)) {
                    this.closeUp($node);
                    return;
                }
            }

            // Arrow key navigation
            var $eTarget = $(e.target);
            var $parent = null;

            // Find parent menu
            if ($node.is(this.$triggerElm) || $node.is(this.$menuElm)) {
                $parent = this.$menuElm;
            } else {
                $parent = $eTarget.closest('.dropdown-menu');
            }

            $parent.removeClass('hover');

            // Up/Down
            if (e.which == 38 || e.which == 40) {
                if ($parent.is(':hidden')) {
                    this.showMenu(null, $node, $parent);
                    return;
                }

                $items = $parent.children('li:not(.disabled)').children('a:visible');
                if (!$items.length) { return; }

                // Find current focused menu item
                var index = $items.index(e.target);

                if (e.which == 38 && index > 0)                 { index--;   } // up
                if (e.which == 40 && index < $items.length - 1) { index++;   } // down
                if (!~index)                                    { index = 0; } // force first item

                $items.eq(index).trigger('focus');
            } // END - Up/Down

            // Left/Right
            if (e.which == 37 || e.which == 39) {
                // Only for children of menu
                if (!$.contains(this.$menuElm[0], $eTarget[0])) { return; }
                // Only if has submenu class
                if (!$eTarget.closest('li.dropdown-submenu')) { return; }

                // Open/close sub-menu as needed
                var $subMenuElm = $eTarget.parent().find('ul').eq(0);
                var $parMenuElm = $eTarget.closest('li.dropdown-submenu').parent('ul.dropdown-menu');
                var subHidden = $subMenuElm.is(':hidden');
                var parHidden = $parMenuElm.is(':hidden');

                if (e.which == 39 && subHidden) {
                    this.showMenu(null, $eTarget, $subMenuElm);
                    $items = $subMenuElm.children('li:not(.disabled)').children('a:visible');
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
            if ($node.is(this.$triggerElm)) {
                getParent($node).addClass('hover');
                this.showMenu(null, this.$triggerElm, this.$menuElm);
                return;
            }
            if ($node.hasClass(CFW_Widget_Dropdown.CLASSES.hasSubMenu)) {
                $node = $node.find('a').eq(0);
                var $subNode = $node.parent().find('ul').eq(0);
                getParent($node).addClass('hover');
                this.showMenu(null, $node, $subNode);
                return;
            }
        },

        _actionsHoverLeave : function(e, node) {
            var $selfRef = this;
            var $node = $(node);

            clearTimeout(this.timerHide);
            if ($node.is(this.$triggerElm) || $node.is(this.$menuElm)) {
                this.timerHide = setTimeout(function() {
                    $selfRef.timerHide = null;
                    $selfRef.hideMenu(null, $selfRef.$triggerElm, $selfRef.$menuElm);
                }, this.settings.delay);
                return;
            }
            if ($node.hasClass(CFW_Widget_Dropdown.CLASSES.hasSubMenu)) {
                $node = $node.find('a').eq(0);
                var $subNode = $node.find('ul').eq(0);

                this.timerHide = setTimeout(function() {
                    $selfRef.timerHide = null;
                    $selfRef.hideMenu(null, $node, $subNode);
                }, $selfRef.settings.delay);
                return;
            }
        },

        _getID : function($node, prefix) {
            var nodeID = $node.attr('id');
            if (nodeID === undefined) {
                do nodeID = prefix + '-' + ~~(Math.random() * 1000000);
                while (document.getElementById(nodeID));
                $node.attr('id', nodeID);
            }
            return nodeID;
        },

        _parseDataAttr : function() {
            var parsedData = {};
            var data = this.$triggerElm.data();

            if (typeof data.cfwDropdownToggle   !== 'undefined') { parsedData.toggle   = data.cfwDropdownToggle;    }
            if (typeof data.cfwDropdownDelay    !== 'undefined') { parsedData.delay    = data.cfwDropdownDelay;     }
            if (typeof data.cfwDropdownHover    !== 'undefined') { parsedData.hover    = data.cfwDropdownHover;     }
            if (typeof data.cfwDropdownBacklink !== 'undefined') { parsedData.backlink = data.cfwDropdownBacklink;  }
            if (typeof data.cfwDropdownBacktop  !== 'undefined') { parsedData.backtop  = data.cfwDropdownBacktop;   }
            if (typeof data.cfwDropdownBacktext !== 'undefined') { parsedData.backtext = data.cfwDropdownBacktext;  }
            return parsedData;
        },

        _trigger : function($callingElm, eventName) {
            var e = $.Event(eventName);
            $callingElm.trigger(e);
            if (e.isDefaultPrevented()) {
                return false;
            }
            return true;
        }
    };

    /*
    $.fn.redraw = function(){
        $(this).each(function(){
            var redraw = this.offsetHeight;
        });
    };
    */
    // Force [lte IE 10] to redraw to correct layout
    // Also force Edge reflow - using bad UA test and method
    // TODO: Need to revisit this to find better options
    // Note: Parent element must be visible in order to redraw
    $.fn.redraw = function() {
        // if ((document.documentMode || 100) <= 10) {
        if (document.documentMode !== undefined){
            return this.hide(0, function() {$(this).show(); $(this).css('display', ''); });
        } else if (/Edge\/\d+/.test(navigator.userAgent)) {
            $(this).css('list-style', 'none').css('list-style', '');
        }
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
