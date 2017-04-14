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

    QUnit.test('should not add aria-pressed on labels for radio/checkbox inputs in a data-toggle="buttons" group', function(assert) {
        assert.expect(2);
        var groupHTML = '<div class="btn-group" data-cfw="buttons">'
            + '<label id="btn1" class="btn btn-primary"><input type="checkbox" autocomplete="off"> Checkbox</label>'
            + '<label id="btn2" class="btn btn-primary"><input type="radio" name="options" autocomplete="off"> Radio</label>'
            + '</div>';
        var $group = $(groupHTML).appendTo('#qunit-fixture');
        var $btn1 = $('#btn1');
        var $btn2 = $('#btn2');
        $group.CFW_Button();
        $btn1.find('input').trigger('click');
        assert.ok($btn1.is(':not([aria-pressed])'), 'label for nested checkbox input has not been given an aria-pressed attribute');
        $btn2.find('input').trigger('click');
        assert.ok($btn2.is(':not([aria-pressed])'), 'label for nested radio input has not been given an aria-pressed attribute');
    });

    QUnit.test('should set active if btn child is checked radio', function(assert) {
        assert.expect(2);
        var groupHTML = '<div class="btn-group" data-cfw="buttons">'
            + '<label id="btn1" class="btn btn-primary">'
            + '<input type="radio" id="radio1" autocomplete="off" checked>Radio'
            + '</label>'
            + '</div>';
        var $group = $(groupHTML).appendTo('#qunit-fixture');
        var $btn = $('#btn1');
        assert.ok(!$btn.hasClass('active'), 'btn does not have active class');
        $group.CFW_Button();
        assert.ok($btn.hasClass('active'), 'btn has active class');
    });

    QUnit.test('should not set aria-pressed if btn child is checked radio', function(assert) {
        assert.expect(1);
        var groupHTML = '<div class="btn-group" data-cfw="buttons">'
            + '<label id="btn1" class="btn btn-primary">'
            + '<input type="radio" id="radio1" autocomplete="off" checked>Radio'
            + '</label>'
            + '</div>';
        var $group = $(groupHTML).appendTo('#qunit-fixture');
        $group.CFW_Button();
        assert.ok($('#btn1').is(':not([aria-pressed])'));
    });

    QUnit.test('should not set aria-pressed if btn child is unchecked radio', function(assert) {
        assert.expect(1);
        var groupHTML = '<div class="btn-group" data-cfw="buttons">'
            + '<label id="btn1" class="btn btn-primary">'
            + '<input type="radio" id="radio1" autocomplete="off">Radio'
            + '</label>'
            + '</div>';
        var $group = $(groupHTML).appendTo('#qunit-fixture');
        $group.CFW_Button();
        assert.ok($('#btn1').is(':not([aria-pressed])'));
    });

    QUnit.test('should remove active if btn child is unchecked radio', function(assert) {
        assert.expect(2);
        var groupHTML = '<div class="btn-group" data-cfw="buttons">'
            + '<label id="btn1" class="btn btn-primary active">'
            + '<input type="radio" id="radio1" autocomplete="off">Radio'
            + '</label>'
            + '</div>';
        var $group = $(groupHTML).appendTo('#qunit-fixture');
        var $btn = $('#btn1');
        assert.ok($btn.hasClass('active'), 'btn has active class');
        $group.CFW_Button();
        assert.ok(!$btn.hasClass('active'), 'btn does not have active class');
    });

    QUnit.test('should set active if btn child is checked checkbox', function(assert) {
        assert.expect(2);
        var groupHTML = '<div class="btn-group" data-cfw="buttons">'
            + '<label id="btn1" class="btn btn-primary">'
            + '<input type="checkbox" id="checkbox1" autocomplete="off" checked>Checkbox'
            + '</label>'
            + '</div>';
        var $group = $(groupHTML).appendTo('#qunit-fixture');
        var $btn = $('#btn1');
        assert.ok(!$btn.hasClass('active'), 'btn does not have active class');
        $group.CFW_Button();
        assert.ok($btn.hasClass('active'), 'btn has active class');
    });

    QUnit.test('should not set aria-pressed if btn child is checked checkbox', function(assert) {
        assert.expect(1);
        var groupHTML = '<div class="btn-group" data-cfw="buttons">'
            + '<label id="btn1" class="btn btn-primary">'
            + '<input type="checkbox" id="checkbox1" autocomplete="off" checked>Checkbox'
            + '</label>'
            + '</div>';
        var $group = $(groupHTML).appendTo('#qunit-fixture');
        $group.CFW_Button();
        assert.ok($('#btn1').is(':not([aria-pressed])'));
    });

    QUnit.test('should not set aria-pressed if btn child is unchecked checkbox', function(assert) {
        assert.expect(1);
        var groupHTML = '<div class="btn-group" data-cfw="buttons">'
            + '<label id="btn1" class="btn btn-primary active">'
            + '<input type="checkbox" id="checkbox1" autocomplete="off">Checkbox'
            + '</label>'
            + '</div>';
        var $group = $(groupHTML).appendTo('#qunit-fixture');
        $group.CFW_Button();
        assert.ok($('#btn1').is(':not([aria-pressed])'));
    });

    QUnit.test('should remove active if btn child is unchecked checkbox', function(assert) {
        assert.expect(2);
        var groupHTML = '<div class="btn-group" data-cfw="buttons">'
            + '<label id="btn1" class="btn btn-primary active">'
            + '<input type="checkbox" id="checkbox1" autocomplete="off">Checkbox'
            + '</label>'
            + '</div>';
        var $group = $(groupHTML).appendTo('#qunit-fixture');
        var $btn = $('#btn1');
        assert.ok($btn.hasClass('active'), 'btn has active class');
        $group.CFW_Button();
        assert.ok(!$btn.hasClass('active'), 'btn does not have active class');
    });

    QUnit.test('should set aria-pressed=true if active btn in container', function(assert) {
        assert.expect(1);
        var groupHTML = '<div class="btn-group" data-cfw="buttons">'
            + '<button type="button" id="btn1" class="btn active">Button</button>'
            + '</div>';
        var $group = $(groupHTML).appendTo('#qunit-fixture');
        $group.CFW_Button();
        assert.strictEqual($('#btn1').attr('aria-pressed'), 'true');
    });

    QUnit.test('should set aria-pressed=false inactive btn in container', function(assert) {
        assert.expect(1);
        var groupHTML = '<div class="btn-group" data-cfw="buttons">'
            + '<button type="button" id="btn1" class="btn">Button</button>'
            + '</div>';
        var $group = $(groupHTML).appendTo('#qunit-fixture');
        $group.CFW_Button();
        assert.strictEqual($('#btn1').attr('aria-pressed'), 'false');
    });

    QUnit.test('should toggle active', function(assert) {
        assert.expect(2);
        var $btn = $('<button class="btn" data-cfw="button">test</button>');
        assert.ok(!$btn.hasClass('active'), 'btn does not have active class');
        $btn.CFW_Button('toggle');
        assert.ok($btn.hasClass('active'), 'btn has class active');
    });

    QUnit.test('should toggle aria-pressed on buttons in container', function(assert) {
        assert.expect(1);
        var groupHTML = '<div class="btn-group" data-cfw="buttons">' +
            '<button id="btn1" class="btn" type="button">One</button>' +
            '<button id="btn2" class="btn" type="button">Two</button>' +
            '</div>';
        $('#qunit-fixture').append(groupHTML);
        $('#btn1').CFW_Button('toggle');
        assert.strictEqual($('#btn1').attr('aria-pressed'), 'true');
    });

    QUnit.test('should toggle active when btn children are clicked', function(assert) {
        assert.expect(2);
        var $btn = $('<button class="btn" data-cfw="button">test</button>');
        var $inner = $('<i/>');
        $btn.append($inner)
            .appendTo('#qunit-fixture')
            .CFW_Button();
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
            .appendTo('#qunit-fixture')
            .CFW_Button();
        assert.strictEqual($btn.attr('aria-pressed'), 'false', 'btn aria-pressed state is false');
        $inner.trigger('click');
        assert.strictEqual($btn.attr('aria-pressed'), 'true', 'btn aria-pressed state is true');
    });

    QUnit.test('should trigger input change event when toggled button has input field', function(assert) {
        assert.expect(1);
        var done = assert.async();

        var groupHTML = '<div class="btn-group" data-cfw="buttons">'
            + '<label class="btn btn-primary">'
            + '<input type="radio" id="radio" autocomplete="off">Radio'
            + '</label>'
            + '</div>';
        var $group = $(groupHTML).appendTo('#qunit-fixture');
        $group.CFW_Button();

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
        $group.CFW_Button();

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

    QUnit.test('should not toggle active on `.disabled` button', function(assert) {
        assert.expect(2);
        var $btn = $('<button class="btn disabled" data-cfw="button">test</button>');
        assert.ok(!$btn.hasClass('active'), 'btn does not have active class');
        $btn.CFW_Button('toggle');
        assert.ok(!$btn.hasClass('active'), 'btn still does not have class active');
    });

    QUnit.test('should not toggle active on `:disabled` button', function(assert) {
        assert.expect(2);
        var $btn = $('<button class="btn" data-cfw="button" disabled>test</button>');
        assert.ok(!$btn.hasClass('active'), 'btn does not have active class');
        $btn.CFW_Button('toggle');
        assert.ok(!$btn.hasClass('active'), 'btn still does not have class active');
    });

    QUnit.test('should not toggle active state for `.disabled` radio/checkbox', function(assert) {
        assert.expect(2);
        var groupHTML = '<div class="btn-group" data-cfw="buttons">'
            + '<label id="btn1" class="btn btn-primary disabled"><input type="checkbox" autocomplete="off"> Checkbox</label>'
            + '<label id="btn2" class="btn btn-primary disabled"><input type="radio" name="options" autocomplete="off"> Radio</label>'
            + '</div>';
        var $group = $(groupHTML).appendTo('#qunit-fixture');
        var $btn1 = $('#btn1');
        var $btn2 = $('#btn2');
        $group.CFW_Button();
        $btn1.find('input').trigger('click');
        assert.ok(!$btn1.hasClass('active'), '`.disabled` checkbox does not have active class');
        $btn2.find('input').trigger('click');
        assert.ok(!$btn2.hasClass('active'), '`.disabled` radio does not have active class');
    });

    QUnit.test('should not toggle active state for `:disabled` radio/checkbox', function(assert) {
        assert.expect(2);
        var groupHTML = '<div class="btn-group" data-cfw="buttons">'
            + '<label id="btn1" class="btn btn-primary"><input type="checkbox" autocomplete="off" disabled> Checkbox</label>'
            + '<label id="btn2" class="btn btn-primary"><input type="radio" name="options" autocomplete="off" disabled> Radio</label>'
            + '</div>';
        var $group = $(groupHTML).appendTo('#qunit-fixture');
        var $btn1 = $('#btn1');
        var $btn2 = $('#btn2');
        $group.CFW_Button();
        $btn1.find('input').trigger('click');
        assert.ok(!$btn1.hasClass('active'), '`.disabled` checkbox does not have active class');
        $btn2.find('input').trigger('click');
        assert.ok(!$btn2.hasClass('active'), '`.disabled` radio does not have active class');
    });
});
