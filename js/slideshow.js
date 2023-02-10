/**
 * --------------------------------------------------------------------------
 * Figuration (v4.3.4): slideshow.js
 * Licensed under MIT (https://github.com/cast-org/figuration/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

(function($) {
    'use strict';

    if (typeof $.fn.CFW_Tab === 'undefined') { throw new Error('CFW_Slideshow requires CFW_Tab'); }

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
                if (!$.CFW_isDisabled(e.target)) {
                    $selfRef.prev();
                }
            });
            this.$navNext.on('click.cfw.slideshow', function(e) {
                e.preventDefault();
                if (!$.CFW_isDisabled(e.target)) {
                    $selfRef.next();
                }
            });

            // Replace keydown handler to handle loop
            $tabs
                .off('keydown.cfw.tab')
                .add(this.$navPrev)
                .add(this.$navNext)
                .on('keydown.cfw.slideshow', function(e) {
                    $selfRef._actionsKeydown(e);
                });

            this.update();

            this.$element.CFW_trigger('init.cfw.slideshow');
        },

        prev : function() {
            var $tabs = this._getTabs();
            var currIndex = this._currIndex($tabs);
            var $newTab = $($.CFW_getNextActiveElement($tabs.toArray(), $tabs[currIndex], false, this.settings.loop));

            if ($newTab.length) {
                this.$element.CFW_trigger('prev.cfw.slideshow');
                $newTab.CFW_Tab('show');
            }
        },

        next : function() {
            var $tabs = this._getTabs();
            var currIndex = this._currIndex($tabs);
            var $newTab = $($.CFW_getNextActiveElement($tabs.toArray(), $tabs[currIndex], true, this.settings.loop));

            if ($newTab.length) {
                this.$element.CFW_trigger('next.cfw.slideshow');
                $newTab.CFW_Tab('show');
            }
        },

        update : function() {
            $.CFW_controlEnable(this.$navPrev);
            $.CFW_controlEnable(this.$navNext);

            var $tabs = this._getTabs();
            var currIndex = this._currIndex($tabs);
            if (currIndex <= 0 && !this.settings.loop) {
                $.CFW_controlDisable(this.$navPrev);
            }
            if (currIndex >= $tabs.length - 1 && !this.settings.loop) {
                $.CFW_controlDisable(this.$navNext);
            }
            this.$element.CFW_trigger('update.cfw.slideshow');
        },

        _getTabs : function() {
            var $items = this.$element.find('[role="tab"]');
            $items = $items.filter(function() {
                return !$.CFW_isDisabled(this) && $.CFW_isVisible(this);
            });
            return $items;
        },

        _currIndex : function($tabs) {
            var $node = $tabs.filter('.active');
            return $tabs.index($node);
        },

        _actionsKeydown : function(e) {
            var KEYCODE_UP = 38;    // Arrow up
            var KEYCODE_RIGHT = 39; // Arrow right
            var KEYCODE_DOWN = 40;  // Arrow down
            var KEYCODE_LEFT = 37;  // Arrow left
            var REGEX_KEYS = new RegExp(KEYCODE_UP + '|' + KEYCODE_RIGHT + '|' + KEYCODE_DOWN + '|' + KEYCODE_LEFT);

            if (!REGEX_KEYS.test(e.which)) { return; }

            e.preventDefault();

            if (e.which === KEYCODE_UP || e.which === KEYCODE_LEFT) {
                this.prev();
            }
            if (e.which === KEYCODE_DOWN || e.which === KEYCODE_RIGHT) {
                this.next();
            }
            if (e.currentTarget !== this.$navPrev[0] && e.currentTarget !== this.$navNext[0]) {
                var $tabs = this._getTabs();
                var currIndex = this._currIndex($tabs);
                $tabs.eq(currIndex).trigger('focus');
            }
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

    var Plugin = function(option) {
        var args = [].splice.call(arguments, 1);
        return this.each(function() {
            var $this = $(this);
            var data = $this.data('cfw.Slideshow');
            var options = typeof option === 'object' && option;

            if (!data) {
                $this.data('cfw.Slideshow', data = new CFW_Widget_Slideshow(this, options));
            }
            if (typeof option === 'string') {
                data[option].apply(data, args);
            }
        });
    };

    $.fn.CFW_Slideshow = Plugin;
    $.fn.CFW_Slideshow.Constructor = CFW_Widget_Slideshow;
}(jQuery));
