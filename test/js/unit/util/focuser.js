/* global CFW_Focuser */
$(function() {
    'use strict';

    QUnit.module('util:CFW_Focuser', {
        beforeEach: function() {
            $(window).scrollTop(0);
        },
        afterEach: function() {
            $('#qunit-fixture').empty();
        }
    });

    QUnit.test('should autoFocus itself by deafult', function(assert) {
        assert.expect(1);
        var done = assert.async();
        $('<a href="#" id="outside">outside</a>' +
            '<div id="focuser" tabindex="-1"></div>')
            .appendTo($('#qunit-fixture'));
        var el = document.querySelector('#focuser');
        var focuser = new CFW_Focuser({
            element: el
        });

        focuser.activate();
        setTimeout(function() {
            assert.strictEqual(document.activeElement, el);
            done();
        });
    });

    QUnit.test('should not auto focus itself if autoFocus option is false', function(assert) {
        assert.expect(2);
        var done = assert.async();
        $('<a href="#" id="outside">outside</a>' +
            '<div id="focuser" tabindex="-1"></div>')
            .appendTo($('#qunit-fixture'));
        var el = document.querySelector('#focuser');
        var outside = document.querySelector('#outside');
        var focuser = new CFW_Focuser({
            element: el,
            autoFocus: false
        });

        outside.focus();
        setTimeout(function() {
            assert.strictEqual(document.activeElement, outside);
            focuser.activate();
            setTimeout(function() {
                assert.strictEqual(document.activeElement, outside);
                done();
            });
        });
    });

    QUnit.test('should force focus inside focuser element if possible', function(assert) {
        assert.expect(2);
        var done = assert.async();
        $('<a href="#" id="outside">outside</a>' +
            '<div id="focuser" tabindex="-1">' +
            '<a href="#" id="inside">inside</a>' +
            '</div>')
            .appendTo($('#qunit-fixture'));
        var el = document.querySelector('#focuser');
        var inside = document.querySelector('#inside');
        var outside = document.querySelector('#outside');
        var focuser = new CFW_Focuser({
            element: el
        });

        document.body.focus();
        setTimeout(function() {
            assert.strictEqual(document.activeElement, document.body);
            focuser.activate();
            $(el).trigger('focusout');

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
            '<div id="focuser" tabindex="-1">' +
            '<a href="#" id="first">first</a>' +
            '<a href="#" id="last">last</a>' +
            '</div>')
            .appendTo($('#qunit-fixture'));
        var el = document.querySelector('#focuser');
        var first = document.querySelector('#first');
        var outside = document.querySelector('#outside');
        var focuser = new CFW_Focuser({
            element: el
        });
        var keyTab = jQuery.Event('keydown', {
            which: 9,
            keyCode: 9
        });

        setTimeout(function() {
            $(document).on('focusout', $(first), function() {
                $(document).off('focusout');
                setTimeout(function() {
                    assert.strictEqual(document.activeElement, first);
                    done();
                }, 10);
            });

            focuser.activate();
            setTimeout(function() {
                assert.strictEqual(document.activeElement, el);
                $(el).trigger(keyTab);
                $(el).trigger('focusout');
            });
        });
    });

    QUnit.test('should move and wrap the focus backward on shift+tab navigation', function(assert) {
        assert.expect(2);
        var done = assert.async();
        $('<a href="#" id="outside">outside</a>' +
            '<div id="focuser" tabindex="-1">' +
            '<a href="#" id="first">first</a>' +
            '<a href="#" id="last">last</a>' +
            '</div>')
            .appendTo($('#qunit-fixture'));
        var el = document.querySelector('#focuser');
        var last = document.querySelector('#last');
        var outside = document.querySelector('#outside');
        var focuser = new CFW_Focuser({
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
            focuser.activate();
            setTimeout(function() {
                assert.strictEqual(document.activeElement, el);
                $(el).trigger(keyShiftTab);
                $(el).trigger('focusout');
            });
        });
    });

    QUnit.test('should focus on itself if no focusable content', function(assert) {
        assert.expect(2);
        var done = assert.async();
        $('<a href="#" id="outside">outside</a>' +
            '<div id="focuser" tabindex="-1">' +
            '</div>')
            .appendTo($('#qunit-fixture'));
        var el = document.querySelector('#focuser');
        var first = document.querySelector('#first');
        var outside = document.querySelector('#outside');
        var focuser = new CFW_Focuser({
            element: el,
            autoFocus: false
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

            focuser.activate();
            setTimeout(function() {
                assert.strictEqual(document.activeElement, outside);
                $(el).trigger('focusout');
            });
        });
    });

    QUnit.test('should should set and reset _isActive flag', function(assert) {
        assert.expect(2);
        $('<div id="focuser" tabindex="-1"></div>')
            .appendTo($('#qunit-fixture'));
        var el = document.querySelector('#focuser');
        var focuser = new CFW_Focuser({
            element: el
        });

        focuser.activate();
        assert.strictEqual(focuser._isActive, true);
        focuser.deactivate();
        assert.strictEqual(focuser._isActive, false);
    });
});
