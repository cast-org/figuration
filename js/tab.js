/**
 * --------------------------------------------------------------------------
 * Figuration (v4.0.0): tab.js
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

            if (!this.$target.length) { return; }

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
                'aria-controls': this.$target.attr('id')
            });
            this.$element.parent('li').attr('role', 'presentation');

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
                    'aria-selected': 'true'
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
                    'aria-selected': 'true'
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

            if (this.$element.hasClass('active') ||
                this.$element.hasClass('disabled') ||
                this.$element[0].hasAttribute('disabled')) {
                return;
            }

            var $previous = this.$navElm.find('.active');
            var eventHideResult;
            var eventShowResult;

            if ($previous.length) {
                eventHideResult = $previous.last().CFW_trigger('beforeHide.cfw.tab', {
                    relatedTarget: this.$element[0]
                });
            }

            eventShowResult = this.$element.CFW_trigger('beforeShow.cfw.tab', {
                relatedTarget: $previous.last()[0]
            });

            if (!eventHideResult || !eventShowResult) {
                return;
            }

            if ($previous.length) {
                $previous
                    .attr({
                        'tabindex': -1,
                        'aria-selected': 'false'
                    });
            }

            this.$element.attr({
                'tabindex': 0,
                'aria-selected': 'true'
            });

            this._activateTab();
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
            var KEYCODE_UP = 38;    // Arrow up
            var KEYCODE_RIGHT = 39; // Arrow right
            var KEYCODE_DOWN = 40;  // Arrow down
            var KEYCODE_LEFT = 37;  // Arrow left
            var REGEX_KEYS = new RegExp('^(' + KEYCODE_UP + '|' + KEYCODE_RIGHT + '|' + KEYCODE_DOWN + '|' + KEYCODE_LEFT + ')$');

            if (!REGEX_KEYS.test(e.which)) { return; }

            e.stopPropagation();
            e.preventDefault();

            var $node = $(node);
            var $list = $node.closest('[role="tablist"]');
            var $items = $list.find('[role="tab"]:visible').not('.disabled');
            var index = $items.index($items.filter('[aria-selected="true"]'));

            if ((e.which === KEYCODE_UP || e.which === KEYCODE_LEFT) && index > 0) { index--; } // up & left
            if ((e.which === KEYCODE_RIGHT || e.which === KEYCODE_DOWN) && index < $items.length - 1) { index++; } // down & right
            /* eslint-disable-next-line no-bitwise */
            if (!~index) { index = 0; }   // force first item

            var nextTab = $items.eq(index);
            nextTab.CFW_Tab('show').trigger('focus');
        },

        _activateTab : function() {
            var $selfRef = this;
            var $items = this.$navElm.find('[role="tab"]');
            var $previous = this.$navElm.find('[role="tab"].active');

            $items.removeClass('active');
            $items.each(function() {
                var $pane = $(this).data('cfw.tab').$target;
                $pane.removeClass('active in');
            });

            if (this.settings.animate) {
                this.animEnable();
            } else {
                this.animDisable();
            }

            this.$element.addClass('active');
            this.$target.addClass('active');

            var complete = function() {
                $previous.last().CFW_trigger('afterHide.cfw.tab', {
                    relatedTarget: $selfRef.$element[0]
                });
                $selfRef.$element.CFW_trigger('afterShow.cfw.tab', {
                    relatedTarget: $previous.last()[0]
                });
                $selfRef.$element.CFW_mutateTrigger();
                $selfRef.$target.CFW_mutateTrigger();
            };

            if (this.settings.animate) {
                this.$target.CFW_transition(null, complete);
                $.CFW_reflow(this.$target); // Reflow for transition
                this.$target.addClass('in');
            } else {
                complete();
            }
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

    var Plugin = function(option) {
        var args = [].splice.call(arguments, 1);
        return this.each(function() {
            var $this = $(this);
            var data = $this.data('cfw.tab');
            var options = typeof option === 'object' && option;

            if (!data) {
                $this.data('cfw.tab', data = new CFW_Widget_Tab(this, options));
            }
            if (typeof option === 'string') {
                data[option].apply(data, args);
            }
        });
    };

    $.fn.CFW_Tab = Plugin;
    $.fn.CFW_Tab.Constructor = CFW_Widget_Tab;
}(jQuery));
