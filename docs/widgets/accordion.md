---
layout: docs
title: Accordion
subtitle: accordion.js
group: widgets
---

Accordion extends upon the Collapse widget to associate multiple collapse items in the same container.

{% callout info %}
#### Widget Dependencies

Accordion requires the following:

* [Collapse widget]({{ site.baseurl}}/widgets/collapse/) for the base functionality.
{% endcallout %}
{:.cf-callout-dep}

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Example
A simple accordion.

{% example html %}
<div data-cfw="accordion">
    <h4><a href="#" data-cfw="collapse" data-cfw-collapse-toggle="accordion0">Collapse Toggle #1</a></h4>
    <div class="collapse" data-cfw-collapse-target="accordion0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non nisi ipsum. Quisque feugiat, arcu in pulvinar varius; risus odio interdum diam; a hendrerit urna sem vitae enim. Aenean fermentum iaculis nibh sodales consectetur.
    </div>
    <h4><a href="#" data-cfw="collapse" data-cfw-collapse-toggle="accordion1">Collapse Toggle #2</a></h4>
    <div class="collapse" data-cfw-collapse-target="accordion1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non nisi ipsum. Quisque feugiat, arcu in pulvinar varius; risus odio interdum diam; a hendrerit urna sem vitae enim. Aenean fermentum iaculis nibh sodales consectetur.
    </div>
    <h4><a href="#" data-cfw="collapse" data-cfw-collapse-toggle="accordion2">Collapse Toggle #3</a></h4>
    <div class="collapse" data-cfw-collapse-target="accordion2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non nisi ipsum. Quisque feugiat, arcu in pulvinar varius; risus odio interdum diam; a hendrerit urna sem vitae enim. Aenean fermentum iaculis nibh sodales consectetur.
    </div>
</div>
{% endexample %}

## Usage

To set up an accordion, all collapse items to be associated must be contained within the same ancestor element that is designated the accordion conatiner.

### Via Data Attributes

Add `data-cfw="accordion"` to the ancestor element that contains all the collapse items to be associated.

### Via JavaScript

Call the accordion via JavaScript:

{% highlight js %}
$('#myAccordion').CFW_Accordion();
{% endhighlight %}

### Methods

#### `.CFW_Accordion()`
{:.no_toc}

Activates the an accordion element.

{% highlight js %}
$('#myAccordion').CFW_Accordion();
{% endhighlight %}

### Events

Event callbacks happen on the accordion element.

You can also get the collapse events as indicated in the [Collapse widget]({{ site.baseurl}}/widgets/collapse/) due to event bubbling.

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
            <td>init.cfw.accordion</td>
            <td>This event fires after the accordion item is initialized.</td>
        </tr>
    </tbody>
    </table>
</div> <!-- /.table-responsive -->
