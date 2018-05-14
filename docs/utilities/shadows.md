---
layout: docs
title: Shadows
group: utilities
---

Add or remove `box-shadow`s from elements with shadow utilities.

Examples

While shadows on components are disabled by default in Figuration and can be enabled via `$enable-shadows`, you can also quickly add or remove a shadow with our `box-shadow` utility classes. Includes support for `.shadow-0` and a few default *depths* and *insets*.

`.shadow-0` will remove all inset or outset shadows from an element.

{% example html %}

<div class="shadow-0 radius p-1 mb-2">No shadow</div>
<div class="shadow-d1 radius p-1 mb-2">Shadow depth 1</div>
<div class="shadow-d2 radius p-1 mb-2">Shadow depth 2</div>
<div class="shadow-d3 radius p-1 mb-2">Shadow depth 3</div>
<div class="shadow-d4 radius p-1 mb-2">Shadow depth 4</div>
<div class="shadow-d5 radius p-1 mb-2">Shadow depth 5</div>
<div class="shadow-i1 radius p-1 mb-2">Shadow inset 1</div>
<div class="shadow-i2 radius p-1 mb-2">Shadow inset 2</div>
<div class="shadow-i3 radius p-1 mb-2">Shadow inset 3</div>
<div class="shadow-i4 radius p-1 mb-2">Shadow inset 4</div>
<div class="shadow-i5 radius p-1 mb-2">Shadow inset 5</div>

{% endexample %}
