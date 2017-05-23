/**
 * --------------------------------------------------------------------------
 * Figuration (v3.0.0-alpha.2): tooltip.js
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
        placement       : 'top',            // Where to locate tooltip (top/bottom/left/right/auto)
        trigger         : 'hover focus',    // How tooltip is triggered (click/hover/focus/manual)
        animate         : true,             // Should the tooltip fade in and out
        delay : {
            show        : 0,                // Delay for showing tooltip (milliseconda)
            hide        : 100               // Delay for hiding tooltip (milliseconds)
        },
        container       : false,            // Where to place tooltip if moving is needed
        viewport        : 'body',           // Viewport to constrain tooltip within
        padding         : 0,                // Padding from viewport edge
        html            : false,            // Use HTML or text insertion mode
        closetext       : '<span aria-hidden="true">&times;</span>', // Text for close links
        closesrtext     : 'Close',          // Screen reader text for close links
        title           : '',               // Title text/html to be inserted
        show            : false,            // Auto show after init
        unlink          : false,            // If on hide to remove events and attributes from tooltip and trigger
        dispose         : false,            // If on hide to unlink, then remove tooltip from DOM
        template        : '<div class="tooltip"><div class="tooltip-body"></div><div class="tooltip-arrow"></div></div>'
    };

    CFW_Widget_Tooltip.prototype = {
        _init : function(type, element, options) {
            this.type = type;
            this.$element = $(element);
            this.$target = null;
            this.$arrow = null;
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

            this.settings = this.getSettings(options);

            this.$viewport = this.settings.viewport && $($.isFunction(this.settings.viewport) ? this.settings.viewport.call(this, this.$element) : (this.settings.viewport.selector || this.settings.viewport));

            this.inState = { click: false, hover: false, focus: false };

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
            if (settings.delay && typeof settings.delay == 'number') {
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
            if ($e.attr('title') || typeof($e.attr('data-cfw-' + this.type +  '-original-title')) != 'string') {
                $e.attr('data-cfw-' + this.type +  '-original-title', $e.attr('title') || '').attr('title', '');
            }
        },

        getTitle : function() {
            var title;
            var $e = this.$element;
            var s = this.settings;

            title = (typeof s.title == 'function' ? s.title.call($e[0]) :  s.title) || $e.attr('data-cfw-' + this.type +  '-original-title');

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

            $tip.removeClass('fade in top bottom left right');
        },

        linkTip : function() {
            // Check for presence of trigger and target ids - set if not present
            this.instance = this.$element.CFW_getID('cfw-' + this.type);
            this.targetID = this.$target.CFW_getID('cfw-' + this.type);

            // Set ARIA attributes on target
            this.$target.attr({
                'role': (this.type == 'tooltip' ? 'tooltip' : (this.isDialog ? 'dialog' : 'tooltip')),
                'aria-hidden': 'true',
                'tabindex': -1
            });
        },

        bindTip : function(modeInit) {
            var $selfRef = this;

            for (var i = this.eventTypes.length; i--;) {
                var eventType = this.eventTypes[i];
                if (eventType == 'click' || eventType == 'manual') {
                    this.isDialog = true;
                }
                if (eventType == 'click') {
                    // Click events
                    this.$element
                        .off('click.cfw.' + this.type)
                        .on('click.cfw.' + this.type, $.proxy(this.toggle, this));

                    // Inject close button
                    if (this.$target != null && !this.closeAdded) {
                        // Check for pre-existing close buttons
                        if (!this.$target.find('[data-cfw-dismiss="' + this.type +  '"]').length) {
                            var $close = $('<button type="button" class="close" data-cfw-dismiss="' + this.type +  '" aria-label="' + this.settings.closesrtext + '">' + this.settings.closetext + '</button>');
                            $close.prependTo(this.$target);
                            this.closeAdded = true;
                        }
                    }
                } else if (eventType != 'manual') {
                    // Hover/focus events
                    var eventIn  = (eventType == 'hover') ? 'mouseenter' : 'focusin';
                    var eventOut = (eventType == 'hover') ? 'mouseleave' : 'focusout';

                    if (modeInit) {
                        this.$element.on(eventIn  + '.cfw.' + this.type, $.proxy(this.enter, this));
                        this.$element.on(eventOut + '.cfw.' + this.type, $.proxy(this.leave, this));
                    } else {
                        this.$target.off('.cfw.' + this.type);
                        this.$target.on(eventIn  + '.cfw.' + this.type, $.proxy(this.enter, this));
                        this.$target.on(eventOut + '.cfw.' + this.type, $.proxy(this.leave, this));
                    }
                }
            }

            if (this.$target) {
                // Key handling for closing
                this.$target.off('keydown.cfw.' + this.type + '.close')
                    .on('keydown.cfw.' + this.type + '.close', function(e) {
                        var code = e.charCode || e.which;
                        if (code && code == 27) {// if ESC is pressed
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
                    .on('click.dismiss.cfw.' + this.type, '[data-cfw-dismiss="' + this.type + '"]', function() {
                        $selfRef.hide();
                    });
            }
        },

        toggle : function(e) {
            if (e) {
                this.inState.click = !this.inState.click;
                this.follow = true;

                if (!this._isInState()) {
                    this.leave();
                } else {
                    this.enter();
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
                this.inState[e.type == 'focusin' ? 'focus' : 'hover'] = true;
            }

            if ((this.$target && this.$target.hasClass('in')) || this.hoverState == 'in') {
                this.hoverState = 'in';
                return;
            }

            clearTimeout(this.delayTimer);

            this.hoverState = 'in';

            if (!this.settings.delay.show) { return this.show(); }

            var $selfRef = this;
            this.delayTimer = setTimeout(function() {
                if ($selfRef.hoverState == 'in') { $selfRef.show(); }
            }, this.settings.delay.show);
        },

        leave : function(e) {
            if (e) {
                this.inState[e.type == 'focusout' ? 'focus' : 'hover'] = false;
            }

            if (this._isInState()) { return; }

            clearTimeout(this.delayTimer);

            this.hoverState = 'out';
            if (!this.settings.delay.hide) { return this.hide(); }

            var $selfRef = this;
            this.delayTimer = setTimeout(function() {
                if ($selfRef.hoverState == 'out') { $selfRef.hide(); }
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
                if (target.length <= 0) { return false; }
                this.dynamicTip = true;
                this.$target = target;
            }
            if (this.$target.length != 1) {
                throw new Error(this.type + ' `template` option must consist of exactly 1 top-level element!');
            }
            this.$target.data('cfw.' + this.type, this);
            this.linkTip();
            this.bindTip(false);
            this.setContent();

            if (this.settings.animate) { this.$target.addClass('fade'); }

            this.locateTip();

            // Additional tab/focus handlers for non-inline items
            if (this.settings.container) {
                this.$element
                    .off('focusin.cfw.' + this.type + '.focusStart')
                    .on('focusin.cfw.' + this.type + '.focusStart', function(e) {
                        if ($selfRef.$target.hasClass('in')) {
                            // Check related target and move to start or end of popover
                            var selectables = $selfRef._tabItems();
                            var prevIndex = selectables.length - 1;
                            var $prevNode = $(e.relatedTarget);
                            // Edge case: if coming from another tooltip/popover - just place at start of target
                            // Otherwise very complex to determine where coming from and focus should be going to
                            if (($prevNode.closest('.tooltip').length > 0) || ($prevNode.closest('.popover').length > 0)) {
                                $prevNode = null;
                            }
                            if ($prevNode && $prevNode.length === 1) {
                                var currIndex = selectables.index($selfRef.$element);
                                prevIndex = selectables.index($prevNode);
                                if (currIndex < prevIndex) {
                                    var tipSels = $selfRef._tabItems($selfRef.$target);

                                    var selsIndex = tipSels.length - 2;
                                    tipSels.eq(selsIndex).trigger('focus');
                                } else {
                                    $selfRef.$target.trigger('focus');
                                }
                            } else {
                                $selfRef.$target.trigger('focus');
                            }
                        }
                    });
                this.$target
                    .off('.cfw.' + this.type + '.keyflag')
                    .on('keydown.cfw.' + this.type + '.keyflag', function(e) {
                        if (e.which == 9) {
                            $selfRef.flags.keyTab = true;
                            if (e.shiftKey) { $selfRef.flags.keyShift = true; }
                        }
                    })
                    .on('keyup.cfw.' + this.type + '.keyflag', function(e) {
                        if (e.which == 9) {
                            $selfRef.flags.keyTab = false;
                            $selfRef.flags.keyShift = false;
                        }
                    });

                // Also inject an item to fake loss of focus in case the tooltip
                // is last tabbable item in document - otherwise focus drops off page
                if (!this.$focusLast && (this.eventTypes.indexOf('click') >= 0)) {
                    this.$focusLast = $(document.createElement('span'))
                    .addClass(this.type + '-focuslast')
                    .attr('tabindex', 0)
                    .appendTo(this.$target);
                }
                if (this.$focusLast) {
                    this.$focusLast
                        .off('focusin.cfw.' + this.type + '.focusLast')
                        .on('focusin.cfw.' + this.type + '.focusLast', function(e) {
                            // Bypass this item if coming from outside of tip
                            if ($selfRef.$target[0] !== e.relatedTarget && !$selfRef.$target.has(e.relatedTarget).length) {
                                e.preventDefault();
                                return;
                            }
                            $selfRef._tabNext($selfRef.$element[0]);
                        });
                }
                this.$target
                    .off('focusout.cfw.' + this.type)
                    .on('focusout.cfw.' + this.type, function() {
                        $(document)
                            .off('focusin.cfw.' + this.type + '.' + this.instance)
                            .one('focusin.cfw.' + this.type + '.' + this.instance, function(e) {
                                if (document !== e.target && $selfRef.$target[0] !== e.target && !$selfRef.$target.has(e.target).length) {
                                    if ($selfRef.flags.keyTab) {
                                        if ($selfRef.flags.keyShift) {
                                            $selfRef._tabPrev($selfRef.$element[0]);
                                        } else {
                                            $selfRef._tabNext($selfRef.$element[0]);
                                        }
                                    }
                                    // Reset flags
                                    $selfRef.flags = {
                                        keyShift: false,
                                        keyTab: false
                                    };
                                }
                            });
                    });
            }

            if ($.CFW_isTouch) {
                // Add empty function for mouseover listeners on immediate
                // children of `<body>` due to missing event delegation on iOS
                // Allows 'click' event to bubble up in Safari
                // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
                $('body').children().on('mouseover', null, $.noop);
            }

            // Basic resize handler
            $(window).on('resize.cfw.' + this.type + '.' + this.instance, $.proxy(this.locateTip, this));

            this.$target.CFW_transition(null, $.proxy(this._showComplete, this));
        },

        hide : function(force) {
            clearTimeout(this.delayTimer);

            // Handle delayed show and target not created
            if (!this.$target) { return; }

            if (force === undefined) { force = false; }
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
            this.$target
                .removeAttr('data-cfw-mutate')
                .CFW_mutationIgnore()
                .removeClass('in');

            if ($.CFW_isTouch) {
                // Remove empty mouseover listener for iOS work-around
                $('body').children().off('mouseover', null, $.noop);
            }

            this.$target.CFW_transition(null, $.proxy(this._hideComplete, this));

            this.hoverState = null;
        },

        unlink : function(force) {
            var $selfRef = this;
            if (force === undefined) { force = false; }
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
            this.$viewport = null;
            this.$arrow = null;
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

            this._unlinkCompleteExt();

            $element.CFW_trigger('afterUnlink.cfw.' + type);
        },

        _unlinkCompleteExt : function() {
            // unlink complete extend
            return;
        },

        dispose : function() {
            var $target = this.$target;

            $(document).one('afterUnlink.cfw.' + this.type, this.$element, function(e) {
                var $this = $(e.target);
                if ($target) {
                    $target.remove();
                }
                $this.CFW_trigger('dispose.cfw.' + this.type);
            });
            this.unlink();
        },

        _insertTip : function(placement) {
            if (this.inserted) { return; }

            var $tip = this.$target;
            $tip.detach();

            if (typeof placement == 'object') {
                // Custom placement
                this.settings.container = 'body';
                $tip.appendTo(this.settings.container);
                $tip.offset(placement);
                $tip.addClass('in');
            } else {
                // Standard Placement
                if (this.settings.container) {
                    $tip.appendTo(this.settings.container);
                } else {
                    $tip.insertAfter(this.$element);
                }
            }

            this.inserted = true;
            this.$element.CFW_trigger('inserted.cfw.' + this.type);
        },

        locateTip : function() {
            var $tip = this.$target;

            $tip.removeClass('top left bottom right')
                .css({ top: 0, left: 0, display: 'block' });

            var placement = typeof this.settings.placement == 'function' ?
                this.settings.placement.call(this, this.$target[0], this.$element[0]) :
                this.settings.placement;

            this._insertTip(placement);

            if (typeof placement == 'object') {
                // Custom placement
                return;
            }

            // Standard Placement
            var autoToken = /\s?auto?\s?/i;
            var autoPlace = autoToken.test(placement);
            if (autoPlace) {
                placement = placement.replace(autoToken, '') || CFW_Widget_Tooltip.DEFAULTS.placement;
            }

            $tip.addClass(placement);

            var pos          = this._getPosition();
            var actualWidth  = $tip[0].getBoundingClientRect().width;
            var actualHeight = $tip[0].getBoundingClientRect().height;

            if (autoPlace) {
                var orgPlacement = placement;

                var viewportDim = this.getViewportBounds();

                placement = placement == 'bottom' && pos.bottom + actualHeight > viewportDim.bottom ? 'top'    :
                            placement == 'top'    && pos.top    - actualHeight < viewportDim.top    ? 'bottom' :
                            placement == 'right'  && pos.right  + actualWidth  > viewportDim.width  ? 'left'   :
                            placement == 'left'   && pos.left   - actualWidth  < viewportDim.left   ? 'right'  :
                            placement;

                $tip.removeClass(orgPlacement)
                    .addClass(placement);
            }

            var calculatedOffset = this._getCalculatedOffset(placement, pos, actualWidth, actualHeight);

            this._applyPlacement(calculatedOffset, placement);
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
                    $selfRef.locateTip();
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

            // Delay to keep NVDA (and other screen readers?) from reading dialog header twice
            setTimeout(function() {
                // Handle case of immediate dispose after show
                if ($selfRef.$element) {
                    $selfRef.$element.attr('aria-describedby', $selfRef.targetID);
                }
            }, 25);

            if (!this.activate) {
                this.$element.CFW_trigger('afterShow.cfw.' + this.type);
            }
            this.activate = false;

            if (prevHoverState == 'out') { this.leave(); }
        },

        _hideComplete : function() {
            this.$element
                .off('.cfw.' + this.type + '.focusStart')
                .removeAttr('aria-describedby')
                .removeAttr('data-cfw-mutate')
                .CFW_mutationIgnore();
            this.$target
                .off('.cfw.' + this.type)
                .removeClass('in')
                .css('display', 'none')
                .attr('aria-hidden', true)
                .removeAttr('data-cfw-mutate')
                .CFW_mutationIgnore();
            if (this.$focusLast) {
                this.$focusLast.off('.cfw.' + this.type + '.focusLast');
            }
            $(document).off('.cfw.' + this.type + '.' + this.instance);
            $(window).off('.cfw.' + this.type + '.' + this.instance);

            this.inState = { click: false, hover: false, focus: false };

            this.inTransition = false;
            if (this.isDialog) {
                this.$target.attr('tabindex', -1);
                if (this.follow) {
                    this.$element.trigger('focus');
                }
            }

            this.follow = false;

            // Only remove dynamically created tips
            if (this.hoverState != 'in' && this.dynamicTip) {
                this._removeDynamicTip();
            }

            this.$element.CFW_trigger('afterHide.cfw.' + this.type);
        },

        _removeDynamicTip : function() {
            this._removeDynamicTipExt();
            this.dynamicTip = false;
            this.inserted = false;
            this.closeAdded = false;
            this.$arrow = null;
        },

        _removeDynamicTipExt : function() {
            // remove dynamic tip extend
            this.$target.remove();
            this.$target = null;
        },

        _getPosition : function() {
            var $element = this.$element;
            var el = $element[0];
            var isBody = el.tagName == 'BODY';

            var elRect = el.getBoundingClientRect();
            elRect = $.extend({}, elRect, {
                top: elRect.top + window.pageYOffset,
                left: elRect.left + window.pageXOffset
            });

            var elOffset  = isBody ? { top: 0, left: 0 } : $element.offset();
            // SVG/Chrome issue: https://github.com/jquery/jquery/issues/2895
            if ($element[0].className instanceof SVGAnimatedString) {
                elOffset = {};
            }

            var scroll    = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() };
            var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null;
            return $.extend({}, elRect, scroll, outerDims, elOffset);
        },

        _getCalculatedOffset : function(placement, pos, actualWidth, actualHeight) {
            return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2 } :
                   placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } :
                   placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
                /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width };
        },

        _applyPlacement : function(offset, placement) {
            var $tip   = this.$target;
            var width  = $tip[0].getBoundingClientRect().width;
            var height = $tip[0].getBoundingClientRect().height;

            // manually read margins because getBoundingClientRect includes difference
            // includes protection against NaN
            var marginTop = parseInt($tip.css('margin-top'), 10) || 0;
            var marginLeft = parseInt($tip.css('margin-left'), 10) || 0;

            offset.top  = offset.top  + marginTop;
            offset.left = offset.left + marginLeft;

            // $.fn.offset doesn't round pixel values
            // so we use setOffset directly with our own function B-0
            $.offset.setOffset($tip[0], $.extend({
                using: function(props) {
                    $tip.css({
                        top: Math.round(props.top),
                        left: Math.round(props.left)
                    });
                }
            }, offset), 0);

            $tip.addClass('in');

            // check to see if placing tip in new offset caused the tip to resize itself
            var actualWidth  = $tip[0].getBoundingClientRect().width;
            var actualHeight = $tip[0].getBoundingClientRect().height;

            if (placement == 'top' && actualHeight != height) {
                offset.top = offset.top + height - actualHeight;
            }

            var delta = this._getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight);

            if (delta.left) {
                offset.left += delta.left;
            } else {
                offset.top += delta.top;
            }

            var isVertical          = /top|bottom/.test(placement);
            var arrowDelta          = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight;
            var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight';

            $tip.offset(offset);
            this._replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical);
        },

        getViewportBounds : function() {
            var $viewport = this.$viewport;
            var elRect = $viewport[0].getBoundingClientRect();

            if ($viewport.is('body') && (/fixed|absolute/).test(this.$element.css('position'))) {
                // fixed and absolute elements should be tested against the window
                return $.extend({}, elRect, this.getScreenSpaceBounds($viewport));
            }

            return $.extend({}, elRect, $viewport.offset(), { width: $viewport.outerWidth(), height: $viewport.outerHeight() });
        },

        getScreenSpaceBounds : function($viewport) {
            return {
                top: $viewport.scrollTop(),
                left: $viewport.scrollLeft(),
                width: $(window).width(),
                height: $(window).height()
            };
        },

        _getViewportAdjustedDelta : function(placement, pos, actualWidth, actualHeight) {
            var delta = { top: 0, left: 0 };
            if (!this.$viewport) return delta;

            var viewportPadding = this.settings.padding;
            var viewportDimensions = this.getViewportBounds();

            if (/right|left/.test(placement)) {
                var topEdgeOffset    = pos.top - viewportPadding;
                var bottomEdgeOffset = pos.top + viewportPadding + actualHeight;

                if (topEdgeOffset < viewportDimensions.top) { // top overflow
                    delta.top = viewportDimensions.top - topEdgeOffset;
                } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
                    delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset;
                }
            } else {

                var leftEdgeOffset  = pos.left - viewportPadding;
                var rightEdgeOffset = pos.left + viewportPadding + actualWidth;
                if (leftEdgeOffset < viewportDimensions.left) { // left overflow
                    delta.left = viewportDimensions.left - leftEdgeOffset;
                } else if (rightEdgeOffset > viewportDimensions.right) { // right overflow
                    delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset;
                }
            }

            return delta;
        },

        _replaceArrow : function(delta, dimension, isVertical) {
            this._arrow()
                .css(isVertical ? 'left' : 'top', 50 * (1 - delta / dimension) + '%')
                .css(isVertical ? 'top' : 'left', '');
        },

        _arrow : function() {
            if (!this.$arrow) {
                this.$arrow = this.$target.find('.tooltip-arrow');
            }
            return this.$arrow;
        },

        _isInState : function() {
            for (var key in this.inState) {
                if (this.inState[key]) return true;
            }
            return false;
        },

        // Move focus to next tabbabale item before given element
        _tabPrev : function(current) {
            var $selfRef = this;

            var selectables = $selfRef._tabItems();
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
        _tabNext : function(current) {
            var $selfRef = this;

            var selectables = $selfRef._tabItems();
            var nextIndex = 0;
            if ($(current).length === 1){
                var currentIndex = selectables.index(current);
                if (currentIndex + 1 < selectables.length) {
                    nextIndex = currentIndex + 1;
                }
            }
            selectables.eq(nextIndex).trigger('focus');
        },

        _focusable : function(element, isTabIndexNotNaN) {
            var map;
            var mapName;
            var $img;
            var nodeName = element.nodeName.toLowerCase();

            if ('area' === nodeName) {
                map = element.parentNode;
                mapName = map.name;
                if (!element.href || !mapName || map.nodeName.toLowerCase() !== 'map') {
                    return false;
                }
                $img = $('img[usemap="#' + mapName + '"]');
                return $img.length > 0 && $img.is(':visible');
            }

            return (/^(input|select|textarea|button|object)$/.test(nodeName) ?
                !element.disabled :
                'a' === nodeName ?
                    element.href || isTabIndexNotNaN :
                    isTabIndexNotNaN) &&
                $(element).is(':visible');
        },

        _tabItems : function($node) {
            var $selfRef = this;
            if ($node === undefined) { $node = $(document); }
            var items = $node.find('*').filter(function() {
                var tabIndex = $(this).attr('tabindex');
                var isTabIndexNaN = isNaN(tabIndex);
                return (isTabIndexNaN || tabIndex >= 0) && $selfRef._focusable(this, !isTabIndexNaN);
            });
            return items;
        }
    };

    function Plugin(option) {
        var args = [].splice.call(arguments, 1);
        return this.each(function() {
            var $this = $(this);
            var data = $this.data('cfw.tooltip');
            var options = typeof option === 'object' && option;

            if (!data && /unlink|dispose|hide/.test(option)) {
                return false;
            }
            if (!data) {
                $this.data('cfw.tooltip', (data = new CFW_Widget_Tooltip(this, options)));
            }
            if (typeof option === 'string') {
                data[option].apply(data, args);
            }
        });
    }

    $.fn.CFW_Tooltip = Plugin;
    $.fn.CFW_Tooltip.Constructor = CFW_Widget_Tooltip;

})(jQuery);
