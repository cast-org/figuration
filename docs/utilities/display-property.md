---
layout: docs
title: Display Property
group: utilities
---

Control an element's [`display` property](https://developer.mozilla.org/en-US/docs/Web/CSS/display).

Available utilities:
- `.d-block` sets `display: block;`
- `.d-flex` sets `display: flex;`
- `.d-inline` sets `display: inline;`
- `.d-inline-block` sets `display: inline-block;`
- `.d-table`sets `display: table;`
- `.d-table-cell`  sets `display: table-cell;`

These classes are also available in responsive variants, in the form of `.d{-breakpoint}-{value}`, such as `.d-lg-block`. Please refer to how our [breakpoint nomenclature]({{ site.baseurl }}/layout/overview/#breakpoint-nomenclature) is used.

While we also have a `.d-none` utility to make an element `display: none;`, using the [responsive utilities]({{ site.baseurl }}/layout/responsive-utilities/) would be a better option.

{% example html %}
<div class="d-inline bg-success">Inline</div>
<div class="d-inline bg-success">Inline</div>

<span class="d-block bg-primary">Block</span>

<div class="d-inline-block bg-warning">
  <h3>inline-block</h3>
  Paint the fence!
</div>
<div class="d-inline-block bg-warning">
  <h3>inline-block</h3>
  Sand the floor!
</div>

<div class="d-table bg-info">
    Table
    <div class="d-table">
        <div class="d-table-cell bg-danger">
            Table Cell
        </div>
        <div class="d-table-cell bg-warning">
            Table Cell
        </div>
    </div>
</div>
{% endexample %}
