$(function() {
    'use strict';

    QUnit.module('CFW_Slideshow', {
        beforeEach: function() {
            $(window).scrollTop(0);
        },
        afterEach: function() {
            $('#qunit-fixture').empty();
        }
    });

    QUnit.test('should be defined on jquery object', function(assert) {
        assert.expect(1);
        assert.ok($(document.body).CFW_Slideshow, 'CFW_Slideshow method is defined');
    });

    QUnit.test('should return jquery collection containing the element', function(assert) {
        assert.expect(2);
        var $el = $('<div></div>');
        var $col = $el.CFW_Slideshow();
        assert.ok($col instanceof $, 'returns jquery collection');
        assert.strictEqual($col[0], $el[0], 'collection contains element');
    });

    QUnit.test('should activate next tab when next control clicked', function(assert) {
        assert.expect(2);

        var $slideshow = $('<div class="nav">' +
            '<button id="slidePrev" type="button" data-cfw-slideshow-nav="prev">Previous</button>' +
            '<button id="tab0" type="button" data-cfw="tab" data-cfw-tab-target="#panel0">0</button>' +
            '<button id="tab1" type="button" data-cfw="tab" data-cfw-tab-target="#panel1">1</button>' +
            '<button id="tab2" type="button" data-cfw="tab" data-cfw-tab-target="#panel2">2</button>' +
            '<button id="slideNext" type="button" data-cfw-slideshow-nav="next">Next</button>' +
            '</div>')
            .appendTo('#qunit-fixture');
        $('<ul><li id="panel0"></li><li id="panel1"></li><li id="panel2"></li></ul>').appendTo('#qunit-fixture');

        var $tabs = $('#qunit-fixture').find('[data-cfw="tab"]').CFW_Tab();
        $slideshow.CFW_Slideshow();

        assert.strictEqual($tabs.filter('.active').attr('id'), 'tab0');
        $('#slideNext').trigger('click');
        assert.strictEqual($tabs.filter('.active').attr('id'), 'tab1');
    });

    QUnit.test('should activate next tab when next control clicked, skipping disabled tabs', function(assert) {
        assert.expect(2);

        var $slideshow = $('<div class="nav">' +
            '<button id="slidePrev" type="button" data-cfw-slideshow-nav="prev">Previous</button>' +
            '<button id="tab0" type="button" data-cfw="tab" data-cfw-tab-target="#panel0">0</button>' +
            '<button id="tab1" type="button" data-cfw="tab" data-cfw-tab-target="#panel1" disabled>1</button>' +
            '<button id="tab2" type="button" data-cfw="tab" data-cfw-tab-target="#panel2">2</button>' +
            '<button id="slideNext" type="button" data-cfw-slideshow-nav="next">Next</button>' +
            '</div>')
            .appendTo('#qunit-fixture');
        $('<ul><li id="panel0"></li><li id="panel1"></li><li id="panel2"></li></ul>').appendTo('#qunit-fixture');

        var $tabs = $('#qunit-fixture').find('[data-cfw="tab"]').CFW_Tab();
        $slideshow.CFW_Slideshow();

        assert.strictEqual($tabs.filter('.active').attr('id'), 'tab0');
        $('#slideNext').trigger('click');
        assert.strictEqual($tabs.filter('.active').attr('id'), 'tab2');
    });

    QUnit.test('should trigger next event when next control clicked', function(assert) {
        assert.expect(1);
        var done = assert.async();

        var $slideshow = $('<div class="nav">' +
            '<button id="slidePrev" type="button" data-cfw-slideshow-nav="prev">Previous</button>' +
            '<button id="tab0" type="button" data-cfw="tab" data-cfw-tab-target="#panel0">0</button>' +
            '<button id="tab1" type="button" data-cfw="tab" data-cfw-tab-target="#panel1">1</button>' +
            '<button id="tab2" type="button" data-cfw="tab" data-cfw-tab-target="#panel2">2</button>' +
            '<button id="slideNext" type="button" data-cfw-slideshow-nav="next">Next</button>' +
            '</div>')
            .appendTo('#qunit-fixture');
        $('<ul><li id="panel0"></li><li id="panel1"></li><li id="panel2"></li></ul>').appendTo('#qunit-fixture');

        /* var $tabs = */ $('#qunit-fixture').find('[data-cfw="tab"]').CFW_Tab();
        $slideshow.CFW_Slideshow();

        $slideshow.on('next.cfw.slideshow', function() {
            assert.ok(true);
            done();
        });
        $('#slideNext').trigger('click');
    });

    QUnit.test('should move focus to next tab item for down/right keypress on tab', function(assert) {
        assert.expect(2);

        var $slideshow = $('<div class="nav">' +
            '<button id="slidePrev" type="button" data-cfw-slideshow-nav="prev">Previous</button>' +
            '<button id="tab0" type="button" data-cfw="tab" data-cfw-tab-target="#panel0">0</button>' +
            '<button id="tab1" type="button" data-cfw="tab" data-cfw-tab-target="#panel1">1</button>' +
            '<button id="tab2" type="button" data-cfw="tab" data-cfw-tab-target="#panel2">2</button>' +
            '<button id="slideNext" type="button" data-cfw-slideshow-nav="next">Next</button>' +
            '</div>')
            .appendTo('#qunit-fixture');
        $('<ul><li id="panel0"></li><li id="panel1"></li><li id="panel2"></li></ul>').appendTo('#qunit-fixture');

        /* var $tabs = */ $('#qunit-fixture').find('[data-cfw="tab"]').CFW_Tab();
        $slideshow.CFW_Slideshow();

        $('#tab0').trigger($.Event('keydown', {
            which: 40 // Down
        }));
        assert.strictEqual(document.activeElement, document.querySelector('#tab1'));
        $('#tab1').trigger($.Event('keydown', {
            which: 39 // Right
        }));
        assert.strictEqual(document.activeElement, document.querySelector('#tab2'));
    });

    QUnit.test('should activate next tab item for down/right keypress on control', function(assert) {
        assert.expect(2);

        var $slideshow = $('<div class="nav">' +
            '<button id="slidePrev" type="button" data-cfw-slideshow-nav="prev">Previous</button>' +
            '<button id="tab0" type="button" data-cfw="tab" data-cfw-tab-target="#panel0">0</button>' +
            '<button id="tab1" type="button" data-cfw="tab" data-cfw-tab-target="#panel1">1</button>' +
            '<button id="tab2" type="button" data-cfw="tab" data-cfw-tab-target="#panel2">2</button>' +
            '<button id="slideNext" type="button" data-cfw-slideshow-nav="next">Next</button>' +
            '</div>')
            .appendTo('#qunit-fixture');
        $('<ul><li id="panel0"></li><li id="panel1"></li><li id="panel2"></li></ul>').appendTo('#qunit-fixture');

        /* var $tabs = */ $('#qunit-fixture').find('[data-cfw="tab"]').CFW_Tab();
        $slideshow.CFW_Slideshow();

        $('#slidePrev').trigger($.Event('keydown', {
            which: 40 // Down
        }));
        assert.strictEqual($('#qunit-fixture').find('.active').attr('id'), 'tab1');
        $('#slideNext').trigger($.Event('keydown', {
            which: 39 // Right
        }));
        assert.strictEqual($('#qunit-fixture').find('.active').attr('id'), 'tab2');
    });

    QUnit.test('should not move focus to next tab item for down/right keypress on next control', function(assert) {
        assert.expect(3);

        var $slideshow = $('<div class="nav">' +
            '<button id="slidePrev" type="button" data-cfw-slideshow-nav="prev">Previous</button>' +
            '<button id="tab0" type="button" data-cfw="tab" data-cfw-tab-target="#panel0">0</button>' +
            '<button id="tab1" type="button" data-cfw="tab" data-cfw-tab-target="#panel1">1</button>' +
            '<button id="tab2" type="button" data-cfw="tab" data-cfw-tab-target="#panel2">2</button>' +
            '<button id="slideNext" type="button" data-cfw-slideshow-nav="next">Next</button>' +
            '</div>')
            .appendTo('#qunit-fixture');
        $('<ul><li id="panel0"></li><li id="panel1"></li><li id="panel2"></li></ul>').appendTo('#qunit-fixture');

        var $tabs = $('#qunit-fixture').find('[data-cfw="tab"]').CFW_Tab();
        $slideshow.CFW_Slideshow();

        $('#tab1').CFW_Tab('show');
        assert.strictEqual($tabs.filter('.active').attr('id'), 'tab1');
        $('#slideNext').trigger('focus').trigger($.Event('keydown', {
            which: 37 // Left
        }));
        assert.strictEqual($tabs.filter('.active').attr('id'), 'tab0');
        assert.strictEqual(document.activeElement, document.querySelector('#slideNext'));
    });

    QUnit.test('should activate previous tab when previous control clicked', function(assert) {
        assert.expect(2);

        var $slideshow = $('<div class="nav">' +
            '<button id="slidePrev" type="button" data-cfw-slideshow-nav="prev">Previous</button>' +
            '<button id="tab0" type="button" data-cfw="tab" data-cfw-tab-target="#panel0">0</button>' +
            '<button id="tab1" type="button" data-cfw="tab" data-cfw-tab-target="#panel1">1</button>' +
            '<button id="tab2" type="button" data-cfw="tab" data-cfw-tab-target="#panel2">2</button>' +
            '<button id="slideNext" type="button" data-cfw-slideshow-nav="next">Next</button>' +
            '</div>')
            .appendTo('#qunit-fixture');
        $('<ul><li id="panel0"></li><li id="panel1"></li><li id="panel2"></li></ul>').appendTo('#qunit-fixture');

        var $tabs = $('#qunit-fixture').find('[data-cfw="tab"]').CFW_Tab();
        $slideshow.CFW_Slideshow();
        $('#tab1').CFW_Tab('show');

        assert.strictEqual($tabs.filter('.active').attr('id'), 'tab1');
        $('#slidePrev').trigger('click');
        assert.strictEqual($tabs.filter('.active').attr('id'), 'tab0');
    });

    QUnit.test('should activate previous tab when previous control clicked, skipping disabled tabs', function(assert) {
        assert.expect(2);

        var $slideshow = $('<div class="nav">' +
            '<button id="slidePrev" type="button" data-cfw-slideshow-nav="prev">Previous</button>' +
            '<button id="tab0" type="button" data-cfw="tab" data-cfw-tab-target="#panel0">0</button>' +
            '<button id="tab1" type="button" data-cfw="tab" data-cfw-tab-target="#panel1" disabled>1</button>' +
            '<button id="tab2" type="button" data-cfw="tab" data-cfw-tab-target="#panel2">2</button>' +
            '<button id="slideNext" type="button" data-cfw-slideshow-nav="next">Next</button>' +
            '</div>')
            .appendTo('#qunit-fixture');
        $('<ul><li id="panel0"></li><li id="panel1"></li><li id="panel2"></li></ul>').appendTo('#qunit-fixture');

        var $tabs = $('#qunit-fixture').find('[data-cfw="tab"]').CFW_Tab();
        $slideshow.CFW_Slideshow();
        $('#tab2').CFW_Tab('show');

        assert.strictEqual($tabs.filter('.active').attr('id'), 'tab2');
        $('#slidePrev').trigger('click');
        assert.strictEqual($tabs.filter('.active').attr('id'), 'tab0');
    });

    QUnit.test('should trigger prev event when previous control clicked', function(assert) {
        assert.expect(1);
        var done = assert.async();

        var $slideshow = $('<div class="nav">' +
            '<button id="slidePrev" type="button" data-cfw-slideshow-nav="prev">Previous</button>' +
            '<button id="tab0" type="button" data-cfw="tab" data-cfw-tab-target="#panel0">0</button>' +
            '<button id="tab1" type="button" data-cfw="tab" data-cfw-tab-target="#panel1">1</button>' +
            '<button id="tab2" type="button" data-cfw="tab" data-cfw-tab-target="#panel2">2</button>' +
            '<button id="slideNext" type="button" data-cfw-slideshow-nav="next">Next</button>' +
            '</div>')
            .appendTo('#qunit-fixture');
        $('<ul><li id="panel0"></li><li id="panel1"></li><li id="panel2"></li></ul>').appendTo('#qunit-fixture');

        /* var $tabs = */ $('#qunit-fixture').find('[data-cfw="tab"]').CFW_Tab();
        $slideshow.CFW_Slideshow();

        $slideshow.on('prev.cfw.slideshow', function() {
            assert.ok(true);
            done();
        });
        $('#tab2').CFW_Tab('show');
        $('#slidePrev').trigger('click');
    });

    QUnit.test('should move focus to previous tab item for up/left keypress on tab', function(assert) {
        assert.expect(2);

        var $slideshow = $('<div class="nav">' +
            '<button id="slidePrev" type="button" data-cfw-slideshow-nav="prev">Previous</button>' +
            '<button id="tab0" type="button" data-cfw="tab" data-cfw-tab-target="#panel0">0</button>' +
            '<button id="tab1" type="button" data-cfw="tab" data-cfw-tab-target="#panel1">1</button>' +
            '<button id="tab2" type="button" data-cfw="tab" data-cfw-tab-target="#panel2">2</button>' +
            '<button id="slideNext" type="button" data-cfw-slideshow-nav="next">Next</button>' +
            '</div>')
            .appendTo('#qunit-fixture');
        $('<ul><li id="panel0"></li><li id="panel1"></li><li id="panel2"></li></ul>').appendTo('#qunit-fixture');

        /* var $tabs = */ $('#qunit-fixture').find('[data-cfw="tab"]').CFW_Tab();
        $slideshow.CFW_Slideshow();

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

    QUnit.test('should activate previous tab item for up/left keypress on control', function(assert) {
        assert.expect(2);

        var $slideshow = $('<div class="nav">' +
            '<button id="slidePrev" type="button" data-cfw-slideshow-nav="prev">Previous</button>' +
            '<button id="tab0" type="button" data-cfw="tab" data-cfw-tab-target="#panel0">0</button>' +
            '<button id="tab1" type="button" data-cfw="tab" data-cfw-tab-target="#panel1">1</button>' +
            '<button id="tab2" type="button" data-cfw="tab" data-cfw-tab-target="#panel2">2</button>' +
            '<button id="slideNext" type="button" data-cfw-slideshow-nav="next">Next</button>' +
            '</div>')
            .appendTo('#qunit-fixture');
        $('<ul><li id="panel0"></li><li id="panel1"></li><li id="panel2"></li></ul>').appendTo('#qunit-fixture');

        /* var $tabs = */ $('#qunit-fixture').find('[data-cfw="tab"]').CFW_Tab();
        $slideshow.CFW_Slideshow();

        $('#tab2').CFW_Tab('show');
        $('#slidePrev').trigger($.Event('keydown', {
            which: 38 // Up
        }));
        assert.strictEqual($('#qunit-fixture').find('.active').attr('id'), 'tab1');
        $('#slideNext').trigger($.Event('keydown', {
            which: 37 // Left
        }));
        assert.strictEqual($('#qunit-fixture').find('.active').attr('id'), 'tab0');
    });

    QUnit.test('should not move focus to previous tab item for keypress on previous control', function(assert) {
        assert.expect(3);

        var $slideshow = $('<div class="nav">' +
            '<button id="slidePrev" type="button" data-cfw-slideshow-nav="prev">Previous</button>' +
            '<button id="tab0" type="button" data-cfw="tab" data-cfw-tab-target="#panel0">0</button>' +
            '<button id="tab1" type="button" data-cfw="tab" data-cfw-tab-target="#panel1">1</button>' +
            '<button id="tab2" type="button" data-cfw="tab" data-cfw-tab-target="#panel2">2</button>' +
            '<button id="slideNext" type="button" data-cfw-slideshow-nav="next">Next</button>' +
            '</div>')
            .appendTo('#qunit-fixture');
        $('<ul><li id="panel0"></li><li id="panel1"></li><li id="panel2"></li></ul>').appendTo('#qunit-fixture');

        var $tabs = $('#qunit-fixture').find('[data-cfw="tab"]').CFW_Tab();
        $slideshow.CFW_Slideshow();

        $('#tab2').CFW_Tab('show');
        assert.strictEqual($tabs.filter('.active').attr('id'), 'tab2');
        $('#slidePrev').trigger('focus');
        $('#slidePrev').trigger($.Event('keydown', {
            which: 37 // Left
        }));
        assert.strictEqual($tabs.filter('.active').attr('id'), 'tab1');
        assert.strictEqual(document.activeElement, document.querySelector('#slidePrev'));
    });

    QUnit.test('should apply disabled attribute to previous button when first tab is active', function(assert) {
        assert.expect(1);

        var $slideshow = $('<div class="nav">' +
            '<button id="slidePrev" type="button" data-cfw-slideshow-nav="prev">Previous</button>' +
            '<button id="tab0" type="button" data-cfw="tab" data-cfw-tab-target="#panel0">0</button>' +
            '<button id="tab1" type="button" data-cfw="tab" data-cfw-tab-target="#panel1">1</button>' +
            '<button id="tab2" type="button" data-cfw="tab" data-cfw-tab-target="#panel2">2</button>' +
            '<button id="slideNext" type="button" data-cfw-slideshow-nav="next">Next</button>' +
            '</div>')
            .appendTo('#qunit-fixture');
        $('<ul><li id="panel0"></li><li id="panel1"></li><li id="panel2"></li></ul>').appendTo('#qunit-fixture');

        $('#qunit-fixture').find('[data-cfw="tab"]').CFW_Tab();
        $slideshow.CFW_Slideshow();

        assert.strictEqual($('#slidePrev').is(':disabled'), true);
    });

    QUnit.test('should apply disabled class to previous link when first tab is active', function(assert) {
        assert.expect(1);

        var $slideshow = $('<div class="nav">' +
            '<a id="slidePrev" role="button" href="#" data-cfw-slideshow-nav="prev">Previous</a>' +
            '<button id="tab0" type="button" data-cfw="tab" data-cfw-tab-target="#panel0">0</button>' +
            '<button id="tab1" type="button" data-cfw="tab" data-cfw-tab-target="#panel1">1</button>' +
            '<button id="tab2" type="button" data-cfw="tab" data-cfw-tab-target="#panel2">2</button>' +
            '<a id="slideNext" role="button" href="#" data-cfw-slideshow-nav="next">Next</button>' +
            '</div>')
            .appendTo('#qunit-fixture');
        $('<ul><li id="panel0"></li><li id="panel1"></li><li id="panel2"></li></ul>').appendTo('#qunit-fixture');

        $('#qunit-fixture').find('[data-cfw="tab"]').CFW_Tab();
        $slideshow.CFW_Slideshow();

        assert.strictEqual($('#slidePrev').hasClass('disabled'), true);
    });

    QUnit.test('should not disable previous control when first tab is active when loop=true', function(assert) {
        assert.expect(1);

        var $slideshow = $('<div class="nav">' +
            '<button id="slidePrev" type="button" data-cfw-slideshow-nav="prev">Previous</button>' +
            '<button id="tab0" type="button" data-cfw="tab" data-cfw-tab-target="#panel0">0</button>' +
            '<button id="tab1" type="button" data-cfw="tab" data-cfw-tab-target="#panel1">1</button>' +
            '<button id="tab2" type="button" data-cfw="tab" data-cfw-tab-target="#panel2">2</button>' +
            '<button id="slideNext" type="button" data-cfw-slideshow-nav="next">Next</button>' +
            '</div>')
            .appendTo('#qunit-fixture');
        $('<ul><li id="panel0"></li><li id="panel1"></li><li id="panel2"></li></ul>').appendTo('#qunit-fixture');

        $('#qunit-fixture').find('[data-cfw="tab"]').CFW_Tab();
        $slideshow.CFW_Slideshow({
            loop: true
        });

        assert.strictEqual($('#slidePrev').is(':disabled'), false);
    });

    QUnit.test('should apply disabled attribute to next button when last tab is active', function(assert) {
        assert.expect(1);

        var $slideshow = $('<div class="nav">' +
            '<button id="slidePrev" type="button" data-cfw-slideshow-nav="prev">Previous</button>' +
            '<button id="tab0" type="button" data-cfw="tab" data-cfw-tab-target="#panel0">0</button>' +
            '<button id="tab1" type="button" data-cfw="tab" data-cfw-tab-target="#panel1">1</button>' +
            '<button id="tab2" type="button" data-cfw="tab" data-cfw-tab-target="#panel2">2</button>' +
            '<button id="slideNext" type="button" data-cfw-slideshow-nav="next">Next</button>' +
            '</div>')
            .appendTo('#qunit-fixture');
        $('<ul><li id="panel0"></li><li id="panel1"></li><li id="panel2"></li></ul>').appendTo('#qunit-fixture');

        $('#qunit-fixture').find('[data-cfw="tab"]').CFW_Tab();
        $slideshow.CFW_Slideshow();

        $('#tab2').CFW_Tab('show');
        assert.strictEqual($('#slideNext').is(':disabled'), true);
    });

    QUnit.test('should apply disabled class to next link when last tab is active', function(assert) {
        assert.expect(1);

        var $slideshow = $('<div class="nav">' +
            '<a id="slidePrev" role="button" href="#" data-cfw-slideshow-nav="prev">Previous</a>' +
            '<button id="tab0" type="button" data-cfw="tab" data-cfw-tab-target="#panel0">0</button>' +
            '<button id="tab1" type="button" data-cfw="tab" data-cfw-tab-target="#panel1">1</button>' +
            '<button id="tab2" type="button" data-cfw="tab" data-cfw-tab-target="#panel2">2</button>' +
            '<a id="slideNext" role="button" href="#" data-cfw-slideshow-nav="next">Next</button>' +
            '</div>')
            .appendTo('#qunit-fixture');
        $('<ul><li id="panel0"></li><li id="panel1"></li><li id="panel2"></li></ul>').appendTo('#qunit-fixture');

        $('#qunit-fixture').find('[data-cfw="tab"]').CFW_Tab();
        $slideshow.CFW_Slideshow();

        $('#tab2').CFW_Tab('show');
        assert.strictEqual($('#slideNext').hasClass('disabled'), true);
    });

    QUnit.test('should not disable next control when last tab is active when loop=true', function(assert) {
        assert.expect(1);

        var $slideshow = $('<div class="nav">' +
            '<button id="slidePrev" type="button" data-cfw-slideshow-nav="prev">Previous</button>' +
            '<button id="tab0" type="button" data-cfw="tab" data-cfw-tab-target="#panel0">0</button>' +
            '<button id="tab1" type="button" data-cfw="tab" data-cfw-tab-target="#panel1">1</button>' +
            '<button id="tab2" type="button" data-cfw="tab" data-cfw-tab-target="#panel2">2</button>' +
            '<button id="slideNext" type="button" data-cfw-slideshow-nav="next">Next</button>' +
            '</div>')
            .appendTo('#qunit-fixture');
        $('<ul><li id="panel0"></li><li id="panel1"></li><li id="panel2"></li></ul>').appendTo('#qunit-fixture');

        $('#qunit-fixture').find('[data-cfw="tab"]').CFW_Tab();
        $slideshow.CFW_Slideshow({
            loop: true
        });

        $('#tab2').CFW_Tab('show');
        assert.strictEqual($('#slideNext').is(':disabled'), false);
    });

    QUnit.test('should allow looping when loop=true', function(assert) {
        assert.expect(3);

        var $slideshow = $('<div class="nav">' +
            '<button id="slidePrev" type="button" data-cfw-slideshow-nav="prev">Previous</button>' +
            '<button id="tab0" type="button" data-cfw="tab" data-cfw-tab-target="#panel0">0</button>' +
            '<button id="tab1" type="button" data-cfw="tab" data-cfw-tab-target="#panel1">1</button>' +
            '<button id="tab2" type="button" data-cfw="tab" data-cfw-tab-target="#panel2">2</button>' +
            '<button id="slideNext" type="button" data-cfw-slideshow-nav="next">Next</button>' +
            '</div>')
            .appendTo('#qunit-fixture');
        $('<ul><li id="panel0"></li><li id="panel1"></li><li id="panel2"></li></ul>').appendTo('#qunit-fixture');

        var $tabs = $('#qunit-fixture').find('[data-cfw="tab"]').CFW_Tab();
        $slideshow.CFW_Slideshow({
            loop: true
        });

        assert.strictEqual($tabs.filter('.active').attr('id'), 'tab0');
        $('#slidePrev').trigger('click');
        assert.strictEqual($tabs.filter('.active').attr('id'), 'tab2');
        $('#slideNext').trigger('click');
        assert.strictEqual($tabs.filter('.active').attr('id'), 'tab0');
    });
});
