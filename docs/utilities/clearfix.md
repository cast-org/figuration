---
layout: docs
title: Clearfix
group: utilities
---

Easily clear `float`s by adding `.clearfix` **to the parent element**. A detailed explanation of [how the clearfix works](http://cssmojo.com/the-very-latest-clearfix-reloaded/) is available.

{% highlight html %}
<div class="clearfix">...</div>
{% endhighlight %}

Can also be used as a mixin.

{% highlight scss %}
// Mixin itself
@mixin clearfix() {
    &::after {
        display: block;
        clear: both;
        content: "";
    }
}

// Usage as a mixin
.element {
  @include clearfix;
}
{% endhighlight %}
