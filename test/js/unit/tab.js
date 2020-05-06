$(function() {
    'use strict';

    QUnit.module('CFW_Tab', {
        beforeEach: function() {
            $(window).scrollTop(0);
        },
        afterEach: function() {
            $('#qunit-fixture').empty();
        }
    });

    QUnit.test('should be defined on jquery object', function(assert) {
        assert.expect(1);
        assert.ok($(document.body).CFW_Tab, 'CFW_Tab method is defined');
    });

    QUnit.test('should return jquery collection containing the element', function(assert) {
        assert.expect(2);
        var $el = $('<div></div>');
        var $col = $el.CFW_Tab();
        assert.ok($col instanceof $, 'returns jquery collection');
        assert.strictEqual($col[0], $el[0], 'collection contains element');
    });

    QUnit.test('should activate element by tab id', function(assert) {
        assert.expect(2);
        var tabsHTML = '<ul class="tabs">' +
            '<li><a href="#home">Home</a></li>' +
            '<li><a href="#profile">Profile</a></li>' +
            '</ul>';
        $('<ul><li id="home"></li><li id="profile"></li></ul>').appendTo('#qunit-fixture');

        $(tabsHTML).find('li:last a').CFW_Tab('show');
        assert.strictEqual($('#qunit-fixture').find('.active').attr('id'), 'profile');

        $(tabsHTML).find('li:first a').CFW_Tab('show');
        assert.strictEqual($('#qunit-fixture').find('.active').attr('id'), 'home');
    });

    QUnit.test('should activate element by pill id', function(assert) {
        assert.expect(2);
        var pillsHTML = '<ul class="pills">' +
            '<li><a href="#home">Home</a></li>' +
            '<li><a href="#profile">Profile</a></li>' +
            '</ul>';
        $('<ul><li id="home"></li><li id="profile"></li></ul>').appendTo('#qunit-fixture');

        $(pillsHTML).find('li:last a').CFW_Tab('show');
        assert.strictEqual($('#qunit-fixture').find('.active').attr('id'), 'profile');

        $(pillsHTML).find('li:first a').CFW_Tab('show');
        assert.strictEqual($('#qunit-fixture').find('.active').attr('id'), 'home');
    });

    QUnit.test('should not fire afterShow when beforeShow is prevented', function(assert) {
        assert.expect(1);
        var done = assert.async();

        $('<div class="tab"></div>')
            .on('beforeShow.cfw.tab', function(e) {
                e.preventDefault();
                assert.ok(true, 'beforeShow event fired');
                done();
            })
            .on('afterShow.cfw.tab', function() {
                assert.ok(false, 'afterShow event fired');
            })
            .CFW_Tab('show');
    });

    QUnit.test('beforeShow and afterShow events should reference correct relatedTarget', function(assert) {
        assert.expect(2);
        var done = assert.async();

        var tabsHTML = '<ul class="tabs">' +
            '<li><a href="#home" data-cfw="tab">Home</a></li>' +
            '<li><a href="#profile" data-cfw="tab">Profile</a></li>' +
            '</ul>';
        $('<ul><li id="home"></li><li id="profile"></li></ul>').appendTo('#qunit-fixture');
        $(tabsHTML).appendTo('#qunit-fixture');

        var $tabs = $('#qunit-fixture').find('[data-cfw="tab"]').CFW_Tab();
        var $first = $tabs.first();
        var $last = $tabs.last();

        $last
            .on('beforeShow.cfw.tab', function(e) {
                assert.strictEqual(e.relatedTarget.hash, '#home', 'references correct element as relatedTarget');
            })
            .on('afterShow.cfw.tab', function(e) {
                assert.strictEqual(e.relatedTarget.hash, '#home', 'references correct element as relatedTarget');
                done();
            });

        $first.CFW_Tab('show');
        $last.CFW_Tab('show');
    });

    QUnit.test('should fire beforeHide and afterHide events', function(assert) {
        assert.expect(2);
        var done = assert.async();

        var tabsHTML = '<ul class="tabs">' +
            '<li><a href="#home" data-cfw="tab">Home</a></li>' +
            '<li><a href="#profile" data-cfw="tab">Profile</a></li>' +
            '</ul>';
        $('<ul><li id="home"></li><li id="profile"></li></ul>').appendTo('#qunit-fixture');
        $(tabsHTML).appendTo('#qunit-fixture');

        var $tabs = $('#qunit-fixture').find('[data-cfw="tab"]').CFW_Tab();
        var $first = $tabs.first();
        var $last = $tabs.last();

        $first
            .on('beforeHide.cfw.tab', function() {
                assert.ok(true, 'beforeHide event fired');
            })
            .on('afterHide.cfw.tab', function() {
                assert.ok(true, 'afterHide event fired');
                done();
            });

        $first.CFW_Tab('show');
        $last.CFW_Tab('show');
    });

    QUnit.test('should not fire afterHide when beforeHide is prevented', function(assert) {
        assert.expect(1);
        var done = assert.async();

        var tabsHTML = '<ul class="tabs">' +
            '<li><a href="#home" data-cfw="tab">Home</a></li>' +
            '<li><a href="#profile" data-cfw="tab">Profile</a></li>' +
            '</ul>';
        $('<ul><li id="home"></li><li id="profile"></li></ul>').appendTo('#qunit-fixture');
        $(tabsHTML).appendTo('#qunit-fixture');

        var $tabs = $('#qunit-fixture').find('[data-cfw="tab"]').CFW_Tab();
        var $first = $tabs.first();
        var $last = $tabs.last();

        $first
            .on('beforeHide.cfw.tab', function(e) {
                e.preventDefault();
                assert.ok(true, 'beforeHide event fired');
                done();
            })
            .on('afterHide.cfw.tab', function() {
                assert.ok(false, 'afterHide event fired');
            });

        $first.CFW_Tab('show');
        $last.CFW_Tab('show');
    });

    QUnit.test('beforeHide and afterHide events should reference correct relatedTarget', function(assert) {
        assert.expect(2);
        var done = assert.async();

        var tabsHTML = '<ul class="tabs">' +
            '<li><a href="#home" data-cfw="tab">Home</a></li>' +
            '<li><a href="#profile" data-cfw="tab">Profile</a></li>' +
            '</ul>';
        $('<ul><li id="home"></li><li id="profile"></li></ul>').appendTo('#qunit-fixture');
        $(tabsHTML).appendTo('#qunit-fixture');

        var $tabs = $('#qunit-fixture').find('[data-cfw="tab"]').CFW_Tab();
        var $first = $tabs.first();
        var $last = $tabs.last();

        $first
            .on('beforeHide.cfw.tab', function(e) {
                assert.strictEqual(e.relatedTarget.hash, '#profile', 'references correct element as relatedTarget');
            })
            .on('afterHide.cfw.tab', function(e) {
                assert.strictEqual(e.relatedTarget.hash, '#profile', 'references correct element as relatedTarget');
                done();
            });

        $first.CFW_Tab('show');
        $last.CFW_Tab('show');
    });

    QUnit.test('parent list items should get role="presentation"', function(assert) {
        assert.expect(2);
        var tabsHTML = '<ul class="tabs">' +
            '<li><a href="#home" data-cfw="tab">Home</a></li>' +
            '<li><a href="#profile" data-cfw="tab">Profile</a></li>' +
            '</ul>';
        $('<ul><li id="home"></li><li id="profile"></li></ul>').appendTo('#qunit-fixture');
        $(tabsHTML).appendTo('#qunit-fixture');

        assert.strictEqual($('#qunit-fixture').find('li[role="presentation"]').length, 0, 'both parent <li> do not have role="presentation"');
        $('#qunit-fixture').find('[data-cfw="tab"]').CFW_Tab();
        assert.strictEqual($('#qunit-fixture').find('li[role="presentation"]').length, 2, 'both parent <li> have role="presentation"');
    });

    QUnit.test('selected tab should have aria-selected', function(assert) {
        assert.expect(8);
        var tabsHTML = '<ul class="tabs">' +
            '<li><a href="#home" data-cfw="tab">Home</a></li>' +
            '<li><a href="#profile" data-cfw="tab">Profile</a></li>' +
            '</ul>';
        $('<ul><li id="home"></li><li id="profile"></li></ul>').appendTo('#qunit-fixture');
        $(tabsHTML).appendTo('#qunit-fixture');
        var $tabsObj = $('.tabs');

        var $tabs = $('#qunit-fixture').find('[data-cfw="tab"]').CFW_Tab();
        var $first = $tabs.first();
        var $last = $tabs.last();

        $first.CFW_Tab('show');
        assert.strictEqual($tabsObj.find('a.active').attr('aria-selected'), 'true', 'shown tab has aria-selected = true');
        assert.strictEqual($tabsObj.find('a:not(.active)').attr('aria-selected'), 'false', 'hidden tab has aria-selected = false');

        $last.trigger('click');
        assert.strictEqual($tabsObj.find('a.active').attr('aria-selected'), 'true', 'after click, shown tab has aria-selected = true');
        assert.strictEqual($tabsObj.find('a:not(.active)').attr('aria-selected'), 'false', 'after click, hidden tab has aria-selected = false');

        $first.CFW_Tab('show');
        assert.strictEqual($tabsObj.find('a.active').attr('aria-selected'), 'true', 'shown tab has aria-selected = true');
        assert.strictEqual($tabsObj.find('a:not(.active)').attr('aria-selected'), 'false', 'hidden tab has aria-selected = false');

        $first.trigger('click');
        assert.strictEqual($tabsObj.find('a.active').attr('aria-selected'), 'true', 'after second show event, shown tab still has aria-selected = true');
        assert.strictEqual($tabsObj.find('a:not(.active)').attr('aria-selected'), 'false', 'after second show event, hidden tab has aria-selected = false');
    });

    QUnit.test('should not show if trigger disabled by class', function(assert) {
        assert.expect(0);

        var tabsHTML = '<ul class="tabs">' +
            '<li><a href="#home" data-cfw="tab">Home</a></li>' +
            '<li><a href="#profile" data-cfw="tab" class="disabled">Profile</a></li>' +
            '</ul>';
        $('<ul><li id="home"></li><li id="profile"></li></ul>').appendTo('#qunit-fixture');
        $(tabsHTML).appendTo('#qunit-fixture');

        var $tabs = $('#qunit-fixture').find('[data-cfw="tab"]').CFW_Tab();
        var $last = $tabs.last();

        $last
            .on('beforeShow.cfw.tab', function() {
                assert.ok('false', 'beforeShow event fired');
            });

        $last.CFW_Tab('show');
    });

    QUnit.test('should not show if trigger disabled by attribute', function(assert) {
        assert.expect(0);

        var tabsHTML = '<ul class="tabs">' +
            '<li><a href="#home" data-cfw="tab">Home</a></li>' +
            '<li><a href="#profile" data-cfw="tab" disabled>Profile</a></li>' +
            '</ul>';
        $('<ul><li id="home"></li><li id="profile"></li></ul>').appendTo('#qunit-fixture');
        $(tabsHTML).appendTo('#qunit-fixture');

        var $tabs = $('#qunit-fixture').find('[data-cfw="tab"]').CFW_Tab();
        var $last = $tabs.last();

        $last
            .on('beforeShow.cfw.tab', function() {
                assert.ok('false', 'beforeShow event fired');
            });

        $last.CFW_Tab('show');
    });

    QUnit.test('should add `.in` to tab panes if animation is enabled (default)', function(assert) {
        assert.expect(1);
        var done = assert.async();

        var tabsHTML = '<ul class="tabs">' +
            '<li><a href="#home" data-cfw="tab">Home</a></li>' +
            '<li><a href="#profile" data-cfw="tab">Profile</a></li>' +
            '</ul>' +
            '<ul class="panes">' +
            '<li id="home"></li>' +
            '<li id="profile"></li>' +
            '</ul>';
        $(tabsHTML).appendTo('#qunit-fixture');

        var $tabs = $('#qunit-fixture').find('[data-cfw="tab"]').CFW_Tab();
        var $panes = $('.panes').find('li');
        var $last = $tabs.last();

        $last
            .on('afterShow.cfw.tab', function() {
                assert.strictEqual($panes.filter('.in').length, 1);
                done();
            });

        $last.CFW_Tab('show');
    });

    QUnit.test('should not add `.in` to tab panes if animation is disabled', function(assert) {
        assert.expect(1);
        var done = assert.async();

        var tabsHTML = '<ul class="tabs">' +
            '<li><a href="#home" data-cfw="tab" data-cfw-tab-animate=false>Home</a></li>' +
            '<li><a href="#profile" data-cfw="tab" data-cfw-tab-animate=false>Profile</a></li>' +
            '</ul>' +
            '<ul class="panes">' +
            '<li id="home"></li>' +
            '<li id="profile"></li>' +
            '</ul>';
        $(tabsHTML).appendTo('#qunit-fixture');

        var $tabs = $('#qunit-fixture').find('[data-cfw="tab"]').CFW_Tab();
        var $panes = $('.panes').find('li');
        var $last = $tabs.last();

        $last
            .on('afterShow.cfw.tab', function() {
                assert.strictEqual($panes.filter('.in').length, 0);
                done();
            });

        $last.CFW_Tab('show');
    });

    QUnit.test('should remove `.in` from tab panes when they become inactive', function(assert) {
        assert.expect(4);
        var done = assert.async();

        var tabsHTML = '<ul class="tabs">' +
            '<li><a href="#home" data-cfw="tab">Home</a></li>' +
            '<li><a href="#profile" data-cfw="tab">Profile</a></li>' +
            '</ul>' +
            '<ul class="panes">' +
            '<li id="home"></li>' +
            '<li id="profile"></li>' +
            '</ul>';
        $(tabsHTML).appendTo('#qunit-fixture');

        var $tabs = $('#qunit-fixture').find('[data-cfw="tab"]').CFW_Tab();
        var $panes = $('.panes').find('li');
        var $last = $tabs.last();

        $last
            .on('afterShow.cfw.tab', function() {
                assert.strictEqual($panes.first().hasClass('in'), false);
                assert.strictEqual($panes.last().hasClass('in'), true);
                done();
            });

        assert.strictEqual($panes.first().hasClass('in'), true);
        assert.strictEqual($panes.last().hasClass('in'), false);
        $last.CFW_Tab('show');
    });
});
