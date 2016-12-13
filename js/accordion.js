/**
 * --------------------------------------------------------------------------
 * Figuration (v2.0.0): accordion.js
 * Licensed under MIT (https://github.com/cast-org/figuration/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

(function($) {
    'use strict';

    if ($.fn.CFW_Collapse === undefined) throw new Error('CFW_Accordion requires collapse.js');

    var CFW_Widget_Accordion = function(element, options) {
        this.$element = $(element);

        this.settings = $.extend({}, CFW_Widget_Accordion.DEFAULTS, this._parseDataAttr(), options);

        this._init();
    };

    CFW_Widget_Accordion.DEFAULTS = {
        active      : false     // [TODO} ???
    };

    CFW_Widget_Accordion.prototype = {
        _init : function() {
            var $selfRef = this;

            this.$element.attr('data-cfw', 'accordion');

            this.$element.on('beforeShow.cfw.collapse', function(e) {
                if (e.isDefaultPrevented()) { return; }
                $selfRef.updateCollapse(e);
            });

            this._trigger('init.cfw.accordion');
        },

        updateCollapse : function(e) {
            var hasActive = false;
            var $activeCollapse = $(e.target);
            var $collapse = this.$element.find('[data-cfw="collapse"]');

            $collapse.each(function() {
                if ($(this).data('cfw.collapse').inTransition === 1) {
                    hasActive = true;
                }
            });

            if (hasActive) {
                e.preventDefault();
                return;
            }

            $collapse.each(function() {
                var $this = $(this);
                if ($this.is($activeCollapse)) {
                    return;
                }
                $this.CFW_Collapse('hide');
            });
        },

        _parseDataAttr : function() {
            var parsedData = {};
            var data = this.$element.data();

            if (typeof data.cfwAccordionActive !== 'undefined') { parsedData.active = data.cfwAccordionActive; }
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
            var data = $this.data('cfw.Accordion');
            var options = typeof option === 'object' && option;

            if (!data) {
                $this.data('cfw.Accordion', (data = new CFW_Widget_Accordion(this, options)));
            }
            if (typeof option === 'string') {
                data[option].apply(data, args);
            }
        });
    }

    $.fn.CFW_Accordion = Plugin;
    $.fn.CFW_Accordion.Constructor = CFW_Widget_Accordion;

})(jQuery);
