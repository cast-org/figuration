$(function() {
    'use strict';

    QUnit.module('CFW_Button');

    QUnit.test('should be defined on jquery object', function(assert) {
        assert.expect(1);
        assert.ok($(document.body).CFW_Button, 'CFW_Button method is defined');
    });

    QUnit.test('should return jquery collection containing the element', function(assert) {
        assert.expect(2);
        var $el = $('<div/>');
        var $col = $el.CFW_Button();
        assert.ok($col instanceof $, 'returns jquery collection');
        assert.strictEqual($col[0], $el[0], 'collection contains element');
    });

    QUnit.test('should toggle active', function(assert) {
        assert.expect(2);
        var $btn = $('<button class="btn" data-cfw="button">test</button>');
        assert.ok(!$btn.hasClass('active'), 'btn does not have active class');
        $btn.CFW_Button('toggle');
        assert.ok($btn.hasClass('active'), 'btn has class active');
    });

    QUnit.test('should toggle active when btn children are clicked', function(assert) {
        assert.expect(2);
        var $btn = $('<button class="btn" data-cfw="button">test</button>');
        var $inner = $('<i/>');
        $btn.append($inner)
            .appendTo('#qunit-fixture');
        assert.ok(!$btn.hasClass('active'), 'btn does not have active class');
        $inner.trigger('click');
        assert.ok($btn.hasClass('active'), 'btn has class active');
    });

    QUnit.test('should toggle aria-pressed', function(assert) {
        assert.expect(2);
        var $btn = $('<button class="btn" data-cfw="button" aria-pressed="false">test</button>');
        assert.strictEqual($btn.attr('aria-pressed'), 'false', 'btn aria-pressed state is false');
        $btn.CFW_Button('toggle');
        assert.strictEqual($btn.attr('aria-pressed'), 'true', 'btn aria-pressed state is true');
    });

    QUnit.test('should toggle aria-pressed when btn children are clicked', function(assert) {
        assert.expect(2);
        var $btn = $('<button class="btn" data-cfw="button" aria-pressed="false">test</button>');
        var $inner = $('<i/>');
        $btn.append($inner)
            .appendTo('#qunit-fixture');
        assert.strictEqual($btn.attr('aria-pressed'), 'false', 'btn aria-pressed state is false');
        $inner.trigger('click');
        assert.strictEqual($btn.attr('aria-pressed'), 'true', 'btn aria-pressed state is true');
    });

    QUnit.test('should trigger input change event when toggled button has input field', function(assert) {
        assert.expect(1);
        var done = assert.async();

        var groupHTML = '<div class="btn-group" data-toggle="buttons">'
            + '<label class="btn btn-primary">'
            + '<input type="radio" id="radio" autocomplete="off">Radio'
            + '</label>'
            + '</div>';
        var $group = $(groupHTML).appendTo('#qunit-fixture');

        $group.find('input').on('change', function(e) {
            e.preventDefault();
            assert.ok(true, 'change event fired');
            done();
        });

        $group.find('label').trigger('click');
    });

    QUnit.test('should check for closest matching toggle', function(assert) {
        assert.expect(12);
        var groupHTML = '<div class="btn-group" data-cfw="buttons">'
            + '<label class="btn btn-primary active">'
            + '<input type="radio" name="options" id="option1" checked="true"> Option 1'
            + '</label>'
            + '<label class="btn btn-primary">'
            + '<input type="radio" name="options" id="option2"> Option 2'
            + '</label>'
            + '<label class="btn btn-primary">'
            + '<input type="radio" name="options" id="option3"> Option 3'
            + '</label>'
            + '</div>';
        var $group = $(groupHTML).appendTo('#qunit-fixture');

        var $btn1 = $group.children().eq(0);
        var $btn2 = $group.children().eq(1);

        assert.ok($btn1.hasClass('active'), 'btn1 has active class');
        assert.ok($btn1.find('input').prop('checked'), 'btn1 is checked');
        assert.ok(!$btn2.hasClass('active'), 'btn2 does not have active class');
        assert.ok(!$btn2.find('input').prop('checked'), 'btn2 is not checked');
        $btn2.find('input').trigger('click');
        assert.ok(!$btn1.hasClass('active'), 'btn1 does not have active class');
        assert.ok(!$btn1.find('input').prop('checked'), 'btn1 is not checked');
        assert.ok($btn2.hasClass('active'), 'btn2 has active class');
        assert.ok($btn2.find('input').prop('checked'), 'btn2 is checked');

        $btn2.find('input').trigger('click'); // clicking an already checked radio should not un-check it
        assert.ok(!$btn1.hasClass('active'), 'btn1 does not have active class');
        assert.ok(!$btn1.find('input').prop('checked'), 'btn1 is not checked');
        assert.ok($btn2.hasClass('active'), 'btn2 has active class');
        assert.ok($btn2.find('input').prop('checked'), 'btn2 is checked');
    });
});
