/**
 * --------------------------------------------------------------------------
 * Figuration (v2.0.0): lazy.js
 * Licensed under MIT (https://github.com/cast-org/figuration/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

(function($) {
    'use strict';

    var CFW_Widget_Lazy = function(element, options) {
        this.$element = $(element);
        this.$window = $(window);
        this.eventTypes = null;
        this.id = null;
        this.isLoading = null;

        this.settings = $.extend({}, CFW_Widget_Lazy.DEFAULTS, this._parseDataAttr(), options);

        this._init();
    };

    CFW_Widget_Lazy.DEFAULTS = {
        throttle  : 250,        // Throttle speed to limit event firing
        trigger   : 'scroll resize',   // Events to trigger loading source
        delay     : 0,          // Delay before loading source
        effect    : 'show',     // jQuery effect to use for showing source (http://api.jquery.com/category/effects/)
        speed     : 0,          // Speed of effect (milliseconds)
        threshold : 0,          // Amount of pixels below viewport to triger show
        container : window,     // Where to watch for events
        invisible : false,       // Load sources that are not :visible
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

            this.id = this._getID(this.$element, 'cfw-lazy');

            // Bind events
            this.eventTypes = this.settings.trigger.split(' ');
            for (var i = this.eventTypes.length; i--;) {
                var eventType = this.eventTypes[i];
                if (eventType == 'scroll' || eventType == 'resize') {
                    $(this.settings.container).on(eventType + '.cfw.lazy.' + this.id, this._throttle($.proxy(this._handleTrigger, this), this.settings.throttle));
                    checkInitViewport = true;
                } else {
                    $(this.$element).on(eventType + '.cfw.lazy.' + this.id, $.proxy(this.show, this));
                }
            }

            this._trigger('init.cfw.lazy');

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
            if (this.settings.container === undefined || this.settings.container === window) {
                fold = (window.innerHeight ? window.innerHeight : this.$window.height()) + this.$window.scrollTop();
            } else {
                fold = $(this.settings.container).offset().top + $(this.settings.container).height();
            }
            return fold <= this.$element.offset().top - this.settings.threshold;
        },

        afterRight : function() {
            var fold;
            if (this.settings.container === undefined || this.settings.container === window) {
                fold = this.$window.width() + this.$window.scrollLeft();
            } else {
                fold = $(this.settings.container).offset().left + $(this.settings.container).width();
            }
            return fold <= this.$element.offset().left - this.settings.threshold;
        },

        aboveTop : function() {
            var fold;
            if (this.settings.container === undefined || this.settings.container === window) {
                fold = this.$window.scrollTop();
            } else {
                fold = $(this.settings.container).offset().top;
            }
            return fold >= this.$element.offset().top + this.settings.threshold  + this.$element.height();
        },

        beforeLeft: function() {
            var fold;
            if (this.settings.container === undefined || this.settings.container === window) {
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

            setTimeout(function() {
                $selfRef._trigger('afterShow.cfw.lazy');
            }, this.settings.speed);

            // Unbind events and unset data
            $(this.settings.container).off('.cfw.lazy.' + this.id);
            this.$element.off('.cfw.lazy.' + this.id)
                .removeData('cfw.lazy')
                .removeAttr('data-cfw');
        },

        show : function() {
            var $selfRef = this;
            if (this.isLoading) { return; }

            if (!this._trigger('beforeShow.cfw.lazy')) {
                return;
            }

            this.isLoading = true;

            setTimeout(function() {
                $selfRef.loadSrc();
            }, this.settings.delay);
        },

        _handleTrigger : function() {
            if (this.inViewport()) { this.show(); }
        },

        _throttle : function(fn, threshhold, scope) {
            /* From: http://remysharp.com/2010/07/21/throttling-function-calls/ */
            threshhold || (threshhold = 250);
            var last;
            var deferTimer;
            return function() {
                var context = scope || this;

                var now = +new Date();
                var args = arguments;
                if (last && now < last + threshhold) {
                    // hold on to it
                    clearTimeout(deferTimer);
                    deferTimer = setTimeout(function() {
                        last = now;
                        fn.apply(context, args);
                    }, threshhold);
                } else {
                    last = now;
                    fn.apply(context, args);
                }
            };
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
            var data = this.$element.data();

            if (typeof data.cfwLazySrc       !== 'undefined') { parsedData.src       = data.cfwLazySrc;       }
            if (typeof data.cfwLazyThrottle  !== 'undefined') { parsedData.throttle  = data.cfwLazyThrottle;  }
            if (typeof data.cfwLazyTrigger   !== 'undefined') { parsedData.trigger   = data.cfwLazyTrigger;   }
            if (typeof data.cfwLazyDelay     !== 'undefined') { parsedData.delay     = data.cfwLazyDelay;     }
            if (typeof data.cfwLazyEffect    !== 'undefined') { parsedData.effect    = data.cfwLazyEffect;    }
            if (typeof data.cfwLazySpeed     !== 'undefined') { parsedData.speed     = data.cfwLazySpeed;     }
            if (typeof data.cfwLazyThreshold !== 'undefined') { parsedData.threshold = data.cfwLazyThreshold; }
            if (typeof data.cfwLazyContainer !== 'undefined') { parsedData.container = data.cfwLazyContainer; }
            if (typeof data.cfwLazyInvisible !== 'undefined') { parsedData.invisible = data.cfwLazyInvisible; }

            return parsedData;
        },

        _trigger : function(eventName) {
            var e = $.Event(eventName);
            this.$element.trigger(e);
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
