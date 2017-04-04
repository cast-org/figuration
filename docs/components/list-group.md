---
layout: docs
title: List Group
group: components
---

List groups are a flexible and powerful component for displaying a series of content. List group items can be modified and extended to support just about any content within. They can also be used as navigation with the right modifier class.

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Basic Example
The most basic list group is an unordered list with list items, and the proper classes. Build upon it with the options that follow, or with your own CSS as needed.

{% example html %}
<ul class="list-group">
  <li class="list-group-item">Cras justo odio</li>
  <li class="list-group-item">Dapibus ac facilisis in</li>
  <li class="list-group-item">Morbi leo risus</li>
  <li class="list-group-item">Porta ac consectetur ac</li>
  <li class="list-group-item">Vestibulum at eros</li>
</ul>
{% endexample %}

## Active Items

Add `.active` to a `.list-group-item` to indicate the current active selection.

{% example html %}
<ul class="list-group">
  <li class="list-group-item active">
    Cras justo odio
  </li>
  <li class="list-group-item">Dapibus ac facilisis in</li>
  <li class="list-group-item">Morbi leo risus</li>
  <li class="list-group-item">Porta ac consectetur ac</li>
  <li class="list-group-item">Vestibulum at eros</li>
</ul>
{% endexample %}

## Disabled Items

Add `.disabled` to a `.list-group-item` to make it out to _appear_ disabled. Note that some elements with `.disabled` will also require custom JavaScript to fully disable their click events (e.g., links).

{% callout warning %}
Disabling Anchors
{:.h5}

Please refer to the [Accessiblity notes about disabled anchors]({{ site.baseurl }}/get-started/accessibility/#disabled-anchors).
{% endcallout %}

{% example html %}
<ul class="list-group">
  <li class="list-group-item disabled">
    Cras justo odio
  </li>
  <li class="list-group-item">Dapibus ac facilisis in</li>
  <li class="list-group-item">Morbi leo risus</li>
  <li class="list-group-item">Porta ac consectetur ac</li>
  <li class="list-group-item">Vestibulum at eros</li>
</ul>
{% endexample %}

## Links and Buttons

Use `<a>`s or `<button>`s to create _actionable_ list group items with hover, disabled, and active states by adding `.list-group-item-action`. We separate these pseudo-classes to ensure list groups made of non-interactive elements (like `<li>`s or `<div>`s) don't provide a click or tap affordance.

Be sure to **not use the standard `.btn` classes here**.

{% example html %}
<div class="list-group">
  <a href="#" class="list-group-item list-group-item-action active">
    Cras justo odio
  </a>
  <a href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
  <a href="#" class="list-group-item list-group-item-action">Morbi leo risus</a>
  <a href="#" class="list-group-item list-group-item-action">Porta ac consectetur ac</a>
  <a href="#" class="list-group-item list-group-item-action disabled" tabindex="-1">Vestibulum at eros</a>
</div>
{% endexample %}

With `<button>`s, you can also make use of the `disabled` attribute instead of the `.disabled` class. Sadly, `<a>`s don't support the disabled attribute.

{% example html %}
<div class="list-group">
  <button type="button" class="list-group-item list-group-item-action active">
    Cras justo odio
  </button>
  <button type="button" class="list-group-item list-group-item-action">Dapibus ac facilisis in</button>
  <button type="button" class="list-group-item list-group-item-action">Morbi leo risus</button>
  <button type="button" class="list-group-item list-group-item-action">Porta ac consectetur ac</button>
  <button type="button" class="list-group-item list-group-item-action disabled">Vestibulum at eros</button>
</div>
{% endexample %}

## Contextual Classes

Use contextual classes to style list items with a stateful background and color.

{% callout warning %}
Conveying Meaning to Assistive Technologies
{:.h5}

Please refer to the [Accessiblity notes about conveying meaning with color]({{ site.baseurl }}/get-started/accessibility/#conveying-meaning-with-color).
{% endcallout %}

{% example html %}
<ul class="list-group">
  <li class="list-group-item">Cras justo odio</li>
  <li class="list-group-item list-group-item-success">Dapibus ac facilisis in</li>
  <li class="list-group-item list-group-item-info">Cras sit amet nibh libero</li>
  <li class="list-group-item list-group-item-warning">Porta ac consectetur ac</li>
  <li class="list-group-item list-group-item-danger">Vestibulum at eros</li>
</ul>
{% endexample %}

Contextual classes also work with `.list-group-item-action`. Note the addition of the hover styles here not present in the previous example. Also supported is the `.active` state; apply it to indicate an active selection on a contextual list group item.

{% example html %}
<div class="list-group">
  <a href="#" class="list-group-item list-group-item-action">Cras justo odio</a>
  <a href="#" class="list-group-item list-group-item-action list-group-item-success">Dapibus ac facilisis in</a>
  <a href="#" class="list-group-item list-group-item-action list-group-item-info">Cras sit amet nibh libero</a>
  <a href="#" class="list-group-item list-group-item-action list-group-item-warning">Porta ac consectetur ac</a>
  <a href="#" class="list-group-item list-group-item-action list-group-item-danger">Vestibulum at eros</a>
</div>
{% endexample %}

## Adding Badges

Add badges to any list group item to show unread counts, activity, and more with the help of some [flexbox utility classes]({{ site.baseurl }}/utilities/flexbox/).

{% example html %}
<ul class="list-group">
  <li class="list-group-item d-flex flex-between flex-items-center">
    Cras justo odio
    <span class="badge badge-pill">14</span>
  </li>
  <li class="list-group-item d-flex flex-between flex-items-center">
    Dapibus ac facilisis in
    <span class="badge badge-pill">2</span>
  </li>
  <li class="list-group-item d-flex flex-between flex-items-center">
    Morbi leo risus
    <span class="badge badge-pill">1</span>
  </li>
</ul>
{% endexample %}

## Custom Content

Add nearly any HTML within, even for linked list groups like the one below, using [flexbox utilities]({{ sitebaseurl }}/utilities/flexbox/) for layout.

{% example html %}
<div class="list-group">
  <a href="#" class="list-group-item list-group-item-action flex-column flex-start active">
    <div class="d-flex w-100 flex-between">
      <h5>List group item heading</h5>
      <small>3 days ago</small>
    </div>
    <p class="mb-0_25">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
    <small>Donec id elit non mi porta.</small>
  </a>
  <a href="#" class="list-group-item list-group-item-action flex-column flex-start">
    <div class="d-flex w-100 flex-between">
      <h5>List group item heading</h5>
      <small class="text-muted">3 days ago</small>
    </div>
    <p class="mb-0_25">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
    <small class="text-muted">Donec id elit non mi porta.</small>
  </a>
  <a href="#" class="list-group-item list-group-item-action flex-column flex-start">
    <div class="d-flex w-100 flex-between">
      <h5>List group item heading</h5>
      <small class="text-muted">3 days ago</small>
    </div>
    <p class="mb-0_25">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
    <small class="text-muted">Donec id elit non mi porta.</small>
  </a>
</div>
{% endexample %}
