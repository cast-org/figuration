/**
 * --------------------------------------------------------------------------
 * Figuration (v4.2.1): util/focuser.js
 * Licensed under MIT (https://github.com/cast-org/figuration/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

(function($) {
    'use strict';

    var KEYCODE_TAB = 9;
    var NAV_DIR_FORWARD = 'forward';
    var NAV_DIR_BACKWARD = 'backward';

    var CFW_Util_Focuser = function(options) {
        this._instance = null;
        this._isActive = false;
        this._lastNavDirection = null;
        this._previousFocused = null;
        this.settings = $.extend({}, CFW_Util_Focuser.DEFAULTS, options);

        this._init();
    };

    CFW_Util_Focuser.DEFAULTS = {
        element: null,
        autoFocus: true,
        flowElement: null,
        flowFocus: false

    };

    CFW_Util_Focuser.prototype = {
        _init: function() {
            this._instance = $(this.settings.element).CFW_getID('cfw-focuser');
        },

        activate : function() {
            if (this._isActive) {
                return;
            }

            if (this.settings.autoFocus) {
                this.settings.element.focus();
            }

            $(this.settings.element).off('.cfw.focuser.' + this._instance);
            $(this.settings.element).on('keydown.cfw.focuser.' + this._instance, this._handleKeydown.bind(this));
            if (this.settings.flowFocus) {
                $(this.settings.element).on('focusout.cfw.focuser.' + this._instance, this._focusFlow.bind(this));
            } else {
                $(this.settings.element).on('focusout.cfw.focuser.' + this._instance, this._focusTrap.bind(this));
            }

            this._isActive = true;
        },

        deactivate : function() {
            if (!this._isActive) {
                return;
            }
            this._isActive = false;

            $(this.settings.element).off('.cfw.focuser.' + this._instance);
        },

        _focusHelper : function() {
        },

        _focusFlow : function(event) {
            var target = event.target;
            //var target = event.relatedTarget;
            var element = this.settings.element;
            var flowElement = this.settings.flowElement;

console.log('FOCUSFLOW', event)
console.log(target);
            if (!target) {
            //if (target && (target === document || target === element)) {
            //if (target && (target === document || target === element || element.contains(target))) {
                return;
            }

            var items = $.CFW_getFocusable(element);

            if (items.length === 0 || this._lastNavDirection === NAV_DIR_BACKWARD) {
console.log('FLOW FIRST')
                this.settings.flowElement.focus();
                return;
            }

console.log(this._lastNavDirection === NAV_DIR_FORWARD, target, items[items.length - 1]);

            if (this._lastNavDirection === NAV_DIR_FORWARD && target === items[items.length - 1]) {
console.log('FLOW LAST')
                var extItems = $.CFW_getFocusable(document);

                // Remove items from inside element
                var selectables = extItems.filter(function(item) {
                    return !element.contains(item);
                });
console.log($.CFW_getNextActiveElement(selectables, flowElement, true, true));
event.preventDefault()
event.stopPropagation();
                $.CFW_getNextActiveElement(selectables, flowElement, true, true).focus();

            }
        },

        _focusTrap : function(event) {
            var target = event.target;
            var element = this.settings.element;
            var items = $.CFW_getFocusable(element);

            if (items.length === 0) {
                this.settings.element.focus();
            } else {
                $.CFW_getNextActiveElement(items, target, this._lastNavDirection === NAV_DIR_FORWARD, true, true).focus();
            }
        },

        _handleKeydown : function(event) {
            if (event.which !== KEYCODE_TAB) {
                return;
            }
            this._previousFocused = document.activeElement;
            this._lastNavDirection = event.shiftKey ? NAV_DIR_BACKWARD : NAV_DIR_FORWARD;

            // Intercept the keypress to stop from leaving document
            event.preventDefault();
            event.stopPropagation();
            if (this.settings.flowFocus) {
                this._focusFlow(event);
            } else {
                this._focusTrap(event);
            }
        }
    };

    window.CFW_Focuser = CFW_Util_Focuser;
}(jQuery));
