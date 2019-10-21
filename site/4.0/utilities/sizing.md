---
layout: doc
title: Sizing
description: Adjust the width or height of an element with sizing utilities.
group: utilities
---

<div class="h3 cf-toc-header">Page Contents</div>

${toc}

## Relative to the Parent

Width and height utilities are generated from the `$sizes` Sass map in `_settings.scss`. Available values are `25%`, `50%`, `75%`, `100%`, and `auto` by default. You can modify the map values if other values are needed.

### Width

Width utilities use the format `.w-{width}`, for example `.w-25` sets an element to `25%` width.

{% capture example %}
<div class="w-25 p-0_5 border bg-light">25% width</div>
<div class="w-50 p-0_5 border bg-light">50% width</div>
<div class="w-75 p-0_5 border bg-light">75% width</div>
<div class="w-100 p-0_5 border bg-light">100% width</div>
<div class="w-auto p-0_5 border bg-light">Auto width</div>
{% endcapture %}
{% renderExample example %}

### Height

Height utilities use the format `.h-{height}`, for example `.h-25` sets an element to `25%` height.

{% capture example %}
<div class="bg-dark" style="height: 100px;">
  <div class="h-25 px-0_5 bg-light d-inline-block">25% height</div>
  <div class="h-50 px-0_5 bg-light d-inline-block">50% height</div>
  <div class="h-75 px-0_5 bg-light d-inline-block">75% height</div>
  <div class="h-100 px-0_5 bg-light d-inline-block">100% height</div>
  <div class="h-auto px-0_5 bg-light d-inline-block">Auto height</div>
</div>
{% endcapture %}
{% renderExample example %}

### Max Width/Height

You can also use the `.mw-100` and `.mh-100`, to set `max-width: 100%;` or `max-height: 100%;`, utilities as needed.

{% capture example %}
<div style="width: 200%;" class="mw-100 p-0_5 border bg-light">100% max-width</div>
{% endcapture %}
{% renderExample example %}

{% capture example %}
<div class="bg-dark" style="height: 100px;">
  <div style="height: 200%" class="mh-100 px-0_5 bg-light d-inline-block">100% max-height</div>
</div>
{% endcapture %}
{% renderExample example %}

## Relative to the Viewport

You can also use utilities to set the width and height relative to the viewport.

{% capture highlight %}
<div class="min-vw-100">100vw min-width</div>
<div class="min-vh-100">100vh min-height</div>
<div class="vw-100">100vw width</div>
<div class="vh-100">100vh height</div>
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
        <td><code>$enable-utility-sizing</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the sizing utility classes.
        </td>
      </tr>
      <tr>
        <td><code>$enable-utility-sizing-width</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the width sizing utility classes.
        </td>
      </tr>
      <tr>
        <td><code>$enable-utility-sizing-height</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the height sizing utility classes.
        </td>
      </tr>
      <tr>
        <td><code>$enable-utility-sizing-viewport</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the viewport sizing utility classes.
        </td>
      </tr>
    </tbody>
  </table>
</div>

### Mixins

No mixins available.
