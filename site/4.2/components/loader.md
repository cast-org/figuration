---
layout: doc
title: Loader
description: Indicate a busy or loading state for content or component with a loading animation, sometimes called &quot;spinners&quot;, using only HTML and CSS.
group: components
toc: true
---

## About

Loaders, or "spinners", are useful for showing a busy or loading state when applicable.  While they are built using only HTML and CSS, but you may need some custom JavaScript to toggle their visibility.

By default the loaders border color inherit from the current text color using `border-color: currentColor`. The size, color, and alignment can be further adjusted through the use of utility classes.

For accessibility the loader should use a `role="status"` attribute.  If a visible message is not being provided, a screen reader friendly message should be included.  Something as simple as `<span class="sr-only">Loading...</span>` contained within the loader element will suffice.

## Circle Loader

A lightweight loader animation.

{% capture example %}
<div class="loader-circle" role="status">
  <span class="sr-only">Loading...</span>
</div>
{% endcapture %}
{% renderExample example %}

## Double Loader

A visually heavier loader animation.

{% capture example %}
<div class="loader-double" role="status">
  <span class="sr-only">Loading...</span>
</div>
{% endcapture %}
{% renderExample example %}

## Customize

Change the size or color of the loader using utility classes.

### Size

Use [font size utilities]({{ site.path }}/{{ version.docs }}/utilities/typography/#font-size) to adjust the loader size.

{% capture example %}
<div class="loader-circle fs-xsmall" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="loader-circle fs-small" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="loader-circle" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="loader-circle fs-large" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="loader-circle fs-xlarge" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="loader-circle fs-2xlarge" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="loader-circle fs-3xlarge" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="loader-circle fs-4xlarge" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="loader-circle fs-5xlarge" role="status">
  <span class="sr-only">Loading...</span>
</div>
{% endcapture %}
{% renderExample example %}

{% capture example %}
<div class="loader-double fs-xsmall" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="loader-double fs-small" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="loader-double" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="loader-double fs-large" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="loader-double fs-xlarge" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="loader-double fs-2xlarge" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="loader-double fs-3xlarge" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="loader-double fs-4xlarge" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="loader-double fs-5xlarge" role="status">
  <span class="sr-only">Loading...</span>
</div>
{% endcapture %}
{% renderExample example %}

### Color

Use [text color utilities]({{ site.path }}/{{ version.docs }}/utilities/color/#text) to control the loader color.

{% capture callout %}
Use `.text-{color}` utility classes instead of the `border-{color}` ones because the loaders make use of `border-color: currentColor` on their pseudo-elements. Using `.border-{color}` utilities will not result in a color change.
{% endcapture %}
{% renderCallout, callout, "info" %}

{% capture example %}
<div class="loader-circle text-primary fs-4xlarge" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="loader-circle text-secondary fs-4xlarge" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="loader-circle text-success fs-4xlarge" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="loader-circle text-info fs-4xlarge" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="loader-circle text-warning fs-4xlarge" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="loader-circle text-danger fs-4xlarge" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="loader-circle text-light fs-4xlarge" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="loader-circle text-dark fs-4xlarge" role="status">
  <span class="sr-only">Loading...</span>
</div>
{% endcapture %}
{% renderExample example %}

{% capture example %}
<div class="loader-double text-primary fs-4xlarge" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="loader-double text-secondary fs-4xlarge" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="loader-double text-success fs-4xlarge" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="loader-double text-info fs-4xlarge" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="loader-double text-warning fs-4xlarge" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="loader-double text-danger fs-4xlarge" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="loader-double text-light fs-4xlarge" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="loader-double text-dark fs-4xlarge" role="status">
  <span class="sr-only">Loading...</span>
</div>
{% endcapture %}
{% renderExample example %}

## Alignment

[Margin]({{ site.path }}/{{ version.docs }}/utilities/spacing/), [flexbox]({{ site.path }}/{{ version.docs }}/utilities/flexbox/), [floating]({{ site.path }}/{{ version.docs }}/utilities/floating/), [text alignment]({{ site.path }}/{{ version.docs }}/utilities/typography/#text-alignment) utilities can be used to adjust spacing or placement.

### Margin

{% capture example %}
<div class="loader-circle fs-4xlarge m-2" role="status">
  <span class="sr-only">Loading...</span>
</div>
{% endcapture %}
{% renderExample example %}

### Flexbox

{% capture example %}
<div class="d-flex flex-center">
  <div class="loader-circle fs-4xlarge" role="status">
    <span class="sr-only">Loading...</span>
  </div>
</div>
{% endcapture %}
{% renderExample example %}

{% capture example %}
<div class="d-flex flex-column flex-items-center">
  <div class="loader-circle fs-4xlarge" role="status" aria-hidden="true"></div>
  <strong>Loading...</strong>
</div>
{% endcapture %}
{% renderExample example %}

{% capture example %}
<div class="d-flex flex-items-center flex-between">
  <strong>Loading...</strong>
  <div class="loader-circle fs-4xlarge" role="status" aria-hidden="true"></div>
</div>
{% endcapture %}
{% renderExample example %}

### Floats

{% capture example %}
<div class="clearfix">
  <div class="loader-circle fs-4xlarge float-end" role="status">
    <span class="sr-only">Loading...</span>
  </div>
</div>
{% endcapture %}
{% renderExample example %}

### Text alignment

{% capture example %}
<div class="text-center">
  <div class="loader-circle fs-4xlarge" role="status">
    <span class="sr-only">Loading...</span>
  </div>
</div>
{% endcapture %}
{% renderExample example %}

## Buttons

Use loaders within buttons to indicate that an action is taking place.

{% capture example %}
<button class="btn btn-primary" type="button" disabled>
  <span class="loader-circle" role="status" aria-hidden="true"></span>
  <span class="sr-only">Loading...</span>
</button>
<button class="btn btn-primary" type="button" disabled>
  <span class="loader-circle" role="status" aria-hidden="true"></span>
  Loading...
</button>
{% endcapture %}
{% renderExample example %}

{% capture example %}
<button class="btn btn-primary" type="button" disabled>
  <span class="loader-double" role="status" aria-hidden="true"></span>
  <span class="sr-only">Loading...</span>
</button>
<button class="btn btn-primary" type="button" disabled>
  <span class="loader-double" role="status" aria-hidden="true"></span>
  Loading...
</button>
{% endcapture %}
{% renderExample example %}

## SASS Reference

### Variables

The available [Customization options]({{ site.path }}/{{ version.docs }}/get-started/options/), or Sass variables, that can be customized for jumbotrons.

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
        <td><code>$enable-loader</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the loader classes.
          Smaller segements of the loader classes can be disabled with the following <code>$enable-*</code> variables.
        </td>
      </tr>
      <tr>
        <td><code>$enable-loader-circle</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the circular loader.
        </td>
      </tr>
      <tr>
        <td><code>$enable-loader-double</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
        Enable the generation of the double loader.
        </td>
      </tr>
      <tr>
        <td><code>$loader-circle-size</code></td>
        <td>string</td>
        <td><code>1em</code></td>
        <td>
          Width and height, defining the diameter, of the circular loader.
        </td>
      </tr>
      <tr>
        <td><code>$loader-circle-border-width</code></td>
        <td>string</td>
        <td><code>3px</code></td>
        <td>
          Border width of the loader.
        </td>
      </tr>
      <tr>
        <td><code>$loader-circle-alt-opacity</code></td>
        <td>string</td>
        <td><code>.25</code></td>
        <td>
          Opacity of the background loader border.
        </td>
      </tr>
      <tr>
        <td><code>$loader-circle-vertical-align</code></td>
        <td>string</td>
        <td><code>-($loader-circle-border-width / 2)</code></td>
        <td>
          Vertical alignment adjustment for the loader.
        </td>
      </tr>
      <tr>
        <td><code>$loader-circle-animation-speed</code></td>
        <td>string</td>
        <td><code>1s</code></td>
        <td>
          Time duration for the circular animation to perform one revolution.  For users with a reduced motion preference, the animation duration will double.
        </td>
      </tr>
    </tbody>
  </table>
</div>

### Mixins

No mixins available.
