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

        var parsedData = this.$triggerElm.CFW_parseData('tab', CFW_Widget_Tab.DEFAULTS);
        this.settings = $.extend({}, CFW_Widget_Tab.DEFAULTS, parsedData, options);

        this._init();
    };

    CFW_Widget_Tab.DEFAULTS = {
        target  : null,
        animate : true, // If tabs should be allowed fade in and out
        hidden  : true  // Use aria-hidden on target containers by default
    };

    CFW_Widget_Tab.prototype = {

        _init : function() {
            var $selfRef = this;

            // Find nav and target elements
            this.$navElm = this.$triggerElm.closest('ul, ol');
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
            var triggerID = this.$triggerElm.CFW_getID('cfw-tab');

            // Target should have id already - set ARIA attributes
            this.$targetElm.attr({
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
                this.$targetElm.addClass('active');

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
                this.$targetElm.addClass('active');

                if (this.settings.hidden) {
                    this.$targetElm.attr('aria-hidden', 'false');
                }
                if (this.settings.animate) {
                    this.$targetElm.addClass('in');
                }
            }

            this.$triggerElm.CFW_trigger('init.cfw.tab');
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
                if (!$previous.CFW_trigger('beforeHide.cfw.tab', { relatedTarget: this.$triggerElm[0] })) {
                    return;
                }
            }

            if (!this.$triggerElm.CFW_trigger('beforeShow.cfw.tab', { relatedTarget: $previous[0] })) {
                return;
            }

            if ($previous.length) {
                $previous.attr({
                        'tabindex': -1,
                        'aria-selected': 'false',
                        'aria-expanded': 'false'
                    })
                    .CFW_trigger('afterHide.cfw.tab', { relatedTarget: this.$triggerElm[0] });
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
            var $list = $node.closest('[role="tablist"]');
            var $items = $list.find('[role="tab"]:visible').not('.disabled');
            var index = $items.index($items.filter('[aria-selected="true"]'));

            if ((k == 38 || k == 37) && index > 0)                 { index--; }     // up & left
            if ((k == 39 || k == 40) && index < $items.length - 1) { index++; }     // down & right
            if (!~index)                                           { index = 0; }   // force first item

            var nextTab = $items.eq(index);
            nextTab.CFW_Tab('show').trigger('focus');
        },

        _activateTab : function($node, container, isPanel, $previous) {
            var $selfRef = this;
            var $prevActive = container.find('> .active');
            var doTransition = isPanel && this.settings.animate;

            function displayTab() {
                $prevActive.removeClass('active');

                $node.addClass('active');

                if (isPanel) {
                    $prevActive.attr('aria-hidden', 'true');
                    $node.attr('aria-hidden', 'false');
                }

                if (doTransition) {
                    $node[0].offsetWidth; // Reflow for transition
                    $node.addClass('in');
                } else {
                    if (isPanel) {
                        $selfRef.settings.animate = false;
                    }
                    $node.removeClass('fade');
                }

                if (isPanel) {
                    $selfRef.$triggerElm.CFW_trigger('afterShow.cfw.tab', { relatedTarget: $previous[0] });
                }
            }

            $node.CFW_transition(null, displayTab);

            $prevActive.removeClass('in');
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
