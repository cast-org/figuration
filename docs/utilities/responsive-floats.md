---
layout: docs
title: Responsive Floats
group: utilities
---

These utility classes float an element to the left or right, or disable floating, based on the current viewport size using the [CSS `float` property](https://developer.mozilla.org/en-US/docs/Web/CSS/float). `!important` is included to avoid specificity issues. These use the same viewport width breakpoints as the grid system.

Two similar non-responsive Sass mixins (`pull-left` and `pull-right`) are also available.

{% example html %}
<div class="pull-xs-left">Float left on all viewport sizes</div><br>
<div class="pull-xs-right">Float right on all viewport sizes</div><br>
<div class="pull-xs-none">Don't float on all viewport sizes</div><br>

<div class="pull-sm-left">Float left on viewports sized SM (small) or wider</div><br>
<div class="pull-md-left">Float left on viewports sized MD (medium) or wider</div><br>
<div class="pull-lg-left">Float left on viewports sized LG (large) or wider</div><br>
<div class="pull-xl-left">Float left on viewports sized XL (extra-large) or wider</div><br>
{% endexample %}

{% highlight scss %}
// Related simple non-responsive mixins
.element {
  @include pull-left;
}
.another-element {
  @include pull-right;
}
{% endhighlight %}
