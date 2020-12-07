
/**
 * --------------------------------------------------------------------------
 * Figuration (v4.1.0): tooltip.js
 * Licensed under MIT (https://github.com/cast-org/figuration/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

(function($) {
    'use strict';

    var CFW_Widget_Tooltip = function(element, options) {
        this._init('tooltip', element, options);
    };

    CFW_Widget_Tooltip.DEFAULTS = {
        target          : false,            // Target selector
        placement       : 'top',            // Where to locate tooltip (top/bottom/reverse(left))/forward(right)/auto)
        trigger         : 'hover focus',    // How tooltip is triggered (click/hover/focus/manual)
        display         : 'block',          // Value for display CSS rule
        animate         : true,             // Should the tooltip fade in and out
        delay : {
            show        : 0,                // Delay for showing tooltip (milliseconds)
            hide        : 100               // Delay for hiding tooltip (milliseconds)
        },
        container       : false,            // Where to place tooltip if moving is needed
        viewport        : 'scrollParent',   // Viewport to constrain tooltip within
        padding         : 0,                // Padding from viewport edge
        html            : false,            // Use HTML or text insertion mode
        closetext       : '<span aria-hidden="true">&times;</span>', // Text for close links
        closesrtext     : 'Close',          // Screen reader text for close links
        title           : '',               // Title text/html to be inserted
        customClass     : '',               // Class name(s) to be added on show
        show            : false,            // Auto show after init
        unlink          : false,            // If on hide to remove events and attributes from tooltip and trigger
        dispose         : false,            // If on hide to unlink, then remove tooltip from DOM
        template        : '<div class="tooltip"><div class="tooltip-body"></div><div class="tooltip-arrow"></div></div>',
        gpuAcceleration : true,
        popperConfig    : null

    };

    CFW_Widget_Tooltip.prototype = {
        _init : function(type, element, options) {
            if (typeof Popper === 'undefined') {
                throw new TypeError('Figurations\'s Tooltip widget requires Popper (https://popper.js.org)');
            }

            this.type = type;
            this.$element = $(element);
            this.$target = null;
            this.$arrow = null;
            this.$focusFirst = null;
            this.$focusLast = null;
            this.instance = null;
            this.isDialog = false;
            this.follow = false;
            this.eventTypes = null;
            this.delayTimer = null;
            this.inTransition = null;
            this.closeAdded = false;
            this.activate = false;
            this.hoverState = null;
            this.dynamicTip = false;
            this.inserted = false;
            this.flags = {
                keyShift: false,
                keyTab : false
            };
            this.popper = null;

            this.settings = this.getSettings(options);

            this.inState = {
                click: false,
                hover: false,
                focus: false
            };
            this.disposeOnHide = this.settings.dispose;
            this.unlinkOnHide = this.settings.unlink;

            this.$element.attr('data-cfw', this.type);

            var selector = this.$element.CFW_getSelectorFromChain(this.type, this.settings.target);
            if (selector !== null) {
                this.$target = $(selector);
            } else {
                this.fixTitle();
            }

            if (this.settings.show && this.settings.trigger !== 'manual') {
                this.settings.trigger = 'click';
            }

            // Bind events
            this.eventTypes = this.settings.trigger.split(' ');
            this.bindTip(true);

            if (this.$target) {
                this.$target.data('cfw.' + this.type, this);
            }

            if (this.settings.show) {
                this.activate = true;
                this.inState.click = true;
                this.show();
            }

            this.$element.CFW_trigger('init.cfw.' + this.type);
        },

        getDefaults: function() {
            return CFW_Widget_Tooltip.DEFAULTS;
        },

        getSettings : function(options) {
            var parsedData = this.$element.CFW_parseData(this.type, this.getDefaults());
            var settings = $.extend({}, this.getDefaults(), parsedData, options);
            if (settings.delay && typeof settings.delay === 'number') {
                settings.delay = {
                    show: settings.delay,
                    hide: settings.delay
                };
            }
            return settings;
        },

        createTip : function() {
            var $tip = $(this.settings.template);
            return $tip;
        },

        fixTitle : function() {
            var $e = this.$element;
            var title = typeof $e.attr('title') !== 'undefined' ? $e.attr('title') : null;

            if (title || typeof $e.attr('data-cfw-' + this.type + '-original-title') !== 'string') {
                $e.attr('data-cfw-' + this.type + '-original-title', title || '');

                if (title && typeof $e.attr('aria-label') === 'undefined' && !$e[0].textContent) {
                    $e.attr('aria-label', title || '');
                }

                $e.attr('title', '');
            }
        },

        getTitle : function() {
            var $e = this.$element;
            var s = this.settings;

            var title = typeof s.title === 'function' ? s.title.call($e[0]) : s.title || $e.attr('data-cfw-' + this.type + '-original-title');

            return title;
        },

        setContent : function() {
            var $tip = this.$target;
            var $inner = $tip.find('.tooltip-body');

            if (this.dynamicTip) {
                var title = this.getTitle();
                if (this.settings.html) {
                    $inner.html(title);
                } else {
                    $inner.text(title);
                }
            }

            $tip.removeClass('fade in');
        },

        linkTip : function() {
            // Check for presence of trigger and target ids - set if not present
            this.instance = this.$element.CFW_getID('cfw-' + this.type);
            this.targetID = this.$target.CFW_getID('cfw-' + this.type);

            var attrRole = 'tooltip';
            if (this.type !== 'tooltip' && this.isDialog) {
                attrRole = 'dialog';
            }

            // Set ARIA attributes on target
            this.$target.attr({
                'role': attrRole,
                'aria-hidden': 'true',
                'tabindex': -1
            });
        },

        bindTip : function(modeInit) {
            var $selfRef = this;

            for (var i = this.eventTypes.length; i--;) {
                var eventType = this.eventTypes[i];
                if (eventType === 'click' || eventType === 'manual') {
                    this.isDialog = true;
                }
                if (eventType === 'click') {
                    // Click events
                    this.$element
                        .off('click.cfw.' + this.type)
                        .on('click.cfw.' + this.type, this.toggle.bind(this));

                    // Inject close button
                    if (this.$target !== null && !this.closeAdded) {
                        // Check for pre-existing close buttons
                        if (!this.$target.find('[data-cfw-dismiss="' + this.type + '"]').length) {
                            var $close = $('<button type="button" class="close" data-cfw-dismiss="' + this.type + '" aria-label="' + this.settings.closesrtext + '">' + this.settings.closetext + '</button>');
                            $close.prependTo(this.$target);
                            this.closeAdded = true;
                        }
                    }
                } else if (eventType !== 'manual') {
                    // Hover/focus events
                    var eventIn  = eventType === 'hover' ? 'mouseenter' : 'focusin';
                    var eventOut = eventType === 'hover' ? 'mouseleave' : 'focusout';

                    if (modeInit) {
                        this.$element.on(eventIn + '.cfw.' + this.type, this.enter.bind(this));
                        this.$element.on(eventOut + '.cfw.' + this.type, this.leave.bind(this));
                    } else {
                        this.$target.off('.cfw.' + this.type);
                        this.$target.on(eventIn + '.cfw.' + this.type, this.enter.bind(this));
                        this.$target.on(eventOut + '.cfw.' + this.type, this.leave.bind(this));
                    }
                }
            }

            if (this.$target) {
                // Key handling for closing
                this.$target.off('keydown.cfw.' + this.type + '.close')
                    .on('keydown.cfw.' + this.type + '.close', function(e) {
                        var KEYCODE_ESC = 27;
                        if (e.which === KEYCODE_ESC) { // if ESC is pressed
                            e.stopPropagation();
                            e.preventDefault();
                            // Click the close button if it exists otherwise force tooltip closed
                            if ($('.close', $selfRef.$target).length > 0) {
                                $('.close', $selfRef.$target).eq(0).trigger('click');
                            } else {
                                $selfRef.hide(true);
                            }
                        }
                    });

                // Bind 'close' buttons
                this.$target.off('click.dismiss.cfw.' + this.type, '[data-cfw-dismiss="' + this.type + '"]')
                    .on('click.dismiss.cfw.' + this.type, '[data-cfw-dismiss="' + this.type + '"]', function(e) {
                        if (e) { e.preventDefault(); }
                        $selfRef.follow = true;
                        $selfRef.hide();
                    });
            }
        },

        toggle : function(e) {
            if (e) {
                e.preventDefault();

                this.inState.click = !this.inState.click;
                this.follow = true;

                if (this._isInState()) {
                    this.enter();
                } else {
                    this.leave();
                }
            } else {
                // Disable delay when toggle programatically invoked
                var holdDelay = this.settings.delay;
                if (this.$target && this.$target.hasClass('in')) {
                    this.settings.delay.hide = 0;
                    this.leave();
                } else {
                    this.settings.delay.show = 0;
                    this.enter();
                }
                this.settings.delay = holdDelay;
            }
        },

        enter : function(e) {
            if (e) {
                this.inState[e.type === 'focusin' ? 'focus' : 'hover'] = true;
            }

            if ((this.$target && this.$target.hasClass('in')) || this.hoverState === 'in') {
                this.hoverState = 'in';
                return;
            }

            clearTimeout(this.delayTimer);

            this.hoverState = 'in';

            if (!this.settings.delay.show) {
                this.show();
                return;
            }

            var $selfRef = this;
            this.delayTimer = setTimeout(function() {
                if ($selfRef.hoverState === 'in') { $selfRef.show(); }
            }, this.settings.delay.show);
        },

        leave : function(e) {
            if (e) {
                this.inState[e.type === 'focusout' ? 'focus' : 'hover'] = false;
            }

            if (this._isInState()) { return; }

            clearTimeout(this.delayTimer);

            this.hoverState = 'out';
            if (!this.settings.delay.hide) {
                this.hide();
                return;
            }

            var $selfRef = this;
            this.delayTimer = setTimeout(function() {
                if ($selfRef.hoverState === 'out') { $selfRef.hide(); }
            }, this.settings.delay.hide);
        },

        show : function() {
            clearTimeout(this.delayTimer);
            var $selfRef = this;

            // Bail if transition in progress or already shown
            if (this.inTransition) { return; }
            if (this.$target && this.$target.hasClass('in')) { return; }

            if (!this.activate) {
                // Start show transition
                if (!this.$element.CFW_trigger('beforeShow.cfw.' + this.type)) {
                    return;
                }
            }

            this.inTransition = true;

            // Create/link the tooltip container
            if (!this.$target) {
                var target = this.createTip();
                if (target.length <= 0) { return; }
                this.dynamicTip = true;
                this.$target = target;
            }
            if (this.$target.length !== 1) {
                throw new Error(this.type + ' `template` option must consist of exactly 1 top-level element!');
            }
            this.$target.data('cfw.' + this.type, this);
            this.linkTip();
            this.bindTip(false);
            this.setContent();

            this.$target.css('display', this.settings.display);
            if (this.settings.animate) { this.$target.addClass('fade'); }

            var customClass = typeof this.settings.customClass === 'function' ? this.settings.customClass() : this.settings.customClass;
            if (customClass) {
                this.$target.addClass(customClass);
            }

            this.locateTip();

            // Additional tab/focus handlers for non-inline items
            if (this.settings.container) {
                this.$target
                    .off('.cfw.' + this.type + '.keyflag')
                    .on('keydown.cfw.' + this.type + '.keyflag', function(e) {
                        $selfRef._tabSet(e);
                    })
                    .on('keyup.cfw.' + this.type + '.keyflag', function(e) {
                        var KEYCODE_TAB = 9;
                        if (e.which === KEYCODE_TAB) {
                            $selfRef._tabReset();
                        }
                    });

                // Inject focus helper item at start to fake loss of focus going out the top
                if (!this.$focusFirst) {
                    this.$focusFirst = $(document.createElement('span'))
                        .addClass(this.type + '-focusfirst')
                        .attr('tabindex', 0)
                        .prependTo(this.$target);
                }
                if (this.$focusFirst) {
                    this.$focusFirst
                        .off('focusin.cfw.' + this.type + '.focusFirst')
                        .on('focusin.cfw.' + this.type + '.focusFirst', function(e) {
                            e.stopPropagation();
                            e.preventDefault();
                            if ($selfRef.flags.keyTab) {
                                if ($selfRef.flags.keyShift) {
                                    // Go back to trigger element
                                    $selfRef.$element.trigger('focus');
                                } else {
                                    // Go to next tabbable item
                                    $selfRef._tabNext($selfRef.$focusFirst[0], $selfRef.$target);
                                }
                            }
                            $selfRef._tabReset();
                        });
                }

                // Inject focus helper item at end to fake loss of focus going out the bottom
                // Also helps if tip has last tabbable item in document - otherwise focus drops off page
                if (!this.$focusLast) {
                    this.$focusLast = $(document.createElement('span'))
                        .addClass(this.type + '-focuslast')
                        .attr('tabindex', 0)
                        .appendTo(this.$target);
                }
                if (this.$focusLast) {
                    this.$focusLast
                        .off('focusin.cfw.' + this.type + '.focusLast')
                        .on('focusin.cfw.' + this.type + '.focusLast', function(e) {
                            e.stopPropagation();
                            e.preventDefault();
                            if (!$selfRef.$target.is(e.relatedTarget) && !$selfRef.$target.has(e.relatedTarget).length) {
                                return;
                            }
                            $selfRef._tabNext($selfRef.$element[0]);
                        });
                }

                this.$element
                    .off('focusin.cfw.' + this.type + '.focusStart')
                    .on('focusin.cfw.' + this.type + '.focusStart', function(e) {
                        if ($selfRef.$target.hasClass('in')) {
                            if (!$selfRef.$target.is(e.relatedTarget) && !$selfRef.$target.has(e.relatedTarget).length) {
                                var selectables = $selfRef._tabItems();
                                var $prevNode = $(e.relatedTarget);

                                // Edge case: if coming from another tooltip/popover
                                if ($prevNode.closest('.tooltip, .popover').length) {
                                    $prevNode = null;
                                }

                                if ($prevNode && $prevNode.length) {
                                    var currIndex = selectables.index($selfRef.$element);
                                    var prevIndex = selectables.index($prevNode);
                                    if (currIndex < prevIndex) {
                                        $selfRef._tabPrev($selfRef.$focusLast[0], $selfRef.$target);
                                    }
                                }
                            }
                        }
                    })
                    .off('keydown.cfw.' + this.type + '.focusStart')
                    .on('keydown.cfw.' + this.type + '.focusStart', function(e) {
                        if ($selfRef.$target.hasClass('in')) {
                            $selfRef._tabSet(e);
                            if ($selfRef.flags.keyTab) {
                                if (!$selfRef.flags.keyShift) {
                                    e.stopPropagation();
                                    e.preventDefault();
                                    $selfRef._tabNext($selfRef.$focusFirst[0], $selfRef.$target);
                                }
                            }
                            $selfRef._tabReset();
                        }
                    });
            }

            if ($.CFW_isTouch) {
                // Add empty function for mouseover listeners on immediate
                // children of `<body>` due to missing event delegation on iOS
                // Allows 'click' event to bubble up in Safari
                // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
                $('body').children().on('mouseover', null, $.noop);
            }

            this.$target.CFW_transition(null, this._showComplete.bind(this));
        },

        hide : function(force) {
            clearTimeout(this.delayTimer);

            // Handle delayed show and target not created
            if (!this.$target) { return; }

            if (typeof force === 'undefined') { force = false; }
            if (force) {
                this._hideComplete();
                return;
            }

            // Bail if transition in progress or already hidden
            if (this.inTransition || !this.$target.hasClass('in')) { return; }

            // Start hide transition
            if (!this.$element.CFW_trigger('beforeHide.cfw.' + this.type)) {
                return;
            }

            this.inTransition = true;
            this.$target.removeClass('in');

            this.$target.CFW_transition(null, this._hideComplete.bind(this));
        },

        unlink : function(force) {
            var $selfRef = this;
            if (typeof force === 'undefined') { force = false; }
            clearTimeout(this.delayTimer);

            this.$element.CFW_trigger('beforeUnlink.cfw.' + this.type);

            if (this.$target && this.$target.hasClass('in')) {
                this.$element.one('afterHide.cfw.' + this.type, function() {
                    $selfRef._unlinkComplete();
                });
                this.hide(force);
            } else {
                this._unlinkComplete();
            }
        },

        _unlinkComplete : function() {
            var $element = this.$element;
            var type = this.type;
            if (this.$target) {
                this.$target.off('.cfw.' + this.type)
                    .removeData('cfw.' + this.type);
            }
            this.$element.off('.cfw.' + this.type)
                .removeAttr('data-cfw')
                .removeData('cfw.' + this.type);

            this.$element = null;
            this.$target = null;
            this.$arrow = null;
            this.$focusFirst = null;
            this.$focusLast = null;
            this.instance = null;
            this.settings = null;
            this.type = null;
            this.isDialog = null;
            this.follow = null;
            this.eventTypes = null;
            this.delayTimer = null;
            this.inTransition = null;
            this.closeAdded = null;
            this.activate = null;
            this.hoverState = null;
            this.inState = null;
            this.dynamicTip = null;
            this.inserted = null;
            this.flags = null;
            if (this.popper) {
                this.popper.destroy();
            }
            this.popper = null;

            this._unlinkCompleteExt();

            $element.CFW_trigger('afterUnlink.cfw.' + type);
        },

        _unlinkCompleteExt : function() {
            // intentionally empty - unlink complete extend
        },

        dispose : function() {
            var type = this.type;
            var $element = this.$element;
            var $target = this.$target;

            $(document).one('afterUnlink.cfw.' + this.type, this.$element, function() {
                if ($target) {
                    $target.remove();
                }
                $element.CFW_trigger('dispose.cfw.' + type, {
                    relatedTarget: $target
                });
            });
            this.unlink();
        },

        _insertTip : function(placement) {
            if (this.inserted) { return; }

            var $tip = this.$target;
            $tip.detach();

            var shadowRoot = $().CFW_findShadowRoot(this.$element[0]);
            if (shadowRoot !== null && !this.settings.container) {
                this.settings.container = 'body';
            }

            if (typeof placement === 'object') {
                // Custom placement
                this.settings.container = 'body';
                $tip.appendTo(this.settings.container);
            }
            if (this.settings.container) {
                // Container placement
                $tip.appendTo(this.settings.container);
            } else {
                // Default placement
                $tip.insertAfter(this.$element);
            }

            this.inserted = true;
            this.$element.CFW_trigger('inserted.cfw.' + this.type);
        },

        locateUpdate : function() {
            if (this.popper !== null) {
                this.popper.scheduleUpdate();
            }
        },

        locateTip : function() {
            var placement = typeof this.settings.placement === 'function'
                ? this.settings.placement.call(this, this.$target[0], this.$element[0])
                : this.settings.placement;

            this._insertTip(placement);

            if (typeof placement === 'object') {
                // Custom placement
                this.$target.offset(placement);
                this.$target.addClass('in');
                return;
            }

            // Standard Placement
            var autoToken = /\s?auto?\s?/i;
            var autoFlip = autoToken.test(this.settings.placement);
            placement = this.settings.placement.replace(autoToken, '');
            // Allow for 'auto' placement
            if (!placement.trim().length) {
                placement = 'auto';
            }
            var attachment = this._getAttachment(placement);
            this._addAttachmentClass(attachment);

            this.$target.addClass('in');

            this.popper = new Popper(this.$element[0], this.$target[0], this._getPopperConfig(attachment, autoFlip));
        },

        _showComplete : function() {
            var $selfRef = this;
            var prevHoverState = this.hoverState;
            this.hoverState = null;

            // this.$target.addClass('in')
            this.$target
                .removeAttr('aria-hidden')
                .CFW_mutateTrigger();

            // Mutation handlers
            this.$target
                .attr('data-cfw-mutate', '')
                .CFW_mutationListen()
                .on('mutate.cfw.mutate', function() {
                    $selfRef.locateUpdate();
                });
            this.$element
                .attr('data-cfw-mutate', '')
                .CFW_mutationListen()
                .on('mutate.cfw.mutate', function() {
                    if ($(this).is(':hidden')) {
                        $selfRef.hide(true);
                    }
                });

            if (this.isDialog && this.follow) {
                this.$target.trigger('focus');
                this.follow = false;
            }

            this.inTransition = false;

            // Handle case of immediate dispose after show
            if ($selfRef.$element) {
                $selfRef.$element.attr('aria-describedby', $selfRef.targetID);
            }

            this._showExt();

            if (!this.activate) {
                this.$element.CFW_trigger('afterShow.cfw.' + this.type);
            }
            this.activate = false;

            if (prevHoverState === 'out') { this.leave(); }
        },

        _showExt : function() {
            // intentionally empty - show complete extend
        },

        _hideComplete : function() {
            this._cleanTipClass();
            this.$element
                .off('.cfw.' + this.type + '.focusStart')
                .off('mutate.cfw.mutate')
                .removeAttr('aria-describedby')
                .removeAttr('data-cfw-mutate')
                .CFW_mutationIgnore();
            this.$target
                .css('display', 'none')
                .off('.cfw.' + this.type)
                .off('mutate.cfw.mutate')
                .removeClass('in')
                .attr('aria-hidden', true)
                .removeAttr('data-cfw-mutate')
                .CFW_mutationIgnore();
            if (this.$focusFirst) {
                this.$focusFirst.off('.cfw.' + this.type + '.focusFirst');
            }
            if (this.$focusLast) {
                this.$focusLast.off('.cfw.' + this.type + '.focusLast');
            }
            if ($.CFW_isTouch) {
                // Remove empty mouseover listener for iOS work-around
                $('body').children().off('mouseover', null, $.noop);
            }
            $(document).off('.cfw.' + this.type + '.' + this.instance);
            $(window).off('.cfw.' + this.type + '.' + this.instance);

            this.inState = {
                click: false,
                hover: false,
                focus: false
            };
            this.hoverState = null;

            this.inTransition = false;
            if (this.isDialog) {
                this.$target.attr('tabindex', -1);
                if (this.follow) {
                    this.$element.trigger('focus');
                }
            }

            this.follow = false;

            // Only remove dynamically created tips
            if (this.hoverState !== 'in' && this.dynamicTip) {
                this._removeDynamicTip();
            }

            if (this.popper) {
                this.popper.destroy();
            }

            this._hideExt();

            this.$element.CFW_trigger('afterHide.cfw.' + this.type);

            if (this.disposeOnHide) {
                this.dispose();
            } else if (this.unlinkOnHide) {
                this.unlink();
            }
        },

        _hideExt : function() {
            // intentionally empty - hide complete extend
        },

        _removeDynamicTip : function() {
            this._removeDynamicTipExt();
            this.dynamicTip = false;
            this.inserted = false;
            this.closeAdded = false;
            this.$arrow = null;
            this.$focusFirst = null;
            this.$focusLast = null;
        },

        _removeDynamicTipExt : function() {
            // remove dynamic tip extend
            this.$target.remove();
            this.$target = null;
        },

        _cleanTipClass : function() {
            var regex = new RegExp('(^|\\s)cfw-' + this.type + '\\S+', 'g');
            if (this.$target) {
                var items = this.$target[0].className.match(regex);
                if (items !== null) {
                    for (var i = items.length; i--;) {
                        this.$target[0].classList.remove(items[i].trim());
                    }
                }
            }
        },

        _handlePopperPlacementChange : function(popperData) {
            this._cleanTipClass();
            this._addAttachmentClass(this._getAttachment(popperData.placement));
        },

        _addAttachmentClass : function(attachment) {
            if (this.$target) {
                this.$target.addClass('cfw-' + this.type + '-' + attachment);
            }
        },

        _isElement : function(node) {
            return (node[0] || node).nodeType;
        },

        _getViewport : function() {
            var viewport = this.settings.viewport;

            if (typeof viewport === 'function') {
                viewport = this.settings.viewport.call(this, this.$element);
            }

            var $viewportElm = $(viewport);

            if (this._isElement($viewportElm)) {
                viewport = $viewportElm[0];
            }

            return viewport;
        },

        _getAttachment : function(placement) {
            if (this.$element) {
                var directionVal = window.getComputedStyle(this.$element[0], null).getPropertyValue('direction').toLowerCase();
                var isRTL = Boolean(directionVal === 'rtl');
                var attachmentMap = {
                    AUTO: 'auto',
                    TOP: 'top',
                    FORWARD: isRTL ? 'left' : 'right',
                    RIGHT: 'right',
                    BOTTOM: 'bottom',
                    REVERSE: isRTL ? 'right' : 'left',
                    LEFT: 'left'
                };
                return attachmentMap[placement.toUpperCase()];
            }
            return CFW_Widget_Tooltip.DEFAULTS.placement;
        },

        _getPopperConfig : function(attachment, autoFlip) {
            var $selfRef = this;
            var defaultConfig = {
                placement: attachment,
                modifiers: {
                    flip: {
                        enabled: autoFlip,
                        behavior: 'flip'
                    },
                    arrow: {
                        element: '.' + this.type + '-arrow'
                    },
                    preventOverflow: {
                        padding: this.settings.padding,
                        boundariesElement: this._getViewport()
                    },
                    computeStyle : {
                        gpuAcceleration: this.settings.gpuAcceleration
                    }
                },
                onCreate: function(data) {
                    if (data.originalPlacement !== data.placement) {
                        $selfRef._handlePopperPlacementChange(data);
                    }
                },
                onUpdate: function(data) {
                    $selfRef._handlePopperPlacementChange(data);
                }
            };

            // Use deep merge
            var returnConfig = $.extend(true, defaultConfig, this.settings.popperConfig);
            return returnConfig;
        },

        _isInState : function() {
            for (var key in this.inState) {
                if (this.inState[key]) { return true; }
            }
            return false;
        },

        // Set flags for `tab` key interactions
        _tabSet : function(e) {
            var KEYCODE_TAB = 9;
            this._tabReset();
            if (e.which === KEYCODE_TAB) {
                this.flags.keyTab = true;
                if (e.shiftKey) { this.flags.keyShift = true; }
            }
        },

        // Reset flags for `tab` key interactions
        _tabReset : function() {
            this.flags = {
                keyShift: false,
                keyTab: false
            };
        },

        // Move focus to next tabbabale item before given element
        _tabPrev : function(current, $scope) {
            var $selfRef = this;
            var selectables = $selfRef._tabItems($scope);
            var prevIndex = selectables.length - 1;
            if ($(current).length === 1) {
                var currentIndex = selectables.index(current);
                if (currentIndex > 0) {
                    prevIndex = currentIndex - 1;
                }
            }
            selectables.eq(prevIndex).trigger('focus');
        },

        // Move focus to next tabbabale item after given element
        _tabNext : function(current, $scope) {
            var $selfRef = this;

            var selectables = $selfRef._tabItems($scope);
            var nextIndex = 0;
            if ($(current).length === 1) {
                var currentIndex = selectables.index(current);
                if (currentIndex + 1 < selectables.length) {
                    nextIndex = currentIndex + 1;
                }
            }
            selectables.eq(nextIndex).trigger('focus');
        },

        // Find the next tabbabale item after given element
        _tabFindNext : function(current, $scope) {
            var $selfRef = this;

            var selectables = $selfRef._tabItems($scope);
            var nextIndex = 0;
            if ($(current).length === 1) {
                var currentIndex = selectables.index(current);
                if (currentIndex + 1 < selectables.length) {
                    nextIndex = currentIndex + 1;
                }
            }
            return selectables.eq(nextIndex);
        },

        /*
         * jQuery UI Focusable 1.12.1
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         */
        _focusable : function(element, isTabIndexNotNaN) {
            var map;
            var mapName;
            var $img;
            var focusableIfVisible;
            var fieldset;
            var nodeName = element.nodeName.toLowerCase();

            if (nodeName === 'area') {
                map = element.parentNode;
                mapName = map.name;
                if (!element.href || !mapName || map.nodeName.toLowerCase() !== 'map') {
                    return false;
                }
                $img = $('img[usemap="#' + mapName + '"]');
                return $img.length > 0 && $img.is(':visible');
            }

            if (/^(input|select|textarea|button|object)$/.test(nodeName)) {
                focusableIfVisible = !element.disabled;

                if (focusableIfVisible) {
                    // Form controls within a disabled fieldset are disabled.
                    // However, controls within the fieldset's legend do not get disabled.
                    // Since controls generally aren't placed inside legends, we skip
                    // this portion of the check.
                    fieldset = $(element).closest('fieldset')[0];
                    if (fieldset) {
                        focusableIfVisible = !fieldset.disabled;
                    }
                }
            } else if (nodeName === 'a') {
                focusableIfVisible = element.href || isTabIndexNotNaN;
            } else {
                focusableIfVisible = isTabIndexNotNaN;
            }

            return focusableIfVisible && $(element).is(':visible');
        },

        _tabItems : function($node) {
            var $selfRef = this;
            if (typeof $node === 'undefined') { $node = $(document); }
            var items = $node.find('*').filter(function() {
                var tabIndex = $(this).attr('tabindex');
                var isTabIndexNaN = isNaN(tabIndex);
                return (isTabIndexNaN || tabIndex >= 0) && $selfRef._focusable(this, !isTabIndexNaN);
            });
            return items;
        }
    };

    var Plugin = function(option) {
        var args = [].splice.call(arguments, 1);
        return this.each(function() {
            var $this = $(this);
            var data = $this.data('cfw.tooltip');
            var options = typeof option === 'object' && option;

            if (!data && /unlink|dispose|hide/.test(option)) {
                return;
            }
            if (!data) {
                $this.data('cfw.tooltip', data = new CFW_Widget_Tooltip(this, options));
            }
            if (typeof option === 'string') {
                data[option].apply(data, args);
            }
        });
    };

    $.fn.CFW_Tooltip = Plugin;
    $.fn.CFW_Tooltip.Constructor = CFW_Widget_Tooltip;
}(jQuery));
