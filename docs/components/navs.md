---
layout: docs
title: Navs
group: components
---

Navigation share general markup and styles, from the base `.nav` class to the active and disabled states. Swap modifier classes to switch between each style.

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Regarding Accessibility

If you are using navs to provide a navigation bar, be sure to add a `role="navigation"` to the most logical parent container of the `<ul>`, or wrap a `<nav>` element around the whole navigation. Do not add the role to the `<ul>` itself, as this would prevent it from being announced as an actual list by assistive technologies.

Note that navigation bars, even if visually styled as tabs with the `.nav-tabs` class, should **not** be given `role="tablist"`, `role="tab"` or `role="tabpanel"` attributes. These are only appropriate for dynamic tabbed interfaces, as described in the [<abbr title="Web Accessibility Initiative">WAI</abbr> <abbr title="Accessible Rich Internet Applications">ARIA</abbr> Authoring Practices](https://www.w3.org/TR/wai-aria-practices/#tabpanel). See our [Tab widget]({{ site.baseurl }}/widgets/tab/) for an example and additional details.

{% callout warning %}
Disabling Anchors
{:.h5}

Please refer to the [Accessiblity notes about disabled anchors]({{ site.baseurl }}/get-started/accessibility/#disabled-anchors).
{% endcallout %}

## Base Nav

The base .nav component is built with flexbox and provides a strong foundation for building all types of navigation components. It includes some style overrides (for working with lists), some link padding for larger hit areas, and basic disabled styling. No active states are included in the base nav.

{% example html %}
<ul class="nav">
  <li class="nav-item">
    <a href="#" class="nav-link active">Active</a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link">Link</a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link">Link</a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link disabled" tabindex="-1">Disabled</a>
  </li>
</ul>
{% endexample %}

Classes are used throughout, so your markup can be super flexible. Use `<ul>`s like above, or roll your own with say a `<nav>` element. Because the `.nav` uses `display: flex`, the nav links behave the same as nav items would, but without the extra markup.

{% example html %}
<nav class="nav">
  <a href="#" class="nav-link active">Active</a>
  <a href="#" class="nav-link">Link</a>
  <a href="#" class="nav-link">Link</a>
  <a href="#" class="nav-link disabled" tabindex="-1">Disabled</a>
</nav>
{% endexample %}

## Available Styles

Change the style of `.nav` components with modifiers and utilities. Mix and match as needed, or build your own.

### Horizontal Alignment

Change the horizontal alignment of your nav with [flexbox utilities]({{ site.baseurl }}/utilities/flexbox/). By default, navs are left-aligned, but you can easily change them to center or right aligned.

Centered with `.flex-center`:

{% example html %}
<ul class="nav flex-center">
  <li class="nav-item">
    <a href="#" class="nav-link active">Active</a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link">Link</a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link">Link</a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link disabled" tabindex="-1">Disabled</a>
  </li>
</ul>
{% endexample %}

Right-aligned with `.flex-end`:

{% example html %}
<ul class="nav flex-end">
  <li class="nav-item">
    <a href="#" class="nav-link active">Active</a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link">Link</a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link">Link</a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link disabled" tabindex="-1">Disabled</a>
  </li>
</ul>
{% endexample %}

### Vertical Alignment

Stack your navigation by changing the flex item direction with the `.flex-column` utility. Need to stack them on some viewports but not others? Use the responsive versions (e.g., `.flex-sm-column`).

{% example html %}
<ul class="nav flex-column">
  <li class="nav-item">
    <a href="#" class="nav-link active">Active</a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link">Link</a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link">Link</a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link disabled" tabindex="-1">Disabled</a>
  </li>
</ul>
{% endexample %}

As always, vertical navigation is possible without <ul>s, too.

{% example html %}
<nav class="nav flex-column">
  <a href="#" class="nav-link active">Active</a>
  <a href="#" class="nav-link">Link</a>
  <a href="#" class="nav-link">Link</a>
  <a href="#" class="nav-link disabled" tabindex="-1">Disabled</a>
</nav>
{% endexample %}

### Tabs

Takes the basic nav from above and adds the `.nav-tabs` class to generate a tabbed interface. Use them to create tabbable regions with our [Tab JavaScript widget]({{ site.baserl}}/widgets/tab/).

{% example html %}
<ul class="nav nav-tabs">
  <li class="nav-item">
    <a href="#" class="nav-link active">Active</a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link">Link</a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link">Link</a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link disabled" tabindex="-1">Disabled</a>
  </li>
</ul>
{% endexample %}

### Pills

Take that same HTML, but use `.nav-pills` instead:

{% example html %}
<ul class="nav nav-pills">
  <li class="nav-item">
    <a href="#" class="nav-link active">Active</a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link">Link</a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link">Link</a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link disabled" tabindex="-1">Disabled</a>
  </li>
</ul>
{% endexample %}

### Vertical Pills

Add `.flex-column` to the `.nav.nav-pills` to stack them vertically. Each `.nav-link` becomes block-level, allowing for larger hit areas.

{% example html %}
<ul class="nav nav-pills flex-column">
  <li class="nav-item">
    <a href="#" class="nav-link active">Active</a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link">Link</a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link">Link</a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link disabled" tabindex="-1">Disabled</a>
  </li>
</ul>
{% endexample %}

As always, vertical pills are possible without `<ul>`s.

{% example html %}
<nav class="nav nav-pills flex-column">
  <a href="#" class="nav-link active">Active</a>
  <a href="#" class="nav-link">Link</a>
  <a href="#" class="nav-link">Link</a>
  <a href="#" class="nav-link disabled" tabindex="-1">Disabled</a>
</nav>
{% endexample %}

### Fill and Justify

Force your `.nav`’s contents to extend the full available width one of two modifier classes. To proportionately fill all available space with your `.nav-items`, use `.nav-fill`. Notice that all horizontal space is occupied, but not every nav item has the same width.

{% example html %}
<ul class="nav nav-pills nav-fill">
  <li class="nav-item">
    <a href="#" class="nav-link active">Active</a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link">Longer link nav</a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link">Link</a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link disabled" tabindex="-1">Disabled</a>
  </li>
</ul>
{% endexample %}

For equal-width elements, use `.nav-justify`. All horizontal space will be occupied by nav links, but unlike the `.nav-fill` above, every nav item will be the same width.

{% example html %}
<ul class="nav nav-pills nav-justify">
  <li class="nav-item">
    <a href="#" class="nav-link active">Active</a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link">Longer link nav</a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link">Link</a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link disabled" tabindex="-1">Disabled</a>
  </li>
</ul>
{% endexample %}

## Working with Flex Utilities
If you need responsive nav variations, consider using a series of [flexbox utilities]({{ site.baseurl}}/utilities/flexbox/). While more verbose, these utilities offer greater customization across responsive breakpoints. In the example below, the nav will be stacked on the lowest breakpoint, then adapt to a horizontal layout that fills the available width starting from the small breakpoint.

{% example html %}
<nav class="nav nav-pills flex-column flex-sm-row">
  <a class="flex-sm-fill text-sm-center nav-link active" href="#">Active</a>
  <a class="flex-sm-fill text-sm-center nav-link" href="#">Link</a>
  <a class="flex-sm-fill text-sm-center nav-link" href="#">Link</a>
  <a class="flex-sm-fill text-sm-center nav-link disabled" href="#">Disabled</a>
</nav>
{% endexample %}

## Using Dropdowns

Add dropdown menus with a little extra HTML and the [Dropdown JavaScript widget]({{ site.baseurl }}/widgets/dropdown/).

{% callout warning %}
Incompatible Widgets
{:.h5}

For accessibility reasons, do not mix use of the [Tab widget]({{ site.baseurl }}/widgets/tab/) and [Dropdown widget]({{ site.baseurl }}/widgets/dropdown/) in the same nav item.  This will cause navigation and usability issues.  One or the other, but not both.
{% endcallout %}

### Tabs with Dropdowns

{% example html %}
<ul class="nav nav-tabs">
  <li class="nav-item">
    <a href="#" class="nav-link active">Active</a>
  </li>
  <li class="nav-item dropdown">
    <a href="#" role="button" class="nav-link dropdown-toggle" data-cfw="dropdown">Dropdown</a>
    <ul class="dropdown-menu">
      <li><a href="#" class="dropdown-item">Action</a></li>
      <li><a href="#" class="dropdown-item">Another action</a></li>
      <li><a href="#" class="dropdown-item">Something else here</a></li>
      <li class="dropdown-divider"></li>
      <li><a href="#" class="dropdown-item">Separated link</a></li>
    </ul>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link">Link</a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link disabled" tabindex="-1">Disabled</a>
  </li>
</ul>
{% endexample %}

### Pills with Dropdowns

{% example html %}
<ul class="nav nav-pills">
  <li class="nav-item">
    <a href="#" class="nav-link active">Active</a>
  </li>
  <li class="nav-item dropdown">
    <a href="#" role="button" class="nav-link dropdown-toggle" data-cfw="dropdown">Dropdown</a>
    <ul class="dropdown-menu">
      <li><a href="#" class="dropdown-item">Action</a></li>
      <li><a href="#" class="dropdown-item">Another action</a></li>
      <li><a href="#" class="dropdown-item">Something else here</a></li>
      <li class="dropdown-divider"></li>
      <li><a href="#" class="dropdown-item">Separated link</a></li>
    </ul>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link">Link</a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link disabled" tabindex="-1">Disabled</a>
  </li>
</ul>
{% endexample %}
