/**
 * --------------------------------------------------------------------------
 * Figuration (v4.3.4): modal.js
 * Licensed under MIT (https://github.com/cast-org/figuration/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
/* global CFW_Backdrop, CFW_Focuser, CFW_Scrollbar */

(function($) {
    'use strict';

    var CFW_Widget_Modal = function(element, options) {
        this.$rootElement = null;
        this.$element = $(element);
        this.$target = null;
        this.$dialog = null;
        this._backdrop = null;
        this._focuser = null;
        this._scrollbar = null;
        this.isShown = null;
        this.fixedContent = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
        this.stickyContent = '.sticky-top';
        this.ignoreBackdropClick = false;

        var parsedData = this.$element.CFW_parseData('modal', CFW_Widget_Modal.DEFAULTS);
        this.settings = $.extend({}, CFW_Widget_Modal.DEFAULTS, parsedData, options);

        this._init();
    };

    CFW_Widget_Modal.DEFAULTS = {
        target       : false,   // Target selector
        animate      : true,    // If modal windows should animate
        unlink       : false,   // If on hide to remove events and attributes from modal and trigger
        dispose      : false,   // If on hide to unlink, then remove modal from DOM
        backdrop     : true,    // Show backdrop, or 'static' for no close on click
        keyboard     : true,    // Close modal on ESC press
        manual       : false,   // If modal should trigger manually (programatically)
        show         : false,   // Show modal afer initialize
        focus        : true,    // Keep focus within the modal dialog
        rootElement  : 'body'
    };

    CFW_Widget_Modal.prototype = {

        _init : function() {
            this.$rootElement = $(this.settings.rootElement);
            if (!this.$rootElement) { return; }
            var selector = this.$element.CFW_getSelectorFromChain('modal', this.settings.target);
            if (!selector) { return; }
            this.$target = $(selector);
            this.$dialog = this.$target.find('.modal-dialog');
            this._backdrop = this._initializeBackdrop();
            this._focuser = new CFW_Focuser({
                element: this.$target[0]
            });
            this._scrollbar = new CFW_Scrollbar({
                rootElement: this.settings.rootElement
            });

            this.$element.attr('data-cfw', 'modal');

            this.disposeOnHide = this.settings.dispose;
            this.unlinkOnHide = this.settings.unlink;

            // Check for presence of ids - set if not present
            // var triggerID = this.$element.CFW_getID('cfw-modal');
            var targetID = this.$target.CFW_getID('cfw-modal');

            // Set ARIA attributes on trigger
            this.$element.attr('aria-controls', targetID);

            // Use '.modal-title' for labelledby
            var $title = this.$target.find('.modal-title');
            if ($title.length) {
                var labelledby = $title.eq(0).CFW_getID('cfw-modal');
                this.$target.attr('aria-labelledby', labelledby);
            }

            // Set ARIA attributes on target
            this.$target.attr({
                'role': 'dialog',
                'aria-hidden': 'true',
                'tabindex': -1
            });

            // Bind click handler
            if (!this.settings.manual) {
                this.$element.on('click.cfw.modal', this.toggle.bind(this));
            }

            this.$target.data('cfw.modal', this);

            this.$target.CFW_trigger('init.cfw.modal');

            if (this.settings.show) {
                this.show();
            }
        },

        toggle : function(e) {
            if (e) { e.preventDefault(); }
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
            if (!this.$target.CFW_trigger('beforeShow.cfw.modal')) {
                return;
            }

            this.isShown = true;

            this._scrollbar.disable();
            this.$target.CFW_trigger('scrollbarSet.cfw.modal');
            this.$rootElement.addClass('modal-open');

            this.escape();
            this.resize();

            this.$target.data('cfw.modal', this);

            // Chained modals
            this.$target
                .on('click.chain.cfw.modal', '[data-cfw-modal-chain]', function(e) {
                    if (e) {
                        e.stopImmediatePropagation();
                        e.preventDefault();
                    }
                    $selfRef.chain(e.currentTarget.getAttribute('data-cfw-modal-chain'));
                })
                .find('[data-cfw-modal-chain]')
                .each(function() {
                    var $dest = $(this.getAttribute('data-cfw-modal-chain'));
                    if (!$dest.length) { return; }
                    $dest.one('beforeShow.cfw.modal', function(e) {
                        e.preventDefault();
                    });
                });

            this.$dialog.on('mousedown.dismiss.cfw.modal', function() {
                $selfRef.$target.one('mouseup.dismiss.cfw.modal', function(e) {
                    if ($(e.target).is($selfRef.$target)) { $selfRef.ignoreBackdropClick = true; }
                });
            });

            this.backdrop(function() {
                $selfRef._showComplete();
            });
        },

        hide : function() {
            // Bail if not showing
            if (!this.isShown) { return; }

            // Start close transition
            if (!this.$target.CFW_trigger('beforeHide.cfw.modal')) {
                return;
            }

            this.isShown = false;

            this._focuser.deactivate();
            this.$target
                .removeClass('in')
                .attr('aria-hidden', true)
                .removeAttr('aria-modal')
                .off('.dismiss.cfw.modal')
                .off('.chain.cfw.modal');

            // Unset chained override
            this.$target
                .find('[data-cfw-modal-chain]')
                .each(function() {
                    var $dest = $(this.getAttribute('data-cfw-modal-chain'));
                    if (!$dest.length) { return; }
                    $dest.off('beforeShow.cfw.modal');
                });

            this.$dialog.off('mousedown.dismiss.cfw.modal');

            // Use modal dialog, not modal container, since
            // that is where the animation happens
            this.$dialog.CFW_transition(null, this._hideComplete.bind(this));
        },

        _showComplete : function() {
            var $selfRef = this;
            var $modalBody = this.$dialog.find('.modal-body');

            if (this.settings.animate) {
                this.$target.addClass('fade');
            }

            if (!this.$target.parent().length) {
                // Don't move modals dom position
                this.$target.appendTo(this.$rootElement);
            }

            this.$target.css('display', 'block');

            if ($modalBody.length) {
                $modalBody.scrollTop(0); // scrollable body variant
            }
            this.$dialog.scrollTop(0); // fullscreen variant
            this.$target.scrollTop(0);

            this.adjustDialog();

            $.CFW_reflow(this.$target[0]); // Force Reflow

            this.$target
                .addClass('in')
                .removeAttr('aria-hidden')
                .attr('aria-modal', true);

            // Mutation handler
            this.$target
                .attr('data-cfw-mutate', '')
                // If enabled will cause infinite loop of updates
                // .CFW_mutationListen()
                .on('mutate.cfw.mutate', function() {
                    $selfRef.handleUpdate();
                });

            if (this.settings.focus) {
                this._focuser.activate();
            }

            var complete = function() {
                $selfRef.$target
                    .CFW_mutateTrigger()
                    .CFW_trigger('afterShow.cfw.modal');
            };

            // Use modal dialog, not modal container, since
            // that is where the animation happens
            this.$dialog.CFW_transition(null, complete);
        },

        _hideComplete : function() {
            var $selfRef = this;

            this.escape();
            this.resize();

            this.$target
                .off('mutate.cfw.mutate')
                .removeAttr('data-cfw-mutate')
                .CFW_mutationIgnore()
                .css('display', 'none');

            if (!this.settings.manual) {
                this.$element.trigger('focus');
            }

            this.backdrop(function() {
                $selfRef.$rootElement.removeClass('modal-open');
                $selfRef.resetAdjustments();
                $selfRef._scrollbar.reset();
                $selfRef.$target.CFW_trigger('scrollbarReset.cfw.modal');
                $selfRef.$target
                    .CFW_mutateTrigger()
                    .CFW_trigger('afterHide.cfw.modal');

                if ($selfRef.disposeOnHide) {
                    $selfRef.dispose();
                } else if ($selfRef.unlinkOnHide) {
                    $selfRef.unlink();
                }
            });
        },

        handleHide : function(e) {
            if (e.currentTarget === this.$parent[0]) {
                return;
            }

            if (!$.CFW_isDisabled(e.currentTarget)) {
                this.close();
            }
        },

        chain : function(selector) {
            var $dest = $(selector);
            if (!$dest.length) { return; }

            if (this.isShown) {
                this.$target.one('afterHide.cfw.modal', function() {
                    $dest.CFW_Modal('show');
                });
                this.hide();
            } else {
                $dest.CFW_Modal('show');
            }
        },

        escape : function() {
            var $selfRef = this;
            var KEYCODE_ESC = 27;

            if (!this.isShown) {
                this.$target.off('keydown.dismiss.cfw.modal');
            }

            if (this.isShown) {
                this.$target.on('keydown.dismiss.cfw.modal', function(e) {
                    if (e.which === KEYCODE_ESC) {
                        if ($selfRef.settings.keyboard) {
                            $selfRef.hide();
                        } else {
                            $selfRef.hideBlocked();
                        }
                    }
                });
            }
        },

        resize : function() {
            if (this.isShown) {
                $(window).on('resize.cfw.modal', this.handleUpdate.bind(this));
            } else {
                $(window).off('resize.cfw.modal');
            }
        },

        // these following methods are used to handle overflowing modals
        handleUpdate : function() {
            this.adjustDialog();
        },

        adjustDialog : function() {
            var modalIsOverflowing = this.$target[0].scrollHeight > document.documentElement.clientHeight;
            var scrollbarWidth = this._scrollbar.getScrollbarWidth();
            var bodyIsOverflowing = this._scrollbar.isOverflowing();

            this.$target.css({
                paddingLeft:  !bodyIsOverflowing && modalIsOverflowing ? scrollbarWidth : '',
                paddingRight: bodyIsOverflowing && !modalIsOverflowing ? scrollbarWidth : ''
            });
        },

        resetAdjustments : function() {
            this.$target.css({
                paddingLeft: '',
                paddingRight: ''
            });
        },

        _initializeBackdrop : function() {
            return new CFW_Backdrop({
                isVisible: Boolean(this.settings.backdrop), // 'static' option will be translated to true, and booleans will keep their value
                isAnimated: this.settings.animate,
                rootElement: this.settings.rootElement
            });
        },

        backdrop : function(callback) {
            var $selfRef = this;

            if (this.isShown && this.settings.backdrop) {
                this.$target.on('click.dismiss.cfw.modal', function(e) {
                    if ($selfRef.ignoreBackdropClick) {
                        $selfRef.ignoreBackdropClick = false;
                        return;
                    }

                    if (e.target !== e.currentTarget) { return; }

                    if ($selfRef.settings.backdrop === 'static') {
                        $selfRef.hideBlocked();
                    } else {
                        $selfRef.hide();
                    }
                });

                this._backdrop.show(callback);
            } else if (!this.isShown && this._backdrop) {
                this._backdrop.hide(callback);
            } else if (callback) {
                callback();
            }
        },

        hideBlocked : function() {
            var $selfRef = this;
            if (!this.$target.CFW_trigger('beforeHide.cfw.modal')) {
                return;
            }

            var complete = function() {
                $selfRef.$target.trigger('focus');
                $selfRef.$target.removeClass('modal-blocked');
            };

            this.$target.addClass('modal-blocked');
            this.$dialog.CFW_transition(null, complete);
        },

        unlink : function() {
            var $selfRef = this;

            this.$target.CFW_trigger('beforeUnlink.cfw.modal');

            if (this.isShown) {
                this.$target.one('afterHide.cfw.modal', function() {
                    $selfRef._unlinkComplete();
                });
                this.hide();
            } else {
                this._unlinkComplete();
            }
        },

        _unlinkComplete : function() {
            var $target = this.$target;

            this.$target.off('.cfw.modal')
                .removeAttr('aria-labelledby')
                .removeData('cfw.modal');
            this.$element.off('.cfw.modal')
                .removeAttr('data-cfw aria-controls')
                .removeData('cfw.modal');

            this.$rootElement = null;
            this.$element = null;
            this.$target = null;
            this.$dialog = null;
            this._backdrop = null;
            this._focustrsp = null;
            this._scrollbar = null;
            this.isShown = null;
            this.fixedContent = null;
            this.ignoreBackdropClick = null;
            this.settings = null;

            $target.CFW_trigger('afterUnlink.cfw.modal');
        },

        dispose : function() {
            $(document).one('afterUnlink.cfw.modal', this.$target, function(e) {
                var $this = $(e.target);
                $this.CFW_trigger('dispose.cfw.modal');
                $this.remove();
            });
            this._backdrop.dispose();
            this._focuser.deactivate();
            this.unlink();
        }
    };

    var Plugin = function(option) {
        var args = [].splice.call(arguments, 1);
        return this.each(function() {
            var $this = $(this);
            var data = $this.data('cfw.modal');
            var options = typeof option === 'object' && option;

            if (!data && /unlink|dispose/.test(option)) {
                return;
            }
            if (!data) {
                $this.data('cfw.modal', data = new CFW_Widget_Modal(this, options));
            }
            if (typeof option === 'string') {
                data[option].apply(data, args);
            }
        });
    };

    $.fn.CFW_Modal = Plugin;
    $.fn.CFW_Modal.Constructor = CFW_Widget_Modal;

    $.CFW_enableDismissControl('modal', 'hide');
}(jQuery));
