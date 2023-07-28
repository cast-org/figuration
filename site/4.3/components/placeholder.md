---
layout: doc
title: Placeholder
description: Use loading placeholders for your components or pages to indicate something may still be loading.
group: components
toc: true
---

## About

Placeholders can be used to enhance the experience of your application. They are built only with HTML and CSS, meaning you don't need any JavaScript to create them. You will, however, need some custom JavaScript to toggle their visibility. Their appearance, color, and sizing can be easily customized with our utility classes.

## Example

In the example below, we take a typical card component and recreate it with placeholders applied to create a "loading card". Size and proportions are the same between the two.

<div class="cf-example d-flex flex-around">
<div class="card" style="width: 17rem;">
  <img class="img-fluid card-img-top" data-src="holder.js/100px150/" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

<div class="card" style="width: 17rem;" aria-hidden="true">
  <div class="card-img">
    <span class="card-img-top placeholder" style="width: 100%; height: 150px;"></span>
  </div>
  <div class="card-body">
    <div class="h5 card-title placeholder-glow">
      <span class="placeholder col-6"></span>
    </div>
    <p class="card-text placeholder-glow">
      <span class="placeholder col-7"></span>
      <span class="placeholder col-4"></span>
      <span class="placeholder col-4"></span>
      <span class="placeholder col-6"></span>
      <span class="placeholder col-8"></span>
    </p>
    <a class="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
  </div>
</div>
</div>

{% capture highlight %}
<div class="card">
  <img src="..." class="card-img-top" alt="...">

  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some  example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

<div class="card" aria-hidden="true">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title placeholder-glow">
      <span class="placeholder col-6"></span>
    </h5>
    <p class="card-text placeholder-glow">
      <span class="placeholder col-7"></span>
      <span class="placeholder col-4"></span>
      <span class="placeholder col-4"></span>
      <span class="placeholder col-6"></span>
      <span class="placeholder col-8"></span>
    </p>
    <a class="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
  </div>
</div>
{% endcapture %}
{% renderHighlight highlight, "html" %}

## How It Works

Create placeholders with the `.placeholder` class and a grid column class (e.g., `.col-6`) to set the `width`. They can replace the text inside an element or as be added as a modifier class to an existing component.

We apply additional styling to `.btn`s via `::before` to ensure the `height` is respected. You may extend this pattern for other situations as needed, or add a `&nbsp;` within the element to reflect the height when actual text is rendered in its place.

{% capture example %}
<p aria-hidden="true">
  <span class="placeholder col-6"></span>
</p>

<a class="btn btn-primary disabled placeholder col-4" aria-disabled="true"></a>
{% endcapture %}
{% renderExample example %}

{% capture callout %}
The use of `aria-hidden="true"` only indicates that the element should be hidden to screen readers. The *loading* behaviour of the placeholder depends on how authors will actually use the placeholder styles, how they plan to update things, etc. Some JavasSript code may be needed to *swap* the state of the placeholder and inform AT users of the update.
{% endcapture %}
{% renderCallout, callout, "info" %}

### Width

You can change the `width` through grid column classes, width utilities, or inline styles.

{% capture example %}
<span class="placeholder col-6"></span>
<span class="placeholder w-75"></span>
<span class="placeholder" style="width: 25%;"></span>
{% endcapture %}
{% renderExample example %}

### Color

By default, the `placeholder` uses `currentcolor`. This can be overriden with a custom color or utility class.

{% capture example %}
<span class="placeholder col-12"></span>

<span class="placeholder col-12 bg-primary"></span>
<span class="placeholder col-12 bg-secondary"></span>
<span class="placeholder col-12 bg-success"></span>
<span class="placeholder col-12 bg-danger"></span>
<span class="placeholder col-12 bg-warning"></span>
<span class="placeholder col-12 bg-info"></span>
<span class="placeholder col-12 bg-light"></span>
<span class="placeholder col-12 bg-dark"></span>
{% endcapture %}
{% renderExample example %}

### Sizing

The size of `.placeholder`s are based on the typographic style of the parent element. Customize them with sizing modifiers: `.placeholder-large`, `.placeholder-small`, or `.placeholder-xsmall`.

{% capture example %}
<span class="placeholder col-12 placeholder-large"></span>
<span class="placeholder col-12"></span>
<span class="placeholder col-12 placeholder-small"></span>
<span class="placeholder col-12 placeholder-xsmall"></span>
{% endcapture %}
{% renderExample example %}

### Animation

Animate placehodlers with `.placeholder-glow` or `.placeholder-wave` to better convey the perception of something being _actively_ loaded.

{% capture example %}
<p class="placeholder-glow">
  <span class="placeholder col-12"></span>
</p>

<p class="placeholder-wave">
  <span class="placeholder col-12"></span>
</p>
{% endcapture %}
{% renderExample example %}

## SASS Reference

### Variables

The available [Customization options]({{ site.path }}/{{ version.docs }}/get-started/options/), or Sass variables, that can be customized for the placeholder component.

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
        <td><code>$enable-placeholder</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the placeholder component classes.
        </td>
      </tr>
      <tr>
        <td><code>$enable-placeholder-sizes</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the placeholder size classes.
        </td>
      </tr>
      <tr>
        <td><code>$enable-placeholder-wave</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the placeholder wave animation class.
        </td>
      </tr>
      <tr>
        <td><code>$enable-placeholder-glow</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the placeholder glow animation class.
        </td>
      </tr>
      <tr>
        <td><code>$placeholder-opacity-max</code></td>
        <td>string</td>
        <td><code>.5</code></td>
        <td>
          Maximum opacity level to use with placeholder elements and animations.
        </td>
      </tr>
      <tr>
        <td><code>$placeholder-opacity-min</code></td>
        <td>string</td>
        <td><code>.2</code></td>
        <td>
          Minimum opacity level to use with placeholder animations.
        </td>
      </tr>
      <tr>
        <td><code>$placeholder-sizes</code></td>
        <td>map</td>
        <td>
<pre><code>("xsmall":   .5em,
"small":    .75em,
"large":    1.25em)</code></pre>
        </td>
        <td>
          Map of placeholder sizes to be generated.
        </td>
      </tr>
    </tbody>
  </table>
</div>

### Mixins

No mixins available.
