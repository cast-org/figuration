---
layout: doc
title: Orientation
description: Control the orientation of elements.
group: utilities
toc: true
---

## Rotate

Rotate an element around its center point.

<div class="cf-example d-flex flex-around">
    <div>{% include "./icons/figuration-solid.svg", width: "24", height: "24" %}</div>
    <div class="rotate-45">{% include "./icons/figuration-solid.svg", width: "24", height: "24" %}</div>
    <div class="rotate-90">{% include "./icons/figuration-solid.svg", width: "24", height: "24" %}</div>
    <div class="rotate-135">{% include "./icons/figuration-solid.svg", width: "24", height: "24" %}</div>
    <div class="rotate-180">{% include "./icons/figuration-solid.svg", width: "24", height: "24" %}</div>
    <div class="rotate-225">{% include "./icons/figuration-solid.svg", width: "24", height: "24" %}</div>
    <div class="rotate-270">{% include "./icons/figuration-solid.svg", width: "24", height: "24" %}</div>
    <div class="rotate-315">{% include "./icons/figuration-solid.svg", width: "24", height: "24" %}</div>
</div>

{% capture highlight %}
<!-- `.rotate-0` does not exist, as this is the default rotation -->
<div class="rotate-45">...</div>
<div class="rotate-90">...</div>
<div class="rotate-135">...</div>
<div class="rotate-180">...</div>
<div class="rotate-225">...</div>
<div class="rotate-270">...</div>
<div class="rotate-315">...</div>
{% endcapture %}
{% renderHighlight highlight, "html" %}

## Flip

Flip elements along their horizontal or vertical axis;

{% capture example %}
<div class="flip-horizontal">Flip DOM element horizontally</div>
<div class="flip-vertical">Flip DOM element vertically</div>
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
        <td><code>$enable-utility-orientation</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the orientation utility classes.
        </td>
      </tr>
      <tr>
        <td><code>$enable-utility-orientation-rotate</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the rotate utility classes.
        </td>
      </tr>
      <tr>
        <td><code>$enable-utility-orientation-flip</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the flip utility classes.
        </td>
      </tr>
      <tr>
        <td><code>$utility-rotate</code></td>
        <td>map</td>
        <td>
<pre><code>("45": rotate(45deg),
"90": rotate(90deg),
"135": rotate(135deg),
"180": rotate(180deg),
"225": rotate(45deg),
"270": rotate(270deg),
"315": rotate(315deg))</code></pre>
        </td>
        <td>
          Map of rotate names and rules to be generated.
        </td>
      </tr>
    </tbody>
  </table>
</div>

### Mixins

No mixins available.
