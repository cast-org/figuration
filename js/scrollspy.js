/**
 * --------------------------------------------------------------------------
 * Figuration (v2.0.0): scrollspy.js
 * Licensed under MIT (https://github.com/cast-org/figuration/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

(function($) {
    'use strict';

    var CFW_Widget_Scrollspy = function(element, options) {
        this.$body  = $('body');
        this.$scrollElement = $(element).is('body') ? $(window) : $(element);
        this.selector = null;
        this.offsets = [];
        this.targets = [];
        this.activeTarget = null;
        this.scrollHeight = 0;

        this.settings = $.extend({}, CFW_Widget_Scrollspy.DEFAULTS, this._parseDataAttr(), options);

        this._init();
    };

    CFW_Widget_Scrollspy.DEFAULTS = {
        offset: 10
    };

    CFW_Widget_Scrollspy.prototype = {
        _init : function() {
            var process  = $.proxy(this.process, this);

            this.$scrollElement.on('scroll.bs.scrollspy', process);
            this.selector = (this.settings.target || '') + ' .nav li > a';
            this._trigger(this.$scrollElement, 'init.cfw.scrollspy');

            this.refresh();
            this.process();
        },

        getScrollHeight : function() {
            return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
        },

        refresh : function() {
            var $selfRef = this;
            var offsetMethod = 'offset';
            var offsetBase = 0;

            if (!$.isWindow(this.$scrollElement[0])) {
                offsetMethod = 'position';
                offsetBase   = this.$scrollElement.scrollTop();
            }

            this.offsets = [];
            this.targets = [];
            this.scrollHeight = this.getScrollHeight();

            this.$body
                .find(this.selector)
                // .filter(':visible')
                .map(function() {
                    var $el   = $(this);
                    var href  = $el.data('target') || $el.attr('href');
                    var $href = /^#./.test(href) && $(href);

                    return ($href
                        && $href.length
                        && $href.is(':visible')
                        // && $el.is(':visible')
                        && [[$href[offsetMethod]().top + offsetBase, href]]) || null;
                })
                .sort(function(a, b) { return a[0] - b[0]; })
                .each(function() {
                    $selfRef.offsets.push(this[0]);
                    $selfRef.targets.push(this[1]);
                });
        },

        process : function() {
            var scrollTop    = this.$scrollElement.scrollTop() + this.settings.offset;
            var scrollHeight = this.getScrollHeight();
            var maxScroll    = this.settings.offset + scrollHeight - this.$scrollElement.height();
            var offsets      = this.offsets;
            var targets      = this.targets;
            var activeTarget = this.activeTarget;
            var i;

            if (this.scrollHeight != scrollHeight) {
                this.refresh();
            }

            if (scrollTop >= maxScroll) {
                return activeTarget != (i = targets[targets.length - 1]) && this.activate(i);
            }

            if (activeTarget && scrollTop < offsets[0] && offsets[0] > 0) {
                this.activeTarget = null;
                return this.clear();
            }

            for (i = offsets.length; i--;) {
                activeTarget != targets[i]
                    && scrollTop >= offsets[i]
                    && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1])
                    && this.activate(targets[i]);
            }
        },

        activate : function(target) {
            this.activeTarget = target;

            this.clear();

            var selector = this.selector +
                '[data-target="' + target + '"],' +
                this.selector + '[href="' + target + '"]';

            var active = $(selector)
                .parents('li')
                .addClass('active');

            if (active.parent('.dropdown-menu').length) {
                active = active
                    .closest('li.dropdown')
                    .addClass('active');
            }

            this._trigger(active, 'activate.cfw.scrollspy');
        },

        clear : function() {
            $(this.selector)
                .parentsUntil(this.settings.target, '.active')
                .removeClass('active');
        },

        _parseDataAttr : function() {
            var parsedData = {};
            var data = this.$scrollElement.data();

            if (typeof data.cfwScrollspyTarget !== 'undefined') { parsedData.target = data.cfwScrollspyTarget; }
            if (typeof data.cfwScrollspyOffset !== 'undefined') { parsedData.offset = data.cfwScrollspyOffset; }
            return parsedData;
        },

        _trigger : function($callingElm, eventName) {
            var e = $.Event(eventName);
            $callingElm.trigger(e);
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
            var data = $this.data('cfw.Scrollspy');
            var options = typeof option === 'object' && option;

            if (!data) {
                $this.data('cfw.Scrollspy', (data = new CFW_Widget_Scrollspy(this, options)));
            }
            if (typeof option === 'string') {
                data[option].apply(data, args);
            }
        });
    }

    $.fn.CFW_Scrollspy = Plugin;
    $.fn.CFW_Scrollspy.Constructor = CFW_Widget_Scrollspy;

})(jQuery);
