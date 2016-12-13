/**
 * --------------------------------------------------------------------------
 * Figuration (v2.0.0): drag.js
 * Licensed under MIT (https://github.com/cast-org/figuration/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

(function($) {
    'use strict';

    var CFW_Widget_Drag = function(element, options) {
        this.element = element;
        this.$element = $(element);
        this.dragging = false;
        this.dragdata = {};

        this.settings = $.extend({}, CFW_Widget_Drag.DEFAULTS, options);

        this._init();
    };

    CFW_Widget_Drag.DEFAULTS = {
        handle : null   // selector for handle target elements
    };

    CFW_Widget_Drag.prototype = {

        _init : function() {
            this._reset();
            this._dragStartOn();
            this._trigger('init.cfw.drag');
        },

        destroy : function() {
            this.dragging = false;
            this.dragdata = null;
            this.$element
                .off('.cfw.drag')
                .removeData('cfw.drag');
            if (this.detachEvent) {
                this.detachEvent('ondragstart', this.__dontstart);
            }
        },

        _dragStartOn : function() {
            this.$element.on('mousedown.cfw.dragstart touchstart.cfw.dragstart MSPointerDown.cfw.dragstart', $.proxy(this._dragStart, this));
        },

        _dragStartOff : function(e) {
            e.preventDefault();
            $(document).off('.cfw.dragin');
            this.$element.off('.cfw.dragstart');
            // prevent image dragging in IE...
            if (this.element.attachEvent) {
                this.element.attachEvent('ondragstart', this.__dontstart);
            }
        },

        _dragStart : function(e) {
            var $selfRef = this;

            // check for handle selector
            if (this.settings.handle && !$(e.target).closest(this.settings.handle, e.currentTarget).length) {
                return;
            }

            this._dragStartOff(e);
            this.dragging = true;

            $(document)
                .off('.cfw.dragin')
                .on('mousemove.cfw.dragin touchmove.cfw.dragin MSPointerMove.cfw.dragin', function(e) {
                    $selfRef._drag(e);
                })
                .on('mouseup.cfw.dragin touchend.cfw.dragin MSPointerUp.cfw.dragin MSPointerCancel.cfw.dragin', function() {
                    $selfRef._dragEnd(e);
                });


            var coord = this._coordinates(e);
            this.dragdata = coord;
            this.dragdata.originalX = e.currentTarget.offsetLeft;
            this.dragdata.originalY = e.currentTarget.offsetTop;

            var props = this._properties(coord, this.dragdata);
            this._trigger('dragStart.cfw.drag', props);
        },

        _drag : function(e) {
            if (!this.dragging) {
                return;
            }

            e.preventDefault();
            var coord = this._coordinates(e);
            var props = this._properties(coord, this.dragdata);
            this._trigger('drag.cfw.drag', props);
        },

        _dragEnd : function(e) {
            e.preventDefault();
            this.dragging = false;
            this.dragStart = null;
            $(document).off('.cfw.dragin');

            var coord = this._coordinates(e);
            var props = this._properties(coord, this.dragdata);
            this._trigger('dragEnd.cfw.drag', props);

            this._reset();
            this._dragStartOn();
        },

        _reset : function() {
            this.dragging = false;
            this.dragdata.pageX = null;
            this.dragdata.pageY = null;
        },

        _coordinates : function(e) {
            var coord = {};
            if (e.originalEvent) {
                e = e.originalEvent;
            }
            var touches =  e.touches;
            coord.pageX = touches ? touches[0].pageX : e.pageX;
            coord.pageY = touches ? touches[0].pageY : e.pageY;
            return coord;
        },

        _properties : function(coord, dd) {
            var p = {};

            // starting position
            p.startX = dd.pageX;
            p.startY = dd.pageY;
            // pass-thru page position
            p.pageX = coord.pageX;
            p.pageY = coord.pageY;
            // distance dragged
            p.deltaX = coord.pageX - dd.pageX;
            p.deltaY = coord.pageY - dd.pageY;
            // original element position
            p.originalX = dd.originalX;
            p.originalY = dd.originalY;
            // adjusted element position
            p.offsetX = p.originalX + p.deltaX;
            p.offsetY = p.originalY + p.deltaY;

            return p;
        },

        __dontstart : function() {
            return false;
        },

        _trigger : function(eventName, extraData) {
            var e = $.Event(eventName);
            if ($.isPlainObject(extraData)) {
                e = $.extend({}, e, extraData);
            }
            this.$element.trigger(e);
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
            var data = $this.data('cfw.drag');
            var options = typeof option === 'object' && option;

            if (!data && /destroy/.test(option)) {
                return false;
            }
            if (!data) {
                $this.data('cfw.drag', (data = new CFW_Widget_Drag(this, options)));
            }
            if (typeof option === 'string') {
                data[option].apply(data, args);
            }
        });
    }

    $.fn.CFW_Drag = Plugin;
    $.fn.CFW_Drag.Constructor = CFW_Widget_Drag;

})(jQuery);
