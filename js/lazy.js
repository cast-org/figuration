/**
 * --------------------------------------------------------------------------
 * Figuration (v3.0.3): lazy.js
 * Licensed under MIT (https://github.com/cast-org/figuration/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

(function($) {
    'use strict';

    var CFW_Widget_Lazy = function(element, options) {
        this.$element = $(element);
        this.$window = $(window);
        this.instance = null;
        this.inTransition = null;

        var parsedData = this.$element.CFW_parseData('lazy', CFW_Widget_Lazy.DEFAULTS);
        this.settings = $.extend({}, CFW_Widget_Lazy.DEFAULTS, parsedData, options);

        this._init();
    };

    CFW_Widget_Lazy.DEFAULTS = {
        src       : '',
        throttle  : 250,        // Throttle speed to limit event firing
        trigger   : 'scroll resize mutate',   // Events to trigger loading source
        delay     : 0,          // Delay before loading source
        effect    : 'show',     // jQuery effect to use for showing source (http://api.jquery.com/category/effects/)
        speed     : 0,          // Speed of effect (milliseconds)
        threshold : 0,          // Amount of pixels below viewport to triger show
        container : window,     // Where to watch for events
        invisible : false,      // Load sources that are not :visible
        placeholder: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
    };

    CFW_Widget_Lazy.prototype = {

        _init : function() {
            var checkInitViewport = false;

            this.$element.attr('data-cfw', 'lazy');

            // Add placholder if src is not defined
            if (this.$element.attr('src') === '' || this.$element.attr('src') === undefined || this.$element.attr('src') === false) {
                if (this.$element.is('img')) {
                    this.$element.attr('src', this.settings.placeholder);
                }
            }

            this.instance = this.$element.CFW_getID('cfw-lazy');

            // Bind events
            var eventTypes = this.settings.trigger.split(' ');
            for (var i = eventTypes.length; i--;) {
                var eventType = eventTypes[i];
                if (eventType == 'scroll' || eventType == 'resize') {
                    $(this.settings.container).on(eventType + '.cfw.lazy.' + this.instance, $.CFW_throttle($.proxy(this._handleTrigger, this), this.settings.throttle));
                    checkInitViewport = true;
                } else if (eventType == 'mutate') {
                    this.$element
                        .attr('data-cfw-mutate', '')
                        .on('mutate.cfw.mutate', $.proxy(this._handleTrigger, this));
                } else {
                    this.$element.on(eventType + '.cfw.lazy', $.proxy(this.show, this));
                }
            }

            this.$element.CFW_trigger('init.cfw.lazy');

            if (checkInitViewport && this.inViewport()) { this.show(); }
        },

        inViewport : function() {
            if (!this.settings.invisible && !this.$element.is(':visible')) {
                return false;
            }
            return (!this.belowFold() && !this.afterRight() && !this.aboveTop() && !this.beforeLeft());
        },

        belowFold : function() {
            var fold;
            if (this.settings.container === window) {
                fold = (window.innerHeight ? window.innerHeight : this.$window.height()) + this.$window.scrollTop();
            } else {
                fold = $(this.settings.container).offset().top + $(this.settings.container).height();
            }
            return fold <= this.$element.offset().top - this.settings.threshold;
        },

        afterRight : function() {
            var fold;
            if (this.settings.container === window) {
                fold = this.$window.width() + this.$window.scrollLeft();
            } else {
                fold = $(this.settings.container).offset().left + $(this.settings.container).width();
            }
            return fold <= this.$element.offset().left - this.settings.threshold;
        },

        aboveTop : function() {
            var fold;
            if (this.settings.container === window) {
                fold = this.$window.scrollTop();
            } else {
                fold = $(this.settings.container).offset().top;
            }
            return fold >= this.$element.offset().top + this.settings.threshold  + this.$element.height();
        },

        beforeLeft: function() {
            var fold;
            if (this.settings.container === window) {
                fold = this.$window.scrollLeft();
            } else {
                fold = $(this.settings.container).offset().left;
            }
            return fold >= this.$element.offset().left + this.settings.threshold + this.$element.width();
        },

        loadSrc : function() {
            var $selfRef = this;

            // Hide, set src, show w/effect
            this.$element.hide();
            this.$element.attr('src', this.settings.src);
            this.$element[this.settings.effect](this.settings.speed);

            $.CFW_imageLoaded(this.$element, this.instance, function() {
                setTimeout(function() {
                    $selfRef.$element.CFW_trigger('afterShow.cfw.lazy');
                    $selfRef.dispose();
                }, $selfRef.settings.speed);
            });
        },

        show : function() {
            var $selfRef = this;
            if (this.inTransition) { return; }

            if (!this.$element.CFW_trigger('beforeShow.cfw.lazy')) {
                return;
            }

            this.inTransition = true;

            setTimeout(function() {
                $selfRef.loadSrc();
            }, $selfRef.settings.delay);
        },

        _handleTrigger : function() {
            // Handle delayed event calls by checking for null
            if (this.$element !== null) {
                if (this.inViewport()) { this.show(); }
            }
        },

        dispose : function() {
            $(this.settings.container).off('.cfw.lazy.' + this.instance);
            this.$element
                .off('.cfw.lazy')
                .off('load.cfw.imageLoaded.' + this.instance)
                .off('.cfw.mutate')
                .removeData('cfw.lazy')
                .removeAttr('data-cfw')
                .removeAttr('data-cfw-mutate');

            this.$element = null;
            this.$window = null;
            this.instance = null;
            this.inTransition = null;
            this.settings = null;

        }
    };

    function Plugin(option) {
        var args = [].splice.call(arguments, 1);
        return this.each(function() {
            var $this = $(this);
            var data = $this.data('cfw.lazy');
            var options = typeof option === 'object' && option;

            if (!data) {
                $this.data('cfw.lazy', (data = new CFW_Widget_Lazy(this, options)));
            }
            if (typeof option === 'string') {
                data[option].apply(data, args);
            }
        });
    }

    $.fn.CFW_Lazy = Plugin;
    $.fn.CFW_Lazy.Constructor = CFW_Widget_Lazy;

})(jQuery);
