---
layout: docs
title: Typography
group: content
---

Figuration includes simple and easily customized typography for headings, body text, lists, and more. For even more control, check out the [utility classes]({{ site.baseurl }}/utilities/typography/).

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Global Settings

Figuration sets basic global display, typography, and link styles. Specifically, we:

- Use a [native font stack]({{ site.baseurl }}/content/reboot/#native-font-stack) that selects the best `font-family` for each OS and device.
- Use the `$font-family-base`, `$font-size-base`, and `$line-height-base` attributes as our typographic base applied to the `<body>`.
- Use `$font-size-base` to scale the font size of text across all components.
- Convert all `font-size` CSS rules to `rem` units, assuming the typical browser default of `1rem`=`16px` through the use of our `font-size()` Sass mixin.  While *highly opinionated*, Figuration believes, this offers better accessibility than using `px` to define font sizes.
- Set the global link color via `$link-color` and apply link underlines only on `:hover`.
- Use `$body-bg` to set a `background-color` on the `<body>` (`#fff` by default).

These styles can be found within `_reboot.scss`, and the global variables are defined in `_settings.scss`. Make sure to set `$font-size-base` using `rem` units.

## Headings

All HTML headings, `<h1>` through `<h6>`, are available.

{% example html %}
<h1>h1. Example heading</h1>
<h2>h2. Example heading</h2>
<h3>h3. Example heading</h3>
<h4>h4. Example heading</h4>
<h5>h5. Example heading</h5>
<h6>h6. Example heading</h6>
{% endexample %}

`.h1` through `.h6` classes are also available, for when you want to match the font styling of a heading but cannot use the associated HTML element.

{% example html %}
<p class="h1">h1. Example heading</p>
<p class="h2">h2. Example heading</p>
<p class="h3">h3. Example heading</p>
<p class="h4">h4. Example heading</p>
<p class="h5">h5. Example heading</p>
<p class="h6">h6. Example heading</p>
{% endexample %}

### Customizing Headings

Create lighter, secondary text in any heading with a generic `<small>` tag or the `.small` class.

You can also use the included utility classes to recolor the secondary text.

{% example html %}
<h3>
  Fancy display heading
  <small class="text-muted">With secondary text</small>
</h3>

<h3>
  Fancy display heading
  <small class="text-info">With secondary text</small>
</h3>
{% endexample %}


## Lead

Make a paragraph stand out by adding `.lead`.

{% example html %}
<p class="lead">
  Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.
</p>
{% endexample %}

## Inline Text Elements

Styling for common inline HTML5 elements.

{% example html %}
<p>You can use the mark tag to <mark>highlight</mark> text.</p>
<p><del>This line of text is meant to be treated as deleted text.</del></p>
<p><s>This line of text is meant to be treated as no longer accurate.</s></p>
<p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
<p><u>This line of text will render as underlined</u></p>
<p><small>This line of text is meant to be treated as fine print.</small></p>
<p><strong>This line rendered as bold text.</strong></p>
<p><em>This line rendered as italicized text.</em></p>
{% endexample %}

`.mark` and `.small` classes are also available to apply the same styles as `<mark>` and `<small>` while avoiding any unwanted semantic implications that the tags would bring.

While not shown above, feel free to use `<b>` and `<i>` in HTML5. `<b>` is meant to highlight words or phrases without conveying additional importance while `<i>` is mostly for voice, technical terms, etc.

## Text Utilities

Change text alignment, transform, style, weight, and color with our [text utilities]({{ site.baseurl }}/utilities/typography/#text-alignment).

## Abbreviations

Stylized implementation of HTML's `<abbr>` element for abbreviations and acronyms to show the expanded version on hover. Abbreviations with a `title` attribute have a default underline and gain a help cursor to provide additional context on hover and to users of assistive technologies.

Add `.initialism` to an abbreviation for a slightly smaller font-size.

{% example html %}
<p><abbr title="attribute">attr</abbr></p>
<p><abbr title="HyperText Markup Language" class="initialism">HTML</abbr></p>
{% endexample %}

## Blockquotes

For quoting blocks of content from another source within your document. Wrap `<blockquote class="blockquote">` around any <abbr title="HyperText Markup Language">HTML</abbr> as the quote.

{% example html %}
<blockquote class="blockquote">
  <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
</blockquote>
{% endexample %}

### Naming a Source

Add a `<footer class="blockquote-footer">` for identifying the source. Wrap the name of the source work in `<cite>`.

{% example html %}
<blockquote class="blockquote">
  <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
</blockquote>
{% endexample %}

### Alignment

Use [text alignment utilities]({{ site.baseurl }}/utilities/typography/#text-alignment) to alter the layout of the blockquote.

{% example html %}
<blockquote class="blockquote text-center">
  <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
</blockquote>
{% endexample %}

{% example html %}
<blockquote class="blockquote text-end">
  <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
</blockquote>
{% endexample %}

## Lists

See the [rebooted list styles]({{ site.baseurl }}/content/reboot/#lists) for the default layouts.

### Unstyled

Remove the default `list-style` and left margin on list items (immediate children only). **This only applies to immediate children list items**, meaning you will need to add the class for any nested lists as well.

{% example html %}
<ul class="list-unstyled">
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing elit</li>
  <li>Integer molestie lorem at massa</li>
  <li>Facilisis in pretium nisl aliquet</li>
  <li>Nulla volutpat aliquam velit
    <ul>
      <li>Phasellus iaculis neque</li>
      <li>Purus sodales ultricies</li>
      <li>Vestibulum laoreet porttitor sem</li>
      <li>Ac tristique libero volutpat at</li>
    </ul>
  </li>
  <li>Faucibus porta lacus fringilla vel</li>
  <li>Aenean sit amet erat nunc</li>
  <li>Eget porttitor lorem</li>
</ul>
{% endexample %}

### Inline

Remove a list's bullets and apply some light `margin` with a combination of two classes, `.list-inline` and `.list-inline-item`.

{% example html %}
<ul class="list-inline">
  <li class="list-inline-item">Lorem ipsum</li>
  <li class="list-inline-item">Phasellus iaculis</li>
  <li class="list-inline-item">Nulla volutpat</li>
</ul>
{% endexample %}

### Description List Alignment

Align terms and descriptions horizontally by using our grid system's predefined classes (or semantic mixins). For longer terms, you can optionally add a `.text-truncate` class to truncate the text with an ellipsis.

{% example html %}
<dl class="row">
  <dt class="col-sm-3">Description lists</dt>
  <dd class="col-sm-9">A description list is perfect for defining terms.</dd>

  <dt class="col-sm-3">Euismod</dt>
  <dd class="col-sm-9">Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
  <dd class="col-sm-9 offset-sm-3">Donec id elit non mi porta gravida at eget metus.</dd>

  <dt class="col-sm-3">Malesuada porta</dt>
  <dd class="col-sm-9">Etiam porta sem malesuada magna mollis euismod.</dd>

  <dt class="col-sm-3 text-truncate">Truncated term is truncated</dt>
  <dd class="col-sm-9">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>

  <dt class="col-sm-3">Nesting</dt>
  <dd class="col-sm-9">
    <dl class="row">
      <dt class="col-sm-4">Nested definition list</dt>
      <dd class="col-sm-8">Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.</dd>
    </dl>
  </dd>
</dl>
{% endexample %}

## Responsive Typography

*Responsive typography* refers to scaling an element's `font-size` within a series of media queries.

Figuration, by default, does not have responsive typography enabled. However, we have included two different methods to enable this functionality.
- *Fluid* sizing based on the dimensions of the viewport.  Based on the [Responsive font-size mixin](https://github.com/MartijnCuppens/rfs) by [Martijn Cuppens](https://github.com/MartijnCuppens).
- *Scaled* sizing is scaling based on current [responsive breakpoint]({{ site.baseurl }}/layout/overview/#responsive-breakpoints).

See the [Global Options]({{ site.baseurl }}/get-started/options/#global-options) on how the enable either method.  **Note that only one of these methods can be enabled at a time.**

Benefits of using Figuration's responsive typography options include:
- Font sizes will adjust with the size of the device, which can help reduce the chance of overflow for long words.
- Font sizes of text elements will always remain in relation to one another.
- The minimum font size (configuration setting) will prevent the font size from becoming too small so readability can be assured.
- Does not use the `font-size` of the `<html>` element, allowing for a greater level of accessibility for user's who change the default font size of their browser.

Possible drawbacks include:
- Can generate a large amount of CSS.  Disabling the `$responsive-font-size-generate-static` setting will also help with reducing the overall size of the CSS.  Also using compressing the CSS, with gzip or other methods, will reduce the CSS file size impact due to the large amount of repeating strings.

### Common Settings

<table class="table table-scroll table-bordered table-striped">
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
        <td><code>$responsive-font-size-minimum-size</code></td>
        <td>font size in <code>px</code> or <code>rem</code></td>
        <td>1em</td>
        <td>
            <p>Calculated font sizes will never be smaller than this size. However, you can still pass a smaller font size, but then it won't be responsively sized.</p>
            <p>For example: <code>font-size(1.5rem)</code> will trigger responsive sizing, with <code>font-size(.875rem)</code> will remain staticly sized at <code>.875rem</code>.</p>
        </td>
    </tr>
    <tr>
        <td><code>$responsive-font-size-generate-static</code></td>
        <td>boolean</td>
        <td>true</td>
        <td>
            <p>Generates the <code>.font-size-static</code> utility classes to disable the responsive font sizes for an element and it's descendant elements. This does not apply to font sizes which are inherited from parent elements.</p>
            <p>If you are not using these utilities, it would be worthwhile to disable this setting to stop the generation of a potentially large amount of unused CSS.</p>
        </td>
    </tr>
</tbody>
</table>

### Fluid Responsive Typography

A smooth responsive sizing of text based on the viewport dimensions, by default this is the viewport width `vw` dimension.  As the viewport size is reduced, font sizes are

Using Figuration's default settings, a Sass input:
{% highlight scss %}
.element {
  @include font-size(2.5rem);
}
{% endhighlight %}

Will generate the CSS output:
{% highlight css %}
.element,
.font-size-static .element, .element.font-size-static {
  font-size: 2.5rem;
}

@media (max-width: 75em) {
  .element {
    font-size: calc(1.3rem + 1.6vw) ;
  }
}
{% endhighlight %}

#### Settings

<table class="table table-scroll table-bordered table-striped">
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
        <td><code>$responsive-font-size-fluid-breakpoint</code></td>
        <td><code>em</code> unit breakpoint dimension</td>
        <td>75em</td>
        <td>Above this breakpoint, the font size will be equal to the font size you passed to the mixin; below the breakpoint, the font size will dynamically scale.</td>
    </tr>
    <tr>
        <td><code>$responsive-font-size-fluid-factor</code></td>
        <td>integer</td>
        <td>5</td>
        <td>This value determines the strength of font size resizing. The higher $rfs-factor, the less difference there is between font sizes on small screens. The lower the factor, the less influence the responsive scaling has, which results in bigger font sizes for small screens. <code>$responsive-font-size-fluid-factor</code> must be greater than 1, and setting it to 1 will disable responsive scaling.</td>
    </tr>
    <tr>
        <td><code>$responsive-font-size-fluid-two-dimensional</code></td>
        <td>boolean</td>
        <td>false</td>
        <td>Enabling the two dimensional media queries will determine the font size based on the smallest side of the screen with <code>vmin</code>. This prevents the font size from changing if the device toggles between portrait and landscape mode.</td>
    </tr>
</tbody>
</table>


#### Safari Issue
There is a known issue with Safari where it does not always recalculate the value of vw in a calc()-function for font-sizes in iframes.
[More information and a workaround can be found over at Martijn Cuppen's Responsive font-size mixin](https://github.com/MartijnCuppens/rfs#known-issues).

### Scaled Responsive Typography

This variant of the responsive typography uses a stepped scale, making the font scale and sizing consistent across all widths of a breakpoint.

By default the font size is scaled downwards at each decreasing breakpoint level from largest to smallest.

Using Figuration's default settings, a Sass input:
{% highlight scss %}
.element {
  @include font-size(2.5rem);
}
{% endhighlight %}

Will generate the CSS output:
{% highlight css %}
.element {
  font-size: 1.9375rem;
}

@media (min-width: 36em) {
  .element {
    font-size: 2.078125rem;
  }
}

@media (min-width: 48em) {
  .element {
    font-size: 2.21875rem;
  }
}

@media (min-width: 62em) {
  .element {
    font-size: 2.359375rem;
  }
}

@media (min-width: 75em) {
  .element {
    font-size: 2.5rem;
  }
}

.font-size-static .element, .element.font-size-static {
  font-size: 2.5rem;
}
{% endhighlight %}

#### Settings

Scaled responsive typography only has one setting, `$responsive-font-size-scale-factor`, a Sass map that aligns with Figuration's [grid breakpoints]({{ site.baseurl }}/layout/grid/#grid-options).  Each breakpoint level gets an associated scaling value.  The following example shows the default settings for the scaling values.

{% highlight scss %}
$responsive-font-size-scale-factor: (
    xs: .625,
    sm: .71875,
    md: .8125,
    lg: .90625,
    xl: 1
) !default;
{% endhighlight %}

It is also possible to change the settings so font size grows as the breakpoint size increases, as shown in the following example.

{% highlight scss %}
$responsive-font-size-scale-factor: (
    xs: 1,
    sm: 1.09375,
    md: 1.1875,
    lg: 1.28125,
    xl: 1.375
);
{% endhighlight %}