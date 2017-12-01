/**
 * --------------------------------------------------------------------------
 * Figuration (v3.0.3): util.js
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

    function escapeId(selector) {
        // Escape IDs in case of special selectors (selector = '#myId:something')
        // $.escapeSelector does not exist in jQuery < 3
        selector = typeof $.escapeSelector === 'function' ?
            $.escapeSelector(selector).substr(1) :
            selector.replace(/(:|\.|\[|\]|,|=|@)/g, '\\$1');

        return selector;
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
    // Touch Detection
    // =====

    // Includes touch recognition fix for IE11
    // Partially from: https://github.com/Modernizr/Modernizr/blob/master/feature-detects/touchevents.js
    /* global DocumentTouch */
    var msTouch = window.navigator.msMaxTouchPoints === undefined ? false : window.navigator.msMaxTouchPoints;
    var isTouch = (('ontouchstart' in window) || msTouch || window.DocumentTouch && document instanceof DocumentTouch) ? true : false;
    $.CFW_isTouch = isTouch;

    // =====
    // Mutation Helper
    // =====

    // Not available in IE 10-, need polyfill (see docs for recommendation)
    var CFW_MutationObserverTest = function() {
        return ('MutationObserver' in window) ? window.MutationObserver : false;
    }();
    var CFW_mutationObserver = CFW_MutationObserverTest;

    function CFW_mutationObserved(records, $node) {
        if (!MutationObserver) { return; }
        var $target = $(records[0].target);
        if ($target.is($node)) { return; } // Ignore elements own mutation
        var $parent = $target.parents('[data-cfw-mutate]').first();
        $parent.triggerHandler('mutate.cfw.mutate');
    }

    $.fn.CFW_mutateTrigger = function() {
        this.find('[data-cfw-mutate]').each(function() {
            $(this).triggerHandler('mutate.cfw.mutate');
        });
        return this;
    };

    $.fn.CFW_mutationIgnore = function() {
        if (!CFW_mutationObserver) { return this; }
        this.each(function() {
            var elmObserver = $(this).data('cfw-mutationobserver');
            elmObserver && elmObserver.disconnect();
            $(this).removeData('cfw-mutationobserver')
                .off('mutated.cfw.mutate');
        });
        return this;
    };

    $.fn.CFW_mutationListen = function() {
        if (!CFW_mutationObserver) { return this; }

        this.CFW_mutationIgnore();

        this.each(function() {
            var $node = this;
            var elmObserver = new MutationObserver(function(records) {
                CFW_mutationObserved(records, $node);
            });
            elmObserver.observe(
                this, {
                    attributes: true,
                    childList: true,
                    characterData: false,
                    subtree: true,
                    attributeFilter : [
                        'style',
                        'class'
                    ]
                }
            );

            // Don't pass node so that this can force a mutation obeservation
            $(this).data('cfw-mutationobserver', elmObserver)
                .on('mutated.cfw.mutate', CFW_mutationObserved);
            /*
                .on('mutated.cfw.mutate', function(e) {
                    CFW_mutationObserved(e, $node);
                });
            */
        });
        return this;
    };

    // =====
    // Image Loaded Detection
    // =====

    // Execute a callback when an image has been loaded
    $.CFW_imageLoaded = function($img, instance, callback) {
        var img = $img[0];
        var proxyImg = new Image();
        var $proxyImg = $(proxyImg);

        if (instance === undefined) {
            instance = '';
        } else {
            instance = '.' + instance;
        }

        function _doCallback() {
            $img
                .add($proxyImg)
                .off('load.cfw.imageLoaded' + instance);
            callback();
        }

        function _isImageComplete() {
            return img.complete && img.naturalWidth !== undefined;
        }

        if (_isImageComplete() && img.naturalWidth !== 0) {
            _doCallback();
            return;
        }

        $img
            .add($proxyImg)
            .off('load.cfw.imageLoaded' + instance)
            .one('load.cfw.imageLoaded' + instance, _doCallback);
        proxyImg.src = img.src;
    };

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

        // If selector is an ID
        if (selector.charAt(0) === '#') {
            selector = escapeId(selector);
        }

        try {
            var $selector = $(document).find(selector);
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

        // If selector is an ID
        if (setting.charAt(0) === '#') {
            setting = escapeId(setting);
        }

        try {
            var $setting = $(document).find(setting);
            return $setting.length > 0 ? setting : null;
        } catch (error) {
            return null;
        }
    };

    $.fn.CFW_getScrollbarSide = function() {
        // Unable to detect side when 0-width scrollbars (such as mobile)
        // are found.  So we use 'right` side as default (more common case).

        // Hacky support for IE/Edge and their placment of scrollbar on window
        // for 'rtl' mode.
        var $node = $(this);

        if ($node.is($('html'))) {
            var browser = {
                msedge: /edge\/\d+/i.test(navigator.userAgent),
                msie: /(msie|trident)/i.test(navigator.userAgent)
            };
            var directionVal = window.getComputedStyle($node[0], null).getPropertyValue('direction').toLowerCase();
            if ((directionVal === 'rtl') && (browser.msedge || browser.msie)) {
                return 'left';
            }
            return 'right';
        } else {
            var scrollDiv = document.createElement('div');
            scrollDiv.setAttribute('style', 'overflow-y: scroll;');
            var scrollP = document.createElement('p');
            $(scrollDiv).append(scrollP);
            $node.append(scrollDiv);
            var scrollWidth = $.CFW_measureScrollbar();
            var posLeft = scrollP.getBoundingClientRect().left;
            $node[0].removeChild(scrollDiv);
            return (posLeft < scrollWidth) ? 'right' : 'left';
        }
    };

    $.CFW_throttle = function(fn, threshhold, scope) {
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

    $.CFW_measureScrollbar = function() {
        var $body = $(document.body);
        var scrollDiv = document.createElement('div');
        scrollDiv.setAttribute('style', ' position: absolute; top: -9999px; width: 50px; height: 50px; overflow: scroll;');
        $body.append(scrollDiv);
        var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
        $body[0].removeChild(scrollDiv);
        return scrollbarWidth;
    };

})(jQuery);
