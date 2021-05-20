---
layout: doc
title: Pagination
description: Pagination provides multiple visual styles for grouping navigation of a series of related content.
group: components
toc: true
---

## Overview

Pagination links indicate a series of related content exists across multiple pages. Typically these are used where a multi-page approach to long lists of content improves general performance, such as in search results.

## Basic Pagination

Pagination is built with list HTML elements so screen readers can announce the number of available links. Use a wrapping `<nav>` element to identify it as a navigation section to screen readers and other assistive technologies.

{% capture example %}
<nav aria-label="Page navigation">
  <ul class="pagination">
    <li class="page-item"><a href="#" class="page-link">Previous</a></li>
    <li class="page-item"><a href="#" class="page-link">1</a></li>
    <li class="page-item"><a href="#" class="page-link">2</a></li>
    <li class="page-item"><a href="#" class="page-link">3</a></li>
    <li class="page-item"><a href="#" class="page-link">Next</a></li>
  </ul>
</nav>
{% endcapture %}
{% renderExample example %}

## Styled Pagination

Add some visual style to lists with a couple of modifier classes.

### Spaced

Add a border around each `.page-link` and spaced them out a bit with `.pagination-spaced`.

{% capture example %}
<nav aria-label="Page navigation">
  <ul class="pagination pagination-spaced">
    <li class="page-item"><a href="#" class="page-link">Previous</a></li>
    <li class="page-item"><a href="#" class="page-link">1</a></li>
    <li class="page-item"><a href="#" class="page-link">2</a></li>
    <li class="page-item"><a href="#" class="page-link">3</a></li>
    <li class="page-item"><a href="#" class="page-link">Next</a></li>
  </ul>
</nav>
{% endcapture %}
{% renderExample example %}

### Group

Group pagination together in a large block of connected items that is hard to miss with `.pagination-group`.

{% capture example %}
<nav aria-label="Page navigation">
  <ul class="pagination pagination-group">
    <li class="page-item"><a href="#" class="page-link">Previous</a></li>
    <li class="page-item"><a href="#" class="page-link">1</a></li>
    <li class="page-item"><a href="#" class="page-link">2</a></li>
    <li class="page-item"><a href="#" class="page-link">3</a></li>
    <li class="page-item"><a href="#" class="page-link">Next</a></li>
  </ul>
</nav>
{% endcapture %}
{% renderExample example %}

## Using Icons

Want to use an icon or symbol in place of text for some pagination links? Be sure to provide proper screen reader support with `aria-` attributes.

{% capture example %}
<nav aria-label="Page navigation">
  <ul class="pagination">
    <li class="page-item">
      <a href="#" class="page-link" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item"><a href="#" class="page-link">1</a></li>
    <li class="page-item"><a href="#" class="page-link">2</a></li>
    <li class="page-item"><a href="#" class="page-link">3</a></li>
    <li class="page-item">
      <a href="#" class="page-link" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>

<nav aria-label="Page navigation">
  <ul class="pagination pagination-spaced">
    <li class="page-item">
      <a href="#" class="page-link" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item"><a href="#" class="page-link">1</a></li>
    <li class="page-item"><a href="#" class="page-link">2</a></li>
    <li class="page-item"><a href="#" class="page-link">3</a></li>
    <li class="page-item">
      <a href="#" class="page-link" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>

<nav aria-label="Page navigation">
  <ul class="pagination pagination-group">
    <li class="page-item">
      <a href="#" class="page-link" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item"><a href="#" class="page-link">1</a></li>
    <li class="page-item"><a href="#" class="page-link">2</a></li>
    <li class="page-item"><a href="#" class="page-link">3</a></li>
    <li class="page-item">
      <a href="#" class="page-link" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
{% endcapture %}
{% renderExample example %}

## Disabled and Active States

Links are customizable for different circumstances. Use `.disabled` for unclickable links and `.active` to indicate the current page.

{%- assign calloutAnchors = version.docs | valueIfEmpty: site.version.docs | prepend: "./" | append: "/partials/callout-warning-disabling-anchors.md" -%}
{% include calloutAnchors %}

{% capture example %}
<nav aria-label="...">
  <ul class="pagination">
    <li class="page-item">
      <a href="#" class="page-link disabled" tabindex="-1" aria-disabled="true">Previous</a>
    </li>
    <li class="page-item">
      <a href="#" class="page-link active" aria-current="page">1</a>
    </li>
    <li class="page-item"><a href="#" class="page-link">2</a></li>
    <li class="page-item"><a href="#" class="page-link">3</a></li>
    <li class="page-item"><a href="#" class="page-link">Next</a></li>
  </ul>
</nav>

<nav aria-label="...">
  <ul class="pagination pagination-spaced">
    <li class="page-item">
      <a href="#" class="page-link disabled" tabindex="-1" aria-disabled="true">Previous</a>
    </li>
    <li class="page-item">
      <a href="#" class="page-link active" aria-current="page">1</a>
    </li>
    <li class="page-item"><a href="#" class="page-link">2</a></li>
    <li class="page-item"><a href="#" class="page-link">3</a></li>
    <li class="page-item"><a href="#" class="page-link">Next</a></li>
  </ul>
</nav>

<nav aria-label="...">
  <ul class="pagination pagination-group">
    <li class="page-item">
      <a href="#" class="page-link disabled" tabindex="-1" aria-disabled="true">Previous</a>
    </li>
    <li class="page-item">
      <a href="#" class="page-link active" aria-current="page">1</a>
    </li>
    <li class="page-item"><a href="#" class="page-link">2</a></li>
    <li class="page-item"><a href="#" class="page-link">3</a></li>
    <li class="page-item"><a href="#" class="page-link">Next</a></li>
  </ul>
</nav>
{% endcapture %}
{% renderExample example %}

You can optionally swap out active or disabled anchors for `<span>`, or omit the anchor in the case of the prev/next arrows, to remove click functionality and prevent keyboard focus while retaining intended styles.

{% capture example %}
<nav aria-label="...">
  <ul class="pagination">
    <li class="page-item">
      <span class="page-link disabled" aria-disabled="true">Previous</span>
    </li>
    <li class="page-item">
      <span class="page-link active" aria-current="page">1</span>
    </li>
    <li class="page-item"><a href="#" class="page-link">2</a></li>
    <li class="page-item"><a href="#" class="page-link">3</a></li>
    <li class="page-item"><a href="#" class="page-link">Next</a></li>
  </ul>
</nav>
{% endcapture %}
{% renderExample example %}

## With Text

Add normal text to your pagination navigation by using `.page-text`.  This class will adjust the alignment, spacing, and size the text to match the controls.

{% capture example %}
<nav aria-label="...">
  <ul class="pagination">
    <li class="page-item"><span class="page-link disabled" aria-disabled="true">Previous</span></li>
    <li class="page-item"><a href="#" class="page-link">1</a></li>
    <li class="page-item"><a href="#" class="page-link">2</a></li>
    <li class="page-item"><span class="page-text">&hellip;</span></li>
    <li class="page-item"><a href="#" class="page-link">98</a></li>
    <li class="page-item"><a href="#" class="page-link">99</a></li>
    <li class="page-item"><a href="#" class="page-link">Next</a></li>
  </ul>
</nav>

<nav aria-label="...">
  <ul class="pagination pagination-spaced">
    <li class="page-item"><span class="page-link disabled" aria-disabled="true">Previous</span></li>
    <li class="page-item"><a href="#" class="page-link">1</a></li>
    <li class="page-item"><a href="#" class="page-link">2</a></li>
    <li class="page-item"><span class="page-text">&hellip;</span></li>
    <li class="page-item"><a href="#" class="page-link">98</a></li>
    <li class="page-item"><a href="#" class="page-link">99</a></li>
    <li class="page-item"><a href="#" class="page-link">Next</a></li>
  </ul>
</nav>

<nav aria-label="...">
  <ul class="pagination pagination-group">
    <li class="page-item"><span class="page-link disabled" aria-disabled="true">Previous</span></li>
    <li class="page-item"><a href="#" class="page-link">1</a></li>
    <li class="page-item"><a href="#" class="page-link">2</a></li>
    <li class="page-item"><span class="page-text">&hellip;</span></li>
    <li class="page-item"><a href="#" class="page-link">98</a></li>
    <li class="page-item"><a href="#" class="page-link">99</a></li>
    <li class="page-item"><a href="#" class="page-link">Next</a></li>
  </ul>
</nav>
{% endcapture %}
{% renderExample example %}

## Sizes

Fancy larger or smaller pagination? Add `.pagination-xsmall`, `.pagination-small`, `.pagination-large`,  or `.pagination-xlarge` for additional sizes.

<div class="cf-example">
  <nav aria-label="...">
    <ul class="pagination pagination-group pagination-xlarge">
      <li class="page-item"><span class="page-link disabled" aria-disabled="true">Previous</span></li>
      <li class="page-item"><a href="#" class="page-link">1</a></li>
      <li class="page-item"><a href="#" class="page-link">2</a></li>
      <li class="page-item"><span class="page-text">&hellip;</span></li>
      <li class="page-item"><a href="#" class="page-link">98</a></li>
      <li class="page-item"><a href="#" class="page-link">99</a></li>
      <li class="page-item"><a href="#" class="page-link">Next</a></li>
    </ul>
  </nav>
  <nav aria-label="...">
    <ul class="pagination pagination-group pagination-large">
        <li class="page-item"><span class="page-link disabled" aria-disabled="true">Previous</span></li>
      <li class="page-item"><a href="#" class="page-link">1</a></li>
      <li class="page-item"><a href="#" class="page-link">2</a></li>
      <li class="page-item"><span class="page-text">&hellip;</span></li>
      <li class="page-item"><a href="#" class="page-link">98</a></li>
      <li class="page-item"><a href="#" class="page-link">99</a></li>
      <li class="page-item"><a href="#" class="page-link">Next</a></li>
    </ul>
  </nav>
  <nav aria-label="...">
    <ul class="pagination pagination-group">
      <li class="page-item"><span class="page-link disabled" aria-disabled="true">Previous</span></li>
      <li class="page-item"><a href="#" class="page-link">1</a></li>
      <li class="page-item"><a href="#" class="page-link">2</a></li>
      <li class="page-item"><span class="page-text">&hellip;</span></li>
      <li class="page-item"><a href="#" class="page-link">98</a></li>
      <li class="page-item"><a href="#" class="page-link">99</a></li>
      <li class="page-item"><a href="#" class="page-link">Next</a></li>
    </ul>
  </nav>
  <nav aria-label="...">
    <ul class="pagination pagination-group pagination-small">
      <li class="page-item"><span class="page-link disabled" aria-disabled="true">Previous</span></li>
      <li class="page-item"><a href="#" class="page-link">1</a></li>
      <li class="page-item"><a href="#" class="page-link">2</a></li>
      <li class="page-item"><span class="page-text">&hellip;</span></li>
      <li class="page-item"><a href="#" class="page-link">98</a></li>
      <li class="page-item"><a href="#" class="page-link">99</a></li>
      <li class="page-item"><a href="#" class="page-link">Next</a></li>
    </ul>
  </nav>
  <nav aria-label="...">
    <ul class="pagination pagination-group pagination-xsmall">
      <li class="page-item"><span class="page-link disabled" aria-disabled="true">Previous</span></li>
      <li class="page-item"><a href="#" class="page-link">1</a></li>
      <li class="page-item"><a href="#" class="page-link">2</a></li>
      <li class="page-item"><span class="page-text">&hellip;</span></li>
      <li class="page-item"><a href="#" class="page-link">98</a></li>
      <li class="page-item"><a href="#" class="page-link">99</a></li>
      <li class="page-item"><a href="#" class="page-link">Next</a></li>
    </ul>
  </nav>
</div>

{% capture highlight %}
<!-- Extra Large pagination -->
<nav aria-label="...">
  <ul class="pagination pagination-group pagination-xlarge">
    ...
  </ul>
</nav>

<!-- Large pagination -->
<nav aria-label="...">
  <ul class="pagination pagination-group pagination-large">
    ...
  </ul>
</nav>

<!-- Default pagination -->
<nav aria-label="...">
  <ul class="pagination pagination-group">
    ...
  </ul>
</nav>

<!-- Small pagination -->
<nav aria-label="...">
  <ul class="pagination pagination-group pagination-small">
    ...
  </ul>
</nav>

<!-- Extra Small pagination -->
<nav aria-label="...">
  <ul class="pagination pagination-group pagination-xsmall">
    ...
  </ul>
</nav>
{% endcapture %}
{% renderHighlight highlight, "html" %}

## Alignment

Change the alignment of pagination components using the [flexbox utilities]({{ site.path }}/{{ version.docs }}/utilities/flexbox/).

{% capture example %}
<nav aria-label="...">
  <ul class="pagination pagination-group flex-center">
    <li class="page-item"><a href="#" class="page-link">Previous</a></li>
    <li class="page-item"><a href="#" class="page-link">1</a></li>
    <li class="page-item"><a href="#" class="page-link">2</a></li>
    <li class="page-item"><a href="#" class="page-link">3</a></li>
    <li class="page-item"><a href="#" class="page-link">Next</a></li>
  </ul>
</nav>
{% endcapture %}
{% renderExample example %}

{% capture example %}
<nav aria-label="...">
  <ul class="pagination pagination-group flex-end">
    <li class="page-item"><a href="#" class="page-link">Previous</a></li>
    <li class="page-item"><a href="#" class="page-link">1</a></li>
    <li class="page-item"><a href="#" class="page-link">2</a></li>
    <li class="page-item"><a href="#" class="page-link">3</a></li>
    <li class="page-item"><a href="#" class="page-link">Next</a></li>
  </ul>
</nav>
{% endcapture %}
{% renderExample example %}

{% capture example %}
<nav aria-label="..." class="d-flex flex-between">
  <ul class="pagination pagination-group">
    <li class="page-item"><a href="#" class="page-link">1</a></li>
    <li class="page-item"><a href="#" class="page-link">2</a></li>
    <li class="page-item"><a href="#" class="page-link">3</a></li>
  </ul>

  <ul class="pagination pagination-spaced">
    <li class="page-item"><a href="#" class="page-link">Previous</a></li>
    <li class="page-item"><a href="#" class="page-link">Next</a></li>
  </ul>
</nav>
{% endcapture %}
{% renderExample example %}

## SASS Reference

### Variables

The available [Customization options]({{ site.path }}/{{ version.docs }}/get-started/options/), or Sass variables, that can be customized for pagination component.

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
        <td><code>$enable-pagination</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the pagination classes.
          Smaller segements of the pagination classes can be disabled with the following <code>$enable-*</code> variables.
        </td>
      </tr>
      <tr>
        <td><code>$enable-pagination-spaced</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the spaced pagination variant.
        </td>
      </tr>
      <tr>
        <td><code>$enable-pagination-group</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the pagination group variant.
        </td>
      </tr>
      <tr>
        <td><code>$enable-pagination-sizing</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the pagination sizing variants.
        </td>
      </tr>
      <tr>
        <td><code>$pagination-margin-bottom</code></td>
        <td>string</td>
        <td><code>.5em</code></td>
        <td>
          Vertical spacing below a pagination container.
        </td>
      </tr>
      <tr>
        <td><code>$pagination-line-height</code></td>
        <td>string</td>
        <td><code>$btn-line-height</code></td>
        <td>
          Line height for pagination items.
        </td>
      </tr>
      <tr>
        <td><code>$pagination-padding-y</code></td>
        <td>string</td>
        <td><code>$btn-padding-y</code></td>
        <td>
          Vertical padding for pagination items.
        </td>
      </tr>
      <tr>
        <td><code>$pagination-padding-x</code></td>
        <td>string</td>
        <td><code>.5em</code></td>
        <td>
          Horizontal padding for pagination items.
        </td>
      </tr>
      <tr>
        <td><code>$pagination-border-width</code></td>
        <td>string</td>
        <td><code>$border-width</code></td>
        <td>
          Border width for pagination items.
        </td>
      </tr>
      <tr>
        <td><code>$pagination-border-color</code></td>
        <td>string</td>
        <td><code>$btn-default-border-color</code></td>
        <td>
          Border color for pagination items.
        </td>
      </tr>
      <tr>
        <td><code>$pagination-border-radius</code></td>
        <td>string</td>
        <td><code>$border-radius</code></td>
        <td>
          Border radius for pagination items.
        </td>
      </tr>
      <tr>
        <td><code>$pagination-bg</code></td>
        <td>string</td>
        <td><code>$btn-default-bg</code></td>
        <td>
          Background color for pagination items.
        </td>
      </tr>
      <tr>
        <td><code>$pagination-color</code></td>
        <td>string</td>
        <td><code>$btn-default-color</code></td>
        <td>
          Text color for pagination items.
        </td>
      </tr>
      <tr>
        <td><code>$pagination-hover-bg</code></td>
        <td>string</td>
        <td><code>$btn-default-hover-bg</code></td>
        <td>
          Background color for pagination items in hover or focus state.
        </td>
      </tr>
      <tr>
        <td><code>$pagination-hover-color</code></td>
        <td>string</td>
        <td><code>$btn-default-hover-color</code></td>
        <td>
          Text color for pagination items in hover or focus state.
        </td>
      </tr>
      <tr>
        <td><code>$pagination-hover-border-color</code></td>
        <td>string</td>
        <td><code>$pagination-border-color</code></td>
        <td>
          Border color for pagination items in hover or focus state.
        </td>
      </tr>
      <tr>
        <td><code>$pagination-active-color</code></td>
        <td>string</td>
        <td><code>$component-active-color</code></td>
        <td>
          Text color for pagination items in active state.
        </td>
      </tr>
      <tr>
        <td><code>$pagination-active-bg</code></td>
        <td>string</td>
        <td><code>$component-active-bg</code></td>
        <td>
          Background color for pagination items in active state.
        </td>
      </tr>
      <tr>
        <td><code>$pagination-disabled-color</code></td>
        <td>string</td>
        <td><code>$component-disabled-color</code></td>
        <td>
          Text color for pagination items in disabled state.
        </td>
      </tr>
      <tr>
        <td><code>$pagination-disabled-bg</code></td>
        <td>string</td>
        <td><code>$component-disabled-bg</code></td>
        <td>
          Background color for pagination items in disabled state.
        </td>
      </tr>
      <tr>
        <td><code>$pagination-spaced-margin-end</code></td>
        <td>string</td>
        <td><code>.25em</code></td>
        <td>
          Vertical spacing between items in spaced pagination.
        </td>
      </tr>
      <tr>
        <td><code>$pagination-sizes</code></td>
        <td>map</td>
        <td><code>$component-sizes</code></td>
        <td>
          Values for pagination sizing variants.
        </td>
      </tr>
    </tbody>
  </table>
</div>

### Mixins

Here are the mixins related to pagination that we use to help generate our CSS.  You can also uses these mixins to generate your own custom components or utilities.

#### pagination-size

Build a size variant for pagination.

{% capture highlight %}
@include pagination-size($padding-y, $padding-x, $font-size, $line-height, $border-radius);
{% endcapture %}
{% renderHighlight highlight, "sass" %}

<div class="table-scroll">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th style="width: 100px;">Argument</th>
        <th style="width: 50px;">Type</th>
        <th style="width: 50px;">Default</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>$padding-y</code></td>
        <td>string</td>
        <td><code>''</code></td>
        <td>
          Vertical padding for pagination size variant.
        </td>
      </tr>
      <tr>
        <td><code>$padding-x</code></td>
        <td>string</td>
        <td><code>none</code></td>
        <td>
          Horizontal padding for pagination size variant.
        </td>
      </tr>
      <tr>
        <td><code>$font-size</code></td>
        <td>string</td>
        <td><code>none</code></td>
        <td>
          Font size for pagination size variant.
        </td>
      </tr>
      <tr>
        <td><code>$line-height</code></td>
        <td>string</td>
        <td><code>none</code></td>
        <td>
          Line height for pagination size variant.
        </td>
      </tr>
      <tr>
        <td><code>$border-radius</code></td>
        <td>string</td>
        <td><code>none</code></td>
        <td>
          Border radius for pagination size variant.
        </td>
      </tr>
    </tbody>
  </table>
</div>
