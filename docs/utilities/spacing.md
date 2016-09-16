---
layout: docs
title: Spacing
group: utilities
---

Assign `margin` or `padding` to an element or a subset of its sides with shorthand classes. Includes support for individual properties, all properties, and vertical and horizontal properties. All classes are multiples on the global default value, `1rem`.

The classes are named using the format: `{property}-{sides}-{size}`

Where *property* is one of:

* `margin` - for classes that set `margin`
* `padding` - for classes that set `padding`

Where *sides* is one of:

* `t` - for classes that set `margin-top` or `padding-top`
* `b` - for classes that set `margin-bottom` or `padding-bottom`
* `l` - for classes that set `margin-left` or `padding-left`
* `r` - for classes that set `margin-right` or `padding-right`
* `x` - for classes that set both `*-left` and `*-right`
* `y` - for classes that set both `*-top` and `*-bottom`
* `a` - for classes that set a `margin` or `padding` on all 4 sides of the element

Where *size* is one of:

* `0` - for classes that eliminate the `margin` or `padding` by setting it to `0`
* `1` - (by default) for classes that set the `margin` or `padding` to `$spacer-x` or `$spacer-y`
* `2` - (by default) for classes that set the `margin` or `padding` to `$spacer-x * 1.5` or `$spacer-y * 1.5`
* `3` - (by default) for classes that set the `margin` or `padding` to `$spacer-x * 3` or `$spacer-y * 3`

(You can add more sizes by adding entries to the `$spacers` Sass map variable.)

Here are some representative examples of these classes:

{% highlight scss %}
.margin-t-0 {
  margin-top: 0 !important;
}

.margin-l-1 {
  margin-left: $spacer-x !important;
}

.padding-x-2 {
  padding-left: ($spacer-x * 1.5) !important;
  padding-right: ($spacer-x * 1.5) !important;
}

.padding-a-3 {
  padding: ($spacer-y * 3) ($spacer-x * 3) !important;
}
{% endhighlight %}

## Horizontal Centering
Additionally, we also include an `.margin-x-auto` class for horizontally centering fixed-width block level content by setting the horizontal margins to `auto`.

<div class="cf-example">
  <div class="margin-x-auto" style="width: 200px; background-color: rgba(86,61,124,.15);">
    Centered element
  </div>
</div>

{% highlight html %}
<div class="margin-x-auto" style="width: 200px;">
  Centered element
</div>
{% endhighlight %}
