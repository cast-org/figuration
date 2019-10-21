---
layout: doc
title: Shadows
description: Add or remove box shadows from elements with shadow utilities.
group: utilities
---

<div class="h3 cf-toc-header">Page Contents</div>

${toc}

## Examples

While shadows on components are disabled by default in Figuration and can be enabled via `$enable-shadows`, you can also quickly add or remove a shadow with our `box-shadow` utility classes. Includes support for `.shadow-0` and a few default *depths* and *insets*.

`.shadow-0` will remove all inset or outset shadows from an element.

{% capture example %}
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
{% endcapture %}
{% renderExample example %}

## SASS Reference

### Variables

The available [Customization options]({{ site.path }}/{{ version.docs }}/get-started/options/), or Sass variables, that can be customized for this grouping of utility classes.

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
        <td><code>$enable-utility-shadow</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the shadow utility classes.
        </td>
      </tr>
      <tr>
        <td><code>$shadows</code></td>
        <td>map</td>
        <td>
<pre><code>("0":  none,
"d1": 0 .125rem .1875rem rgba($black, .15),
"d2": 0 .125rem .25rem rgba($black, .15),
"d3": 0 .125rem .5rem rgba($black, .15),
"d4": 0 .125rem .75rem rgba($black, .15),
"d5": 0 .125rem 1rem rgba($black, .15),
"i1": inset 0 .125rem .1875rem rgba($black, .15),
"i2": inset 0 .125rem .25rem rgba($black, .15),
"i3": inset 0 .125rem .5rem rgba($black, .15),
"i4": inset 0 .125rem .75rem rgba($black, .15),
"i5": inset 0 .125rem 1rem rgba($black, .15))</code></pre>
        </td>
        <td>
          Map of shadow append names and rules to be generated.
        </td>
      </tr>
    </tbody>
  </table>
</div>

### Mixins

No mixins available.
