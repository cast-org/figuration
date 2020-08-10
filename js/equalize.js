/**
 * --------------------------------------------------------------------------
 * Figuration (v4.0.1): equalize.js
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
            var $selfRef = this;

            // Get group ID
            var groupID = this.settings.target;
            if (typeof groupID === 'undefined' || (groupID.length <= 0)) { return; }

            // Find target by id/css selector
            this.$target = $(groupID, this.$element);
            if (!this.$target.length) {
                // Get group items
                this.$target = $('[data-cfw-equalize-group="' + groupID + '"]', this.$element);
            }
            if (!this.$target.length) { return; }

            this.instance = $('<div/>').CFW_getID('cfw-equalize');

            if (this._hasNested()) {
                this.$element.on('afterEqual.cfw.equalize', function(e) {
                    if (e.target !== $selfRef.$element[0]) {
                        $selfRef._equalize();
                    }
                });
            }

            this.$target.CFW_mutationListen();
            this.$element
                .attr('data-cfw-mutate', '')
                .on('mutate.cfw.mutate', this._equalize.bind(this));

            this.$window.on('resize.cfw.equalize.' + this.instance, $.CFW_throttle(this._equalize.bind(this), this.settings.throttle));

            this.$element.attr('data-cfw', 'equalize');
            this.$element.CFW_trigger('init.cfw.equalize');
            this.update();
        },

        _hasNested : function() {
            return this.$element.find('[data-cfw="equalize"]').length > 0;
        },

        _isNested : function() {
            return this.$element.parentsUntil(document.body, '[data-cfw="equalize"]').length > 0;
        },

        _isStacked : function($targetElm) {
            if (!$targetElm[0] || !$targetElm[1]) {
                return false;
            }
            return $targetElm[0].getBoundingClientRect().top !== $targetElm[1].getBoundingClientRect().top;
        },

        _equalize : function() {
            var $targetElm = this.$target.filter(':visible');
            if (!$targetElm.length) { return; }

            if (!this.$element.CFW_trigger('beforeEqual.cfw.equalize')) {
                return;
            }

            this._equalizeGroup($targetElm);

            this.$element.CFW_trigger('afterEqual.cfw.equalize');
        },

        _equalizeGroup : function($targetElm) {
            $targetElm.height('');

            if (!this.settings.row && !this.settings.stack) {
                this._applyHeight($targetElm);
                return;
            }
            if (!this.settings.stack && this._isStacked($targetElm)) {
                return;
            }
            if (this.settings.row) {
                this._equalizeByRow($targetElm);
            } else {
                this._applyHeight($targetElm);
            }
        },

        _equalizeByRow : function($targetElm) {
            var $selfRef = this;
            var total = $targetElm.length;
            var topOffset = $targetElm.first().offset().top;
            var rowOffset = 0;
            var $rowElm = $();

            $targetElm.each(function(count) {
                var $node = $(this);

                rowOffset = $node.offset().top;
                if (rowOffset !== topOffset) {
                    // Update current row
                    if ($rowElm.length > 1) {
                        $selfRef._applyHeight($rowElm);
                    }
                    // Start new row and get revised offset
                    $rowElm = $();
                    topOffset = $node.offset().top;
                }

                // Continue on row
                $rowElm = $rowElm.add($node);

                // If last element - update remaining heights
                if (count === total - 1) {
                    $selfRef._applyHeight($rowElm);
                }
            });
        },

        _applyHeight : function($nodes, callback) {
            var heights = $nodes
                .map(function() {
                    return $(this).outerHeight(false);
                })
                .get();

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

        update : function() {
            var $selfRef = this;
            var $images = this.$element.find('img');
            if (!$images.length) {
                $images.each(function() {
                    $.CFW_imageLoaded($(this), $selfRef.instance, function() {
                        $selfRef._equalize();
                    });
                });
            }

            this._equalize();
        },

        dispose : function() {
            this.$window.off('.cfw.equalize.' + this.instance);
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

    var Plugin = function(option) {
        var args = [].splice.call(arguments, 1);
        return this.each(function() {
            var $this = $(this);
            var data = $this.data('cfw.equalize');
            var options = typeof option === 'object' && option;

            if (!data) {
                $this.data('cfw.equalize', data = new CFW_Widget_Equalize(this, options));
            }
            if (typeof option === 'string') {
                data[option].apply(data, args);
            }
        });
    };

    $.fn.CFW_Equalize = Plugin;
    $.fn.CFW_Equalize.Constructor = CFW_Widget_Equalize;
}(jQuery));
