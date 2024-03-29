---
layout: doc
title: Display
description: Responsively control an element's display property.
group: utilities
toc: true
---

## Overview

Responsively control an element's `display` property.  Also included are some classes to control `display` for printing.

## Notation

While there is a large number of [`display` properties](https://developer.mozilla.org/en-US/docs/Web/CSS/display) available, we only support a handful of the more commonly used ones.  Sorry, but we can't support all of them, so if you need one that is not in the list below, you will need to use custom CSS.

Available utilities:
- `.d-block` sets `display: block;`
- `.d-flex` sets `display: flex;`
- `.d-inline` sets `display: inline;`
- `.d-inline-block` sets `display: inline-block;`
- `.d-inline-flex` sets `display: inline-flex;`
- `.d-grid` sets `display: grid;`
- `.d-inline-grid` sets `display: inline-grid;`
- `.d-table` sets `display: table;`
- `.d-table-row` sets `display: table-row;`
- `.d-table-cell` sets `display: table-cell;`
- `.d-none` sets `display: none;`

These classes are also available in responsive variants, in the form of `.d{-breakpoint}-{value}`, such as `.d-lg-block`. Please refer to how our [breakpoint nomenclature]({{ site.path }}/{{ version.docs }}/layout/breakpoints/#breakpoint-nomenclature) is used.

## Examples

{% capture example %}
<div class="d-inline p-0_5 bg-primary text-white">d-inline</div>
<div class="d-inline p-0_5 bg-secondary text-white">d-inline</div>
{% endcapture %}
{% renderExample example %}

{% capture example %}
<div class="d-block p-0_5 bg-primary text-white">d-block</div>
<div class="d-block p-0_5 bg-secondary text-white">d-block</div>
{% endcapture %}
{% renderExample example %}

##  Responsively Hiding Content

To ease hiding content across various breakpoints, we also include responsive `.d-*-down-none` classes.  This should make it easier for those circumstances where resetting the correct `display` property on a component for larger breakpoints can be confusing.

Try to use these on a limited basis and avoid creating entirely different versions of the same site. Instead, use them to complement each device's presentation.

- The `.d-*-none` classes hide the element when the viewport is at the given breakpoint or wider. For example, `.d-md-none` hides an element on medium, large, and extra-large viewports.
- The `.d-*-down-none` classes hide the element when the viewport is at the given breakpoint or smaller. For example, `.d-md-down-none` hides an element on extra-small, small, and medium viewports.
- There are no explicit "visible"/"show" responsive utility classes; you make an element visible by simply not hiding it at that breakpoint size.
- You can combine one `.d-*-none` class with one `.d-*-down-none` class to show an element only on a given interval of screen sizes. For example, `.d-sm-down-none.d-xl-none` shows the element only on medium and large viewports. Using multiple `.d-*-none` classes or multiple `.d-*-down-none` classes is redundant and pointless.
- These classes don't attempt to accommodate less common cases where an element's visibility can't be expressed as a single contiguous range of viewport breakpoint sizes; you will instead need to use custom CSS in such cases.

**Heads up!** There is no `.d-*-down-none` class created for the largest breakpoint, `.d-xl-down-none`, since it is functionally equivalent to using `.d-none`.

<div class="table-scroll">
  <table class="table table-bordered responsive-utilities">
    <thead>
      <tr>
        <th></th>
        <th>
          Extra small devices
          <small>Portrait phones (&lt;576px)</small>
        </th>
        <th>
          Small devices
          <small>Landscape phones (&ge;576px - &lt;768px)</small>
        </th>
        <th>
          Medium devices
          <small>Tablets (&ge;768px - &lt;992px)</small>
        </th>
        <th>
          Large devices
          <small>Desktops (&ge;992px - &lt;1200px)</small>
        </th>
        <th>
          Extra large devices
          <small>Desktops (&ge;1200px)</small>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"><code>.d-xs-down-none</code></th>
        <td class="is-hidden">Hidden</td>
        <td class="is-visible">Visible</td>
        <td class="is-visible">Visible</td>
        <td class="is-visible">Visible</td>
        <td class="is-visible">Visible</td>
      </tr>
      <tr>
        <th scope="row"><code>.d-sm-down-none</code></th>
        <td class="is-hidden">Hidden</td>
        <td class="is-hidden">Hidden</td>
        <td class="is-visible">Visible</td>
        <td class="is-visible">Visible</td>
        <td class="is-visible">Visible</td>
      </tr>
      <tr>
        <th scope="row"><code>.d-md-down-none</code></th>
        <td class="is-hidden">Hidden</td>
        <td class="is-hidden">Hidden</td>
        <td class="is-hidden">Hidden</td>
        <td class="is-visible">Visible</td>
        <td class="is-visible">Visible</td>
      </tr>
      <tr>
        <th scope="row"><code>.d-lg-down-none</code></th>
        <td class="is-hidden">Hidden</td>
        <td class="is-hidden">Hidden</td>
        <td class="is-hidden">Hidden</td>
        <td class="is-hidden">Hidden</td>
        <td class="is-visible">Visible</td>
      </tr>
      <tr>
        <th scope="row"><code>.d-none</code></th>
        <td class="is-hidden">Hidden</td>
        <td class="is-hidden">Hidden</td>
        <td class="is-hidden">Hidden</td>
        <td class="is-hidden">Hidden</td>
        <td class="is-hidden">Hidden</td>
      </tr>
      <tr>
        <th scope="row"><code>.d-sm-none</code></th>
        <td class="is-visible">Visible</td>
        <td class="is-hidden">Hidden</td>
        <td class="is-hidden">Hidden</td>
        <td class="is-hidden">Hidden</td>
        <td class="is-hidden">Hidden</td>
      </tr>
      <tr>
        <th scope="row"><code>.d-md-none</code></th>
        <td class="is-visible">Visible</td>
        <td class="is-visible">Visible</td>
        <td class="is-hidden">Hidden</td>
        <td class="is-hidden">Hidden</td>
        <td class="is-hidden">Hidden</td>
      </tr>
      <tr>
        <th scope="row"><code>.d-lg-none</code></th>
        <td class="is-visible">Visible</td>
        <td class="is-visible">Visible</td>
        <td class="is-visible">Visible</td>
        <td class="is-hidden">Hidden</td>
        <td class="is-hidden">Hidden</td>
      </tr>
      <tr>
        <th scope="row"><code>.d-xl-none</code></th>
        <td class="is-visible">Visible</td>
        <td class="is-visible">Visible</td>
        <td class="is-visible">Visible</td>
        <td class="is-visible">Visible</td>
        <td class="is-hidden">Hidden</td>
    </tr>
    </tbody>
  </table>
</div>

### Test Cases

Resize your browser or load on different devices to test the responsive utility classes.

Green checkmarks indicate the element **is visible** in your current viewport.

<div class="row responsive-utilities-test visible-on">
  <div class="col-6 col-sm-3">
    <span class="d-sm-none visible">&#10004; Visible on extra small</span>
    <span class="d-xs-down-none not-visible">Extra small</span>
  </div>
  <div class="col-6 col-sm-3">
    <span class="d-md-none visible">&#10004; Visible on small or narrower</span>
    <span class="d-sm-down-none not-visible">Small or narrower</span>
  </div>
  <div class="col-6 col-sm-3">
    <span class="d-lg-none visible">&#10004; Visible on medium or narrower</span>
    <span class="d-md-down-none not-visible">Medium or narrower</span>
  </div>
  <div class="col-6 col-sm-3">
    <span class="d-xl-none visible">&#10004; Visible on large or narrower</span>
    <span class="d-lg-down-none not-visible">Large or narrower</span>
  </div>
</div>

<hr>

<div class="row responsive-utilities-test visible-on">
  <div class="col-6 col-sm-3">
    <span class="d-xs-down-none visible">&#10004; Visible on small or wider</span>
    <span class="d-sm-none not-visible">Small or wider</span>
  </div>
  <div class="col-6 col-sm-3">
    <span class="d-sm-down-none visible">&#10004; Visible on medium or wider</span>
    <span class="d-md-none not-visible">Medium or wider</span>
  </div>
  <div class="col-6 col-sm-3">
    <span class="d-md-down-none visible">&#10004; Visible on large or wider</span>
    <span class="d-lg-none not-visible">Large or wider</span>
  </div>
  <div class="col-6 col-sm-3">
    <span class="d-lg-down-none visible">&#10004; Visible on extra large</span>
    <span class="d-xl-none not-visible">Extra large</span>
  </div>
</div>

<hr>

<div class="row responsive-utilities-test visible-on">
  <div class="col-6 col-sm-3">
    <span class="d-sm-none visible">&#10004; Your viewport is exactly extra small</span>
    <span class="d-xs-down-none not-visible">Your viewport is NOT exactly extra small</span>
  </div>
  <div class="col-6 col-sm-3">
    <span class="d-xs-down-none d-md-none visible">&#10004; Your viewport is exactly small</span>
    <span class="d-sm-only not-visible">Your viewport is NOT exactly small</span>
  </div>
  <div class="col-6 col-sm-3">
    <span class="d-sm-down-none d-lg-none visible">&#10004; Your viewport is exactly medium</span>
    <span class="d-md-only not-visible">Your viewport is NOT exactly medium</span>
  </div>
  <div class="col-6 col-sm-3">
    <span class="d-md-down-none d-xl-none visible">&#10004; Your viewport is exactly large</span>
    <span class="d-lg-only not-visible">Your viewport is NOT exactly large</span>
  </div>
  <div class="col-6 col-sm-3">
    <span class="d-lg-down-none visible">&#10004; Your viewport is exactly extra large</span>
    <span class="d-xl-only not-visible">Your viewport is NOT exactly extra large</span>
  </div>
</div>

## Print Utilities

These utilities only affect the `display` property. Includes support for the same `display` values as our responsive `.d-*` utilities.

You will need to take into account any other CSS properties, such as `visibility`, that might cause issues for the print layout.

- `.print-block`
- `.print-flex`
- `.print-inline`
- `.print-inline-block`
- `.print-inline-flex`
- `.print-grid`
- `.print-inline-grid`
- `.print-table`
- `.print-table-row`
- `.print-table-cell`
- `.print-none`

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
        <td><code>$enable-utility-display</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the display utility classes.
          Smaller segements of the display utilities can be disabled with the following <code>$enable-*</code> variables.
        </td>
      </tr>
      <tr>
        <td><code>$enable-utility-display-down-none</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the `down-none` responsive hiding display rules as utility classes.
        </td>
      </tr>
      <tr>
        <td><code>$enable-utility-display-print</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the print display utility classes.
        </td>
      </tr>
      <tr>
        <td><code>$utility-display-breakpoints</code></td>
        <td>string</td>
        <td><code>map-keys($grid-breakpoints)</code></td>
        <td>
          Map of breakpoints that will be used to generate responsive display utilities.
        </td>
      </tr>
      <tr>
        <td><code>$utility-display</code></td>
        <td>string</td>
        <td><code>block, flex, inline, inline-block, inline-flex, grid, table, table-row, table-cell, none</code></td>
        <td>
          List of display values that will be used to generate responsive display utilities.
        </td>
      </tr>
    </tbody>
  </table>
</div>

### Mixins

No mixins available.
