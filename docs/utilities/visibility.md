---
layout: docs
title: Visibility
group: utilities
---

Toggle only the `visibility` of an element, meaning its `display` is not modified and the element can hide content from most users, still affect the flow of the document.

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
