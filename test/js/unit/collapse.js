$(function() {
    'use strict';

    QUnit.module('CFW_Collapse', {
        beforeEach: function() {
            $(window).scrollTop(0);
        },
        afterEach: function() {
            $('#qunit-fixture').empty();
        }
    });

    QUnit.test('should be defined on jquery object', function(assert) {
        assert.expect(1);
        assert.ok($(document.body).CFW_Collapse, 'CFW_Collapse method is defined');
    });

    QUnit.test('should return jquery collection containing the element', function(assert) {
        assert.expect(2);
        var $el = $('<div></div>');
        var $col = $el.CFW_Collapse();
        assert.ok($col instanceof $, 'returns jquery collection');
        assert.strictEqual($col[0], $el[0], 'collection contains element');
    });

    QUnit.test('should show a collapsed element (no transition)', function(assert) {
        assert.expect(2);
        var $trigger = $('<a role="button" data-cfw="collapse" data-cfw-collapse-target="#test"></a>').appendTo('#qunit-fixture');
        var $target = $('<div id="test" class="collapse"></div>').css('transition', 'none').appendTo('#qunit-fixture');
        $trigger.CFW_Collapse();
        $trigger.CFW_Collapse('show');
        assert.ok($target.hasClass('in'), 'has class "in"');
        assert.ok(!/height/i.test($target.attr('style')), 'has height reset');
    });

    QUnit.test('should show a collapsed element (with transition)', function(assert) {
        assert.expect(2);
        var done = assert.async();
        var $trigger = $('<a role="button" data-cfw="collapse" data-cfw-collapse-target="#test"></a>').appendTo('#qunit-fixture');
        var $target = $('<div id="test" class="collapse"></div>').css('transition', '.05s').appendTo('#qunit-fixture');
        $trigger.CFW_Collapse();
        $trigger
            .one('afterShow.cfw.collapse', function() {
                assert.ok($target.hasClass('in'), 'has class "in"');
                assert.ok(!/height/i.test($target.attr('style')), 'has height reset');
                done();
            });
        $trigger.CFW_Collapse('show');
    });

    QUnit.test('should hide a collapsed element (no transition)', function(assert) {
        assert.expect(2);
        var done = assert.async();
        var $trigger = $('<a role="button" data-cfw="collapse" data-cfw-collapse-target="#test"></a>').appendTo('#qunit-fixture');
        var $target = $('<div id="test" class="collapse"></div>').css('transition', 'none').appendTo('#qunit-fixture');
        $trigger.CFW_Collapse();
        $trigger
            .one('afterShow.cfw.collapse', function() {
                assert.ok($target.hasClass('in'), 'has class "in"');
                $trigger.CFW_Collapse('hide');
            })
            .one('afterHide.cfw.collapse', function() {
                assert.ok(!$target.hasClass('in'), 'does not have class "in"');
                done();
            })
            .CFW_Collapse('show');
    });

    QUnit.test('should hide a collapsed element (with transition)', function(assert) {
        assert.expect(2);
        var done = assert.async();
        var $trigger = $('<a role="button" data-cfw="collapse" data-cfw-collapse-target="#test"></a>').appendTo('#qunit-fixture');
        var $target = $('<div id="test" class="collapse"></div>').css('transition', '.05s').appendTo('#qunit-fixture');
        $trigger.CFW_Collapse();
        $trigger
            .one('afterShow.cfw.collapse', function() {
                assert.ok($target.hasClass('in'), 'has class "in"');
                $trigger.CFW_Collapse('hide');
            })
            .one('afterHide.cfw.collapse', function() {
                assert.ok(!$target.hasClass('in'), 'does not have class "in"');
                done();
            })
            .CFW_Collapse('show');
    });

    QUnit.test('should not fire afterShow when beforeShow is prevented', function(assert) {
        assert.expect(1);
        var done = assert.async();

        var $trigger = $('<a role="button" data-cfw="collapse" data-cfw-collapse-target="#test"></a>').appendTo('#qunit-fixture');
        /* var $target = */ $('<div id="test" class="collapse"></div>').appendTo('#qunit-fixture');

        $trigger
            .one('beforeShow.cfw.collapse', function(e) {
                e.preventDefault();
                assert.ok(true, 'beforeShow event fired');
                done();
            })
            .one('afterShow.cfw.collapse', function() {
                assert.ok(false, 'afterShow event fired');
            });
        $trigger.CFW_Collapse();
        $trigger.CFW_Collapse('show');
    });

    QUnit.test('should reset style to auto after finishing opening collapse', function(assert) {
        assert.expect(2);
        var done = assert.async();

        var $trigger = $('<a role="button" data-cfw="collapse" data-cfw-collapse-target="#test"></a>').appendTo('#qunit-fixture');
        var $target = $('<div id="test" class="collapse" style="height: 0px"></div>').appendTo('#qunit-fixture');

        $trigger
            .one('beforeShow.cfw.collapse', function() {
                assert.strictEqual($target.get(0).style.height, '0px', 'height is 0px');
            })
            .one('afterShow.cfw.collapse', function() {
                assert.strictEqual($target.get(0).style.height, '', 'height is auto');
                done();
            });
        $trigger.CFW_Collapse();
        $trigger.CFW_Collapse('show');
    });

    QUnit.test('should add "in" class to target when collapse is shown', function(assert) {
        assert.expect(1);
        var done = assert.async();

        var $trigger = $('<a role="button" data-cfw="collapse" data-cfw-collapse-target="#test"></a>').appendTo('#qunit-fixture');
        var $target = $('<div id="test" class="collapse"></div>').appendTo('#qunit-fixture');

        $trigger
            .one('afterShow.cfw.collapse', function() {
                assert.ok($target.hasClass('in'), 'target has in class');
                done();
            });

        $trigger.CFW_Collapse();
        $trigger.trigger('click');
    });

    QUnit.test('should add "in" class to target when collapse trigger has "open" class', function(assert) {
        assert.expect(1);
        var $trigger = $('<a role="button" class="open" data-cfw="collapse" data-cfw-collapse-target="#test"></a>').appendTo('#qunit-fixture');
        var $target = $('<div id="test" class="collapse"></div>').appendTo('#qunit-fixture');

        $trigger.CFW_Collapse();
        assert.ok($target.hasClass('in'), 'target has in class');
    });

    QUnit.test('should remove "in" class from target when collapse is hidden', function(assert) {
        assert.expect(1);
        var done = assert.async();

        var $trigger = $('<a role="button" class="open" data-cfw="collapse" data-cfw-collapse-target="#test"></a>').appendTo('#qunit-fixture');
        var $target = $('<div id="test" class="collapse in"></div>').appendTo('#qunit-fixture');

        $trigger
            .one('afterHide.cfw.collapse', function() {
                assert.ok(!$target.hasClass('in'), 'target does not have in class');
                done();
            });

        $trigger.CFW_Collapse();
        $trigger.trigger('click');
    });

    QUnit.test('should add "open" class to all triggers when collapse is shown', function(assert) {
        assert.expect(2);
        var done = assert.async();

        var $trigger0 = $('<a role="button" data-cfw="collapse" data-cfw-collapse-target="#test"></a>').appendTo('#qunit-fixture');
        var $trigger1 = $('<a role="button" data-cfw="collapse" data-cfw-collapse-target="#test"></a>').appendTo('#qunit-fixture');
        /* var $target = */ $('<div id="test" class="collapse"></div>').appendTo('#qunit-fixture');

        $trigger0
            .one('afterShow.cfw.collapse', function() {
                assert.ok($trigger0.hasClass('open'), 'trigger0 has open class');
                assert.ok($trigger1.hasClass('open'), 'trigger1 has open class');
                done();
            });

        $trigger0.CFW_Collapse();
        $trigger1.CFW_Collapse();
        $trigger0.trigger('click');
    });

    QUnit.test('should remove "open" class from all triggers when collapse is hidden', function(assert) {
        assert.expect(2);
        var done = assert.async();

        var $trigger0 = $('<a role="button" class="open" data-cfw="collapse" data-cfw-collapse-target="#test"></a>').appendTo('#qunit-fixture');
        var $trigger1 = $('<a role="button" class="open" data-cfw="collapse" data-cfw-collapse-target="#test"></a>').appendTo('#qunit-fixture');
        /* var $target = */ $('<div id="test" class="collapse"></div>').appendTo('#qunit-fixture');

        $trigger0
            .one('afterHide.cfw.collapse', function() {
                assert.ok(!$trigger0.hasClass('open'), 'trigger0 does not have open class');
                assert.ok(!$trigger1.hasClass('open'), 'trigger1 does not have open class');
                done();
            });

        $trigger0.CFW_Collapse();
        $trigger1.CFW_Collapse();
        $trigger0.trigger('click');
    });

    QUnit.test('should not hide a collapse when initialized with "show" option if already shown', function(assert) {
        assert.expect(0);
        var done = assert.async();

        var $trigger = $('<a role="button" data-cfw="collapse" data-cfw-collapse-target="#test"></a>').appendTo('#qunit-fixture');
        /* var $target = */ $('<div id="test" class="collapse"></div>').appendTo('#qunit-fixture');

        $trigger
            .one('afterHide.cfw.collapse', function() {
                assert.ok(false);
            });

        $trigger.CFW_Collapse('show');

        setTimeout(done, 10);
    });

    QUnit.test('should show a collapse when initialized with "show" option if not already shown', function(assert) {
        assert.expect(1);
        var done = assert.async();

        var $trigger = $('<a role="button" data-cfw="collapse" data-cfw-collapse-target="#test"></a>').appendTo('#qunit-fixture');
        /* var $target =  */ $('<div id="test" class="collapse"></div>').appendTo('#qunit-fixture');

        $trigger
            .one('afterShow.cfw.collapse', function() {
                assert.ok(true, 'show a previously-uninitialized hidden collapse when the "show" method is called');
            });

        $trigger.CFW_Collapse('show');

        setTimeout(done, 10);
    });

    QUnit.test('should not show a collapse when initialized with "hide" option if already hidden', function(assert) {
        assert.expect(0);
        var done = assert.async();

        var $trigger = $('<a role="button" data-cfw="collapse" data-cfw-collapse-target="#test"></a>').appendTo('#qunit-fixture');
        /* var $target = */ $('<div id="test" class="collapse"></div>').appendTo('#qunit-fixture');

        $trigger
            .one('afterShow.cfw.collapse', function() {
                assert.ok(false);
            });

        $trigger.CFW_Collapse('hide');

        setTimeout(done, 10);
    });

    QUnit.test('should hide a collapse when initialized with "hide" option if not already hidden', function(assert) {
        assert.expect(1);
        var done = assert.async();

        var $trigger = $('<a role="button" class="open" data-cfw="collapse" data-cfw-collapse-target="#test"></a>').appendTo('#qunit-fixture');
        /* var $target = */ $('<div id="test" class="collapse in"></div>').appendTo('#qunit-fixture');

        $trigger
            .one('afterHide.cfw.collapse', function() {
                assert.ok(true, 'hiding a previously-uninitialized shown collapse when the "hide" method is called');
            });

        $trigger.CFW_Collapse('hide');

        setTimeout(done, 10);
    });

    QUnit.test('should set aria-expanded="true" on all triggers when the collapse is shown', function(assert) {
        assert.expect(2);
        var done = assert.async();

        var $trigger0 = $('<a role="button" data-cfw="collapse" data-cfw-collapse-target="#test"></a>').appendTo('#qunit-fixture');
        var $trigger1 = $('<a role="button" data-cfw="collapse" data-cfw-collapse-target="#test"></a>').appendTo('#qunit-fixture');
        /* var $target = */ $('<div id="test" class="collapse"></div>').appendTo('#qunit-fixture');

        $trigger0
            .one('afterShow.cfw.collapse', function() {
                assert.strictEqual($trigger0.attr('aria-expanded'), 'true', 'aria-expanded on trigger0 is "true"');
                assert.strictEqual($trigger1.attr('aria-expanded'), 'true', 'aria-expanded on trigger1 is "true"');
                done();
            });

        $trigger0.CFW_Collapse();
        $trigger1.CFW_Collapse();
        $trigger0.trigger('click');
    });

    QUnit.test('should set aria-expanded="false" on all triggers when the collapse is hidden', function(assert) {
        assert.expect(2);
        var done = assert.async();

        var $trigger0 = $('<a role="button" class="open" data-cfw="collapse" data-cfw-collapse-target="#test"></a>').appendTo('#qunit-fixture');
        var $trigger1 = $('<a role="button" class="open" data-cfw="collapse" data-cfw-collapse-target="#test"></a>').appendTo('#qunit-fixture');
        /* var $target = */ $('<div id="test" class="collapse in"></div>').appendTo('#qunit-fixture');

        $trigger0
            .one('afterHide.cfw.collapse', function() {
                assert.strictEqual($trigger0.attr('aria-expanded'), 'false', 'aria-expanded on trigger0 is "true"');
                assert.strictEqual($trigger1.attr('aria-expanded'), 'false', 'aria-expanded on trigger1 is "true"');
                done();
            });

        $trigger0.CFW_Collapse();
        $trigger1.CFW_Collapse();
        $trigger0.trigger('click');
    });

    QUnit.test('should remove "in" class from target when collapse is hidden via manual invocation', function(assert) {
        assert.expect(1);
        var done = assert.async();

        var $trigger = $('<a role="button" class="open" data-cfw="collapse" data-cfw-collapse-target="#test"></a>').appendTo('#qunit-fixture');
        var $target = $('<div id="test" class="collapse in"></div>').appendTo('#qunit-fixture');

        $trigger
            .one('afterHide.cfw.collapse', function() {
                assert.ok(!$target.hasClass('in'));
                done();
            });

        $trigger.CFW_Collapse();
        $trigger.CFW_Collapse('hide');
    });

    QUnit.test('should add "in" class to target when collapse is shown via manual invocation', function(assert) {
        assert.expect(1);
        var done = assert.async();

        var $trigger = $('<a role="button" data-cfw="collapse" data-cfw-collapse-target="#test"></a>').appendTo('#qunit-fixture');
        var $target = $('<div id="test" class="collapse"></div>').appendTo('#qunit-fixture');

        $trigger
            .one('afterShow.cfw.collapse', function() {
                assert.ok($target.hasClass('in'));
                done();
            });

        $trigger.CFW_Collapse();
        $trigger.CFW_Collapse('show');
    });

    QUnit.test('should not prevent event for input', function(assert) {
        assert.expect(2);
        var done = assert.async();

        var $trigger = $('<input type="checkbox" data-cfw="collapse" data-cfw-collapse-target="#test"></a>').appendTo('#qunit-fixture');
        /* var $target = */ $('<div id="test" class="collapse"></div>').appendTo('#qunit-fixture');

        $trigger
            .one('afterShow.cfw.collapse', function() {
                assert.strictEqual($trigger.attr('aria-expanded'), 'true', 'aria-expanded on trigger is "true"');
                assert.ok($trigger.prop('checked'), 'trigger is checked');
                done();
            });

        $trigger
            .CFW_Collapse()
            .trigger('click');
    });

    QUnit.test('should prevent url change if click on nested anchor element', function(assert) {
        assert.expect(3);
        var done = assert.async();

        var $trigger = $('<a role="button" data-cfw="collapse" data-cfw-collapse-target="#test">' +
            '<span id="nested"></span>' +
            '</a>')
            .appendTo('#qunit-fixture');
        var $target = $('<div id="test" class="collapse"></div>').appendTo('#qunit-fixture');
        var $nestedTrigger = $('#nested');

        $trigger
            .one('afterShow.cfw.collapse', function() {
                assert.ok($target.hasClass('in'));
                $nestedTrigger.trigger('click');
            })
            .one('click', function(e) {
                assert.strictEqual(e.target, $nestedTrigger[0]);
                setTimeout(function() {
                    assert.ok(e.isDefaultPrevented());
                    done();
                }, 10);
            });

        $trigger.CFW_Collapse();
        $trigger.CFW_Collapse('show');
    });

    QUnit.test('should update focus when toggled with follow option enabled', function(assert) {
        assert.expect(2);
        var done = assert.async();
        var $trigger = $('<button type="button" data-cfw="collapse" data-cfw-collapse-target="#test" data-cfw-collapse-follow="true"></button>').appendTo('#qunit-fixture');
        var $target = $('<div id="test" class="collapse"></div>').appendTo('#qunit-fixture');
        $trigger.CFW_Collapse();
        $trigger
            .one('afterShow.cfw.collapse', function() {
                assert.ok($(document.activeElement).is($target), 'target element is focused');
                $trigger.CFW_Collapse('hide');
            })
            .one('afterHide.cfw.collapse', function() {
                assert.ok($(document.activeElement).is($trigger), 'trigger element is once again focused');
                done();
            });
        $trigger.CFW_Collapse('show');
    });

    QUnit.test('should update focus when shown and follow argument enabled', function(assert) {
        assert.expect(1);
        var done = assert.async();
        var $trigger = $('<button type="button" data-cfw="collapse" data-cfw-collapse-target="#test"></button>').appendTo('#qunit-fixture');
        var $target = $('<div id="test" class="collapse"></div>').appendTo('#qunit-fixture');
        $trigger.CFW_Collapse();
        $trigger
            .one('afterShow.cfw.collapse', function() {
                assert.ok($(document.activeElement).is($target), 'target element is focused');
                done();
            });
        $trigger.CFW_Collapse('show', true);
    });

    QUnit.test('should update focus when hidden and follow argument enabled', function(assert) {
        assert.expect(2);
        var done = assert.async();
        var $trigger = $('<button type="button" data-cfw="collapse" data-cfw-collapse-target="#test"></button>').appendTo('#qunit-fixture');
        $('<div id="test" class="collapse"></div>').appendTo('#qunit-fixture');
        $trigger.CFW_Collapse();
        $trigger
            .one('afterShow.cfw.collapse', function() {
                assert.ok(!$(document.activeElement).is($trigger), 'trigger element is not focused');
                $trigger.CFW_Collapse('hide', true);
            })
            .one('afterHide.cfw.collapse', function() {
                assert.ok($(document.activeElement).is($trigger), 'trigger element is focused');
                done();
            });
        $trigger.CFW_Collapse('show');
    });

    QUnit.test('should not update tabindex when shown with follow option enabled', function(assert) {
        assert.expect(1);
        var done = assert.async();
        var $trigger = $('<button type="button" data-cfw="collapse" data-cfw-collapse-target="#test" data-cfw-collapse-follow="true"></button>').appendTo('#qunit-fixture');
        var $target = $('<div id="test" class="collapse" tabindex="1000"></div>').appendTo('#qunit-fixture');
        $trigger.CFW_Collapse();
        $trigger
            .one('afterShow.cfw.collapse', function() {
                assert.strictEqual($target.attr('tabindex'), '1000', 'target tabindex not updated');
                done();
            });
        $trigger.CFW_Collapse('show');
    });
});
