$(function() {
    'use strict';

    QUnit.module('CFW_Affix');

    QUnit.test('should be defined on jquery object', function(assert) {
        assert.expect(1);
        assert.ok($(document.body).CFW_Affix, 'CFW_Affix method is defined');
    });

    QUnit.test('should return jquery collection containing the element', function(assert) {
        assert.expect(2);
        var $el = $('<div/>');
        var $col = $el.CFW_Affix();
        assert.ok($col instanceof $, 'returns jquery collection');
        assert.strictEqual($col[0], $el[0], 'collection contains element');
    });

    QUnit.test('should exit early if element is not visible', function(assert) {
        assert.expect(1);
        var $affix = $('<div style="display: none"/>').CFW_Affix();
        $affix.data('cfw.affix').checkPosition();
        assert.ok(!$affix.hasClass('affix'), 'affix class was not added');
    });

    QUnit.test('should trigger affixed event after affix', function(assert) {
        assert.expect(2);
        var done = assert.async();

        var templateHTML = '<div id="affixTarget">'
            + '<ul>'
            + '<li>Please affix</li>'
            + '<li>And unaffix</li>'
            + '</ul>'
            + '</div>'
            + '<div id="affixAfter" style="height: 20000px; display: block;"/>';
        $(templateHTML).appendTo(document.body);

        $('#affixTarget').CFW_Affix({
            offset: $('#affixTarget ul').position()
        });

        $('#affixTarget')
            .on('affix.cfw.affix', function() {
                assert.ok(true, 'affix event fired');
            }).on('affixed.cfw.affix', function() {
                assert.ok(true, 'affixed event fired');
                $('#affixTarget, #affixAfter').remove();
                done();
            });

        setTimeout(function() {
            window.scrollTo(0, document.body.scrollHeight);

            setTimeout(function() {
                window.scroll(0, 0);
            }, 50); // for testing in a browser
        }, 0);
    });

    QUnit.test('should affix-top when scrolling up to offset when parent has padding', function(assert) {
        assert.expect(1);
        var done = assert.async();

        var templateHTML = '<div id="padding-offset" style="padding-top: 20px;">'
            + '<div id="affixTopTarget">'
            + '<p>Testing affix-top class is added</p>'
            + '</div>'
            + '<div style="height: 1000px; display: block;"/>'
            + '</div>';
        $(templateHTML).appendTo(document.body);

        $('#affixTopTarget')
            .CFW_Affix({
                offset: { top: 120, bottom: 0 }
            })
            .on('affixed-top.cfw.affix', function() {
                assert.ok($('#affixTopTarget').hasClass('affix-top'), 'affix-top class applied');
                $('#padding-offset').remove();
                done();
            });

        setTimeout(function() {
            window.scrollTo(0, document.body.scrollHeight);

            setTimeout(function() {
                window.scroll(0, 119);
            }, 250);
        }, 250);
    });
});
