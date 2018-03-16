---
layout: docs
title: Lists
group: components
---

Lists are a flexible component for displaying a series of content with various styling options. List items can be modified and extended to support just about any content within. They can also be used as navigation with the right modifier class.

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Unstyled List
In the basic form, a `.list` removes the default `list-style` and left margin on list items, but nested lists will be indented.

The **use of the `.list-item` class required** for each `<li>` or simulated list item, for proper styling.

{% example html %}
<ul class="list">
    <li class="list-item">List item 1</li>
    <li class="list-item">List item 2</li>
    <li class="list-item">List item 3</li>
</ul>
{% endexample %}

You can also use `<div>` containers to create a list.

{% example html %}
<div class="list">
    <div class="list-item">List item 1</div>
    <div class="list-item">List item 2</div>
    <div class="list-item">List item 3</div>
</div>
{% endexample %}

## Styled Lists

Add some visual style to lists with a handful of modifier classes.

### Bulleted List
Add the `.list-bulleted` modifier to add a stylized bullet to each list item.

{% example html %}
<ul class="list list-bulleted">
    <li class="list-item">Bulleted list item 1</li>
    <li class="list-item">Bulleted list item 2</li>
    <li class="list-item">Bulleted list item 3</li>
</ul>
{% endexample %}

{% example html %}
<div class="list list-bulleted">
    <div class="list-item">Bulleted list item 1</div>
    <div class="list-item">Bulleted list item 2</div>
    <div class="list-item">Bulleted list item 3</div>
</div>
{% endexample %}

### Ordered List
Add the `.list-ordered` modifier to create a numerically ordered list.

{% example html %}
<ol class="list list-ordered">
    <li class="list-item">Ordered list item 1</li>
    <li class="list-item">Ordered list item 2</li>
    <li class="list-item">Ordered list item 3</li>
</ol>
{% endexample %}

{% example html %}
<div class="list list-ordered">
    <div class="list-item">Ordered list item 1</div>
    <div class="list-item">Ordered list item 2</div>
    <div class="list-item">Ordered list item 3</div>
</div>
{% endexample %}

### Nested Lists
When nesting lists, you will need to add the `.list` class and any modifiers to each nested list to restyle as needed.

{% example html %}
<ul class="list">
    <li class="list-item">List item 1</li>
    <li class="list-item">List item 2
        <ul class="list">
          <li class="list-item">List item 1</li>
          <li class="list-item">List item 2</li>
          <li class="list-item">List item 3</li>
        </ul>
    </li>
    <li class="list-item">List item 3</li>
</ul>
{% endexample %}

{% example html %}
<ul class="list list-bulleted">
    <li class="list-item">Bulleted list item 1</li>
    <li class="list-item">Bulleted list item 2
        <ul class="list list-bulleted">
          <li class="list-item">Bulleted list item 1</li>
          <li class="list-item">Bulleted list item 2</li>
          <li class="list-item">Bulleted list item 3</li>
        </ul>
    </li>
    <li class="list-item">List item 3</li>
</ul>
{% endexample %}

{% example html %}
<ol class="list list-ordered">
    <li class="list-item">Ordered list item 1</li>
    <li class="list-item">Ordered list item 2
        <ol class="list list-ordered">
          <li class="list-item">Ordered list item 1</li>
          <li class="list-item">Ordered list item 2</li>
          <li class="list-item">Ordered list item 3</li>
        </ol>
    </li>
    <li class="list-item">List item 3</li>
</ol>
{% endexample %}

{% example html %}
<ul class="list">
    <li class="list-item">List item 1</li>
    <li class="list-item">List item 2
        <ul class="list list-bulleted">
          <li class="list-item">Bulleted list item 1</li>
          <li class="list-item">Bulleted list item 2</li>
          <li class="list-item">Bulleted list item 3</li>
        </ul>
    </li>
    <li class="list-item">List item 3</li>
</ul>
{% endexample %}

{% example html %}
<ul class="list">
    <li class="list-item">List item 1</li>
    <li class="list-item">List item 2
        <ol class="list list-ordered">
          <li class="list-item">Ordered list item 1</li>
          <li class="list-item">Ordered list item 2</li>
          <li class="list-item">Ordered list item 3</li>
        </ol>
    </li>
    <li class="list-item">List item 3</li>
</ul>
{% endexample %}

{% example html %}
<ul class="list list-bulleted">
    <li class="list-item">Bulleted list item 1</li>
    <li class="list-item">Bulleted list item 2
        <ul class="list list-ordered">
          <li class="list-item">Ordered list item 1</li>
          <li class="list-item">Ordered list item 2</li>
          <li class="list-item">Ordered list item 3</li>
        </ul>
    </li>
    <li class="list-item">Bulleted list item 3</li>
</ul>
{% endexample %}

{% example html %}
<ul class="list list-ordered">
    <li class="list-item">Ordered list item 1</li>
    <li class="list-item">Ordered list item 2
        <ul class="list list-bulleted">
          <li class="list-item">Bulleted list item 1</li>
          <li class="list-item">Bulleted list item 2</li>
          <li class="list-item">Bulleted list item 3</li>
        </ul>
    </li>
    <li class="list-item">Ordered list item 3</li>
</ul>
{% endexample %}

### Divided List
Place a rule between list items with the `.list-divided` modifier.

{% example html %}
<ul class="list list-divided">
    <li class="list-item">Divided list item 1</li>
    <li class="list-item">Divided list item 2</li>
    <li class="list-item">Divided list item 3</li>
</ul>
{% endexample %}

Divided lists also work with `<div>` containers.

{% example html %}
<div class="list list-divided">
    <div class="list-item">Divided list item 1</div>
    <div class="list-item">Divided list item 2</div>
    <div class="list-item">Divided list item 3</div>
</div>
{% endexample %}

### Ruled List
Place a rule at the top and bottom of a list, and between list items with the `.list-ruled` modifier.

{% example html %}
<ul class="list list-ruled">
    <li class="list-item">Ruled list item 1</li>
    <li class="list-item">Ruled list item 2</li>
    <li class="list-item">Ruled list item 3</li>
</ul>
{% endexample %}

Similar to divided lists, ruled lists also work with `<div>` containers.

{% example html %}
<div class="list list-ruled">
    <div class="list-item">Ruled list item 1</div>
    <div class="list-item">Ruled list item 2</div>
    <div class="list-item">Ruled list item 3</div>
</div>
{% endexample %}

## Spacing
Easily add some spacing to lists. Adding `.list-spaced` will provide padding on all sides of each list item.

{% example html %}
<div class="list list-spaced list-ruled">
    <div class="list-item">List item 1</div>
    <div class="list-item">List item 2</div>
    <div class="list-item">List item 3</div>
</div>
{% endexample %}

Add only vertical padding with `.list-spaced-y`.

{% example html %}
<div class="list list-spaced-y list-ruled">
    <div class="list-item">List item 1</div>
    <div class="list-item">List item 2</div>
    <div class="list-item">List item 3</div>
</div>
{% endexample %}

Need only horizontal padding, then use `.list-spaced-x`.

{% example html %}
<div class="list list-spaced-x list-ruled">
    <div class="list-item">List item 1</div>
    <div class="list-item">List item 2</div>
    <div class="list-item">List item 3</div>
</div>
{% endexample %}

## Horizontal Lists
Place the items in the list in a horizontal, or inline, layout with `.list-horizontal`.

{% example html %}
<ul class="list list-horizontal">
    <li class="list-item">List item</li>
    <li class="list-item">List item</li>
    <li class="list-item">List item</li>
</ul>

<ul class="list list-horizontal list-bulleted">
    <li class="list-item">List item</li>
    <li class="list-item">List item</li>
    <li class="list-item">List item</li>
</ul>

<ul class="list list-horizontal list-ordered">
    <li class="list-item">List item</li>
    <li class="list-item">List item</li>
    <li class="list-item">List item</li>
</ul>

<ul class="list list-horizontal list-divided">
    <li class="list-item">List item</li>
    <li class="list-item">List item</li>
    <li class="list-item">List item</li>
</ul>

<ul class="list list-horizontal list-ruled">
    <li class="list-item">List item</li>
    <li class="list-item">List item</li>
    <li class="list-item">List item</li>
</ul>
{% endexample %}

## Active Items

Add `.active` to a `.list-item` to indicate the current active selection.

{% example html %}
<ul class="list">
    <li class="list-item active">Active list item</li>
    <li class="list-item">List item 2</li>
    <li class="list-item">List item 3</li>
</ul>
{% endexample %}

{% example html %}
<div class="list">
    <div class="list-item active">Active list item</div>
    <div class="list-item">List item 2</div>
    <div class="list-item">List item 3</div>
</div>
{% endexample %}

## Disabled Items

Add `.disabled` to a `<li>` or `.list-item` to make it out to _appear_ disabled. Note that some elements with `.disabled` will also require custom JavaScript to fully disable their click events (e.g., links).

{% callout warning %}
Disabling Anchors
{:.h5}

Please refer to the [Accessiblity notes about disabled anchors]({{ site.baseurl }}/get-started/accessibility/#disabled-anchors).
{% endcallout %}

{% example html %}
<ul class="list">
    <li class="disabled">Disabled list item</li>
    <li class="list-item">List item 2</li>
    <li class="list-item">List item 3</li>
</ul>
{% endexample %}

{% example html %}
<div class="list">
    <div class="list-item disabled">Disabled list item</div>
    <div class="list-item">List item 2</div>
    <div class="list-item">List item 3</div>
</div>
{% endexample %}

## Links and Buttons

Use `<a>`s or `<button>`s to create _actionable_ list items with hover, disabled, and active states by adding `.list-item-action`. We separate these pseudo-classes to ensure lists made of non-interactive elements (like `<li>`s or `<div>`s) don't provide a click or tap affordance.

Be sure to **not use the standard `.btn` classes here**.

{% example html %}
<div class="list">
    <a href="#" class="list-item list-item-action active">Active list item</a>
    <a href="#" class="list-item list-item-action">List item 2</a>
    <a href="#" class="list-item list-item-action disabled" tabindex="-1">Disabled list item</a>
</div>
{% endexample %}

With `<button>`s, you can also make use of the `disabled` attribute instead of the `.disabled` class. Sadly, `<a>`s don't support the disabled attribute.

{% example html %}
<div class="list">
    <button type="button" class="list-item list-item-action active">Active list item</button>
    <button type="button" class="list-item list-item-action">List item 2</button>
    <button type="button" class="list-item list-item-action" disabled>Disabled list item</button>
</div>
{% endexample %}

## Custom Content

### Inside Cards

Create visually grouped content by wrapping the `.list` with a `.card`.

{% example html %}
<div class="card" style="max-width: 25rem;">
    <div class="list list-spaced list-divided">
        <div class="list-item">List item</div>
        <div class="list-item">List item</div>
        <div class="list-item">List item</div>
    </div>
</div>
{% endexample %}

### Adding Badges

Add badges to any list item to show unread counts, activity, and more with the help of some [flexbox utility classes]({{ site.baseurl }}/utilities/flexbox/).

{% example html %}
<div class="card" style="max-width: 25rem;">
    <ul class="list list-spaced list-divided">
        <li class="list-item d-flex flex-between flex-items-center">
            Cras justo odio
            <span class="badge badge-info">7</span>
        </li>
        <li class="list-item d-flex flex-between flex-items-center">
            Dapibus ac facilisis in
            <span class="badge badge-info">12</span>
        </li>
        <li class="list-item d-flex flex-between flex-items-center">
            Morbi leo risus
            <span class="badge badge-info">3</span>
        </li>
    </ul>
</div>
{% endexample %}

### Complex Content

Add nearly any HTML within, even for linked lists like the one below, using [flexbox utilities]({{ sitebaseurl }}/utilities/flexbox/) for layout.

{% example html %}
<div class="card" style="max-width: 25rem;">
    <div class="list list-spaced list-divided">
        <a href="#" class="list-item list-item-action flex-column flex-start active">
            <div class="d-flex w-100 flex-between flex-items-center mb-0_5">
                <h5 class="mb-0">List item heading</h5>
                <small>3 days ago</small>
            </div>
            <p class="mb-0_25">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
            <small>Donec id elit non mi porta.</small>
        </a>
        <a href="#" class="list-item list-item-action flex-column flex-start">
            <div class="d-flex w-100 flex-between flex-items-center mb-0_5">
                <h5 class="mb-0">List item heading</h5>
                <small class="text-muted">3 days ago</small>
            </div>
            <p class="mb-0_25">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
            <small class="text-muted">Donec id elit non mi porta.</small>
        </a>
        <a href="#" class="list-item list-item-action flex-column flex-start">
            <div class="d-flex w-100 flex-between flex-items-center mb-0_5">
                <h5 class="mb-0">List item heading</h5>
                <small class="text-muted">3 days ago</small>
            </div>
            <p class="mb-0_25">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
            <small class="text-muted">Donec id elit non mi porta.</small>
        </a>
    </div>
</div>
{% endexample %}

## Color Variants

Use [color utility classes]({{ site.baseurl }}/utilities/color/) to style lists with color.

{% callout warning %}
Conveying Meaning to Assistive Technologies
{:.h5}

Please refer to the [Accessiblity notes about conveying meaning with color]({{ site.baseurl }}/get-started/accessibility/#conveying-meaning-with-color).
{% endcallout %}

### Rule Color

List items are defined with `border-color: inherit;`,  allowing for easy recoloring of the borders for divided and ruled lists by setting the `border-color` on the `.list` itself.  Setting a `border-color` on a `.list-item` will only update the border color for that specific list item.

{% example html %}
<ul class="list list-spaced list-ruled border-primary">
    <li class="list-item">List item</li>
    <li class="list-item">List item</li>
    <li class="list-item">List item</li>
</ul>
{% endexample %}

### Inverse List

{% example html %}
<ul class="list list-spaced list-divided bg-dark text-light border-secondary">
    <li class="list-item">List item</li>
    <li class="list-item">List item</li>
    <li class="list-item">List item</li>
</ul>
{% endexample %}

### Contextual Classes

Use contextual classes to style list items with a stateful background and color.

{% example html %}
<ul class="list list-spaced list-ruled">
    <li class="list-item">Default list item</li>
    <li class="list-item list-item-primary">Primary list item</li>
    <li class="list-item list-item-success">Success list item</li>
    <li class="list-item list-item-info">Inof list item</li>
    <li class="list-item list-item-warning">Warning list item</li>
    <li class="list-item list-item-danger">Danger list item</li>
    <li class="list-item list-item-light">Light list item</li>
    <li class="list-item list-item-dark">Dark list item</li>
</ul>
{% endexample %}

Contextual classes also work with `.list-item-action`. Note the addition of the hover styles here not present in the previous example.

{% example html %}
<div class="list list-spaced list-ruled">
    <a href="#" class="list-item list-item-action">Default list item</a>
    <a href="#" class="list-item list-item-action list-item-primary">Primary list item</a>
    <a href="#" class="list-item list-item-action list-item-success">Success list item</a>
    <a href="#" class="list-item list-item-action list-item-info">Info list item</a>
    <a href="#" class="list-item list-item-action list-item-warning">Warning list item</a>
    <a href="#" class="list-item list-item-action list-item-danger">Danger list item</a>
    <a href="#" class="list-item list-item-action list-item-list">Light list item</a>
    <a href="#" class="list-item list-item-action list-item-dark">Dark list item</a>
</div>
{% endexample %}

 Also supported is the `.active` state; apply it to indicate an active selection on a contextual list item.  This is available with or without the use of `.list-item-action`.

{% example html %}
<div class="list list-spaced list-ruled">
    <li class="list-item active">Default list item</li>
    <li class="list-item list-item-primary active">Primary list item</li>
    <li class="list-item list-item-success active">Success list item</li>
    <li class="list-item list-item-info active">Info list item</li>
    <li class="list-item list-item-warning active">Warning list item</li>
    <li class="list-item list-item-danger active">Danger list item</li>
    <li class="list-item list-item-light active">Light list item</li>
    <li class="list-item list-item-dark active">Dark list item</li>
</div>
{% endexample %}