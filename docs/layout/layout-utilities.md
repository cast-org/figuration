---
layout: docs
title: Layout Utilities
group: layout
---

For faster mobile-friendly and responsive development, Figuration includes utility classes for showing, hiding, aligning, and spacing content. Below is a primer on what's included, and how these utilities can help you with layout.

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Changing `display`

Use the [display utilities]({{ site.baseurl }}/utilities/display/) for responsively toggling common values of the `display` property. Mix it with our grid system, content, or components to show or hide them across specific viewports.

## Flexbox options

Figuration is built with some flexbox support, but not every element's `display` been changed to `display: flex` as this would add many unnecessary overrides and unexpectedly change key browser behaviors. Many of [the components]({{ site.baseurl }}/components/) are built with support for [flexbox enabled modes]({{ site.baseurl }}/utilities/flexbox/).

Should you need to add `display: flex` to an element, do so with `.d-flex` or one of the responsive variants (e.g., `.d-sm-flex`). You'll need this class or `display` value to allow the use of our extra [flexbox utilities]({{ site.baseurl }}/utilities/flexbox/) for sizing, alignment, spacing, and more.

## Margin and Padding

Use the `margin` and `padding` [spacing utilities]({{ site.baseurl }}/utilities/spacing/) to control how elements and components are spaced and sized. Figuration includes scaled spacing utilities, based on a `1rem` value default `$spacer` variable. Choose values for all viewports (e.g., `.mr-1` for `margin-right: 1rem`), or pick responsive variants to target specific viewports (e.g., `.mr-md-0_5` for `margin-right: 0.5rem` starting at the `md` breakpoint).

## Toggle `visibility`

When toggling `display` isn't needed, you can toggle the `visibility` of an element with our [visibility utilities]({{ site.baseurl }}/utilities/visibility/). Invisible elements will still affect the layout of the page, but are visually hidden from visitors.
