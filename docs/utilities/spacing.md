---
layout: docs
title: Spacing
group: utilities
---

Shorthand responsive margin and padding utility classes to modify an element’s appearance.

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## How It Works

Assign `margin` or `padding` to an element or a subset of its sides with shorthand classes. Includes support for individual properties, all properties, and vertical and horizontal properties. Classes are generated from a Sass map with values ranging from `0.25rem` to `2rem`.

## Notation

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
* `auto` - for classes that set the `margin` to auto

(You can add more sizes by adding entries to the `$spacers` Sass map variable.)

## Examples

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

### Horizontal Centering

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

### Negative Margins

In CSS, the `margin` properties can utilize negative values (`padding` cannot). Negative margin utilities are for every non-zero size listed above (e.g., `0_25`, `0_5`, `1`, `1_5`, `2`). These utilities can also be used for customizing the grid column gutters across breakpoints.

The syntax is nearly the same as the default, positive margin utilities, but with the addition of `n` before the requested size. Here's an example class that's the opposite of `.mt-0_25`:

{% highlight scss %}
.mt-n0_25 {
    margin-top: -0.25rem !important;
}
{% endhighlight %}

Here is a comparison and example of customizing the grid at the medium (`md`) breakpoint and above. The the `.col` horizontal padding is increased with `.px-md-2` and then counteracted that with negative horizontal margin `.mx-md-n2` on the parent `.row`.

{% capture example %}
<div class="row mb-1">
    <div class="col py-1">Standard horizontal column padding</div>
    <div class="col py-1">Standard horizontal column padding</div>
</div>

<div class="row mx-md-n2">
    <div class="col py-1 px-md-2">Custom horizontal column padding</div>
    <div class="col py-1 px-md-2">Custom horizontal column padding</div>
</div>
{% endcapture %}
{% include example.html content=example class="cf-example-row"%}

In some cases, you may also have to adjust the padding on the parent container of the `.row` element to prevent horizontal scrollbars from occuring.  For example, using the custom negative margin example above, you may find the need to use `.px-md-2` on the parent `.container-fluid`.

{% capture example %}
<div class="container-fluid px-md-2">
    <div class="row mx-md-n2">
        <div class="col py-1 px-md-2">Custom horizontal column padding</div>
        <div class="col py-1 px-md-2">Custom horizontal column padding</div>
    </div>
</div>
{% endcapture %}
{% include example.html content=example class="cf-example-row"%}

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
                <td><code>$enable-utility-spacing</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the spacing utility classes.
                </td>
            </tr>
            <tr>
                <td><code>$enable-utility-spacing-padding</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the padding utility classes.
                </td>
            </tr>
            <tr>
                <td><code>$enable-utility-spacing-margin</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the margin utility classes.
                </td>
            </tr>
            <tr>
                <td><code>$enable-utility-spacing-margin-auto</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the auto maring utility classes.
                </td>
            </tr>
            <tr>
                <td><code>$enable-utility-spacing-margin-negative</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the negative margin utility classes.
                </td>
            </tr>
             <tr>
                <td><code>$spacer</code></td>
                <td>string</td>
                <td><code>1rem</code></td>
                <td>
                    Base spacer dimension.
                </td>
            </tr>
            <tr>
                <td><code>$spacers</code></td>
                <td>map</td>
                <td><pre><code>"0":    0,
"0_25": ($spacer * .25),
"0_5":  ($spacer * .5),
"1":    $spacer,
"1_5":  ($spacer * 1.5),
"2":    ($spacer * 2)</code></pre>
                </td>
                <td>
                    Map of sizing append names and rules to be generated.
                </td>
            </tr>
            <tr>
                <td><code>$spacers-negative</code></td>
                <td>map</td>
                <td><code>$spacers</code></td>
                <td>
                    Map of negative margin sizing append names and rules to be generated.
                </td>
            </tr>
            <tr>
                <td><code>$spacers-negative-prepend</code></td>
                <td>string</td>
                <td><code>n</code></td>
                <td>
                    The string prepended to the name to designate negative margin classes.
                </td>
            </tr>
        </tbody>
    </table>
</div>

### Mixins

No mixins available.
