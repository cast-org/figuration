---
layout: docs
title: Images
group: content
---

Opt your images into responsive behavior (so they never become larger than their parent elements) and add lightweight styles to them---all via classes.

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Responsive Images

Images in Figuration are made responsive with `.img-responsive`. `max-width: 100%;` and `height: auto;` are applied to the image so that it scales with the parent element.

<div class="cf-example">
  <img data-src="holder.js/100px250" class="img-responsive" alt="Generic responsive image">
</div>

{% highlight html %}
<img src="..." class="img-responsive" alt="Responsive image">
{% endhighlight %}

{% callout warning %}
SVG Images and IE 9-10
{:.h5}

In Internet Explorer 9-10, SVG images with `.img-responsive` are disproportionately sized. To fix this, add `width: 100% \9;` where necessary. This fix improperly sizes other image formats, so Figuration doesn't apply it automatically.
{% endcallout %}

## Image Thumbnail

Use `.img-thumbnail` to give an image a bordered appearance.

You might also want to check the [border utilites]({{ site.baseurl }}/utilities/borders) for additional options.

<div class="cf-example">
  <img data-src="holder.js/200x200" class="img-thumbnail" alt="A generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera">
</div>

{% highlight html %}
<img src="..." alt="..." class="img-thumbnail">
{% endhighlight %}

## Aligning Images

Align images with the [helper float classes]({{ site.baseurl }}/utilities/responsive-floats/) or [text alignment classes]({{ site.baseurl }}/utilities/typography/#text-alignment). `block`-level images can be centered using [the `.mx-auto` margin utility class]({{ site.baseurl }}/utilities/spacing/#horizontal-centering).

<div class="cf-example clearfix">
  <img data-src="holder.js/200x200" class="radius float-left" alt="A generic square placeholder image with rounded corners">
  <img data-src="holder.js/200x200" class="radius float-right" alt="A generic square placeholder image with rounded corners">
</div>

{% highlight html %}
<img src="..." class="radius float-left" alt="...">
<img src="..." class="radius float-right" alt="...">
{% endhighlight %}

<div class="cf-example clearfix">
  <img data-src="holder.js/200x200" class="radius mx-auto d-block" alt="A generic square placeholder image with rounded corners">
</div>

{% highlight html %}
<img src="..." class="radius mx-auto d-block" alt="...">
{% endhighlight %}

<div class="cf-example clearfix">
  <div class="text-center">
    <img data-src="holder.js/200x200" class="radius" alt="A generic square placeholder image with rounded corners">
  </div>
</div>

{% highlight html %}
<div class="text-center">
  <img src="..." class="radius" alt="...">
</div>
{% endhighlight %}
