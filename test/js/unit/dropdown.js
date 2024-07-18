$(function() {
    'use strict';

    QUnit.module('CFW_Dropdown', {
        beforeEach: function() {
            $(window).scrollTop(0);
        },
        afterEach: function() {
            $('#qunit-fixture').empty();
        }
    });

    QUnit.test('should be defined on jquery object', function(assert) {
        assert.expect(1);
        assert.ok($(document.body).CFW_Dropdown, 'CFW_Dropdown method is defined');
    });

    QUnit.test('should return jquery collection containing the element', function(assert) {
        assert.expect(2);
        var $el = $('<div></div>');
        var $col = $el.CFW_Dropdown();
        assert.ok($col instanceof $, 'returns jquery collection');
        assert.strictEqual($col[0], $el[0], 'collection contains element');
    });

    QUnit.test('should not open dropdown if trigger is disabled via attribute', function(assert) {
        assert.expect(2);

        var dropdownHTML = '<div class="dropdown">' +
            '<button id="dropdown-trigger" type="button" class="btn" data-cfw="dropdown" disabled>Dropdown</button>' +
            '<ul id="dropdown-menu" class="dropdown-menu">' +
            '<li><a href="#">Menu link</a></li>' +
            '</ul>' +
            '</div>';
        var $dropdown = $(dropdownHTML).appendTo('#qunit-fixture').find('[data-cfw="dropdown"]');
        $dropdown.CFW_Dropdown();
        $dropdown.trigger('click');

        assert.ok(!$('#dropdown-trigger').hasClass('open'), '"open" class not added to trigger on click');
        assert.ok(!$('#dropdown-menu').hasClass('open'), '"open" class not added to target on click');
    });

    QUnit.test('should not open dropdown if trigger is disabled via "disabled" class', function(assert) {
        assert.expect(2);

        var dropdownHTML = '<div class="dropdown">' +
            '<a id="dropdown-trigger" href="#" role="button" class="btn disabled" data-cfw="dropdown">Dropdown</a>' +
            '<ul id="dropdown-menu" class="dropdown-menu">' +
            '<li><a href="#">Menu link</a></li>' +
            '</ul>' +
            '</div>';
        var $dropdown = $(dropdownHTML).appendTo('#qunit-fixture').find('[data-cfw="dropdown"]');
        $dropdown.CFW_Dropdown();
        $dropdown.trigger('click');

        assert.ok(!$('#dropdown-trigger').hasClass('open'), '"open" class not added to trigger on click');
        assert.ok(!$('#dropdown-menu').hasClass('open'), '"open" class not added to target on click');
    });

    QUnit.test('should set aria-expanded="true" on trigger when dropdown menu is shown', function(assert) {
        assert.expect(1);

        var dropdownHTML = '<div class="dropdown">' +
            '<button type="button" class="btn" data-cfw="dropdown">Dropdown</button>' +
            '<ul class="dropdown-menu">' +
            '<li><a href="#">Menu link</a></li>' +
            '</ul>' +
            '</div>';
        var $dropdown = $(dropdownHTML).appendTo('#qunit-fixture').find('[data-cfw="dropdown"]');
        $dropdown.CFW_Dropdown();
        $dropdown.trigger('click');

        assert.strictEqual($dropdown.attr('aria-expanded'), 'true', 'aria-expanded is set to string "true" on click');
    });

    QUnit.test('should set aria-expanded="false" on trigger when dropdown menu is hidden', function(assert) {
        assert.expect(1);
        var done = assert.async();
        var dropdownHTML = '<div class="dropdown">' +
            '<button type="button" class="btn" data-cfw="dropdown">Dropdown</button>' +
            '<ul class="dropdown-menu">' +
            '<li><a href="#">Menu link</a></li>' +
            '</ul>' +
            '</div>';
        var $dropdown = $(dropdownHTML).appendTo('#qunit-fixture').find('[data-cfw="dropdown"]');
        $dropdown.CFW_Dropdown();
        $dropdown.trigger('click');

        $dropdown
            .on('afterHide.cfw.dropdown', function() {
                assert.strictEqual($dropdown.attr('aria-expanded'), 'false', 'aria-expanded is set to string "false" on hide');
                done();
            });

        $dropdown.trigger('click');
        $(document.body).trigger('click');
    });

    QUnit.test('should add "open" class to menu if clicked', function(assert) {
        assert.expect(2);
        var dropdownHTML = '<div class="dropdown">' +
            '<button id="dropdown-trigger" type="button" class="btn" data-cfw="dropdown">Dropdown</button>' +
            '<ul id="dropdown-menu" class="dropdown-menu">' +
            '<li><a href="#">Menu link</a></li>' +
            '</ul>' +
            '</div>';
        var $dropdown = $(dropdownHTML).appendTo('#qunit-fixture').find('[data-cfw="dropdown"]');
        $dropdown.CFW_Dropdown();
        $dropdown.trigger('click');

        assert.ok($('#dropdown-trigger').hasClass('open'), '"open" class added to trigger on click');
        assert.ok($('#dropdown-menu').hasClass('open'), '"open" class added to menu on click');
    });

    QUnit.test('should test if element has a # before assuming it\'s a selector', function(assert) {
        assert.expect(1);
        var dropdownHTML = '<div class="dropdown">' +
            '<a id="dropdown-trigger" href="/foo/" role="button" class="btn" data-cfw="dropdown">Dropdown</a>' +
            '<ul id="dropdown-menu" class="dropdown-menu">' +
            '<li><a href="#">Menu link</a></li>' +
            '</ul>' +
            '</div>';
        var $dropdown = $(dropdownHTML).appendTo('#qunit-fixture').find('[data-cfw="dropdown"]');
        $dropdown.CFW_Dropdown();
        $dropdown.trigger('click');

        assert.ok($('#dropdown-menu').hasClass('open'), '"open" class added on click');
    });

    QUnit.test('should remove "open" class if body is clicked', function(assert) {
        assert.expect(4);
        var dropdownHTML = '<div class="dropdown">' +
            '<button id="dropdown-trigger" type="button" class="btn" data-cfw="dropdown">Dropdown</button>' +
            '<ul id="dropdown-menu" class="dropdown-menu">' +
            '<li><a href="#">Menu link</a></li>' +
            '</ul>' +
            '</div>';
        var $dropdown = $(dropdownHTML).appendTo('#qunit-fixture').find('[data-cfw="dropdown"]');
        $dropdown.CFW_Dropdown();
        $dropdown.trigger('click');

        assert.ok($('#dropdown-trigger').hasClass('open'), '"open" class added to trigger on click');
        assert.ok($('#dropdown-menu').hasClass('open'), '"open" class added to menu on click');
        $(document.body).trigger('click');
        assert.ok(!$('#dropdown-trigger').hasClass('open'), '"open" class removed from trigger');
        assert.ok(!$('#dropdown-menu').hasClass('open'), '"open" class removed from menu');
    });

    QUnit.test('should remove "open" class if body is focused', function(assert) {
        assert.expect(4);
        var dropdownHTML = '<div class="dropdown">' +
            '<button id="dropdown-trigger" type="button" class="btn" data-cfw="dropdown">Dropdown</button>' +
            '<ul id="dropdown-menu" class="dropdown-menu">' +
            '<li><a href="#">Menu link</a></li>' +
            '</ul>' +
            '</div>';
        var $dropdown = $(dropdownHTML).appendTo('#qunit-fixture').find('[data-cfw="dropdown"]');
        $dropdown.CFW_Dropdown();
        $dropdown.trigger('click');

        assert.ok($('#dropdown-trigger').hasClass('open'), '"open" class added to trigger on click');
        assert.ok($('#dropdown-menu').hasClass('open'), '"open" class added to menu on click');
        $(document.body).trigger('focusin');
        assert.ok(!$('#dropdown-trigger').hasClass('open'), '"open" class removed from trigger');
        assert.ok(!$('#dropdown-menu').hasClass('open'), '"open" class removed from menu');
    });

    // Cannot reliably emulate spacebar press on true buttons since browsers can use a 'stack' of events
    // Spacebar on a button event order could be: `keydown, kepress, keyup, click`
    // this may not be the correct order for all browsers

    QUnit.test('should toggle "open" class if spacebar used on role="button"', function(assert) {
        assert.expect(4);
        var done = assert.async();
        var dropdownHTML = '<div class="dropdown">' +
            '<a id="dropdown-trigger" role="button" class="btn" data-cfw="dropdown">Dropdown</a>' +
            '<ul id="dropdown-menu" class="dropdown-menu">' +
            '<li><a href="#">Menu link</a></li>' +
            '</ul>' +
            '</div>';
        var $dropdown = $(dropdownHTML).appendTo('#qunit-fixture').find('[data-cfw="dropdown"]');
        var eventSpace = $.Event('keydown', {
            which: 32
        });
        $dropdown.CFW_Dropdown();

        $dropdown
            .on('afterShow.cfw.dropdown', function() {
                assert.ok($('#dropdown-trigger').hasClass('open'), '"open" class added to trigger on spacebar');
                assert.ok($('#dropdown-menu').hasClass('open'), '"open" class added to menu on spacebar');
                // Need new event
                var eventSpace = $.Event('keydown', {
                    which: 32
                });
                $dropdown.trigger(eventSpace);
            })
            .on('afterHide.cfw.dropdown', function() {
                assert.ok(!$('#dropdown-trigger').hasClass('open'), '"open" class on trigger removed');
                assert.ok(!$('#dropdown-menu').hasClass('open'), '"open" class on menu removed');
                done();
            })
            .trigger(eventSpace);
    });

    QUnit.test('should remove "open" class if body is clicked, with multiple dropdowns', function(assert) {
        assert.expect(7);
        var dropdownHTML = '<div class="dropdown">' +
            '<button type="button" class="btn" data-cfw="dropdown">Dropdown</button>' +
            '<ul class="dropdown-menu">' +
            '<li><a href="#">Menu link</a></li>' +
            '</ul>' +
            '</div>';
        $(dropdownHTML).appendTo('#qunit-fixture');
        $(dropdownHTML).appendTo('#qunit-fixture');

        var $dropdowns = $('#qunit-fixture').find('[data-cfw="dropdown"]').CFW_Dropdown();
        var $first = $dropdowns.first();
        var $last = $dropdowns.last();

        assert.strictEqual($dropdowns.length, 2, 'two dropdowns');
        $first.trigger('click');
        assert.strictEqual($first.hasClass('open'), true, '"open" class added on click');
        assert.strictEqual($('#qunit-fixture .dropdown-menu.open').length, 1, 'only one dropdown is open');
        $(document.body).trigger('click');
        assert.strictEqual($('#qunit-fixture .dropdown-menu.open').length, 0, '"open" class removed');

        $last.trigger('click');
        assert.strictEqual($last.hasClass('open'), true, '"open" class added on click');
        assert.strictEqual($('#qunit-fixture .dropdown-menu.open').length, 1, 'only one dropdown is open');
        $(document.body).trigger('click');
        assert.strictEqual($('#qunit-fixture .dropdown-menu.open').length, 0, '"open" class removed');
    });

    QUnit.test('should remove "open" class if body is focused, with multiple dropdowns', function(assert) {
        assert.expect(7);
        var dropdownHTML = '<div class="dropdown">' +
            '<button type="button" class="btn" data-cfw="dropdown">Dropdown</button>' +
            '<ul class="dropdown-menu">' +
            '<li><a href="#">Menu link</a></li>' +
            '</ul>' +
            '</div>';
        $(dropdownHTML).appendTo('#qunit-fixture');
        $(dropdownHTML).appendTo('#qunit-fixture');

        var $dropdowns = $('#qunit-fixture').find('[data-cfw="dropdown"]').CFW_Dropdown();
        var $first = $dropdowns.first();
        var $last = $dropdowns.last();

        assert.strictEqual($dropdowns.length, 2, 'two dropdowns');

        $first.trigger('click');
        assert.strictEqual($first.hasClass('open'), true, '"open" class added on click');
        assert.strictEqual($('#qunit-fixture .dropdown-menu.open').length, 1, 'only one dropdown is open');
        $(document.body).trigger('focusin');
        assert.strictEqual($('#qunit-fixture .dropdown-menu.open').length, 0, '"open" class removed');

        $last.trigger('click');
        assert.strictEqual($last.hasClass('open'), true, '"open" class added on click');
        assert.strictEqual($('#qunit-fixture .dropdown-menu.open').length, 1, 'only one dropdown is open');
        $(document.body).trigger('focusin');
        assert.strictEqual($('#qunit-fixture .dropdown-menu.open').length, 0, '"open" class removed');
    });

    QUnit.test('should fire beforeShow and beforeHide events', function(assert) {
        assert.expect(2);
        var done = assert.async();
        var dropdownHTML = '<div class="dropdown">' +
            '<button type="button" class="btn" data-cfw="dropdown">Dropdown</button>' +
            '<ul class="dropdown-menu">' +
            '<li><a href="#">Menu link</a></li>' +
            '</ul>' +
            '</div>';
        var $dropdown = $(dropdownHTML).appendTo('#qunit-fixture').find('[data-cfw="dropdown"]');
        $dropdown.CFW_Dropdown();

        $dropdown
            .on('beforeShow.cfw.dropdown', function() {
                assert.ok(true, 'beforeShow was fired');
            })
            .on('beforeHide.cfw.dropdown', function() {
                assert.ok(true, 'beforeHide was fired');
                done();
            });

        $dropdown.trigger('click');
        $(document.body).trigger('click');
    });

    QUnit.test('should fire afterShow and afterhide events', function(assert) {
        assert.expect(2);
        var done = assert.async();
        var dropdownHTML = '<div class="dropdown">' +
            '<button type="button" class="btn" data-cfw="dropdown">Dropdown</button>' +
            '<ul class="dropdown-menu">' +
            '<li><a href="#">Menu link</a></li>' +
            '</ul>' +
            '</div>';
        var $dropdown = $(dropdownHTML).appendTo('#qunit-fixture').find('[data-cfw="dropdown"]');
        $dropdown.CFW_Dropdown();

        $dropdown
            .on('afterShow.cfw.dropdown', function() {
                assert.ok(true, 'afterShow was fired');
            })
            .on('afterHide.cfw.dropdown', function() {
                assert.ok(true, 'afterHide was fired');
                done();
            });

        $dropdown.trigger('click');
        $(document.body).trigger('click');
    });

    QUnit.test('should skip disabled element when using keyboard navigation', function(assert) {
        assert.expect(3);
        var dropdownHTML = '<div class="dropdown">' +
            '<button type="button" class="btn" data-cfw="dropdown">Dropdown</button>' +
            '<ul class="dropdown-menu">' +
            '<li><button class="dropdown-item" disabled>Disabled button</button></li>' +
            '<li><a href="#" class="disabled">Disabled link</a></li>' +
            '<li><a href="#" id="focusable">Menu link</a></li>' +
            '</ul>' +
            '</div>';
        var $dropdown = $(dropdownHTML).appendTo('#qunit-fixture').find('[data-cfw="dropdown"]');
        $dropdown.CFW_Dropdown();
        $dropdown.trigger('click');

        $dropdown.trigger($.Event('keydown', {
            which: 40 // Down
        }));

        assert.ok(!$(document.activeElement).is(':disabled'), ':disabled is not focused');
        assert.ok(!$(document.activeElement).is('.disabled'), '.disabled is not focused');
        assert.ok($(document.activeElement).is('#focusable'), '#focusable is focused');
    });

    QUnit.test('should not focus trigger when click occurs outside menu', function(assert) {
        assert.expect(4);
        var done = assert.async();

        var dropdownHTML = '<div class="dropdown">' +
            '<button type="button" class="btn" data-cfw="dropdown">Dropdown</button>' +
            '<ul class="dropdown-menu">' +
            '<li><a href="#">Menu link</a></li>' +
            '</ul>' +
            '</div>';
        var $dropdown = $(dropdownHTML).appendTo('#qunit-fixture').find('[data-cfw="dropdown"]');
        var $target = $('<a href="#">Target link</a>').appendTo('#qunit-fixture');

        $dropdown
            .on('afterShow.cfw.dropdown', function() {
                assert.strictEqual($dropdown.hasClass('open'), true, 'menu is open');
                assert.strictEqual($dropdown[0], document.activeElement, 'trigger is focused');
                $target.trigger('focus');
                $target.trigger('click');
            })
            .on('afterHide.cfw.dropdown', function() {
                assert.strictEqual($dropdown.hasClass('open'), false, 'menu is closed');
                assert.notStrictEqual($dropdown[0], document.activeElement, 'trigger is not focused');
                done();
            })
            .CFW_Dropdown()
            .trigger('focus')
            .trigger('click');
    });

    QUnit.test('should ignore keyboard events in <input>, <textarea>, and <select>', function(assert) {
        assert.expect(7);
        var done = assert.async();
        var dropdownHTML = '<div class="dropdown">' +
            '<button type="button" class="btn" data-cfw="dropdown">Dropdown</button>' +
            '<ul class="dropdown-menu">' +
            '<li><input id="input"></li>' +
            '<li><textarea id="textarea"></textarea></a></li>' +
            '<li><select id="select"><option>one</option><option>two</option></select></a></li>' +
            '</ul>' +
            '</div>';
        var $dropdown = $(dropdownHTML).appendTo('#qunit-fixture').find('[data-cfw="dropdown"]');
        $dropdown.CFW_Dropdown();

        var $input = $('#input');
        var $textarea = $('#textarea');
        var $select = $('#select');

        $dropdown
            .on('afterShow.cfw.dropdown', function() {
                assert.ok(true, 'menu opened');

                $input.trigger('focus');
                assert.ok($(document.activeElement).is($input), 'input focused');
                $input.trigger($.Event('keydown', {
                    which: 40 // Down
                }));
                assert.ok($(document.activeElement).is($input), 'input still focused');

                $textarea.trigger('focus');
                assert.ok($(document.activeElement).is($textarea), 'textarea focused');
                $textarea.trigger($.Event('keydown', {
                    which: 38 // Up
                }));
                assert.ok($(document.activeElement).is($textarea), 'textarea still focused');

                $select.trigger('focus');
                assert.ok($(document.activeElement).is($select), 'select focused');
                $select.trigger($.Event('keydown', {
                    which: 38 // Up
                }));
                assert.ok($(document.activeElement).is($select), 'select still focused');

                done();
            });
        $dropdown.trigger('click');
    });

    QUnit.test('should not close menu if clicking on <label>, <input>, <textarea>, or <select>', function(assert) {
        assert.expect(5);
        var done = assert.async();
        var dropdownHTML = '<div class="dropdown">' +
            '<button type="button" class="btn" data-cfw="dropdown">Dropdown</button>' +
            '<ul class="dropdown-menu">' +
            '<li><label id="label" for="input"><input id="input"></label></li>' +
            '<li><textarea id="textarea"></textarea></a></li>' +
            '<li><select id="select"><option>one</option><option>two</option></select></a></li>' +
            '</ul>' +
            '</div>';
        var $dropdown = $(dropdownHTML).appendTo('#qunit-fixture').find('[data-cfw="dropdown"]');
        $dropdown.CFW_Dropdown();

        var $label = $('#label');
        var $input = $('#input');
        var $textarea = $('#textarea');
        var $select = $('#select');

        $dropdown
            .on('afterShow.cfw.dropdown', function() {
                assert.ok(true, 'menu opened');
                $label.trigger('click');
                assert.ok($dropdown.hasClass('open'), 'menu still open');
                $input.trigger('click');
                assert.ok($dropdown.hasClass('open'), 'menu still open');
                $textarea.trigger('click');
                assert.ok($dropdown.hasClass('open'), 'menu still open');
                $select.trigger('click');
                assert.ok($dropdown.hasClass('open'), 'menu still open');
                done();
            });
        $dropdown.trigger('click');
    });

    // QUnit.test('should close menu if clicking on input field not within dropdown menu', function(assert) {
    //     assert.expect(1);
    //     var done = assert.async();
    //     var dropdownHTML = '<div class="dropdown">' +
    //         '<button type="button" class="btn" data-cfw="dropdown">Dropdown</button>' +
    //         '<ul class="dropdown-menu">' +
    //         '<li><a href="#" id="focusable">Menu link</a></li>' +
    //         '</ul>' +
    //         '</div>';
    //     var $dropdown = $(dropdownHTML).appendTo('#qunit-fixture').find('[data-cfw="dropdown"]');
    //     var $input = $('<input type="text">').appendTo('#qunit-fixture');

    //     $dropdown.CFW_Dropdown();

    //     $dropdown.on('afterHide.cfw.dropdown', function() {
    //         setTimeout(function() {
    //             assert.ok($(document.activeElement).is($input), 'input focused');
    //             done();
    //         });
    //     });

    //     $dropdown.on('afterShow.cfw.dropdown', function() {
    //         $input[0].focus();
    //     });

    //     $dropdown.trigger('click');
    // });

    QUnit.test('ESC should not propagate when menu is open', function(assert) {
        assert.expect(1);
        var done = assert.async();
        var dropdownHTML = '<div class="dropdown">' +
            '<button type="button" class="btn" data-cfw="dropdown">Dropdown</button>' +
            '<ul class="dropdown-menu">' +
            '<li><a href="#" id="focusable">Menu link</a></li>' +
            '</ul>' +
            '</div>';
        var $dropdown = $(dropdownHTML).appendTo('#qunit-fixture').find('[data-cfw="dropdown"]');
        $dropdown.CFW_Dropdown();
        $dropdown
            .trigger('focus')
            .trigger('click');

        $(document.body).on('keydown.dropEsc', function(e) {
            $(document.body).off('keydown.dropEsc');
            assert.notEqual(e.which, 27, 'ESC keypress was propagated');
            done();
        });

        $dropdown.trigger($.Event('keydown', {
            which: 27 // Esc
        }));
        $dropdown.trigger($.Event('keydown', {
            which: 97 // a
        }));
    });

    QUnit.test('ESC should propagate when menu is closed', function(assert) {
        assert.expect(1);
        var done = assert.async();
        var dropdownHTML = '<div class="dropdown">' +
            '<button type="button" class="btn" data-cfw="dropdown">Dropdown</button>' +
            '<ul class="dropdown-menu">' +
            '<li><a href="#" id="focusable">Menu link</a></li>' +
            '</ul>' +
            '</div>';
        var $dropdown = $(dropdownHTML).appendTo('#qunit-fixture').find('[data-cfw="dropdown"]');
        $dropdown.CFW_Dropdown();
        $dropdown.trigger('focus');

        $(document.body).on('keydown.dropEsc', function(e) {
            $(document.body).off('keydown.dropEsc');
            assert.equal(e.which, 27, 'ESC keypress was propagated');
            done();
        });

        $dropdown.trigger($.Event('keydown', {
            which: 27 // Esc
        }));
    });

    QUnit.test('should fire afterShow and afterHide events with a relatedTarget', function(assert) {
        assert.expect(2);
        var done = assert.async();
        var dropdownHTML = '<div class="dropdown">' +
            '<button type="button" class="btn" data-cfw="dropdown">Dropdown</button>' +
            '<ul class="dropdown-menu">' +
            '<li><a href="#" id="focusable">Menu link</a></li>' +
            '</ul>' +
            '</div>';
        var $dropdown = $(dropdownHTML).appendTo('#qunit-fixture').find('[data-cfw="dropdown"]');
        $dropdown.CFW_Dropdown();

        $dropdown
            .on('afterShow.cfw.dropdown', function(e) {
                assert.strictEqual(e.relatedTarget, $dropdown[0]);
                $(document.body).trigger('click');
            })
            .on('afterHide.cfw.dropdown', function(e) {
                assert.strictEqual(e.relatedTarget, $dropdown[0]);
                done();
            });

        $dropdown.trigger('click');
    });

    QUnit.test('submenu toggles should also fire afterShow and afterHide events with a relatedTarget independent of main toggle', function(assert) {
        assert.expect(4);
        var done = assert.async();
        var dropdownHTML = '<div class="dropdown">' +
            '<button type="button" class="btn" data-cfw="dropdown">Dropdown</button>' +
            '<ul class="dropdown-menu">' +
            '<li>' +
            '<a href="#" id="subtoggle">Menu link</a>' +
            '<ul>' +
            '<li><a href="#">Sub-menu link</a></li>' +
            '</ul>' +
            '</li>' +
            '</ul>' +
            '</div>';
        var $dropdown = $(dropdownHTML).appendTo('#qunit-fixture').find('[data-cfw="dropdown"]');
        $dropdown.CFW_Dropdown();
        var $subtoggle = $('#subtoggle');

        $dropdown
            .on('afterShow.cfw.dropdown', function(e) {
                assert.strictEqual(e.relatedTarget, $dropdown[0], 'mainToggle show with relatedTarget');
                $subtoggle
                    .on('afterShow.cfw.dropdown', function(e) {
                        e.stopPropagation();
                        assert.strictEqual(e.relatedTarget, $subtoggle[0], 'subToggle show with relatedTarget');
                        $(document.body).trigger('click');
                    })
                    .on('afterHide.cfw.dropdown', function(e) {
                        e.stopPropagation();
                        assert.strictEqual(e.relatedTarget, $subtoggle[0], 'subToggle hide with relatedTarget');
                    });
                $subtoggle.trigger('click');
            })
            .on('afterHide.cfw.dropdown', function(e) {
                assert.strictEqual(e.relatedTarget, $dropdown[0], 'mainToggle hide with relatedTarget');
                done();
            });

        $dropdown.trigger('click');
    });

    QUnit.test('should fire beforeHide and afterHide events with a clickEvent if event type is click', function(assert) {
        assert.expect(3);
        var done = assert.async();
        var dropdownHTML = '<div class="dropdown">' +
            '<button type="button" class="btn" data-cfw="dropdown">Dropdown</button>' +
            '<ul class="dropdown-menu">' +
            '<li><a href="#" id="focusable">Menu link</a></li>' +
            '</ul>' +
            '</div>';
        var $dropdown = $(dropdownHTML).appendTo('#qunit-fixture').find('[data-cfw="dropdown"]');
        $dropdown.CFW_Dropdown();

        $dropdown
            .on('afterShow.cfw.dropdown', function() {
                assert.ok(true, 'afterShow was fired');
                $(document.body).trigger('click');
            })
            .on('beforeHide.cfw.dropdown', function(e) {
                assert.ok(e.clickEvent);
            })
            .on('afterHide.cfw.dropdown', function(e) {
                assert.ok(e.clickEvent);
                done();
            });

        $dropdown.trigger('click');
    });

    QUnit.test('should fire beforeHide and afterHide event without a clickEvent if event type is not click', function(assert) {
        assert.expect(3);
        var done = assert.async();
        var dropdownHTML = '<div class="dropdown">' +
            '<button type="button" class="btn" data-cfw="dropdown">Dropdown</button>' +
            '<ul class="dropdown-menu">' +
            '<li><a href="#" id="focusable">Menu link</a></li>' +
            '</ul>' +
            '</div>';
        var $dropdown = $(dropdownHTML).appendTo('#qunit-fixture').find('[data-cfw="dropdown"]');
        $dropdown.CFW_Dropdown();

        $dropdown
            .on('afterShow.cfw.dropdown', function() {
                assert.ok(true, 'shown was fired');
                $dropdown.trigger($.Event('keydown', {
                    which: 27 // Esc
                }));
            })
            .on('beforeHide.cfw.dropdown', function(e) {
                assert.notOk(e.clickEvent);
            })
            .on('afterHide.cfw.dropdown', function(e) {
                assert.notOk(e.clickEvent);
                done();
            });

        $dropdown.trigger('click');
    });

    QUnit.test('should allow passing of config to popper.js using popperConfig', function(assert) {
        assert.expect(1);
        var done = assert.async();
        var dropdownHTML = '<div class="dropdown">' +
            '<button type="button" class="btn" data-cfw="dropdown">Dropdown</button>' +
            '<ul class="dropdown-menu" style="position: absolute;">' +
            '<li><a href="#" id="focusable">Menu link</a></li>' +
            '</ul>' +
            '</div>';
        var $dropdown = $(dropdownHTML).appendTo('#qunit-fixture').find('[data-cfw="dropdown"]');
        $dropdown.CFW_Dropdown({
            popperConfig: {
                placement: 'left'
            }
        });

        $dropdown
            .on('afterShow.cfw.dropdown', function() {
                assert.strictEqual($('.dropdown-menu').attr('x-placement'), 'left');
                done();
            });

        $dropdown.trigger('click');
    });

    QUnit.test('should toggle a dropdown with a valid virtual element reference', function(assert) {
        assert.expect(5);
        var done = assert.async();
        var dropdownHTML = '<div class="dropdown">' +
            '<button type="button" class="sr-only" data-cfw="dropdown">Dropdown</button>' +
            '<ul id="dropdown-menu" class="dropdown-menu">' +
            '<li><a href="#" id="focusable">Menu link</a></li>' +
            '</ul>' +
            '</div>';
        var $dropdown = $(dropdownHTML).appendTo('#qunit-fixture').find('[data-cfw="dropdown"]');

        var virtualElement = {};
        virtualElement.getBoundingClientRect = function() {
            return {
                width: 0,
                height: 0,
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            };
        };
        assert.throws(function() {
            $('<button>').CFW_Dropdown({
                reference: {}
            });
        },
        'throws error on empty object'
        );

        assert.throws(function() {
            $('<button>').CFW_Dropdown({
                reference: {
                    getBoundingClientRect: 'not-a-function'
                }
            });
        },
        'throws error on object without valid getBoundingClientRect method'
        );

        $dropdown.on('afterShow.cfw.dropdown', function() {
            assert.strictEqual($dropdown.attr('aria-expanded'), 'true', 'toggle has aria-expanded="true" on click');
            assert.ok($('#dropdown-menu').hasClass('open'), '"open" class added to menu on click');
            done();
        });

        $dropdown.CFW_Dropdown({
            reference: virtualElement
        });

        assert.strictEqual($dropdown.attr('aria-expanded'), 'false', 'toggle has aria-expanded="false" before click');

        $dropdown.trigger('click');
    });

    QUnit.test('should open menu when pressing arrowdown or arrowup on trigger', function(assert) {
        assert.expect(8);
        var done = assert.async();
        var dropdownHTML = '<div class="dropdown">' +
            '<button id="dropdown-trigger" type="button" class="btn" data-cfw="dropdown">Dropdown</button>' +
            '<ul id="dropdown-menu" class="dropdown-menu">' +
            '<li><a href="#">Menu link</a></li>' +
            '</ul>' +
            '</div>';
        var $dropdown = $(dropdownHTML).appendTo('#qunit-fixture').find('[data-cfw="dropdown"]');
        $dropdown.CFW_Dropdown();

        var $trigger = $('#dropdown-trigger');

        var arrowUp = $.Event('keydown', {
            which: 38
        });
        var arrowDown = $.Event('keydown', {
            which: 40
        });

        assert.notOk($('#dropdown-menu').hasClass('open'), '"open" class not on trigger');
        assert.notOk($('#dropdown-trigger').hasClass('open'), '"open" class not on menu');

        $trigger
            .one('afterShow.cfw.dropdown', function() {
                assert.ok($('#dropdown-menu').hasClass('open'), '"open" class added to trigger on arrowDown');
                assert.ok($('#dropdown-trigger').hasClass('open'), '"open" class added to menu on arrowDown');
                $trigger.CFW_Dropdown('hide');
            })
            .one('afterHide.cfw.dropdown', function() {
                assert.notOk($('#dropdown-menu').hasClass('open'), '"open" class removed from trigger on hide');
                assert.notOk($('#dropdown-trigger').hasClass('open'), '"open" class removed from menu on hide');

                $trigger
                    .one('afterShow.cfw.dropdown', function() {
                        assert.ok($('#dropdown-menu').hasClass('open'), '"open" class added to trigger on arrowUp');
                        assert.ok($('#dropdown-trigger').hasClass('open'), '"open" class added to menu on arrowUp');
                        done();
                    })
                    .trigger('focus')
                    .trigger(arrowUp);
            })
            .trigger('focus')
            .trigger(arrowDown);
    });

    QUnit.test('should open menu when clicking on child of trigger ', function(assert) {
        assert.expect(1);

        var dropdownHTML = '<div class="dropdown">' +
            '<button id="trigger" type="button" class="btn" data-cfw="dropdown">' +
            '<span id="triggerChild">Dropdown</span>' +
            '</button>' +
            '<ul class="dropdown-menu">' +
            '<li><a href="#">Menu link</a></li>' +
            '</ul>' +
            '</div>';
        var $dropdown = $(dropdownHTML).appendTo('#qunit-fixture').find('[data-cfw="dropdown"]');

        $dropdown.CFW_Dropdown();
        $('#triggerChild').trigger('click');

        assert.ok($('#trigger').hasClass('open'), 'menu is open');
    });

    QUnit.test('should allow click events on `data-cfw="dropdown"`elements to bubble', function(assert) {
        assert.expect(2);
        var done = assert.async();
        var eventClick = false;
        var eventDelegated = false;

        var dropdownHTML = '<div class="dropdown">' +
            '<button type="button" class="btn" data-cfw="dropdown">Dropdown</button>' +
            '<ul class="dropdown-menu">' +
            '<li><a href="#">Menu link</a></li>' +
            '</ul>' +
            '</div>';
        var $dropdown = $(dropdownHTML).appendTo('#qunit-fixture').find('[data-cfw="dropdown"]');

        $dropdown.on('click', function() {
            eventClick = true;
        });
        $(document).on('click', function() {
            eventDelegated = true;
        });

        $dropdown.CFW_Dropdown();
        $dropdown.trigger('click');

        setTimeout(function() {
            assert.ok(eventClick, 'trigger has been clicked');
            assert.ok(eventDelegated, 'click event has bubbled to document');
            done();
        });
    });

    QUnit.test('should not close when clicking inside or outside when `data-cfw-dropdown-auto-close="false"`, will close when clicking trigger', function(assert) {
        assert.expect(3);
        var done = assert.async();

        var dropdownHTML = '<div class="dropdown">' +
            '<button type="button" class="btn" data-cfw="dropdown" data-cfw-dropdown-auto-close="false">Dropdown</button>' +
            '<ul class="dropdown-menu">' +
            '<li><a href="#">Menu link</a></li>' +
            '</ul>' +
            '</div>';
        var $element = $(dropdownHTML).appendTo('#qunit-fixture').find('[data-cfw="dropdown"]');
        var $target = $('#qunit-fixture').find('.dropdown-menu');

        var checkOpen = function(check) {
            setTimeout(function() {
                if (!check) {
                    assert.notOk($element.hasClass('open'));
                } else {
                    assert.ok($element.hasClass('open'));
                }

                if (check === 'inside') {
                    $(document.body).trigger('click');
                    checkOpen('outside');
                } else if (check === 'outside') {
                    $element.trigger('click');
                    checkOpen(false);
                } else {
                    done();
                }
            }, 10);
        };

        $element.on('afterShow.cfw.dropdown', function() {
            $target.trigger('click');
            checkOpen('inside');
        });

        $element.CFW_Dropdown();
        $element.trigger('click');
    });

    QUnit.test('should only close when clicking inside when `data-cfw-dropdown-auto-close="inside"`, will close when clicking trigger', function(assert) {
        assert.expect(4);
        var done = assert.async();

        var dropdownHTML = '<div class="dropdown">' +
            '<button type="button" class="btn" data-cfw="dropdown" data-cfw-dropdown-auto-close="inside">Dropdown</button>' +
            '<ul class="dropdown-menu">' +
            '<li><a href="#">Menu link</a></li>' +
            '</ul>' +
            '</div>';
        var $element = $(dropdownHTML).appendTo('#qunit-fixture').find('[data-cfw="dropdown"]');
        var $target = $('#qunit-fixture').find('.dropdown-menu');

        var checkOpen = function(check) {
            setTimeout(function() {
                if (!check || check === 'inside') {
                    assert.notOk($element.hasClass('open'));
                } else {
                    assert.ok($element.hasClass('open'));
                }

                if (check === 'inside') {
                    $element.trigger('click');
                    checkOpen('reopen');
                } else if (check === 'reopen') {
                    $(document.body).trigger('click');
                    checkOpen('outside');
                } else if (check === 'outside') {
                    $element.trigger('click');
                    checkOpen(false);
                } else {
                    done();
                }
            }, 10);
        };

        $element.one('afterShow.cfw.dropdown', function() {
            $target.trigger('click');
            checkOpen('inside');
        });

        $element.CFW_Dropdown();
        $element.trigger('click');
    });

    QUnit.test('should only close when clicking outside when `data-cfw-dropdown-auto-close="outside"`, will close when clicking trigger', function(assert) {
        assert.expect(4);
        var done = assert.async();

        var dropdownHTML = '<div class="dropdown">' +
            '<button type="button" class="btn" data-cfw="dropdown" data-cfw-dropdown-auto-close="outside">Dropdown</button>' +
            '<ul class="dropdown-menu">' +
            '<li><a href="#">Menu link</a></li>' +
            '</ul>' +
            '</div>';
        var $element = $(dropdownHTML).appendTo('#qunit-fixture').find('[data-cfw="dropdown"]');
        var $target = $('#qunit-fixture').find('.dropdown-menu');

        var checkOpen = function(check) {
            setTimeout(function() {
                if (!check || check === 'outside') {
                    assert.notOk($element.hasClass('open'));
                } else {
                    assert.ok($element.hasClass('open'));
                }

                if (check === 'outside') {
                    $element.trigger('click');
                    checkOpen('reopen');
                } else if (check === 'reopen') {
                    $target.trigger('click');
                    checkOpen('inside');
                } else if (check === 'inside') {
                    $element.trigger('click');
                    checkOpen(false);
                } else {
                    done();
                }
            }, 10);
        };

        $element.one('afterShow.cfw.dropdown', function() {
            $(document.body).trigger('click');
            checkOpen('outside');
        });

        $element.CFW_Dropdown();
        $element.trigger('click');
    });

    QUnit.test('should initialize subtoggle link and submenu', function(assert) {
        assert.expect(2);
        var dropdownHTML = '<div class="dropdown">' +
            '<button type="button" class="btn" data-cfw="dropdown">Dropdown</button>' +
            '<ul class="dropdown-menu">' +
            '<li>' +
            '<a href="#" id="subtoggle">Menu link</a>' +
            '<ul id="submenu">' +
            '<li><a id="subitem" href="#">Sub-menu link</a></li>' +
            '</ul>' +
            '</li>' +
            '</ul>' +
            '</div>';
        var $dropdown = $(dropdownHTML).appendTo('#qunit-fixture').find('[data-cfw="dropdown"]');
        $dropdown.CFW_Dropdown();
        var $subtoggle = $('#subtoggle');
        var $submenu = $('#submenu');

        assert.notEqual($subtoggle.data('cfw.dropdown'), 'undefined');
        assert.equal($submenu.attr('aria-labelledby'), $subtoggle.attr('id'));
    });

    QUnit.test('should initialize subtoggle button and submenu', function(assert) {
        assert.expect(2);
        var dropdownHTML = '<div class="dropdown">' +
            '<button type="button" class="btn" data-cfw="dropdown">Dropdown</button>' +
            '<ul class="dropdown-menu">' +
            '<li>' +
            '<button id="subtoggle">Menu button</button>' +
            '<ul id="submenu">' +
            '<li><a id="subitem" href="#">Sub-menu link</a></li>' +
            '</ul>' +
            '</li>' +
            '</ul>' +
            '</div>';
        var $dropdown = $(dropdownHTML).appendTo('#qunit-fixture').find('[data-cfw="dropdown"]');
        $dropdown.CFW_Dropdown();
        var $subtoggle = $('#subtoggle');
        var $submenu = $('#submenu');

        assert.notEqual($subtoggle.data('cfw.dropdown'), 'undefined');
        assert.equal($submenu.attr('aria-labelledby'), $subtoggle.attr('id'));
    });


    QUnit.test('right arrow keypress should open submenu and select first item', function(assert) {
        assert.expect(3);
        var done = assert.async();
        var dropdownHTML = '<div class="dropdown">' +
            '<button type="button" class="btn" data-cfw="dropdown">Dropdown</button>' +
            '<ul class="dropdown-menu">' +
            '<li><a href="#" id="menulink">Menu link</a></li>' +
            '<li>' +
            '<a href="#" id="subtoggle">Menu link</a>' +
            '<ul>' +
            '<li><a href="#" id="sublink">Sub-menu link</a></li>' +
            '</ul>' +
            '</li>' +
            '</ul>' +
            '</div>';
        var $dropdown = $(dropdownHTML).appendTo('#qunit-fixture').find('[data-cfw="dropdown"]');
        $dropdown.CFW_Dropdown();
        var $subtoggle = $('#subtoggle');
        var $sublink = $('#sublink');

        $dropdown
            .on('afterShow.cfw.dropdown', function() {
                assert.ok($dropdown.hasClass('open'), 'main menu opened');
                $subtoggle
                    .on('afterShow.cfw.dropdown', function() {
                        assert.ok($subtoggle.hasClass('open'), 'submenu opened');
                        setTimeout(function() {
                            assert.strictEqual(document.activeElement, $sublink[0]);
                            done();
                        });
                    });
                $subtoggle.trigger('focus');
                $subtoggle.trigger($.Event('keydown', {
                    which: 39 // Right
                }));
            });

        $dropdown.trigger('click');
    });

    QUnit.test('left arrow keypress should close submenu, but not main menu', function(assert) {
        assert.expect(5);
        var done = assert.async();
        var dropdownHTML = '<div class="dropdown">' +
            '<button type="button" class="btn" data-cfw="dropdown">Dropdown</button>' +
            '<ul class="dropdown-menu">' +
            '<li><a href="#" id="menulink">Menu link</a></li>' +
            '<li>' +
            '<a href="#" id="subtoggle">Menu link</a>' +
            '<ul>' +
            '<li><a href="#" id="sublink">Sub-menu link</a></li>' +
            '</ul>' +
            '</li>' +
            '</ul>' +
            '</div>';
        var $dropdown = $(dropdownHTML).appendTo('#qunit-fixture').find('[data-cfw="dropdown"]');
        $dropdown.CFW_Dropdown();
        var $menulink = $('#menulink');
        var $subtoggle = $('#subtoggle');
        var $sublink = $('#sublink');

        $dropdown
            .on('afterShow.cfw.dropdown', function() {
                assert.ok($dropdown.hasClass('open'), 'main menu opened');
                $subtoggle
                    .on('afterShow.cfw.dropdown', function(e) {
                        e.stopPropagation();
                        assert.ok($subtoggle.hasClass('open'), 'submenu opened');
                        $sublink.trigger('focus');
                        $sublink.trigger($.Event('keydown', {
                            which: 37 // Left
                        }));
                    })
                    .on('afterHide.cfw.dropdown', function() {
                        assert.notOk($subtoggle.hasClass('open'), 'submenu closed');
                        assert.ok($dropdown.hasClass('open'), 'main menu still open');
                        $menulink.trigger('focus');
                        $menulink.trigger($.Event('keydown', {
                            which: 37 // Left
                        }));
                        assert.ok($dropdown.hasClass('open'), 'main menu still open');
                        done();
                    });
                $subtoggle.trigger('click');
            });

        $dropdown.trigger('click');
    });

    QUnit.test('should select first menu item with down arrow keypress on trigger', function(assert) {
        assert.expect(1);
        var done = assert.async();
        var dropdownHTML = '<div class="dropdown">' +
            '<button type="button" class="btn" data-cfw="dropdown">Dropdown</button>' +
            '<ul id="dropdown-menu" class="dropdown-menu">' +
            '<li><a id="item0" href="#">Menu link</a></li>' +
            '<li><a id="item1" href="#">Menu link</a></li>' +
            '</ul>' +
            '</div>';
        var $dropdown = $(dropdownHTML).appendTo('#qunit-fixture').find('[data-cfw="dropdown"]');
        $dropdown.CFW_Dropdown();
        var arrowDown = $.Event('keydown', {
            which: 40 // Down
        });

        $dropdown.on('afterShow.cfw.dropdown', function() {
            setTimeout(function() {
                assert.strictEqual(document.activeElement, document.querySelector('#item0'));
                done();
            });
        });

        $dropdown.trigger('focus').trigger(arrowDown);
    });

    QUnit.test('should select last menu item with up arrow keypress on trigger', function(assert) {
        assert.expect(1);
        var done = assert.async();
        var dropdownHTML = '<div class="dropdown">' +
            '<button type="button" class="btn" data-cfw="dropdown">Dropdown</button>' +
            '<ul id="dropdown-menu" class="dropdown-menu">' +
            '<li><a id="item0" href="#">Menu link</a></li>' +
            '<li><a id="item1" href="#">Menu link</a></li>' +
            '</ul>' +
            '</div>';
        var $dropdown = $(dropdownHTML).appendTo('#qunit-fixture').find('[data-cfw="dropdown"]');
        $dropdown.CFW_Dropdown();
        var arrowUp = $.Event('keydown', {
            which: 38 // Up
        });

        $dropdown.on('afterShow.cfw.dropdown', function() {
            setTimeout(function() {
                assert.strictEqual(document.activeElement, document.querySelector('#item1'));
                done();
            });
        });

        $dropdown.trigger('focus').trigger(arrowUp);
    });

    QUnit.test('should select first menu item with down arrow keypress last menu item', function(assert) {
        assert.expect(2);
        var done = assert.async();
        var dropdownHTML = '<div class="dropdown">' +
            '<button type="button" class="btn" data-cfw="dropdown">Dropdown</button>' +
            '<ul id="dropdown-menu" class="dropdown-menu">' +
            '<li><a id="item0" href="#">Menu link</a></li>' +
            '<li><a id="item1" href="#">Menu link</a></li>' +
            '<li><a id="item2" href="#">Menu link</a></li>' +
            '</ul>' +
            '</div>';
        var $dropdown = $(dropdownHTML).appendTo('#qunit-fixture').find('[data-cfw="dropdown"]');
        $dropdown.CFW_Dropdown();
        var $item0 = $('#item0');
        var $item2 = $('#item2');
        var arrowDown = $.Event('keydown', {
            which: 40 // Down
        });

        $dropdown.on('afterShow.cfw.dropdown', function() {
            $item2[0].focus();
            setTimeout(function() {
                assert.strictEqual(document.activeElement, $item2[0]);
                $item2.trigger(arrowDown);

                setTimeout(function() {
                    assert.strictEqual(document.activeElement, $item0[0]);
                    done();
                });
            });
        });
        $dropdown.CFW_Dropdown('show');
    });

    QUnit.test('should select last menu item with up arrow keypress first menu item', function(assert) {
        assert.expect(2);
        var done = assert.async();
        var dropdownHTML = '<div class="dropdown">' +
            '<button type="button" class="btn" data-cfw="dropdown">Dropdown</button>' +
            '<ul id="dropdown-menu" class="dropdown-menu">' +
            '<li><a id="item0" href="#">Menu link</a></li>' +
            '<li><a id="item1" href="#">Menu link</a></li>' +
            '<li><a id="item2" href="#">Menu link</a></li>' +
            '</ul>' +
            '</div>';
        var $dropdown = $(dropdownHTML).appendTo('#qunit-fixture').find('[data-cfw="dropdown"]');
        $dropdown.CFW_Dropdown();
        var $item0 = $('#item0');
        var $item2 = $('#item2');
        var arrowUp = $.Event('keydown', {
            which: 38 // Up
        });

        $dropdown.on('afterShow.cfw.dropdown', function() {
            $item0[0].focus();
            setTimeout(function() {
                assert.strictEqual(document.activeElement, $item0[0]);
                $item0.trigger(arrowUp);

                setTimeout(function() {
                    assert.strictEqual(document.activeElement, $item2[0]);
                    done();
                });
            });
        });
        $dropdown.CFW_Dropdown('show');
    });

    QUnit.test('should focus trigger when main menu closed by ESC keypress', function(assert) {
        assert.expect(2);
        var done = assert.async();
        var dropdownHTML = '<div class="dropdown">' +
            '<button id="itemBtn" type="button" class="btn" data-cfw="dropdown">Dropdown</button>' +
            '<ul class="dropdown-menu">' +
            '<li><a id="item0" href="#">Menu link</a></li>' +
            '</ul>' +
            '</div>';
        var $dropdown = $(dropdownHTML).appendTo('#qunit-fixture').find('[data-cfw="dropdown"]');
        var arrowDown = $.Event('keydown', {
            which: 40 // Down
        });
        var escapeKey = $.Event('keydown', {
            which: 27 // Esc
        });
        $dropdown.CFW_Dropdown();

        $dropdown
            .on('afterShow.cfw.dropdown', function() {
                setTimeout(function() {
                    assert.strictEqual(document.activeElement, document.querySelector('#item0'), 'menu item focused');
                    $dropdown.trigger(escapeKey);
                });
            })
            .on('afterHide.cfw.dropdown', function() {
                setTimeout(function() {
                    assert.strictEqual(document.activeElement, document.querySelector('#itemBtn'), 'trigger is focused');
                    done();
                });
            });

        $dropdown.trigger('focus').trigger(arrowDown);
    });

    QUnit.test('should focus submenu trigger when submenu closed by ESC keypress', function(assert) {
        assert.expect(3);
        var done = assert.async();
        var dropdownHTML = '<div class="dropdown">' +
            '<button type="button" class="btn" data-cfw="dropdown">Dropdown</button>' +
            '<ul class="dropdown-menu">' +
            '<li>' +
            '<a href="#" id="subtoggle">Menu link</a>' +
            '<ul>' +
            '<li><a id="subitem" href="#">Sub-menu link</a></li>' +
            '</ul>' +
            '</li>' +
            '</ul>' +
            '</div>';
        var $dropdown = $(dropdownHTML).appendTo('#qunit-fixture').find('[data-cfw="dropdown"]');
        var $subtoggle = $('#subtoggle');
        var $subitem = $('#subitem');
        var arrowDown = $.Event('keydown', {
            which: 40 // Down
        });
        var arrowRight = $.Event('keydown', {
            which: 39 // Right
        });
        var escapeKey = $.Event('keydown', {
            which: 27 // Esc
        });
        $dropdown.CFW_Dropdown();

        $subtoggle
            .on('afterShow.cfw.dropdown', function() {
                setTimeout(function() {
                    assert.strictEqual(document.activeElement, document.querySelector('#subitem'), 'submenu item focused');
                    $subitem.trigger(escapeKey);
                });
            })
            .on('afterHide.cfw.dropdown', function() {
                setTimeout(function() {
                    assert.strictEqual(document.activeElement, document.querySelector('#subtoggle'), 'submenu trigger is focused');
                    done();
                });
            });

        $dropdown
            .one('afterShow.cfw.dropdown', function() {
                setTimeout(function() {
                    assert.strictEqual(document.activeElement, document.querySelector('#subtoggle'), 'menu item focused');
                    $subtoggle.trigger(arrowRight);
                });
            });
        $dropdown.trigger('focus').trigger(arrowDown);
    });
});
