---
layout: docs
title: Visibility
group: utilities
---

Set the `visibility` of an element, meaning its `display` is not modified and will not affect layout. `.invisible` elements still take up space in the page. Content will be hidden both visually and for assistive technology/screen reader users.

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Examples

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
                <td><code>$enable-utility-visibility</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the visibility utility classes.
                </td>
            </tr>
        </tbody>
    </table>
</div>

### Mixins

#### invisible
{:.no_toc}

Set an element to be invisible.

{% highlight sass %}
@include invisible();
{% endhighlight %}

#### visible
{:.no_toc}

Set an element to be visible.

{% highlight sass %}
@include visible();
{% endhighlight %}
