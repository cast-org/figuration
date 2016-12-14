/**
 * --------------------------------------------------------------------------
 * Figuration (v2.0.0): tab-responsive.js
 * Licensed under MIT (https://github.com/cast-org/figuration/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

(function($) {
    'use strict';

    if ($.fn.CFW_Tab === undefined) throw new Error('CFW_TabResponsive requires tab.js');
    if ($.fn.CFW_Collapse === undefined) throw new Error('CFW_TabResponsive requires collapse.js');

    var CFW_Widget_TabResponsive = function(element, options) {
        this.$element = $(element);

        this.settings = $.extend({}, CFW_Widget_TabResponsive.DEFAULTS, this._parseDataAttr(), options);

        this.$tabFirst = this.$element.find('[data-cfw="tab"]').eq(0);
        this.$navElm = this.$tabFirst.closest('ul:not(.dropdown-menu)');
        this.$tabActive = this.$navElm.find('li.active').find('[data-cfw="tab"]');

        this._init();
    };

    CFW_Widget_TabResponsive.DEFAULTS = {
        active      : false     // Open the collase for the default active tab
    };

    CFW_Widget_TabResponsive.prototype = {
        _init : function() {
            var $selfRef = this;

            this.$element.attr('data-cfw', 'tabResponsive');

            // Set tab -> collapse
            this.$element.on('beforeShow.cfw.tab', function(e) {
                if (e.isDefaultPrevented()) { return; }
                var callingNode = e.target;
                $selfRef.updateCollapse(callingNode);
            });

            // Set collapse -> tab
            this.$element.on('beforeShow.cfw.collapse', function(e) {
                if (e.isDefaultPrevented()) { return; }
                var callingNode = e.target;
                $selfRef.updateTab(callingNode);
            });

            // Remove 0px height from a collapsed item so the tab appears normally
            // when browser enlarged.
            this.$element.on('afterHide.cfw.collapse', function(e) {
                var callingNode = e.target;
                $(callingNode).data('cfw.collapse').$targetElm.css('height', '');
            });

            // Remove fade animations and aria-hidden for all tabs
            this.$element.find('[data-cfw="tab"]').CFW_Tab('fadeDisable').CFW_Tab('hiddenDisable');

            // Remove aria-hidden for all collapse
            this.$element.find('[data-cfw="collapse"]').CFW_Collapse('hiddenDisable');

            // Open collapse on active item
            if (this.settings.active) {
                this.updateCollapse(this.$tabActive);
            }

            this._trigger('init.cfw.tabResponsive');
        },

        // Open the collapse element in the active panel
        // Closes all related collapse items first
        updateCollapse : function(node) {
            var $activeTab = $(node);
            var data = $($activeTab).data('cfw.tab');
            if (data) {
                var $activePane = data.$targetElm;

                var $paneContainer = $activePane.closest('.tab-content');
                $paneContainer.find('[data-cfw="collapse"]').each(function() {
                    var $this = $(this);
                    $this.one('afterHide.cfw.collapse', function(e) {
                        e.stopPropagation();
                        e.preventDefault();
                    });
                    $this.CFW_Collapse('_hideComplete');
                    $this.removeClass('open');
                });

                var $collapseItem = $activePane.find('[data-cfw="collapse"]');
                $collapseItem.one('afterShow.cfw.collapse', function(e) {
                    e.stopPropagation();
                    e.preventDefault();
                });
                $collapseItem.CFW_Collapse('_showComplete');
                $collapseItem.addClass('open');
            }
        },

        // Set parent panel to active when collapse called
        // Close all other collapse items
        updateTab : function(node) {
            var $activeCollapse = $(node);
            var $paneParent = $activeCollapse.closest('.tab-pane');
            var $paneID = $paneParent.attr('id');
            var $paneContainer = $activeCollapse.closest('.tab-content');

            $paneContainer.find('[data-cfw="collapse"]').each(function() {
                var $this = $(this);
                if ($this[0] === $activeCollapse[0]) {
                    return;
                }
                /*
                $this.one('beforeShow.cfw.collapse', function(e) {
                  e.stopPropagation();
                  e.preventDefault();
                });
                */
                $this.CFW_Collapse('hide');
            });

            var $tabList = this.$navElm.find('[data-cfw="tab"]');
            $tabList.each(function() {
                var $triggerElm = $(this);
                var selector = $triggerElm.attr('data-cfw-tab-target');
                if (!selector) {
                    selector = $triggerElm.attr('href');
                }
                selector = selector.replace(/^#/, '');
                if (selector == $paneID) {
                    $triggerElm.one('beforeShow.cfw.tab', function(e) {
                        e.stopPropagation();
                        // e.preventDefault();
                    });
                    $triggerElm.CFW_Tab('show');
                }
            });
        },

        _parseDataAttr : function() {
            var parsedData = {};
            var data = this.$element.data();

            if (typeof data.cfwTabresponsiveActive !== 'undefined') { parsedData.active = data.cfwTabresponsiveActive; }
            return parsedData;
        },

        _trigger : function(eventName) {
            var e = $.Event(eventName);
            this.$element.trigger(e);
            if (e.isDefaultPrevented()) {
                return false;
            }
            return true;
        }
    };

    function Plugin(option) {
        var args = [].splice.call(arguments, 1);
        return this.each(function() {
            var $this = $(this);
            var data = $this.data('cfw.tabResponsive');
            var options = typeof option === 'object' && option;

            if (!data) {
                $this.data('cfw.tabResponsive', (data = new CFW_Widget_TabResponsive(this, options)));
            }
            if (typeof option === 'string') {
                data[option].apply(data, args);
            }
        });
    }

    $.fn.CFW_TabResponsive = Plugin;
    $.fn.CFW_TabResponsive.Constructor = CFW_Widget_TabResponsive;

})(jQuery);
