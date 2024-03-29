---
layout: doc
title: Navs
description: Create grouped navigation controls in various visual layouts.
group: components
toc: true
---

## Overview

Navigation share general markup and styles, from the base `.nav` class to the active and disabled states. Swap modifier classes to switch between each style.

## Regarding Accessibility

If you are using navs to provide a navigation bar, be sure to add a `role="navigation"` to the most logical parent container of the `<ul>`, or wrap a `<nav>` element around the whole navigation. Do not add the role to the `<ul>` itself, as this would prevent it from being announced as an actual list by assistive technologies.

To convey the active state to assistive technologies, use the `aria-current` attribute — using the `page` value for current page, or `true` for the current item in a set.

Note that navigation bars, even if visually styled as tabs with the `.nav-tabs` class, should **not** be given `role="tablist"`, `role="tab"` or `role="tabpanel"` attributes. These are only appropriate for dynamic tabbed interfaces, as described in the [ARIA Authoring Practices Guide tab pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel). See our [Tab widget]({{ site.path }}/{{ version.docs }}/widgets/tab/) for an example and additional details.

{%- assign calloutAnchors = version.docs | valueIfEmpty: site.version.docs | prepend: "./" | append: "/partials/callout-warning-disabling-anchors.md" -%}
{% include calloutAnchors %}

## Base Nav

The base `.nav` component is built with flexbox and provides a strong foundation for building all types of navigation components. It includes some style overrides (for working with lists), some link padding for larger hit areas, and basic disabled styling. No visual active states are included in the base nav.

{% capture example %}
<ul class="nav">
  <li class="nav-item">
    <a href="#" class="nav-link active" aria-current="page">Active</a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link">Link</a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
  </li>
</ul>
{% endcapture %}
{% renderExample example %}

Classes are used throughout, so your markup can be super flexible. Use `<ul>`s like above, or roll your own with say a `<nav>` element. Because the `.nav` uses `display: flex`, the nav links behave the same as nav items would, but without the extra markup.

{% capture example %}
<nav class="nav">
  <a href="#" class="nav-link active" aria-current="page">Active</a>
  <a href="#" class="nav-link">Link</a>
  <a href="#" class="nav-link">Link</a>
  <a class="nav-link disabled" aria-disabled="true">Disabled</a>
</nav>
{% endcapture %}
{% renderExample example %}

## Available Styles

Change the style of `.nav` components with modifiers and utilities. Mix and match as needed, or build your own.

### Horizontal Alignment

Change the horizontal alignment of your nav with [flexbox utilities]({{ site.path }}/{{ version.docs }}/utilities/flexbox/#justify-content). By default, navs are left-aligned, but you can easily change them to center or right aligned.

Centered with `.flex-center`:

{% capture example %}
<ul class="nav flex-center">
  <li class="nav-item">
    <a href="#" class="nav-link active" aria-current="page">Active</a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link">Link</a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
  </li>
</ul>
{% endcapture %}
{% renderExample example %}

Right-aligned with `.flex-end`:

{% capture example %}
<ul class="nav flex-end">
  <li class="nav-item">
    <a href="#" class="nav-link active" aria-current="page">Active</a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link">Link</a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
  </li>
</ul>
{% endcapture %}
{% renderExample example %}

### Vertical Alignment

Stack your navigation by changing the flex item direction with the `.nav-vertical` modifier or with the `.flex-column` utility. Need to stack them on some viewports but not others? Use the responsive versions (e.g., `.flex-sm-column`).

{% capture example %}
<ul class="nav nav-vertical">
  <li class="nav-item">
    <a href="#" class="nav-link active" aria-current="page">Active</a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link">Link</a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
  </li>
</ul>
{% endcapture %}
{% renderExample example %}

As always, vertical navigation is possible without `<ul>`s, too.

{% capture example %}
<nav class="nav flex-column">
  <a href="#" class="nav-link active" aria-current="page">Active</a>
  <a href="#" class="nav-link">Link</a>
  <a href="#" class="nav-link">Link</a>
  <a class="nav-link disabled" aria-disabled="true">Disabled</a>
</nav>
{% endcapture %}
{% renderExample example %}

### Pills

Take that same HTML, but use `.nav-pills` instead:

{% capture example %}
<ul class="nav nav-pills">
  <li class="nav-item">
    <a href="#" class="nav-link active" aria-current="page">Active</a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link">Link</a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
  </li>
</ul>
{% endcapture %}
{% renderExample example %}

### Tabs

Takes the basic nav from above and adds the `.nav-tabs` class to generate a tabbed interface. Use them to create tabbable regions with our [Tab JavaScript widget]({{ site.path}}/{{ version.docs }}/widgets/tab/).

{% capture example %}
<ul class="nav nav-tabs">
  <li class="nav-item">
    <a href="#" class="nav-link active" aria-current="page">Active</a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link">Link</a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
  </li>
</ul>
{% endcapture %}
{% renderExample example %}

Flip the tabs upside down by adding `.nav-reverse` to the `.nav`.

{% capture example %}
<ul class="nav nav-tabs nav-reverse">
  <li class="nav-item">
    <a href="#" class="nav-link active" aria-current="page">Active</a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link">Link</a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
  </li>
</ul>
{% endcapture %}
{% renderExample example %}

### Lined

Take that same HTML, but use `.nav-lined` instead:

{% capture example %}
<ul class="nav nav-lined">
  <li class="nav-item">
    <a href="#" class="nav-link active" aria-current="page">Active</a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link">Link</a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
  </li>
</ul>
{% endcapture %}
{% renderExample example %}

Move the line to the top of the lined nav links by adding `.nav-reverse` to the `.nav`.

{% capture example %}
<ul class="nav nav-lined nav-reverse">
  <li class="nav-item">
    <a href="#" class="nav-link active" aria-current="page">Active</a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link">Link</a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
  </li>
</ul>
{% endcapture %}
{% renderExample example %}

### Vertical Pills

Add `.nav-vertical` modifier, or `.flex-column` utility, to the `.nav.nav-pills` to stack them vertically. Each `.nav-link` becomes block-level, allowing for larger hit areas.

{% capture example %}
<ul class="nav nav-pills nav-vertical">
  <li class="nav-item">
    <a href="#" class="nav-link active" aria-current="page">Active</a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link">Link</a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
  </li>
</ul>
{% endcapture %}
{% renderExample example %}

As always, vertical pills are possible without `<ul>`s.

{% capture example %}
<nav class="nav nav-pills flex-column">
  <a href="#" class="nav-link active" aria-current="page">Active</a>
  <a href="#" class="nav-link">Link</a>
  <a href="#" class="nav-link">Link</a>
  <a class="nav-link disabled" aria-disabled="true">Disabled</a>
</nav>
{% endcapture %}
{% renderExample example %}

### Vertical Tabs

Add `.nav-vertical` modifier to the `.nav.nav-tabs` to stack them vertically. Each `.nav-link` becomes block-level, allowing for larger hit areas.

{% capture example %}
<ul class="nav nav-tabs nav-vertical" style="max-width: 15rem;">
  <li class="nav-item">
    <a href="#" class="nav-link active" aria-current="page">Active</a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link">Link</a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
  </li>
</ul>
{% endcapture %}
{% renderExample example %}

As always, vertical tabs are possible without `<ul>`s.

{% capture example %}
<nav class="nav nav-tabs nav-vertical" style="max-width: 15rem;">
  <a href="#" class="nav-link active" aria-current="page">Active</a>
  <a href="#" class="nav-link">Link</a>
  <a href="#" class="nav-link">Link</a>
  <a class="nav-link disabled" aria-disabled="true">Disabled</a>
</nav>
{% endcapture %}
{% renderExample example %}

The direction of the tabs can be swapped by adding `.nav-reverse` to the `.nav`.

{% capture example %}
<ul class="nav nav-tabs nav-vertical nav-reverse" style="max-width: 15rem;">
  <li class="nav-item">
    <a href="#" class="nav-link active" aria-current="page">Active</a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link">Link</a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
  </li>
</ul>
{% endcapture %}
{% renderExample example %}

### Vertical Lined

Add `.nav-vertical` modifier to the `.nav.nav-lined` to stack them vertically. Each `.nav-link` becomes block-level, allowing for larger hit areas.

{% capture example %}
<ul class="nav nav-lined nav-vertical border-e" style="max-width: 15rem;">
  <li class="nav-item">
    <a href="#" class="nav-link active" aria-current="page">Active</a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link">Link</a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
  </li>
</ul>
{% endcapture %}
{% renderExample example %}

As always, vertical lined nav links are possible without `<ul>`s.

{% capture example %}
<nav class="nav nav-lined nav-vertical border-e" style="max-width: 15rem;">
  <a href="#" class="nav-link active" aria-current="page">Active</a>
  <a href="#" class="nav-link">Link</a>
  <a href="#" class="nav-link">Link</a>
  <a class="nav-link disabled" aria-disabled="true">Disabled</a>
</nav>
{% endcapture %}
{% renderExample example %}

The side the lines appear on can be swapped by adding `.nav-reverse` to the `.nav`.

{% capture example %}
<ul class="nav nav-lined nav-vertical nav-reverse border-s" style="max-width: 15rem;">
  <li class="nav-item">
    <a href="#" class="nav-link active" aria-current="page">Active</a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link">Link</a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
  </li>
</ul>
{% endcapture %}
{% renderExample example %}

### Fill and Justify

Force your `.nav`’s contents to extend the full available width with one of two modifier classes. To proportionately fill all available space with your `.nav-items`, use `.nav-fill`. Notice that all horizontal space is occupied, but not every nav item has the same width.

{% capture example %}
<ul class="nav nav-pills nav-fill">
  <li class="nav-item">
    <a href="#" class="nav-link active" aria-current="page">Active</a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link">Much longer nav link</a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
  </li>
</ul>
{% endcapture %}
{% renderExample example %}

For equal-width elements, use `.nav-justify`. All horizontal space will be occupied by nav links, but unlike the `.nav-fill` above, every nav item will be the same width.

{% capture example %}
<ul class="nav nav-pills nav-justify">
  <li class="nav-item">
    <a href="#" class="nav-link active" aria-current="page">Active</a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link">Much longer nav link</a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
  </li>
</ul>
{% endcapture %}
{% renderExample example %}

Similar to the `.nav-fill` example using a `<nav>`-based navigation.

{% capture example %}
<nav class="nav nav-pills nav-justify">
  <a href="#" class="nav-link active" aria-current="page">Active</a>
  <a href="#" class="nav-link">Much longer nav link</a>
  <a href="#" class="nav-link">Link</a>
  <a class="nav-link disabled" aria-disabled="true">Disabled</a>
</nav>
{% endcapture %}
{% renderExample example %}

## Working with Flex Utilities
If you need responsive nav variations, consider using a series of [flexbox utilities]({{ site.path }}/{{ version.docs }}/utilities/flexbox/). While more verbose, these utilities offer greater customization across responsive breakpoints. In the example below, the nav will be stacked on the lowest breakpoint, then adapt to a horizontal layout that fills the available width starting from the small breakpoint.

{% capture example %}
<nav class="nav nav-pills flex-column flex-sm-row">
  <a href="#" class="flex-sm-fill text-sm-center nav-link active" aria-current="page">Active</a>
  <a href="#" class="flex-sm-fill text-sm-center nav-link">Longer nav ink</a>
  <a href="#" class="flex-sm-fill text-sm-center nav-link">Link</a>
  <a class="flex-sm-fill text-sm-center nav-link disabled" aria-disabled="true">Disabled</a>
</nav>
{% endcapture %}
{% renderExample example %}

## Using Dropdowns

Add dropdown menus with a little extra HTML and the [Dropdown JavaScript widget]({{ site.path }}/{{ version.docs }}/widgets/dropdown/).

{%- assign calloutIncompatible = version.docs | valueIfEmpty: site.version.docs | prepend: "./" | append: "/partials/callout-danger-dropdown-tab.md" -%}
{% include calloutIncompatible %}

### Tabs with Dropdowns

{% capture example %}
<ul class="nav nav-tabs">
  <li class="nav-item">
    <a href="#" class="nav-link active" aria-current="page">Active</a>
  </li>
  <li class="nav-item dropdown">
    <a href="#" role="button" class="nav-link" data-cfw="dropdown">Dropdown<span class="caret" aria-hidden="true"></span></a>
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
    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
  </li>
</ul>
{% endcapture %}
{% renderExample example %}

### Pills with Dropdowns

{% capture example %}
<ul class="nav nav-pills">
  <li class="nav-item">
    <a href="#" class="nav-link active" aria-current="page">Active</a>
  </li>
  <li class="nav-item dropdown">
    <a href="#" role="button" class="nav-link" data-cfw="dropdown">Dropdown<span class="caret" aria-hidden="true"></span></a>
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
    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
  </li>
</ul>
{% endcapture %}
{% renderExample example %}

## SASS Reference

### Variables

The available [Customization options]({{ site.path }}/{{ version.docs }}/get-started/options/), or Sass variables, that can be customized for nav components.

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
        <td><code>$enable-nav</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the nav classes.
          Smaller segements of the nav classes can be disabled with the following <code>$enable-*</code> variables.
        </td>
      </tr>
      <tr>
        <td><code>$enable-nav-tabs</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of tab nav styles.
        </td>
      </tr>
      <tr>
        <td><code>$enable-nav-pills</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of pill nav styles.
        </td>
      </tr>
      <tr>
        <td><code>$enable-nav-lined</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of lined nav styles.
        </td>
      </tr>
      <tr>
        <td><code>$enable-nav-vertical</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of vertical nav styles.
        </td>
      </tr>
      <tr>
        <td><code>$enable-nav-reverse</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of reverse nav styles.
        </td>
      </tr>
      <tr>
        <td><code>$enable-nav-fill</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of fill alignment nav style.
        </td>
      </tr>
      <tr>
        <td><code>$enable-nav-justify</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of justify alignment nav style.
        </td>
      </tr>
      <tr>
        <td><code>$enable-tab-content</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of tab content pane visibility styles.
        </td>
      </tr>
      <tr>
        <td><code>$nav-link-padding-y</code></td>
        <td>string</td>
        <td><code>.3125rem</code></td>
        <td>
          Vertical padding for nav links.
        </td>
      </tr>
      <tr>
        <td><code>$nav-link-padding-x</code></td>
        <td>string</td>
        <td><code>1rem</code></td>
        <td>
          Horizontal padding for nav links.
        </td>
      </tr>
      <tr>
        <td><code>$nav-link-font-size</code></td>
        <td>string</td>
        <td><code>null</code></td>
        <td>
          Font size for base nav links.
        </td>
      </tr>
      <tr>
        <td><code>$nav-link-font-weight</code></td>
        <td>string</td>
        <td><code>null</code></td>
        <td>
          Font weight for base nav links.
        </td>
      </tr>
      <tr>
        <td><code>$nav-link-color</code></td>
        <td>string</td>
        <td><code>$link-color</code></td>
        <td>
          Text color for base nav links.
        </td>
      </tr>
      <tr>
        <td><code>$nav-link-decoration</code></td>
        <td>string</td>
        <td><code>if($link-decoration == none, null, none)</code></td>
        <td>
          Text decoration for base nav links.
        </td>
      </tr>
      <tr>
        <td><code>$nav-link-hover-color</code></td>
        <td>string</td>
        <td><code>$link-hover-color</code></td>
        <td>
          Text color for base nav links in hover or focus state.
        </td>
      </tr>
      <tr>
        <td><code>$nav-link-hover-decoration</code></td>
        <td>string</td>
        <td><code>if($link-hover-decoration == underline, none, null)</code></td>
        <td>
          Text decoration for base nav links in hover or focus state.
        </td>
      </tr>
      <tr>
        <td><code>$nav-link-disabled-opacity</code></td>
        <td>string</td>
        <td><code>.6</code></td>
        <td>
          Opacity for disabled nav links.
        </td>
      </tr>
      <tr>
        <td><code>$nav-link-disabled-color</code></td>
        <td>string</td>
        <td><code>.6</code></td>
        <td>
          Text color for disabled nav links.
        </td>
      </tr>
      <tr>
        <td><code>$nav-link-transition</code></td>
        <td>string</td>
        <td><code>color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out</code></td>
        <td>
          Transition for navs links.
        </td>
      </tr>
      <tr>
        <td><code>$nav-tabs-border-color</code></td>
        <td>string</td>
        <td><code>$component-border-color</code></td>
        <td>
          Border color for tab navs.
        </td>
      </tr>
      <tr>
        <td><code>$nav-tabs-border-width</code></td>
        <td>string</td>
        <td><code>$border-width</code></td>
        <td>
          Border width for tab navs.
        </td>
      </tr>
      <tr>
        <td><code>$nav-tabs-hover-border-color</code></td>
        <td>string</td>
        <td><code>$component-hover-bg</code></td>
        <td>
          Border color for tab navs in hover or focus state.
        </td>
      </tr>
      <tr>
        <td><code>$nav-tabs-hover-bg</code></td>
        <td>string</td>
        <td><code>$component-hover-bg</code></td>
        <td>
          Background color for tab navs in hover or focus state.
        </td>
      </tr>
      <tr>
        <td><code>$nav-tabs-hover-color</code></td>
        <td>string</td>
        <td><code>null</code></td>
        <td>
          Text color for tab navs in hover or focus state.
        </td>
      </tr>
      <tr>
        <td><code>$nav-tabs-active-bg</code></td>
        <td>string</td>
        <td><code>$body-bg</code></td>
        <td>
          Background color for tab navs in active state.
        </td>
      </tr>
      <tr>
        <td><code>$nav-tabs-active-color</code></td>
        <td>string</td>
        <td><code>$component-action-color</code></td>
        <td>
          Text color for tab navs in active state.
        </td>
      </tr>
      <tr>
        <td><code>$nav-tabs-active-border-color</code></td>
        <td>string</td>
        <td><code>$component-border-color</code></td>
        <td>
          Border color for tab navs in active state.
        </td>
      </tr>
      <tr>
        <td><code>$nav-pills-border-radius</code></td>
        <td>string</td>
        <td><code>$border-radius</code></td>
        <td>
          Border radius for pill navs.
        </td>
      </tr>
      <tr>
        <td><code>$nav-pills-hover-bg</code></td>
        <td>string</td>
        <td><code>$component-hover-bg</code></td>
        <td>
          Background color for pill navs in hover or focus state.
        </td>
      </tr>
      <tr>
        <td><code>$nav-pills-hover-color</code></td>
        <td>string</td>
        <td><code>null</code></td>
        <td>
          Text color for pill navs in hover or focus state.
        </td>
      </tr>
      <tr>
        <td><code>$nav-pills-active-bg</code></td>
        <td>string</td>
        <td><code>$component-active-bg</code></td>
        <td>
          Background color for pill navs in active state.
        </td>
      </tr>
      <tr>
        <td><code>$nav-pills-active-color</code></td>
        <td>string</td>
        <td><code>$component-active-color</code></td>
        <td>
          Text color for pill navs in active state.
        </td>
      </tr>
      <tr>
        <td><code>$nav-lined-gap</code></td>
        <td>string</td>
        <td><code>1rem</code></td>
        <td>
          Gap for lined nav when in horzontal mode.
        </td>
      </tr>
      <tr>
        <td><code>$nav-lined-border-width</code></td>
        <td>string</td>
        <td><code>.125rem</code></td>
        <td>
          Border thickness for lined nav.
        </td>
      </tr>
      <tr>
        <td><code>$nav-lined-active-color</code></td>
        <td>string</td>
        <td><code>$component-action-color</code></td>
        <td>
          Text color for lined navs in active state.
        </td>
      </tr>
    </tbody>
  </table>
</div>

### Mixins

No mixins available.