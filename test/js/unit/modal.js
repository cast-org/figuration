$(function() {
    'use strict';

    QUnit.module('CFW_Modal');

    QUnit.test('should be defined on jquery object', function(assert) {
        assert.expect(1);
        assert.ok($(document.body).CFW_Modal, 'CFW_Modal method is defined');
    });

    QUnit.test('should return jquery collection containing the element', function(assert) {
        assert.expect(2);
        var $el = $('<div/>');
        var $col = $el.CFW_Modal();
        assert.ok($col instanceof $, 'returns jquery collection');
        assert.strictEqual($col[0], $el[0], 'collection contains element');
    });

    QUnit.test('should fire beforeShow event when show is called', function(assert) {
        assert.expect(1);
        var done = assert.async();

        var $trigger = $('<button type="button" class="btn" data-cfw="modal" data-cfw-modal-toggle="#modal">Modal</button>').appendTo('#qunit-fixture');
        var $target = $('<div class="modal" id="modal" />').appendTo('#qunit-fixture');

        $target.on('beforeShow.cfw.modal', function() {
                assert.ok(true, 'show event fired');
                done();
            });
        $trigger.CFW_Modal();
        $trigger.CFW_Modal('show');
    });

    QUnit.test('should not fire afterShow when beforeShow is prevented', function(assert) {
        assert.expect(1);
        var done = assert.async();

        var $trigger = $('<button type="button" class="btn" data-cfw="modal" data-cfw-modal-toggle="#modal">Modal</button>').appendTo('#qunit-fixture');
        var $target = $('<div class="modal" id="modal" />').appendTo('#qunit-fixture');

        $target
            .on('beforeShow.cfw.modal', function(e) {
                e.preventDefault();
                assert.ok(true, 'beforeShow event fired');
                done();
            })
            .on('afterShow.cfw.modal', function() {
                assert.ok(false, 'afterShow event fired');
            });

        $trigger.CFW_Modal();
        $trigger.CFW_Modal('show');
    });

    QUnit.test('should hide modal when hide is called', function(assert) {
        assert.expect(2);
        var done = assert.async();

        var $trigger = $('<button type="button" class="btn" data-cfw="modal" data-cfw-modal-toggle="#modal">Modal</button>').appendTo('#qunit-fixture');
        var $target = $('<div class="modal" id="modal" />').appendTo('#qunit-fixture');

        $target
            .on('afterShow.cfw.modal', function() {
                assert.ok($target.is(':visible'), 'modal visible');
                $trigger.CFW_Modal('hide');
            })
            .on('afterHide.cfw.modal', function() {
                assert.ok(!$target.is(':visible'), 'modal hidden');
                done();
            });
        $trigger.CFW_Modal();
        $trigger.CFW_Modal('show');
    });

    QUnit.test('should toggle when toggle is called', function(assert) {
        assert.expect(2);
        var done = assert.async();

        var $trigger = $('<button type="button" class="btn" data-cfw="modal" data-cfw-modal-toggle="#modal">Modal</button>').appendTo('#qunit-fixture');
        var $target = $('<div class="modal" id="modal" />').appendTo('#qunit-fixture');

        $target
            .on('afterShow.cfw.modal', function() {
                assert.ok($target.is(':visible'), 'modal visible');
                $trigger.CFW_Modal('toggle');
            })
            .on('afterHide.cfw.modal', function() {
                assert.ok(!$target.is(':visible'), 'modal hidden');
                done();
            });
        $trigger.CFW_Modal();
        $trigger.CFW_Modal('toggle');
    });

    QUnit.test('should hide modal when click [data-cfw-dismiss="modal"]', function(assert) {
        assert.expect(2);
        var done = assert.async();

        var $trigger = $('<button type="button" class="btn" data-cfw="modal" data-cfw-modal-toggle="#modal">Modal</button>').appendTo('#qunit-fixture');
        var $target = $('<div class="modal" id="modal"><span class="close" data-cfw-dismiss="modal" /></div>').appendTo('#qunit-fixture');

        $target
            .on('afterShow.cfw.modal', function() {
                assert.ok($target.is(':visible'), 'modal visible');
                $(this).find('.close').trigger('click');
            })
            .on('afterHide.cfw.modal', function() {
                assert.ok(!$target.is(':visible'), 'modal hidden');
                done();
            });

        $trigger.CFW_Modal();
        $trigger.CFW_Modal('show');
    });

    QUnit.test('should allow modal close with "backdrop:false"', function(assert) {
        assert.expect(2);
        var done = assert.async();

        var $trigger = $('<button type="button" class="btn" data-cfw="modal" data-cfw-modal-toggle="#modal" data-cfw-modal-backdrop="false">Modal</button>').appendTo('#qunit-fixture');
        var $target = $('<div class="modal" id="modal" />').appendTo('#qunit-fixture');

        $target
            .on('afterShow.cfw.modal', function() {
                assert.ok($target.is(':visible'), 'modal visible');
                $trigger.CFW_Modal('hide');
            })
            .on('afterHide.cfw.modal', function() {
                assert.ok(!$target.is(':visible'), 'modal hidden');
                done();
            });

        $trigger.CFW_Modal();
        $trigger.CFW_Modal('show');
    });

    QUnit.test('should close modal when escape key is pressed via keydown', function(assert) {
        assert.expect(2);
        var done = assert.async();

        var $trigger = $('<button type="button" class="btn" data-cfw="modal" data-cfw-modal-toggle="#modal">Modal</button>').appendTo('#qunit-fixture');
        var $target = $('<div class="modal" id="modal" />').appendTo('#qunit-fixture');

        $target
            .on('afterShow.cfw.modal', function() {
                assert.ok($target.is(':visible'), 'modal visible');
                $target.trigger($.Event('keydown', { which: 27 }));

                setTimeout(function() {
                    assert.ok(!$target.is(':visible'), 'modal hidden');
                    done();
                }, 0);
            });

        $trigger.CFW_Modal();
        $trigger.CFW_Modal('show');
    });

    QUnit.test('should not close modal when escape key is pressed via keyup', function(assert) {
        assert.expect(2);
        var done = assert.async();

        var $trigger = $('<button type="button" class="btn" data-cfw="modal" data-cfw-modal-toggle="#modal">Modal</button>').appendTo('#qunit-fixture');
        var $target = $('<div class="modal" id="modal" />').appendTo('#qunit-fixture');

        $target
            .on('afterShow.cfw.modal', function() {
                assert.ok($target.is(':visible'), 'modal visible');
                $target.trigger($.Event('keyup', { which: 27 }));

                setTimeout(function() {
                    assert.ok($target.is(':visible'), 'modal still visible');
                    done();
                }, 0);
            });

        $trigger.CFW_Modal();
        $trigger.CFW_Modal('show');
    });

    QUnit.test('should not close modal when clicking outside of modal-content with "backdrop:static"', function(assert) {
        assert.expect(1);
        var done = assert.async();

        var $trigger = $('<button type="button" class="btn" data-cfw="modal" data-cfw-modal-toggle="#modal" data-cfw-modal-backdrop="static">Modal</button>').appendTo('#qunit-fixture');
        var $target = $('<div class="modal" id="modal" />').appendTo('#qunit-fixture');

        $target
            .on('afterShow.cfw.modal', function() {
                $target.trigger('click');
                assert.ok($target.is(':visible'), 'modal still visible');
                done();
            });

        $trigger.CFW_Modal();
        $trigger.CFW_Modal('show');
    });

    QUnit.test('should not close modal when clicking outside of modal-content with "backdrop:false"', function(assert) {
        assert.expect(1);
        var done = assert.async();

        var $trigger = $('<button type="button" class="btn" data-cfw="modal" data-cfw-modal-toggle="#modal" data-cfw-modal-backdrop="false">Modal</button>').appendTo('#qunit-fixture');
        var $target = $('<div class="modal" id="modal" />').appendTo('#qunit-fixture');

        $target
            .on('afterShow.cfw.modal', function() {
                $target.trigger('click');
                assert.ok($target.is(':visible'), 'modal still visible');
                done();
            });

        $trigger.CFW_Modal();
        $trigger.CFW_Modal('show');
    });

    QUnit.test('should close modal when clicking outside of modal-content', function(assert) {
        assert.expect(2);
        var done = assert.async();

        var $trigger = $('<button type="button" class="btn" data-cfw="modal" data-cfw-modal-toggle="#modal">Modal</button>').appendTo('#qunit-fixture');
        var $target = $('<div class="modal" id="modal"><div class="contents"></div>').appendTo('#qunit-fixture');

        $target
            .on('afterShow.cfw.modal', function() {
                $('.contents').trigger('click');
                assert.ok($target.is(':visible'), 'modal visible');
                $target.trigger('click');
            })
            .on('afterHide.cfw.modal', function() {
                assert.ok(!$target.is(':visible'), 'modal hidden');
                done();
            });

        $trigger.CFW_Modal();
        $trigger.CFW_Modal('show');
    });

    QUnit.test('should trigger hide event once when clicking outside of modal-content', function(assert) {
        assert.expect(1);
        var done = assert.async();

        var triggered;

        var $trigger = $('<button type="button" class="btn" data-cfw="modal" data-cfw-modal-toggle="#modal">Modal</button>').appendTo('#qunit-fixture');
        var $target = $('<div class="modal" id="modal" />').appendTo('#qunit-fixture');

        $target
            .on('afterShow.cfw.modal', function() {
                triggered = 0;
                $target.trigger('click');
            })
            .on('afterHide.cfw.modal', function() {
                triggered += 1;
                assert.strictEqual(triggered, 1, 'modal hide triggered once');
                done();
            });

        $trigger.CFW_Modal();
        $trigger.CFW_Modal('show');
    });

    QUnit.test('should close reopened modal with [data-cfw-dismiss="modal"] click', function(assert) {
        assert.expect(2);
        var done = assert.async();

        var $trigger = $('<button type="button" class="btn" data-cfw="modal" data-cfw-modal-toggle="#modal">Modal</button>').appendTo('#qunit-fixture');
        var $target = $('<div class="modal" id="modal"><span class="close" data-cfw-dismiss="modal" /></div>').appendTo('#qunit-fixture');

        $target
            .one('afterShow.cfw.modal', function() {
                $(this).find('.close').trigger('click');
            })
            .one('afterHide.cfw.modal', function() {
                // after one open-close cycle
                assert.ok(!$target.is(':visible'), 'modal hidden');
                $(this)
                    .one('afterShow.cfw.modal', function() {
                        $(this).find('.close').trigger('click');
                    })
                    .one('afterHide.cfw.modal', function() {
                        assert.ok(!$target.is(':visible'), 'modal hidden');
                        done();
                    });
                $trigger.CFW_Modal('show');
            });

        $trigger.CFW_Modal();
        $trigger.CFW_Modal('show');
    });

    QUnit.test('should restore focus to trigger element when modal is hidden', function(assert) {
        assert.expect(1);
        var done = assert.async();

        var $trigger = $('<button type="button" class="btn" data-cfw="modal" data-cfw-modal-toggle="#modal">Modal</button>').appendTo('#qunit-fixture');
        var $target = $('<div class="modal" id="modal" />').appendTo('#qunit-fixture');

        $target
            .on('afterShow.cfw.modal', function() {
                $trigger.CFW_Modal('hide');
            })
            .on('afterHide.cfw.modal', function() {
                setTimeout(function() {
                    assert.ok($(document.activeElement).is($trigger), 'trigger element is once again focused');
                    done();
                }, 0);
            });

        $trigger.CFW_Modal();
        $trigger.CFW_Modal('show');
    });

    QUnit.test('should restore inline body padding after closing', function(assert) {
        assert.expect(2);
        var done = assert.async();
        var originalBodyPad = 0;
        var $body = $(document.body);

        $body.css('padding-right', originalBodyPad);

        var $trigger = $('<button type="button" class="btn" data-cfw="modal" data-cfw-modal-toggle="#modal">Modal</button>').appendTo('#qunit-fixture');
        var $target = $('<div class="modal" id="modal" />').appendTo('#qunit-fixture');

        $target
            .on('afterShow.cfw.modal', function() {
                $(this).CFW_Modal('hide');
            })
            .on('afterHide.cfw.modal', function() {
                var currentBodyPad = parseInt($body.css('padding-right'), 10);
                assert.notStrictEqual($body.attr('style'), '', 'body has non-empty style attribute');
                assert.strictEqual(currentBodyPad, originalBodyPad, 'original body padding was not changed');
                $body.removeAttr('style');
                done();
            });

        $trigger.CFW_Modal();
        $trigger.CFW_Modal('show');
    });

    QUnit.test('should ignore values set via CSS when trying to restore body padding after closing', function(assert) {
        assert.expect(1);
        var done = assert.async();
        var $body = $(document.body);
        var $style = $('<style>body { padding-right: 42px; }</style>').appendTo('head');

        var $trigger = $('<button type="button" class="btn" data-cfw="modal" data-cfw-modal-toggle="#modal">Modal</button>').appendTo('#qunit-fixture');
        var $target = $('<div class="modal" id="modal" />').appendTo('#qunit-fixture');

        $target
            .on('afterShow.cfw.modal', function() {
                $trigger.CFW_Modal('hide');
            })
            .on('afterHide.cfw.modal', function() {
                assert.ok(!$body.attr('style'), 'body does not have inline padding set');
                $style.remove();
                done();
            });

        $trigger.CFW_Modal();
        $trigger.CFW_Modal('show');
    });

    QUnit.test('should ignore other inline styles when trying to restore body padding after closing', function(assert) {
        assert.expect(2);
        var done = assert.async();
        var $body = $(document.body);
        var $style = $('<style>body { padding-right: 42px; }</style>').appendTo('head');

        $body.css('color', 'red');

        var $trigger = $('<button type="button" class="btn" data-cfw="modal" data-cfw-modal-toggle="#modal">Modal</button>').appendTo('#qunit-fixture');
        var $target = $('<div class="modal" id="modal" />').appendTo('#qunit-fixture');

        $target
            .on('afterShow.cfw.modal', function() {
                $trigger.CFW_Modal('hide');
            })
            .on('afterHide.cfw.modal', function() {
                assert.strictEqual($body[0].style.paddingRight, '', 'body does not have inline padding set');
                assert.strictEqual($body[0].style.color, 'red', 'body still has other inline styles set');
                $body.removeAttr('style');
                $style.remove();
                done();
            });

        $trigger.CFW_Modal();
        $trigger.CFW_Modal('show');
    });

    QUnit.test('should properly restore non-pixel inline body padding after closing', function(assert) {
        assert.expect(1);
        var done = assert.async();
        var $body = $(document.body);

        $body.css('padding-right', '5%');

        var $trigger = $('<button type="button" class="btn" data-cfw="modal" data-cfw-modal-toggle="#modal">Modal</button>').appendTo('#qunit-fixture');
        var $target = $('<div class="modal" id="modal" />').appendTo('#qunit-fixture');

        $target
            .on('afterShow.cfw.modal', function() {
                $(this).CFW_Modal('hide');
            })
            .on('afterHide.cfw.modal', function() {
                assert.strictEqual($body[0].style.paddingRight, '5%', 'body does not have inline padding set');
                $body.removeAttr('style');
                done();
            });

        $trigger.CFW_Modal();
        $trigger.CFW_Modal('show');
    });

});
