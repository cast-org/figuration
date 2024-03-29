---
layout: doc
title: Progress
description: Progress bars featuring support for stacked bars, animated backgrounds, and text labels.
group: components
toc: true
---

{% capture callout %}
**New markup in v4.4.0 —** The previous HTML structure for progress bars has been deprecated and replaced with a more accessible one. Note that the legacy progress bar structure will continue to work as before.. [See what's changed in our migration guide.]({{ site.path }}/{{ version.docs }}/get-started/migration/#progress-bars)
{% endcapture %}
{% renderCallout, callout, "info" %}

## How It Works

Use the custom progress component for displaying simple or complex progress bars. We don't use [the HTML5 `<progress>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress), allowing you to stack progress bars, animate them, and place text labels over them.

Progress components are built with two HTML elements, some CSS to set the width, and a few attributes.

- Use the `.progress` as a wrapper to indicate the max value of the progress bar.
- The `.progress` wrapper also requires a `role="progressbar"` and `aria` attributes to make it accessible, including an accessible name (using `aria-label`, `aria-labelledby`, or similar).
- The inner `.progress-bar` is purely for the visual bar and label.
- The `.progress-bar` requires an inline style, utility class, or custom CSS to set its width.
- A special `.progress-stacked` class is provided to create multiple/stacked progress bars.

Put that all together, and you have the following examples.

{% capture example %}
<div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width: 0%"></div>
</div>
<div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width: 25%"></div>
</div>
<div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width: 50%"></div>
</div>
<div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width: 75%"></div>
</div>
<div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width: 100%"></div>
</div>
{% endcapture %}
{% renderExample example %}

## Labels

Add labels to your progress bars by placing text within the `.progress-bar`.

{% capture example %}
<div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width: 25%;">25%</div>
</div>
{% endcapture %}
{% renderExample example %}

To ensure that the label text remains legible even for low percentages, consider adding a `min-width` to the progress bar.

{% capture example %}
<div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width: 0%;">0%</div>
</div>
<div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width: 0%; min-width: 2rem;">0%</div>
</div>
<div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="2" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width: 2%; min-width: 2rem;">2%</div>
</div>
{% endcapture %}
{% renderExample example %}

Note that by default, the content inside the `.progress-bar` is controlled with `overflow: hidden`, so it doesn't bleed out of the bar. If your progress bar is shorter than its label, the content will be capped and may become unreadable. To change this behavior, you can use `.overflow-visible` from the [overflow utilities]({{ site.path }}/{{ version.docs }}/utilities/overflow/), but make sure to also define an explicit [text color]({{ site.path }}/{{ version.docs }}/utilities/color/#text) so the text remains readable.

{% capture example %}
<div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar overflow-visible text-dark" style="width: 10%">Long label text for the progress bar, set to a dark color</div>
</div>
{% endcapture %}
{% renderExample example %}

## Width

Using the [width sizing utilities]({{ site.path }}/{{ version.docs }}/utilities/sizing/#width) can help with quickly configure the width of the `.progress-bar`.

{% capture example %}
<div class="progress" role="progressbar" aria-label="Example with 25% width utility" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar w-25"></div>
</div>
<div class="progress" role="progressbar" aria-label="Example with 75% width utility " aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar w-75"></div>
</div>
{% endcapture %}
{% renderExample example %}

## Height

By setting a `height` value on the outer `.progress` container, you change the height accordingly.

{% capture example %}
<div class="progress" role="progressbar" style="height: .5rem;" aria-label="Example with .5rem height" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width: 25%;"></div>
</div>
<div class="progress" role="progressbar" style="height: 2rem;" aria-label="Example with 2rem height" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width: 25%;"></div>
</div>
{% endcapture %}
{% renderExample example %}

## Color Variants

Use our [color utility]({{ site.path }}/{{ version.docs }}/utilities/color/) classes to change the appearance of individual progress bars.

Note, when using labels with custom background colors, make sure to also set an appropriate [text color]({{ site.path }}/{{ version.docs }}/utilities/color/#text), so the labels remain readable and have sufficient contrast.

{%- assign calloutColor = version.docs | valueIfEmpty: site.version.docs | prepend: "./" | append: "/partials/callout-warning-color-assistive-technologies.md" -%}
{% include calloutColor %}

{% capture example %}
<div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-success"  style="width: 25%"></div>
</div>
<div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-info" style="width: 50%"></div>
</div>
<div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-warning" style="width: 75%"></div>
</div>
<div class="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-danger" style="width: 100%"></div>
</div>
<div class="progress bg-secondary" role="progressbar" aria-label="Dark example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-info-200 text-dark" style="width: 50%">50%</div>
</div>
{% endcapture %}
{% renderExample example %}

## Striped

Add `.progress-bar-striped` to any `.progress-bar` to apply a stripe via CSS gradient over the progress bar's background color.

{% capture example %}
<div class="progress" role="progressbar" aria-label="Default striped example" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-bar-striped" style="width: 10%"></div>
</div>
<div class="progress" role="progressbar" aria-label="Success striped example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-bar-striped bg-success" style="width: 25%"></div>
</div>
<div class="progress" role="progressbar" aria-label="Info striped example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-bar-striped bg-info" style="width: 50%"></div>
</div>
<div class="progress" role="progressbar" aria-label="Warning striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-bar-striped bg-warning" style="width: 75%"></div>
</div>
<div class="progress" role="progressbar" aria-label="Danger striped example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-bar-striped bg-danger" style="width: 100%"></div>
</div>
{% endcapture %}
{% renderExample example %}

## Animated Stripes

The striped gradient can also be animated. Add `.progress-bar-animated` to `.progress-bar` to animate the stripes right to left via CSS3 animations.

Animated progress bars are not available in browsers that do not support CSS3 animations.

{% capture example %}
<div class="progress"  role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-bar-striped progress-bar-animated bg-primary" style="width: 75%"></div>
</div>
{% endcapture %}
{% renderExample example %}

## Stacked

Include multiple progress components inside a container with `.progress-stacked` to create a single stacked progress bar. Note that in this case, the styling to set the visual width of the progress bar *must* be applied to the `.progress` elements, rather than the `.progress-bar`s.

{% capture example %}
<div class="progress-stacked">
  <div class="progress" role="progressbar" aria-label="Segment one" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" style="width: 15%">
    <div class="progress-bar"></div>
  </div>
  <div class="progress" role="progressbar" aria-label="Segment two" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style="width: 30%">
    <div class="progress-bar progress-bar-striped bg-success"></div>
  </div>
  <div class="progress" role="progressbar" aria-label="Segment three" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%">
    <div class="progress-bar bg-info"></div>
  </div>
</div>
{% endcapture %}
{% renderExample example %}

## SASS Reference

### Variables

The available [Customization options]({{ site.path }}/{{ version.docs }}/get-started/options/), or Sass variables, that can be customized for progress component.

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
        <td><code>$enable-progress</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the progress classes.
          Smaller segements of the progress classes can be disabled with the following <code>$enable-*</code> variables.
        </td>
      </tr>
      <tr>
        <td><code>$enable-progress-striped</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the striped progress bar rule.
        </td>
      </tr>
      <tr>
        <td><code>$enable-progress-animated</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the animated progress bar rule.
        </td>
      </tr>
      <tr>
        <td><code>$progress-height</code></td>
        <td>string</td>
        <td><code>1rem</code></td>
        <td>
          Height of progress component.
        </td>
      </tr>
      <tr>
        <td><code>$progress-font-size</code></td>
        <td>string</td>
        <td><code>($font-size-base * .75)</code></td>
        <td>
          Font size for progress component.
        </td>
      </tr>
      <tr>
        <td><code>$progress-bg</code></td>
        <td>string</td>
        <td><code>$uibase-100</code></td>
        <td>
          Background color for progress component.
        </td>
      </tr>
      <tr>
        <td><code>$progress-bg</code></td>
        <td>string</td>
        <td><code>$uibase-100</code></td>
        <td>
          Background color for progress component.
        </td>
      </tr>
      <tr>
        <td><code>$progress-border-radius</code></td>
        <td>string</td>
        <td><code>$border-radius</code></td>
        <td>
          Border radius for progress component.
        </td>
      </tr>
      <tr>
        <td><code>$progress-box-shadow</code></td>
        <td>string</td>
        <td><code>map-get($shadows, "i1")</code></td>
        <td>
          Box shadow for progress component.
        </td>
      </tr>
      <tr>
        <td><code>$progress-bar-color</code></td>
        <td>string</td>
        <td><code>$white</code></td>
        <td>
          Text color for progress bar component.
        </td>
      </tr>
      <tr>
        <td><code>$progress-bar-color</code></td>
        <td>string</td>
        <td><code>$uibase-300</code></td>
        <td>
          Background color for progress bar component.
        </td>
      </tr>
      <tr>
        <td><code>$progress-box-shadow</code></td>
        <td>string</td>
        <td><code>inset 0 .125rem .25rem rgba($white, .25)</code></td>
        <td>
          Box shadow for progress bar component.
        </td>
      </tr>
      <tr>
        <td><code>$progress-bar-animation-timing</code></td>
        <td>string</td>
        <td><code>1s linear infinite</code></td>
        <td>
          Timing for animated progress bar.
        </td>
      </tr>
      <tr>
        <td><code>$progress-bar-transition</code></td>
        <td>string</td>
        <td><code>width .3s ease</code></td>
        <td>
          Transition rule for animated progress bar.
        </td>
      </tr>
    </tbody>
  </table>
</div>

### Mixins

No mixins available.
