/**
 * --------------------------------------------------------------------------
 * Figuration (v2.0.0): slideshow.js
 * Licensed under MIT (https://github.com/cast-org/figuration/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

(function($) {
    'use strict';

    if (!$.fn.CFW_Tab) throw new Error('CFW_Slideshow requires CFW_Tab');

    var CFW_Widget_Slideshow = function(element) {
        this.$element = $(element);
        this.$navPrev = this.$element.find('[data-cfw-slideshow-nav="prev"]');
        this.$navNext = this.$element.find('[data-cfw-slideshow-nav="next"]');
        this.currIndex = 0;

        this._init();
    };

    CFW_Widget_Slideshow.prototype = {
        _init : function() {
            var $selfRef = this;

            this.$element.attr('data-cfw', 'slideshow');

            if (!this._getTabs().length) { return; }

            // Listen for tabs
            this.$element.on('afterShow.cfw.tab', function() {
                $selfRef.update();
            });

            // Bind nav
            this.$navPrev.on('click.cfw.slideshow', function(e) {
                e.preventDefault();
                if ($(e.target).not('.disabled, :disabled')) {
                    $selfRef.prev();
                }
            });
            this.$navNext.on('click.cfw.slideshow', function(e) {
                e.preventDefault();
                if ($(e.target).not('.disabled, :disabled')) {
                    $selfRef.next();
                }
            });

            this.update();

            this.$element.CFW_trigger('init.cfw.slideshow');
        },

        prev : function() {
            var $tabs = this._getTabs();
            var currIndex = this._currIndex($tabs);
            if (currIndex > 0) {
                this.$element.CFW_trigger('prev.cfw.slideshow');
                $tabs.eq(currIndex - 1).CFW_Tab('show');
            }
        },

        next : function() {
            var $tabs = this._getTabs();
            var currIndex = this._currIndex($tabs);
            if (currIndex < $tabs.length - 1) {
                this.$element.CFW_trigger('next.cfw.slideshow');
                $tabs.eq(currIndex + 1).CFW_Tab('show');
            }
        },

        update : function() {
            this.$navPrev.removeClass('disabled');
            this.$navNext.removeClass('disabled');

            var $tabs = this._getTabs();
            var currIndex = this._currIndex($tabs);
            if (currIndex <= 0) {
                this.$navPrev.addClass('disabled');
            }
            if (currIndex >= $tabs.length - 1) {
                this.$navNext.addClass('disabled');
            }
        },

        _getTabs : function() {
            return this.$element.find('[role="tab"]:visible').not('.disabled');
        },

        _currIndex : function($tabs) {
            var $node = $tabs.filter('.active');
            return $tabs.index($node);
        },

        dispose : function() {
            this.$navPrev.off('.cfw.slideshow');
            this.$navNext.off('.cfw.slideshow');
            this.$element
                .off('.cfw.tab')
                .removeData('cfw.slideshow');

            this.$element = null;
            this.$navPrev = null;
            this.$navNext = null;
        }
    };

    function Plugin(option) {
        var args = [].splice.call(arguments, 1);
        return this.each(function() {
            var $this = $(this);
            var data = $this.data('cfw.Slideshow');

            if (!data) {
                $this.data('cfw.Slideshow', (data = new CFW_Widget_Slideshow(this)));
            }
            if (typeof option === 'string') {
                data[option].apply(data, args);
            }
        });
    }

    $.fn.CFW_Slideshow = Plugin;
    $.fn.CFW_Slideshow.Constructor = CFW_Widget_Slideshow;

})(jQuery);
