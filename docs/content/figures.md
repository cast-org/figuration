---
layout: docs
title: Figures
group: content
---

Anytime you need to display a piece of content---like an image---with an optional caption, consider using a `<figure>`.


## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Examples

Use the included `.figure` , `.figure-img` and `.figure-caption` classes to provide some baseline styles for the HTML5 `<figure>` and `<figcaption>` elements. Images in figures have no explicit size, so be sure to add the `.img-fluid` class to your `<img>` to make it resize automatically.

{% example html %}
<figure class="figure">
  <img data-src="holder.js/400x300" class="figure-img img-fluid radius" alt="A generic square placeholder image with rounded corners in a figure.">
  <figcaption class="figure-caption">A caption for the above image.</figcaption>
</figure>
{% endexample %}

Aligning the figure's caption is easy with our [text utilities]({{ site.baseurl }}/utilities/typography/#text-alignment).

{% example html %}
<figure class="figure">
  <img data-src="holder.js/400x300" class="figure-img img-fluid radius" alt="A generic square placeholder image with rounded corners in a figure.">
  <figcaption class="figure-caption text-end">A caption for the above image.</figcaption>
</figure>
{% endexample %}

## SASS Reference

### Variables

The available [Customization options]({{ site.baseurl }}/get-started/options/), or Sass variables, that can be customized for the figure CSS styles.

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
                <td><code>$enable-figure</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the figure CSS classes.
                </td>
            </tr>
            <tr>
                <td><code>$figure-spacer-y</code></td>
                <td>percent</td>
                <td><code>.5rem</code></td>
                <td>
                    Figure element vertical spacing between image and caption.
                </td>
            </tr>
            <tr>
                <td><code>$figure-caption-font-size</code></td>
                <td>percent</td>
                <td><code>87.5%</code></td>
                <td>
                    Figure caption font size.
                </td>
            </tr>
            <tr>
                <td><code>$figure-caption-color</code></td>
                <td>string</td>
                <td><code>$uibase-500</code></td>
                <td>
                    Figure caption text color.
                </td>
            </tr>
        </tbody>
    </table>
</div>

### Mixins

No mixins available.
