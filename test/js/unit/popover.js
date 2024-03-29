$(function() {
    'use strict';

    QUnit.module('CFW_Popover', {
        beforeEach: function() {
            $(window).scrollTop(0);
        },
        afterEach: function() {
            $('.popover').remove();
            $('#qunit-fixture').empty();
        }
    });

    QUnit.test('should be defined on jquery object', function(assert) {
        assert.expect(1);
        assert.ok($(document.body).CFW_Popover, 'CFW_Popover method is defined');
    });

    QUnit.test('should return jquery collection containing the element', function(assert) {
        assert.expect(2);
        var $el = $('<div></div>');
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

    QUnit.test('should create popover with no header if title option not defined', function(assert) {
        assert.expect(3);
        var $popover = $('<a href="#" data-cfw-popover-content="popover content">Popover</a>')
            .appendTo('#qunit-fixture')
            .CFW_Popover();

        $popover.CFW_Popover('show');

        assert.notEqual($('.popover').length, 0, 'popover was inserted');
        assert.strictEqual($('.popover-header:empty').length, 1, 'header is empty');
        assert.strictEqual($('.popover-body').text(), 'popover content', 'content correctly inserted');
    });

    QUnit.test('should create popover with empty body if content option not defined', function(assert) {
        assert.expect(3);
        var $popover = $('<a href="#" title="popover title">Popover</a>')
            .appendTo('#qunit-fixture')
            .CFW_Popover();

        $popover.CFW_Popover('show');

        assert.notEqual($('.popover').length, 0, 'popover was inserted');
        assert.strictEqual($('.popover-header').text(), 'popover title', 'title correctly inserted');
        assert.strictEqual($('.popover-body:empty').length, 1, 'body is empty');
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
        assert.strictEqual($('.popover-header').text(), 'popover title', 'title correctly inserted');
        assert.strictEqual($('.popover-body').text(), 'popover content', 'content correctly inserted');

        $popover.CFW_Popover('hide');
        assert.strictEqual($('.popover').length, 0, 'popover was removed');
    });

    QUnit.test('should not duplicate HTML object', function(assert) {
        assert.expect(6);
        var $div = $('<div></div>').html('i has content');

        var $popover = $('<a href="#">popover</a>')
            .appendTo('#qunit-fixture')
            .CFW_Popover({
                content: function() {
                    return $div;
                }
            });

        $popover.CFW_Popover('show');
        assert.notEqual($('.popover').length, 0, 'popover was inserted');
        assert.equal($('.popover-body').html(), $div, 'content correctly inserted');

        $popover.CFW_Popover('hide');
        assert.strictEqual($('.popover').length, 0, 'popover was removed');

        $popover.CFW_Popover('show');
        assert.notEqual($('.popover').length, 0, 'popover was inserted');
        assert.equal($('.popover-body').html(), $div, 'content correctly inserted');

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
        assert.strictEqual($('.popover-header').text(), 'popover title', 'title correctly inserted');
        assert.strictEqual($('.popover-body').text(), 'popover content', 'content correctly inserted');

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
        assert.strictEqual($('.popover-header').text(), 'popover title', 'title correctly inserted');
        assert.strictEqual($('.popover-body').text(), 'popover content', 'content correctly inserted');

        $popover.CFW_Popover('hide');
        assert.strictEqual($('.popover').length, 0, 'popover was removed');
    });

    QUnit.test('should not show dynamic popover without title or content provided', function(assert) {
        assert.expect(1);
        var done = assert.async();
        var $popover = $('<a href="#" title="" data-cfw-popover-content="">Popover</a>')
            .appendTo('#qunit-fixture');
        $popover.CFW_Popover('show');

        setTimeout(function() {
            assert.strictEqual($('.popover').length, 0, 'popover not created');
            done();
        });
    });

    QUnit.test('should respect custom template', function(assert) {
        assert.expect(3);
        var $popover = $('<a href="#">popover</a>')
            .appendTo('#qunit-fixture')
            .CFW_Popover({
                title: 'Test',
                content: 'Test',
                template: '<div class="popover foobar"></div>'
            })
            .CFW_Popover('show');

        assert.notEqual($('.popover').length, 0, 'popover was inserted');
        assert.ok($('.popover').hasClass('foobar'), 'custom class is present');

        $popover.CFW_Popover('hide');
        assert.strictEqual($('.popover').length, 0, 'popover was removed');
    });

    QUnit.test('unlink method should detach events and data', function(assert) {
        assert.expect(7);
        var done = assert.async();
        var $popover = $('<a href="#" data-cfw=popover" title="popover title" data-cfw-popover-content="popover content">Popover</a>')
            .appendTo('#qunit-fixture')
            .CFW_Popover({
                trigger: 'hover'
            })
            .on('click.foo', $.noop);

        assert.ok($popover.data('cfw.popover'), 'popover has data');
        assert.ok($._data($popover[0], 'events').mouseover && $._data($popover[0], 'events').mouseout, 'popover has hover event');
        assert.strictEqual($._data($popover[0], 'events').click[0].namespace, 'foo', 'popover has extra click.foo event');

        $popover.one('afterShow.cfw.popover', function() {
            $(document).one('afterUnlink.cfw.popover', $popover, function() {
                assert.ok(!$popover.hasClass('in'), 'popover is hidden');
                assert.ok(!$popover.data('cfw.popover'), 'popover does not have data');
                assert.strictEqual($._data($popover[0], 'events').click[0].namespace, 'foo', 'popover still has click.foo');
                assert.ok(!$._data($popover[0], 'events').mouseover && !$._data($popover[0], 'events').mouseout, 'popover does not have any events');
                done();
            });
            $popover.CFW_Popover('unlink');
        });
        $popover.CFW_Popover('show');
    });

    QUnit.test('unlink option should detach events and data after hide', function(assert) {
        assert.expect(7);
        var done = assert.async();
        var $popover = $('<a href="#" data-cfw=popover" title="popover title" data-cfw-popover-content="popover content">Popover</a>')
            .appendTo('#qunit-fixture')
            .CFW_Popover({
                trigger: 'hover',
                unlink: true
            })
            .on('click.foo', $.noop);

        assert.ok($popover.data('cfw.popover'), 'popover has data');
        assert.ok($._data($popover[0], 'events').mouseover && $._data($popover[0], 'events').mouseout, 'popover has hover event');
        assert.strictEqual($._data($popover[0], 'events').click[0].namespace, 'foo', 'popover has extra click.foo event');

        $popover.one('afterShow.cfw.popover', function() {
            $(document).one('afterUnlink.cfw.popover', $popover, function() {
                assert.ok(!$popover.hasClass('in'), 'popover is hidden');
                assert.ok(!$popover.data('cfw.popover'), 'popover does not have data');
                assert.strictEqual($._data($popover[0], 'events').click[0].namespace, 'foo', 'popover still has click.foo');
                assert.ok(!$._data($popover[0], 'events').mouseover && !$._data($popover[0], 'events').mouseout, 'popover does not have any events');
                done();
            });
            $popover.CFW_Popover('hide');
        });
        $popover.CFW_Popover('show');
    });

    QUnit.test('dispose method should unlink and remove dynamic popover', function(assert) {
        assert.expect(8);
        var done = assert.async();
        var $popover = $('<a href="#" data-cfw=popover" title="popover title" data-cfw-popover-content="popover content">Popover</a>')
            .appendTo('#qunit-fixture')
            .CFW_Popover({
                trigger: 'hover'
            })
            .on('click.foo', $.noop);

        assert.ok($popover.data('cfw.popover'), 'popover has data');
        assert.ok($._data($popover[0], 'events').mouseover && $._data($popover[0], 'events').mouseout, 'popover has hover event');
        assert.strictEqual($._data($popover[0], 'events').click[0].namespace, 'foo', 'popover has extra click.foo event');

        $popover.one('afterShow.cfw.popover', function() {
            $(document).one('afterUnlink.cfw.popover', $popover, function() {
                assert.ok(!$popover.hasClass('in'), 'popover is hidden');
                assert.ok(!$popover.data('cfw.popover'), 'popover does not have data');
                assert.strictEqual($._data($popover[0], 'events').click[0].namespace, 'foo', 'popover still has click.foo');
                assert.ok(!$._data($popover[0], 'events').mouseover && !$._data($popover[0], 'events').mouseout, 'popover does not have any events');
                assert.strictEqual($('#qunit-fixture .popover').length, 0);
                done();
            });
            $popover.CFW_Popover('unlink');
        });
        $popover.CFW_Popover('show');
    });

    QUnit.test('dispose method should unlink and remove static popover', function(assert) {
        assert.expect(8);
        var done = assert.async();
        /* var $tip = */ $('<div class="popover" id="tip"></div>')
            .appendTo('#qunit-fixture');
        var $popover = $('<a href="#" data-cfw=popover" data-cfw-popover-target="#tip">Popover</a>')
            .appendTo('#qunit-fixture')
            .CFW_Popover({
                trigger: 'hover'
            })
            .on('click.foo', $.noop);

        assert.ok($popover.data('cfw.popover'), 'popover has data');
        assert.ok($._data($popover[0], 'events').mouseover && $._data($popover[0], 'events').mouseout, 'popover has hover event');
        assert.strictEqual($._data($popover[0], 'events').click[0].namespace, 'foo', 'popover has extra click.foo event');

        $popover.one('afterShow.cfw.popover', function() {
            $(document).one('dispose.cfw.popover', $popover, function() {
                assert.ok(!$popover.hasClass('in'), 'popover is hidden');
                assert.ok(!$popover.data('cfw.popover'), 'popover does not have data');
                assert.strictEqual($._data($popover[0], 'events').click[0].namespace, 'foo', 'popover still has click.foo');
                assert.ok(!$._data($popover[0], 'events').mouseover && !$._data($popover[0], 'events').mouseout, 'popover does not have any events');
                assert.strictEqual($('#qunit-fixture .popover').length, 0);
                done();
            });
            $popover.CFW_Popover('dispose');
        });
        $popover.CFW_Popover('show');
    });

    QUnit.test('dispose option should unlink and remove static popover after hide', function(assert) {
        assert.expect(8);
        var done = assert.async();
        /* var $tip = */ $('<div class="popover" id="tip"></div>')
            .appendTo('#qunit-fixture');
        var $popover = $('<a href="#" data-cfw=popover" data-cfw-popover-target="#tip">Popover</a>')
            .appendTo('#qunit-fixture')
            .CFW_Popover({
                trigger: 'hover',
                dispose: true
            })
            .on('click.foo', $.noop);

        assert.ok($popover.data('cfw.popover'), 'popover has data');
        assert.ok($._data($popover[0], 'events').mouseover && $._data($popover[0], 'events').mouseout, 'popover has hover event');
        assert.strictEqual($._data($popover[0], 'events').click[0].namespace, 'foo', 'popover has extra click.foo event');

        $popover.one('afterShow.cfw.popover', function() {
            $(document).one('dispose.cfw.popover', $popover, function() {
                assert.ok(!$popover.hasClass('in'), 'popover is hidden');
                assert.ok(!$popover.data('cfw.popover'), 'popover does not have data');
                assert.strictEqual($._data($popover[0], 'events').click[0].namespace, 'foo', 'popover still has click.foo');
                assert.ok(!$._data($popover[0], 'events').mouseover && !$._data($popover[0], 'events').mouseout, 'popover does not have any events');
                assert.strictEqual($('#qunit-fixture .popover').length, 0);
                done();
            });
            $popover.CFW_Popover('hide');
        });
        $popover.CFW_Popover('show');
    });

    QUnit.test('should do nothing when an attempt is made to hide an uninitialized popover', function(assert) {
        assert.expect(1);

        var $popover = $('<a href="#" data-cfw=popover" title="popover title" data-cfw-popover-content="popover content">Popover</a>')
            .appendTo('#qunit-fixture')
            .on('afterHide.cfwafterShow.cfw.popover', function() {
                assert.ok(false, 'should not fire any popover events');
            })
            .CFW_Popover('hide');

        assert.strictEqual(typeof $popover.data('cfw.popover'), 'undefined', 'should not initialize the popover');
    });

    QUnit.test('should throw an error when template contains multiple top-level elements', function(assert) {
        assert.expect(1);
        assert.throws(function() {
            $('<a href="#" data-cfw=popover" title="popover title" data-cfw-popover-content="popover content">Popover</a>')
                .appendTo('#qunit-fixture')
                .CFW_Popover({
                    template: '<div>Foo</div><div>Bar</div>'
                })
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

    QUnit.test('should hide popover when their ancestor modal is closed', function(assert) {
        assert.expect(1);
        var done = assert.async();

        var $trigger = $('<button type="button" class="btn" data-cfw="modal" data-cfw-modal-target="#modal">Modal</button>').appendTo('#qunit-fixture');
        var template = '<div id="modal" class="modal">' +
            '<div class="modal-dialog">' +
            '<div class="modal-content">' +
            '<div class="modal-body">' +
            '<a href="#" id="popover" title="Some popover text!">Popover</a>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>';

        var $target = $(template).appendTo('#qunit-fixture');
        $('#popover')
            .CFW_Popover({
                trigger: 'manual'
            })
            .on('afterShow.cfw.popover', function() {
                $trigger.CFW_Modal('hide');
            })
            .on('afterHide.cfw.popover', function() {
                assert.ok(true, 'popover hidden');
                done();
            });

        $target
            .on('afterShow.cfw.modal', function() {
                $('#popover').CFW_Popover('show');
            });

        $trigger
            .CFW_Modal()
            .CFW_Modal('show');
    });

    QUnit.test('should allow number in title and content', function(assert) {
        assert.expect(2);
        var done = assert.async();

        $('<a href="#"></a>')
            .appendTo('#qunit-fixture')
            .on('afterShow.cfw.popover', function() {
                assert.strictEqual($('.popover-header').text(), '4', 'title number has been converted to string');
                assert.strictEqual($('.popover-body').text(), '6', 'content number has been converted to string');
                done();
            })
            .CFW_Popover({
                title: 4,
                content: 6
            })
            .CFW_Popover('show');
    });

    QUnit.test('popover should call content function only once', function(assert) {
        assert.expect(1);
        var done = assert.async();
        var count = 0;

        $('<div id="popover" style="display:none">content</div>')
            .appendTo('#qunit-fixture');

        var $popover = $('<a href="#" title="popover title">Popover</a>')
            .appendTo('#qunit-fixture')
            .CFW_Popover({
                content: function() {
                    count++;
                    return $('#popover').text();
                }
            })
            .on('afterShow.cfw.popover', function() {
                assert.strictEqual(count, 1);
                done();
            });

        $popover.trigger($.Event('click'));
    });

    QUnit.test('should not force "trigger=\'clicked\'" when drag enabled and "trigger=\'manual\'"', function(assert) {
        assert.expect(1);
        var $popover = $('<a href="#" title="popover title" data-cfw-popover-content="popover content">Popover</a>')
            .appendTo('#qunit-fixture')
            .CFW_Popover({
                drag: true,
                trigger: 'manual'
            });

        assert.strictEqual($popover.data('cfw.popover').settings.trigger, 'manual', 'trigger is manual');
    });

    QUnit.test('should add provided custom class on show of dynamic popover', function(assert) {
        assert.expect(1);
        var done = assert.async();
        var $popover = $('<a href="#" title="popover title" data-cfw-popover-content="popover content" data-cfw-popover-custom-class="custom-class">Popover</a>')
            .appendTo('#qunit-fixture')
            .CFW_Popover()
            .on('afterShow.cfw.popover', function() {
                assert.ok($popover.data('cfw.popover').$target.hasClass('custom-class'));
                done();
            });

        $popover.CFW_Popover('show');
    });

    QUnit.test('should add provided custom class on show of static popover', function(assert) {
        assert.expect(1);
        var done = assert.async();
        var $tip = $('<div class="popover" id="tip"></div>')
            .appendTo('#qunit-fixture');
        var $popover = $('<a href="#tip" title="popover title" data-cfw-popover-content="popover content" data-cfw-popover-custom-class="custom-class">Popover</a>')
            .appendTo('#qunit-fixture')
            .CFW_Popover()
            .on('afterShow.cfw.popover', function() {
                assert.ok($tip.hasClass('custom-class'));
                done();
            });

        $popover.CFW_Popover('show');
    });

    QUnit.test('should set and reset z-index when drag item is changed', function(assert) {
        assert.expect(8);
        var done = assert.async();
        var $trigger0 = $('<button class="btn" title="popover title" data-cfw-popover-drag="true" data-cfw-popover-container="body">Popover</button>')
            .appendTo('#qunit-fixture')
            .CFW_Popover();
        var $trigger1 = $('<button class="btn" title="popover title" data-cfw-popover-drag="true" data-cfw-popover-container="body">Popover</button>')
            .appendTo('#qunit-fixture')
            .CFW_Popover();
        var $popover0 = null;
        var $popover1 = null;

        var getPopovers = function() {
            $popover0 = $trigger0.data('cfw.popover').$target;
            $popover1 = $trigger1.data('cfw.popover').$target;
        };
        var hasZ = function($node) {
            var savedVal = $node.attr('data-cfw-zindex');
            if (typeof savedVal !== 'undefined') {
                return true;
            }
            return false;
        };

        $trigger1
            .on('afterShow.cfw.popover', function() {
                getPopovers();
                assert.notOk(hasZ($popover0));
                assert.notOk(hasZ($popover1));

                $popover0.find('[data-cfw-drag="popover"]').trigger('mousedown');
                assert.ok(hasZ($popover0));
                assert.notOk(hasZ($popover1));
                $popover0.find('[data-cfw-drag="popover"]').trigger('mouseup');

                $popover1.find('[data-cfw-drag="popover"]').trigger('mousedown');
                assert.notOk(hasZ($popover0));
                assert.notOk(hasZ($popover1));
                $popover0.find('[data-cfw-drag="popover"]').trigger('mouseup');

                $popover0.find('[data-cfw-drag="popover"]').trigger('mousedown');
                assert.ok(hasZ($popover0));
                assert.notOk(hasZ($popover1));
                $popover0.find('[data-cfw-drag="popover"]').trigger('mouseup');
                done();
            });

        $trigger0.CFW_Popover('show');
        $trigger1.CFW_Popover('show');
    });
});
