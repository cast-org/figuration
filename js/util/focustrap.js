/**
 * --------------------------------------------------------------------------
 * Figuration (v4.2.1): util/focustrap.js
 * Licensed under MIT (https://github.com/cast-org/figuration/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

(function($) {
    'use strict';

    var KEYCODE_TAB = 9;
    var NAV_DIR_FORWARD = 'forward';
    var NAV_DIR_BACKWARD = 'backward';

    var CFW_Util_FocusTrap = function(options) {
        this._instance = null;
        this._isActive = false;
        this._lastNavDirection = null;
        this.settings = $.extend({}, CFW_Util_FocusTrap.DEFAULTS, options);

        this._init();
    };

    CFW_Util_FocusTrap.DEFAULTS = {
        element: null,
        autofocus: true
    };

    CFW_Util_FocusTrap.prototype = {
        _init: function() {
            this._instance = $(this.settings.element).CFW_getID('cfw-focustrap');
        },

        activate : function() {
            if (this._isActive) {
                return;
            }

            if (this.settings.autofocus) {
                this.settings.element.focus();
            }

            $(document).off('.cfw.focustrap.' + this.instance);
            $(document).on('focusin.cfw.focustrap.' + this.instance, this._handleFocusin.bind(this));
            $(document).on('keydown.cfw.focustrap.' + this.instance, this._handleKeydown.bind(this));

            this._isActive = true;
        },

        deactivate : function() {
            if (!this._isActive) {
                return;
            }
            this._isActive = false;

            $(document).off('.cfw.focustrap.' + this.instance);
        },

        _handleFocusin : function(event) {
            var target = event.target;
            var element = this.settings.element;

            if (target === document || target === element || element.contains(target)) {
                return;
            }

            var items = $.CFW_getFocusable(element);

            if (items.length === 0) {
                this.settings.element.focus();
            } else if (this._lastNavDirection === NAV_DIR_BACKWARD) {
                items[items.length - 1].focus();
            } else {
                items[0].focus();
            }
        },

        _handleKeydown : function(event) {
            if (event.which !== KEYCODE_TAB) {
                return;
            }
            this._lastNavDirection = event.shiftKey ? NAV_DIR_BACKWARD : NAV_DIR_FORWARD;
        }
    };

    window.CFW_FocusTrap = CFW_Util_FocusTrap;
}(jQuery));
