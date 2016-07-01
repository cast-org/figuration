---
layout: docs
title: Lazy
subtitle: lazy.js
group: widgets
---

Lazy delays loading of images outside of the viewport (visible part of the page) until the user scrolls them into view.  In some cases this can help reduce both server load and overall bandwidth use.

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Example

A lazy loaded image with delay and a fade in animation.

<div class="cf-example">
    <img data-cfw="lazy" data-cfw-lazy-delay="1000" data-cfw-lazy-effect="fadeIn" data-cfw-lazy-speed="1000" data-cfw-lazy-src="{{ site.basurl}}/assets/img/test.gif" width="360" height="202" alt="Test pattern" />
</div>

{% highlight html %}
<img src="" data-cfw="lazy" data-cfw-lazy-delay="1000" data-cfw-lazy-effect="fadeIn" data-cfw-lazy-speed="1000" data-cfw-lazy-src="test.gif" width="360" height="202" alt="Test pattern" />
{% endhighlight %}

## Usage

{% callout info %}
#### Default Placeholder

In the case where the `src` attribute is missing, for set to an emtpy string, a placeholder image is inserted via a `data:image` string on the `src` attribute that equates to a 1x1px transparent GIF.

Default placeholder: <small>(no spaces or line-breaks when used)</small>

`'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'`
{% endcallout %}

{% callout info %}
#### Image Dimensions

If you do not wish to have the document height change when an image is loaded, then it would be a good idea to specify the `width` and `height` dimensions of the image either through attributes or CSS.
{% endcallout %}

### Via Data Attributes

At a minimum, add `data-cfw="lazy"` along with a `data-cfw-lazy-src="sourceURL"` attribute to an image to replace the blank placeholder with the image found at `sourceURL`.

### Via JavaScript

Enable manually with:

{% highlight js %}
$('#myImg').CFW_Lazy();
{% endhighlight %}

### Options

Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-cfw-lazy`, as in `data-cfw-lazy-src=image.png`.

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
            <td>src</td>
            <td>string</td>
            <td>null</td>
            <td>The URL or path for the source image to be displayed.</td>
        </tr>
        <tr>
            <td>throttle</td>
            <td>integer</td>
            <td>250</td>
            <td>Timeout rate (milliseconds) for the throttle function helps to decrease unnecessary function calls through scroll or resize events.</td>
        </tr>
        <tr>
            <td>trigger</td>
            <td>string</td>
            <td>'scroll resize'</td>
            <td>
                <p>How lazy load is triggered. You may pass multiple triggers; separate them with a space.</p>
                <p>Custom event names are supported when standard browser events are not applicable.</p>
            </td>
        </tr>
        <tr>
            <td>delay</td>
            <td>integer</td>
            <td>0</td>
            <td>Delay time (milliseconds) to wait before invoking the show animation specified by the <code>effect</code> option.</td>
        </tr>
        <tr>
            <td>effect</td>
            <td>string</td>
            <td>'show'</td>
            <td>The function name to be called when the <code>show</code> method has been triggered.  By default the jQuery function <a href="http://api.jquery.com/show/">.show()</a> is used, but in theory any jQuery based effect can be used including ones from jQuery UI.</td>
        </tr>
        <tr>
            <td>speed</td>
            <td>integer</td>
            <td>0</td>
            <td>Speed of animation (milliseconds) - corresponds the desired animation speed of the animation specified by the <code>effect</code> option.</td>
        </tr>
        <tr>
            <td>threshold</td>
            <td>integer</td>
            <td>0</td>
            <td>
                Pixel offset from the viewport to use when calculating the invoking of the <code>show</code> method. Can be of positive of negative value.
                For example, setting threshold to 200 causes image to load 200 pixels before it appears within the viewport.
            </td>
        </tr>
        <tr>
            <td>container</td>
            <td>string | node</td>
            <td>the <code>window</code> object</td>
            <td>Specifies a containing element, such as div with scrollbar, where the <code>trigger</code> event callbacks should be listened for.</td>
        </tr>
        <tr>
            <td>invisible</td>
            <td>boolean</td>
            <td>false</td>
            <td>
                <p>There are cases when you have images which are in viewport but not <code>:visible</code>. To improve performance the lazy widget ignores <code>.not(":visible")</code> by default. If you want to load these images set <code>invisible</code> to <code>true</code>.</p>
                <div class="cf-callout cf-callout-info">
                    <h4>Browser Note</h4>
                    <p>Webkit browsers will report images with without <code>width</code> and <code>height</code> as not <code>.not(":visible")</code>. This causes images to appear only when you scroll a bit. Either fix your image tags or set <code>invisible</code> to <code>true</code>.</p>
                </div>
            </td>
        </tr>
    </tbody>
    </table>
</div> <!-- /.table-responsive -->

### Methods

#### `.CFW_Lazy(options)</dt>`
{:.no_toc}

Activates the image as a lazy loaded element. Accepts an optional options `object`.

{% highlight js %}
$('#myImg').CFW_Lazy({
    src: 'image.png'
});
{% endhighlight %}

#### `.CFW_Lazy('show')`
{:.no_toc}

Load the specified image source.

### Events

Event callbacks happen on the image element.

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
            <td>init.cfw.lazy</td>
            <td>This event fires after the image item is initialized.</td>
        </tr>
        <tr>
            <td>beforeShow.cfw.lazy</td>
            <td>This event is fired immediately when the <code>show</code> method is called.</td>
        </tr>
        <tr>
            <td>afterShow.cfw.lazy</td>
            <td>This event is fired when a lazy loaded image source has been made visible to the user (will wait for specified <code>effect</code> to complete).</td>
        </tr>
        </tbody>
    </table>
</div> <!-- /.table-responsive -->

{% highlight js %}
$('#myImg').on('afterShow.cfw.lazy', function () {
  // do something...
});
{% endhighlight %}