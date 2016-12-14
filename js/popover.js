/**
 * --------------------------------------------------------------------------
 * Figuration (v2.0.0): popover.js
 * Licensed under MIT (https://github.com/cast-org/figuration/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

(function($) {
    'use strict';

    if ($.fn.CFW_Tooltip === undefined) throw new Error('CFW_Popover requires tooltip.js');

    var CFW_Widget_Popover = function(element, options) {
        this.dragAdded = false;
        this.docAdded = false;
        this.keyTimer = null;
        this.keyDelay = 750;
        this.flags = {
            keyShift: false,
            keyTab : false
        };

        this._init('popover', element, options);
    };

    CFW_Widget_Popover.DEFAULTS = $.extend({}, $.fn.CFW_Tooltip.Constructor.DEFAULTS, {
        placement   : 'top',        // Where to locate tooltip (top/bottom/left/right/auto)
        trigger     : 'click',      // How tooltip is triggered (click/hover/focus/manual)
        content     : '',           // Content text/html to be inserted
        closetext   : '<span aria-hidden="true">&times;</span>', // Text for close links
        drag        : false,        // If the popover should be draggable
        dragtext    : '<span aria-hidden="true">+</span>', // Text for drag handle
        dragsrtext  : 'Drag',       // Screen reader text for drag handle
        dragstep     : 10,          // 'Drag' increment for keyboard
        template    : '<div class="popover"><h3 class="popover-title"></h3><div class="popover-content"></div><div class="popover-arrow"></div></div>'
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
        var $tip = this.$targetElm;
        var $title = $tip.find('.popover-title');
        var $content = $tip.find('.popover-content');

        if (!this.dataToggle) {
            var title = this.getTitle();
            var content = this.getContent();

            if (this.settings.html) {
                $title.html(title);
                if (typeof content == 'string') {
                    $content.html(content);
                } else {
                    $content.empty().append(content); // Use append for objects to keep js events
                }
            } else {
                $title.text(title);
                $content.text(content);
            }
        }

        // Use '.popover-title' for labelledby
        if ($title.length) {
            var labelledby = this._getID($title.eq(0), 'cfw-popover');
            this.$targetElm.attr('aria-labelledby', labelledby);
        }

        if (this.settings.drag && !this.dragAdded) {
            if (this.$targetElm.find('[data-cfw-drag="' + this.type + '"]').length <= 0) {
                var $drag = $('<span role="button" tabindex="0" class="drag" data-cfw-drag="' + this.type +  '" aria-label="' + this.settings.dragsrtext + '">' + this.settings.dragtext + '</span>');
                $drag.insertAfter(this.$targetElm.find('.close').eq(0));
                this.dragAdded = true;
            }
        }

        if (this.$targetElm.find('[data-cfw-drag="' + this.type + '"]').length) {
            this.$targetElm.addClass('draggable');
            // Force settings
            this.settings.trigger = 'click';
            this.settings.container = 'body';
            // Enable drag handlers
            this.enableDrag();
        }

        $tip.removeClass('fade in top bottom left right');

        if (!$title.html()) { $title.hide(); }

        if ((this.$targetElm.attr('role') == 'dialog') && (!this.docAdded)) {
            // Inject a role="document" container
            var $children = this.$targetElm.children().not(this.$arrow);
            var docDiv = document.createElement('div');
            docDiv.setAttribute('role', 'document');
            $children.wrapAll(docDiv);
            // Make sure arrow is at end of popover for roles to work properly with screen readers
            this._arrow();
            this.$arrow.appendTo(this.$targetElm);
            this.docAdded = true;
        }
    };

    CFW_Widget_Popover.prototype.getContent = function() {
        var content;
        var $e = this.$triggerElm;
        var s = this.settings;

        content = (typeof s.content == 'function' ? s.content.call($e[0]) :  s.content);

        return content;
    };

    CFW_Widget_Popover.prototype.enableDrag = function() {
        var $selfRef = this;
        var limit = {};

        var dragOpt = { handle: '[data-cfw-drag="' + this.type + '"]' };

        // Unset any previous drag events
        this.$targetElm.off('.cfw.drag');

        this.$targetElm.on('dragStart.cfw.drag', function() {
            var $viewport;
            if ($selfRef.$viewport) {
                $viewport = $selfRef.$viewport;
            } else {
                $viewport = $(document.body);
            }

            limit = $viewport.offset();
            limit.bottom = limit.top + $viewport.outerHeight() - $(this).outerHeight();
            limit.right = limit.left + $viewport.outerWidth() - $(this).outerWidth();

            $selfRef._updateZ();
            $selfRef._trigger('dragStart.cfw.' + $selfRef.type);
        })
        .on('drag.cfw.drag', function(e) {
            var viewportPadding = 0;
            if ($selfRef.$viewport) {
                viewportPadding = $selfRef.settings.viewport && $selfRef.settings.viewport.padding || 0;
            }

            $(this).css({
                top: Math.min((limit.bottom - viewportPadding), Math.max((limit.top + viewportPadding), e.offsetY)),
                left: Math.min((limit.right - viewportPadding), Math.max((limit.left + viewportPadding), e.offsetX))
            });
        })
        .on('dragEnd.cfw.drag', function() {
            $selfRef._trigger('dragEnd.cfw.' + $selfRef.type);
        })
        .on('keydown.cfw.' + this.type + '.drag', '[data-cfw-drag="' + this.type + '"]', function(e) {
            if (/(37|38|39|40)/.test(e.which)) {
                if (e) { e.stopPropagation(); }

                if (!$selfRef.keyTimer) {
                    $selfRef._trigger('dragStart.cfw.' + $selfRef.type);
                }

                clearTimeout($selfRef.keyTimer);

                var $viewport;
                var viewportPadding = 0;
                if ($selfRef.$viewport) {
                    $viewport = $selfRef.$viewport;
                    viewportPadding = $selfRef.settings.viewport && $selfRef.settings.viewport.padding || 0;
                } else {
                    $viewport = $(document.body);
                }

                var $node = $selfRef.$targetElm;
                var step = $selfRef.settings.dragstep;
                limit = $viewport.offset();
                limit.bottom = limit.top + $viewport.outerHeight() - $node.outerHeight();
                limit.right = limit.left + $viewport.outerWidth() - $node.outerWidth();
                var nodeOffset = $node.offset();
                // Mitigate most of 'slippage' by rounding offsets
                var offsetY = Math.round(nodeOffset.top);
                var offsetX = Math.round(nodeOffset.left);

                // Revise offset
                switch (e.which) {
                    /* Left  */ case 37: { offsetX = offsetX - step; break; }
                    /* Up    */ case 38: { offsetY = offsetY - step; break; }
                    /* Right */ case 39: { offsetX = offsetX + step; break; }
                    /* Down  */ case 40: { offsetY = offsetY + step; break; }
                }

                // Move it
                $node.css({
                    top: Math.min((limit.bottom - viewportPadding), Math.max((limit.top + viewportPadding), offsetY)),
                    left: Math.min((limit.right - viewportPadding), Math.max((limit.left + viewportPadding), offsetX))
                });

                $selfRef.keyTimer = setTimeout(function() {
                    $selfRef._trigger('dragEnd.cfw.' + $selfRef.type);
                    $selfRef.keyTimer = null;
                }, $selfRef.keyDelay);

                // Stop browser from scrolling
                return false;
            }
        });

        this.$targetElm.CFW_Drag(dragOpt);
    };

    CFW_Widget_Popover.prototype.hide = function() {
        // Fire key drag end if needed
        if (this.keyTimer) {
            this._trigger('dragEnd.cfw.' + this.type);
            clearTimeout(this.keyTimer);
        }
        // Call tooltip hide
        $.fn.CFW_Tooltip.Constructor.prototype.hide.apply(this);
    };

    CFW_Widget_Popover.prototype._removeDynamicTip = function() {
        this.$targetElm.detach();
        this.dynamicTip = false;
        this.closeAdded = false;
        this.dragAdded = false;
        this.docAdded = false;
        this.$arrow = false;
        this.$targetElm = null;
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
        if (this.$targetElm[0] !== $zObj[0]) {
            this.$targetElm.css('z-index', ++zMax);
        }
    };

    CFW_Widget_Popover.prototype._arrow = function() {
        if (!this.$arrow) {
            this.$arrow = this.$targetElm.find('.arrow, .popover-arrow');
        }
        return this.$arrow;
    };

    CFW_Widget_Popover.prototype._parseDataAttrExt = function() {
        var parsedData = {};
        var $e = this.$triggerElm;

        var string = this.type;
        var dataType = string.charAt(0).toUpperCase() + string.slice(1);

        if (typeof $e.data('cfw' + dataType + 'Content')    !== 'undefined') { parsedData.content    = $e.data('cfw' + dataType + 'Content');    }
        if (typeof $e.data('cfw' + dataType + 'Drag')       !== 'undefined') { parsedData.drag       = $e.data('cfw' + dataType + 'Drag');       }
        if (typeof $e.data('cfw' + dataType + 'Dragtext')   !== 'undefined') { parsedData.dragtext   = $e.data('cfw' + dataType + 'Dragtext');   }
        if (typeof $e.data('cfw' + dataType + 'Dragsrtext') !== 'undefined') { parsedData.dragsrtext = $e.data('cfw' + dataType + 'Dragsrtext'); }
        if (typeof $e.data('cfw' + dataType + 'Dragstep')   !== 'undefined') { parsedData.dragstep   = $e.data('cfw' + dataType + 'Dragstep');   }

        return parsedData;
    };

    function Plugin(option) {
        var args = [].splice.call(arguments, 1);
        return this.each(function() {
            var $this = $(this);
            var data = $this.data('cfw.popover');
            var options = typeof option === 'object' && option;

            if (!data && /unlink|destroy|hide/.test(option)) {
                return false;
            }
            if (!data) {
                $this.data('cfw.popover', (data = new CFW_Widget_Popover(this, options)));
            }
            if (typeof option === 'string') {
                data[option].apply(data, args);
            }
        });
    }

    $.fn.CFW_Popover = Plugin;
    $.fn.CFW_Popover.Constructor = CFW_Widget_Popover;

})(jQuery);
