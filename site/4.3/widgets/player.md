---
layout: doc
title: Player
subtitle: player.js
description: Player is a way to enable customized controls while using the browser's built in HTML5 audio/video player.
group: widgets
toc: true
---

## Notices

Currently, there is no base CSS provided by Figuration in either the `figuration.css` or `figuration.min.css` files.  The examples below use CSS that is specific to our docs pages.

{% capture callout %}
HTML5 Audio/Video Support
{.h5}

Player builds on top of the browser's built in HTML5 `<audio>`/`<video>` player. The limits and supported media types are determined by the browser itself.

W3School's HTML [`<audio>`](https://www.w3schools.com/tags/tag_audio.asp) and [`<video>`](https://www.w3schools.com/tags/tag_video.asp) pages have additional information. The [audio/video DOM reference](https://www.w3schools.com/tags/ref_av_dom.asp) page might also be useful.
{% endcapture %}
{% renderCallout, callout, "info" %}

{% capture callout %}
Widget Dependencies
{.h5}

Player requires the following:

- [Dropdown widget]({{ site.path }}/{{ version.docs }}/widgets/dropdown/) for caption and transcript selection menu.
{% endcapture %}
{% renderCallout, callout, "info", "cf-callout-dep" %}

{% capture callout %}
No Media Service Support
{.h5}

Player does not support media services such as YouTube, Vimeo, SoundCloud, and others.  There are currently no plans to support these types of services.
{% endcapture %}
{% renderCallout, callout, "warning" %}

## Examples

The icons shown in the examples are from [Font Awesome](https://fontawesome.com/), and not included with Figuration.

### Simple Audio Player

{% capture example %}
<p><small>Source: <a href="https://freesound.org/people/Heigh-hoo/sounds/19433/">Drumroll by Heigh-hoo</a></small></p>

<div data-cfw="player">
  <div class="player" role="region" aria-label="audio player" data-cfw-player="player">
    <span class="player-control me-0_25" data-cfw-player="control">
      <button type="button" class="btn btn-icon" data-cfw-player="play" title="Play" aria-label="Play"><span class="fas fa-fw fa-play" aria-hidden="true"></span></button>
      <button type="button" class="btn btn-icon me-0_25" data-cfw-player="pause" title="Pause" aria-label="Pause"><span class="fas fa-fw fa-pause" aria-hidden="true"></span></button>
    </span>
    <span class="player-time me-0_25" data-cfw-player="time">
      <span class="player-time-current" data-cfw-player="time-current"></span>
      <span class="player-seek progress" data-cfw-player="seek">
        <span class="progress-bar" role="progressbar" data-cfw-player="seek-current"></span>
      </span>
      <span class="player-time-duration" data-cfw-player="time-duration"></span>
    </span>
    <span class="player-mute me-0_25" data-cfw-player="mute">
      <button type="button" class="btn btn-icon player-mute-on" title="Unmute" aria-label="Unmute"><span class="fas fa-fw fa-volume-off" aria-hidden="true"></span></button>
      <button type="button" class="btn btn-icon player-mute-off" title="Mute" aria-label="Mute"><span class="fas fa-fw fa-volume-up" aria-hidden="true"></span></button>
    </span>
    <button type="button" class="btn btn-icon" title="Repeat" aria-label="Repeat" data-cfw-player="loop"><span class="fas fa-fw fa-redo" aria-hidden="true"></span></button>
  </div>
  <audio controls>
    <source src="{{ site.path }}/assets/{{ version.docs }}/audio/Drumroll-Heigh-hoo.mp3" type="audio/mpeg">
    <p>HTML5 audio not supported</p>
  </audio>
</div>
{% endcapture %}
{% renderExample example %}

### Robust Audio Player

Available seek and volume sliders.

{% capture example %}
<p><small>Source: <a href="https://freesound.org/people/StrangerEight/sounds/148695/">Ambient Acoustic by StrangerEight</a></small></p>

<div data-cfw="player">
  <div class="player" role="region" aria-label="audio player" data-cfw-player="player">
    <span class="player-control me-0_25" data-cfw-player="control">
      <button type="button" class="btn btn-icon" data-cfw-player="play" title="Play" aria-label="Play"><span class="fas fa-fw fa-play" aria-hidden="true"></span></button>
      <button type="button" class="btn btn-icon" data-cfw-player="pause" title="Pause" aria-label="Pause"><span class="fas fa-fw fa-pause" aria-hidden="true"></span></button>
      <button type="button" class="btn btn-icon" data-cfw-player="stop" title="Stop" aria-label="Stop"><span class="fas fa-fw fa-stop" aria-hidden="true"></span></button>
    </span>
    <span class="player-time me-0_25" data-cfw-player="time">
      <span class="player-time-remainder" data-cfw-player="time-remainder"></span>
      <span class="player-seek" data-cfw-player="seek">
        <input type="range" class="form-range" aria-label="Seek">
      </span>
      <span class="player-time-duration" data-cfw-player="time-duration"></span>
    </span>
    <span class="player-mute me-0_25" data-cfw-player="mute">
      <button type="button" class="btn btn-icon player-mute-on" title="Unmute" aria-label="Unmute"><span class="fas fa-fw fa-volume-off" aria-hidden="true"></span></button>
      <button type="button" class="btn btn-icon player-mute-off" title="Mute" aria-label="Mute"><span class="fas fa-fw fa-volume-up" aria-hidden="true"></span></button>
    </span>
    <span class="player-volume me-0_25" data-cfw-player="volume">
      <input type="range" class="form-range" aria-label="Volume">
    </span>
    <button type="button" class="btn btn-icon" title="Repeat" aria-label="Repeat" data-cfw-player="loop"><span class="fas fa-fw fa-redo"></span></button>
  </div>
  <audio controls>
    <source src="{{ site.path }}/assets/{{ version.docs }}/audio/Ambient_Acoustic-StrangerEight.mp3" type="audio/mpeg">
    <p>HTML5 audio not supported</p>
  </audio>
</div>
{% endcapture %}
{% renderExample example %}

### Video Example

{% capture example %}
<p><small>Source: <a href="https://www.pexels.com/video/tourists-looking-at-niagara-falls-852305/">Tourists Looking at Niagara Falls</a></small></p>

<div data-cfw="player" class="video-wrapper">
  <div class="embed-fluid">
    <video poster="{{ site.path }}/assets/{{ version.docs }}/video/niagara_falls.jpg" controls>
      <source src="{{ site.path }}/assets/{{ version.docs }}/video/niagara_falls.mp4" type="video/mp4">
      <track src="{{ site.path }}/assets/{{ version.docs }}/video/niagara_falls-en.vtt" label="English subtitles" kind="subtitles" srclang="en" default>
      <track src="{{ site.path }}/assets/{{ version.docs }}/video/niagara_falls-es.vtt" label="Subt&iacute;tulos en espa&ntilde;ol" kind="subtitles" srclang="es">
      <p>HTML5 video not supported</p>
    </video>
  </div>
  <div class="player-wrapper">
    <div class="player row" role="region" aria-label="video player" data-cfw-player="player">
      <div class="col-md-6">
        <span class="player-control" data-cfw-player="control">
          <button type="button" class="btn btn-icon" data-cfw-player="play" title="Play" aria-label="Play"><span class="fas fa-fw fa-play" aria-hidden="true"></span></button>
          <button type="button" class="btn btn-icon" data-cfw-player="pause" title="Pause" aria-label="Pause"><span class="fas fa-fw fa-pause" aria-hidden="true"></span></button>
          <button type="button" class="btn btn-icon" data-cfw-player="stop" title="Stop" aria-label="Stop"><span class="fas fa-fw fa-stop" aria-hidden="true"></span></button>
        </span>
        <span class="player-time" data-cfw-player="time">
          <span class="player-time-current" data-cfw-player="time-current"></span>
          <span class="player-seek" data-cfw-player="seek">
            <input type="range" class="form-range" aria-label="Seek">
          </span>
          <span class="player-time-duration" data-cfw-player="time-duration"></span>
        </span>
      </div>
      <div class="col-md-6">
        <span class="player-mute" data-cfw-player="mute">
          <button type="button" class="btn btn-icon player-mute-on" title="Unmute" aria-label="Unmute"><span class="fas fa-fw fa-volume-off" aria-hidden="true"></span></button>
          <button type="button" class="btn btn-icon player-mute-off" title="Mute" aria-label="Mute"><span class="fas fa-fw fa-volume-up" aria-hidden="true"></span></button>
        </span>
        <span class="player-volume" data-cfw-player="volume">
          <input type="range" class="form-range" aria-label="Volume">
        </span>
        <button type="button" class="btn btn-icon" title="Repeat" aria-label="Repeat" data-cfw-player="loop"><span class="fas fa-fw fa-redo" aria-hidden="true"></span></button>
        <button type="button" class="btn btn-icon" data-cfw-player="caption" title="Closed captions" aria-label="Closed captions"><span class="fas fa-fw fa-closed-captioning" aria-hidden="true"></span></button>
        <span class="player-fullscreen" data-cfw-player="fullscreen">
          <button type="button" class="btn btn-icon player-fullscreen-on" title="Exit fullscreen" aria-label="Exit fullscreen"><span class="fas fa-fw fa-arrows-alt" aria-hidden="true"></span></button>
          <button type="button" class="btn btn-icon player-fullscreen-off" title="Fullscreen" aria-label="Fullscreen"><span class="fas fa-fw fa-arrows-alt" aria-hidden="true"></span></button>
        </span>
      </div>
    </div>
  </div>
</div>
{% endcapture %}
{% renderExample example %}

### Interactive Transcript

Add an interactive transcript to your video using the `transcript` control.  The content will be taken from the selected item and placed in another container.  This content will highlight the current caption, and also allow seeking within the media item if one of the passages is clicked.

{% capture example %}
<div data-cfw="player" data-cfw-player-transcript="0" class="video-wrapper" role="region" aria-label="video player">
  <div class="embed-fluid">
    <video poster="{{ site.path }}/assets/{{ version.docs }}/video/niagara_falls.jpg" controls>
      <source src="{{ site.path }}/assets/{{ version.docs }}/video/niagara_falls.mp4" type="video/mp4">
      <track src="{{ site.path }}/assets/{{ version.docs }}/video/niagara_falls-en.vtt" label="English subtitles" kind="subtitles" srclang="en">
      <track src="{{ site.path }}/assets/{{ version.docs }}/video/niagara_falls-es.vtt" label="Subt&iacute;tulos en espa&ntilde;ol" kind="subtitles" srclang="es">
      <p>HTML5 video not supported</p>
    </video>
  </div>
  <div class="player-wrapper">
    <div class="player row" role="region" aria-label="video player" data-cfw-player="player">
      <div class="col-md-6">
        <span class="player-control" data-cfw-player="control">
          <button type="button" class="btn btn-icon" data-cfw-player="play" title="Play" aria-label="Play"><span class="fas fa-fw fa-play" aria-hidden="true"></span></button>
          <button type="button" class="btn btn-icon" data-cfw-player="pause" title="Pause" aria-label="Pause"><span class="fas fa-fw fa-pause" aria-hidden="true"></span></button>
          <button type="button" class="btn btn-icon" data-cfw-player="stop" title="Stop" aria-label="Stop"><span class="fas fa-fw fa-stop" aria-hidden="true"></span></button>
        </span>
        <span class="player-time" data-cfw-player="time">
          <span class="player-time-current" data-cfw-player="time-current"></span>
          <span class="player-seek" data-cfw-player="seek">
            <input type="range" class="form-range" aria-label="Seek">
          </span>
          <span class="player-time-duration" data-cfw-player="time-duration"></span>
        </span>
      </div>
      <div class="col-md-6">
        <span class="player-mute" data-cfw-player="mute">
          <button type="button" class="btn btn-icon player-mute-on" title="Unmute" aria-label="Unmute"><span class="fas fa-fw fa-volume-off" aria-hidden="true"></span></button>
          <button type="button" class="btn btn-icon player-mute-off" title="Mute" aria-label="Mute"><span class="fas fa-fw fa-volume-up" aria-hidden="true"></span></button>
        </span>
        <span class="player-volume" data-cfw-player="volume">
          <input type="range" class="form-range" aria-label="Volume">
        </span>
        <button type="button" class="btn btn-icon" data-cfw-player="caption" title="Closed captions" aria-label="Closed captions"><span class="fas fa-fw fa-closed-captioning" aria-hidden="true"></span></button>
        <button type="button" class="btn btn-icon" data-cfw-player="transcript" title="Transcript captions" aria-label="Closed captions"><span class="far fa-fw fa-file-alt" aria-hidden="true"></span></button>
        <span class="player-fullscreen" data-cfw-player="fullscreen">
          <button type="button" class="btn btn-icon player-fullscreen-on" title="Exit fullscreen" aria-label="Exit fullscreen"><span class="fas fa-fw fa-arrows-alt" aria-hidden="true"></span></button>
          <button type="button" class="btn btn-icon player-fullscreen-off" title="Fullscreen" aria-label="Fullscreen"><span class="fas fa-fw fa-arrows-alt" aria-hidden="true"></span></button>
        </span>
      </div>
    </div>
  </div>
</div>
{% endcapture %}
{% renderExample example %}

### Audio Description

Improve accessibility for blind and visually impaired users by including an audio description with your video. Extend the `<source>` elements with a `data-src-describe=""` attribute pointing to the video source that contains the additional narration  description. Also add a control with a `data-cfw-player="description"` attribute.  This will allow the user to toggle the audio description version of the video on and off.

{% capture example %}
<div data-cfw="player" data-cfw-player-media-describe="true" class="video-wrapper" role="region" aria-label="video player">
  <div class="embed-fluid">
    <video poster="{{ site.path }}/assets/{{ version.docs }}/video/niagara_falls.jpg" controls>
      <source src="{{ site.path }}/assets/{{ version.docs }}/video/niagara_falls.mp4" data-src-describe="{{ site.path }}/assets/{{ version.docs }}/video/niagara_falls-describe-en.mp4">
    </video>
  </div>
  <div class="player-wrapper">
    <div class="player" data-cfw-player="player">
      <span class="player-control me-0_5" data-cfw-player="control">
        <button type="button" class="btn btn-icon" data-cfw-player="play" title="Play" aria-label="Play"><span class="fas fa-fw fa-play"></span></button>
        <button type="button" class="btn btn-icon" data-cfw-player="pause" title="Pause" aria-label="Pause"><span class="fas fa-fw fa-pause"></span></button>
      </span>
      <span class="player-time me-0_5" data-cfw-player="time">
        <span class="player-time-current" data-cfw-player="time-current"></span>
        <span class="player-seek" data-cfw-player="seek">
          <input type="range" class="form-range" aria-label="Seek">
        </span>
        <span class="player-time-duration" data-cfw-player="time-duration"></span>
      </span>
      <span class="player-describe" data-cfw-player="description">
        <button type="button" class="btn btn-icon on active" title="Turn Off Audio Description" aria-label="Turn Off Audio Description"><span class="fas fa-fw fa-audio-description"></span></button>
        <button type="button" class="btn btn-icon off" title="Turn On Audio Description" aria-label="Turn On Audio Description"><span class="fas fa-fw fa-audio-description"></span></button>
      </span>
    </div>
  </div>
</div>
{% endcapture %}
{% renderExample example %}

### Transcript Description

Further improve accessibility for blind and visually impaired users by including the audio description narration within the interactive transcript. Add a `<track kind="descriptions">`with the content of the description narration.  Also add matching `srclang` attributes to both the caption (or subtitle) track, and to the descriptions track.  For example, to specify the English language, use `srclang="en"` on both elements.

{% capture example %}
<div data-cfw="player" data-cfw-player-transcript="0" data-cfw-player-media-describe="true" class="video-wrapper" role="region" aria-label="video player">
  <div class="embed-fluid">
    <video poster="{{ site.path }}/assets/{{ version.docs }}/video/niagara_falls.jpg" controls>
      <source src="{{ site.path }}/assets/{{ version.docs }}/video/niagara_falls.mp4" data-src-describe="{{ site.path }}/assets/{{ version.docs }}/video/niagara_falls-describe-en.mp4">
      <track src="{{ site.path }}/assets/{{ version.docs }}/video/niagara_falls-en.vtt" label="English" kind="subtitles" srclang="en" default>
      <track src="{{ site.path }}/assets/{{ version.docs }}/video/niagara_falls-es.vtt" label="Espa&ntilde;ol" kind="subtitles" srclang="es">
      <track src="{{ site.path }}/assets/{{ version.docs }}/video/niagara_falls-describe-en.vtt" label="English Description" kind="descriptions" srclang="en">
      <track src="{{ site.path }}/assets/{{ version.docs }}/video/niagara_falls-describe-es.vtt" label="Descripción Espa&ntilde;ola" kind="descriptions" srclang="es">
    </video>
  </div>
  <div class="player-wrapper">
    <div class="player" data-cfw-player="player">
      <span class="player-control me-0_5" data-cfw-player="control">
        <button type="button" class="btn btn-icon" data-cfw-player="play" title="Play" aria-label="Play"><span class="fas fa-fw fa-play"></span></button>
        <button type="button" class="btn btn-icon" data-cfw-player="pause" title="Pause" aria-label="Pause"><span class="fas fa-fw fa-pause"></span></button>
      </span>
      <span class="player-time me-0_5" data-cfw-player="time">
        <span class="player-time-current" data-cfw-player="time-current"></span>
        <span class="player-seek" data-cfw-player="seek">
          <input type="range" class="form-range" aria-label="Seek">
        </span>
        <span class="player-time-duration" data-cfw-player="time-duration"></span>
      </span>
      <span class="player-describe me-0_25" data-cfw-player="description">
        <button type="button" class="btn btn-icon on active" title="Turn Off Audio Description" aria-label="Turn Off Audio Description"><span class="fas fa-fw fa-audio-description"></span></button>
        <button type="button" class="btn btn-icon off" title="Turn On Audio Description" aria-label="Turn On Audio Description"><span class="fas fa-fw fa-audio-description"></span></button>
      </span>
      <button type="button" class="btn btn-icon me-0_25" data-cfw-player="caption" title="Closed Captions" aria-label="Closed Captions"><span class="fas fa-fw fa-closed-captioning"></span></button>
      <button type="button" class="btn btn-icon" data-cfw-player="transcript" title="Transcript" aria-label="Transcript"><span class="far fa-fw fa-file-alt"></span></button>
    </div>
  </div>
</div>
{% endcapture %}
{% renderExample example %}

### Text-based Description

By using the same `<track kind="descriptions">` as the above example, we can provide text-based descriptions outside of the transcript, and optionally make them announced by screen readers. In this case the `srclang` attribute will be used to set the `lang` attribute for screen readers.

{% capture example %}
<div data-cfw="player" data-cfw-player-text-describe="2" class="video-wrapper" role="region" aria-label="video player">
  <div class="embed-fluid">
    <video poster="{{ site.path }}/assets/{{ version.docs }}/video/niagara_falls.jpg" controls>
      <source src="{{ site.path }}/assets/{{ version.docs }}/video/niagara_falls.mp4">
      <track src="{{ site.path }}/assets/{{ version.docs }}/video/niagara_falls-en.vtt" label="English" kind="subtitles" srclang="en" default>
      <track src="{{ site.path }}/assets/{{ version.docs }}/video/niagara_falls-es.vtt" label="Espa&ntilde;ol" kind="subtitles" srclang="es">
      <track src="{{ site.path }}/assets/{{ version.docs }}/video/niagara_falls-describe-en.vtt" label="English Description" kind="descriptions" srclang="en">
      <track src="{{ site.path }}/assets/{{ version.docs }}/video/niagara_falls-describe-es.vtt" label="Descripción Espa&ntilde;ola" kind="descriptions" srclang="es">
    </video>
  </div>
  <div class="player-wrapper">
    <div class="player" data-cfw-player="player">
      <span class="player-control me-0_5" data-cfw-player="control">
        <button type="button" class="btn btn-icon" data-cfw-player="play" title="Play" aria-label="Play"><span class="fas fa-fw fa-play"></span></button>
        <button type="button" class="btn btn-icon" data-cfw-player="pause" title="Pause" aria-label="Pause"><span class="fas fa-fw fa-pause"></span></button>
      </span>
      <span class="player-time me-0_5" data-cfw-player="time">
        <span class="player-time-current" data-cfw-player="time-current"></span>
        <span class="player-seek" data-cfw-player="seek">
          <input type="range" class="form-range" aria-label="Seek">
        </span>
        <span class="player-time-duration" data-cfw-player="time-duration"></span>
      </span>
      <button type="button" class="btn btn-icon me-0_25" data-cfw-player="textdescription" title="Text Description" aria-label="Text Description"><span class="fas fa-fw fa-font"></span></button>
    </div>
  </div>
</div>
{% endcapture %}
{% renderExample example %}

### Custom Captions

Take control over how captions are displayed by adding a container with a `data-cfw-player="caption-display"` attribute.  This will hide the default browser captions, and instead place the content in the designated container.

{% capture example %}
<div data-cfw="player" class="video-wrapper">
  <div class="embed-fluid">
    <video poster="{{ site.path }}/assets/{{ version.docs }}/video/niagara_falls.jpg" controls>
      <source src="{{ site.path }}/assets/{{ version.docs }}/video/niagara_falls.mp4" type="video/mp4">
      <track src="{{ site.path }}/assets/{{ version.docs }}/video/niagara_falls-en.vtt" label="English subtitles" kind="subtitles" srclang="en" default>
      <track src="{{ site.path }}/assets/{{ version.docs }}/video/niagara_falls-es.vtt" label="Subt&iacute;tulos en espa&ntilde;ol" kind="subtitles" srclang="es">
      <p>HTML5 video not supported</p>
    </video>
    <div class="player-caption-display" data-cfw-player="caption-display"></div>
  </div>
  <div class="player-wrapper">
    <div class="player me-0_5" role="region" aria-label="video player" data-cfw-player="player">
      <span class="player-control " data-cfw-player="control">
        <button type="button" class="btn btn-icon" data-cfw-player="play" title="Play" aria-label="Play"><span class="fas fa-fw fa-play" aria-hidden="true"></span></button>
        <button type="button" class="btn btn-icon" data-cfw-player="pause" title="Pause" aria-label="Pause"><span class="fas fa-fw fa-pause" aria-hidden="true"></span></button>
      </span>
      <span class="player-time me-0_5" data-cfw-player="time">
        <span class="player-time-current" data-cfw-player="time-current"></span>
        <span class="player-seek" data-cfw-player="seek">
          <input type="range" class="form-range" aria-label="Seek">
        </span>
        <span class="player-time-duration" data-cfw-player="time-duration"></span>
      </span>
      <button type="button" class="btn btn-icon me-0_25" data-cfw-player="caption" title="Closed captions" aria-label="Closed captions"><span class="fas fa-fw fa-closed-captioning" aria-hidden="true"></span></button>
      <span class="player-fullscreen" data-cfw-player="fullscreen">
        <button type="button" class="btn btn-icon player-fullscreen-on" title="Exit fullscreen" aria-label="Exit fullscreen"><span class="fas fa-fw fa-arrows-alt" aria-hidden="true"></span></button>
        <button type="button" class="btn btn-icon player-fullscreen-off" title="Fullscreen" aria-label="Fullscreen"><span class="fas fa-fw fa-arrows-alt" aria-hidden="true"></span></button>
      </span>
    </div>
  </div>
</div>
{% endcapture %}
{% renderExample example %}

### Automatic Pause

When the player widget is used inside of one of our other widgets, such as [collapse]({{ site.path }}/{{ version.docs }}/widgets/collapse/), [tabs]({{ site.path }}/{{ version.docs }}/widgets/tab/), [popovers]({{ site.path }}/{{ version.docs }}/widgets/popover/), and [modals]({{ site.path }}/{{ version.docs }}/widgets/modal/), the player will automatically pause when the container becomes hidden, or collapsed.

<div class="cf-example">
  <button type="button" class="btn btn-info" data-cfw="modal" data-cfw-modal-target="#modalPlayer">
    Player in Modal
  </button>

  <button type="button" class="btn btn-info" data-cfw="popover" data-cfw-popover-target="#popoverPlayer">
    Player in Popover
  </button>
</div>

<div class="modal" id="modalPlayer">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-2xlarge">Player auto pause test</h1>
        <button type="button" class="close" data-cfw-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      </div>
      <div class="modal-body">
        <h2 class="h6">Ambient Acoustic by StrangerEight</h2>
        <div data-cfw="player" role="region" aria-label="audio player">
          <div class="player" data-cfw-player="player">
            <span class="player-control" data-cfw-player="control">
              <button type="button" class="btn btn-icon" data-cfw-player="play" title="Play" aria-label="Play"><span class="fas fa-fw fa-play"></span></button>
              <button type="button" class="btn btn-icon" data-cfw-player="pause" title="Pause" aria-label="Pause"><span class="fas fa-fw fa-pause"></span></button>
              <button type="button" class="btn btn-icon" data-cfw-player="stop" title="Stop" aria-label="Stop"><span class="fas fa-fw fa-stop"></span></button>
            </span>
            <span class="player-time" data-cfw-player="time">
              <span class="player-time-current" data-cfw-player="time-current"></span>
              <span class="player-seek form-inline" data-cfw-player="seek">
                <input type="range" class="form-range" aria-label="Seek">
              </span>
              <span class="player-time-duration" data-cfw-player="time-duration"></span>
            </span>
          </div>
          <audio controls>
            <source src="{{ site.path }}/assets/{{ version.docs }}/audio/Ambient_Acoustic-StrangerEight.mp3" type="audio/mpeg">
            <p>HTML5 audio not supported</p>
          </audio>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="popover" id="popoverPlayer">
  <h3 class="popover-header">Player auto pause test</h3>
  <div class="popover-body">
    <h3 class="h6">Ambient Acoustic by StrangerEight</h3>
    <div data-cfw="player" role="region" aria-label="audio player">
      <div class="player" data-cfw-player="player">
        <span class="player-control" data-cfw-player="control">
          <button type="button" class="btn btn-icon" data-cfw-player="play" title="Play" aria-label="Play"><span class="fas fa-fw fa-play"></span></button>
          <button type="button" class="btn btn-icon" data-cfw-player="pause" title="Pause" aria-label="Pause"><span class="fas fa-fw fa-pause"></span></button>
          <button type="button" class="btn btn-icon" data-cfw-player="stop" title="Stop" aria-label="Stop"><span class="fas fa-fw fa-stop"></span></button>
        </span>
        <span class="player-time" data-cfw-player="time">
          <span class="player-time-current" data-cfw-player="time-current"></span>
          <span class="player-seek form-inline" data-cfw-player="seek">
            <input type="range" class="form-range" aria-label="Seek">
          </span>
          <span class="player-time-duration" data-cfw-player="time-duration"></span>
        </span>
      </div>
      <audio controls>
        <source src="{{ site.path }}/assets/{{ version.docs }}/audio/Ambient_Acoustic-StrangerEight.mp3" type="audio/mpeg">
        <p>HTML5 audio not supported</p>
      </audio>
    </div>
  </div>
  <div class="popover-arrow"></div>
</div>

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
    <kbd title="up arrow"><span class="fas fa-arrow-up" aria-hidden="true"></span></kbd> /
    <kbd title="down arrow"><span class="fas fa-arrow-down" aria-hidden="true"></span></kbd>
  </dt>
  <dd>
    Raise or lower the volume in 5% increments
  </dd>
  <dt>
    <kbd title="left arrow"><span class="fas fa-arrow-left" aria-hidden="true"></span></kbd> /
    <kbd title="right arrow"><span class="fas fa-arrow-right" aria-hidden="true"></span></kbd>
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

Note: If the player uses `input type="range"` sliders, the range keyboard commands will take precendence if the input is the currently focused element.

### Regions and Controls

Regions and controls are specified by data attributes `data-cfw-player="name"` to separate functionality from layout.  See the following table for the names:

<div class="table-scroll">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th style="width: 100px;">Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>player</code></td>
        <td>The main player container element.</td>
      </tr>
      <tr>
        <td><code>control</code></td>
        <td>Wraps the play, pause, and stop control buttons.</td>
      </tr>
      <tr>
        <td><code>play</code></td>
        <td>Play control button.</td>
      </tr>
      <tr>
        <td><code>pause</code></td>
        <td>Pause control button.</td>
      </tr>
      <tr>
        <td><code>stop</code></td>
        <td>Stop control button.</td>
      </tr>
      <tr>
        <td><code>time</code></td>
        <td>Wraps the time displays and seek progress bar or slider.</td>
      </tr>
      <tr>
        <td><code>current</code></td>
        <td>Current time location.</td>
      </tr>
      <tr>
        <td><code>remainder</code></td>
        <td>Remaining playback time.</td>
      </tr>
      <tr>
        <td><code>duration</code></td>
        <td>Time playback duration.</td>
      </tr>
      <tr>
        <td><code>seek</code></td>
        <td>
          <p>Container for the seek progress bar or slider.</p>
          <p>If container has a class of <code>progress</code> a progress bar will be assumed. There must be a chlid <code>.progress-bar</code> element in order for the progress bar to display.  For example <code>&lt;span class="progress-bar" role="progressbar" data-cfw-player="seek-current"&gt;&lt;/span&gt;</code></p>
          <p>Otherwise, use a child <code>&lt;input type="range"&gt;</code> element for a slider style control.</p>
        </td>
      </tr>
      <tr>
        <td><code>seek-current</code></td>
        <td>Used for seek progress bar to display current time location.</td>
      </tr>
      <tr>
        <td><code>seek-buffer</code></td>
        <td>Unused.</td>
      </tr>
      <tr>
        <td><code>mute</code></td>
        <td>
          <p>Mute toggle button.</p>
          <p class="small mb-0">
            Some mobile devices do not allow for mute or volume control, citing user should have preference through physical hardware controls.  Mostly this applies to iOS devices.
          </p>
        </td>
      </tr>
      <tr>
        <td><code>volume</code></td>
        <td>
          <p>Volume control.</p>
          <p>Use a child <code>&lt;input type="range"&gt;</code> element for a slider style control.</p>
          <p class="small mb-0">
            Some mobile devices do not allow for mute or volume control, citing user should have preference through physical hardware controls.  Mostly this applies to iOS devices.
          </p>
        </td>
      </tr>
      <tr>
        <td><code>loop</code></td>
        <td>Loop toggle button.</td>
      </tr>
      <tr>
        <td><code>caption</code></td>
        <td>
          <p>Caption menu toggle button. Currently only supported for <code>&lt;video&gt;</code> elements.</p>
          <p>The menu is dynamically generated based on the <code>&lt;track&gt;</code> elements, and associated with the button automatically.</p>
          <p>Only tracks with a <code>kind</code> property of <strong>captions</strong> or <strong>subtitles</strong> will be added to the menu.</p>
          <p>If there is only one valid track, then the button will act as a toggle button and not display the menu when clicked.</p>
        </td>
      </tr>
      <tr>
        <td><code>caption-display</code></td>
        <td>
          <p>Container for custom styling of captions.</p>
          <p>If this container is present, the default browser captions will be hidden. The currently active caption content will be displayed in this container, allowing for custom styling or placement of the captions.</p>
        </td>
      </tr>
      <tr>
        <td><code>transcript</code></td>
        <td>
          <p>Transcript menu toggle button. Transcript text content is genereated from selected track item.</p>
          <p>The menu is dynamically generated based on the <code>&lt;track&gt;</code> elements, and associated with the button automatically.</p>
          <p>Only tracks with a <code>kind</code> property of <strong>captions</strong> or <strong>subtitles</strong> will be added to the menu.</p>
          <p>If there is only one valid track, and the <code>transcriptOption</code> setting is false, then the button will act as a toggle button and not display the menu when clicked.</p>
        </td>
      </tr>
      <tr>
        <td><code>description</code></td>
        <td>Audio description, using an alternate video source, toggle button.</td>
      </tr>
      <tr>
        <td><code>textdescription</code></td>
        <td>Audio description, using text-based description content, toggle button.</td>
      </tr>
      <tr>
        <td><code>fullscreen</code></td>
        <td>Fullscreen toggle button. Currently only supported for <code>&lt;video&gt;</code> elements.</td>
      </tr>
    </tbody>
  </table>
</div>

### Via Data Attributes

Simply add the attribute `data-cfw="player"` to the wrapping container.

### Via JavaScript

Call the player manually with:

{% capture highlight %}
$('#myPlayer').CFW_Player();
{% endcapture %}
{% renderHighlight highlight, "js" %}

### Options

Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-cfw-player`, as in `data-cfw-player-transcript-scroll=true`.

<div class="table-scroll">
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
        <td><code>mediaDescribe</code></td>
        <td>boolean</td>
        <td><code>false</code></td>
        <td>Use the description media source.</td>
      </tr>
      <tr>
        <td><code>textDescribe</code></td>
        <td>integer</td>
        <td><code>-1</code></td>
        <td>Turn on the text-based description. The integer value reflects the track count (starting from 0) for the desired <code>&lt;track&gt;</code> element to enable.  Default value is -1 which leaves the description turned off. Currently only tracks of <strong>kind="descriptions"</strong> is supported.</td>
      </tr>
      <tr>
        <td><code>textDescribeAnnounce</code></td>
        <td>boolean</td>
        <td><code>false</code></td>
        <td>When a text-based description is selected, allow the description text to be announced by a screen reader.</td>
      </tr>
      <tr>
        <td><code>textDescribeVisible</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>When a text-based description is selected, display the description text.</td>
      </tr>
      <tr>
        <td><code>transcript</code></td>
        <td>integer</td>
        <td><code>-1</code></td>
        <td>Turn on the interactive transcript by default.  The integer value reflects the track count (starting from 0) for the desired <code>&lt;track&gt;</code> element to enable.  Default value is -1 which leaves the transcript turned off. Currently only tracks of type <strong>caption</strong> or <strong>subtitles</strong> are supported.</td>
      </tr>
      <tr>
        <td><code>transcriptScroll</code></td>
        <td>booelan</td>
        <td><code>true</code></td>
        <td>If the transcript should automatically scroll to keep the current caption in the visible area.</td>
      </tr>
      <tr>
        <td><code>transcriptDescribe</code></td>
        <td>booelan</td>
        <td><code>true</code></td>
        <td>If the transcript should show the matching <code>descriptions</code> track for the currently active transcript.</td>
      </tr>
      <tr>
        <td><code>transcriptOption</code></td>
        <td>booelan</td>
        <td><code>true</code></td>
        <td>If the transcript options should be shown in the transcript menu.</td>
      </tr>
    </tbody>
  </table>
</div>

{% capture highlight %}
$('#myPlayer').CFW_Player();
{% endcapture %}
{% renderHighlight highlight, "js" %}

### Methods

Method calls should be made on the `data-cfw="player"` wrapping container.

Note: The methods and properties as defined at [HTML Audio/Video DOM Reference](https://www.w3schools.com/tags/ref_av_dom.asp) can be called directly on the `<audio>`/`<video>` element and will update the custom player controls accordingly.

<div class="table-scroll">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th style="width: 150px;">Method Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>play</code></td>
        <td>Start playing the track from the current time location.</td>
      </tr>
      <tr>
        <td><code>pause</code></td>
        <td>Pause the track at current time location.</td>
      </tr>
      <tr>
        <td><code>stop</code></td>
        <td>Stop playing the track and reset to the beginning.</td>
      </tr>
      <tr>
        <td><code>mute</code></td>
        <td>Toggle whether or not the volume is muted.</td>
      </tr>
      <tr>
        <td><code>loop</code></td>
        <td>
          <p>Toggle the loop/repeat setting.  Looping will cause the track to resume playing from the start when the end is reached.</p>
          <p>An optional boolean value can be given as an argument to force the loop/repeat mode.</p>
          Optional value is passed in the form: <code>$('#myPlayer').CFW_Player('loop', [boolean]);</code>
        </td>
      </tr>
      <tr>
        <td><code>speed</code></td>
        <td>
          <p>Change the playback rate to the media.</p>
          <p>Called in the form: <code>$('#myPlayer').CFW_Player('speed', rate);</code></p>
          <code>rate</code> is a float value.
          <ul>
            <li><code>1.0</code> is normal speed</li>
            <li><code>0.5</code> is half speed (slower)</li>
            <li><code>2.0</code> is double speed (faster)</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td><code>trackSet</code></td>
        <td>
          <p>Change the caption/subtitle track. <code>trackID</code> is the 0-indexed array of track items defined in the <code>&lt;video&gt;</code> element. Setting <code>trackID</code> to <code>-1</code> will turn off the captions/subtitles.</p>
          Called in the form: <code>$('#myPlayer').CFW_Player('trackSet', trackID);</code>
        </td>
      </tr>
      <tr>
        <td><code>scriptSet</code></td>
        <td>
          <p>Change the transcript track. <code>trackID</code> is the 0-indexed array of track items defined in the <code>&lt;video&gt;</code> element. Setting <code>trackID</code> to <code>-1</code> will turn off the transcript.</p>
          Called in the form: <code>$('#myPlayer').CFW_Player('scriptSet', trackID);</code>
        </td>
      </tr>
      <tr>
        <td><code>fullscreen</code></td>
        <td>Toggle the fullscreen mode of the player.</td>
      </tr>
      <tr>
        <td><code>description</code></td>
        <td>Toggle the use of the audio description video source.</td>
      </tr>
      <tr>
        <td><code>dispose</code></td>
        <td>Remove any associated transcript, dropdowns, data, and event listeners created by the player widget.</td>
      </tr>
    </tbody>
  </table>
</div>

{% capture highlight %}
$('#myPlayer').CFW_Player('play');
{% endcapture %}
{% renderHighlight highlight, "js" %}

### Events

Event callbacks happen on the `<audio>`/`<video>` element, but will bubble up through the DOM and can be captured on the `data-cfw="player"` wrapping container if needed.

<div class="table-scroll">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th style="width: 150px;">Event Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>noSupport.cfw.player</code></td>
        <td>This event fires if it is determined the browser does not support HTML5 audio or the specified MIME type.</td>
      </tr>
      <tr>
        <td><code>ready.cfw.player</code></td>
        <td>This event fires after the player item is initialized.</td>
      </tr>
      <tr>
        <td><code>error.cfw.player</code></td>
        <td>This event fires when there is an error that cannot be handled.</td>
      </tr>
      <tr>
        <td><code>beforeTranscriptShow.cfw.player</code></td>
        <td>This event fires before the transcript is shown.</td>
      </tr>
      <tr>
        <td><code>afterTranscriptShow.cfw.player</code></td>
        <td>This event fires after the transcript is shown.</td>
      </tr>
      <tr>
        <td><code>beforeTranscriptHide.cfw.player</code></td>
        <td>This event fires before the transcript is hidden/disabled.</td>
      </tr>
      <tr>
        <td><code>afterTranscriptHide.cfw.player</code></td>
        <td>This event fires after the transcript is hidden/disabled.</td>
      </tr>
      <tr>
        <td><code>enterFullscreen.cfw.player</code></td>
        <td>This event fires after the player is put into fullscreen mode.</td>
      </tr>
      <tr>
        <td><code>exitFullscreen.cfw.player</code></td>
        <td>This event fires after the player exits fullscreen mode.</td>
      </tr>
    </tbody>
  </table>
</div>

{% capture highlight %}
$('#myPlayer').on('ready.cfw.player', function() {
  // do something...
});
{% endcapture %}
{% renderHighlight highlight, "js" %}
