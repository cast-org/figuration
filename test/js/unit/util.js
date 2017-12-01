$(function() {
    'use strict';

    QUnit.module('util');

    QUnit.test('CFW_getSelectorFromElement should return the correct element', function(assert) {
        assert.expect(5);

        var $el = $('<div data-cfw-test-target="body"></div>').appendTo($('#qunit-fixture'));
        assert.strictEqual($el.CFW_getSelectorFromElement('test'), 'body');

        // not found element
        var $el2 = $('<div data-cfw-test-target="#fakeDiv"></div>').appendTo($('#qunit-fixture'));
        assert.strictEqual($el2.CFW_getSelectorFromElement('test'), null);

        // should escape ID and find the correct element
        var $el3 = $('<div data-cfw-test-target="#collapse:Example"></div>').appendTo($('#qunit-fixture'));
        $('<div id="collapse:Example"></div>').appendTo($('#qunit-fixture'));
        assert.strictEqual($el3.CFW_getSelectorFromElement('test'), '#collapse\\:Example');

        // if $.escapeSelector doesn't exist in older jQuery versions (< 3)
        var tmpEscapeSelector = $.escapeSelector;
        delete $.escapeSelector;
        assert.ok(typeof $.escapeSelector === 'undefined', '$.escapeSelector undefined');
        assert.strictEqual($el3.CFW_getSelectorFromElement('test'), '#collapse\\:Example');
        $.escapeSelector = tmpEscapeSelector;
    });

});
