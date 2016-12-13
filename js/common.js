/**
 * --------------------------------------------------------------------------
 * Figuration (v2.0.0): common.js
 * Licensed under MIT (https://github.com/cast-org/figuration/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

(function($) {
    'use strict';

    $.fn.CFW_Init = function() {
        var $scope = $(this);
        if (!$scope) { $scope = $(document.body); }

        $('[data-cfw="collapse"]', $scope).each(function() {
            $(this).CFW_Collapse();
        });
        $('[data-cfw="dropdown"]', $scope).each(function() {
            $(this).CFW_Dropdown();
        });
        $('[data-cfw="tab"]', $scope).each(function() {
            $(this).CFW_Tab();
        });
        $('[data-cfw="tooltip"]', $scope).each(function() {
            $(this).CFW_Tooltip();
        });
        $('[data-cfw="popover"]', $scope).each(function() {
            $(this).CFW_Popover();
        });
        $('[data-cfw="modal"]', $scope).each(function() {
            $(this).CFW_Modal();
        });
        $('[data-cfw="affix"]', $scope).each(function() {
            $(this).CFW_Affix();
        });
        $('[data-cfw="tabResponsive"]', $scope).each(function() {
            $(this).CFW_TabResponsive();
        });
        $('[data-cfw="accordion"]', $scope).each(function() {
            $(this).CFW_Accordion();
        });
        $('[data-cfw="slideshow"]', $scope).each(function() {
            $(this).CFW_Slideshow();
        });
        $('[data-cfw="scrollspy"]', $scope).each(function() {
            $(this).CFW_Scrollspy();
        });
        $('[data-cfw="lazy"]', $scope).each(function() {
            $(this).CFW_Lazy();
        });
        $('[data-cfw="slider"]', $scope).each(function() {
            $(this).CFW_Slider();
        });
        $('[data-cfw="equalize"]', $scope).each(function() {
            $(this).CFW_Equalize();
        });
        $('[data-cfw="player"]', $scope).each(function() {
            $(this).CFW_Player();
        });
    };

    $(window).ready(function() {
        if (typeof CFW_API === 'undefined' || CFW_API !== false) {
            $(document.body).CFW_Init();
        }
    });
})(jQuery);
