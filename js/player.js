/**
 * --------------------------------------------------------------------------
 * Figuration (v2.0.0): player.js
 * Licensed under MIT (https://github.com/cast-org/figuration/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

(function($) {
    'use strict';

    // Borrowed on 12/05/2014 from: https://github.com/Modernizr/Modernizr/blob/master/feature-detects/audio.js
    function audioTest() {
        /* jshint -W053 */
        /* jshint -W084 */
        var elem = document.createElement('audio');
        var bool = false;

        try {
            if (bool = !!elem.canPlayType) {
                bool      = new Boolean(bool);
                bool.ogg  = elem.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, '');
                bool.mp3  = elem.canPlayType('audio/mpeg;').replace(/^no$/, '');
                bool.opus = elem.canPlayType('audio/ogg; codecs="opus"') .replace(/^no$/, '');

                // Mimetypes accepted:
                // http://developer.mozilla.org/En/Media_formats_supported_by_the_audio_and_video_elements
                // http://bit.ly/iphoneoscodecs
                bool.wav  = elem.canPlayType('audio/wav; codecs="1"').replace(/^no$/, '');
                bool.m4a  = (elem.canPlayType('audio/x-m4a;') || elem.canPlayType('audio/aac;')).replace(/^no$/, '');
            }
        } catch (e) { }

        return bool;
    }

    // Borrowed on 12/05/2014 from: https://github.com/Modernizr/Modernizr/blob/master/feature-detects/video.js
    function videoTest() {
        /* jshint -W053 */
        /* jshint -W084 */
        var elem = document.createElement('video');
        var bool = false;

        // IE9 Running on Windows Server SKU can cause an exception to be thrown, bug #224
        try {
            if (bool = !!elem.canPlayType) {
                bool = new Boolean(bool);
                bool.ogg = elem.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, '');

                // Without QuickTime, this value will be `undefined`. github.com/Modernizr/Modernizr/issues/546
                bool.h264 = elem.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, '');
                bool.webm = elem.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, '');
                bool.vp9 = elem.canPlayType('video/webm; codecs="vp9"').replace(/^no$/, '');
                bool.hls = elem.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/, '');
            }
        } catch (e){}

        return bool;
    }

    var html5 = {
        audio: null,
        video: null
    };
    html5.audio = audioTest();
    html5.video = videoTest();

    var CFW_Widget_Player = function(element, options) {
        this.$element = $(element);
        this.type = 'audio';
        this.$media = null;
        this.media = null;
        this.$player = null;
        this.$focus = null;
        this.$sliderSeek = null;
        this.$volSeek = null;
        this.activity = null;
        this.over = null;
        this.userActive = true;
        this.activityTimer = null;
        this.mouseActivity = null;
        this.scrubPlay = null;
        this.played = false;

        this.status = {
            duration: 0,
            currentTime: 0,
            remaining: 0
        };
        this.support = {
            mute: true,
            volume: true
        };
        this.trackValid = [];
        this.trackCurrent = -1;

        this.$scriptElm = null;
        this.scriptCurrent = -1;
        this.scriptCues = null;

        this.settings = $.extend({}, CFW_Widget_Player.DEFAULTS, this._parseDataAttr(), options);

        this._init();
    };

    CFW_Widget_Player.DEFAULTS = {
        transcript: -1,             // Default transcript off
        transcriptScroll : true,    // Scroll transcript
        transcriptOption : true     // Show transcript options
    };

    CFW_Widget_Player.prototype = {
        _init : function() {
            this.$media = this.$element.find('audio, video');
            this.media = this.$media[0];

            if (this.media == null) {
                return false;
            }

            if (this.media.nodeName == 'VIDEO') {
                this.type = 'video';
            }

            if ((this.type == 'audio' && !html5.audio) || (this.type == 'video' && !html5.video)) {
                this._trigger('noSupport.cfw.player');
                return false;
            }

            this.$element.attr('data-cfw', 'player')
                .addClass('player-unstarted');

            this.$player = this.$element.find('[data-cfw-player="player"]');
            if (this.$player.length > 0) {
                // Hide browsers default player
                this.media.controls = false;
            }

            // Check if loaded
            // this.loadCheck();
            this.loadComplete();
        },

        insertPlayer : function() {
            var $newPlayer = $(document.createElement('div'))
                .addClass('player');

            // Insert player
            this.$media.after($newPlayer);
        },

        loadCheck : function() {
            /* Need better method - do not use for now - assume media loads fine */

            var $selfRef = this;
            var timeout = 0;

            // Work around some players wehre track is not loaded until played
            try {
                this.media.play();
                this.media.pause();
            } catch (e) {
                this.error();
                return;
            }

            var isLoaded = setInterval(function() {
                if ($selfRef.media.readyState > 0) {
                    clearInterval(isLoaded);
                    $selfRef.loadComplete();
                    return;
                }
                if ($selfRef.media.networkState === 3 || timeout === 75) {
                    clearInterval(isLoaded);
                    $selfRef.error();
                    return;
                }
                timeout++;
            }, 50);
        },

        loadComplete : function() {
            var $selfRef = this;

            // Attach event handlers
            this.$media.on('error', function() {
                $selfRef.error();
            });
            this.$media.on('play canplay pause', function() {
                $selfRef.controlStatus();
                $selfRef.unplayedStatus();
            });
            this.$media.on('loadedmetadata loadeddata progress canplay canplaythrough timeupdate durationchange', function() {
                $selfRef.unplayedStatus();
                $selfRef.timeStatus();
                $selfRef.seekStatus();
            });
            this.$media.on('ended', function() {
                $selfRef.seekReset();
            });
            this.$media.on('volumechange', function() {
                $selfRef.muteStatus();
                $selfRef.volumeStatus();
            });
            if (this.type == 'video') {
                // http://stackoverflow.com/questions/9621499/fullscreen-api-which-events-are-fired
                $(document).on('webkitfullscreenchange mozfullscreenchange MSFullscreenChange fullscreenchange', function() {
                    $selfRef.fullscreenStatus();
                });
                this.$player.on('mouseenter mouseleave', function(e) {
                    $selfRef.activity = true;
                    switch (e.type) {
                        case 'mouseenter': {
                            $selfRef.over = true;
                            break;
                        }
                        case 'mouseleave': {
                            $selfRef.over = false;
                            break;
                        }
                    }
                });
                this.$element.on('mousemove mousedown mouseup keydown keyup touchmove touchstart touchend', function(e) {
                    $selfRef.activity = true;
                    switch (e.type) {
                        case 'mousedown':
                        case 'touchstart': {
                            clearInterval($selfRef.mouseActivity);
                            $selfRef.mouseActivity = setInterval(function() {
                                $selfRef.activity = true;
                            }, 250);
                            break;
                        }
                        case 'mouseup':
                        case 'touchend': {
                            clearInterval($selfRef.mouseActivity);
                            break;
                        }
                    }
                });
                this.$media.on('click', function() {
                    $selfRef.toggle();
                    $selfRef._focusHelper();
                });
                this.activityInit();
            }

            // Link controls
            this.$player.on('click', '[data-cfw-player="play"]', function(e) {
                e.preventDefault();
                $selfRef.media.play();
                $selfRef._focusControl($selfRef.$player.find('[data-cfw-player="pause"]')[0]);
            });
            this.$player.on('click', '[data-cfw-player="pause"]', function(e) {
                e.preventDefault();
                $selfRef.media.pause();
                $selfRef._focusControl($selfRef.$player.find('[data-cfw-player="play"]')[0]);
            });
            this.$player.on('click', '[data-cfw-player="stop"]', function(e) {
                e.preventDefault();
                $selfRef.stop();
                $selfRef._focusControl(this);
            });
            this.$player.on('click', '[data-cfw-player="mute"]', function(e) {
                e.preventDefault();
                $selfRef.mute();
                $selfRef._focusControl(this);
            });
            this.$player.on('click', '[data-cfw-player="loop"]', function(e) {
                e.preventDefault();
                $selfRef.loop();
                $selfRef._focusControl(this);
            });
            this.$player.on('click', '[data-cfw-player="fullscreen"]', function(e) {
                e.preventDefault();
                $selfRef.fullscreen();
                $selfRef._focusControl(this);
            });

            // Key handler
            this.$element.on('keydown', function(e) {
                $selfRef._actionsKeydown(e);
            });

            // Update indicators
            this.controlStatus();
            this.volumeSupport();
            this.timeStatus();
            this.seekStatus();
            this.muteStatus();
            this.volumeStatus();
            this.loopStatus();

            this.trackList();
            if (this.type == 'video') {
                this.trackInit();
            }
            this.scriptInit();

            this.$player.addClass('ready');

            // Inject focus helper item
            var focusDiv = document.createElement('div');
            focusDiv.className = 'player-focus sr-only';
            focusDiv.tabIndex = '-1';
            this.$focus = $(focusDiv);
            this.$element.prepend(this.$focus);

            this._trigger('ready.cfw.player');

            // Handle element attributes
            if (this.media.autoplay) {
                this.media.play();
            }
        },

        error : function() {
            this._trigger('error.cfw.player');
        },

        toggle : function() {
            if (this.media.paused) {
                this.unplayedStatus(true);
                this.media.play();
            } else {
                this.media.pause();
            }
        },

        play : function() {
            this.unplayedStatus(true);
            this.media.play();
        },

        pause : function() {
            this.media.pause();
        },

        stop : function() {
            this.media.pause();
            this.seekTo(0.0);
        },

        controlStatus : function() {
            var $ctlElm = this.$player.find('[data-cfw-player="control"]');
            var $playElm = this.$player.find('[data-cfw-player="play"]');
            var $pauseElm = this.$player.find('[data-cfw-player="pause"]');

            $ctlElm.removeClass('pause play');
            $playElm.add($pauseElm).removeClass('on off').addClass('off');

            if (this.media.paused) {
                // Paused/stopped
                $ctlElm.addClass('pause');
                $playElm.removeClass('off').addClass('on');
                this.$element.addClass('player-paused');
            } else {
                // Playing
                $ctlElm.addClass('play');
                $pauseElm.removeClass('off').addClass('on');
                this.$element.removeClass('player-paused');
            }
        },

        unplayedStatus : function(force) {
            if (force === undefined) { force = false; }
            if (!this.played) {
                if (force || this.media.played.length > 0) {
                    this.played = true;
                    this.$element.removeClass('player-unstarted');
                }
            }
        },

        timeStatus : function() {
            this.status.duration    = this.media.duration;
            this.status.currentTime = this.media.currentTime;
            this.status.remaining   = this.status.duration - this.status.currentTime;
            if (this.status.remaining < 0) this.status.remaining = 0;

            var $durElm = this.$player.find('[data-cfw-player="time-duration"]');
            var $curElm = this.$player.find('[data-cfw-player="time-current"]');
            var $remElm = this.$player.find('[data-cfw-player="time-remainder"]');

            if (this.status.duration > 0) {
                this.$player.removeClass('player-notime');
            } else {
                this.$player.addClass('player-notime');
            }
            if (this.status.duration === Infinity) {
                this.$player.addClass('player-live');
            } else {
                this.$player.removeClass('player-live');
            }

            $durElm.html(this.timeSplit(this.status.duration));
            $curElm.html(this.timeSplit(this.status.currentTime));
            $remElm.html(this.timeSplit(this.status.remaining));
        },

        timeSplit : function(t) {
            if (isNaN(t) || t === Infinity) { t = 0; }

            var hours = Math.floor(t / 3600);
            var minutes = Math.floor(t / 60) - (hours * 60);
            var seconds = Math.floor(t) - (hours * 3600) - (minutes * 60);
            var timeStr = this.timeDigits(minutes) + ':' + this.timeDigits(seconds);
            if (hours > 0) {
                timeStr = hours + ':' + timeStr;
            }
            if (timeStr.indexOf('0') === 0) {
                timeStr = timeStr.substr(1);
            }
            return timeStr;
        },

        timeDigits : function(t) {
            return ('0' + t).slice(-2);
        },

        seekStatus : function() {
            var $seekElm = this.$player.find('[data-cfw-player="seek"]');

            if ($seekElm.find('input').length) {
                this.seekSlider();
            } else if ($seekElm.hasClass('progress')) {
                this.seekProgress();
            }
        },

        seekSlider : function() {
            var $selfRef = this;

            if (isNaN(this.media.duration) || this.media.duration === Infinity) { return; }

            if (this.$sliderSeek == null) {
                this.$sliderSeek = this.$player.find('[data-cfw-player="seek"]');
                this.$sliderSeek.CFW_Slider({
                    min: 0,
                    max: this.media.duration,
                    step: 0.5
                });
                this.$sliderSeek.on('slid.cfw.slider', function() {
                    var newTime = $(this).data('cfw.slider').val0;
                    $selfRef.seekTo(newTime);
                });
                // Pause while scrubbing
                var $sliderControls = this.$sliderSeek.add(this.$sliderSeek.find('.slider-thumb'));
                $sliderControls.on('keydown.cfw.slider dragStart.cfw.slider', function(e) {
                    if (e.type == 'keydown' && (!/(37|38|39|40|33|34|35|36)/.test(e.which))) { return; }
                    if (e.type == 'keydown') { e.stopPropagation; }
                    $sliderControls.off('keyup.cfw.slider dragEnd.cfw.slider');
                    if ($selfRef.scrubPlay == null) {
                        $selfRef.scrubPlay = !$selfRef.media.paused;
                    }
                    $selfRef.media.pause();
                    $(e.currentTarget).one('keyup.cfw.slider dragEnd.cfw.slider', function(e) {
                        if (e.type == 'keyup') { e.stopPropagation; }
                        if ($selfRef.scrubPlay === true) {
                            $selfRef.media.play();
                        }
                        $selfRef.scrubPlay = null;
                    });
                });
            }

            var $inputElm = this.$sliderSeek.find('input').eq(0);
            this.$sliderSeek.CFW_Slider('changeValue', this.media.currentTime, $inputElm, true);
        },

        seekProgress : function() {
            if (isNaN(this.media.duration) || this.media.duration === Infinity) { return; }

            var $curElm = this.$player.find('[data-cfw-player="seek-current"]');
            $curElm.attr('role', 'progressbar').attr('aria-label', 'Playback progress');

            var cp = (this.media.currentTime / this.media.duration) * 100;
            if (cp > 100) { cp = 100; }

            $curElm.attr({
                    'aria-valuemin' : 0,
                    'aria-valuemax' : 100,
                    'aria-valuenow' : cp
                })
                .css('width', cp + '%');
        },

        seekReset : function() {
            if (!this.media.loop) {
                this.media.pause();
            } else {
                this.media.play();
            }
        },

        seekIncrement : function(delta) {
            var time = this.media.currentTime + delta;
            var newTime = (time < 0) ? 0 : ((time > this.media.duration) ? this.media.duration : time);
            this.seekTo(newTime);
        },

        seekTo : function(timestamp) {
            var seekable = this.media.seekable;
            if (seekable.length > 0 && timestamp >= seekable.start(0) && timestamp <= seekable.end(0)) {
                this.media.currentTime = timestamp;
            }
        },

        mute : function() {
            this.media.muted = !this.media.muted;
            this.muteStatus();
            this.volumeStatus();
        },

        muteStatus : function() {
            var $muteElm = this.$player.find('[data-cfw-player="mute"]');

            if (!this.support.mute) {
                $muteElm.addClass('disabled');
            } else if (this.media.muted) {
                $muteElm.addClass('active');
            } else {
                $muteElm.removeClass('active');
            }
        },

        volumeSupport : function() {
            var muted = this.media.muted;
            var holdVol = this.media.volume;
            var testVol = 0.5;

            if (this.media.volume === 0.5) {
                testVol = 0.25;
            }
            this.media.volume = testVol;
            if (this.media.volume !== testVol) {
                this.support.mute = false;
                this.support.volume = false;
            }
            this.media.volume = holdVol;
            this.media.muted = muted;
        },

        volumeStatus : function() {
            var $selfRef = this;
            var $volElm = this.$player.find('[data-cfw-player="volume"]');

            if ($volElm.find('input').length <= 0) { return; }

            if (!this.support.mute) {
                $volElm.addClass('disabled');
                return;
            }

            if (this.$volSeek == null) {
                this.$volSeek = $volElm;
                this.$volSeek.CFW_Slider({
                    min: 0,
                    max: 1,
                    step: 0.01
                });
                this.$volSeek.on('slid.cfw.slider', function() {
                    var newVol = parseFloat($(this).data('cfw.slider').val0);

                    if (newVol === 0) {
                        $selfRef.media.muted = true;
                    } else {
                        $selfRef.media.muted = false;
                        $selfRef.media.volume = newVol;
                    }
                });
            }

            var $inputElm = this.$volSeek.find('input').eq(0);
            if (!this.media.muted) {
                this.$volSeek.CFW_Slider('changeValue', this.media.volume, $inputElm, true);
            } else {
                this.$volSeek.CFW_Slider('changeValue', 0, $inputElm, true);
            }
        },

        volumeIncrement : function(delta) {
            var vol = (this.media.volume * 100) + delta;
            var newVol = (vol < 0) ? 0 : ((vol > 100) ? 100 : parseInt(vol, 10));
            this.media.volume = newVol / 100;
        },

        loop : function(setting) {
            if (setting !== undefined) {
                // set on/off
                this.media.loop = setting;
            } else {
                // toggle
                this.media.loop = !this.media.loop;
            }
            this.loopStatus();
        },

        speed : function(setting) {
            if (setting !== undefined) {
                this.media.playbackRate = setting;
            }
        },

        loopStatus : function() {
            var $loopElm = this.$player.find('[data-cfw-player="loop"]');
            if (this.media.loop) {
                $loopElm.addClass('active');
                this._pressedState($loopElm, true);
            } else {
                $loopElm.removeClass('active');
                this._pressedState($loopElm, false);
            }
        },

        // Fullscreen concepts from:
        // https://github.com/iandevlin/iandevlin.github.io/blob/master/mdn/video-player-with-captions/js/video-player.js
        isFullScreen : function() {
            // Checks if the player instance is currently in fullscreen mode
            var $fsNode = $(document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement);
            return ($fsNode.is(this.$element));
        },

        fullscreen : function() {
            if (this.type == 'audio') { return; }
            if (this.isFullScreen()) {
                // Exit fullscreen
                if (document.exitFullscreen) document.exitFullscreen();
                else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
                else if (document.webkitCancelFullScreen) document.webkitCancelFullScreen();
                else if (document.msExitFullscreen) document.msExitFullscreen();
            } else {
                // Go fullscreen
                // (Note: can be called on document, but here the specific element is used as it will also ensure that the element's children, e.g. the custom controls, go fullscreen also)
                var videoContainer = this.$element[0];
                if (videoContainer.requestFullscreen) videoContainer.requestFullscreen();
                else if (videoContainer.mozRequestFullScreen) videoContainer.mozRequestFullScreen();
                else if (videoContainer.webkitRequestFullScreen) videoContainer.webkitRequestFullScreen();
                else if (videoContainer.msRequestFullscreen) videoContainer.msRequestFullscreen();
            }
        },

        fullscreenStatus : function() {
            var $fullElm = this.$player.find('[data-cfw-player="fullscreen"]');
            if (this.isFullScreen()) {
                $fullElm.addClass('active');
                this.$element.addClass('player-fulldisplay');
                this._trigger('enterFullscreen.cfw.player');
            } else {
                $fullElm.removeClass('active');
                this.$element.removeClass('player-fulldisplay');
                this._trigger('exitFullscreen.cfw.player');
            }
        },

        trackList : function() {
            var $selfRef = this;

            var tracks = this.media.textTracks;
            if (tracks.length <= 0) {
                return null;
            }

            var validTracks = [];
            for (var i = 0; i < tracks.length; i++) {
                if (tracks[i].kind == 'captions' || tracks[i].kind == 'subtitles') {
                    validTracks.push(i);
                }
            }
            this.trackValid = validTracks;

            /* not fully supported by any browser?
                 - only fires once for some reason from browser default controls
            */
            this.media.textTracks.addEventListener('change', function() {
                $selfRef.trackStatus();
            });
        },

        trackInit : function() {
            var $selfRef = this;
            var $captionElm = this.$player.find('[data-cfw-player="caption"]');
            if ($captionElm.length <= 0) {
                return;
            }

            if (this.trackValid.length <= 0) {
                $captionElm.addClass('disabled');
                return;
            }

            if (this.trackValid.length == 1) {
                // Use toggle style
                this.$player.on('click', '[data-cfw-player="caption"]', function(e) {
                    e.preventDefault();
                    if ($captionElm.hasClass('active')) {
                        $selfRef.trackSet(-1);
                    } else {
                        $selfRef.trackSet(0);
                    }
                    $selfRef._focusControl(this);
                });

                if (this.media.textTracks[0].mode == 'showing') {
                    $selfRef.trackSet(0);
                }

            } else {
                // Build menu
                var wrapper = '<span class="player-caption-wrapper"></span>';
                var $menu = $('<ul class="player-caption-menu dropdown-menu"></ul>');
                $captionElm.wrap(wrapper);

                var $wrapper = $captionElm.parent(); /* Because $().wrap() clones element */

                $wrapper.append($menu);
                var menuID = this._getID($menu, 'cfw-player');

                var $menuItem = $('<li class="player-caption-off"><a href="#" data-cfw-player-track="-1">Off</a></li>');
                $menu.append($menuItem);

                var tracks = this.media.textTracks;
                for (var i = 0; i < this.trackValid.length; i++) {
                    var trackID = this.trackValid[i];
                    $menuItem = $('<li><a href="#" data-cfw-player-track="' + trackID + '">' + tracks[trackID].label + '</a></li>');
                    $menu.append($menuItem);
                }

                this.$player.on('click', '[data-cfw-player-track]', function(e) {
                    e.preventDefault();
                    var $this = $(this);
                    var num = $this.attr('data-cfw-player-track');
                    $selfRef.trackSet(num);
                });

                $captionElm.CFW_Dropdown({ toggle: '#' + menuID });
            }

            this.trackStatus();
        },

        trackSet : function(trackID) {
            trackID = parseInt(trackID, 10);

            var tracks = this.media.textTracks;
            if (tracks.length <= 0) {
                return;
            }

            this.trackCurrent = trackID;

            for (var i = 0; i < tracks.length; i++) {
                if (tracks[i].mode == 'showing') {
                    tracks[i].mode = 'hidden';
                }
                if (i === trackID) {
                    tracks[i].mode = 'showing';
                }
            }

            this.trackStatus();
        },

        trackStatus : function() {
            var tracks = this.media.textTracks;
            if (tracks.length <= 0) {
                return;
            }

            var $captionElm = this.$player.find('[data-cfw-player="caption"]');
            if ($captionElm.length <= 0) {
                return;
            }

            if (this.trackValid.length == 1) {
                // Toggle style
                if (this.trackCurrent == -1) {
                    $captionElm.removeClass('active');
                    this._pressedState($captionElm, false);
                } else {
                    $captionElm.addClass('active');
                    this._pressedState($captionElm, true);
                }
            } else {
                // Menu style
                var $captionPar = $captionElm.parent();
                $captionElm.removeClass('active');
                $captionPar.removeClass('active');
                $captionPar.find('[data-cfw-player-track]').closest('li').removeClass('active');

                for (var i = 0; i < tracks.length; i++) {
                    if (tracks[i].mode == 'showing') {
                        $captionElm.addClass('active');
                        $captionPar.addClass('active');
                        $captionPar.find('[data-cfw-player-track="' + i + '"]').closest('li').addClass('active');
                        this.trackCurrent = i;
                    }
                }
            }
        },

        scriptInit : function() {
            var $selfRef = this;
            var $tsElm = this.$player.find('[data-cfw-player="transcript"]');
            if ($tsElm.length <= 0) {
                return;
            }

            if (this.trackValid.length <= 0) {
                $tsElm.addClass('disabled');
                return;
            }

            if (this.trackValid.length == 1 && !this.settings.transcriptOption) {
                // Use toggle style
                $tsElm.removeClass('active');
                this._pressedState($tsElm, false);
                $tsElm.on('click', function(e) {
                    e.preventDefault();
                    if ($tsElm.hasClass('active')) {
                        $selfRef.scriptSet(-1);
                    } else {
                        $selfRef.scriptSet(0);
                    }
                    $selfRef._focusControl(this);
                });
            } else {
                // Build menu
                var wrapper = '<span class="player-script-wrapper"></span>';
                var $menu = $('<ul class="player-script-menu dropdown-menu"></ul>');
                $tsElm.wrap(wrapper);

                var $wrapper = $tsElm.parent(); /* Because $().wrap() clones element */

                $wrapper.append($menu);
                var menuID = this._getID($menu, 'cfw-player');

                var $menuItem = $('<li class="player-script-off"><a href="#" data-cfw-player-script="-1">Off</a></li>');
                $menu.append($menuItem);

                var tracks = this.media.textTracks;
                for (var i = 0; i < this.trackValid.length; i++) {
                    var trackID = this.trackValid[i];
                    $menuItem = $('<li><a href="#" data-cfw-player-script="' + trackID + '">' + tracks[trackID].label + '</a></li>');
                    $menu.append($menuItem);
                }
                if (this.settings.transcriptOption) {
                    // Add scroll toggle
                    $menuItem = $('<li role="separator" class="divider"></li>');
                    $menu.append($menuItem);
                    var scrollVal = (this.settings.transcriptScroll) ? 'true' : 'false';
                    var scrollClass = (this.settings.transcriptScroll) ? 'active' : '';
                    $menuItem = $('<li><a href="#" class="player-script-scroll-check ' + scrollClass + '" data-cfw-player-script-scroll="' + scrollVal + '" aria-checked="' + scrollVal + '"><span class="player-script-scroll-check-icon"></span>Auto-scroll</a></li>');
                    $menu.append($menuItem);
                }

                // Event handlers
                this.$player.on('click', '[data-cfw-player-script]', function(e) {
                    e.preventDefault();
                    var $this = $(this);
                    var num = $this.attr('data-cfw-player-script');
                    $selfRef.scriptSet(num);
                });
                if (this.settings.transcriptOption) {
                    this.$player.on('click', '[data-cfw-player-script-scroll]', function(e) {
                        e.preventDefault();
                        var $this = $(this);
                        $selfRef.settings.transcriptScroll = !$selfRef.settings.transcriptScroll;
                        $this.attr('aria-checked', $selfRef.settings.transcriptScroll);
                        $this.toggleClass('active');
                    });
                }

                $tsElm.CFW_Dropdown({ toggle: '#' + menuID });
            }

            // Show transcript if set
            if (this.settings.transcript !== -1) {
                this.scriptSet(this.settings.transcript);
            }
        },

        scriptSet : function(trackID) {
            trackID = parseInt(trackID, 10);

            if (this.trackValid.length <= 0) {
                return;
            }
            if (this.trackValid.indexOf(trackID) == -1 && trackID != -1) {
                return;
            }

            // No update if same track is selected
            if (trackID == this.scriptCurrent) {
                return;
            }

            if (trackID == -1 && this.$scriptElm !== null) {
                if (!this._trigger('beforeTranscriptHide.cfw.player')) {
                    return;
                }
            } else {
                if (!this._trigger('beforeTranscriptShow.cfw.player')) {
                    return;
                }
            }

            var $tsElm = this.$player.find('[data-cfw-player="transcript"]');

            if (this.$scriptElm !== null) {
                this.$scriptElm.remove();
                this.$scriptElm = null;
            }
            this.$element.removeClass('player-scriptshow');

            if ($tsElm.length) {
                if (this.trackValid.length == 1 && !this.settings.transcriptOption) {
                    // Update toggle
                    $tsElm.removeClass('active');
                    this._pressedState($tsElm, false);
                } else {
                    // Update menu
                    var $tsPar = $tsElm.parent();
                    $tsElm.removeClass('active');
                    $tsPar.removeClass('active');
                    $tsPar.find('[data-cfw-player-script]').closest('li').removeClass('active');
                }
            }

            // Disable cuechange handling
            if (this.scriptCurrent !== -1) {
                $(this.media.textTracks[this.scriptCurrent]).off('cuechange.cfw.player.transcript');
                this.$media.off('timeupdate.cfw.player.transcript');
            }

            this.scriptCurrent = trackID;

            if (trackID == -1) {
                this.scriptCues = null;
                this._trigger('afterTranscriptHide.cfw.player');
            } else {
                this.scriptLoad();
            }

        },

        scriptLoad : function(forced) {
            var $selfRef = this;

            if (forced === undefined) {
                forced = false;
            }

            this.$media.off('loadeddata.cfw.player.script');

            var tracks = this.media.textTracks;
            if (tracks.length <= 0 || this.scriptCurrent == -1) {
                this.scriptCues = null;
                return;
            }

            var cues = tracks[this.scriptCurrent].cues;
            if (cues == null || cues.length <= 0) {
                var hold = (this.trackCurrent == -1) ? null : tracks[this.trackCurrent].mode;
                // preload all tracks to stop future `load` event triggers on transcript change
                for (var i = 0; i < tracks.length; i++) {
                    tracks[i].mode = 'hidden';
                }
                // reset the caption track state
                if (hold !== null) {
                    tracks[this.trackCurrent].mode = hold;
                }
            }

            function scriptLoad2(forced) {
                var tracks = $selfRef.media.textTracks; // Reload object to get update
                var cues = tracks[$selfRef.scriptCurrent].cues;

                if (cues && cues.length <= 0 && !forced) {
                    // Force media to load
                    $selfRef.$media.one('loadeddata.cfw.player.script', function() {
                        $selfRef.scriptLoad(true);
                    });
                    $selfRef.$media.trigger('load');
                    return;
                }

                $selfRef.scriptCues = cues;
                $selfRef.scriptProcess();
            }

            // Short delay to next part
            setTimeout(function() {
                scriptLoad2(forced);
            }, 100);
        },

        scriptProcess : function() {
            var $selfRef = this;

            if (this.scriptCues == null) {
                return;
            }

            /* Borrowed from:
             * http://ableplayer.github.io/ableplayer/
             * https://github.com/ableplayer/ableplayer/blob/master/scripts/transcript.js
             *
             * Modified/simplified to handle *basic text string* cues in DOM object format
             */
            var addCaption = function(div, cap) {
                var $capSpan = $('<span class="player-scripttxt-seekpoint player-scripttxt-caption"></span>');

                var flattenString = function(str) {
                    var result = [];
                    if (str === '') {
                        return result;
                    }
                    var openBracket  = str.indexOf('[');
                    var closeBracket = str.indexOf(']');
                    var openParen    = str.indexOf('(');
                    var closeParen   = str.indexOf(')');

                    var hasBrackets = openBracket !== -1 && closeBracket !== -1;
                    var hasParens = openParen !== -1 && closeParen !== -1;

                    if ((hasParens && hasBrackets && openBracket < openParen) || hasBrackets) {
                        result = result.concat(flattenString(str.substring(0, openBracket)));
                        result.push($('<span class="player-scripttxt-unspoken">' + str.substring(openBracket, closeBracket + 1) + '</span>'));
                        result = result.concat(flattenString(str.substring(closeBracket + 1)));
                    } else if (hasParens) {
                        result = result.concat(flattenString(str.substring(0, openParen)));
                        result.push($('<span class="player-scripttxt-unspoken">' + str.substring(openParen, closeParen + 1) + '</span>'));
                        result = result.concat(flattenString(str.substring(closeParen + 1)));
                    } else {
                        result.push(str);
                    }

                    return result;
                };

                $capSpan.append(flattenString(cap.text));
                $capSpan.attr({
                    'data-start' : cap.startTime.toString(),
                    'data-end'   : cap.endTime.toString()
                });
                div.append($capSpan);
                div.append('\n');
            };

            var $tsElm = this.$player.find('[data-cfw-player="transcript"]');
            this.$element.addClass('player-scriptshow');

            if (this.trackValid.length == 1 && !this.settings.transcriptOption) {
                // Update toggle state
                $tsElm.addClass('active');
                this._pressedState($tsElm, true);
            } else {
                // Update transcript menu
                if ($tsElm.length) {
                    var $tsPar = $tsElm.parent();
                    $tsElm.addClass('active');
                    $tsPar.addClass('active');
                    $tsPar.find('[data-cfw-player-script="' + this.scriptCurrent + '"]').closest('li').addClass('active');
                }
            }

            // Insert transcript container
            var $newElm = $('<div class="player-scripttxt"></div>');
            this.$element.append($newElm);
            this.$scriptElm = this.$element.find('.player-scripttxt');

            // Loop through all captions and add to transcript container
            var cueIdx = 0;
            while (cueIdx < this.scriptCues.length) {
                addCaption(this.$scriptElm, this.scriptCues[cueIdx]);
                cueIdx += 1;
            }

            // Hook in cuechange handler
            if (this.media.textTracks[this.scriptCurrent].oncuechange !== undefined) {
                $(this.media.textTracks[this.scriptCurrent]).on('cuechange.cfw.player.transcript', function() {
                    $selfRef.scriptHighlight(this.activeCues);
                });
            } else {
                // Firefox does not currently support oncuechange event
                this.$media.on('timeupdate.cfw.player.transcript', function() {
                    $selfRef.scriptHighlight($selfRef.media.textTracks[$selfRef.scriptCurrent].activeCues);
                });
            }

            // Seekpoint event handlers
            $('.player-scripttxt-seekpoint', this.$scriptElm).on('click.cfw.player.scriptseek', function() {
                var spanStart = parseFloat($(this).attr('data-start'));
                $selfRef.scriptSeek(spanStart);
            });
            $('.player-scripttxt-seekpoint', this.$scriptElm).on('keydown.cfw.player.scriptseek', function(e) {
                // 13-enter
                if (!/(13)/.test(e.which)) { return; }
                e.stopPropagation();
                e.preventDefault();
                var spanStart = parseFloat($(this).attr('data-start'));
                $selfRef.scriptSeek(spanStart);
            });

            // Artificially trigger first cuechange - in case already in middle of a cue
            var cueEvent;
            if (this.media.textTracks[this.scriptCurrent].oncuechange !== undefined) {
                cueEvent = $.Event('cuechange');
                $(this.media.textTracks[this.scriptCurrent]).trigger(cueEvent);
            } else {
                // Firefox
                cueEvent = $.Event('timeupdate');
                this.$media.trigger(cueEvent);
            }

            this._trigger('afterTranscriptShow.cfw.player');
        },

        scriptHighlight : function(activeCues) {
            // Remove any active highlights
            $('.player-scripttxt-active', this.$scriptElm).removeClass('player-scripttxt-active');

            if (activeCues.length <= 0) {
                return;
            }

            var cueStart = activeCues[0].startTime;
            var $matchCap = $('.player-scripttxt-caption[data-start="' + cueStart + '"]', this.$scriptElm);
            $matchCap.addClass('player-scripttxt-active');

            if (this.settings.transcriptScroll) {
                var tsScroll = this.$scriptElm.scrollTop();
                var tsMid = this.$scriptElm.innerHeight() / 2;
                var mcTop = $matchCap.position().top;
                var mcMid = $matchCap.height() / 2;

                var newTop = Math.floor(tsScroll + mcTop - tsMid + mcMid);
                if (newTop !== Math.floor(tsScroll)) {
                    this.$scriptElm.scrollTop(newTop);
                }
            }
        },

        scriptSeek : function(timestamp) {
            var $selfRef = this;

            timestamp += 0.01; // pad timestamp to put 'inside' the cue

            if (this.media.readyState < 2) {
                this.$media.one('canplay', function() {
                    $selfRef.seekTo(timestamp);
                });
                this.$media.trigger('load');
            } else {
                this.seekTo(timestamp);
            }
        },

        activityInit : function() {
            var $selfRef = this;

            setInterval(function() {
                if ($selfRef.activity && !$selfRef.over) {
                    $selfRef.activity = false;

                    clearTimeout($selfRef.activityTimer);

                    $selfRef.activityStatus(true);

                    $selfRef.activityTimer = setTimeout(function() {
                        if (!$selfRef.activity) {
                            $selfRef.activityStatus(false);
                        }
                    }, 1000);
                }
            }, 250);
        },

        activityStatus : function(bool) {
            /* jshint -W053 */
            bool = !!bool;
            if (bool !== this.userActive) {
                this.userActive = bool;
                if (bool) {
                    this.activity = true;
                    this.$element.removeClass('player-inactive');
                } else {
                    this.activity = false;
                    // Stop pointer change from triggering false mousemove event when changing pointers
                    this.$element.one('mousemove', function(e) {
                        e.stopPropagation();
                        e.preventDefault();
                    });
                    this.$element.addClass('player-inactive');
                }
            }
        },

        _actionsKeydown : function(e) {
            // 32-space, 33-pgup, 34-pgdn, 35-end, 36-home, 37-left, 38-up, 39-right, 40-down, 70-f/F, 77-m/M
            if (!/(32|33|34|35|36|37|38|39|40|70|77)/.test(e.which)) { return; }

            // Ignore space use on button/role="button" items
            if (e.which == 32 || 'button' === e.target.tagName || 'button' === $(e.target).role('attr')) { return; }

            e.stopPropagation();
            e.preventDefault();

            switch (e.which) {
                case 32: { // space
                    if (this.media.paused) {
                        // Paused/stopped
                        this.media.play();
                    } else {
                        // Playing
                        this.media.pause();
                    }
                    this._focusHelper();
                    break;
                }
                case 38: { // up
                    this.volumeIncrement(5);
                    break;
                }
                case 40: { // down
                    this.volumeIncrement(-5);
                    break;
                }
                case 36: { // home
                    this.seekTo(0.0);
                    break;
                }
                case 35: { // end
                    this.seekTo(this.media.duration);
                    break;
                }
                case 37: { // left
                    this.seekIncrement(-5);
                    break;
                }
                case 39: { // right
                    this.seekIncrement(5);
                    break;
                }
                case 33: { // pgup
                    this.seekIncrement(this.status.duration / 5);
                    break;
                }
                case 34: { // pgdn
                    this.seekIncrement(this.status.duration / -5);
                    break;
                }
                case 70: { // f/F
                    this.fullscreen();
                    break;
                }
                case 77: { // m/M
                    this.mute();
                    break;
                }
            }
        },

        _pressedState : function($node, state) {
            var update = false;

            if ($node.length <= 0) { return; }

            // True button
            var nodeName = $node.get(0).nodeName.toLowerCase();
            if ('button' === nodeName) {
                update = true;
            }

            // role="button"
            var nodeRole = $node.attr('role');
            if ('button' === nodeRole) {
                update = true;
            }

            if (update) {
                $node.attr('aria-pressed', state);
            }
            return;
        },

        _focusControl : function(control) {
            var $control = $(control);
            if ($control.length <= 0) { return; }

            setTimeout(function() {
                if ($control.is('a, button')) {
                    $control.trigger('focus');
                } else {
                    $control.find('a:visible, button:visible').eq(0).trigger('focus');
                }
            }, 150);
        },

        _focusHelper : function() {
            var $selfRef = this;

            var $focusCurr = $(document.activeElement);
            setTimeout(function() {
                if (!$focusCurr.is(':visible')) {
                    $selfRef.$focus.trigger('focus');
                }
            }, 10);
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
            var data = this.$element.data();

            if (typeof data.cfwPlayerSrc              !== 'undefined') { parsedData.src              = data.cfwPlayerSrc;              }
            if (typeof data.cfwPlayerTranscript       !== 'undefined') { parsedData.transcript       = data.cfwPlayerTranscript;       }
            if (typeof data.cfwPlayerTranscriptScroll !== 'undefined') { parsedData.transcriptScroll = data.cfwPlayerTranscriptScroll; }
            if (typeof data.cfwPlayerTranscriptOption !== 'undefined') { parsedData.transcriptOption = data.cfwPlayerTranscriptOption; }

            return parsedData;
        },

        _trigger : function(eventName) {
            var e = $.Event(eventName);
            this.$media.trigger(e);
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
            var data = $this.data('cfw.player');
            var options = typeof option === 'object' && option;

            if (!data) {
                $this.data('cfw.player', (data = new CFW_Widget_Player(this, options)));
            }
            if (typeof option === 'string') {
                data[option].apply(data, args);
            }
        });
    }

    $.fn.CFW_Player = Plugin;
    $.fn.CFW_Player.Constructor = CFW_Widget_Player;

    /*
    // API
    // ===
    $(window).ready(function() {
        if (typeof CFW_API === 'undefined' || CFW_API !== false) {
            $('[data-cfw="player"]').each(function() {
                $(this).CFW_Player();
            });
        }
    });
    */
})(jQuery);
