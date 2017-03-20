/**
 * --------------------------------------------------------------------------
 * Figuration (v3.0.0-alpha.1): equalize.js
 * Licensed under MIT (https://github.com/cast-org/figuration/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

(function($) {
    'use strict';

    var CFW_Widget_Equalize = function(element, options) {
        this.$element = $(element);
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
            this.instance = $('<div/>').CFW_getID('cfw-equalize');
            this.$window.on('resize.cfw.equalize.' + this.instance, $().CFW_throttle($.proxy(this.update, this), this.settings.throttle));

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

            // Get group ID
            var groupID = this.settings.target;
            if ((groupID === undefined) || (groupID.length <= 0)) { return false; }

            // Find target by id/css selector
            var $targetElm = $(this.settings.target, this.$element);
            if (!$targetElm.length) {
                // Get group items
                $targetElm = $('[data-cfw-equalize-group="' + groupID + '"]', this.$element);
            }
            $targetElm = $targetElm.filter(':visible');

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
            if (nest === undefined || typeof nest === 'object') {
                nest = false;
            }
            var $images = this.$element.find('img');
            this.imageLoaded($images, function() {
                $selfRef.equalize(nest);
            });
        },

        imageLoaded : function($images, callback) {
            var $selfRef = this;
            var unloaded = $images.length;

            function imgHasHeight($images) {
                var imgCount = $images.length;

                for (var i = imgCount - 1; i >= 0; i--) {
                    if ($images.attr('height') === undefined) {
                        return false;
                    }
                }

                return true;
            }

            if (unloaded === 0 || imgHasHeight($images)) {
                callback($images);
            }

            $images.each(function() {
                $selfRef.imageWatch($(this), function() {
                    unloaded -= 1;
                    if (unloaded === 0) {
                        callback($images);
                    }
                });
            });
        },

        imageWatch : function($image, callback) {
            function hasLoaded() {
                callback($image[0]);
            }

            function addEvent() {
                $image.off('load').one('load', hasLoaded);

                if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
                    var src = $image.attr('src');
                    var param = src.match(/\?/) ? '&' : '?';
                    param += 'cfwequalize=' + (new Date()).getTime();
                    $image.attr('src', src + param);
                }
            }

            if (!$image.attr('src')) {
                hasLoaded();
                return;
            }

            if ($image.is('[data-cfw="lazy"]')) {
                $image.one('afterShow.cfw.lazy', hasLoaded);
            } else if ($image[0].complete || $image[0].readyState === 4) {
                hasLoaded();
            } else {
                addEvent();
            }
        },

        dispose : function() {
            this.$window.off('.cfw.equalize.' +  this.instance);
            this.$element.removeData('cfw.equalize');

            this.$element = null;
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
