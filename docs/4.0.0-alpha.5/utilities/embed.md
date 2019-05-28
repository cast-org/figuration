---
layout: docs
title: Embed
group: utilities
---

Allow browsers to determine embedded media dimensions based on the width of their containing block by creating an intrinsic ratio that will properly scale on any device.

## Contents
{:.no_toc}

* ToC goes here
{:toc}

Rules are directly applied to `<iframe>`, `<embed>`, `<video>`, and `<object>` elements; optionally use an explicit descendant class `.embed-fluid-item` when you want to match the styling for other attributes.

## Examples

### Inline Frames

**Pro-Tip!** You don't need to include `frameborder="0"` in your `<iframe>`s as we override that for you.

{% capture example %}
<div class="embed-fluid embed-fluid-16x9">
    <iframe class="embed-fluid-item" src="https://www.youtube.com/embed/MbGkL06EU90?rel=0" allowfullscreen></iframe>
</div>
{% endcapture %}
{% include example.html content=example %}

### Video Element

{% capture example %}
<div class="embed-fluid">
    <video poster="{{ site.baseurl }}/assets/video/niagara_falls.jpg" controls>
        <source src="{{ site.baseurl }}/assets/video/niagara_falls.mp4">
        <track src="{{ site.baseurl }}/assets/video/niagara_falls-en.vtt" label="English" kind="subtitles" srclang="en" default />
    </video>
</div>
{% endcapture %}
{% include example.html content=example %}

## Aspect Ratios

By default the aspect ratio is set to 16:9, this can be customized by overriding the `$embed-ratio` settings variable.  Also, the aspect ratios can be customized with the included modifier classes. By default the following aspect ratio classes are provided:

{% highlight html %}
<!-- 21:9 aspect ratio -->
<div class="embed-fluid embed-fluid-21x9">
  <iframe class="embed-fluid-item" src="..."></iframe>
</div>

<!-- 16:9 aspect ratio -->
<div class="embed-fluid embed-fluid-16x9">
  <iframe class="embed-fluid-item" src="..."></iframe>
</div>

<!-- 4:3 aspect ratio -->
<div class="embed-fluid embed-fluid-4x3">
  <iframe class="embed-fluid-item" src="..."></iframe>
</div>

<!-- 1:1 aspect ratio -->
<div class="embed-fluid embed-fluid-1x1">
  <iframe class="embed-fluid-item" src="..."></iframe>
</div>
{% endhighlight %}

It is possible to alter the available aspect ratios. These are the default aspect ratio setting and Sass map in `_settings.scss`:

{% highlight scss %}
$embed-fluid-default-ratio: percentage(9 / 16) !default;
$embed-fluid-aspect-ratios: (
    "21x9": (
        x: 21,
        y: 9
    ),
    "16x9": (
        x: 16,
        y: 9
    ),
    "4x4": (
        x: 4,
        y: 3
    ),
    "1x1": (
        x: 1,
        y: 1
    )
);
{% endhighlight %}

Additional aspect ratio classes can also be disabled in your custom settings using:
{% highlight scss %}
$embed-fluid-aspect-ratios: false;
{% endhighlight %}

## SASS Reference

### Variables

The available [Customization options]({{ site.baseurl }}/get-started/options/), or Sass variables, that can be customized for this grouping of utility classes.

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
                <td><code>$enable-utility-embed</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the embed utility classes.
                    Smaller segements of the embed utilities can be disabled with the following <code>$enable-*</code> variables.
                </td>
            </tr>
            <tr>
                <td><code>$enable-utility-embed-fluid</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the fluid embed utility classes.
                </td>
            </tr>
            <tr>
                <td><code>$enable-utility-embed-fullscreen</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the fullscreen overrides for embed utility classes.
                </td>
            </tr>
            <tr>
                <td><code>$embed-fluid-default-ratio</code></td>
                <td>string</td>
                <td><code>percentage(9 / 16)</code></td>
                <td>
                    The default embed aspect ratio.
                </td>
            </tr>
            <tr>
                <td><code>$embed-fluid-aspect-ratios</code></td>
                <td>list</td>
                <td><pre><code>(
    (21, 9),
    (16, 9),
    (4, 3),
    (1, 1)
)</code></pre>
                </td>
                <td>
                    Additional embed aspect ratios.
                </td>
            </tr>
        </tbody>
    </table>
</div>

### Mixins

No mixins available.
