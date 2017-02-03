$(function() {
    'use strict';

    QUnit.module('CFW_Lazy');

    QUnit.test('should be defined on jquery object', function(assert) {
        assert.expect(1);
        assert.ok($(document.body).CFW_Lazy, 'CFW_Lazy method is defined');
    });

    QUnit.test('should return jquery collection containing the element', function(assert) {
        assert.expect(2);
        var $el = $('<div/>');
        var $col = $el.CFW_Lazy();
        assert.ok($col instanceof $, 'returns jquery collection');
        assert.strictEqual($col[0], $el[0], 'collection contains element');
    });

    QUnit.test('should change src to placeholder at load', function(assert) {
        assert.expect(1);
        var $imgHtml = $('<img src="" data-cfw="lazy" data-cfw-lazy-src="../assets/img/test.gif" />');
        var placeholder = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
        $imgHtml
            .appendTo('#qunit-fixture')
            .CFW_Lazy();
        assert.equal($imgHtml.attr('src'), placeholder, 'image src replaced with placeholder');
    });

    QUnit.test('should change src to match data-src when visible within the viewport at init', function(assert) {
        assert.expect(2);
        var done = assert.async();
        var styles = '<style>'
            + '.container-viewport { position: absolute; top: 50px; left: 60px; width: 300px; height: 300px; }'
            + '</style>';
        var $styles = $(styles).appendTo('head');
        var $container = $('<div class="container-viewport"/>').appendTo(document.body);

        var $imgHtml = $('<img src="" id="img-1" data-cfw="lazy" data-cfw-lazy-src="../assets/img/test.gif" />');
        $imgHtml
            .appendTo($container)
            .one('afterShow.cfw.lazy', function() {
                assert.ok('show event fired');
                assert.equal($('#img-1').attr('src'), '../assets/img/test.gif', 'image src was updated');
                done();
                $container.remove();
                $styles.remove();
            })
            .CFW_Lazy();
    });
});
