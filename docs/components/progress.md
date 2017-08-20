---
layout: docs
title: Progress
group: components
---

Use the custom progress component for displaying simple or complex progress bars. We don't use [the HTML5 `<progress>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress), allowing you to stack progress bars, animate them, and place text labels over them.

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## How It Works

Progress components are built with two HTML elements, some CSS to set the width, and a few attributes.

- Use the `.progress` as a wrapper to indicate the max value of the progress bar.
- Use the inner `.progress-bar` to indicate the progress so far.
- The `.progress-bar` requires an inline style or custom CSS to set their width.
- The `.progress-bar` also requires `role="progressbar"` and some `aria-` attributes to make it accessible.

## Example

Put that all together, and you have the following examples.

{% example html %}
<div class="progress">
    <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
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
{% endexample %}

## Additional Features

Alter the appearance of your progress bars with custom CSS, background utilities, stripes, and more.

### Labels

Add labels to your progress bars by placing text within the `.progress-bar`.

{% example html %}
<div class="progress">
    <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
</div>
{% endexample %}

To ensure that the label text remains legible even for low percentages, consider adding a `min-width` to the progress bar.

{% example html %}
<div class="progress">
    <div class="progress-bar" role="progressbar" style="min-width: 2rem;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">0%</div>
</div>
<div class="progress">
    <div class="progress-bar" role="progressbar" style="width: 2%; min-width: 2rem;" aria-valuenow="2" aria-valuemin="0" aria-valuemax="100">2%</div>
</div>
{% endexample %}

### Height

By setting a `height` value on the outer `.progress`, you change the height accordingly.

{% example html %}
<div class="progress" style="height: .5rem;">
    <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress" style="height: 2rem">
    <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
{% endexample %}

### Color Variants

Use our [color utility]({{ site.baseurl }}/utilities/color/) classes to change the appearance of individual progress bars.

{% callout warning %}
Conveying Meaning to Assistive Technologies
{:.h5}

Please refer to the [Accessiblity notes about conveying meaning with color]({{ site.baseurl }}/get-started/accessibility/#conveying-meaning-with-color).
{% endcallout %}

{% example html %}
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
<div class="progress bg-inverse">
    <div class="progress-bar bg-cyan-300 text-dark" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
</div>
{% endexample %}

### Striped

Add `.progress-bar-striped` to any `.progress-bar` to apply a stripe via CSS gradient over the progress bar's background color.

{% example html %}
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
{% endexample %}

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

{% example html %}
<div class="progress">
    <div class="progress-bar" role="progressbar" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
    <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
    <div class="progress-bar bg-info" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
</div>
{% endexample %}