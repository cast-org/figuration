$(function() {
    'use strict';

    QUnit.module('CFW_Affix', {
        beforeEach: function() {
            $(window).scrollTop(0);
        },
        afterEach: function() {
            $('#qunit-fixture').empty();
        }
    });

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

    // FIXME
    // Disabled until these can be fixed for Karma tests
    // These seem to work on real devices, but fail in Sauce tests
    // form some reason.
    //    QUnit.test('should trigger affixed event after affix', function(assert) {
    //        assert.expect(2);
    //        var done = assert.async();
    //
    //        var templateHTML = '<div id="affixTarget">' +
    //            '<ul>' +
    //            '<li>Please affix</li>' +
    //            '<li>And unaffix</li>' +
    //            '</ul>' +
    //            '</div>' +
    //            '<div id="affixAfter" style="height: 20000px; display: block;"/>';
    //        $(templateHTML).appendTo(document.body);
    //
    //        $('#affixTarget')
    //            .on('affix.cfw.affix', function() {
    //                assert.ok(true, 'affix event fired');
    //            }).on('affixed.cfw.affix', function() {
    //                assert.ok(true, 'affixed event fired');
    //                $('#affixTarget, #affixAfter').remove();
    //                done();
    //            });
    //        $('#affixTarget').CFW_Affix({
    //                top: $('#affixTarget ul').position().top
    //            });
    //
    //        setTimeout(function() {
    //            window.scroll(0, document.body.scrollHeight);
    //
    //            setTimeout(function() {
    //                window.scroll(0, 0);
    //            }, 250); // for testing in a browser
    //        }, 250);
    //    });
    //
    //    QUnit.test('should affix-top when scrolling up to offset when parent has padding', function(assert) {
    //        assert.expect(1);
    //        var done = assert.async();
    //
    //        var templateHTML = '<div id="padding-offset" style="padding-top: 20px;">' +
    //            '<div id="affixTopTarget">' +
    //            '<p>Testing affix-top class is added</p>' +
    //            '</div>' +
    //            '<div style="height: 1000px; display: block;"/>' +
    //            '</div>';
    //        $(templateHTML).appendTo(document.body);
    //
    //        $('#affixTopTarget')
    //            .on('affixed-top.cfw.affix', function() {
    //                assert.ok($('#affixTopTarget').hasClass('affix-top'), 'affix-top class applied');
    //                $('#padding-offset').remove();
    //                done();
    //            });
    //
    //        $('#affixTopTarget').CFW_Affix({
    //                top: 120,
    //                bottom: 0
    //            });
    //
    //        setTimeout(function() {
    //            window.scroll(0, document.body.scrollHeight);
    //
    //            setTimeout(function() {
    //                window.scroll(0, 119);
    //            }, 250);
    //        }, 250);
    //    });
});
