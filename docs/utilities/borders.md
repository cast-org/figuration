---
layout: docs
title: Borders
group: utilities
redirect_from: "/utilities/"
---

Easily manipulate borders on your images or other elements.

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Border Radius

Add a class to your element to round the corners.  You can target various sides of an element using the format `.radius-{sides}`.

Where *sides* is one of:

* blank - for `all` 4 corners of the element
* `t` - for both corners on the `top` side
* `b` - for both corners on the `bottom` side
* `r` - for both corners on the `right` side
* `l` - for both corners on the `left` side
* `tr` - for the `top right` corner
* `tl` - for the `top left` corner
* `br` - for the `bottom right` corner
* `bl` - for the `bottom left` corner

<div class="cf-example">
    <div class="mb-1">
        <img data-src="holder.js/100x100/?text=All" class="radius" alt="A generic square placeholder image with rounded corners" />
        <img data-src="holder.js/100x100/?text=Top" class="radius-t" alt="A generic square placeholder image with rounded corners on the top edge" />
        <img data-src="holder.js/100x100/?text=Bottom" class="radius-b" alt="A generic square placeholder image with rounded corners on the bottom edge" />
        <img data-src="holder.js/100x100/?text=Right" class="radius-r" alt="A generic square placeholder image with rounded corners on the right edge" />
        <img data-src="holder.js/100x100/?text=Left" class="radius-l" alt="A generic square placeholder image with rounded corners on the left edge" />
    </div>
    <div>
        <img data-src="holder.js/100x100/?text=Top Right" class="radius-tr" alt="A generic square placeholder image a rounded corner on the top right" />
        <img data-src="holder.js/100x100/?text=Top Left" class="radius-tl" alt="A generic square placeholder image a rounded corner on the top left edge" />
        <img data-src="holder.js/100x100/?text=Bottom Right" class="radius-br" alt="A generic square placeholder image a rounded corner on the bottom right" />
        <img data-src="holder.js/100x100/?text=Bottom Left" class="radius-bl" alt="A generic square placeholder image a rounded corner on the bottom left" />
    </div>
</div>

{% highlight html %}
<!-- Sides -->
<img src="..." class="radius" alt="...">
<img src="..." class="radius-t" alt="...">
<img src="..." class="radius-b" alt="...">
<img src="..." class="radius-r" alt="...">
<img src="..." class="radius-l" alt="...">

<!-- Corners -->
<img src="..." class="round-tr" alt="...">
<img src="..." class="round-tl" alt="...">
<img src="..." class="round-br" alt="...">
<img src="..." class="round-bl" alt="...">
{% endhighlight %}

### Using Component Sizes

A few sizes are available using the [component sizing options]({{ site.baseurl }}/get-started/options/#component-sizes).  Classes are built in the form `.radius-{sides}-{size}`.

By default the `xs` and `sm` sizes are the same radius.  Also the `lg` and `xl` sizes are the same radius.

<div class="cf-example">
    <img data-src="holder.js/100x100?text=Small" class="radius-sm" alt="A generic square placeholder image with lightly rounded corners" />
    <img data-src="holder.js/100x100?text=Default" class="radius" alt="A generic square placeholder image with rounded corners" />
    <img data-src="holder.js/100x100?text=Large" class="radius-lg" alt="A generic square placeholder image with more rounded corners" />
</div>

{% highlight html %}
<img src="..." class="radius-sm" alt="...">
<img src="..." class="radius" alt="...">
<img src="..." class="radius-lg" alt="...">
{% endhighlight %}

### Removing

There is also the special case size of `0` (zero) to remove  a radius.

{% example html %}
<button type="button" class="btn radius-l-0">Button</button>
{% endexample %}

### Circles

When elements are of a square (1:1) aspect ratio, you can create a circle using `.radius-circle`.  If the element has an unequal aspect ratio, you will get more on an elipse shape.

<div class="cf-example">
    <img data-src="holder.js/100x100/?text=Circle" class="radius-circle" alt="A generic square placeholder image where only the portion within the circle circumscribed about said square is visible" />
    <img data-src="holder.js/100x50/?text=Elipse" class="radius-circle" alt="A generic horizontal rectangle placeholder image where only the portion within the elipse circumscribed about said square is visible" />
    <img data-src="holder.js/50x100/?text=Elipse" class="radius-circle" alt="A generic vertical rectangle placeholder image where only the portion within the elipse circumscribed about said square is visible" />
</div>

{% highlight html %}
<img src="..." class="radius-circle" alt="...">
{% endhighlight %}

## Border Removal

Add a class to remove a border on a given side of an element, using the format `.border-0-{sides}`.

Where *sides* is one of:

* blank - for `all` 4 sides of the element
* `t` - for the `top` side
* `b` - for the `bottom` side
* `r` - for the `right` side
* `l` - for the `left` side

See the following example of removing various borders from some buttons.

{% example html %}
<button type="button" class="btn radius-0 border-0">all</button>
<button type="button" class="btn radius-0 border-t-0">top</button>
<button type="button" class="btn radius-0 border-r-0">right</button>
<button type="button" class="btn radius-0 border-b-0">bottom</button>
<button type="button" class="btn radius-0 border-l-0">left</button>
{% endexample %}
