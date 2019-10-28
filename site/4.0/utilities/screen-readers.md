---
layout: doc
title: Screen Readers
description: Visually hide content without sacrificing screen reader accessibility.
group: utilities
---

<div class="h3 cf-toc-header">Page Contents</div>

${toc}

## Screen Reader Only Content

Hide an element to all devices **except screen readers** with `.sr-only`. Use `.sr-only-focusable` to show an element only when it becomes focused (e.g. by a keyboard-only user). Can also be used as mixins.

There are also responsive variants available in the forms `.sr-only{-breakpoint}`, `.sr-only{-breakpoint}-down`, `.sr-only{-breakpoint}-focusable`, and `.sr-only{-breakpoint}-down-focusable`.  For example, to visually hide content, **except for screen readers**, for a `sm` or smaller screens you would use `.sr-only-sm-down`, or `.sr-only-sm-down-focusable` when the element should be shown only when focused for smaller screens.

These classes are exceptionally useful helping to follow [accessibility best practices]({{ site.path }}/{{ version.docs }}/get-started/accessibility).

**Heads up!** There is no `.sr-only-*` classes created for the smallest breakpoint and no `.sr-only-*-down` classes created for the largest breakpoint, `.sr-only-xs`, `.sr-only-xs-focusable`, `.sr-only-xl-down`, `.sr-only-xl-focusable-down`, since they are functionally equivalent to using `.sr-only` or `.sr-only-focusable`.

{% capture example %}
<h3 class="sr-only-sm-down">Title for Screen Readers</h3>

<a class="sr-only-focusable" href="#content">Skip to main content</a>
{% endcapture %}
{% renderExample example %}

{% capture highlight %}
// Usage as a mixin
.skip-navigation {
  @include sr-only-focusable;
}
{% endcapture %}
{% renderHighlight highlight, "sass" %}

## Image Replacement

Visually hide the text and show an image replacement by using a `background-image`.

{% capture example %}
<h1 style="background-image: url('{{ site.path }}/assets/brand/figuration-solid.svg'); width: 3rem; height: 3rem;">
  <span class="sr-only">CAST Figuration</span>
</h1>
{% endcapture %}
{% renderExample example %}

## Hiding Content

Force an element to be hidden (including for screen readers) with the use of `.d{-breakpoint}-none` and `.d{-breakpoint}-down-none` classes.

A section on the [display utilities page]({{ site.path }}/{{ version.docs }}/utilities/display/#responsively-hiding-content) gives more detail about how these classes and breakpoints are related.

## Invisible Content

The `.invisible` and `.visible` classes can be used to toggle only the `visibility` of an element, meaning its `display` is not modified and the element can still affect the flow of the document.

The [visibility utilities page]({{ site.path }}/{{ version.docs }}/utilities/visibility/) gives more detail.

## Useful Resources

Still have questions?  There are some links to external resources avaiable in the [screen reader section on the Accessibility page]({{ site.path }}/{{ version.docs }}/get-started/accessibility/#screen-reader-only-content)

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
        <td><code>$enable-utility-sronly</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the position utility classes.
          Smaller segements of the position utilities can be disabled with the following <code>$enable-*</code> variables.
        </td>
      </tr>
      <tr>
        <td><code>$enable-utility-sronly-common</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the base `.sr-only` utility class.
        </td>
      </tr>
      <tr>
        <td><code>$enable-utility-sronly-focusable</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the base `.sr-only-focusable` utility class.
        </td>
      </tr>
      <tr>
        <td><code>$enable-utility-sronly-responsive</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the responsive screen reader only utility classes.
        </td>
      </tr>
      <tr>
        <td><code>$enable-utility-sronly-responsive-down</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the down responsive down variants of screen reader only utility classes.
        </td>
      </tr>
    </tbody>
  </table>
</div>

### Mixins

Here are the mixins related to this grouping of utility classes that we use to help generate our CSS.  You can also uses these mixins to generate your own custom components or utilities.

#### sr-only

Only display content to screen readers.

{% capture highlight %}
@include sr-only();
{% endcapture %}
{% renderHighlight highlight, "sass" %}

#### sr-only-focusable

Use in conjunction with `.sr-only` to only display content when it becomes focused.

{% capture highlight %}
@include sr-only-focusable();
{% endcapture %}
{% renderHighlight highlight, "sass" %}
