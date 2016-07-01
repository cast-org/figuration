$(function() {
    'use strict';

    QUnit.module('CFW_Dropdown');

    QUnit.test('should be defined on jquery object', function(assert) {
        assert.expect(1);
        assert.ok($(document.body).CFW_Dropdown, 'CFW_Dropdown method is defined');
    });

    QUnit.test('should return jquery collection containing the element', function(assert) {
        assert.expect(2);
        var $el = $('<div/>');
        var $col = $el.CFW_Dropdown();
        assert.ok($col instanceof $, 'returns jquery collection');
        assert.strictEqual($col[0], $el[0], 'collection contains element');
    });

    QUnit.test('should not open dropdown if trigger is disabled via attribute', function(assert) {
        assert.expect(1);

        var dropdownHTML = '<div class="dropdown open">'
            + '<button type="button" class="btn dropdown-toggle" data-cfw="dropdown" disabled>Dropdown</button>'
            + '<ul class="dropdown-menu">'
            + '<li><a href="#">Menu link</a></li>'
            + '</ul>'
            + '</div>';
        var $dropdown = $(dropdownHTML).appendTo('#qunit-fixture').find('[data-cfw="dropdown"]');
        $dropdown.CFW_Dropdown();
        $dropdown.trigger('click');

        assert.ok(!$dropdown.parent('.dropdown').hasClass('open'), '"open" class added on click');
    });

    QUnit.test('should not open dropdown if trigger is disabled via "disabled" class', function(assert) {
        assert.expect(1);

        var dropdownHTML = '<div class="dropdown open">'
            + '<a href="#" role="button" class="btn dropdown-toggle disabled" data-cfw="dropdown">Dropdown</a>'
            + '<ul class="dropdown-menu">'
            + '<li><a href="#">Menu link</a></li>'
            + '</ul>'
            + '</div>';
        var $dropdown = $(dropdownHTML).appendTo('#qunit-fixture').find('[data-cfw="dropdown"]');
        $dropdown.CFW_Dropdown();
        $dropdown.trigger('click');

        assert.ok(!$dropdown.parent('.dropdown').hasClass('open'), '"open" class added on click');
    });

    QUnit.test('should set aria-expanded="true" on trigger when dropdown menu is shown', function(assert) {
        assert.expect(1);

        var dropdownHTML = '<div class="dropdown">'
            + '<button type="button" class="btn dropdown-toggle" data-cfw="dropdown">Dropdown</button>'
            + '<ul class="dropdown-menu">'
            + '<li><a href="#">Menu link</a></li>'
            + '</ul>'
            + '</div>';
        var $dropdown = $(dropdownHTML).appendTo('#qunit-fixture').find('[data-cfw="dropdown"]');
        $dropdown.CFW_Dropdown();
        $dropdown.trigger('click');

        assert.strictEqual($dropdown.attr('aria-expanded'), 'true', 'aria-expanded is set to string "true" on click');
    });

    QUnit.test('should set aria-expanded="false" on trigger when dropdown menu is hidden', function(assert) {
        assert.expect(1);
        var done = assert.async();
        var dropdownHTML = '<div class="dropdown">'
            + '<button type="button" class="btn dropdown-toggle" data-cfw="dropdown">Dropdown</button>'
            + '<ul class="dropdown-menu">'
            + '<li><a href="#">Menu link</a></li>'
            + '</ul>'
            + '</div>';
        var $dropdown = $(dropdownHTML).appendTo('#qunit-fixture').find('[data-cfw="dropdown"]');
        $dropdown.CFW_Dropdown();
        $dropdown.trigger('click');

        $dropdown
            .parent('.dropdown')
            .on('afterHide.cfw.dropdown', function() {
                assert.strictEqual($dropdown.attr('aria-expanded'), 'false', 'aria-expanded is set to string "false" on hide');
                done();
            });

        $dropdown.trigger('click');
        $(document.body).trigger('click');
    });

    QUnit.test('should add class open to menu parent if clicked', function(assert) {
        assert.expect(1);
        var dropdownHTML = '<div class="dropdown">'
            + '<button type="button" class="btn dropdown-toggle" data-cfw="dropdown">Dropdown</button>'
            + '<ul class="dropdown-menu">'
            + '<li><a href="#">Menu link</a></li>'
            + '</ul>'
            + '</div>';
        var $dropdown = $(dropdownHTML).appendTo('#qunit-fixture').find('[data-cfw="dropdown"]');
        $dropdown.CFW_Dropdown();
        $dropdown.trigger('click');

        assert.ok($dropdown.parent('.dropdown').hasClass('open'), '"open" class added on click');
    });

    QUnit.test('should test if element has a # before assuming it\'s a selector', function(assert) {
        assert.expect(1);
        var dropdownHTML = '<div class="dropdown">'
            + '<a href="/foo/" role="button" class="btn dropdown-toggle" data-cfw="dropdown">Dropdown</a>'
            + '<ul class="dropdown-menu">'
            + '<li><a href="#">Menu link</a></li>'
            + '</ul>'
            + '</div>';
        var $dropdown = $(dropdownHTML).appendTo('#qunit-fixture').find('[data-cfw="dropdown"]');
        $dropdown.CFW_Dropdown();
        $dropdown.trigger('click');

        assert.ok($dropdown.parent('.dropdown').hasClass('open'), '"open" class added on click');
    });

    QUnit.test('should remove "open" class if body is clicked', function(assert) {
        assert.expect(2);
        var dropdownHTML = '<div class="dropdown">'
            + '<button type="button" class="btn dropdown-toggle" data-cfw="dropdown">Dropdown</button>'
            + '<ul class="dropdown-menu">'
            + '<li><a href="#">Menu link</a></li>'
            + '</ul>'
            + '</div>';
        var $dropdown = $(dropdownHTML).appendTo('#qunit-fixture').find('[data-cfw="dropdown"]');
        $dropdown.CFW_Dropdown();
        $dropdown.trigger('click');

        assert.ok($dropdown.parent('.dropdown').hasClass('open'), '"open" class added on click');
        $(document.body).trigger('click');
        assert.ok(!$dropdown.parent('.dropdown').hasClass('open'), '"open" class removed');
    });

    QUnit.test('should remove "open" class if body is clicked, with multiple dropdowns', function(assert) {
        assert.expect(7);
        var dropdownHTML = '<div class="dropdown">'
            + '<button type="button" class="btn dropdown-toggle" data-cfw="dropdown">Dropdown</button>'
            + '<ul class="dropdown-menu">'
            + '<li><a href="#">Menu link</a></li>'
            + '</ul>'
            + '</div>';
        $(dropdownHTML).appendTo('#qunit-fixture');
        $(dropdownHTML).appendTo('#qunit-fixture');

        var $dropdowns = $('#qunit-fixture').find('[data-cfw="dropdown"]').CFW_Dropdown();
        var $first = $dropdowns.first();
        var $last = $dropdowns.last();

        assert.strictEqual($dropdowns.length, 2, 'two dropdowns');

        $first.trigger('click');
        assert.strictEqual($first.parents('.open').length, 1, '"open" class added on click');
        assert.strictEqual($('#qunit-fixture .open').length, 1, 'only one dropdown is open');
        $(document.body).trigger('click');
        assert.strictEqual($('#qunit-fixture .open').length, 0, '"open" class removed');

        $last.trigger('click');
        assert.strictEqual($last.parent('.open').length, 1, '"open" class added on click');
        assert.strictEqual($('#qunit-fixture .open').length, 1, 'only one dropdown is open');
        $(document.body).trigger('click');
        assert.strictEqual($('#qunit-fixture .open').length, 0, '"open" class removed');
    });

    QUnit.test('should fire beforeShow and beforeHide events', function(assert) {
        assert.expect(2);
        var done = assert.async();
        var dropdownHTML = '<div class="dropdown">'
            + '<button type="button" class="btn dropdown-toggle" data-cfw="dropdown">Dropdown</button>'
            + '<ul class="dropdown-menu">'
            + '<li><a href="#">Menu link</a></li>'
            + '</ul>'
            + '</div>';
        var $dropdown = $(dropdownHTML).appendTo('#qunit-fixture').find('[data-cfw="dropdown"]');
        $dropdown.CFW_Dropdown();

        $dropdown
            .parent('.dropdown')
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
        var dropdownHTML = '<div class="dropdown">'
            + '<button type="button" class="btn dropdown-toggle" data-cfw="dropdown">Dropdown</button>'
            + '<ul class="dropdown-menu">'
            + '<li><a href="#">Menu link</a></li>'
            + '</ul>'
            + '</div>';
        var $dropdown = $(dropdownHTML).appendTo('#qunit-fixture').find('[data-cfw="dropdown"]');
        $dropdown.CFW_Dropdown();

        $dropdown
            .parent('.dropdown')
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
        assert.expect(1);
        var dropdownHTML = '<div class="dropdown">'
            + '<button type="button" class="btn dropdown-toggle" data-cfw="dropdown">Dropdown</button>'
            + '<ul class="dropdown-menu">'
            + '<li class="disabled"><a href="#">Disabled link</a></li>'
            + '<li><a href="#">Menu link</a></li>'
            + '</ul>'
            + '</div>';
        var $dropdown = $(dropdownHTML).appendTo('#qunit-fixture').find('[data-cfw="dropdown"]');
        $dropdown.CFW_Dropdown();
        $dropdown.trigger('click');

        $dropdown.trigger($.Event('keydown', { which: 40 }));
        $dropdown.trigger($.Event('keydown', { which: 40 }));

        assert.ok(!$(document.activeElement).parent().is('.disabled'), '.disabled is not focused');
    });
});
