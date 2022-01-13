/**
 * --------------------------------------------------------------------------
 * Figuration (v4.2.1): util.js
 * Licensed under MIT (https://github.com/cast-org/figuration/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

(function($) {
    'use strict';

    // =====
    // Private util helpers
    // =====

    /* eslint-disable-next-line no-extend-native */
    String.prototype.capitalize = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    };

    var doCallback = function(callback) {
        if (callback) { callback(); }
    };

    // =====
    // TransitionEnd support/emulation
    // =====

    var transition = false;
    var TRANSITION_END = 'cfwTransitionEnd';

    var CFW_transitionEndTest = function() {
        var div = document.createElement('div');

        var transitionEndEvents = {
            transition       : 'transitionend',
            MozTransition    : 'transitionend',
            OTransition      : 'oTransitionEnd otransitionend',
            WebkitTransition : 'webkitTransitionEnd'
        };

        // Test for browser specific event name to bind
        for (var eventName in transitionEndEvents) {
            if (typeof div.style[eventName] !== 'undefined') {
                return {
                    end: transitionEndEvents[eventName]
                };
            }
        }

        // No browser transitionEnd support - use custom event name
        return {
            end: TRANSITION_END
        };
    };

    // Get longest CSS transition duration
    var CFW_transitionCssDuration = function($node) {
        var timeArray = [0]; // Set a min value -- otherwise get `Infinity`
        var MILLISECONDS_MULTIPLIER = 1000;
        var DURATION_PRECISION = 2;

        $node.each(function() {
            var $this = $(this);
            var transitionDuration = $this.css('transition-duration');
            var transitionDelay = $this.css('transition-delay');

            if (transitionDuration && transitionDelay) {
                var durations = transitionDuration.split(',');
                var delays = transitionDelay.split(',');
                for (var i = durations.length; i--;) {
                    timeArray = timeArray.concat(parseFloat(durations[i]) + parseFloat(delays[i]));
                }
            }
        });

        var duration = Math.max.apply(Math, timeArray); // http://stackoverflow.com/a/1379560
        return duration.toPrecision(DURATION_PRECISION) * MILLISECONDS_MULTIPLIER; // convert to milliseconds
    };

    var CFW_transitionEndEmulate = function(start, complete) {
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
    };

    var CFW_transitionEndSpecial = function() {
        return {
            bindType: transition.end,
            delegateType: transition.end,
            handle: function(e) {
                if ($(e.target).is(this)) {
                    return e.handleObj.handler.apply(this, arguments);
                }
                return undefined; /* eslint-disable-line no-undefined */
            }
        };
    };

    transition = CFW_transitionEndTest();
    $.fn.CFW_transitionDuration = CFW_transitionCssDuration;
    $.fn.CFW_transition = CFW_transitionEndEmulate;
    $.event.special[TRANSITION_END] = CFW_transitionEndSpecial();

    // =====
    // Touch Detection
    // =====

    // Includes touch recognition fix for IE11
    // Partially from: https://github.com/Modernizr/Modernizr/blob/master/feature-detects/touchevents.js
    /* global DocumentTouch */
    var msTouch = typeof window.navigator.msMaxTouchPoints === 'undefined' ? false : window.navigator.msMaxTouchPoints;
    var isTouch = false;
    if (('ontouchstart' in window) || msTouch || (window.DocumentTouch && document instanceof DocumentTouch)) {
        isTouch = true;
    }
    $.CFW_isTouch = isTouch;

    // =====
    // Mutation Helper
    // =====

    // Not available in IE 10-, need a polyfill
    var CFW_MutationObserverTest = (function() {
        return 'MutationObserver' in window ? window.MutationObserver : false;
    }());
    var CFW_mutationObserver = CFW_MutationObserverTest;

    var CFW_mutationObserved = function(records, $node) {
        if (!MutationObserver) { return; }
        var $target = $(records[0].target);
        if ($target.is($node)) { return; } // Ignore elements own mutation
        var $parent = $target.parents('[data-cfw-mutate]').first();
        $parent.triggerHandler('mutate.cfw.mutate');
    };

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
            if (typeof elmObserver !== 'undefined') {
                elmObserver.disconnect();
            }
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

            // Don't pass node so that this can force a mutation observation
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

        if (typeof instance === 'undefined') {
            instance = '';
        } else {
            instance = '.' + instance;
        }

        var _doCallback = function() {
            $proxyImg
                .off('load.cfw.imageLoaded' + instance)
                .remove();
            callback();
        };

        var _isImageComplete = function() {
            return img.complete && typeof img.naturalWidth !== 'undefined';
        };

        // Firefox reports img.naturalWidth=0 for SVG
        // Also currently borked in most browsers: https://github.com/whatwg/html/issues/3510
        // if (_isImageComplete() && img.naturalWidth !== 0) {
        if (_isImageComplete()) {
            _doCallback();
            return;
        }

        $proxyImg
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
        var MAX_ID = 1000000;
        if (typeof nodeID === 'undefined') {
            do {
                /* eslint-disable-next-line no-bitwise */
                nodeID = prefix + '-' + ~~(Math.random() * MAX_ID); // "~~" acts like a faster Math.floor() here
            } while (document.getElementById(nodeID));
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
            if (Object.prototype.hasOwnProperty.call(object, prop)) {
                var propName = prop.capitalize();
                if (typeof data['cfw' + name + propName] !== 'undefined') {
                    parsedData[prop] = data['cfw' + name + propName];
                }
            }
        }
        return parsedData;
    };

    $.fn.CFW_getSelectorFromElement = function(name) {
        var selector = this[0].getAttribute('data-cfw-' + name + '-target');

        if (!selector || selector === '#') {
            selector = this[0].getAttribute('href') || '';
        }

        try {
            return document.querySelector(selector) ? selector : null;
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
            return document.querySelector(setting) ? setting : null;
        } catch (error) {
            return null;
        }
    };

    $.CFW_isRTL = function(element) {
        if (typeof element === 'undefined') { element = document.documentElement; }
        var directionVal = window.getComputedStyle(element, null).getPropertyValue('direction').toLowerCase();
        return Boolean(directionVal === 'rtl');
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
            if ($.CFW_isRTL($node[0]) && (browser.msedge || browser.msie)) {
                return 'left';
            }
            return 'right';
        }

        var scrollDiv = document.createElement('div');
        scrollDiv.setAttribute('style', 'overflow-y: scroll;');
        var scrollP = document.createElement('p');
        $(scrollDiv).append(scrollP);
        $node.append(scrollDiv);
        var scrollbarWidth = $.CFW_measureScrollbar();
        var posLeft = scrollP.getBoundingClientRect().left;
        $node[0].removeChild(scrollDiv);
        return posLeft < scrollbarWidth ? 'right' : 'left';
    };

    $.fn.CFW_findShadowRoot = function(element) {
        if (!document.documentElement.attachShadow) {
            return null;
        }

        // Can find the shadow root otherwise it'll return the document
        if (typeof element.getRootNode === 'function') {
            var root = element.getRootNode();
            return root instanceof ShadowRoot ? root : null;
        }

        if (element instanceof ShadowRoot) {
            return element;
        }

        // when we don't find a shadow root
        if (!element.parentNode) {
            return null;
        }

        return null;
    };

    $.CFW_throttle = function(fn, threshhold, scope) {
        /* From: http://remysharp.com/2010/07/21/throttling-function-calls/ */
        var THRESHHOLD_DEFAULT = 250;
        if (typeof threshhold === 'undefined') {
            threshhold = THRESHHOLD_DEFAULT;
        }
        var last;
        var deferTimer;
        return function() {
            var context = scope || this;

            var now = Number(new Date());
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
        var scrollDiv = document.createElement('div');
        scrollDiv.setAttribute('style', ' position: absolute; top: -9999px; width: 50px; height: 50px; overflow: scroll;');
        document.body.appendChild(scrollDiv);
        var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
        document.body.removeChild(scrollDiv);
        return scrollbarWidth;
    };

    $.CFW_reflow = function(element) {
        if (element instanceof jQuery) {
            element = element[0];
        }
        return element.offsetHeight;
    };

    $.CFW_controlEnable = function(element) {
        $(element)
            .removeClass('disabled')
            .removeAttr('tabindex')
            .removeAttr('disabled')
            .closest('label')
            .removeClass('disabled');
    };

    $.CFW_controlDisable = function(element) {
        var $control = $(element);

        if ($control.length && /button|fieldset|input|optgroup|option|select|textarea/i.test($control[0].tagName)) {
            $control.prop('disabled', true);
            $control
                .closest('label')
                .addClass('disabled');
        } else {
            $control.addClass('disabled').attr('tabindex', -1);
        }
    };

    $.CFW_isDisabled = function(element) {
        if (element instanceof jQuery) {
            element = element[0];
        }
        if (!element || element.nodeType !== Node.ELEMENT_NODE) {
            return true;
        }
        if (/^(button|input|select|textarea)$/i.test(element.nodeName)) {
            var fieldset = $(element).closest('fieldset')[0];
            if (fieldset && fieldset.disabled) {
                return true;
            }
        }
        if (typeof element.disabled === 'boolean') {
            return element.disabled;
        }
        return element.classList.contains('disabled') || element.hasAttribute('disabled');
    };

    $.CFW_isVisible = function(element) {
        if (element instanceof jQuery) {
            element = element[0];
        }
        if (!$.CFW_isElement(element) || element.getClientRects().length === 0) {
            return false;
        }
        return window.getComputedStyle(element).getPropertyValue('visibility') === 'visible';
    };

    $.CFW_isFocusable = function(element) {
        // This is only a cursory check - mostly to be used with `$.CFW_getFocusable()`
        // Many elements will pass this test if they do not explicitly fail
        // the conditions below.  For example, passing `<div></div>` through
        // this method will return true, but the `<div>` is not actually focusable.
        if (element instanceof jQuery) {
            element = element[0];
        }
        var tabindex = element.getAttribute('tabindex') || '';
        if (tabindex !== '') {
            if (isNaN(tabindex) || tabindex < 0) {
                return false;
            }
        }
        return !$.CFW_isDisabled(element) && $.CFW_isVisible(element);
    };

    $.CFW_getFocusable = function(element, allowed) {
        if (typeof allowed === 'undefined') {
            allowed = [
                'a',
                'button',
                'details',
                'input',
                'select',
                'textarea',
                '[tabindex]',
                '[contenteditable="true"]'
            ].map(function(selector) {
                return selector + ':not([tabindex^="-"])';
            }).join(', ');
        }

        var items = element.querySelectorAll(allowed);
        var focusables = [];

        for (var item of items) {
            if ($.CFW_isFocusable(item)) {
                focusables.push(item);
            }
        }

        return focusables;
    };

    $.CFW_isElement = function(object) {
        if (!object || typeof object !== 'object') {
            return false;
        }
        if (typeof object.jquery !== 'undefined') {
            object = object[0];
        }
        return typeof object.nodeType !== 'undefined';
    };

    $.CFW_getElement = function(object) {
        // Check for jQuery object or a node element
        if ($.CFW_isElement(object)) {
            return object.jquery ? object[0] : object;
        }
        if (typeof object === 'string' && object.length > 0) {
            return document.querySelector(object);
        }
        return null;
    };

    $.CFW_getNextActiveElement = function(list, activeElement, doIncrement, allowLoop, allowStartEnd) {
        var index = list.indexOf(activeElement);
        var listLength = list.length;

        if (typeof allowLoop === 'undefined') { allowLoop = false; }
        if (typeof allowStartEnd === 'undefined') { allowStartEnd = false; }

        // If currently actve element does not exist in the list
        // return an element depending on the direction and if starting at the end is allowed
        if (index === -1) {
            return list[!doIncrement && allowStartEnd ? listLength - 1 : 0];
        }

        index += doIncrement ? 1 : -1;

        if (allowLoop) {
            index = (index + listLength) % listLength;
        }

        return list[Math.max(0, Math.min(index, listLength - 1))];
    };

    $.CFW_enableDismissControl = function(name, method) {
        if (typeof CFW_API !== 'undefined' && CFW_API === false) { return; }

        if (typeof method === 'undefined') { method = 'hide'; }
        var widget = 'CFW_' + name.capitalize();
        var eventName = 'click.dismiss.cfw.' + name;

        $(document).on(eventName, '[data-cfw-dismiss="' + name + '"]', function(event) {
            if (/a|area/i.test(this.tagName)) {
                event.preventDefault();
            }
            if ($.CFW_isDisabled(this)) { return; }

            var selector = $(this).CFW_getSelectorFromElement(name);
            var $elm = selector ? $(selector) : $(this).closest('.' + name);

            if ($elm.length) {
                $elm[widget](method, event);
            }
        });
    };
}(jQuery));
