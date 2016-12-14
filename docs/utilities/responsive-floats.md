---
layout: docs
title: Responsive Floats
group: utilities
---

These utility classes float an element to the left or right, or disable floating, based on the current viewport size using the [CSS `float` property](https://developer.mozilla.org/en-US/docs/Web/CSS/float). `!important` is included to avoid specificity issues. These use the same viewport width breakpoints as the grid system.

{% example html %}
<div class="float-left">Float left on all viewport sizes</div><br>
<div class="float-right">Float right on all viewport sizes</div><br>
<div class="float-none">Don't float on all viewport sizes</div><br>

<div class="float-sm-right">Float right on viewports sized SM (small) or wider</div><br>
<div class="float-md-right">Float right on viewports sized MD (medium) or wider</div><br>
<div class="float-lg-right">Float right on viewports sized LG (large) or wider</div><br>
<div class="float-xl-right">Float right on viewports sized XL (extra-large) or wider</div><br>
{% endexample %}

{% highlight scss %}
// Related simple non-responsive mixins
.element {
  @include float-left;
}
.another-element {
  @include float-right;
}
.unfloated-element {
  @include float-none;
}
{% endhighlight %}
