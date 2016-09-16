---
layout: docs
title: Responsive Embeds
group: utilities
---

Allow browsers to determine embedded media dimensions based on the width of their containing block by creating an intrinsic ratio that will properly scale on any device.

Rules are directly applied to `<iframe>`, `<embed>`, `<video>`, and `<object>` elements; optionally use an explicit descendant class `.embed-responsive-item` when you want to match the styling for other attributes.

**Pro-Tip!** You don't need to include `frameborder="0"` in your `<iframe>`s as we override that for you.

{% example html %}
<div class="embed-responsive embed-responsive-16x9">
    <iframe class="embed-responsive-item" src="//www.youtube.com/embed/MbGkL06EU90?rel=0" allowfullscreen></iframe>
</div>
{% endexample %}

Aspect ratios can be customized with modifier classes.

{% highlight html %}
<!-- 21:9 aspect ratio -->
<div class="embed-responsive embed-responsive-21x9">
  <iframe class="embed-responsive-item" src="..."></iframe>
</div>

<!-- 16:9 aspect ratio -->
<div class="embed-responsive embed-responsive-16x9">
  <iframe class="embed-responsive-item" src="..."></iframe>
</div>

<!-- 4:3 aspect ratio -->
<div class="embed-responsive embed-responsive-4x3">
  <iframe class="embed-responsive-item" src="..."></iframe>
</div>

<!-- 1:1 aspect ratio -->
<div class="embed-responsive embed-responsive-1x1">
  <iframe class="embed-responsive-item" src="..."></iframe>
</div>
{% endhighlight %}

## Special Case: Video

As a quick alternative, using the class `.video-responsive` uses the same settings as `.embed-responsive` but sets a default aspect ratio of 16:9.

{% highlight html %}
<!-- 16:9 aspect ratio -->
<div class="video-responsive">
  <video>...</video>
</div>
{% endhighlight %}
