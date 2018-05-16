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

Add a class to your element to round the corners.  You can target various sides of an element using the format `.radius{-side}`.

Where *sides* is one of:

* blank - for `all` 4 corners of the element
* `t` - for both corners on the `top` side
* `b` - for both corners on the `bottom` side
* `e` - for both corners on the `end` side
* `s` - for both corners on the `start` side
* `te` - for the `top end` corner
* `ts` - for the `top start` corner
* `be` - for the `bottom end` corner
* `bs` - for the `bottom start` corner

The *start/end sides* are designated as follows depending on which version of the Figuration CSS you are using.  The default `figuration.*.css` uses the `ltr` mode, where `figuration-rtl.*.css` uses the `rtl` mode.

- For `left-to-right` mode (`ltr` - default);
  - `start` refers to the `left` side
  - `end` refers to the `right` side
- For `right-to-left` mode (`rtl`);
  - `start` refers to the `right` side
  - `end` refers to the `left` side


<div class="cf-example">
    <div class="mb-1">
        <img data-src="holder.js/100x100/?text=All" class="radius" alt="A generic square placeholder image with rounded corners" />
        <img data-src="holder.js/100x100/?text=Top" class="radius-t" alt="A generic square placeholder image with rounded corners on the top edge" />
        <img data-src="holder.js/100x100/?text=Bottom" class="radius-b" alt="A generic square placeholder image with rounded corners on the bottom edge" />
        <img data-src="holder.js/100x100/?text='End'" class="radius-e" alt="A generic square placeholder image with rounded corners on the 'start' edge" />
        <img data-src="holder.js/100x100/?text='Start'" class="radius-s" alt="A generic square placeholder image with rounded corners on the 'end' edge" />
    </div>
    <div>
        <img data-src="holder.js/100x100/?text=Top 'End'" class="radius-te" alt="A generic square placeholder image a rounded corner on the top 'end'" />
        <img data-src="holder.js/100x100/?text=Top 'Start'" class="radius-ts" alt="A generic square placeholder image a rounded corner on the top 'start'" />
        <img data-src="holder.js/100x100/?text=Bottom 'End'" class="radius-be" alt="A generic square placeholder image a rounded corner on the bottom 'end'" />
        <img data-src="holder.js/100x100/?text=Bottom 'Start'" class="radius-bs" alt="A generic square placeholder image a rounded corner on the bottom 'start'" />
    </div>
</div>

{% highlight html %}
<!-- Sides -->
<img src="..." class="radius" alt="...">
<img src="..." class="radius-t" alt="...">
<img src="..." class="radius-b" alt="...">
<img src="..." class="radius-e" alt="...">
<img src="..." class="radius-s" alt="...">

<!-- Corners -->
<img src="..." class="round-te" alt="...">
<img src="..." class="round-ts" alt="...">
<img src="..." class="round-be" alt="...">
<img src="..." class="round-bs" alt="...">
{% endhighlight %}

### Using Component Sizes

A few sizes are available using the [component sizing options]({{ site.baseurl }}/get-started/options/#component-sizes).  Classes are built in the form `.radius{-side}-{size}`.

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
<button type="button" class="btn radius-s-0">Button</button>
{% endexample %}

### Circles

When elements are of a square (1:1) aspect ratio, you can create a circle using `.radius-circle`.  If the element has an unequal aspect ratio, you will get more on an elipse shape.

<div class="cf-example">
    <img data-src="holder.js/100x100/?text=Circle" class="radius-circle" width="100" height="100" alt="A generic square placeholder image where only the portion within the circle circumscribed about said square is visible" />
    <img data-src="holder.js/100x50/?text=Elipse" class="radius-circle" width="100" height="50" alt="A generic horizontal rectangle placeholder image where only the portion within the elipse circumscribed about said square is visible" />
    <img data-src="holder.js/50x100/?text=Elipse" class="radius-circle" width="50" height="100" alt="A generic vertical rectangle placeholder image where only the portion within the elipse circumscribed about said square is visible" />
</div>

{% highlight html %}
<img src="..." class="radius-circle" width="100" height="100" alt="...">
<img src="..." class="radius-circle" width="100" height="50" alt="...">
<img src="..." class="radius-circle" width="50" height="100" alt="...">
{% endhighlight %}

## Borders

Add or remove borders on all or just one side with border utilities

### Adding Borders

Quickly add the default component border to an element with the `.border{-side}` utility classes.

Available border addition utilities are:
* `.border` - for all sides
* `.border-t` - for the `top` side
* `.border-b` - for the `bottom` side
* `.border-e` - for the `end` side
* `.border-s` - for the `start` side
* `.border-x` - for both `start` and `end` sides
* `.border-y` - for both `top` and `bottom` sides

The *start/end sides* are designated as follows depending on which version of the Figuration CSS you are using.  The default `figuration.*.css` uses the `ltr` mode, where `figuration-rtl.*.css` uses the `rtl` mode.

- For `left-to-right` mode (`ltr` - default);
  - `start` refers to the `left` side
  - `end` refers to the `right` side
- For `right-to-left` mode (`rtl`);
  - `start` refers to the `right` side
  - `end` refers to the `left` side

{% example html %}
<div class="border bg-gray-50 p-0_5 mb-1">
  This div container has a border on all sides, and some padding added.
</div>

<div class="border-x bg-gray-50 p-0_5 mb-1">
  This div container has a border on the left and right sides, and some padding added.
</div>

<div class="border-y bg-gray-50 p-0_5 mb-1">
  This div container has a border on the top and bottom sides, and some padding added.
</div>

<span class="border-t bg-gray-50 p-0_5" style="width: 3rem;">'top'</span>
<span class="border-e bg-gray-50 p-0_5" style="width: 3rem;">'end'</span>
<span class="border-b bg-gray-50 p-0_5" style="width: 3rem;">'bottom'</span>
<span class="border-s bg-gray-50 p-0_5" style="width: 3rem;">'start'</span>

{% endexample %}

### Removing Borders

Remove the border on a given side of an element with the `.border{-side}-0` utility classes.

Available border removal utilities are:
* `.border-0` - for `all` 4 sides of the element
* `.border-t-0` - for the `top` side
* `.border-b-0` - for the `bottom` side
* `.border-e-0` - for the `end` side
* `.border-s-0` - for the `start` side
* `.border-x-0` - for both `start` and `end` sides
* `.border-y-0` - for both `top` and `bottom` sides

The *start/end sides* are designated as follows depending on which version of the Figuration CSS you are using.  The default `figuration.*.css` uses the `ltr` mode, where `figuration-rtl.*.css` uses the `rtl` mode.

- For `left-to-right` mode (`ltr` - default);
  - `start` refers to the `left` side
  - `end` refers to the `right` side
- For `right-to-left` mode (`rtl`);
  - `start` refers to the `right` side
  - `end` refers to the `left` side

See the following example of removing various borders from some buttons.

{% example html %}
<button type="button" class="btn radius-0 border-0">all</button>
<button type="button" class="btn radius-0 border-t-0">top</button>
<button type="button" class="btn radius-0 border-e-0">'end'</button>
<button type="button" class="btn radius-0 border-b-0">bottom</button>
<button type="button" class="btn radius-0 border-s-0">'start'</button>
<br />
<button type="button" class="btn radius-0 border-x-0">left and right</button>
<button type="button" class="btn radius-0 border-y-0">top and bottom</button>
{% endexample %}

### Responsive Borders

Add or remove borders with responsive border utility classes in the form of `.border{-breakpoint}{-side}{-0}`.

For example to have a border on the sides of an element up to and including the `md` breakpoint, and then at the `lg` breakpoint switch to only having top and bottom borders, you would do the following:

{% example html %}
<div class="border-x border-lg-x-0 border-lg-y bg-light p-0_5" style="max-width: 18rem;">
    Sample container
</div>
{% endexample %}