/**
 * --------------------------------------------------------------------------
 * Figuration (v4.4.0): util/backdrop.js
 * Licensed under MIT (https://github.com/cast-org/figuration/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

(function($) {
    'use strict';

    var CFW_Util_Backdrop = function(options) {
        this.element = null;
        this.isAppended = false;
        this.settings = $.extend({}, CFW_Util_Backdrop.DEFAULTS, options);

        this._init();
    };

    CFW_Util_Backdrop.DEFAULTS = {
        className: 'modal-backdrop',
        isVisible: true,        // if DOM element should be used - otherwise just make callback
        isAnimated: false,
        rootElement: 'body',    // insert backdrop inside this element
        clickCallback: null
    };

    CFW_Util_Backdrop.prototype = {
        _init : function() {
            // Update rootElement in case of DOM change
            this.settings.rootElement = $.CFW_getElement(this.settings.rootElement);
        },

        show : function(callback) {
            var $selfRef = this;

            if (!this.settings.isVisible) {
                this._execute(callback);
                return;
            }

            this._append();

            if (this.settings.isAnimated) {
                $.CFW_reflow(this.element); // Reflow for transition
            }
            this.element.classList.add('in');

            var complete = function() {
                $selfRef._execute(callback);
            };

            $(this.element).CFW_transition(null, complete);
        },

        hide : function(callback) {
            var $selfRef = this;

            if (!this.settings.isVisible) {
                this._execute(callback);
                return;
            }

            this._getBackdrop().classList.remove('in');

            var complete = function() {
                $selfRef.dispose();
                $selfRef._execute(callback);
            };

            $(this.element).CFW_transition(null, complete);
        },

        dispose : function() {
            if (!this.isAppended) {
                return;
            }

            $(this.element).off('mousedown.cfw.backdrop');
            $(this.element).remove();
            this.isAppended = false;
        },

        _getBackdrop : function() {
            if (!this.element) {
                var backdrop = document.createElement('div');
                backdrop.className = this.settings.className;
                if (this.settings.isAnimated) {
                    backdrop.classList.add('fade');
                }
                this.element = backdrop;
            }
            return this.element;
        },

        _append : function() {
            var $selfRef = this;
            if (this.isAppended) {
                return;
            }
            $(this.settings.rootElement).append(this._getBackdrop());

            $(this._getBackdrop()).on('mousedown.cfw.backdrop', function() {
                $selfRef._execute($selfRef.settings.clickCallback);
            });

            this.isAppended = true;
        },

        _execute : function(callback) {
            if (typeof callback === 'function') {
                callback();
            }
        }
    };

    window.CFW_Backdrop = CFW_Util_Backdrop;
}(jQuery));
