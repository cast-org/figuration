---
layout: docs
title: Image Replacement
group: utilities
---

Utilize the `.text-hide` class or mixin to help replace an element's text content with a background image.

Hiding text with `.text-hide` will keep it accessible to assistive technology users.  `.text-hide` is different from `.sr-only`, where `.text-hide` will hide only the text, and `.sr-only` will hide the entire element.

This utility is also available in responsive variants of the form `.text{-sm|-md|-lg|-xl}-hide`, similar to the other [typography utilities]({{ site.baseurl }}/utilities/typography/).


{% highlight html %}
<h1 class="text-hide">Custom heading</h1>
{% endhighlight %}

Hiding the text and showing an image replacement is easily done using a `background-image`.

{% example html %}
<h1 class="text-hide" style="background-image: url('{{ site.baseurl}}/assets/brand/figuration-solid.svg'); width: 3rem; height: 3rem;">CAST Figuration</h1>
{% endexample %}

Below is an example of using the `text-hide()` mixin in your Sass.

<div class="cf-example">
    <h1 class="heading">CAST Figuration</h1>
</div>
{% highlight scss html %}
// Usage as a mixin
.heading {
  width: 3rem;
  height: 3rem;
  background-image: url('{{ site.baseurl}}/assets/brand/figuration-solid.svg');

  @include text-hide;
}

<h1 class="heading">CAST Figuration</h1>
{% endhighlight %}
