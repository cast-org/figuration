---
layout: docs
title: Overflow
description: Easily adjust how content overflows within a container.
group: utilities
---

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Notation

These non-responsive `overflow` utilities are available:
- `.overflow-auto`
- `.overflow-hidden`

## Examples

<div class="cf-example d-md-flex">
    <div class="overflow-auto p-1 mb-1 mb-md-0 me-md-1 bg-light" style="max-width: 260px; max-height: 100px;">
        This is an example of using <code>.overflow-auto</code> on an element with set width and height dimensions. By design, this content will vertically scroll.
    </div>
    <div class="overflow-hidden p-1 bg-light" style="max-width: 260px; max-height: 100px;">
        This is an example of using <code>.overflow-hidden</code> on an element with set width and height dimensions.
    </div>
</div>

{% highlight html %}
<div class="overflow-auto">...</div>
<div class="overflow-hidden">...</div>
{% endhighlight %}

## SASS Reference

### Variables

The available [Customization options]({{ site.baseurl }}/{{ site.docs_version }}/get-started/options/), or Sass variables, that can be customized for this grouping of utility classes.

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
                <td><code>$enable-utility-overflow</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the overflow utility classes.
                </td>
            </tr>
            <tr>
                <td><code>$utility-overflow</code></td>
                <td>string</td>
                <td><code>auto, hidden</code></td>
                <td>
                    List of overflow values that will be used to generate overflow utilities.
                </td>
            </tr>
        </tbody>
    </table>
</div>

### Mixins

No mixins available.
