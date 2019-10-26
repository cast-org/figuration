---
layout: doc
title: Clearfix
description: Clear floated content within a container with the clearfix utility.
group: utilities
---

<div class="h3 cf-toc-header">Page Contents</div>

${toc}

## Overview

Easily clear `float`s by adding `.clearfix` **to the parent element**. A detailed explanation of [how the clearfix works](http://cssmojo.com/the-very-latest-clearfix-reloaded/) is available.

## Usage

{% capture highlight %}
<div class="clearfix">...</div>
{% endcapture %}
{% renderHighlight highlight, "html" %}

Can also be used as a mixin.

{% capture highlight %}
// Mixin itself
@mixin clearfix() {
  &::after {
    display: block;
    clear: both;
    content: "";
  }
}

// Usage as a mixin
.element {
  @include clearfix();
}
{% endcapture %}
{% renderHighlight highlight, "sass" %}

## Example

The following example shows how the clearfix can be used. Without the clearfix the wrapping div would not span around the buttons which would cause a broken layout, as shown in the second part of the example.

<div class="cf-example clearfix">
  <strong>With <code>.clearfix</code></strong>
  <div class="bg-info clearfix mb-1">
    <button type="button" class="btn float-start">Button floated to start</button>
    <button type="button" class="btn float-end">Button floated to end</button>
  </div>
  <strong>Without <code>.clearfix</code></strong>
  <div class="bg-info">
    <button type="button" class="btn float-start">Button floated to start</button>
    <button type="button" class="btn float-end">Button floated to end</button>
  </div>
</div>
{% capture highlight %}
<!-- With .clearfix -->
<div class="bg-info clearfix">
  <button type="button" class="btn float-start">Button floated to start</button>
  <button type="button" class="btn float-end">Button floated to end</button>
</div>

<!-- Without .clearfix -->
<div class="bg-info">
  <button type="button" class="btn float-start">Button floated to start</button>
  <button type="button" class="btn float-end">Button floated to end</button>
</div>
{% endcapture %}
{% renderHighlight highlight, "html" %}

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
        <td><code>$enable-utility-clearfix</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the clearfix utility class.
        </td>
      </tr>
    </tbody>
  </table>
</div>

### Mixins

Here are the mixins related to this grouping of utility classes that we use to help generate our CSS.  You can also uses these mixins to generate your own custom components or utilities.

#### clearfix()

Apply a clearfix to an element.

{% capture highlight %}
@include clearfix();
{% endcapture %}
{% renderHighlight highlight, "sass" %}

#### clearfix-disable()

Disable the clearfix on an element.

{% capture highlight %}
@include clearfix-disable();
{% endcapture %}
{% renderHighlight highlight, "sass" %}