$(function() {
    'use strict';

    var doc = document.documentElement;
    var body = document.body;

    QUnit.module('CFW_Offcanvas', {
        beforeEach: function() {
            $(window).scrollTop(0);
        },
        afterEach: function() {
            $('.offcanvas, .offcanvas-backdrop').remove();
            $('#qunit-fixture').empty();
            var attributes = ['data-cfw-padding-right', 'style'];
            attributes.forEach(function(attr) {
                doc.removeAttribute(attr);
                body.removeAttribute(attr);
            });
        }
    });

    QUnit.test('should be defined on jquery object', function(assert) {
        assert.expect(1);
        assert.ok($(document.body).CFW_Offcanvas, 'CFW_Offcanvas method is defined');
    });

    QUnit.test('should return jquery collection containing the element', function(assert) {
        assert.expect(2);
        var $el = $('<div></div>');
        var $col = $el.CFW_Offcanvas();
        assert.ok($col instanceof $, 'returns jquery collection');
        assert.strictEqual($col[0], $el[0], 'collection contains element');
    });

    QUnit.test('should add "aria-controls" attribute to trigger on init', function(assert) {
        assert.expect(1);
        var $trigger = $('<button data-cfw="offcanvas" data-cfw-offcanvas-target="#offcanvas">Offcanvas</button>').appendTo('#qunit-fixture');
        $('<div id="offcanvas" class="offcanvas"></div>').appendTo('#qunit-fixture');
        $trigger.CFW_Offcanvas();
        assert.ok($trigger[0].hasAttribute('aria-controls'));
    });

    QUnit.test('should add "tabindex" attribute to target on init', function(assert) {
        assert.expect(1);
        var $trigger = $('<button data-cfw="offcanvas" data-cfw-offcanvas-target="#offcanvas">Offcanvas</button>').appendTo('#qunit-fixture');
        var $target = $('<div id="offcanvas" class="offcanvas"></div>').appendTo('#qunit-fixture');
        $trigger.CFW_Offcanvas();
        assert.strictEqual($target.attr('tabindex'), '-1');
    });

    QUnit.test('should add "in" class to target when offcanvas is shown', function(assert) {
        assert.expect(1);
        var done = assert.async();
        var $trigger = $('<button data-cfw="offcanvas" data-cfw-offcanvas-target="#offcanvas">Offcanvas</button>').appendTo('#qunit-fixture');
        var $target = $('<div id="offcanvas" class="offcanvas"></div>').appendTo('#qunit-fixture');

        $trigger
            .one('afterShow.cfw.offcanvas', function() {
                assert.ok($target.hasClass('in'), 'has class "in"');
                done();
            });

        $trigger.CFW_Offcanvas();
        $trigger.trigger('click');
    });

    QUnit.test('should add aria attributes to target when offcanvas is shown', function(assert) {
        assert.expect(2);
        var done = assert.async();
        var $trigger = $('<button data-cfw="offcanvas" data-cfw-offcanvas-target="#offcanvas">Offcanvas</button>').appendTo('#qunit-fixture');
        var $target = $('<div id="offcanvas" class="offcanvas"></div>').appendTo('#qunit-fixture');

        $trigger
            .one('afterShow.cfw.offcanvas', function() {
                assert.strictEqual($target.attr('aria-modal'), 'true');
                assert.strictEqual($target.attr('role'), 'dialog');
                done();
            });

        $trigger.CFW_Offcanvas();
        $trigger.trigger('click');
    });

    QUnit.test('should show an offcanvas element (no transition)', function(assert) {
        assert.expect(1);
        var $trigger = $('<button data-cfw="offcanvas" data-cfw-offcanvas-target="#offcanvas">Offcanvas</button>').appendTo('#qunit-fixture');
        var $target = $('<div id="offcanvas" class="offcanvas"></div>').css('transition', 'none').appendTo('#qunit-fixture');
        $trigger.CFW_Offcanvas();
        $trigger.CFW_Offcanvas('show');
        assert.ok($target.hasClass('in'), 'has class "in"');
    });

    QUnit.test('should show an offcanvas element (with transition)', function(assert) {
        assert.expect(1);
        var done = assert.async();
        var $trigger = $('<button data-cfw="offcanvas" data-cfw-offcanvas-target="#offcanvas">Offcanvas</button>').appendTo('#qunit-fixture');
        var $target = $('<div id="offcanvas" class="offcanvas"></div>').css('transition', '.05s').appendTo('#qunit-fixture');
        $trigger.CFW_Offcanvas();
        $trigger
            .one('afterShow.cfw.offcanvas', function() {
                assert.ok($target.hasClass('in'), 'has class "in"');
                done();
            });
        $trigger.CFW_Offcanvas('show');
    });

    QUnit.test('should hide an offcanvas element (no transition)', function(assert) {
        assert.expect(2);
        var done = assert.async();
        var $trigger = $('<button data-cfw="offcanvas" data-cfw-offcanvas-target="#offcanvas">Offcanvas</button>').appendTo('#qunit-fixture');
        var $target = $('<div id="offcanvas" class="offcanvas"></div>').css('transition', 'none').appendTo('#qunit-fixture');
        $trigger.CFW_Offcanvas();
        $trigger
            .one('afterShow.cfw.offcanvas', function() {
                assert.ok($target.hasClass('in'), 'has class "in"');
                $trigger.CFW_Offcanvas('hide');
            })
            .one('afterHide.cfw.offcanvas', function() {
                assert.ok(!$target.hasClass('in'), 'does not have class "in"');
                done();
            })
            .CFW_Offcanvas('show');
    });

    QUnit.test('should hide an offcanvas element (with transition)', function(assert) {
        assert.expect(2);
        var done = assert.async();
        var $trigger = $('<button data-cfw="offcanvas" data-cfw-offcanvas-target="#offcanvas">Offcanvas</button>').appendTo('#qunit-fixture');
        var $target = $('<div id="offcanvas" class="offcanvas"></div>').css('transition', '.05s').appendTo('#qunit-fixture');
        $trigger.CFW_Offcanvas();
        $trigger
            .one('afterShow.cfw.offcanvas', function() {
                assert.ok($target.hasClass('in'), 'has class "in"');
                $trigger.CFW_Offcanvas('hide');
            })
            .one('afterHide.cfw.offcanvas', function() {
                assert.ok(!$target.hasClass('in'), 'does not have class "in"');
                done();
            })
            .CFW_Offcanvas('show');
    });

    QUnit.test('should hide offcanvas if dismiss control is clicked', function(assert) {
        assert.expect(2);
        var done = assert.async();
        var $target = $('<div id="offcanvas" class="offcanvas">' +
            '<button id="dismiss" data-cfw-dismiss="offcanvas">Dismiss</button>' +
            '</div>')
            .appendTo('#qunit-fixture');
        var $trigger = $('<button id="dismiss" data-cfw="offcanvas" data-cfw-offcanvas-target="#offcanvas">Trigger</button>')
            .appendTo('#qunit-fixture')
            .CFW_Offcanvas();

        $trigger
            .on('afterShow.cfw.offcanvas', function() {
                assert.ok($target.hasClass('in'), 'offcanvas shown');
                $('#dismiss').trigger('click');
            })
            .on('afterHide.cfw.offcanvas', function() {
                assert.notOk($target.hasClass('in'), 'offcanvas hidden');
                done();
            })
            .CFW_Offcanvas('show');
    });

    QUnit.test('should hide offcanvas if esc is pressed', function(assert) {
        assert.expect(2);
        var done = assert.async();
        var $trigger = $('<button data-cfw="offcanvas" data-cfw-offcanvas-target="#offcanvas">Offcanvas</button>').appendTo('#qunit-fixture');
        var $target = $('<div id="offcanvas" class="offcanvas"></div>').appendTo('#qunit-fixture');
        $trigger.CFW_Offcanvas();

        $trigger
            .on('afterShow.cfw.offcanvas', function() {
                assert.ok($target.hasClass('in'), 'offcanvas shown');
                $target.trigger($.Event('keydown', {
                    which: 27 // Esc
                }));
            })
            .on('afterHide.cfw.offcanvas', function() {
                assert.notOk($target.hasClass('in'), 'offcanvas hidden');
                done();
            })
            .CFW_Offcanvas('show');
    });

    QUnit.test('should not hide offcanvas if esc is pressed with `keyboard: false;`', function(assert) {
        assert.expect(2);
        var done = assert.async();
        var $trigger = $('<button data-cfw="offcanvas" data-cfw-offcanvas-target="#offcanvas">Offcanvas</button>').appendTo('#qunit-fixture');
        var $target = $('<div id="offcanvas" class="offcanvas"></div>').appendTo('#qunit-fixture');
        $trigger.CFW_Offcanvas({
            keyboard: false
        });

        $trigger
            .on('afterShow.cfw.offcanvas', function() {
                assert.ok($target.hasClass('in'), 'offcanvas shown');
                $target.trigger($.Event('keydown', {
                    which: 27 // Esc
                }));
                setTimeout(function() {
                    assert.ok($target.hasClass('in'), 'offcanvas still visible');
                    done();
                });
            })
            .CFW_Offcanvas('show');
    });

    QUnit.test('should remove aria attributes from target when offcanvas is hidden', function(assert) {
        assert.expect(2);
        var done = assert.async();
        var $trigger = $('<button data-cfw="offcanvas" data-cfw-offcanvas-target="#offcanvas">Offcanvas</button>').appendTo('#qunit-fixture');
        var $target = $('<div id="offcanvas" class="offcanvas"></div>').appendTo('#qunit-fixture');

        $trigger
            .one('afterShow.cfw.offcanvas', function() {
                $trigger.trigger('click');
            })
            .one('afterHide.cfw.offcanvas', function() {
                assert.notOk($target[0].hasAttribute('aria-modal'));
                assert.notOk($target[0].hasAttribute('role'));
                done();
            });

        $trigger.CFW_Offcanvas();
        $trigger.trigger('click');
    });

    QUnit.test('`scroll: true` should allow body scroll', function(assert) {
        assert.expect(1);
        var done = assert.async();
        var $trigger = $('<button data-cfw="offcanvas" data-cfw-offcanvas-target="#offcanvas">Offcanvas</button>').appendTo('#qunit-fixture');
        $('<div id="offcanvas" class="offcanvas"></div>').appendTo('#qunit-fixture');
        body.style.overflow = 'scroll';
        $trigger.CFW_Offcanvas({
            scroll: true
        });

        $trigger
            .on('afterShow.cfw.offcanvas', function() {
                assert.strictEqual(window.getComputedStyle(body).overflow, 'scroll');
                done();
            })
            .CFW_Offcanvas('show');
    });

    QUnit.test('`scroll: true` should not allow body scroll', function(assert) {
        assert.expect(1);
        var done = assert.async();
        var $trigger = $('<button data-cfw="offcanvas" data-cfw-offcanvas-target="#offcanvas">Offcanvas</button>').appendTo('#qunit-fixture');
        $('<div id="offcanvas" class="offcanvas"></div>').appendTo('#qunit-fixture');
        body.style.overflow = 'scroll';
        $trigger.CFW_Offcanvas({
            scroll: false
        });

        $trigger
            .on('afterShow.cfw.offcanvas', function() {
                assert.strictEqual(window.getComputedStyle(body).overflow, 'hidden');
                done();
            })
            .CFW_Offcanvas('show');
    });

    QUnit.test('should hide offcanvas if click on backdrop', function(assert) {
        assert.expect(3);
        var done = assert.async();
        var $trigger = $('<button data-cfw="offcanvas" data-cfw-offcanvas-target="#offcanvas">Offcanvas</button>').appendTo('#qunit-fixture');
        var $target = $('<div id="offcanvas" class="offcanvas"></div>').appendTo('#qunit-fixture');
        $trigger.CFW_Offcanvas({
            backdrop: true
        });

        $trigger
            .on('afterShow.cfw.offcanvas', function() {
                assert.ok($target.hasClass('in'), 'offcanvas shown');
                assert.ok($('.offcanvas-backdrop'), 1, 'offcanvas-backdrop created');
                $('.offcanvas-backdrop').trigger('mousedown');

                setTimeout(function() {
                    assert.notOk($target.hasClass('in'));
                    done();
                });
            })
            .CFW_Offcanvas('show');
    });

    QUnit.test('should not close offcanvas when clicking backdrop with "backdrop:static"', function(assert) {
        assert.expect(3);
        var done = assert.async();

        var $trigger = $('<button data-cfw="offcanvas" data-cfw-offcanvas-target="#offcanvas">Offcanvas</button>').appendTo('#qunit-fixture');
        var $target = $('<div id="offcanvas" class="offcanvas"></div>').appendTo('#qunit-fixture');
        $trigger.CFW_Offcanvas({
            backdrop: 'static'
        });

        $trigger
            .on('afterShow.cfw.offcanvas', function() {
                assert.ok($target.hasClass('in'), 'offcanvas shown');
                assert.ok($('.offcanvas-backdrop'), 1, 'offcanvas-backdrop created');
                $('.offcanvas-backdrop').trigger('mousedown');

                setTimeout(function() {
                    assert.ok($target.hasClass('in'));
                    done();
                });
            })
            .CFW_Offcanvas('show');
    });

    QUnit.test('`scroll: false` should auto focus on offcanvas element', function(assert) {
        assert.expect(1);
        var done = assert.async();
        var $trigger = $('<button data-cfw="offcanvas" data-cfw-offcanvas-target="#offcanvas">Offcanvas</button>').appendTo('#qunit-fixture');
        var $target = $('<div id="offcanvas" class="offcanvas"></div>').appendTo('#qunit-fixture');
        $trigger.CFW_Offcanvas({
            scroll: false
        });

        $trigger
            .on('afterShow.cfw.offcanvas', function() {
                assert.strictEqual(document.activeElement, $target[0]);
                done();
            })
            .CFW_Offcanvas('show');
    });

    QUnit.test('`scroll: false` should trap focus', function(assert) {
        assert.expect(1);
        var done = assert.async();
        var $trigger = $('<button data-cfw="offcanvas" data-cfw-offcanvas-target="#offcanvas">Offcanvas</button>').appendTo('#qunit-fixture');
        var $target = $('<div id="offcanvas" class="offcanvas"></div>').appendTo('#qunit-fixture');
        var $other = $('<a id="other" href="#">Other</a>').appendTo('#qunit-fixture');
        $trigger.CFW_Offcanvas({
            scroll: false
        });

        $trigger
            .on('afterShow.cfw.offcanvas', function() {
                $other[0].focus();

                setTimeout(function() {
                    assert.strictEqual(document.activeElement, $target[0]);
                    done();
                });
            })
            .CFW_Offcanvas('show');
    });

    QUnit.test('`scroll: true` should not auto focus on offcanvas element', function(assert) {
        assert.expect(1);
        var done = assert.async();
        var $trigger = $('<button data-cfw="offcanvas" data-cfw-offcanvas-target="#offcanvas">Offcanvas</button>').appendTo('#qunit-fixture');
        var $target = $('<div id="offcanvas" class="offcanvas"></div>').appendTo('#qunit-fixture');
        $trigger.CFW_Offcanvas({
            scroll: true
        });

        $trigger
            .on('afterShow.cfw.offcanvas', function() {
                assert.notEqual(document.activeElement, $target[0]);
                done();
            })
            .CFW_Offcanvas('show');
    });

    QUnit.test('`scroll: true` should not trap focus', function(assert) {
        assert.expect(1);
        var done = assert.async();
        var $trigger = $('<button data-cfw="offcanvas" data-cfw-offcanvas-target="#offcanvas">Offcanvas</button>').appendTo('#qunit-fixture');
        $('<div id="offcanvas" class="offcanvas"></div>').appendTo('#qunit-fixture');
        $trigger.CFW_Offcanvas({
            scroll: true
        });

        $trigger
            .on('afterShow.cfw.offcanvas', function() {
                $trigger[0].focus();

                setTimeout(function() {
                    assert.strictEqual(document.activeElement, $trigger[0]);
                    done();
                });
            })
            .CFW_Offcanvas('show');
    });

    QUnit.test('should deactivate focus trap after hide', function(assert) {
        assert.expect(3);
        var done = assert.async();
        var $trigger = $('<button data-cfw="offcanvas" data-cfw-offcanvas-target="#offcanvas">Offcanvas</button>').appendTo('#qunit-fixture');
        var $target = $('<div id="offcanvas" class="offcanvas"></div>').appendTo('#qunit-fixture');
        var $other = $('<a id="other" href="#">Other</a>').appendTo('#qunit-fixture');
        $trigger.CFW_Offcanvas();

        $trigger
            .on('afterShow.cfw.offcanvas', function() {
                assert.strictEqual(document.activeElement, $target[0]);
                $trigger.CFW_Offcanvas('hide');
            })
            .on('afterHide.cfw.offcanvas', function() {
                setTimeout(function() {
                    assert.strictEqual(document.activeElement, $trigger[0]);
                    $other[0].focus();

                    setTimeout(function() {
                        assert.strictEqual(document.activeElement, $other[0]);
                        done();
                    });
                });
            })
            .CFW_Offcanvas('show');
    });

    QUnit.test('should return focus to trigger on hide', function(assert) {
        assert.expect(2);
        var done = assert.async();
        var $trigger = $('<button data-cfw="offcanvas" data-cfw-offcanvas-target="#offcanvas">Offcanvas</button>').appendTo('#qunit-fixture');
        var $target = $('<div id="offcanvas" class="offcanvas"></div>').appendTo('#qunit-fixture');
        $trigger.CFW_Offcanvas();

        $trigger
            .on('afterShow.cfw.offcanvas', function() {
                assert.strictEqual(document.activeElement, $target[0]);
                $trigger.CFW_Offcanvas('hide');
            })
            .on('afterHide.cfw.offcanvas', function() {
                setTimeout(function() {
                    assert.strictEqual(document.activeElement, $trigger[0]);
                    done();
                });
            })
            .CFW_Offcanvas('show');
    });

    QUnit.test('should not return focus to trigger on hide if trigger is not visible', function(assert) {
        assert.expect(2);
        var done = assert.async();
        var $trigger = $('<button data-cfw="offcanvas" data-cfw-offcanvas-target="#offcanvas">Offcanvas</button>').appendTo('#qunit-fixture');
        var $target = $('<div id="offcanvas" class="offcanvas"></div>').appendTo('#qunit-fixture');
        $trigger.CFW_Offcanvas();

        $trigger
            .on('afterShow.cfw.offcanvas', function() {
                assert.strictEqual(document.activeElement, $target[0]);
                $trigger.css('display', 'none');
                $trigger.CFW_Offcanvas('hide');
            })
            .on('afterHide.cfw.offcanvas', function() {
                setTimeout(function() {
                    assert.strictEqual(document.activeElement, body);
                    done();
                });
            })
            .CFW_Offcanvas('show');
    });

    QUnit.test('should not fire afterShow event when beforeShow was prevented', function(assert) {
        assert.expect(1);
        var done = assert.async();
        var $trigger = $('<button data-cfw="offcanvas" data-cfw-offcanvas-target="#offcanvas">Offcanvas</button>').appendTo('#qunit-fixture');
        $('<div id="offcanvas" class="offcanvas"></div>').appendTo('#qunit-fixture');
        $trigger.CFW_Offcanvas();

        $trigger
            .on('beforeShow.cfw.offcanvas', function(e) {
                e.preventDefault();
                assert.ok(true, 'beforeShow event fired');
                done();
            })
            .on('afterShow.cfw.offcanvas', function() {
                assert.ok(false, 'afterShow event fired');
            })
            .CFW_Offcanvas('show');
    });

    QUnit.test('should not fire afterHide event when beforeHide was prevented', function(assert) {
        assert.expect(1);
        var done = assert.async();
        var $trigger = $('<button data-cfw="offcanvas" data-cfw-offcanvas-target="#offcanvas">Offcanvas</button>').appendTo('#qunit-fixture');
        $('<div id="offcanvas" class="offcanvas"></div>').appendTo('#qunit-fixture');
        $trigger.CFW_Offcanvas();

        $trigger
            .on('afterShow.cfw.offcanvas', function() {
                $(this).CFW_Offcanvas('hide');
            })
            .on('beforeHide.cfw.offcanvas', function(e) {
                e.preventDefault();
                assert.ok(true, 'beforeHide event fired');
                done();
            })
            .on('afterHide.cfw.offcanvas', function() {
                assert.ok(false, 'afterHide event fired');
            })
            .CFW_Offcanvas('show');
    });

    QUnit.test('does not prevent toggle when using input as trigger', function(assert) {
        assert.expect(1);
        var done = assert.async();
        var $trigger = $('<input data-cfw="offcanvas" data-cfw-offcanvas-target="#offcanvas" value="Offcanvas"></input>').appendTo('#qunit-fixture');
        var $target = $('<div id="offcanvas" class="offcanvas"></div>').appendTo('#qunit-fixture');

        $trigger
            .one('afterShow.cfw.offcanvas', function() {
                assert.ok($target.hasClass('in'), 'has class "in"');
                done();
            });

        $trigger.CFW_Offcanvas();
        $trigger.trigger('click');
    });

    QUnit.test('should not toggle on disabled element trigger', function(assert) {
        assert.expect(1);
        var $trigger = $('<button data-cfw="offcanvas" data-cfw-offcanvas-target="#offcanvas" disabled>Offcanvas</button>').appendTo('#qunit-fixture');
        var $target = $('<div id="offcanvas" class="offcanvas"></div>').appendTo('#qunit-fixture');

        $trigger.CFW_Offcanvas();
        $trigger.trigger('click');
        assert.notOk($target.hasClass('in'), 'has class "in"');
    });

    QUnit.test('should hide other open offcanvas if open when toggle is called', function(assert) {
        assert.expect(3);
        var done = assert.async();
        var $trigger1 = $('<button data-cfw="offcanvas" data-cfw-offcanvas-target="#offcanvas1">Offcanvas</button>').appendTo('#qunit-fixture');
        var $target1 = $('<div id="offcanvas1" class="offcanvas"></div>').appendTo('#qunit-fixture');
        var $trigger2 = $('<button data-cfw="offcanvas" data-cfw-offcanvas-target="#offcanvas2">Offcanvas</button>').appendTo('#qunit-fixture');
        var $target2 = $('<div id="offcanvas2" class="offcanvas"></div>').appendTo('#qunit-fixture');
        $trigger1.CFW_Offcanvas();
        $trigger2.CFW_Offcanvas();

        $trigger2
            .on('afterShow.cfw.offcanvas', function() {
                assert.ok($target2.hasClass('in'), 'offcanvas2 shown');
                done();
            });

        $trigger1
            .on('afterShow.cfw.offcanvas', function() {
                assert.ok($target1.hasClass('in'), 'offcanvas1 shown');
                $trigger2.trigger('click');
            })
            .on('afterHide.cfw.offcanvas', function() {
                assert.notOk($target1.hasClass('in'), 'offcanvas1 hidden');
            })
            .CFW_Offcanvas('show');
    });

    QUnit.test('`manual: true` should not add click toggle to trigger', function(assert) {
        assert.expect(1);
        var $trigger = $('<button data-cfw="offcanvas" data-cfw-offcanvas-target="#offcanvas">Offcanvas</button>').appendTo('#qunit-fixture');
        var $target = $('<div id="offcanvas" class="offcanvas"></div>').appendTo('#qunit-fixture');
        $trigger
            .CFW_Offcanvas({
                manual: true
            })
            .trigger('focus')
            .trigger('click');

        assert.ok(!$target.hasClass('in'), 'does not have class "in"');
    });

    QUnit.test('`manual: true` should still auto focus on offcanvas element', function(assert) {
        assert.expect(1);
        var done = assert.async();
        var $trigger = $('<button data-cfw="offcanvas" data-cfw-offcanvas-target="#offcanvas">Offcanvas</button>').appendTo('#qunit-fixture');
        var $target = $('<div id="offcanvas" class="offcanvas"></div>').appendTo('#qunit-fixture');
        $trigger.CFW_Offcanvas({
            manual: true
        });

        $trigger
            .on('afterShow.cfw.offcanvas', function() {
                assert.strictEqual(document.activeElement, $target[0]);
                done();
            })
            .CFW_Offcanvas('show');
    });


    QUnit.test('`manual: true` should not return focus to trigger on close', function(assert) {
        assert.expect(2);
        var done = assert.async();
        var $trigger = $('<button data-cfw="offcanvas" data-cfw-offcanvas-target="#offcanvas">Offcanvas</button>').appendTo('#qunit-fixture');
        var $target = $('<div id="offcanvas" class="offcanvas"></div>').appendTo('#qunit-fixture');
        $trigger.CFW_Offcanvas({
            manual: true
        });

        $trigger
            .on('afterShow.cfw.offcanvas', function() {
                setTimeout(function() {
                    assert.strictEqual(document.activeElement, $target[0], 'offcanvas is focused');
                    $trigger.CFW_Offcanvas('hide');
                });
            })
            .on('afterHide.cfw.offcanvas', function() {
                setTimeout(function() {
                    assert.notEqual(document.activeElement, $trigger[0], 'trigger is not focused');
                    done();
                });
            });

        $trigger.CFW_Offcanvas('show');
    });
});
