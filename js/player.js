/* eslint-disable no-magic-numbers */
/**
 * --------------------------------------------------------------------------
 * Figuration (v4.0.0-alpha.4): player.js
 * Licensed under MIT (https://github.com/cast-org/figuration/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

(function($) {
    'use strict';

    // Borrowed on 12/05/2014 from: https://github.com/Modernizr/Modernizr/blob/master/feature-detects/audio.js
    var audioTest = function() {
        var elem = document.createElement('audio');
        var bool = false;

        /* eslint-disable no-cond-assign, no-implicit-coercion, no-new-wrappers */
        try {
            if (bool = !!elem.canPlayType) {
                bool      = new Boolean(bool);
                bool.ogg  = elem.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, '');
                bool.mp3  = elem.canPlayType('audio/mpeg;').replace(/^no$/, '');
                bool.opus = elem.canPlayType('audio/ogg; codecs="opus"') || elem.canPlayType('audio/webm; codecs="opus"').replace(/^no$/, '');

                // Mimetypes accepted:
                // http://developer.mozilla.org/En/Media_formats_supported_by_the_audio_and_video_elements
                // http://bit.ly/iphoneoscodecs
                bool.wav  = elem.canPlayType('audio/wav; codecs="1"').replace(/^no$/, '');
                bool.m4a  = (elem.canPlayType('audio/x-m4a;') || elem.canPlayType('audio/aac;')).replace(/^no$/, '');
            }
        } catch (e) {}
        /* eslint-enable no-cond-assign, no-implicit-coercion, no-new-wrappers */

        return bool;
    };

    // Borrowed on 12/05/2014 from: https://github.com/Modernizr/Modernizr/blob/master/feature-detects/video.js
    var videoTest = function() {
        var elem = document.createElement('video');
        var bool = false;

        /* eslint-disable no-cond-assign, no-implicit-coercion, no-new-wrappers */
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
        } catch (e) {}
        /* eslint-enable no-cond-assign, no-implicit-coercion, no-new-wrappers */

        return bool;
    };

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
        this.$sources = null;
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
        this.$captionWrapper = null;

        // Transcript
        this.$scriptElm = null;
        this.scriptCurrent = -1;
        this.scriptCues = null;
        this.seekPoint = '.player-transcript-seekpoint, .player-description-seekpoint';

        // Description for transcript
        this.descCurrent = -1;
        this.descCues = null;

        // Text-based description for screen reader
        this.trackDescription = [];
        this.$textDescribeElm = null;
        this.textDescribeCurrent = -1;
        this.textDescribeCues = null;

        var parsedData = this.$element.CFW_parseData('player', CFW_Widget_Player.DEFAULTS);
        this.settings = $.extend({}, CFW_Widget_Player.DEFAULTS, parsedData, options);

        this._init();
    };

    CFW_Widget_Player.DEFAULTS = {
        mediaDescribe: false,        // Show description source media
        textDescribe: -1,            // Text-based description off
        textDescribeAnnounce: false, // If text-based description should announced by screen readers
        textDescribeVisible: true,   // If text-based description should be visible
        transcript: -1,              // Default transcript off
        transcriptScroll : true,     // Scroll transcript
        transcriptDescribe: true,    // Show descriptions in transcript
        transcriptOption : true      // Show transcript options
    };

    CFW_Widget_Player.prototype = {
        _init : function() {
            this.$media = this.$element.find('audio, video');
            this.media = this.$media[0];

            if (typeof this.media === 'undefined') {
                return;
            }

            if (this.media.nodeName.toLowerCase() === 'video') {
                this.type = 'video';
            }

            if ((this.type === 'audio' && !html5.audio) || (this.type === 'video' && !html5.video)) {
                this.$media.CFW_trigger('noSupport.cfw.player');
                return;
            }

            // Save source items for later use
            this.$sources = this.$media.find('source');
            if (!this.$sources.length) { return; }

            // Also set data attr for original source
            this.$sources.each(function() {
                $(this).attr('data-src-orig', $(this).attr('src'));
            });

            this.$element.attr('data-cfw', 'player')
                .addClass('player-unstarted');

            this.$player = this.$element.find('[data-cfw-player="player"]');
            if (this.$player.length > 0) {
                // Hide browsers default player
                this.media.controls = false;
            }

            // Swap to description media
            if (this.settings.mediaDescribe) {
                this.description();
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
                var NETWORK_NO_SOURCE = 3;
                var TIMEOUT_MAX_COUNT = 75;
                if ($selfRef.media.readyState > 0) {
                    clearInterval(isLoaded);
                    $selfRef.loadComplete();
                    return;
                }
                if ($selfRef.media.networkState === NETWORK_NO_SOURCE || timeout === TIMEOUT_MAX_COUNT) {
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
                $selfRef.playedStatus();
            });
            this.$media.on('loadedmetadata loadeddata progress canplay canplaythrough timeupdate durationchange', function() {
                $selfRef.playedStatus();
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
            if (this.type === 'video') {
                // http://stackoverflow.com/questions/9621499/fullscreen-api-which-events-are-fired
                $(document).on('webkitfullscreenchange mozfullscreenchange MSFullscreenChange fullscreenchange', function() {
                    $selfRef.fullscreenStatus();
                });
                this.$player.on('mouseenter mouseleave', function(e) {
                    $selfRef.activity = true;
                    /* eslint-disable default-case */
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
                    /* eslint-enable default-case */
                });
                this.$element.on('mousemove mousedown mouseup keydown keyup touchmove touchstart touchend', function(e) {
                    $selfRef.activity = true;
                    /* eslint-disable default-case */
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
                    /* eslint-enable default-case */
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
            this.$player.on('click', '[data-cfw-player="description"]', function(e) {
                e.preventDefault();
                $selfRef.description();
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


            // Check for caption container {
            var $captionWrapper =  this.$element.find('[data-cfw-player="caption-display"]');
            if ($captionWrapper.length) {
                this.$captionWrapper = $captionWrapper;
                // Hide wrapper to start
                this.captionDisplayUpdate(null);
            }

            this.trackList();
            this.trackInit();
            this.scriptInit();
            this.textDescriptionInit();

            this.$player.addClass('ready');

            // Inject focus helper item
            var focusDiv = document.createElement('div');
            focusDiv.className = 'player-focus sr-only';
            focusDiv.tabIndex = '-1';
            this.$focus = $(focusDiv);
            this.$element.prepend(this.$focus);

            this.$media.CFW_trigger('ready.cfw.player');

            // Handle element attributes
            if (this.media.autoplay) {
                this.media.play();
            }
        },

        error : function() {
            this.$media.CFW_trigger('error.cfw.player');
        },

        toggle : function() {
            if (this.media.paused) {
                this.playedStatus(true);
                this.media.play();
            } else {
                this.media.pause();
            }
        },

        play : function() {
            this.playedStatus(true);
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

        playedStatus : function(force) {
            if (typeof force === 'undefined') { force = false; }
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
            if (this.status.remaining < 0) { this.status.remaining = 0; }

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

            if ($seekElm.find('input[type="range"]').length) {
                this.seekRange();
            } else if ($seekElm.hasClass('progress')) {
                this.seekProgress();
            }
        },

        seekRange : function() {
            var $selfRef = this;

            if (isNaN(this.media.duration) || this.media.duration === Infinity) { return; }
            var $seekElm = this.$player.find('[data-cfw-player="seek"]');
            var $inputElm = $seekElm.find('input[type="range"]').eq(0);

            if (this.$sliderSeek === null) {
                this.$sliderSeek = $inputElm;

                $inputElm.prop({
                    min: 0,
                    max: this.media.duration,
                    step: 1 // 1-second step
                });

                // Update on both `onchange` and `oninput` events. Seems to
                // help with jumping back to previous timestamp.
                $inputElm.on('change input', function() {
                    var newTime = parseFloat($inputElm.val());
                    // Pause/resume when changing
                    var isPaused = $selfRef.media.paused;
                    $selfRef.media.pause();
                    $selfRef.seekTo(newTime);
                    if (!isPaused) {
                        $selfRef.media.play();
                    }
                });

                // Allow keyboard to do the proper thing here
                $inputElm.on('keydown', function(e) {
                    if (e.type === 'keydown') { e.stopPropagation(); }
                    $(this).off('keyup.cfw.playerSeek');
                    $(this).one('keyup.cfw.playerSeek', function(e) {
                        if (e.type === 'keyup') { e.stopPropagation(); }
                    });
                });
            }

            $inputElm.val(this.media.currentTime);

            // Output a more meaningful description text
            var timeText = this.timeSplit(this.media.currentTime) + ' / ' + this.timeSplit(this.media.duration);
            $inputElm.attr('aria-valuetext', timeText);
        },

        seekProgress : function() {
            if (isNaN(this.media.duration) || this.media.duration === Infinity) { return; }

            var $curElm = this.$player.find('[data-cfw-player="seek-current"]');
            $curElm.attr('role', 'progressbar').attr('aria-label', 'Playback progress');

            var cp = (this.media.currentTime / this.media.duration) * 100;
            if (cp > 100) { cp = 100; }

            $curElm
                .attr({
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
            if (time < 0) { time = 0; }
            if (time > this.media.duration) { time = this.media.duration; }
            this.seekTo(time);
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
                this._controlDisable($muteElm);
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
            var $volElm = this.$player.find('[data-cfw-player="volume"]');

            if ($volElm.find('input[type="range"]').length) {
                this.volumeRange();
            }
        },

        volumeRange : function() {
            var $selfRef = this;
            var $volElm = this.$player.find('[data-cfw-player="volume"]');

            if (!this.support.mute) {
                this._controlDisable($volElm);
                return;
            }
            var $inputElm = $volElm.find('input[type="range"]').eq(0);

            if (this.$volSeek === null) {
                this.$volSeek = $inputElm;
                $inputElm.prop({
                    min: 0,
                    max: 1,
                    step: 0.05  // 5% increment
                });

                // Update on both `onchange` and `oninput` events.
                $inputElm.on('change input', function() {
                    var newVol = parseFloat($inputElm.val());

                    if (newVol === 0) {
                        $selfRef.media.muted = true;
                    } else {
                        $selfRef.media.muted = false;
                        $selfRef.media.volume = newVol;
                    }
                });

                // Allow keyboard to do the proper thing here
                $inputElm.on('keydown', function(e) {
                    if (e.type === 'keydown') { e.stopPropagation(); }
                    $(this).off('keyup.cfw.playerSeek');
                    $(this).one('keyup.cfw.playerSeek', function(e) {
                        if (e.type === 'keyup') { e.stopPropagation(); }
                    });
                });
            }

            // Update range value and output text to percentage
            if (!this.media.muted) {
                $inputElm.val(this.media.volume);
                var level = parseInt(this.media.volume * 100, 10);
                $inputElm.attr('aria-valuetext', level + '%');
            } else {
                $inputElm.val(0);
                $inputElm.attr('aria-valuetext', '0%');
            }
        },

        volumeIncrement : function(delta) {
            var vol = (this.media.volume * 100) + delta;
            if (vol < 0) { vol = 0; }
            if (vol > 100) { vol = 100; }
            this.media.volume = parseInt(vol, 10) / 100;
        },

        loop : function(setting) {
            if (typeof setting !== 'undefined') {
                // set on/off
                this.media.loop = setting;
            } else {
                // toggle
                this.media.loop = !this.media.loop;
            }
            this.loopStatus();
        },

        speed : function(setting) {
            if (typeof setting !== 'undefined') {
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
            return $fsNode.is(this.$element);
        },

        fullscreen : function() {
            if (this.type === 'audio') { return; }
            if (this.isFullScreen()) {
                // Exit fullscreen
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
            } else {
                // Go fullscreen
                // (Note: can be called on document, but here the specific element is used as it will also ensure that the element's children, e.g. the custom controls, go fullscreen also)
                var videoContainer = this.$element[0];
                if (videoContainer.requestFullscreen) {
                    videoContainer.requestFullscreen();
                } else if (videoContainer.mozRequestFullScreen) {
                    videoContainer.mozRequestFullScreen();
                } else if (videoContainer.webkitRequestFullScreen) {
                    videoContainer.webkitRequestFullScreen();
                } else if (videoContainer.msRequestFullscreen) {
                    videoContainer.msRequestFullscreen();
                }
            }
        },

        fullscreenStatus : function() {
            var $fullElm = this.$player.find('[data-cfw-player="fullscreen"]');
            if (this.isFullScreen()) {
                $fullElm.addClass('active');
                this.$element.addClass('player-fulldisplay');
                this.$media.CFW_trigger('enterFullscreen.cfw.player');
            } else {
                $fullElm.removeClass('active');
                this.$element.removeClass('player-fulldisplay');
                this.$media.CFW_trigger('exitFullscreen.cfw.player');
            }
        },

        _srcHasAlternate : function(name) {
            return this.$sources[0].hasAttribute('data-src-' + name);
        },

        _srcIsAlternate : function(name) {
            return this.$sources.first().attr('data-src-' + name) === this.$sources.first().attr('src');
        },

        _srcLoadAlternate : function(name) {
            var $selfRef = this;
            var currTime = this.media.currentTime;
            var isPaused = this.media.paused;

            this.$sources.each(function() {
                $(this).attr('src', $(this).attr('data-src-' + name));
            });

            // Reload the source, skip ahead, and resume playing
            this.$media
                .one('loadeddata', function() {
                    $selfRef.seekTo(currTime);
                    if (!isPaused) { $selfRef.media.play(); }
                });
            this.media.load();
        },

        description : function() {
            if (this._srcHasAlternate('describe')) {
                var $descElm = this.$player.find('[data-cfw-player="description"]');

                if (this._srcIsAlternate('describe')) {
                    // Reset to original source
                    this._srcLoadAlternate('orig');
                    $descElm.removeClass('active');
                } else {
                    // Load description source
                    this._srcLoadAlternate('describe');
                    $descElm.addClass('active');
                }
            }
        },

        trackList : function() {
            var $selfRef = this;

            var tracks = this.media.textTracks;
            if (tracks.length <= 0) {
                return;
            }

            var validTracks = [];
            var descTracks = [];
            for (var i = 0; i < tracks.length; i++) {
                if (tracks[i].kind === 'captions' || tracks[i].kind === 'subtitles') {
                    validTracks.push(i);
                }
                if (tracks[i].kind === 'descriptions') {
                    descTracks.push(i);
                }
            }
            this.trackValid = validTracks;
            this.trackDescription = descTracks;

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
                this._controlDisable($captionElm);
                return;
            }

            if (this.trackValid.length === 1) {
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

                if (this.media.textTracks[0].mode === 'showing') {
                    this.trackSet(0);
                }
            } else {
                // Build menu
                var wrapper = '<span class="player-caption-wrapper"></span>';
                var $menu = $('<ul class="player-caption-menu dropdown-menu"></ul>');
                $captionElm.wrap(wrapper);

                var $wrapper = $captionElm.parent(); /* Because $().wrap() clones element */

                $wrapper.append($menu);
                var menuID = $menu.CFW_getID('cfw-player');

                var $menuItem = $('<li class="player-caption-off"><button type="button" class="dropdown-item" data-cfw-player-track="-1">Off</button></li>');
                $menu.append($menuItem);

                var tracks = this.media.textTracks;

                for (var j = 0; j < tracks.length; j++) {
                    if (tracks[j].mode === 'showing') {
                        this.trackSet(j);
                    }
                }

                for (var i = 0; i < this.trackValid.length; i++) {
                    var trackID = this.trackValid[i];
                    $menuItem = $('<li><button type="button" class="dropdown-item" data-cfw-player-track="' + trackID + '">' + tracks[trackID].label + '</button></li>');
                    $menu.append($menuItem);
                }

                this.$player.on('click', '[data-cfw-player-track]', function(e) {
                    e.preventDefault();
                    var $this = $(this);
                    var num = $this.attr('data-cfw-player-track');
                    $selfRef.trackSet(num);
                });

                $captionElm.CFW_Dropdown({
                    target: '#' + menuID
                });
            }

            this.trackStatus();
        },

        trackSet : function(trackID) {
            trackID = parseInt(trackID, 10);

            var tracks = this.media.textTracks;
            if (tracks.length <= 0) {
                return;
            }

            // Disable any previous cuechange handling
            if (this.trackCurrent !== -1) {
                this._cuechangeDisable(this.trackCurrent, 'captionDisplay');
            }

            this.trackCurrent = trackID;

            for (var i = 0; i < tracks.length; i++) {
                if (tracks[i].mode === 'showing') {
                    tracks[i].mode = 'hidden';
                }
                if (i === trackID) {
                    // tracks[i].mode = 'showing';
                    tracks[i].mode = this.$captionWrapper !== null ? 'hidden' : 'showing';
                }
            }

            // Hook in cuechange handler if using custom captions
            if (this.trackCurrent !== -1 && this.$captionWrapper !== null) {
                this._cuechangeEnable(this.trackCurrent, 'captionDisplay', this.captionDisplayUpdate);
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

            if (this.trackValid.length === 1) {
                // Toggle style
                if (this.trackCurrent === -1) {
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
                $captionPar.find('[data-cfw-player-track]')
                    .removeClass('active')
                    .removeAttr('aria-pressed');

                for (var i = 0; i < tracks.length; i++) {
                    if (i === this.trackCurrent) {
                        $captionElm.addClass('active');
                        $captionPar.addClass('active');
                        $captionPar.find('[data-cfw-player-track="' + i + '"]')
                            .addClass('active')
                            .attr('aria-pressed', 'true');
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
                this._controlDisable($tsElm);
                return;
            }

            if (this.trackValid.length === 1 && !this.settings.transcriptOption) {
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
                var menuID = $menu.CFW_getID('cfw-player');

                var $menuItem = $('<li class="player-script-off"><button type="button" class="dropdown-item" data-cfw-player-script="-1">Off</button></li>');
                $menu.append($menuItem);

                var tracks = this.media.textTracks;
                for (var i = 0; i < this.trackValid.length; i++) {
                    var trackID = this.trackValid[i];
                    $menuItem = $('<li><button type="button" class="dropdown-item" data-cfw-player-script="' + trackID + '">' + tracks[trackID].label + '</a></li>');
                    $menu.append($menuItem);
                }
                if (this.settings.transcriptOption) {
                    $menuItem = $('<li class="dropdown-divider"></li>');
                    $menu.append($menuItem);
                    // Add scroll toggle
                    var scrollCheck = this.settings.transcriptScroll ? 'checked' : '';
                    var scrollID = 'transcriptScroll-' + menuID;
                    $menuItem = $('<li class="dropdown-text"><div class="form-check"><input type="checkbox" data-cfw-player-script-scroll class="form-check-input" ' + scrollCheck + ' id="' + scrollID + '"> <label class="form-check-label" for="' + scrollID + '">Auto-scroll</label></div></li>');
                    $menu.append($menuItem);
                    // Add description toggle
                    var descCheck = this.settings.transcriptDescribe ? 'checked' : '';
                    var descID = 'transcriptDescribe-' + menuID;
                    $menuItem = $('<li class="dropdown-text"><div class="form-check"><input type="checkbox" data-cfw-player-script-describe class="form-check-input" ' + descCheck + ' id="' + descID + '"> <label class="form-check-label" for="' + descID + '">Show Description</label></div></li>');
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
                    this.$player.on('click', '[data-cfw-player-script-scroll]', function() {
                        $selfRef.settings.transcriptScroll = !$selfRef.settings.transcriptScroll;
                        $(this).prop('checked', $selfRef.settings.transcriptScroll);
                    });
                    this.$player.on('click', '[data-cfw-player-script-describe]', function(e) {
                        if (!$selfRef._controlIsDisabled($(e.target))) {
                            $selfRef.settings.transcriptDescribe = !$selfRef.settings.transcriptDescribe;
                            $(this).prop('checked', $selfRef.settings.transcriptDescribe);
                            $selfRef.scriptLoad();
                        }
                    });
                }

                $tsElm.CFW_Dropdown({
                    target: '#' + menuID
                });
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
            if (this.trackValid.indexOf(trackID) === -1 && trackID !== -1) {
                return;
            }

            // No update if same track is selected
            if (trackID === this.scriptCurrent) {
                return;
            }

            if (trackID === -1 && this.$scriptElm !== null) {
                if (!this.$media.CFW_trigger('beforeTranscriptHide.cfw.player')) {
                    return;
                }
            }

            if (!this.$media.CFW_trigger('beforeTranscriptShow.cfw.player')) {
                return;
            }

            var $tsElm = this.$player.find('[data-cfw-player="transcript"]');

            if (this.$scriptElm !== null) {
                this.$scriptElm.remove();
                this.$scriptElm = null;
            }
            this.$element.removeClass('player-scriptshow');

            if ($tsElm.length) {
                if (this.trackValid.length === 1 && !this.settings.transcriptOption) {
                    // Update toggle
                    $tsElm.removeClass('active');
                    this._pressedState($tsElm, false);
                } else {
                    // Update menu
                    var $tsPar = $tsElm.parent();
                    $tsElm.removeClass('active');
                    $tsPar.removeClass('active');
                    $tsPar.find('[data-cfw-player-script]')
                        .removeClass('active')
                        .removeAttr('aria-pressed');
                }
            }

            // Disable any previous cuechange handling
            if (this.scriptCurrent !== -1) {
                this._cuechangeDisable(this.scriptCurrent, 'transcript');
            }

            this.scriptCurrent = trackID;

            if (trackID === -1) {
                this.scriptCues = null;
                this.descCues = null;
                this.$media.CFW_trigger('afterTranscriptHide.cfw.player');
            } else {
                this.scriptLoad();
            }
        },

        scriptLoad : function(forced) {
            var $selfRef = this;

            if (typeof forced === 'undefined') { forced = false; }

            this.$media.off('loadeddata.cfw.player.script');

            var tracks = this.media.textTracks;
            var tracksLength = tracks.length;
            if (tracksLength <= 0) {
                this.scriptCues = null;
                this.descCurrent = -1;
                this.descCues = null;
            }

            // Preload all tracks to stop future `load` event triggers on transcript change
            var hold = this.trackCurrent === -1 ? null : tracks[this.trackCurrent].mode;

            for (var i = 0; i < tracksLength; i++) {
                tracks[i].mode = 'hidden';
            }
            // reset the caption track state
            if (hold !== null) {
                tracks[this.trackCurrent].mode = hold;
            }

            // Find description track
            var descAvailable = false;
            this.descCurrent = -1;
            this.descCues = null;
            if (this.scriptCurrent !== -1) {
                var descLang = tracks[this.scriptCurrent].language;
                for (var j = 0; j < tracksLength; j++) {
                    if (descLang === tracks[j].language && tracks[j].kind === 'descriptions') {
                        if ($selfRef.settings.transcriptDescribe) {
                            $selfRef.descCurrent = j;
                        }
                        descAvailable = true;
                    }
                }
            }
            var $descControl = this.$player.find('[data-cfw-player-script-describe]');
            if (!descAvailable) {
                this._controlDisable($descControl);
            } else {
                this._controlEnable($descControl);
            }

            // Test again for text-based description
            var textDescAvailable = false;
            for (var k = 0; k < tracksLength; k++) {
                if (tracks[k].kind === 'descriptions') {
                    textDescAvailable = true;
                }
            }
            var $textDescControl = this.$player.find('[data-cfw-player="textdescription"]');
            if (!textDescAvailable) {
                this._controlDisable($textDescControl);
            } else {
                this._controlEnable($textDescControl);
            }

            var scriptLoad2 = function(forced) {
                var tracks = $selfRef.media.textTracks; // Reload object to get update
                var cues = $selfRef.scriptCurrent === -1 ? null : tracks[$selfRef.scriptCurrent].cues;
                var descCues = $selfRef.descCurrent === -1 ? null : tracks[$selfRef.descCurrent].cues;
                var textDescCues = $selfRef.textDescribeCurrent === -1 ? null : tracks[$selfRef.textDescribeCurrent].cues;

                if (cues && cues.length <= 0 && !forced) {
                    // Force media to load
                    $selfRef.$media.one('loadeddata.cfw.player.script', function() {
                        $selfRef.scriptLoad(true);
                    });
                    $selfRef.$media.trigger('load');
                    return;
                }

                $selfRef.scriptCues = cues;
                $selfRef.descCues = descCues;
                $selfRef.textDescribeCues = textDescCues;
                $selfRef.scriptProcess();
            };

            // Short delay to next part
            setTimeout(function() {
                scriptLoad2(forced);
            }, 100);
        },

        scriptProcess : function() {
            var $selfRef = this;

            if (this.scriptCues === null && this.descCues === null) {
                return;
            }

            var addCaption = function($div, cap) {
                var $capSpan = $('<span class="player-transcript-seekpoint player-transcript-caption"></span>');
                var capHTML = cap.getCueAsHTML();
                $capSpan.append(capHTML);
                $capSpan.attr({
                    'data-start' : cap.startTime.toString(),
                    'data-end'   : cap.endTime.toString()
                });
                $div.append($capSpan);
                $div.append('\n');
            };

            var addDescription = function($div, desc) {
                var $descDiv = $('<div class="player-description"></div>');
                $descDiv.append('<span class="sr-only">Description: </span>');

                var $descSpan = $('<span class="player-description-seekpoint player-description-caption"></span>');
                var descHTML = desc.getCueAsHTML();
                $descSpan.append(descHTML);
                $descSpan.attr({
                    'data-start' : desc.startTime.toString(),
                    'data-end'   : desc.endTime.toString()
                });
                $descDiv.append($descSpan);

                $div.append($descDiv);
                $div.append('\n');
            };

            var $tsElm = this.$player.find('[data-cfw-player="transcript"]');
            this.$element.addClass('player-scriptshow');

            if (this.trackValid.length === 1 && !this.settings.transcriptOption) {
                // Update toggle state
                $tsElm.addClass('active');
                this._pressedState($tsElm, true);
            } else if ($tsElm.length) {
                // Update transcript menu
                var $tsPar = $tsElm.parent();
                $tsElm.addClass('active');
                $tsPar.addClass('active');
                $tsPar.find('[data-cfw-player-script="' + this.scriptCurrent + '"]')
                    .addClass('active')
                    .attr('aria-pressed', 'true');
            }

            // Remove any existing transcript container
            this.$element.find('.player-transcript').remove();

            // Insert transcript container
            var $newElm = $('<div class="player-transcript"></div>');
            this.$element.append($newElm);
            this.$scriptElm = this.$element.find('.player-transcript');

            // Loop through all captions/descriptions and add to transcript container
            var captions = this.scriptCues || [];
            var descriptions = this.descCues || [];
            var capIdx = 0;
            var descIdx = 0;
            var timeStamp = null;

            while ((capIdx < captions.length) || (descIdx < descriptions.length)) {
                if ((descIdx < descriptions.length) && (capIdx < captions.length)) {
                    // Both descriptions and captions have content
                    timeStamp = Math.min(descriptions[descIdx].startTime, captions[capIdx].startTime);
                } else {
                    // Only one item has content
                    timeStamp = null;
                }

                if (timeStamp !== null) {
                    if (typeof descriptions[descIdx] !== 'undefined' && descriptions[descIdx].startTime === timeStamp) {
                        addDescription(this.$scriptElm, descriptions[descIdx]);
                        descIdx += 1;
                    } else {
                        addCaption(this.$scriptElm, captions[capIdx]);
                        capIdx += 1;
                    }
                } else if (descIdx < descriptions.length) {
                    addDescription(this.$scriptElm, descriptions[descIdx]);
                    descIdx += 1;
                } else if (capIdx < captions.length) {
                    addCaption(this.$scriptElm, captions[capIdx]);
                    capIdx += 1;
                }
            }

            // Hook in cuechange handler
            this._cuechangeEnable(this.scriptCurrent, 'transcript', this.scriptHighlight);

            // Seekpoint event handlers
            $(this.seekPoint, this.$scriptElm)
                .off('click.cfw.player.scriptseek')
                .on('click.cfw.player.scriptseek', function() {
                    var spanStart = parseFloat($(this).attr('data-start'));
                    $selfRef.scriptSeek(spanStart);
                });

            this.$media.CFW_trigger('afterTranscriptShow.cfw.player');
        },

        scriptHighlight : function(activeCues) {
            // Remove any active highlights
            $('.player-transcript-active', this.$scriptElm).removeClass('player-transcript-active');

            if (activeCues.length <= 0) {
                return;
            }

            var cueStart = activeCues[0].startTime;
            var $matchCap = $('.player-transcript-caption[data-start="' + cueStart + '"]', this.$scriptElm);
            $matchCap.addClass('player-transcript-active');

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

        textDescriptionInit : function() {
            var $selfRef = this;
            var $tdElm = this.$player.find('[data-cfw-player="textdescription"]');
            if ($tdElm.length <= 0) {
                return;
            }

            if (this.trackDescription.length <= 0) {
                this._controlDisable($tdElm);
                return;
            }

            // Build menu
            var wrapper = '<span class="player-text-describe-wrapper"></span>';
            var $menu = $('<ul class="player-text-describe-menu dropdown-menu"></ul>');
            $tdElm.wrap(wrapper);

            var $wrapper = $tdElm.parent(); /* Because $().wrap() clones element */

            $wrapper.append($menu);
            var menuID = $menu.CFW_getID('cfw-player');

            var $menuItem = $('<li class="player-text-describe-off"><button type="button" class="dropdown-item" data-cfw-player-text-describe="-1">Off</button></li>');
            $menu.append($menuItem);

            var tracks = this.media.textTracks;
            for (var i = 0; i < this.trackDescription.length; i++) {
                var trackID = this.trackDescription[i];
                $menuItem = $('<li><button type="button" class="dropdown-item" data-cfw-player-text-describe="' + trackID + '">' + tracks[trackID].label + '</a></li>');
                $menu.append($menuItem);
            }
            if (this.settings.transcriptOption) {
                $menuItem = $('<li class="dropdown-divider"></li>');
                $menu.append($menuItem);
                // Add announce toggle
                var announceCheck = this.settings.textDescribeAnnounce ? 'checked' : '';
                var announceID = 'textDescribeAnnounce-' + menuID;
                $menuItem = $('<li class="dropdown-text"><div class="form-check"><input type="checkbox" data-cfw-player-text-describe-announce class="form-check-input" ' + announceCheck + ' id="' + announceID + '"> <label class="form-check-label" for="' + announceID + '">Announce with Screen Reader</label></div></li>');
                $menu.append($menuItem);
                // Add visibility toggle
                var visibleCheck = this.settings.textDescribeVisible ? 'checked' : '';
                var visibleID = 'textDescribeVisible-' + menuID;
                $menuItem = $('<li class="dropdown-text"><div class="form-check"><input type="checkbox" data-cfw-player-text-describe-visible class="form-check-input" ' + visibleCheck + ' id="' + visibleID + '"> <label class="form-check-label" for="' + visibleID + '">Visible Description</label></div></li>');
                $menu.append($menuItem);
            }

            // Event handlers
            this.$player.on('click', '[data-cfw-player-text-describe]', function(e) {
                e.preventDefault();
                var $this = $(this);
                var num = $this.attr('data-cfw-player-text-describe');
                $selfRef.textDescriptionSet(num);
            });
            if (this.settings.transcriptOption) {
                this.$player.on('click', '[data-cfw-player-text-describe-announce]', function() {
                    $selfRef.settings.textDescribeAnnounce = !$selfRef.settings.textDescribeAnnounce;
                    $(this).prop('checked', $selfRef.settings.textDescribeAnnounce);
                    $selfRef.textDescriptionSet($selfRef.textDescribeCurrent);
                });
                this.$player.on('click', '[data-cfw-player-text-describe-visible]', function(e) {
                    if (!$selfRef._controlIsDisabled($(e.target))) {
                        $selfRef.settings.textDescribeVisible = !$selfRef.settings.textDescribeVisible;
                        $(this).prop('checked', $selfRef.settings.textDescribeVisible);
                        $selfRef.textDescriptionSet($selfRef.textDescribeCurrent);
                    }
                });
            }

            $tdElm.CFW_Dropdown({
                target: '#' + menuID
            });

            this.textDescriptionSet(this.settings.textDescribe);
        },

        textDescriptionSet : function(trackID) {
            trackID = parseInt(trackID, 10);

            if (this.trackDescription.length <= 0) {
                return;
            }
            if (this.trackDescription.indexOf(trackID) === -1 && trackID !== -1) {
                return;
            }

            if (trackID === -1 && this.$textDescribeElm !== null) {
                if (!this.$media.CFW_trigger('beforeTextDescriptionHide.cfw.player')) {
                    return;
                }
            } else if (!this.$media.CFW_trigger('beforeTextDescriptionShow.cfw.player')) {
                return;
            }

            if (this.$textDescribeElm !== null) {
                this.$textDescribeElm.remove();
                this.$textDescribeElm = null;
            }
            this.$element.removeClass('player-textdescshow');

            // Remove any existing text description containers
            this.$element.find('.player-textdesc-announce').remove();
            this.$element.find('.player-textdesc-visible').remove();

            var $tdElm = this.$player.find('[data-cfw-player="textdescription"]');
            if ($tdElm.length) {
                // Update menu
                var $tdPar = $tdElm.parent();
                $tdElm.removeClass('active');
                $tdPar.removeClass('active');
                $tdPar.find('[data-cfw-player-text-describe]')
                    .removeClass('active')
                    .removeAttr('aria-pressed');

                if (trackID !== -1) {
                    $tdElm.addClass('active');
                    $tdPar.addClass('active');
                    $tdPar.find('[data-cfw-player-text-describe="' + trackID + '"]')
                        .addClass('active')
                        .attr('aria-pressed', 'true');
                }
            }

            // Disable any previous cuechange handling
            if (this.textDescribeCurrent !== -1) {
                this._cuechangeDisable(this.textDescribeCurrent, 'textdescribe');
            }

            this.textDescribeCurrent = trackID;

            if (trackID === -1) {
                this.textDescribeCues = null;
                this.$media.CFW_trigger('afterTextDescriptionHide.cfw.player');
            } else {
                this.scriptLoad();
            }

            if (trackID !== -1) {
                // Insert new text description container
                var $newElm = $('<div class="player-textdesc"></div>');

                var trackLang = this.media.textTracks[trackID].language;
                if (trackLang.length) {
                    $newElm.attr('lang', trackLang);
                }
                if (this.settings.textDescribeAnnounce) {
                    $newElm.attr({
                        'aria-live': 'assertive',
                        'aria-atomic' : 'true'
                    });
                }
                if (!this.settings.textDescribeVisible) {
                    $newElm.addClass('sr-only');
                }
                this.$element.append($newElm);
                this.$textDescribeElm = this.$element.find('.player-textdesc');

                // Hook in cuechange handler
                this._cuechangeEnable(this.textDescribeCurrent, 'textdescribe', this.textDescribeUpdate);

                this.$media.CFW_trigger('afterTextDescriptionShow.cfw.player');
            }
        },

        textDescribeUpdate : function(activeCues) {
            if (activeCues === null || activeCues.length <= 0) {
                this.$textDescribeElm.empty();
            } else {
                // Show caption area and update caption
                var $tmp = $(document.createElement('div'));
                $tmp.append(activeCues[0].getCueAsHTML());

                var cueHTML = $tmp.html().replace('\n', '<br>');
                this.$textDescribeElm.append(cueHTML);
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

        captionDisplayUpdate : function(activeCues) {
            if (this.$captionWrapper === null) { return; }

            if (this.trackCurrent === -1 || activeCues === null || activeCues.length <= 0) {
                // Clear and hide caption area - nothing to show
                this.$captionWrapper
                    .attr('aria-hidden', 'true')
                    .css('display', 'none')
                    .empty();
            } else {
                // Show caption area and update caption
                var $tmp = $(document.createElement('div'));
                $tmp.append(activeCues[0].getCueAsHTML());

                var cueHTML = $tmp.html().replace('\n', '<br>');
                this.$captionWrapper
                    .removeAttr('aria-hidden')
                    .css('display', '')
                    .append(cueHTML);
            }
        },

        _actionsKeydown : function(e) {
            // 32-space, 33-pgup, 34-pgdn, 35-end, 36-home, 37-left, 38-up, 39-right, 40-down, 70-f/F, 77-m/M
            if (!/(32|33|34|35|36|37|38|39|40|70|77)/.test(e.which)) { return; }

            // Ignore space use on button/role="button" items
            if (e.which === 32 || e.target.tagName === 'button' || $(e.target).attr('role') === 'button') { return; }

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
                default:
            }
        },

        _pressedState : function($node, state) {
            if ($node.length <= 0) { return; }

            // True button
            var nodeName = $node.get(0).nodeName.toLowerCase();
            // role="button"
            var nodeRole = $node.attr('role');
            if (nodeName === 'button' || nodeRole === 'button') {
                $node.attr('aria-pressed', state);
            }
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

        _controlEnable : function($control) {
            $control
                .removeClass('disabled')
                .removeAttr('disabled')
                .closest('label')
                .removeClass('disabled');
        },

        _controlDisable : function($control) {
            if ($control.is('button, input')) {
                $control.prop('disabled', true);
                $control
                    .closest('label')
                    .addClass('disabled');
            } else {
                $control.addClass('disabled');
            }
        },

        _controlIsDisabled : function($control) {
            return $control.is('.disabled, :disabled');
        },

        _cuechangeEnable : function(trackID, namespace, callback) {
            var $selfRef = this;
            if (typeof this.media.textTracks[trackID].oncuechange !== 'undefined') {
                $(this.media.textTracks[trackID])
                    .on('cuechange.cfw.player.' + namespace, function() {
                        callback.call($selfRef, this.activeCues);
                    });
            } else {
                // Firefox does not currently support oncuechange event
                this.$media
                    .on('timeupdate.cfw.player.' + namespace, function() {
                        var activeCues = $selfRef.media.textTracks[trackID].activeCues;
                        callback.call($selfRef, activeCues);
                    });
            }

            // Artificially trigger a cuechange - in case already in middle of a cue
            var cueEvent;
            if (typeof this.media.textTracks[trackID].oncuechange !== 'undefined') {
                cueEvent = $.Event('cuechange');
                $(this.media.textTracks[trackID]).trigger(cueEvent);
            } else {
                // Firefox
                cueEvent = $.Event('timeupdate');
                this.$media.trigger(cueEvent);
            }
        },

        _cuechangeDisable : function(trackID, namespace) {
            $(this.media.textTracks[trackID]).off('cuechange.cfw.player.' + namespace);
            this.$media.off('timeupdate.cfw.player.' + namespace);
        },

        dispose : function() {
            clearTimeout(this.activityTimer);
            if (this.$scriptElm) {
                $(this.seekPoint, this.$scriptElm).off('.cfw.player.seekpoint');
                this.$scriptElm.remove();
            }
            if (this.$sliderSeek) {
                this.$sliderSeek.off();
            }
            if (this.$volSeek) {
                this.$volSeek.off();
            }
            if ($.hasData(this.$player.find('[data-cfw-player="caption"]'))) {
                this.$player.find('[data-cfw-player="caption"]').CFW_Dropdown('dispose');
            }
            if ($.hasData(this.$player.find('[data-cfw-player="transcript"]'))) {
                this.$player.find('[data-cfw-player="transcript"]').CFW_Dropdown('dispose');
            }
            this.$player.off();
            this.$media.off();

            this.$element
                .off()
                .removeData('cfw.player');

            this.$element = null;
            this.type = null;
            this.$media = null;
            this.media = null;
            this.$player = null;
            this.$sources = null;
            this.$focus = null;
            this.$sliderSeek = null;
            this.$volSeek = null;
            this.activity = null;
            this.over = null;
            this.userActive = null;
            this.activityTimer = null;
            this.mouseActivity = null;
            this.scrubPlay = null;
            this.played = null;
            this.status = null;
            this.support = null;
            this.trackValid = null;
            this.trackCurrent = null;
            this.$captionWrapper = null;
            this.$scriptElm = null;
            this.scriptCurrent = null;
            this.scriptCues = null;
            this.descCues = null;
            this.trackDescription = null;
            this.$textDescribeElm = null;
            this.textDescribeCurrent = null;
            this.textDescribeCues = null;
            this.settings = null;
        }
    };

    var Plugin = function(option) {
        var args = [].splice.call(arguments, 1);
        return this.each(function() {
            var $this = $(this);
            var data = $this.data('cfw.player');
            var options = typeof option === 'object' && option;

            if (!data) {
                $this.data('cfw.player', data = new CFW_Widget_Player(this, options));
            }
            if (typeof option === 'string') {
                data[option].apply(data, args);
            }
        });
    };

    $.fn.CFW_Player = Plugin;
    $.fn.CFW_Player.Constructor = CFW_Widget_Player;
}(jQuery));
