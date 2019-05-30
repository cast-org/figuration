---
layout: docs
title: Progress
description: Progress bars featuring support for stacked bars, animated backgrounds, and text labels.
group: components
---

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## How It Works

Use the custom progress component for displaying simple or complex progress bars. We don't use [the HTML5 `<progress>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress), allowing you to stack progress bars, animate them, and place text labels over them.

Progress components are built with two HTML elements, some CSS to set the width, and a few attributes.

- Use the `.progress` as a wrapper to indicate the max value of the progress bar.
- Use the inner `.progress-bar` to indicate the progress so far.
- The `.progress-bar` requires an inline style or custom CSS to set their width.
- The `.progress-bar` also requires `role="progressbar"` and some `aria-` attributes to make it accessible.

## Example

Put that all together, and you have the following examples.

{% capture example %}
<div class="progress">
    <div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
    <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
    <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
    <div class="progress-bar" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
    <div class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>
{% endcapture %}
{% include example.html content=example %}

## Additional Features

Alter the appearance of your progress bars with custom CSS, background utilities, stripes, and more.

### Labels

Add labels to your progress bars by placing text within the `.progress-bar`.

{% capture example %}
<div class="progress">
    <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
</div>
{% endcapture %}
{% include example.html content=example %}

To ensure that the label text remains legible even for low percentages, consider adding a `min-width` to the progress bar.

{% capture example %}
<div class="progress">
    <div class="progress-bar" role="progressbar" style="width: 0%;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">0%</div>
</div>
<div class="progress">
    <div class="progress-bar" role="progressbar" style="width: 0%; min-width: 2rem;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">0%</div>
</div>
<div class="progress">
    <div class="progress-bar" role="progressbar" style="width: 2%; min-width: 2rem;" aria-valuenow="2" aria-valuemin="0" aria-valuemax="100">2%</div>
</div>
{% endcapture %}
{% include example.html content=example %}

### Height

By setting a `height` value on the outer `.progress`, you change the height accordingly.

{% capture example %}
<div class="progress" style="height: .5rem;">
    <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress" style="height: 2rem">
    <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
{% endcapture %}
{% include example.html content=example %}

### Color Variants

Use our [color utility]({{ site.baseurl }}/{{ site.docs_version }}/utilities/color/) classes to change the appearance of individual progress bars.

{% include callout-warning-color-assistive-technologies.md %}

{% capture example %}
<div class="progress">
    <div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
    <div class="progress-bar bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
    <div class="progress-bar bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
    <div class="progress-bar bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress bg-dark">
    <div class="progress-bar bg-cyan-300 text-dark" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
</div>
{% endcapture %}
{% include example.html content=example %}

### Striped

Add `.progress-bar-striped` to any `.progress-bar` to apply a stripe via CSS gradient over the progress bar's background color.

{% capture example %}
<div class="progress">
    <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
    <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
    <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
    <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
    <div class="progress-bar progress-bar-striped bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>
{% endcapture %}
{% include example.html content=example %}

### Animated Stripes

The striped gradient can also be animated. Add `.progress-bar-animated` to `.progress-bar` to animate the stripes right to left via CSS3 animations.

Animated progress bars are not available in browsers that do not support CSS3 animations.

<div class="cf-example">
    <div class="progress">
        <div class="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
    </div>
    <button type="button" class="btn btn-outline-secondary cf-toggle-animated-progress" data-toggle="button" aria-pressed="false" autocomplete="off">
        Toggle animation
    </button>
</div>

{% highlight html %}
<div class="progress">
    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
</div>
{% endhighlight %}

### Stacked

Include multiple progress bars in a progress component if you need.

{% capture example %}
<div class="progress">
    <div class="progress-bar" role="progressbar" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
    <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
    <div class="progress-bar bg-info" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
</div>
{% endcapture %}
{% include example.html content=example %}

## SASS Reference

### Variables

The available [Customization options]({{ site.baseurl }}/{{ site.docs_version }}/get-started/options/), or Sass variables, that can be customized for progress component.

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
