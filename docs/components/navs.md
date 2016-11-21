---
layout: docs
title: Navs
group: components
---

Navigation share general markup and styles, from the base `.nav` class to the active and disabled states. Swap modifier classes to switch between each style.

Navs have support for both a `float` style layout, along with both the opt-in flexbox and [full flexbox]({{ site.baseurl }}/layout/flexbox#full-flexbox-mode) modes.  To use the opt-in method, simply add a `.nav-flex` class to the `.nav` element.

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Regarding Accessibility

If you are using navs to provide a navigation bar, be sure to add a `role="navigation"` to the most logical parent container of the `<ul>`, or wrap a `<nav>` element around the whole navigation. Do not add the role to the `<ul>` itself, as this would prevent it from being announced as an actual list by assistive technologies.

## Base Nav

Roll your own navigation style by extending the base `.nav` component. All Figurations's nav components are built on top of this by specifying additional styles. Includes styles for the disabled state, but **not the active state**.

{% example html %}
<ul class="nav">
  <li class="nav-item">
    <a class="nav-link active" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#">Disabled</a>
  </li>
</ul>
{% endexample %}

Classes are used throughout, so your markup can be super flexible. Use `<ul>`s like above, or roll your own with say a `<nav>` element. The change in nav item display below **is intentional** as `<li>`s have a different default `display` than regular `<a>` elements.

{% example html %}
<nav class="nav">
  <a class="nav-link active" href="#">Active</a>
  <a class="nav-link" href="#">Link</a>
  <a class="nav-link" href="#">Link</a>
  <a class="nav-link disabled" href="#">Disabled</a>
</nav>
{% endexample %}

## Inline

Space out nav links in a horizontal band with `.nav-inline`. Longer series of links will wrap to a new line.

{% example html %}
<nav class="nav nav-inline">
  <a class="nav-link active" href="#">Active</a>
  <a class="nav-link" href="#">Link</a>
  <a class="nav-link" href="#">Link</a>
  <a class="nav-link disabled" href="#">Disabled</a>
</nav>
{% endexample %}

The same works for a navigation built with lists.

{% example html %}
<ul class="nav nav-inline">
  <li class="nav-item">
    <a class="nav-link active" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#">Disabled</a>
  </li>
</ul>
{% endexample %}

## Tabs

Takes the basic nav from above and adds the `.nav-tabs` class to generate a tabbed interface. Use them to create tabbable regions with our [Tab JavaScript widget]({{ site.baserl}}/widgets/tab/).

{% example html %}
<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#">Disabled</a>
  </li>
</ul>
{% endexample %}

## Pills

Take that same HTML, but use `.nav-pills` instead:

{% example html %}
<ul class="nav nav-pills">
  <li class="nav-item">
    <a class="nav-link active" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#">Disabled</a>
  </li>
</ul>
{% endexample %}

### Stacked Pills

Add `.nav-stacked` to the `.nav.nav-pills` to stack them vertically. Each `.nav-link` becomes block-level, allowing for larger hit areas via mouse or tap.

{% example html %}
<ul class="nav nav-pills nav-stacked">
  <li class="nav-item">
    <a class="nav-link active" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#">Disabled</a>
  </li>
</ul>
{% endexample %}

As always, stacked pills are possible without `<ul>`s.

{% example html %}
<nav class="nav nav-pills nav-stacked">
  <a class="nav-link active" href="#">Active</a>
  <a class="nav-link" href="#">Link</a>
  <a class="nav-link" href="#">Link</a>
  <a class="nav-link disabled" href="#">Disabled</a>
</nav>
{% endexample %}

## Using Dropdowns

Add dropdown menus with a little extra HTML and the [Dropdown JavaScript widget]({{ site.baseurl }}/widgets/dropdown/).

{% callout warning %}
#### Incompatible Widgets
For accessibility reasons, do not mix use of the [Tab widget]({{ site.baseurl }}/widgets/tab/) and [Dropdown widget]({{ site.baseurl }}/widgets/dropdown/) in the same nav item.  This will cause navigation and usability issues.  One or the other, but not both.
{% endcallout %}

### Tabs with Dropdowns

{% example html %}
<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" href="#">Active</a>
  </li>
  <li class="nav-item dropdown">
    <a href="#" role="button" class="nav-link dropdown-toggle" data-cfw="dropdown" data-cfw-dropdown-toggle="#navDropdown1">Dropdown</a>
    <ul class="dropdown-menu" id="navDropdown1">
      <li><a href="#" class="dropdown-item">Action</a></li>
      <li><a href="#" class="dropdown-item">Another action</a></li>
      <li><a href="#" class="dropdown-item">Something else here</a></li>
      <li class="dropdown-divider"></li>
      <li><a href="#" class="dropdown-item">Separated link</a></li>
    </ul>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#">Disabled</a>
  </li>
</ul>
{% endexample %}

### Pills with Dropdowns

{% example html %}
<ul class="nav nav-pills">
  <li class="nav-item">
    <a class="nav-link active" href="#">Active</a>
  </li>
  <li class="nav-item dropdown">
    <a href="#" role="button" class="nav-link dropdown-toggle" data-cfw="dropdown" data-cfw-dropdown-toggle="#navDropdown2">Dropdown</a>
    <ul class="dropdown-menu" id="navDropdown2">
      <li><a href="#" class="dropdown-item">Action</a></li>
      <li><a href="#" class="dropdown-item">Another action</a></li>
      <li><a href="#" class="dropdown-item">Something else here</a></li>
      <li class="dropdown-divider"></li>
      <li><a href="#" class="dropdown-item">Separated link</a></li>
    </ul>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#">Disabled</a>
  </li>
</ul>
{% endexample %}
