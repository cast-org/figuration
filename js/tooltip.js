/**
 * --------------------------------------------------------------------------
 * Figuration (v2.0.0): tooltip.js
 * Licensed under MIT (https://github.com/cast-org/figuration/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

(function($) {
    'use strict';

    var CFW_Widget_Tooltip = function(element, options) {
        this.$triggerElm = null;
        this.dataToggle = null;
        this.$targetElm = null;
        this.type = null;
        this.eventTypes = null;
        this.delayTimer = null;
        this.inTransition = null;
        this.closeAdded = false;
        this.unlinking = false;
        this.activate = false;
        this.hoverState = null;
        this.inState = null;
        this.dynamicTip = false;
        this.$focusLast = null;
        this.flags = {
            keyShift: false,
            keyTab : false
        };

        this._init('tooltip', element, options);
    };

    CFW_Widget_Tooltip.DEFAULTS = {
        toggle          : false,            // Target selector
        placement       : 'top',            // Where to locate tooltip (top/bottom/left/right/auto)
        trigger         : 'hover focus',    // How tooltip is triggered (click/hover/focus/manual)
        follow          : false,            // If the browser focus should follow active tooltip
        animate         : true,             // Should the tooltip fade in and out
        speed           : 150,              // Speed of animation (milliseconds)
        delay : {
            show        : 0,                // Delay for showing tooltip (milliseconda)
            hide        : 250               // Delay for hiding tooltip (milliseconds)
        },
        container       : false,            // Where to place tooltip if moving is needed
        viewport: {                         // Viewport to constrain tooltip within
            selector: 'body',
            padding: 0
        },
        html            : false,            // Use HTML or text insertion mode
        closetext       : '<span aria-hidden="true">&times;</span>', // Text for close links
        closesrtext     : 'Close',          // Screen reader text for close links
        title           : '',               // Title text/html to be inserted
        unlink          : false,            // If on hide to remove events and attributes from tooltip and trigger
        destroy         : false,            // If on hide to unlink, then remove tooltip from DOM
        template        : '<div class="tooltip"><div class="tooltip-inner"></div><div class="tooltip-arrow"></div></div>'
    };

    CFW_Widget_Tooltip.prototype = {
        _init : function(type, element, options) {
            this.type = type;
            this.$triggerElm = $(element);
            this.settings = this.getSettings(options);

            this.$viewport = this.settings.viewport && $($.isFunction(this.settings.viewport) ? this.settings.viewport.call(this, this.$triggerElm) : (this.settings.viewport.selector || this.settings.viewport));

            this.inState = { click: false, hover: false, focus: false };

            this.$triggerElm.attr('data-cfw', this.type);

            // Find target by id/css selector - only pick first one found
            var dataToggle;
            var $findTarget = $(this.settings.toggle).eq(0);
            if ($findTarget.length) {
                dataToggle = this.settings.toggle;
            } else {
                // If not found by selector - find by 'toggle' data
                dataToggle = this.$triggerElm.attr('data-cfw-' + this.type + '-toggle');
                $findTarget = $('[data-cfw-' + this.type + '-target="' + dataToggle + '"]');
            }
            if ($findTarget.length) {
                this.dataToggle = dataToggle;
                this.$targetElm = $findTarget;
            } else {
                this.fixTitle();
            }

            if (this.settings.activate) {
                this.settings.trigger = 'click';
            }

            // Bind events
            this.eventTypes = this.settings.trigger.split(' ');
            this.bindTip(true);

            if (this.$targetElm) {
                this.$targetElm.data('cfw.' + this.type, this);
            }

            if (this.settings.activate) {
                this.activate = true;
                this.show();
            }

            this._trigger('init.cfw.' + this.type);
        },

        getDefaults: function() {
            return CFW_Widget_Tooltip.DEFAULTS;
        },

        getSettings : function(options) {
            var settings = $.extend({}, this.getDefaults(), this._parseDataAttr(), this._parseDataAttrExt(), options);
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
            var $e = this.$triggerElm;
            if ($e.attr('title') || typeof($e.attr('data-cfw-' + this.type +  '-original-title')) != 'string') {
                $e.attr('data-cfw-' + this.type +  '-original-title', $e.attr('title') || '').attr('title', '');
            }
        },

        getTitle : function() {
            var title;
            var $e = this.$triggerElm;
            var s = this.settings;

            title = (typeof s.title == 'function' ? s.title.call($e[0]) :  s.title) || $e.attr('data-cfw-' + this.type +  '-original-title');

            return title;
        },

        setContent : function() {
            var $tip = this.$targetElm;
            var $inner = $tip.find('.tooltip-inner');

            if (!this.dataToggle) {
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
            this.triggerID = this._getID(this.$triggerElm, 'cfw-' + this.type);
            this.targetID = this._getID(this.$targetElm, 'cfw-' + this.type);

            // Set ARIA attributes on target
            this.$targetElm.attr({
                'role': (this.type == 'tooltip' ? 'tooltip' : (this.settings.follow ? 'dialog' : 'tooltip')),
                'aria-hidden': 'true',
                'tabindex': -1
            });
        },

        bindTip : function(modeInit) {
            var $selfRef = this;

            for (var i = this.eventTypes.length; i--;) {
                var eventType = this.eventTypes[i];
                if (eventType == 'click') {
                    // Click events
                    this.$triggerElm
                        .off('click.cfw.' + this.type)
                        .on('click.cfw.' + this.type, $.proxy(this.toggle, this));

                    // Inject close button
                    if (this.$targetElm != null && !this.closeAdded) {
                        // Check for pre-existing close buttons
                        if (!this.$targetElm.find('[data-cfw-dismiss="' + this.type +  '"]').length) {
                            var $close = $('<button type="button" class="close" data-cfw-dismiss="' + this.type +  '" aria-label="' + this.settings.closesrtext + '">' + this.settings.closetext + '</button>');
                            $close.prependTo(this.$targetElm);
                            this.closeAdded = true;
                        }
                    }
                } else if (eventType != 'manual') {
                    // Hover/focus events
                    var eventIn  = (eventType == 'hover') ? 'mouseenter' : 'focusin';
                    var eventOut = (eventType == 'hover') ? 'mouseleave' : 'focusout';

                    if (modeInit) {
                        this.$triggerElm.on(eventIn  + '.cfw.' + this.type, $.proxy(this.enter, this));
                        this.$triggerElm.on(eventOut + '.cfw.' + this.type, $.proxy(this.leave, this));
                    } else {
                        this.$targetElm.off('.cfw.' + this.type);
                        this.$targetElm.on(eventIn  + '.cfw.' + this.type, $.proxy(this.enter, this));
                        this.$targetElm.on(eventOut + '.cfw.' + this.type, $.proxy(this.leave, this));
                    }
                }
            }

            if (this.$targetElm) {
                // Key handling for closing
                this.$targetElm.off('keydown.cfw.' + this.type + '.close')
                    .on('keydown.cfw.' + this.type + '.close', function(e) {
                        var code = e.charCode || e.which;
                        if (code && code == 27) {// if ESC is pressed
                            e.stopPropagation();
                            // Click the close button if it exists otherwise force tooltip closed
                            if ($('.close', $selfRef.$targetElm).length > 0) {
                                $('.close', $selfRef.$targetElm).eq(0).trigger('click');
                            } else {
                                $selfRef.hide(true);
                            }
                        }
                    });

                // Bind 'close' buttons
                this.$targetElm.off('click.dismiss.cfw.' + this.type, '[data-cfw-dismiss="' + this.type + '"]')
                    .on('click.dismiss.cfw.' + this.type, '[data-cfw-dismiss="' + this.type + '"]', function(e) {
                        $selfRef.toggle(e);
                    });
                // Hide tooltips on modal close
                this.$triggerElm.closest('.modal')
                    .off('beforeHide.cfw.modal')
                    .on('beforeHide.cfw.modal', function() {
                        $selfRef.hide(true);
                    });
            }
        },

        toggle : function(e) {
            if (e) { e.preventDefault(); }

            if (e) {
                this.inState.click = !this.inState.click;
                this.settings.follow = true;
            }

            if (this.$targetElm && this.$targetElm.hasClass('in')) {
                var holdDelay = this.settings.delay.hide;
                this.settings.delay.hide = 0;
                this.hide();
                this.settings.delay.hide = holdDelay;
            } else {
                this.show();
            }
        },

        enter : function(e) {
            if (e) {
                this.inState[e.type == 'focusin' ? 'focus' : 'hover'] = true;
            }

            if ((this.$targetElm && this.$targetElm.hasClass('in')) || this.hoverState == 'in') {
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
            if (this.$targetElm && this.$targetElm.hasClass('in')) { return; }

            if (!this.activate) {
                // Start show transition
                if (!this._trigger('beforeShow.cfw.' + this.type)) {
                    return;
                }
            }

            this.inTransition = 1;

            // Create/link the tooltip container
            if (!this.$targetElm) {
                var targetElm = this.createTip();
                if (targetElm.length <= 0) { return false; }
                this.dynamicTip = true;
                this.$targetElm = targetElm;
            }
            if (this.$targetElm.length != 1) {
                throw new Error(this.type + ' `template` option must consist of exactly 1 top-level element!');
            }
            this.linkTip();
            this.bindTip(false);
            this.setContent();

            if (this.settings.animate) { this.$targetElm.addClass('fade'); }

            this.locateTip();

            // Additional tab/focus handlers for non-inline items
            if (this.settings.container) {
                this.$triggerElm
                    .off('focusin.cfw.' + this.type + '.focusStart')
                    .on('focusin.cfw.' + this.type + '.focusStart', function(e) {
                        if ($selfRef.$targetElm.hasClass('in')) {
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
                                var currIndex = selectables.index($selfRef.$triggerElm);
                                prevIndex = selectables.index($prevNode);
                                if (currIndex < prevIndex) {
                                    var tipSels = $selfRef._tabItems($selfRef.$targetElm);

                                    var selsIndex = tipSels.length - 2;
                                    tipSels.eq(selsIndex).trigger('focus');
                                } else {
                                    $selfRef.$targetElm.trigger('focus');
                                }
                            } else {
                                $selfRef.$targetElm.trigger('focus');
                            }
                        }
                    });
                this.$targetElm
                    .off('keydown.cfw.' + this.type + '.tabmove')
                    .on('keydown.cfw.' + this.type + '.tabmove', function(e) {
                        if (e.which == 9) {
                            $selfRef.flags.keyTab = true;
                            if (e.shiftKey) { $selfRef.flags.keyShift = true; }
                        }
                    });
                this.$targetElm
                    .off('keyup.cfw.' + this.type + '.tabmove')
                    .on('keyup.cfw.' + this.type + '.tabmove', function(e) {
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
                    .appendTo(this.$targetElm);
                }
                if (this.$focusLast) {
                    this.$focusLast
                        .off('focusin.cfw.' + this.type + '.focusLast')
                        .on('focusin.cfw.' + this.type + '.focusLast', function(e) {
                            // Bypass this item if coming from outside of tip
                            if ($selfRef.$targetElm[0] !== e.relatedTarget && !$selfRef.$targetElm.has(e.relatedTarget).length) {
                                e.preventDefault();
                                return;
                            }
                            $selfRef._tabNext($selfRef.$triggerElm[0]);
                        });
                }
                this.$targetElm
                    .off('focusout.cfw.' + this.type + '.tabmove')
                    .on('focusout.cfw.' + this.type + '.tabmove', function() {
                        $(document)
                            .off('focusin.cfw.' + this.type + '.tabmove')
                            .one('focusin.cfw.' + this.type + '.tabmove', function(e) {
                                if (document !== e.target && $selfRef.$targetElm[0] !== e.target && !$selfRef.$targetElm.has(e.target).length) {
                                    if ($selfRef.flags.keyTab) {
                                        if ($selfRef.flags.keyShift) {
                                            $selfRef._tabPrev($selfRef.$triggerElm[0]);
                                        } else {
                                            $selfRef._tabNext($selfRef.$triggerElm[0]);
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

            if ($.support.transitionEnd && this.$targetElm.hasClass('fade')) {
                this.$targetElm.one('cfwTransitionEnd', $.proxy(this._showComplete, this))
                    .CFW_emulateTransitionEnd(this.settings.speed);
            } else {
                this._showComplete();
            }
        },

        hide : function(force) {
            clearTimeout(this.delayTimer);

            // Handle delayed show and target not created
            if (!this.$targetElm) { return; }

            // Bail if transition in progress or already hidden
            if (this.inTransition || !this.$targetElm.hasClass('in')) { return; }

            if (force === undefined) { force = false; }
            if (force) {
                this._hideComplete();
                return;
            }

            // Start hide transition
            if (!this._trigger('beforeHide.cfw.' + this.type)) {
                return;
            }

            this.inTransition = 1;

            this.$triggerElm
                .off('.cfw.' + this.type + '.focusStart')
                .off('.cfw.modal')
                .removeAttr('aria-describedby');
            this.$targetElm
                .off('.cfw.' + this.type)
                .removeClass('in');
            if (this.$focusLast) {
                this.$focusLast.off('.cfw.' + this.type + '.focusLast');
            }
            $(document).off('.cfw.' + this.type + '.tabmove');

            if ($.support.transitionEnd && this.$targetElm.hasClass('fade')) {
                this.$targetElm.one('cfwTransitionEnd', $.proxy(this._hideComplete, this))
                    .CFW_emulateTransitionEnd(this.settings.speed);
            } else {
                this._hideComplete();
            }

            this.hoverState = null;
        },

        unlink : function(force) {
            var $selfRef = this;
            if (force === undefined) { force = false; }

            clearTimeout(this.delayTimer);

            this._trigger('beforeUnlink.cfw.' + this.type);
            this.unlinking = true;

            if (this.$targetElm && this.$targetElm.hasClass('in')) {
                this.$triggerElm.one('afterHide.cfw.' + this.type, function() {
                    $selfRef.unlinkComplete();
                });
                this.hide(force);
            } else {
                this.unlinkComplete();
            }
        },

        unlinkComplete : function() {
            if (this.$targetElm) {
                this.$targetElm.off('.cfw.' + this.type)
                    .removeData('cfw.' + this.type);
            }
            this.$triggerElm.off('.cfw.' + this.type)
                .off('.cfw.modal')
                .removeAttr('data-cfw')
                .removeData('cfw.' + this.type);
            this.unlinking = false;
            this._trigger('afterUnlink.cfw.' + this.type);
        },

        destroy : function() {
            var $selfRef = this;
            $(document).one('afterUnlink.cfw.' + this.type, this.$triggerElm, function() {
                if ($selfRef.$targetElm !== null) {
                    $selfRef.$targetElm.remove();
                }
                $selfRef._trigger('destroy.cfw.' + $selfRef.type);
            });
            this.unlink(true);

            this.$arrow = null;
            this.$viewport = null;
            this.$targetElm = null;
            this.$triggerElm = null;
        },

        locateTip : function() {
            var $tip = this.$targetElm;

            $tip.removeClass('top left bottom right');

            $tip.detach()
                .css({ top: 0, left: 0, display: 'block' });

            var placement = typeof this.settings.placement == 'function' ?
                this.settings.placement.call(this, this.$targetElm[0], this.$triggerElm[0]) :
                this.settings.placement;

            if (typeof placement == 'object') {
                // Custom placement
                this.settings.container = 'body';
                $tip.appendTo(this.settings.container);
                this._trigger('inserted.cfw.' + this.type);
                $tip.offset(placement);
                $tip.addClass('in');
            } else {
                // Standard Placement
                var autoToken = /\s?auto?\s?/i;
                var autoPlace = autoToken.test(placement);
                if (autoPlace) {
                    placement = placement.replace(autoToken, '') || CFW_Widget_Tooltip.DEFAULTS.placement;
                }

                $tip.addClass(placement)
                    .data('cfw.' + this.type, this);

                if (this.settings.container) {
                    $tip.appendTo(this.settings.container);
                } else {
                    $tip.insertAfter(this.$triggerElm);
                }
                this._trigger('inserted.cfw.' + this.type);

                var pos          = this._getPosition();
                var actualWidth  = $tip[0].offsetWidth;
                var actualHeight = $tip[0].offsetHeight;

                if (autoPlace) {
                    var orgPlacement = placement;

                    var viewportDim = this._getPosition(this.$viewport);

                    placement = placement == 'bottom' && pos.bottom + actualHeight > viewportDim.bottom ? 'top'    :
                                placement == 'top'    && pos.top    - actualHeight < viewportDim.top    ? 'bottom' :
                                placement == 'right'  && pos.right  + actualWidth  > viewportDim.width  ? 'left'   :
                                placement == 'left'   && pos.left   - actualWidth  < viewportDim.left   ? 'right'  :
                                placement;

                    $tip.removeClass(orgPlacement)
                        .addClass(placement)
                        .data('cfw.' + this.type, this);
                }

                var calculatedOffset = this._getCalculatedOffset(placement, pos, actualWidth, actualHeight);

                this._applyPlacement(calculatedOffset, placement);
            }
        },

        _showComplete : function() {
            var $selfRef = this;
            var prevHoverState = this.hoverState;
            this.hoverState = null;

            // this.$targetElm.addClass('in')
            this.$targetElm.removeAttr('aria-hidden');
            this.inTransition = 0;
            if (this.settings.follow) {
                this.$targetElm.trigger('focus');
            }

            // Delay to keep NVDA (and other screen readers?) from reading dialog header twice
            setTimeout(function() {
                // Handle case of immediate destroy after show
                if ($selfRef.$triggerElm) {
                    $selfRef.$triggerElm.attr('aria-describedby', $selfRef.targetID);
                }
            }, 25);

            if (!this.activate) {
                this._trigger('afterShow.cfw.' + this.type);
            }
            this.activate = false;

            if (prevHoverState == 'out') this.leave();
        },

        _hideComplete : function() {
            this.$targetElm.removeClass('in')
                .css('display', 'none')
                .attr({
                    'aria-hidden': 'true',
                    'role':  ''
                });

            this.inTransition = 0;
            if (this.settings.follow) {
                this.$targetElm.attr('tabindex', -1);
                this.$triggerElm.trigger('focus');
            }
            this.settings.follow = false;

            // Only remove dynamically created tips
            if (this.hoverState != 'in' && this.dynamicTip) {
                this._removeDynamicTip();
            }

            this._trigger('afterHide.cfw.' + this.type);

            if (!this.unlinking) {
                if (this.settings.unlink) { this.unlink(); }
                if (this.settings.destroy) { this.destroy(); }
            }
        },

        _removeDynamicTip : function() {
            this.$targetElm.detach();
            this.dynamicTip = false;
            this.closeAdded = false;
            this.$arrow = null;
            this.$targetElm = null;
        },

        _getPosition : function($element) {
            $element   = $element || this.$triggerElm;

            var el     = $element[0];
            var isBody = el.tagName == 'BODY';

            var elRect = el.getBoundingClientRect();

            if (elRect.width == null) {
                // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
                elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top });
            }

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
            var $tip   = this.$targetElm;
            var width  = $tip[0].offsetWidth;
            var height = $tip[0].offsetHeight;

            // manually read margins because getBoundingClientRect includes difference
            var marginTop = parseInt($tip.css('margin-top'), 10);
            var marginLeft = parseInt($tip.css('margin-left'), 10);

            // we must check for NaN for ie 8/9
            if (isNaN(marginTop))  marginTop  = 0;
            if (isNaN(marginLeft)) marginLeft = 0;

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
            var actualWidth  = $tip[0].offsetWidth;
            var actualHeight = $tip[0].offsetHeight;

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

        getViewportBounds : function($viewport) {
            var elRect = $viewport[0].getBoundingClientRect();
            if (elRect.width == null) {
                // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
                elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top });
            }

            if ($viewport.is('body') && (/fixed|absolute/).test(this.$triggerElm.css('position'))) {
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

            var viewportPadding = this.settings.viewport && this.settings.viewport.padding || 0;
            // var viewportDimensions = this._getPosition(this.$viewport);
            var viewportDimensions = this.getViewportBounds(this.$viewport);

            if (/right|left/.test(placement)) {
                // var topEdgeOffset    = pos.top - viewportPadding - viewportDimensions.scroll;
                // var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight;
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
                this.$arrow = this.$targetElm.find('.tooltip-arrow');
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
            // var isTabIndexNotNaN = !isNaN($.attr(element, 'tabindex'));

            // Support: IE 8 only
            // IE 8 doesn't resolve inherit to visible/hidden for computed values
            function visible(element) {
                var visibility = element.css('visibility');
                while (visibility === 'inherit') {
                    element = element.parent();
                    visibility = element.css('visibility');
                }
                return visibility !== 'hidden';
            }

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
                $(element).is(':visible') && visible($(element));
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
        },

        _parseDataAttr : function() {
            var parsedData = {};
            var $e = this.$triggerElm;

            var string = this.type;
            var dataType = string.charAt(0).toUpperCase() + string.slice(1);

            if (typeof $e.data('cfw' + dataType + 'Toggle')      !== 'undefined') { parsedData.toggle      = $e.data('cfw' + dataType + 'Toggle');      }
            if (typeof $e.data('cfw' + dataType + 'Trigger')     !== 'undefined') { parsedData.trigger     = $e.data('cfw' + dataType + 'Trigger');     }
            if (typeof $e.data('cfw' + dataType + 'Placement')   !== 'undefined') { parsedData.placement   = $e.data('cfw' + dataType + 'Placement');   }
            if (typeof $e.data('cfw' + dataType + 'Follow')      !== 'undefined') { parsedData.follow      = $e.data('cfw' + dataType + 'Follow');      }
            if (typeof $e.data('cfw' + dataType + 'Animate')     !== 'undefined') { parsedData.animate     = $e.data('cfw' + dataType + 'Animate');     }
            if (typeof $e.data('cfw' + dataType + 'Speed')       !== 'undefined') { parsedData.speed       = $e.data('cfw' + dataType + 'Speed');       }
            if (typeof $e.data('cfw' + dataType + 'Delay')       !== 'undefined') { parsedData.delay       = $e.data('cfw' + dataType + 'Delay');       }
            if (typeof $e.data('cfw' + dataType + 'DelayShow')   !== 'undefined') { parsedData.delay.show  = $e.data('cfw' + dataType + 'DelayShow');   }
            if (typeof $e.data('cfw' + dataType + 'DelayHide')   !== 'undefined') { parsedData.delay.hide  = $e.data('cfw' + dataType + 'DelayHide');   }
            if (typeof $e.data('cfw' + dataType + 'Container')   !== 'undefined') { parsedData.container   = $e.data('cfw' + dataType + 'Container');   }
            if (typeof $e.data('cfw' + dataType + 'Viewport')    !== 'undefined') { parsedData.viewport    = $e.data('cfw' + dataType + 'Viewport');    }
            if (typeof $e.data('cfw' + dataType + 'Html')        !== 'undefined') { parsedData.html        = $e.data('cfw' + dataType + 'Html');        }
            if (typeof $e.data('cfw' + dataType + 'Closetext')   !== 'undefined') { parsedData.closetext   = $e.data('cfw' + dataType + 'Closetext');   }
            if (typeof $e.data('cfw' + dataType + 'Closesrtext') !== 'undefined') { parsedData.closesrtext = $e.data('cfw' + dataType + 'Closesrtext'); }
            if (typeof $e.data('cfw' + dataType + 'Title')       !== 'undefined') { parsedData.title       = $e.data('cfw' + dataType + 'Title');       }
            if (typeof $e.data('cfw' + dataType + 'Unlink')      !== 'undefined') { parsedData.unlink      = $e.data('cfw' + dataType + 'Unlink');      }
            if (typeof $e.data('cfw' + dataType + 'Destroy')     !== 'undefined') { parsedData.destroy     = $e.data('cfw' + dataType + 'Destroy');     }
            if (typeof $e.data('cfw' + dataType + 'Activate')    !== 'undefined') { parsedData.activate    = $e.data('cfw' + dataType + 'Activate');    }
            return parsedData;
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

        _parseDataAttrExt : function() {
            return;
        },

        _trigger : function(eventName) {
            var e = $.Event(eventName);
            this.$triggerElm.trigger(e);
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
            var data = $this.data('cfw.tooltip');
            var options = typeof option === 'object' && option;

            if (!data && /unlink|destroy|hide/.test(option)) {
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
