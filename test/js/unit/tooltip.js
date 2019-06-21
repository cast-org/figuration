$(function() {
    'use strict';

    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

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
        var $el = $('<div/>');
        var $col = $el.CFW_Tooltip();
        assert.ok($col instanceof $, 'returns jquery collection');
        assert.strictEqual($col[0], $el[0], 'collection contains element');
    });

    QUnit.test('should empty title attribute', function(assert) {
        assert.expect(1);
        var $trigger = $('<a href="#" title="Another tooltip"/>').CFW_Tooltip();
        assert.strictEqual($trigger.attr('title'), '', 'title attribute was emptied');
    });

    QUnit.test('should add data attribute for referencing original title', function(assert) {
        assert.expect(1);
        var $trigger = $('<a href="#" title="Another tooltip"/>').CFW_Tooltip();
        assert.strictEqual($trigger.attr('data-cfw-tooltip-original-title'), 'Another tooltip', 'original title preserved in data attribute');
    });

    QUnit.test('should add aria-describedby to the trigger on show', function(assert) {
        assert.expect(3);
        var done = assert.async();

        var $trigger = $('<a href="#" title="Another tooltip"/>')
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
        var $trigger = $('<a href="#" title="Another tooltip"/>')
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

    QUnit.test('should assign a unique id tooltip element', function(assert) {
        assert.expect(2);
        $('<a href="#" title="Another tooltip"/>')
            .appendTo('#qunit-fixture')
            .CFW_Tooltip('show');

        var id = $('.tooltip').attr('id');

        assert.strictEqual($('#' + id).length, 1, 'tooltip has unique id');
        assert.strictEqual(id.indexOf('cfw-tooltip'), 0, 'tooltip id has prefix');
    });

    QUnit.test('should place tooltips relative to placement option', function(assert) {
        assert.expect(2);
        var $tooltip = $('<a href="#" title="Another tooltip"/>')
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
        var $tooltip = $('<a href="#" title="&lt;b&gt;test&lt;/b&gt;"/>')
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
        var $tooltip = $('<a href="#" title="Another tooltip"/>')
            .appendTo('#qunit-fixture')
            .CFW_Tooltip({
                template: '<div class="tooltip some-class"><div class="tooltip-arrow"/><div class="tooltip-body"/></div>'
            });

        $tooltip.CFW_Tooltip('show');
        assert.ok($('.tooltip').hasClass('some-class'), 'custom class is present');

        $tooltip.CFW_Tooltip('hide');
        assert.strictEqual($('.tooltip').length, 0, 'tooltip removed');
    });

    QUnit.test('should fire beforeShow event', function(assert) {
        assert.expect(1);
        var done = assert.async();

        $('<div title="tooltip title"/>')
            .on('beforeShow.cfw.tooltip', function() {
                assert.ok(true, 'beforeShow event fired');
                done();
            })
            .CFW_Tooltip('show');
    });

    QUnit.test('should fire inserted event', function(assert) {
        assert.expect(2);
        var done = assert.async();

        $('<div title="tooltip title"/>')
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

        $('<div title="tooltip title"/>')
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

        $('<div title="tooltip title"/>')
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

        $('<div title="tooltip title"/>')
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

        $('<div title="tooltip title"/>')
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

    QUnit.test('should dispose tooltip', function(assert) {
        assert.expect(7);
        var $tooltip = $('<div/>')
            .appendTo('#qunit-fixture')
            .CFW_Tooltip()
            .on('click.foo', function() {}); // eslint-disable-line no-empty-function

        assert.ok($tooltip.data('cfw.tooltip'), 'tooltip has data');
        assert.ok($._data($tooltip[0], 'events').mouseover && $._data($tooltip[0], 'events').mouseout, 'tooltip has hover events');
        assert.strictEqual($._data($tooltip[0], 'events').click[0].namespace, 'foo', 'tooltip has extra click.foo event');

        $tooltip.CFW_Tooltip('show');
        $tooltip.CFW_Tooltip('dispose');

        assert.ok(!$tooltip.hasClass('in'), 'tooltip is hidden');
        assert.ok(!$._data($tooltip[0], 'cfw.tooltip'), 'tooltip does not have data');
        assert.strictEqual($._data($tooltip[0], 'events').click[0].namespace, 'foo', 'tooltip still has click.foo');
        assert.ok(!$._data($tooltip[0], 'events').mouseover && !$._data($tooltip[0], 'events').mouseout, 'tooltip does not have hover events');
    });

    QUnit.test('should show tooltip when toggle is called', function(assert) {
        assert.expect(1);
        $('<a href="#" title="tooltip on toggle"/>')
            .appendTo('#qunit-fixture')
            .CFW_Tooltip({
                trigger: 'manual'
            })
            .CFW_Tooltip('toggle');

        assert.ok($('.tooltip').is('.fade.in'), 'tooltip is faded in');
    });

    QUnit.test('should hide previously shown tooltip when toggle is called on tooltip', function(assert) {
        assert.expect(1);
        $('<a href="#" title="tooltip on toggle">@ResentedHook</a>')
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
        var $tooltip = $('<a href="#" title="Another tooltip"/>')
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

    QUnit.test('should add position class before positioning so that position-specific styles are taken into account', function(assert) {
        assert.expect(1);
        var styles = '<style>' +
            '.tooltip.cfw-tooltip-right { white-space: nowrap; }' +
            '.tooltip.cfw-tooltip-right .tooltip-body { max-width: none; }' +
            '</style>';
        var $styles = $(styles).appendTo('head');

        var $container = $('<div/>').appendTo('#qunit-fixture');
        var $target = $('<a href="#" title="very very very very very very very very long tooltip in one line"/>')
            .appendTo($container)
            .CFW_Tooltip({
                placement: 'forward',
                viewport: null
            })
            .CFW_Tooltip('show');
        var $tooltip = $container.find('.tooltip');

        // handle sub pixels in firefox
        var top = Math.round($target.offset().top + ($target[0].getBoundingClientRect().height / 2) - ($tooltip[0].getBoundingClientRect().height / 2));
        var top2 = Math.round($tooltip.offset().top);
        var topDiff = top - top2;
        assert.ok(topDiff <= 1 && topDiff >= -1);
        $target.CFW_Tooltip('hide');

        $container.remove();
        $styles.remove();
    });

    QUnit.test('should use title attribute for tooltip text', function(assert) {
        assert.expect(2);
        var $tooltip = $('<a href="#" title="Simple tooltip"/>')
            .appendTo('#qunit-fixture')
            .CFW_Tooltip();

        $tooltip.CFW_Tooltip('show');
        assert.strictEqual($('.tooltip').children('.tooltip-body').text(), 'Simple tooltip', 'title from title attribute is set');

        $tooltip.CFW_Tooltip('hide');
        assert.strictEqual($('.tooltip').length, 0, 'tooltip removed from dom');
    });

    QUnit.test('should use title option', function(assert) {
        assert.expect(2);
        var $tooltip = $('<a href="#"/>')
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
        var $tooltip = $('<a href="#" title="ignored title"/>')
            .appendTo('#qunit-fixture')
            .CFW_Tooltip({
                title: 'tooltip title'
            });

        $tooltip.CFW_Tooltip('show');
        assert.strictEqual($('.tooltip').children('.tooltip-body').text(), 'tooltip title', 'title is set from title option while preferred over title attribute');

        $tooltip.CFW_Tooltip('hide');
        assert.strictEqual($('.tooltip').length, 0, 'tooltip removed from dom');
    });

    QUnit.test('should be placed dynamically to viewport with the dynamic placement option', function(assert) {
        assert.expect(6);
        var styles = '<style>' +
            '.trigger { position: absolute; }' +
            '#qunit-fixture { top: inherit !important; left: inherit !important; }' +
            '</style>';
        var $styles = $(styles).appendTo('head');
        var $container = $('<div/>')
            .css({
                position: 'relative',
                height: '100%'
            })
            .appendTo('#qunit-fixture');

        var $topTooltip = $('<div class="trigger" style="left: 0; top: 0;" title="Top tooltip">Top Dynamic Tooltip</div>')
            .appendTo($container)
            .CFW_Tooltip({
                placement: 'auto top',
                viewport: '#qunit-fixture'
            });

        $topTooltip.CFW_Tooltip('show');
console.log($('.tooltip').attr('class'));
        assert.ok($('.tooltip').is('.cfw-tooltip-bottom'), 'top positioned tooltip is dynamically positioned to bottom');

        $topTooltip.CFW_Tooltip('hide');
        assert.strictEqual($('.tooltip').length, 0, 'top positioned tooltip removed from dom');

        var $forwardTooltip = $('<div class="trigger" style="right: 0;" title="forward tooltip">forward Dynamic Tooltip</div>')
            .appendTo($container)
            .CFW_Tooltip({
                placement: 'forward auto',
                viewport: '#qunit-fixture'
            });

        $forwardTooltip.CFW_Tooltip('show');
        assert.ok($('.tooltip').is('.cfw-tooltip-left'), 'forward positioned tooltip is dynamically positioned reverse');

        $forwardTooltip.CFW_Tooltip('hide');
        assert.strictEqual($('.tooltip').length, 0, 'forward positioned tooltip removed from dom');

        var $reverseTooltip = $('<div class="trigger" style="left: 0;" title="Reverse tooltip">Reverse Dynamic Tooltip</div>')
            .appendTo($container)
            .CFW_Tooltip({
                placement: 'auto reverse',
                viewport: '#qunit-fixture'
            });

        $reverseTooltip.CFW_Tooltip('show');
        assert.ok($('.tooltip').is('.cfw-tooltip-right'), 'reverse positioned tooltip is dynamically positioned forward');

        $reverseTooltip.CFW_Tooltip('hide');
        assert.strictEqual($('.tooltip').length, 0, 'reverse positioned tooltip removed from dom');

        $container.remove();
        $styles.remove();
    });

    QUnit.test('should position tip on top if viewport has enough space and placement is "auto top"', function(assert) {
        assert.expect(2);
        var styles = '<style>' +
            'body { padding-top: 100px; }' +
            '#section { height: 300px; border: 1px solid red; padding-top: 50px }' +
            '.trigger { width: 150px; border: 1px solid blue; }' +
            '</style>';
        var $styles = $(styles).appendTo('head');

        var $container = $('<div id="section"/>').appendTo('#qunit-fixture');
        var $target = $('<div class="trigger" title="tip"/>')
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

        var $container = $('<div id="section"/>').appendTo('#qunit-fixture');
        var $target = $('<div class=""trigger" title="tip"/>')
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

    QUnit.test('should position tip on bottom if the tip\'s dimension exceeds the viewport area and placement is "auto top"', function(assert) {
        assert.expect(2);
        var styles = '<style>' +
            'body { padding-top: 100px; }' +
            '#section { height: 300px; border: 1px solid red; }' +
            '.trigger { width: 150px; border: 1px solid blue; }' +
            '</style>';
        var $styles = $(styles).appendTo('head');

        var $container = $('<div id="section"/>').appendTo('#qunit-fixture');
        var $target = $('<div class="trigger" title="tip"/>')
            .appendTo($container)
            .CFW_Tooltip({
                placement: 'auto top',
                viewport: '#section'
            });

        $target.CFW_Tooltip('show');
        assert.ok($('.tooltip').is('.cfw-tooltip-bottom'), 'top positioned tooltip is dynamically positioned to bottom');

        $target.CFW_Tooltip('hide');
        assert.strictEqual($('.tooltip').length, 0, 'tooltip removed from dom');

        $styles.remove();
    });

    QUnit.test('should display the tip on top whenever scrollable viewport has enough room if the given placement is "auto top"', function(assert) {
        assert.expect(2);
        var styles = '<style>' +
            '#scrollable-div { height: 200px; overflow: auto; }' +
            '.trigger { margin: 200px 0 400px; width: 150px; }' +
            '</style>';
        var $styles = $(styles).appendTo('head');

        var $container = $('<div id="scrollable-div"/>').appendTo('#qunit-fixture');
        var $target = $('<div title="tip" class="trigger">Tooltip Item</div>')
            .appendTo($container)
            .CFW_Tooltip({
                placement: 'top auto',
                viewport: '#scrollable-div'
            });

        $('#scrollable-div').scrollTop(100);

        $target.CFW_Tooltip('show');
        assert.ok($('.tooltip').is('.fade.cfw-tooltip-top.in'), 'has correct classes applied');

        $target.CFW_Tooltip('hide');
        assert.strictEqual($('.tooltip').length, 0, 'tooltip removed from dom');

        $styles.remove();
    });

    QUnit.test('should display the tip on bottom whenever scrollable viewport doesn\'t have enough room if the given placement is "auto top"', function(assert) {
        assert.expect(2);
        var styles = '<style>' +
            '#scrollable-div { height: 200px; overflow: auto; }' +
            '.trigger { padding: 200px 0 400px; width: 150px; }' +
            '</style>';
        var $styles = $(styles).appendTo('head');

        var $container = $('<div id="scrollable-div"/>').appendTo('#qunit-fixture');
        var $target = $('<div title="tip" class="trigger">Tooltip Item</div>')
            .appendTo($container)
            .CFW_Tooltip({
                placement: 'top auto',
                viewport: '#scrollable-div'
            });

        $('#scrollable-div').scrollTop(200);

        $target.CFW_Tooltip('show');
        assert.ok($('.tooltip').is('.fade.cfw-tooltip-bottom.in'), 'has correct classes applied');

        $target.CFW_Tooltip('hide');
        assert.strictEqual($('.tooltip').length, 0, 'tooltip removed from dom');

        $styles.remove();
    });

    QUnit.test('should display the tip on bottom whenever scrollable viewport has enough room if the given placement is "auto bottom"', function(assert) {
        assert.expect(2);
        var styles = '<style>' +
            '#scrollable-div { height: 200px; overflow: auto; }' +
            '.spacer { height: 400px; }' +
            '.spacer:first-child { height: 200px; }' +
            '.trigger { width: 150px; }' +
            '</style>';
        var $styles = $(styles).appendTo('head');

        var $container = $('<div id="scrollable-div"/>').appendTo('#qunit-fixture');
        var $target = $('<div title="tip" class="trigger">Tooltip Item</div>')
            .appendTo($container)
            .before('<div class="spacer"/>')
            .after('<div class="spacer"/>')
            .CFW_Tooltip({
                placement: 'bottom auto',
                viewport: '#scrollable-div'
            });

        $('#scrollable-div').scrollTop(200);

        $target.CFW_Tooltip('show');
        assert.ok($('.tooltip').is('.fade.cfw-tooltip-bottom.in'), 'has correct classes applied');

        $target.CFW_Tooltip('hide');
        assert.strictEqual($('.tooltip').length, 0, 'tooltip removed from dom');

        $styles.remove();
    });

    QUnit.test('should display the tip on top whenever scrollable viewport doesn\'t have enough room if the given placement is "auto bottom"', function(assert) {
        assert.expect(2);
        var styles = '<style>' +
            '#scrollable-div { height: 200px; overflow: auto; }' +
            '.trigger { margin-top: 400px; width: 150px; }' +
            '</style>';
        var $styles = $(styles).appendTo('head');

        var $container = $('<div id="scrollable-div"/>').appendTo('#qunit-fixture');
        var $target = $('<div title="tip" class="trigger">Tooltip Item</div>')
            .appendTo($container)
            .CFW_Tooltip({
                placement: 'bottom auto',
                viewport: '#scrollable-div'
            });

        $('#scrollable-div').scrollTop(400);

        $target.CFW_Tooltip('show');
        assert.ok($('.tooltip').is('.fade.cfw-tooltip-top.in'), 'has correct classes applied');

        $target.CFW_Tooltip('hide');
        assert.strictEqual($('.tooltip').length, 0, 'tooltip removed from dom');

        $styles.remove();
    });

    QUnit.test('should adjust the tip\'s top position when up against the top of the viewport', function(assert) {
        assert.expect(2);
        var styles = '<style>' +
            '.tooltip .tooltip-body { width: 200px; height: 200px; max-width: none; }' +
            '.trigger { position: fixed; }' +
            '</style>';
        var $styles = $(styles).appendTo('head');

        var $container = $('<div/>').appendTo('#qunit-fixture');
        var $target = $('<a href="#" class="trigger" title="tip" style="top: 0px; left: 0px;"/>')
            .appendTo($container)
            .CFW_Tooltip({
                placement: 'forward',
                viewport: 'body',
                padding: 12
            });

        $target.CFW_Tooltip('show');
        assert.strictEqual(Math.round($container.find('.tooltip').offset().top), 12);

        $target.CFW_Tooltip('hide');
        assert.strictEqual($('.tooltip').length, 0, 'tooltip removed from dom');

        $styles.remove();
    });

    // FIXME
    // Skip for iOS until this can be resolved with unit tests
    // under Karma.
    if (!iOS) {
        QUnit.test('should adjust the tip\'s top position when up against the bottom of the viewport', function(assert) {
            assert.expect(2);
            var styles = '<style>' +
                '.tooltip .tooltip-body { width: 200px; height: 200px; max-width: none; }' +
                '.trigger { position: fixed; }' +
                '</style>';
            var $styles = $(styles).appendTo('head');

            var $container = $('<div/>').appendTo(document.body);
            var $target = $('<a href="#" class="trigger" title="tip" style="bottom: 0px; left: 0px;">test</a>')
                .appendTo($container)
                .CFW_Tooltip({
                    placement: 'forward',
                    padding: 12
                });

            $target.CFW_Tooltip('show');
            var $tooltip = $container.find('.tooltip');
            assert.strictEqual(Math.round($tooltip.offset().top), Math.round($(window).height() - 12 - $tooltip[0].getBoundingClientRect().height));

            $target.CFW_Tooltip('hide');
            assert.strictEqual($('.tooltip').length, 0, 'tooltip removed from dom');

            $container.remove();
            $styles.remove();
        });
    }

    QUnit.test('should adjust the tip\'s left position when up against the left of the viewport', function(assert) {
        assert.expect(2);
        var styles = '<style>' +
            '.tooltip .tooltip-body { width: 200px; height: 200px; max-width: none; }' +
            '.trigger { position: fixed; }' +
            '</style>';
        var $styles = $(styles).appendTo('head');

        var $container = $('<div/>').appendTo('#qunit-fixture');
        var $target = $('<a href="#" class="trigger" title="tip" style="top: 0px; left: 0px;"/>')
            .appendTo($container)
            .CFW_Tooltip({
                placement: 'bottom',
                viewport: 'body',
                padding: 12
            });

        $target.CFW_Tooltip('show');
        assert.strictEqual(Math.round($container.find('.tooltip').offset().left), 12);

        $target.CFW_Tooltip('hide');
        assert.strictEqual($('.tooltip').length, 0, 'tooltip removed from dom');

        $container.remove();
        $styles.remove();
    });

    QUnit.test('should adjust the tip\'s left position when up against the right of the viewport', function(assert) {
        assert.expect(2);
        var styles = '<style>' +
            '.tooltip .tooltip-body { width: 200px; height: 200px; max-width: none; }' +
            '.trigger { position: fixed; }' +
            '</style>';
        var $styles = $(styles).appendTo('head');

        var $container = $('<div/>').appendTo('body');
        var $target = $('<a href="#" class="trigger" title="tip" style="top: 0px; right: 0px;"/>')
            .appendTo($container)
            .CFW_Tooltip({
                placement: 'bottom',
                viewport: 'body',
                padding: 12
            });

        $target.CFW_Tooltip('show');
        var $tooltip = $container.find('.tooltip');
        assert.strictEqual(Math.round($tooltip.offset().left), Math.round($(window).width() - 12 - $tooltip[0].getBoundingClientRect().width));

        $target.CFW_Tooltip('hide');
        assert.strictEqual($('.tooltip').length, 0, 'tooltip removed from dom');

        $container.remove();
        $styles.remove();
    });

    QUnit.test('should adjust the tip when up against the right of an arbitrary viewport', function(assert) {
        assert.expect(2);
        var styles = '<style>' +
            '.tooltip, .tooltip .tooltip-body { width: 200px; height: 200px; max-width: none; }' +
            '.container-viewport { position: absolute; top: 50px; left: 60px; width: 300px; height: 300px; }' +
            '.trigger { position: fixed; }' +
            '</style>';
        var $styles = $(styles).appendTo('head');

        var $container = $('<div class="container-viewport"/>').appendTo(document.body);
        var $target = $('<a href="#" class="trigger" title="tip" style="top: 50px; left: 350px;"/>')
            .appendTo($container)
            .CFW_Tooltip({
                placement: 'bottom',
                viewport: '.container-viewport'
            });

        $target.CFW_Tooltip('show');
        var $tooltip = $container.find('.tooltip');
        assert.strictEqual(Math.round($tooltip.offset().left), Math.round(60 + $container.width() - $tooltip[0].getBoundingClientRect().width));

        $target.CFW_Tooltip('hide');
        assert.strictEqual($('.tooltip').length, 0, 'tooltip removed from dom');

        $container.remove();
        $styles.remove();
    });

    QUnit.test('should get viewport element from function', function(assert) {
        assert.expect(3);
        var styles = '<style>' +
            '.tooltip, .tooltip .tooltip-body { width: 200px; height: 200px; max-width: none; }' +
            '.container-viewport { position: absolute; top: 50px; left: 60px; width: 300px; height: 300px; }' +
            '.trigger { position: fixed; }' +
            '</style>';
        var $styles = $(styles).appendTo('head');

        var $container = $('<div class="container-viewport"/>').appendTo(document.body);
        var $target = $('<a href="#" class="trigger" title="tip" style="top: 50px; left: 350px;"/>').appendTo($container);
        $target
            .CFW_Tooltip({
                placement: 'bottom',
                viewport: function($element) {
                    assert.strictEqual($element[0], $target[0], 'viewport function was passed target as argument');
                    return $element.closest('.container-viewport');
                }
            });

        $target.CFW_Tooltip('show');
        var $tooltip = $container.find('.tooltip');
        assert.strictEqual(Math.round($tooltip.offset().left), Math.round(60 + $container.width() - $tooltip[0].getBoundingClientRect().width));

        $target.CFW_Tooltip('hide');
        assert.strictEqual($('.tooltip').length, 0, 'tooltip removed from dom');

        $container.remove();
        $styles.remove();
    });

    QUnit.test('should not misplace the tip when the right edge offset is greater than or equal to the viewport width', function(assert) {
        assert.expect(2);
        var styles = '<style>' +
            '.tooltip, .tooltip *, .tooltip *:before, .tooltip *:after { box-sizing: border-box; }' +
            '.container-viewport, .container-viewport *, .container-viewport *:before, .container-viewport *:after { box-sizing: border-box; }' +
            '.tooltip .tooltip-body { width: 50px; height: 50px; max-width: none; background: red; }' +
            '.container-viewport { padding: 100px; margin-left: 100px; width: 100px; }' +
            '</style>';
        var $styles = $(styles).appendTo('head');

        var $container = $('<div class="container-viewport"/>').appendTo(document.body);
        var $target = $('<a href="#" title="tip">foobar</a>')
            .appendTo($container)
            .CFW_Tooltip({
                viewport: '.container-viewport',
                animate: false
            });

        $target.CFW_Tooltip('show');
        var $tooltip = $container.find('.tooltip');
        assert.strictEqual(Math.round($tooltip.offset().left), Math.round($target.position().left + $target[0].getBoundingClientRect().width / 2 - $tooltip[0].getBoundingClientRect().width / 2));

        $target.CFW_Tooltip('hide');
        assert.strictEqual($('.tooltip').length, 0, 'tooltip removed from dom');

        $container.remove();
        $styles.remove();
    });

    QUnit.test('should not error when trying to show an auto-placed tooltip that has been removed from the dom', function(assert) {
        assert.expect(1);
        var passed = true;
        var $tooltip = $('<a href="#" title="Another tooltip"/>')
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

    QUnit.test('should place tooltip on top of element', function(assert) {
        assert.expect(1);
        var done = assert.async();

        var containerHTML = '<div>' +
            '<p style="margin-top: 200px">' +
            '<a href="#" title="very very very very very very very long tooltip">Hover me</a>' +
            '</p>' +
            '</div>';

        var $container = $(containerHTML)
            .css({
                position: 'absolute',
                bottom: 0,
                left: 0,
                textAlign: 'right',
                width: 300,
                height: 300
            })
            .appendTo('#qunit-fixture');

        var $trigger = $container
            .find('a')
            .css('margin-top', 200)
            .CFW_Tooltip({
                placement: 'top',
                animate: false
            })
            .CFW_Tooltip('show');

        var $tooltip = $container.find('.tooltip');

        setTimeout(function() {
            assert.ok(Math.round($tooltip.offset().top + $tooltip.outerHeight()) <= Math.round($trigger.offset().top));
            done();
        }, 0);
    });

    QUnit.test('should place tooltip inside viewport', function(assert) {
        assert.expect(1);
        var done = assert.async();

        var $container = $('<div/>')
            .css({
                position: 'absolute',
                width: 200,
                height: 200,
                bottom: 0,
                left: 0
            })
            .appendTo('#qunit-fixture');

        $('<a href="#" title="Very very very very very very very very long tooltip">Hover me</a>')
            .css({
                position: 'absolute',
                top: 0,
                left: 0
            })
            .appendTo($container)
            .CFW_Tooltip({
                placement: 'top'
            })
            .CFW_Tooltip('show');

        setTimeout(function() {
            assert.ok($('.tooltip').offset().left >= 0);
            done();
        }, 0);
    });

    QUnit.test('should show tooltip if leave event hasn\'t occurred before delay expires', function(assert) {
        assert.expect(2);
        var done = assert.async();

        var $tooltip = $('<a href="#" title="Another tooltip"/>')
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

        var $tooltip = $('<a href="#" title="Another tooltip"/>')
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

        var $tooltip = $('<a href="#" title="Another tooltip"/>')
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

        var $tooltip = $('<a href="#" title="Another tooltip"/>')
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

        var $tooltip = $('<a href="#" title="Another tooltip"/>')
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

        var $tooltip = $('<a href="#" title="Another tooltip"/>')
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

    QUnit.test('should correctly position tooltips on SVG elements', function(assert) {
        if (!window.SVGElement) {
            // Skip IE8 since it doesn't support SVG
            assert.expect(0);
            return;
        }
        assert.expect(2);

        var done = assert.async();

        var styles = '<style>' +
            '.tooltip, .tooltip *, .tooltip *:before, .tooltip *:after { box-sizing: border-box; }' +
            '.tooltip { position: absolute; }' +
            '.tooltip .tooltip-body { width: 24px; height: 24px; font-family: Helvetica; }' +
            '</style>';
        var $styles = $(styles).appendTo('head');

        $('#qunit-fixture').append(
            '<div style="position: fixed; top: 0; left: 0;">' +
            '  <svg width="200" height="200">' +
            '    <circle cx="100" cy="100" r="10" title="m" id="theCircle" />' +
            '  </svg>' +
            '</div>');
        var $circle = $('#theCircle');

        $circle
            .on('afterShow.cfw.tooltip', function() {
                var offset = $('.tooltip').offset();
                $styles.remove();
                assert.ok(Math.abs(offset.left - 88) <= 1, 'tooltip has correct horizontal location');
                $circle.CFW_Tooltip('hide');
                assert.strictEqual($('.tooltip').length, 0, 'tooltip removed from dom');
                done();
            })
            .CFW_Tooltip({
                container: 'body',
                placement: 'top',
                trigger: 'manual'
            });

        $circle.CFW_Tooltip('show');
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
        var $trigger = $('<a href="#" title="Another tooltip"/>')
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
        var $trigger = $('<a href="#" title="Another tooltip"/>')
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

    QUnit.test('should position arrow correctly when tooltip is moved to not appear offscreen', function(assert) {
        assert.expect(2);
        var done = assert.async();

        var styles = '<style>' +
            '.tooltip, .tooltip *, .tooltip *:before, .tooltip *:after { box-sizing: border-box; }' +
            '.tooltip { position: absolute; }' +
            '.tooltip-arrow { position: absolute; width: 0; height: 0; }' +
            '.tooltip .tooltip-body { max-width: 200px; padding: 3px 8px; }' +
            '</style>';
        var $styles = $(styles).appendTo('head');

        $('<a href="#" title="tooltip title" style="position: absolute; bottom: 0; right: 0;">Foobar</a>')
            .appendTo('body')
            .on('afterShow.cfw.tooltip', function() {
                var arrowStyles = $(this).data('cfw.tooltip').$target.find('.tooltip-arrow').attr('style');
                assert.ok(/left/i.test(arrowStyles) && !/top/i.test(arrowStyles), 'arrow positioned correctly');
                $(this).CFW_Tooltip('hide');
            })
            .on('afterHide.cfw.tooltip', function() {
                $styles.remove();
                $(this).remove();
                assert.strictEqual($('.tooltip').length, 0, 'tooltip removed from dom');
                done();
            })
            .CFW_Tooltip({
                container: 'body',
                placement: 'top',
                trigger: 'manual'
            })
            .CFW_Tooltip('show');
    });

    QUnit.test('should correctly position tooltips on transformed elements', function(assert) {
        var styleProps = document.documentElement.style;
        if (!('transform' in styleProps) && !('webkitTransform' in styleProps) && !('msTransform' in styleProps)) {
            assert.expect(0);
            return;
        }
        assert.expect(2);
        var done = assert.async();

        var styles = '<style>' +
            '#qunit-fixture { top: 0 !important; left: 0 !important; }' +
            '.tooltip, .tooltip *, .tooltip *:before, .tooltip *:after { box-sizing: border-box; }' +
            '.tooltip { position: absolute; }' +
            '.tooltip .tooltip-body { width: 24px; height: 24px; font-family: Helvetica; }' +
            '#target { position: absolute; top: 100px; left: 50px; width: 100px; height: 200px; -webkit-transform: rotate(270deg); -ms-transform: rotate(270deg); transform: rotate(270deg); }' +
            '</style>';
        var $styles = $(styles).appendTo('head');

        var $element = $('<div id="target" title="1"/>').appendTo('#qunit-fixture');

        $element
            .on('afterShow.cfw.tooltip', function() {
                var offset = $('.tooltip').offset();
                assert.ok(Math.abs(offset.left - 88) <= 1, 'tooltip has correct horizontal location');
                assert.ok(Math.abs(offset.top - 126) <= 1, 'tooltip has correct vertical location');
                $element.CFW_Tooltip('hide');
                $styles.remove();
                done();
            })
            .CFW_Tooltip({
                container: 'body',
                placement: 'top',
                trigger: 'manual'
            });

        $element.CFW_Tooltip('show');
    });

    QUnit.test('should do nothing when an attempt is made to hide an uninitialized tooltip', function(assert) {
        assert.expect(1);

        var $tooltip = $('<a href="#" title="Another tooltip"/>')
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
        var $el = $('<a href="#" rel="tooltip" title="Test tooltip"/>')
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

        $('<a href="#" />')
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

        var $trigger = $('<a href="#" title="Another tooltip"/>')
            .appendTo('#qunit-fixture')
            .CFW_Tooltip({
                trigger: 'click'
            });

        $trigger
            .on('afterShow.cfw.tooltip', function() {
                assert.notStrictEqual($('.tooltip')[0], document.activeElement, 'has a unique id');
                $trigger.CFW_Tooltip('toggle');
            })
            .on('afterHide.cfw.tooltip', function() {
                assert.notStrictEqual($trigger[0], document.activeElement, 'has a unique id');
                done();
            })
            .CFW_Tooltip('toggle');
    });

    QUnit.test('should not move focus if show/hide called when in dialog mode', function(assert) {
        assert.expect(2);
        var done = assert.async();

        var $trigger = $('<a href="#" title="Another tooltip"/>')
            .appendTo('#qunit-fixture')
            .CFW_Tooltip({
                trigger: 'click'
            });

        $trigger
            .on('afterShow.cfw.tooltip', function() {
                assert.notStrictEqual($('.tooltip')[0], document.activeElement, 'has a unique id');
                $trigger.CFW_Tooltip('hide');
            })
            .on('afterHide.cfw.tooltip', function() {
                assert.notStrictEqual($trigger[0], document.activeElement, 'has a unique id');
                done();
            })
            .CFW_Tooltip('show');
    });

    QUnit.test('should move focus if event-driven toggle called when in dialog mode', function(assert) {
        assert.expect(2);
        var done = assert.async();

        var $trigger = $('<a href="#" title="Another tooltip"/>')
            .appendTo('#qunit-fixture')
            .CFW_Tooltip({
                trigger: 'click'
            });

        $trigger
            .on('afterShow.cfw.tooltip', function() {
                assert.strictEqual($('.tooltip')[0], document.activeElement, 'has a unique id');
                $trigger.trigger('click');
            })
            .on('afterHide.cfw.tooltip', function() {
                assert.strictEqual($trigger[0], document.activeElement, 'has a unique id');
                done();
            })
            .trigger('click');
    });
});
