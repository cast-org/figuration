$(function() {
    'use strict';

    QUnit.module('util');

    QUnit.test('CFW_getSelectorFromElement should return the correct element', function(assert) {
        assert.expect(2);

        var $el = $('<div data-cfw-test-target="body"></div>').appendTo($('#qunit-fixture'));
        assert.strictEqual($el.CFW_getSelectorFromElement('test'), 'body');

        // not found element
        var $el2 = $('<div data-cfw-test-target="#fakeDiv"></div>').appendTo($('#qunit-fixture'));
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
});
