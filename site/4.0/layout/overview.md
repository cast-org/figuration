---
layout: doc
title: Layout
description: Figuration includes several components and options for laying out your project, including wrapping containers, a powerful grid system, and responsive utility classes.
group: layout
toc: true
---

## Containers

Containers are the most basic layout element in Figuration and are **required when using the grid system**. Containers are used to contain, pad, and (sometimes) center the content within them.

While containers *can* be nested, most layouts do not require a nested container.

There are three different container types available:
- `.container`, which sets a `max-width` at each responsive breakpoint
- `.container-fluid`, which is `width: 100%` at all breakpoints
- `.container-{breakpoint}`, which is `width: 100%` until the specified breakpoint

See them in action and compare them in our [Grid example]({{ site.path }}/{{ version.docs }}/examples/grid/#containers).

The table below illustrates how each container's `max-width` compares to the original `.container` and `.container-fluid` across each breakpoint.

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
        <td><code>.container</code></td>
        <td class="text-muted">100%</td>
        <td>544px (33.75rem)</td>
        <td>720px (45rem)</td>
        <td>960px (60rem)</td>
        <td>1152px (72rem)</td>
      </tr>
      <tr>
        <td><code>.container-sm</code></td>
        <td class="text-muted">100%</td>
        <td>544px (33.75rem)</td>
        <td>720px (45rem)</td>
        <td>960px (60rem)</td>
        <td>1152px (72rem)</td>
      </tr>
      <tr>
        <td><code>.container-md</code></td>
        <td class="text-muted">100%</td>
        <td class="text-muted">100%</td>
        <td>720px (45rem)</td>
        <td>960px (60rem)</td>
        <td>1152px (72rem)</td>
      </tr>
      <tr>
        <td><code>.container-lg</code></td>
        <td class="text-muted">100%</td>
        <td class="text-muted">100%</td>
        <td class="text-muted">100%</td>
        <td>960px (60rem)</td>
        <td>1152px (72rem)</td>
      </tr>
      <tr>
        <td><code>.container-xl</code></td>
        <td class="text-muted">100%</td>
        <td class="text-muted">100%</td>
        <td class="text-muted">100%</td>
        <td class="text-muted">100%</td>
        <td>1152px (72rem)</td>
      </tr>
      <tr>
        <td><code>.container-fluid</code></td>
        <td class="text-muted">100%</td>
        <td class="text-muted">100%</td>
        <td class="text-muted">100%</td>
        <td class="text-muted">100%</td>
        <td class="text-muted">100%</td>
      </tr>
    </tbody>
  </table>
</div>

### Fixed Width

Use `.container` for a fixed-width container with a defined `max-width` per breakpoint.

{% capture highlight %}
<div class="container">
  <!-- Content here -->
</div>
{% endcapture %}
{% renderHighlight highlight, "html" %}

### Fluid

Use `.container-fluid` for a full width container, spanning the entire width of the viewport.

{% capture highlight %}
<div class="container-fluid">
  ...
</div>
{% endcapture %}
{% renderHighlight highlight, "html" %}

### Responsive

Responsive containers allow you to specify a class that is 100% wide until the specified breakpoint is reached, after which we apply `max-width`s for each of the higher breakpoints. For example, `.container-sm` is 100% wide to start until the `sm` breakpoint is reached, where it will scale up with `md`, `lg`, and `xl`.

{% capture highlight %}
<div class="container-sm">100% wide until small breakpoint</div>
<div class="container-md">100% wide until medium breakpoint</div>
<div class="container-lg">100% wide until large breakpoint</div>
<div class="container-xl">100% wide until extra large breakpoint</div>
{% endcapture %}
{% renderHighlight highlight, "html" %}

## Responsive Breakpoints

Since Figuration is developed to be mobile first, we use a handful of [media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries) to create sensible breakpoints for our layouts and interfaces. These breakpoints are mostly based on minimum viewport widths and allow us to scale up elements as the viewport changes.

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

Figuration primarily uses the following media query ranges—or breakpoints—in our source Sass files for our layout, grid system, and components.

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

We occasionally use media queries that go in the other direction (the given screen size *or smaller*):

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

Once again, these media queries are also available via Sass mixins:

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

There are also media queries and mixins for targeting a single segment of screen sizes using the minimum and maximum breakpoint widths.

{% capture highlight %}
// Extra small devices (portrait phones, less than 36em/576px)
@media (max-width: 35.98em) { ... }

// Small devices (landscape phones, 36em/576px and up)
@media (min-width: 36em) and (max-width: 47.98em) { ... }

// Medium devices (tablets, 48em/768px and up)
@media (min-width: 48em) and (max-width: 61.98em) { ... }

// Large devices (desktops, 62em/992px and up)
@media (min-width: 62em) and (max-width: 74.98em) { ... }

// Extra large devices (large desktops, 75em/1200px and up)
@media (min-width: 75em) { ... }
{% endcapture %}
{% renderHighlight highlight, "sass" %}

These media queries are also available via Sass mixins:

{% capture highlight %}
@include media-breakpoint-only(xs) { ... }
@include media-breakpoint-only(sm) { ... }
@include media-breakpoint-only(md) { ... }
@include media-breakpoint-only(lg) { ... }
@include media-breakpoint-only(xl) { ... }
{% endcapture %}
{% renderHighlight highlight, "sass" %}

Similarly, media queries may span multiple breakpoint widths:

{% capture highlight %}
// Example
// Medium devices (tablets, 48em/768px) up to Extra Large devices (desktops, 75em/1200px)
@media (min-width: 48em) and (max-width: 74.98em) { ... }
{% endcapture %}
{% renderHighlight highlight, "sass" %}

The Sass mixin for targeting the same screen size range would be:

{% capture highlight %}
@include media-breakpoint-between(md, xl) { ... }
{% endcapture %}
{% renderHighlight highlight, "sass" %}

## Breakpoint Nomenclature

Since Figuration is built as a mobile first framework, by default, we have created our class naming structure to **not** use the smallest breakpoint designation, except for a few certain instances.  However, this is configurable for custom builds by overriding `$enable-bp-smallest` option referenced in the [Global Options]({{ site.path }}/{{ version.docs }}/get-started/options/#global-options) settings.

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

## Z-index

Several Figuration components utilize `z-index`, the CSS property that helps control layout by providing a third axis to arrange content. We utilize a default z-index scale in Figuration that's been designed to properly layer navigation, tooltips and popovers, modals, and more.

We use a defined set because of the layered components—tooltips, popovers, navbars, dropdowns, modals—so they remain consistent in terms of behavior.

Customizing these values is most likely not needed, and we don't recommend adjusting the values.  However, if you change one, you will need to review and possibly update all of the other values.

{% capture highlight %}
$zindex-dropdown:          1000 !default;
$zindex-sticky:            1010 !default;
$zindex-fixed:             1020 !default;
$zindex-popover:           1030 !default;
$zindex-tooltip:           1040 !default;
$zindex-modal-backdrop:    1050 !default;
$zindex-modal:             1060 !default;
{% endcapture %}
{% renderHighlight highlight, "sass" %}

Background elements&mdash;like the backdrops that allow click-dismissing&mdash;tend to reside on a lower `z-index`s, while navigation and popovers utilize higher `z-index`s to ensure they overlay surrounding content.  Modals get a higher z-index so they are placed above popover/tooltip items, in the case that one or more of those items is held open.

To handle overlapping borders within components (e.g., buttons and inputs in input groups), we use low single digit `z-index` values of `1`, `2`, and `3` for default, hover, and active states. On hover/focus/active, we bring a particular element to the forefront with a higher `z-index` value to show their border over the sibling elements.
