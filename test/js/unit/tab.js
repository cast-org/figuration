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

    QUnit.test('should activate element by tab id using buttons', function(assert) {
        assert.expect(2);
        var tabsHTML = '<ul class="tabs">' +
            '<li><button type="button" data-cfw-tab-target="#home">Home</button></li>' +
            '<li><button type="button" data-cfw-tab-target="#profile">Profile</button></li>' +
            '</ul>';
        $('<ul><li id="home"></li><li id="profile"></li></ul>').appendTo('#qunit-fixture');

        $(tabsHTML).find('li:last button').CFW_Tab('show');
        assert.strictEqual($('#qunit-fixture').find('.active').attr('id'), 'profile');

        $(tabsHTML).find('li:first button').CFW_Tab('show');
        assert.strictEqual($('#qunit-fixture').find('.active').attr('id'), 'home');
    });

    QUnit.test('should activate element by tab id in ordered list', function(assert) {
        assert.expect(2);
        var pillsHTML = '<ol class="pills">' +
            '<li><a href="#home">Home</a></li>' +
            '<li><a href="#profile">Profile</a></li>' +
            '</ol>';
        $('<ul><li id="home"></li><li id="profile"></li></ul>').appendTo('#qunit-fixture');

        $(pillsHTML).find('li:last a').CFW_Tab('show');
        assert.strictEqual($('#qunit-fixture').find('.active').attr('id'), 'profile');

        $(pillsHTML).find('li:first a').CFW_Tab('show');
        assert.strictEqual($('#qunit-fixture').find('.active').attr('id'), 'home');
    });

    QUnit.test('should activate element by tab id in nav', function(assert) {
        assert.expect(2);
        var tabsHTML = '<nav>' +
            '<button type="button" data-cfw-tab-target="#home">Home</button>' +
            '<button type="button" data-cfw-tab-target="#profile">Profile</button>' +
            '</nav>';
        $('<ul><li id="home"></li><li id="profile"></li></ul>').appendTo('#qunit-fixture');
        $(tabsHTML).appendTo('#qunit-fixture');

        $(tabsHTML).find('button:last').CFW_Tab('show');
        assert.strictEqual($('#qunit-fixture').find('.active').attr('id'), 'profile');

        $(tabsHTML).find('button:first').CFW_Tab('show');
        assert.strictEqual($('#qunit-fixture').find('.active').attr('id'), 'home');
    });

    QUnit.test('should not appy role="tablist" to parent nav', function(assert) {
        assert.expect(3);
        var tabsHTML = '<nav>' +
            '<button type="button" data-cfw="tab" data-cfw-tab-target="#home">Home</button>' +
            '<button type="button" data-cfw="tab" data-cfw-tab-target="#profile">Profile</button>' +
            '</nav>';
        $('<ul><li id="home"></li><li id="profile"></li></ul>').appendTo('#qunit-fixture');
        $(tabsHTML).appendTo('#qunit-fixture');

        assert.strictEqual($('#qunit-fixture').find('nav').length, 1, 'parent <nav> exists');
        assert.strictEqual($('#qunit-fixture').find('nav[role="tablist"]').length, 0, 'parent <nav> does not have role="tablist"');
        $('#qunit-fixture').find('[data-cfw="tab"]').CFW_Tab();
        assert.strictEqual($('#qunit-fixture').find('nav[role="tablist"]').length, 0, 'parent <nav> does not have role="tablist" after invoking');
    });

    QUnit.test('should activate element by tab id in .nav', function(assert) {
        assert.expect(2);
        var tabsHTML = '<div class="nav">' +
            '<button type="button" data-cfw-tab-target="#home">Home</button>' +
            '<button type="button" data-cfw-tab-target="#profile">Profile</button>' +
            '</div>';
        $('<ul><li id="home"></li><li id="profile"></li></ul>').appendTo('#qunit-fixture');
        $(tabsHTML).appendTo('#qunit-fixture');

        $(tabsHTML).find('button:last').CFW_Tab('show');
        assert.strictEqual($('#qunit-fixture').find('.active').attr('id'), 'profile');

        $(tabsHTML).find('button:first').CFW_Tab('show');
        assert.strictEqual($('#qunit-fixture').find('.active').attr('id'), 'home');
    });

    QUnit.test('should activate element by tab id in .list', function(assert) {
        assert.expect(2);
        var tabsHTML = '<div class="list">' +
            '<button type="button" data-cfw-tab-target="#home">Home</button>' +
            '<button type="button" data-cfw-tab-target="#profile">Profile</button>' +
            '</div>';
        $('<ul><li id="home"></li><li id="profile"></li></ul>').appendTo('#qunit-fixture');

        $(tabsHTML).find('button:last').CFW_Tab('show');
        assert.strictEqual($('#qunit-fixture').find('.active').attr('id'), 'profile');

        $(tabsHTML).find('button:first').CFW_Tab('show');
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

    QUnit.test('should appy role="tablist" to parent <ul>', function(assert) {
        assert.expect(2);
        var tabsHTML = '<ul>' +
            '<li><button type="button" data-cfw="tab" data-cfw-tab-target="#home">Home</button></li>' +
            '<li><button type="button" data-cfw="tab" ata-cfw-tab-target="#profile">Profile</button></li>' +
            '</ul>';
        $('<ul><li id="home"></li><li id="profile"></li></ul>').appendTo('#qunit-fixture');
        $(tabsHTML).appendTo('#qunit-fixture');

        assert.strictEqual($('#qunit-fixture').find('ul[role="tablist"]').length, 0, 'parent <ul> does not have role="tablist"');
        $('#qunit-fixture').find('[data-cfw="tab"]').CFW_Tab();
        assert.strictEqual($('#qunit-fixture').find('ul[role="tablist"]').length, 1, 'parent <ul> has role="tablist" after invoking');
    });

    QUnit.test('should appy role="tablist" to parent <ol>', function(assert) {
        assert.expect(2);
        var tabsHTML = '<ol>' +
            '<li><button type="button" data-cfw="tab" data-cfw-tab-target="#home">Home</button></li>' +
            '<li><button type="button" data-cfw="tab" ata-cfw-tab-target="#profile">Profile</button></li>' +
            '</ol>';
        $('<ul><li id="home"></li><li id="profile"></li></ul>').appendTo('#qunit-fixture');
        $(tabsHTML).appendTo('#qunit-fixture');

        assert.strictEqual($('#qunit-fixture').find('ol[role="tablist"]').length, 0, 'parent <ol> does not have role="tablist"');
        $('#qunit-fixture').find('[data-cfw="tab"]').CFW_Tab();
        assert.strictEqual($('#qunit-fixture').find('ol[role="tablist"]').length, 1, 'parent <ol> has role="tablist" after invoking');
    });

    QUnit.test('should appy role="tablist" to parent .nav', function(assert) {
        assert.expect(2);
        var tabsHTML = '<div class="nav">' +
            '<button type="button" data-cfw="tab" data-cfw-tab-target="#home">Home</button>' +
            '<button type="button" data-cfw="tab" ata-cfw-tab-target="#profile">Profile</button>' +
            '</div>';
        $('<ul><li id="home"></li><li id="profile"></li></ul>').appendTo('#qunit-fixture');
        $(tabsHTML).appendTo('#qunit-fixture');

        assert.strictEqual($('#qunit-fixture').find('.nav[role="tablist"]').length, 0, 'parent .nav does not have role="tablist"');
        $('#qunit-fixture').find('[data-cfw="tab"]').CFW_Tab();
        assert.strictEqual($('#qunit-fixture').find('.nav[role="tablist"]').length, 1, 'parent .nav has role="tablist" after invoking');
    });

    QUnit.test('should appy role="tablist" to parent .list', function(assert) {
        assert.expect(2);
        var tabsHTML = '<div class="list">' +
            '<button type="button" data-cfw="tab" data-cfw-tab-target="#home">Home</button>' +
            '<button type="button" data-cfw="tab" ata-cfw-tab-target="#profile">Profile</button>' +
            '</div>';
        $('<ul><li id="home"></li><li id="profile"></li></ul>').appendTo('#qunit-fixture');
        $(tabsHTML).appendTo('#qunit-fixture');

        assert.strictEqual($('#qunit-fixture').find('.list[role="tablist"]').length, 0, 'parent .list does not have role="tablist"');
        $('#qunit-fixture').find('[data-cfw="tab"]').CFW_Tab();
        assert.strictEqual($('#qunit-fixture').find('.list[role="tablist"]').length, 1, 'parent .list has role="tablist" after invoking');
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
            '<li><button type="button" data-cfw="tab" data-cfw-tab-target="#home">Home</button></li>' +
            '<li><button type="button" data-cfw="tab" data-cfw-tab-target="#profile" disabled>Profile</button></li>' +
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
                setTimeout(function() {
                    assert.strictEqual($panes.filter('.in').length, 1);
                    done();
                }, 1);
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
                setTimeout(function() {
                    assert.strictEqual($panes.filter('.in').length, 0);
                    done();
                }, 1);
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
                setTimeout(function() {
                    assert.strictEqual($panes.first().hasClass('in'), false);
                    assert.strictEqual($panes.last().hasClass('in'), true);
                    done();
                }, 1);
            });

        assert.strictEqual($panes.first().hasClass('in'), true);
        assert.strictEqual($panes.last().hasClass('in'), false);
        $last.CFW_Tab('show');
    });

    QUnit.test('should move focus to previous tab item for up/left keypress on tab', function(assert) {
        assert.expect(2);

        $('<div class="nav">' +
            '<button id="tab0" type="button" data-cfw="tab" data-cfw-tab-target="#panel0">0</button>' +
            '<button id="tab1" type="button" data-cfw="tab" data-cfw-tab-target="#panel1">1</button>' +
            '<button id="tab2" type="button" data-cfw="tab" data-cfw-tab-target="#panel2">2</button>' +
            '</div>')
            .appendTo('#qunit-fixture');
        $('<ul><li id="panel0"></li><li id="panel1"></li><li id="panel2"></li></ul>').appendTo('#qunit-fixture');

        $('#qunit-fixture').find('[data-cfw="tab"]').CFW_Tab();

        $('#tab2').CFW_Tab('show');
        $('#tab2').trigger($.Event('keydown', {
            which: 38 // Up
        }));
        assert.strictEqual(document.activeElement, document.querySelector('#tab1'));
        $('#tab1').trigger($.Event('keydown', {
            which: 37 // Left
        }));
        assert.strictEqual(document.activeElement, document.querySelector('#tab0'));
    });

    QUnit.test('should move focus to next tab item for down/right keypress on tab', function(assert) {
        assert.expect(2);

        $('<div class="nav">' +
            '<button id="tab0" type="button" data-cfw="tab" data-cfw-tab-target="#panel0">0</button>' +
            '<button id="tab1" type="button" data-cfw="tab" data-cfw-tab-target="#panel1">1</button>' +
            '<button id="tab2" type="button" data-cfw="tab" data-cfw-tab-target="#panel2">2</button>' +
            '</div>')
            .appendTo('#qunit-fixture');
        $('<ul><li id="panel0"></li><li id="panel1"></li><li id="panel2"></li></ul>').appendTo('#qunit-fixture');

        $('#qunit-fixture').find('[data-cfw="tab"]').CFW_Tab();

        $('#tab0').trigger($.Event('keydown', {
            which: 40 // Down
        }));
        assert.strictEqual(document.activeElement, document.querySelector('#tab1'));
        $('#tab1').trigger($.Event('keydown', {
            which: 39 // Right
        }));
        assert.strictEqual(document.activeElement, document.querySelector('#tab2'));
    });

    QUnit.test('should move focus to next available tab item for arrow keypress on tab, skipping disabled tab', function(assert) {
        assert.expect(4);
        var done = assert.async();

        $('<div class="nav">' +
            '<button id="tab0" type="button" data-cfw="tab" data-cfw-tab-target="#panel0">0</button>' +
            '<button id="tab1" type="button" data-cfw="tab" data-cfw-tab-target="#panel1" disabled>1</button>' +
            '<button id="tab2" type="button" data-cfw="tab" data-cfw-tab-target="#panel2">2</button>' +
            '</div>')
            .appendTo('#qunit-fixture');
        $('<ul><li id="panel0"></li><li id="panel1"></li><li id="panel2"></li></ul>').appendTo('#qunit-fixture');

        $('#qunit-fixture').find('[data-cfw="tab"]').CFW_Tab();

        $('#tab2').CFW_Tab('show');
        $('#tab2').trigger($.Event('keydown', {
            which: 38 // Up
        }));
        setTimeout(function() {
            assert.strictEqual(document.activeElement, document.querySelector('#tab0'));
            $('#tab0').trigger($.Event('keydown', {
                which: 40 // Down
            }));
            setTimeout(function() {
                assert.strictEqual(document.activeElement, document.querySelector('#tab2'));
                $('#tab2').trigger($.Event('keydown', {
                    which: 37 // Left
                }));
                setTimeout(function() {
                    assert.strictEqual(document.activeElement, document.querySelector('#tab0'));
                    $('#tab0').trigger($.Event('keydown', {
                        which: 39 // Right
                    }));
                    setTimeout(function() {
                        assert.strictEqual(document.activeElement, document.querySelector('#tab2'));
                        done();
                    });
                });
            });
        });
    });
});
