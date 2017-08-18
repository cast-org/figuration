---
layout: docs
title: Spacing
group: utilities
---

Assign `margin` or `padding` to an element or a subset of its sides with shorthand classes. Includes support for individual properties, all properties, and vertical and horizontal properties. Classes are generated from a Sass map with values ranging from `0.25rem` to `2rem`.

The classes are named using the format: `{property}{sides}{-breakpoint}-{size}`.

Where *property* is one of:

* `m` - for classes that set `margin`
* `p` - for classes that set `padding`

Where *breakpoint* is one of the responsive breakpoints, if above the minimum `xs` size.  Please refer to how our [breakpoint nomenclature]({{ site.baseurl }}/layout/overview/#breakpoint-nomenclature) is used.

Where *sides* is one of:

* blank - for classes that set a `margin` or `padding` on all 4 sides of the element
* `t` - for classes that set `margin-top` or `padding-top`
* `b` - for classes that set `margin-bottom` or `padding-bottom`
* `s` - for classes that set `margin` or `padding` on the `start` side
* `e` - for classes that set `margin` or `padding` on the `end` side
* `x` - for classes that set both `*-left` and `*-right`
* `y` - for classes that set both `*-top` and `*-bottom`

The *start/end sides* are designated as follows depending on which version of the Figuration CSS you are using.  The default `figuration.*.css` uses the `ltr` mode, where `figuration-rtl.*.css` uses the `rtl` mode.

- For `left-to-right` mode (`ltr` - default);
  - `start` refers to the `left` side
  - `end` refers to the `right` side
- For `right-to-left` mode (`rtl`);
  - `start` refers to the `right` side
  - `end` refers to the `left` side

Where *size* is one of:

* `0` - for classes that eliminate the `margin` or `padding` by setting it to `0`
* `0_25` - for classes that set the property to `$spacer * 0.25`
* `0_5` - for classes that set the property to `$spacer * 0.5`
* `1` - for classes that set the property to `$spacer`
* `1_5` - for classes that set the property to `$spacer * 1.5`
* `2` - for classes that set the property to `$spacer * 2`

(You can add more sizes by adding entries to the `$spacers` Sass map variable.)

Here are some representative examples of these classes:

{% highlight scss %}
.mt-0 {
  margin-top: 0 !important;
}

.ms-1 {
  margin-left: $spacer !important;
}

.mt-md-1 {
  margin-top: $spacer !important;
}

.px-1_5 {
  padding-left: ($spacer * 1.5) !important;
  padding-right: ($spacer * 1.5) !important;
}

.p-2 {
  padding: ($spacer * 2) ($spacer * 2) !important;
}
{% endhighlight %}

## Horizontal Centering
Additionally, we also include an `.mx-auto` class for horizontally centering fixed-width block level content&mdash; an element with `display: block;` and a defined `width`&mdash;by setting the horizontal margins to `auto`.

<div class="cf-example">
  <div class="mx-auto" style="width: 200px; background-color: rgba(86,61,124,.15);">
    Centered element
  </div>
</div>

{% highlight html %}
<div class="mx-auto" style="width: 200px;">
  Centered element
</div>
{% endhighlight %}
