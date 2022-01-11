/* global CFW_Scrollbar */
$(function() {
    'use strict';

    // Helper items
    var doc = document.documentElement;
    var body = document.body;
    var parseIntDecimal = function(arg) { return parseInt(arg, 10); };
    var getPaddingX = function(el) { return parseIntDecimal(window.getComputedStyle(el).paddingRight); };
    var getMarginX = function(el) { return parseIntDecimal(window.getComputedStyle(el).marginRight); };
    var getOverflow = function(el) { return el.style.overflow; };
    var hasPaddingAttr = function(el) { return el.hasAttribute('data-cfw-padding-right'); };
    var hasMarginAttr = function(el) { return el.hasAttribute('data-cfw-margin-right'); };
    var getPaddingAttr = function(el) { return el.getAttribute('data-cfw-padding-right'); };
    var getMarginAttr = function(el) { return el.getAttribute('data-cfw-margin-right'); };
    var getOverflowAttr = function(el) { return el.getAttribute('data-cfw-overflow'); };
    var windowCalculations = function() {
        return {
            htmlClient: doc.clientWidth,
            htmlOffset: doc.offsetWidth,
            docClient: body.clientWidth,
            htmlBound: doc.getBoundingClientRect().width,
            bodyBound: body.getBoundingClientRect().width,
            window: window.innerWidth,
            width: Math.abs(window.innerWidth - doc.clientWidth)
        };
    };

    // Android, iOS, and macOS typically hide the scrollbar by default
    // Some tests will need alternative assertions, or the automated tests will fail on these devices
    var isScrollbarHidden = function() {
        var calc = windowCalculations();
        return calc.htmlClient === calc.htmlOffset && calc.htmlClient === calc.window;
    };

    // Method to force an overflow for all devices
    var addOverflowItem = function() {
        $('<div id="forceOverflow" style="height: 110vh; width: 100%"></div>').appendTo(document.body);
    };

    // Some tests will fail in IE due to not support `position: sticky;`, so ignore them
    // Yes, it is cheating, but IE usage is minimal on a global scale
    var isIE = /(msie|trident)/i.test(navigator.userAgent);

    QUnit.module('util:CFW_Scrollbar', {
        beforeEach: function() {
            $(window).scrollTop(0);
        },
        afterEach: function() {
            $('#qunit-fixture').empty();
            $('#forceOverflow').remove();
            $('#rootElement').remove();
            $('.fixed-top').remove();
            $('.sticky-top').remove();
            var attributes = ['data-cfw-padding-right', 'style'];
            attributes.forEach(function(attr) {
                doc.removeAttribute(attr);
                body.removeAttribute(attr);
            });
        }
    });

    QUnit.test('isOverflowing() should return true if body is overflowing', function(assert) {
        assert.expect(1);
        doc.style.overflowY = 'scroll';
        body.style.overflowY = 'scroll';
        addOverflowItem();
        var result = new CFW_Scrollbar().isOverflowing();

        if (isScrollbarHidden()) {
            assert.notOk(result);
        } else {
            assert.ok(result);
        }
    });

    QUnit.test('isOverflowing() should return false if body is not overflowing', function(assert) {
        assert.expect(1);
        doc.style.overflowY = 'hidden';
        body.style.overflowY = 'hidden';
        var result = new CFW_Scrollbar().isOverflowing();
        assert.notOk(result);
    });

    QUnit.test('getScrollbarWidth() should return positive integer value true if body is overflowing', function(assert) {
        assert.expect(1);
        doc.style.overflowY = 'scroll';
        body.style.overflowY = 'scroll';
        var result = new CFW_Scrollbar().getScrollbarWidth();

        if (isScrollbarHidden()) {
            assert.strictEqual(result, 0);
        } else {
            assert.ok(result > 1);
        }
    });

    QUnit.test('getScrollbarWidth() should return 0 if body is not overflowing', function(assert) {
        assert.expect(1);
        doc.style.overflowY = 'hidden';
        body.style.overflowY = 'hidden';
        var result = new CFW_Scrollbar().getScrollbarWidth();
        assert.strictEqual(result, 0);
    });

    QUnit.test('should apply and reset inline padding to body if body is overflowing', function(assert) {
        assert.expect(4);
        doc.style.overflowY = 'scroll';
        body.style.overflowY = 'scroll';
        addOverflowItem();
        var customPadding = '10px';
        body.style.paddingRight = customPadding;
        var originalPadding = getPaddingX(body);
        var scrollbar = new CFW_Scrollbar();
        var scrollbarWidth = scrollbar.getScrollbarWidth();

        scrollbar.disable();
        var currentPadding = getPaddingX(body);
        if (isScrollbarHidden()) {
            assert.strictEqual(currentPadding, originalPadding);
        } else {
            assert.strictEqual(currentPadding, parseIntDecimal(customPadding) + scrollbarWidth);
        }
        assert.strictEqual(getPaddingAttr(body), customPadding);

        scrollbar.reset();
        var resetPadding = getPaddingX(body);
        assert.strictEqual(resetPadding, originalPadding);
        assert.strictEqual(getPaddingAttr(body), null);
    });

    QUnit.test('should apply and reset defined padding to body if body is overflowing', function(assert) {
        assert.expect(2);
        doc.style.overflowY = 'scroll';
        body.style.overflowY = 'scroll';
        addOverflowItem();
        var customPadding = '10px';
        document.querySelector('#qunit-fixture').innerHTML = '<style>body { padding-right: ' + customPadding + '; }</style>';
        var originalPadding = getPaddingX(body);
        var scrollbar = new CFW_Scrollbar();
        var scrollbarWidth = scrollbar.getScrollbarWidth();

        scrollbar.disable();
        var currentPadding = getPaddingX(body);
        if (isScrollbarHidden()) {
            assert.strictEqual(currentPadding, originalPadding);
        } else {
            assert.strictEqual(currentPadding, parseIntDecimal(customPadding) + scrollbarWidth);
        }
        scrollbar.reset();

        var resetPadding = getPaddingX(body);
        assert.strictEqual(resetPadding, originalPadding);
    });

    QUnit.test('should apply and reset overflow to body', function(assert) {
        assert.expect(4);
        doc.style.overflow = 'scroll';
        body.style.overflow = 'scroll';
        addOverflowItem();
        var scrollbar = new CFW_Scrollbar();

        scrollbar.disable();
        assert.strictEqual(getOverflow(body), 'hidden');
        assert.strictEqual(getOverflowAttr(body), 'scroll');

        scrollbar.reset();
        assert.strictEqual(getOverflow(body), 'scroll');
        assert.strictEqual(getOverflowAttr(body), null);
    });

    QUnit.test('should not apply inline padding to body if body is not overflowing', function(assert) {
        assert.expect(1);
        var originalPadding = getPaddingX(body);
        var scrollbar = new CFW_Scrollbar();

        doc.style.overflowY = 'hidden';
        doc.style.paddingRight = '0px';

        scrollbar.disable();
        var currentPadding = getPaddingX(body);

        assert.strictEqual(originalPadding, currentPadding);
        scrollbar.reset();
    });

    QUnit.test('should not apply inline padding to body if body is not overflowing, even on a scaled display', function(assert) {
        assert.expect(1);
        var originalPadding = getPaddingX(body);
        var scrollbar = new CFW_Scrollbar();

        doc.style.overflowY = 'hidden';
        // Remove body margins as would be done by Figuration CSS
        doc.style.margin = '0';
        // Simulate a discrepancy between exact, i.e. floating point body width, and rounded body width
        // as it can occur when zooming or scaling the display to something else than 100%
        doc.style.paddingRight = '.48px';

        scrollbar.disable();
        var currentPadding = getPaddingX(body);

        assert.strictEqual(originalPadding, currentPadding);
        scrollbar.reset();
    });

    QUnit.test('should respect inline styles for body', function(assert) {
        assert.expect(4);
        doc.style.overflow = 'scroll';
        body.style.overflow = 'scroll';
        body.style.color = 'red';
        addOverflowItem();
        var scrollbar = new CFW_Scrollbar();

        scrollbar.disable();
        assert.strictEqual(getOverflow(body), 'hidden');
        assert.strictEqual('red', body.style.color);

        scrollbar.reset();
        assert.strictEqual(getOverflow(body), 'scroll');
        assert.strictEqual('red', body.style.color);
    });

    if (!isIE) {
        QUnit.test('should not add data attribute if element did not have predefined rule', function(assert) {
            assert.expect(6);
            $('<div id="sticky" class="sticky-top" style="position: sticky; top: 0; width: 100vw;"></div>').appendTo(document.body);
            doc.style.overflowY = 'scroll';
            body.style.overflowY = 'scroll';
            var scrollbar = new CFW_Scrollbar();

            var elSticky = document.querySelector('#sticky');
            var originalPadding = getPaddingX(elSticky);
            var originalMargin = getMarginX(elSticky);
            var scrollbarWidth = scrollbar.getScrollbarWidth();

            scrollbar.disable();
            assert.strictEqual(originalPadding + scrollbarWidth, getPaddingX(elSticky));
            var expectedMargin = scrollbarWidth + originalMargin;
            expectedMargin = expectedMargin === 0 ? expectedMargin : -expectedMargin;
            assert.strictEqual(expectedMargin, getMarginX(elSticky));
            assert.notOk(hasPaddingAttr(elSticky));
            assert.notOk(hasMarginAttr(elSticky));

            scrollbar.reset();
            assert.strictEqual(originalPadding, getPaddingX(elSticky));
            assert.strictEqual(originalMargin, getMarginX(elSticky));
        });
    }

    QUnit.test('should remove padding and margin if it did not exist before adjustment', function(assert) {
        assert.expect(3);
        $('<div id="fixed1" class="fixed-top" style="position: fixed; top: 0; right: 0; left: 0; padding-right: 0px;"></div>').appendTo(document.body);
        $('<div id="fixed2" class="fixed-top" style="position: fixed; top: 0; right: 0; left: 0;"></div>').appendTo(document.body);
        $('<div id="sticky" class="sticky-top" style="position: sticky; top: 0; width: 100vw;"></div>').appendTo(document.body);
        body.style.overflowY = 'scroll';
        var scrollbar = new CFW_Scrollbar();

        var elFixed1 = document.querySelector('#fixed1');
        var elFixed2 = document.querySelector('#fixed2');
        var elSticky = document.querySelector('#sticky');

        scrollbar.disable();
        scrollbar.reset();
        assert.ok(elFixed1.getAttribute('style').indexOf('padding-right') > 0);
        assert.notOk(elFixed2.getAttribute('style').indexOf('padding-right') > 0);
        assert.notOk(elSticky.getAttribute('style').indexOf('margin-right') > 0);
    });

    QUnit.test('should adjust inline padding of fixed elements', function(assert) {
        assert.expect(8);
        $('<div id="fixed1" class="fixed-top" style="position: fixed; top: 0; right: 0; left: 0; padding-right: 0px;"></div>').appendTo(document.body);
        $('<div id="fixed2" class="fixed-top" style="position: fixed; top: 0; right: 0; left: 0; padding-right: 5px;"></div>').appendTo(document.body);
        body.style.overflowY = 'scroll';
        var scrollbar = new CFW_Scrollbar();

        var elFixed1 = document.querySelector('#fixed1');
        var elFixed2 = document.querySelector('#fixed2');
        var originalPadding1 = getPaddingX(elFixed1);
        var originalPadding2 = getPaddingX(elFixed2);
        var expectedPadding1 = originalPadding1 + scrollbar.getScrollbarWidth();
        var expectedPadding2 = originalPadding2 + scrollbar.getScrollbarWidth();

        scrollbar.disable();
        var currentPadding1 = getPaddingX(elFixed1);
        var currentPadding2 = getPaddingX(elFixed2);
        assert.strictEqual(originalPadding1 + 'px', getPaddingAttr(elFixed1));
        assert.strictEqual(originalPadding2 + 'px', getPaddingAttr(elFixed2));
        assert.strictEqual(expectedPadding1, currentPadding1);
        assert.strictEqual(expectedPadding2, currentPadding2);

        scrollbar.reset();
        currentPadding1 = getPaddingX(elFixed1);
        currentPadding2 = getPaddingX(elFixed2);
        assert.strictEqual(null, getPaddingAttr(elFixed1));
        assert.strictEqual(null, getPaddingAttr(elFixed2));
        assert.strictEqual(originalPadding1, currentPadding1);
        assert.strictEqual(originalPadding2, currentPadding2);
    });

    if (!isIE) {
        QUnit.test('should adjust inline padding and margin of sticky elements', function(assert) {
            assert.expect(8);
            $('<div id="sticky" class="sticky-top" style="position: sticky; top: 0; width: 100vw; padding-right: 10px; margin-right: 10px;"></div>').appendTo(document.body);
            body.style.overflowY = 'scroll';
            var scrollbar = new CFW_Scrollbar();

            var elSticky = document.querySelector('#sticky');
            var originalPadding = getPaddingX(elSticky);
            var originalMargin = getMarginX(elSticky);
            var expectedPadding = originalPadding + scrollbar.getScrollbarWidth();
            var expectedMargin = originalMargin - scrollbar.getScrollbarWidth();

            scrollbar.disable();
            var currentPadding = getPaddingX(elSticky);
            var currentMargin = getMarginX(elSticky);
            assert.strictEqual(originalPadding + 'px', getPaddingAttr(elSticky));
            assert.strictEqual(originalMargin + 'px', getMarginAttr(elSticky));
            assert.strictEqual(expectedPadding, currentPadding);
            assert.strictEqual(expectedMargin, currentMargin);

            scrollbar.reset();
            currentPadding = getPaddingX(elSticky);
            currentMargin = getMarginX(elSticky);
            assert.strictEqual(null, getPaddingAttr(elSticky));
            assert.strictEqual(null, getPaddingAttr(elSticky));
            assert.strictEqual(originalPadding, currentPadding);
            assert.strictEqual(originalMargin, currentMargin);
        });
    }

    QUnit.test('should not adjust inline padding and margin of fixed and sticky elements if not full width', function(assert) {
        assert.expect(3);
        $('<div id="fixed" class="fixed-top" style="position: fixed; top: 0; left: 0; width: 50vw;"></div>').appendTo(document.body);
        $('<div id="sticky" class="sticky-top" style="position: sticky; top: 0; width: 50vw;"></div>').appendTo(document.body);
        body.style.overflowY = 'scroll';
        var scrollbar = new CFW_Scrollbar();

        var elFixed = document.querySelector('#fixed');
        var elSticky = document.querySelector('#sticky');
        var originalPaddingF = getPaddingX(elFixed);
        var originalPaddingS = getPaddingX(elSticky);
        var originalMarginS = getPaddingX(elSticky);

        scrollbar.disable();

        var currentPaddingF = getPaddingX(elFixed);
        var currentPaddingS = getPaddingX(elSticky);
        var currentMarginS = getMarginX(elSticky);
        assert.strictEqual(originalPaddingF, currentPaddingF);
        assert.strictEqual(originalPaddingS, currentPaddingS);
        assert.strictEqual(originalMarginS, currentMarginS);

        scrollbar.reset();
    });

    QUnit.test('isOverflowing() should return true if rootElement is overflowing', function(assert) {
        assert.expect(1);
        // Trigger body scrollbar for isScrollbarHidden() test
        body.style.overflowY = 'scroll';
        $('<div id="rootElement" style="height: 100px; width: 100%; overflow: scroll;"><div style="height: 120px; width: 100px;"></div></div>').appendTo(document.body);

        var result = new CFW_Scrollbar({
            rootElement: '#rootElement'
        }).isOverflowing();

        if (isScrollbarHidden()) {
            assert.notOk(result);
        } else {
            assert.ok(result);
        }
    });

    QUnit.test('isOverflowing() should return false if rootElement is not overflowing', function(assert) {
        assert.expect(1);
        $('<div id="rootElement" style="height: 100px; width: 100%;"><div style="height: 50px; width: 100px;"></div></div>').appendTo(document.body);

        var result = new CFW_Scrollbar({
            rootElement: '#rootElement'
        }).isOverflowing();

        assert.notOk(result);
    });

    QUnit.test('getContainerWidth() should return rootElement width minus horizontal side margins', function(assert) {
        assert.expect(1);
        var containerWidth = 100;
        $('<div id="rootElement" style="height: ' + containerWidth + 'px; width: 100px; border: 3px;"></div>').appendTo(document.body);
        var result = new CFW_Scrollbar({
            rootElement: '#rootElement'
        }).getContainerWidth();

        assert.strictEqual(containerWidth, result);
    });
});
