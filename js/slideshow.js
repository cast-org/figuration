/**
 * --------------------------------------------------------------------------
 * Figuration (v4.0.0-alpha.0): slideshow.js
 * Licensed under MIT (https://github.com/cast-org/figuration/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

(function($) {
    'use strict';

    if (!$.fn.CFW_Tab) throw new Error('CFW_Slideshow requires CFW_Tab');

    var CFW_Widget_Slideshow = function(element, options) {
        this.$element = $(element);
        this.$navPrev = this.$element.find('[data-cfw-slideshow-nav="prev"]');
        this.$navNext = this.$element.find('[data-cfw-slideshow-nav="next"]');

        var parsedData = this.$element.CFW_parseData('slideshow', CFW_Widget_Slideshow.DEFAULTS);
        this.settings = $.extend({}, CFW_Widget_Slideshow.DEFAULTS, parsedData, options);

        this._init();
    };

    CFW_Widget_Slideshow.DEFAULTS = {
        loop : false
    };

    CFW_Widget_Slideshow.prototype = {
        _init : function() {
            var $selfRef = this;

            this.$element.attr('data-cfw', 'slideshow');

            // All tabs - regardless of state
            var $tabs = this.$element.find('[role="tab"]');
            if (!$tabs.length) { return; }

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

            // If loop, replace keydown handler
            if (this.settings.loop) {
                $tabs
                    .off('keydown.cfw.tab')
                    .add(this.$navPrev)
                    .add(this.$navNext)
                    .on('keydown.cfw.slideshow', function(e) {
                        $selfRef._actionsKeydown(e);
                    });
            }

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
            if (this.settings.loop && currIndex === 0) {
                this.$element.CFW_trigger('prev.cfw.slideshow');
                $tabs.eq($tabs.length - 1).CFW_Tab('show');
            }
        },

        next : function() {
            var $tabs = this._getTabs();
            var currIndex = this._currIndex($tabs);
            if (currIndex < $tabs.length - 1) {
                this.$element.CFW_trigger('next.cfw.slideshow');
                $tabs.eq(currIndex + 1).CFW_Tab('show');
            }
            if (this.settings.loop && currIndex == ($tabs.length - 1)) {
                this.$element.CFW_trigger('prev.cfw.slideshow');
                $tabs.eq(0).CFW_Tab('show');
            }
        },

        update : function() {
            this.$navPrev.removeClass('disabled');
            this.$navNext.removeClass('disabled');

            var $tabs = this._getTabs();
            var currIndex = this._currIndex($tabs);
            if (currIndex <= 0 && !this.settings.loop) {
                this.$navPrev.addClass('disabled');
            }
            if (currIndex >= $tabs.length - 1 && !this.settings.loop) {
                this.$navNext.addClass('disabled');
            }
            this.$element.CFW_trigger('update.cfw.slideshow');
        },

        _getTabs : function() {
            return this.$element.find('[role="tab"]:visible').not('.disabled');
        },

        _currIndex : function($tabs) {
            var $node = $tabs.filter('.active');
            return $tabs.index($node);
        },

        _actionsKeydown : function(e) {
            // 37-left, 38-up, 39-right, 40-down
            var k = e.which;
            if (!/(37|38|39|40)/.test(k)) { return; }

            e.stopPropagation();
            e.preventDefault();

            var $tabs = this._getTabs();
            var index = this._currIndex($tabs);

            if ((k == 38 || k == 37)) { // up & left
                if (index > 0) {
                    index--;
                } else if (index === 0) {
                    index = $tabs.length - 1;
                }
            }
            if ((k == 39 || k == 40)) { // down & right
                if (index < $tabs.length - 1) {
                    index++;
                } else if (index == $tabs.length - 1) {
                    index = 0;
                }
            }
            if (!~index) { index = 0; }  // force first item

            var nextTab = $tabs.eq(index);
            nextTab.CFW_Tab('show').trigger('focus');
        },

        dispose : function() {
            if (this.settings.loop) {
                var $tabs = this.$element.find('[role="tab"]');
                $tabs.off('keydown.cfw.tab');
            }
            this.$navPrev.off('.cfw.slideshow');
            this.$navNext.off('.cfw.slideshow');
            this.$element
                .off('.cfw.tab')
                .removeData('cfw.slideshow');

            this.$element = null;
            this.$navPrev = null;
            this.$navNext = null;
            this.settings = null;
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
