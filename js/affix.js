/**
 * --------------------------------------------------------------------------
 * Figuration (v2.0.0): affix.js
 * Licensed under MIT (https://github.com/cast-org/figuration/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

(function($) {
    'use strict';

    var CFW_Widget_Affix = function(element, options) {
        this.$element = $(element);
        this.$window = $(window);
        this.$target = null;
        this.affixed = null;
        this.unpin = null;
        this.pinnedOffset = null;

        this.settings = $.extend({}, CFW_Widget_Affix.DEFAULTS, this._parseDataAttr(), options);

        this._init();
    };

    CFW_Widget_Affix.RESET = 'affix affix-top affix-bottom';

    CFW_Widget_Affix.DEFAULTS = {
        offset: 0,
        target: window
    };

    CFW_Widget_Affix.prototype = {
        _init : function() {
            this.$element.attr('data-cfw', 'affix');

            // Bind events
            this.$target = $(this.settings.target)
                .on('scroll.cfw.affix)',  $.proxy(this.checkPosition, this))
                .on('click.cfw.affix',  $.proxy(this.checkPositionDelayed, this));

            this._trigger('init.cfw.affix');

            this.checkPosition();
        },

        getState : function(scrollHeight, height, offsetTop, offsetBottom) {
            var scrollTop    = this.$target.scrollTop();
            var position     = this.$element.offset();
            var targetHeight = this.$target.height();

            if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false;

            if (this.affixed == 'bottom') {
                if (offsetTop != null) return (scrollTop + this.unpin <= position.top) ? false : 'bottom';
                return (scrollTop + targetHeight <= scrollHeight - offsetBottom) ? false : 'bottom';
            }

            var initializing   = this.affixed == null;
            var colliderTop    = initializing ? scrollTop : position.top;
            var colliderHeight = initializing ? targetHeight : height;

            if (offsetTop != null && scrollTop <= offsetTop) return 'top';
            if (offsetBottom != null && (colliderTop + colliderHeight >= scrollHeight - offsetBottom)) return 'bottom';

            return false;
        },


        getPinnedOffset : function() {
            if (this.pinnedOffset) { return this.pinnedOffset; }
            this.$element.removeClass(CFW_Widget_Affix.RESET).addClass('affix');
            var scrollTop = this.$target.scrollTop();
            var position  = this.$element.offset();
            return (this.pinnedOffset = position.top - scrollTop);
        },

        checkPositionDelayed : function() {
            setTimeout($.proxy(this.checkPosition, this), 1);
        },

        checkPosition : function() {
            if (!this.$element.is(':visible')) { return; }

            var height       = this.$element.height();
            var offset       = this.settings.offset;
            var offsetTop    = offset.top;
            var offsetBottom = offset.bottom;
            var scrollHeight =  Math.max($(document).height(), $(document.body).height());

            if (typeof offset != 'object')         { offsetBottom = offsetTop = offset; }
            if (typeof offsetTop == 'function')    { offsetTop    = offset.top(this.$element); }
            if (typeof offsetBottom == 'function') { offsetBottom = offset.bottom(this.$element); }

            var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom);

            if (this.affixed != affix) {
                if (this.unpin != null) {
                    this.$element.css({
                        'top': '',
                        'position': ''
                    });
                }

                var affixType = 'affix' + (affix ? '-' + affix : '');
                var eventName = affixType + '.cfw.affix';

                if (!this._trigger(eventName)) {
                    return;
                }

                this.affixed = affix;
                this.unpin = (affix == 'bottom') ? this.getPinnedOffset() : null;

                this.$element
                    .removeClass(CFW_Widget_Affix.RESET)
                    .addClass(affixType);
                this._trigger(eventName.replace('affix', 'affixed'));
            }

            if (affix == 'bottom') {
                this.$element.offset({
                    top: scrollHeight - height - offsetBottom
                });
            }
        },

        _parseDataAttr : function() {
            var parsedData = {};
            parsedData.offset = {};
            var data = this.$element.data();

            // data.cfwAffixOffset = data.cfwAffixOffset || {};
            if (typeof data.cfwAffixOffsetBottom !== 'undefined') { parsedData.offset.bottom = data.cfwAffixOffsetBottom; }
            if (typeof data.cfwAffixOffsetTop !== 'undefined')    { parsedData.offset.top    = data.cfwAffixOffsetTop;    }
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
            var data = $this.data('cfw.affix');
            var options = typeof option === 'object' && option;

            if (!data) {
                $this.data('cfw.affix', (data = new CFW_Widget_Affix(this, options)));
            }
            if (typeof option === 'string') {
                data[option].apply(data, args);
            }
        });
    }

    $.fn.CFW_Affix = Plugin;
    $.fn.CFW_Affix.Constructor = CFW_Widget_Affix;

})(jQuery);
