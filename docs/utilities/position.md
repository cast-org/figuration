---
layout: docs
title: Position
group: utilities
---

Place a component outside the normal document flow.

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Warnings

Be sure you understand the ramifications of fixed position in your project; you may need to add aditional CSS.

The sticky utilities uses CSS's `position: sticky`, which isn't fully supported in all browsers.  Additional support information can be found over at [Can I Use](http://caniuse.com/#feat=css-sticky).

## Fixed Top

Position an element at the top of the viewport, from edge to edge.

{% highlight html %}
<div class="fixed-top">...</div>
{% endhighlight %}

## Fixed Bottom

Position an element at the bottom of the viewport, from edge to edge.

{% highlight html %}
<div class="fixed-bottom">...</div>
{% endhighlight %}

## Sticky Top

Position an element at the top of the viewport, from edge to edge, but only after you scroll past it.

**Microsoft Edge and IE11 will render `position: sticky` as `position: relative`.** As such, we wrap the styles in a `@supports` query, limiting the stickiness to only browsers that properly can render it.

{% highlight html %}
<div class="sticky-top">...</div>
{% endhighlight %}
