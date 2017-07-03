/**
 * --------------------------------------------------------------------------
 * Figuration (v3.0.0-beta.1): tab.js
 * Licensed under MIT (https://github.com/cast-org/figuration/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

(function($) {
    'use strict';

    var CFW_Widget_Tab = function(element, options) {
        this.$element = $(element);
        this.$target = null;
        this.$navElm = null;

        var parsedData = this.$element.CFW_parseData('tab', CFW_Widget_Tab.DEFAULTS);
        this.settings = $.extend({}, CFW_Widget_Tab.DEFAULTS, parsedData, options);

        this._init();
    };

    CFW_Widget_Tab.DEFAULTS = {
        target  : null,
        animate : true // If tabs should be allowed fade in and out
    };

    CFW_Widget_Tab.prototype = {
        _init : function() {
            var $selfRef = this;

            // Find nav and target elements
            this.$navElm = this.$element.closest('ul, ol, nav');
            this.$navElm.attr('role', 'tablist');

            var $selector = $(this.settings.target);
            if (!$selector.length) {
                $selector = $(this.$element.attr('href'));
            }
            this.$target = $($selector);

            if (!this.$target.length) {
                return false;
            }

            this.$element.attr('data-cfw', 'tab');

            // Check for presence of trigger id - set if not present
            var triggerID = this.$element.CFW_getID('cfw-tab');

            // Target should have id already - set ARIA attributes
            this.$target.attr({
                'role': 'tabpanel',
                'aria-labelledby': triggerID
            });
            if (this.settings.animate) {
                this.animEnable();
            } else {
                this.animDisable();
            }

            // Set ARIA attributes on trigger
            this.$element.attr({
                'tabindex': -1,
                'role': 'tab',
                'aria-selected': 'false',
                'aria-expanded': 'false',
                'aria-controls': this.$target.attr('id')
            });

            // Bind click handler
            this.$element.on('click.cfw.tab', function(e) {
                e.preventDefault();
                $selfRef.show(e);
            });

            // Bind key handler
            this.$element.on('keydown.cfw.tab', function(e) {
                $selfRef._actionsKeydown(e, this);
            });

            // Display panel if trigger is marked active
            if (this.$element.hasClass('active')) {
                this.$element.attr({
                    'tabindex': 0,
                    'aria-selected': 'true',
                    'aria-expanded': 'true'
                });
                this.$target.addClass('active');

                if (this.settings.animate) {
                    this.$target.addClass('in');
                }
            }

            // Check to see if there is an active element defined - if not set current one as active
            if (this.$navElm.find('.active').length <= 0) {
                this.$element.addClass('active');

                this.$element.attr({
                    'tabindex': 0,
                    'aria-selected': 'true',
                    'aria-expanded': 'true'
                });
                this.$target.addClass('active');

                if (this.settings.animate) {
                    this.$target.addClass('in');
                }
            }

            this.$element.CFW_trigger('init.cfw.tab');
        },

        show : function(e) {
            if (e) {
                e.preventDefault();
            }

            var inTransition = this.$navElm.data('cfw.tab.inTransition');
            if (inTransition) { return; }

            if (this.$element.hasClass('active')
                || this.$element.hasClass('disabled')
                || this.$element[0].hasAttribute('disabled')) {
                return;
            }

            var $previous = this.$navElm.find('.active:last');
            if ($previous.length) {
                if (!$previous.CFW_trigger('beforeHide.cfw.tab', { relatedTarget: this.$element[0] })) {
                    return;
                }
            }

            if (!this.$element.CFW_trigger('beforeShow.cfw.tab', { relatedTarget: $previous[0] })) {
                return;
            }

            this.$navElm.data('cfw.tab.inTransition', true);

            if ($previous.length) {
                $previous.attr({
                        'tabindex': -1,
                        'aria-selected': 'false',
                        'aria-expanded': 'false'
                    })
                    .CFW_trigger('afterHide.cfw.tab', { relatedTarget: this.$element[0] });
            }

            this.$element.attr({
                'tabindex': 0,
                'aria-selected': 'true',
                'aria-expanded': 'true'
            });

            this._activateTab(this.$element, this.$navElm, false, $previous);
            this._activateTab(this.$target, this.$target.parent(), true, $previous);
        },

        animEnable : function() {
            this.$target.addClass('fade');
            if (this.$target.hasClass('active')) {
                this.$target.addClass('in');
            }
            this.settings.animate = true;
        },

        animDisable : function() {
            this.$target.removeClass('fade in');
            this.settings.animate = false;
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
            var $prevActive = container.find('.active');
            var doTransition = isPanel && this.settings.animate;

            if (doTransition) {
                $node[0].offsetWidth; // Reflow for transition
                $node.addClass('in');
            } else {
                if (isPanel) {
                    $selfRef.settings.animate = false;
                }
                $node.removeClass('fade');
            }

            function complete() {
                $prevActive.removeClass('active');
                $node.addClass('active');

                if (isPanel) {
                    $selfRef.$element.CFW_trigger('afterShow.cfw.tab', { relatedTarget: $previous[0] });
                    $node.CFW_mutateTrigger();
                    $prevActive.CFW_mutateTrigger();
                    $selfRef.$navElm.removeData('cfw.tab.inTransition');
                }
            }

            $node.CFW_transition(null, complete);

            $prevActive.removeClass('in');
        },

        dispose : function() {
            this.$element
                .off('.cfw.tab')
                .removeData('cfw.tab');

            this.$element = null;
            this.$target = null;
            this.$navElm = null;
            this.settings = null;

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
