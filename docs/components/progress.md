---
layout: docs
title: Progress
group: components
---

Stylize [the HTML5 `<progress>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress) with a few extra classes and some crafty browser-specific CSS. Be sure to read up on the browser support.

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Example

To caption a progress bar, simply add a `<div>` with your caption text, [align the text using a utility class]({{ site.baseurl }}/utilities/typography/#text-alignment), and associate the caption with the `<progress>` element using the `aria-describedby` attribute.

{% example html %}

<div class="text-center" id="example-caption-1">Reticulating splines&hellip; 0%</div>
<progress class="progress" value="0" max="100" aria-describedby="example-caption-1"></progress>

<div class="text-center" id="example-caption-2">Reticulating splines&hellip; 25%</div>
<progress class="progress" value="25" max="100" aria-describedby="example-caption-2"></progress>

<div class="text-center" id="example-caption-3">Reticulating splines&hellip; 50%</div>
<progress class="progress" value="50" max="100" aria-describedby="example-caption-3"></progress>

<div class="text-center" id="example-caption-4">Reticulating splines&hellip; 75%</div>
<progress class="progress" value="75" max="100" aria-describedby="example-caption-4"></progress>

<div class="text-center" id="example-caption-5">Reticulating splines&hellip; 100%</div>
<progress class="progress" value="100" max="100" aria-describedby="example-caption-5"></progress>
{% endexample %}


## Contextual Alternatives

Progress bars use some of the same button and alert classes for consistent styles.

{% example html %}
<progress class="progress progress-primary" value="10" max="100"></progress>
<progress class="progress progress-secondary" value="20" max="100"></progress>
<progress class="progress progress-success" value="40" max="100"></progress>
<progress class="progress progress-info" value="60" max="100"></progress>
<progress class="progress progress-warning" value="80" max="100"></progress>
<progress class="progress progress-danger" value="100" max="100"></progress>
{% endexample %}

## Striped

Uses a gradient to create a striped effect.

{% example html %}
<progress class="progress progress-striped progress-primary" value="10" max="100"></progress>
<progress class="progress progress-striped progress-secondary" value="20" max="100"></progress>
<progress class="progress progress-striped progress-success" value="40" max="100"></progress>
<progress class="progress progress-striped progress-info" value="60" max="100"></progress>
<progress class="progress progress-striped progress-warning" value="80" max="100"></progress>
<progress class="progress progress-striped progress-danger" value="100" max="100"></progress>
{% endexample %}

## IE9 Support

Internet Explorer 9 doesn't support the HTML5 `<progress>` element, but we can work around that.

{% example html %}
<div class="text-center" id="example-caption-6">Reticulating splines&hellip; 25%</div>
<progress class="progress" value="25" max="100" aria-describedby="example-caption-6">
  <div class="progress">
    <span class="progress-bar" style="width: 25%;"></span>
  </div>
</progress>

<progress max="100" value="50" class="progress progress-primary">
    <div class="progress">
        <span style="width: 50%;" class="progress-bar">50%</span>
    </div>
</progress>

<progress max="100" value="75" class="progress progress-striped progress-success">
  <div class="progress">
    <span style="width: 75%;" class="progress-bar">75%</span>
  </div>
</progress>
{% endexample %}
