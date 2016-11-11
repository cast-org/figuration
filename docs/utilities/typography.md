---
layout: docs
title: Typography
group: utilities
---

Quick and easy utilities to add some style to your text.

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Text Alignment

Easily realign text to components with text alignment classes.

{% example html %}
<p class="text-justify">Justified text.</p>
<p class="text-nowrap">No wrap text.</p>
{% endexample %}

For left, right, and center alignment, responsive classes are available that use the same viewport width breakpoints as the grid system.  Please refer to how our [breakpoint nomenclature]({{ site.baseurl }}/layout/overview/#breakpoint-nomenclature) is used.

{% example html %}
<p class="text-left">Left aligned text on all viewport sizes.</p>
<p class="text-center">Center aligned text on all viewport sizes.</p>
<p class="text-right">Right aligned text on all viewport sizes.</p>

<p class="text-sm-right">Right aligned text on viewports sized SM (small) or wider.</p>
<p class="text-md-right">Right aligned text on viewports sized MD (medium) or wider.</p>
<p class="text-lg-right">Right aligned text on viewports sized LG (large) or wider.</p>
<p class="text-xl-right">Right aligned text on viewports sized XL (extra-large) or wider.</p>
{% endexample %}

## Text Transform

Transform text in components with text capitalization classes.

{% example html %}
<p class="text-lowercase">Lowercased text.</p>
<p class="text-uppercase">Uppercased text.</p>
<p class="text-capitalize">CapiTaliZed text.</p>
{% endexample %}

Note how `text-capitalize` only changes the first letter of each word, leaving the case of any other letters unaffected.

## Font Weight and Italics

Quickly change the weight (boldness) of text or italicize text.

{% example html %}
<p class="font-weight-bold">Bold text.</p>
<p class="font-weight-normal">Normal weight text.</p>
<p class="font-italic">Italic text.</p>
{% endexample %}

## Image Replacement

Utilize the `.text-hide` class or mixin to help replace an element's text content with a background image.

{% highlight html %}
<h1 class="text-hide">Custom heading</h1>
{% endhighlight %}

{% highlight scss %}
// Usage as a mixin
.heading {
  @include text-hide;
}
{% endhighlight %}
