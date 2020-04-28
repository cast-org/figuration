---
layout: doc
title: Tables
description: Apply various visual styles to tabular content, with various border, color, and responsive layout options.
group: content
---

<div class="h3 cf-toc-header">Page Contents</div>

${toc}

## Overview

Due to the widespread use of tables across third-party widgets like calendars and date pickers, we've designed our tables to be **opt-in**. Just add the base class `.table` to any `<table>`, then extend with custom styles or our various included modifier classes.

Check out [MDN's HTML table advanced features and accessibility document](https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Advanced) for additional help when building tables.

## Basic Table

Using the most basic table markup, a `.table` will result in a mostly unstyled table, and will use all available width.

{% capture example %}
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Header 1</th>
      <th scope="col">Header 2</th>
      <th scope="col">Header 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td colspan="2">Spanned Cell</td>
      <td>Cell</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="col"></th>
      <th scope="col">Footer 1</th>
      <th scope="col">Footer 2</th>
      <th scope="col">Footer 3</th>
    </tr>
  </tfoot>
</table>
{% endcapture %}
{% renderExample example %}

## Styled Tables

### Striped Rows

Use `.table-striped{-alt}` to add zebra-striping to any table row within the `<tbody>`.  This is done by using a semi-opaque, inset `box-shadow` within each cell to adjust the perceived background color.

Variants include:
- `.table-striped` - darken the striped row's background-color
- `.table-striped-alt` - lighten the striped row's background-color

<div class="cf-example">
  <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Header 1</th>
        <th scope="col">Header 2</th>
        <th scope="col">Header 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td colspan="2">Spanned Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th></th>
        <th>Footer 1</th>
        <th>Footer 2</th>
        <th>Footer 3</th>
      </tr>
    </tfoot>
  </table>
</div>
{% capture highlight %}
<table class="table table-striped">
  ...
</table>
{% endcapture %}
{% renderHighlight highlight, "html" %}

<div class="cf-example">
  <table class="table table-striped-alt bg-dark text-white">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Header 1</th>
        <th scope="col">Header 2</th>
        <th scope="col">Header 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td colspan="2">Spanned Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th></th>
        <th>Footer 1</th>
        <th>Footer 2</th>
        <th>Footer 3</th>
      </tr>
    </tfoot>
  </table>
</div>
{% capture highlight %}
<table class="table table-striped-alt bg-dark text-white">
  ...
</table>
{% endcapture %}
{% renderHighlight highlight, "html" %}

### Hoverable Rows

Add `.table-hover{-alt}` to enable a hover state on table rows within a `<tbody>`. This is done by using a semi-opaque, inset `box-shadow` within each cell to adjust the perceived background color.

Variants include:
- `.table-hover` - darken the hovered row's background-color
- `.table-hover-alt` - lighten the hovered row's background-color

<div class="cf-example">
  <table class="table table-hover">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Header 1</th>
        <th scope="col">Header 2</th>
        <th scope="col">Header 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td colspan="2">Spanned Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th></th>
        <th>Footer 1</th>
        <th>Footer 2</th>
        <th>Footer 3</th>
      </tr>
    </tfoot>
  </table>
</div>
{% capture highlight %}
<table class="table table-hover">
  ...
</table>
{% endcapture %}
{% renderHighlight highlight, "html" %}

<div class="cf-example">
  <table class="table table-hover-alt bg-dark text-white">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Header 1</th>
        <th scope="col">Header 2</th>
        <th scope="col">Header 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td colspan="2">Spanned Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th></th>
        <th>Footer 1</th>
        <th>Footer 2</th>
        <th>Footer 3</th>
      </tr>
    </tfoot>
  </table>
</div>
{% capture highlight %}
<table class="table table-hover-alt bg-dark text-white">
  ...
</table>
{% endcapture %}
{% renderHighlight highlight, "html" %}

### Condensed Table

Add `.table-condensed` to make tables more compact by reducing the cell padding.

<div class="cf-example">
  <table class="table table-condensed">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Header 1</th>
        <th scope="col">Header 2</th>
        <th scope="col">Header 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td colspan="2">Spanned Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th></th>
        <th>Footer 1</th>
        <th>Footer 2</th>
        <th>Footer 3</th>
      </tr>
    </tfoot>
  </table>
</div>
{% capture highlight %}
<table class="table table-condensed">
  ...
</table>
{% endcapture %}
{% renderHighlight highlight, "html" %}

### Narrow Table

Use our [sizing utilities]({{ site.path }}/{{ version.docs }}/utilities/sizing/), such as `w-auto`, to control a table's width.

<div class="cf-example">
  <table class="table w-auto">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Header 1</th>
        <th scope="col">Header 2</th>
        <th scope="col">Header 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td colspan="2">Spanned Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th></th>
        <th>Footer 1</th>
        <th>Footer 2</th>
        <th>Footer 3</th>
      </tr>
    </tfoot>
  </table>
</div>
{% capture highlight %}
<table class="table w-auto">
  ...
</table>
{% endcapture %}
{% renderHighlight highlight, "html" %}

## Table Borders

### Divided Table

Add a horizontal border between rows using `.table-divided`.

<div class="cf-example">
  <table class="table table-divided">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Header 1</th>
        <th scope="col">Header 2</th>
        <th scope="col">Header 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td colspan="2">Spanned Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th></th>
        <th>Footer 1</th>
        <th>Footer 2</th>
        <th>Footer 3</th>
      </tr>
    </tfoot>
  </table>
</div>
{% capture highlight %}
<table class="table table-divided">
  ...
</table>
{% endcapture %}
{% renderHighlight highlight, "html" %}

### Ruled Table

Put a border on the top and bottom of a table, and between rows using `.table-ruled`.

<div class="cf-example">
  <table class="table table-ruled">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Header 1</th>
        <th scope="col">Header 2</th>
        <th scope="col">Header 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td colspan="2">Spanned Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th></th>
        <th>Footer 1</th>
        <th>Footer 2</th>
        <th>Footer 3</th>
      </tr>
    </tfoot>
  </table>
</div>
{% capture highlight %}
<table class="table table-ruled">
  ...
</table>
{% endcapture %}
{% renderHighlight highlight, "html" %}

### Pillared Table

Put a vertical border and between columns using `.table-pillared`.

<div class="cf-example">
  <table class="table table-pillared">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Header 1</th>
        <th scope="col">Header 2</th>
        <th scope="col">Header 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td colspan="2">Spanned Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th></th>
        <th>Footer 1</th>
        <th>Footer 2</th>
        <th>Footer 3</th>
      </tr>
    </tfoot>
  </table>
</div>
{% capture highlight %}
<table class="table table-pillared">
  ...
</table>
{% endcapture %}
{% renderHighlight highlight, "html" %}

### Walled Table

Put a border on the sides of a table, and between columns using `.table-walled`.

<div class="cf-example">
  <table class="table table-walled">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Header 1</th>
        <th scope="col">Header 2</th>
        <th scope="col">Header 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td colspan="2">Spanned Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th></th>
        <th>Footer 1</th>
        <th>Footer 2</th>
        <th>Footer 3</th>
      </tr>
    </tfoot>
  </table>
</div>
{% capture highlight %}
<table class="table table-walled">
  ...
</table>
{% endcapture %}
{% renderHighlight highlight, "html" %}

### Celled Table

Put horizontal and vertical borders between rows and columns using `.table-celled`.

<div class="cf-example">
  <table class="table table-celled">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Header 1</th>
        <th scope="col">Header 2</th>
        <th scope="col">Header 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td colspan="2">Spanned Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th></th>
        <th>Footer 1</th>
        <th>Footer 2</th>
        <th>Footer 3</th>
      </tr>
    </tfoot>
  </table>
</div>
{% capture highlight %}
<table class="table table-celled">
  ...
</table>
{% endcapture %}
{% renderHighlight highlight, "html" %}

### Wrapped Table

Put a border all around the outisde of a table with `.table-wrapped`.

<div class="cf-example">
  <table class="table table-wrapped">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Header 1</th>
        <th scope="col">Header 2</th>
        <th scope="col">Header 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td colspan="2">Spanned Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th></th>
        <th>Footer 1</th>
        <th>Footer 2</th>
        <th>Footer 3</th>
      </tr>
    </tfoot>
  </table>
</div>
{% capture highlight %}
<table class="table table-wrapped">
  ...
</table>
{% endcapture %}
{% renderHighlight highlight, "html" %}

### Bordered Table

Put a border around the table and every cell with `.table-bordered`.

<div class="cf-example">
  <table class="table table-bordered">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Header 1</th>
        <th scope="col">Header 2</th>
        <th scope="col">Header 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td colspan="2">Spanned Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th></th>
        <th>Footer 1</th>
        <th>Footer 2</th>
        <th>Footer 3</th>
      </tr>
    </tfoot>
  </table>
</div>
{% capture highlight %}
<table class="table table-bordered">
  ...
</table>
{% endcapture %}
{% renderHighlight highlight, "html" %}

## Cell Alignment

By default, table cells of `<thead>` are vertically aligned to the `bottom`. Table cells in `<tbody>` inherit their alignment from `<table>` and are aligned to the the `top` by default.

{% capture example %}
<div class="table-scroll">
  <table class="table table-bordered">
    <thead>
      <tr>
          <th scope="col">Header 1</th>
          <th scope="col">Header 2</th>
          <th scope="col">Header 3</th>
          <th scope="col">Header 4</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>This cell inherits <code>vertical-align: top;</code> from the table</td>
        <td>This cell inherits <code>vertical-align: top;</code> from the table</td>
        <td>This cell inherits <code>vertical-align: top;</code> from the table</td>
        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae ipsum ut metus elementum ultricies sit amet et velit. In pharetra magna at euismod fringilla.</td>
      </tr>
      <tr class="valign-bottom">
        <td>This cell inherits <code>vertical-align: bottom;</code> from the table row</td>
        <td>This cell inherits <code>vertical-align: bottom;</code> from the table row</td>
        <td>This cell inherits <code>vertical-align: bottom;</code> from the table row</td>
        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae ipsum ut metus elementum ultricies sit amet et velit. In pharetra magna at euismod fringilla.</td>
      </tr>
      <tr>
        <td>This cell inherits <code>vertical-align: top;</code> from the table</td>
        <td>This cell inherits <code>vertical-align: top;</code> from the table</td>
        <td class="valign-middle">This cell is aligned to the middle.</td>
        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae ipsum ut metus elementum ultricies sit amet et velit. In pharetra magna at euismod fringilla.</td>
      </tr>
    </tbody>
  </table>
</div>
{% endcapture %}
{% renderExample example %}

## Captions

A `<caption>` functions like a heading for a table. It helps users with screen readers to find a table and understand what it’s about and decide if they want to read it.

{% capture example %}
<table class="table">
  <caption>List of users</caption>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>John</td>
      <td>Doe</td>
      <td>jdoe</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jane</td>
      <td>Smith</td>
      <td>jsmith</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>James</td>
      <td>White</td>
      <td>jwhite</td>
    </tr>
  </tbody>
</table>
{% endcapture %}
{% renderExample example %}

Use `.caption-top` to place the `<caption>`above the table.

{% capture example %}
<table class="table caption-top">
  <caption>List of users</caption>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>John</td>
      <td>Doe</td>
      <td>jdoe</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jane</td>
      <td>Smith</td>
      <td>jsmith</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>James</td>
      <td>White</td>
      <td>jwhite</td>
    </tr>
  </tbody>
</table>
{% endcapture %}
{% renderExample example %}

## Scrolling Tables

Having an issue with tables becoming too wide for their containers? Add a `.table-scroll` wrapper to any `.table` to make them scroll horizontally if they become wider than their container.

{% capture callout %}
Vertical Clipping
{.h5}

Scrolling tables make use of `overflow-y: hidden`, which clips off any content that goes beyond the bottom or top edges of the table. In particular, this can clip off dropdown menus and other third-party widgets.
{% endcapture %}
{% renderCallout, callout, "warning" %}

### Always Scrolling

<div class="cf-example">
  <div class="table-scroll">
    <table class="table table-bordered text-nowrap">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Header 1</th>
          <th scope="col">Header 2</th>
          <th scope="col">Header 3</th>
          <th scope="col">Header 4</th>
          <th scope="col">Header 5</th>
          <th scope="col">Header 6</th>
          <th scope="col">Header 7</th>
          <th scope="col">Header 8</th>
          <th scope="col">Header 9</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th></th>
          <th>Footer 1</th>
          <th>Footer 2</th>
          <th>Footer 3</th>
          <th>Footer 4</th>
          <th>Footer 5</th>
          <th>Footer 6</th>
          <th>Footer 7</th>
          <th>Footer 8</th>
          <th>Footer 9</th>
        </tr>
      </tfoot>
    </table>
  </div>
</div>

{% capture highlight %}
<div class="table-scroll">
  <table class="table table-bordered">
    ...
  </table>
</div>
{% endcapture %}
{% renderHighlight highlight, "html" %}

### Responsive Scrolling

Table scrolling is also available in responsive variants of the form `.table-scroll-*`, where the table will horizontally scroll when the table is wider than it's container and when the viewport is at the given breakpoint or smaller.

Responsive variants are:
- `.table-scroll-xs`
- `.table-scroll-sm`
- `.table-scroll-md`
- `.table-scroll-lg`

**Heads up!** There is no `.table-scroll-*` class created for the largest breakpoint, `.table-scroll-xl`, since it is functionally equivalent to using `.table-scroll`.

<div class="cf-example">
  <div class="table-scroll-xs">
    <table class="table table-bordered text-nowrap">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Header 1</th>
          <th scope="col">Header 2</th>
          <th scope="col">Header 3</th>
          <th scope="col">Header 4</th>
          <th scope="col">Header 5</th>
          <th scope="col">Header 6</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th></th>
          <th>Footer 1</th>
          <th>Footer 2</th>
          <th>Footer 3</th>
          <th>Footer 4</th>
          <th>Footer 5</th>
          <th>Footer 6</th>
        </tr>
      </tfoot>
    </table>
  </div>

  <div class="table-scroll-sm">
    <table class="table table-bordered text-nowrap">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Header 1</th>
          <th scope="col">Header 2</th>
          <th scope="col">Header 3</th>
          <th scope="col">Header 4</th>
          <th scope="col">Header 5</th>
          <th scope="col">Header 6</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th></th>
          <th>Footer 1</th>
          <th>Footer 2</th>
          <th>Footer 3</th>
          <th>Footer 4</th>
          <th>Footer 5</th>
          <th>Footer 6</th>
        </tr>
      </tfoot>
    </table>
  </div>

  <div class="table-scroll-md">
    <table class="table table-bordered text-nowrap">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Header 1</th>
          <th scope="col">Header 2</th>
          <th scope="col">Header 3</th>
          <th scope="col">Header 4</th>
          <th scope="col">Header 5</th>
          <th scope="col">Header 6</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th></th>
          <th>Footer 1</th>
          <th>Footer 2</th>
          <th>Footer 3</th>
          <th>Footer 4</th>
          <th>Footer 5</th>
          <th>Footer 6</th>
        </tr>
      </tfoot>
    </table>
  </div>

  <div class="table-scroll-lg">
    <table class="table table-bordered text-nowrap">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Header 1</th>
          <th scope="col">Header 2</th>
          <th scope="col">Header 3</th>
          <th scope="col">Header 4</th>
          <th scope="col">Header 5</th>
          <th scope="col">Header 6</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th></th>
          <th>Footer 1</th>
          <th>Footer 2</th>
          <th>Footer 3</th>
          <th>Footer 4</th>
          <th>Footer 5</th>
          <th>Footer 6</th>
        </tr>
      </tfoot>
    </table>
  </div>
</div>

{% capture highlight %}
<div class="table-scroll-xs">
  <table class="table table-bordered">
    ...
  </table>
</div>

<div class="table-scroll-sm">
  <table class="table table-bordered">
    ...
  </table>
</div>

<div class="table-scroll-md">
  <table class="table table-bordered">
    ...
  </table>
</div>

<div class="table-scroll-lg">
  <table class="table table-bordered">
    ...
  </table>
</div>
{% endcapture %}
{% renderHighlight highlight, "html" %}

## Color Variants

Use [color utility classes]({{ site.path }}/{{ version.docs }}/utilities/color/) to style tables with color.

{%- assign calloutColor = version.docs | valueIfEmpty: site.version.docs | prepend: "./" | append: "/partials/callout-warning-color-assistive-technologies.md" -%}
{% include calloutColor %}

### Inverse Table

Easily create an inverted table with light text on a dark background.

<div class="cf-example">
  <table class="table table-bordered bg-dark border-secondary text-white">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Header 1</th>
        <th scope="col">Header 2</th>
        <th scope="col">Header 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td colspan="2">Spanned Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th></th>
        <th>Footer 1</th>
        <th>Footer 2</th>
        <th>Footer 3</th>
      </tr>
    </tfoot>
  </table>
</div>
{% capture highlight %}
<table class="table table-bordered bg-dark border-secondary text-white">
  ...
</table>
{% endcapture %}
{% renderHighlight highlight, "html" %}

### Header/Footer Color

Use [text or background utilities]({{ site.path }}/{{ version.docs }}/utilities/color/) to alter the look of the header and/or footer.

<div class="cf-example">
  <table class="table">
    <thead class="bg-dark text-light">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Header 1</th>
        <th scope="col">Header 2</th>
        <th scope="col">Header 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td colspan="2">Spanned Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
    </tbody>
    <tfoot class="bg-light text-dark">
      <tr>
        <th></th>
        <th>Footer 1</th>
        <th>Footer 2</th>
        <th>Footer 3</th>
      </tr>
    </tfoot>
  </table>
</div>
{% capture highlight %}
<table class="table table-bordered bg-dark border-secondary text-white">
  <thead class "bg-dark text-light">
    ...
  </thead>
  <tbody>
    ...
  </tbody>
  <tfoot class="bg-light text-dark">
    ...
  </tfoot>
</table>
{% endcapture %}
{% renderHighlight highlight, "html" %}

### Border Color

Easily recolor borders by setting the `border-color` on the `.table` itself.  Setting a `border-color` on a table row or cell will affect the border color for that specific element.  Be aware that using utility classes to recolor borders can result in descendants will have their border color updated as well.

All cells use `border-top` for their horizontal borders,  while `<thead>` adds a `border-bottom` to `<th>` elements.
All cells use `border-left` for their vertical ones, unless they are the last ones in a row, then they potentially add a `border-right` depending on the modifier used.

<div class="cf-example">
  <table class="table table-bordered border-primary">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Header 1</th>
        <th scope="col">Header 2</th>
        <th scope="col">Header 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td colspan="2">Spanned Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th></th>
        <th>Footer 1</th>
        <th>Footer 2</th>
        <th>Footer 3</th>
      </tr>
    </tfoot>
  </table>
</div>
{% capture highlight %}
<table class="table table-bordered border-primary">
  ...
</table>
{% endcapture %}
{% renderHighlight highlight, "html" %}

<div class="cf-example">
  <table class="table table-divided">
    <thead class="border-primary">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Header 1</th>
        <th scope="col">Header 2</th>
        <th scope="col">Header 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td colspan="2">Spanned Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
    </tbody>
    <tfoot class="border-danger">
      <tr>
        <th></th>
        <th>Footer 1</th>
        <th>Footer 2</th>
        <th>Footer 3</th>
      </tr>
    </tfoot>
  </table>
</div>
{% capture highlight %}
<table class="table table-divided">
  <thead class="border-primary">
    ...
  </thead>
  <tbody>
    ...
  </tbody>
  <tfoot class="border-danger">
    ...
  </tfoot>
</table>
{% endcapture %}
{% renderHighlight highlight, "html" %}

### Contextual Classes

Use contextual classes to color table rows or individual cells.

<div class="cf-example">
  <table class="table table-bordered">
    <tbody>
      <tr>
        <th scope="row">Default</th>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr class="table-active">
        <th scope="row">Active</th>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr class="table-primary">
        <th scope="row">Primary</th>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr class="table-secondary">
        <th scope="row">Secondary</th>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr class="table-success">
        <th scope="row">Success</th>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr class="table-info">
        <th scope="row">Info</th>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr class="table-warning">
        <th scope="row">Warning</th>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr class="table-danger">
        <th scope="row">Danger</th>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr class="table-light">
        <th scope="row">Light</th>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr class="table-dark">
        <th scope="row">Dark</th>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
    </tbody>
  </table>
</div>

{% capture highlight %}
<!-- On rows -->
<tr class="table-active">...</tr>
<tr class="table-success">...</tr>
<tr class="table-info">...</tr>
<tr class="table-warning">...</tr>
<tr class="table-danger">...</tr>

<!-- On cells (`td` or `th`) -->
<tr>
  <td class="table-active">...</td>
  <td class="table-success">...</td>
  <td class="table-info">...</td>
  <td class="table-warning">...</td>
  <td class="table-danger">...</td>
</tr>
{% endcapture %}
{% renderHighlight highlight, "html" %}

You may also use [text or background utilities]({{ site.path }}/{{ version.docs }}/utilities/color/).

<div class="cf-example">
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Column heading</th>
        <th scope="col">Column heading</th>
        <th scope="col">Column heading</th>
      </tr>
    </thead>
    <tbody>
      <tr class="bg-primary text-white">
        <th scope="row">1</th>
        <td>Column content</td>
        <td>Column content</td>
        <td>Column content</td>
      </tr>
      <tr class="bg-success">
        <th scope="row">2</th>
        <td>Column content</td>
        <td>Column content</td>
        <td>Column content</td>
      </tr>
      <tr class="bg-info text-white">
        <th scope="row">3</th>
        <td>Column content</td>
        <td>Column content</td>
        <td>Column content</td>
      </tr>
      <tr class="bg-warning">
        <th scope="row">4</th>
        <td>Column content</td>
        <td>Column content</td>
        <td>Column content</td>
      </tr>
      <tr class="bg-danger text-white">
        <th scope="row">5</th>
        <td>Column content</td>
        <td>Column content</td>
        <td>Column content</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th></th>
        <th>Column footer</th>
        <th>Column footer</th>
        <th>Column footer</th>
      </tr>
    </tfoot>
  </table>
</div>

{% capture highlight %}
<!-- On rows -->
<tr class="bg-primary text-white">...</tr>
<tr class="bg-success">...</tr>
<tr class="bg-info text-white">...</tr>
<tr class="bg-warning">...</tr>
<tr class="bg-danger text-white">...</tr>

<!-- On cells (`td` or `th`) -->
<tr>
  <td class="bg-primary text-white">...</td>
  <td class="bg-success">...</td>
  <td class="bg-info text-white">...</td>
  <td class="bg-warning">...</td>
  <td class="bg-danger text-white">...</td>
</tr>
{% endcapture %}
{% renderHighlight highlight, "html" %}

You can also use [text or background utilities]({{ site.path }}/{{ version.docs }}/utilities/color/) to achieve multiple styles.

{% capture example %}
<table class="table">
  <thead class="text-light bg-primary">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Header 1</th>
      <th scope="col">Header 2</th>
      <th scope="col">Header 3</th>
    </tr>
  </thead>
  <tbody>
    <tr class="text-info">
      <th scope="row">1</th>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td colspan="2" class="text-success">table cell</td>
      <td class="text-danger">table cell</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td class="text-light bg-success">table cell</td>
      <td>Cell</td>
      <td class="text-light bg-danger">table cell</td>
    </tr>
  </tbody>
  <tfoot class="bg-info text-light">
    <tr>
      <th></th>
      <th>Footer 1</th>
      <th>Footer 2</th>
      <th>Footer 3</th>
    </tr>
  </tfoot>
</table>
{% endcapture %}
{% renderExample example %}

## Nested Tables

Figuration does have a general recommendation against the use of nested tables as they can create usability and accessibility issues for screen reader users.  One recommendation would be to break up complex tables into multiple simpler tables.

Our table styles are not intended to be inherited, meaning that nested tables can be styled independent from the parent.

<div class="cf-example">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Header 1</th>
        <th scope="col">Header 2</th>
        <th scope="col">Header 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <td colspan="4">
          <table class="table table-divided mb-0">
            <thead>
              <tr>
                <th scope="col">Header A</th>
                <th scope="col">Header B</th>
                <th scope="col">Header C</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">A</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
              <tr>
                <th scope="row">B</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th></th>
        <th>Footer 1</th>
        <th>Footer 2</th>
        <th>Footer 3</th>
      </tr>
    </tfoot>
  </table>
</div>
{% capture highlight %}
<table class="table table-bordered table-striped">
  <thead>
    ...
  </thead>
  <tbody>
    ...
    <tr>
      <td colspan="4">
        <table class="table table-divided mb-0">
          ...
        </table>
      </td>
    </tr>
    ...
  </tbody>
</table>
{% endcapture %}
{% renderHighlight highlight, "html" %}

### Notes About Nesting

Most `.table` styles and variants are built using a `.table > :not(caption) > * > *` selector syntax.  The use of the child combinator (`>`) and univeral selector (`*`) allow for reduced CSS output since there is the need to style each `td` and `th` within a given `thead`, `tbody`, or `tfoot` container.  This has the added benefit of preventing *most* styles from leaking to nested tables.

In pretty much every modern browser, when a table is created with `<tr>`s as direct children, those `<tr>` will be wrapped in a `<tbody>` by default, allowing our table styles to work.


## SASS Reference

### Variables

The available [Customization options]({{ site.path }}/{{ version.docs }}/get-started/options/), or Sass variables, that can be customized for tables.

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
        <td><code>$enable-table</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the table classes.
          Smaller segements of the table classes can be disabled with the following <code>$enable-*</code> variables.
        </td>
      </tr>
      <tr>
        <td><code>$enable-table-borders</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of table border classes.
        </td>
      </tr>
      <tr>
        <td><code>$enable-table-striped</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of striped table classes.
        </td>
      </tr>
      <tr>
        <td><code>$enable-table-hover</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of hoverable table classes.
        </td>
      </tr>
      <tr>
        <td><code>$enable-table-condensed</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of condensed table classes.
        </td>
      </tr>
      <tr>
        <td><code>$enable-table-active</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of active table row color class.
        </td>
      </tr>
      <tr>
        <td><code>$enable-table-colors</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of theme table row color classes.
        </td>
      </tr>
      <tr>
        <td><code>$enable-table-scroll</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of scrollable table class.
        </td>
      </tr>
      <tr>
        <td><code>$enable-table-scroll-responsive</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of responsive scrollable table classes.
        </td>
      </tr>
      <tr>
        <td><code>$table-margin-bottom</code></td>
        <td>string</td>
        <td><code>$spacer</code></td>
        <td>
          Margin bottom for table.
        </td>
      </tr>
      <tr>
        <td><code>$table-cell-padding</code></td>
        <td>boolean</td>
        <td><code>.5rem</code></td>
        <td>
          Table cell padding.
        </td>
      </tr>
      <tr>
        <td><code>$table-condensed-cell-padding</code></td>
        <td>boolean</td>
        <td><code>.25rem</code></td>
        <td>
          Cell padding for condensed table variant.
        </td>
      </tr>
      <tr>
        <td><code>$table-caption-color</code></td>
        <td>boolean</td>
        <td><code>$uibase-500</code></td>
        <td>
          Table caption text color.
        </td>
      </tr>
      <tr>
        <td><code>$table-cell-vertical-align</code></td>
        <td>string</td>
        <td><code>top</code></td>
        <td>
          Vertical alignment for table cells.
        </td>
      </tr>
      <tr>
        <td><code>$table-head-vertical-align</code></td>
        <td>string</td>
        <td><code>bottom</code></td>
        <td>
          Vertical alignment for header cells.
        </td>
      </tr>
      <tr>
        <td><code>$table-cell-vertical-align</code></td>
        <td>string</td>
        <td><code>left</code></td>
        <td>
          Horizontal alignment for header cells.
        </td>
      </tr>
      <tr>
        <td><code>$table-bg</code></td>
        <td>boolean</td>
        <td><code>null</code></td>
        <td>
          Table background color.
        </td>
      </tr>
      <tr>
        <td><code>$table-bg-active</code></td>
        <td>boolean</td>
        <td><code>$component-hover-bg</code></td>
        <td>
          Active table row background color.
        </td>
      </tr>
      <tr>
        <td><code>$table-bg-active-hover</code></td>
        <td>boolean</td>
        <td><code>$uibase-200</code></td>
        <td>
          Active table row background color for hover state.
        </td>
      </tr>
      <tr>
        <td><code>$table-border-width</code></td>
        <td>boolean</td>
        <td><code>$border-width</code></td>
        <td>
          Table cell border width.
        </td>
      </tr>
      <tr>
        <td><code>$table-border-color</code></td>
        <td>boolean</td>
        <td><code>$component-border-color</code></td>
        <td>
          Table cell border color.
        </td>
      </tr>
      <tr>
        <td><code>$table-head-border-width</code></td>
        <td>boolean</td>
        <td><code>2 * $table-border-width</code></td>
        <td>
          Border width between table header and body.
        </td>
      </tr>
      <tr>
        <td><code>$table-head-border-color</code></td>
        <td>string</td>
        <td><code>null</code></td>
        <td>
          Border color between table header and body.
        </td>
      </tr>
      <tr>
        <td><code>$table-body-border-width</code></td>
        <td>boolean</td>
        <td><code>2 * $table-border-width</code></td>
        <td>
          Border width between sibling table bodies.
        </td>
      </tr>
      <tr>
        <td><code>$table-body-border-color</code></td>
        <td>string</td>
        <td><code>null</code></td>
        <td>
          Border color between table sibling table bodies.
        </td>
      </tr>
      <tr>
        <td><code>$table-foot-border-width</code></td>
        <td>boolean</td>
        <td><code>2 * $table-border-width</code></td>
        <td>
          Border width between table body and footer.
        </td>
      </tr>
      <tr>
        <td><code>$table-foot-border-color</code></td>
        <td>string</td>
        <td><code>null</code></td>
        <td>
          Border color between table body and footer.
        </td>
      </tr>
      <tr>
        <td><code>$table-striped-selector</code></td>
        <td>boolean</td>
        <td><code>odd</code></td>
        <td>
          Selector for table striping.
        </td>
      </tr>
      <tr>
        <td><code>$table-striped-box-shadow</code></td>
        <td>boolean</td>
        <td><code>inset 0 0 0 999rem rgba($uibase-900, .075)</code></td>
        <td>
          Shadow overlay for striped tables.
        </td>
      </tr>
      <tr>
        <td><code>$table-striped-alt-box-shadow</code></td>
        <td>boolean</td>
        <td><code>inset 0 0 0 999rem rgba($white, .125)</code></td>
        <td>
          Alternate shadow overlay for striped tables.
        </td>
      </tr>
      <tr>
        <td><code>$table-hover-box-shadow</code></td>
        <td>boolean</td>
        <td><code>inset 0 0 0 999rem rgba($uibase-900, .125)</code></td>
        <td>
          Shadow overlay for hoverable tables.
        </td>
      </tr>
      <tr>
        <td><code>$table-hover-alt-box-shadow</code></td>
        <td>boolean</td>
        <td><code>inset 0 0 0 999rem rgba($white, .2)</code></td>
        <td>
          Alternate shadow overlay for hoverable tables.
        </td>
      </tr>
      <tr>
        <td><code>$table-scroll-breakpoints</code></td>
        <td>list</td>
        <td><code>map-keys($grid-breakpoints)</code></td>
        <td>
          Breakpoint list for responsive scrollable tables.
        </td>
      </tr>
      <tr>
        <td><code>$table-themes</code></td>
        <td>map</td>
        <td><code>()</code></td>
        <td>
          Map of color schemes for tables.
        </td>
      </tr>
      <tr>
        <td><code>$table-colors</code></td>
        <td>list</td>
        <td><code>$base-colors</code></td>
        <td>
          Colors to mix and merge into <code>$table-themes</code>
        </td>
      </tr>
      <tr>
        <td><code>$table-levels</code></td>
        <td>map</td>
        <td><code>$level-context</code></td>
        <td>
          Levels to mix table colors with.
        </td>
    </tr>
    </tbody>
  </table>
</div>

### Mixins

Here are the mixins related to tables that we use to help generate our CSS.  You can also uses these mixins to generate your own custom components or utilities.

#### table-row-variant()

Build a color variant to be applied to a table row, `<tr>`, element.

{% capture highlight %}
@include table-row-variant($state, $bg, $hover-bg);
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
        <td><code>$state</code></td>
        <td>string</td>
        <td><code>''</code></td>
        <td>
          The value appended to generate the class <code>.table-#{$state}</code>.
        </td>
      </tr>
      <tr>
        <td><code>$bg</code></td>
        <td>string</td>
        <td><code>none</code></td>
        <td>
          Background color for a table row and it's direct <code>&lt;th&gt;</code> and <code>&lt;td&gt;</code> cells.
        </td>
      </tr>
      <tr>
        <td><code>$hover-bg</code></td>
        <td>string</td>
        <td><code>none</code></td>
        <td>
          Hover activated background color for a table row and it's direct <code>&lt;th&gt;</code> and <code>&lt;td&gt;</code> cells, when used in a table with <code>.table-hover</code>.
        </td>
      </tr>
    </tbody>
  </table>
</div>

#### table-scroll()

Enable horizontal scrolling on a `<table>` element.

{% capture highlight %}
@include table-scroll();
{% endcapture %}
{% renderHighlight highlight, "sass" %}