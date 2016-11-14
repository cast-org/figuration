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

* `t` - for both corners on the `top` side
* `b` - for both corners on the `bottom` side
* `l` - for both corners on the `left` side
* `r` - for both corners on the `right` side
* `a` - for `all` 4 corners of the element
* `c` - to round the element into a `circle`

A special case for creating

<div class="cf-example clearfix">
    <img data-src="holder.js/100x100/?text=All" class="radius-a" alt="A generic square placeholder image with rounded corners" />
    <img data-src="holder.js/100x100/?text=Top" class="radius-t" alt="A generic square placeholder image with rounded corners on the top edge" />
    <img data-src="holder.js/100x100/?text=Bottom" class="radius-b" alt="A generic square placeholder image with rounded corners on the bottom edge" />
    <img data-src="holder.js/100x100/?text=Left" class="radius-l" alt="A generic square placeholder image with rounded corners on the left edge" />
    <img data-src="holder.js/100x100/?text=Right" class="radius-r" alt="A generic square placeholder image with rounded corners on the right edge" />
    <img data-src="holder.js/100x100/?text=Circle" class="radius-c" alt="A generic square placeholder image where only the portion within the circle circumscribed about said square is visible" />
</div>

{% highlight html %}
<img src="..." class="radius-a" alt="...">
<img src="..." class="radius-t" alt="...">
<img src="..." class="radius-b" alt="...">
<img src="..." class="radius-l" alt="...">
<img src="..." class="radius-r" alt="...">
<img src="..." class="radius-c" alt="...">
{% endhighlight %}

### Sizes

A few sizes are available using the [component sizing options]({{ site.baseurl }}/get-started/options/#component-sizes).  Classes are built in the form `.radius-{sides}-{size}`.

By default the `xs` and `sm` sizes are the same radius.  Also the `lg` and `xl` sizes are the same radius.

<div class="cf-example clearfix">
    <img data-src="holder.js/100x100?text=Small" class="radius-a-sm" alt="A generic square placeholder image with lightly rounded corners" />
    <img data-src="holder.js/100x100?text=Default" class="radius-a" alt="A generic square placeholder image with rounded corners" />
    <img data-src="holder.js/100x100?text=Large" class="radius-a-lg" alt="A generic square placeholder image with largely rounded corners" />
</div>

{% highlight html %}
<img src="..." class="radius-a-sm" alt="...">
<img src="..." class="radius-a" alt="...">
<img src="..." class="radius-a-lg" alt="...">
{% endhighlight %}
