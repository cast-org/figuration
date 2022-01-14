/* global CFW_FocusTrap */
$(function() {
    'use strict';

    QUnit.module('util:CFW_FocusTrap', {
        beforeEach: function() {
            $(window).scrollTop(0);
        },
        afterEach: function() {
            $('#qunit-fixture').empty();
        }
    });

    QUnit.test('should autofocus itself by deafult', function(assert) {
        assert.expect(1);
        var done = assert.async();
        $('<a href="#" id="outside">outside</a>' +
            '<div id="focustrap" tabindex="-1"></div>')
            .appendTo($('#qunit-fixture'));
        var el = document.querySelector('#focustrap');
        var focustrap = new CFW_FocusTrap({
            element: el
        });

        focustrap.activate();
        setTimeout(function() {
            assert.strictEqual(document.activeElement, el);
            done();
        });
    });

    QUnit.test('should not autofocus itself if autofocus option is false', function(assert) {
        assert.expect(2);
        var done = assert.async();
        $('<a href="#" id="outside">outside</a>' +
            '<div id="focustrap" tabindex="-1"></div>')
            .appendTo($('#qunit-fixture'));
        var el = document.querySelector('#focustrap');
        var outside = document.querySelector('#outside');
        var focustrap = new CFW_FocusTrap({
            element: el,
            autofocus: false
        });

        outside.focus();
        setTimeout(function() {
            assert.strictEqual(document.activeElement, outside);
            focustrap.activate();
            setTimeout(function() {
                assert.strictEqual(document.activeElement, outside);
                done();
            });
        });
    });

    QUnit.test('should force focus inside focustrap element if possible', function(assert) {
        assert.expect(2);
        var done = assert.async();
        $('<a href="#" id="outside">outside</a>' +
            '<div id="focustrap" tabindex="-1">' +
            '<a href="#" id="inside">inside</a>' +
            '</div>')
            .appendTo($('#qunit-fixture'));
        var el = document.querySelector('#focustrap');
        var inside = document.querySelector('#inside');
        var outside = document.querySelector('#outside');
        var focustrap = new CFW_FocusTrap({
            element: el
        });

        document.body.focus();
        setTimeout(function() {
            assert.strictEqual(document.activeElement, document.body);
            focustrap.activate();
            $(outside).trigger('focusin');

            setTimeout(function() {
                assert.strictEqual(document.activeElement, inside);
                done();
            });
        });
    });

    QUnit.test('should move and wrap the focus forward on tab navigation', function(assert) {
        assert.expect(2);
        var done = assert.async();
        $('<a href="#" id="outside">outside</a>' +
            '<div id="focustrap" tabindex="-1">' +
            '<a href="#" id="first">first</a>' +
            '<a href="#" id="last">last</a>' +
            '</div>')
            .appendTo($('#qunit-fixture'));
        var el = document.querySelector('#focustrap');
        var first = document.querySelector('#first');
        var outside = document.querySelector('#outside');
        var focustrap = new CFW_FocusTrap({
            element: el
        });
        var keyTab = jQuery.Event('keydown', {
            which: 9,
            keyCode: 9
        });

        setTimeout(function() {
            $(document).on('focusin', $(first), function() {
                $(document).off('focusin');
                setTimeout(function() {
                    assert.strictEqual(document.activeElement, first);
                    done();
                }, 10);
            });

            focustrap.activate();
            setTimeout(function() {
                assert.strictEqual(document.activeElement, el);
                $(document).trigger(keyTab);
                $(outside).trigger('focusin');
            });
        });
    });

    QUnit.test('should move and wrap the focus backward on shift+tab navigation', function(assert) {
        assert.expect(2);
        var done = assert.async();
        $('<a href="#" id="outside">outside</a>' +
            '<div id="focustrap" tabindex="-1">' +
            '<a href="#" id="first">first</a>' +
            '<a href="#" id="last">last</a>' +
            '</div>')
            .appendTo($('#qunit-fixture'));
        var el = document.querySelector('#focustrap');
        var last = document.querySelector('#last');
        var outside = document.querySelector('#outside');
        var focustrap = new CFW_FocusTrap({
            element: el
        });
        var keyShiftTab = jQuery.Event('keydown', {
            which: 9,
            keyCode: 9,
            shiftKey: true
        });

        setTimeout(function() {
            $(document).on('focusin', $(last), function() {
                $(document).off('focusin');
                setTimeout(function() {
                    assert.strictEqual(document.activeElement, last);
                    done();
                }, 50);
            });

            document.body.focus();
            focustrap.activate();
            setTimeout(function() {
                assert.strictEqual(document.activeElement, el);
                $(document).trigger(keyShiftTab);
                $(outside).trigger('focusin');
            });
        });
    });

    QUnit.test('should focus on itself if no focusable content', function(assert) {
        assert.expect(2);
        var done = assert.async();
        $('<a href="#" id="outside">outside</a>' +
            '<div id="focustrap" tabindex="-1">' +
            '</div>')
            .appendTo($('#qunit-fixture'));
        var el = document.querySelector('#focustrap');
        var first = document.querySelector('#first');
        var outside = document.querySelector('#outside');
        var focustrap = new CFW_FocusTrap({
            element: el,
            autofocus: false
        });

        outside.focus();
        setTimeout(function() {
            $(document).on('focusin', $(first), function() {
                $(document).off('focusin');
                setTimeout(function() {
                    assert.strictEqual(document.activeElement, el);
                    done();
                }, 50);
            });

            focustrap.activate();
            setTimeout(function() {
                assert.strictEqual(document.activeElement, outside);
                $(outside).trigger('focusin');
            });
        });
    });

    QUnit.test('should should set and reset _isActive flag', function(assert) {
        assert.expect(2);
        $('<div id="focustrap" tabindex="-1"></div>')
            .appendTo($('#qunit-fixture'));
        var el = document.querySelector('#focustrap');
        var focustrap = new CFW_FocusTrap({
            element: el
        });

        focustrap.activate();
        assert.strictEqual(focustrap._isActive, true);
        focustrap.deactivate();
        assert.strictEqual(focustrap._isActive, false);
    });
});
