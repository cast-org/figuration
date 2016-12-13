/**
 * --------------------------------------------------------------------------
 * Figuration (v2.0.0): collapse.js
 * Licensed under MIT (https://github.com/cast-org/figuration/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

(function($) {
    'use strict';

    var CFW_Widget_Collapse = function(element, options) {
        this.$triggerElm = $(element);
        this.$targetElm = null;
        this.inTransition = null;
        this.$triggerColl = null;

        this.settings = $.extend({}, CFW_Widget_Collapse.DEFAULTS, this._parseDataAttr(), options);

        this._init();
    };

    CFW_Widget_Collapse.DEFAULTS = {
        animate     : true,     // If collapse targets should expand and contract
        speed       : 350,      // Speed of animation (milliseconds)
        follow      : false,    // If browser focus should move when a collapse toggle is activated
        horizontal  : false,    // If collapse should transition horizontal (vertical is default)
        hidden      : true      // Use aria-hidden on target containers by default
    };

    CFW_Widget_Collapse.prototype = {

        _init : function() {
            var $selfRef = this;
            // Get collapse group ID
            var collapseID = this.settings.toggle;

            // Find target by id/css selector
            var $targetElm = $(this.settings.toggle);
            if (!$targetElm.length) {
                // Get target (box) items
                $targetElm = $('[data-cfw-collapse-target="' + collapseID + '"]');
            }
            if (!$targetElm.length) {
                collapseID = this.$triggerElm.attr('href');
                $targetElm = $(collapseID);
            }
            if (!$targetElm.length) { return false; }
            if ((collapseID === undefined) || (collapseID.length <= 0)) { return false; }
            this.$targetElm = $targetElm;

            this.$triggerElm.attr({
                'data-cfw': 'collapse',
                'data-cfw-collapse-toggle': collapseID
            });

            // Build trigger collection
            this.$triggerColl = $('[data-cfw="collapse"][data-cfw-collapse-toggle="' + collapseID + '"]');

            // Check for presence of trigger id - set if not present
            // var triggerID = this._getID(this.$triggerElm, 'cfw-collapse');

            // Add collpase class(es)
            this.$targetElm.addClass('collapse');
            if (this.settings.horizontal) {
                this.$targetElm.addClass('width');
            }

            // A button can control multiple boxes so we need to id each on box individually
            var targetList = '';

            this.$targetElm.each(function() {
                var tempID = $selfRef._getID($(this), 'cfw-collapse');
                targetList += (tempID + ' ');
            });
            // Set ARIA on trigger
            this.$triggerColl.attr('aria-controls', $.trim(targetList));

            // Determine default state
            var dimension = this.dimension();
            if (this.$triggerColl.hasClass('open')) {
                this.$triggerColl.attr('aria-expanded', 'true');
                this.$targetElm.addClass('collapse in')[dimension]('');
            } else {
                this.$triggerColl.attr('aria-expanded', 'false');
                if (this.settings.hidden) {
                    this.$targetElm.attr('aria-hidden', 'true');
                }
            }

            // Bind click handler
            this.$triggerElm.on('click.cfw.collapse.toggle', $.proxy(this.toggle, this));

            this._trigger('init.cfw.collapse');
        },

        toggle : function(e) {
            if (e) { e.preventDefault(); }
            if (this.$triggerElm.hasClass('open') || this.$targetElm.hasClass('in')) {
                this.hide();
            } else {
                this.show();
            }
        },

        dimension : function() {
            var hasWidth = this.$targetElm.hasClass('width');
            if (hasWidth || this.settings.horizontal) {
                return 'width';
            }
            return 'height';
        },

        show : function(follow) {
            if (follow === null) { follow = this.settings.follow; }
            this.settings.showFollow = follow;

            // Bail if transition in progress
            if (this.inTransition || this.$targetElm.hasClass('in')) { return; }

            // Start open transition
            if (!this._trigger('beforeShow.cfw.collapse')) {
                return;
            }

            var dimension = this.dimension();

            this.inTransition = 1;
            this.$triggerColl.addClass('open');
            this.$targetElm.removeClass('collapse').addClass('collapsing')[dimension](0);

            // Fallback for non-transition browsers
            if (!this.settings.animate || !$.support.transitionEnd) { return this._showComplete(); }

            // Determine/set height for each target (triggers the transition), then bind transition callback to first target
            this.$targetElm
                .eq(0).one('cfwTransitionEnd', $.proxy(this._showComplete, this))
                .CFW_emulateTransitionEnd(this.settings.speed);
            var scrollSize = $.camelCase(['scroll', dimension].join('-'));
            this.$targetElm.each(function() {
                $(this)[dimension]($(this)[0][scrollSize]);
            });
        },

        hide : function(follow) {
            if (follow === null) { follow = this.settings.follow; }
            this.settings.hideFollow = follow;

            // Bail if transition in progress
            if (this.inTransition || !this.$targetElm.hasClass('in')) { return; }

            // Start close transition
            if (!this._trigger('beforeHide.cfw.collapse')) {
                return;
            }

            var dimension = this.dimension();

            this.inTransition = 1;
            this.$triggerColl.removeClass('open');

            // Determine/set height for each target (triggers the transition), then bind transition callback to first target
            this.$targetElm.each(function() {
                // Set height seperate from class changes for Chrome/Webkit or no animation occurs
                var $this = $(this);
                $this[dimension]($this[dimension]())[0].offsetHeight;
            });
            this.$targetElm.addClass('collapsing').removeClass('collapse').removeClass('in');

            // Fallback for non-transition browsers
            if (!this.settings.animate || !$.support.transitionEnd) return this._hideComplete();

            // Set '0' height for each target (triggers the transition), then bind transition callback to first target
            this.$targetElm[dimension](0)
                .eq(0).one('cfwTransitionEnd', $.proxy(this._hideComplete, this))
                .CFW_emulateTransitionEnd(this.settings.speed);

        },

        hiddenDisable : function() {
            this.$targetElm.removeAttr('aria-hidden');
            this.settings.hidden = false;
        },

        _showComplete : function() {
            var dimension = this.dimension();
            this.$triggerColl.attr('aria-expanded', 'true');
            this.$targetElm.removeClass('collapsing').addClass('collapse in').removeAttr('aria-hidden')[dimension]('');
            this.inTransition = 0;
            if (this.settings.showFollow) {
                this.$targetElm.attr('tabindex', '-1').get(0).trigger('focus');
            }
            this._trigger('afterShow.cfw.collapse');
        },

        _hideComplete : function() {
            this.$triggerColl.attr('aria-expanded', 'false');
            this.$targetElm.removeClass('collapsing in').addClass('collapse');
            if (this.settings.hidden){
                this.$targetElm.attr('aria-hidden', 'true');
            }
            this.inTransition = 0;
            if (this.settings.hideFollow) {
                this.$triggerColl.get(0).trigger('focus');
            }
            this._trigger('afterHide.cfw.collapse');
        },

        _getID : function($node, prefix) {
            var nodeID = $node.attr('id');
            if (nodeID === undefined) {
                do nodeID = prefix + '-' + ~~(Math.random() * 1000000);
                while (document.getElementById(nodeID));
                $node.attr('id', nodeID);
            }
            return nodeID;
        },

        _parseDataAttr : function() {
            var parsedData = {};
            var data = this.$triggerElm.data();

            if (typeof data.cfwCollapseToggle     !== 'undefined') { parsedData.toggle     = data.cfwCollapseToggle;     }
            if (typeof data.cfwCollapseAnimate    !== 'undefined') { parsedData.animate    = data.cfwCollapseAnimate;    }
            if (typeof data.cfwCollapseSpeed      !== 'undefined') { parsedData.speed      = data.cfwCollapseSpeed;      }
            if (typeof data.cfwCollapseFollow     !== 'undefined') { parsedData.follow     = data.cfwCollapseFollow;     }
            if (typeof data.cfwCollapseHorizontal !== 'undefined') { parsedData.horizontal = data.cfwCollapseHorizontal; }
            if (typeof data.cfwCollapseHidden     !== 'undefined') { parsedData.hidden     = data.cfwCollapseHidden;     }

            return parsedData;
        },

        _trigger : function(eventName) {
            var e = $.Event(eventName);
            this.$triggerElm.trigger(e);
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
            var data = $this.data('cfw.collapse');
            var options = typeof option === 'object' && option;

            if (!data) {
                $this.data('cfw.collapse', (data = new CFW_Widget_Collapse(this, options)));
            }
            if (typeof option === 'string') {
                data[option].apply(data, args);
            }
        });
    }

    $.fn.CFW_Collapse = Plugin;
    $.fn.CFW_Collapse.Constructor = CFW_Widget_Collapse;

})(jQuery);
