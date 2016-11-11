---
layout: docs
title: Display Property
group: utilities
---

Control an element's [`display` property](https://developer.mozilla.org/en-US/docs/Web/CSS/display).

Available utilities:
- `.display-block` sets `display: block;`
- `.display-flex` sets `display: flex;`
- `.display-inline` sets `display: inline;`
- `.display-inline-block` sets `display: inline-block;`
- `.display-table`sets `display: table;`
- `.display-table-cell`  sets `display: table-cell;`

These classes are also available in repsonsive variants, in the form of `.display{-breakpoint}-{value}`, such as `.display-lg-block`. Please refer to how our [breakpoint nomenclature]({{ site.baseurl }}/layout/overview/#breakpoint-nomenclature) is used.

While we also have a `.display-none` utility to make an element `display: none;`, using the [responsive utilities]({{ site.baseurl }}/layout/responsive-utilities/) would be a better option.

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

<div class="display-table bg-info">
    Table
    <div class="display-table">
        <div class="display-table-cell bg-danger">
            Table Cell
        </div>
        <div class="display-table-cell bg-warning">
            Table Cell
        </div>
    </div>
</div>
{% endexample %}
