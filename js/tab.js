/**
 * --------------------------------------------------------------------------
 * Figuration (v2.0.0): tab.js
 * Licensed under MIT (https://github.com/cast-org/figuration/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

(function($) {
    'use strict';

    var CFW_Widget_Tab = function(element, options) {
        this.$triggerElm = $(element);
        this.$navElm = null;
        this.$targetElm = null;

        this.settings = $.extend({}, CFW_Widget_Tab.DEFAULTS, this._parseDataAttr(), options);

        this._init();
    };

    CFW_Widget_Tab.DEFAULTS = {
        animate     : true,     // If tabs should be allowed fade in and out
        speed       : 150,      // Speed of animation in milliseconds
        hidden      : true      // Use aria-hidden on target containers by default
    };

    CFW_Widget_Tab.prototype = {

        _init : function() {
            var $selfRef = this;

            // Find nav and target elements
            this.$navElm = this.$triggerElm.closest('ul:not(.dropdown-menu)');
            this.$navElm.attr('role', 'tablist');

            var $selector = $(this.settings.target);
            if (!$selector.length) {
                $selector = $(this.$triggerElm.attr('href'));
            }
            this.$targetElm = $($selector);

            if (!this.$targetElm.length) {
                return false;
            }

            this.$triggerElm.attr('data-cfw', 'tab');

            // Check for presence of trigger id - set if not present
            var triggerID = this._getID(this.$triggerElm, 'cfw-tab');

            // Target should have id already - set ARIA attributes
            this.$targetElm.attr({
                'tabindex': -1,
                'role': 'tabpanel',
                'aria-labelledby': triggerID
            });
            if (this.settings.hidden) {
                this.$targetElm.attr('aria-hidden', true);
            }
            if (this.settings.animate) {
                this.fadeEnable();
            } else {
                this.fadeDisable();
            }

            // Set ARIA attributes on trigger
            this.$triggerElm.attr({
                'tabindex': -1,
                'role': 'tab',
                'aria-selected': 'false',
                'aria-expanded': 'false',
                'aria-controls': this.$targetElm.attr('id')
            });

            // Bind click handler
            this.$triggerElm.on('click', function(e) {
                $selfRef.show(e);
            });

            // Bind key handler
            this.$triggerElm.on('keydown', function(e) {
                $selfRef._actionsKeydown(e, this);
            });

            // Display panel if trigger is marked active
            if (this.$triggerElm.closest('li').hasClass('active')) {
                this.$triggerElm.attr({
                    'tabindex': 0,
                    'aria-selected': 'true',
                    'aria-expanded': 'true'
                });
                this.$targetElm.attr('tabindex', 0)
                    .addClass('active');

                if (this.settings.hidden) {
                    this.$targetElm.attr('aria-hidden', false);
                }
                if (this.settings.animate) {
                    this.$targetElm.addClass('in');
                }
            }

            // Check to see if there is an active element defined - if not set current one as active
            if (this.$navElm.find('li.active').length <= 0) {
                this.$triggerElm.closest('li').addClass('active');

                if (this.$triggerElm.parent('.dropdown-menu').length) {
                    this.$triggerElm.closest('li.dropdown').addClass('active');
                }

                this.$triggerElm.attr({
                    'tabindex': 0,
                    'aria-selected': 'true',
                    'aria-expanded': 'true'
                });
                this.$targetElm.attr('tabindex', 0)
                    .addClass('active');

                if (this.settings.hidden) {
                    this.$targetElm.attr('aria-hidden', 'false');
                }
                if (this.settings.animate) {
                    this.$targetElm.addClass('in');
                }
            }

            this._trigger(this.$triggerElm, 'init.cfw.tab');
        },

        show : function(e) {
            if (e) {
                e.preventDefault();
            }

            if (this.$triggerElm.parent('li').hasClass('active')
                || this.$triggerElm.hasClass('disabled')
                || this.$triggerElm[0].hasAttribute('disabled')) {
                return;
            }

            var $previous = this.$navElm.find('.active:last a[data-cfw="tab"]');
            if ($previous.length) {

                if (!this._trigger($previous, 'beforeHide.cfw.tab', { relatedTarget: this.$triggerElm[0] })) {
                    return;
                }
            }

            if (!this._trigger(this.$triggerElm, 'beforeShow.cfw.tab', { relatedTarget: $previous[0] })) {
                return;
            }

            if ($previous.length) {
                $previous.attr({
                    'tabindex': -1,
                    'aria-selected': 'false',
                    'aria-expanded': 'false'
                });
                this._trigger($previous, 'afterHide.cfw.tab', { relatedTarget: this.$triggerElm[0] });
                // Following line for backwards compatibility (not sure if used anywhere)
                this._trigger($previous, 'hide.cfw.tab');
            }

            this.$triggerElm.attr({
                'tabindex': 0,
                'aria-selected': 'true',
                'aria-expanded': 'true'
            });

            this._activateTab(this.$triggerElm.closest('li'), this.$navElm, false, $previous);
            this._activateTab(this.$targetElm, this.$targetElm.parent(), true, $previous);
        },

        fadeEnable : function() {
            if (!$.support.transitionEnd) { return; }
            this.$targetElm.addClass('fade');
            if (this.$targetElm.hasClass('active')) {
                this.$targetElm.addClass('in');
            }
            this.settings.animate = true;
        },

        fadeDisable : function() {
            this.$targetElm.removeClass('fade in');
            if (this.$targetElm.hasClass('active')) {
                this.$targetElm.addClass('in');
            }
            this.settings.animate = false;
        },

        hiddenDisable : function() {
            this.$targetElm.removeAttr('aria-hidden');
            this.settings.hidden = false;
        },

        _actionsKeydown : function(e, node) {
            // 37-left, 38-up, 39-right, 40-down
            var k = e.which;
            if (!/(37|38|39|40)/.test(k)) { return; }

            e.stopPropagation();
            e.preventDefault();

            var $node = $(node);
            var $ul = $node.closest('ul[role="tablist"]');
            var $items = $ul.find('[role="tab"]:visible');
            var index = $items.index($items.filter('[aria-selected="true"]'));

            if ((k == 38 || k == 37) && index > 0)                 { index--; }     // up & left
            if ((k == 39 || k == 40) && index < $items.length - 1) { index++; }     // down & right
            if (!~index)                                           { index = 0; }   // force first item

            var nextTab = $items.eq(index);
            nextTab.CFW_Tab('show').trigger('focus');
        },

        _activateTab : function(node, container, isPanel, $previous) {
            var $selfRef = this;
            var $prevActive = container.find('> .active');
            var doTransition = isPanel && $.support.transitionEnd && this.settings.animate;

            function displayTab() {
                $prevActive.removeClass('active')
                    .find('> .dropdown-menu > .active')
                    .removeClass('active');

                node.addClass('active');

                if (isPanel) {
                    $prevActive.attr({
                        'tabindex': -1,
                        'aria-hidden': 'true'
                    });
                    node.attr({
                        'tabindex': 0,
                        'aria-hidden': 'false'
                    });
                }

                if (doTransition) {
                    node[0].offsetWidth; // Reflow for transition
                    node.addClass('in');
                } else {
                    if (isPanel) {
                        $selfRef.settings.animate = false;
                    }
                    node.removeClass('fade');
                }

                if (node.parent('.dropdown-menu').length) {
                    node.closest('li.dropdown').addClass('active');
                }

                if (isPanel) {
                    $selfRef._trigger($selfRef.$triggerElm, 'afterShow.cfw.tab', { relatedTarget: $previous[0] });
                }
            }

            if (doTransition) {
                node.one('cfwTransitionEnd', displayTab)
                .CFW_emulateTransitionEnd(this.settings.speed);
            } else {
                displayTab();
            }

            $prevActive.removeClass('in');
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

            if (typeof data.cfwTabTarget  !== 'undefined') { parsedData.target  = data.cfwTabTarget;  }
            if (typeof data.cfwTabAnimate !== 'undefined') { parsedData.animate = data.cfwTabAnimate; }
            if (typeof data.cfwTabSpeed   !== 'undefined') { parsedData.speed   = data.cfwTabSpeed;   }
            if (typeof data.cfwTabHidden  !== 'undefined') { parsedData.hidden  = data.cfwTabHidden;  }
            return parsedData;
        },

        _trigger : function($callingElm, eventName, extraData) {
            var e = $.Event(eventName);
            if ($.isPlainObject(extraData)) {
                e = $.extend({}, e, extraData);
            }
            $callingElm.trigger(e);
            if (e.isDefaultPrevented()) {
                return false;
            }
            return true;
        }
    };

    function Plugin(option) {
        var args = [].splice.call(arguments, 1);
        return this.each(function() {
            var $this = $(this);
            var data = $this.data('cfw.tab');
            var options = typeof option === 'object' && option;

            if (!data) {
                $this.data('cfw.tab', (data = new CFW_Widget_Tab(this, options)));
            }
            if (typeof option === 'string') {
                data[option].apply(data, args);
            }
        });
    }

    $.fn.CFW_Tab = Plugin;
    $.fn.CFW_Tab.Constructor = CFW_Widget_Tab;

})(jQuery);
