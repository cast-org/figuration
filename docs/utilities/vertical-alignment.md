---
layout: docs
title: Vertical Alignment
group: utilities
---

Give some vertical alignment to elements by manipulating their [`vertical-align` property](https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align).

Note that only items with the following display properties can be vertically aligned:
- inline
- inline-block
- inline-table
- table-cell

The alignments consist of the items in the following list and are also available in responsive variants, in the form `.visible-{breakpoint}-{alignment}`. Please refer to how our [breakpoint nomenclature]({{ site.baseurl }}/layout/overview/#breakpoint-nomenclature) is used.
- `.valign-baseline`
- `.valign-top`
- `.valign-middle`
- `.valign-bottom`
- `.valign-text-top`
- `.valign-text-bottom`

Example with inline elements.

{% example html %}
<div class="bg-gray-50">
    <span class="bg-cyan-100 valign-baseline">baseline</span>
    -
    <span class="bg-cyan-100 valign-top">top</span>
    -
    <span class="bg-cyan-100 valign-middle">middle</span>
    -
    <span class="bg-cyan-100 valign-bottom">bottom</span>
    -
    <span class="bg-cyan-100 valign-text-top">text-top</span>
    -
    <span class="bg-cyan-100 valign-text-bottom">text-bottom</span>
</div>
{% endexample %}

Using table cells.

{% example html %}
<table class="table table-bordered" style="height: 100px;">
    <tbody>
        <td class="valign-baseline">baseline</td>
        <td class="valign-top">top</td>
        <td class="valign-middle">middle</td>
        <td class="valign-bottom">bottom</td>
        <td class="valign-text-top">text-top</td>
        <td class="valign-text-bottom">text-bottom</td>
    </tbody>
</table>
{% endexample %}

Slightly more complex uses, such as being able to align items in a row, become quick and easy.

{% example html %}
<div class="bg-gray-50 w-100 d-table">
    <div class="d-table-cell valign-bottom">
        <a href="#">View more in teacher's guide</a> |
        <a href="#">Common Core alignment</a>
    </div>
    <div class="d-table-cell valign-bottom text-right">
        <button type="button" class="btn btn-primary btn-lg">Continue</button>
    </div>
</div>
{% endexample %}