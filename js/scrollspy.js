/**
 * --------------------------------------------------------------------------
 * Figuration (v3.0.0-beta.1): scrollspy.js
 * Licensed under MIT (https://github.com/cast-org/figuration/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

(function($) {
    'use strict';

    var CFW_Widget_Scrollspy = function(element, options) {
        this.$body = $('body');
        this.$element = $(element);
        this.$scrollElement = this.$element.is('body') ? $(window) : this.$element;
        this.selector = null;
        this.offsets = [];
        this.targets = [];
        this.activeTarget = null;
        this.scrollHeight = 0;

        var parsedData = this.$element.CFW_parseData('scrollspy', CFW_Widget_Scrollspy.DEFAULTS);
        this.settings = $.extend({}, CFW_Widget_Scrollspy.DEFAULTS, parsedData, options);

        this._init();
    };

    CFW_Widget_Scrollspy.DEFAULTS = {
        target: null,
        offset: 10,
        throttle: 100
    };

    CFW_Widget_Scrollspy.prototype = {
        _init : function() {
            this.$scrollElement.on('scroll.cfw.scrollspy', $.CFW_throttle($.proxy(this.process, this), this.settings.throttle));
            this.selector = (this.settings.target || '') + ' a, ' +
                            (this.settings.target || '') + ' [data-cfw-scrollspy-target]';
            this.$scrollElement.CFW_trigger('init.cfw.scrollspy');

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
                .map(function() {
                    var $el   = $(this);
                    var href  = $el.attr('data-cfw-scrollspy-target') || $el.attr('href');
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

            var selector = this.settings.target + ' [href="' + target + '"],' +
                           this.settings.target + ' [data-cfw-scrollspy-target="' + target + '"]';

            var $active = $(selector)
                .addClass('active');

            if ($active.closest('.dropdown-menu').length) {
                $active = $active
                    .closest('.dropdown')
                    .find('[data-cfw="dropdown"]')
                    .addClass('active');
            } else {
                // Set parents as active
                $active.parents('ul, ol, nav').prev('li, a').addClass('active');
            }

            $active.CFW_trigger('activate.cfw.scrollspy');
        },

        clear : function() {
            $(this.selector)
                .filter('.active')
                .removeClass('active');
        },

        dispose : function() {
            this.$scrollElement.off('.cfw.scrollspy');
            this.$element.removeData('cfw.scrollspy');

            this.$body = null;
            this.$element = null;
            this.$scrollElement = null;
            this.selector = null;
            this.offsets = null;
            this.targets = null;
            this.activeTarget = null;
            this.scrollHeight = null;
            this.settings = null;
        }
    };

    function Plugin(option) {
        var args = [].splice.call(arguments, 1);
        return this.each(function() {
            var $this = $(this);
            var data = $this.data('cfw.scrollspy');
            var options = typeof option === 'object' && option;

            if (!data) {
                $this.data('cfw.scrollspy', (data = new CFW_Widget_Scrollspy(this, options)));
            }
            if (typeof option === 'string') {
                data[option].apply(data, args);
            }
        });
    }

    $.fn.CFW_Scrollspy = Plugin;
    $.fn.CFW_Scrollspy.Constructor = CFW_Widget_Scrollspy;

})(jQuery);
