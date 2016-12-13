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
        this.$triggerElm = $(element);
        this.$targetElm = null;
        this.$backdrop = null;
        this.isShown = null;
        this.scrollbarWidth = 0;
        this.unlinking = false;
        this.originalBodyPad = null;
        this.$dialog = null;
        this.ignoreBackdropClick = false;
        this.$focusLast = null;

        this.settings = $.extend({}, CFW_Widget_Modal.DEFAULTS, this._parseDataAttr(), options);
        if (this.settings.speed && typeof this.settings.speed == 'number') {
            this.settings.speed = {
                backdrop: this.settings.speed,
                modal: this.settings.speed
            };
        }

        this._init();
    };

    CFW_Widget_Modal.DEFAULTS = {
        toggle       : false,       // Target selector
        animate      : true,        // If modal windows should animate
        speed : {
            backdrop : 150,         // Speed of backdrop animation (milliseconds)
            modal    : 300          // Speed of modal animation (milliseconds)
        },
        unlink       : false,       // If on hide to remove events and attributes from modal and trigger
        destroy      : false,       // If on hide to unlink, then remove modal from DOM
        backdrop     : true,        // Show backdrop, or 'static' for no close on click
        keyboard     : true,        // Close modal on ESC press
        show         : false,       // Show modal afer initialize
        remote       : false        // Remote URL to load one time
    };

    CFW_Widget_Modal.prototype = {

        _init : function() {
            // Find target by id/css selector - only pick first one found
            var $findTarget = $(this.settings.toggle).eq(0);
            if ($findTarget.length <= 0) {
                // If not found by selector - find by 'toggle' data
                var dataToggle = this.$triggerElm.attr('data-cfw-modal-toggle');
                $findTarget = $('[data-cfw-modal-target="' + dataToggle + '"]');
            }
            if ($findTarget.length <= 0) { return false; }
            this.$targetElm = $findTarget;
            this.$dialog = this.$targetElm.find('.modal-dialog');

            this.$triggerElm.attr('data-cfw', 'modal');

            // Check for presence of ids - set if not present
            // var triggerID = this._getID(this.$triggerElm, 'cfw-modal');
            var targetID = this._getID(this.$targetElm, 'cfw-modal');

            // Set ARIA attributes on trigger
            this.$triggerElm.attr('aria-controls', targetID);

            // Use '.modal-title' for labelledby
            var $title = this.$targetElm.find('.modal-title');
            if ($title.length) {
                var labelledby = this._getID($title.eq(0), 'cfw-modal');
                this.$targetElm.attr('aria-labelledby', labelledby);
            }

            // Set ARIA attributes on target
            this.$targetElm.attr({
                'role': 'dialog',
                'aria-hidden': 'true',
                'tabindex': -1
            });
            this.$dialog.attr('role', 'document');

            // Bind click handler
            this.$triggerElm.on('click.cfw.modal.toggle', $.proxy(this.toggle, this));

            this.$targetElm.data('cfw.modal', this);

            this._trigger('init.cfw.modal');

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
            if (!this._trigger('beforeShow.cfw.modal')) {
                return;
            }

            this.isShown = true;

            this.checkScrollbar();
            this.setScrollbar();
            this.$body.addClass('modal-open');

            this.escape();
            this.resize();

            this.$targetElm.on('click.dismiss.cfw.modal', '[data-cfw-dismiss="modal"]', function(e) {
                    if (e) { e.preventDefault(); }
                    $selfRef.hide();
                })
                .data('cfw.modal', this);

            this.$dialog.on('mousedown.dismiss.cfw.modal', function() {
                $selfRef.$targetElm.one('mouseup.dismiss.cfw.modal', function(e) {
                    if ($(e.target).is($selfRef.$targetElm)) $selfRef.ignoreBackdropClick = true;
                });
            });

            this.backdrop(function() {
                $selfRef._showComplete();
            });
        },

        hide : function() {
            var $selfRef = this;

            // Bail if not showing
            if (!this.isShown) { return; }

            // Start close transition
            if (!this._trigger('beforeHide.cfw.modal')) {
                return;
            }

            this.isShown = false;

            $(document).off('focusin.cfw.modal');
            this.$targetElm
                .removeClass('in')
                .attr('aria-hidden', true)
                .off('.dismiss.cfw.modal');

            this.$dialog.off('mousedown.dismiss.cfw.modal');

            if (this.$focusLast) {
                this.$focusLast.off('.cfw.' + this.type + '.focusLast');
            }

            if (this.settings.animate && $.support.transitionEnd) {
                this.$targetElm.one('cfwTransitionEnd', function() {
                    $selfRef._hideComplete();
                }).CFW_emulateTransitionEnd(this.settings.speed.modal);
            } else {
                this._hideComplete();
            }
        },

        _showComplete : function() {
            var $selfRef = this;

            var transition = this.settings.animate && $.support.transitionEnd;
            if (transition) {
                this.$targetElm.addClass('fade');
            }

            if (!this.$targetElm.parent().length) {
                this.$targetElm.appendTo(this.$body); // don't move modals dom position
            }

            this.$targetElm.show().scrollTop(0);

            this.adjustDialog();

            if (transition) {
                this.$targetElm[0].offsetWidth; // Force Reflow
            }

            this.$targetElm.addClass('in').removeAttr('aria-hidden');

            this.enforceFocus();
            this.enforceFocusLast();

            if (transition) {
                // wait for modal to slide in
                this.$dialog.one('cfwTransitionEnd', function() {
                    $selfRef.$targetElm.trigger('focus');
                    $selfRef._trigger('afterShow.cfw.modal');
                }).CFW_emulateTransitionEnd(this.settings.speed.modal);
            } else {
                this.$targetElm.trigger('focus');
                this._trigger('afterShow.cfw.modal');
            }
        },

        _hideComplete : function() {
            var $selfRef = this;

            this.escape();
            this.resize();

            this.$targetElm.hide();
            this.backdrop(function() {
                $selfRef.$body.removeClass('modal-open');
                $selfRef.resetAdjustments();
                $selfRef.resetScrollbar();
                $selfRef._trigger('afterHide.cfw.modal');
            });
            this.$triggerElm.trigger('focus');

            if (!this.unlinking) {
                if (this.settings.unlink) { this.unlink(); }
                if (this.settings.destroy) { this.destroy(); }
            }
        },

        enforceFocus : function() {
            var $selfRef = this;
            $(document)
                .off('focusin.cfw.modal') // guard against infinite focus loop
                .on('focusin.cfw.modal', function(e) {
                    if (document !== e.target && $selfRef.$targetElm[0] !== e.target && !$selfRef.$targetElm.has(e.target).length) {
                        $selfRef.$targetElm.trigger('focus');
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
                .appendTo(this.$targetElm);
            }
            if (this.$focusLast) {
                this.$focusLast
                    .off('focusin.cfw.modal.focusLast')
                    .on('focusin.cfw.modal.focusLast', function() {
                        $selfRef.$targetElm.trigger('focus');
                    });
            }
        },

        escape : function() {
            var $selfRef = this;
            if (this.isShown && this.settings.keyboard) {
                this.$targetElm.on('keydown.dismiss.cfw.modal', function(e) {
                    e.which == 27 && $selfRef.hide();
                });
            } else if (!this.isShown) {
                this.$targetElm.off('keydown.dismiss.cfw.modal');
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
                .css('height', this.$targetElm[0].scrollHeight);
        },

        adjustDialog : function() {
            var modalIsOverflowing = this.$targetElm[0].scrollHeight > document.documentElement.clientHeight;

            this.$targetElm.css({
                paddingLeft:  !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
                paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
            });
        },

        resetAdjustments : function() {
            this.$targetElm.css({
                paddingLeft: '',
                paddingRight: ''
            });
        },

        checkScrollbar : function() {
            var fullWindowWidth = window.innerWidth;
            if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
                var documentElementRect = document.documentElement.getBoundingClientRect();
                fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
            }
            this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth;
            this.scrollbarWidth = this.measureScrollbar();
        },

        setScrollbar : function() {
            var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10);
            this.originalBodyPad = document.body.style.paddingRight || '';
            if (this.bodyIsOverflowing) {
                this.$body.css('padding-right', bodyPad + this.scrollbarWidth);
            }
            this._trigger('scrollbarSet.cfw.modal');
        },

        resetScrollbar : function() {
            this.$body.css('padding-right', this.originalBodyPad);
            this._trigger('scrollbarReset.cfw.modal');
        },

        measureScrollbar : function() {
            var $body = $(document.body);
            var scrollDiv = document.createElement('div');
            scrollDiv.className = 'modal-scrollbar-measure';
            $body.append(scrollDiv);
            var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
            $body[0].removeChild(scrollDiv);
            return scrollbarWidth;
        },

        backdrop : function(callback) {
            var $selfRef = this;

            var animate = (this.settings.animate) ? 'fade' : '';

            if (this.isShown && this.settings.backdrop) {
                var doAnimate = $.support.transitionEnd && animate;

                this.$backdrop = $(document.createElement('div'))
                    .addClass('modal-backdrop ' + animate)
                    .appendTo(this.$body);

                this.$targetElm.on('click.dismiss.cfw.modal', function(e) {
                    if ($selfRef.ignoreBackdropClick) {
                        $selfRef.ignoreBackdropClick = false;
                        return;
                    }
                    if (e.target !== e.currentTarget) { return; }
                    $selfRef.settings.backdrop == 'static'
                        ? $selfRef.$targetElm.trigger('focus')
                        : $selfRef.hide();
                });

                if (doAnimate) this.$backdrop[0].offsetWidth; // Force Reflow

                this.$backdrop.addClass('in');

                if (!callback) { return; }

                if (doAnimate) {
                    this.$backdrop.one('cfwTransitionEnd', callback).CFW_emulateTransitionEnd(this.settings.speed.backdrop);
                } else {
                    callback();
                }
            } else if (!this.isShown && this.$backdrop) {
                this.$backdrop.removeClass('in');

                var callbackRemove = function() {
                    $selfRef.removeBackdrop();
                    callback && callback();
                };

                if (this.settings.animate && $.support.transitionEnd) {
                    this.$backdrop.one('cfwTransitionEnd', callbackRemove).CFW_emulateTransitionEnd(this.settings.speed.backdrop);
                } else {
                    callbackRemove();
                }
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

            this._trigger('beforeUnlink.cfw.modal');
            this.unlinking = true;

            if (this.isShown) {
                this.$targetElm.one('afterHide.cfw.modal', function() {
                    $selfRef.unlinkComplete();
                });
                this.hide();
            } else {
                this.unlinkComplete();
            }
        },

        unlinkComplete : function() {
            this.$targetElm.off('.cfw.modal')
                .removeAttr('aria-labelledby')
                .removeData('cfw.modal');
            this.$triggerElm.off('.cfw.modal')
                .removeAttr('data-cfw aria-controls')
                .removeData('cfw.modal');

            this.unlinking = false;
            this._trigger('afterUnlink.cfw.modal');
        },

        destroy : function() {
            var $selfRef = this;

            $(document).one('afterUnlink.cfw.modal', this.$targetElm, function() {
                $selfRef._trigger('destroy.cfw.modal');
                $selfRef.$targetElm.remove();
            });
            this.unlink();
        },

        _getID : function($node, prefix) {
            var nodeID = $node.attr('id');
            if (nodeID === undefined) {
                do nodeID = prefix + '-' + ~~(Math.random() * 1000000);
                while (document.getElementById(nodeID));
                $node.attr('id', nodeID);
            }
            return nodeID;
        },

        _parseDataAttr : function() {
            var parsedData = {};
            var data = this.$triggerElm.data();

            if (typeof data.cfwModalToggle   !== 'undefined') { parsedData.toggle   = data.cfwModalToggle;  }
            if (typeof data.cfwModalAnimate  !== 'undefined') { parsedData.animate  = data.cfwModalAnimate;  }
            if (typeof data.cfwModalSpeed    !== 'undefined') { parsedData.speed    = data.cfwModalSpeed;    }
            if (typeof data.cfwModalUnlink   !== 'undefined') { parsedData.unlink   = data.cfwModalUnlink;   }
            if (typeof data.cfwModalDestroy  !== 'undefined') { parsedData.destroy  = data.cfwModalDestroy;  }
            if (typeof data.cfwModalBackdrop !== 'undefined') { parsedData.backdrop = data.cfwModalBackdrop; }
            if (typeof data.cfwModalKeyboard !== 'undefined') { parsedData.keyboard = data.cfwModalKeyboard; }
            if (typeof data.cfwModalShow     !== 'undefined') { parsedData.show     = data.cfwModalShow;     }
            if (typeof data.cfwModalRemote   !== 'undefined') { parsedData.remote   = data.cfwModalRemote;   }
            return parsedData;
        },

        _trigger : function(eventName) {
            var e = $.Event(eventName);
            this.$targetElm.trigger(e);
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
            var data = $this.data('cfw.modal');
            var options = typeof option === 'object' && option;

            if (!data && /unlink|destroy/.test(option)) {
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
