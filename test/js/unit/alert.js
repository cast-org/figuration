$(function() {
    'use strict';

    QUnit.module('CFW_Alert');

    QUnit.test('should be defined on jquery object', function(assert) {
        assert.expect(1);
        assert.ok($(document.body).CFW_Alert, 'CFW_Alert method is defined');
    });

    QUnit.test('should return jquery collection containing the element', function(assert) {
        assert.expect(2);
        var $el = $('<div/>');
        var $col = $el.CFW_Alert();
        assert.ok($col instanceof $, 'returns jquery collection');
        assert.strictEqual($col[0], $el[0], 'collection contains element');
    });

    QUnit.test('should fade element out on clicking .close (no transition)', function(assert) {
        assert.expect(1);
        var alertHTML = '<div class="alert alert-danger">' +
            '<a class="close" href="#" data-cfw-dismiss="alert">&times;</a>' +
            '<p><strong>Danger!</strong> There is definitaly some error now.</p>' +
            '</div>';
        var $alert = $(alertHTML).css('transition', 'none').appendTo($('#qunit-fixture'));
        var $close = $alert.find('.close');
        $close
            .CFW_Alert()
            .trigger('click');
        assert.strictEqual($alert.hasClass('in'), false, 'remove .in class on .close click');
    });

    QUnit.test('should fade element out on clicking .close (with transition)', function(assert) {
        assert.expect(1);
        var done = assert.async();
        var alertHTML = '<div class="alert alert-danger">' +
            '<a class="close" href="#" data-cfw-dismiss="alert">&times;</a>' +
            '<p><strong>Danger!</strong> There is definitaly some error now.</p>' +
            '</div>';
        var $alert = $(alertHTML).css('transition', '.05s').appendTo($('#qunit-fixture'));
        var $close = $alert.find('.close');
        $alert
            .one('afterClose.cfw.alert', function() {
                assert.strictEqual($alert.hasClass('in'), false, 'remove .in class on .close click');
                done();
            });
        $close
            .CFW_Alert()
            .trigger('click');
    });

    QUnit.test('should remove element when clicking .close (no transition)', function(assert) {
        assert.expect(2);
        var alertHTML = '<div class="alert alert-danger">' +
            '<a class="close" href="#" data-cfw-dismiss="alert">&times;</a>' +
            '<p><strong>Danger!</strong> There is definitaly some error now.</p>' +
            '</div>';
        var $alert = $(alertHTML).css('transition', 'none').appendTo('#qunit-fixture');
        var $close = $alert.find('.close');
        assert.notEqual($('#qunit-fixture').find('.alert').length, 0, 'element added to dom');
        $close
            .CFW_Alert()
            .trigger('click');
        assert.strictEqual($('#qunit-fixture').find('.alert').length, 0, 'element removed from dom');
    });

    QUnit.test('should remove element when clicking .close (with transition)', function(assert) {
        assert.expect(2);
        var done = assert.async();
        var alertHTML = '<div class="alert alert-danger">' +
            '<a class="close" href="#" data-cfw-dismiss="alert">&times;</a>' +
            '<p><strong>Danger!</strong> There is definitaly some error now.</p>' +
            '</div>';
        var $alert = $(alertHTML).css('transition', '.05s').appendTo('#qunit-fixture');
        var $close = $alert.find('.close');
        assert.notEqual($('#qunit-fixture').find('.alert').length, 0, 'element added to dom');
        $alert
            .one('afterClose.cfw.alert', function() {
                assert.strictEqual($('#qunit-fixture').find('.alert').length, 0, 'element removed from dom');
                done();
            });
        $close
            .CFW_Alert()
            .trigger('click');
    });

    QUnit.test('should not fire afterClose when beforeClose is prevented', function(assert) {
        assert.expect(1);
        var done = assert.async();
        $('<div class="alert"/>')
            .on('beforeClose.cfw.alert', function(e) {
                e.preventDefault();
                assert.ok(true, 'beforeClose event fired');
                done();
            })
            .on('afterClose.cfw.alert', function() {
                assert.ok(false, 'afterClose event fired');
            })
            .CFW_Alert('close');
    });

    QUnit.test('should remove target element when clicking .close (no transition)', function(assert) {
        assert.expect(2);
        var alertHTML = '<div id="test">' +
            '<a class="close" href="#test" data-cfw-dismiss="alert">&times;</a>' +
            '<p><strong>Danger!</strong> There is definitaly some error now.</p>' +
            '</div>';
        var $alert = $(alertHTML).css('transition', 'none').appendTo('#qunit-fixture');
        var $close = $alert.find('.close');
        assert.notEqual($('#qunit-fixture').find('#test').length, 0, 'element added to dom');
        $close
            .CFW_Alert()
            .trigger('click');
        assert.strictEqual($('#qunit-fixture').find('#test').length, 0, 'element removed from dom');
    });

    QUnit.test('should remove target element when clicking .close (with transition)', function(assert) {
        assert.expect(2);
        var done = assert.async();
        var alertHTML = '<div id="test">' +
            '<a class="close" href="#test" data-cfw-dismiss="alert">&times;</a>' +
            '<p><strong>Danger!</strong> There is definitaly some error now.</p>' +
            '</div>';
        var $alert = $(alertHTML).css('transition', '.05s').appendTo('#qunit-fixture');
        var $close = $alert.find('.close');
        assert.notEqual($('#qunit-fixture').find('#test').length, 0, 'element added to dom');
        $alert
            .one('afterClose.cfw.alert', function() {
                assert.strictEqual($('#qunit-fixture').find('#test').length, 0, 'element removed from dom');
                done();
            });
        $close
            .CFW_Alert()
            .trigger('click');
    });
});
