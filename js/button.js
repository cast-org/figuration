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
        this.$parent = this.$element.closest('[data-cfw="buttons"]');

        this._init();
    };

    CFW_Widget_Button.prototype = {
        _init : function() {
            var $selfRef = this;

            var $input = this.$element.find('input').first();
            if ($input.length) {
                if ($input.prop('checked')) {
                    this.$element.addClass('active');
                } else {
                    this.$element.removeClass('active');
                }
            }
            this.$element.attr('aria-pressed', this.$element.hasClass('active'));

            // Event handlers
            this.$element
                .on('click.cfw.button', function(e) {
                    var $btn = $(this);

                    $selfRef.toggle();

                    if (!$(e.target).is('input')) {
                        // Prevent double click on radios, and the double selections (so cancellation) on checkboxes
                        e.preventDefault();
                        // The target component still receive the focus
                        if ($btn.is('input,button')) {
                            $btn.trigger('focus');
                        } else {
                            $btn.find('input:visible,button:visible').first().trigger('focus');
                        }
                    }
                });
            if ($input.length) {
                this.$element.on('focusin.cfw.button focusout.cfw.button', function(e) {
                    $(this).toggleClass('focus', /^focus(in)?$/.test(e.type));
                });
            }
        },

        toggle : function() {
            var changed = true;

            if (this.$parent.length) {
                var $input = this.$element.find('input');
                if ($input.length) {
                    if ($input.prop('type') == 'radio') {
                        if ($input.prop('checked') && this.$element.hasClass('active')) {
                            changed = false;
                        } else {
                            this.$parent.find('.active')
                                .removeClass('active')
                                .attr('aria-pressed', false);
                        }
                    }

                    if (changed) {
                        $input.prop('checked', !this.$element.hasClass('active'));
                        $input.trigger('change');
                    }
                }
            }

            if (changed) {
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

            // Check to see if group
            if ($this.is('[data-cfw="buttons"]')) {
                // Pass through to buttons
                $this.find('.btn').CFW_Button(option);
            } else {
                // Operate on independent buttons
                if (!data) {
                    $this.data('cfw.button', (data = new CFW_Widget_Button(this, options)));
                }
                if (option == 'toggle') data.toggle();
            }
        });
    }

    $.fn.CFW_Button = Plugin;
    $.fn.CFW_Button.Constructor = CFW_Widget_Button;

})(jQuery);
