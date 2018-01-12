/**
 * --------------------------------------------------------------------------
 * Figuration (v3.0.5): slider.js
 * Licensed under MIT (https://github.com/cast-org/figuration/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

(function($) {
    'use strict';

    if (!$.fn.CFW_Drag) throw new Error('CFW_Slider requires CFW_Drag');

    var CFW_Widget_Slider = function(element, options) {
        this.$element = $(element);

        this.$slider = null;
        this.$track = null;
        this.$selection = null;
        this.$thumbMin = null;
        this.$thumbMax = null;

        this.$inputMin = null;
        this.$inputMax = null;

        this.ordinal = false;
        this.range = false;

        this.val0 = 0;
        this.val1 = 0;

        var parsedData = this.$element.CFW_parseData('slider', CFW_Widget_Slider.DEFAULTS);
        this.settings = $.extend({}, CFW_Widget_Slider.DEFAULTS, parsedData, options);

        this.inDrag = null;
        this.startPos = null;
        this.offsetPos = (this.settings.vertical) ? 'top' : 'left';
        this.stepsTotal = null;

        this._init();
    };

    CFW_Widget_Slider.DEFAULTS = {
        min : null,         // min value
        max : null,         // max value
        step : 1,           // small step increment
        chunk : null,       // large step increment (will be auto determined if not defined)
        enabled : true,     // true - enabled / false - disabled
        vertical : false,   // alternate orientation
        reversed : false    // show thumbs in opposite order
    };

    CFW_Widget_Slider.prototype = {
        _init : function() {
            var inputs = this._initInputs();
            if (inputs === false) { return; }

            this._initChunk();

            this.createSlider();
            this.updateValues();
            this.updateThumbs();
            this.updateLabels();
            if (this.settings.enabled) {
                this.enable(true);
            } else {
                this.disable();
            }

            this.$element.attr('data-cfw', 'slider');

            this.$slider.CFW_trigger('init.cfw.slider');
        },

        _initInputs : function() {
            var $inputs = this.$element.find('input');
            if ($inputs.length <= 0) {
                $inputs = this.$element.find('select');
            }
            if ($inputs.length <= 0) {
                return false;
            }

            this.$inputMin = $inputs.eq(0);

            if (this.$inputMin[0].nodeName == 'SELECT') { this.ordinal = true; }
            if ($inputs.length > 1) {
                this.$inputMax = $inputs.eq($inputs.length - 1);
                this.range = true;
            }
        },

        _initChunk : function() {
            this.stepsTotal = Math.floor((this.settings.max - this.settings.min) / this.settings.step);
            if (!this.settings.chunk) {
                this.settings.chunk = this.stepsTotal > 4 ?  Math.round(this.stepsTotal / 4) : this.settings.step * 2;
            }
        },

        createSlider : function() {
            /* Slider element */
            var slider = document.createElement('div');
            this.$slider = $(slider).addClass('slider');
            if (this.settings.vertical) {
                $(slider)
                    .attr('aria-orientation', 'vertical')
                    .addClass('slider-vertical');
            } else {
                $(slider).addClass('slider-horizontal');
            }
            // var sliderID = this.$slider.CFW_getID('cfw-slider');

            /* Track elements */
            var track = document.createElement('div');
            this.$track = $(track).addClass('slider-track');
            var selection = document.createElement('div');
            this.$selection = $(selection).addClass('slider-selection');

            /* Thumb/handle elements */
            var $labelMin = this._getLabel(this.$inputMin);
            var labelMinTxt = $labelMin.text();

            var thumbMin = document.createElement('div');
            this.$thumbMin = $(thumbMin).addClass('slider-thumb slider-thumb-min')
                .attr({
                    'role': 'slider',
                    'tabindex': -1,
                    'aria-label': labelMinTxt
                });

            if (this.range) {
                var $labelMax = this._getLabel(this.$inputMax);
                var labelMaxTxt = $labelMax.text();

                var thumbMax = document.createElement('div');
                this.$thumbMax = $(thumbMax).addClass('slider-thumb slider-thumb-max')
                    .attr({
                        'role': 'slider',
                        'tabindex': -1,
                        'aria-label': labelMaxTxt
                    });

                this.$thumbMin.attr('aria-controls', this.$thumbMax.CFW_getID('cfw-slider'));
                this.$thumbMax.attr('aria-controls', this.$thumbMin.CFW_getID('cfw-slider'));
            }

            // Attach elements together and insert
            this.$track.append(this.$selection);
            this.$track.append(this.$thumbMin);
            if (this.range) { this.$track.append(this.$thumbMax); }

            this.$slider.append(this.$track);

            this.$element.append(this.$slider);
        },

        updateValues : function() {
            this.val0 = (this.ordinal) ? this.$inputMin[0].selectedIndex : parseFloat(this.$inputMin.val());
            if (!this.range) {
                this.$thumbMin.attr({
                    'aria-valuemin': this.settings.min,
                    'aria-valuemax': this.settings.max,
                    'aria-valuenow': this.val0
                });
            } else {
                this.val1 = (this.ordinal) ? this.$inputMax[0].selectedIndex : parseFloat(this.$inputMax.val());
                this.$thumbMin.attr({
                    'aria-valuemin': this.settings.min,
                    'aria-valuemax': this.val1,
                    'aria-valuenow': this.val0
                });
                this.$thumbMax.attr({
                    'aria-valuemin': this.val0,
                    'aria-valuemax': this.settings.max,
                    'aria-valuenow': this.val1
                });
            }
        },

        updateThumbs : function() {
            var valStart;
            var valEnd;
            var pctStart;
            var pctEnd;
            var pctSize;
            var selStart;

            // Reset visuals
            this.$selection.css({
                'top': '',
                'left': '',
                'width': '',
                'height': ''
            });
            this.$thumbMin.css({
                'top': '',
                'left': ''
            });
            if (this.range) {
                this.$thumbMax.css({
                    'top': '',
                    'left': ''
                });
            }

            if (!this.range) {
                valStart = this.settings.min;
                valEnd = this.val0;
            } else {
                valStart = this.val0;
                valEnd = this.val1;
            }

            pctStart = ((valStart - this.settings.min) / (this.settings.max - this.settings.min)) * 100;
            selStart = pctStart;
            pctEnd  = ((valEnd - this.settings.min) / (this.settings.max - this.settings.min)) * 100;

            if (pctStart < 0) { pctStart = 0; }
            if (pctEnd > 100) { pctEnd = 100; }

            pctSize = pctEnd - pctStart;
            if (this.settings.reversed) {
                pctStart = 100 - pctStart;
                pctEnd = 100 - pctEnd;
                selStart = pctEnd;
            }
            var pos = (this.settings.vertical) ? 'top' : 'left';
            var dim = (this.settings.vertical) ? 'height' : 'width';

            this.$selection.css(pos, selStart + '%').css(dim, pctSize + '%');
            if (!this.range) {
                this.$thumbMin.css(pos, pctEnd + '%');
            } else {
                this.$thumbMin.css(pos, pctStart + '%');
                this.$thumbMax.css(pos, pctEnd + '%');
            }
        },

        updateLabels : function() {
            this.$thumbMin.attr('aria-valuetext', this.$inputMin.val());
            if (this.range) {
                this.$thumbMax.attr('aria-valuetext', this.$inputMax.val());
            }
        },

        enable : function(init) {
            if (init === undefined) { init = false; }
            if (!init && this.settings.enabled) { return; }
            this.settings.enabled = true;
            this.$slider.removeClass('disabled');
            this.bindSlider();
            this.$slider.CFW_trigger('enabled.cfw.slider');
        },

        disable : function() {
            if (!this.settings.enabled) { return; }
            this.settings.enabled = false;
            this.$slider.addClass('disabled');
            this.unbindSlider();
            this.$slider.CFW_trigger('disabled.cfw.slider');
        },

        bindSlider : function() {
            var $selfRef = this;
            var $thumbs = this.$thumbMin;
            var $inputs = this.$inputMin;
            if (this.range) {
                $thumbs = $thumbs.add(this.$thumbMax);
                $inputs = $inputs.add(this.$inputMax);
            }

            $thumbs.attr('tabindex', 0).on('keydown.cfw.slider', function(e) {
                    $selfRef._actionsKeydown(e, this);
                })
                .on('focusin.cfw.slider', function() {
                    $(this).css('z-index', parseInt($(this).css('z-index'), 10) + 1);
                })
                .on('focusout.cfw.slider', function() {
                    $(this).css('z-index', '');
                });

            this.$track
                .on('dragStart.cfw.drag', function(e) {
                    $selfRef._dragStart(e);
                })
                .on('drag.cfw.drag', function(e) {
                    $selfRef._drag(e);
                })
                .on('dragEnd.cfw.drag', function() {
                    $selfRef._dragEnd();
                })
                .CFW_Drag();

            $inputs.on('change.cfw.slider', function() {
                var $node = $(this);
                var newVal = ($selfRef.ordinal) ? $node[0].selectedIndex : parseFloat($node.val());
                $selfRef.changeValue(newVal, $node, true);
            });
        },

        unbindSlider : function() {
            var $thumbs = this.$thumbMin;
            var $inputs = this.$inputMin;
            if (this.range) {
                $thumbs = $thumbs.add(this.$thumbMax);
                $inputs = $inputs.add(this.$inputMax);
            }
            $thumbs.attr('tabindex', '').off('.cfw.slider');
            this.$track.CFW_Drag('dispose');
            $inputs.off('.cfw.slider');
        },

        decrement : function(byChunk, $input) {
            var currVal = (this.ordinal) ? $input[0].selectedIndex : parseFloat($input.val());
            this.changeValue(currVal - (byChunk ? this.settings.chunk * this.settings.step : this.settings.step), $input);
        },

        increment : function(byChunk, $input) {
            var currVal = (this.ordinal) ? $input[0].selectedIndex : parseFloat($input.val());
            this.changeValue(currVal + (byChunk ? this.settings.chunk * this.settings.step : this.settings.step), $input);
        },

        changeValue : function(newVal, $input, inputUpdate) {
            if (inputUpdate === undefined) { inputUpdate = false; }

            var oldVal = (this.ordinal) ? $input[0].selectedIndex : parseFloat($input.val());

            var limitLow;
            var limitHigh;
            if (!this.range) {
                limitLow = this.settings.min;
                limitHigh = this.settings.max;
            } else {
                if ($input.is(this.$inputMax)) {
                    limitLow = this.val0;
                    limitHigh = this.settings.max;
                } else {
                    limitLow = this.settings.min;
                    limitHigh = this.val1;
                }
            }

            var updVal;
            if (newVal !== undefined) {
                updVal = Math.min(Math.max(newVal, limitLow), limitHigh);
                // make the value snap to the chosen increment
                updVal = Math.round(updVal / this.settings.step) * this.settings.step;
            }
            if (updVal === undefined) { return; }

            if (this.ordinal) {
                $input[0].selectedIndex = updVal;
            } else {
                $input.prop('value', updVal);
            }
            this.updateValues();
            this.updateThumbs();
            this.updateLabels();

            if (!inputUpdate) {
                this.$slider.CFW_trigger('slid.cfw.slider');
            }
            if (inputUpdate || (updVal != oldVal)) {
                this.$slider.CFW_trigger('changed.cfw.slider');
            }
        },

        _getInput : function(node) {
            var $node = $(node);
            if ($node.is(this.$thumbMax)) {
                return this.$inputMax;
            } else {
                return this.$inputMin;
            }
        },

        _getLabel : function($input) {
            var $label = $('label[for="' + $input.attr('id') + '"]');
            if ($label.length <= 0) {
                $label = $input.closest('label');
            }
            return $label;
        },

        _actionsKeydown : function(e, node) {
            var $selfRef = this;

            // 37-left, 38-up, 39-right, 40-down, 33-pgup, 34-pgdn, 35-end, 36-home
            if (!/(37|38|39|40|33|34|35|36)/.test(e.which)) { return; }

            e.stopPropagation();
            e.preventDefault();

            var $input = this._getInput(node);

            switch (e.which) {
                case 37: // left
                case 40: // down
                    $selfRef.decrement(false, $input);
                    break;
                case 38: // up
                case 39: // right
                    $selfRef.increment(false, $input);
                    break;
                case 33: // pgup
                    $selfRef.increment(true, $input);
                    break;
                case 34: // pgdn
                    $selfRef.decrement(true, $input);
                    break;
                case 35: // end
                    $selfRef.changeValue(this.settings.max, $input);
                    break;
                case 36: // home
                    $selfRef.changeValue(this.settings.min, $input);
                    break;
            }
        },

        _dragStart : function(e) {
            var $node = $(e.currentTarget);
            if ($node.is(this.$track)) {
                $node = this._closestThumb(e);
            }
            $node.trigger('focus');

            this.inDrag = $node[0];

            var pos = this.settings.vertical ? e.startY : e.startX;
            var trackOff = this.$track.offset();
            var newPos = pos - trackOff[this.offsetPos];
            this.startPos = newPos;

            var newVal = this._positionToValue(newPos);
            var $input = this._getInput($node[0]);
            this.changeValue(newVal, $input);

            this.$slider.CFW_trigger('dragStart.cfw.slider');
        },

        _drag : function(e) {
            if (this.inDrag == null) { return; }
            var delta = this.settings.vertical ? e.deltaY : e.deltaX;
            var newPos = this.startPos + delta;
            var $input = this._getInput(this.inDrag);
            var newVal = this._positionToValue(newPos);
            this.changeValue(newVal, $input);
        },

        _dragEnd : function() {
            this.inDrag = null;
            this.startPos = null;
            this.$slider.CFW_trigger('dragEnd.cfw.slider');
        },

        _positionToValue : function(pos) {
            var trackDim;
            if (this.settings.vertical) {
                trackDim = this.$track.outerHeight();
            } else {
                trackDim = this.$track.outerWidth();
            }

            var ratio = trackDim / this.stepsTotal;

            pos = (this.settings.reversed) ? trackDim - pos : pos;
            return (Math.round(pos / ratio) * this.settings.step) + this.settings.min;
        },

        _closestThumb : function(e) {
            var $node;
            if (this.range) {
                var pos = this.settings.vertical ? e.pageY : e.pageX;
                var trackOff = this.$track.offset();
                var diff1 = Math.abs(pos - trackOff[this.offsetPos] - this.$thumbMin.position()[this.offsetPos]);
                var diff2 = Math.abs(pos - trackOff[this.offsetPos] - this.$thumbMax.position()[this.offsetPos]);
                $node = (diff1 < diff2) ? this.$thumbMin : this.$thumbMax;
            } else {
                $node = this.$thumbMin;
            }
            return $node;
        },

        dispose : function() {
            this.unbindSlider();
            this.$element.removeData('cfw.slider');
            this.$slider.remove();

            this.$element = null;
            this.$slider = null;
            this.$track = null;
            this.$selection = null;
            this.$thumbMin = null;
            this.$thumbMax = null;
            this.$inputMin = null;
            this.$inputMax = null;
            this.ordinal = null;
            this.range = null;
            this.val0 = null;
            this.val1 = null;
            this.settings = null;
            this.inDrag = null;
            this.startPos = null;
            this.offsetPos = null;
            this.stepsTotal = null;
        }
    };

    function Plugin(option) {
        var args = [].splice.call(arguments, 1);
        return this.each(function() {
            var $this = $(this);
            var data = $this.data('cfw.slider');
            var options = typeof option === 'object' && option;

            if (!data) {
                $this.data('cfw.slider', (data = new CFW_Widget_Slider(this, options)));
            }
            if (typeof option === 'string') {
                data[option].apply(data, args);
            }
        });
    }

    $.fn.CFW_Slider = Plugin;
    $.fn.CFW_Slider.Constructor = CFW_Widget_Slider;

})(jQuery);
