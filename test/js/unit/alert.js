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

    QUnit.test('should fade element out on clicking .close', function(assert) {
        assert.expect(1);
        var alertHTML = '<div class="alert alert-danger">'
            + '<a class="close" href="#" data-cfw-dismiss="alert">&times;</a>'
            + '<p><strong>Danger!</strong> There is definitaly some error now.</p>'
            + '</div>';
        var $alert = $(alertHTML).CFW_Alert().appendTo($('#qunit-fixture'));
        $alert.find('.close').trigger('click');
        assert.strictEqual($alert.hasClass('in'), false, 'remove .in class on .close click');
    });

    QUnit.test('should remove element when clicking .close', function(assert) {
        assert.expect(2);
        var alertHTML = '<div class="alert alert-danger">'
            + '<a class="close" href="#" data-cfw-dismiss="alert">&times;</a>'
            + '<p><strong>Danger!</strong> There is definitaly some error now.</p>'
            + '</div>';
        var $alert = $(alertHTML).appendTo('#qunit-fixture').CFW_Alert();
        assert.notEqual($('#qunit-fixture').find('.alert').length, 0, 'element added to dom');
        $alert.find('.close').trigger('click');
        assert.strictEqual($('#qunit-fixture').find('.alert').length, 0, 'element removed from dom');
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
});
