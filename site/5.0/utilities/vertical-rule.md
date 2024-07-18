---
layout: doc
title: Vertical Rule
description: Create vertical dividers similar to the <code>&lt;hr&gt;</code> element.
group: utilities
toc: true
---

## Overview

Vertical rules are inspired by the `<hr>` element, allowing you to create vertical dividers. They inherit styling from the `<hr>` Sass settings, which by default result in:

- a `1px` width
- color is set via `currentcolor` and `opacity`
- additionaly a `min-height: 1em;` is set

Feel free to further customize as needed with additional styles.


## Examples

{% capture example %}
<div class="vr"></div>
{% endcapture %}
{% renderExample example %}

Vertical rules scale their height in flex layouts.

{% capture example %}
<div class="d-flex" style="height: 200px;">
  <div class="vr"></div>
</div>
{% endcapture %}
{% renderExample example %}

Vertical rules also work well with [gap layouts]({{ site.path }}/{{ version.docs }}/utilities/spacing/#gap), at the cost of supporting Internet Explorer.

{% capture example %}
<div class="d-flex gap-1">
  <div class="bg-light border">First item</div>
  <div class="bg-light border ms-auto">Second item</div>
  <div class="vr"></div>
  <div class="bg-light border">Third item</div>
</div>
{% endcapture %}
{% renderExample example %}


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
        <td><code>$enable-utility-vr</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the vertical rule utility class.
        </td>
      </tr>
      <tr>
        <td><code>$vr-border-width</code></td>
        <td>string</td>
        <td><code>$hr-border-width</code></td>
        <td>
          Vertical rule border width.
        </td>
      </tr>
      <tr>
        <td><code>$vr-border-color</code></td>
        <td>string</td>
        <td><code>$hr-border-color</code></td>
        <td>
          Vertical rule border color.
        </td>
      </tr>
      <tr>
        <td><code>$vr-opacity</code></td>
        <td>string</td>
        <td><code>$hr-opacity</code></td>
        <td>
          Vertical rule opacity.
        </td>
      </tr>
    </tbody>
  </table>
</div>

### Mixins

No mixins available.
