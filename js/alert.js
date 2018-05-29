/**
 * --------------------------------------------------------------------------
 * Figuration (v4.0.0-alpha.0): alert.js
 * Licensed under MIT (https://github.com/cast-org/figuration/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

(function($) {
    'use strict';

    var dismiss = '[data-cfw-dismiss="alert"]';

    var CFW_Widget_Alert = function(element, options) {
        this.$element = $(element);
        this.$parent = null;
        this.inTransition = null;

        var parsedData = this.$element.CFW_parseData('alert', CFW_Widget_Alert.DEFAULTS);
        this.settings = $.extend({}, CFW_Widget_Alert.DEFAULTS, parsedData, options);

        this._init();
    };

    CFW_Widget_Alert.DEFAULTS = {
        target  : null,
        animate : true  // If alert targets should fade out
    };

    CFW_Widget_Alert.prototype = {

        _init : function() {
            var $selfRef = this;

            this.findParent();

            this.$element
                .data('cfw.alert', this)
                .on('click.cfw.alert', function(e) {
                    e.preventDefault();
                    $selfRef.close();
                });

            this.$parent
                .CFW_trigger('init.cfw.alert');
        },

        close : function(e) {
            var $selfRef = this;

            if (e) { e.preventDefault(); }

            if (this.inTransition) { return; }

            if (!this.$parent.CFW_trigger('beforeClose.cfw.alert')) {
                return;
            }

            if (this.settings.animate) {
                this.$parent.addClass('fade in');
            }

            this.inTransition = 1;

            var removeElement = function() {
                // Detach from parent, fire event then clean up data
                $selfRef.$parent
                    .detach()
                    .CFW_trigger('afterClose.cfw.alert');
                $selfRef.$parent.remove();
                $selfRef.inTransition = 0;
            };

            this.$parent
                .removeClass('in')
                .CFW_mutateTrigger()
                .CFW_transition(null, removeElement);
        },

        findParent : function() {
            var selector = this.$element.CFW_getSelectorFromChain('alert', this.settings.target);
            if (selector) {
                this.$parent = $(selector);
            } else {
                this.$parent = this.$element.closest('.alert');
            }
        },

        dispose : function() {
            this.$element
                .off('.cfw.alert')
                .removeData('cfw.alert');

            this.$element = null;
            this.$parent = null;
            this.inTransition = null;
            this.settings = null;
        }
    };

    var Plugin = function(option) {
        var args = [].splice.call(arguments, 1);
        return this.each(function() {
            var $this = $(this);
            var data = $this.data('cfw.alert');
            var options = typeof option === 'object' && option;

            if (!data) {
                $this.data('cfw.alert', data = new CFW_Widget_Alert(this, options));
            }
            if (typeof option === 'string') {
                data[option].apply(data, args);
            }
        });
    };

    $.fn.CFW_Alert = Plugin;
    $.fn.CFW_Alert.Constructor = CFW_Widget_Alert;

    // API
    // ===
    if (typeof CFW_API === 'undefined' || CFW_API !== false) {
        $(document).on('click.cfw.alert', dismiss, function() {
            $(this).CFW_Alert('close');
        });
    }
}(jQuery));
