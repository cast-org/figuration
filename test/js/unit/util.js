$(function() {
    'use strict';

    QUnit.module('util', {
        beforeEach: function() {
            $(window).scrollTop(0);
        },
        afterEach: function() {
            $('#qunit-fixture').empty();
        }
    });

    QUnit.test('CFW_getSelectorFromElement should return the correct element', function(assert) {
        assert.expect(2);

        var $el = $('<div data-cfw-test-target="body"></div>').appendTo($('#qunit-fixture'));
        assert.strictEqual($el.CFW_getSelectorFromElement('test'), 'body');

        // not found element
        var $el2 = $('<div data-cfw-test-target="#fakeDiv"></div>').appendTo($('#qunit-fixture'));
        assert.strictEqual($el2.CFW_getSelectorFromElement('test'), null);
    });

    QUnit.test('CFW_getSelectorFromElement should return null when there is a bad selector', function(assert) {
        assert.expect(2);

        var $el = $('<div data-test-target="#1"></div>').appendTo($('#qunit-fixture'));
        assert.strictEqual($el.CFW_getSelectorFromElement('test'), null);

        var $el2 = $('<a href="/posts"></a>').appendTo($('#qunit-fixture'));
        assert.strictEqual($el2.CFW_getSelectorFromElement('test'), null);
    });

    QUnit.test('CFW_transitionCssDuration should accept transition durations in milliseconds', function(assert) {
        assert.expect(1);
        var $div = $('<div style="transition: all 300ms ease-out;"></div>').appendTo($('#qunit-fixture'));

        assert.strictEqual($().CFW_transitionDuration($div), 300);
    });

    QUnit.test('CFW_transitionCssDuration should accept transition durations in seconds', function(assert) {
        assert.expect(1);
        var $div = $('<div style="transition: all .4s ease-out;"></div>').appendTo($('#qunit-fixture'));

        assert.strictEqual($().CFW_transitionDuration($div), 400);
    });

    QUnit.test('CFW_transitionCssDuration should get the longest transition duration if multiple transition durations are defined', function(assert) {
        assert.expect(1);
        var $div = $('<div style="transition: transform .1s ease-out, opacity .3s;"></div>').appendTo($('#qunit-fixture'));

        assert.strictEqual($().CFW_transitionDuration($div), 300);
    });

    QUnit.test('CFW_transitionCssDuration should get the longest transition duration if multiple transition elements are defined', function(assert) {
        assert.expect(1);
        var $div0 = $('<div style="transition: transform .1s ease-out, opacity .2s"></div>').appendTo($('#qunit-fixture'));
        var $div1 = $('<div style="transition: transform .1s ease-out, opacity .3s;"></div>').appendTo($('#qunit-fixture'));
        var $divs = $div0.add($div1);
        assert.strictEqual($().CFW_transitionDuration($divs), 300);
    });

    QUnit.test('CFW_transitionCssDuration should return 0 if transition duration is not defined', function(assert) {
        assert.expect(1);
        var $div = $('<div></div>').appendTo($('#qunit-fixture'));

        assert.strictEqual($().CFW_transitionDuration($div), 0);
    });

    QUnit.test('CFW_transitionCssDuration should return 0 if element is not found in DOM', function(assert) {
        assert.expect(1);
        var $div = $('#fake-id');

        assert.strictEqual($().CFW_transitionDuration($div), 0);
    });

    QUnit.test('CFW_transitionCssDuration should get additive value transition duration and transition delay', function(assert) {
        assert.expect(2);
        var $div0 = $('<div style="transition: transform .1s 200ms ease-out, opacity .2s"></div>').appendTo($('#qunit-fixture'));
        var $div1 = $('<div style="transition: transform .15s 300ms ease-out, opacity .3s;"></div>').appendTo($('#qunit-fixture'));

        assert.strictEqual($().CFW_transitionDuration($div0), 300);
        assert.strictEqual($().CFW_transitionDuration($div1), 450);
    });

    QUnit.test('CFW_findShadowRoot should find the shadow DOM root', function(assert) {
        // Only for newer browsers
        if (!document.documentElement.attachShadow) {
            assert.expect(0);
            return;
        }

        assert.expect(2);
        var $div = $('<div id="test"></div>').appendTo($('#qunit-fixture'));
        var shadowRoot = $div[0].attachShadow({
            mode: 'open'
        });

        assert.equal(shadowRoot, $().CFW_findShadowRoot(shadowRoot));
        shadowRoot.innerHTML = '<button>Shadow Button</button>';
        assert.equal(shadowRoot, $().CFW_findShadowRoot(shadowRoot.firstChild));
    });

    QUnit.test('CFW_findShadowRoot should return null when attachShadow is not available', function(assert) {
        assert.expect(1);

        var $div = $('<div id="test"></div>').appendTo($('#qunit-fixture'));
        if (!document.documentElement.attachShadow) {
            assert.equal(null, $().CFW_findShadowRoot($div[0]));
        } else {
            assert.equal(null, $().CFW_findShadowRoot($div[0]));
        }
    });

    QUnit.test('CFW_isDisabled should return true if the element has disabled attribute', function(assert) {
        assert.expect(3);
        $('<button id="test0" disabled="disabled"></button>' +
            '<button id="test1" type="button" disabled="true"></button>' +
            '<button id="test2" type="button" disabled></button>')
            .appendTo($('#qunit-fixture'));

        assert.strictEqual($.CFW_isDisabled(document.querySelector('#test0')), true);
        assert.strictEqual($.CFW_isDisabled(document.querySelector('#test1')), true);
        assert.strictEqual($.CFW_isDisabled(document.querySelector('#test2')), true);
    });

    QUnit.test('CFW_isDisabled should return true if the element has disabled="false"', function(assert) {
        assert.expect(1);
        $('<button id="test0" type="button" disabled="false"></button>')
            .appendTo($('#qunit-fixture'));

        assert.strictEqual($.CFW_isDisabled(document.querySelector('#test0')), true);
    });

    QUnit.test('CFW_isDisabled should return true if the element has class "disabled', function(assert) {
        assert.expect(1);
        $('<a id="test0" href="#" class="disabled">test</a>')
            .appendTo($('#qunit-fixture'));

        assert.strictEqual($.CFW_isDisabled(document.querySelector('#test0')), true);
    });

    QUnit.test('CFW_controlEnable should remove disabled class from link', function(assert) {
        assert.expect(2);
        $('<a id="test0" href="#" class="disabled">test</a>')
            .appendTo($('#qunit-fixture'));
        assert.strictEqual(document.querySelector('#test0').classList.contains('disabled'), true);
        $.CFW_controlEnable(document.querySelector('#test0'));
        assert.strictEqual(document.querySelector('#test0').classList.contains('disabled'), false);
    });

    QUnit.test('CFW_controlEnable should remove tabindex attribute from link', function(assert) {
        assert.expect(2);
        $('<a id="test0" href="#" class="disabled" tabindex="-1">test</a>')
            .appendTo($('#qunit-fixture'));

        assert.strictEqual(document.querySelector('#test0').getAttribute('tabindex'), '-1');
        $.CFW_controlEnable(document.querySelector('#test0'));
        assert.strictEqual(document.querySelector('#test0').hasAttribute('tabindex'), false);
    });

    QUnit.test('CFW_controlEnable should remove disabled attribute from controls', function(assert) {
        assert.expect(7);
        $('<button id="test0" type="button" disabled>test</button>' +
           '<fieldset id="test1" disabled></fieldset>' +
           '<input id="test2" disabled></input>' +
           '<optgroup id="test3" disabled></optgroup>' +
           '<option id="test4" disabled></option>' +
           '<select id="test5" disabled></select>' +
           '<textarea id="test6" disabled></textarea>')
            .appendTo($('#qunit-fixture'));

        $.CFW_controlEnable(document.querySelector('#test0'));
        $.CFW_controlEnable(document.querySelector('#test1'));
        $.CFW_controlEnable(document.querySelector('#test2'));
        $.CFW_controlEnable(document.querySelector('#test3'));
        $.CFW_controlEnable(document.querySelector('#test4'));
        $.CFW_controlEnable(document.querySelector('#test5'));
        $.CFW_controlEnable(document.querySelector('#test6'));

        assert.strictEqual(document.querySelector('#test0').hasAttribute('disabled'), false);
        assert.strictEqual(document.querySelector('#test1').hasAttribute('disabled'), false);
        assert.strictEqual(document.querySelector('#test2').hasAttribute('disabled'), false);
        assert.strictEqual(document.querySelector('#test3').hasAttribute('disabled'), false);
        assert.strictEqual(document.querySelector('#test4').hasAttribute('disabled'), false);
        assert.strictEqual(document.querySelector('#test5').hasAttribute('disabled'), false);
        assert.strictEqual(document.querySelector('#test6').hasAttribute('disabled'), false);
    });

    QUnit.test('CFW_controlEnable should remove disabled class from label wrapping a control', function(assert) {
        assert.expect(2);
        $('<label id="test0" class="disabled">' +
            '<button id="test1" type="button" disabled>test</button>' +
            '</label>')
            .appendTo($('#qunit-fixture'));

        $.CFW_controlEnable(document.querySelector('#test1'));

        assert.strictEqual(document.querySelector('#test1').hasAttribute('disabled'), false);
        assert.strictEqual(document.querySelector('#test0').classList.contains('disabled'), false);
    });

    QUnit.test('CFW_controlDisable should add disabled class to link', function(assert) {
        assert.expect(2);
        $('<a id="test0" href="#">test</a>')
            .appendTo($('#qunit-fixture'));
        assert.strictEqual(document.querySelector('#test0').classList.contains('disabled'), false);
        $.CFW_controlDisable(document.querySelector('#test0'));
        assert.strictEqual(document.querySelector('#test0').classList.contains('disabled'), true);
    });

    QUnit.test('CFW_controlDisable should add tabindex=-1 to link', function(assert) {
        assert.expect(2);
        $('<a id="test0" href="#">test</a>')
            .appendTo($('#qunit-fixture'));
        assert.strictEqual(document.querySelector('#test0').hasAttribute('tabindex'), false);
        $.CFW_controlDisable(document.querySelector('#test0'));
        assert.strictEqual(document.querySelector('#test0').getAttribute('tabindex'), '-1');
    });

    QUnit.test('CFW_controlDisable should add disabled attribute to controls', function(assert) {
        assert.expect(7);
        $('<button id="test0" type="button">test</button>' +
           '<fieldset id="test1"></fieldset>' +
           '<input id="test2"></input>' +
           '<optgroup id="test3"></optgroup>' +
           '<option id="test4"></option>' +
           '<select id="test5"></select>' +
           '<textarea id="test6"></textarea>')
            .appendTo($('#qunit-fixture'));

        $.CFW_controlDisable(document.querySelector('#test0'));
        $.CFW_controlDisable(document.querySelector('#test1'));
        $.CFW_controlDisable(document.querySelector('#test2'));
        $.CFW_controlDisable(document.querySelector('#test3'));
        $.CFW_controlDisable(document.querySelector('#test4'));
        $.CFW_controlDisable(document.querySelector('#test5'));
        $.CFW_controlDisable(document.querySelector('#test6'));

        assert.strictEqual(document.querySelector('#test0').hasAttribute('disabled'), true);
        assert.strictEqual(document.querySelector('#test1').hasAttribute('disabled'), true);
        assert.strictEqual(document.querySelector('#test2').hasAttribute('disabled'), true);
        assert.strictEqual(document.querySelector('#test3').hasAttribute('disabled'), true);
        assert.strictEqual(document.querySelector('#test4').hasAttribute('disabled'), true);
        assert.strictEqual(document.querySelector('#test5').hasAttribute('disabled'), true);
        assert.strictEqual(document.querySelector('#test6').hasAttribute('disabled'), true);
    });

    QUnit.test('CFW_controlDisable should add disabled class to label wrapping a control', function(assert) {
        assert.expect(2);
        $('<label id="test0">' +
            '<button id="test1" type="button">test</button>' +
            '</label>')
            .appendTo($('#qunit-fixture'));

        $.CFW_controlDisable(document.querySelector('#test1'));

        assert.strictEqual(document.querySelector('#test1').hasAttribute('disabled'), true);
        assert.strictEqual(document.querySelector('#test0').classList.contains('disabled'), true);
    });

    QUnit.test('CFW_getNextActiveElement should return first element if activeElement not given or does not exist, if allowStartEnd is disabled', function(assert) {
        assert.expect(4);
        var list = ['a', 'b', 'c', 'd'];

        assert.strictEqual($.CFW_getNextActiveElement(list, '', true, false, false), 'a');
        assert.strictEqual($.CFW_getNextActiveElement(list, 'z', true, true, false), 'a');
        assert.strictEqual($.CFW_getNextActiveElement(list, '', false, true, false), 'a');
        assert.strictEqual($.CFW_getNextActiveElement(list, 'z', false, false, false), 'a');
    });

    QUnit.test('CFW_getNextActiveElement should return last element if activeElement not given or does not exist, if allowStartEnd is enabled and decrementing', function(assert) {
        assert.expect(4);
        var list = ['a', 'b', 'c', 'd'];

        assert.strictEqual($.CFW_getNextActiveElement(list, '', false, true, true), 'd');
        assert.strictEqual($.CFW_getNextActiveElement(list, 'z', false, false, true), 'd');
        assert.strictEqual($.CFW_getNextActiveElement(list, '', false, false, true), 'd');
        assert.strictEqual($.CFW_getNextActiveElement(list, 'z', false, true, true), 'd');
    });

    QUnit.test('CFW_getNextActiveElement should return next element, or last element if active last, if allowLoop is disabled', function(assert) {
        assert.expect(3);
        var list = ['a', 'b', 'c', 'd'];

        assert.strictEqual($.CFW_getNextActiveElement(list, 'a', true, false), 'b');
        assert.strictEqual($.CFW_getNextActiveElement(list, 'b', true, false), 'c');
        assert.strictEqual($.CFW_getNextActiveElement(list, 'd', true, false), 'd');
    });

    QUnit.test('CFW_getNextActiveElement should return next element, or first element if active last, if allowLoop is enabled', function(assert) {
        assert.expect(2);
        var list = ['a', 'b', 'c', 'd'];

        assert.strictEqual($.CFW_getNextActiveElement(list, 'c', true, true), 'd');
        assert.strictEqual($.CFW_getNextActiveElement(list, 'd', true, true), 'a');
    });

    QUnit.test('CFW_getNextActiveElement should return previous element, or first element if active first, if allowLoop is disabled and decrementing', function(assert) {
        assert.expect(3);
        var list = ['a', 'b', 'c', 'd'];

        assert.strictEqual($.CFW_getNextActiveElement(list, 'd', false, false), 'c');
        assert.strictEqual($.CFW_getNextActiveElement(list, 'c', false, false), 'b');
        assert.strictEqual($.CFW_getNextActiveElement(list, 'a', false, false), 'a');
    });

    QUnit.test('CFW_getNextActiveElement should return previous element, or last element if active first, if allowLoop is enabled and decrementing', function(assert) {
        assert.expect(2);
        var list = ['a', 'b', 'c', 'd'];

        assert.strictEqual($.CFW_getNextActiveElement(list, 'b', false, true), 'a');
        assert.strictEqual($.CFW_getNextActiveElement(list, 'a', false, true), 'd');
    });
});
