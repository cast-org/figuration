/**
 * --------------------------------------------------------------------------
 * Figuration (v2.0.0): slideshow.js
 * Licensed under MIT (https://github.com/cast-org/figuration/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

(function($) {
    'use strict';

    if (!$.fn.CFW_Tab) throw new Error('CFW_Slideshow requires tab.js');

    var CFW_Widget_Slideshow = function(element, options) {
        this.$element = $(element);
        this.$tabs = null;
        this.$navPrev = this.$element.find('[data-cfw-slideshow-nav="prev"]');
        this.$navPrevParent = this.$navPrev.parent('li');
        this.$navNext = this.$element.find('[data-cfw-slideshow-nav="next"]');
        this.$navNextParent = this.$navNext.parent('li');
        this.tabLen = null;
        this.currTab = null;
        this.currIndex = 0;

        this.settings = $.extend({}, CFW_Widget_Slideshow.DEFAULTS, this._parseDataAttr(), options);

        this._init();
    };

    CFW_Widget_Slideshow.DEFAULTS = {
    };

    CFW_Widget_Slideshow.prototype = {
        _init : function() {
            var $selfRef = this;

            this.$element.attr('data-cfw', 'slideshow');

            // Find and bind tabs
            this.$tabs = this.$element.find('a[data-cfw="tab"]');
            this.tabLen = this.$tabs.length;
            if (!this.tabLen) { return; }

            // Bind tabs
            this.$tabs.on('beforeShow.cfw.tab', function(e) {
                if (e.isDefaultPrevented()) { return; }
                var callingNode = e.target;
                $selfRef.update(callingNode);
            });

            // Bind nav
            this.$navPrev.on('click.cfw.slideshow', function(e) {
                e.preventDefault();
                var $btn = $(e.target);
                if (!$btn.hasClass('disabled') && !$btn.parent('li').hasClass('disabled')) {
                    $selfRef.prev();
                }
            });
            this.$navNext.on('click.cfw.slideshow', function(e) {
                e.preventDefault();
                var $btn = $(e.target);
                if (!$btn.hasClass('disabled') && !$btn.parent('li').hasClass('disabled')) {
                    $selfRef.next();
                }
            });

            this.update();

            this._trigger('init.cfw.slideshow');
        },

        prev : function() {
            if (this.currIndex > 0) {
                this._trigger('prev.cfw.slideshow');
                var newIndex = this.currIndex - 1;
                this.$tabs.eq(newIndex).CFW_Tab('show');
            }
        },

        next : function() {
            if (this.currIndex < this.tabLen - 1) {
                this._trigger('next.cfw.slideshow');
                var newIndex = this.currIndex + 1;
                this.$tabs.eq(newIndex).CFW_Tab('show');
            }
        },

        update : function(node) {
            if (node === undefined) {
                // Find active tab
                this.$tabs.each(function() {
                    if ($(this).parent('li').hasClass('active')) {
                        node = this;
                        return false;
                    }
                });
            }

            this.currTab = node;
            this.currIndex = this._findIndex(node);
            this.updateNav();
        },

        updateNav : function() {
            // Reset
            this.$navPrev.removeClass('disabled');
            this.$navPrevParent.removeClass('disabled');
            this.$navNext.removeClass('disabled');
            this.$navNextParent.removeClass('disabled');

            if (this.currIndex <= 0) {
                this.$navPrev.addClass('disabled');
                this.$navPrevParent.addClass('disabled');
            }
            if (this.currIndex >= this.tabLen - 1) {
                this.$navNext.addClass('disabled');
                this.$navNextParent.addClass('disabled');
            }
        },

        _findIndex : function(node) {
            return $.inArray(node, this.$tabs);
        },

        _parseDataAttr : function() {
            var parsedData = {};
            // var data = this.$element.data();

            // if (typeof data.cfwSlideshowActive !== 'undefined') { parsedData.active = data.cfwSlideshowActive; }
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
            var data = $this.data('cfw.Slideshow');
            var options = typeof option === 'object' && option;

            if (!data) {
                $this.data('cfw.Slideshow', (data = new CFW_Widget_Slideshow(this, options)));
            }
            if (typeof option === 'string') {
                data[option].apply(data, args);
            }
        });
    }

    $.fn.CFW_Slideshow = Plugin;
    $.fn.CFW_Slideshow.Constructor = CFW_Widget_Slideshow;

})(jQuery);
