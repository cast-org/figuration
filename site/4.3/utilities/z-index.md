---
layout: doc
title: Z-index
description: Use <code>z-index</code> utilities to quickly change the stack level of an element or component.
group: utilities
toc: true
---

## Example
Use `z-index` utilities to stack elements on top of one another. Requires a `position` value other than `static`, which can be set with custom styles or using our [position utilities]({{ site.path }}/{{ version.docs }}/utilities/position/).

{% capture callout %}
These `z-index` utilities have small values of `-1` through `3`, which can be used for the layout of overlapping components. Larger `z-index` values are used for overlay components like modals and tooltips to reduce possible stacking conflicts.
{% endcapture %}
{% renderCallout, callout, "info" %}

{% capture example %}
<div class="z-3 position-absolute radius-large"><span>.z-3</span></div>
<div class="z-2 position-absolute radius-large"><span>.z-2</span></div>
<div class="z-1 position-absolute radius-large"><span>.z-1</span></div>
<div class="z-0 position-absolute radius-large"><span>.z-0</span></div>
<div class="z-n1 position-absolute radius-large"><span>.z-n1</span></div>
{% endcapture %}
{% renderExample example  "cf-example-zindex position-relative" %}

## Overlays

Figuration's overlay components—tooltips, popovers, navbars, dropdowns, modals, offcanvas—all have their own `z-index` values to ensure a usable experience with competing "layers" of an interface.

Read about them in the [`z-index` layout page]({{ site.path }}/{{ version.docs }}/layout/z-index/).

## Components

On some components, small `z-index` values are used to manage repeating elements that overlap one another, for example, buttons in a button group or items in a list group.  These values are in the range of `-1` through `5`, so using z-index utilities within some components could cause stacking order conflicts.

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
        <td><code>$enable-utility-zindex</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the z-index utility classes.
        </td>
      </tr>
      <tr>
        <td><code>$utility-z-index</code></td>
        <td>string</td>
        <td><pre><code>(n1: -1,
0: 0,
1: 1,
2: 2,
3: 3
)</code></pre></td>
        <td>
          Map of values that will be used to generate z-index utilities. Setting this to `null` not generete these utilities.
        </td>
      </tr>
    </tbody>
  </table>
</div>

### Mixins

No mixins available.
