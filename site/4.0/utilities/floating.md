---
layout: doc
title: Floating
description: Toggle float on elements with responsive float utilities.
group: utilities
---

<div class="h3 cf-toc-header">Page Contents</div>

${toc}

## Overview

These utility classes float an element to the enable or disable floating, based on the current viewport size using the [CSS `float` property](https://developer.mozilla.org/en-US/docs/Web/CSS/float).

## Usage

Note that the float utilities do not have any affect on items inside flex container.  Please refer to the [flexbox specification](https://www.w3.org/TR/css-flexbox-1/#flex-containers) for details.

Instead of using `left/right` designators, the float utilities use `start/end` designators to match up with the [flexbox utilities]({{ site.path }}/{{ version.docs }}/utilities/flexbox/).

{% capture example %}
<div class="float-start">Float start aligned on all viewport sizes</div><br>
<div class="float-end">Float end aligned on all viewport sizes</div><br>
<div class="float-none">Don't float on all viewport sizes</div><br>

<div class="float-sm-end">Float end aligned on viewports sized SM (small) or wider</div><br>
<div class="float-md-end">Float end aligned on viewports sized MD (medium) or wider</div><br>
<div class="float-lg-end">Float end aligned on viewports sized LG (large) or wider</div><br>
<div class="float-xl-end">Float end aligned on viewports sized XL (extra-large) or wider</div><br>
{% endcapture %}
{% renderExample example %}

{% capture highlight %}
// Related simple non-responsive mixins
.element {
  @include float-start;
}
.another-element {
  @include float-end;
}
.unfloated-element {
  @include float-none;
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
        <td><code>$enable-utility-float</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the float utility classes.
        </td>
      </tr>
    </tbody>
  </table>
</div>

### Mixins

Here are the mixins related to this grouping of utility classes that we use to help generate our CSS.  You can also uses these mixins to generate your own custom components or utilities.

#### float-start

Apply a float to the 'start' side.

{% capture highlight %}
@include float-start();
{% endcapture %}
{% renderHighlight highlight, "sass" %}

#### float-end

Apply a float to the 'end' side.

{% capture highlight %}
@include float-end();
{% endcapture %}
{% renderHighlight highlight, "sass" %}

#### float-none

Disable float.

{% capture highlight %}
@include float-none();
{% endcapture %}
{% renderHighlight highlight, "sass" %}