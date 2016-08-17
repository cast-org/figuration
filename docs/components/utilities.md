---
layout: docs
title: Utility Classes
group: components
---

We include dozens of utilities---classes with a single purpose. They're designed to reduce the frequency of highly repetitive declarations in your CSS while allowing for quick and easy development.

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Spacing

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

### Horizontal Centering
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

## Text Alignment

Easily realign text to components with text alignment classes.

{% example html %}
<p class="text-justify">Justified text.</p>
<p class="text-nowrap">No wrap text.</p>
{% endexample %}

For left, right, and center alignment, responsive classes are available that use the same viewport width breakpoints as the grid system.

{% example html %}
<p class="text-xs-left">Left aligned text on all viewport sizes.</p>
<p class="text-xs-center">Center aligned text on all viewport sizes.</p>
<p class="text-xs-right">Right aligned text on all viewport sizes.</p>

<p class="text-sm-left">Left aligned text on viewports sized SM (small) or wider.</p>
<p class="text-md-left">Left aligned text on viewports sized MD (medium) or wider.</p>
<p class="text-lg-left">Left aligned text on viewports sized LG (large) or wider.</p>
<p class="text-xl-left">Left aligned text on viewports sized XL (extra-large) or wider.</p>
{% endexample %}

## Text Transform

Transform text in components with text capitalization classes.

{% example html %}
<p class="text-lowercase">Lowercased text.</p>
<p class="text-uppercase">Uppercased text.</p>
<p class="text-capitalize">CapiTaliZed text.</p>
{% endexample %}

Note how `text-capitalize` only changes the first letter of each word, leaving the case of any other letters unaffected.

## Font Weight and Italics

Quickly change the weight (boldness) of text or italicize text.

{% example html %}
<p class="font-weight-bold">Bold text.</p>
<p class="font-weight-normal">Normal weight text.</p>
<p class="font-italic">Italic text.</p>
{% endexample %}

## Contextual Colors and Backgrounds

Convey meaning through color with a handful of emphasis utility classes. These may also be applied to links and will darken on hover just like our default link styles.

{% example html %}
<p class="text-muted">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>
<p class="text-primary">Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
<p class="text-success">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
<p class="text-info">Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
<p class="text-warning">Etiam porta sem malesuada magna mollis euismod.</p>
<p class="text-danger">Donec ullamcorper nulla non metus auctor fringilla.</p>
{% endexample %}

Contextual text classes also work well on anchors with the provided hover and focus states.

{% example html %}
<a href="#" class="text-muted">Muted link</a>
<a href="#" class="text-primary">Primary link</a>
<a href="#" class="text-success">Success link</a>
<a href="#" class="text-info">Info link</a>
<a href="#" class="text-warning">Warning link</a>
<a href="#" class="text-danger">Danger link</a>
{% endexample %}

There are also two special text color cases for use with either light and dark backgrounds. They can handle anchors too.  Use `.text-dark` on lighter backgrounds, and `.text-light` on darker backgrounds.  These will not provide accessible ratios of contrast for all items.

{% example html %}
<div class="cf-textalt row">
    <div class="col-sm-6">
        <div class="text-dark bg-info">Light text <a href="#" class="text-dark">anchor link</a></div>
        <div class="text-dark bg-danger">Light text <a href="#" class="text-dark">anchor link</a></div>
        <div class="text-dark bg-light1">Dark text <a href="#" class="text-dark">anchor link</a></div>
        <div class="text-dark bg-light2">Dark text <a href="#" class="text-dark">anchor link</a></div>
    </div>
    <div class="col-sm-6">
        <div class="text-light bg-dark1">Light text <a href="#" class="text-light">anchor link</a></div>
        <div class="text-light bg-dark2">Light text <a href="#" class="text-light">anchor link</a></div>
        <div class="text-light bg-danger">Light text <a href="#" class="text-light">anchor link</a></div>
        <div class="text-light bg-info">Light text <a href="#" class="text-light">anchor link</a></div>
    </div>
</div>
{% endexample %}

Similar to the contextual text color classes, easily set the background of an element to any contextual class. Anchor components will darken on hover, just like the text classes.

{% example html %}
<div class="bg-primary">Nullam id dolor id nibh ultricies vehicula ut id elit.</div>
<div class="bg-success">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</div>
<div class="bg-info">Maecenas sed diam eget risus varius blandit sit amet non magna.</div>
<div class="bg-warning">Etiam porta sem malesuada magna mollis euismod.</div>
<div class="bg-danger">Donec ullamcorper nulla non metus auctor fringilla.</div>
<div class="bg-inverse">Cras mattis consectetur purus sit amet fermentum.</div>
{% endexample %}

{% callout info %}
#### Dealing with Specificity

Sometimes contextual classes cannot be applied due to the specificity of another selector. In some cases, a sufficient workaround is to wrap your element's content in a `<div>` with the class.
{% endcallout %}

{% capture callout-include %}{% include callout-warning-color-assistive-technologies.md %}{% endcapture %}
{{ callout-include | markdownify }}

### Palette Colors

If enabled, any color theme that is added to the `$palette-themes` Sass map will become available for use.  For example a theme named `blue`, then becomes available as `.text-blue-[level]` or `.bg-blue-[level]`, where `level` is in the set defined by the `$palette-levels` variable.

{% example html %}
<p class="text-blue-700">blue-700 text sample</p>
<p><a href="#" class="text-blue-400">blue-400 link example</a></p>
<div class="bg-blue-100 text-dark">Blue-100 background with dark text</div>
{% endexample %}


## Widths/Heights

Easily make an element as wide as its parent using the `.width-100` utility class, which sets `width: 100%`.

{% example html %}
<img class="width-100" data-src="holder.js/200px100?outline=yes&text=Width%20%3D%20100%25" alt="Width = 100%">
{% endexample %}

There is also a `.height-100` utility class, which sets `height: 100%`.

## CSS `display`

Use `.display-block`, `.display-inline`, `.display-inline-block`, `.display-flex` to simply set an element's [`display` property](https://developer.mozilla.org/en-US/docs/Web/CSS/display) to `block`, `inline`, `inline-block`, or `flex` (respectively).

These classes are also available in repsonsive variants, in the form of `.display-{breakpoint}-{value}`, such as `.display-lg-block`.

To make an element `display: none`, use our [responsive utilities]({{ site.baseurl }}/layout/responsive-utilities/) instead.

{% example html %}
<div class="display-inline bg-success">Inline</div>
<div class="display-inline bg-success">Inline</div>

<span class="display-block bg-primary">Block</span>

<div class="display-inline-block bg-warning">
  <h3>inline-block</h3>
  Paint the fence!
</div>
<div class="display-inline-block bg-warning">
  <h3>inline-block</h3>
  Sand the floor!
</div>
{% endexample %}

## Caret Icon

Use carets to indicate some meaning of functionality or direction. Note that the default caret will reverse automatically in [dropup menus]({{ site.baseurl }}/widgets/dropdown/).

If inside of an element marked as `.open` the caret will reverse direction accordingly to indicate state.

{% example html %}
<span class="caret" aria-hidden="true"></span>
<span class="open">
  <span class="caret" aria-hidden="true"></span>
</span>
&mdash;
<span class="dropup">
  <span class="caret" aria-hidden="true"></span>
</span>
<span class="dropup open">
  <span class="caret" aria-hidden="true"></span>
</span>
{% endexample %}

## Close Icon

Use a generic close icon for dismissing content like modals and alerts. **Be sure to include text for screen readers**, as we've done with `aria-label`.

{% example html %}
<button type="button" class="close" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>

<a href="#" role="button" class="close" aria-label="Close">
    <span aria-hidden="true">&times;</span>
</a>
{% endexample %}

## Responsive Floats

These utility classes float an element to the left or right, or disable floating, based on the current viewport size using the [CSS `float` property](https://developer.mozilla.org/en-US/docs/Web/CSS/float). `!important` is included to avoid specificity issues. These use the same viewport width breakpoints as the grid system.

Two similar non-responsive mixins (`pull-left` and `pull-right`) are also available.

{% example html %}
<div class="pull-xs-left">Float left on all viewport sizes</div><br>
<div class="pull-xs-right">Float right on all viewport sizes</div><br>
<div class="pull-xs-none">Don't float on all viewport sizes</div><br>

<div class="pull-sm-left">Float left on viewports sized SM (small) or wider</div><br>
<div class="pull-md-left">Float left on viewports sized MD (medium) or wider</div><br>
<div class="pull-lg-left">Float left on viewports sized LG (large) or wider</div><br>
<div class="pull-xl-left">Float left on viewports sized XL (extra-large) or wider</div><br>
{% endexample %}

{% highlight scss %}
// Related simple non-responsive mixins
.element {
  @include pull-left;
}
.another-element {
  @include pull-right;
}
{% endhighlight %}

## Vertical Row Alignment

Give some vertical alignment,  using `display: table;` to keep items in a full width row.  Child items need to be defined with `.valign-item` in order to receive alignment.

{% example html %}
<div class="valign-top">
    <div class="valign-item">
        <a href="#">View more in teacher's guide</a> |
        <a href="#">Common Core alignment</a>
    </div>
    <div class="valign-item text-right">
        <button type="button" class="btn btn-primary btn-lg">Continue</button>
    </div>
</div>

<div class="valign-middle">
    <div class="valign-item">
        <a href="#">View more in teacher's guide</a> |
        <a href="#">Common Core alignment</a>
    </div>
    <div class="valign-item text-right">
        <button type="button" class="btn btn-primary btn-lg">Continue</button>
    </div>
</div>

<div class="valign-bottom valign-sample">
    <div class="valign-item">
        <a href="#">View more in teacher's guide</a> |
        <a href="#">Common Core alignment</a>
    </div>
    <div class="valign-item text-right">
        <button type="button" class="btn btn-primary btn-lg">Continue</button>
    </div>
</div>
{% endexample %}

## Clearfix

Easily clear `float`s by adding `.clearfix` **to the parent element**. A detailed explanation of [how the clearfix works](http://cssmojo.com/the-very-latest-clearfix-reloaded/) is available. Can also be used as a mixin.

{% highlight html %}
<div class="clearfix">...</div>
{% endhighlight %}

{% highlight scss %}
// Mixin itself
@mixin clearfix() {
    &::after {
        display: block;
        clear: both;
        content: "";
    }
}

// Usage as a mixin
.element {
  @include clearfix;
}
{% endhighlight %}

## Fixed Positioning

The `.position-f-t` class can be used to easily position elements at the top of the viewport and make them as wide as the viewport. **Be sure you understand the ramifications of fixed-position elements within your project.** Here's how the class is defined:

{% highlight scss %}
.position-f-t {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: $zindex-navbar-fixed;
}
{% endhighlight %}

## Invisible Content

The `.invisible` class can be used to toggle only the visibility of an element, meaning its `display` is not modified and the element can still affect the flow of the document.

{% highlight html %}
<div class="invisible">...</div>
{% endhighlight %}

{% highlight scss %}
// Class
.invisible {
  visibility: hidden;
}

// Usage as a mixin
.element {
  @include invisible;
}
{% endhighlight %}

## Hidden Content

Force an element to be hidden (including for screen readers) with the use of `.hidden-{breakpoint}-{up/down}` classes. These classes use `!important` to avoid specificity conflicts. For example, to hide content for `lg` or larger screens you would use `.hidden-lg-up`.

{% highlight html %}
<span class="hidden-lg-up">...</span>
<span class="hidden-sm-down">...</span>
{% endhighlight %}

## Screen Readers and Keyboard Users

Hide an element to all devices **except screen readers** with `.sr-only`. Combine `.sr-only` with `.sr-only-focusable` to show the element again when it's focused (e.g. by a keyboard-only user). Can also be used as mixins.

There are also repsonsive variants available in the form `.sr-only-{breakpoint}-{up/down}`.  For example, to visually hide content, **except for screen readers**, for a `sm` or smaller screens you would use `.sr-only-sm-down`.

These classes are exceptionally useful helping to follow [accessibility best practices]({{ site.baseurl }}/get-started/accessibility).

{% highlight html %}
<a class="sr-only sr-only-focusable" href="#content">Skip to main content</a>

<span class="sr-only-sm-down">...</span>
{% endhighlight %}

{% highlight scss %}
// Usage as a mixin
.skip-navigation {
  @include sr-only;
  @include sr-only-focusable;
}
{% endhighlight %}

## Image Replacement

Utilize the `.text-hide` class or mixin to help replace an element's text content with a background image.

{% highlight html %}
<h1 class="text-hide">Custom heading</h1>
{% endhighlight %}

{% highlight scss %}
// Usage as a mixin
.heading {
  @include text-hide;
}
{% endhighlight %}

## Responsive Embeds

Allow browsers to determine video or slideshow dimensions based on the width of their containing block by creating an intrinsic ratio that will properly scale on any device.

Rules are directly applied to `<iframe>`, `<embed>`, `<video>`, and `<object>` elements; optionally use an explicit descendant class `.embed-responsive-item` when you want to match the styling for other attributes.

**Pro-Tip!** You don't need to include `frameborder="0"` in your `<iframe>`s as we override that for you.

{% example html %}
<div class="embed-responsive embed-responsive-16x9">
    <iframe class="embed-responsive-item" src="//www.youtube.com/embed/MbGkL06EU90?rel=0" allowfullscreen></iframe>
</div>
{% endexample %}

Aspect ratios can be customized with modifier classes.

{% highlight html %}
<!-- 21:9 aspect ratio -->
<div class="embed-responsive embed-responsive-21x9">
  <iframe class="embed-responsive-item" src="..."></iframe>
</div>

<!-- 16:9 aspect ratio -->
<div class="embed-responsive embed-responsive-16x9">
  <iframe class="embed-responsive-item" src="..."></iframe>
</div>

<!-- 4:3 aspect ratio -->
<div class="embed-responsive embed-responsive-4x3">
  <iframe class="embed-responsive-item" src="..."></iframe>
</div>

<!-- 1:1 aspect ratio -->
<div class="embed-responsive embed-responsive-1x1">
  <iframe class="embed-responsive-item" src="..."></iframe>
</div>
{% endhighlight %}

### Special Case: Video

As a quick alternative, using the class `.video-responsive` uses the same settings as `.embed-responsive` but sets a default aspect ratio of 16:9.

{% highlight html %}
<!-- 16:9 aspect ratio -->
<div class="video-responsive">
  <video>...</video>
</div>
{% endhighlight %}

## Flexbox Alignment

Flexbox makes horizontal and vertical alignment easier with the CSS properties `align-content`, `align-self`, and `justify-content`.  Figuration provides some utility classes for these properties, which work with any flexbox enabled component.

It is important to understand the parent-child relationship created with flexbox. An element with `display: flex;` is a **flex parent**, and can horizontally or vertically align its children. All immediate children of the flex parent are **flex children**. A flex child can vertically align itself.

A simple example, using the grid layout, shows the `.row` as a flex parent, and the `.col-*`s as flex children.

{% highlight html %}
<div class="row row-flex">
    <div class=col-xs-4"></div>
    <div class=col-xs-4"></div>
    <div class=col-xs-4"></div>
</div>
{% endhighlight %}

### Vertical Alignment

Vertical alignment can be applied to a flex parent---which will align all the children automatically---or to a flex child which will align only that element.

To set the parent alignment, the available classes, per breakpoint, are:

- `.flex-{breakpoint}-top`
- `.flex-{breakpoint}-middle`
- `.flex-{breakpoint}-bottom`
- `.flex-{breakpoint}-stretch` - this is the default alignment

<div class="cf-example-row cf-example-row-flex">
{% example html %}
<div class="row row-flex flex-xs-top">
    <div class="col-xs">
        <code>.flex-*-top</code>
    </div>
    <div class="col-xs">
        1 of 3
    </div>
    <div class="col-xs">
        Align top - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dolor felis pretium!
    </div>
</div>

<div class="row row-flex flex-xs-middle">
    <div class="col-xs">
        <code>.flex-*-middle</code>
    </div>
    <div class="col-xs">
        1 of 3
    </div>
    <div class="col-xs">
        Align middle - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dolor felis pretium!
    </div>
</div>

<div class="row row-flex flex-xs-bottom">
    <div class="col-xs">
        <code>.flex-*-bottom</code>
    </div>
    <div class="col-xs">
        1 of 3
    </div>
    <div class="col-xs">
        Align bottom - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dolor felis pretium!
    </div>
</div>

<div class="row row-flex flex-xs-stretch">
    <div class="col-xs">
        <code>.flex-*-stretch</code>
    </div>
    <div class="col-xs">
        1 of 3
    </div>
    <div class="col-xs">
        Equal height - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dolor felis pretium!
    </div>
</div>
{% endexample %}
</div>

To align an individual child, we use the same alignment terms as the flex parent classes, but the child specific ones start with `.flex-self-*` instead of `.flex-*`.

To set the child alignment, the available classes, per breakpoint, are:

- `.flex-self-{breakpoint}-top`
- `.flex-self-{breakpoint}-middle`
- `.flex-self-{breakpoint}-bottom`
- `.flex-self-{breakpoint}-stretch` - this is the default alignment

<div class="cf-example-row cf-example-row-flex-v">
{% example html %}
<div class="row row-flex">
    <div class="col-xs flex-self-xs-top">
        align top
    </div>
    <div class="col-xs flex-self-xs-middle">
        align middle
    </div>
    <div class="col-xs flex-self-xs-bottom">
        align bottom
    </div>
    <div class="col-xs flex-self-xs-stretch">
        align stretch
    </div>
</div>
{% endexample %}
</div>

### Horizontal Alignment

Horizontal alignment classes are applied to the flex parent.

To set the alignment, the available classes, per breakpoint, are:

- `.flex-{breakpoint}-left`  - this is the default alignment
- `.flex-{breakpoint}-center`
- `.flex-{breakpoint}-right`
- `.flex-{breakpoint}-around`
- `.flex-{breakpoint}-between`

<div class="cf-example-row cf-example-row-flex">
{% example html %}
<div class="row row-flex flex-xs-left">
    <div class="col-xs-4">
        aligned to
    </div>
    <div class="col-xs-4">
        the left
    </div>
</div>

<div class="row row-flex flex-xs-center">
    <div class="col-xs-4">
        aligned to
    </div>
    <div class="col-xs-4">
        the center
    </div>
</div>

<div class="row row-flex flex-xs-right">
    <div class="col-xs-4">
        aligned to
    </div>
    <div class="col-xs-4">
        the right
    </div>
</div>

<div class="row row-flex flex-xs-around">
    <div class="col-xs-4">
        aliged to
    </div>
    <div class="col-xs-4">
        the space around
    </div>
</div>

<div class="row row-flex flex-xs-between">
    <div class="col-xs-4">
        aligned to
    </div>
    <div class="col-xs-4">
        the space between
    </div>
</div>
{% endexample %}
</div>


### Ordering

Need a quick way to reorder your flexbox items.  Here are a few helper classes.

The available classes, per breakpoint, are:

- `.flex-{breakpoint}-first`
- `.flex-{breakpoint}-last`
- `.flex-{breakpoint}-unordered`

<div class="cf-example-row">
{% example html %}
<div class="row row-flex">
    <div class="col-xs-1 flex-xs-last">
        1
    </div>
    <div class="col-xs-1 flex-xs-unordered">
        2
    </div>
    <div class="col-xs-1 flex-xs-last">
        3
    </div>
    <div class="col-xs-1 flex-xs-first">
        4
    </div>
    <div class="col-xs-1 flex-xs-first">
        5
    </div>
</div>
{% endexample %}
</div>
