/**
 * --------------------------------------------------------------------------
 * Figuration (v2.0.0): transition.js
 * Licensed under MIT (https://github.com/cast-org/figuration/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

(function($) {
    'use strict';

    function CFW_transitionEnd() {
        var div = document.createElement('div');

        // Set name/event name pairs
        var transitionEndEventNames = {
            transition       : 'transitionend',
            MozTransition    : 'transitionend',
            OTransition      : 'oTransitionEnd otransitionend',
            WebkitTransition : 'webkitTransitionEnd'
        };

        // Test for browser specific event name to bind
        for (var eventName in transitionEndEventNames) {
            if (div.style[eventName] !== undefined) {
                return transitionEndEventNames[eventName];
            }
        }

        return false;
    }

    // http://blog.alexmaccaw.com/css-transitions
    $.fn.CFW_emulateTransitionEnd = function(duration) {
        var called = false;
        var $el = this;
        $(this).one('cfwTransitionEnd', function() { called = true; });
        var callback = function() { if (!called) $($el).trigger($.support.transitionEnd); };
        setTimeout(callback, duration);
        return this;
    };

    // Add detected events to jQuery.support for easy retrieval
    $(function() {
        $.support.transitionEnd = CFW_transitionEnd();

        if (!$.support.transitionEnd) { return; }

        $.event.special.cfwTransitionEnd = {
            bindType: $.support.transitionEnd,
            delegateType: $.support.transitionEnd,
            handle: function(e) {
                if ($(e.target).is(this)) {
                    return e.handleObj.handler.apply(this, arguments);
                }
            }
        };
    });

})(jQuery);
