---
layout: doc
title: Opacity
description: Control the opacity of elements.
group: utilities
toc: true
---

## Examples

The `opacity` property sets the opacity level for an element. The opacity level describes the transparency level, where `1` is not transparent at all, `.5` is 50% visible, and `0` is completely transparent.

Set the `opacity` of an element using `.opacity-{value}` utilities.

<div class="cf-example d-sm-flex">
  <div class="opacity-100 bg-info text-light font-weight-bold radius p-1 m-0_5">100%</div>
  <div class="opacity-75 bg-info text-light font-weight-bold radius p-1 m-0_5">75%</div>
  <div class="opacity-50 bg-info text-light font-weight-bold radius p-1 m-0_5">50%</div>
  <div class="opacity-25 bg-info text-light font-weight-bold radius p-1 m-0_5">25%</div>
  <div class="opacity-0 bg-info text-light font-weight-bold radius p-1 m-0_5">0%</div>
</div>
{% capture highlight %}
<div class="opacity-100">...</div>
<div class="opacity-75">...</div>
<div class="opacity-50">...</div>
<div class="opacity-25">...</div>
<div class="opacity-0">...</div>
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
        <td><code>$enable-utility-opacity</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the opacity utility classes.
        </td>
      </tr>
      <tr>
        <td><code>$utility-opacity</code></td>
        <td>map</td>
        <td>
<pre><code>("0": 0,
"25":.25,
"50": .5,
"75": .75,
"100": 1)</code></pre>
        </td>
        <td>
          Map of opacity names and rules to be generated.
        </td>
      </tr>
    </tbody>
  </table>
</div>

### Mixins

No mixins available.
