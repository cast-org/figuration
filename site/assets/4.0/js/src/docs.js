// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++

/* eslint-disable no-alert, no-magic-numbers, no-new-func */
/* global ClipboardJS, Holder */

/*!
 * Figuration (v4.0.0-beta.3)
 * http://figuration.org
 * Copyright 2013-2020 CAST, Inc.
 * Licensed under MIT (https://github.com/cast-org/figuration/blob/master/LICENSE)
 */

// Intended to prevent false-positive bug reports about stuff not working properly in old versions of IE due to folks testing using IE's unreliable emulation modes.
(function() {
    'use strict';

    var emulatedIEMajorVersion = function() {
        var groups = /MSIE ([0-9.]+)/.exec(window.navigator.userAgent);
        if (groups === null) {
            return null;
        }
        var ieVersionNum = parseInt(groups[1], 10);
        var ieMajorVersion = Math.floor(ieVersionNum);
        return ieMajorVersion;
    };

    var actualNonEmulatedIEMajorVersion = function() {
        // Detects the actual version of IE in use, even if it's in an older-IE emulation mode.
        // IE JavaScript conditional compilation docs: https://msdn.microsoft.com/library/121hztk3%28v=vs.94%29.aspx
        // @cc_on docs: https://msdn.microsoft.com/library/8ka90k2e%28v=vs.94%29.aspx
        var jscriptVersion = new Function('/*@cc_on return @_jscript_version; @*/')();
        if (typeof jscriptVersion === 'undefined') {
            return 11; // IE11+ not in emulation mode
        }
        if (jscriptVersion < 9) {
            return 8; // IE8 (or lower; haven't tested on IE<8)
        }
        return jscriptVersion; // IE9 or IE10 in any mode, or IE11 in non-IE11 mode
    };

    var ua = window.navigator.userAgent;
    if (ua.indexOf('Opera') > -1 || ua.indexOf('Presto') > -1) {
        return; // Opera, which might pretend to be IE
    }
    var emulated = emulatedIEMajorVersion();
    if (emulated === null) {
        return; // Not IE
    }

    var nonEmulated = actualNonEmulatedIEMajorVersion();
    if (emulated !== nonEmulated) {
        window.alert('WARNING: You appear to be using IE' + nonEmulated + ' in IE' + emulated + ' emulation mode.\nIE emulation modes can behave significantly differently from ACTUAL older versions of IE.\nPLEASE DON\'T FILE CAST FIGURATION BUGS based on testing in IE emulation modes!');
    }
}());

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
        var selector = '.cf-content > h2, .cf-content > h3, .cf-content > h4, .cf-content > h5';
        $(selector).wrapInner('<div></div>');
    };

    var addClipboard = function() {
        // Insert copy to clipboard button before .highlight
        // $('.highlight').each(function() {
        $('pre[class*="language-"]').each(function() {
            var btnHtml = '<div class="cf-clipboard"><button type="button" class="btn btn-xsmall btn-secondary btn-clipboard print-none" title="Copy to clipboard">Copy</button></div>';
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
                .attr('data-cfw-tooltip-original-title', 'Copy to clipboard');
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
        var $toc = $('.cf-toc').eq(0);
        if (!$toc.length) { return; }

        $toc.attr('aria-label', 'Page');
        var $clone = $toc.clone();

        // Ouput new section toc
        $('.cf-toc-side').append($clone);

        // Add scrollspy here - using <body> data attributes comes too early
        $('body').CFW_Scrollspy({
            target: '.cf-toc-side'
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
            document.cookie = 'docsDir=;path=/;';
        };

        var setRTL = function() {
            $('#dir-rtl').closest('ul').find('.active').removeClass('active').removeAttr('aria-current');
            $('#dir-rtl').addClass('active').attr('aria-current', 'true');
            $('html').attr('dir', 'rtl');
            fileRename('cssCore', 'figuration-rtl');
            fileRename('cssDocs', 'docs-rtl');
            document.cookie = 'docsDir=rtl;path=/;';
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
        $(e.target).closest('[data-cfw="player"]').find('.dropdown-menu').addClass('dropup dropreverse');
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
        $('#animToggle').on('click', function() {
            $('#animTarget').toggleClass('progress-bar-animated');
        });
    });
}(jQuery));
