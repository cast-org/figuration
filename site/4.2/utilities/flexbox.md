---
layout: doc
title: Flexbox
description: Use responsive flexbox utilites to control content layout.
group: utilities
toc: true
---

## Overview

Quickly manage the layout, alignment, and sizing of grid columns, navigation, components, and more with our responsive flexbox utilities. For more complex implementations, custom CSS may be necessary.

These classes are all available in responsive variants, in the form of `.flex{-breakpoint}-{value}`, such as `.flex-lg-row`. Please refer to how our [breakpoint nomenclature]({{ site.path }}/{{ version.docs }}/layout/breakpoints/#breakpoint-nomenclature) is used.

## Enable Flex Layout

Apply `display` utilities to create a flexbox container and transform *direct children elements* into flex items. Flex containers and items are able to be modified further with additional flex properties.

Responsive display utilities:
- `.d{-breakpoint}-flex` sets `display: flex;`
- `.d{-breakpoint}-inline-flex` sets `display: inline-flex;`

{% capture example %}
<div class="d-flex p-0_5">A flexbox container!</div>
{% endcapture %}
{% renderExample example, "cf-example-flex" %}

{% capture example %}
<div class="d-inline-flex p-0_5">An inline flexbox container!</div>
{% endcapture %}
{% renderExample example, "cf-example-flex" %}

## Direction

Set the direction of flex items in a flex container with direction utilities. In most cases you can omit the horizontal class here as the browser default is `row`. However, you may encounter situations where you needed to explicitly set this value (like responsive layouts).

Responsive direction utilities:
- `.flex{-breakpoint}-row` - browser default
- `.flex{-breakpoint}-row-reverse`
- `.flex{-breakpoint}-column`
- `.flex{-breakpoint}-column-reverse`

Use `.flex-row` to set a horizontal direction (the browser default), or `.flex-row-reverse` to start the horizontal direction from the opposite side.

{% capture example %}
<div class="d-flex flex-row mb-1">
  <div class="p-0_5">Flex item 1</div>
  <div class="p-0_5">Flex item 2</div>
  <div class="p-0_5">Flex item 3</div>
</div>
<div class="d-flex flex-row-reverse">
  <div class="p-0_5">Flex item 1</div>
  <div class="p-0_5">Flex item 2</div>
  <div class="p-0_5">Flex item 3</div>
</div>
{% endcapture %}
{% renderExample example, "cf-example-flex" %}

Use `.flex-column` to set a vertical direction, or `.flex-column-reverse` to start the vertical direction from the opposite side.

{% capture example %}
<div class="d-flex flex-column mb-1">
  <div class="p-0_5">Flex item 1</div>
  <div class="p-0_5">Flex item 2</div>
  <div class="p-0_5">Flex item 3</div>
</div>
<div class="d-flex flex-column-reverse">
  <div class="p-0_5">Flex item 1</div>
  <div class="p-0_5">Flex item 2</div>
  <div class="p-0_5">Flex item 3</div>
</div>
{% endcapture %}
{% renderExample example, "cf-example-flex" %}

## Justify Content

Use the justify utilities on flexbox containers to change the `justify-content` property for the alignment of flex items on the *main axis* (the x-axis to start, y-axis if `flex-direction: column`). Choose from `start` (browser default), `center`, `end`, `around`, or `between`.

Responsive justify utilities:
- `.flex{-breakpoint}-start` - browser default
- `.flex{-breakpoint}-center`
- `.flex{-breakpoint}-end`
- `.flex{-breakpoint}-around`
- `.flex{-breakpoint}-between`
- `.flex{-breakpoint}-evenly`

{% capture example %}
<div class="d-flex flex-start mb-1">
  <div class="p-0_5"><code>.flex-start</code></div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Justify at start of main axis</div>
</div>
<div class="d-flex flex-center mb-1">
  <div class="p-0_5"><code>.flex-center</code></div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Justify at center of main axis</div>
</div>
<div class="d-flex flex-end mb-1">
  <div class="p-0_5"><code>.flex-end</code></div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Justify at end of main axis</div>
</div>
<div class="d-flex flex-around mb-1">
  <div class="p-0_5"><code>.flex-around</code></div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Justify the space around</div>
</div>
<div class="d-flex flex-between mb-1">
  <div class="p-0_5"><code>.flex-between</code></div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Justify the space between</div>
</div>
<div class="d-flex flex-evenly">
  <div class="p-0_5"><code>.flex-evenly</code></div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Justify the space evenly</div>
</div>
{% endcapture %}
{% renderExample example, "cf-example-flex" %}

## Align Items

Use `flex-items` utilities on flexbox containers to change the alignment of flex items on the *cross axis* (the y-axis to start, x-axis if `flex-direction: column`). Choose from `start`, `center` , `end`, `baseline`, or `stretch` (browser default).

**Internet Explorer 10 and 11 do not support vertical alignment of flex items when the flex container has a `min-height`.** [See Flexbugs #3 for more details.](https://github.com/philipwalton/flexbugs#flexbug-3)

Responsive item alignment utilities:
- `.flex{-breakpoint}-items-start`
- `.flex{-breakpoint}-items-center`
- `.flex{-breakpoint}-items-end`
- `.flex{-breakpoint}-items-baseline`
- `.flex{-breakpoint}-items-stretch` - browser default

{% capture example %}
<div class="d-flex flex-items-start mb-1" style="min-height: 8rem;">
  <div class="p-0_5"><code>.flex-items-start</code></div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Align at cross axis start</div>
</div>
<div class="d-flex flex-items-center mb-1" style="min-height: 8rem;">
  <div class="p-0_5"><code>.flex-items-center</code></div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Align at cross axis center</div>
</div>
<div class="d-flex flex-items-end mb-1" style="min-height: 8rem;">
  <div class="p-0_5"><code>.flex-items-end</code></div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Align at cross axis end</div>
</div>
<div class="d-flex flex-items-baseline mb-1" style="min-height: 8rem;">
  <div class="p-0_5"><code>.flex-items-baseline</code></div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Align at baseline</div>
</div>
<div class="d-flex flex-items-stretch" style="min-height: 8rem;">
  <div class="p-0_5"><code>.flex-items-stretch</code></div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Stretch items</div>
</div>
{% endcapture %}
{% renderExample example, "cf-example-flex" %}

## Align Self

Use `flex-self` utilities on flexbox items to individually change their alignment on the cross axis (the y-axis to start, x-axis if `flex-direction: column`). Choose from the same options as `flex-items`: `start`, `center`, `end`, `baseline`, or `stretch` (browser default).

**Internet Explorer 10 and 11 do not support vertical alignment of flex items when the flex container has a `min-height`.** [See Flexbugs #3 for more details.](https://github.com/philipwalton/flexbugs#flexbug-3)

Responsive self alignment utilities:
- `.flex{-breakpoint}-self-start`
- `.flex{-breakpoint}-self-center`
- `.flex{-breakpoint}-self-end`
- `.flex{-breakpoint}-self-baseline`
- `.flex{-breakpoint}-self-stretch` - browser default

{% capture example %}
<div class="d-flex mb-1" style="min-height: 8rem;">
<div class="p-0_5">Flex item</div>
<div class="flex-self-start p-0_5"><code>.flex-self-start</code></div>
<div class="p-0_5">Flex item</div>
</div>
<div class="d-flex mb-1" style="min-height: 8rem;">
<div class="p-0_5">Flex item</div>
<div class="flex-self-center p-0_5"><code>.flex-self-center</code></div>
<div class="p-0_5">Flex item</div>
</div>
<div class="d-flex mb-1" style="min-height: 8rem;">
<div class="p-0_5">Flex item</div>
<div class="flex-self-end p-0_5"><code>.flex-self-end</code></div>
<div class="p-0_5">Flex item</div>
</div>
<div class="d-flex mb-1" style="min-height: 8rem;">
<div class="p-0_5">Flex item</div>
<div class="flex-self-baseline p-0_5"><code>.flex-self-baseline</code></div>
<div class="p-0_5">Flex item</div>
</div>
<div class="d-flex" style="min-height: 8rem;">
<div class="p-0_5">Flex item</div>
<div class="flex-self-stretch p-0_5"><code>.flex-self-stretch</code></div>
<div class="p-0_5">Flex item</div>
</div>
{% endcapture %}
{% renderExample example, "cf-example-flex" %}

## Auto Margins

Flexbox can do some pretty awesome things when you mix flex alignments with auto margins.

Shown below are three examples of controlling flex items via auto margins: default (no auto margin), pushing two items to the end (`.me-auto`), and pushing two items to the start (`.ms-auto`).

**Unfortunately, IE10 and IE11 do not properly support auto margins on flex items whose parent has a non-default `justify-content` value.** [See this StackOverflow answer](https://stackoverflow.com/a/37535548) for more details.

{% capture example %}
<div class="d-flex mb-1">
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
</div>

<div class="d-flex mb-1">
  <div class="me-auto p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
</div>

<div class="d-flex">
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="ms-auto p-0_5">Flex item</div>
</div>
{% endcapture %}
{% renderExample example, "cf-example-flex" %}

### With align-items

Vertically, move one flex item to the top or bottom of a container by mixing `align-items`, `flex-direction: column`, and `margin-top: auto` or `margin-bottom: auto`.

{% capture example %}
<div class="d-flex flex-items-start flex-column mb-1" style="min-height: 12rem;">
  <div class="mb-auto p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
</div>

<div class="d-flex flex-items-end flex-column" style="min-height: 12rem">
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="mt-auto p-0_5">Flex item</div>
</div>
{% endcapture %}
{% renderExample example, "cf-example-flex" %}

## Wrap

Change how flex items wrap in a flex container. Choose from no wrapping at all (the browser default) with `.flex-nowrap`, wrapping with `.flex-wrap`, or reverse wrapping with `.flex-wrap-reverse`.

Responsive wrap utilities:
- `.flex{-breakpoint}-nowrap` - browser default
- `.flex{-breakpoint}-wrap`
- `.flex{-breakpoint}-wrap-reverse`

{% capture example %}
<div class="d-flex flex-nowrap">
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
</div>
{% endcapture %}
{% renderExample example, "cf-example-flex" %}

{% capture example %}
<div class="d-flex flex-wrap">
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
</div>
{% endcapture %}
{% renderExample example, "cf-example-flex" %}

{% capture example %}
<div class="d-flex flex-wrap-reverse">
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
</div>
{% endcapture %}
{% renderExample example, "cf-example-flex" %}

## Order

Change the *visual* order of specific flex items with a handful of `order` utilities. We provide quick options for making an item first or last, as well as a reset to use the DOM order.

Quick responsive order utilities:
- `.order-{breakpoint}-first`
- `.order-{breakpoint}-last`
- `.order-{breakpoint}-unordered`

Even greater control is available with responsive order classes that set a specific order value.  These are in the form of `.order-{breakpoint}-{col}`, such as `.order-2.order-md-4`. Available order values include `0` through `6` across all breakpoints.

{% capture example %}
<div class="row">
  <div class="col-1 order-last">
    1
  </div>
  <div class="col-1 order-unordered">
    2
  </div>
  <div class="col-1 order-last">
    3
  </div>
  <div class="col-1 order-first">
    4
  </div>
  <div class="col-1 order-first">
    5
  </div>
</div>
{% endcapture %}
{% renderExample example, "cf-example-row" %}

{% capture example %}
<div class="row">
  <div class="col-1 order-6">
    1
  </div>
  <div class="col-1">
    2
  </div>
  <div class="col-1 order-5">
    3
  </div>
  <div class="col-1 order-1">
    4
  </div>
  <div class="col-1 order-2">
    5
  </div>
</div>
{% endcapture %}
{% renderExample example, "cf-example-row" %}

## Align Content

Use `flex-content` utilities on flexbox containers to align flex items *together* on the cross axis. Choose from `start` (browser default), `center`, `end`, `between`, `around`, or `stretch`. To demonstrate these utilities, we've enforced `flex-wrap: wrap` and increased the number of flex items.

**Heads up!** This property has no effect on single rows of flex items.

Responsive align content utilities:
- `.flex{-breakpoint}-content-start` - browser default
- `.flex{-breakpoint}-content-center`
- `.flex{-breakpoint}-content-end`
- `.flex{-breakpoint}-content-between`
- `.flex{-breakpoint}-content-around`
- `.flex{-breakpoint}-content-stretch`

{% capture example %}
<div class="d-flex flex-content-start flex-wrap" style="min-height: 12rem;">
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
</div>
{% endcapture %}
{% renderExample example, "cf-example-flex" %}

{% capture example %}
<div class="d-flex flex-content-center flex-wrap" style="min-height: 12rem;">
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
</div>
{% endcapture %}
{% renderExample example, "cf-example-flex" %}

{% capture example %}
<div class="d-flex flex-content-end flex-wrap" style="min-height: 12rem;">
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
</div>
{% endcapture %}
{% renderExample example, "cf-example-flex" %}

{% capture example %}
<div class="d-flex flex-content-between flex-wrap" style="min-height: 12rem;">
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
</div>
{% endcapture %}
{% renderExample example, "cf-example-flex" %}

{% capture example %}
<div class="d-flex flex-content-around flex-wrap" style="min-height: 12rem;">
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
</div>
{% endcapture %}
{% renderExample example, "cf-example-flex" %}

{% capture example %}
<div class="d-flex flex-content-stretch flex-wrap" style="min-height: 12rem;">
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
</div>
{% endcapture %}
{% renderExample example, "cf-example-flex" %}

## Sizing

Change the sizing of individual flexbox items to with sizing utilities.

Responsive sizing utilities:
- `.flex-{breakpoint}-fill`
- `.flex-{breakpoint}-grow-0`
- `.flex-{breakpoint}-grow-1`
- `.flex-{breakpoint}-grow`
- `.flex-{breakpoint}-shrink-0`
- `.flex-{breakpoint}-shrink-1`
- `.flex-{breakpoint}-shrink`
- `.flex-{breakpoint}-none`

To make an element grow or shrink as needed, use the `.flex-fill` utility.

{% capture example %}
<div class="d-flex">
  <div class="p-0_5">Flex item</div>
  <div class="flex-fill p-0_5">Auto sizing flex item - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum ipsum ut efficitur imperdiet.</div>
  <div class="p-0_5">Flex item</div>
</div>
{% endcapture %}
{% renderExample example, "cf-example-flex" %}

Use `.flex-grow-0/1` utilities to toggle a flex item's ability to grow to fill available space. In the example below, the `.flex-grow-1` elements uses all available space it can, while allowing the remaining two flex items their necessary space.

{% capture example %}
<div class="d-flex">
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5 flex-grow-1">Growing flex item - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum ipsum ut efficitur imperdiet.</div>
  <div class="p-0_5">Flex item</div>
</div>
{% endcapture %}
{% renderExample example, "cf-example-flex" %}

To make an element grow, but not shrink, use the `.flex-grow` utility.

{% capture example %}
<div class="d-flex">
  <div class="p-0_5">Flex item</div>
  <div class="flex-grow p-0_5">Growing flex item - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum ipsum ut efficitur imperdiet.</div>
  <div class="p-0_5">Flex item</div>
</div>
{% endcapture %}
{% renderExample example, "cf-example-flex" %}

Use `.flex-shrink-0/1` utilities to toggle a flex item's ability to shrink if necessary. In the example below, the second flex item with `.flex-shrink-1` is forced to wrap it's contents to a new line, "shrinking" to allow more space for the previous flex item with `.w-100`.

{% capture example %}
<div class="d-flex">
  <div class="p-0_5 w-100">Flex item</div>
  <div class="p-0_5 flex-shrink-1">Flex item</div>
</div>
{% endcapture %}
{% renderExample example, "cf-example-flex" %}

To make an element shrink, but not grow, use the `.flex-shrink` utility.

{% capture example %}
<div class="d-flex">
  <div class="p-0_5">Flex item</div>
  <div class="flex-shrink p-0_5">Shrinking flex item - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum ipsum ut efficitur imperdiet.</div>
  <div class="p-0_5">Flex item</div>
</div>
{% endcapture %}
{% renderExample example, "cf-example-flex" %}

To prevent an element from growing or shrinking, use the `.flex-none` utility.

{% capture example %}
<div class="d-flex">
  <div class="p-0_5">Flex item</div>
  <div class="flex-none p-0_5">Non-flex item - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum ipsum ut efficitur imperdiet.</div>
  <div class="p-0_5">Flex item</div>
</div>
{% endcapture %}
{% renderExample example, "cf-example-flex" %}

## Media Object

Replicate the [media object component]({{ site.path }}/{{ version.docs }}/components/media-object/) without need for a custom component? Recreate it with a few flex utilities that could allow for even more flexibility and customization.

{% capture example %}
<div class="d-flex">
  <div class="flex-shrink-0">
    <img data-src="holder.js/100x100" alt="Generic placeholder image">
  </div>
  <div class="flex-grow-1 ms-1">
    This is some content from a media component. You can replace this with any content and adjust it as needed.
  </div>
</div>
{% endcapture %}
{% renderExample example %}

One easy adjustment would be to vertically center the content next to the image by adding `.flex-items-center`.

{% capture example %}
<div class="d-flex flex-items-center">
  <div class="flex-shrink-0">
    <img data-src="holder.js/100x100" alt="Generic placeholder image">
  </div>
  <div class="flex-grow-1 ms-1">
    This is some content from a media component. You can replace this with any content and adjust it as needed.
  </div>
</div>
{% endcapture %}
{% renderExample example %}

## SASS Reference

### Variables

The available [Customization options]({{ site.path }}/{{ version.docs }}/get-started/options/), or Sass variables, that can be customized for this grouping of utility classes.

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
        <td><code>$enable-utility-flex</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the flex utility classes.
          Smaller segements of the flex utilities can be disabled with the following <code>$enable-*</code> variables.
        </td>
      </tr>
      <tr>
        <td><code>$enable-utility-flex-order</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the flex order utility classes.
        </td>
      </tr>
      <tr>
        <td><code>$enable-utility-flex-direction</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the flex direction utility classes.
        </td>
      </tr>
      <tr>
        <td><code>$enable-utility-flex-wrap</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the flex wrap utility classes.
        </td>
      </tr>
      <tr>
        <td><code>$enable-utility-flex-justify</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the flex <code>justify-content</code> utility classes.
        </td>
      </tr>
      <tr>
        <td><code>$enable-utility-flex-items</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the flex <code>align-items</code> utility classes.
        </td>
      </tr>
      <tr>
        <td><code>$enable-utility-flex-content</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the flex <code>align-content</code> utility classes.
        </td>
      </tr>
      <tr>
        <td><code>$enable-utility-flex-self</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the flex <code>align-self</code> utility classes.
        </td>
      </tr>
      <tr>
        <td><code>$enable-utility-flex-sizing</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the flex sizing utility classes.
        </td>
      </tr>
      <tr>
        <td><code>$utility-order-max</code></td>
        <td>integer</td>
        <td><code>6</code></td>
        <td>
          Maximum value to use for generation of order utilities.
        </td>
      </tr>
    </tbody>
  </table>
</div>

### Mixins

No mixins available.
