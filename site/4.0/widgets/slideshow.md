---
layout: doc
title: Slideshow
subtitle: slideshow.js
description: Extend the Tab widget with slide navigation controls.
group: widgets
---

{% capture callout %}
Widget Dependencies
{.h5}

Sideshow requires the following:

* [Tab widget]({{ site.path }}/{{ version.docs }}/widgets/tab/) for base functionality.
{% endcapture %}
{% renderCallout, callout, "info", "cf-callout-dep" %}

<div class="h3 cf-toc-header">Page Contents</div>

${toc}

## Overview

A simple widget that extends on the [Tab widget]({{ site.path }}/{{ version.docs }}/widgets/tab/) to add previous and next navigation items that update their disabled state based on the currently active tab/slide.

## Examples

### Using Tabs

The slideshow works well with [tab navigation]({{ site.path }}/{{ version.docs }}/components/navs/#tabs).

<div class="cf-example">
  <ul class="nav nav-tabs" data-cfw="slideshow">
    <li class="nav-item"><a href="#" class="nav-link" data-cfw-slideshow-nav="prev" title="Previous Slide" aria-label="Previous Slide"><span aria-hidden="true">&laquo;</span></a></li>
    <li class="nav-item"><a href="#tab-slide0" class="nav-link" data-cfw="tab">Slide 1</a></li>
    <li class="nav-item"><a href="#tab-slide1" class="nav-link" data-cfw="tab">Slide 2</a></li>
    <li class="nav-item"><a href="#tab-slide2" class="nav-link" data-cfw="tab">Slide 3</a></li>
    <li class="nav-item"><a href="#tab-slide3" class="nav-link" data-cfw="tab">Slide 4</a></li>
    <li class="nav-item"><a href="#" class="nav-link" data-cfw-slideshow-nav="next" title="Next Slide" aria-label="Next Slide"><span aria-hidden="true">&raquo;</span></a></li>
  </ul>
  <div class="tab-content">
    <div class="tab-pane" id="tab-slide0">
      <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
    </div>
    <div class="tab-pane" id="tab-slide1">
      <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit.</p>
    </div>
    <div class="tab-pane" id="tab-slide2">
      <p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.</p>
    </div>
    <div class="tab-pane" id="tab-slide3">
      <p>Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before they sold out farm-to-table VHS viral locavore cosby sweater. Lomo wolf viral, mustache readymade thundercats keffiyeh craft beer marfa ethical. Wolf salvia freegan, sartorial keffiyeh echo park vegan.</p>
    </div>
  </div>
</div>

{% capture highlight %}
<ul class="nav nav-tabs" data-cfw="slideshow">
  <li class="nav-item"><a href="#" class="nav-link" data-cfw-slideshow-nav="prev" title="Previous Slide" aria-label="Previous Slide"><span aria-hidden="true">&laquo;</span></a></li>
  <li class="nav-item"><a href="#tab-slide0" class="nav-link" data-cfw="tab">Slide 1</a></li>
  <li class="nav-item"><a href="#tab-slide1" class="nav-link" data-cfw="tab">Slide 2</a></li>
  <li class="nav-item"><a href="#tab-slide2" class="nav-link" data-cfw="tab">Slide 3</a></li>
  <li class="nav-item"><a href="#tab-slide3" class="nav-link" data-cfw="tab">Slide 4</a></li>
  <li class="nav-item"><a href="#" class="nav-link" data-cfw-slideshow-nav="next" title="Next Slide" aria-label="Next Slide"><span aria-hidden="true">&raquo;</span></a></li>
</ul>
<div class="tab-content">
  <div class="tab-pane" id="tab-slide0">
    ...
  </div>
  <div class="tab-pane" id="tab-slide1">
    ...
  </div>
  <div class="tab-pane" id="tab-slide2">
    ...
  </div>
  <div class="tab-pane" id="tab-slide3">
    ...
  </div>
</div>
{% endcapture %}
{% renderHighlight highlight, "html" %}

### Using Pills

The slideshow also works with [pill navigation]({{ site.path }}/{{ version.docs }}/components/navs/#pills).

<div class="cf-example">
  <nav class="nav nav-pills" data-cfw="slideshow">
    <a href="#" class="nav-item nav-link" data-cfw-slideshow-nav="prev" title="Previous Slide" aria-label="Previous Slide"><span aria-hidden="true">&laquo;</span></a>
    <a href="#pill-slide0" class="nav-item nav-link" data-cfw="tab">Slide 1</a>
    <a href="#pill-slide1" class="nav-item nav-link" data-cfw="tab">Slide 2</a>
    <a href="#pill-slide2" class="nav-item nav-link" data-cfw="tab">Slide 3</a>
    <a href="#pill-slide3" class="nav-item nav-link" data-cfw="tab">Slide 4</a>
    <a href="#" class="nav-item nav-link" data-cfw-slideshow-nav="next" title="Next Slide" aria-label="Next Slide"><span aria-hidden="true">&raquo;</span></a>
  </nav>
  <div class="tab-content">
    <div class="tab-pane" id="pill-slide0">
      <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
    </div>
    <div class="tab-pane" id="pill-slide1">
      <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit.</p>
    </div>
    <div class="tab-pane" id="pill-slide2">
      <p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.</p>
    </div>
    <div class="tab-pane" id="pill-slide3">
      <p>Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before they sold out farm-to-table VHS viral locavore cosby sweater. Lomo wolf viral, mustache readymade thundercats keffiyeh craft beer marfa ethical. Wolf salvia freegan, sartorial keffiyeh echo park vegan.</p>
    </div>
  </div>
</div>

{% capture highlight %}
<nav class="nav nav-pills" data-cfw="slideshow">
   <a href="#" class="nav-item nav-link" data-cfw-slideshow-nav="prev" title="Previous Slide" aria-label="Previous Slide"><span aria-hidden="true">&laquo;</span></a>
  <a href="#pill-slide0" class="nav-item nav-link" data-cfw="tab">Slide 1</a>
  <a href="#pill-slide1" class="nav-item nav-link" data-cfw="tab">Slide 2</a>
  <a href="#pill-slide2" class="nav-item nav-link" data-cfw="tab">Slide 3</a>
  <a href="#pill-slide3" class="nav-item nav-link" data-cfw="tab">Slide 4</a>
  <a href="#" class="nav-item nav-link" data-cfw-slideshow-nav="next" title="Next Slide" aria-label="Next Slide"><span aria-hidden="true">&raquo;</span></a>
</nav>
<div class="tab-content">
  <div class="tab-pane" id="pill-slide0">
    ...
  </div>
  <div class="tab-pane" id="pill-slide1">
    ...
  </div>
  <div class="tab-pane" id="pill-slide2">
    ...
  </div>
  <div class="tab-pane" id="pill-slide3">
    ...
  </div>
</div>
{% endcapture %}
{% renderHighlight highlight, "html" %}

### Using Pagination

You can even use the [pagination componenent]({{ site.path }}/{{ version.docs }}/components/pagination/).

<div class="cf-example">
  <ul class="pagination pagination-group" data-cfw="slideshow">
    <li class="page-item"><a href="#" class="page-link" data-cfw-slideshow-nav="prev" title="Previous Slide" aria-label="Previous Slide"><span aria-hidden="true">&laquo;</span></a></li>
    <li class="page-item"><a href="#page-slide0" class="page-link" data-cfw="tab">Slide 1</a></li>
    <li class="page-item"><a href="#page-slide1" class="page-link" data-cfw="tab">Slide 2</a></li>
    <li class="page-item"><a href="#page-slide2" class="page-link" data-cfw="tab">Slide 3</a></li>
    <li class="page-item"><a href="#page-slide3" class="page-link" data-cfw="tab">Slide 4</a></li>
    <li class="page-item"><a href="#" class="page-link" data-cfw-slideshow-nav="next" title="Next Slide" aria-label="Next Slide"><span aria-hidden="true">&raquo;</span></a></li>
  </ul>
  <div class="tab-content">
    <div class="tab-pane" id="page-slide0">
      <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
    </div>
    <div class="tab-pane" id="page-slide1">
      <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit.</p>
    </div>
    <div class="tab-pane" id="page-slide2">
      <p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.</p>
    </div>
    <div class="tab-pane" id="page-slide3">
      <p>Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before they sold out farm-to-table VHS viral locavore cosby sweater. Lomo wolf viral, mustache readymade thundercats keffiyeh craft beer marfa ethical. Wolf salvia freegan, sartorial keffiyeh echo park vegan.</p>
    </div>
  </div>
</div>

{% capture highlight %}
<ul class="pagination pagination-group" data-cfw="slideshow">
   <li class="page-item"><a href="#" class="page-link" data-cfw-slideshow-nav="prev" title="Previous Slide" aria-label="Previous Slide"><span aria-hidden="true">&laquo;</span></a></li>
  <li class="page-item"><a href="#page-slide0" class="page-link" data-cfw="tab">Slide 1</a></li>
  <li class="page-item"><a href="#page-slide1" class="page-link" data-cfw="tab">Slide 2</a></li>
  <li class="page-item"><a href="#page-slide2" class="page-link" data-cfw="tab">Slide 3</a></li>
  <li class="page-item"><a href="#page-slide3" class="page-link" data-cfw="tab">Slide 4</a></li>
  <li class="page-item"><a href="#" class="page-link" data-cfw-slideshow-nav="next" title="Next Slide" aria-label="Next Slide"><span aria-hidden="true">&raquo;</span></a></li>
</ul>
<div class="tab-content">
  <div class="tab-pane" id="page-slide0">
    ...
  </div>
  <div class="tab-pane" id="page-slide1">
    ...
  </div>
  <div class="tab-pane" id="page-slide2">
    ...
  </div>
  <div class="tab-pane" id="page-slide3">
    ...
  </div>
</div>
{% endcapture %}
{% renderHighlight highlight, "html" %}

### Disabled Tabs

If there is a tab that is disabled, the previous and next navigation items will skip over the disabled item.

<div class="cf-example">
  <ul class="nav nav-tabs" data-cfw="slideshow">
    <li class="nav-item"><a href="#" class="nav-link" data-cfw-slideshow-nav="prev" title="Previous Slide" aria-label="Previous Slide"><span aria-hidden="true">&laquo;</span></a></li>
    <li class="nav-item"><a href="#ex-slide0" class="nav-link" data-cfw="tab">Slide 1</a></li>
    <li class="nav-item"><a href="#ex-slide1" class="nav-link disabled" data-cfw="tab" tabindex="-1" aria-disabled="true">Slide 2</a></li>
    <li class="nav-item"><a href="#ex-slide2" class="nav-link" data-cfw="tab">Slide 3</a></li>
    <li class="nav-item"><a href="#ex-slide3" class="nav-link" data-cfw="tab">Slide 4</a></li>
    <li class="nav-item"><a href="#" class="nav-link" data-cfw-slideshow-nav="next" title="Next Slide" aria-label="Next Slide"><span aria-hidden="true">&raquo;</span></a></li>
  </ul>
  <div class="tab-content">
    <div class="tab-pane" id="ex-slide0">
      <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
    </div>
    <div class="tab-pane" id="ex-slide1">
      <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit.</p>
    </div>
    <div class="tab-pane" id="ex-slide2">
      <p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.</p>
    </div>
    <div class="tab-pane" id="ex-slide3">
      <p>Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before they sold out farm-to-table VHS viral locavore cosby sweater. Lomo wolf viral, mustache readymade thundercats keffiyeh craft beer marfa ethical. Wolf salvia freegan, sartorial keffiyeh echo park vegan.</p>
    </div>
  </div>
</div>

{% capture highlight %}
<ul class="nav nav-tabs" data-cfw="slideshow">
  <li class="nav-item"><a href="#" class="nav-link" data-cfw-slideshow-nav="prev" title="Previous Slide" aria-label="Previous Slide"><span aria-hidden="true">&laquo;</span></a></li>
  <li class="nav-item"><a href="#ex-slide0" class="nav-link" data-cfw="tab">Slide 1</a></li>
  <li class="nav-item"><a href="#ex-slide1" class="nav-link disabled" data-cfw="tab" tabindex="-1" aria-disabled="true">Slide 2</a></li>
  <li class="nav-item"><a href="#ex-slide2" class="nav-link" data-cfw="tab">Slide 3</a></li>
  <li class="nav-item"><a href="#ex-slide3" class="nav-link" data-cfw="tab">Slide 4</a></li>
  <li class="nav-item"><a href="#" class="nav-link" data-cfw-slideshow-nav="next" title="Next Slide" aria-label="Next Slide"><span aria-hidden="true">&raquo;</span></a></li>
</ul>
<div class="tab-content">
  <div class="tab-pane" id="ex-slide0">
    ...
  </div>
  <div class="tab-pane" id="ex-slide1">
    ...
  </div>
  <div class="tab-pane" id="ex-slide2">
    ...
  </div>
  <div class="tab-pane" id="ex-slide3">
    ...
  </div>
</div>
{% endcapture %}
{% renderHighlight highlight, "html" %}

### Looping

By default the previous or next navigation controls become disabled when the first or last slide, respectively, is active.  Use the `loop` option to override this behaviour and allow users to loop around the ends of the slidehow.

<div class="cf-example">
  <ul class="nav nav-tabs" data-cfw="slideshow" data-cfw-slideshow-loop="true">
    <li class="nav-item"><a href="#" class="nav-link" data-cfw-slideshow-nav="prev" title="Previous Slide" aria-label="Previous Slide"><span aria-hidden="true">&laquo;</span></a></li>
    <li class="nav-item"><a href="#loop-slide0" class="nav-link" data-cfw="tab">Slide 1</a></li>
    <li class="nav-item"><a href="#loop-slide1" class="nav-link" data-cfw="tab">Slide 2</a></li>
    <li class="nav-item"><a href="#loop-slide2" class="nav-link" data-cfw="tab">Slide 3</a></li>
    <li class="nav-item"><a href="#loop-slide3" class="nav-link" data-cfw="tab">Slide 4</a></li>
    <li class="nav-item"><a href="#" class="nav-link" data-cfw-slideshow-nav="next" title="Next Slide" aria-label="Next Slide"><span aria-hidden="true">&raquo;</span></a></li>
  </ul>
  <div class="tab-content">
    <div class="tab-pane" id="loop-slide0">
      <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
    </div>
    <div class="tab-pane" id="loop-slide1">
      <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit.</p>
    </div>
    <div class="tab-pane" id="loop-slide2">
      <p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.</p>
    </div>
    <div class="tab-pane" id="loop-slide3">
      <p>Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before they sold out farm-to-table VHS viral locavore cosby sweater. Lomo wolf viral, mustache readymade thundercats keffiyeh craft beer marfa ethical. Wolf salvia freegan, sartorial keffiyeh echo park vegan.</p>
    </div>
  </div>
</div>

{% capture highlight %}
<ul class="nav nav-tabs" data-cfw="slideshow" data-cfw-slideshow-loop="true">
    <li class="nav-item"><a href="#" class="nav-link" data-cfw-slideshow-nav="prev" title="Previous Slide" aria-label="Previous Slide"><span aria-hidden="true">&laquo;</span></a></li>
  <li class="nav-item"><a href="#loop-slide0" class="nav-link" data-cfw="tab">Slide 1</a></li>
  <li class="nav-item"><a href="#loop-slide1" class="nav-link" data-cfw="tab">Slide 2</a></li>
  <li class="nav-item"><a href="#loop-slide2" class="nav-link" data-cfw="tab">Slide 3</a></li>
  <li class="nav-item"><a href="#loop-slide3" class="nav-link" data-cfw="tab">Slide 4</a></li>
  <li class="nav-item"><a href="#" class="nav-link" data-cfw-slideshow-nav="next" title="Next Slide" aria-label="Next Slide"><span aria-hidden="true">&raquo;</span></a></li>
</ul>
<div class="tab-content">
  <div class="tab-pane" id="loop-slide0">
    ...
  </div>
  <div class="tab-pane" id="loop-slide1">
    ...
  </div>
  <div class="tab-pane" id="loop-slide2">
    ...
  </div>
  <div class="tab-pane" id="loop-slide3">
    ...
  </div>
</div>
{% endcapture %}
{% renderHighlight highlight, "html" %}

## Usage

To set up a slideshow, all tabs must be under the same slideshow ancestor.  Nesting of slideshows is not possible or recommended as conflicts will occur.

### Via Data Attributes

Add `data-cfw="slideshow"` to the ancestor element that contains all the tab items to be associated.

### Via JavaScript

Call the widget via JavaScript:

{% capture highlight %}
$('#mySlideshow').CFW_Slideshow();
{% endcapture %}
{% renderHighlight highlight, "js" %}

### Navigation Triggers

The navgiation triggers, or previous and next buttons, must be contained within the `data-cfw="slideshow"` element in order to be activated. Multiple triggers are allowed.

Triggers are indicated with the following data attributes:

- Previous trigger: `data-cfw-slideshow-nav="prev"`
- Next trigger: `data-cfw-slideshow-nav="next"`

When a trigger is disabled, both the trigger and its direct parent `<li>` (if it exists) will be marked with the `.disabled` class.

### Options

Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-cfw-slideshow`, as in `data-cfw-slideshow-loop="false"`.

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
        <td>loop</td>
        <td>boolean</td>
        <td><code>false</code></td>
        <td>Enable looping from the last slide to the first slide, and vice versa.</td>
      </tr>
    </tbody>
  </table>
</div>

### Methods

#### `.CFW_Slideshow()`

Activates the slideshow element.

{% capture highlight %}
$('#mySlideshow').CFW_Slideshow();
{% endcapture %}
{% renderHighlight highlight, "js" %}

#### `.CFW_Slideshow('prev')`

Shows the previous slide, unless the first slide is current.

#### `.CFW_Slideshow('next')`

Shows the next slide, unless the last slide is current.

#### `.CFW_Slideshow('update')`

Update the state of the navigation controls. Useful if there is a change to the tabs.

#### `.CFW_Slideshow('dispose')`

Disable the slideshow navigation controls and listeners.  This will leave the tab widget controls active.


### Events

Event callbacks happen on the slideshow element.

You can also get the tab events as indicated in the [Tab widget]({{ site.path }}/{{ version.docs }}/widgets/tab/) due to event bubbling.

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
      <tr>
        <td>update.cfw.slideshow</td>
        <td>This event fires after the state of the navigation controls is updated.</td>
      </tr>
    </tbody>
  </table>
</div>
