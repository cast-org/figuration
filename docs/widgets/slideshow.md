---
layout: docs
title: Slideshow
subtitle: slideshow.js
group: widgets
---

A simple widget that extends on the [Tab widget]({{ site.baseurl }}/widgets/tab/) to add previous and next navigation items that update their disabled state based on the currently active tab/slide.

{% callout info %}
#### Widget Dependencies

Sideshow requires the following:

* [Tab widget]({{ site.baseurl}}/widgets/tab/) for base functionality.
{% endcallout %}
{:.cf-callout-dep}

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Example

This example uses the [pagination componenent]({{ site.baseurl }}/components/pagination/), but it will also work with [tab]({{ site.baseurl }}/components/navs/#tabs) or [pill]({{ site.baseurl }}/components/navs/#pills) style navigation.

<div class="cf-example">
    <ul class="pagination" data-cfw="slideshow">
        <li class="page-item"><a href="#" class="page-link" data-cfw-slideshow-nav="prev" title="Previous Slide" aria-label="Previous Slide"><span aria-hidden="true">&laquo;</span></a></li>
        <li class="page-item"><a href="#slide0" class="page-link" data-cfw="tab">Slide 1</a></li>
        <li class="page-item"><a href="#slide1" class="page-link" data-cfw="tab">Slide 2</a></li>
        <li class="page-item"><a href="#slide2" class="page-link" data-cfw="tab">Slide 3</a></li>
        <li class="page-item"><a href="#slide3" class="page-link" data-cfw="tab">Slide 4</a></li>
        <li class="page-item"><a href="#" class="page-link" data-cfw-slideshow-nav="next" title="Next Slide" aria-label="Next Slide"><span aria-hidden="true">&raquo;</span></a></li>
    </ul>
    <div class="tab-content">
        <div class="tab-pane" id="slide0">
            <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
        </div>
        <div class="tab-pane" id="slide1">
            <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.</p>
        </div>
        <div class="tab-pane" id="slide2">
            <p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.</p>
        </div>
        <div class="tab-pane" id="slide3">
            <p>Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before they sold out farm-to-table VHS viral locavore cosby sweater. Lomo wolf viral, mustache readymade thundercats keffiyeh craft beer marfa ethical. Wolf salvia freegan, sartorial keffiyeh echo park vegan.</p>
        </div>
    </div>
</div>

{% highlight html %}
<ul class="pagination" data-cfw="slideshow">
    <li><a href="#" data-cfw-slideshow-nav="prev" title="Previous Slide" aria-label="Previous Slide"><span aria-hidden="true">&laquo;</span></a></li>
    <li><a href="#slide0" data-cfw="tab">Slide 1</a></li>
    <li><a href="#slide1" data-cfw="tab">Slide 2</a></li>
    <li><a href="#slide2" data-cfw="tab">Slide 3</a></li>
    <li><a href="#slide3" data-cfw="tab">Slide 4</a></li>
    <li><a href="#" data-cfw-slideshow-nav="next" title="Next Slide" aria-label="Next Slide"><span aria-hidden="true">&raquo;</span></a></li>
</ul>
<div class="tab-content">
    <div class="tab-pane" id="slide0">
        ...
    </div>
    <div class="tab-pane" id="slide1">
        ...
    </div>
    <div class="tab-pane" id="slide2">
        ...
    </div>
    <div class="tab-pane" id="slide3">
        ...
    </div>
</div>
{% endhighlight %}

## Usage

To set up a slideshow, all tabs must be under the same slideshow ancestor.  Nesting of slideshows is not possible or recommended as conflicts will occur.

### Via Data Attributes

Add `data-cfw="slideshow"` to the ancestor element that contains all the tab items to be associated.

### Via JavaScript

Call the widget via JavaScript:

{% highlight js %}
$('#mySlideshow').CFW_Slideshow();
{% endhighlight %}

### Navigation Triggers

The navgiation triggers, or previous and next buttons, must be contained within the `data-cfw="slideshow"` element in order to be activated. Multiple triggers are allowed.

Triggers are indicated with the following data attributes:

- Previous trigger: `data-cfw-slideshow-nav="prev"`
- Next trigger: `data-cfw-slideshow-nav="next"`

When a trigger is disabled, both the trigger and its direct parent `<li>` (if it exists) will be marked with the `.disabled` class.

### Methods

#### `.CFW_Slideshow()`
{:.no_toc}

Activates the slideshow element.

{% highlight js %}
$('#mySlideshow').CFW_Slideshow();
{% endhighlight %}

#### `.CFW_Slideshow('prev')`
{:.no_toc}

Shows the previous slide, unless the first slide is current.

#### `.CFW_Slideshow('next')`
{:.no_toc}

Shows the next slide, unless the last slide is current.

### Events

Event callbacks happen on the slideshow element.

You can also get the tab events as indicated in the [Tab widget]({{ site.baseurl }}/widgets/tab/) due to event bubbling.

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
            <td>init.cfw.slideshow</td>
            <td>This event fires after the slideshow item is initialized.</td>
        </tr>
        <tr>
            <td>prev.cfw.slideshow</td>
            <td>This event fires before the call to activate the previous slide.</td>
        </tr>
        <tr>
            <td>next.cfw.slideshow</td>
            <td>This event fires before the call to activate the next slide.</td>
        </tr>
    </tbody>
    </table>
</div> <!-- /.table-responsive -->
