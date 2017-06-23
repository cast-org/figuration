---
layout: docs
title: Embed
group: utilities
---

Allow browsers to determine embedded media dimensions based on the width of their containing block by creating an intrinsic ratio that will properly scale on any device.

Rules are directly applied to `<iframe>`, `<embed>`, `<video>`, and `<object>` elements; optionally use an explicit descendant class `.embed-fluid-item` when you want to match the styling for other attributes.

**Pro-Tip!** You don't need to include `frameborder="0"` in your `<iframe>`s as we override that for you.

{% example html %}
<div class="embed-fluid embed-fluid-16x9">
    <iframe class="embed-fluid-item" src="https://www.youtube.com/embed/MbGkL06EU90?rel=0" allowfullscreen></iframe>
</div>
{% endexample %}

By default the aspect ratio is set to 16:9, this can be customized by overriding the `$embed-ratio` settings variable.  Also, the aspect ratios can be customized with the included modifier classes.

{% highlight html %}
<!-- 21:9 aspect ratio -->
<div class="embed-fluid embed-fluid-21x9">
  <iframe class="embed-fluid-item" src="..."></iframe>
</div>

<!-- 16:9 aspect ratio -->
<div class="embed-fluid embed-fluid-16x9">
  <iframe class="embed-fluid-item" src="..."></iframe>
</div>

<!-- 4:3 aspect ratio -->
<div class="embed-fluid embed-fluid-4x3">
  <iframe class="embed-fluid-item" src="..."></iframe>
</div>

<!-- 1:1 aspect ratio -->
<div class="embed-fluid embed-fluid-1x1">
  <iframe class="embed-fluid-item" src="..."></iframe>
</div>
{% endhighlight %}
