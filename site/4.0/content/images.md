---
layout: doc
title: Images
description: Allow images to become responsively resized, or add a bit of style to them.
group: content
---

<div class="h3 cf-toc-header">Page Contents</div>

${toc}

## Responsive Images

Images can be made to scale with their container width by using `.img-fluid`. This applies `max-width: 100%;` and `height: auto;` the image, allowing the aspect ratio to be maintained.

<div class="cf-example">
  <img data-src="holder.js/100px250" class="img-fluid" alt="Generic responsive image">
</div>

{% capture highlight %}
<img src="..." class="img-fluid" alt="Fluidly sized image">
{% endcapture %}
{% renderHighlight highlight, "html" %}

## Image Thumbnail

Use `.img-thumbnail` to give an image a bordered appearance.

You might also want to check the [border utilites]({{ site.path }}/{{ version.docs }}/utilities/borders) for additional options.

<div class="cf-example">
  <img data-src="holder.js/200x200" class="img-thumbnail" alt="A generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera">
</div>

{% capture highlight %}
<img src="..." alt="..." class="img-thumbnail">
{% endcapture %}
{% renderHighlight highlight, "html" %}

## Aligning Images

Align images with the [helper float classes]({{ site.path }}/{{ version.docs }}/utilities/floating/) or [text alignment classes]({{ site.path }}/{{ version.docs }}/utilities/typography/#text-alignment). `block`-level images can be centered using [the `.mx-auto` margin utility class]({{ site.path }}/{{ version.docs }}/utilities/spacing/#horizontal-centering).

<div class="cf-example clearfix">
  <img data-src="holder.js/200x200" class="radius float-start" alt="A generic square placeholder image with rounded corners">
  <img data-src="holder.js/200x200" class="radius float-end" alt="A generic square placeholder image with rounded corners">
</div>

{% capture highlight %}
<img src="..." class="radius float-start" alt="...">
<img src="..." class="radius float-end" alt="...">
{% endcapture %}
{% renderHighlight highlight, "html" %}

<div class="cf-example clearfix">
  <img data-src="holder.js/200x200" class="radius mx-auto d-block" alt="A generic square placeholder image with rounded corners">
</div>

{% capture highlight %}
<img src="..." class="radius mx-auto d-block" alt="...">
{% endcapture %}
{% renderHighlight highlight, "html" %}

<div class="cf-example clearfix">
  <div class="text-center">
    <img data-src="holder.js/200x200" class="radius" alt="A generic square placeholder image with rounded corners">
  </div>
</div>

{% capture highlight %}
<div class="text-center">
  <img src="..." class="radius" alt="...">
</div>
{% endcapture %}
{% renderHighlight highlight, "html" %}

## Picture

If you are using the `<picture>` element to specify multiple `<source>` elements for a specific `<img>`, make sure to add the `.img-*` classes to the `<img>` and not to the `<picture>` tag.

{% capture highlight %}
​<picture>
  <source srcset="..." type="image/svg+xml">
  <img src="..."  class="img-fluid img-thumbnail" alt="...">
</picture>
{% endcapture %}
{% renderHighlight highlight, "html" %}

## SASS Reference

### Variables

The available [Customization options]({{ site.path }}/{{ version.docs }}/get-started/options/), or Sass variables, that can be customized for the image CSS styles.

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
        <td><code>$enable-img</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the image CSS classes.
          Smaller segements of the image CSS classes can be disabled with the following <code>$enable-*</code> variables.
        </td>
      </tr>
      <tr>
        <td><code>$enable-img-fluid</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the fluid image CSS class.
        </td>
      </tr>
      <tr>
        <td><code>$enable-img-thumbnail</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the thumbnail CSS class.
        </td>
      </tr>
      <tr>
        <td><code>$thumbnail-padding</code></td>
        <td>string</td>
        <td><code>.25rem</code></td>
        <td>
          Thumbnail padding.
        </td>
      </tr>
      <tr>
        <td><code>$thumbnail-bg</code></td>
        <td>string</td>
        <td><code>$body-bg</code></td>
        <td>
          Thumbnail background color.
        </td>
      </tr>
      <tr>
        <td><code>$thumbnail-border-width</code></td>
        <td>string</td>
        <td><code>$border-width</code></td>
        <td>
          Thumbnail border width.
        </td>
      </tr>
      <tr>
        <td><code>$thumbnail-border-color</code></td>
        <td>string</td>
        <td><code>$uibase-300</code></td>
        <td>
          Thumbnail border color.
        </td>
      </tr>
      <tr>
        <td><code>$thumbnail-border-radius</code></td>
        <td>string</td>
        <td><code>$border-radius</code></td>
        <td>
          Thumbnail border radius.
        </td>
      </tr>
      <tr>
        <td><code>$thumbnail-box-shadow</code></td>
        <td>string</td>
        <td><code>0 .0625rem .125rem rgba($black, .075)</code></td>
        <td>
          Optional thumbnail box shadow.
        </td>
      </tr>
    </tbody>
  </table>
</div>

### Mixins

No mixins available.
