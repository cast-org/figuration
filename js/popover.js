/**
 * --------------------------------------------------------------------------
 * Figuration (v4.2.0): popover.js
 * Licensed under MIT (https://github.com/cast-org/figuration/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

(function($) {
    'use strict';

    if (typeof $.fn.CFW_Tooltip === 'undefined') { throw new Error('CFW_Popover requires CFW_Tooltip'); }

    var CFW_Widget_Popover = function(element, options) {
        this.dragAdded = false;
        this.keyTimer = null;
        this.keyDelay = 750;

        this._init('popover', element, options);
    };

    CFW_Widget_Popover.DEFAULTS = $.extend({}, $.fn.CFW_Tooltip.Constructor.DEFAULTS, {
        placement   : 'top',        // Where to locate popover (top/bottom/reverse(left)/forward(right)/auto)
        trigger     : 'click',      // How popover is triggered (click/hover/focus/manual)
        content     : '',           // Content text/html to be inserted
        drag        : false,        // If the popover should be draggable
        dragtext    : '<span aria-hidden="true">+</span>', // Text for drag handle
        dragsrtext  : 'Drag',       // Screen reader text for drag handle
        dragstep     : 10,          // 'Drag' increment for keyboard
        template    : '<div class="popover"><h3 class="popover-header"></h3><div class="popover-body"></div><div class="popover-arrow"></div></div>'
    });

    CFW_Widget_Popover.prototype = $.extend({}, $.fn.CFW_Tooltip.Constructor.prototype);

    CFW_Widget_Popover.prototype.constructor = CFW_Widget_Popover;

    CFW_Widget_Popover.prototype.getDefaults = function() {
        return CFW_Widget_Popover.DEFAULTS;
    };

    CFW_Widget_Popover.prototype.createTip = function() {
        var $tip = $(this.settings.template);
        return $tip;
    };

    CFW_Widget_Popover.prototype.setContent = function() {
        var $tip = this.$target;
        var $title = $tip.find('.popover-header');
        var $content = $tip.find('.popover-body');

        if (this.dynamicTip) {
            var title = this.getTitle();
            var content = this.getContent();

            if (this.settings.html) {
                $title.html(title);
                if (typeof content === 'string') {
                    $content.html(content);
                } else {
                    $content.empty().append(content); // Use append for objects to keep js events
                }
            } else {
                $title.text(title);
                $content.text(content);
            }

            if (!title && $title) {
                $title.remove();
            }
        }

        // Use '.popover-header' for labelledby
        if ($title.length) {
            var labelledby = $title.eq(0).CFW_getID('cfw-popover');
            this.$target.attr('aria-labelledby', labelledby);
        }

        if (this.settings.drag && !this.dragAdded) {
            if (this.$target.find('[data-cfw-drag="' + this.type + '"]').length <= 0) {
                var $drag = $('<span role="button" tabindex="0" class="drag" data-cfw-drag="' + this.type + '" aria-label="' + this.settings.dragsrtext + '">' + this.settings.dragtext + '</span>');
                $drag.insertAfter(this.$target.find('.close').eq(0));
                this.dragAdded = true;
            }
        }

        if (this.$target.find('[data-cfw-drag="' + this.type + '"]').length) {
            this.$target.addClass('draggable');
            // Force settings
            if (this.settings.trigger !== 'manual') {
                this.settings.trigger = 'click';
            }
            this.settings.container = 'body';
            // Enable drag handlers
            this.enableDrag();
        }
    };

    CFW_Widget_Popover.prototype.getContent = function() {
        var content;
        var $e = this.$element;
        var s = this.settings;

        content = typeof s.content === 'function' ? s.content.call($e[0]) : s.content;

        return content;
    };

    CFW_Widget_Popover.prototype.enableDrag = function() {
        var $selfRef = this;
        var dragOpt = {
            handle: '[data-cfw-drag="' + this.type + '"]'
        };

        // Remove mutation handler and replace resize location handler
        this.$element.on('afterShow.cfw.' + this.type, function() {
            if ($selfRef.popper !== null) {
                $selfRef.popper.disableEventListeners();
            }

            $selfRef.$target
                .off('mutate.cfw.mutate')
                .removeAttr('data-cfw-mutate')
                .CFW_mutationIgnore();

            $(window)
                .off('resize.cfw.' + $selfRef.type + '.' + $selfRef.instance)
                .on('resize.cfw.' + $selfRef.type + '.' + $selfRef.instance, function() {
                    var offset = $selfRef.$target.offset();
                    if ($selfRef._isFixed()) {
                        var compStyle = window.getComputedStyle($selfRef.$target[0]);
                        offset.top = parseInt(compStyle.top, 10);
                        offset.left = parseInt(compStyle.left, 10);
                    }
                    $selfRef.locateDragTip(offset.top, offset.left);
                });
        });

        // Use top/left instead of transforms to position popover
        this.settings.gpuAcceleration = false;

        // Unset any previous drag events
        this.$target.off('.cfw.drag');

        this.$target
            .on('dragStart.cfw.drag', function() {
                $selfRef._updateZ();
                $selfRef.$element.CFW_trigger('dragStart.cfw.' + $selfRef.type);
            })
            .on('drag.cfw.drag', function(e) {
                $selfRef.locateDragTip(e.offsetY, e.offsetX);
            })
            .on('dragEnd.cfw.drag', function() {
                $selfRef.$element.CFW_trigger('dragEnd.cfw.' + $selfRef.type);
            })
            .on('keydown.cfw.drag', '[data-cfw-drag="' + this.type + '"]', function(e) {
                var KEYCODE_UP = 38;    // Arrow up
                var KEYCODE_RIGHT = 39; // Arrow right
                var KEYCODE_DOWN = 40;  // Arrow down
                var KEYCODE_LEFT = 37;  // Arrow left
                var REGEX_KEYS = new RegExp('^(' + KEYCODE_UP + '|' + KEYCODE_RIGHT + '|' + KEYCODE_DOWN + '|' + KEYCODE_LEFT + ')$');

                if (!REGEX_KEYS.test(e.which)) { return; }

                if (e) {
                    e.stopPropagation();
                    e.preventDefault();
                }

                if (!$selfRef.keyTimer) {
                    $selfRef.$element.CFW_trigger('dragStart.cfw.' + $selfRef.type);
                }

                clearTimeout($selfRef.keyTimer);

                // Mitigate most of 'slippage' by rounding offsets
                var nodeOffset = $selfRef.$target.offset();
                var offsetY = Math.round(nodeOffset.top);
                var offsetX = Math.round(nodeOffset.left);

                // If popover is 'fixed' position, use the current coords
                if ($selfRef._isFixed()) {
                    var compStyle = window.getComputedStyle($selfRef.$target[0]);
                    offsetY = parseInt(compStyle.top, 10);
                    offsetX = parseInt(compStyle.left, 10);
                }

                // Revise offset
                var step = $selfRef.settings.dragstep;
                switch (e.which) {
                    case KEYCODE_LEFT: { offsetX -= step; break; }
                    case KEYCODE_UP: { offsetY -= step; break; }
                    case KEYCODE_RIGHT: { offsetX += step; break; }
                    case KEYCODE_DOWN: { offsetY += step; break; }
                    default:
                }

                // Move it
                $selfRef.locateDragTip(offsetY, offsetX);

                $selfRef.keyTimer = setTimeout(function() {
                    $selfRef.$element.CFW_trigger('dragEnd.cfw.' + $selfRef.type);
                    $selfRef.keyTimer = null;
                }, $selfRef.keyDelay);
            });

        this.$target.CFW_Drag(dragOpt);
    };

    CFW_Widget_Popover.prototype.getParentNode = function(element) {
        if (element.nodeName === 'HTML') {
            return element;
        }
        return element.parentNode || element.host;
    };

    CFW_Widget_Popover.prototype.getScrollParent = function(element) {
        if (!element) { return document.body; }

        switch (element.nodeName) {
            case 'HTML':
            case 'BODY':
                return element.ownerDocument.body;
            case '#document':
                return element.body;
            default:
                // Nothing for default
        }

        var compStyle = window.getComputedStyle(element);
        if (/^(auto|scroll|overlay)$/.test(compStyle.overflow + compStyle.overflowX + compStyle.overflowY)) {
            return element;
        }

        return this.getScrollParent(this.getParentNode(element));
    };


    CFW_Widget_Popover.prototype.getOwnerBody = function(element) {
        var ownerDocument = element.ownerDocument;
        return ownerDocument ? ownerDocument.body : document.body;
    };

    CFW_Widget_Popover.prototype.viewportDragLimit = function() {
        var limit = {};
        var $viewport = this._getDragViewport();

        var scrollbarWidth = this.viewportScrollbarWidth($viewport);
        limit = $viewport.offset();

        // If popover is 'fixed' position
        if (this._isFixed()) {
            var rect = $viewport[0].getBoundingClientRect();
            limit.top = rect.top;
            limit.bottom = rect.bottom;

            // Use window and update limits if drag viewport is body
            if ($viewport.is('body')) {
                $viewport = $(window);
                limit.top = rect.top + window.pageYOffset;
                limit.left = rect.left + window.pageXOffset;
            }
        }

        limit.bottom = limit.top + $viewport.outerHeight();
        limit.right = limit.left + $viewport.outerWidth() - scrollbarWidth;

        // Allow dragging around entire window if body is smaller than window
        if ($viewport.is('body')) {
            if (document.body.clientHeight < window.innerHeight) {
                limit.bottom = window.innerHeight;
            }
            if (document.body.clientWidth < window.innerWidth) {
                limit.right = window.innerWidth - scrollbarWidth;
            }
        }
        return limit;
    };

    CFW_Widget_Popover.prototype.viewportScrollbarWidth = function($viewport) {
        // Check to see if a scrollbar is possible
        var compStyle = window.getComputedStyle($viewport[0]);
        var hasScrollY = /^(visible|auto|scroll)$/.test(compStyle.overflow) || /^(visible|auto|scroll)$/.test(compStyle.overflowY);
        var scrollHeight = $viewport[0].scrollHeight;

        // Return width of scrollbar if there seems to be one
        if ($viewport.is('body') && hasScrollY && scrollHeight > window.innerHeight) {
            return $.CFW_measureScrollbar();
        } else if (hasScrollY && scrollHeight > $viewport[0].clientHeight) {
            return $.CFW_measureScrollbar();
        }
        return 0;
    };

    CFW_Widget_Popover.prototype.locateDragTip = function(offsetY, offsetX) {
        var $tip = this.$target;
        var limit = this.viewportDragLimit();
        var viewportPadding = this.settings.padding;

        $tip.css({
            top: Math.min(limit.bottom - viewportPadding - $tip.outerHeight(), Math.max(limit.top + viewportPadding, offsetY)),
            left: Math.min(limit.right - viewportPadding - $tip.outerWidth(), Math.max(limit.left + viewportPadding, offsetX))
        });
    };

    CFW_Widget_Popover.prototype.hide = function(force) {
        // Fire key drag end if needed
        if (this.keyTimer) {
            this.$element.CFW_trigger('dragEnd.cfw.' + this.type);
            clearTimeout(this.keyTimer);
        }
        // Call tooltip hide
        $.fn.CFW_Tooltip.Constructor.prototype.hide.call(this, force);
    };

    CFW_Widget_Popover.prototype._showExt = function() {
        if (this.$target.find('[data-cfw-drag="' + this.type + '"]').length && this._isFixed()) {
            this._handleFixedDragScroll();
        }
    };

    CFW_Widget_Popover.prototype._hideExt = function() {
        $(window)
            .off('resize.cfw.' + this.type + '.' + this.instance)
            .off('scroll.cfw.' + this.type + '.' + this.instance);
    };

    CFW_Widget_Popover.prototype._removeDynamicTipExt = function() {
        this.$target.detach();
        this.$target = null;
        this.dragAdded = false;
    };

    CFW_Widget_Popover.prototype._updateZ = function() {
        // Find highest z-indexed visible popover
        var zMax = 0;
        var $zObj = null;
        $('.popover:visible').each(function() {
            var zCurr = parseInt($(this).css('z-index'), 10);
            if (zCurr > zMax) {
                zMax = zCurr;
                $zObj = $(this);
            }
        });
        // Only increase if highest is not current popover
        if (this.$target[0] !== $zObj[0]) {
            this.$target.css('z-index', ++zMax);
        }
    };

    CFW_Widget_Popover.prototype._arrow = function() {
        if (!this.$arrow) {
            this.$arrow = this.$target.find('.arrow, .popover-arrow');
        }
        return this.$arrow;
    };

    CFW_Widget_Popover.prototype._unlinkCompleteExt = function() {
        this.dragAdded = null;
        this.keyTimer = null;
        this.keyDelay = null;
    };

    CFW_Widget_Popover.prototype._getDragViewport = function() {
        var viewport = this._getViewport();
        var $viewport = null;

        if (viewport === 'scrollParent') {
            viewport = this.getScrollParent(this.$target[0]);
        }
        if (viewport === 'window' || viewport === window) {
            viewport = this.getOwnerBody(this.$target[0]);
        }

        $viewport = $(viewport);
        if (!$viewport.length) {
            $viewport = $(document.body);
        }

        return $viewport;
    };

    CFW_Widget_Popover.prototype._isFixed = function() {
        var compStyle = window.getComputedStyle(this.$target[0]);
        return /^(fixed)$/.test(compStyle.position);
    };

    CFW_Widget_Popover.prototype._doFixedDragScroll = function() {
        var offset = {};
        var compStyle = window.getComputedStyle(this.$target[0]);
        offset.top = parseInt(compStyle.top, 10);
        offset.left = parseInt(compStyle.left, 10);
        this.locateDragTip(offset.top, offset.left);
    };

    CFW_Widget_Popover.prototype._handleFixedDragScroll = function() {
        var $viewport = this._getDragViewport();

        $(window).off('scroll.cfw.' + this.type + '.' + this.instance);

        if (!$viewport.is('body')) {
            $(window).on('scroll.cfw.' + this.type + '.' + this.instance, this._doFixedDragScroll.bind(this));
        }
    };

    var Plugin = function(option) {
        var args = [].splice.call(arguments, 1);
        return this.each(function() {
            var $this = $(this);
            var data = $this.data('cfw.popover');
            var options = typeof option === 'object' && option;

            if (!data && /unlink|dispose|hide/.test(option)) {
                return;
            }
            if (!data) {
                $this.data('cfw.popover', data = new CFW_Widget_Popover(this, options));
            }
            if (typeof option === 'string') {
                data[option].apply(data, args);
            }
        });
    };

    $.fn.CFW_Popover = Plugin;
    $.fn.CFW_Popover.Constructor = CFW_Widget_Popover;

    $.CFW_enableDismissControl('popover', 'dismiss');
}(jQuery));
