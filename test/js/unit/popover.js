$(function() {
    'use strict';

    QUnit.module('CFW_Popover');

    QUnit.test('should be defined on jquery object', function(assert) {
        assert.expect(1);
        assert.ok($(document.body).CFW_Popover, 'CFW_Popover method is defined');
    });

    QUnit.test('should return jquery collection containing the element', function(assert) {
        assert.expect(2);
        var $el = $('<div/>');
        var $col = $el.CFW_Popover();
        assert.ok($col instanceof $, 'returns jquery collection');
        assert.strictEqual($col[0], $el[0], 'collection contains element');
    });

    QUnit.test('should render popover element', function(assert) {
        assert.expect(2);
        var $popover = $('<a href="#" title="popover title" data-cfw-popover-content="popover content">Popover</a>')
            .appendTo('#qunit-fixture')
            .CFW_Popover('show');

        assert.notEqual($('.popover').length, 0, 'popover was inserted');
        $popover.CFW_Popover('hide');
        assert.strictEqual($('.popover').length, 0, 'popover removed');
    });

    QUnit.test('should store popover instance in popover data object', function(assert) {
        assert.expect(1);
        var $popover = $('<a href="#" title="popover title" data-cfw-popover-content="popover content">Popover</a>')
            .appendTo('#qunit-fixture')
            .CFW_Popover();

        assert.ok($popover.data('cfw.popover'), 'popover instance exists');
    });

    QUnit.test('should store popover trigger in popover instance data object', function(assert) {
        assert.expect(1);
        var $popover = $('<a href="#" title="popover title" data-cfw-popover-content="popover content">Popover</a>')
            .appendTo('#qunit-fixture')
            .CFW_Popover();

        $popover.CFW_Popover('show');

        assert.ok($('.popover').data('cfw.popover'), 'popover trigger stored in instance data');
    });

    QUnit.test('should get title and content from options', function(assert) {
        assert.expect(4);
        var $popover = $('<a href="#">Popover</a>')
            .appendTo('#qunit-fixture')
            .CFW_Popover({
                title: function() {
                    return 'popover title';
                },
                content: function() {
                    return 'popover content';
                }
            });

        $popover.CFW_Popover('show');

        assert.notEqual($('.popover').length, 0, 'popover was inserted');
        assert.strictEqual($('.popover .popover-title').text(), 'popover title', 'title correctly inserted');
        assert.strictEqual($('.popover .popover-content').text(), 'popover content', 'content correctly inserted');

        $popover.CFW_Popover('hide');
        assert.strictEqual($('.popover').length, 0, 'popover was removed');
    });

    QUnit.test('should not duplicate HTML object', function(assert) {
        assert.expect(6);
        var $div = $('<div/>').html('i has content');

        var $popover = $('<a href="#">popover</a>')
            .appendTo('#qunit-fixture')
            .CFW_Popover({
                content: function() {
                    return $div;
                }
            });

        $popover.CFW_Popover('show');
        assert.notEqual($('.popover').length, 0, 'popover was inserted');
        assert.equal($('.popover .popover-content').html(), $div, 'content correctly inserted');

        $popover.CFW_Popover('hide');
        assert.strictEqual($('.popover').length, 0, 'popover was removed');

        $popover.CFW_Popover('show');
        assert.notEqual($('.popover').length, 0, 'popover was inserted');
        assert.equal($('.popover .popover-content').html(), $div, 'content correctly inserted');

        $popover.CFW_Popover('hide');
        assert.strictEqual($('.popover').length, 0, 'popover was removed');
    });

    QUnit.test('should get title and content from attributes', function(assert) {
        assert.expect(4);
        var $popover = $('<a href="#" title="popover title" data-cfw-popover-content="popover content">popover</a>')
            .appendTo('#qunit-fixture')
            .CFW_Popover()
            .CFW_Popover('show');

        assert.notEqual($('.popover').length, 0, 'popover was inserted');
        assert.strictEqual($('.popover .popover-title').text(), 'popover title', 'title correctly inserted');
        assert.strictEqual($('.popover .popover-content').text(), 'popover content', 'content correctly inserted');

        $popover.CFW_Popover('hide');
        assert.strictEqual($('.popover').length, 0, 'popover was removed');
    });

    QUnit.test('should get title and content from js options, overriding attributes', function(assert) {
        assert.expect(4);
        var $popover = $('<a href="#" title="ignored title option" data-cfw-popover-content="ignored content option">popover</a>')
            .appendTo('#qunit-fixture')
            .CFW_Popover({
                title: 'popover title',
                content: 'popover content'
            })
            .CFW_Popover('show');

        assert.notEqual($('.popover').length, 0, 'popover was inserted');
        assert.strictEqual($('.popover .popover-title').text(), 'popover title', 'title correctly inserted');
        assert.strictEqual($('.popover .popover-content').text(), 'popover content', 'content correctly inserted');

        $popover.CFW_Popover('hide');
        assert.strictEqual($('.popover').length, 0, 'popover was removed');
    });

    QUnit.test('should respect custom template', function(assert) {
        assert.expect(3);
        var $popover = $('<a href="#">popover</a>')
            .appendTo('#qunit-fixture')
            .CFW_Popover({
                title: 'Test',
                content: 'Test',
                template: '<div class="popover foobar"><div class="arrow"></div><div class="inner"><h3 class="title"/><div class="content"><p/></div></div></div>'
            })
            .CFW_Popover('show');

        assert.notEqual($('.popover').length, 0, 'popover was inserted');
        assert.ok($('.popover').hasClass('foobar'), 'custom class is present');

        $popover.CFW_Popover('hide');
        assert.strictEqual($('.popover').length, 0, 'popover was removed');
    });

    QUnit.test('should destroy popover', function(assert) {
        assert.expect(7);
        var $popover = $('<div />')
            .appendTo('#qunit-fixture')
            .CFW_Popover({
                trigger: 'hover'
            })
            .on('click.foo', $.noop);

        assert.ok($popover.data('cfw.popover'), 'popover has data');
        assert.ok($._data($popover[0], 'events').mouseover && $._data($popover[0], 'events').mouseout, 'popover has hover event');
        assert.strictEqual($._data($popover[0], 'events').click[0].namespace, 'foo', 'popover has extra click.foo event');

        $popover.CFW_Popover('show');
        $popover.CFW_Popover('destroy');

        assert.ok(!$popover.hasClass('in'), 'popover is hidden');
        assert.ok(!$popover.data('popover'), 'popover does not have data');
        assert.strictEqual($._data($popover[0], 'events').click[0].namespace, 'foo', 'popover still has click.foo');
        assert.ok(!$._data($popover[0], 'events').mouseover && !$._data($popover[0], 'events').mouseout, 'popover does not have any events');
    });

    QUnit.test('should detach popover content rather than removing it so that event handlers are left intact', function(assert) {
        assert.expect(1);
        var done = assert.async();
        var $content = $('<div class="content-with-handler"><a class="btn btn-warning">Button with event handler</a></div>').appendTo('#qunit-fixture');

        var handlerCalled = false;
        $('.content-with-handler .btn').on('click', function() {
            handlerCalled = true;
        });

        var $div = $('<div><a href="#">Show popover</a></div>')
            .appendTo('#qunit-fixture')
            .CFW_Popover({
                html: true,
                trigger: 'manual',
                container: 'body',
                content: function() {
                    return $content;
                }
            });

        $div
            .one('afterShow.cfw.popover', function() {
                $div
                    .one('afterHide.cfw.popover', function() {
                        $div
                            .one('afterShow.cfw.popover', function() {
                                $('.content-with-handler .btn').trigger('click');
                                $div.CFW_Popover('destroy');
                                assert.ok(handlerCalled, 'content\'s event handler still present');
                                done();
                            })
                            .CFW_Popover('show');
                    })
                    .CFW_Popover('hide');
            })
            .CFW_Popover('show');
    });

    QUnit.test('should do nothing when an attempt is made to hide an uninitialized popover', function(assert) {
        assert.expect(1);

        var $popover = $('<a href="#" data-cfw=popover" title="popover title" data-cfw-popover-content="popover content">Popover</a>')
            .appendTo('#qunit-fixture')
                .on('afterHide.cfw.popover afterShow.cfw.popover', function() {
                    assert.ok(false, 'should not fire any popover events');
                })
            .CFW_Popover('hide');

        assert.strictEqual($popover.data('cfw.popover'), undefined, 'should not initialize the popover');
    });

    QUnit.test('should throw an error when template contains multiple top-level elements', function(assert) {
        assert.expect(1);
        assert.throws(function() {
            $('<a href="#" data-cfw=popover" title="popover title" data-cfw-popover-content="popover content">Popover</a>')
                .appendTo('#qunit-fixture')
                .CFW_Popover({ template: '<div>Foo</div><div>Bar</div>' })
                .CFW_Popover('show');
        }, new Error('popover `template` option must consist of exactly 1 top-level element!'));
    });

    QUnit.test('should fire inserted event', function(assert) {
        assert.expect(2);
        var done = assert.async();

        $('<a href="#" data-cfw=popover" title="popover title" data-cfw-popover-content="popover content">Popover</a>')
            .appendTo('#qunit-fixture')
            .on('inserted.cfw.popover', function() {
                assert.notEqual($('.popover').length, 0, 'popover was inserted');
                assert.ok(true, 'inserted event fired');
                done();
            })
            .CFW_Popover()
            .CFW_Popover('show');
    });
});
