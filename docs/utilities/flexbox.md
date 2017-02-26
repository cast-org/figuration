---
layout: docs
title: Flexbox
group: utilities
---

Quickly manage the layout, alignment, and sizing of grid columns, navigation, components, and more with our responsive flexbox utilities. For more complex implementations, custom CSS may be necessary.

The Flexbox utilites are always available even if both the opt-in flexbox and [full flexbox]({{ site.baseurl }}/layout/flexbox#full-flexbox-mode) modes are disabled.

These classes are all available in responsive variants, in the form of `.flex{-breakpoint}-{value}`, such as `.flex-lg-row`. Please refer to how our [breakpoint nomenclature]({{ site.baseurl }}/layout/overview/#breakpoint-nomenclature) is used.

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Enable Flex Layout

Apply `display` utilities to create a flexbox container and transform *direct children elements* into flex items. Flex containers and items are able to be modified further with additional flex properties.

Responsive display utilities:
- `.d{-breakpoint}-flex` sets `display: flex;`
- `.d{-breakpoint}-inline-flex` sets `display: inline-flex;`

<div class="cf-example-flex">
{% example html %}
<div class="d-flex p-0_5">A flexbox container!</div>
{% endexample %}
</div>

<div class="cf-example-flex">
{% example html %}
<div class="d-inline-flex p-0_5">An inline flexbox container!</div>
{% endexample %}
</div>

## Direction

Set the direction of flex items in a flex container with direction utilities. In most cases you can omit the horizontal class here as the browser default is `row`. However, you may encounter situations where you needed to explicitly set this value (like responsive layouts).

Responsive direction utilities:
- `.flex{-breakpoint}-row`
- `.flex{-breakpoint}-row-reverse`
- `.flex{-breakpoint}-column`
- `.flex{-breakpoint}-column-reverse`

Use `.flex-row` to set a horizontal direction (the browser default), or `.flex-row-reverse` to start the horizontal direction from the opposite side.

<div class="cf-example-flex">
{% example html %}
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
{% endexample %}
</div>

Use `.flex-column` to set a vertical direction, or `.flex-column-reverse` to start the vertical direction from the opposite side.

<div class="cf-example-flex">
{% example html %}
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
{% endexample %}
</div>

## Justify Content

Use the justify utilities on flexbox containers to change the `justify-content` property for the alignment of flex items on the *main axis* (the x-axis to start, y-axis if `flex-direction: column`). Choose from `start` (browser default), `center`, `end`, `around`, or `between`.

Responsive justify utilities:
- `.flex{-breakpoint}-start`
- `.flex{-breakpoint}-center`
- `.flex{-breakpoint}-end`
- `.flex{-breakpoint}-around`
- `.flex{-breakpoint}-between`

<div class="cf-example-flex">
{% example html %}
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
<div class="d-flex flex-between">
  <div class="p-0_5"><code>.flex-between</code></div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Justify the space between</div>
</div>
{% endexample %}
</div>

## Align Items

Use `flex-items` utilities on flexbox containers to change the alignment of flex items on the *cross axis* (the y-axis to start, x-axis if `flex-direction: column`). Choose from `start`, `center` , `end`, `baseline`, or `stretch` (browser default).

Responsive item alignment utilities:
- `.flex{-breakpoint}-items-start`
- `.flex{-breakpoint}-items-center`
- `.flex{-breakpoint}-items-end`
- `.flex{-breakpoint}-items-baseline`
- `.flex{-breakpoint}-items-stretch`

<div class="cf-example-flex">
{% example html %}
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
{% endexample %}
</div>

## Align Self

Use `flex-self` utilities on flexbox items to individually change their alignment on the cross axis (the y-axis to start, x-axis if `flex-direction: column`). Choose from the same options as `flex-items`: `start`, `center`, `end`, `baseline`, or `stretch` (browser default).

Responsive self alignment utilities:
- `.flex{-breakpoint}-self-start`
- `.flex{-breakpoint}-self-center`
- `.flex{-breakpoint}-self-end`
- `.flex{-breakpoint}-self-baseline`
- `.flex{-breakpoint}-self-stretch`

<div class="cf-example-flex">
{% example html %}
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
{% endexample %}
</div>

## Auto Margins

Flexbox can do some pretty awesome things when you mix flex alignments with auto margins.

### With justify-content

Easily move all flex items to one side, but keep another on the opposite end by mixing `justify-content` with `margin-right: auto` or `margin-left: auto`.

<div class="cf-example-flex">
{% example html %}
<div class="d-flex flex-end mb-1">
  <div class="mr-auto p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
</div>

<div class="d-flex flex-start">
  <div class="p-0_5">Flex item</div>
  <div class="p-0_5">Flex item</div>
  <div class="ml-auto p-0_5">Flex item</div>
</div>
{% endexample %}
</div>

### With align-items

Similarly, move one flex item to the top or bottom of a container by mixing `align-items`, `flex-direction: column`, and `margin-top: auto` or `margin-bottom: auto`.

<div class="cf-example-flex">
{% example html %}
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
{% endexample %}
</div>

## Wrap

Change how flex items wrap in a flex container. Choose from no wrapping at all (the browser default) with `.flex-nowrap`, wrapping with `.flex-wrap`, or reverse wrapping with `.flex-wrap-reverse`.

Responsive wrap utilities:
- `.flex{-breakpoint}-nowrap`
- `.flex{-breakpoint}-wrap`
- `.flex{-breakpoint}-wrap-reverse`

<div class="cf-example-flex">
{% example html %}
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
{% endexample %}
</div>

<div class="cf-example-flex">
{% example html %}
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
{% endexample %}
</div>

<div class="cf-example-flex">
{% example html %}
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
{% endexample %}
</div>

## Order

Change the *visual* order of specific flex items with a handful of `order` utilities. We only provide options for making an item first or last, as well as a reset to use the DOM order. As `order` takes any integer value (e.g., `5`), add custom CSS for any additional values needed.

Responsive order utilities:
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

## Align content

Use `flex-content` utilities on flexbox containers to align flex items *together* on the cross axis. Choose from `start` (browser default), `center`, `end`, `between`, `around`, or `stretch`. To demonstrate these utilities, we've enforced `flex-wrap: wrap` and increased the number of flex items.

**Heads up!** This property has no affect on single rows of flex items.

Responsive align content utilities:
- `.flex{-breakpoint}-content-start`
- `.flex{-breakpoint}-content-center`
- `.flex{-breakpoint}-content-end`
- `.flex{-breakpoint}-content-between`
- `.flex{-breakpoint}-content-around`
- `.flex{-breakpoint}-content-stretch`

<div class="cf-example-flex">
{% example html %}
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
{% endexample %}
</div>

<div class="cf-example-flex">
{% example html %}
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
{% endexample %}
</div>

<div class="cf-example-flex">
{% example html %}
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
{% endexample %}
</div>

<div class="cf-example-flex">
{% example html %}
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
{% endexample %}
</div>

<div class="cf-example-flex">
{% example html %}
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
{% endexample %}
</div>

<div class="cf-example-flex">
{% example html %}
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
{% endexample %}
</div>
