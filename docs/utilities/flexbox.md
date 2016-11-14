---
layout: docs
title: Flexbox
group: utilities
---

Visually align and re-order your content with the power of flexbox.

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Flexbox Alignment

Flexbox makes horizontal and vertical alignment easier with the CSS properties `align-content`, `align-self`, and `justify-content`.  Figuration provides some utility classes for these properties, which work with any flexbox enabled component.

It is important to understand the parent-child relationship created with flexbox. An element with `display: flex;` is a **flex parent**, and can horizontally or vertically align its children. All immediate children of the flex parent are **flex children**. A flex child can vertically align itself.

A simple example, using the grid layout, shows the `.row` as a flex parent, and the `.col-*`s as flex children.

{% highlight html %}
<div class="row row-flex">
    <div class="col-4"></div>
    <div class="col-4"></div>
    <div class="col-4"></div>
</div>
{% endhighlight %}

### Vertical Alignment

Vertical alignment can be applied to a flex parent---which will align all the children automatically---or to a flex child which will align only that element.

To set the parent alignment, the available classes, per breakpoint, are:

- `.flex{-breakpoint}-top`
- `.flex{-breakpoint}-middle`
- `.flex{-breakpoint}-bottom`
- `.flex{-breakpoint}-stretch` - this is the default alignment

<div class="cf-example-row cf-example-row-flex">
{% example html %}
<div class="row row-flex flex-top">
    <div class="col">
        <code>.flex-*-top</code>
    </div>
    <div class="col">
        1 of 3
    </div>
    <div class="col">
        Align top - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dolor felis pretium!
    </div>
</div>

<div class="row row-flex flex-middle">
    <div class="col">
        <code>.flex-*-middle</code>
    </div>
    <div class="col">
        1 of 3
    </div>
    <div class="col">
        Align middle - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dolor felis pretium!
    </div>
</div>

<div class="row row-flex flex-bottom">
    <div class="col">
        <code>.flex-*-bottom</code>
    </div>
    <div class="col">
        1 of 3
    </div>
    <div class="col">
        Align bottom - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dolor felis pretium!
    </div>
</div>

<div class="row row-flex flex-stretch">
    <div class="col">
        <code>.flex-*-stretch</code>
    </div>
    <div class="col">
        1 of 3
    </div>
    <div class="col">
        Equal height - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dolor felis pretium!
    </div>
</div>
{% endexample %}
</div>

To align an individual child, we use the same alignment terms as the flex parent classes, but the child specific ones start with `.flex-self-*` instead of `.flex-*`.

To set the child alignment, the available classes, per breakpoint, are:

- `.flex-self{-breakpoint}-top`
- `.flex-self{-breakpoint}-middle`
- `.flex-self{-breakpoint}-bottom`
- `.flex-self{-breakpoint}-stretch` - this is the default alignment

<div class="cf-example-row cf-example-row-flex-v">
{% example html %}
<div class="row row-flex">
    <div class="col flex-self-top">
        align top
    </div>
    <div class="col flex-self-middle">
        align middle
    </div>
    <div class="col flex-self-bottom">
        align bottom
    </div>
    <div class="col flex-self-stretch">
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
<div class="row row-flex flex-left">
    <div class="col-4">
        aligned to
    </div>
    <div class="col-4">
        the left
    </div>
</div>

<div class="row row-flex flex-center">
    <div class="col-4">
        aligned to
    </div>
    <div class="col-4">
        the center
    </div>
</div>

<div class="row row-flex flex-right">
    <div class="col-4">
        aligned to
    </div>
    <div class="col-4">
        the right
    </div>
</div>

<div class="row row-flex flex-around">
    <div class="col-4">
        aligned to
    </div>
    <div class="col-4">
        the space around
    </div>
</div>

<div class="row row-flex flex-between">
    <div class="col-4">
        aligned to
    </div>
    <div class="col-4">
        the space between
    </div>
</div>
{% endexample %}
</div>


### Ordering

Quickly change the **visual order** of your flexbox items.

The available classes, per breakpoint, are:

- `.flex-{breakpoint}-first`
- `.flex-{breakpoint}-last`
- `.flex-{breakpoint}-unordered`

<div class="cf-example-row">
{% example html %}
<div class="row row-flex">
    <div class="col-1 flex-last">
        1
    </div>
    <div class="col-1 flex-unordered">
        2
    </div>
    <div class="col-1 flex-last">
        3
    </div>
    <div class="col-1 flex-first">
        4
    </div>
    <div class="col-1 flex-first">
        5
    </div>
</div>
{% endexample %}
</div>
