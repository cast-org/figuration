/*!
 * Figuration (v2.0.0)
 * http://figuration.org
 * Copyright 2013-2016 CAST, Inc.
 * Licensed under MIT (https://github.com/cast-org/figuration/blob/master/LICENSE)
 */

// =====
// This is only used for the CAST Figuration documentation.
// It is not needed to build your own site.
// We suggest you don't use it!
// =====

/* global Holder, anchors */

Holder.addTheme('gray', {
    bg: '#999',
    fg: '#111',
    size: 12,
    font: 'sans-serif',
    fontweight: 'normal'
});

function addAnchors() {
    // anchors.options.placement = 'left';
    anchors.add('.cf-content > h1, .cf-content > h2, .cf-content > h3, .cf-content > h4, .cf-content > h5');
}

function addClipboard() {
    // Insert copy to clipboard button before .highlight
    $('.highlight').each(function() {
        var btnHtml = '<div class="cf-clipboard" aria-hidden="true"><span class="btn btn-sm btn-secondary btn-clipboard" title="Copy to clipboard">Copy</span></div>';
        $(this).before(btnHtml);
        $('.btn-clipboard').CFW_Tooltip({
            'animate': false
        });
    });

    var clipboard = new Clipboard('.btn-clipboard', {
        target: function(trigger) {
            return trigger.parentNode.nextElementSibling;
        }
    });

    clipboard.on('success', function(e) {
        $(e.trigger)
            .CFW_Tooltip('hide')
            .attr('title', 'Copied!')
            .CFW_Tooltip('fixTitle')
            .CFW_Tooltip('show')
            .attr('title', 'Copy to clipboard')
            .CFW_Tooltip('fixTitle');

        e.clearSelection();
    });

    clipboard.on('error', function(e) {
        var modifierKey = /Mac/i.test(navigator.userAgent) ? '\u2318' : 'Ctrl-';
        var fallbackMsg = 'Press ' + modifierKey + 'C to copy';

        $(e.trigger)
            .CFW_Tooltip('hide')
            .attr('title', fallbackMsg)
            .CFW_Tooltip('fixTitle')
            .CFW_Tooltip('show')
            .attr('title', 'Copy to clipboard')
            .CFW_Tooltip('fixTitle');
    });
}

function topLinkAffix() {
    var $topLink = $('.topLink');

    $topLink.CFW_Affix({
        offset: {
            top: function() {
                // return $('header').outerHeight() + $('.jumbotron-docs').outerHeight();
                $title = $('.cf-title');
                return $title.offset().top + $title.outerHeight();
            },
            bottom: function() {
                return $('footer').outerHeight();
            }
        }
    });
    $(window).scroll();
}

function paletteHex() {
    var $items = $('.palette-base, .palette-item');
    var $this = null;
    var color = '';
    if ($items.length > 0) {
        $items.each(function() {
            $this = $(this);
            color = rgb2hex($this.css('background-color'));
            $this.append('<span class="float-right">' + color + '</span>');
        });
    }
}

function rgb2hex(rgb) {
    if (/^#[0-9A-F]{6}$/i.test(rgb)) return rgb;

    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    function hex(x) {
        return ('0' + parseInt(x).toString(16)).slice(-2);
    }
    return '#' + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

// Direction for player dropdown menus
$(document, '[data-cfw="player"]').on('ready.cfw.player', function(e) {
    $(e.target).closest('[data-cfw="player"]').find('.player-caption-wrapper').addClass('dropup dropdown-menu-left');
    $(e.target).closest('[data-cfw="player"]').find('.player-script-wrapper').addClass('dropup dropdown-menu-left');
});

$(window).ready(function() {
    addAnchors();
    addClipboard();
    topLinkAffix();
    paletteHex();

    // Indeterminate checkbox example
    $('.cf-example-indeterminate [type="checkbox"]').prop('indeterminate', true);

    // Disable empty links in docs examples
    $('.cf-content [href="#"]').click(function(e) {
        e.preventDefault();
    });
});
