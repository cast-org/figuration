---
layout: docs
title: Sizing
group: utilities
---

Adjust the width or height of an element with some utilities.

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## 100% Width/Height

Easily make an element as wide as its parent using the `.w-100` utility class, which sets `width: 100%`.

{% example html %}
<img class="w-100" data-src="holder.js/200px100?text=Width%20%3D%20100%25" alt="Width = 100%">
{% endexample %}

There is also a `.h-100` utility class, which sets `height: 100%`.  However, it probabaly won't always work the way you think it should.  Some good information can be found in this article &mdash; [How to USE CSS to Set the Height of an HTML Element to 100%](https://www.lifewire.com/set-height-html-element-100-percent-3467075)

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

## Max Width/Height

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

## Auto Width/Height

In those cases when you need to reset the dimension of an element to `auto`, you can use `.w-auto` or `.h-auto`.

## SASS Reference

### Variables

The available [Customization options]({{ site.baseurl }}/get-started/options/), or Sass variables, that can be customized for this grouping of utility classes.

<div class="table-scroll">
    <table class="table table-bordered table-striped">
        <thead>
            <tr>
                <th style="width: 100px;">Name</th>
                <th style="width: 50px;">Type</th>
                <th style="width: 50px;">Default</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><code>$enable-utility-sizing</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the sizing utility classes.
                </td>
            </tr>
            <tr>
                <td><code>$enable-utility-sizing-width</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the width sizing utility classes.
                </td>
            </tr>
            <tr>
                <td><code>$enable-utility-sizing-height</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the height sizing utility classes.
                </td>
            </tr>
        </tbody>
    </table>
</div>

### Mixins

No mixins available.
