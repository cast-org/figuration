---
layout: doc
title: Accordion
subtitle: accordion.js
description: Accordion extends upon the Collapse widget to associate multiple collapse items in the same container.
group: widgets
toc: true
---

## Notices

{% capture callout %}
Widget Dependencies
{.h5}

Accordion requires the following:

- [Collapse widget]({{ site.path }}/{{ version.docs }}/widgets/collapse/) for the base functionality.
{% endcapture %}
{% renderCallout, callout, "info", "cf-callout-dep" %}

## Examples

### Basic Example

A simple accordion.

{% capture example %}
<div data-cfw="accordion">
  <h4><a href="#accordion0" data-cfw="collapse" class="open">Collapse Toggle #1</a></h4>
  <div id="accordion0" class="collapse">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non nisi ipsum. Quisque feugiat, arcu in pulvinar varius; risus odio interdum diam; a hendrerit urna sem vitae enim. Aenean fermentum iaculis nibh sodales consectetur.
  </div>
  <h4><a href="#accordion1" data-cfw="collapse">Collapse Toggle #2</a></h4>
  <div id="accordion1" class="collapse">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non nisi ipsum. Quisque feugiat, arcu in pulvinar varius; risus odio interdum diam; a hendrerit urna sem vitae enim. Aenean fermentum iaculis nibh sodales consectetur.
  </div>
  <h4><a href="#accordion2" data-cfw="collapse">Collapse Toggle #3</a></h4>
  <div id="accordion2" class="collapse">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non nisi ipsum. Quisque feugiat, arcu in pulvinar varius; risus odio interdum diam; a hendrerit urna sem vitae enim. Aenean fermentum iaculis nibh sodales consectetur.
  </div>
</div>
{% endcapture %}
{% renderExample example %}

### Using Cards

Here some cards are used along with a bit of added styling to provide some layout.

{% capture example %}
<div data-cfw="accordion" class="accordion">
  <div class="card mb-0">
    <div class="card-header">
      <h4 class="mb-0">
        <a href="#card0" role="button" data-cfw="collapse" class="open">Collapse Toggle #1</a>
      </h4>
    </div>
    <div id="card0" class="collapse">
      <div class="card-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non nisi ipsum. Quisque feugiat, arcu in pulvinar varius; risus odio interdum diam; a hendrerit urna sem vitae enim. Aenean fermentum iaculis nibh sodales consectetur.
      </div>
    </div>
  </div>
  <div class="card mb-0">
    <div class="card-header">
      <h4 class="mb-0">
        <a href="#card1" role="button" data-cfw="collapse">Collapse Toggle #2</a>
      </h4>
    </div>
    <div id="card1" class="collapse">
      <div class="card-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non nisi ipsum. Quisque feugiat, arcu in pulvinar varius; risus odio interdum diam; a hendrerit urna sem vitae enim. Aenean fermentum iaculis nibh sodales consectetur.
      </div>
    </div>
  </div>
  <div class="card mb-0">
    <div class="card-header">
      <h4 class="mb-0">
        <a href="#card2" role="button" data-cfw="collapse">Collapse Toggle #3</a>
      </h4>
    </div>
    <div id="card2" class="collapse">
      <div class="card-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non nisi ipsum. Quisque feugiat, arcu in pulvinar varius; risus odio interdum diam; a hendrerit urna sem vitae enim. Aenean fermentum iaculis nibh sodales consectetur.
      </div>
    </div>
  </div>
</div>
{% endcapture %}
{% renderExample example %}

To achieve the above layout, the following styling was used.

{% capture highlight %}
.accordion {
  > .card {
    overflow: hidden;

    &:not(:first-of-type) {
      .card-header:first-child {
        @include border-radius(0);
      }

    &:not(:last-of-type) {
      border-bottom: 0;
        @include border-radius(0);
      }
    }

    &:first-of-type:not(:last-of-type) {
      border-bottom: 0;
      @include border-bottom-radius(0);
    }

    &:last-of-type:not(:first-of-type) {
      @include border-top-radius(0);
    }

    .card-header {
      margin-bottom: -$card-border-width;
    }
  }
}
{% endcapture %}
{% renderHighlight highlight, "sass" %}

## Usage

To set up an accordion, all collapse items to be associated must be contained within the same ancestor element that is designated the accordion conatiner.

### Via Data Attributes

Add `data-cfw="accordion"` to the ancestor element that contains all the collapse items to be associated.

### Via JavaScript

Activates an element as an accordion listener.

{% capture highlight %}
$('#myAccordion').CFW_Accordion();
{% endcapture %}
{% renderHighlight highlight, "js" %}

### Methods

Method calls should be made on the accordion container.

<div class="table-scroll">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th style="width: 150px;">Method Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>dispose</code></td>
        <td>Removes the event listeners and data from the accordion container element. Falls back to non-associated, or individual, collapse controls.</td>
      </tr>
    </tbody>
  </table>
</div>

{% capture highlight %}
$('#myAccordion').CFW_Accordion('dispose');
{% endcapture %}
{% renderHighlight highlight, "js" %}

### Events

Event callbacks happen on the accordion element.

You can also get the collapse events as indicated in the [Collapse widget]({{ site.path }}/{{ version.docs }}/widgets/collapse/) due to event bubbling.

<div class="table-scroll">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th style="width: 150px;">Event Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>init.cfw.accordion</code></td>
        <td>This event fires after the accordion item is initialized.</td>
      </tr>
    </tbody>
  </table>
</div>

{% capture highlight %}
$('#myAccordion').on('init.cfw.accordion', function() {
  // do something...
});
{% endcapture %}
{% renderHighlight highlight, "js" %}
