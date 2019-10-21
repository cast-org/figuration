---
layout: doc
title: Vertical Alignment
description: Adjust the vertical alignment of inlined or table cell content.
group: utilities
---

<div class="h3 cf-toc-header">Page Contents</div>

${toc}

## Overview

Give some vertical alignment to elements by manipulating their [`vertical-align` property](https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align).

Note that only items with the following display properties can be vertically aligned:
- inline
- inline-block
- inline-table
- table-cell

The alignments consist of the items in the following list and are also available in responsive variants, in the form `.visible-{breakpoint}-{alignment}`. Please refer to how our [breakpoint nomenclature]({{ site.path }}/{{ version.docs }}/layout/overview/#breakpoint-nomenclature) is used.
- `.valign-baseline`
- `.valign-top`
- `.valign-middle`
- `.valign-bottom`
- `.valign-text-top`
- `.valign-text-bottom`

## Examples

Example with inline elements.

{% capture example %}
<div class="bg-gray-50">
  <span class="bg-cyan-100 valign-baseline">baseline</span>
  -
  <span class="bg-cyan-100 valign-top">top</span>
  -
  <span class="bg-cyan-100 valign-middle">middle</span>
  -
  <span class="bg-cyan-100 valign-bottom">bottom</span>
  -
  <span class="bg-cyan-100 valign-text-top">text-top</span>
  -
  <span class="bg-cyan-100 valign-text-bottom">text-bottom</span>
</div>
{% endcapture %}
{% renderExample example %}

Using table cells.

{% capture example %}
<table class="table table-bordered" style="height: 100px;">
  <tbody>
    <tr>
      <td class="valign-baseline">baseline</td>
      <td class="valign-top">top</td>
      <td class="valign-middle">middle</td>
      <td class="valign-bottom">bottom</td>
      <td class="valign-text-top">text-top</td>
      <td class="valign-text-bottom">text-bottom</td>
    </tr>
  </tbody>
</table>
{% endcapture %}
{% renderExample example %}

Slightly more complex uses, such as being able to align items in a row, become quick and easy.

{% capture example %}
<div class="bg-gray-50 w-100 d-table">
  <div class="d-table-cell valign-bottom">
    <a href="#">View more in teacher's guide</a> |
    <a href="#">Common Core alignment</a>
  </div>
  <div class="d-table-cell valign-bottom text-end">
    <button type="button" class="btn btn-primary btn-lg">Continue</button>
  </div>
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
        <td><code>$enable-utility-valign</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the vertical alignment utility classes.
        </td>
      </tr>
    </tbody>
  </table>
</div>

### Mixins

No mixins available.
