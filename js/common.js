/**
 * --------------------------------------------------------------------------
 * Figuration (v4.2.1): common.js
 * Licensed under MIT (https://github.com/cast-org/figuration/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

(function($) {
    'use strict';

    var cfwList = {
        '[data-cfw="collapse"]': 'CFW_Collapse',
        '[data-cfw="dropdown"]': 'CFW_Dropdown',
        '[data-cfw="tab"]': 'CFW_Tab',
        '[data-cfw="tooltip"]': 'CFW_Tooltip',
        '[data-cfw="popover"]': 'CFW_Popover',
        '[data-cfw="modal"]': 'CFW_Modal',
        '[data-cfw="affix"]': 'CFW_Affix',
        '[data-cfw="tabResponsive"]': 'CFW_TabResponsive',
        '[data-cfw="accordion"]': 'CFW_Accordion',
        '[data-cfw="slideshow"]': 'CFW_Slideshow',
        '[data-cfw="scrollspy"]': 'CFW_Scrollspy',
        '[data-cfw="lazy"]': 'CFW_Lazy',
        '[data-cfw="equalize"]': 'CFW_Equalize',
        '[data-cfw="player"]': 'CFW_Player'
    };

    $.fn.CFW_Init = function() {
        var $scope = $(this);
        if (!$scope.length) { $scope = $(document.body); }

        for (var key in cfwList) {
            if (typeof $.fn[cfwList[key]] === 'function') {
                /* eslint-disable-next-line no-loop-func */
                $scope.find(key).add($scope.filter(key)).each(function() {
                    $(this)[cfwList[key]]();
                });
            }
        }
        return this;
    };

    $.fn.CFW_Dispose = function() {
        var $scope = $(this);
        if (!$scope.length) { $scope = $(document.body); }

        for (var key in cfwList) {
            if (typeof $.fn[cfwList[key]] === 'function') {
                /* eslint-disable-next-line no-loop-func */
                $scope.find(key).add($scope.filter(key)).each(function() {
                    $(this)[cfwList[key]]('dispose');
                });
            }
        }
        return this;
    };

    $(window).ready(function() {
        if (typeof CFW_API === 'undefined' || CFW_API !== false) {
            $(document.body).CFW_Init();
        }
    });
}(jQuery));
