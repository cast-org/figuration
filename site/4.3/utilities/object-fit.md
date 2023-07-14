---
layout: doc
title: Object Fit
description: Use the object fit utilities to modify how the content of a <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Replaced_element">replaced element</a>, such as an <code>&lt;img&gt;</code> or <code>&lt;video&gt;</code>, should be resized to fit its container.
group: utilities
toc: true
---

## How it works

Change the value of the [`object-fit` property](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit) with our responsive `object-fit` utility classes. This property tells the content to fill the parent container in a variety of ways, such as preserving the aspect ratio or stretching to take up as much space as possible.

Classes for the value of `object-fit` are named using the format `.object-fit-{value}`. Choose from the following values:

- `contain`
- `cover`
- `fill`
- `scale` (for scale-down)
- `none`

## Examples

Add the `object-fit-{value}` class to the [replaced element](https://developer.mozilla.org/en-US/docs/Web/CSS/Replaced_element):

<div class="cf-example d-flex overflow-auto">
  <img style="width: 125px; height: 120px;" class="me-0_25 object-fit-contain border radius" src="{{ site.path }}/assets/{{ version.docs }}/img/test.gif" alt="Object fit contain">
  <img style="width: 125px; height: 120px;" class="me-0_25 object-fit-cover border radius" src="{{ site.path }}/assets/{{ version.docs }}/img/test.gif" alt="Object fit cover">
  <img style="width: 125px; height: 120px;" class="me-0_25 object-fit-fill border radius" src="{{ site.path }}/assets/{{ version.docs }}/img/test.gif" alt="Object fit fill">
  <img style="width: 125px; height: 120px;" class="me-0_25 object-fit-contain scale radius" src="{{ site.path }}/assets/{{ version.docs }}/img/test.gif" alt="Object fit scale down">
  <img style="width: 125px; height: 120px;" class="me-0_25 object-fit-none border radius" src="{{ site.path }}/assets/{{ version.docs }}/img/test.gif" alt="Object fit none">
</div>

{% capture highlight %}
<img src="..." class="object-fit-contain border radius" alt="...">
<img src="..." class="object-fit-cover border radius" alt="...">
<img src="..." class="object-fit-fill border radius" alt="...">
<img src="..." class="object-fit-scale border radius" alt="...">
<img src="..." class="object-fit-none border radius" alt="...">
{% endcapture %}
{% renderHighlight highlight, "html" %}

## Responsive

Responsive variations also exist for each `object-fit` value using the format `.object-fit-{breakpoint}-{value}`, for the following breakpoint abbreviations: `sm`, `md`, `lg`, and `xl`. Classes can be combined for various effects as you need.

<div class="cf-example d-flex overflow-auto">
  <img style="width: 125px; height: 120px;" class="me-0_25 object-fit-sm-contain border radius" src="{{ site.path }}/assets/{{ version.docs }}/img/test.gif" alt="Contain on sm">
  <img style="width: 125px; height: 120px;" class="me-0_25 object-fit-md-contain border radius" src="{{ site.path }}/assets/{{ version.docs }}/img/test.gif" alt="Contain on md">
  <img style="width: 125px; height: 120px;" class="me-0_25 object-fit-lg-contain border radius" src="{{ site.path }}/assets/{{ version.docs }}/img/test.gif" alt="Contain on lg">
  <img style="width: 125px; height: 120px;" class="me-0_25 object-fit-xl-contain border radius" src="{{ site.path }}/assets/{{ version.docs }}/img/test.gif" alt="Contain on xl">
</div>

{% capture highlight %}
<img src="..." class="object-fit-sm-contain border radius" alt="...">
<img src="..." class="object-fit-md-contain border radius" alt="...">
<img src="..." class="object-fit-mg-contain border radius" alt="...">
<img src="..." class="object-fit-xl-contain border radius" alt="...">
{% endcapture %}
{% renderHighlight highlight, "html" %}

## Video

The `.object-fit-{value}` and responsive `.object-fit-{breakpoint}-{value}` utilities also work on `<video>` elements.

{% capture highlight %}
<video src="..." class="object-fit-contain" autoplay></video>
<video src="..." class="object-fit-cover" autoplay></video>
<video src="..." class="object-fit-fill" autoplay></video>
<video src="..." class="object-fit-scale" autoplay></video>
<video src="..." class="object-fit-none" autoplay></video>
{% endcapture %}
{% renderHighlight highlight, "html" %}

## SASS Reference

### Variables

The available [Customization options]({{ site.path }}/{{ version.docs }}/get-started/options/), or Sass variables, that can be customized for this grouping of utility classes.

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
        <td><code>$enable-utility-object-fit</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the object fit utility classes.
        </td>
      </tr>
      <tr>
        <td><code>$utility-object-fit-breakpoints</code></td>
        <td>string</td>
        <td><code>map-keys($grid-breakpoints)</code></td>
        <td>
          Map of breakpoints that will be used to generate object fit utilities.
        </td>
      </tr>
      <tr>
        <td><code>$utility-object-fit</code></td>
        <td>string</td>
        <td><pre><code>(contain: contain,
cover: cover,
fill: fill,
scale: scale-down,
none: none)</code></pre></td>
        <td>
          Map of values that will be used to generate object fit utilities.
        </td>
      </tr>
    </tbody>
  </table>
</div>

### Mixins

No mixins available.
