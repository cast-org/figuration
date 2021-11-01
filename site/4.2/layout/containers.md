---
layout: doc
title: Containers
description: Containers are a base layout block to provide spacing and alignment for content within a given viewport.
group: layout
toc: true
---

## How They Work

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
        <td>544px (34rem)</td>
        <td>720px (45rem)</td>
        <td>960px (60rem)</td>
        <td>1152px (72rem)</td>
      </tr>
      <tr>
        <td><code>.container-sm</code></td>
        <td class="text-muted">100%</td>
        <td>544px (34rem)</td>
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

## Base Container

Use `.container` for a fixed-width container with a defined `max-width` per breakpoint.

{% capture highlight %}
<div class="container">
  <!-- Content here -->
</div>
{% endcapture %}
{% renderHighlight highlight, "html" %}

## Fluid Container

Use `.container-fluid` for a full width container, spanning the entire width of the viewport.

{% capture highlight %}
<div class="container-fluid">
  ...
</div>
{% endcapture %}
{% renderHighlight highlight, "html" %}

## Responsive Containers

Responsive containers allow you to specify a class that is 100% wide until the specified breakpoint is reached, after which we apply `max-width`s for each of the higher breakpoints. For example, `.container-sm` is 100% wide to start until the `sm` breakpoint is reached, where it will scale up with `md`, `lg`, and `xl`.

{% capture highlight %}
<div class="container-sm">100% wide until small breakpoint</div>
<div class="container-md">100% wide until medium breakpoint</div>
<div class="container-lg">100% wide until large breakpoint</div>
<div class="container-xl">100% wide until extra large breakpoint</div>
{% endcapture %}
{% renderHighlight highlight, "html" %}

## Sass Reference

### Variables

The available [Customization options]({{ site.path }}/{{ version.docs }}/get-started/options/), or Sass variables, that can be customized for containers.

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
        <td><code>$enable-container</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the grid layout classes.
          Smaller segements of the grid layout classes can be disabled with the following <code>$enable-*</code> variables.
        </td>
      </tr>
      <tr>
        <td><code>$enable-container-responsive</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the responsive container classes.
        </td>
      </tr>
      <tr>
        <td><code>$responsive-container-breakpoints</code></td>
        <td>list</td>
        <td><code>map-keys($grid-breakpoints)</code></td>
        <td>
          Subset of breakpoints to generate responsive container classes for.
        </td>
      </tr>
      <tr>
        <td><code>$container-max-widths</code></td>
        <td>map</td>
        <td><code><pre>(
    sm: rem(544px),
    md: rem(720px),
    lg: rem(960px),
    xl: rem(1152px)
)</pre></code></td>
        <td>
          Grid breakpoints widths.  The <code>rem()</code> function converts a pixel value to a <code>rem</code> value.
        </td>
      </tr>
    </tbody>
  </table>
</div>

### Mixins

Here are the mixins related to containers that we use to help generate our CSS. You can also uses these mixins to generate your own custom components or utilities.

#### make-container

Create a container element.

{% capture highlight %}
@include make-container($padding-x: $container-padding-x);
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
        <td><code>$padding-x</code></td>
        <td>number</td>
        <td><code>$container-padding-x</code></td>
        <td>
          Horizontal padding for a container.
        </td>
      </tr>
    </tbody>
  </table>
</div>
