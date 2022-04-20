/**
 * --------------------------------------------------------------------------
 * Figuration (v4.3.2): util/focuser.js
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

            this._eventsOff();
            $(this.settings.element).on('keydown.cfw.focuser.' + this._instance, this._handleKeydown.bind(this));
            $(document).on('focusin.cfw.focuser.' + this._instance, this._focusInvoke.bind(this));
            if (this.settings.flowFocus) {
                $(this.settings.flowElement).on('keydown.cfw.focuser.' + this._instance, this._handleFlowElement.bind(this));
                $(this.settings.flowElement).on('focusin.cfw.focuser.' + this._instance, this._handleFlowElement.bind(this));
            }

            this._isActive = true;
        },

        deactivate : function() {
            if (!this._isActive) {
                return;
            }
            this._isActive = false;
            this._eventsOff();
        },

        _eventsOff : function() {
            $(document).off('.cfw.focuser.' + this._instance);
            $(this.settings.element).off('.cfw.focuser.' + this._instance);
            if (this.settings.flowFocus) {
                $(this.settings.flowElement).off('.cfw.focuser.' + this._instance);
            }
        },

        _focusInvoke : function(event) {
            if (this.settings.flowFocus) {
                this._focusFlow(event);
            } else {
                this._focusTrap(event);
            }
        },

        _focusFlow : function(event) {
            var target = event.target;
            var element = this.settings.element;
            var flowElement = this.settings.flowElement;
            var isBackward = this._lastNavDirection === NAV_DIR_BACKWARD;

            if (event.type === 'focusin' && (target === document || target === element || element.contains(target))) {
                return;
            }

            var itemsRaw = $.CFW_getFocusable(element);
            var items = $.CFW_slimRadioInput(itemsRaw, isBackward);
            if (items.length === 0) {
                // Dialog container
                element.focus();
            } else if (event.type === 'keydown') {
                if (target === items[0] && isBackward) {
                    // Trigger element
                    event.preventDefault();
                    flowElement.focus();
                } else if ((target === items[items.length - 1] || target === itemsRaw[itemsRaw.length - 1]) && !isBackward) {
                    // Focusable elements after trigger
                    event.preventDefault();
                    var extItems = $.CFW_getFocusable(document.body);
                    // Remove items from inside element
                    extItems = extItems.filter(function(extItem) {
                        return !element.contains(extItem);
                    });
                    // 'Trim' radio inputs
                    extItems = $.CFW_slimRadioInput(extItems, false);
                    $.CFW_getNextActiveElement(extItems, flowElement, true, true, false).focus();
                }
            }
        },

        _focusTrap : function(event) {
            var target = event.target;
            var element = this.settings.element;
            var isBackward = this._lastNavDirection === NAV_DIR_BACKWARD;

            if (event.type === 'focusin' && (target === document || target === element || element.contains(target))) {
                return;
            }

            var itemsRaw = $.CFW_getFocusable(element);
            var items = $.CFW_slimRadioInput(itemsRaw, isBackward);
            if (items.length === 0) {
                element.focus();
            } else if (event.type === 'keydown') {
                if (target === items[0] && isBackward) {
                    event.preventDefault();
                    items[items.length - 1].focus();
                } else if ((target === items[items.length - 1] || target === itemsRaw[itemsRaw.length - 1]) && !isBackward) {
                    event.preventDefault();
                    items[0].focus();
                }
            } else {
                $.CFW_getNextActiveElement(items, target, !isBackward, true, true).focus();
            }
        },

        _handleKeydown : function(event) {
            if (event.which !== KEYCODE_TAB) {
                return;
            }

            this._lastNavDirection = event.shiftKey ? NAV_DIR_BACKWARD : NAV_DIR_FORWARD;

            // Possibly intercept the keypress to stop from leaving document
            this._focusInvoke(event);
        },

        _handleFlowElement : function(event) {
            var element = this.settings.element;
            var items = $.CFW_getFocusable(element);

            if (event.type === 'keydown') {
                if (event.which === KEYCODE_TAB && !event.shiftKey) {
                    event.preventDefault();
                    items = $.CFW_slimRadioInput(items, false);
                    if (items.length === 0) {
                        element.focus();
                    } else {
                        items[0].focus();
                    }
                }
            } else {
                var prevNode = event.relatedTarget || null;
                // Edge case: if coming from another tooltip/popover
                if ($(prevNode).closest('.tooltip, .popover').length) {
                    prevNode = null;
                }
                if (prevNode) {
                    // If navigating backwards onto trigger (flowElement), try to focus at end of element
                    var docItems = $.CFW_getFocusable(document.body);
                    if (docItems.indexOf(this.settings.flowElement) < docItems.indexOf(prevNode)) {
                        items = $.CFW_slimRadioInput(items, true);
                        if (items.length === 0) {
                            element.focus();
                        } else {
                            $.CFW_getNextActiveElement(items, items[0], false, true, true).focus();
                        }
                    }
                }
            }
        }
    };

    window.CFW_Focuser = CFW_Util_Focuser;
}(jQuery));
