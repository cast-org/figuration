---
layout: docs
title: Icons
group: utilities
---

A few simple icons to indicate state or function.

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Caret Icon

Use carets to indicate some meaning of functionality or direction. Note that the default caret will reverse automatically in [dropup menus]({{ site.baseurl }}/widgets/dropdown/).

If inside of an element marked as `.open` the caret will reverse direction accordingly to indicate state.

{% example html %}
<span class="caret" aria-hidden="true"></span>
<span class="open">
  <span class="caret" aria-hidden="true"></span>
</span>
&mdash;
<span class="dropup">
  <span class="caret" aria-hidden="true"></span>
</span>
<span class="dropup open">
  <span class="caret" aria-hidden="true"></span>
</span>
{% endexample %}

## Close Icon

Use a generic close icon for dismissing content like modals and alerts. **Be sure to include text for screen readers**, as we've done with `aria-label`.

{% example html %}
<button type="button" class="close" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>

<a href="#" role="button" class="close" aria-label="Close">
    <span aria-hidden="true">&times;</span>
</a>
{% endexample %}
