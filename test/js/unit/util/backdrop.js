$(function() {
    'use strict';

    var CLASS_BACKDROP = '.modal-backdrop';
    var CLASS_NAME_FADE = 'fade';
    var CLASS_NAME_SHOW = 'in';


    QUnit.module('util:CFW_Backdrop', {
        beforeEach: function() {
            $(window).scrollTop(0);
        },
        afterEach: function() {
            $('#qunit-fixture').empty();
            $(CLASS_BACKDROP).remove();
        }
    });

    QUnit.test('show() should append backdrop once and include `show` class when visible', function(assert) {
        assert.expect(3);
        var done = assert.async();
        var instance = new CFW_Backdrop({
            isVisible: true,
            isAnimated: false
        });
        var getElements = function() { return document.querySelectorAll(CLASS_BACKDROP); }

        assert.strictEqual(getElements().length, 0, 'no backdrops');

        instance.show();
        instance.show(function() {
            assert.strictEqual(getElements().length, 1, 'only one backdrop');
            assert.ok(document.querySelector(CLASS_BACKDROP).classList.contains(CLASS_NAME_SHOW), 'backdrop has `show` class');
            done();
        });
    });

    QUnit.test('show() should not append backdrop if not visible', function(assert) {
        assert.expect(2);
        var done = assert.async();
        var instance = new CFW_Backdrop({
            isVisible: false,
            isAnimated: true
        });
        var getElements = function() { return document.querySelectorAll(CLASS_BACKDROP); }

        assert.strictEqual(getElements().length, 0, 'no backdrops');

        instance.show();
        instance.show(function() {
            assert.strictEqual(getElements().length, 0, 'no backdrops');
            done();
        });
    });

    QUnit.test('show() should append backdrop once and include `fade` class when visible and animated', function(assert) {
        assert.expect(3);
        var done = assert.async();
        var instance = new CFW_Backdrop({
            isVisible: true,
            isAnimated: true
        });
        var getElements = function() { return document.querySelectorAll(CLASS_BACKDROP); }

        assert.strictEqual(getElements().length, 0, 'no backdrops');

        instance.show();
        instance.show(function() {
            assert.strictEqual(getElements().length, 1, 'only one backdrop');
            assert.ok(document.querySelector(CLASS_BACKDROP).classList.contains(CLASS_NAME_FADE), 'backdrop has `fade` class');
            done();
        });
    });

    QUnit.test('hide() should remove backdrop element', function(assert) {
        assert.expect(3);
        var done = assert.async();
        var instance = new CFW_Backdrop({
            isVisible: true,
            isAnimated: true
        });
        var getElements = function() { return document.querySelectorAll(CLASS_BACKDROP); }

        assert.strictEqual(getElements().length, 0, 'no backdrops');

        instance.show();
        instance.show(function() {
            assert.strictEqual(getElements().length, 1, 'only one backdrop');
            instance.hide(function() {
                assert.strictEqual(getElements().length, 0, 'no backdrops');
                done();
            });
        });
    });

    // This test will fail because `dispose()` method is run before callback
    // QUnit.test('hide() should remove the `show` class', function(assert) {
    //     assert.expect(2);
    //     var done = assert.async();
    //     var instance = new CFW_Backdrop({
    //         isVisible: true,
    //         isAnimated: true
    //     });
    //     var getElements = function() { return document.querySelectorAll(CLASS_BACKDROP); }
    //
    //     instance.show(function() {
    //         assert.ok(document.querySelector(CLASS_BACKDROP).classList.contains(CLASS_NAME_SHOW), 'backdrop has `show` class');
    //     });
    //     instance.hide(function() {
    //         assert.notOk(document.querySelector(CLASS_BACKDROP).classList.contains(CLASS_NAME_SHOW), 'backdrop does not have `show` class');
    //         done();
    //     });
    // });

    QUnit.test('hide() should not try to remove backdrop element if not visible', function(assert) {
        assert.expect(5);
        var done = assert.async();
        var instance = new CFW_Backdrop({
            isVisible: false,
            isAnimated: true
        });
        var getElements = function() { return document.querySelectorAll(CLASS_BACKDROP); }
        var disposeCalled = false;
        instance.dispose = function() { disposeCalled = true; }

        assert.strictEqual(getElements().length, 0, 'no backdrops');
        assert.strictEqual(instance.isAppended, false);

        instance.show(function() {
            instance.hide(function() {
                assert.strictEqual(getElements().length, 0, 'no backdrops');
                assert.strictEqual(disposeCalled, false);
                assert.strictEqual(instance.isAppended, false);
                done();
            });
        });
    });

    QUnit.test('hide() should not error if backdrop no longer has a parent', function(assert) {
        assert.expect(1);
        var done = assert.async();
        document.querySelector('#qunit-fixture').innerHTML = '<div id="wrapper"></div>';
        var wrapper = document.querySelector('#wrapper');
        var instance = new CFW_Backdrop({
            isVisible: true,
            isAnimated: true,
            rootElement: wrapper
        });
        var getElements = function() { return document.querySelectorAll(CLASS_BACKDROP); }

        instance.show(function() {
            wrapper.remove();
            instance.hide(function() {
                assert.strictEqual(getElements().length, 0, 'no backdrops');
                done();
            });
        });
    });

    QUnit.test('clickCallback() should execute on click', function(assert) {
        assert.expect(1);
        var done = assert.async();
        var callbackCalled = false;
        var instance = new CFW_Backdrop({
            isVisible: true,
            isAnimated: false,
            clickCallback: function() { callbackCalled = true; }
        });
        var checkCallback = function() {
            setTimeout(function() {
                assert.strictEqual(callbackCalled, true);
                done();
            }, 10);
        }

        instance.show(function() {
            $(document.querySelector(CLASS_BACKDROP)).trigger('mousedown');
            checkCallback();
        });
    });

    QUnit.test('should append to "document.body" by default', function(assert) {
        assert.expect(1);
        var done = assert.async();
        var instance = new CFW_Backdrop({
            isVisible: true
        });
        var getElement = function() { return document.querySelector(CLASS_BACKDROP); }

        instance.show(function() {
            assert.strictEqual(getElement().parentElement, document.body);
            done();
        });
    });

    QUnit.test('should append to specified rootElement', function(assert) {
        assert.expect(1);
        var done = assert.async();
        document.querySelector('#qunit-fixture').innerHTML = '<div id="wrapper"></div>';
        var wrapper = document.querySelector('#wrapper');
        var instance = new CFW_Backdrop({
            isVisible: true,
            rootElement: wrapper
        });
        var getElement = function() { return document.querySelector(CLASS_BACKDROP); }

        instance.show(function() {
            assert.strictEqual(getElement().parentElement, wrapper);
            done();
        });
    });

    QUnit.test('should use the specified className', function(assert) {
        assert.expect(1);
        var done = assert.async();
        var instance = new CFW_Backdrop({
            isVisible: true,
            className: 'foo'
        });
        var getElement = function() { return document.querySelector('.foo'); }

        instance.show(function() {
            assert.strictEqual(getElement(), instance._getBackdrop());
            done();
        });
    });

});
