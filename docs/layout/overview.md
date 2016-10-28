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

Since Figuration is developed to be mobile first, we use a handful of [media queries](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Media_queries) to create sensible breakpoints for our layouts and interfaces. These breakpoints are mostly based on minimum viewport widths and allow us to scale up elements as the viewport changes.

For accessibility reasons, the Sass internally maps the pixel defined breakpoints into `em` values.  We assume a 16px default root font size, since this is the default for most browsers.

{% callout info %}
#### PX vs EM Controversy
While this is a very opinionated topic, Figuration has chosen the `em` route for greater accessibility. We believe strongly that this is the correct direction moving forward.

Some reference material - may be competing points of view:

- [http://zellwk.com/blog/media-query-units](http://zellwk.com/blog/media-query-units)
- [https://github.com/twbs/bootstrap/pull/17403](https://github.com/twbs/bootstrap/pull/17403)
- [https://nicolas-hoizey.com/2016/03/people-don-t-change-the-default-16px-font-size-in-their-browser.html](https://nicolas-hoizey.com/2016/03/people-don-t-change-the-default-16px-font-size-in-their-browser.html)

{% endcallout %}

Figuration primarily uses the following media query ranges---or breakpoints---in our source Sass files for our layout, grid system, and components.

{% highlight scss %}
// Extra small devices (portrait phones, less than 34em)
// No media query since this is the default in Bootstrap

// Small devices (landscape phones, 34em/544px and up)
@media (min-width: 34em) { ... }

// Medium devices (tablets, 48em/768px and up)
@media (min-width: 48em) { ... }

// Large devices (desktops, 62em/992px and up)
@media (min-width: 62em) { ... }

// Extra large devices (large desktops, 75em/1200px and up)
@media (min-width: 75em) { ... }
{% endhighlight %}

Since we write our source CSS in Sass, all our media queries are available via Sass mixins.

{% highlight scss %}
@include media-breakpoint-up(xs) { ... }
@include media-breakpoint-up(sm) { ... }
@include media-breakpoint-up(md) { ... }
@include media-breakpoint-up(lg) { ... }
@include media-breakpoint-up(xl) { ... }

// Example usage:
@include media-breakpoint-up(sm) {
  .some-class {
    display: block;
  }
}
{% endhighlight %}

We occasionally use media queries that go in the other direction (the given screen size *or smaller*):

{% highlight scss %}
// Extra small devices (portrait phones, less than 34em/544px)
@media (max-width: 33.9375em) { ... }

// Small devices (landscape phones, less than 48em/768px)
@media (max-width: 47.9375em) { ... }

// Medium devices (tablets, less than 62em/992px)
@media (max-width: 61.9375em) { ... }

// Large devices (desktops, less than 75em/1200px)
@media (max-width: 74.9375em) { ... }

// Extra large devices (large desktops)
// No media query since the extra-large breakpoint has no upper bound on its width
{% endhighlight %}

Once again, these media queries are also available via Sass mixins:

{% highlight scss %}
@include media-breakpoint-down(xs) { ... }
@include media-breakpoint-down(sm) { ... }
@include media-breakpoint-down(md) { ... }
@include media-breakpoint-down(lg) { ... }
{% endhighlight %}

We also have media between the breakpoint's minimum and maximum widths for only the given screen size:

{% highlight scss %}
// Extra small devices (portrait phones, less than 544px)
@media (max-width: 543px) { ... }

// Small devices (landscape phones, 34em/544px and up)
@media (min-width: 34em) and (max-width: 47.9375em) { ... }

// Medium devices (tablets, 48em/768px and up)
@media (min-width: 48em) and (max-width: 61.9375em) { ... }

// Large devices (desktops, 62em/992px and up)
@media (min-width: 62em) and (max-width: 74.9375em) { ... }

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

And finally media that spans multiple breakpoint widths:

{% highlight scss %}
// Example
// Medium devices (tablets, 48em/768px and up) and  Large devices (desktops, 62em/992px and up)
@media (min-width: 48em) and (max-width: 74.9375em) { ... }
{% endhighlight %}

The Sass mixin for the above example look like that shown beneath:

{% highlight scss %}
@include media-breakpoint-between(md, lg) { ... }
{% endhighlight %}

## Z-index

Several Figuration components utilize `z-index`, the CSS property that helps control layout by providing a third axis to arrange content. We utilize a default z-index scale in Figuration that's been designed to properly layer navigation, tooltips and popovers, modals, and more.

Customizing these values is most likely not needed, and we don't recommened customizing the values.  However, if you change one, you will need to review and possibly update all of the other values.

{% highlight scss %}
$zindex-dropdown-backdrop:  990 !default;
$zindex-navbar:            1000 !default;
$zindex-dropdown:          1000 !default;
$zindex-popover:           1025 !default;
$zindex-tooltip:           1030 !default;
$zindex-navbar-fixed:      1020 !default;
$zindex-navbar-sticky:     1020 !default;
$zindex-modal-backdrop:    1040 !default;
$zindex-modal:             1050 !default;
{% endhighlight %}

Background elements&mdash;like the backdrops that allow click-dismissing&mdash;tend to reside on a lower `z-index`s, while navigation and popovers utilize higher `z-index`s to ensure they overlay surrounding content.  Modals get a higher z-index so they are placed above popover/tooltip items, in the case that one or more of those items is held open.
