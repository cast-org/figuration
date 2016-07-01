$(function() {
    'use strict';

    QUnit.module('CFW_Accordion');

    QUnit.test('should be defined on jquery object', function(assert) {
        assert.expect(1);
        assert.ok($(document.body).CFW_Accordion, 'CFW_Accordion method is defined');
    });

    QUnit.test('should return jquery collection containing the element', function(assert) {
        assert.expect(2);
        var $el = $('<div/>');
        var $col = $el.CFW_Accordion();
        assert.ok($col instanceof $, 'returns jquery collection');
        assert.strictEqual($col[0], $el[0], 'collection contains element');
    });

    QUnit.test('should add "in" class to active accordion target', function(assert) {
        assert.expect(3);
        var done = assert.async();

        var $accordion = $('<div id="test" data-cfw="accordion">'
            + '<div />'
            + '<div />'
            + '<div />'
            + '</div>');

        var $groups = $accordion.appendTo('#qunit-fixture').children('div');

        var $trigger1 = $('<a href="#body1" role="button" class="open" data-cfw="collapse" />').appendTo($groups.eq(0));
        var $target1 = $('<div id="body1" class="collapse in" />').appendTo($groups.eq(0));

        var $trigger2 = $('<a href="#body2" role="button" data-cfw="collapse" />').appendTo($groups.eq(1));
        var $target2 = $('<div id="body2" class="collapse" />').appendTo($groups.eq(1));

        var $trigger3 = $('<a href="#body3" role="button" data-cfw="collapse" />').appendTo($groups.eq(2));
        var $target3 = $('<div id="body3" class="collapse" />').appendTo($groups.eq(2));

        $trigger3
            .on('afterShow.cfw.collapse', function() {
                assert.ok(!$target1.hasClass('in'), 'inactive target 1 does not have class "in"');
                assert.ok(!$target2.hasClass('in'), 'inactive target 2 does not have class "in"');
                assert.ok($target3.hasClass('in'), 'active target 3 does have class "in"');
                done();
            });

        $trigger1.CFW_Collapse();
        $trigger2.CFW_Collapse();
        $trigger3.CFW_Collapse();
        $accordion.CFW_Accordion();
        $trigger3.trigger('click');
    });

    QUnit.test('should add "open" class to active accordion trigger', function(assert) {
        assert.expect(3);
        var done = assert.async();

        var $accordion = $('<div id="test" data-cfw="accordion">'
            + '<div />'
            + '<div />'
            + '<div />'
            + '</div>');

        var $groups = $accordion.appendTo('#qunit-fixture').children('div');

        var $trigger1 = $('<a href="#body1" role="button" class="open" data-cfw="collapse" />').appendTo($groups.eq(0));
        /* var $target1 = */ $('<div id="body1" class="collapse in" />').appendTo($groups.eq(0));

        var $trigger2 = $('<a href="#body2" role="button" data-cfw="collapse" />').appendTo($groups.eq(1));
        /* var $target2 = */ $('<div id="body2" class="collapse" />').appendTo($groups.eq(1));

        var $trigger3 = $('<a href="#body3" role="button" data-cfw="collapse" />').appendTo($groups.eq(2));
        /* var $target3 = */ $('<div id="body3" class="collapse" />').appendTo($groups.eq(2));

        $trigger3
            .on('afterShow.cfw.collapse', function() {
                assert.ok(!$trigger1.hasClass('open'), 'inactive trigger 1 does not have class "open"');
                assert.ok(!$trigger2.hasClass('open'), 'inactive trigger 2 does not have class "open"');
                assert.ok($trigger3.hasClass('open'), 'active trigger 3 does have class "open"');
                done();
            });

        $trigger1.CFW_Collapse();
        $trigger2.CFW_Collapse();
        $trigger3.CFW_Collapse();
        $accordion.CFW_Accordion();
        $trigger3.trigger('click');
    });

    QUnit.test('should add aria-hidden="true" on inactive accordion target and remove aria-hidden for active target', function(assert) {
        assert.expect(3);
        var done = assert.async();

        var $accordion = $('<div id="test" data-cfw="accordion">'
            + '<div />'
            + '<div />'
            + '<div />'
            + '</div>');

        var $groups = $accordion.appendTo('#qunit-fixture').children('div');

        var $trigger1 = $('<a href="#body1" class="open" role="button" data-cfw="collapse" />').appendTo($groups.eq(0));
        var $target1 = $('<div id="body1" class="collapse in" />').appendTo($groups.eq(0));

        var $trigger2 = $('<a href="#body2" role="button" data-cfw="collapse" />').appendTo($groups.eq(1));
        var $target2 = $('<div id="body2" class="collapse" aria-hidden="true" />').appendTo($groups.eq(1));

        var $trigger3 = $('<a href="#body3" role="button" data-cfw="collapse" />').appendTo($groups.eq(2));
        var $target3 = $('<div id="body3" class="collapse" aria-hidden="true" />').appendTo($groups.eq(2));

        $trigger3
            .on('afterShow.cfw.collapse', function() {
                assert.strictEqual($target1.attr('aria-hidden'), 'true', 'inactive target 1 does have  aria-hidden="true"');
                assert.strictEqual($target2.attr('aria-hidden'), 'true', 'inactive target 2 does have  aria-hidden="true"');
                assert.notOk($target3.is('[aria-hidden]'), 'active target 3 does not have aria-hidden');
                done();
            });

        $trigger1.CFW_Collapse();
        $trigger2.CFW_Collapse();
        $trigger3.CFW_Collapse();
        $accordion.CFW_Accordion();
        $trigger3.trigger('click');
    });

    QUnit.test('should change aria-expanded from active accordion trigger to "false" and set the newly active one to "true"', function(assert) {
        assert.expect(3);
        var done = assert.async();

        var $accordion = $('<div id="test" data-cfw="accordion">'
            + '<div />'
            + '<div />'
            + '<div />'
            + '</div>');

        var $groups = $accordion.appendTo('#qunit-fixture').children('div');

        var $trigger1 = $('<a href="#body1" role="button" class="open" data-cfw="collapse" aria-expanded="true"/>').appendTo($groups.eq(0));
        /* var $target1 = */ $('<div id="body1" class="collapse in" />').appendTo($groups.eq(0));

        var $trigger2 = $('<a href="#body2" role="button" data-cfw="collapse" aria-expanded="false" />').appendTo($groups.eq(1));
        /* var $target2 = */ $('<div id="body2" class="collapse" />').appendTo($groups.eq(1));

        var $trigger3 = $('<a href="#body3" role="button" data-cfw="collapse" aria-expanded="false" />').appendTo($groups.eq(2));
        /* var $target3 = */ $('<div id="body3" class="collapse" />').appendTo($groups.eq(2));

        $trigger3
            .on('afterShow.cfw.collapse', function() {
                assert.strictEqual($trigger1.attr('aria-expanded'), 'false', 'inactive trigger 1 does have aria-expanded="false"');
                assert.strictEqual($trigger2.attr('aria-expanded'), 'false', 'inactive trigger 2 does have aria-expanded="false"');
                assert.strictEqual($trigger3.attr('aria-expanded'), 'true', 'active trigger 3 does have aria-expanded="true"');
                done();
            });

        $trigger1.CFW_Collapse();
        $trigger2.CFW_Collapse();
        $trigger3.CFW_Collapse();
        $accordion.CFW_Accordion();
        $trigger3.trigger('click');
    });

    QUnit.test('should not fire show event if show is prevented because other element is still transitioning', function(assert) {
        assert.expect(1);
        var done = assert.async();
        var showFired = false;

        var $accordion = $('<div id="test" data-cfw="accordion">'
            + '<div />'
            + '<div />'
            + '</div>');

        var $groups = $accordion.appendTo('#qunit-fixture').children('div');

        var $trigger1 = $('<a href="#body1" class="open" role="button" data-cfw="collapse" />').appendTo($groups.eq(0));
        var $target1 = $('<div id="body1" class="collapse in" />').appendTo($groups.eq(0));

        var $trigger2 = $('<a href="#body2" role="button" data-cfw="collapse" />').appendTo($groups.eq(1));
        /* var $target2 = */ $('<div id="body2" class="collapse" aria-hidden="true" />').appendTo($groups.eq(1));

        $trigger1.CFW_Collapse();
        $trigger2.CFW_Collapse();
        $accordion.CFW_Accordion();

        $trigger2
            .on('afterShow.cfw.collapse', function() {
                showFired = true;
            });

        $target1.toggleClass('in collapsing');
        $trigger1.data('cfw.collapse').inTransition = 1;
        $trigger2.trigger('click');

        setTimeout(function() {
            assert.ok(!showFired, 'show event did not fire');
            done();
        }, 1);
    });
});
