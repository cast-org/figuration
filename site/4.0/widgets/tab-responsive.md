---
layout: doc
title: Tab-Responsive
subtitle: tab-responsive.js
description: Combine the use of Collapse and Tab control elements.
group: widgets
toc: true
---

## Notices

{% capture callout %}
Widget Dependencies
{.h5}

Sideshow requires the following:

- [Tab widget]({{ site.path }}/{{ version.docs }}/widgets/tab/) for base functionality.
- [Collapse widget]({{ site.path }}/{{ version.docs }}/widgets/collapse/) for base functionality.
{% endcapture %}
{% renderCallout, callout, "info", "cf-callout-dep" %}

## Overview

The primary goal with this widget is to provide a method of communication between the [Collapse]({{ site.path }}/{{ version.docs }}/widgets/collapse/) and [Tab]({{ site.path }}/{{ version.docs }}/widgets/tab/) widgets.  It does not take into account the visual aspects itself, this needs to be handled by CSS.

## Example

This example uses a breakpoint of 62em/992px.  Larger widths will see the tab style navigation, smaller widths will see a simple accordion using headers as the collapse triggers.  If you change the browser width between the two sides of the breakpoint, you will see the active tab becomes the active collapse, and vice-versa.

{% capture example %}
<div data-cfw="tabResponsive">
  <ul class="nav nav-tabs d-md-down-none">
    <li class="nav-item"><a href="#tabr0" class="nav-link" data-cfw="tab">First Tab</a></li>
    <li class="nav-item"><a href="#tabr1" class="nav-link" data-cfw="tab">Second Tab</a></li>
    <li class="nav-item"><a href="#tabr2" class="nav-link" data-cfw="tab">Third Tab</a></li>
  </ul>
  <div class="tab-content">
    <div id="tabr0" class="tab-pane d-block">
      <h4><a href="#tabr0_collapse" class="d-lg-none" data-cfw="collapse">First Tab <span class="caret"></span></a></h4>
      <div id="tabr0_collapse" class="collapse">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non nisi ipsum. Quisque feugiat, arcu in pulvinar varius; risus odio interdum diam; a hendrerit urna sem vitae enim. Aenean fermentum iaculis nibh sodales consectetur.</p>
      </div>
    </div>
    <div id="tabr1" class="tab-pane d-block">
      <h4><a href="#tabr1_collapse" class="d-lg-none" data-cfw="collapse">Second Tab <span class="caret"></span></a></h4>
      <div id="tabr1_collapse" class="collapse">
        <p>Praesent tristique dolor quis condimentum lobortis. Phasellus accumsan lacus vitae quam elementum, non euismod urna adipiscing. Suspendisse sodales enim non sem consequat dictum. Ut sit amet elementum purus, mattis rhoncus elit.</p>
      </div>
    </div>
    <div id="tabr2" class="tab-pane d-block">
      <h4><a href="#tabr2_collapse" class="d-lg-none" data-cfw="collapse">Third Tab <span class="caret"></span></a></h4>
      <div id="tabr2_collapse" class="collapse">
        <p>Nullam malesuada massa urna, non gravida odio scelerisque sit amet. Donec sit amet rutrum quam, vel faucibus ante. Sed iaculis aliquet tortor vel tristique? In ligula nisi, suscipit vel ipsum id; elementum iaculis dui.</p>
      </div>
    </div>
  </div>
</div>
{% endcapture %}
{% renderExample example %}

## Usage

To set up a responsive tab, all tabs must be under the same resposive tab ancestor, and then one collapse item per tab-pane is needed.

You must provide the necessary CSS to determine how items should appear across breakpoints.  For example, you can hide the collapse triggers on desktops, but show on mobile devices where the tabs are hidden.

### Via Data Attributes

Add `data-cfw="tabResponsive"` to the ancestor element that contains all the tab and collapse items to be associated.

### Via JavaScript

Call the widget via JavaScript:

{% capture highlight %}
$('#myTabResponsive').CFW_TabResponsive();
{% endcapture %}
{% renderHighlight highlight, "js" %}

### Options

None.

{% comment %}
Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-cfw-tabResponsive`, as in `data-cfw-tabResponsive-active=true`.

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
        <td>active</td>
        <td>boolean</td>
        <td><code>false</code></td>
        <td>If the collapse item in the default tab should be opened on initialization. Mostly useful for mobile devices depending on CSS.</td>
      </tr>
    </tbody>
  </table>
</div>
{% endcomment %}

### Methods

#### `.CFW_TabResponsive()`

Activates the responsive tab element.

{% capture highlight %}
$('#myTabResponsive').CFW_TabResponsive();
{% endcapture %}
{% renderHighlight highlight, "js" %}

### Events

Event callbacks happen on the responsive tab element.

You can also get the collapse and tab events as indicated in the [Collapse]({{ site.path }}/{{ version.docs }}/widgets/collapse/) and [Tab]({{ site.path }}/{{ version.docs }}/widgets/tab/) widgets due to event bubbling.

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
        <td>init.cfw.tabResponsive</td>
        <td>This event fires after the responsive tab item is initialized.</td>
      </tr>
    </tbody>
  </table>
</div>
