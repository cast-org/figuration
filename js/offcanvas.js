/**
 * --------------------------------------------------------------------------
 * Figuration (v4.3.3): offcanvas.js
 * Licensed under MIT (https://github.com/cast-org/figuration/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
/* global CFW_Backdrop, CFW_Focuser, CFW_Scrollbar */

(function($) {
    'use strict';

    var CFW_Widget_Offcanvas = function(element, options) {
        this.$rootElement = null;
        this.$element = $(element);
        this.$target = null;
        this._backdrop = null;
        this._focuser = null;
        this._scrollbar = null;
        this.isShown = null;
        this.fixedContent = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
        this.stickyContent = '.sticky-top';

        var parsedData = this.$element.CFW_parseData('offcanvas', CFW_Widget_Offcanvas.DEFAULTS);
        this.settings = $.extend({}, CFW_Widget_Offcanvas.DEFAULTS, parsedData, options);

        this._init();
    };

    CFW_Widget_Offcanvas.DEFAULTS = {
        target       : false,   // Target selector
        animate      : true,    // If offcanvas container should animate
        backdrop     : true,    // Show backdrop
        keyboard     : true,    // Close offcanvas on ESC press
        scroll       : false,   // Allow rootElement to scroll
        focus        : true,    // Keep focus within the offcanvas element
        manual       : false,   // If offcanvas should trigger manually (programatically)
        rootElement  : 'body'
    };

    CFW_Widget_Offcanvas.prototype = {
        _init : function() {
            this.$rootElement = $(this.settings.rootElement);
            if (!this.$rootElement) { return; }
            var selector = this.$element.CFW_getSelectorFromChain('offcanvas', this.settings.target);
            if (!selector) { return; }
            this.$target = $(selector);

            this._backdrop = this._initializeBackdrop();
            this._focuser = new CFW_Focuser({
                element: this.$target[0]
            });
            this._scrollbar = new CFW_Scrollbar({
                rootElement: this.settings.rootElement
            });

            this.$element.attr('data-cfw', 'offcanvas');

            // Check for presence of ids - set if not present
            var targetID = this.$target.CFW_getID('cfw-offcanvas');

            // Set ARIA attributes on trigger
            this.$element.attr('aria-controls', targetID);

            // Use '.offcanvas-title' for labelledby
            var $title = this.$target.find('.offcanvas-title');
            if ($title.length) {
                var labelledby = $title.eq(0).CFW_getID('cfw-offcanvas');
                this.$target.attr('aria-labelledby', labelledby);
            }

            this.$target.attr('tabindex', -1);

            // Bind click handler
            if (!this.settings.manual) {
                this.$element.on('click.cfw.offcanvas', this.toggle.bind(this));
            }

            this.$target.data('cfw.offcanvas', this);

            this.$element.CFW_trigger('init.cfw.offcanvas');
        },

        toggle : function(e) {
            if (/a|area/i.test(e.target.tagName)) {
                e.preventDefault();
            }

            if ($.CFW_isDisabled(e.target)) {
                return;
            }

            // Close any other open offcanvas to avoid conflicts
            var offcanvasShow = document.querySelector('[class*=offcanvas].in');
            if (offcanvasShow && offcanvasShow !== this.$target[0]) {
                $(offcanvasShow).CFW_Offcanvas('hide');
            }

            if (this.isShown) {
                this.hide();
            } else {
                this.show();
            }
        },

        show : function() {
            var $selfRef = this;

            // Bail if already showing
            if (this.isShown) { return; }

            // Start open transition
            if (!this.$element.CFW_trigger('beforeShow.cfw.offcanvas')) {
                return;
            }

            this.isShown = true;
            this._backdrop.show();
            if (this._disableScrollbar()) {
                this._scrollbar.disable();
            }
            this.$rootElement.addClass('offcanvas-open');

            this._escape();

            this.$target
                .attr('aria-modal', true)
                .attr('role', 'dialog');

            if (this.settings.animate) {
                this.$target.addClass('showing');
            }
            this.$target.data('cfw.offcanvas', this);

            $(window).on('resize.cfw.offcanvas', this._handleResize.bind(this));

            var complete = function() {
                $selfRef.$target
                    .addClass('in')
                    .removeClass('showing');
                if (!$selfRef.settings.scroll) {
                    $selfRef._focuser.activate();
                }
                $selfRef.$element.CFW_trigger('afterShow.cfw.offcanvas');
            };

            this.$target.data('cfw.offcanvas', this);

            this.$target.CFW_transition(null, complete);
        },

        hide : function() {
            var $selfRef = this;

            // Bail if not showing
            if (!this.isShown) { return; }

            // Start close transition
            if (!this.$element.CFW_trigger('beforeHide.cfw.offcanvas')) {
                return;
            }

            this._focuser.deactivate();
            $(window).off('resize.cfw.offcanvas');
            this.$target
                .off('.dismiss.cfw.offcanvas')
                .trigger('blur');
            this.isShown = false;

            if (this.settings.animate) {
                this.$target.addClass('hiding');
            }
            this._backdrop.hide();

            var complete = function() {
                $selfRef.$target
                    .removeClass('in hiding')
                    .removeAttr('aria-modal role');

                $selfRef.$rootElement.removeClass('offcanvas-open');

                $selfRef._scrollbar.reset();

                $selfRef.$element.CFW_trigger('afterHide.cfw.offcanvas');

                if ($.CFW_isVisible($selfRef.$element) && !$selfRef.settings.manual) {
                    $selfRef.$element.trigger('focus');
                }
            };

            this.$target.CFW_transition(null, complete);
        },

        dispose : function() {
            this._backdrop.dispose();
            this._focuser.deactivate();
            this._scrollbar.reset();

            $(window).off('resize.cfw.offcanvas');
            this.$target
                .off('.cfw.offcanvas')
                .removeData('cfw.offcanvas');
            this.$element
                .off('.cfw.offcanvas')
                .removeData('cfw.offcanvas');

            this.$rootElement = null;
            this.$element = null;
            this.$target = null;
            this._backdrop = null;
            this._focuser = null;
            this._scrollbar = null;
            this.isShown = null;
            this.settings = null;
        },

        _initializeBackdrop : function() {
            var $selfRef = this;
            return new CFW_Backdrop({
                className: 'offcanvas-backdrop',
                isVisible: Boolean(this.settings.backdrop), // 'static' option will be translated to true, and booleans will keep their value
                isAnimated: this.settings.animate,
                rootElement: this.$target.parent(),
                clickCallback: function() {
                    if ($selfRef.settings.backdrop === 'static') {
                        $selfRef._hideBlocked();
                    } else {
                        $selfRef.hide();
                    }
                }
            });
        },

        _escape : function() {
            var $selfRef = this;
            var KEYCODE_ESC = 27;

            if (this.isShown) {
                this.$target.on('keydown.dismiss.cfw.offcanvas', function(e) {
                    if (e.which === KEYCODE_ESC) {
                        if (!$selfRef.settings.keyboard) {
                            $selfRef._hideBlocked();
                        } else {
                            $selfRef.hide();
                        }
                    }
                });
            }
        },

        _hideBlocked : function() {
            var $selfRef = this;
            if (!this.$target.CFW_trigger('beforeHide.cfw.offcanvas')) {
                return;
            }

            var complete = function() {
                $selfRef.$target.trigger('focus');
                $selfRef.$target.removeClass('offcanvas-blocked');
            };

            this.$target.addClass('offcanvas-blocked');
            this.$target.CFW_transition(null, complete);
        },

        _disableScrollbar : function() {
            var rootWidth = this.$rootElement[0] === document.body ? document.body.offsetWidth : this.$rootElement[0].offsetWidth;
            var rootHeight = this.$rootElement[0] === document.body ? window.innerHeight : this.$rootElement[0].offsetHeight;

            return !this.settings.scroll || (this.$target[0].offsetWidth >= rootWidth && this.$target[0].offsetHeight >= rootHeight);
        },

        _isPositioned : function() {
            var position = window.getComputedStyle(this.$target[0], null).getPropertyValue('position');
            return /(fixed|absolute)/i.test(position);
        },

        _handleResize : function() {
            if (!this.isShown) {
                return;
            }

            if (!this._isPositioned()) {
                this.hide();
                return;
            }

            if (this._disableScrollbar()) {
                this._scrollbar.disable();
            } else {
                this._scrollbar.reset();
            }
        }
    };

    var Plugin = function(option) {
        var args = [].splice.call(arguments, 1);
        return this.each(function() {
            var $this = $(this);
            var data = $this.data('cfw.offcanvas');
            var options = typeof option === 'object' && option;

            if (!data && /unlink|dispose/.test(option)) {
                return;
            }
            if (!data) {
                $this.data('cfw.offcanvas', data = new CFW_Widget_Offcanvas(this, options));
            }
            if (typeof option === 'string') {
                data[option].apply(data, args);
            }
        });
    };

    $.fn.CFW_Offcanvas = Plugin;
    $.fn.CFW_Offcanvas.Constructor = CFW_Widget_Offcanvas;

    $.CFW_enableDismissControl('offcanvas', 'hide');
}(jQuery));
