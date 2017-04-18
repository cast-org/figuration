/**
 * --------------------------------------------------------------------------
 * Figuration (v3.0.0-alpha.2): util.js
 * Licensed under MIT (https://github.com/cast-org/figuration/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

(function($) {
    'use strict';

    // =====
    // Private util helpers
    // =====

    String.prototype.capitalize = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    };

    function doCallback(callback) {
        if (callback) { callback(); }
    }

    // =====
    // TransitionEnd support/emulation
    // =====

    var transition = false;
    var TRANSITION_END = 'cfwTransitionEnd';

    function CFW_transitionEndTest() {
        var div = document.createElement('div');

        var transitionEndEvents = {
            transition       : 'transitionend',
            MozTransition    : 'transitionend',
            OTransition      : 'oTransitionEnd otransitionend',
            WebkitTransition : 'webkitTransitionEnd'
        };

        // Test for browser specific event name to bind
        for (var eventName in transitionEndEvents) {
            if (div.style[eventName] !== undefined) {
                return { end: transitionEndEvents[eventName] };
            }
        }

        // No browser transitionEnd support - use custom event name
        return { end: TRANSITION_END };
    }

    // Get longest CSS transition duration
    function CFW_transitionCssDuration($node) {
        var durationArray = [0]; // Set a min value -- otherwise get `Infinity`
        $node.each(function() {
            var durations = $node.css('transition-duration') || $node.css('-webkit-transition-duration') || $node.css('-moz-transition-duration') || $node.css('-ms-transition-duration') || $node.css('-o-transition-duration');
            if (durations) {
                var times = durations.split(',');
                for (var i = times.length; i--;) { // Reverse loop should be faster
                    durationArray = durationArray.concat(parseFloat(times[i]));
                }
            }
        });

        var duration = Math.max.apply(Math, durationArray); // http://stackoverflow.com/a/1379560
        duration = duration * 1000; // convert to milliseconds

        return duration;
    }

    function CFW_transitionEndEmulate(start, complete) {
        var duration = CFW_transitionCssDuration(this);

        if (duration) {
            var called = false;
            this.one(TRANSITION_END, function() {
                if (!called) {
                    called = true;
                    doCallback(complete);
                }
            });

            // Set timeout as fallback for instances where transitionEnd is not called.
            // This way the complete callback is always executed.
            setTimeout(function() {
                if (!called) {
                    called = true;
                    doCallback(complete);
                }
            }, duration);

            doCallback(start);
        } else {
            doCallback(start);
            doCallback(complete);
        }
        return this;
    }

    function CFW_transitionEndSpecial() {
        return {
            bindType: transition.end,
            delegateType: transition.end,
            handle: function(e) {
                if ($(e.target).is(this)) {
                    return e.handleObj.handler.apply(this, arguments);
                }
                return undefined;
            }
        };
    }

    transition = CFW_transitionEndTest();
    $.fn.CFW_transition = CFW_transitionEndEmulate;
    $.event.special[TRANSITION_END] = CFW_transitionEndSpecial();

    // =====
    // Public Utils
    // =====

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

    $.fn.CFW_parseData = function(name, object) {
        var parsedData = {};
        var $node = $(this);
        var data = $node.data();
        name = name.capitalize();

        for (var prop in object) {
            if (object.hasOwnProperty(prop)) {
                var propName = prop.capitalize();
                if (typeof data['cfw' + name + propName] !== 'undefined') {
                    parsedData[prop] = data['cfw' + name + propName];
                }
            }
        }
        return parsedData;
    };

    $.fn.CFW_getSelectorFromElement = function(name) {
        var $node = $(this);
        var selector = $node.attr('data-cfw-' + name + '-target');
        if (!selector || selector === '#') {
            selector = $node.attr('href') || '';
        }

        try {
            var $selector = $(selector);
            return $selector.length > 0 ? selector : null;
        } catch (error) {
            return null;
        }
    };

    $.fn.CFW_getSelectorFromChain = function(name, setting) {
        var $node = $(this);
        if (!setting || setting === '#') {
            return $node.CFW_getSelectorFromElement();
        }

        try {
            var $setting = $(setting);
            return $setting.length > 0 ? setting : null;
        } catch (error) {
            return null;
        }
    };

    $.fn.CFW_throttle = function(fn, threshhold, scope) {
        /* From: http://remysharp.com/2010/07/21/throttling-function-calls/ */
        if (threshhold === undefined) { threshhold = 250; }
        var last;
        var deferTimer;
        return function() {
            var context = scope || this;

            var now = +new Date();
            var args = arguments;
            if (last && now < last + threshhold) {
                // hold on to it
                clearTimeout(deferTimer);
                deferTimer = setTimeout(function() {
                    last = now;
                    fn.apply(context, args);
                }, threshhold);
            } else {
                last = now;
                fn.apply(context, args);
            }
        };
    };

    $.fn.CFW_measureScrollbar = function() {
        var $body = $(document.body);
        var scrollDiv = document.createElement('div');
        scrollDiv.setAttribute('style', ' position: absolute; top: -9999px; width: 50px; height: 50px; overflow: scroll;');
        $body.append(scrollDiv);
        var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
        $body[0].removeChild(scrollDiv);
        return scrollbarWidth;
    };

})(jQuery);
