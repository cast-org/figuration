/**
 * --------------------------------------------------------------------------
 * Figuration (v4.3.1): affix.js
 * Licensed under MIT (https://github.com/cast-org/figuration/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

(function($) {
    'use strict';

    var CFW_Widget_Affix = function(element, options) {
        this.$element = $(element);
        this.$target = null;
        this.affixed = null;
        this.unpin = null;
        this.pinnedOffset = null;

        var parsedData = this.$element.CFW_parseData('affix', CFW_Widget_Affix.DEFAULTS);
        this.settings = $.extend({}, CFW_Widget_Affix.DEFAULTS, parsedData, options);

        this._init();
    };

    CFW_Widget_Affix.RESET = 'affix affix-top affix-bottom';

    CFW_Widget_Affix.DEFAULTS = {
        target : window,
        top    : 0,
        bottom : 0
    };

    CFW_Widget_Affix.prototype = {
        _init : function() {
            this.$element.attr('data-cfw', 'affix');

            // Bind events
            this.$target = $(this.settings.target)
                .on('scroll.cfw.affix',  this.checkPosition.bind(this))
                .on('click.cfw.affix',  this.checkPositionDelayed.bind(this));

            this.$element.CFW_trigger('init.cfw.affix');

            this.checkPosition();
        },

        getState : function(scrollHeight, height, offsetTop, offsetBottom) {
            var scrollTop    = this.$target.scrollTop();
            var position     = this.$element.offset();
            var targetHeight = this.$target.height();

            if (offsetTop !== null && this.affixed === 'top') {
                return scrollTop < offsetTop ? 'top' : false;
            }

            if (this.affixed === 'bottom') {
                if (offsetTop !== null) {
                    return scrollTop + this.unpin <= position.top ? false : 'bottom';
                }

                return scrollTop + targetHeight <= scrollHeight - offsetBottom ? false : 'bottom';
            }

            var initializing = this.affixed === null;
            var colliderTop = initializing ? scrollTop : position.top;
            var colliderHeight = initializing ? targetHeight : height;

            if (offsetTop !== null && scrollTop <= offsetTop) {
                return 'top';
            }
            if (offsetBottom !== null && colliderTop + colliderHeight >= scrollHeight - offsetBottom) {
                return 'bottom';
            }

            return false;
        },

        getPinnedOffset : function() {
            if (this.pinnedOffset) { return this.pinnedOffset; }
            this.$element.removeClass(CFW_Widget_Affix.RESET).addClass('affix');
            var scrollTop = this.$target.scrollTop();
            var position  = this.$element.offset();
            this.pinnedOffset = position.top - scrollTop;
            return this.pinnedOffset;
        },

        checkPositionDelayed : function() {
            setTimeout(this.checkPosition.bind(this), 1);
        },

        checkPosition : function() {
            if (!$.CFW_isVisible(this.$element[0])) { return; }

            var height       = this.$element.height();
            var offsetTop    = this.settings.top;
            var offsetBottom = this.settings.bottom;
            var scrollHeight =  Math.max($(document).height(), $(document.body).height());

            if (typeof offsetTop === 'function') {
                offsetTop    = offsetTop(this.$element);
            }
            if (typeof offsetBottom === 'function') {
                offsetBottom = offsetBottom(this.$element);
            }

            var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom);

            if (this.affixed !== affix) {
                if (this.unpin !== null) {
                    this.$element.css({
                        top: '',
                        position: ''
                    });
                }

                var affixType = 'affix' + (affix ? '-' + affix : '');
                var eventName = affixType + '.cfw.affix';

                if (!this.$element.CFW_trigger(eventName)) {
                    return;
                }

                this.affixed = affix;
                this.unpin = affix === 'bottom' ? this.getPinnedOffset() : null;

                this.$element
                    .removeClass(CFW_Widget_Affix.RESET)
                    .addClass(affixType)
                    .CFW_trigger(eventName.replace('affix', 'affixed'));
            }

            if (affix === 'bottom') {
                this.$element.offset({
                    top: scrollHeight - height - offsetBottom
                });
            }
        },

        dispose : function() {
            this.$target
                .off('.cfw.affix');
            this.$element
                .removeClass(CFW_Widget_Affix.RESET)
                .removeData('cfw.affix');

            this.$element = null;
            this.$target = null;
            this.affixed = null;
            this.unpin = null;
            this.pinnedOffset = null;
            this.settings = null;
        }
    };

    var Plugin = function(option) {
        var args = [].splice.call(arguments, 1);
        return this.each(function() {
            var $this = $(this);
            var data = $this.data('cfw.affix');
            var options = typeof option === 'object' && option;

            if (!data) {
                $this.data('cfw.affix', data = new CFW_Widget_Affix(this, options));
            }
            if (typeof option === 'string') {
                data[option].apply(data, args);
            }
        });
    };

    $.fn.CFW_Affix = Plugin;
    $.fn.CFW_Affix.Constructor = CFW_Widget_Affix;
}(jQuery));
