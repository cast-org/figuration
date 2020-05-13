/**
 * --------------------------------------------------------------------------
 * Figuration (v4.0.0-beta.5): tab-responsive.js
 * Licensed under MIT (https://github.com/cast-org/figuration/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

(function($) {
    'use strict';

    if (typeof $.fn.CFW_Tab === 'undefined') { throw new Error('CFW_TabResponsive requires CFW_Tab'); }
    if (typeof $.fn.CFW_Collapse === 'undefined') { throw new Error('CFW_TabResponsive requires CFW_Collapse'); }

    var CFW_Widget_TabResponsive = function(element) {
        this.$element = $(element);

        this._init();
    };

    CFW_Widget_TabResponsive.prototype = {
        _init : function() {
            var $selfRef = this;

            this.$element.attr('data-cfw', 'tabResponsive');

            // Set tab -> collapse
            this.$element.on('beforeShow.cfw.tab', function(e) {
                if (e.isDefaultPrevented()) { return; }
                $selfRef.updateCollapse(e.target);
            });

            // Set collapse -> tab
            this.$element.on('beforeShow.cfw.collapse', function(e) {
                if (e.isDefaultPrevented()) { return; }
                $selfRef.updateTab(e.target);
            });

            // Remove animations (needs to be revisited)
            this.$element.find('[data-cfw="tab"]').CFW_Tab('animDisable');
            this.$element.find('[data-cfw="collapse"]').CFW_Collapse('animDisable');

            var active = this.$element.find('[data-cfw="tab"].active');
            this.updateCollapse(active);

            this.$element.CFW_trigger('init.cfw.tabResponsive');
        },

        // Open the collapse element in the active panel
        // Closes all related collapse items first
        updateCollapse : function(node) {
            var $activeTab = $(node);
            var data = $($activeTab).data('cfw.tab');
            if (data) {
                var $activePane = data.$target;
                var $paneContainer = $activePane.closest('.tab-content');
                $paneContainer.find('[data-cfw="collapse"]').each(function() {
                    $(this)
                        .one('afterHide.cfw.collapse', function(e) {
                            e.stopPropagation();
                            e.preventDefault();
                        })
                        .CFW_Collapse('hide');
                });

                var $collapseItem = $activePane.find('[data-cfw="collapse"]');
                $collapseItem
                    .one('afterShow.cfw.collapse', function(e) {
                        e.stopPropagation();
                        e.preventDefault();
                    })
                    .CFW_Collapse('show');
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
                $this.CFW_Collapse('hide');
            });

            var $tabList = this.$element.find('[data-cfw="tab"]');
            $tabList.each(function() {
                var $this = $(this);
                var selector = $this.attr('data-cfw-tab-target');
                if (!selector) {
                    selector = $this.attr('href');
                }
                selector = selector.replace(/^#/, '');
                if (selector === $paneID) {
                    $this
                        .one('beforeShow.cfw.tab', function(e) {
                            e.stopPropagation();
                        })
                        .CFW_Tab('show');
                }
            });
        },

        dispose : function() {
            this.$element
                .off('.cfw.tab .cfw.collapse')
                .removeData('cfw.tabResponsive');

            this.$element = null;
            this.settings = null;
        }
    };

    var Plugin = function(option) {
        var args = [].splice.call(arguments, 1);
        return this.each(function() {
            var $this = $(this);
            var data = $this.data('cfw.tabResponsive');

            if (!data) {
                $this.data('cfw.tabResponsive', data = new CFW_Widget_TabResponsive(this));
            }
            if (typeof option === 'string') {
                data[option].apply(data, args);
            }
        });
    };

    $.fn.CFW_TabResponsive = Plugin;
    $.fn.CFW_TabResponsive.Constructor = CFW_Widget_TabResponsive;
}(jQuery));
