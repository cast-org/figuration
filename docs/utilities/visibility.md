---
layout: docs
title: Visibility
group: utilities
---

Set the `visibility` of an element, meaning its `display` is not modified and will not affect layout. `.invisible` elements still take up space in the page. Content will be hidden both visually and for assistive technology/screen reader users.

Use `.invisible` and `.visible` as needed.

{% highlight html %}
<div class="invisible">...</div>
<div class="visible">...</div>
{% endhighlight %}

{% highlight scss %}
// Class
.invisible {
  visibility: hidden !important;
}
.visible {
  visibility: visible !important;
}

// Usage as a mixins
.element {
  @include invisible;
}
.element {
  @include visible;
}
{% endhighlight %}
