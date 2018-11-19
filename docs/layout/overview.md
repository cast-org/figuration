---
layout: docs
title: Overview
group: layout
redirect_from: "/layout/"
---

Figuration includes several components and options for laying out your project, including wrapping containers, a powerful grid system, and responsive utility classes.

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Containers

Containers are the most basic layout element in Figuration and are **required when using the grid system**. Choose from a responsive, fixed-width container (meaning its `max-width` changes at each breakpoint) or fluid-width (meaning it's `100%` wide all the time).

While containers *can* be nested, most layouts do not require a nested container.

<div class="cf-example">
    <div class="cf-example-container">
        <div class="cf-example-container-header"></div>
        <div class="cf-example-container-sidebarL"></div>
        <div class="cf-example-container-sidebarR"></div>
        <div class="cf-example-container-body"></div>
    </div>
</div>

{% highlight html %}
<div class="container">
  <!-- Content here -->
</div>
{% endhighlight %}

Use `.container-fluid` for a full width container, spanning the entire width of the viewport.

<div class="cf-example">
  <div class="cf-example-container cf-example-container-fluid">
    <div class="cf-example-container-header"></div>
    <div class="cf-example-container-sidebarL"></div>
    <div class="cf-example-container-sidebarR"></div>
    <div class="cf-example-container-body"></div>
  </div>
</div>

{% highlight html %}
<div class="container-fluid">
  ...
</div>
{% endhighlight %}

## Responsive Breakpoints

Since Figuration is developed to be mobile first, we use a handful of [media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries) to create sensible breakpoints for our layouts and interfaces. These breakpoints are mostly based on minimum viewport widths and allow us to scale up elements as the viewport changes.

For accessibility reasons, the Sass internally maps the pixel defined breakpoints into `em` values.  We assume a 16px default root font size, since this is the default for most browsers.

{% capture callout %}
PX vs EM Controversy
{:.h5 .no_toc}

While this is a very opinionated topic, Figuration has chosen the `em` route for greater accessibility. We believe strongly that this is the correct direction moving forward.

Some reference material - may be competing points of view:

- [https://zellwk.com/blog/media-query-units/](https://zellwk.com/blog/media-query-units/)
- [https://github.com/twbs/bootstrap/pull/17403](https://github.com/twbs/bootstrap/pull/17403)
- [https://nicolas-hoizey.com/2016/03/people-don-t-change-the-default-16px-font-size-in-their-browser.html](https://nicolas-hoizey.com/2016/03/people-don-t-change-the-default-16px-font-size-in-their-browser.html)
{% endcapture %}
{% include callout.html content=callout type="info" %}

Figuration primarily uses the following media query ranges---or breakpoints---in our source Sass files for our layout, grid system, and components.

{% highlight scss %}
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
{% endhighlight %}

Since we write our source CSS in Sass, all our media queries are available via Sass mixins.

{% highlight scss %}
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
{% endhighlight %}

We occasionally use media queries that go in the other direction (the given screen size *or smaller*):

{% highlight scss %}
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
{% endhighlight %}

Once again, these media queries are also available via Sass mixins:

{% highlight scss %}
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
{% endhighlight %}

There are also media queries and mixins for targeting a single segment of screen sizes using the minimum and maximum breakpoint widths.

{% highlight scss %}
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
{% endhighlight %}

These media queries are also available via Sass mixins:

{% highlight scss %}
@include media-breakpoint-only(xs) { ... }
@include media-breakpoint-only(sm) { ... }
@include media-breakpoint-only(md) { ... }
@include media-breakpoint-only(lg) { ... }
@include media-breakpoint-only(xl) { ... }
{% endhighlight %}

Similarly, media queries may span multiple breakpoint widths:

{% highlight scss %}
// Example
// Medium devices (tablets, 48em/768px) up to Extra Large devices (desktops, 75em/1200px)
@media (min-width: 48em) and (max-width: 74.98em) { ... }
{% endhighlight %}

The Sass mixin for targeting the same screen size range would be:

{% highlight scss %}
@include media-breakpoint-between(md, xl) { ... }
{% endhighlight %}

## Breakpoint Nomenclature

Since Figuration is built as a mobile first framework, by default, we have created our class naming structure to **not** use the smallest breakpoint designation, except for a few certain instances.  However, this is configurable for custom builds by overriding `$enable-bp-smallest` option referenced in the [Global Options]({{ site.baseurl }}/get-started/options/#global-options) settings.

Classes that apply to all breakpoints, from `xs` to `xl`, have no breakpoint abbreviation in them. This is because those classes are applied from `min-width: 0` and up, and thus are not bound by a media query. The remaining breakpoints, however, do include a breakpoint abbreviation.

Building from the base component or utility name, most classes are named using the format `.base-{direction}-{dimension}` for `xs` and `.base-{breakpoint}-{direction}-{dimension}` for `sm`, `md`, `lg`, and `xl`.  In the case of some utilites that have abbreviated names, such as the [spacing utilities]({{ site.baseurl }}/utilities/spacing), the format is `.abbr{direction}-{breakpoint}-{dimension}`.

The only special case is where there are `*-up` or `*-down` variants for certain components or classes, the breakpoint designation.  Only then is the minimum breakpoint designation used in the class name.

A quick example using some of Figuration's [Typography utility classes]({{ site.baseurl }}/utilities/typography).

{% example html %}
<p class="text-end">Right aligned text on all viewport sizes. (<strong>No <code>xs</code> class designation!</strong>)</p>
<p class="text-sm-end">Right aligned text on viewports sized SM (small) or wider.</p>
<p class="text-md-end">Right aligned text on viewports sized MD (medium) or wider.</p>
<p class="text-lg-end">Right aligned text on viewports sized LG (large) or wider.</p>
<p class="text-xl-end">Right aligned text on viewports sized XL (extra-large) or wider.</p>
{% endexample %}

## Z-index

Several Figuration components utilize `z-index`, the CSS property that helps control layout by providing a third axis to arrange content. We utilize a default z-index scale in Figuration that's been designed to properly layer navigation, tooltips and popovers, modals, and more.

We use a defined set because of the layered components---tooltips, popovers, navbars, dropdowns, modals---so they remain consistent in terms of behavior.

Customizing these values is most likely not needed, and we don't recommend adjusting the values.  However, if you change one, you will need to review and possibly update all of the other values.

{% highlight scss %}
$zindex-dropdown:          1000 !default;
$zindex-sticky:            1010 !default;
$zindex-fixed:             1020 !default;
$zindex-popover:           1030 !default;
$zindex-tooltip:           1040 !default;
$zindex-modal-backdrop:    1050 !default;
$zindex-modal:             1060 !default;
{% endhighlight %}

Background elements&mdash;like the backdrops that allow click-dismissing&mdash;tend to reside on a lower `z-index`s, while navigation and popovers utilize higher `z-index`s to ensure they overlay surrounding content.  Modals get a higher z-index so they are placed above popover/tooltip items, in the case that one or more of those items is held open.

To handle overlapping borders within components (e.g., buttons and inputs in input groups), we use low single digit `z-index` values of `1`, `2`, and `3` for default, hover, and active states. On hover/focus/active, we bring a particular element to the forefront with a higher `z-index` value to show their border over the sibling elements.
