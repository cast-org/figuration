/**
 * --------------------------------------------------------------------------
 * Figuration (v3.0.0-alpha.1): alert.js
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

            if (this.settings.animate) {
                this.$parent.addClass('fade in');
            }

            this.$parent
                .on('click.cfw.alert', dismiss, function() {
                    $selfRef.close();
                })
                .data('cfw.alert', this)
                .find(dismiss).data('cfw.alert', this)
                .CFW_trigger('init.cfw.alert');
        },

        close : function(e) {
            var $selfRef = this;

            if (e) e.preventDefault();

            if (this.inTransition) { return; }

            if (!this.$parent.CFW_trigger('beforeClose.cfw.alert')) {
                return;
            }

            this.inTransition = 1;

            function removeElement() {
                // Detach from parent, fire event then clean up data
                $selfRef.$parent
                    .detach()
                    .CFW_trigger('afterClose.cfw.alert');
                $selfRef.$parent.remove();
                $selfRef.inTransition = 0;
            }

            this.$parent
                .removeClass('in')
                .CFW_transition(null, removeElement);
        },

        findParent : function() {
            var selector = this.settings.target;
            var $parent = null;

            if (!selector) {
                selector = this.$element.attr('href');
            }

            $parent = $(selector === '#' ? [] : selector);
            if (!$parent.length) {
                $parent = this.$element.closest('.alert');
            }

            this.$parent = $parent;
        },

        dispose : function() {
            this.$parent.off('.cfw.alert');
            this.$element.removeData('cfw.alert');

            this.$element = null;
            this.$parent = null;
            this.inTransition = null;
            this.settings = null;
        }
    };

    function Plugin(option) {
        var args = [].splice.call(arguments, 1);
        return this.each(function() {
            var $this = $(this);
            var data = $this.data('cfw.alert');
            var options = typeof option === 'object' && option;

            if (!data) {
                $this.data('cfw.alert', (data = new CFW_Widget_Alert(this, options)));
            }
            if (typeof option === 'string') {
                data[option].apply(data, args);
            }
        });
    }

    $.fn.CFW_Alert = Plugin;
    $.fn.CFW_Alert.Constructor = CFW_Widget_Alert;

    // API
    // ===
    if (typeof CFW_API === 'undefined' || CFW_API !== false) {
        $(document).on('click.cfw.alert', dismiss, function() {
            $(this).CFW_Alert('close');
        });
    }
})(jQuery);
