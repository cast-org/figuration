/**
 * --------------------------------------------------------------------------
 * Figuration (v4.0.2): modal.js
 * Licensed under MIT (https://github.com/cast-org/figuration/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

(function($) {
    'use strict';

    var CFW_Widget_Modal = function(element, options) {
        this.$body = $(document.body);
        this.$element = $(element);
        this.$target = null;
        this.$dialog = null;
        this.$backdrop = null;
        this.$focusLast = null;
        this.isShown = null;
        this.scrollbarWidth = 0;
        this.scrollbarSide = 'right';
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
        show         : false    // Show modal afer initialize
    };

    CFW_Widget_Modal.prototype = {

        _init : function() {
            var selector = this.$element.CFW_getSelectorFromChain('modal', this.settings.target);
            if (!selector) { return; }
            this.$target = $(selector);
            this.$dialog = this.$target.find('.modal-dialog');

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
            this.$element.on('click.cfw.modal', this.toggle.bind(this));

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

            this.checkScrollbar();
            this.setScrollbar();
            this.$body.addClass('modal-open');

            this.escape();
            this.resize();

            this.$target
                .on('click.dismiss.cfw.modal', '[data-cfw-dismiss="modal"]', function(e) {
                    if (e) { e.preventDefault(); }
                    $selfRef.hide();
                })
                .data('cfw.modal', this);

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

            $(document).off('focusin.cfw.modal');
            this.$target
                .removeClass('in')
                .attr('aria-hidden', true)
                .removeAttr('aria-modal')
                .off('.dismiss.cfw.modal');

            this.$dialog.off('mousedown.dismiss.cfw.modal');

            if (this.$focusLast) {
                this.$focusLast.off('.cfw.' + this.type + '.focusLast');
            }

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
                this.$target.appendTo(this.$body); // don't move modals dom position
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

            this.enforceFocus();
            this.enforceFocusLast();

            var complete = function() {
                $selfRef.$target.trigger('focus');
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

            this.$element.trigger('focus');

            this.backdrop(function() {
                $selfRef.$body.removeClass('modal-open');
                $selfRef.resetAdjustments();
                $selfRef.resetScrollbar();
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

        enforceFocus : function() {
            var $selfRef = this;
            $(document)
                .off('focusin.cfw.modal') // guard against infinite focus loop
                .on('focusin.cfw.modal', function(e) {
                    if (document !== e.target && $selfRef.$target[0] !== e.target && !$selfRef.$target.has(e.target).length) {
                        $selfRef.$target.trigger('focus');
                    }
                });
        },

        enforceFocusLast : function() {
            var $selfRef = this;
            // Inject an item to fake loss of focus in case the modal
            // is last tabbable item in document - otherwise focus drops off page
            if (!this.$focusLast) {
                this.$focusLast = $(document.createElement('span'))
                    .addClass('modal-focuslast')
                    .attr('tabindex', 0)
                    .appendTo(this.$target);
            }
            if (this.$focusLast) {
                this.$focusLast
                    .off('focusin.cfw.modal.focusLast')
                    .on('focusin.cfw.modal.focusLast', function() {
                        $selfRef.$target.trigger('focus');
                    });
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
                            e.preventDefault();
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
            if (this.settings.backdrop) { this.adjustBackdrop(); }
            this.adjustDialog();
        },

        adjustBackdrop : function() {
            this.$backdrop
                .css('height', 0)
                .css('height', this.$target[0].scrollHeight);
        },

        adjustDialog : function() {
            var modalIsOverflowing = this.$target[0].scrollHeight > document.documentElement.clientHeight;

            this.$target.css({
                paddingLeft:  !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
                paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
            });
        },

        resetAdjustments : function() {
            this.$target.css({
                paddingLeft: '',
                paddingRight: ''
            });
        },

        checkScrollbar : function() {
            var rect = document.body.getBoundingClientRect();
            this.bodyIsOverflowing = Math.round(rect.left + rect.right) < window.innerWidth;
            this.scrollbarWidth = $.CFW_measureScrollbar();
            this.scrollbarSide =  $('html').CFW_getScrollbarSide();
        },

        setScrollbar : function() {
            var $selfRef = this;
            var sideName = this.scrollbarSide.capitalize();

            if (this.bodyIsOverflowing) {
                // Notes about below padding/margin calculations:
                // node.style.paddingRight returns: actual value or '' if not set
                // $(node).css('padding-right') returns: calculated value or 0 if not set

                // Update fixed element padding
                $(this.fixedContent).each(function() {
                    var $this = $(this);
                    var actualPadding = this.style['padding' + sideName];
                    var calculatedPadding = parseFloat($this.css('padding-' + $selfRef.scrollbarSide));
                    $this
                        .data('cfw.padding-dim', actualPadding)
                        .css('padding-' + $selfRef.scrollbarSide, calculatedPadding + $selfRef.scrollbarWidth + 'px');
                });

                // Update sticky element margin
                $(this.stickyContent).each(function() {
                    var $this = $(this);
                    var actualMargin = this.style['margin' + sideName];
                    var calculatedMargin = parseFloat($this.css('margin-' + $selfRef.scrollbarSide));
                    $this
                        .data('cfw.margin-dim', actualMargin)
                        .css('margin-' + $selfRef.scrollbarSide, calculatedMargin - $selfRef.scrollbarWidth + 'px');
                });

                // Update body padding
                var actualPadding = document.body.style['padding' + sideName];
                var calculatedPadding = parseFloat(this.$body.css('padding-' + $selfRef.scrollbarSide));
                this.$body
                    .data('cfw.padding-dim', actualPadding)
                    .css('padding-' + $selfRef.scrollbarSide, calculatedPadding + $selfRef.scrollbarWidth + 'px');
            }

            this.$target
                .on('touchmove.cfw.modal', this._scrollBlock.bind(this))
                .CFW_trigger('scrollbarSet.cfw.modal');
        },

        resetScrollbar : function() {
            var $selfRef = this;

            // Restore fixed element padding
            $(this.fixedContent).each(function() {
                var $this = $(this);
                var padding = $this.data('cfw.padding-dim');
                if (typeof padding !== 'undefined') {
                    $this.css('padding-' + $selfRef.scrollbarSide, padding);
                    $this.removeData('cfw.padding-dim');
                }
            });

            // Restore sticky element margin
            $(this.stickyContent).each(function() {
                var $this = $(this);
                var margin = $this.data('cfw.margin-dim');
                if (typeof margin !== 'undefined') {
                    $this.css('margin-' + $selfRef.scrollbarSide, margin);
                    $this.removeData('cfw.margin-dim');
                }
            });

            // Restore body padding
            var padding = this.$body.data('cfw.padding-dim');
            if (typeof padding !== 'undefined') {
                this.$body.css('padding-' + this.scrollbarSide, padding);
                this.$body.removeData('cfw.padding-dim');
            }

            this.$target
                .off('touchmove.cfw.modal')
                .CFW_trigger('scrollbarReset.cfw.modal');
        },

        _scrollBlock : function(e) {
            // Allow scrolling for scrollable modal body
            var $content = this.$target.find('.modal-dialog-scrollable');
            if ($content.length && ($content[0] === e.target || $content.find('.modal-body')[0].contains(e.target))) {
                e.stopPropagation();
                return;
            }

            var top = this.$target[0].scrollTop;
            var totalScroll = this.$target[0].scrollHeight;
            var currentScroll = top + this.$target[0].offsetHeight;

            if (top <= 0 && currentScroll >= totalScroll) {
                e.preventDefault();
            } else if (top === 0) {
                this.$target[0].scrollTop = 1;
            } else if (currentScroll === totalScroll) {
                this.$target[0].scrollTop = top - 1;
            }
        },

        backdrop : function(callback) {
            var $selfRef = this;

            var animate = this.settings.animate ? 'fade' : '';

            if (this.isShown && this.settings.backdrop) {
                this.$backdrop = $(document.createElement('div'))
                    .addClass('modal-backdrop ' + animate)
                    .appendTo(this.$body);

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

                $.CFW_reflow(this.$backdrop[0]); // Force Reflow

                this.$backdrop.addClass('in');

                this.$backdrop.CFW_transition(null, callback);
            } else if (!this.isShown && this.$backdrop) {
                this.$backdrop.removeClass('in');

                var callbackRemove = function() {
                    $selfRef.removeBackdrop();
                    if (callback) { callback(); }
                };

                this.$backdrop.CFW_transition(null, callbackRemove);
            } else if (callback) {
                callback();
            }
        },

        removeBackdrop : function() {
            if (this.$backdrop) {
                this.$backdrop.remove();
                this.$backdrop = null;
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

            this.$body = null;
            this.$element = null;
            this.$target = null;
            this.$dialog = null;
            this.$backdrop = null;
            this.$focusLast = null;
            this.isShown = null;
            this.scrollbarWidth = null;
            this.scrollbarSide = null;
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
}(jQuery));
