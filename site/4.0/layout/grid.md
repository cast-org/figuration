---
layout: doc
title: Grid System
description: A powerful mobile-first grid system for building layouts of all shapes and sizes. Based on a twelve column layout with multiple responsive tiers, Sass mixins, and predefined classes.
group: layout
toc: true
---

## How It Works

Figuration includes a powerful mobile-first grid system for building layouts of all shapes and sizes. It's based on a 12 column layout and has multiple tiers, one for each [media query range]({{ site.path }}/{{ version.docs }}/layout/overview/#responsive-breakpoints). You can use it with Sass mixins or our predefined classes.

At a high level, here's how the grid system works:

- There are three major components—containers, rows, and columns.
- The grid is built with [flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes) and is fully responsive.
- Containers provide a means to center and horizontally pad your site's contents. Use `.container` for a responsive fixed width or `.container-fluid` for `width: 100%` across all viewport and device sizes.
- Rows are wrappers for columns. Each column has horizontal `padding` (called a gutter) for controlling the space between them. This `padding` is then counteracted on the rows with negative margins. This way, all the content in your columns is visually aligned down the left side (right side in `rtl` mode).
- In a grid layout, content must be placed within columns and only columns may be immediate children of rows.
- Thanks to flexbox, grid columns without a specified `width` will automatically layout as equal width columns. For example, four instances of `.col-sm` will each automatically be 25% wide from the small breakpoint and up. See the [auto-layout columns](#auto-layout-columns) section for more examples.
- Column classes indicate the number of columns you'd like to use out of the possible 12 per row. So, if you want three equal-width columns across, you would use `.col-4`.
- Column `width`s are set in percentages, so they're always fluid and sized relative to their parent element.
- Columns have horizontal `padding` to create the gutters between individual columns.
- You can remove the `margin` from rows and `padding` from columns with `.g-0` on the `.row`.
- To make the grid responsive, there are five grid breakpoints, one for each [responsive breakpoint]({{ site.path }}/{{ version.docs }}/layout/overview/#responsive-breakpoints): all breakpoints (extra small), small, medium, large, and extra large.
- Grid breakpoints are based on minimum width media queries, meaning **they apply to that one breakpoint and all those above it** (e.g., `.col-sm-4` applies to small, medium, large, and extra large devices, but not the first `xs` breakpoint).
- You can use predefined grid classes (like `.col-4`) or [Sass mixins](#mixins) for more semantic markup.
- The horizontal gutter width can be changed with `.gx-*` classes like `.gx-1` (smaller horizontal gutters) or `.gx-xl-2` (larger horizontal gutters on viewports larger than the `xl` breakpoint).
- The vertical gutter width can be changed with `.gy-*` classes like `.gy-1` (smaller vertical gutters) or `.gy-xl-2` (larger vertical gutters on viewports larger than the `xl` breakpoint). To achieve vertical gutters, additional margin is added to the top of each column. The `.row` counteracts this margin to the top with a negative margin.
- The gutter width in both directions can be changed with `.g-*` classes like `.g-1` (smaller gutters) or `.g-xl-2` (larger gutters on viewports larger than the `xl` breakpoint).


If you need a reference for working with flexbox, there is an excellent resource over at CSS Tricks with [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).

Also, be aware of the limitations and [bugs around flexbox](https://github.com/philipwalton/flexbugs), like the [inability to use some HTML elements as flex containers](https://github.com/philipwalton/flexbugs#9-some-html-elements-cant-be-flex-containers).

Sounds good? Great, let's move on to seeing all that in an example.

## Quick Start Example

This example creates three equal-width columns on small, medium, large, and extra large devices using our predefined grid classes. Those columns are centered in the page with the parent `.container`.

Examples further down the page add some color, padding, and borders, to the rows and columns to give a better visual example of their relationship.  These do not appear in the base Figuration grid.

{% capture example %}
<div class="container">
  <div class="row">
    <div class="col-sm-4">
      First column
    </div>
    <div class="col-sm-4">
      Second column
    </div>
    <div class="col-sm-4">
      Third column
    </div>
  </div>
</div>
{% endcapture %}
{% renderExample example %}

## Grid Options

See how aspects of the Figuration grid system work across multiple devices with this handy table.

The example pixel values are calculated based upon assumption where the average user has a 16px root font size.

<div class="table-scroll">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th scope="col"></th>
        <th scope="col" class="text-center">
          Extra small<br>
          <small>&lt;576px</small><br>
          <small>&lt;36em</small>
        </th>
        <th scope="col" class="text-center">
          Small<br>
          <small>&ge;576px</small><br>
          <small>&ge;36em</small>
        </th>
        <th scope="col" class="text-center">
          Medium<br>
          <small>&ge;768px</small><br>
          <small>&ge;48em</small>
        </th>
        <th scope="col" class="text-center">
          Large<br>
          <small>&ge;992px</small><br>
          <small>&ge;62em</small>
        </th>
        <th scope="col" class="text-center">
          Extra large<br>
          <small>&ge;1200px</small><br>
          <small>&ge;75em</small>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th class="text-nowrap" scope="row">Max container width</th>
        <td>None (auto)</td>
        <td>544px (33.75rem)</td>
        <td>720px (45rem)</td>
        <td>960px (60rem)</td>
        <td>1152px (72rem)</td>
      </tr>
      <tr>
        <th class="text-nowrap" scope="row">Class prefix</th>
        <td><code>.col-</code></td>
        <td><code>.col-sm-</code></td>
        <td><code>.col-md-</code></td>
        <td><code>.col-lg-</code></td>
        <td><code>.col-xl-</code></td>
      </tr>
      <tr>
        <th class="text-nowrap" scope="row"># of columns</th>
        <td colspan="5">12</td>
      </tr>
      <tr>
        <th class="text-nowrap" scope="row">Gutter width</th>
        <td colspan="5">2rem / 32px (16px on each side of a column)</td>
      </tr>
      <tr>
        <th class="text-nowrap" scope="row">Nestable</th>
        <td colspan="5">Yes</td>
      </tr>
      <tr>
        <th class="text-nowrap" scope="row">Offsets</th>
        <td colspan="5">Yes</td>
      </tr>
      <tr>
        <th class="text-nowrap" scope="row">Column ordering</th>
        <td colspan="5">Yes</td>
      </tr>
    </tbody>
  </table>
</div>

## Auto-Layout Columns

Utilize breakpoint-specific column classes for easy column sizing without an explicit numbered class like `.col-sm-6`.

### Equal Width

Equal-width columns are easliy done by adding any number of `.col-{breakpoint}`s for each breakpoint you need and every column will be the same width.

For example, here's are some grid layouts that apply to every device and viewport possible, from `xs` to `xl`.

{% capture example %}
<div class="container">
  <div class="row">
    <div class="col">
      1 of 2
    </div>
    <div class="col">
      1 of 2
    </div>
  </div>

  <div class="row">
    <div class="col">
      1 of 3
    </div>
    <div class="col">
      1 of 3
    </div>
    <div class="col">
      1 of 3
    </div>
  </div>

  <div class="row no-gutters">
    <div class="col">Columns</div>
    <div class="col">with no</div>
    <div class="col">gutters</div>
  </div>
</div>
{% endcapture %}
{% renderExample example, "cf-example-row" %}

### Controlling One Column Width

Auto-layout for flexbox grid columns also means you can set the width of one column and have the sibling columns automatically resize around it. You may use predefined grid classes (as shown below), grid mixins, or inline widths.

Note that the other columns will resize no matter the width of the center column.

{% capture example %}
<div class="container">
  <div class="row">
    <div class="col">
      1 of 3
    </div>
    <div class="col-6">
      2 of 3 (wider)
    </div>
    <div class="col">
      3 of 3
    </div>
  </div>

  <div class="row">
    <div class="col">
      1 of 3
    </div>
    <div class="col-5">
      2 of 3 (wider)
    </div>
    <div class="col">
      3 of 3
    </div>
  </div>
</div>
{% endcapture %}
{% renderExample example, "cf-example-row" %}

### Variable Width Content

Use `col-{breakpoint}-auto` classes to size columns based on the natural width of their content. Use these classes in conjunction with [horizontal alignment](#horizontal-alignment) classes for centering layouts with uneven column sizes as viewport width changes.

{% capture example %}
<div class="container">
  <div class="row flex-md-center">
    <div class="col-lg-2">
      1 of 3
    </div>
    <div class="col-md-auto">
      Variable width content
    </div>
    <div class="col-lg-2">
      3 of 3
    </div>
  </div>

  <div class="row">
    <div class="col">
      1 of 3
    </div>
    <div class="col-md-auto">
      Variable width content
    </div>
    <div class="col-lg-2">
      3 of 3
    </div>
  </div>
</div>
{% endcapture %}
 {% renderExample example, "cf-example-row" %}

## Responsive Classes

Figuration's grid includes five tiers of predefined classes for building complex responsive layouts. Customize the size of your columns on extra small, small, medium, large, or extra large devices however you see fit.

### All Breakpoints

For grids that are the same from the smallest of devices to the largest, use the `.col` and `.col-*` classes. Specify a numbered class when you need a particularly sized column; otherwise, feel free to stick to `.col`.

{% capture example %}
<div class="container">
  <div class="row">
    <div class="col">.col</div>
    <div class="col">.col</div>
    <div class="col">.col</div>
    <div class="col">.col</div>
  </div>

  <div class="row">
    <div class="col-8">.col-8</div>
    <div class="col-4">.col-4</div>
  </div>
</div>
{% endcapture %}
{% renderExample example, "cf-example-row" %}

### Stacked to Horizontal

Using a single set of `.col-sm-*` classes, you can create a basic grid system that starts out stacked and becomes horizontal at the small breakpoint (`sm`).

{% capture example %}
<div class="container">
  <div class="row">
    <div class="col-sm-8">.col-sm-8</div>
    <div class="col-sm-4">.col-sm-4</div>
  </div>

  <div class="row">
    <div class="col-sm">.col-sm</div>
    <div class="col-sm">.col-sm</div>
    <div class="col-sm">.col-sm</div>
  </div>
</div>
{% endcapture %}
{% renderExample example, "cf-example-row" %}

### Mix and Match

Don't want your columns to simply stack in some grid tiers. Use a combination of different classes for each tier as needed. See the example below for a better idea of how it all works.

{% capture example %}
<div class="container">
  <!-- Stack the columns on mobile by making one full-width and the other half-width -->
  <div class="row">
    <div class="col-md-8">.col-md-8</div>
    <div class="col-6 col-md-4">.col-6 .col-md-4</div>
  </div>

  <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
  <div class="row">
    <div class="col-6 col-md-4">.col-6 .col-md-4</div>
    <div class="col-6 col-md-4">.col-6 .col-md-4</div>
    <div class="col-6 col-md-4">.col-6 .col-md-4</div>
  </div>

  <!-- Columns are always 50% wide, on mobile and desktop -->
  <div class="row">
    <div class="col-6">.col-6</div>
    <div class="col-6">.col-6</div>
  </div>
</div>
{% endcapture %}
{% renderExample example, "cf-example-row" %}

### Row Columns

Use the responsive `.row-cols-*` classes to quickly set the number of columns that best render your content and layout. Whereas normal `.col-*` classes apply to the individual columns (e.g., `.col-md-4`), the row columns classes are set on the parent `.row` as a shortcut. With `.row-cols-*-auto` you can give the columns their natural width.

Use these row columns classes to quickly create basic grid layouts or to control your card layouts.

{% capture example %}
<div class="container">
  <div class="row row-cols-2">
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
  </div>
</div>
{% endcapture %}
{% renderExample example, "cf-example-row" %}

{% capture example %}
<div class="container">
  <div class="row row-cols-3">
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
  </div>
</div>
{% endcapture %}
{% renderExample example, "cf-example-row" %}

{% capture example %}
<div class="container">
  <div class="row row-cols-auto">
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
  </div>
</div>
{% endcapture %}
{% renderExample example, "cf-example-row" %}

{% capture example %}
<div class="container">
  <div class="row row-cols-4">
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
  </div>
</div>
{% endcapture %}
{% renderExample example, "cf-example-row" %}

{% capture example %}
<div class="container">
  <div class="row row-cols-4">
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col-6">Column</div>
    <div class="col">Column</div>
  </div>
</div>
{% endcapture %}
{% renderExample example, "cf-example-row" %}

{% capture example %}
<div class="container">
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
  </div>
</div>
{% endcapture %}
{% renderExample example, "cf-example-row" %}

You can also use the accompanying Sass mixin, `row-cols()`:

{% capture highlight %}
.element {
  // Three columns to start
  @include row-cols(3);

  // Five columns from medium breakpoint up
  @include media-breakpoint-up(md) {
    @include row-cols(5);
  }
}
{% endcapture %}
{% renderHighlight highlight, "sass" %}

## Gutters

Gutters can be responsively adjusted by breakpoint-specific gutter classes in as well horizontal, vertical and both directions. By default, `.row`s have a horizontal gutter of `2rem`. Removing this default gutter is possible by adding the `.g-0` class.

### Changing Gutters

Classes are built from the `$gutters` setting.

{% capture highlight %}
$grid-gutter-width: 2rem;
$gutters: (
  "0":    0,
  "0_5":  .5rem,
  "1":    1rem,
  "1_5":  1.5rem,
  "2":    2rem,
  "2_5":  2.5rem
);
{% endcapture %}
{% renderHighlight highlight, "sass" %}

### Horizontal Gutters

`.gx-*` classes can be used to control the horizontal gutter widths. The `.container` or `.container-fluid` parent may need to be adjusted if larger gutters are used too to avoid unwanted overflow, using a matching padding utility. For example, in the following example we've increased the padding with `.px-1_5`:

{% capture example %}
<div class="container px-1_5">
  <div class="row gx-2_5">
    <div class="col-6">
     <div class="p-0_5 bg-light border">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-0_5 bg-light border">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-0_5 bg-light border">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-0_5 bg-light border">Custom column padding</div>
    </div>
  </div>
</div>
{% endcapture %}
{% renderExample example%}

An alternative solution is to add a wrapper around the `.row` with the `.overflow-hidden` class:

{% capture example %}
<div class="container overflow-hidden">
  <div class="row gx-2_5">
    <div class="col-6">
     <div class="p-0_5 bg-light border">Column overflow hidden</div>
    </div>
    <div class="col-6">
      <div class="p-0_5 bg-light border">Column overflow hidden</div>
    </div>
    <div class="col-6">
      <div class="p-0_5 bg-light border">Column overflow hidden</div>
    </div>
    <div class="col-6">
      <div class="p-0_5 bg-light border">Column overflow hidden</div>
    </div>
  </div>
</div>
{% endcapture %}
{% renderExample example %}

### Vertical Gutters

`.gy-*` classes can be used to control the vertical gutter widths. Like the horizontal gutters, the vertical gutters can cause some overflow below the `.row` at the end of a page. If this occurs, you add a wrapper around `.row` with the `.overflow-hidden` class:

{% capture example %}
<div class="container overflow-hidden">
  <div class="row gy-2">
    <div class="col-6">
      <div class="p-0_5 bg-light border">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-0_5 bg-light border">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-0_5 bg-light border">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-0_5 bg-light border">Custom column padding</div>
    </div>
  </div>
</div>
{% endcapture %}
{% renderExample example %}

### Horizontal & Vertical Gutters

`.g-*` classes can be used to control the horizontal gutter widths, for the following example we use a smaller gutter width, so there won't be a need to add the `.overflow-hidden` wrapper class.

{% capture example %}
<div class="container">
  <div class="row g-0_5">
    <div class="col-6">
      <div class="p-0_5 border bg-light">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-0_5 border bg-light">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-0_5 border bg-light">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-0_5 border bg-light">Custom column padding</div>
    </div>
  </div>
</div>
{% endcapture %}
{% renderExample example %}

### Row Columns Gutters

Gutter classes can also be added to [row columns](#row-columns). In the following example, we use responsive row columns and responsive gutter classes.

{% capture example %}
<div class="container">
  <div class="row row-cols-2 row-cols-lg-5 g-0_5 g-lg-1">
    <div class="col">
      <div class="p-0_5 border bg-light">Row column</div>
    </div>
    <div class="col">
      <div class="p-0_5 border bg-light">Row column</div>
    </div>
    <div class="col">
      <div class="p-0_5 border bg-light">Row column</div>
    </div>
    <div class="col">
      <div class="p-0_5 border bg-light">Row column</div>
    </div>
    <div class="col">
      <div class="p-0_5 border bg-light">Row column</div>
    </div>
    <div class="col">
      <div class="p-0_5 border bg-light">Row column</div>
    </div>
    <div class="col">
      <div class="p-0_5 border bg-light">Row column</div>
    </div>
    <div class="col">
      <div class="p-0_5 border bg-light">Row column</div>
    </div>
    <div class="col">
      <div class="p-0_5 border bg-light">Row column</div>
    </div>
    <div class="col">
      <div class="p-0_5 border bg-light">Row column</div>
    </div>
  </div>
</div>
{% endcapture %}
{% renderExample example %}

### No Gutters

The gutters between columns in our default, predefined grid classes can be removed with `.g-0`. This removes the negative `margin`s from `.row` and the horizontal `padding` from all immediate children columns.

**Need an edge-to-edge design?** Drop the parent `.container` or `.container-fluid`.

In practice, here's how it looks. Note you can continue to use this with all other predefined grid classes (including column widths, responsive tiers, reorders, and more).

{% capture example %}
<div class="row no-gutters">
  <div class="col-sm-6 col-md-8">.col-sm-6 .col-md-8</div>
  <div class="col-6 col-md-4">.col-6 .col-md-4</div>
</div>
{% endcapture %}
{% renderExample example, "cf-example-row" %}

### Custom Gutters

Gutters can also be responsively adjusted by breakpoint-specific padding and negative margin utility classes. To change the gutters in a given row, pair a [negative margin utility]({{ site.path }}/{{ version.docs }}/utilities/spacing/#negative-margins) on the `.row` and matching [padding utilities]({{ site.path }}/{{ version.docs }}/utilities/spacing/) on the `.col`s.

Here is an example of customizing the grid at the large (`lg`) breakpoint and above. The the `.col` horizontal padding is increased with `.px-lg-2` and then counteracted that with negative horizontal margin `.mx-lg-n2` on the parent `.row`.

{% capture example %}
<div class="container">
  <div class="row mx-md-n2">
    <div class="col px-md-2">Custom column padding</div>
    <div class="col px-md-2">Custom column padding</div>
  </div>
</div>
{% endcapture %}
{% renderExample example, "cf-example-row" %}

In some cases, you may also have to adjust the padding on the parent container of the `.row` element to prevent horizontal scrollbars from occuring.  For example, using the custom negative margin example above, you may find the need to use `.px-lg-2` on the parent `.container-fluid`.  Again, an alternative solution is to add a wrapper around the `.row` with the `.overflow-hidden` class.

{% capture example %}
<div class="container-fluid px-md-2">
  <div class="row mx-md-n2">
    <div class="col px-md-2">Custom horizontal column padding</div>
    <div class="col px-md-2">Custom horizontal column padding</div>
  </div>
</div>
{% endcapture %}
{% renderExample example, "cf-example-row" %}

## Alignment

Use [Flexbox alignment utilities]({{ site.path }}/{{ version.docs }}/utilities/flexbox/) to vertically and horizontally align columns.

**Internet Explorer 10 and 11 do not support vertical alignment of flex items when the flex container has a `min-height`.** [See Flexbugs #3 for more details.](https://github.com/philipwalton/flexbugs#flexbug-3)

### Vertical Alignment

{% capture example %}
<div class="container">
  <div class="row flex-items-start">
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
  </div>

  <div class="row flex-items-center">
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
  </div>

  <div class="row flex-items-end">
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
  </div>
</div>
{% endcapture %}
{% renderExample example, "cf-example-row cf-example-row-grid cf-example-row-flex-v" %}

{% capture example %}
<div class="container">
  <div class="row">
    <div class="col flex-self-start">
      One of three columns
    </div>
    <div class="col flex-self-center">
      One of three columns
    </div>
    <div class="col flex-self-end">
      One of three columns
    </div>
  </div>
</div>
{% endcapture %}
{% renderExample example, "cf-example-row cf-example-row-grid cf-example-row-flex-v" %}

### Horizontal Alignment

{% capture example %}
<div class="container">
  <div class="row flex-start">
    <div class="col-4">
      One of two columns
    </div>
    <div class="col-4">
      One of two columns
    </div>
  </div>

  <div class="row flex-center">
    <div class="col-4">
      One of two columns
    </div>
    <div class="col-4">
      One of two columns
    </div>
  </div>

  <div class="row flex-end">
    <div class="col-4">
      One of two columns
    </div>
    <div class="col-4">
      One of two columns
    </div>
  </div>

  <div class="row flex-around">
    <div class="col-4">
      One of two columns
    </div>
    <div class="col-4">
      One of two columns
    </div>
  </div>

  <div class="row flex-between">
    <div class="col-4">
      One of two columns
    </div>
    <div class="col-4">
      One of two columns
    </div>
  </div>

  <div class="row flex-evenly">
    <div class="col-4">
      One of two columns
    </div>
    <div class="col-4">
      One of two columns
    </div>
  </div>
</div>
{% endcapture %}
{% renderExample example, "cf-example-row" %}

### Column Wrapping

If more than 12 columns are placed within a single row, each group of extra columns will, as one unit, wrap onto a new line.

{% capture example %}
<div class="container">
  <div class="row">
    <div class="col-9">.col-9</div>
    <div class="col-4">.col-4<br>Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.</div>
    <div class="col-6">.col-6<br>Subsequent columns continue along the new line.</div>
  </div>
</div>
{% endcapture %}
{% renderExample example, "cf-example-row" %}

### Column Resets

Resetting, or breaking, columns to a new line in flexbox requires a small hack: add an element with `width: 100%` wherever you want to wrap your columns to a new line. This can also be accomplished with multiple `.row`s.  You may need to try both implementation methods to see which works best for your layout.

{% capture example %}
<div class="container">
  <div class="row">
    <div class="col-6 col-md-3">.col-6 .col-md-3</div>
    <div class="col-6 col-md-3">.col-6 .col-md-3<br>taller</div>

    <!-- Force next columns to break to a new line -->
    <div class="w-100"></div>

    <div class="col-6 col-md-3">.col-6 .col-md-3</div>
    <div class="col-6 col-md-3">.col-6 .col-md-3</div>
  </div>
</div>
{% endcapture %}
{% renderExample example, "cf-example-row" %}

You can also apply a break at specific breakpoints with our [responsive display utilities]({{ site.path }}/{{ version.docs }}/utilities/display/).

{% capture example %}
<div class="container">
  <div class="row">
    <div class="col-6 col-md-4">.col-6 .col-md-4</div>
    <div class="col-6 col-md-4">.col-6 .col-md-4<br>taller</div>

    <!-- Force next columns to break to a new line at md breakpoint and up-->
    <div class="w-100 d-none d-md-block"></div>

    <div class="col-6 col-md-4">.col-6 .col-md-4</div>
    <div class="col-6 col-md-4">.col-6 .col-md-4</div>
  </div>
</div>
{% endcapture %}
{% renderExample example, "cf-example-row" %}

## Reordering

### Flex Order

Use [flexbox order utilities]({{ site.path }}/{{ version.docs }}/utilities/flexbox/#order) for controlling the **visual order** of your content.

{% capture example %}
<div class="container">
  <div class="row">
    <div class="col">
      First, but unordered
    </div>
    <div class="col order-last">
      Second, but last
    </div>
    <div class="col order-first">
      Third, but first
    </div>
  </div>
</div>
{% endcapture %}
{% renderExample example, "cf-example-row" %}

Order utilities are also available in responsive order values from values `0` through `6` .

{% capture example %}
<div class="container">
  <div class="row">
    <div class="col order-2">
      First, but second
    </div>
    <div class="col order-6">
      Second, but last
    </div>
    <div class="col order-1">
      Third, but first
    </div>
  </div>
</div>
{% endcapture %}
{% renderExample example, "cf-example-row" %}

### Offsetting Columns

You can offset grid columns in two ways: our responsive `.offset-` grid classes and our [margin utilities]({{ site.path }}/{{ version.docs }}/utilities/spacing). Grid classes are sized to match columns while margins are more useful for quick layouts where the width of the offset is variable.

#### Offset Classes

Move columns to the right using `.offset-*` classes. These classes increase the left margin of a column by `*` columns. For example, `.offset-md-4` moves a column over four columns on medium and larger devices.

{% capture example %}
<div class="container">
  <div class="row">
    <div class="col-md-4">.col-md-4</div>
    <div class="col-md-4 offset-md-4">.col-md-4 .offset-md-4</div>
  </div>
  <div class="row">
    <div class="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
    <div class="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
  </div>
  <div class="row">
    <div class="col-md-6 offset-md-3">.col-md-6 .offset-md-3</div>
  </div>
</div>
{% endcapture %}
{% renderExample example, "cf-example-row" %}

In addition to column clearing at responsive breakpoints, you may need to reset offsets. See this in action in [the grid example]({{ site.path }}/{{ version.docs }}/examples/grid/).

{% capture example %}
<div class="container">
  <div class="row">
    <div class="col-sm-5 col-md-6">.col-sm-5 .col-md-6</div>
    <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0">.col-sm-5 .offset-sm-2 .col-md-6 .offset-md-0</div>
  </div>
  <div class="row">
    <div class="col-sm-6 col-md-5 col-lg-6">.col-sm-6 .col-md-5 .col-lg-6</div>
    <div class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">.col-sm-6 .col-md-5 .offset-md-2 .col-lg-6 .offset-lg-0</div>
  </div>
</div>
{% endcapture %}
{% renderExample example, "cf-example-row" %}

#### Margin Utilities

You can also use margin utilities like `.ms-auto`, and `.me-auto`, to force sibling columns away from one another.

{% capture example %}
<div class="container">
  <div class="row">
    <div class="col-md-4">.col-md-4</div>
    <div class="col-md-4 ms-auto">.col-md-4 .ms-auto</div>
  </div>
  <div class="row">
    <div class="col-md-3 ms-md-auto">.col-md-3 .ms-md-auto</div>
    <div class="col-md-3 ms-md-auto">.col-md-3 .ms-md-auto</div>
  </div>
  <div class="row">
    <div class="col-auto me-auto">.col-auto .me-auto</div>
    <div class="col-auto">.col-auto</div>
  </div>
</div>
{% endcapture %}
{% renderExample example, "cf-example-row" %}

## Nesting

To nest your content with the default grid, add a new `.row` and set of `.col-sm-*` columns within an existing `.col-sm-*` column. Nested rows should include a set of columns that add up to 12 or fewer (it is not required that you use all 12 available columns).

{% capture example %}
<div class="container">
  <div class="row">
    <div class="col-sm-9">
      Level 1: .col-sm-9
      <div class="row">
        <div class="col-8 col-sm-6">
          Level 2: .col-8 .col-sm-6
        </div>
        <div class="col-4 col-sm-6">
          Level 2: .col-4 .col-sm-6
        </div>
      </div>
    </div>
  </div>
</div>
{% endcapture %}
{% renderExample example, "cf-example-row" %}

## Customizing the Grid

Using our built-in grid Sass variables and maps, it's possible to completely customize the predefined grid classes. Change the number of tiers, the media query dimensions, the container widths, and the grid gutter widths—then recompile.

### Columns and Gutters

The number of grid columns and their horizontal padding (aka, gutters) can be modified via Sass variables. `$grid-columns` is used to generate the widths (in percent) of each individual column while `$grid-gutter-width` sets the width for the column gutters.

{% capture highlight %}
$grid-columns: 12;
$grid-gutter-width: 2rem;
{% endcapture %}
{% renderHighlight highlight, "sass" %}

### Grid Tiers

Moving beyond the columns themselves, you may also customize the number of grid tiers. If you wanted just four grid tiers, you would update the `$grid-breakpoints` and `$container-max-widths` to something like this:

{% capture highlight %}
$grid-breakpoints: (
  xs: 0,
  sm: bp-to-em(480px),
  md: bp-to-em(768px),
  lg: bp-to-em(1024px)
);

$container-max-widths: (
  sm: rem(420px),
  md: rem(720px),
  lg: rem(940px)
);
{% endcapture %}
{% renderHighlight highlight, "sass" %}

Save your changes and recompile to have a brand new set of predefined grid classes for column widths and offsets. Responsive visibility utilities will also be updated to use the custom breakpoints.

If the desire is to have only a single breakpoint for a non-responsive site or application, the following setting can be used:

{% capture highlight %}
$grid-breakpoints: (xs: 0);
{% endcapture %}
{% renderHighlight highlight, "sass" %}

## Standalone Column Classes

The `.col-*` classes can also be used outside a `.row` to give an element a specific width. Whenever column classes are used as non direct children of a row, the paddings are omitted.

{% capture example%}
<div class="col-3 bg-light p-0_5 border">
  .col-3: width of 25%
</div>
<div class="col-sm-9 bg-light p-0_5 border">
  .col-sm-9: width of 75% above sm breakpoint
</div>
{% endcapture %}
{% renderExample example %}

The classes can be used together with utilities to create responsive floated images. Make sure to wrap the content in a [`.clearfix`]({{< docsref "/helpers/clearfix" >}}) wrapper to clear the float if the text is shorter.

{% capture example%}
<div class="clearfix">
  <img class="col-md-6 float-md-end mb-0_5 ms-md-0_5" src="{{ site.path }}/assets/{{ version.docs }}/video/niagara_falls.jpg" alt="Responsive floated image">

  <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue. Fusce dapibus, tellus ac cursus commodo, tortor mauris paddenstoel nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  <p>Sed posuere consectetur est at lobortis. Etiam porta sem malesuada magna mollis euismod. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Id nullam tellus relem amet commodo telemque olemit. Sed posuere consectetur est at lobortis. Maecenas sed diam eget risus varius blandit sit amet non magna. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
  <p>Donec id elit non mi porta gravida at eget metus. Aenean eu leo quam. Pellentesque ornare sem lantaarnpaal quam venenatis vestibulum. Donec sed odio dui. Maecenas faucibus mollis interdum. Nullam quis risus eget urna salsa tequila vel eu leo. Donec id elit non mi porta gravida at eget metus.</p>
</div>
{% endcapture %}
{% renderExample example %}


## Sass Variables and Mixins

When using Figuration's source Sass files, you have the option of using Sass variables and mixins to create custom, semantic, and responsive page layouts. Our predefined grid classes use these same variables and mixins to provide a whole suite of ready-to-use classes for fast responsive layouts.

### Variables

Variables and maps determine the number of columns, the gutter width, and the media query point at which to begin floating columns. We use these to generate the predefined grid classes documented above, as well as for the custom mixins listed below.

Some Sass functions are in use here.  Simply put `bp-to-em()` converts a pixel value to em assuming 16px root font size, while `rem()` converts a pixel value to rem, but checks the defined `$font-size-root` variable in the Sass and uses that for conversion.

{% capture highlight %}
$grid-columns:      12;

$grid-breakpoints: (
  // Extra small screen / phone
  xs: 0,
  // Small screen / phone
  sm: bp-to-em(576px),
  // Medium screen / tablet
  md: bp-to-em(768px),
  // Large screen / desktop
  lg: bp-to-em(992px),
  // Extra large screen / wide desktop
  xl: bp-to-em(1200px)
);

$container-max-widths: (
  sm: rem(544px),
  md: rem(720px),
  lg: rem(940px),
  xl: rem(1140px)
);

$grid-gutter-width: 2rem;

$grid-row-columns: 6;
{% endcapture %}
{% renderHighlight highlight, "sass" %}

The available [Customization options]({{ site.path }}/{{ version.docs }}/get-started/options/), or Sass variables, that can be customized for the grid.

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
        <td><code>$enable-grid-classes</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the grid layout classes.
          Smaller segements of the grid layout classes can be disabled with the following <code>$enable-*</code> variables.
        </td>
      </tr>
      <tr>
        <td><code>$enable-grid-row-cols</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the responsive row columns layout classes.
        </td>
      </tr>
      <tr>
        <td><code$enable-grid-responsive-containers</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the responsive container classes.
        </td>
      </tr>
      <tr>
        <td><code>$enable-grid-responsive-gutters</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the responsive gutter classes.
        </td>
      </tr>
      <tr>
        <td><code>$grid-breakpoints</code></td>
        <td>map</td>
        <td><pre><code>(
    xs: 0,
    sm: bp-to-em(576px),
    md: bp-to-em(768px),
    lg: bp-to-em(992px),
    xl: bp-to-em(1200px)
)</code></pre></td>
        <td>
          Maximum container widths for given breakpoints.  The <code>bp-to-em()</code> function converts a pixel value to an <code>em</code> value.
        </td>
      </tr>
      <tr>
        <td><code>$responsive-container-breakpoints</code></td>
        <td>list</td>
        <td><code>map-keys($grid-breakpoints)</code></td>
        <td>
          Subset of breakpoints to generate responsive container classes for.
        </td>
      </tr>
      <tr>
        <td><code>$responsive-gutter-breakpoints</code></td>
        <td>list</td>
        <td><code>map-keys($grid-breakpoints)</code></td>
        <td>
          Subset of breakpoints to generate responsive gutter classes for.
        </td>
      </tr>
      <tr>
        <td><code>$container-max-widths</code></td>
        <td>map</td>
        <td><pre><code>(
    sm: rem(544px),
    md: rem(720px),
    lg: rem(960px),
    xl: rem(1152px)
)</code></pre></td>
        <td>
          Grid breakpoints widths.  The <code>rem()</code> function converts a pixel value to a <code>rem</code> value.
        </td>
      </tr>
      <tr>
        <td><code>$row-columns-breakpoints</code></td>
        <td>list</td>
        <td><code>map-keys($grid-breakpoints)</code></td>
        <td>
          Breakpoint list for the responsive row columns.
        </td>
      </tr>
      <tr>
        <td><code>$grid-columns</code></td>
        <td>integer</td>
        <td><code>12</code></td>
        <td>
          The number of columns to build the grid with.
        </td>
      </tr>
      <tr>
        <td><code>$grid-gutter-width</code></td>
        <td>string</td>
        <td><code>2rem</code></td>
        <td>
          The visual width to apply between columns.  This is a value twice the size of the horizontal margins for each column.
        </td>
      </tr>
      <tr>
        <td><code>$grid-row-columns</code></td>
        <td>integer</td>
        <td><code>6</code></td>
        <td>
          The maximum number of columns to build the responsive grid column classes with.
        </td>
      </tr>
      <tr>
        <td><code>$gutters</code></td>
        <td>map</td>
        <td><pre><code>(
    "0":    0,
    "0_5":  .5rem,
    "1":    1rem,
    "1_5":  1.5rem,
    "2":    2rem,
    "2_5":  2.5rem
)</code></pre></td>
        <td>
          Map of gutter append names and sizes to be generated.
        </td>
      </tr>
    </tbody>
  </table>
</div>

### Mixins

Mixins are used in conjunction with the grid variables to generate semantic CSS for individual grid columns.

{% capture highlight %}
// Creates a wrapper for a series of columns
@include make-row($gutter: $grid-gutter-width);

// Make the element grid-ready (applying everything but the width)
@include make-col-ready($gutter: $grid-gutter-width);
@include make-col($size, $columns: $grid-columns);

// Make an auto sizing column
@include make-col-auto();

// Get fancy by offsetting
@include make-col-offset($size, $columns: $grid-columns);
{% endcapture %}
{% renderHighlight highlight, "sass" %}

### Example Usage

You can modify the variables to your own custom values, or just use the mixins with their default values. Here's an example of using the default settings to create a two-column layout with a gap between.

{% capture highlight %}
.example-container {
  @include make-container();
  // Define a custom width after `make-container()` to
  // override the `width: 100%` generated by the mixin.
  width: 800px;
}
.example-row {
  @include make-row();
}
.example-content-main {
  @include make-col-ready();

  @include media-breakpoint-up(sm) {
    @include make-col(6);
  }
  @include media-breakpoint-up(lg) {
    @include make-col(8);
  }
}
.example-content-secondary {
  @include make-col-ready();

  @include media-breakpoint-up(sm) {
    @include make-col(6);
  }
  @include media-breakpoint-up(lg) {
    @include make-col(4);
  }
}
{% endcapture %}
{% renderHighlight highlight, "sass" %}

{% capture example %}
<div class="example-container">
  <div class="example-row">
    <div class="example-content-main">Main</div>
    <div class="example-content-secondary">Secondary</div>
  </div>
</div>
{% endcapture %}
{% renderExample example %}
