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
- Containers---`.container` for fixed width or `.container-fluid` for full width---center your site's contents and help align your grid content.
- Rows are horizontal groups of columns that ensure your columns are lined up properly.
- Content should be placed within columns, and only columns may be immediate children of rows.
- Column classes indicate the number of columns you'd like to use out of the possible 12 per row. So if you want three equal-width columns, you'd use `.col-4`.
- Column `width`s are set in percentages, so they're always fluid and sized relative to their parent element.
- Columns have horizontal `padding` to create the gutters between individual columns.
- You can remove the `margin` from rows and `padding` from columns with `.no-gutters` on the `.row`.
- There are five grid tiers, one for each [responsive breakpoint]({{ site.baseurl }}/layout/overview/#responsive-breakpoints): extra small, small, medium, large, and extra large.
- Grid tiers are based on minimum widths, meaning they apply to that one tier and all those above it (e.g., `.col-sm-4` applies to small, medium, large, and extra large devices).
- You can use predefined grid classes or Sass mixins for more semantic markup.

Sounds good? Great, let's move on to seeing all that in an example.

## Quick Start Example

If you're using Figuration's compiled CSS, this the example you'll want to start with.

{% example html %}
<div class="container">
  <div class="row">
    <div class="col-sm-4">
      1 of 3
    </div>
    <div class="col-sm-4">
      1 of 3
    </div>
    <div class="col-sm-4">
      1 of 3
    </div>
  </div>
</div>
{% endexample %}

The above example creates three equal-width columns on small, medium, large, and extra large devices using our [predefined grid classes](#predefined-classes). Those columns are centered in the page with the parent `.container`.

## Grid Options

See how aspects of the Figuration grid system work across multiple devices with this handy table.

The example pixel values are calculated based upon assumption where the average user has a 16px root font size.

<div class="table-responsive">
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
        <th class="text-nowrap" scope="row">Grid behavior</th>
        <td>Horizontal at all times</td>
        <td colspan="4">Collapsed to start, horizontal above breakpoints</td>
      </tr>
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

## Predefined Classes

In addition to our semantic mixins, Figuration includes an extensive set of prebuilt classes for quickly creating grid columns. It includes options for device-based column sizing, reordering columns, and more.

### Example: Stacked-to-horizontal

Using a single set of `.col-md-*` grid classes, you can create a basic grid system that starts out stacked on mobile devices and tablet devices (the extra small to small range) before becoming horizontal on desktop (medium) devices. Place grid columns in any `.row`.

<div class="cf-example-row">
{% example html %}
<div class="row">
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
</div>
<div class="row">
  <div class="col-md-8">.col-md-8</div>
  <div class="col-md-4">.col-md-4</div>
</div>
<div class="row">
  <div class="col-md-4">.col-md-4</div>
  <div class="col-md-4">.col-md-4</div>
  <div class="col-md-4">.col-md-4</div>
</div>
<div class="row">
  <div class="col-md-6">.col-md-6</div>
  <div class="col-md-6">.col-md-6</div>
</div>
{% endexample %}
</div>

### Example: Mobile and Desktop

Don't want your columns to simply stack in smaller devices? Use the extra small and medium device grid classes by adding `.col-*` and `.col-md-*` to your columns. See the example below for a better idea of how it all works.

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

### Example: Mobile, Tablet, Desktop

Build on the previous example by creating even more dynamic and powerful layouts with tablet `.col-sm-*` classes.

<div class="cf-example-row">
{% example html %}
<div class="row">
  <div class="col-12 col-sm-6 col-md-8">.col-12 .col-sm-6 .col-md-8</div>
  <div class="col-6 col-md-4">.col-6 .col-md-4</div>
</div>
<div class="row">
  <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>
  <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>
  <!-- Optional: clear the XS cols if their content doesn't match in height -->
  <div class="clearfix hide-sm-up"></div>
  <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>
</div>
{% endexample %}
</div>

### Example: Remove Gutters

The gutters between columns in our default, predefined grid classes can be removed with `.no-gutters`. This removes the negative `margin`s from `.row` and the horizontal `padding` from all immediate children columns.

Here's the source code for creating these styles. Note that column overrides are scoped to only the first children columns and are targeted via [attribute selector](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors). While this generates a more specific selector, column padding can still be further customized with [spacing utilities]({{ site.baseurl }}/utilities/spacing/).

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

### Example: Column Wrapping

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

### Example: Responsive Column Resets

With the four tiers of grids available you're bound to run into issues where, at certain breakpoints, your columns don't clear quite right as one is taller than the other. To fix that, use a combination of a `.clearfix` and our [responsive utility classes]({{ site.baseurl }}/layout/responsive-utilities/).

<div class="cf-example-row">
{% example html %}
<div class="row">
  <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>
  <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>

  <!-- Add the extra clearfix for only the required viewport -->
  <div class="clearfix hide-sm-up"></div>

  <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>
  <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>
</div>
{% endexample %}
</div>

In addition to column clearing at responsive breakpoints, you may need to **reset offsets, pushes, or pulls**. See this in action in [the grid example]({{ site.baseurl }}/examples/grid/).

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

### Example: Offsetting Columns

Move columns to the right using `.offset-md-*` classes. These classes increase the left margin of a column by `*` columns. For example, `.offset-md-4` moves `.col-md-4` over four columns.

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

### Example: Nesting Columns

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

### Example: Column Ordering

Easily change the order of our built-in grid columns with `.push-md-*` and `.pull-md-*` modifier classes.

<div class="cf-example-row">
{% example html %}
<div class="row">
  <div class="col-md-9 push-md-3">.col-md-9 .push-md-3</div>
  <div class="col-md-3 pull-md-9">.col-md-3 .pull-md-9</div>
</div>
{% endexample %}
</div>

## Customizing the Grid

Using our built-in grid Sass variables and maps, it's possible to completely customize the predefined grid classes. Change the number of tiers, the media query dimensions, the container widths, and the grid gutter widths---then recompile.

For example, if you wanted just three grid tiers, you'd update the `$grid-breakpoints`, `$container-max-widths`, and `$grid-gutter-widths` to something like this:

{% highlight scss %}
$grid-breakpoints: (
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
    sm: 1.5rem,
    md: 2rem,
    lg: 2rem
);
{% endhighlight %}

Save your changes and recompile to have a brand new set of predefined grid classes for column widths, offsets, pushes, and pulls. Responsive visibility utilities will also be updated to use the custom breakpoints.

## Sass Variables and Mixins

When using Figuration's source Sass files, you have the option of using Sass variables and mixins to create custom, semantic, and responsive page layouts. Our [predefined grid classes](#predefined-classes) use these same variables and mixins to provide a whole suite of ready-to-use classes for fast responsive layouts.

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
@mixin make-row($gutter: $grid-gutter-width) {
    @include clearfix();
    margin-left:  ($gutter / -2);
    margin-right: ($gutter / -2);
}

// Make the element grid-ready
@mixin make-col($size, $columns: $grid-columns, $gutter: $grid-gutter-width) {
    position: relative;
    min-height: 1px;
    padding-right: ($gutter / 2);
    padding-left:  ($gutter / 2);
    float: left;
    width: percentage($size / $columns);
}

// Get fancy by offsetting, or changing the sort order
@mixin make-col-offset($columns) {
  margin-left: percentage(($columns / $grid-columns));
}
@mixin make-col-push($columns) {
  left: percentage(($columns / $grid-columns));
}
@mixin make-col-pull($columns) {
  right: percentage(($columns / $grid-columns));
}
{% endhighlight %}

### Example Usage

You can modify the variables to your own custom values, or just use the mixins with their default values. Here's an example of using the default settings to create a two-column layout with a gap between.

See it in action in <a href="http://jsbin.com/ruxona/edit">this rendered example</a>.

{% highlight scss %}
.container {
  max-width: 60em;
  @include make-container();
}
.row {
  @include make-row();
}
.content-main {
  @media (max-width: 32em) {
    @include make-col(6);
  }
  @media (min-width: 32.1em) {
    @include make-col(8);
  }
}
.content-secondary {
  @media (max-width: 32em) {
    @include make-col(6);
  }
  @media (min-width: 32.1em) {
    @include make-col(4);
  }
}
{% endhighlight %}

{% highlight html %}
<div class="container">
  <div class="row">
    <div class="content-main">...</div>
    <div class="content-secondary">...</div>
  </div>
</div>
{% endhighlight %}


## Flexbox

Looking for a more modern grid system?  Use the opt-in flexbox mode, or [enable full flexbox support in Figuration]({{ site.baseurl }}/layout/flexbox#full-flexbox-mode), to take full advantage of CSS's Flexible Box module for even more control over your site's layout, alignment, and distribution of content.

### Opt-in vs Full Mode

The **opt-in mode** for flexbox support is available by default, and is easily triggered by adding `.row-flex` to any `.row` containers.  Any nested containers using just the `.row` class resets to the standard `float` grid layout.

**Full mode** needs to be enabled in the Sass and the CSS needs to be recompiled.  In this mode, you do not need to use the `.row-flex` class, and all grid items will use `display: flex;` for layout.

### What is Available

- Nesting, offsets, pushes, pulls, and `.no-gutters` are all supported in the flexbox grid system.
- Flexbox grid columns without a set width will automatically layout with equal widths. For example, four columns will each automatically be 25% wide.
- Flexbox grid columns have significantly more alignment options available, including vertical alignment.

### Auto-Layout Columns

When flexbox support is used/enabled, you can utilize breakpoint-specific column classes to control column widths.

#### Equal Width Columns

Equal-width columns are easliy done by adding any number of `.col-{breakpoint}`s for each breakpoint you need and every column will be the same width.

For example, here's are some grid layouts that apply to every device and viewport possible.

<div class="cf-example-row">
{% example html %}
<div class="row row-flex">
    <div class="col">
        1 of 2
    </div>
    <div class="col">
        1 of 2
    </div>
</div>

<div class="row row-flex">
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

<div class="row row-flex no-gutters">
  <div class="col">Columns</div>
  <div class="col">with no</div>
  <div class="col">gutters</div>
</div>
{% endexample %}
</div>

#### Controlled Width Column

You can also set the width of one column and the others will automatically resize around it. You may use predefined grid classes (as shown below), grid mixins, or inline widths.

In the examples below, note that the other columns will resize no matter the width of the center column.

<div class="cf-example-row">
{% example html %}
<div class="row row-flex">
    <div class="col">
        1 of 3
    </div>
    <div class="col-6">
        2 of 3 (col-6)
    </div>
    <div class="col">
        3 of 3
    </div>
</div>

<div class="row row-flex">
    <div class="col">
        1 of 3
    </div>
    <div class="col-5">
        2 of 3 (col-5)
    </div>
    <div class="col">
        3 of 3
    </div>
</div>
{% endexample %}
</div>

#### Variable Width Column

Using the `col-{breakpoint}-auto` classes, a column can size itself based on the natural width of its content. This can be handy when dealing with single line content like inputs, numbers, etc.  This, in conjunction with [horizontal alignment]({{ site.baseurl }}/utilities/flexbox/#horizontal-alignment) utility classes, is very useful for centering layouts with uneven column sizes as viewport width changes.

<div class="cf-example-row">
{% example html %}
<div class="container">
    <div class="row row-flex flex-md-center">
        <div class="col col-lg-2">
            1 of 3
        </div>
        <div class="col-12 col-md-auto">
            Variable width content
        </div>
        <div class="col col-lg-2">
            3 of 3
        </div>
    </div>
    <div class="row row-flex">
        <div class="col">
            1 of 3
        </div>
        <div class="col-12 col-md-auto">
            Variable width content
        </div>
        <div class="col col-lg-2">
            3 of 3
        </div>
    </div>
</div>
{% endexample %}
 </div>

### Alignment

If you wish to have better control over your flexbox grid alignment, there are a handful of utility classes that might be helpful.  Information and examples can be found in the [Flexbox utilities page]({{ site.baseurl }}/utilities/flexbox/).
