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

    QUnit.test('should autofocus itself by default', function(assert) {
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
            focuser.deactivate();
            done();
        });
    });

    QUnit.test('should not autofocus itself if autoFocus option is false', function(assert) {
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
                focuser.deactivate();
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
            $(outside).trigger('focusin');

            setTimeout(function() {
                assert.strictEqual(document.activeElement, inside);
                focuser.deactivate();
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
            $(document).on('focusin', function() {
                $(document).off('focusin');
                setTimeout(function() {
                    assert.strictEqual(document.activeElement, first);
                    focuser.deactivate();
                    done();
                }, 25);
            });

            focuser.activate();
            setTimeout(function() {
                assert.strictEqual(document.activeElement, el);
                $(el).trigger(keyTab);
                $(outside).trigger('focusin');
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
            $(document).on('focusin', function() {
                $(document).off('focusin');
                setTimeout(function() {
                    assert.strictEqual(document.activeElement, last);
                    focuser.deactivate();
                    done();
                }, 25);
            });

            document.body.focus();
            focuser.activate();
            setTimeout(function() {
                assert.strictEqual(document.activeElement, el);
                $(el).trigger(keyShiftTab);
                $(outside).trigger('focusin');
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
        var outside = document.querySelector('#outside');
        var focuser = new CFW_Focuser({
            element: el,
            autoFocus: false
        });

        outside.focus();
        setTimeout(function() {
            $(document).on('focusin', function() {
                $(document).off('focusin');
                setTimeout(function() {
                    assert.strictEqual(document.activeElement, el);
                    focuser.deactivate();
                    done();
                });
            });

            focuser.activate();
            setTimeout(function() {
                assert.strictEqual(document.activeElement, outside);
                $(outside).trigger('focusin');
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

    QUnit.test('flowFocus: should move focus to item after flowElement on tab navigation exiting the element', function(assert) {
        assert.expect(2);
        var done = assert.async();
        $('<a href="#" id="first">first</a>' +
            '<a href="#" id="last">last</a>' +
            '<div id="focuser" tabindex="-1">' +
            '<a href="#" id="inside">inside</a>' +
            '</div>')
            .appendTo($('#qunit-fixture'));
        var el = document.querySelector('#focuser');
        var first = document.querySelector('#first');
        var last = document.querySelector('#last');
        var inside = document.querySelector('#inside');
        var focuser = new CFW_Focuser({
            element: el,
            flowElement: first,
            flowFocus: true
        });
        var keyTab = jQuery.Event('keydown', {
            which: 9,
            keyCode: 9
        });

        setTimeout(function() {
            $(document).on('focusin', function() {
                $(document).off('focusin');
                setTimeout(function() {
                    assert.strictEqual(document.activeElement, last);
                    focuser.deactivate();
                    done();
                }, 25);
            });

            focuser.activate();
            setTimeout(function() {
                assert.strictEqual(document.activeElement, el);
                $(inside).trigger(keyTab);
            });
        });
    });

    QUnit.test('flowFocus: should move focus to flowElement on shift+tab navigation exiting the element', function(assert) {
        assert.expect(2);
        var done = assert.async();
        $('<a href="#" id="first">first</a>' +
            '<a href="#" id="last">last</a>' +
            '<div id="focuser" tabindex="-1">' +
            '<a href="#" id="inside">inside</a>' +
            '</div>')
            .appendTo($('#qunit-fixture'));
        var el = document.querySelector('#focuser');
        var first = document.querySelector('#first');
        var inside = document.querySelector('#inside');
        var focuser = new CFW_Focuser({
            element: el,
            flowElement: first,
            flowFocus: true
        });
        var keyShiftTab = jQuery.Event('keydown', {
            which: 9,
            keyCode: 9,
            shiftKey: true
        });

        setTimeout(function() {
            $(document).on('focusin', function() {
                $(document).off('focusin');
                setTimeout(function() {
                    assert.strictEqual(document.activeElement, first);
                    focuser.deactivate();
                    done();
                }, 25);
            });

            focuser.activate();
            setTimeout(function() {
                assert.strictEqual(document.activeElement, el);
                $(inside).trigger(keyShiftTab);
            });
        });
    });

    QUnit.test('flowFocus: should move focus from flowElement on tab navigation into the element when showing', function(assert) {
        assert.expect(2);
        var done = assert.async();
        $('<a href="#" id="outside">outside</a>' +
            '<a href="#" id="external">external</a>' +
            '<div id="focuser" tabindex="-1">' +
            '<a href="#" id="first">first</a>' +
            '<a href="#" id="last">last</a>' +
            '</div>')
            .appendTo($('#qunit-fixture'));
        var el = document.querySelector('#focuser');
        var first = document.querySelector('#first');
        var outside = document.querySelector('#outside');
        var focuser = new CFW_Focuser({
            element: el,
            flowElement: outside,
            flowFocus: true
        });
        var keyTab = jQuery.Event('keydown', {
            which: 9,
            keyCode: 9
        });

        focuser.activate();
        outside.focus();
        setTimeout(function() {
            $(document).on('focusin', function() {
                $(document).off('focusin');
                setTimeout(function() {
                    assert.strictEqual(document.activeElement, first);
                    focuser.deactivate();
                    done();
                }, 25);
            });

            setTimeout(function() {
                assert.strictEqual(document.activeElement, outside);
                $(outside).trigger(keyTab);
            });
        });
    });

    QUnit.test('flowFocus: should move focus on shift+tab navigation onto flowElement into the element to last item when showing', function(assert) {
        assert.expect(2);
        var done = assert.async();
        $('<a href="#" id="outside">outside</a>' +
            '<a href="#" id="external">external</a>' +
            '<div id="focuser" tabindex="-1">' +
            '<a href="#" id="first">first</a>' +
            '<a href="#" id="last">last</a>' +
            '</div>')
            .appendTo($('#qunit-fixture'));
        var el = document.querySelector('#focuser');
        var last = document.querySelector('#last');
        var outside = document.querySelector('#outside');
        var external = document.querySelector('#external');
        var focuser = new CFW_Focuser({
            element: el,
            flowElement: outside,
            flowFocus: true
        });
        var keyShiftTab = jQuery.Event('keydown', {
            which: 9,
            keyCode: 9,
            shiftKey: true
        });
        var focusIn = jQuery.Event('focusin', {
            relatedTarget: external
        });

        setTimeout(function() {
            $(document).on('focusin', function() {
                $(document).off('focusin');
                setTimeout(function() {
                    assert.strictEqual(document.activeElement, last);
                    focuser.deactivate();
                    done();
                }, 25);
            });

            focuser.activate();
            external.focus();
            setTimeout(function() {
                assert.strictEqual(document.activeElement, external);
                $(external).trigger(keyShiftTab);
                $(outside).trigger(focusIn);
            });
        });
    });
});
