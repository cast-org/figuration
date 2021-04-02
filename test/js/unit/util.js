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
});
