---
layout: docs
title: Player
subtitle: player.js
group: widgets
---

<!-- Font CSS -->
{% if site.github %}
  <link href="{{ site.cdn.fontawe }}" integrity="{{ site.cdn.fontawe_hash }}" crossorigin="anonymous" rel="stylesheet" property="stylesheet">
{% else %}
  <link href="{{ site.baseurl }}/assets/fonts/font-awesome/css/font-awesome.css" rel="stylesheet" property="stylesheet">
{% endif %}

Player is a way to enable customized controls while using the browser's built in HTML5 audio/video player.

Currently, there is no base CSS provided by Figuration in either the `figuration.css` or `figuration.min.css` files.  The examples below use CSS that is specific to our docs pages.

{% callout info %}
#### HTML5 Audio/Video Support

Player builds on top of the browser's built in HTML5 `<audio>`/`<video>` player. The limits and supported media types are determined by the browser itself.

W3School's HTML [`<audio>`](http://www.w3schools.com/tags/tag_audio.asp) and [`<video>`](http://www.w3schools.com/tags/tag_video.asp) pages have additional information. The [audio/video DOM reference](http://www.w3schools.com/tags/ref_av_dom.asp) page might also be useful.
{% endcallout %}

{% callout info %}
#### Widget Dependencies

Player requires the following:

- [Slider widget]({{ site.baseurl}}/widgets/slider/) for seek and volume sliders.
- [Dropdown widget]({{ site.baseurl}}/widgets/dropdown/) for caption and transcript selection menu.
{% endcallout %}
{:.cf-callout-dep}

{% callout warning %}
#### No Media Service Support

Player does not support media services such as YouTube, Vimeo, SoundCloud, and others.  There are currently no plans to support these types of services.
{% endcallout %}

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Examples

The icons shown in the examples are from [Font Awesome](http://fontawesome.io/), and not included with Figuration.

### Simple Audio Player

{% example html %}
<p><small>Source: <a href="http://freesound.org/people/Heigh-hoo/sounds/19433/">Drumroll by Heigh-hoo</a></small></p>

<div data-cfw="player">
    <div class="player" role="region" aria-label="audio player" data-cfw-player="player">
        <span class="player-control" data-cfw-player="control">
            <button type="button" class="btn player-play" data-cfw-player="play" title="Play" aria-label="Play"><span class="fa fa-fw fa-play" aria-hidden="true"></span></button>
            <button type="button" class="btn player-pause" data-cfw-player="pause" title="Pause" aria-label="Pause"><span class="fa fa-fw fa-pause" aria-hidden="true"></span></button>
        </span>
        <span class="player-time" data-cfw-player="time">
            <span class="player-time-current" data-cfw-player="time-current"></span>
            <span class="player-seek progress" data-cfw-player="seek">
                <span class="progress-bar" role="progressbar" data-cfw-player="seek-current"></span>
            </span>
            <span class="player-time-duration" data-cfw-player="time-duration"></span>
        </span>
        <span class="player-mute" data-cfw-player="mute">
            <button type="button" class="btn player-mute-on" title="Unmute" aria-label="Unmute"><span class="fa fa-fw fa-volume-off" aria-hidden="true"></span></button>
            <button type="button" class="btn player-mute-off" title="Mute" aria-label="Mute"><span class="fa fa-fw fa-volume-up" aria-hidden="true"></span></button>
        </span>
        <button type="button" class="btn player-loop" title="Repeat" aria-label="Repeat" data-cfw-player="loop"><span class="fa fa-fw fa-refresh" aria-hidden="true"></span></button>
    </div>
    <audio controls>
        <source src="{{ site.baseurl }}/assets/audio/Drumroll-Heigh-hoo.mp3" type="audio/mpeg" />
        <p>HTML5 audio not supported</p>
    </audio>
</div>
{% endexample %}

### Robust Audio Player

Available seek and volume sliders.

{% example html %}
<p><small>Source: <a href="http://freesound.org/people/StrangerEight/sounds/148695/">Ambient Acoustic by StrangerEight</a></small></p>

<div data-cfw="player">
    <div class="player" role="region" aria-label="audio player" data-cfw-player="player">
        <span class="player-control" data-cfw-player="control">
            <button type="button" class="btn player-play" data-cfw-player="play" title="Play" aria-label="Play"><span class="fa fa-fw fa-play" aria-hidden="true"></span></button>
            <button type="button" class="btn player-pause" data-cfw-player="pause" title="Pause" aria-label="Pause"><span class="fa fa-fw fa-pause" aria-hidden="true"></span></button>
            <button type="button" class="btn player-stop" data-cfw-player="stop" title="Stop" aria-label="Stop"><span class="fa fa-fw fa-stop" aria-hidden="true"></span></button>
        </span>
        <span class="player-time" data-cfw-player="time">
            <span class="player-time-remainder" data-cfw-player="time-remainder"></span>
            <span class="player-seek" data-cfw-player="seek">
            	<label>Seek slider<input type="text" /></label>
            </span>
            <span class="player-time-duration" data-cfw-player="time-duration"></span>
        </span>
        <span class="player-mute" data-cfw-player="mute">
            <button type="button" class="btn player-mute-on" title="Unmute" aria-label="Unmute"><span class="fa fa-fw fa-volume-off" aria-hidden="true"></span></button>
            <button type="button" class="btn player-mute-off" title="Mute" aria-label="Mute"><span class="fa fa-fw fa-volume-up" aria-hidden="true"></span></button>
        </span>
        <span class="player-volume" data-cfw-player="volume">
            <label>Volume slider<input type="text" /></label>
        </span>
        <button type="button" class="btn player-loop" title="Repeat" aria-label="Repeat" data-cfw-player="loop"><span class="fa fa-fw fa-refresh"></span></button>
    </div>
    <audio controls>
        <source src="{{ site.baseurl }}/assets/audio/Ambient_Acoustic-StrangerEight.mp3" type="audio/mpeg" />
        <p>HTML5 audio not supported</p>
    </audio>
</div>
{% endexample %}

### Video Example

{% example html %}

<p><small>Source: <a href="https://videos.pexels.com/videos/tourists-looking-at-niagara-falls-333">Tourists Looking at Niagara Falls</a></small></p>

<div data-cfw="player" class="video-wrapper">
    <div class="video-responsive">
        <video poster="{{ site.baseurl }}/assets/video/niagara_falls.jpg" controls>
            <source src="{{ site.baseurl }}/assets/video/niagara_falls.mp4" type="video/mp4" />
            <track src="{{ site.baseurl }}/assets/video/niagara_falls-en.vtt" label="English subtitles" kind="subtitles" srclang="en" default />
            <track src="{{ site.baseurl }}/assets/video/niagara_falls-es.vtt" label="Subt&iacute;tulos en espa&ntilde;ol" kind="subtitles" srclang="es" />
            <p>HTML5 video not supported</p>
        </video>
    </div>
    <div class="player-wrapper">
        <div class="player row"  role="region" aria-label="video player" data-cfw-player="player">
            <div class="col-md-6">
                <span class="player-control" data-cfw-player="control">
                    <button type="button" class="btn player-play" data-cfw-player="play" title="Play" aria-label="Play"><span class="fa fa-fw fa-play" aria-hidden="true"></span></button>
                    <button type="button" class="btn player-pause" data-cfw-player="pause" title="Pause" aria-label="Pause"><span class="fa fa-fw fa-pause" aria-hidden="true"></span></button>
                    <button type="button" class="btn player-stop" data-cfw-player="stop" title="Stop" aria-label="Stop"><span class="fa fa-fw fa-stop" aria-hidden="true"></span></button>
                </span>
                <span class="player-time" data-cfw-player="time">
                    <span class="player-time-current" data-cfw-player="time-current"></span>
                    <span class="player-seek" data-cfw-player="seek">
                    	<label>Seek slider<input type="text" /></label>
                    </span>
                    <span class="player-time-duration" data-cfw-player="time-duration"></span>
                </span>
            </div>
            <div class="col-md-6">
                <span class="player-mute" data-cfw-player="mute">
                    <button type="button" class="btn player-mute-on" title="Unmute" aria-label="Unmute"><span class="fa fa-fw fa-volume-off" aria-hidden="true"></span></button>
                    <button type="button" class="btn player-mute-off" title="Mute" aria-label="Mute"><span class="fa fa-fw fa-volume-up" aria-hidden="true"></span></button>
                </span>
                <span class="player-volume" data-cfw-player="volume">
                    <label>Volume slider<input type="text" /></label>
                </span>
                <button type="button" class="btn player-loop" title="Repeat" aria-label="Repeat" data-cfw-player="loop"><span class="fa fa-fw fa-refresh" aria-hidden="true"></span></button>
                <button type="button" class="btn player-caption" data-cfw-player="caption" title="Closed captions" aria-label="Closed captions"><span class="fa fa-fw fa-cc" aria-hidden="true"></span></button>
                <span class="player-fullscreen" data-cfw-player="fullscreen">
                    <button type="button" class="btn player-fullscreen-on" title="Exit fullscreen" aria-label="Exit fullscreen"><span class="fa fa-fw fa-arrows-alt" aria-hidden="true"></span></button>
                    <button type="button" class="btn player-fullscreen-off" title="Fullscreen" aria-label="Fullscreen"><span class="fa fa-fw fa-arrows-alt" aria-hidden="true"></span></button>
                </span>
            </div>
        </div>
    </div>
</div>
{% endexample %}

### Interactive Transcript

Add an interactive transcript to your video using the `transcript` control.  The content will be taken from the selected item and placed in another container.  This content will highlight the current caption, and also allow seeking within the media item if one of the passages is clicked.

{% example html %}
<p><small>Source: <a href="https://videos.pexels.com/videos/tourists-looking-at-niagara-falls-333">Tourists Looking at Niagara Falls</a></small></p>

<div data-cfw="player" data-cfw-player-transcript="0" class="video-wrapper">
    <div class="video-responsive">
        <video poster="{{ site.baseurl }}/assets/video/niagara_falls.jpg" controls>
            <source src="{{ site.baseurl }}/assets/video/niagara_falls.mp4" type="video/mp4" />
            <track src="{{ site.baseurl }}/assets/video/niagara_falls-en.vtt" label="English subtitles" kind="subtitles" srclang="en" />
            <track src="{{ site.baseurl }}/assets/video/niagara_falls-es.vtt" label="Subt&iacute;tulos en espa&ntilde;ol" kind="subtitles" srclang="es" />
            <p>HTML5 video not supported</p>
        </video>
    </div>
    <div class="player-wrapper">
        <div class="player row"  role="region" aria-label="video player" data-cfw-player="player">
            <div class="col-md-6">
                <span class="player-control" data-cfw-player="control">
                    <button type="button" class="btn player-play" data-cfw-player="play" title="Play" aria-label="Play"><span class="fa fa-fw fa-play" aria-hidden="true"></span></button>
                    <button type="button" class="btn player-pause" data-cfw-player="pause" title="Pause" aria-label="Pause"><span class="fa fa-fw fa-pause" aria-hidden="true"></span></button>
                    <button type="button" class="btn player-stop" data-cfw-player="stop" title="Stop" aria-label="Stop"><span class="fa fa-fw fa-stop" aria-hidden="true"></span></button>
                </span>
                <span class="player-time" data-cfw-player="time">
                    <span class="player-time-current" data-cfw-player="time-current"></span>
                    <span class="player-seek" data-cfw-player="seek">
                    	<label>Seek slider<input type="text" /></label>
                    </span>
                    <span class="player-time-duration" data-cfw-player="time-duration"></span>
                </span>
            </div>
            <div class="col-md-6">
                <span class="player-mute" data-cfw-player="mute">
                    <button type="button" class="btn player-mute-on" title="Unmute" aria-label="Unmute"><span class="fa fa-fw fa-volume-off" aria-hidden="true"></span></button>
                    <button type="button" class="btn player-mute-off" title="Mute" aria-label="Mute"><span class="fa fa-fw fa-volume-up" aria-hidden="true"></span></button>
                </span>
                <span class="player-volume" data-cfw-player="volume">
                    <label>Volume slider<input type="text" /></label>
                </span>
                <button type="button" class="btn player-caption" data-cfw-player="caption" title="Closed captions" aria-label="Closed captions"><span class="fa fa-fw fa-cc" aria-hidden="true"></span></button>
                <button type="button" class="btn player-transcript" data-cfw-player="transcript" title="Transcript captions" aria-label="Closed captions"><span class="fa fa-fw fa-file-text-o" aria-hidden="true"></span></button>
                <span class="player-fullscreen" data-cfw-player="fullscreen">
                    <button type="button" class="btn player-fullscreen-on" title="Exit fullscreen" aria-label="Exit fullscreen"><span class="fa fa-fw fa-arrows-alt" aria-hidden="true"></span></button>
                    <button type="button" class="btn player-fullscreen-off" title="Fullscreen" aria-label="Fullscreen"><span class="fa fa-fw fa-arrows-alt" aria-hidden="true"></span></button>
                </span>
            </div>
        </div>
    </div>
</div>
{% endexample %}

## Usage

To add custom controls to any `<audio>`/`<video>` element and insert the regions and controls for the custom player.

The player will use the settings of the `<audio>`/`<video>` element to determine default settings.

### Keyboard Controls
<dl class="cf-docs-keys">
    <dt>
        <kbd>space</kbd>
    </dt>
    <dd>
        Play / pause
    </dd>
    <dt>
        <kbd title="up arrow"><span class="fa fa-arrow-up"></span></kbd> /
        <kbd title="down arrow"><span class="fa fa-arrow-down"></span></kbd>
    </dt>
    <dd>
        Raise or lower the volume in 5% increments
    </dd>
    <dt>
        <kbd title="left arrow"><span class="fa fa-arrow-left"></span></kbd> /
        <kbd title="right arrow"><span class="fa fa-arrow-right"></span></kbd>
    </dt>
    <dd>
        Skip backwards or forwards in the timeline by 5 seconds
    </dd>
    <dt>
        <kbd>home</kbd>
    </dt>
    <dd>
        Jump to start of timeline
    </dd>
    <dt>
        <kbd>end</kbd>
    </dt>
    <dd>
        Jump to end of timline
    </dd>
    <dt>
        <kbd>M</kbd>
    </dt>
    <dd>
        Toggle mute
    </dd>
    <dt>
        <kbd>F</kbd>
    </dt>
    <dd>
        Toggle fullscreen
    </dd>
    <dt>
        <kbd>esc</kbd>
    </dt>
    <dd>
        Exit fullscreen
    </dd>
</dl>

Note: If the player uses sliders, the slider keyboard commands will take precendence if the slider handle is the currently focused element.

### Regions and Controls

Regions and controls are specified by data attributes `data-cfw-player="name"` to seperate functionality from layout.  See the following table for the names:

<div class="table-responsive">
    <table class="table table-bordered table-striped">
    <thead>
        <tr>
            <th style="width: 100px;">Name</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>player</td>
            <td>The main player container element.</td>
        </tr>
        <tr>
            <td>control</td>
            <td>Wraps the play, pause, and stop control buttons.</td>
        </tr>
        <tr>
            <td>play</td>
            <td>Play control button.</td>
        </tr>
        <tr>
            <td>pause</td>
            <td>Pause control button.</td>
        </tr>
        <tr>
            <td>stop</td>
            <td>Stop control button.</td>
        </tr>
        <tr>
            <td>time</td>
            <td>Wraps the time displays and seek progress bar or slider.</td>
        </tr>
        <tr>
            <td>current</td>
            <td>Current time location.</td>
        </tr>
        <tr>
            <td>remainder</td>
            <td>Remaining playback time.</td>
        </tr>
        <tr>
            <td>duration</td>
            <td>Time playback duration.</td>
        </tr>
        <tr>
            <td>seek</td>
            <td>
                <p>Container for the seek progress bar or slider.</p>
                <p>If container has a class of <code>progress</code> a progress bar will be assumed. There must be a chlid <code>.progress-bar</code> element in order for the progress bar to display.  For example <code>&lt;span class="progress-bar" role="progressbar" data-cfw-player="seek-current"&gt;&lt;/span&gt;</code></p>
                <p>If container has a child <code>input</code> element, then a slider will be used.</p>
            </td>
        </tr>
        <tr>
            <td>seek-current</td>
            <td>Used for seek progress bar to display current time location.</td>
        </tr>
        <tr>
            <td>seek-buffer</td>
            <td>Unused.</td>
        </tr>
        <tr>
            <td>mute</td>
            <td>Mute toggle button.</td>
        </tr>
        <tr>
            <td>volume</td>
            <td>
                <p>Volume control.</p>
                <p>If container has a child <code>input</code> element, then a slider will be inserted.</p>
            </td>
        </tr>
        <tr>
            <td>loop</td>
            <td>Loop toggle button.</td>
        </tr>
        <tr>
            <td>caption</td>
            <td>
                <p>Caption menu toggle button. Currently only supported for <code>&lt;video&gt;</code> elements.</p>
                <p>The menu is dynamically generated based on the <code>&lt;track&gt;</code> elements, and associated with the button automatically.</p>
                <p>Only tracks with a <code>kind</code> property of <strong>captions</strong> or <strong>subtitles</strong> will be added to the menu.</p>
                <p>If there is only one valid track, then the button will act as a toggle button and not display the menu when clicked.</p>
            </td>
        </tr>
        <tr>
            <td>transcript</td>
            <td>
                <p>Transcript menu toggle button. Transcript text content is genereated from selected track item.</p>
                <p>The menu is dynamically generated based on the <code>&lt;track&gt;</code> elements, and associated with the button automatically.</p>
                <p>Only tracks with a <code>kind</code> property of <strong>captions</strong> or <strong>subtitles</strong> will be added to the menu.</p>
                <p>If there is only one valid track, and the <code>transcriptOption</code> setting is false, then the button will act as a toggle button and not display the menu when clicked.</p>
            </td>
        </tr>
        <tr>
            <td>fullscreen</td>
            <td>Fullscreen toggle button. Currently only supported for <code>&lt;video&gt;</code> elements.</td>
        </tr>
    </tbody>
    </table>
    <p>
        <small>Some mobile devices do not allow for mute or volume control, citing user should have preference through physical hardware controls.  Mostly this applies to iOS devices.</small>
    </p>
</div> <!-- /.table-responsive -->

### Via Data Attributes

Simply add the attribute `data-cfw="player"` to the wrapping container.

### Via JavaScript

Call the player manually with:

{% highlight js %}
$('#myPlayer').CFW_Player();
{% endhighlight %}

### Options

Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-cfw-player`, as in `data-cfw-player-transcript-scroll=true`.

<div class="table-responsive">
    <table class="table table-bordered table-striped">
    <thead>
        <tr>
            <th style="width: 100px;">Name</th>
            <th style="width: 50px;">Type</th>
            <th style="width: 50px;">Default</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>transcript</td>
            <td>integer</td>
            <td>-1</td>
            <td>Turn on the interactive transcript by default.  The integer value reflects the track count (starting from 0) for the desired <code>&lt;track&gt;</code> element to enable.  Default value is -1 which leaves the transcript turned off. Currently only tracks of type <strong>caption</strong> or <strong>subtitles</strong> are supported.</td>
        </tr>
        <tr>
            <td>transcriptScroll</td>
            <td>booelan</td>
            <td>true</td>
            <td>If the transcript should automatically scroll to keep the current caption in the visible area.</td>
        </tr>
        <tr>
            <td>transcriptOption</td>
            <td>booelan</td>
            <td>true</td>
            <td>If the transcript options should be shown in the transcript menu.</td>
        </tr>
    </tbody>
    </table>
</div> <!-- /.table-responsive -->

### Methods

Note: The methods and properties as defined at [HTML Audio/Video DOM Reference](http://www.w3schools.com/tags/ref_av_dom.asp) can be called directly on the `<audio>`/`<video>` element and will update the custom player controls accordingly.

#### `.CFW_Player()`
{:.no_toc}

Activate the custom player controls.

{% highlight js %}
$('#myPlayer').CFW_Player();
{% endhighlight %}

#### `.CFW_Player('play')`
{:.no_toc}

Start playing the track from the current time location.

#### `.CFW_Player('pause')`
{:.no_toc}

Pause the track at current time location.

#### `.CFW_Player('stop')`
{:.no_toc}

Stop playing the track and reset to the beginning.

#### `.CFW_Player('mute')`
{:.no_toc}

Toggle whether or not the volume is muted.

#### `.CFW_Player('loop', [boolean])`
{:.no_toc}

Toggle the loop/repeat setting.  Looping will cause the the track to resume playing from the start when the end is reached.

An optional boolean value can be given as an argument to force the loop/repeat mode.

#### `.CFW_Player('speed', rate)`
{:.no_toc}

Change the playback rate to the media. `rate` is a float value.

- 1.0 is normal speed
- 0.5 is half speed (slower)
- 2.0 is double speed (faster)

#### `.CFW_Player('trackSet', trackID)`
{:.no_toc}

Change the caption/subtitle track.  `trackID` is the 0-indexed array of track items defined in the `<video>` element. Setting `trackID` to `-1` will turn off the captions/subtitles.

#### `.CFW_Player('scriptSet', trackID)`
{:.no_toc}

Change the transcript track.  `trackID` is the 0-indexed array of track items defined in the `<video>` element. Setting `trackID` to `-1` will turn off the transcript.

### Events

Event callbacks happen on the `<audio>`/`<video>` element, but will bubble up through the DOM and can be captured on the `data-cfw="player"` wrapping container if needed.

<div class="table-responsive">
    <table class="table table-bordered table-striped">
    <thead>
        <tr>
            <th style="width: 150px;">Event Type</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>noSupport.cfw.player</td>
            <td>This event fires if it is determined the browser does not support HTML5 audio or the specified MIME type.</td>
        </tr>
        <tr>
            <td>ready.cfw.player</td>
            <td>This event fires after the player item is initialized.</td>
        </tr>
        <tr>
            <td>error.cfw.player</td>
            <td>This event fires when there is an error that cannot be handled.</td>
        </tr>
        <tr>
            <td>beforeTranscriptShow.cfw.player</td>
            <td>This event fires before the transcript is shown.</td>
        </tr>
        <tr>
            <td>afterTranscriptShow.cfw.player</td>
            <td>This event fires after the transcript is shown.</td>
        </tr>
        <tr>
            <td>beforeTranscriptHide.cfw.player</td>
            <td>This event fires before the transcript is hidden/disabled.</td>
        </tr>
        <tr>
            <td>afterTranscriptHide.cfw.player</td>
            <td>This event fires after the transcript is hidden/disabled.</td>
        </tr>
        <tr>
            <td>enterFullscreen.cfw.player</td>
            <td>This event fires after the player is put into fullscreen mode.</td>
        </tr>
        <tr>
            <td>exitFullscreen.cfw.player</td>
            <td>This event fires after the player exits fullscreen mode.</td>
        </tr>
    </tbody>
    </table>
</div> <!-- /.table-responsive -->

{% highlight js %}
$('#myPlayer').on('ready.cfw.player', function () {
  // do something...
});
{% endhighlight %}
