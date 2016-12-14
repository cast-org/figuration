---
layout: docs
title: Tab-Responsive
subtitle: tab-responsive.js
group: widgets
---

The primary goal with this widget is to provide a method of communication between the [Collapse]({{ site.baseurl }}/widgets/collapse/) and [Tab]({{ site.baseurl }}/widgets/tab/) widgets.  It does not take into account the visual aspects itself, this needs to be handled by CSS.

{% callout info %}
#### Widget Dependencies

Sideshow requires the following:

* [Tab widget]({{ site.baseurl}}/widgets/tab/) for base functionality.
* [Collapse widget]({{ site.baseurl}}/widgets/collapse/) for base functionality.
{% endcallout %}
{:.cf-callout-dep}

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Overview

Tab-Responsive, removes and disables the use of `aria-hidden` attributes on the tab and collapse target items for accessibility, otherwise all content inside a Tab-Responsive widget would be hidden to screen readers.

## Example

This example uses a breakpoint of 62em/992px.  Larger widths will see the tab style navigation, smaller widths will see a simple accordion using headers as the collapse triggers.  If you change the browser width between the two sides of the breakpoint, you will see the active tab becomes the active collapse, and vice-versa.

<div class="cf-example">
    <div data-cfw="tabResponsive" class="cf-example-tabResponsive">
        <ul class="nav nav-tabs">
            <li class="nav-item"><a href="#tabr0" class="nav-link" data-cfw="tab">First Tab</a></li>
            <li class="nav-item"><a href="#tabr1" class="nav-link" data-cfw="tab">Second Tab</a></li>
            <li class="nav-item"><a href="#tabr2" class="nav-link" data-cfw="tab">Third Tab</a></li>
        </ul>
        <div class="tab-content">
            <div class="tab-pane" id="tabr0">
                <h4><a href="#" data-cfw="collapse" data-cfw-collapse-toggle="tabr0_collapse">First Tab <span class="caret"></span></a></h4>
                <div class="collapse" data-cfw-collapse-target="tabr0_collapse">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non nisi ipsum. Quisque feugiat, arcu in pulvinar varius; risus odio interdum diam; a hendrerit urna sem vitae enim. Aenean fermentum iaculis nibh sodales consectetur.</p>
                </div>
            </div>
            <div class="tab-pane" id="tabr1">
                <h4><a href="#" data-cfw="collapse" data-cfw-collapse-toggle="tabr1_collapse">Second Tab <span class="caret"></span></a></h4>
                <div class="collapse" data-cfw-collapse-target="tabr1_collapse">
                    <p>Praesent tristique dolor quis condimentum lobortis. Phasellus accumsan lacus vitae quam elementum, non euismod urna adipiscing. Suspendisse sodales enim non sem consequat dictum. Ut sit amet elementum purus, mattis rhoncus elit.</p>
                </div>
            </div>
            <div class="tab-pane" id="tabr2">
                <h4><a href="#" data-cfw="collapse" data-cfw-collapse-toggle="tabr2_collapse">Third Tab <span class="caret"></span></a></h4>
                <div class="collapse" data-cfw-collapse-target="tabr2_collapse">
                    <p>Nullam malesuada massa urna, non gravida odio scelerisque sit amet. Donec sit amet rutrum quam, vel faucibus ante. Sed iaculis aliquet tortor vel tristique? In ligula nisi, suscipit vel ipsum id; elementum iaculis dui.</p>
                </div>
            </div>
        </div>
    </div>
</div>

{% highlight html %}
<div data-cfw="tabResponsive" class="cf-example-tabResponsive">
    <ul class="nav nav-tabs">
        <li class="nav-item"><a href="#tabr0" class="nav-link" data-cfw="tab">First Tab</a></li>
        <li class="nav-item"><a href="#tabr1" class="nav-link" data-cfw="tab">Second Tab</a></li>
        <li class="nav-item"><a href="#tabr2" class="nav-link" data-cfw="tab">Third Tab</a></li>
    </ul>
    <div class="tab-content">
        <div class="tab-pane" id="tabr0">
            <h4><a href="#" data-cfw="collapse" data-cfw-collapse-toggle="tabr0_collapse">First Tab <span class="caret"></span></a></h4>
            <div class="collapse" data-cfw-collapse-target="tabr0_collapse">
                ...
            </div>
        </div>
        <div class="tab-pane" id="tabr1">
            <h4><a href="#" data-cfw="collapse" data-cfw-collapse-toggle="tabr1_collapse">Second Tab <span class="caret"></span></a></h4>
            <div class="collapse" data-cfw-collapse-target="tabr1_collapse">
                ...
            </div>
        </div>
        <div class="tab-pane" id="tabr2">
            <h4><a href="#" data-cfw="collapse" data-cfw-collapse-toggle="tabr2_collapse">Third Tab <span class="caret"></span></a></h4>
            <div class="collapse" data-cfw-collapse-target="tabr2_collapse">
                ...
            </div>
        </div>
    </div>
</div>
{% endhighlight %}

{% highlight css %}
/* Example CSS */
@media (min-width: 62em) {
    .cf-example-tabResponsive h4 {
        display: none;
    }
    .cf-example-tabResponsive .collapse {
        display: block;
        visibility: visible;
    }
}
@media (max-width: 61.9375em) {
    .cf-example-tabResponsive .nav-tabs {
        display: none;
    }
    .cf-example-tabResponsive .tab-pane {
        display: block;
        visibility: visible;
    }
}
{% endhighlight %}

## Usage

To set up a responsive tab, all tabs must be under the same resposive tab ancestor, and then one collapse item per tab-pane is needed.

You must provide the necessary CSS to determine how items should appear across breakpoints.  For example, you can hide the collapse triggers on desktops, but show on mobile devices where the tabs are hidden.

### Via Data Attributes

Add `data-cfw="tabResponsive"` to the ancestor element that contains all the tab and collapse items to be associated.

### Via JavaScript

Call the widget via JavaScript:

{% highlight js %}
$('#myTabResponsive').CFW_TabResponsive();
{% endhighlight %}

### Options

Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-cfw-tabResponsive`, as in `data-cfw-tabResponsive-active=true`.

<div class="table-responsive">
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
            <td>false</td>
            <td>If the collapse item in the default tab should be opened on initialization. Mostly useful for mobile devices depending on CSS.</td>
        </tr>
    </tbody>
    </table>
</div> <!-- /.table-responsive -->

### Methods

#### `.CFW_TabResponsive()`
{:.no_toc}

Activates the responsive tab element.

{% highlight js %}
$('#myTabResponsive').CFW_TabResponsive();
{% endhighlight %}

### Events

Event callbacks happen on the responsive tab element.

You can also get the collapse and tab events as indicated in the [Collapse]({{ site.baseurl }}/widgets/collapse/) and [Tab]({{ site.baseurl }}/widgets/tab/) widgets due to event bubbling.

<div class="table-responsive">
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
</div> <!-- /.table-responsive -->
