/**
 * --------------------------------------------------------------------------
 * Figuration (v2.0.0): modal.js
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
        this.unlinking = false;
        this.fixedContent = '.fixed-top, .fixed-botton, .is-fixed';
        this.ignoreBackdropClick = false;

        var parsedData = this.$element.CFW_parseData('modal', CFW_Widget_Modal.DEFAULTS);
        this.settings = $.extend({}, CFW_Widget_Modal.DEFAULTS, parsedData, options);

        this._init();
    };

    CFW_Widget_Modal.DEFAULTS = {
        toggle       : false,   // Target selector
        animate      : true,    // If modal windows should animate
        unlink       : false,   // If on hide to remove events and attributes from modal and trigger
        dispose      : false,   // If on hide to unlink, then remove modal from DOM
        backdrop     : true,    // Show backdrop, or 'static' for no close on click
        keyboard     : true,    // Close modal on ESC press
        show         : false    // Show modal afer initialize
    };

    CFW_Widget_Modal.prototype = {

        _init : function() {
            // Find target by id/css selector - only pick first one found
            var $findTarget = $(this.settings.toggle).eq(0);
            if ($findTarget.length <= 0) {
                // If not found by selector - find by 'toggle' data
                var dataToggle = this.$element.attr('data-cfw-modal-toggle');
                $findTarget = $('[data-cfw-modal-target="' + dataToggle + '"]');
            }
            if ($findTarget.length <= 0) { return false; }
            this.$target = $findTarget;
            this.$dialog = this.$target.find('.modal-dialog');

            this.$element.attr('data-cfw', 'modal');

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
            this.$dialog.attr('role', 'document');

            // Bind click handler
            this.$element.on('click.cfw.modal.toggle', $.proxy(this.toggle, this));

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

            this.$target.on('click.dismiss.cfw.modal', '[data-cfw-dismiss="modal"]', function(e) {
                    if (e) { e.preventDefault(); }
                    $selfRef.hide();
                })
                .data('cfw.modal', this);

            this.$dialog.on('mousedown.dismiss.cfw.modal', function() {
                $selfRef.$target.one('mouseup.dismiss.cfw.modal', function(e) {
                    if ($(e.target).is($selfRef.$target)) $selfRef.ignoreBackdropClick = true;
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
                .off('.dismiss.cfw.modal');

            this.$dialog.off('mousedown.dismiss.cfw.modal');

            if (this.$focusLast) {
                this.$focusLast.off('.cfw.' + this.type + '.focusLast');
            }

            this.$target.CFW_transition(null, $.proxy(this._hideComplete, this));
        },

        _showComplete : function() {
            var $selfRef = this;

            if (this.settings.animate) {
                this.$target.addClass('fade');
            }

            if (!this.$target.parent().length) {
                this.$target.appendTo(this.$body); // don't move modals dom position
            }

            this.$target.show().scrollTop(0);

            this.adjustDialog();

            this.$target[0].offsetWidth; // Force Reflow

            this.$target.addClass('in').removeAttr('aria-hidden');

            this.enforceFocus();
            this.enforceFocusLast();

            function complete() {
                $selfRef.$target.trigger('focus');
                $selfRef.$target.CFW_trigger('afterShow.cfw.modal');
            }

            this.$target.CFW_transition(null, complete);
        },

        _hideComplete : function() {
            var $selfRef = this;

            this.escape();
            this.resize();

            this.$target.hide();
            this.backdrop(function() {
                $selfRef.$body.removeClass('modal-open');
                $selfRef.resetAdjustments();
                $selfRef.resetScrollbar();
                $selfRef.$target.CFW_trigger('afterHide.cfw.modal');
            });
            this.$element.trigger('focus');

            if (!this.unlinking) {
                if (this.settings.unlink) { this.unlink(); }
                if (this.settings.dispose) { this.dispose(); }
            }
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
            if (this.isShown && this.settings.keyboard) {
                this.$target.on('keydown.dismiss.cfw.modal', function(e) {
                    e.which == 27 && $selfRef.hide();
                });
            } else if (!this.isShown) {
                this.$target.off('keydown.dismiss.cfw.modal');
            }
        },

        resize : function() {
            if (this.isShown) {
                $(window).on('resize.cfw.modal', $.proxy(this.handleUpdate, this));
            } else {
                $(window).off('resize.cfw.modal');
            }
        },

        // these following methods are used to handle overflowing modals
        handleUpdate : function() {
            if (this.settings.backdrop) this.adjustBackdrop();
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
            this.bodyIsOverflowing = document.body.clientWidth < window.innerWidth;
            this.scrollbarWidth = $().CFW_measureScrollbar();
        },

        setScrollbar : function() {
            var $selfRef = this;

            if (this.bodyIsOverflowing) {
                // Update fixed element padding
                $(this.fixedContent).each(function() {
                    var $this = $(this);
                    $this.data('cfw.padding-right', this.style.paddingRight || '');
                    var padding = parseFloat($this.css('padding-right') || 0);
                    $this.css('padding-right', padding + $selfRef.scrollbarWidth);
                });

                // Update body padding
                this.$body.data('cfw.padding-right', document.body.style.paddingRight || '');
                var padding = parseFloat(this.$body.css('padding-right') || 0);
                this.$body.css('padding-right', padding + this.scrollbarWidth);
            }
            this.$target.CFW_trigger('scrollbarSet.cfw.modal');
        },

        resetScrollbar : function() {
            // Restore fixed element padding
            $(this.fixedContent).each(function() {
                var $this = $(this);
                var padding = $this.data('cfw.padding-right');
                $this.css('padding-right', padding);
                $this.removeData('cfw.padding-right');
            });

            // Restore body padding
            var padding = this.$body.data('cfw.padding-right');
            if (typeof padding !== undefined) {
                this.$body.css('padding-right', padding);
                this.$body.removeData('cfw.padding-right');
            }
        },

        measureScrollbar : function() {
            var $body = $(document.body);
            var scrollDiv = document.createElement('div');
            scrollDiv.className = 'modal-scrollbar-measure';
            $body.append(scrollDiv);
            var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
            $body[0].removeChild(scrollDiv);
            return scrollbarWidth;
        },

        backdrop : function(callback) {
            var $selfRef = this;

            var animate = (this.settings.animate) ? 'fade' : '';

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
                    $selfRef.settings.backdrop == 'static'
                        ? $selfRef.$target.trigger('focus')
                        : $selfRef.hide();
                });

                this.$backdrop[0].offsetWidth; // Force Reflow

                this.$backdrop.addClass('in');

                this.$backdrop.CFW_transition(null, callback);
            } else if (!this.isShown && this.$backdrop) {
                this.$backdrop.removeClass('in');

                var callbackRemove = function() {
                    $selfRef.removeBackdrop();
                    callback && callback();
                };

                this.$backdrop.CFW_transition(null, callbackRemove);
            } else if (callback) {
                callback();
            }
        },

        removeBackdrop : function() {
            this.$backdrop && this.$backdrop.remove();
            this.$backdrop = null;
        },

        unlink : function() {
            var $selfRef = this;

            this.$target.CFW_trigger('beforeUnlink.cfw.modal');
            this.unlinking = true;

            if (this.isShown) {
                this.$target.one('afterHide.cfw.modal', function() {
                    $selfRef.unlinkComplete();
                });
                this.hide();
            } else {
                this.unlinkComplete();
            }
        },

        unlinkComplete : function() {
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
            this.unlinking = null;
            this.fixedContent = null;
            this.ignoreBackdropClick = null;
            this.settings = null;

            $target.CFW_trigger('afterUnlink.cfw.modal');
        },

        dispose : function() {
            var $selfRef = this;

            $(document).one('afterUnlink.cfw.modal', this.$target, function() {
                $selfRef.$target.CFW_trigger('dispose.cfw.modal');
                $selfRef.$target.remove();
            });
            this.unlink();
        }
    };

    function Plugin(option) {
        var args = [].splice.call(arguments, 1);
        return this.each(function() {
            var $this = $(this);
            var data = $this.data('cfw.modal');
            var options = typeof option === 'object' && option;

            if (!data && /unlink|dispose/.test(option)) {
                return false;
            }
            if (!data) {
                $this.data('cfw.modal', (data = new CFW_Widget_Modal(this, options)));
            }
            if (typeof option === 'string') {
                data[option].apply(data, args);
            }
        });
    }

    $.fn.CFW_Modal = Plugin;
    $.fn.CFW_Modal.Constructor = CFW_Widget_Modal;

})(jQuery);
