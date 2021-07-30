$(function() {
    'use strict';

    QUnit.module('CFW_Modal', {
        before: function() {
            // Simulate scrollbars in PhantomJS
            $('html').css('padding-right', '16px');
            // Add full-width fixed/sticky test element
            $('<style id="styleFixed">.fixed-top, .sticky-top { position: fixed; top: 0; right: 0; left: 0; z-index: 1020; }</style>').appendTo('head');
        },
        afterEach: function() {
            $('.modal, .modal-backdrop').remove();
            $(document.body)
                .removeAttr('style')
                .removeClass('modal-open');
            $('#qunit-fixture').empty();
        },
        after: function() {
            $('html').removeAttr('style');
            $('#styleFixed').remove();
        }
    });

    QUnit.test('should be defined on jquery object', function(assert) {
        assert.expect(1);
        assert.ok($(document.body).CFW_Modal, 'CFW_Modal method is defined');
    });

    QUnit.test('should return jquery collection containing the element', function(assert) {
        assert.expect(2);
        var $el = $('<div></div>');
        var $col = $el.CFW_Modal();
        assert.ok($col instanceof $, 'returns jquery collection');
        assert.strictEqual($col[0], $el[0], 'collection contains element');
    });

    QUnit.test('should fire beforeShow event when show is called', function(assert) {
        assert.expect(1);
        var done = assert.async();

        var $trigger = $('<button type="button" class="btn" data-cfw="modal" data-cfw-modal-target="#modal">Modal</button>').appendTo('#qunit-fixture');
        var $target = $('<div class="modal" id="modal"></div>').appendTo(document.body);

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

        var $trigger = $('<button type="button" class="btn" data-cfw="modal" data-cfw-modal-target="#modal">Modal</button>').appendTo('#qunit-fixture');
        var $target = $('<div class="modal" id="modal"></div>').appendTo(document.body);

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

    QUnit.test('should show modal when show is called (no transition)', function(assert) {
        assert.expect(1);
        var done = assert.async();

        var $trigger = $('<button type="button" class="btn" data-cfw="modal" data-cfw-modal-target="#modal">Modal</button>').appendTo('#qunit-fixture');
        var $target = $('<div class="modal" id="modal"></div>').css('transition', 'none').appendTo(document.body);

        $target
            .on('afterShow.cfw.modal', function() {
                assert.ok($target.is(':visible'), 'modal visible');
                done();
            });
        $trigger.CFW_Modal();
        $trigger.CFW_Modal('show');
    });

    QUnit.test('should show modal when show is called (with transition)', function(assert) {
        assert.expect(1);
        var done = assert.async();

        var $trigger = $('<button type="button" class="btn" data-cfw="modal" data-cfw-modal-target="#modal">Modal</button>').appendTo('#qunit-fixture');
        var $target = $('<div class="modal" id="modal"></div>').css('transition', '.05s').appendTo(document.body);

        $target
            .on('afterShow.cfw.modal', function() {
                assert.ok($target.is(':visible'), 'modal visible');
                done();
            });
        $trigger.CFW_Modal();
        $trigger.CFW_Modal('show');
    });

    QUnit.test('should hide modal when hide is called (no transition)', function(assert) {
        assert.expect(2);
        var done = assert.async();

        var $trigger = $('<button type="button" class="btn" data-cfw="modal" data-cfw-modal-target="#modal">Modal</button>').appendTo('#qunit-fixture');
        var $target = $('<div class="modal" id="modal"></div>').css('transition', 'none').appendTo(document.body);

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

    QUnit.test('should hide modal when hide is called (with transition)', function(assert) {
        assert.expect(2);
        var done = assert.async();

        var $trigger = $('<button type="button" class="btn" data-cfw="modal" data-cfw-modal-target="#modal">Modal</button>').appendTo('#qunit-fixture');
        var $target = $('<div class="modal" id="modal"></div>').css('transition', '.05s').appendTo(document.body);

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

        var $trigger = $('<button type="button" class="btn" data-cfw="modal" data-cfw-modal-target="#modal">Modal</button>').appendTo('#qunit-fixture');
        var $target = $('<div class="modal" id="modal"></div>').appendTo(document.body);

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

    QUnit.test('should hide modal when click [data-cfw-dismiss="modal"] inside modal element', function(assert) {
        assert.expect(2);
        var done = assert.async();

        var $trigger = $('<button type="button" class="btn" data-cfw="modal" data-cfw-modal-target="#modal">Modal</button>').appendTo('#qunit-fixture');
        var $target = $('<div class="modal" id="modal"><button id="XYZ" class="close" data-cfw-dismiss="modal"></button></div>').appendTo(document.body);

        $target
            .on('afterShow.cfw.modal', function() {
                assert.ok($target.is(':visible'), 'modal visible');
                document.querySelector('.close').click();
            })
            .on('afterHide.cfw.modal', function() {
                assert.ok(!$target.is(':visible'), 'modal hidden');
                done();
            });

        $trigger.CFW_Modal();
        $trigger.CFW_Modal('show');
    });

    QUnit.test('should hide modal when click [data-cfw-dismiss="modal"] outside modal element', function(assert) {
        assert.expect(2);
        var done = assert.async();

        var $trigger = $('<button type="button" class="btn" data-cfw="modal" data-cfw-modal-target="#modal">Modal</button>').appendTo('#qunit-fixture');
        var $target = $('<div class="modal" id="modal"></div>').appendTo(document.body);
        var $dismiss = $('<button class="close" data-cfw-dismiss="modal" data-cfw-modal-target="#modal"></button>').appendTo('#qunit-fixture');

        $target
            .on('afterShow.cfw.modal', function() {
                assert.ok($target.is(':visible'), 'modal visible');
                $dismiss.trigger('click');
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

        var $trigger = $('<button type="button" class="btn" data-cfw="modal" data-cfw-modal-target="#modal" data-cfw-modal-backdrop="false">Modal</button>').appendTo('#qunit-fixture');
        var $target = $('<div class="modal" id="modal"></div>').appendTo(document.body);

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

        var $trigger = $('<button type="button" class="btn" data-cfw="modal" data-cfw-modal-target="#modal">Modal</button>').appendTo('#qunit-fixture');
        var $target = $('<div class="modal" id="modal"></div>').appendTo(document.body);

        $target
            .on('afterShow.cfw.modal', function() {
                assert.ok($target.is(':visible'), 'modal visible');
                $target.trigger($.Event('keydown', {
                    which: 27 // Esc
                }));

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

        var $trigger = $('<button type="button" class="btn" data-cfw="modal" data-cfw-modal-target="#modal">Modal</button>').appendTo('#qunit-fixture');
        var $target = $('<div class="modal" id="modal"></div>').appendTo(document.body);

        $target
            .on('afterShow.cfw.modal', function() {
                assert.ok($target.is(':visible'), 'modal visible');
                $target.trigger($.Event('keyup', {
                    which: 27 // Esc
                }));

                setTimeout(function() {
                    assert.ok($target.is(':visible'), 'modal still visible');
                    done();
                }, 0);
            });

        $trigger.CFW_Modal();
        $trigger.CFW_Modal('show');
    });

    QUnit.test('should not close modal when escape key is pressed via keydown with "keyboard:false"', function(assert) {
        assert.expect(2);
        var done = assert.async();

        var $trigger = $('<button type="button" class="btn" data-cfw="modal" data-cfw-modal-target="#modal" data-cfw-modal-keyboard="false">Modal</button>').appendTo('#qunit-fixture');
        var $target = $('<div class="modal" id="modal"></div>').appendTo(document.body);

        $target
            .on('afterShow.cfw.modal', function() {
                assert.ok($target.is(':visible'), 'modal visible');
                $target.trigger($.Event('keydown', {
                    which: 27 // Esc
                }));

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

        var $trigger = $('<button type="button" class="btn" data-cfw="modal" data-cfw-modal-target="#modal" data-cfw-modal-backdrop="static">Modal</button>').appendTo('#qunit-fixture');
        var $target = $('<div class="modal" id="modal"></div>').appendTo(document.body);

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

        var $trigger = $('<button type="button" class="btn" data-cfw="modal" data-cfw-modal-target="#modal" data-cfw-modal-backdrop="false">Modal</button>').appendTo('#qunit-fixture');
        var $target = $('<div class="modal" id="modal"></div>').appendTo(document.body);

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

        var $trigger = $('<button type="button" class="btn" data-cfw="modal" data-cfw-modal-target="#modal">Modal</button>').appendTo('#qunit-fixture');
        var $target = $('<div class="modal" id="modal"><div class="contents"></div>').appendTo(document.body);

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

        var $trigger = $('<button type="button" class="btn" data-cfw="modal" data-cfw-modal-target="#modal">Modal</button>').appendTo('#qunit-fixture');
        var $target = $('<div class="modal" id="modal"></div>').appendTo(document.body);

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

        var $trigger = $('<button type="button" class="btn" data-cfw="modal" data-cfw-modal-target="#modal">Modal</button>').appendTo('#qunit-fixture');
        var $target = $('<div class="modal" id="modal"><button class="close" data-cfw-dismiss="modal"></button></div>').appendTo(document.body);

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

        var $trigger = $('<button type="button" class="btn" data-cfw="modal" data-cfw-modal-target="#modal">Modal</button>').appendTo('#qunit-fixture');
        var $target = $('<div class="modal" id="modal"></div>').appendTo(document.body);

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

    QUnit.test('should store original body padding in data-cfw.padding-dim before showing', function(assert) {
        assert.expect(2);
        var done = assert.async();
        var originalPadding = '0px';
        var $body = $(document.body);

        $body.css('padding-right', originalPadding);

        var $trigger = $('<button type="button" class="btn" data-cfw="modal" data-cfw-modal-target="#modal">Modal</button>').appendTo('#qunit-fixture');
        var $target = $('<div class="modal" id="modal"></div>').appendTo(document.body);

        $target
            .on('afterShow.cfw.modal', function() {
                assert.strictEqual($body.data('cfw.padding-dim'), originalPadding, 'stored original body padding in data attribute');
                $trigger.CFW_Modal('hide');
            })
            .on('afterHide.cfw.modal', function() {
                assert.strictEqual(typeof $body.data('cfw.padding-dim'), 'undefined', 'padding in data attribute has been cleared');
                $body.removeAttr('style');
                done();
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

        var $trigger = $('<button type="button" class="btn" data-cfw="modal" data-cfw-modal-target="#modal">Modal</button>').appendTo('#qunit-fixture');
        var $target = $('<div class="modal" id="modal"></div>').appendTo(document.body);

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

        var $trigger = $('<button type="button" class="btn" data-cfw="modal" data-cfw-modal-target="#modal">Modal</button>').appendTo('#qunit-fixture');
        var $target = $('<div class="modal" id="modal"></div>').appendTo(document.body);

        $target
            .on('afterShow.cfw.modal', function() {
                $trigger.CFW_Modal('hide');
            })
            .on('afterHide.cfw.modal', function() {
                assert.strictEqual($body[0].style.paddingRight, '', 'body does not have inline padding set');
                $style.remove();
                done();
            });

        $trigger.CFW_Modal();
        $trigger.CFW_Modal('show');
    });

    QUnit.test('should adjust the inline padding of fixed elements when opening and restore when closing', function(assert) {
        assert.expect(2);
        var done = assert.async();
        var $element = $('<div class="fixed-top"></div>').appendTo('#qunit-fixture');
        var originalPadding = $element.css('padding-right');

        var $trigger = $('<button type="button" class="btn" data-cfw="modal" data-cfw-modal-target="#modal">Modal</button>').appendTo('#qunit-fixture');
        var $target = $('<div class="modal" id="modal"></div>').appendTo(document.body);

        $target
            .on('afterShow.cfw.modal', function() {
                var expectedPadding = parseFloat(originalPadding) + $.CFW_measureScrollbar() + 'px';
                var currentPadding = $element.css('padding-right');
                assert.strictEqual(currentPadding, expectedPadding, 'fixed element padding should be adjusted while opening');
                $trigger.CFW_Modal('hide');
            })
            .on('afterHide.cfw.modal', function() {
                var currentPadding = $element.css('padding-right');
                assert.strictEqual(currentPadding, originalPadding, 'fixed element padding should be reset after closing');
                $element.remove();
                done();
            });

        $trigger.CFW_Modal();
        $trigger.CFW_Modal('show');
    });

    QUnit.test('should store inline padding of fixed elements in data-cfw.padding-dim before showing', function(assert) {
        assert.expect(2);
        var done = assert.async();
        var originalPadding = '0px';
        var $element = $('<div class="fixed-top"></div>').appendTo('#qunit-fixture');

        $element.css('padding-right', originalPadding);

        var $trigger = $('<button type="button" class="btn" data-cfw="modal" data-cfw-modal-target="#modal">Modal</button>').appendTo('#qunit-fixture');
        var $target = $('<div class="modal" id="modal"></div>').appendTo(document.body);

        $target
            .on('afterShow.cfw.modal', function() {
                assert.strictEqual($element.data('cfw.padding-dim'), originalPadding, 'stored original fixed element padding in data attribute');
                $trigger.CFW_Modal('hide');
            })
            .on('afterHide.cfw.modal', function() {
                assert.strictEqual(typeof $element.data('cfw.padding-dim'), 'undefined', 'padding in data attribute has been cleared');
                $element.remove();
                done();
            });

        $trigger.CFW_Modal();
        $trigger.CFW_Modal('show');
    });

    QUnit.test('should adjust the inline margin of sticky elements when opening and restore when closing', function(assert) {
        assert.expect(2);
        var done = assert.async();
        var $element = $('<div class="sticky-top"></div>').appendTo('#qunit-fixture');
        var originalMargin = $element.css('margin-right');

        var $trigger = $('<button type="button" class="btn" data-cfw="modal" data-cfw-modal-target="#modal">Modal</button>').appendTo('#qunit-fixture');
        var $target = $('<div class="modal" id="modal"></div>').appendTo(document.body);

        $target
            .on('afterShow.cfw.modal', function() {
                var expectedMargin = parseFloat(originalMargin) - $.CFW_measureScrollbar() + 'px';
                var currentMargin = $element.css('margin-right');
                assert.strictEqual(currentMargin, expectedMargin, 'sticky element margin should be adjusted while opening');
                $trigger.CFW_Modal('hide');
            })
            .on('afterHide.cfw.modal', function() {
                var currentMargin = $element.css('margin-right');
                assert.strictEqual(currentMargin, originalMargin, 'sticky element margin should be reset after closing');
                $element.remove();
                done();
            });

        $trigger.CFW_Modal();
        $trigger.CFW_Modal('show');
    });

    QUnit.test('should store inline margin of sticky elements in data-cfw.margin-dim before showing', function(assert) {
        assert.expect(2);
        var done = assert.async();
        var originalMargin = '0px';
        var $element = $('<div class="sticky-top"></div>').appendTo('#qunit-fixture');

        $element.css('margin-right', originalMargin);

        var $trigger = $('<button type="button" class="btn" data-cfw="modal" data-cfw-modal-target="#modal">Modal</button>').appendTo('#qunit-fixture');
        var $target = $('<div class="modal" id="modal"></div>').appendTo(document.body);

        $target
            .on('afterShow.cfw.modal', function() {
                assert.strictEqual($element.data('cfw.margin-dim'), originalMargin, 'stored original sticky element margin in data attribute');
                $trigger.CFW_Modal('hide');
            })
            .on('afterHide.cfw.modal', function() {
                assert.strictEqual(typeof $element.data('cfw.margin-dim'), 'undefined', 'margin in data attribute has been cleared');
                $element.remove();
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

        var $trigger = $('<button type="button" class="btn" data-cfw="modal" data-cfw-modal-target="#modal">Modal</button>').appendTo('#qunit-fixture');
        var $target = $('<div class="modal" id="modal"></div>').appendTo(document.body);

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

        var $trigger = $('<button type="button" class="btn" data-cfw="modal" data-cfw-modal-target="#modal">Modal</button>').appendTo('#qunit-fixture');
        var $target = $('<div class="modal" id="modal"></div>').appendTo(document.body);

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

    QUnit.test('should not adjust the inline body padding when it does not overflow', function(assert) {
        assert.expect(1);
        var done = assert.async();
        var $body = $(document.body);
        var originalPadding = $body.css('padding-right');

        // Hide scrollbars to prevent the body overflowing
        $body.css('overflow', 'hidden');        // real scrollbar (for in-browser testing)
        $('html').css('padding-right', '0px');  // simulated scrollbar (for PhantomJS)

        var $trigger = $('<button type="button" class="btn" data-cfw="modal" data-cfw-modal-target="#modal">Modal</button>').appendTo('#qunit-fixture');
        var $target = $('<div class="modal" id="modal"></div>').appendTo(document.body);

        $target
            .on('afterShow.cfw.modal', function() {
                var currentPadding = $body.css('padding-right');
                assert.strictEqual(currentPadding, originalPadding, 'body padding should not be adjusted');
                $(this).CFW_Modal('hide');

                // restore scrollbars
                $body
                    .css('overflow', '')
                    .removeAttr('style');
                $('html').css('padding-right', '16px');
                done();
            });

        $trigger.CFW_Modal();
        $trigger.CFW_Modal('show');
    });

    QUnit.test('should not adjust the inline body padding when it does not overflow on a scaled display', function(assert) {
        assert.expect(1);
        var done = assert.async();
        var $body = $(document.body);
        var originalPadding = $body.css('padding-right');

        // Hide scrollbars to prevent the body overflowing
        $body.css('overflow', 'hidden');
        // Remove body margin per Figuration default layout
        $body.css('margin', '0');
        // Add floating point padding to fake a scaled/zoomed display
        $('html').css('padding-right', '.45px');

        var $trigger = $('<button type="button" class="btn" data-cfw="modal" data-cfw-modal-target="#modal">Modal</button>').appendTo('#qunit-fixture');
        var $target = $('<div class="modal" id="modal"></div>').appendTo(document.body);

        $target
            .on('afterShow.cfw.modal', function() {
                var currentPadding = $body.css('padding-right');
                assert.strictEqual(currentPadding, originalPadding, 'body padding should not be adjusted');
                $(this).CFW_Modal('hide');

                // restore scrollbars
                $body
                    .css({
                        overflow: '',
                        margin: ''
                    })
                    .removeAttr('style');
                $('html').css('padding-right', '16px');
                done();
            });

        $trigger.CFW_Modal();
        $trigger.CFW_Modal('show');
    });

    QUnit.test('should not adjust the inline margin and padding of sticky and fixed elements when element do not have full width', function(assert) {
        assert.expect(2);
        var done = assert.async();
        var $element = $('<div class="sticky-top" style="margin-right: 0px; padding-right: 0px; width: calc(100vw - 50%)"></div>').appendTo('#qunit-fixture');
        var originalPadding = parseInt(window.getComputedStyle($element[0]).paddingRight, 10);
        var originalMargin = parseInt(window.getComputedStyle($element[0]).marginRight, 10);

        var $trigger = $('<button type="button" class="btn" data-cfw="modal" data-cfw-modal-target="#modal">Modal</button>').appendTo('#qunit-fixture');
        var $target = $('<div class="modal" id="modal"></div>').appendTo(document.body);

        $target
            .on('afterShow.cfw.modal', function() {
                var currentPadding = parseInt(window.getComputedStyle($element[0]).paddingRight, 10);
                var currentMargin = parseInt(window.getComputedStyle($element[0]).marginRight, 10);
                assert.strictEqual(currentPadding, originalPadding, 'sticky element padding should not be adjusted when shown');
                assert.strictEqual(currentMargin, originalMargin, 'sticky element margin should not be adjusted when shown');
                $element.remove();
                done();
            });

        $trigger.CFW_Modal();
        $trigger.CFW_Modal('show');
    });

    QUnit.test('should not parse target as html', function(assert) {
        assert.expect(1);
        var done = assert.async();

        var $toggleBtn = $('<button data-cfw="modal" data-cfw-modal-target="&lt;div id=&quot;modal&quot;&gt;&lt;div class=&quot;contents&quot;&lt;div&lt;div id=&quot;close&quot; data-cfw-dismiss=&quot;modal&quot;/&gt;&lt;/div&gt;&lt;/div&gt;"></button>')
            .appendTo('#qunit-fixture');

        $toggleBtn
            .CFW_Modal()
            .trigger('click');

        setTimeout(function() {
            assert.strictEqual($('#modal').length, 0, 'target has not been parsed and added to the document');
            done();
        }, 1);
    });

    QUnit.test('should not execute js from target', function(assert) {
        assert.expect(0);
        var done = assert.async();

        // This toggle button contains XSS payload in its data-target
        // Note: it uses the onerror handler of an img element to execute the js, because a simple script element does not work here
        //       a script element works in manual tests though, so here it is likely blocked by the qunit framework
        var $toggleBtn = $('<button data-cfw="modal" data-cfw-modal-target="&lt;div&gt;&lt;image src=&quot;missing.png&quot; onerror=&quot;$(&apos;#qunit-fixture button.control&apos;).trigger(&apos;click&apos;)&quot;&gt;&lt;/div&gt;"></button>')
            .appendTo('#qunit-fixture');

        // The XSS payload above does not have a closure over this function and cannot access the assert object directly
        // However, it can send a click event to the following control button, which will then fail the assert
        $('<button>')
            .addClass('control')
            .on('click', function() {
                assert.notOk(true, 'XSS payload is not executed as js');
            })
            .appendTo('#qunit-fixture');

        $toggleBtn
            .CFW_Modal()
            .trigger('click');

        setTimeout(done, 500);
    });

    QUnit.test('should not try to open a modal which is already visible', function(assert) {
        assert.expect(1);
        var done = assert.async();
        var count = 0;

        var $trigger = $('<button type="button" class="btn" data-cfw="modal" data-cfw-modal-target="#modal">Modal</button>').appendTo('#qunit-fixture');
        var $target = $('<div class="modal" id="modal"></div>').appendTo(document.body);

        $target
            .on('afterShow.cfw.modal', function() {
                count++;
            }).on('afterHide.cfw.modal', function() {
                assert.strictEqual(count, 1, 'show() runs only once');
                done();
            });

        $trigger
            .CFW_Modal()
            .CFW_Modal('show')
            .CFW_Modal('show')
            .CFW_Modal('hide');
    });

    QUnit.test('should enforce focus', function(assert) {
        assert.expect(1);
        var done = assert.async();

        var $trigger = $('<button type="button" class="btn" data-cfw="modal" data-cfw-modal-target="#modal">Modal</button>').appendTo('#qunit-fixture');
        var $target = $('<div class="modal" id="modal"><button class="close" data-cfw-dismiss="modal"></button></div>').appendTo(document.body);

        $target.one('afterShow.cfw.modal', function() {
            $(document.body).one('focusin', function() {
                assert.ok($(document.activeElement).is($target), 'target element is once again focused');
                done();
            });
            $(document.body).trigger('focusin');
        });

        $trigger
            .CFW_Modal()
            .CFW_Modal('show');
    });

    QUnit.test('should add aria-modal attribute when shown, remove it again when hidden', function(assert) {
        assert.expect(3);
        var done = assert.async();

        var $trigger = $('<button type="button" class="btn" data-cfw="modal" data-cfw-modal-target="#modal">Modal</button>').appendTo('#qunit-fixture');
        var $target = $('<div class="modal" id="modal"><button class="close" data-cfw-dismiss="modal"></button></div>').appendTo(document.body);

        $target
            .on('afterShow.cfw.modal', function() {
                assert.ok($('#modal').is('[aria-modal]'), 'aria-modal attribute added');
                assert.strictEqual($('#modal').attr('aria-modal'), 'true', 'correct aria-modal="true" added');
                $(this).CFW_Modal('hide');
            })
            .on('afterHide.cfw.modal', function() {
                assert.notOk($('#modal').is('[aria-modal]'), 'aria-modal attribute removed');
                done();
            });

        $trigger
            .CFW_Modal()
            .CFW_Modal('show');
    });

    QUnit.test('should set .modal scrollTop to 0', function(assert) {
        assert.expect(1);
        var done = assert.async();

        var $trigger = $('<button type="button" class="btn" data-cfw="modal" data-cfw-modal-target="#modal">Modal</button>').appendTo('#qunit-fixture');
        var $target = $('<div class="modal" id="modal"><div class="modal-dialog"></div></div>').appendTo(document.body);

        $target
            .on('afterShow.cfw.modal', function() {
                assert.strictEqual($('#modal').scrollTop(), 0, 'scrollTop is 0');
                done();
            });

        $trigger
            .CFW_Modal()
            .CFW_Modal('show');
    });

    QUnit.test('should set .modal-dialog scrollTop to 0', function(assert) {
        assert.expect(1);
        var done = assert.async();

        var $trigger = $('<button type="button" class="btn" data-cfw="modal" data-cfw-modal-target="#modal">Modal</button>').appendTo('#qunit-fixture');
        var $target = $('<div class="modal" id="modal"><div class="modal-dialog"></div></div>').appendTo(document.body);

        $target
            .on('afterShow.cfw.modal', function() {
                assert.strictEqual($('#modal .modal-dialog').scrollTop(), 0, 'scrollTop is 0');
                done();
            });

        $trigger
            .CFW_Modal()
            .CFW_Modal('show');
    });

    QUnit.test('should set .modal-body scrollTop to 0', function(assert) {
        assert.expect(1);
        var done = assert.async();

        var $trigger = $('<button type="button" class="btn" data-cfw="modal" data-cfw-modal-target="#modal">Modal</button>').appendTo('#qunit-fixture');
        var $target = $('<div class="modal" id="modal"><div class="modal-dialog"><div class="modal-content"><div class="modal-body"></div></div></div></div>').appendTo(document.body);

        $target
            .on('afterShow.cfw.modal', function() {
                assert.strictEqual($('#modal .modal-body').scrollTop(), 0, 'scrollTop is 0');
                done();
            });

        $trigger
            .CFW_Modal()
            .CFW_Modal('show');
    });

    QUnit.test('unlink method should detach events and data', function(assert) {
        assert.expect(7);
        var done = assert.async();

        var $trigger = $('<button type="button" class="btn" data-cfw="modal" data-cfw-modal-target="#modal">Modal</button>')
            .appendTo('#qunit-fixture')
            .on('custom.foo', $.noop);
        var $target = $('<div class="modal" id="modal"><div class="modal-dialog"><div class="modal-content"><div class="modal-body"></div></div></div></div>').appendTo(document.body);

        $trigger.CFW_Modal();

        assert.ok($trigger.data('cfw.modal'), 'trigger has data');
        assert.ok($._data($trigger[0], 'events').click, 'trigger has click event');
        assert.strictEqual($._data($trigger[0], 'events').custom[0].namespace, 'foo', 'trigger has extra custom.foo event');

        $target.one('afterShow.cfw.modal', function() {
            $(document).one('afterUnlink.cfw.modal', $target, function() {
                assert.ok(!$target.hasClass('in'), 'target is hidden');
                assert.ok(!$trigger.data('cfw.modal'), 'trigger does not have data');
                assert.strictEqual($._data($trigger[0], 'events').custom[0].namespace, 'foo', 'trigger still has custom.foo');
                assert.ok(!$._data($trigger[0], 'events').click, 'trigger does not have any events');
                done();
            });
            $trigger.CFW_Modal('unlink');
        });
        $trigger.CFW_Modal('show');
    });

    QUnit.test('unlink option should detach events and data after hide', function(assert) {
        assert.expect(7);
        var done = assert.async();

        var $trigger = $('<button type="button" class="btn" data-cfw="modal" data-cfw-modal-target="#modal">Modal</button>')
            .appendTo('#qunit-fixture')
            .on('custom.foo', $.noop);
        var $target = $('<div class="modal" id="modal"><div class="modal-dialog"><div class="modal-content"><div class="modal-body"></div></div></div></div>').appendTo(document.body);

        $trigger.CFW_Modal({
            unlink: true
        });

        assert.ok($trigger.data('cfw.modal'), 'trigger has data');
        assert.ok($._data($trigger[0], 'events').click, 'trigger has click event');
        assert.strictEqual($._data($trigger[0], 'events').custom[0].namespace, 'foo', 'trigger has extra custom.foo event');

        $target.one('afterShow.cfw.modal', function() {
            $(document).one('afterUnlink.cfw.modal', $target, function() {
                assert.ok(!$target.hasClass('in'), 'target is hidden');
                assert.ok(!$trigger.data('cfw.modal'), 'trigger does not have data');
                assert.strictEqual($._data($trigger[0], 'events').custom[0].namespace, 'foo', 'trigger still has custom.foo');
                assert.ok(!$._data($trigger[0], 'events').click, 'trigger does not have any events');
                done();
            });
            $trigger.CFW_Modal('hide');
        });
        $trigger.CFW_Modal('show');
    });

    QUnit.test('dispose method should unlink and remove modal', function(assert) {
        assert.expect(8);
        var done = assert.async();

        var $trigger = $('<button type="button" class="btn" data-cfw="modal" data-cfw-modal-target="#modal">Modal</button>')
            .appendTo('#qunit-fixture')
            .on('custom.foo', $.noop);
        var $target = $('<div class="modal" id="modal"><div class="modal-dialog"><div class="modal-content"><div class="modal-body"></div></div></div></div>').appendTo(document.body);

        $trigger.CFW_Modal();

        assert.ok($trigger.data('cfw.modal'), 'trigger has data');
        assert.ok($._data($trigger[0], 'events').click, 'trigger has click event');
        assert.strictEqual($._data($trigger[0], 'events').custom[0].namespace, 'foo', 'trigger has extra custom.foo event');

        $target.one('afterShow.cfw.modal', function() {
            $(document).one('dispose.cfw.modal', $target, function() {
                assert.ok(!$target.hasClass('in'), 'target is hidden');
                assert.ok(!$trigger.data('cfw.modal'), 'trigger does not have data');
                assert.strictEqual($._data($trigger[0], 'events').custom[0].namespace, 'foo', 'trigger still has custom.foo');
                assert.ok(!$._data($trigger[0], 'events').click, 'trigger does not have any events');
                // Slight delay since item removed after the event fires
                setTimeout(function() {
                    assert.strictEqual($('.modal').length, 0);
                }, 0);
                done();
            });
            $trigger.CFW_Modal('dispose');
        });
        $trigger.CFW_Modal('show');
    });

    QUnit.test('dispose option should unlink and remove modal after hide', function(assert) {
        assert.expect(8);
        var done = assert.async();

        var $trigger = $('<button type="button" class="btn" data-cfw="modal" data-cfw-modal-target="#modal">Modal</button>')
            .appendTo('#qunit-fixture')
            .on('custom.foo', $.noop);
        var $target = $('<div class="modal" id="modal"><div class="modal-dialog"><div class="modal-content"><div class="modal-body"></div></div></div></div>').appendTo(document.body);

        $trigger.CFW_Modal({
            dispose: true
        });

        assert.ok($trigger.data('cfw.modal'), 'trigger has data');
        assert.ok($._data($trigger[0], 'events').click, 'trigger has click event');
        assert.strictEqual($._data($trigger[0], 'events').custom[0].namespace, 'foo', 'trigger has extra custom.foo event');

        $target.one('afterShow.cfw.modal', function() {
            $(document).one('dispose.cfw.modal', $target, function() {
                assert.ok(!$target.hasClass('in'), 'target is hidden');
                assert.ok(!$trigger.data('cfw.modal'), 'trigger does not have data');
                assert.strictEqual($._data($trigger[0], 'events').custom[0].namespace, 'foo', 'trigger still has custom.foo');
                assert.ok(!$._data($trigger[0], 'events').click, 'trigger does not have any events');
                // Slight delay since item removed after the event fires
                setTimeout(function() {
                    assert.strictEqual($('.modal').length, 0);
                }, 0);
                done();
            });
            $trigger.CFW_Modal('hide');
        });
        $trigger.CFW_Modal('show');
    });

    QUnit.test('`chain` method should hide originating modal and open target modal', function(assert) {
        assert.expect(3);
        var done = assert.async();

        var $trigger = $('<button type="button" class="btn" data-cfw="modal" data-cfw-modal-target="#modal">Modal</button>').appendTo('#qunit-fixture');
        var $target = $('<div class="modal" id="modal"></div>').appendTo(document.body);
        var $trigger2 = $('<button type="button" class="btn" data-cfw="modal" data-cfw-modal-target="#modal2">Modal</button>').appendTo($target);
        var $target2 = $('<div class="modal" id="modal2"></div>').appendTo(document.body);

        $target
            .on('afterShow.cfw.modal', function() {
                assert.ok(true, 'show event fired');
                $('#modal').CFW_Modal('chain', '#modal2');
            })
            .on('afterHide.cfw.modal', function() {
                assert.ok($target.is(':hidden'), 'first modal hidden');
            });
        $target2
            .on('afterShow.cfw.modal', function() {
                assert.ok($target2.is(':visible'), 'second modal visible');
                done();
            });

        $trigger.CFW_Modal();
        $trigger2.CFW_Modal();
        $trigger.CFW_Modal('show');
    });
});
