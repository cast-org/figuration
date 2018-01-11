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

Be sure you understand the ramifications of fixed and absolute position in your project; you may need to add aditional CSS.

The sticky utilities uses CSS's `position: sticky`, which isn't fully supported in all browsers.  Additional support information can be found over at [Can I Use](https://caniuse.com/#feat=css-sticky).

**IE11 and IE10 will render `position: sticky` as `position: relative`.** As such, we wrap the styles in a `@supports` query, limiting the stickiness to only browsers that can render it properly.

## Common Positioning

Responsive variants of common positioning types can be used in the form of `.position{breakpoint}-(type}`. Please refer to how our [breakpoint nomenclature]({{ site.baseurl }}/layout/overview/#breakpoint-nomenclature) is used.

{% highlight html %}
<div class="position-static">...</div>
<div class="position-relative">...</div>
<div class="position-absolute">...</div>
<div class="position-fixed">...</div>
<div class="position-sticky">...</div>
{% endhighlight %}

## Quick Positioning

There are also some quick positioning utilities available, but they are not responsive.

### Fixed Top

Position an element at the top of the viewport, from edge to edge.

{% highlight html %}
<div class="fixed-top">...</div>
{% endhighlight %}

### Fixed Bottom

Position an element at the bottom of the viewport, from edge to edge.

{% highlight html %}
<div class="fixed-bottom">...</div>
{% endhighlight %}

### Sticky Top

Position an element at the top of the viewport, from edge to edge, but only after you scroll past it.

{% highlight html %}
<div class="sticky-top">...</div>
{% endhighlight %}
