/**
 * --------------------------------------------------------------------------
 * Figuration (v3.0.0): button.js
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

            this.$element.each(function() {
                var $this = $(this);
                $input = $this.find('input');
                if (!$input.length) {
                    $this.attr('aria-pressed', $this.hasClass('active'));
                }
            });

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
            if (this.$element.is('.disabled, :disabled')) {
                return;
            }

            var changed = true;
            var useAria = true;

            if (this.$parent.length) {
                var $input = this.$element.find('input');
                if ($input.is('.disabled, :disabled')) {
                    return;
                }
                if ($input.length) {
                    useAria = false;

                    if ($input.prop('type') == 'radio') {
                        if ($input.prop('checked') && this.$element.hasClass('active')) {
                            changed = false;
                        } else {
                            this.$parent.find('.active')
                                .removeClass('active');
                        }
                    }

                    if (changed) {
                        $input.prop('checked', !this.$element.hasClass('active'))
                            .trigger('change');
                    }
                }
            }

            if (useAria) {
                this.$element
                    .attr('aria-pressed', !this.$element.hasClass('active'));
            }

            if (changed) {
                this.$element.toggleClass('active');
            }
        },

        dispose : function() {
            this.$element
                .off('.cfw.button')
                .removeData('cfw.button');

            this.$element = null;
            this.$parent = null;
        }
    };

    function Plugin(option) {
        var args = [].splice.call(arguments, 1);
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
                if (typeof option === 'string') {
                    data[option].apply(data, args);
                }
            }
        });
    }

    $.fn.CFW_Button = Plugin;
    $.fn.CFW_Button.Constructor = CFW_Widget_Button;

})(jQuery);
