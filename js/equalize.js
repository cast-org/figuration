/**
 * --------------------------------------------------------------------------
 * Figuration (v3.0.0): equalize.js
 * Licensed under MIT (https://github.com/cast-org/figuration/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

(function($) {
    'use strict';

    var CFW_Widget_Equalize = function(element, options) {
        this.$element = $(element);
        this.$target = null;
        this.$window = $(window);
        this.instance = '';

        var parsedData = this.$element.CFW_parseData('equalize', CFW_Widget_Equalize.DEFAULTS);
        this.settings = $.extend({}, CFW_Widget_Equalize.DEFAULTS, parsedData, options);

        this._init();
    };

    CFW_Widget_Equalize.DEFAULTS = {
        target   : '',
        throttle : 250,     // Throttle speed to limit event firing
        stack    : false,   // Equalize items when stacked
        row      : false,   // Equalize items by row
        minimum  : false    // Use minimum height
    };

    CFW_Widget_Equalize.prototype = {
        _init : function() {
            // Get group ID
            var groupID = this.settings.target;
            if ((groupID === undefined) || (groupID.length <= 0)) { return false; }

            // Find target by id/css selector
            this.$target = $(groupID, this.$element);
            if (!this.$target.length) {
                // Get group items
                this.$target = $('[data-cfw-equalize-group="' + groupID + '"]', this.$element);
            }
            if (!this.$target.length) { return; }

            this.$target.CFW_mutationListen();
            var isNested = (!this.$element.parent().closest('[data-cfw="equalize"]').length) ? false : true;
            if (!isNested) {
                this.$element
                    .attr('data-cfw-mutate', '')
                    .on('mutate.cfw.mutate', $.proxy(this.update, this));
            }

            this.instance = $('<div/>').CFW_getID('cfw-equalize');
            this.$window.on('resize.cfw.equalize.' + this.instance, $.CFW_throttle($.proxy(this.update, this), this.settings.throttle));

            this.$element.attr('data-cfw', 'equalize');
            this.$element.CFW_trigger('init.cfw.equalize');
            this.update(true);
        },

        equalize : function(nest) {
            var $selfRef = this;
            var isStacked = false;
            var topOffset;

            // Drop out if nested, wait until descendants are done
            if (nest === undefined) {
                nest = false;
            }
            var $nested = this.$element.find('[data-cfw="equalize"]');
            var isNested = false;
            if (!nest) {
                $nested.each(function() {
                    var data = $(this).data('cfw.equalize');
                    if (data) { isNested = true; }
                });
                if (isNested) { return; }
            }
            if (!this.$element.CFW_trigger('beforeEqual.cfw.equalize')) {
                return;
            }

            var $targetElm = this.$target.filter(':visible');
            var total = $targetElm.length;
            if (total <= 0) { return false; }

            $targetElm.height('');

            if (this.settings.row && !this.settings.stack) {
                var rowOffset = 0;
                var $rowElm = $();

                $targetElm.each(function(count) {
                    var $node = $(this);

                    rowOffset = parseInt($node.offset().top, 10);
                    if (rowOffset !== topOffset) {
                        // Update current row
                        if ($rowElm.length > 1) {
                            $selfRef._applyHeight($rowElm);
                        }
                        // Start new row and get revised offset
                        $rowElm = $();
                        topOffset = parseInt($node.offset().top, 10);
                    }

                    // Continue on row
                    $rowElm = $rowElm.add($node);

                    // If last element - update remaining heights
                    if (count === total - 1) {
                        $selfRef._applyHeight($rowElm);
                    }
                });
            } else {
                if (!this.settings.stack) {
                    topOffset = $targetElm.first().offset().top;
                    $targetElm.each(function() {
                        if ($(this).offset().top !== topOffset) {
                            isStacked = true;
                            return false;
                        }
                    });
                }
                if (!isStacked) {
                    this._applyHeight($targetElm);
                }
            }

            this.$element.CFW_trigger('afterEqual.cfw.equalize');

            // Handle any nested equalize
            this.$element.parent().closest('[data-cfw="equalize"]').each(function() {
                var $this = $(this);
                var data = $this.data('cfw.equalize');
                if (typeof data === 'object') {
                    $this.CFW_Equalize('update', true);
                }
            });
        },

        _applyHeight : function($nodes, callback) {
            var heights = $nodes.map(function() {
                    return $(this).outerHeight(false);
                }).get();

            if (this.settings.minimum) {
                var min = Math.min.apply(null, heights);
                $nodes.css('height', min);
            } else {
                var max = Math.max.apply(null, heights);
                $nodes.css('height', max);
            }

            if (!callback) { return; }
            callback();
        },

        update : function(nest) {
            var $selfRef = this;
            var $images = this.$element.find('img');
            if (!$images.length) {
                $images.each(function() {
                    $.CFW_imageLoaded($(this), $selfRef.instance, function() {
                        $selfRef.equalize(nest);
                    });
                });
            }

            this.equalize(nest);
        },

        dispose : function() {
            this.$window.off('.cfw.equalize.' +  this.instance);
            this.$element
                .off('mutate.cfw.mutate')
                .removeAttr('data-cfw-mutate')
                .removeData('cfw.equalize')
                .find('img')
                .off('load.cfw.imageLoaded.' + this.instance);

            this.$target.CFW_mutationIgnore();

            this.$element = null;
            this.$target = null;
            this.$window = null;
            this.instance = null;
            this.settings = null;
        }
    };

    function Plugin(option) {
        var args = [].splice.call(arguments, 1);
        return this.each(function() {
            var $this = $(this);
            var data = $this.data('cfw.equalize');
            var options = typeof option === 'object' && option;

            if (!data) {
                $this.data('cfw.equalize', (data = new CFW_Widget_Equalize(this, options)));
            }
            if (typeof option === 'string') {
                data[option].apply(data, args);
            }
        });
    }

    $.fn.CFW_Equalize = Plugin;
    $.fn.CFW_Equalize.Constructor = CFW_Widget_Equalize;

})(jQuery);
