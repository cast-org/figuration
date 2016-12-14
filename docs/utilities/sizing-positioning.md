---
layout: docs
title: Sizing & Positioning
group: utilities
---

Gain a little more control over your layout.

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Widths/Heights

Easily make an element as wide as its parent using the `.w-100` utility class, which sets `width: 100%`.

{% example html %}
<img class="w-100" data-src="holder.js/200px100?text=Width%20%3D%20100%25" alt="Width = 100%">
{% endexample %}

There is also a `.h-100` utility class, which sets `height: 100%`.  However, it probabaly won't always work the way you think it should.  Some good information can be found in this article &mdash; [How Do You Set the Height of an HTML Element to 100%?](http://webdesign.about.com/od/csstutorials/f/set-css-height-100-percent.htm)

{% example html %}
<div class="cf-example-height">
    <div class="bg-gray-50 px-2 d-inline-block" style="height: 150px;">
        <div class="h-100 bg-gray-300 text-center p-1 d-inline-block">
            Full height<br />
            <code>.h-100</code>
        </div>
    </div>
</div>
{% endexample %}

You can also use the `.mw-100` and `.mh-100`, to set `max-width: 100%;` or `max-height: 100%;`, utilities as needed.

{% example html %}
<img class="mw-100" data-src="holder.js/1000px100?text=Max-width%20%3D%20100%25" alt="Max-width 100%">
{% endexample %}

{% example html %}
<div class="cf-example-height">
    <div class="bg-gray-50 px-2 d-inline-block" style="height: 150px;">
        <div class="mh-100 bg-gray-300 text-center p-1 d-inline-block" style="width: 100px; height: 200px;">
            Max-height 100%
         </div>
    </div>
</div>
{% endexample %}

## Fixed Positioning

The `.pos-f-t` class can be used to easily position elements at the top of the viewport and make them as wide as the viewport. **Be sure you understand the ramifications of fixed-position elements within your project.** Here's how the class is defined:

{% highlight scss %}
.pos-f-t {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: $zindex-navbar-fixed;
}
{% endhighlight %}
