---
layout: doc
title: Lazy
subtitle: lazy.js
description: Load images or embedded content only when they become visible within the viewport.
group: widgets
toc: true
---

## Overview

Lazy delays the loading of images outside of the viewport (visible part of the page) until the user scrolls them into view.  In some cases this can help reduce both server load and overall bandwidth use.

## Example

A lazy loaded image with delay and a fade in animation.

<div class="cf-example">
  <img data-cfw="lazy" data-cfw-lazy-delay="1000" data-cfw-lazy-animate="true" data-cfw-lazy-src="{{ site.path}}/assets/{{ version.docs }}/img/test.gif" width="360" height="202" alt="Test pattern">
</div>

{% capture highlight %}
<img src="" data-cfw="lazy" data-cfw-lazy-delay="1000" data-cfw-lazy-animate="true" data-cfw-lazy-src="test.gif" width="360" height="202" alt="Test pattern">
{% endcapture %}
{% renderHighlight highlight, "html" %}

## Usage

{% capture callout %}
Default Placeholder
{.h5}

In the case where the `src` attribute is missing, for set to an emtpy string, a placeholder image is inserted via a `data:image` string on the `src` attribute that equates to a 1x1px transparent GIF.

Default placeholder: <small>(no spaces or line-breaks when used)</small>

`'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'`
{% endcapture %}
{% renderCallout, callout, "info" %}

{% capture callout %}
Image Dimensions
{.h5}

If you do not wish to have the document height change when an image is loaded, then it would be a good idea to specify the `width` and `height` dimensions of the image either through attributes or CSS.
{% endcapture %}
{% renderCallout, callout, "info" %}

### Via Data Attributes

At a minimum, add `data-cfw="lazy"` along with a `data-cfw-lazy-src="sourceURL"` attribute to an image to replace the blank placeholder with the image found at `sourceURL`.

### Via JavaScript

Enable manually with:

{% capture highlight %}
$('#myImg').CFW_Lazy();
{% endcapture %}
{% renderHighlight highlight, "js" %}

### Options

Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-cfw-lazy`, as in `data-cfw-lazy-src=image.png`.

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
        <td><code>src</code></td>
        <td>string</td>
        <td><code>null</code></td>
        <td>The URL or path for the source image to be displayed.</td>
      </tr>
      <tr>
        <td><code>throttle</code></td>
        <td>integer</td>
        <td><code>250</code></td>
        <td>Timeout rate (milliseconds) for the throttle function helps to decrease function calls through scroll or resize events.</td>
      </tr>
      <tr>
        <td><code>trigger</code></td>
        <td>string</td>
        <td><code>'scroll resize'</code></td>
        <td>
          <p>How lazy load is triggered. You may pass multiple triggers; separate them with a space.</p>
          <p>Custom event names are supported when standard browser events are not applicable.</p>
        </td>
      </tr>
      <tr>
        <td><code>delay</code></td>
        <td>integer</td>
        <td><code>0</code></td>
        <td>Delay time (milliseconds) to wait before loading image once the `show` method has been called.</td>
      </tr>
      <tr>
        <td><code>animate</code></td>
        <td>boolean</td>
        <td><code>false</code></td>
        <td>If the image should appear with a fade-in animation when loaded.</td>
      </tr>
      <tr>
        <td><code>threshold</code></td>
        <td>integer</td>
        <td><code>0</code></td>
        <td>
          Pixel offset from the viewport to use when calculating the invoking of the <code>show</code> method. Can be of positive of negative value.
          For example, setting threshold to 200 causes image to load 200 pixels before it appears within the viewport.
        </td>
      </tr>
      <tr>
        <td><code>container</code></td>
        <td>string | node</td>
        <td>the <code>window</code> object</td>
        <td>Specifies a containing element, such as div with scrollbar, where the <code>trigger</code> event callbacks should be listened for.</td>
      </tr>
      <tr>
        <td><code>invisible</code></td>
        <td>boolean</td>
        <td><code>false</code></td>
        <td>
            <p>There are cases when you have images which are in viewport but not <code>:visible</code>. To improve performance the lazy widget ignores <code>.not(":visible")</code> by default. If you want to load these images set <code>invisible</code> to <code>true</code>.</p>
            <div class="cf-callout cf-callout-info">
              <p class="h5">Browser Note</p>
              <p>Webkit browsers will report images with without <code>width</code> and <code>height</code> as <code>.not(":visible")</code>. This causes images to appear only when you scroll a bit. Either fix your image tags or set <code>invisible</code> to <code>true</code>.</p>
            </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>

{% capture highlight %}
$('#myImg').CFW_Lazy({
  src: 'image.png'
});
{% endcapture %}
{% renderHighlight highlight, "js" %}

### Methods

Method calls should be made on the image element.

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
        <td><code>show</code></td>
        <td>Load the specified image source.</td>
      </tr>
      <tr>
        <td><code>dispose</code></td>
        <td>Removes the event handlers from the element, leaving the image is its current state.</td>
      </tr>
    </tbody>
  </table>
</div>

{% capture highlight %}
$('#myImg').CFW_Lazy('show');
{% endcapture %}
{% renderHighlight highlight, "js" %}

### Events

Event callbacks happen on the image element.

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
        <td><code>init.cfw.lazy</code></td>
        <td>This event fires after the image item is initialized.</td>
      </tr>
      <tr>
        <td><code>beforeShow.cfw.lazy</code></td>
        <td>This event is fired immediately when the <code>show</code> method is called.</td>
      </tr>
      <tr>
        <td><code>afterShow.cfw.lazy</code></td>
        <td>This event is fired when a lazy loaded image source has been made visible to the user (will wait for specified <code>effect</code> to complete).</td>
      </tr>
    </tbody>
  </table>
</div>

{% capture highlight %}
$('#myImg').on('afterShow.cfw.lazy', function() {
  // do something...
});
{% endcapture %}
{% renderHighlight highlight, "js" %}