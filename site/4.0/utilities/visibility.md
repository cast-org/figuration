---
layout: doc
title: Visibility
description: Control an element's visibility without changing the display property.
group: utilities
---

<div class="h3 cf-toc-header">Page Contents</div>

${toc}

## Overview

Set the `visibility` of an element, meaning its `display` is not modified and will not affect layout. `.invisible` elements still take up space in the page. Content will be hidden both visually and for assistive technology/screen reader users.

## Examples

Use `.invisible` and `.visible` as needed.

{% capture highlight %}
<div class="invisible">...</div>
<div class="visible">...</div>
{% endcapture %}
{% renderHighlight highlight, "html" %}

{% capture highlight %}
// Class
.invisible {
  visibility: hidden !important;
}
.visible {
  visibility: visible !important;
}

// Usage as a mixins
.element {
  @include invisible;
}
.element {
  @include visible;
}
{% endcapture %}
{% renderHighlight highlight, "sass" %}

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
        <td><code>$enable-utility-visibility</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the visibility utility classes.
        </td>
      </tr>
    </tbody>
  </table>
</div>

### Mixins

#### invisible()

Set an element to be invisible.

{% capture highlight %}
@include invisible();
{% endcapture %}
{% renderHighlight highlight, "sass" %}

#### visible()

Set an element to be visible.

{% capture highlight %}
@include visible();
{% endcapture %}
{% renderHighlight highlight, "sass" %}
