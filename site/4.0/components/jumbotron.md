---
layout: doc
title: Jumbotron
description: A lightweight, flexible component that can optionally extend the entire viewport to showcase key marketing messages on your site.
group: components
---

## Example

{% capture example %}
<div class="jumbotron">
  <h1>Hello, world!</h1>
  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr class="my-2">
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <p class="lead">
    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
  </p>
</div>
{% endcapture %}
{% renderExample example %}

To make the jumbotron full width, and without rounded corners, add the `.jumbotron-fluid` modifier class and add a `.container` or `.container-fluid` within.

{% capture example %}
<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1>Fluid jumbotron</h1>
    <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
  </div>
</div>
{% endcapture %}
{% renderExample example %}

## SASS Reference

### Variables

The available [Customization options]({{ site.path }}/{{ version.docs }}/get-started/options/), or Sass variables, that can be customized for jumbotrons.

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
        <td><code>$enable-jumbotron</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the jumbotron classes.
          Smaller segements of the jumbotron classes can be disabled with the following <code>$enable-*</code> variables.
        </td>
      </tr>
      <tr>
        <td><code>$enable-jumbotron-fluid</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of fluid width jumbotron class.
        </td>
      </tr>
      <tr>
        <td><code>$jumbotron-padding-y</code></td>
        <td>string</td>
        <td><code>3rem</code></td>
        <td>
          Vertical padding for jumbotron.
        </td>
      </tr>
      <tr>
        <td><code>$jumbotron-padding-x</code></td>
        <td>string</td>
        <td><code>1.5rem</code></td>
        <td>
          Horizontal padding for jumbotron.
        </td>
      </tr>
      <tr>
        <td><code>$jumbotron-breakpoint</code></td>
        <td>breakpoint</td>
        <td><code>sm</code></td>
        <td>
          At which breakpoint to alter the jumbotron padding.
        </td>
      </tr>
      <tr>
        <td><code>$jumbotron-padding-xs-y</code></td>
        <td>string</td>
        <td><code>1.5rem</code></td>
        <td>
          Vertical padding for jumbotron below the specified breakpoint.
        </td>
      </tr>
      <tr>
        <td><code>$jumbotron-padding-xs-x</code></td>
        <td>string</td>
        <td><code>.75rem</code></td>
        <td>
          Horizontal padding for jumbotron below the specified breakpoint.
        </td>
      </tr>
      <tr>
        <td><code>$jumbotron-bg</code></td>
        <td>string</td>
        <td><code>$uibase-50</code></td>
        <td>
          Background color for jumbotron.
        </td>
      </tr>
      <tr>
        <td><code>$jumbotron-border-radius</code></td>
        <td>string</td>
        <td><code>.3125rem</code></td>
        <td>
          Border radius for jumbotron.
        </td>
      </tr>
    </tbody>
  </table>
</div>

### Mixins

No mixins available.
