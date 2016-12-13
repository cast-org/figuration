/**
 * --------------------------------------------------------------------------
 * Figuration (v2.0.0): button.js
 * Licensed under MIT (https://github.com/cast-org/figuration/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

(function($) {
    'use strict';

    var CFW_Widget_Button = function(element) {
        this.$element = $(element);
    };

    CFW_Widget_Button.prototype = {

        toggle : function() {
            var changed = true;
            var $parent = this.$element.closest('[data-cfw="buttons"]');

            if ($parent.length) {
                var $input = this.$element.find('input');
                if ($input.prop('type') == 'radio') {
                    if ($input.prop('checked')) {
                        changed = false;
                    }
                    $parent.find('.active').removeClass('active');
                    this.$element.addClass('active');
                } else if ($input.prop('type') == 'checkbox') {
                    if (($input.prop('checked')) !== this.$element.hasClass('active')) {
                        changed = false;
                    }
                    this.$element.toggleClass('active');
                }
                $input.prop('checked', this.$element.hasClass('active'));
                if (changed) {
                    $input.trigger('change');
                }
            } else {
                this.$element.attr('aria-pressed', !this.$element.hasClass('active'));
                this.$element.toggleClass('active');
            }
        }

    };

    function Plugin(option) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data('cfw.button');
            var options = typeof option === 'object' && option;

            if (!data) {
                $this.data('cfw.button', (data = new CFW_Widget_Button(this, options)));
            }
            data.toggle();
        });
    }

    $.fn.CFW_Button = Plugin;
    $.fn.CFW_Button.Constructor = CFW_Widget_Button;

    // API
    // ===
    $(document)
        .on('click.cfw.button', '[data-cfw^="button"]', function(e) {
            var $btn = $(e.target).closest('.btn');

            Plugin.call($btn, 'toggle');

            if (!($(e.target).is('input[type="radio"], input[type="checkbox"]'))) {
                // Prevent double click on radios, and the double selections (so cancellation) on checkboxes
                e.preventDefault();
                // The target component still receive the focus
                if ($btn.is('input,button')) {
                    $btn.trigger('focus');
                } else {
                    $btn.find('input:visible,button:visible').first().trigger('focus');
                }
            }

            if (!($(e.target).is('input[type="radio"]') || $(e.target).is('input[type="checkbox"]'))) {
                e.preventDefault();
            }
        })
        .on('focus.cfw.button blur.cfw.button', '[data-cfw^="button"]', function(e) {
            $(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type));
        });

})(jQuery);
