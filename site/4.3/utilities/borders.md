---
layout: doc
title: Borders
description: Easily manipulate borders on your images or other elements.
group: utilities
toc: true
---

## Border Radius

Add a class to your element to round the corners.  You can target various sides of an element using the format `.radius{-side}`.

Where *sides* is one of:

- blank - for `all` 4 corners of the element
- `t` - for both corners on the `top` side
- `b` - for both corners on the `bottom` side
- `e` - for both corners on the `end` side
- `s` - for both corners on the `start` side
- `te` - for the `top end` corner
- `ts` - for the `top start` corner
- `be` - for the `bottom end` corner
- `bs` - for the `bottom start` corner

The *start/end sides* are designated as follows depending on which version of the Figuration CSS you are using.  The default `figuration.*.css` uses the `ltr` mode, where `figuration-rtl.*.css` uses the `rtl` mode.

- For `left-to-right` mode (`ltr` - default);
  - `start` refers to the `left` side
  - `end` refers to the `right` side
- For `right-to-left` mode (`rtl`);
  - `start` refers to the `right` side
  - `end` refers to the `left` side


<div class="cf-example">
  <div class="mb-1">
    <img data-src="holder.js/100x100/?text=All" class="radius" alt="Example radiused image">
    <img data-src="holder.js/100x100/?text=Top" class="radius-t" alt="Example top radiused image">
    <img data-src="holder.js/100x100/?text=Bottom" class="radius-b" alt="Example bottom radiused image">
    <img data-src="holder.js/100x100/?text='End'" class="radius-e" alt="Example 'start' radiused image">
    <img data-src="holder.js/100x100/?text='Start'" class="radius-s" alt="Example 'end' radiused image">
  </div>
  <div>
    <img data-src="holder.js/100x100/?text=Top 'End'" class="radius-te" alt="A generic square placeholder image a rounded corner on the top 'end'">
    <img data-src="holder.js/100x100/?text=Top 'Start'" class="radius-ts" alt="A generic square placeholder image a rounded corner on the top 'start'">
    <img data-src="holder.js/100x100/?text=Bottom 'End'" class="radius-be" alt="A generic square placeholder image a rounded corner on the bottom 'end'">
    <img data-src="holder.js/100x100/?text=Bottom 'Start'" class="radius-bs" alt="A generic square placeholder image a rounded corner on the bottom 'start'">
  </div>
</div>

{% capture highlight %}
<!-- Sides -->
<img src="..." class="radius" alt="...">
<img src="..." class="radius-t" alt="...">
<img src="..." class="radius-b" alt="...">
<img src="..." class="radius-e" alt="...">
<img src="..." class="radius-s" alt="...">

<!-- Corners -->
<img src="..." class="round-te" alt="...">
<img src="..." class="round-ts" alt="...">
<img src="..." class="round-be" alt="...">
<img src="..." class="round-bs" alt="...">
{% endcapture %}
{% renderHighlight highlight, "html" %}

### Sizes

A few sizes are available, the default border-radius size, along with multiple sizes of variants. Responsive classes are built in the form `.radius{-side}-{size}`.

<div class="cf-example">
  <img data-src="holder.js/85x85?text=No Radius" class="m-0_25 radius-0" alt="Placeholder iamge with no rounded corners">
  <img data-src="holder.js/85x85?text=Extra Small" class="m-0_25 radius-xsmall" alt="Placeholder iamge very slightly rounded corners">
  <img data-src="holder.js/85x85?text=Small" class="m-0_25 radius-small" alt="Placeholder iamge slightly rounded corners">
  <img data-src="holder.js/85x85?text=Default" class="m-0_25 radius" alt="Placeholder image with rounded corners">
  <img data-src="holder.js/85x85?text=Large" class="m-0_25 radius-large" alt="Placeholder image with large rounded corners">
  <img data-src="holder.js/85x85?text=Extra Large" class="m-0_25 radius-xlarge" alt="Placeholder image with extra large rounded corners">
  <img data-src="holder.js/85x85?text=Extra Extra Large" class="m-0_25 radius-2xlarge" alt="Placeholder image with extra extra large rounded corners">
</div>

{% capture highlight %}
<img src="..." class="radius-0" alt="...">
<img src="..." class="radius-xsmall" alt="...">
<img src="..." class="radius-small" alt="...">
<img src="..." class="radius" alt="...">
<img src="..." class="radius-large" alt="...">
<img src="..." class="radius-xlarge" alt="...">
<img src="..." class="radius-2xlarge" alt="...">
{% endcapture %}
{% renderHighlight highlight, "html" %}

### Removing

Use the special case size of `0` (zero) to remove an elements radius, or a subset of radii.

<div class="cf-example">
  <img data-src="holder.js/85x85?text=End side radius" class="radius-large radius-s-0" alt="Placeholder iamge with rounded corners on only one vertical side">
</div>
{% capture highlight %}
<img src="..." class="radius-large radius-s-0" alt="...">
{% endcapture %}
{% renderHighlight highlight, "html" %}

### Circles

When elements are of a square (1:1) aspect ratio, you can create a circle using `.radius-circle`.  If the element has an unequal aspect ratio, you will get more on an elipse shape.

<div class="cf-example">
  <img data-src="holder.js/100x100/?text=Circle" class="m-0_25 radius-circle" width="100" height="100" alt="Completely round">
  <img data-src="holder.js/100x50/?text=Elipse" class="m-0_25 radius-circle" width="100" height="50" alt="Horizontal elipse">
  <img data-src="holder.js/50x100/?text=Elipse" class="m-0_25 radius-circle" width="50" height="100" alt="Vertical elipse">
</div>

{% capture highlight %}
<img src="..." class="radius-circle" width="100" height="100" alt="...">
<img src="..." class="radius-circle" width="100" height="50" alt="...">
<img src="..." class="radius-circle" width="50" height="100" alt="...">
{% endcapture %}
{% renderHighlight highlight, "html" %}

### Pills

Create a 'pill' shape with `.radius-pill`.

<div class="cf-example">
  <img data-src="holder.js/100x50/?text=Pill" class="m-0_25 radius-pill" width="100" height="50" alt="Rounded pill image">
  <img data-src="holder.js/75x32/?text=Pill" class="m-0_25 radius-pill" width="75" height="32" alt="Rounded pill image">
</div>

{% capture highlight %}
<img src="..." class="radius-pill" width="100" height="50" alt="...">
<img src="..." class="radius-pill" width="75" height="32" alt="...">
{% endcapture %}
{% renderHighlight highlight, "html" %}

## Borders

Adjust various border properties with an array of border utilities.

### Adding Borders

Quickly add the default component border to an element with the `.border{-side}` utility classes.

Available border addition utilities are:
- `.border` - for all sides
- `.border-t` - for the `top` side
- `.border-b` - for the `bottom` side
- `.border-e` - for the `end` side
- `.border-s` - for the `start` side
- `.border-x` - for both `start` and `end` sides
- `.border-y` - for both `top` and `bottom` sides

The *start/end sides* are designated as follows depending on which version of the Figuration CSS you are using.  The default `figuration.*.css` uses the `ltr` mode, where `figuration-rtl.*.css` uses the `rtl` mode.

- For `left-to-right` mode (`ltr` - default);
  - `start` refers to the `left` side
  - `end` refers to the `right` side
- For `right-to-left` mode (`rtl`);
  - `start` refers to the `right` side
  - `end` refers to the `left` side

{% capture example %}
<div class="border bg-gray-50 p-0_5 mb-1">
  This div container has a border on all sides, and some padding added.
</div>
<div class="border-x bg-gray-50 p-0_5 mb-1">
  This div container has a border on the left and right sides, and some padding added.
</div>
<div class="border-y bg-gray-50 p-0_5 mb-1">
  This div container has a border on the top and bottom sides, and some padding added.
</div>
<span class="border-t bg-gray-50 p-0_5" style="width: 3rem;">'top'</span>
<span class="border-e bg-gray-50 p-0_5" style="width: 3rem;">'end'</span>
<span class="border-b bg-gray-50 p-0_5" style="width: 3rem;">'bottom'</span>
<span class="border-s bg-gray-50 p-0_5" style="width: 3rem;">'start'</span>
{% endcapture %}
{% renderExample example %}

### Removing Borders

Remove the border on a given side of an element with the `.border{-side}-0` utility classes.

Available border removal utilities are:
- `.border-0` - for `all` 4 sides of the element
- `.border-t-0` - for the `top` side
- `.border-b-0` - for the `bottom` side
- `.border-e-0` - for the `end` side
- `.border-s-0` - for the `start` side
- `.border-x-0` - for both `start` and `end` sides
- `.border-y-0` - for both `top` and `bottom` sides

The *start/end sides* are designated as follows depending on which version of the Figuration CSS you are using.  The default `figuration.*.css` uses the `ltr` mode, where `figuration-rtl.*.css` uses the `rtl` mode.

- For `left-to-right` mode (`ltr` - default);
  - `start` refers to the `left` side
  - `end` refers to the `right` side
- For `right-to-left` mode (`rtl`);
  - `start` refers to the `right` side
  - `end` refers to the `left` side

See the following example of removing various borders from some buttons.

{% capture example %}
<button type="button" class="btn radius-0 border-0">all</button>
<button type="button" class="btn radius-0 border-t-0">top</button>
<button type="button" class="btn radius-0 border-e-0">'end'</button>
<button type="button" class="btn radius-0 border-b-0">bottom</button>
<button type="button" class="btn radius-0 border-s-0">'start'</button>
<button type="button" class="btn radius-0 border-x-0">left and right</button>
<button type="button" class="btn radius-0 border-y-0">top and bottom</button>
{% endcapture %}
{% renderExample example %}

### Responsive Borders

Add or remove borders with responsive border utility classes in the form of `.border{-breakpoint}{-side}{-0}`.

For example to have a border on the sides of an element up to and including the `md` breakpoint, and then at the `lg` breakpoint switch to only having top and bottom borders, you would do the following:

{% capture example %}
<div class="border-x border-lg-x-0 border-lg-y bg-light p-0_5" style="max-width: 18rem;">
  Sample container
</div>
{% endcapture %}
{% renderExample example %}

### Width

Adjust the width of an element's borders.

{% capture example %}
<span class="border border-1 p-0_5">1px</span>
<span class="border border-2 p-0_5">2px</span>
<span class="border border-3 p-0_5">3px</span>
<span class="border border-4 p-0_5">4px</span>
<span class="border border-5 p-0_5">5px</span>
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
        <td><code>$enable-utility-border</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the border utility classes.
          Smaller segements of the border utilities can be disabled with the following <code>$enable-*</code> variables.
        </td>
      </tr>
      <tr>
        <td><code>$enable-utility-border-addition</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the additive border utility classes.
        </td>
      </tr>
      <tr>
        <td><code>$enable-utility-border-removal</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the subtractive border utility classes.
        </td>
      </tr>
      <tr>
        <td><code>$enable-utility-border-width</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the border width utility classes.
        </td>
      </tr>
      <tr>
        <td><code>$enable-utility-border-colors</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the theme border color utility classes.
        </td>
      </tr>
      <tr>
        <td><code>$enable-utility-border-palette</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the palette border color utility classes.
        </td>
      </tr>
      <tr>
        <td><code>$enable-utility-border-special</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the transparent border color utility class.
        </td>
      </tr>
      <tr>
        <td><code>$enable-utility-border-radius-circle</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the circle border radius utility classes.
        </td>
      </tr>
      <tr>
        <td><code>$enable-utility-border-radius-pill</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the pill border radius utility classes.
        </td>
      </tr>
      <tr>
        <td><code>$enable-utility-border-radius-addition</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the additive border radius utility classes.
        </td>
      </tr>
      <tr>
        <td><code>$enable-utility-border-radius-sizing</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the additive border radius size variant utility classes.
        </td>
      </tr>
      <tr>
        <td><code>$enable-utility-border-radius-removal</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the subtractive border radius utility classes.
        </td>
      </tr>
      <tr>
        <td><code>$radius-border-radius</code></td>
        <td>number</td>
        <td><code>$border-radius</code></td>
        <td>
          Border radius size.
        </td>
      </tr>
      <tr>
        <td><code>$radii</code></td>
        <td>map</td>
        <td>
<pre><code>("xsmall":   .1875rem,
    "small":    .25rem,
    "large":   .5rem,
    "xlarge":   .75rem,
    "2xlarge":   1rem)</code></pre>
        </td>
        <td>
          Border radius size variants.
        </td>
      </tr>
      <tr>
        <td><code>$border-widths</code></td>
        <td>map</td>
        <td>
<pre><code>("1": 1px,
"2": 2px,
"3": 3px,
"4": 4px,
"5": 5px)</code></pre>
        </td>
        <td>
          Border width size variants.
        </td>
      </tr>
      <tr>
        <td><code>$utility-border-breakpoints</code></td>
        <td>list</td>
        <td><code>map-keys($grid-breakpoints)</code></td>
        <td>
          Breakpoint list to generate for additive and subtractive border radius utilities.
        </td>
      </tr>
      <tr>
        <td><code>$utility-border-colors</code></td>
        <td>map</td>
        <td><code>$base-colors</code></td>
        <td>
          Themed border colors.
        </td>
      </tr>
      <tr>
        <td><code>$palette-colors-borders</code></td>
        <td>map</td>
        <td><code>$palette-colors</code></td>
        <td>
          Palette-based border colors.
        </td>
      </tr>
      <tr>
        <td><code>$palette-levels-borders</code></td>
        <td>list</td>
        <td><code>$palette-levels</code></td>
        <td>
          List of palette levels to use with palette border colors.
        </td>
      </tr>
    </tbody>
  </table>
</div>

### Mixins

Here are the mixins related to this grouping of utility classes that we use to help generate our CSS.  You can also uses these mixins to generate your own custom components or utilities.

#### border-radius()

Apply a border radius to an element.

{% capture highlight %}
@include border-radius($radius);
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
        <td><code>$radius</code></td>
        <td>string</td>
        <td><code>$border-radius</code></td>
        <td>
          Border radius dimension.
        </td>
      </tr>
    </tbody>
  </table>
</div>

#### border-top-radius()

Apply a border radius the corners on the top side of an element.

{% capture highlight %}
@include border-top-radius($radius);
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
        <td><code>$radius</code></td>
        <td>string</td>
        <td><code>$border-radius</code></td>
        <td>
          Border radius dimension.
        </td>
      </tr>
    </tbody>
  </table>
</div>

#### border-end-radius()

Apply a border radius the corners on the end side of an element.

{% capture highlight %}
@include border-end-radius($radius);
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
        <td><code>$radius</code></td>
        <td>string</td>
        <td><code>$border-radius</code></td>
        <td>
          Border radius dimension.
        </td>
      </tr>
    </tbody>
  </table>
</div>

#### border-bottom-radius()

Apply a border radius the corners on the bottom side of an element.

{% capture highlight %}
@include border-bottom-radius($radius);
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
        <td><code>$radius</code></td>
        <td>string</td>
        <td><code>$border-radius</code></td>
        <td>
          Border radius dimension.
        </td>
      </tr>
    </tbody>
  </table>
</div>

#### border-start-radius()

Apply a border radius the corners on the start side of an element.

{% capture highlight %}
@include border-start-radius($radius);
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
        <td><code>$radius</code></td>
        <td>string</td>
        <td><code>$border-radius</code></td>
        <td>
          Border radius dimension.
        </td>
      </tr>
    </tbody>
  </table>
</div>

#### border-top-start-radius()

Apply a border radius on the top start corner of an element.

{% capture highlight %}
@include border-top-start-radius($radius);
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
        <td><code>$radius</code></td>
        <td>string</td>
        <td><code>$border-radius</code></td>
        <td>
          Border radius dimension.
        </td>
      </tr>
    </tbody>
  </table>
</div>

#### border-top-end-radius()

Apply a border radius on the top end corner of an element.

{% capture highlight %}
@include border-top-end-radius($radius);
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
        <td><code>$radius</code></td>
        <td>string</td>
        <td><code>$border-radius</code></td>
        <td>
          Border radius dimension.
        </td>
      </tr>
    </tbody>
  </table>
</div>

#### border-bottom-start-radius()

Apply a border radius on the bottom start corner of an element.

{% capture highlight %}
@include border-bottom-start-radius($radius);
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
        <td><code>$radius</code></td>
        <td>string</td>
        <td><code>$border-radius</code></td>
        <td>
          Border radius dimension.
        </td>
      </tr>
    </tbody>
  </table>
</div>

#### border-bottom-end-radius()

Apply a border radius on the bottom end corner of an element.

{% capture highlight %}
@include border-bottom-end-radius($radius);
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
        <td><code>$radius</code></td>
        <td>string</td>
        <td><code>$border-radius</code></td>
        <td>
          Border radius dimension.
        </td>
      </tr>
    </tbody>
  </table>
</div>

#### radius-sides()

Generate component size border radius utility classes for use with an element's sides.

{% capture highlight %}
@include radius-sides($radius, $size);
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
        <td><code>$radius</code></td>
        <td>number</td>
        <td><code>$radius-border-radius</code></td>
        <td>
          Border radius dimension.
        </td>
      </tr>
      <tr>
        <td><code>$size</code></td>
        <td>string</td>
        <td><code>null</code></td>
        <td>
          Name for the component size.  A <code>null</code> value will not include a component size in the class names.
        </td>
      </tr>
    </tbody>
  </table>
</div>

#### radius-corners()

Generate component size border radius utility classes for use with an element's individual corners.

{% capture highlight %}
@include radius-corners($radius, $size);
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
        <td><code>$radius</code></td>
        <td>number</td>
        <td><code>$radius-border-radius</code></td>
        <td>
          Border radius dimension.
        </td>
      </tr>
      <tr>
        <td><code>$size</code></td>
        <td>string</td>
        <td><code>null</code></td>
        <td>
          Name for the component size.  A <code>null</code> value will not include a component size in the class names.
        </td>
      </tr>
    </tbody>
  </table>
</div>