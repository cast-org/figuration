/**
 * --------------------------------------------------------------------------
 * Figuration (v2.0.0): util.js
 * Licensed under MIT (https://github.com/cast-org/figuration/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

(function($) {
    'use strict';

    function CFW_transitionEnd() {
        if (window.QUnit) {
            return false;
        }

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

    $.fn.CFW_getID = function(prefix) {
        var $node = $(this);
        var nodeID = $node.attr('id');
        if (nodeID === undefined) {
            do nodeID = prefix + '-' + ~~(Math.random() * 1000000); // "~~" acts like a faster Math.floor() here
            while (document.getElementById(nodeID));
            $node.attr('id', nodeID);
        }
        return nodeID;
    };

    $.fn.CFW_trigger = function(eventName, extraData) {
        var e = $.Event(eventName);
        if ($.isPlainObject(extraData)) {
            e = $.extend({}, e, extraData);
        }
        $(this).trigger(e);
        if (e.isDefaultPrevented()) {
            return false;
        }
        return true;
    };

})(jQuery);
