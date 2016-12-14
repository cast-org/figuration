/**
 * --------------------------------------------------------------------------
 * Figuration (v2.0.0): alert.js
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

        this.settings = $.extend({}, CFW_Widget_Alert.DEFAULTS, this._parseDataAttr(), options);

        this._init();
    };

    CFW_Widget_Alert.DEFAULTS = {
        animate     : true,     // If alert targets should fade out
        speed       : 150       // Speed of animation (milliseconds)
    };

    CFW_Widget_Alert.prototype = {

        _init : function() {
            var $selfRef = this;

            this.findParent();

            if (this.settings.animate) {
                this.$parent.addClass('fade in');
            }

            this.$parent.on('click.cfw.alert', dismiss, function() {
                $selfRef.close();
            });

            this.$parent.data('cfw.alert', this);
            this.$parent.find(dismiss).data('cfw.alert', this);

            this._trigger('init.cfw.alert');
        },

        close : function(e) {
            var $selfRef = this;

            if (e) e.preventDefault();

            if (this.inTransition) { return; }

            if (!this._trigger('beforeClose.cfw.alert')) {
                return;
            }

            this.inTransition = 1;

            function removeElement() {
                // Detach from parent, fire event then clean up data
                $selfRef.$parent.detach();
                $selfRef.inTransition = 0;
                $selfRef._trigger('afterClose.cfw.alert');
                $selfRef.$parent.remove();
            }

            this.$parent.removeClass('in');

            if ($.support.transitionEnd && this.$parent.hasClass('fade')) {
                this.$parent
                    .one('cfwTransitionEnd', $.proxy(removeElement, this))
                    .CFW_emulateTransitionEnd(this.settings.speed);
                return;
            }

            removeElement();
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

        _parseDataAttr : function() {
            var parsedData = {};
            var data = this.$element.data();

            if (typeof data.cfwAlertTarget  !== 'undefined') { parsedData.animate = data.cfwAlertTarget;  }
            if (typeof data.cfwAlertAnimate !== 'undefined') { parsedData.animate = data.cfwAlertAnimate; }
            if (typeof data.cfwAlertSpeed   !== 'undefined') { parsedData.speed   = data.cfwAlertSpeed;   }
            return parsedData;
        },

        _trigger : function(eventName) {
            var e = $.Event(eventName);
            this.$parent.trigger(e);
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
    $(document).on('click.cfw.alert', dismiss, function() {
        $(this).CFW_Alert('close');
    });

})(jQuery);
