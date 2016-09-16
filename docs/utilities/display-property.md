---
layout: docs
title: Display Property
group: utilities
---

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
