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

## Basic List

In the basic form, a `.list` removes the default `list-style` and left margin on list items, but nested lists will be indented.

The **use of the `.list-item` class required** for each `<li>` or simulated list item, for proper styling.

{% capture example %}
<ul class="list">
    <li class="list-item">List item 1</li>
    <li class="list-item">List item 2</li>
    <li class="list-item">List item 3</li>
</ul>
{% endcapture %}
{% include example.html content=example %}

You can also use `<div>` containers to create a list.

{% capture example %}
<div class="list">
    <div class="list-item">List item 1</div>
    <div class="list-item">List item 2</div>
    <div class="list-item">List item 3</div>
</div>
{% endcapture %}
{% include example.html content=example %}

## Styled Lists

Add some visual style to lists with a handful of modifier classes.

### Bulleted List

Add the `.list-bulleted` modifier to add a stylized bullet to each list item.

{% capture example %}
<ul class="list list-bulleted">
    <li class="list-item">Bulleted list item 1</li>
    <li class="list-item">Bulleted list item 2</li>
    <li class="list-item">Bulleted list item 3</li>
</ul>
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
<div class="list list-bulleted">
    <div class="list-item">Bulleted list item 1</div>
    <div class="list-item">Bulleted list item 2</div>
    <div class="list-item">Bulleted list item 3</div>
</div>
{% endcapture %}
{% include example.html content=example %}

### Ordered List

Add the `.list-ordered` modifier to create a numerically ordered list.

{% capture example %}
<ol class="list list-ordered">
    <li class="list-item">Ordered list item 1</li>
    <li class="list-item">Ordered list item 2</li>
    <li class="list-item">Ordered list item 3</li>
</ol>
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
<div class="list list-ordered">
    <div class="list-item">Ordered list item 1</div>
    <div class="list-item">Ordered list item 2</div>
    <div class="list-item">Ordered list item 3</div>
</div>
{% endcapture %}
{% include example.html content=example %}

### Nested Lists

When nesting lists, you will need to add the `.list` class and any modifiers to each nested list to restyle as needed.

{% capture example %}
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
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
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
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
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
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
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
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
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
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
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
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
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
{% endcapture %}
{% include example.html content=example %}

### Divided List

Place a rule between list items with the `.list-divided` modifier.

{% capture example %}
<ul class="list list-divided">
    <li class="list-item">Divided list item 1</li>
    <li class="list-item">Divided list item 2</li>
    <li class="list-item">Divided list item 3</li>
</ul>
{% endcapture %}
{% include example.html content=example %}

Divided lists also work with `<div>` containers.

{% capture example %}
<div class="list list-divided">
    <div class="list-item">Divided list item 1</div>
    <div class="list-item">Divided list item 2</div>
    <div class="list-item">Divided list item 3</div>
</div>
{% endcapture %}
{% include example.html content=example %}

### Ruled List

Place a rule at the top and bottom of a list, and between list items with the `.list-ruled` modifier.

{% capture example %}
<ul class="list list-ruled">
    <li class="list-item">Ruled list item 1</li>
    <li class="list-item">Ruled list item 2</li>
    <li class="list-item">Ruled list item 3</li>
</ul>
{% endcapture %}
{% include example.html content=example %}

Similar to divided lists, ruled lists also work with `<div>` containers.

{% capture example %}
<div class="list list-ruled">
    <div class="list-item">Ruled list item 1</div>
    <div class="list-item">Ruled list item 2</div>
    <div class="list-item">Ruled list item 3</div>
</div>
{% endcapture %}
{% include example.html content=example %}

### List Group

Visually group list content by adding a border all around with the `.list-group` modifier.

{% capture example %}
<ul class="list list-group">
    <li class="list-item">List item</li>
    <li class="list-item">List item</li>
    <li class="list-item">List item</li>
</ul>
{% endcapture %}
{% include example.html content=example %}

Similar to the above examples, this will also work with `<div>` containers.

{% capture example %}
<div class="list list-group">
    <div class="list-item">List item</div>
    <div class="list-item">List item</div>
    <div class="list-item">List item</div>
</div>
{% endcapture %}
{% include example.html content=example %}

### Spaced

Easily add some spacing to lists. Adding `.list-spaced` will provide padding on all sides of each list item.

{% capture example %}
<div class="list list-spaced list-ruled">
    <div class="list-item">List item 1</div>
    <div class="list-item">List item 2</div>
    <div class="list-item">List item 3</div>
</div>
{% endcapture %}
{% include example.html content=example %}

Add only vertical padding with `.list-spaced-y`.

{% capture example %}
<div class="list list-spaced-y list-ruled">
    <div class="list-item">List item 1</div>
    <div class="list-item">List item 2</div>
    <div class="list-item">List item 3</div>
</div>
{% endcapture %}
{% include example.html content=example %}

Need only horizontal padding, then use `.list-spaced-x`.

{% capture example %}
<div class="list list-spaced-x list-ruled">
    <div class="list-item">List item 1</div>
    <div class="list-item">List item 2</div>
    <div class="list-item">List item 3</div>
</div>
{% endcapture %}
{% include example.html content=example %}

### Horizontal Lists
Place the items in the list in a horizontal layout with `.list-horizontal`.

{% capture example %}
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

<ul class="list list-horizontal list-group">
    <li class="list-item">List item</li>
    <li class="list-item">List item</li>
    <li class="list-item">List item</li>
</ul>
{% endcapture %}
{% include example.html content=example %}

## Inline List

Add the `.flex-wrap` utility class onto a horizontal list to wrap to the next row as needed.

{% capture example %}
<ul class="list list-horizontal flex-wrap">
    <li class="list-item">Inline list item</li>
    <li class="list-item">Inline list item</li>
    <li class="list-item">Inline list item</li>
    <li class="list-item">Inline list item</li>
    <li class="list-item">Inline list item</li>
    <li class="list-item">Inline list item</li>
    <li class="list-item">Inline list item</li>
    <li class="list-item">Inline list item</li>
    <li class="list-item">Inline list item</li>
    <li class="list-item">Inline list item</li>
</ul>
{% endcapture %}
{% include example.html content=example %}

## List Content

### Active Items

Add `.active` to a `.list-item` to indicate the current active selection.

{% capture example %}
<ul class="list">
    <li class="list-item active">Active list item</li>
    <li class="list-item">List item 2</li>
    <li class="list-item">List item 3</li>
</ul>
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
<div class="list">
    <div class="list-item active">Active list item</div>
    <div class="list-item">List item 2</div>
    <div class="list-item">List item 3</div>
</div>
{% endcapture %}
{% include example.html content=example %}

### Disabled Items

Add `.disabled` to a `<li>` or `.list-item` to make it out to _appear_ disabled. Note that some elements with `.disabled` will also require custom JavaScript to fully disable their click events (e.g., links).

{% include callout-warning-disabling-anchors.md %}

{% capture example %}
<ul class="list">
    <li class="disabled">Disabled list item</li>
    <li class="list-item">List item 2</li>
    <li class="list-item">List item 3</li>
</ul>
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
<div class="list">
    <div class="list-item disabled">Disabled list item</div>
    <div class="list-item">List item 2</div>
    <div class="list-item">List item 3</div>
</div>
{% endcapture %}
{% include example.html content=example %}

### Links and Buttons

Use `<a>`s or `<button>`s to create _actionable_ list items with hover, disabled, and active states by adding `.list-item-action`. We separate these pseudo-classes to ensure lists made of non-interactive elements (like `<li>`s or `<div>`s) don't provide a click or tap affordance.

Be sure to **not use the standard `.btn` classes here**.

{% capture example %}
<div class="list">
    <a href="#" class="list-item list-item-action active">Active list item</a>
    <a href="#" class="list-item list-item-action">List item 2</a>
    <a href="#" class="list-item list-item-action disabled" tabindex="-1">Disabled list item</a>
</div>
{% endcapture %}
{% include example.html content=example %}

With `<button>`s, you can also make use of the `disabled` attribute instead of the `.disabled` class. Sadly, `<a>`s don't support the disabled attribute.

{% capture example %}
<div class="list">
    <button type="button" class="list-item list-item-action active">Active list item</button>
    <button type="button" class="list-item list-item-action">List item 2</button>
    <button type="button" class="list-item list-item-action" disabled>Disabled list item</button>
</div>
{% endcapture %}
{% include example.html content=example %}

### Adding Badges

Add badges to any list item to show unread counts, activity, and more with the help of some [flexbox utility classes]({{ site.baseurl }}/utilities/flexbox/).

{% capture example %}
<ul class="list list-spaced list-group" style="max-width: 25rem;">
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
{% endcapture %}
{% include example.html content=example %}

### Custom Content

Add nearly any HTML within, even for linked lists like the one below, using [flexbox utilities]({{ sitebaseurl }}/utilities/flexbox/) for layout.

{% capture example %}
<div class="list list-spaced list-group" style="max-width: 25rem;">
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
{% endcapture %}
{% include example.html content=example %}

## Color Variants

Use [color utility classes]({{ site.baseurl }}/utilities/color/) to style lists with color.

{% include callout-warning-color-assistive-technologies.md %}

### Rule Color

Divided and Ruled list items are defined with `border-{side}-color: inherit;`, allowing for easy recoloring of the borders by setting the `border-color` on the `.list` itself.  Setting a `border-color` on a `.list-item` will only update the border color for that specific list item.

{% capture example %}
<ul class="list list-spaced list-ruled border-primary">
    <li class="list-item">List item</li>
    <li class="list-item">List item</li>
    <li class="list-item">List item</li>
</ul>
{% endcapture %}
{% include example.html content=example %}

### Inverse List

Set a background color on a list. In some cases you may want to use additional [color utility classes]({{ site.baseurl }}/utilities/color/) to adjust text or border color.

{% capture example %}
<ul class="list list-spaced list-divided bg-dark text-light border-secondary">
    <li class="list-item">List item</li>
    <li class="list-item">List item</li>
    <li class="list-item">List item</li>
</ul>
{% endcapture %}
{% include example.html content=example %}

### Contextual Classes

Use contextual classes to style list items with a stateful background and color.

{% capture example %}
<ul class="list list-spaced list-ruled">
    <li class="list-item">Default list item</li>
    <li class="list-item list-item-primary">Primary list item</li>
    <li class="list-item list-item-secondary">Secondary list item</li>
    <li class="list-item list-item-success">Success list item</li>
    <li class="list-item list-item-info">Inof list item</li>
    <li class="list-item list-item-warning">Warning list item</li>
    <li class="list-item list-item-danger">Danger list item</li>
    <li class="list-item list-item-light">Light list item</li>
    <li class="list-item list-item-dark">Dark list item</li>
</ul>
{% endcapture %}
{% include example.html content=example %}

Contextual classes also work with `.list-item-action`. Note the addition of the hover styles here not present in the previous example.

{% capture example %}
<div class="list list-spaced list-ruled">
    <a href="#" class="list-item list-item-action">Default list item</a>
    <a href="#" class="list-item list-item-action list-item-primary">Primary list item</a>
    <a href="#" class="list-item list-item-action list-item-secondary">Secondary list item</a>
    <a href="#" class="list-item list-item-action list-item-success">Success list item</a>
    <a href="#" class="list-item list-item-action list-item-info">Info list item</a>
    <a href="#" class="list-item list-item-action list-item-warning">Warning list item</a>
    <a href="#" class="list-item list-item-action list-item-danger">Danger list item</a>
    <a href="#" class="list-item list-item-action list-item-list">Light list item</a>
    <a href="#" class="list-item list-item-action list-item-dark">Dark list item</a>
</div>
{% endcapture %}
{% include example.html content=example %}

 Also supported is the `.active` state; apply it to indicate an active selection on a contextual list item.  This is available with or without the use of `.list-item-action`.

{% capture example %}
<ul class="list list-spaced list-ruled">
    <li class="list-item active">Default list item</li>
    <li class="list-item list-item-primary active">Primary list item</li>
    <li class="list-item list-item-success active">Success list item</li>
    <li class="list-item list-item-info active">Info list item</li>
    <li class="list-item list-item-warning active">Warning list item</li>
    <li class="list-item list-item-danger active">Danger list item</li>
    <li class="list-item list-item-light active">Light list item</li>
    <li class="list-item list-item-dark active">Dark list item</li>
</ul>
{% endcapture %}
{% include example.html content=example %}

## SASS Reference

### Variables

The available [Customization options]({{ site.baseurl }}/get-started/options/), or Sass variables, that can be customized for list component.

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
                <td><code>$enable-list</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the list component classes.
                    Smaller segements of the list component classes can be disabled with the following <code>$enable-*</code> variables.
                </td>
            </tr>
            <tr>
                <td><code>$enable-list-bulleted</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of styled bulleted lists.
                </td>
            </tr>
            <tr>
                <td><code>$enable-list-ordered</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of styled ordered lists.
                </td>
            </tr>
            <tr>
                <td><code>$enable-list-divided</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of styled divided lists.
                </td>
            </tr>
            <tr>
                <td><code>$enable-list-ruled</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of styled ruled lists.
                </td>
            </tr>
            <tr>
                <td><code>$enable-list-group</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of list groups.
                </td>
            </tr>
            <tr>
                <td><code>$enable-list-spaced</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of spaced lists.
                </td>
            </tr>
            <tr>
                <td><code>$enable-list-spaced-y</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of vertically spaced lists.
                </td>
            </tr>
            <tr>
                <td><code>$enable-list-spaced-x</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of horizontally spaced lists.
                </td>
            </tr>
            <tr>
                <td><code>$enable-list-horizontal</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of styled horizontal lists.
                </td>
            </tr>
            <tr>
                <td><code>$enable-list-item-action</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of list item actions.
                </td>
            </tr>
            <tr>
                <td><code>$enable-list-item-colors</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of list item color variants.
                </td>
            </tr>
            <tr>
                <td><code>$list-margin-left</code></td>
                <td>string</td>
                <td><code>1.25rem</code></td>
                <td>
                    Width of margin to indent lists.
                </td>
            </tr>
            <tr>
                <td><code>$list-margin-bottom</code></td>
                <td>string</td>
                <td><code>1rem</code></td>
                <td>
                    Spacing below lists.
                </td>
            </tr>
            <tr>
                <td><code>$list-item-bg</code></td>
                <td>string</td>
                <td><code>transparent</code></td>
                <td>
                    Background color for list items.
                </td>
            </tr>
            <tr>
                <td><code>$list-item-disabled-bg</code></td>
                <td>string</td>
                <td><code>$list-item-bg</code></td>
                <td>
                    Background color for disabled list items.
                </td>
            </tr>
            <tr>
                <td><code>$list-item-disabled-color</code></td>
                <td>string</td>
                <td><code>$component-disabled-color</code></td>
                <td>
                    Text color for disabled list items.
                </td>
            </tr>
            <tr>
                <td><code>$list-item-active-bg</code></td>
                <td>string</td>
                <td><code>$component-active-bg</code></td>
                <td>
                    Background color for active list items.
                </td>
            </tr>
            <tr>
                <td><code>$list-item-active-color</code></td>
                <td>string</td>
                <td><code>$component-active-color</code></td>
                <td>
                    Text color for active list items.
                </td>
            </tr>
            <tr>
                <td><code>$list-item-active-border</code></td>
                <td>string</td>
                <td><code>$component-active-border-color</code></td>
                <td>
                    Border color for active list items.
                </td>
            </tr>
            <tr>
                <td><code>$list-item-action-color</code></td>
                <td>string</td>
                <td><code>$component-action-color</code></td>
                <td>
                    Text color for list item actions.
                </td>
            </tr>
            <tr>
                <td><code>$list-item-hover-color</code></td>
                <td>string</td>
                <td><code>$list-item-hover-color</code></td>
                <td>
                    Text color for list item actions when hovered or focused.
                </td>
            </tr>
            <tr>
                <td><code>$list-item-hover-bg</code></td>
                <td>string</td>
                <td><code>$component-hover-bg</code></td>
                <td>
                    Background color for list item actions when hovered or focused.
                </td>
            </tr>
            <tr>
                <td><code>$list-border-width</code></td>
                <td>string</td>
                <td><code>$border-width</code></td>
                <td>
                    Border width for list items with borders.
                </td>
            </tr>
            <tr>
                <td><code>$list-border-color</code></td>
                <td>string</td>
                <td><code>$component-border-color</code></td>
                <td>
                    Border color for list items with borders.
                </td>
            </tr>
            <tr>
                <td><code>$list-group-border-radius</code></td>
                <td>string</td>
                <td><code>$border-radius</code></td>
                <td>
                    Border radisu for list groups.
                </td>
            </tr>
            <tr>
                <td><code>$list-bulleted-content</code></td>
                <td>string</td>
                <td><code>"\25cf\00a0"</code></td>
                <td>
                    Visual content to use for bullets.  Default content is a black circle and a space.
                </td>
            </tr>
            <tr>
                <td><code>$list-ordered-delimeter</code></td>
                <td>string</td>
                <td><code>"\25cf\00a0"</code></td>
                <td>
                    Visual content to use as a delimeter after the order value.  Default content is a space.
                </td>
            </tr>
            <tr>
                <td><code>$list-horizontal-padding</code></td>
                <td>string</td>
                <td><code>.5em</code></td>
                <td>
                    Horizontal padding to use between list items in a horizontal list.
                </td>
            </tr>
            <tr>
                <td><code>$list-spaced-item-padding-y</code></td>
                <td>string</td>
                <td><code>.75em</code></td>
                <td>
                    Vertical padding for list items in a spaced list.
                </td>
            </tr>
            <tr>
                <td><code>$list-spaced-item-padding-x</code></td>
                <td>string</td>
                <td><code>1em</code></td>
                <td>
                    Horizontal padding for list items in a spaced list.
                </td>
            </tr>
            <tr>
                <td><code>$list-themes</code></td>
                <td>map</td>
                <td><code>()</code></td>
                <td>
                    Map of color schemes for lists.
                </td>
            </tr>
            <tr>
                <td><code>$list-colors</code></td>
                <td>list</td>
                <td><code>$base-colors</code></td>
                <td>
                    Colors to mix and merge into <code>$list-themes</code>
                </td>
            </tr>
            <tr>
                <td><code>$list-levels</code></td>
                <td>map</td>
                <td><code>$level-context</code></td>
                <td>
                    Levels to mix list colors with.
                </td>
            </tr>
        </tbody>
    </table>
</div>

### Mixins

Here are the mixins related to lists that we use to help generate our CSS.  You can also uses these mixins to generate your own custom components or utilities.

#### list-unstyled
{:.no_toc}

List with no left padding or list item markers.

{% highlight sass %}
@include list-unstyled();
{% endhighlight %}

#### list-item-variant
{:.no_toc}

Create a contextual color variant for a list item.

{% highlight sass %}
@include list-item-variant($state, $bg, $color, $border, $hover-bg, $hover-color, $hover-border);
{% endhighlight %}

<div class="table-scroll">
    <table class="table table-bordered table-striped">
        <thead>
            <tr>
                <th style="width: 100px;">Argument</th>
                <th style="width: 50px;">Type</th>
                <th style="width: 50px;">Default</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><code>$state</code></td>
                <td>string</td>
                <td><code>''</code></td>
                <td>
                    The value appended to generate the class <code>.list-item-#{$state}</code>.
                </td>
            </tr>
            <tr>
                <td><code>$bg</code></td>
                <td>string</td>
                <td>none</td>
                <td>
                    Background color for a list item.
                </td>
            </tr>
            <tr>
                <td><code>$color</code></td>
                <td>string</td>
                <td>none</td>
                <td>
                    Text color for a list item.
                </td>
            </tr>
            <tr>
                <td><code>$border</code></td>
                <td>string</td>
                <td>none</td>
                <td>
                    Border color for a list item.
                </td>
            </tr>
            <tr>
                <td><code>$hover-bg</code></td>
                <td>string</td>
                <td>none</td>
                <td>
                    Background color for a list item in active, hover, and focus states.
                </td>
            </tr>
            <tr>
                <td><code>$hover-color</code></td>
                <td>string</td>
                <td>none</td>
                <td>
                    Text color for a list item in active, hover, and focus states..
                </td>
            </tr>
            <tr>
                <td><code>$hover-border</code></td>
                <td>string</td>
                <td>none</td>
                <td>
                    Border color for a list item in active, hover, and focus states..
                </td>
            </tr>
        </tbody>
    </table>
</div>
