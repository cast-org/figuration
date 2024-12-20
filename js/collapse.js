/**
 * --------------------------------------------------------------------------
 * Figuration (v4.4.1): collapse.js
 * Licensed under MIT (https://github.com/cast-org/figuration/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

(function($) {
    'use strict';

    var CFW_Widget_Collapse = function(element, options) {
        this.$element = $(element);
        this.$target = null;
        this.$triggers = null;
        this.inTransition = false;

        var parsedData = this.$element.CFW_parseData('collapse', CFW_Widget_Collapse.DEFAULTS);
        this.settings = $.extend({}, CFW_Widget_Collapse.DEFAULTS, parsedData, options);

        this._init();
    };

    CFW_Widget_Collapse.DEFAULTS = {
        target     : null,
        animate    : true,  // If collapse targets should expand and contract
        follow     : false, // If browser focus should move when a collapse toggle is activated
        horizontal : false  // If collapse should transition horizontal (vertical is default)
    };

    CFW_Widget_Collapse.prototype = {

        _init : function() {
            var selector = this.$element.CFW_getSelectorFromChain('collapse', this.settings.target);
            if (!selector) { return; }
            this.$target = $(selector);

            this.$element.attr({
                'data-cfw': 'collapse',
                'data-cfw-collapse-target': selector
            });

            // Build trigger collection
            this.$triggers = $('[data-cfw="collapse"][data-cfw-collapse-target="' + selector + '"],' +
                '[data-cfw="collapse"][href="' + selector + '"]');

            // Check for presence of trigger id - set if not present
            // var triggerID = this.$element.CFW_getID('cfw-collapse');

            // A button can control multiple boxes so we need to id each on box individually
            var targetList = '';

            this.$target.each(function() {
                var tempID = $(this).CFW_getID('cfw-collapse');
                targetList += tempID + ' ';
            });
            // Set ARIA on trigger
            this.$triggers.attr('aria-controls', $.trim(targetList));

            // Determine default state
            var dimension = this.dimension();
            if (this.$triggers.hasClass('open')) {
                this.$triggers.attr('aria-expanded', 'true');
                this.$target.addClass('collapse in')[dimension]('');
            } else {
                this.$triggers.attr('aria-expanded', 'false');
                this.$target.addClass('collapse');
            }

            if (this.settings.horizontal) {
                this.$target.addClass('width');
            }

            // Bind click handler
            this.$element
                .on('click.cfw.collapse', this.toggle.bind(this))
                .CFW_trigger('init.cfw.collapse');
        },

        toggle : function(e) {
            // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
            if (e.target.tagName === 'A' || (e.delegateTarget && e.delegateTarget.tagName === 'A')) {
                e.preventDefault();
            }

            if (this.$element.hasClass('open') || this.$target.hasClass('in')) {
                this.hide();
            } else {
                this.show();
            }
        },

        dimension : function() {
            var hasWidth = this.$target.hasClass('width');
            if (hasWidth || this.settings.horizontal) {
                return 'width';
            }
            return 'height';
        },

        show : function(follow) {
            var $selfRef = this;
            if (typeof follow === 'undefined') { follow = this.settings.follow; }

            // Bail if transition in progress
            if (this.inTransition || this.$target.hasClass('in')) { return; }

            // Start open transition
            if (!this.$element.CFW_trigger('beforeShow.cfw.collapse')) {
                return;
            }

            var dimension = this.dimension();

            this.inTransition = true;
            this.$triggers.addClass('open');

            this.$target.removeClass('collapse')[dimension](0);
            if (this.settings.animate) {
                this.$target.addClass('collapsing');
            }

            var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
            var scrollSize = 'scroll' + capitalizedDimension;

            // Determine/set dimension size for each target (triggers the transition)
            var start = function() {
                $selfRef.$target.each(function() {
                    $(this)[dimension]($(this)[0][scrollSize]);
                });
            };

            var complete = function() {
                $selfRef.$triggers.attr('aria-expanded', 'true');
                $selfRef.$target
                    .removeClass('collapsing')[dimension]('');
                $selfRef.$target.addClass('collapse in');
                $selfRef.$target.CFW_mutateTrigger();
                $selfRef.inTransition = false;
                if (follow) {
                    if (typeof $selfRef.$target.first().attr('tabindex') === 'undefined') {
                        $selfRef.$target.first().attr('tabindex', '-1');
                    }
                    $selfRef.$target.eq(0).trigger('focus');
                }
                $selfRef.$element.CFW_trigger('afterShow.cfw.collapse');
            };

            // Bind transition callback to first target
            this.$target.eq(0).CFW_transition(start, complete);
        },

        hide : function(follow) {
            var $selfRef = this;

            if (typeof follow === 'undefined') { follow = this.settings.follow; }

            // Bail if transition in progress
            if (this.inTransition || !this.$target.hasClass('in')) { return; }

            // Start close transition
            if (!this.$element.CFW_trigger('beforeHide.cfw.collapse')) {
                return;
            }

            var dimension = this.dimension();

            this.inTransition = true;
            this.$triggers.removeClass('open');

            // Set dimension size and reflow before class changes for Chrome/Webkit or no animation occurs
            this.$target.each(function() {
                var $this = $(this);
                return $this[dimension]($this[dimension]())[0].offsetHeight;
            });
            this.$target.removeClass('collapse in');
            if (this.settings.animate) {
                this.$target.addClass('collapsing');
            }

            // Determine/unset dimension size for each target (triggers the transition)
            var start = function() {
                $selfRef.$target[dimension]('');
            };

            var complete = function() {
                $selfRef.$triggers.attr('aria-expanded', 'false');
                $selfRef.$target
                    .removeClass('collapsing in')
                    .addClass('collapse')
                    .CFW_mutateTrigger();
                $selfRef.inTransition = false;
                if (follow) {
                    $selfRef.$element.trigger('focus');
                }
                $selfRef.$element.CFW_trigger('afterHide.cfw.collapse');
            };

            // Bind transition callback to first target
            this.$target.eq(0).CFW_transition(start, complete);
        },

        animDisable : function() {
            this.settings.animate = false;
        },

        animEnable: function() {
            this.settings.animate = true;
        },

        dispose : function() {
            this.$element
                .off('.cfw.collapse')
                .removeData('cfw.collapse');

            this.$element = null;
            this.$target = null;
            this.$triggers = null;
            this.inTransition = null;
            this.settings = null;
        }
    };

    var Plugin = function(option) {
        var args = [].splice.call(arguments, 1);
        return this.each(function() {
            var $this = $(this);
            var data = $this.data('cfw.collapse');
            var options = typeof option === 'object' && option;

            if (!data) {
                $this.data('cfw.collapse', data = new CFW_Widget_Collapse(this, options));
            }
            if (typeof option === 'string') {
                data[option].apply(data, args);
            }
        });
    };

    $.fn.CFW_Collapse = Plugin;
    $.fn.CFW_Collapse.Constructor = CFW_Widget_Collapse;
}(jQuery));
