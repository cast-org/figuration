/* eslint-disable no-implicit-globals, no-magic-numbers */
/* global ClipboardJS, Holder, anchors */

/*!
 * Figuration (v4.0.0-alpha.6)
 * http://figuration.org
 * Copyright 2013-2019 CAST, Inc.
 * Licensed under MIT (https://github.com/cast-org/figuration/blob/master/LICENSE)
 */

// =====
// This is only used for the CAST Figuration documentation.
// It is not needed to build your own site.
// We suggest you don't use it!
// =====

(function($) {
    'use strict';

    Holder.addTheme('gray', {
        bg: '#999',
        fg: '#111',
        size: 12,
        font: 'sans-serif',
        fontweight: 'normal'
    });

    var addAnchors = function() {
        // anchors.options.placement = 'left';
        var selector = '.cf-content > h2, .cf-content > h3, .cf-content > h4, .cf-content > h5';
        anchors.add(selector);
        $(selector).wrapInner('<div></div>');
    };

    var addClipboard = function() {
        // Insert copy to clipboard button before .highlight
        $('.highlight').each(function() {
            var btnHtml = '<div class="cf-clipboard"><button type="button" class="btn btn-small btn-secondary btn-clipboard" title="Copy to clipboard">Copy</button></div>';
            $(this).before(btnHtml);
        });

        $('.btn-clipboard')
            .CFW_Tooltip({
                animate: false
            });

        var clipboard = new ClipboardJS('.btn-clipboard', {
            target: function(trigger) {
                return trigger.parentNode.nextElementSibling;
            }
        });

        clipboard.on('success', function(e) {
            $(e.trigger)
                .CFW_Tooltip('hide')
                .attr('data-cfw-tooltip-original-title', 'Copied!')
                .CFW_Tooltip('show')
                .attr('data-cfw-tooltip-original-title', 'Copy to clipboard');

            e.clearSelection();
        });

        clipboard.on('error', function(e) {
            var modifierKey = /Mac/i.test(navigator.userAgent) ? '\u2318' : 'Ctrl-';
            var fallbackMsg = 'Press ' + modifierKey + 'C to copy';

            $(e.trigger)
                .CFW_Tooltip('hide')
                .attr('data-cfw-tooltip-original-title', fallbackMsg)
                .CFW_Tooltip('show')
                .attr('data-cfw-tooltip-original-title', 'Copy to clipboard')
        });
    };

    var toplinkAffix = function() {
        var $toplink = $('.toplink');

        $toplink.CFW_Affix({
            top: function() {
                return $('.cf-title').offset().top;
            },
            bottom: function() {
                return $('footer').outerHeight();
            }
        });
        $(window).scroll();
    };
    var rgb2hex = function(rgb) {
        if (/^#[0-9A-F]{6}$/i.test(rgb)) { return rgb; }

        rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
        var hex = function(x) {
            return ('0' + parseInt(x, 10).toString(16)).slice(-2);
        };
        return '#' + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
    };

    var paletteHex = function() {
        var $items = $('.palette-base, .palette-item');
        var $this = null;
        var color = '';
        if ($items.length > 0) {
            $items.each(function() {
                $this = $(this);
                color = rgb2hex($this.css('background-color'));
                $this.append('<span class="float-end">' + color + '</span>');
            });
        }
    };

    var sectionToc = function() {
        var $toc = $('#markdown-toc');
        if (!$toc.length) { return; }

        var $clone = $toc.clone();
        $clone.find('ul li').addClass('section-toc-h3');
        $clone.find('ul ul li').addClass('section-toc-h4').removeClass('section-toc-h3');
        $clone.find('ul ul ul li').addClass('section-toc-h5').removeClass('section-toc-h4');
        $clone.find('a').removeAttr('id');

        // Ouput new section toc
        var $section = $('<ul class="section-toc"></ul>');
        var $items = $clone.find('li');
        $section.append($items);
        $('.cf-toc').append($section);

        // Add scrollspy here - using <body> data attributes comes too early
        $('body').CFW_Scrollspy({
            target: '.section-toc'
        });
    };

    var docsDirection = function() {
        var fileRename = function(id, filename) {
            var $node = $('#' + id);
            var path = $node.attr('href');
            var isMin = path.indexOf('.min.css') >= 0;
            var re = /^(.*\/)?[^/]+\.(css)$/i;
            var repStr = '$1' + filename;
            path = path.replace(re, repStr);
            path += isMin ? '.min.css' : '.css';
            $node.attr('href', path);
        };

        var setLTR = function(doReset) {
            $('#dir-ltr').closest('ul').find('.active').removeClass('active').removeAttr('aria-current');
            $('#dir-ltr').addClass('active').attr('aria-current', 'true');
            $('html').removeAttr('dir');
            if (doReset) {
                fileRename('cssCore', 'figuration');
                fileRename('cssDocs', 'docs');
            }
            document.cookie = 'docsDir=';
        };

        var setRTL = function() {
            $('#dir-rtl').closest('ul').find('.active').removeClass('active').removeAttr('aria-current');
            $('#dir-rtl').addClass('active').attr('aria-current', 'true');
            $('html').attr('dir', 'rtl');
            fileRename('cssCore', 'figuration-rtl');
            fileRename('cssDocs', 'docs-rtl');
            document.cookie = 'docsDir=rtl';
        };

        var getCookie = function(cname) {
            var name = cname + '=';
            var decodedCookie = decodeURIComponent(document.cookie);
            var ca = decodedCookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) === ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) === 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return '';
        };

        $('#dir-ltr').on('click', function(e) {
            e.preventDefault();
            setLTR(true);
        });
        $('#dir-rtl').on('click', function(e) {
            e.preventDefault();
            setRTL();
        });

        // Check on load
        // var settings = document.cookie;
        if (getCookie('docsDir') === 'rtl') {
            setRTL();
        } else {
            setLTR(false);
        }
    };

    // Direction for player dropdown menus
    $(document, '[data-cfw="player"]').on('ready.cfw.player', function(e) {
        $(e.target).closest('[data-cfw="player"]').find('.player-caption-wrapper').addClass('dropup dropdown-reverse');
        $(e.target).closest('[data-cfw="player"]').find('.player-script-wrapper').addClass('dropup dropdown-reverse');
        $(e.target).closest('[data-cfw="player"]').find('.player-text-describe-wrapper').addClass('dropup dropdown-reverse');
    });

    $(window).ready(function() {
        addAnchors();
        addClipboard();
        toplinkAffix();
        paletteHex();
        sectionToc();
        docsDirection();

        // Indeterminate checkbox example
        $('.cf-example-indeterminate [type="checkbox"]').prop('indeterminate', true);

        // Disable empty links in docs examples
        $('.cf-content [href="#"]').on('click', function(e) {
            e.preventDefault();
        });

        // Toggle animated progress bar
        $('.cf-toggle-animated-progress').on('click', function() {
            $(this).siblings('.progress').find('.progress-bar-striped').toggleClass('progress-bar-animated');
        });
    });
}(jQuery));
