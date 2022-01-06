/**
 * --------------------------------------------------------------------------
 * Figuration (v4.2.1): util/scrollbar.js
 * Licensed under MIT (https://github.com/cast-org/figuration/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

(function($) {
    'use strict';

    var SELECTOR_CONTENT_FIXED = '.fixed-top, .fixed-bottom, .is-fixed';
    var SELECTOR_CONTENT_STICKY = '.sticky-top, .is-sticky';
    var SELECTOR_CONTENT_SHARED = [SELECTOR_CONTENT_FIXED, SELECTOR_CONTENT_STICKY].join(', ');

    var CFW_Util_Scrollbar = function(options) {
        this.element = null;
        this.scrollbarWidth = null;
        this.settings = $.extend({}, CFW_Util_Scrollbar.DEFAULTS, options);

        this._init();
    };

    CFW_Util_Scrollbar.DEFAULTS = {
        rootElement: 'body'
    };

    CFW_Util_Scrollbar.prototype = {
        _init : function() {
            this.element = this._getElement(this.settings.rootElement);
        },

        // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
        getContainerWidth : function() {
            return this.element === document.body ? window.innerWidth : this.element.getBoundingClientRect().width;
        },

        getContentWidth : function() {
            return this.element === document.body ? document.documentElement.clientWidth : this.element.clientWidth;
        },

        getScrollbarWidth : function() {
            return Math.abs(this.getContainerWidth() - this.getContentWidth());
        },

        getScrollbarSide : function() {
            // Unable to detect side when 0-width scrollbars (such as mobile)
            // are found.  So we use 'right` side as default (more common case).
            var isHTML = this.element === document.documentElement;
            var isEdge = /edge\/\d+/i.test(navigator.userAgent);
            var isIE = /(msie|trident)/i.test(navigator.userAgent);

            if (!isHTML || isEdge || isIE) {
                return $.CFW_isRTL(this.element) ? 'left' : 'right';
            }
            return 'right';
        },

        isOverflowing : function() {
            return this.getScrollbarWidth() > 0;
        },

        disable : function() {
            var $selfRef = this;
            this.scrollbarWidth = this.getScrollbarWidth();

            var paddingCalc = function(calculatedVal) {
                var newWidth = calculatedVal + $selfRef.scrollbarWidth;
                return newWidth + 'px';
            };
            var marginCalc = function(calculatedVal) {
                var newWidth = calculatedVal - $selfRef.scrollbarWidth;
                return newWidth + 'px';
            };
            var side = this.getScrollbarSide();

            // Update rootElement overflow and padding
            this._disableOverflow();
            this._setScrollbarAdjustment(this.element, 'padding-' + side, paddingCalc);

            // Update fixed/sticky positioned element padding
            $(SELECTOR_CONTENT_SHARED).each(function() {
                if ($selfRef._isFixed(this) || $selfRef._isSticky(this)) {
                    $selfRef._setScrollbarAdjustment(this, 'padding-' + side, paddingCalc);
                }
            });

            // Update sticky positioned element margin
            $(SELECTOR_CONTENT_STICKY).each(function() {
                if ($selfRef._isSticky(this)) {
                    $selfRef._setScrollbarAdjustment(this, 'margin-' + side, marginCalc);
                }
            });
        },

        reset : function() {
            var $selfRef = this;
            var side = this.getScrollbarSide();
            this._resetScrollbarAdjustment(this.element, 'overflow');
            this._resetScrollbarAdjustment(this.element, 'padding-' + side);
            $(SELECTOR_CONTENT_SHARED).each(function() {
                $selfRef._resetScrollbarAdjustment(this, 'padding-' + side);
            });
            $(SELECTOR_CONTENT_STICKY).each(function() {
                $selfRef._resetScrollbarAdjustment(this, 'margin-' + side);
            });
            this.scrollbarWidth = null;
        },

        _setScrollbarAdjustment : function(node, property, callback) {
            if (node !== this.element && this.getContainerWidth() > node.clientWidth + this.scrollbarWidth) {
                return;
            }

            var actualVal = node.style.getPropertyValue(property);
            var calculatedVal = parseFloat(window.getComputedStyle(node).getPropertyValue(property));
            if (actualVal) {
                node.setAttribute('data-cfw-' + property, actualVal);
            }
            node.style.setProperty(property, typeof callback === 'function' ? callback(calculatedVal) : callback);
        },

        _resetScrollbarAdjustment : function(node, property) {
            var savedVal = this._normalizeData(node.getAttribute('data-cfw-' + property));
            if (savedVal === null) {
                node.style.removeProperty(property);
            }
            node.removeAttribute('data-cfw-' + property);
            node.style.setProperty(property, savedVal);
        },

        _disableOverflow : function() {
            this._setScrollbarAdjustment(this.element, 'overflow', 'hidden');
        },

        _isFixed : function(node) {
            return Boolean(window.getComputedStyle(node).position === 'fixed');
        },

        _isSticky : function(node) {
            return Boolean(window.getComputedStyle(node).position === 'sticky');
        },

        _isElement : function(object) {
            if (!object || typeof object !== 'object') {
                return false;
            }
            if (typeof object.jquery !== 'undefined') {
                object = object[0];
            }
            return typeof object.nodeType !== 'undefined';
        },

        _getElement : function(object) {
            // Check for jQuery object or a node element
            if (this._isElement(object)) {
                return object.jquery ? object[0] : object;
            }
            if (typeof object === 'string' && object.length > 0) {
                return document.querySelector(object);
            }
            return null;
        },

        _normalizeData : function(val) {
            if (val === 'true') {
                return true;
            }

            if (val === 'false') {
                return false;
            }

            if (val === Number(val).toString()) {
                return Number(val);
            }

            if (val === '' || val === 'null') {
                return null;
            }

            return val;
        }
    };

    window.CFW_Scrollbar = CFW_Util_Scrollbar;
}(jQuery));