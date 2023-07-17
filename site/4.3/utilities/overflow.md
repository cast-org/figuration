---
layout: doc
title: Overflow
description: Easily adjust how content overflows within a container.
group: utilities
toc: true
---

## Overflow

<div class="cf-example d-md-flex">
  <div class="overflow-auto p-1 mb-1 mb-md-0 me-md-1 bg-light" style="max-width: 260px; max-height: 100px;">
    <code>.overflow-auto</code> example on an element with set width and height dimensions. By design, this content will vertically scroll.
  </div>
  <div class="overflow-hidden p-1 mb-1 mb-md-0 me-md-1 bg-light" style="max-width: 260px; max-height: 100px;">
    <code>.overflow-hidden</code> example on an element with set width and height dimensions.
  </div>
  <div class="overflow-scroll p-1 mb-1 mb-md-0 me-md-1 bg-light" style="max-width: 260px; max-height: 100px;">
    <code>.overflow-scroll</code> example on an element with set width and height dimensions.
  </div>
  <div class="overflow-visible p-1 bg-light" style="max-width: 260px; max-height: 100px;">
    <code>.overflow-visible</code> example on an element with set width and height dimensions.
  </div>
</div>

{% capture highlight %}
<div class="overflow-auto">...</div>
<div class="overflow-hidden">...</div>
<div class="overflow-scroll">...</div>
<div class="overflow-visible">...</div>
{% endcapture %}
{% renderHighlight highlight, "html" %}

### `overflow-x`

Adjust the `overflow-x` property to affect the overflow of content horizontally.

<div class="cf-example d-md-flex">
  <div class="overflow-x-auto p-1 mb-1 mb-md-0 me-md-1 bg-light" style="max-width: 260px; max-height: 100px;">
    <code>.overflow-x-auto</code> example on an element with set width and height dimensions. By design, this content will vertically scroll.
  </div>
  <div class="overflow-x-hidden p-1 mb-1 mb-md-0 me-md-1 bg-light" style="max-width: 260px; max-height: 100px;">
    <code>.overflow-x-hidden</code> example on an element with set width and height dimensions.
  </div>
  <div class="overflow-x-scroll p-1 mb-1 mb-md-0 me-md-1 bg-light" style="max-width: 260px; max-height: 100px;">
    <code>.overflow-x-scroll</code> example on an element with set width and height dimensions.
  </div>
  <div class="overflow-x-visible p-1 bg-light" style="max-width: 260px; max-height: 100px;">
    <code>.overflow-x-visible</code> example on an element with set width and height dimensions.
  </div>
</div>

{% capture highlight %}
<div class="overflow-x-auto">...</div>
<div class="overflow-x-hidden">...</div>
<div class="overflow-x-scroll">...</div>
<div class="overflow-x-visible">...</div>
{% endcapture %}
{% renderHighlight highlight, "html" %}

### `overflow-y`

Adjust the `overflow-y` property to affect the overflow of content vertically.

<div class="cf-example d-md-flex">
  <div class="overflow-y-auto p-1 mb-1 mb-md-0 me-md-1 bg-light" style="max-width: 260px; max-height: 100px;">
    <code>.overflow-y-auto</code> example on an element with set width and height dimensions. By design, this content will vertically scroll.
  </div>
  <div class="overflow-y-hidden p-1 mb-1 mb-md-0 me-md-1 bg-light" style="max-width: 260px; max-height: 100px;">
    <code>.overflow-y-hidden</code> example on an element with set width and height dimensions.
  </div>
  <div class="overflow-y-scroll p-1 mb-1 mb-md-0 me-md-1 bg-light" style="max-width: 260px; max-height: 100px;">
    <code>.overflow-y-scroll</code> example on an element with set width and height dimensions.
  </div>
  <div class="overflow-y-visible p-1 bg-light" style="max-width: 260px; max-height: 100px;">
    <code>.overflow-y-visible</code> example on an element with set width and height dimensions.
  </div>
</div>

{% capture highlight %}
<div class="overflow-y-auto">...</div>
<div class="overflow-y-hidden">...</div>
<div class="overflow-y-scroll">...</div>
<div class="overflow-y-visible">...</div>
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
        <td><code>$enable-utility-overflow</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the overflow utility classes.
        </td>
      </tr>
      <tr>
        <td><code>$enable-utility-overflow-x</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the overflow-x utility classes.
        </td>
      </tr>
      <tr>
        <td><code>$enable-utility-overflow-y</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the overflow-y utility classes.
        </td>
      </tr>
      <tr>
        <td><code>$utility-overflow</code></td>
        <td>string</td>
        <td><code>auto, hidden, scroll, visible</code></td>
        <td>
          List of overflow values that will be used to generate overflow utilities.  Setting this to `null` will not generete these utilities.
        </td>
      </tr>
      <tr>
        <td><code>$utility-overflow-x</code></td>
        <td>string</td>
        <td><code>auto, hidden, scroll, visible</code></td>
        <td>
          List of overflow values that will be used to generate overflow-x utilities.  Setting this to `null` will not generete these utilities.
        </td>
      </tr>
      <tr>
        <td><code>$utility-overflow-y</code></td>
        <td>string</td>
        <td><code>auto, hidden, scroll, visible</code></td>
        <td>
          List of overflow values that will be used to generate overflow-y utilities.  Setting this to `null` will not generete these utilities.
        </td>
      </tr>
    </tbody>
  </table>
</div>

### Mixins

No mixins available.
