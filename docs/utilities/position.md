---
layout: docs
title: Position
group: utilities
---

Place a component outside the normal document flow.

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Warnings

Be sure you understand the ramifications of fixed and absolute position in your project; you may need to add aditional CSS.

## Common Positioning

The following utilities are available for positioning.

{% highlight html %}
<div class="position-static">...</div>
<div class="position-relative">...</div>
<div class="position-absolute">...</div>
<div class="position-fixed">...</div>
<div class="position-sticky">...</div>
{% endhighlight %}

Responsive variants are also available in the form of `.position{breakpoint}-{type}`, such as `.position-md-relative`. Please refer to how our [breakpoint nomenclature]({{ site.baseurl }}/layout/overview/#breakpoint-nomenclature) is used.

## Quick Positioning

There are also some quick positioning utilities available, but they are not responsive.

### Fixed Top

Position an element at the top of the viewport, from edge to edge.

{% highlight html %}
<div class="fixed-top">...</div>
{% endhighlight %}

### Fixed Bottom

Position an element at the bottom of the viewport, from edge to edge.

{% highlight html %}
<div class="fixed-bottom">...</div>
{% endhighlight %}

### Sticky Top

Position an element at the top of the viewport, from edge to edge, but only after you scroll past it.
This sticky utility uses CSS's `position: sticky`, which isn't fully supported in all browsers.  Additional support information can be found at [Can I Use - CSS position:sticky](https://caniuse.com/#feat=css-sticky).

**IE11 and IE10 will render `position: sticky` as `position: relative`.** As such, we wrap the styles in a `@supports` query, limiting the stickiness to only browsers that can render it properly.

{% highlight html %}
<div class="sticky-top">...</div>
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
                <td><code>$enable-utility-position</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the position utility classes.
                    Smaller segements of the position utilities can be disabled with the following <code>$enable-*</code> variables.
                </td>
            </tr>
            <tr>
                <td><code>$enable-utility-position-fixed-top</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the fixed top position utility class.
                </td>
            </tr>
            <tr>
                <td><code>$enable-utility-position-fixed-bottom</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the fixed bottom position utility class.
                </td>
            </tr>
            <tr>
                <td><code>$enable-utility-position-sticky-top</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the sticky top position utility class.
                </td>
            </tr>
            <tr>
                <td><code>$utility-position-breakpoints</code></td>
                <td>string</td>
                <td><code>map-keys($grid-breakpoints)</code></td>
                <td>
                    Map of breakpoints that will be used to generate responsive position utilities.
                </td>
            </tr>
            <tr>
                <td><code>$utility-position</code></td>
                <td>string</td>
                <td><code>static, relative, absolute, fixed, sticky</code></td>
                <td>
                    List of position values that will be used to generate responsive position utilities.
                </td>
            </tr>
        </tbody>
    </table>
</div>

### Mixins

No mixins available.
