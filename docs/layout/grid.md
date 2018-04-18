---
layout: docs
title: Grid System
group: layout
---

Figuration includes a powerful mobile-first grid system for building layouts of all shapes and sizes. It's based on a 12 column layout and has multiple tiers, one for each [media query range]({{ site.baseurl }}/layout/overview/#responsive-breakpoints). You can use it with Sass mixins or our predefined classes.

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## How It Works

At a high level, here's how the grid system works:

- There are three major components---containers, rows, and columns.
- The grid is built with [flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes) and is fully responsive.
- Containers provide a means to center and horizontally pad your site's contents. Use `.container` for a responsive fixed width or `.container-fluid` for `width: 100%` across all viewport and device sizes.
- Rows are wrappers for columns. Each column has horizontal `padding` (called a gutter) for controlling the space between them. This `padding` is then counteracted on the rows with negative margins. This way, all the content in your columns is visually aligned down the left side (right side in `rtl` mode).
- In a grid layout, content must be placed within columns and only columns may be immediate children of rows.
- Thanks to flexbox, grid columns without a specified `width` will automatically layout as equal width columns. For example, four instances of `.col-sm` will each automatically be 25% wide from the small breakpoint and up. See the [auto-layout columns](#auto-layout-columns) section for more examples.
- Column classes indicate the number of columns you'd like to use out of the possible 12 per row. So, if you want three equal-width columns across, you would use `.col-4`.
- Column `width`s are set in percentages, so they're always fluid and sized relative to their parent element.
- Columns have horizontal `padding` to create the gutters between individual columns.
- You can remove the `margin` from rows and `padding` from columns with `.no-gutters` on the `.row`.
- To make the grid responsive, there are five grid breakpoints, one for each [responsive breakpoint]({{ site.baseurl }}/layout/overview/#responsive-breakpoints): all breakpoints (extra small), small, medium, large, and extra large.
- Grid breakpoints are based on minimum width media queries, meaning **they apply to that one breakpoint and all those above it** (e.g., `.col-sm-4` applies to small, medium, large, and extra large devices, but not the first `xs` breakpoint).
- You can use predefined grid classes (like `.col-4`) or [Sass mixins](#mixins) for more semantic markup.


If you need a reference for working with flexbox, there is an excellent resource over at CSS Tricks with [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).

Also, be aware of the limitations and [bugs around flexbox](https://github.com/philipwalton/flexbugs), like the [inability to use some HTML elements as flex containers](https://github.com/philipwalton/flexbugs#9-some-html-elements-cant-be-flex-containers).

Sounds good? Great, let's move on to seeing all that in an example.

## Quick Start Example

This example creates three equal-width columns on small, medium, large, and extra large devices using our predefined grid classes. Those columns are centered in the page with the parent `.container`.

Examples further down the page add some color, padding, and borders, to the rows and columns to give a better visual example of their relationship.  These do not appear in the base Figuration grid.

{% example html %}
<div class="container">
  <div class="row">
    <div class="col-sm-4">
      Fisrt column
    </div>
    <div class="col-sm-4">
      Second column
    </div>
    <div class="col-sm-4">
      Third column
    </div>
  </div>
</div>
{% endexample %}

## Grid Options

See how aspects of the Figuration grid system work across multiple devices with this handy table.

The example pixel values are calculated based upon assumption where the average user has a 16px root font size.

<div class="table-scroll">
    <table class="table table-bordered table-striped">
        <thead>
            <tr>
                <th></th>
                <th class="text-center">
                    Extra small<br>
                    <small>&lt;576px</small><br>
                    <small>&lt;36em</small>
                </th>
                <th class="text-center">
                    Small<br>
                    <small>&ge;576px</small><br>
                    <small>&ge;36em</small>
                </th>
                <th class="text-center">
                    Medium<br>
                    <small>&ge;768px</small><br>
                    <small>&ge;48em</small>
                </th>
                <th class="text-center">
                    Large<br>
                    <small>&ge;992px</small><br>
                    <small>&ge;62em</small>
                </th>
                <th class="text-center">
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

<div class="cf-example-row">
{% example html %}
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
{% endexample %}
</div>

### Controlling One Column Width

Auto-layout for flexbox grid columns also means you can set the width of one column and have the sibling columns automatically resize around it. You may use predefined grid classes (as shown below), grid mixins, or inline widths.

Note that the other columns will resize no matter the width of the center column.

<div class="cf-example-row">
{% example html %}
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
{% endexample %}
</div>

### Variable Width Content

Use `col-{breakpoint}-auto` classes to size columns based on the natural width of their content. Use these classes in conjunction with [horizontal alignment](#horizontal-alignment) classes for centering layouts with uneven column sizes as viewport width changes.

<div class="cf-example-row">
{% example html %}
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
{% endexample %}
 </div>

### Equal Width with Multiple Rows

Create equal-width columns that span multiple rows by inserting a `.w-100` where you want the columns to break to a new line. Make the breaks responsive by mixing the `.w-100` with some [responsive display utilities]({{ site.baseurl }}/utilities/display/#responsively-hiding-content).

Note there was a [Safari flexbox bug](https://github.com/philipwalton/flexbugs#11-min-and-max-size-declarations-are-ignored-when-wrapping-flex-items) that prevented this from working without an explicit `flex-basis` or `border`. Our example works thanks to the `border` being set; you can do the same with `.col { border: 1px solid transparent; }`. Alternatively, you can set the flex-basis to the width of the column (e.g., `.col { flex: 1 0 50%; }`).

These workarounds have been documented in a [reduced test case](https://output.jsbin.com/micohor), though if the browser is up to date this shouldn't be necessary.

<div class="cf-example-row">
{% example html %}
<div class="row">
  <div class="col">1 of 4</div>
  <div class="col">2 of 4</div>
  <div class="w-100"></div>
  <div class="col">3 of 4</div>
  <div class="col">4 of 4</div>
</div>
{% endexample %}
</div>

## Responsive Classes

Figuration's grid includes five tiers of predefined classes for building complex responsive layouts. Customize the size of your columns on extra small, small, medium, large, or extra large devices however you see fit.

### All Breakpoints

For grids that are the same from the smallest of devices to the largest, use the `.col` and `.col-*` classes. Specify a numbered class when you need a particularly sized column; otherwise, feel free to stick to `.col`.

<div class="cf-example-row">
{% example html %}
<div class="row">
  <div class="col">col</div>
  <div class="col">col</div>
  <div class="col">col</div>
  <div class="col">col</div>
</div>
<div class="row">
  <div class="col-8">col-8</div>
  <div class="col-4">col-4</div>
</div>
{% endexample %}
</div>

### Stacked to Horizontal

Using a single set of `.col-sm-*` classes, you can create a basic grid system that starts out stacked and becomes horizontal at the small breakpoint (`sm`).

<div class="cf-example-row">
{% example html %}
<div class="row">
  <div class="col-sm-8">.col-sm-8</div>
  <div class="col-sm-4">.col-sm-4</div>
</div>
<div class="row">
  <div class="col-sm">.col-sm</div>
  <div class="col-sm">.col-sm</div>
  <div class="col-sm">.col-sm</div>
</div>
{% endexample %}
</div>

### Mix and Match

Don't want your columns to simply stack in some grid tiers. Use a combination of different classes for each tier as needed. See the example below for a better idea of how it all works.

<div class="cf-example-row">
{% example html %}
<!-- Stack the columns on mobile by making one full-width and the other half-width -->
<div class="row">
  <div class="col-12 col-md-8">.col-12 .col-md-8</div>
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
{% endexample %}
</div>

## Alignment

Use [Flexbox alignment utilities]({{ site.baseurl }}/utilities/flexbox/) to vertically and horizontally align columns.

### Vertical Alignment

<div class="cf-example-row cf-example-row-grid cf-example-row-flex-v">
{% example html %}
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
{% endexample %}
</div>

<div class="cf-example-row cf-example-row-grid cf-example-row-flex-v">
{% example html %}
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
{% endexample %}
</div>

### Horizontal Alignment

<div class="cf-example-row">
{% example html %}
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
</div>
{% endexample %}
</div>

### No Gutters

The gutters between columns in our default, predefined grid classes can be removed with `.no-gutters`. This removes the negative `margin`s from `.row` and the horizontal `padding` from all immediate children columns.

Here's the source code for creating these styles. Note that column overrides are scoped to only the first children columns and are targeted via [attribute selector](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors). While this generates a more specific selector, column padding can still be further customized with [spacing utilities]({{ site.baseurl }}/utilities/spacing/).

**Need an edge-to-edge design?** Drop the parent `.container` or `.container-fluid`.

{% highlight sass %}
.no-gutters {
    margin-right: 0;
    margin-left: 0;

    > [class*="col-"],
    > .col {
        padding-right: 0;
        padding-left: 0;
    }
}
{% endhighlight %}

In practice, here's how it looks. Note you can continue to use this with all other predefined grid classes (including column widths, responsive tiers, reorders, and more).

<div class="cf-example-row">
{% example html %}
<div class="row no-gutters">
  <div class="col-12 col-sm-6 col-md-8">.col-12 .col-sm-6 .col-md-8</div>
  <div class="col-6 col-md-4">.col-6 .col-md-4</div>
</div>
{% endexample %}
</div>

### Column Wrapping

If more than 12 columns are placed within a single row, each group of extra columns will, as one unit, wrap onto a new line.

<div class="cf-example-row">
{% example html %}
<div class="row">
  <div class="col-9">.col-9</div>
  <div class="col-4">.col-4<br>Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.</div>
  <div class="col-6">.col-6<br>Subsequent columns continue along the new line.</div>
</div>
{% endexample %}
</div>

### Column Resets

Resetting, or breaking, columns to a new line in flexbox requires a small hack: add an element with `width: 100%` wherever you want to wrap your columns to a new line. This can also be accomplished with multiple `.row`s.  You may need to try both implementation methods to see which works best for your layout.

<div class="cf-example-row">
{% example html %}
<div class="row">
  <div class="col-6 col-md-3">.col-6 .col-md-3</div>
  <div class="col-6 col-md-3">.col-6 .col-md-3<br>taller</div>

  <!-- Force next columns to break to a new line -->
  <div class="w-100"></div>

  <div class="col-6 col-md-3">.col-6 .col-md-3</div>
  <div class="col-6 col-md-3">.col-6 .col-md-3</div>
</div>
{% endexample %}
</div>

You can also apply a break at specific breakpoints with our [responsive display utilities]({{ site.baseurl }}/utilities/display/).

<div class="cf-example-row">
{% example html %}
<div class="row">
  <div class="col-6 col-md-4">.col-6 .col-md-4</div>
  <div class="col-6 col-md-4">.col-6 .col-md-4<br>taller</div>

  <!-- Force next columns to break to a new line at md breakpoint and up-->
  <div class="w-100 d-none d-md-block"></div>

  <div class="col-6 col-md-4">.col-6 .col-md-4</div>
  <div class="col-6 col-md-4">.col-6 .col-md-4</div>
</div>
{% endexample %}
</div>

In addition to column clearing at responsive breakpoints, you may need to **reset offsets**. See this in action in [the grid example]({{ site.baseurl }}/examples/grid/).

<div class="cf-example-row">
{% example html %}
<div class="row">
  <div class="col-sm-5 col-md-6">.col-sm-5 .col-md-6</div>
  <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0">.col-sm-5 .offset-sm-2 .col-md-6 .offset-md-0</div>
</div>

<div class="row">
  <div class="col-sm-6 col-md-5 col-lg-6">.col-sm-6 .col-md-5 .col-lg-6</div>
  <div class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">.col-sm-6 .col-md-5 .offset-md-2 .col-lg-6 .offset-lg-0</div>
</div>
{% endexample %}
</div>

## Reordering

### Flex Order

Use [flexbox order utilities]({{ site.baseurl }}/utilities/flexbox/#order) for controlling the **visual order** of your content.

<div class="cf-example-row">
{% example html %}
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
{% endexample %}
</div>

Order utilities are also available in column counts.

<div class="cf-example-row">
{% example html %}
<div class="container">
  <div class="row">
    <div class="col order-2">
      First, but second
    </div>
    <div class="col order-12">
      Second, but last
    </div>
    <div class="col order-1">
      Third, but first
    </div>
  </div>
</div>
{% endexample %}
</div>

### Offsetting Columns

Move columns to the right using `.offset-*` classes. These classes increase the left margin of a column by `*` columns. For example, `.offset-md-4` moves a column over four columns on medium and larger devices.

<div class="cf-example-row">
{% example html %}
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
{% endexample %}
</div>

## Nesting

To nest your content with the default grid, add a new `.row` and set of `.col-sm-*` columns within an existing `.col-sm-*` column. Nested rows should include a set of columns that add up to 12 or fewer (it is not required that you use all 12 available columns).

<div class="cf-example-row">
{% example html %}
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
{% endexample %}
</div>

## Customizing the Grid

Using our built-in grid Sass variables and maps, it's possible to completely customize the predefined grid classes. Change the number of tiers, the media query dimensions, the container widths, and the grid gutter widths---then recompile.

### Columns and Gutters

The number of grid columns and their horizontal padding (aka, gutters) can be modified via Sass variables. `$grid-columns` is used to generate the widths (in percent) of each individual column while `$grid-gutter-widths` allows breakpoint-specific widths that are divided evenly across `padding-left` and `padding-right` for the column gutters.

{% highlight scss %}
$grid-columns: 12;
$grid-gutter-width: 2rem;
$grid-gutter-widths: (
    xs: $grid-gutter-width,
    sm: $grid-gutter-width,
    md: $grid-gutter-width,
    lg: $grid-gutter-width,
    xl: $grid-gutter-width
);
{% endhighlight %}

### Grid Tiers

Moving beyond the columns themselves, you may also customize the number of grid tiers. If you wanted just four grid tiers, you would update the `$grid-breakpoints`, `$container-max-widths`, and `$grid-gutter-widths` to something like this:

{% highlight scss %}
$grid-breakpoints: (
  xs: 0,
  sm: bp-to-em(480px),
  md: bp-to-em(768px),
  lg: bp-to-em(1024px)
);

$container-max-widths: (
  sm: rem-calc(420px),
  md: rem-calc(720px),
  lg: rem-calc(940px)
);

$grid-gutter-widths: (
    xs: 1.5rem,
    sm: 1.5rem,
    md: 2rem,
    lg: 2rem
);
{% endhighlight %}

Save your changes and recompile to have a brand new set of predefined grid classes for column widths and offsets. Responsive visibility utilities will also be updated to use the custom breakpoints.

## Sass Variables and Mixins

When using Figuration's source Sass files, you have the option of using Sass variables and mixins to create custom, semantic, and responsive page layouts. Our predefined grid classes use these same variables and mixins to provide a whole suite of ready-to-use classes for fast responsive layouts.

### Variables

Variables and maps determine the number of columns, the gutter width, and the media query point at which to begin floating columns. We use these to generate the predefined grid classes documented above, as well as for the custom mixins listed below.

Some Sass functions are in use here.  Simply put `bp-to-em()` converts a pixel value to em assuming 16px root font size, while `rem-calc()` converts a pixel value to rem, but checks the defined `$font-size-root` variable in the Sass and uses that for conversion.

{% highlight scss %}
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
  sm: rem-calc(544px),
  md: rem-calc(720px),
  lg: rem-calc(940px),
  xl: rem-calc(1140px)
);

$grid-gutter-width: 2rem;
$grid-gutter-widths: (
    xs: $grid-gutter-width,
    sm: $grid-gutter-width,
    md: $grid-gutter-width,
    lg: $grid-gutter-width,
    xl: $grid-gutter-width
);
{% endhighlight %}

### Mixins

Mixins are used in conjunction with the grid variables to generate semantic CSS for individual grid columns.

{% highlight scss %}
// Creates a wrapper for a series of columns
@include make-row($gutters: $grid-gutter-widths);

// Make the element grid-ready (applying everything but the width)
@include make-col-ready($gutters: $grid-gutter-widths);
@include make-col($size, $columns: $grid-columns);

// Get fancy by offsetting
@include make-col-offset($size, $columns: $grid-columns);
{% endhighlight %}

### Example Usage

You can modify the variables to your own custom values, or just use the mixins with their default values. Here's an example of using the default settings to create a two-column layout with a gap between.

{% highlight scss %}
.example-container {
  width: 800px;
  @include make-container();
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
{% endhighlight %}

{% example html %}
<div class="example-container">
  <div class="example-row">
    <div class="example-content-main">Main</div>
    <div class="example-content-secondary">Secondary</div>
  </div>
</div>
{% endexample %}
