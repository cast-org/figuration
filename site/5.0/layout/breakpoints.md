---
layout: doc
title: Breakpoints
description: Breakpoints are customizable sizes that create responsive layout or determine behavior based on the viewport width.
group: layout
toc: true
---

## Available Breakpoints

Figuration includes five default breakpoints, sometimes referred to as *grid tiers*, for building responsively. These breakpoints can be customized if you are using our source Sass files.

<div class="table-scroll">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th scope="col">Breakpoint</th>
        <th scope="col">Class stub</th>
        <th scope="col">Pixel Dimension</th>
        <th scope="col">Em Dimension</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Extra Small</td>
        <td><em>None</em></td>
        <td>&lt;576px</td>
        <td>&lt;36em</td>
      </tr>
      <tr>
        <td>Small</td>
        <td><code>sm</code></td>
        <td>&ge;576px</td>
        <td>&ge;36em</td>
      </tr>
      <tr>
        <td>Medium</td>
        <td><code>md</code></td>
        <td>&ge;768px</td>
        <td>&ge;48em</td>
      </tr>
      <tr>
        <td>Large</td>
        <td><code>lg</code></td>
        <td>&ge;992px</td>
        <td>&ge;62em</td>
      </tr>
      <tr>
        <td>Extra large</td>
        <td><code>xl</code></td>
        <td>&ge;1200px</td>
        <td>&ge;75em</td>
      </tr>
    </tbody>
  </table>
</div>

Breakpoints are representative of a subset of common device sizes and viewport dimensions&mdash;they do not target every use case or device. Instead, the ranges provide a strong and consistent foundation to build on for nearly any device.

These breakpoints are defined by the `$grid-breakpoints` Sass map in `_settings.scss`.

{% capture highlight %}
$grid-breakpoints: (
    xs: 0,
    sm: bp-to-em(576px),
    md: bp-to-em(768px),
    lg: bp-to-em(992px),
    xl: bp-to-em(1200px)
);
{% endcapture %}
{% renderHighlight highlight, "sass" %}

For accessibility reasons, the Sass internally maps the pixel defined breakpoints into `em` values.  We assume a 16px default root font size, since this is the default for most browsers.

{% capture callout %}
PX vs EM Controversy
{.h5}

While this is a very opinionated topic, Figuration has chosen the `em` route for greater accessibility. We believe strongly that this is the correct direction moving forward.

Some reference material - may be competing points of view:

- [https://zellwk.com/blog/media-query-units/](https://zellwk.com/blog/media-query-units/)
- [https://github.com/twbs/bootstrap/pull/17403](https://github.com/twbs/bootstrap/pull/17403)
- [https://nicolas-hoizey.com/2016/03/people-don-t-change-the-default-16px-font-size-in-their-browser.html](https://nicolas-hoizey.com/2016/03/people-don-t-change-the-default-16px-font-size-in-their-browser.html)
{% endcapture %}
{% renderCallout, callout, "info" %}

## Breakpoint Nomenclature

Since Figuration is developed to be mobile first by default, we have created our class naming structure to **not** use the smallest breakpoint designation, except for a few certain instances.

Classes that apply to all breakpoints, from `xs` to `xl`, have no breakpoint abbreviation in them. This is because those classes are applied from `min-width: 0` and up, and thus are not bound by a media query. The remaining breakpoints, however, do include a breakpoint abbreviation.

Building from the base component or utility name, most classes are named using the format `.base-{direction}-{dimension}` for `xs` and `.base-{breakpoint}-{direction}-{dimension}` for `sm`, `md`, `lg`, and `xl`.  In the case of some utilites that have abbreviated names, such as the [spacing utilities]({{ site.path }}/{{ version.docs }}/utilities/spacing), the format is `.abbr{direction}-{breakpoint}-{dimension}`.

The only special case is where there are `*-up` or `*-down` variants for certain components or classes, the breakpoint designation.  Only then is the minimum breakpoint designation used in the class name.

A quick example using some of Figuration's [Typography utility classes]({{ site.path }}/{{ version.docs }}/utilities/typography).

{% capture example %}
<p class="text-end">Right aligned text on all viewport sizes. (<strong>No <code>xs</code> class designation!</strong>)</p>
<p class="text-sm-end">Right aligned text on viewports sized SM (small) or wider.</p>
<p class="text-md-end">Right aligned text on viewports sized MD (medium) or wider.</p>
<p class="text-lg-end">Right aligned text on viewports sized LG (large) or wider.</p>
<p class="text-xl-end">Right aligned text on viewports sized XL (extra-large) or wider.</p>
{% endcapture %}
{% renderExample example %}

## Responsive Breakpoints

Figuration uses a handful of [media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries) to create sensible breakpoints for our layouts and interfaces. These breakpoints are mostly based on minimum viewport widths and allow us to scale up elements as the viewport changes.

### min-width

Figuration primarily uses the following media query ranges—or breakpoints—in our source Sass files for our layout, grid system, and components.

Since we write our source CSS in Sass, all our media queries are available via Sass mixins.

{% capture highlight %}
// No media query needed since the `xs` breakpoint is effectively `@media (min-width: 0) { ... }`
@include media-breakpoint-up(sm) { ... }
@include media-breakpoint-up(md) { ... }
@include media-breakpoint-up(lg) { ... }
@include media-breakpoint-up(xl) { ... }

// Example: Hide starting at `min-width: 0`, and then show at the `sm` breakpoint
.custom-class {
  display: none;
}

@include media-breakpoint-up(sm) {
  .custom-class {
    display: block;
  }
}
{% endcapture %}
{% renderHighlight highlight, "sass" %}

When compiled these mixins will output media queries based on the values defined in the `$grid-breakpoints` map.

{% capture highlight %}
// Extra small devices (portrait phones, less than 36em/576px)
// No media query for `xs` since this is the default in Figuration

// Small devices (landscape phones, 36em/576px and up)
@media (min-width: 36em) { ... }

// Medium devices (tablets, 48em/768px and up)
@media (min-width: 48em) { ... }

// Large devices (desktops, 62em/992px and up)
@media (min-width: 62em) { ... }

// Extra large devices (large desktops, 75em/1200px and up)
@media (min-width: 75em) { ... }
{% endcapture %}
{% renderHighlight highlight, "sass" %}

### max-width

We occasionally need to use media queries that go in the other direction (the given screen size *or smaller*):

{% capture highlight %}
@include media-breakpoint-down(xs) { ... }
@include media-breakpoint-down(sm) { ... }
@include media-breakpoint-down(md) { ... }
@include media-breakpoint-down(lg) { ... }
// No media query since the `xl` breakpoint has no upper bound on its width

// Example: Style from medium breakpoint and down
@include media-breakpoint-down(md) {
  .custom-class {
    display: block;
  }
}
{% endcapture %}
{% renderHighlight highlight, "sass" %}

These Sass mixins compile out as `max-width` media queries that subtract `0.2em` from the defined breakpoint values.

{% capture highlight %}
// Extra small devices (portrait phones, less than 36em/576px)
@media (max-width: 35.98em) { ... }

// Small devices (landscape phones, less than 48em/768px)
@media (max-width: 47.98em) { ... }

// Medium devices (tablets, less than 62em/992px)
@media (max-width: 61.98em) { ... }

// Large devices (desktops, less than 75em/1200px)
@media (max-width: 74.98em) { ... }

// Extra large devices (large desktops)
// No media query since the `xl` breakpoint has no upper bound on its width
{% endcapture %}
{% renderHighlight highlight, "sass" %}

{% capture callout %}
**Why subtract .02em?** Browsers don’t currently support [range context queries](https://www.w3.org/TR/mediaqueries-4/#range-context), so we work around the limitations of [`min-` and `max-` prefixes](https://www.w3.org/TR/mediaqueries-4/#mq-min-max) and viewports with fractional widths (which can occur under certain conditions on high-dpi devices, for instance) by using values with higher precision. The `0.2em` translates into a fractional pixel value.
{% endcapture %}
{% renderCallout, callout, "info" %}

### Single Breakpoint

There are also media queries and mixins for targeting a single segment of screen sizes using the minimum and maximum breakpoint widths.

{% capture highlight %}
@include media-breakpoint-only(xs) { ... }
@include media-breakpoint-only(sm) { ... }
@include media-breakpoint-only(md) { ... }
@include media-breakpoint-only(lg) { ... }
@include media-breakpoint-only(xl) { ... }
{% endcapture %}
{% renderHighlight highlight, "sass" %}

When compiled the following media queries are generated.

{% capture highlight %}
// Extra small devices
@media (max-width: 35.98em) { ... }

// Small devices
@media (min-width: 36em) and (max-width: 47.98em) { ... }

// Medium devices
@media (min-width: 48em) and (max-width: 61.98em) { ... }

// Large devices
@media (min-width: 62em) and (max-width: 74.98em) { ... }

// Extra large devices
@media (min-width: 75em) { ... }
{% endcapture %}
{% renderHighlight highlight, "sass" %}

### Multiple Breakpoints

Similarly, media queries may span multiple breakpoint widths:

{% capture highlight %}
@include media-breakpoint-between(sm, lg) { ... }
{% endcapture %}
{% renderHighlight highlight, "sass" %}

Resulting in:

{% capture highlight %}
// Example
// Starting with small devices, up to and including large devices
@media (min-width: 36em) and (max-width: 74.98em) { ... }
{% endcapture %}
{% renderHighlight highlight, "sass" %}

## Sass Reference

### Variables

The available [Customization options]({{ site.path }}/{{ version.docs }}/get-started/options/), or Sass variables, that can be customized for breakpoints.

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
        <td><code>$grid-breakpoints</code></td>
        <td>map</td>
        <td><pre><code>(
    xs: 0,
    sm: bp-to-em(576px),
    md: bp-to-em(768px),
    lg: bp-to-em(992px),
    xl: bp-to-em(1200px)
);</code></pre></td>
        <td>
          Mapping of breakpoint names to their minimum widths.
        </td>
      </tr>
    </tbody>
  </table>
</div>

### Mixins

Here are the mixins related to alerts that we use to help generate our CSS. You can also uses these mixins to generate your own custom components or utilities.

#### media-breakpoint-up

Create `min-width` media query for a given breakpoint.

{% capture highlight %}
@mixin media-breakpoint-up($name, $breakpoints: $grid-breakpoints)
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
        <td><code>$name</code></td>
        <td>string</td>
        <td><code>''</code></td>
        <td>
          Name of a breakpoint.
        </td>
      </tr>
      <tr>
        <td><code>$breakpoints</code></td>
        <td>map</td>
        <td><code>$grid-breakpoints</code></td>
        <td>
          Map of breakpoints sizes to use in creating the media query.
        </td>
      </tr>
    </tbody>
  </table>
</div>

#### media-breakpoint-down

Create `max-width` media query for a given breakpoint.

{% capture highlight %}
@mixin media-breakpoint-down($name, $breakpoints: $grid-breakpoints)
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
        <td><code>$name</code></td>
        <td>string</td>
        <td><code>''</code></td>
        <td>
          Name of a breakpoint.
        </td>
      </tr>
      <tr>
        <td><code>$breakpoints</code></td>
        <td>map</td>
        <td><code>$grid-breakpoints</code></td>
        <td>
          Map of breakpoints sizes to use in creating the media query.
        </td>
      </tr>
    </tbody>
  </table>
</div>

#### media-breakpoint-only

Create a 'ranged' media query containing only the boundaries for the given breakpoint.

{% capture highlight %}
@mixin media-breakpoint-only($name, $breakpoints: $grid-breakpoints)
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
        <td><code>$name</code></td>
        <td>string</td>
        <td><code>''</code></td>
        <td>
          Name of a breakpoint.
        </td>
      </tr>
      <tr>
        <td><code>$breakpoints</code></td>
        <td>map</td>
        <td><code>$grid-breakpoints</code></td>
        <td>
          Map of breakpoints sizes to use in creating the media query.
        </td>
      </tr>
    </tbody>
  </table>
</div>

#### media-breakpoint-between

Create a 'ranged' media query containing the lower and upper boundaries for the given breakpoints.

{% capture highlight %}
@mixin media-breakpoint-between($lower, $upper, $breakpoints: $grid-breakpoints)
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
        <td><code>$lower</code></td>
        <td>string</td>
        <td><code>''</code></td>
        <td>
          Name of a breakpoint for the lower boundary (<code>min-width</code>).
        </td>
      </tr>
      <tr>
        <td><code>$upper</code></td>
        <td>string</td>
        <td><code>''</code></td>
        <td>
          Name of a breakpoint for the upper boundary (<code>max-width</code>).
        </td>
      </tr>
      <tr>
        <td><code>$breakpoints</code></td>
        <td>map</td>
        <td><code>$grid-breakpoints</code></td>
        <td>
          Map of breakpoints sizes to use in creating the media query.
        </td>
      </tr>
    </tbody>
  </table>
</div>
