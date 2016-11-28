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

The following example shows how the clearfix can be used. Without the clearfix the wrapping div would not span around the buttons which would cause a broken layout, as shown in the second part of the example.

<div class="cf-example">
    <strong>With <code>.clearfix</code></strong>
    <div class="bg-info clearfix mb-1">
        <button class="btn float-left">Button floated left</button>
        <button class="btn float-right">Button floated right</button>
    </div>

    <strong>Without <code>.clearfix</code></strong>
    <div class="bg-info">
        <button class="btn float-left">Button floated left</button>
        <button class="btn float-right">Button floated right</button>
    </div>
</div>
{% highlight html %}
    <!-- With .clearfix -->
    <div class="bg-info clearfix">
        <button class="btn float-left">Button floated left</button>
        <button class="btn float-right">Button floated right</button>
    </div>

    <!-- Without .clearfix -->
    <div class="bg-info">
        <button class="btn float-left">Button floated left</button>
        <button class="btn float-right">Button floated right</button>
    </div>
{% endhighlight %}