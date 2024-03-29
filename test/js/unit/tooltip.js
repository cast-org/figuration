$(function() {
    'use strict';

    QUnit.module('CFW_Tooltip', {
        beforeEach: function() {
            $(window).scrollTop(0);
        },
        afterEach: function() {
            $('.tooltip').remove();
            $('#qunit-fixture').empty();
        }
    });

    QUnit.test('should be defined on jquery object', function(assert) {
        assert.expect(1);
        assert.ok($(document.body).CFW_Tooltip, 'CFW_Tooltip method is defined');
    });

    QUnit.test('should return jquery collection containing the element', function(assert) {
        assert.expect(2);
        var $el = $('<div></div>');
        var $col = $el.CFW_Tooltip();
        assert.ok($col instanceof $, 'returns jquery collection');
        assert.strictEqual($col[0], $el[0], 'collection contains element');
    });

    QUnit.test('should remove title attribute if one exists', function(assert) {
        assert.expect(2);
        var done = assert.async();
        var $trigger = $('<a href="#" title="Another tooltip"></a>')
            .appendTo('#qunit-fixture')
            .CFW_Tooltip();

        $trigger
            .on('afterShow.cfw.tooltip', function() {
                assert.strictEqual($trigger[0].hasAttribute('title'), false, 'title attribute has been removed');
                $trigger.CFW_Tooltip('hide');
            })
            .on('afterHide.cfw.tooltip', function() {
                assert.strictEqual($('.tooltip').length, 0, 'tooltip removed from dom');
                done();
            })
            .CFW_Tooltip('show');
    });

    QUnit.test('should add data attribute for referencing original title', function(assert) {
        assert.expect(1);
        var $trigger = $('<a href="#" title="Another tooltip"></a>').CFW_Tooltip();
        assert.strictEqual($trigger.attr('data-cfw-tooltip-original-title'), 'Another tooltip', 'original title preserved in data attribute');
    });

    QUnit.test('should add aria-describedby to the trigger on show', function(assert) {
        assert.expect(3);
        var done = assert.async();

        var $trigger = $('<a href="#" title="Another tooltip"></a>')
            .appendTo('#qunit-fixture')
            .CFW_Tooltip({
                trigger: 'manual'
            });

        $trigger
            .on('afterShow.cfw.tooltip', function() {
                setTimeout(function() {
                    var id = $('.tooltip').attr('id');
                    assert.strictEqual($('#' + id).length, 1, 'has a unique id');
                    assert.ok($trigger[0].hasAttribute('aria-describedby'), 'trigger has aria-describedby');
                    assert.strictEqual($trigger.attr('aria-describedby'), $('.tooltip').attr('id'), 'tooltip id and aria-describedby on trigger match');
                    done();
                }, 30);
            })
            .CFW_Tooltip('show');
    });

    QUnit.test('should remove aria-describedby from trigger on hide', function(assert) {
        assert.expect(2);
        var done = assert.async();
        var $trigger = $('<a href="#" title="Another tooltip"></a>')
            .appendTo('#qunit-fixture')
            .CFW_Tooltip({
                trigger: 'manual'
            });

        $trigger
            .on('afterShow.cfw.tooltip', function() {
                setTimeout(function() {
                    assert.ok($trigger[0].hasAttribute('aria-describedby'), 'trigger has aria-describedby');
                    $trigger.CFW_Tooltip('hide');
                }, 30);
            })
            .on('afterHide.cfw.tooltip', function() {
                assert.ok(!$trigger[0].hasAttribute('aria-describedby'), 'trigger does not have aria-describedby');
                done();
            })
            .CFW_Tooltip('show');
    });

    QUnit.test('should close tooltip when escape key is pressed on tooltip via keydown', function(assert) {
        assert.expect(2);
        var done = assert.async();

        var $trigger = $('<a href="#" title="Another tooltip"></a>')
            .appendTo('#qunit-fixture')
            .CFW_Tooltip({
                trigger: 'manual'
            });

        $trigger
            .on('afterShow.cfw.tooltip', function() {
                var $target = $('.tooltip');

                assert.ok($target.is(':visible'), 'tooltip visible');
                $target.trigger($.Event('keydown', {
                    which: 27 // Esc
                }));

                setTimeout(function() {
                    assert.ok(!$target.is(':visible'), 'tooltip hidden');
                    done();
                }, 0);
            });
        $trigger.CFW_Tooltip('show');
    });

    QUnit.test('should not close tooltip when escape key is pressed on tooltip via keyup', function(assert) {
        assert.expect(2);
        var done = assert.async();

        var $trigger = $('<a href="#" title="Another tooltip"></a>')
            .appendTo('#qunit-fixture')
            .CFW_Tooltip({
                trigger: 'manual'
            });

        $trigger
            .on('afterShow.cfw.tooltip', function() {
                var $target = $('.tooltip');

                assert.ok($target.is(':visible'), 'tooltip visible');
                $target.trigger($.Event('keyup', {
                    which: 27 // Esc
                }));

                setTimeout(function() {
                    assert.ok($target.is(':visible'), 'tooltip still visible');
                    done();
                }, 0);
            });

        $trigger.CFW_Tooltip('show');
    });

    QUnit.test('should close tooltip when escape key is pressed on trigger via keydown', function(assert) {
        assert.expect(2);
        var done = assert.async();

        var $trigger = $('<a href="#" title="Another tooltip"></a>')
            .appendTo('#qunit-fixture')
            .CFW_Tooltip({
                trigger: 'manual'
            });

        $trigger
            .on('afterShow.cfw.tooltip', function() {
                var $target = $('.tooltip');

                assert.ok($target.is(':visible'), 'tooltip visible');
                $trigger.trigger($.Event('keydown', {
                    which: 27 // Esc
                }));

                setTimeout(function() {
                    assert.ok(!$target.is(':visible'), 'tooltip hidden');
                    done();
                }, 0);
            });
        $trigger.CFW_Tooltip('show');
    });

    QUnit.test('should not close tooltip when escape key is pressed on trigger via keyup', function(assert) {
        assert.expect(2);
        var done = assert.async();

        var $trigger = $('<a href="#" title="Another tooltip"></a>')
            .appendTo('#qunit-fixture')
            .CFW_Tooltip({
                trigger: 'manual'
            });

        $trigger
            .on('afterShow.cfw.tooltip', function() {
                var $target = $('.tooltip');

                assert.ok($target.is(':visible'), 'tooltip visible');
                $trigger.trigger($.Event('keyup', {
                    which: 27 // Esc
                }));

                setTimeout(function() {
                    assert.ok($target.is(':visible'), 'tooltip still visible');
                    done();
                }, 0);
            });
        $trigger.CFW_Tooltip('show');
    });

    QUnit.test('should restore focus to trigger element when tooltip is hidden by escape keydown', function(assert) {
        assert.expect(1);
        var done = assert.async();

        var $trigger = $('<a href="#" title="Another tooltip"></a>')
            .appendTo('#qunit-fixture')
            .CFW_Tooltip({
                trigger: 'manual'
            });

        $trigger
            .on('afterHide.cfw.tooltip', function() {
                setTimeout(function() {
                    assert.ok($(document.activeElement).is($trigger), 'trigger element is once again focused');
                    done();
                }, 0);
            })
            .on('afterShow.cfw.tooltip', function() {
                var $target = $('.tooltip');
                $target.trigger($.Event('keydown', {
                    which: 27 // Esc
                }));
            });
        $trigger.CFW_Tooltip('show');
    });

    QUnit.test('should assign a unique id tooltip element', function(assert) {
        assert.expect(2);
        $('<a href="#" title="Another tooltip"></a>')
            .appendTo('#qunit-fixture')
            .CFW_Tooltip('show');

        var id = $('.tooltip').attr('id');

        assert.strictEqual($('#' + id).length, 1, 'tooltip has unique id');
        assert.strictEqual(id.indexOf('cfw-tooltip'), 0, 'tooltip id has prefix');
    });

    QUnit.test('should place tooltips relative to placement option', function(assert) {
        assert.expect(2);
        var $tooltip = $('<a href="#" title="Another tooltip"></a>')
            .appendTo('#qunit-fixture')
            .CFW_Tooltip({
                placement: 'bottom'
            });

        $tooltip.CFW_Tooltip('show');
        assert.ok($('.tooltip').is('.fade.cfw-tooltip-bottom.in'), 'has correct classes applied');

        $tooltip.CFW_Tooltip('hide');
        assert.strictEqual($('.tooltip').length, 0, 'tooltip removed');
    });

    QUnit.test('should allow html entities', function(assert) {
        assert.expect(2);
        var $tooltip = $('<a href="#" title="&lt;b&gt;test&lt;/b&gt;"></a>')
            .appendTo('#qunit-fixture')
            .CFW_Tooltip({
                html: true
            });

        $tooltip.CFW_Tooltip('show');
        assert.notEqual($('.tooltip b').length, 0, 'b tag was inserted');

        $tooltip.CFW_Tooltip('hide');
        assert.strictEqual($('.tooltip').length, 0, 'tooltip removed');
    });

    QUnit.test('should respect custom classes', function(assert) {
        assert.expect(2);
        var $tooltip = $('<a href="#" title="Another tooltip"></a>')
            .appendTo('#qunit-fixture')
            .CFW_Tooltip({
                template: '<div class="tooltip some-class"></div>'
            });

        $tooltip.CFW_Tooltip('show');
        assert.ok($('.tooltip').hasClass('some-class'), 'custom class is present');

        $tooltip.CFW_Tooltip('hide');
        assert.strictEqual($('.tooltip').length, 0, 'tooltip removed');
    });

    QUnit.test('should fire beforeShow event', function(assert) {
        assert.expect(1);
        var done = assert.async();

        $('<div title="tooltip title"></div>')
            .on('beforeShow.cfw.tooltip', function() {
                assert.ok(true, 'beforeShow event fired');
                done();
            })
            .CFW_Tooltip('show');
    });

    QUnit.test('should fire inserted event', function(assert) {
        assert.expect(2);
        var done = assert.async();

        $('<div title="tooltip title"></div>')
            .appendTo('#qunit-fixture')
            .on('inserted.cfw.tooltip', function() {
                assert.notEqual($('.tooltip').length, 0, 'tooltip was inserted');
                assert.ok(true, 'inserted event fired');
                done();
            })
            .CFW_Tooltip('show');
    });

    QUnit.test('should fire afterShow event', function(assert) {
        assert.expect(1);
        var done = assert.async();

        $('<div title="tooltip title"></div>')
            .appendTo('#qunit-fixture')
            .on('afterShow.cfw.tooltip', function() {
                assert.ok(true, 'afterShow was called');
                done();
            })
            .CFW_Tooltip('show');
    });

    QUnit.test('should not fire afterShow event when beforeShow was prevented', function(assert) {
        assert.expect(1);
        var done = assert.async();

        $('<div title="tooltip title"></div>')
            .on('beforeShow.cfw.tooltip', function(e) {
                e.preventDefault();
                assert.ok(true, 'beforeShow event fired');
                done();
            })
            .on('afterShow.cfw.tooltip', function() {
                assert.ok(false, 'afterShow event fired');
            })
            .CFW_Tooltip('show');
    });

    QUnit.test('should fire beforeHide event', function(assert) {
        assert.expect(1);
        var done = assert.async();

        $('<div title="tooltip title"></div>')
            .appendTo('#qunit-fixture')
            .on('afterShow.cfw.tooltip', function() {
                $(this).CFW_Tooltip('hide');
            })
            .on('beforeHide.cfw.tooltip', function() {
                assert.ok(true, 'beforeHide event fired');
                done();
            })
            .CFW_Tooltip('show');
    });

    QUnit.test('should fire afterHide event', function(assert) {
        assert.expect(1);
        var done = assert.async();

        $('<div title="tooltip title"></div>')
            .appendTo('#qunit-fixture')
            .on('afterShow.cfw.tooltip', function() {
                $(this).CFW_Tooltip('hide');
            })
            .on('afterHide.cfw.tooltip', function() {
                assert.ok(true, 'afterHide event fired');
                done();
            })
            .CFW_Tooltip('show');
    });

    QUnit.test('should not fire afterHide event when beforeHide was prevented', function(assert) {
        assert.expect(1);
        var done = assert.async();

        $('<div title="tooltip title"></div>')
            .appendTo('#qunit-fixture')
            .on('afterShow.cfw.tooltip', function() {
                $(this).CFW_Tooltip('hide');
            })
            .on('beforeHide.cfw.tooltip', function(e) {
                e.preventDefault();
                assert.ok(true, 'beforeHide event fired');
                done();
            })
            .on('afterHide.cfw.tooltip', function() {
                assert.ok(false, 'afterHide event fired');
            })
            .CFW_Tooltip('show');
    });

    QUnit.test('unlink method should detach events and data', function(assert) {
        assert.expect(7);
        var done = assert.async();
        var $tooltip = $('<a href="#" data-cfw=tooltip" title="tooltip title" data-cfw-tooltip-content="tooltip content">Tooltip</a>')
            .appendTo('#qunit-fixture')
            .CFW_Tooltip({
                trigger: 'hover'
            })
            .on('click.foo', $.noop);

        assert.ok($tooltip.data('cfw.tooltip'), 'tooltip has data');
        assert.ok($._data($tooltip[0], 'events').mouseover && $._data($tooltip[0], 'events').mouseout, 'tooltip has hover event');
        assert.strictEqual($._data($tooltip[0], 'events').click[0].namespace, 'foo', 'tooltip has extra click.foo event');

        $tooltip.one('afterShow.cfw.tooltip', function() {
            $(document).one('afterUnlink.cfw.tooltip', $tooltip, function() {
                assert.ok(!$tooltip.hasClass('in'), 'tooltip is hidden');
                assert.ok(!$tooltip.data('cfw.tooltip'), 'tooltip does not have data');
                assert.strictEqual($._data($tooltip[0], 'events').click[0].namespace, 'foo', 'tooltip still has click.foo');
                assert.ok(!$._data($tooltip[0], 'events').mouseover && !$._data($tooltip[0], 'events').mouseout, 'tooltip does not have any events');
                done();
            });
            $tooltip.CFW_Tooltip('unlink');
        });
        $tooltip.CFW_Tooltip('show');
    });

    QUnit.test('unlink option should detach events and data after hide', function(assert) {
        assert.expect(7);
        var done = assert.async();
        var $tooltip = $('<a href="#" data-cfw=tooltip" title="tooltip title" data-cfw-tooltip-content="tooltip content">Tooltip</a>')
            .appendTo('#qunit-fixture')
            .CFW_Tooltip({
                trigger: 'hover',
                unlink: true
            })
            .on('click.foo', $.noop);

        assert.ok($tooltip.data('cfw.tooltip'), 'tooltip has data');
        assert.ok($._data($tooltip[0], 'events').mouseover && $._data($tooltip[0], 'events').mouseout, 'tooltip has hover event');
        assert.strictEqual($._data($tooltip[0], 'events').click[0].namespace, 'foo', 'tooltip has extra click.foo event');

        $tooltip.one('afterShow.cfw.tooltip', function() {
            $(document).one('afterUnlink.cfw.tooltip', $tooltip, function() {
                assert.ok(!$tooltip.hasClass('in'), 'tooltip is hidden');
                assert.ok(!$tooltip.data('cfw.tooltip'), 'tooltip does not have data');
                assert.strictEqual($._data($tooltip[0], 'events').click[0].namespace, 'foo', 'tooltip still has click.foo');
                assert.ok(!$._data($tooltip[0], 'events').mouseover && !$._data($tooltip[0], 'events').mouseout, 'tooltip does not have any events');
                done();
            });
            $tooltip.CFW_Tooltip('hide');
        });
        $tooltip.CFW_Tooltip('show');
    });

    QUnit.test('dispose method should unlink and remove dynamic tooltip', function(assert) {
        assert.expect(8);
        var done = assert.async();
        var $tooltip = $('<a href="#" data-cfw=tooltip" title="tooltip title" data-cfw-tooltip-content="tooltip content">Tooltip</a>')
            .appendTo('#qunit-fixture')
            .CFW_Tooltip({
                trigger: 'hover'
            })
            .on('click.foo', $.noop);

        assert.ok($tooltip.data('cfw.tooltip'), 'tooltip has data');
        assert.ok($._data($tooltip[0], 'events').mouseover && $._data($tooltip[0], 'events').mouseout, 'tooltip has hover event');
        assert.strictEqual($._data($tooltip[0], 'events').click[0].namespace, 'foo', 'tooltip has extra click.foo event');

        $tooltip.one('afterShow.cfw.tooltip', function() {
            $(document).one('afterUnlink.cfw.tooltip', $tooltip, function() {
                assert.ok(!$tooltip.hasClass('in'), 'tooltip is hidden');
                assert.ok(!$tooltip.data('cfw.tooltip'), 'tooltip does not have data');
                assert.strictEqual($._data($tooltip[0], 'events').click[0].namespace, 'foo', 'tooltip still has click.foo');
                assert.ok(!$._data($tooltip[0], 'events').mouseover && !$._data($tooltip[0], 'events').mouseout, 'tooltip does not have any events');
                assert.strictEqual($('#qunit-fixture .tooltip').length, 0);
                done();
            });
            $tooltip.CFW_Tooltip('unlink');
        });
        $tooltip.CFW_Tooltip('show');
    });

    QUnit.test('dispose method should unlink and remove static tooltip', function(assert) {
        assert.expect(8);
        var done = assert.async();
        /* var $tip = */ $('<div class="tooltip" id="tip"></div>')
            .appendTo('#qunit-fixture');
        var $tooltip = $('<a href="#" data-cfw=tooltip" data-cfw-tooltip-target="#tip">Tooltip</a>')
            .appendTo('#qunit-fixture')
            .CFW_Tooltip({
                trigger: 'hover'
            })
            .on('click.foo', $.noop);

        assert.ok($tooltip.data('cfw.tooltip'), 'tooltip has data');
        assert.ok($._data($tooltip[0], 'events').mouseover && $._data($tooltip[0], 'events').mouseout, 'tooltip has hover event');
        assert.strictEqual($._data($tooltip[0], 'events').click[0].namespace, 'foo', 'tooltip has extra click.foo event');

        $tooltip.one('afterShow.cfw.tooltip', function() {
            $(document).one('dispose.cfw.tooltip', $tooltip, function() {
                assert.ok(!$tooltip.hasClass('in'), 'tooltip is hidden');
                assert.ok(!$tooltip.data('cfw.tooltip'), 'tooltip does not have data');
                assert.strictEqual($._data($tooltip[0], 'events').click[0].namespace, 'foo', 'tooltip still has click.foo');
                assert.ok(!$._data($tooltip[0], 'events').mouseover && !$._data($tooltip[0], 'events').mouseout, 'tooltip does not have any events');
                assert.strictEqual($('#qunit-fixture .tooltip').length, 0);
                done();
            });
            $tooltip.CFW_Tooltip('dispose');
        });
        $tooltip.CFW_Tooltip('show');
    });

    QUnit.test('dispose option should unlink and remove static tooltip after hide', function(assert) {
        assert.expect(8);
        var done = assert.async();
        /* var $tip = */ $('<div class="tooltip" id="tip"></div>')
            .appendTo('#qunit-fixture');
        var $tooltip = $('<a href="#" data-cfw=tooltip" data-cfw-tooltip-target="#tip">Tooltip</a>')
            .appendTo('#qunit-fixture')
            .CFW_Tooltip({
                trigger: 'hover',
                dispose: true
            })
            .on('click.foo', $.noop);

        assert.ok($tooltip.data('cfw.tooltip'), 'tooltip has data');
        assert.ok($._data($tooltip[0], 'events').mouseover && $._data($tooltip[0], 'events').mouseout, 'tooltip has hover event');
        assert.strictEqual($._data($tooltip[0], 'events').click[0].namespace, 'foo', 'tooltip has extra click.foo event');

        $tooltip.one('afterShow.cfw.tooltip', function() {
            $(document).one('dispose.cfw.tooltip', $tooltip, function() {
                assert.ok(!$tooltip.hasClass('in'), 'tooltip is hidden');
                assert.ok(!$tooltip.data('cfw.tooltip'), 'tooltip does not have data');
                assert.strictEqual($._data($tooltip[0], 'events').click[0].namespace, 'foo', 'tooltip still has click.foo');
                assert.ok(!$._data($tooltip[0], 'events').mouseover && !$._data($tooltip[0], 'events').mouseout, 'tooltip does not have any events');
                assert.strictEqual($('#qunit-fixture .tooltip').length, 0);
                done();
            });
            $tooltip.CFW_Tooltip('hide');
        });
        $tooltip.CFW_Tooltip('show');
    });

    QUnit.test('dispose should reset the title attribute if it existed at init', function(assert) {
        assert.expect(4);
        var $triggerTitle = $('<a href="#" title="Title attribute"></a>').appendTo('#qunit-fixture');
        var $triggerNoTitle = $('<a href="#" data-cfw-tooltip-title="No title attribute"></a>').appendTo('#qunit-fixture');

        $triggerTitle.CFW_Tooltip();
        assert.strictEqual($triggerTitle[0].hasAttribute('title'), false, 'title attribute has been removed');
        $triggerTitle.CFW_Tooltip('dispose');
        assert.strictEqual($triggerTitle.attr('title'), 'Title attribute', 'title attribute has been restored');

        $triggerNoTitle.CFW_Tooltip();
        assert.strictEqual($triggerNoTitle[0].hasAttribute('title'), false, 'title attribute does not exist');
        $triggerNoTitle.CFW_Tooltip('dispose');
        assert.strictEqual($triggerNoTitle[0].hasAttribute('title'), false, 'title attribute was not created');
    });

    QUnit.test('dispose should remove data attribute for referencing original title', function(assert) {
        assert.expect(2);
        var $trigger = $('<a href="#" title="Another tooltip"></a>').CFW_Tooltip();
        assert.strictEqual($trigger.attr('data-cfw-tooltip-original-title'), 'Another tooltip', 'original title preserved in data attribute');
        $trigger.CFW_Tooltip('dispose');
        assert.strictEqual($trigger[0].hasAttribute('data-tooltip-original-title'), false, 'data-tooltip-original-title attribute has been removed');
    });

    QUnit.test('should show tooltip when toggle is called', function(assert) {
        assert.expect(1);
        $('<a href="#" title="tooltip on toggle"></a>')
            .appendTo('#qunit-fixture')
            .CFW_Tooltip({
                trigger: 'manual'
            })
            .CFW_Tooltip('toggle');

        assert.ok($('.tooltip').is('.fade.in'), 'tooltip is faded in');
    });

    QUnit.test('should hide previously shown tooltip when toggle is called on tooltip', function(assert) {
        assert.expect(1);
        $('<a href="#" title="tooltip on toggle"></a>')
            .appendTo('#qunit-fixture')
            .CFW_Tooltip({
                trigger: 'manual'
            })
            .CFW_Tooltip('show');

        $('.tooltip').CFW_Tooltip('toggle');
        assert.ok($('.tooltip').not('.fade.in'), 'tooltip was faded out');
    });

    QUnit.test('should place tooltips inside body when container is body', function(assert) {
        assert.expect(3);
        var $tooltip = $('<a href="#" title="Another tooltip"></a>')
            .appendTo('#qunit-fixture')
            .CFW_Tooltip({
                container: 'body'
            })
            .CFW_Tooltip('show');

        assert.notEqual($('body > .tooltip').length, 0, 'tooltip is direct descendant of body');
        assert.strictEqual($('#qunit-fixture > .tooltip').length, 0, 'tooltip is not in parent');

        $tooltip.CFW_Tooltip('hide');
        assert.strictEqual($('body > .tooltip').length, 0, 'tooltip was removed from dom');
    });

    QUnit.test('should use title attribute for tooltip text', function(assert) {
        assert.expect(2);
        var $tooltip = $('<a href="#" title="Simple tooltip"></a>')
            .appendTo('#qunit-fixture')
            .CFW_Tooltip();

        $tooltip.CFW_Tooltip('show');
        assert.strictEqual($('.tooltip').children('.tooltip-body').text(), 'Simple tooltip', 'title from title attribute is set');

        $tooltip.CFW_Tooltip('hide');
        assert.strictEqual($('.tooltip').length, 0, 'tooltip removed from dom');
    });

    QUnit.test('should use title option', function(assert) {
        assert.expect(2);
        var $tooltip = $('<a href="#"></a>')
            .appendTo('#qunit-fixture')
            .CFW_Tooltip({
                title: 'tooltip title'
            });

        $tooltip.CFW_Tooltip('show');
        assert.strictEqual($('.tooltip').children('.tooltip-body').text(), 'tooltip title', 'title from title option is set');

        $tooltip.CFW_Tooltip('hide');
        assert.strictEqual($('.tooltip').length, 0, 'tooltip removed from dom');
    });

    QUnit.test('should prefer title option over title attribute', function(assert) {
        assert.expect(2);
        var $tooltip = $('<a href="#" title="ignored title"></a>')
            .appendTo('#qunit-fixture')
            .CFW_Tooltip({
                title: 'tooltip title'
            });

        $tooltip.CFW_Tooltip('show');
        assert.strictEqual($('.tooltip').children('.tooltip-body').text(), 'tooltip title', 'title is set from title option while preferred over title attribute');

        $tooltip.CFW_Tooltip('hide');
        assert.strictEqual($('.tooltip').length, 0, 'tooltip removed from dom');
    });

    QUnit.test('should not show dynamic tooltip without title provided', function(assert) {
        assert.expect(1);
        var done = assert.async();
        var $tooltip = $('<a href="#" title="">Popover</a>')
            .appendTo('#qunit-fixture');
        $tooltip.CFW_Tooltip('show');

        setTimeout(function() {
            assert.strictEqual($('.tooltip').length, 0, 'tooltip not created');
            done();
        });
    });

    QUnit.test('should position tip on top if viewport has enough space and placement is "auto top"', function(assert) {
        assert.expect(2);
        var styles = '<style>' +
            'body { padding-top: 100px; }' +
            '#section { height: 300px; border: 1px solid red; padding-top: 50px }' +
            '.trigger { width: 150px; border: 1px solid blue; }' +
            '</style>';
        var $styles = $(styles).appendTo('head');

        var $container = $('<div id="section"></div>').appendTo('#qunit-fixture');
        var $target = $('<div class="trigger" title="tip"></div>')
            .appendTo($container)
            .CFW_Tooltip({
                placement: 'auto top',
                viewport: '#section'
            });

        $target.CFW_Tooltip('show');
        assert.ok($('.tooltip').is('.cfw-tooltip-top'), 'top positioned tooltip is dynamically positioned to top');

        $target.CFW_Tooltip('hide');
        assert.strictEqual($('.tooltip').length, 0, 'tooltip removed from dom');

        $styles.remove();
    });

    QUnit.test('should position tip on top if viewport has enough space and is not parent', function(assert) {
        assert.expect(2);
        var styles = '<style>' +
            '#section { height: 300px; border: 1px solid red; margin-top: 100px; }' +
            '.trigger { width: 150px; border: 1px solid blue; }' +
            '</style>';
        var $styles = $(styles).appendTo('head');

        var $container = $('<div id="section"></div>').appendTo('#qunit-fixture');
        var $target = $('<div class=""trigger" title="tip"></div>')
            .appendTo($container)
            .CFW_Tooltip({
                placement: 'auto top',
                viewport: '#qunit-fixture'
            });

        $target.CFW_Tooltip('show');
        assert.ok($('.tooltip').is('.cfw-tooltip-top'), 'top positioned tooltip is dynamically positioned to top');

        $target.CFW_Tooltip('hide');
        assert.strictEqual($('.tooltip').length, 0, 'tooltip removed from dom');

        $styles.remove();
    });

    QUnit.test('should not error when trying to show an auto-placed tooltip that has been removed from the dom', function(assert) {
        assert.expect(1);
        var passed = true;
        var $tooltip = $('<a href="#" title="Another tooltip"></a>')
            .appendTo('#qunit-fixture')
            .one('beforeShow.cfw.tooltip', function() {
                $(this).remove();
            })
            .CFW_Tooltip({
                placement: 'auto'
            });

        try {
            $tooltip.CFW_Tooltip('show');
        } catch (err) {
            passed = false;
            console.log(err);
        }

        assert.ok(passed, '.tooltip(\'show\') should not throw an error if element no longer is in dom');
    });

    QUnit.test('should show tooltip if leave event hasn\'t occurred before delay expires', function(assert) {
        assert.expect(2);
        var done = assert.async();

        var $tooltip = $('<a href="#" title="Another tooltip"></a>')
            .appendTo('#qunit-fixture')
            .CFW_Tooltip({
                delay: 150
            });

        setTimeout(function() {
            assert.ok(!$('.tooltip').is('.fade.in'), '100ms: tooltip is not faded in');
        }, 100);

        setTimeout(function() {
            assert.ok($('.tooltip').is('.fade.in'), '200ms: tooltip is faded in');
            done();
        }, 200);

        $tooltip.trigger('mouseenter');
    });

    QUnit.test('should not show tooltip if leave event occurs before delay expires', function(assert) {
        assert.expect(2);
        var done = assert.async();

        var $tooltip = $('<a href="#" title="Another tooltip"></a>')
            .appendTo('#qunit-fixture')
            .CFW_Tooltip({
                delay: 150
            });

        setTimeout(function() {
            assert.ok(!$('.tooltip').is('.fade.in'), '100ms: tooltip not faded in');
            $tooltip.trigger('mouseout');
        }, 100);

        setTimeout(function() {
            assert.ok(!$('.tooltip').is('.fade.in'), '200ms: tooltip not faded in');
            done();
        }, 200);

        $tooltip.trigger('mouseenter');
    });

    QUnit.test('should not hide tooltip if leave event occurs and enter event occurs within the hide delay', function(assert) {
        assert.expect(3);
        var done = assert.async();

        var $tooltip = $('<a href="#" title="Another tooltip"></a>')
            .appendTo('#qunit-fixture')
            .CFW_Tooltip({
                delay: {
                    show: 0,
                    hide: 150
                }
            });

        setTimeout(function() {
            assert.ok($('.tooltip').is('.fade.in'), '1ms: tooltip faded in');
            $tooltip.trigger('mouseout');

            setTimeout(function() {
                assert.ok($('.tooltip').is('.fade.in'), '100ms: tooltip still faded in');
                $tooltip.trigger('mouseenter');
            }, 100);

            setTimeout(function() {
                assert.ok($('.tooltip').is('.fade.in'), '200ms: tooltip still faded in');
                done();
            }, 200);
        }, 0);

        $tooltip.trigger('mouseenter');
    });

    QUnit.test('should not show tooltip if leave event occurs before delay expires', function(assert) {
        assert.expect(2);
        var done = assert.async();

        var $tooltip = $('<a href="#" title="Another tooltip"></a>')
            .appendTo('#qunit-fixture')
            .CFW_Tooltip({
                delay: 150
            });

        setTimeout(function() {
            assert.ok(!$('.tooltip').is('.fade.in'), '100ms: tooltip not faded in');
            $tooltip.trigger('mouseout');
        }, 100);

        setTimeout(function() {
            assert.ok(!$('.tooltip').is('.fade.in'), '200ms: tooltip not faded in');
            done();
        }, 200);

        $tooltip.trigger('mouseenter');
    });

    QUnit.test('should not show tooltip if leave event occurs before delay expires, even if hide delay is 0', function(assert) {
        assert.expect(2);
        var done = assert.async();

        var $tooltip = $('<a href="#" title="Another tooltip"></a>')
            .appendTo('#qunit-fixture')
            .CFW_Tooltip({
                delay: {
                    show: 150,
                    hide: 0
                }
            });

        setTimeout(function() {
            assert.ok(!$('.tooltip').is('.fade.in'), '100ms: tooltip not faded in');
            $tooltip.trigger('mouseout');
        }, 100);

        setTimeout(function() {
            assert.ok(!$('.tooltip').is('.fade.in'), '250ms: tooltip not faded in');
            done();
        }, 250);

        $tooltip.trigger('mouseenter');
    });

    QUnit.test('should wait 150ms before hiding the tooltip', function(assert) {
        assert.expect(3);
        var done = assert.async();

        var $tooltip = $('<a href="#" title="Another tooltip"></a>')
            .appendTo('#qunit-fixture')
            .CFW_Tooltip({
                delay: {
                    show: 0,
                    hide: 150
                }
            });

        setTimeout(function() {
            assert.ok($tooltip.data('cfw.tooltip').$target.is('.fade.in'), '1ms: tooltip faded in');

            $tooltip.trigger('mouseout');

            setTimeout(function() {
                assert.ok($tooltip.data('cfw.tooltip').$target.is('.fade.in'), '100ms: tooltip still faded in');
            }, 100);

            setTimeout(function() {
                assert.strictEqual($('.tooltip').length, 0, '150ms: tooltip removed from DOM');
                done();
            }, 150);
        }, 0);

        $tooltip.trigger('mouseenter');
    });

    QUnit.test('should correctly determine auto placement based on container rather than parent', function(assert) {
        if ($(window).width() < 350) {
            // Skip really narrow browsers since there is no good option in this case.
            // Tooltip will almost always be in the wrong place.
            assert.expect(0);
            return;
        }
        assert.expect(2);
        var done = assert.async();

        var styles = '<style>' +
            '.tooltip, .tooltip *, .tooltip *:before, .tooltip *:after { box-sizing: border-box; }' +
            '.tooltip { position: absolute; display: block; font-size: 12px; line-height: 1.4; }' +
            '.tooltip .tooltip-body { max-width: 200px; padding: 3px 8px; font-family: Helvetica; text-align: center; }' +
            '#trigger-parent {' +
            '  position: fixed;' +
            '  top: 100px;' +
            '  right: 17px;' +
            '}' +
            '</style>';
        var $styles = $(styles).appendTo('head');

        $('#qunit-fixture').append('<span id="trigger-parent"><a id="tt-trigger" title="If a_larger_text is written here, it won\'t fit using older broken version of BS">HOVER OVER ME</a></span>');
        var $trigger = $('#tt-trigger');

        $trigger
            .on('afterShow.cfw.tooltip', function() {
                var $tip = $('.tooltip-body');
                var tipXrightEdge = $tip.offset().left + $tip.width();
                var triggerXleftEdge = $trigger.offset().left;
                assert.ok(tipXrightEdge < triggerXleftEdge, 'tooltip with auto reverse placement, when near the right edge of the viewport, gets left placement');
                $trigger.CFW_Tooltip('hide');
            })
            .on('afterHide.cfw.tooltip', function() {
                $styles.remove();
                $(this).remove();
                assert.strictEqual($('.tooltip').length, 0, 'tooltip removed from dom');
                done();
            })
            .CFW_Tooltip({
                container: 'body',
                placement: 'auto reverse',
                trigger: 'manual'
            });

        $trigger.CFW_Tooltip('show');
    });

    QUnit.test('should not reload the tooltip on subsequent mouseenter events', function(assert) {
        assert.expect(1);
        var oldID;
        var newID;
        var $trigger = $('<a href="#" title="Another tooltip"></a>')
            .appendTo('#qunit-fixture');

        $trigger.CFW_Tooltip({
            animate: false,
            trigger: 'hover',
            delay: {
                show: 0,
                hide: 500
            }
        });

        $trigger.trigger('mouseenter');
        oldID = $('.tooltip').attr('id');

        $trigger.trigger('mouseenter');
        newID = $('.tooltip').attr('id');

        assert.strictEqual(oldID, newID);
    });

    QUnit.test('should not reload the tooltip if the mouse leaves and re-enters before hiding', function(assert) {
        assert.expect(4);
        var $trigger = $('<a href="#" title="Another tooltip"></a>')
            .appendTo('#qunit-fixture');

        $trigger.CFW_Tooltip({
            animate: false,
            trigger: 'hover',
            delay: {
                show: 0,
                hide: 500
            }
        });

        var obj = $trigger.data('cfw.tooltip');

        $trigger.trigger('mouseenter');

        var currID = $('.tooltip').attr('id');

        $trigger.trigger('mouseleave');
        assert.strictEqual(currID, $('.tooltip').attr('id'));

        assert.ok(obj.hoverState === 'out', 'the tooltip hoverState should be set to "out"');

        $trigger.trigger('mouseenter');
        assert.ok(obj.hoverState === 'in', 'the tooltip hoverState should be set to "in"');

        assert.strictEqual(currID, $('.tooltip').attr('id'));
    });

    QUnit.test('should do nothing when an attempt is made to hide an uninitialized tooltip', function(assert) {
        assert.expect(1);

        var $tooltip = $('<a href="#" title="Another tooltip"></a>')
            .appendTo('#qunit-fixture')
            .on('afterHide.cfw.tooltip afterShow.cfw.tooltip', function() {
                assert.ok(false, 'should not fire any tooltip events');
            })
            .CFW_Tooltip('hide');

        assert.strictEqual(typeof $tooltip.data('cfw.tooltip'), 'undefined', 'should not initialize the tooltip');
    });

    QUnit.test('should throw an error when template contains multiple top-level elements', function(assert) {
        assert.expect(1);
        assert.throws(function() {
            $('<a href="#" title="Another tooltip"></a>')
                .appendTo('#qunit-fixture')
                .CFW_Tooltip({
                    template: '<div>Foo</div><div>Bar</div>'
                })
                .CFW_Tooltip('show');
        }, new Error('tooltip `template` option must consist of exactly 1 top-level element!'));
    });

    QUnit.test('should hide tooltip when their ancestor modal is closed', function(assert) {
        assert.expect(1);
        var done = assert.async();

        var $trigger = $('<button type="button" class="btn" data-cfw="modal" data-cfw-modal-target="#modal">Modal</button>').appendTo('#qunit-fixture');
        var template = '<div id="modal" class="modal">' +
            '<div class="modal-dialog">' +
            '<div class="modal-content">' +
            '<div class="modal-body">' +
            '<a href="#" id="tooltip" title="Some tooltip text!">Tooltip</a>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>';

        var $target = $(template).appendTo('#qunit-fixture');
        $('#tooltip')
            .CFW_Tooltip({
                trigger: 'manual'
            })
            .on('afterShow.cfw.tooltip', function() {
                $trigger.CFW_Modal('hide');
            })
            .on('afterHide.cfw.tooltip', function() {
                assert.ok(true, 'tooltip hidden');
                done();
            });

        $target
            .on('afterShow.cfw.modal', function() {
                $('#tooltip').CFW_Tooltip('show');
            });

        $trigger
            .CFW_Modal()
            .CFW_Modal('show');
    });

    QUnit.test('should not remove tooltip if multiple triggers (hover focus) are set and one is still active', function(assert) {
        assert.expect(21);
        var $el = $('<button>Trigger</button>')
            .appendTo('#qunit-fixture')
            .CFW_Tooltip({
                trigger: 'hover focus',
                animate: false,
                delay: 0
            });

        function showingTooltip() {
            var tooltip = $el.data('cfw.tooltip');
            var $tooltip = tooltip.$target;
            var hasIn = $tooltip !== null ? $tooltip.hasClass('in') : false;
            return hasIn || tooltip.hoverState === 'in';
        }

        var tests = [
            ['mouseenter', 'mouseleave'],
            ['focusin', 'focusout'],
            ['mouseenter', 'focusin', 'focusout', 'mouseleave'],
            ['mouseenter', 'focusin', 'mouseleave', 'focusout'],
            ['focusin', 'mouseenter', 'mouseleave', 'focusout'],
            ['focusin', 'mouseenter', 'focusout', 'mouseleave']
        ];

        assert.ok(!showingTooltip());

        $.each(tests, function(idx, triggers) {
            for (var i = 0, len = triggers.length; i < len; i++) {
                $el.trigger(triggers[i]);
                assert.equal(i < (len - 1), showingTooltip());
            }
        });
    });

    QUnit.test('should show on first trigger after hide', function(assert) {
        assert.expect(3);
        var $el = $('<a href="#" rel="tooltip" title="Test tooltip"></a>')
            .appendTo('#qunit-fixture')
            .CFW_Tooltip({
                trigger: 'click hover focus',
                animate: false
            });

        function showingTooltip() {
            var tooltip = $el.data('cfw.tooltip');
            var $tooltip = tooltip.$target;
            var hasIn = $tooltip !== null ? $tooltip.hasClass('in') : false;
            return hasIn || tooltip.hoverState === 'in';
        }

        $el.trigger('click');
        assert.ok(showingTooltip(), 'tooltip is shown');

        $el.CFW_Tooltip('hide');
        assert.ok(!showingTooltip(), 'tooltip is hidden');

        $el.trigger('click');
        assert.ok(showingTooltip(), 'tooltip is shown again');
    });

    QUnit.test('should allow number in title', function(assert) {
        assert.expect(1);
        var done = assert.async();

        $('<a href="#"></a>')
            .appendTo('#qunit-fixture')
            .on('afterShow.cfw.tooltip', function() {
                assert.strictEqual($('.tooltip .tooltip-body').text(), '4', 'title number has been converted to string');
                done();
            })
            .CFW_Tooltip({
                title: 4
            })
            .CFW_Tooltip('show');
    });

    QUnit.test('should not move focus if non-event toggle called when in dialog mode', function(assert) {
        assert.expect(2);
        var done = assert.async();

        var $trigger = $('<a href="#" title="Another tooltip"></a>')
            .appendTo('#qunit-fixture')
            .CFW_Tooltip({
                trigger: 'click'
            });

        $trigger
            .on('afterShow.cfw.tooltip', function() {
                assert.notStrictEqual($('.tooltip')[0], document.activeElement);
                $trigger.CFW_Tooltip('toggle');
            })
            .on('afterHide.cfw.tooltip', function() {
                assert.notStrictEqual($trigger[0], document.activeElement);
                done();
            })
            .CFW_Tooltip('toggle');
    });

    QUnit.test('should not move focus if show/hide called when in dialog mode', function(assert) {
        assert.expect(2);
        var done = assert.async();

        var $trigger = $('<a href="#" title="Another tooltip"></a>')
            .appendTo('#qunit-fixture')
            .CFW_Tooltip({
                trigger: 'click'
            });

        $trigger
            .on('afterShow.cfw.tooltip', function() {
                assert.notStrictEqual($('.tooltip')[0], document.activeElement);
                $trigger.CFW_Tooltip('hide');
            })
            .on('afterHide.cfw.tooltip', function() {
                assert.notStrictEqual($trigger[0], document.activeElement);
                done();
            })
            .CFW_Tooltip('show');
    });

    QUnit.test('should move focus if event-driven toggle called when in dialog mode', function(assert) {
        assert.expect(2);
        var done = assert.async();

        var $trigger = $('<a href="#" title="Another tooltip"></a>')
            .appendTo('#qunit-fixture')
            .CFW_Tooltip({
                trigger: 'click'
            });

        $trigger
            .on('afterShow.cfw.tooltip', function() {
                assert.strictEqual($('.tooltip')[0], document.activeElement);
                $trigger.trigger('click');
            })
            .on('afterHide.cfw.tooltip', function() {
                assert.strictEqual($trigger[0], document.activeElement);
                done();
            })
            .trigger('click');
    });

    QUnit.test('should allow passing of config to popper.js using popperConfig', function(assert) {
        assert.expect(1);
        var done = assert.async();

        var $trigger = $('<a href="#" title="Another tooltip"></a>')
            .appendTo('#qunit-fixture')
            .CFW_Tooltip({
                popperConfig: {
                    placement: 'left'
                }
            });

        $trigger
            .on('afterShow.cfw.tooltip', function() {
                assert.strictEqual($('.tooltip').attr('x-placement'), 'left');
                done();
            })
            .CFW_Tooltip('show');
    });

    QUnit.test('should not show/hide tooltip on click if "trigger=\'manual\'"', function(assert) {
        assert.expect(4);
        var $el = $('<a href="#" rel="tooltip" title="Test tooltip"></a>')
            .appendTo('#qunit-fixture')
            .CFW_Tooltip({
                trigger: 'manual',
                animate: false
            });

        function showingTooltip() {
            var tooltip = $el.data('cfw.tooltip');
            var $tooltip = tooltip.$target;
            var hasIn = $tooltip !== null ? $tooltip.hasClass('in') : false;
            return hasIn || tooltip.hoverState === 'in';
        }

        $el.trigger('click');
        assert.ok(!showingTooltip(), 'tooltip is hidden');

        $el.CFW_Tooltip('show');
        assert.ok(showingTooltip(), 'tooltip is shown');

        $el.trigger('click');
        assert.ok(showingTooltip(), 'tooltip is shown');

        $el.CFW_Tooltip('hide');
        assert.ok(!showingTooltip(), 'tooltip is hidden');
    });

    QUnit.test('should allow custom display value when shown', function(assert) {
        assert.expect(1);
        var done = assert.async();

        var $trigger = $('<a href="#" title="Another tooltip"></a>')
            .appendTo('#qunit-fixture')
            .CFW_Tooltip({
                display: 'flex'
            });

        $trigger
            .on('afterShow.cfw.tooltip', function() {
                assert.strictEqual($('.tooltip').css('display'), 'flex');
                done();
            })
            .CFW_Tooltip('show');
    });

    QUnit.test('should show tooltip with provided custom class from data attribute', function(assert) {
        assert.expect(1);
        var done = assert.async();

        var $trigger = $('<a href="#" title="Another tooltip" data-cfw-tooltip-custom-class="custom-class"></a>')
            .CFW_Tooltip()
            .on('afterShow.cfw.tooltip', function() {
                assert.ok($trigger.data('cfw.tooltip').$target.hasClass('custom-class'));
                done();
            });
        $trigger.CFW_Tooltip('show');
    });

    QUnit.test('should show tooltip with provided custom class from option string', function(assert) {
        assert.expect(1);
        var done = assert.async();

        var $trigger = $('<a href="#" title="Another tooltip"></a>')
            .CFW_Tooltip({
                customClass: 'custom-class'
            })
            .on('afterShow.cfw.tooltip', function() {
                assert.ok($trigger.data('cfw.tooltip').$target.hasClass('custom-class'));
                done();
            });
        $trigger.CFW_Tooltip('show');
    });

    QUnit.test('should show tooltip with provided custom class from option function', function(assert) {
        assert.expect(1);
        var done = assert.async();

        var $trigger = $('<a href="#" title="Another tooltip"></a>')
            .CFW_Tooltip({
                customClass: function() { return 'custom-class'; }
            })
            .on('afterShow.cfw.tooltip', function() {
                assert.ok($trigger.data('cfw.tooltip').$target.hasClass('custom-class'));
                done();
            });
        $trigger.CFW_Tooltip('show');
    });

    QUnit.test('should add an aria-label attribute referencing original title', function(assert) {
        assert.expect(1);
        var done = assert.async();

        var $trigger = $('<a href="#" title="Another tooltip"></a>');
        $trigger
            .on('afterShow.cfw.tooltip', function() {
                assert.strictEqual($trigger.attr('aria-label'), 'Another tooltip');
                done();
            })
            .CFW_Tooltip('show');
    });

    QUnit.test('should not update aria-label attribute if the element has existing aria-label', function(assert) {
        assert.expect(1);
        var done = assert.async();

        var $trigger = $('<a href="#" title="Another tooltip" aria-label="Different label"></a>');
        $trigger
            .on('afterShow.cfw.tooltip', function() {
                assert.strictEqual($trigger.attr('aria-label'), 'Different label');
                done();
            })
            .CFW_Tooltip('show');
    });

    QUnit.test('should not add an aria-label attribute if the element has text content', function(assert) {
        assert.expect(1);
        var done = assert.async();

        var $trigger = $('<a href="#" title="Another tooltip">Text content</a>');
        $trigger
            .on('afterShow.cfw.tooltip', function() {
                assert.strictEqual(typeof $trigger.attr('aria-label'), 'undefined');
                done();
            })
            .CFW_Tooltip('show');
    });

    QUnit.test('should add the aria-label attribute when element text content is a whitespace string', function(assert) {
        assert.expect(1);
        var done = assert.async();

        var $trigger = $('<a href="#" title="Another tooltip"><span>    </span></a>');
        $trigger
            .on('afterShow.cfw.tooltip', function() {
                assert.strictEqual($trigger.attr('aria-label'), 'Another tooltip');
                done();
            })
            .CFW_Tooltip('show');
    });
});
