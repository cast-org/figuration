---
layout: docs
title: Floating
group: utilities
---

These utility classes float an element to the enable or disable floating, based on the current viewport size using the [CSS `float` property](https://developer.mozilla.org/en-US/docs/Web/CSS/float).

Note that the float utilities do not have any affect on items inside flex container.  Please refer to the [flexbox specification](https://www.w3.org/TR/css-flexbox-1/#flex-containers) for details.

Instead of using `left/right` designators, the float utilities use `start/end` designators to match up with the [flexbox utilities]({{ site.baseurl }}/utilities/flexbox/).

{% example html %}
<div class="float-start">Float start aligned on all viewport sizes</div><br>
<div class="float-end">Float end aligned on all viewport sizes</div><br>
<div class="float-none">Don't float on all viewport sizes</div><br>

<div class="float-sm-end">Float end aligned on viewports sized SM (small) or wider</div><br>
<div class="float-md-end">Float end aligned on viewports sized MD (medium) or wider</div><br>
<div class="float-lg-end">Float end aligned on viewports sized LG (large) or wider</div><br>
<div class="float-xl-end">Float end aligned on viewports sized XL (extra-large) or wider</div><br>
{% endexample %}

{% highlight scss %}
// Related simple non-responsive mixins
.element {
  @include float-start;
}
.another-element {
  @include float-end;
}
.unfloated-element {
  @include float-none;
}
{% endhighlight %}
