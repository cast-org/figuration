/**
 * --------------------------------------------------------------------------
 * Figuration (v4.0.0-alpha.6): accordion.js
 * Licensed under MIT (https://github.com/cast-org/figuration/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

(function($) {
    'use strict';

    if (typeof $.fn.CFW_Collapse === 'undefined') { throw new Error('CFW_Accordion requires CFW_Collapse'); }

    var CFW_Widget_Accordion = function(element) {
        this.$element = $(element);
        this._init();
    };

    CFW_Widget_Accordion.prototype = {
        _init : function() {
            var $selfRef = this;

            this.$element
                .attr('data-cfw', 'accordion')
                .on('beforeShow.cfw.collapse', function(e) {
                    if (e.isDefaultPrevented()) { return; }
                    $selfRef._update(e);
                })
                .CFW_trigger('init.cfw.accordion');
        },

        _update : function(e) {
            var inTransition = false;
            var $current = $(e.target);
            var $collapse = this.$element.find('[data-cfw="collapse"]');

            $collapse.each(function() {
                if ($(this).data('cfw.collapse').inTransition === 1) {
                    inTransition = true;
                }
            });

            if (inTransition) {
                e.preventDefault();
                return;
            }

            $collapse.not($current).CFW_Collapse('hide');
        },

        dispose : function() {
            this.$element
                .off('.cfw.collapse')
                .removeData('cfw.accordion');

            this.$element = null;
        }
    };

    var Plugin = function(option) {
        var args = [].splice.call(arguments, 1);
        return this.each(function() {
            var $this = $(this);
            var data = $this.data('cfw.accordion');
            if (!data) {
                $this.data('cfw.accordion', data = new CFW_Widget_Accordion(this));
            }
            if (typeof option === 'string') {
                data[option].apply(data, args);
            }
        });
    };

    $.fn.CFW_Accordion = Plugin;
    $.fn.CFW_Accordion.Constructor = CFW_Widget_Accordion;
}(jQuery));
