---
layout: doc
title: Stack
description: Shorthand helpers that build on top of our flexbox utilities to make component layout faster and easier.
group: utilities
toc: true
---

All credit for the concept and implementation goes to the open source [Pylon project](https://almonk.github.io/pylon/).

{% capture callout %}
Heads up! Support for [gap property for flexbox](https://caniuse.com/flexbox-gap) is a relatively recent item for some browsers, and not available in Internet Explorer. Consider checking your intended browser support. Consider using the grid layout if you need wider support.
{% endcapture %}
{% renderCallout, callout, "warning" %}

## Vertical

Use `.vstack` to create vertical layouts. Stacked items are full-width by default. Use `.gap-*` utilities to add space between items.

{% capture example %}
<div class="vstack gap-1">
  <div class="bg-light border">First item</div>
  <div class="bg-light border">Second item</div>
  <div class="bg-light border">Third item</div>
</div>
{% endcapture %}
{% renderExample example %}

## Horizontal

Use `.hstack` for horizontal layouts. Stacked items are vertically centered by default and only take up their necessary width. Use `.gap-*` utilities to add space between items.

{% capture example %}
<div class="hstack gap-1">
  <div class="bg-light border">First item</div>
  <div class="bg-light border">Second item</div>
  <div class="bg-light border">Third item</div>
</div>
{% endcapture %}
{% renderExample example %}

Using horizontal margin utilities like `.ms-auto` as spacers:

{% capture example %}
<div class="hstack gap-1">
  <div class="bg-light border">First item</div>
  <div class="bg-light border ms-auto">Second item</div>
  <div class="bg-light border">Third item</div>
</div>
{% endcapture %}
{% renderExample example %}

And with [vertical rules]({{ site.path }}/{{ version.docs }}/utilities/vertical-rule/):

{% capture example %}
<div class="hstack gap-1">
  <div class="bg-light border">First item</div>
  <div class="bg-light border ms-auto">Second item</div>
  <div class="vr"></div>
  <div class="bg-light border">Third item</div>
</div>
{% endcapture %}
{% renderExample example %}

## Examples

Use `.vstack` to stack buttons and other elements:

{% capture example %}
<div class="vstack gap-0_5 col-md-5 mx-auto">
  <button type="button" class="btn btn-secondary">Save changes</button>
  <button type="button" class="btn btn-outline-secondary">Cancel</button>
</div>
{% endcapture %}
{% renderExample example %}

Create an inline form with `.hstack`:

{% capture example %}
<div class="hstack gap-1">
  <input class="form-control me-auto" type="text" placeholder="Add your item here..." aria-label="Add your item here...">
  <button type="button" class="btn btn-secondary">Submit</button>
  <div class="vr"></div>
  <button type="button" class="btn btn-outline-danger">Reset</button>
</div>
{% endcapture %}
{% renderExample example %}

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
        <td><code>$enable-utility-stacks</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the stacks utility classes.
        </td>
      </tr>
      <tr>
        <td><code>$enable-utility-stacks-horizontal</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the horizontal stack utility class.
        </td>
      </tr>
      <tr>
        <td><code>$enable-utility-stacks-vertical</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the vertical stack utility class.
        </td>
      </tr>
    </tbody>
  </table>
</div>

### Mixins

No mixins available.