---
layout: docs
title: Alerts
group: components
redirect_from: "/components/"
---

Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Examples

Alerts are available for any length of text, as well as an optional dismiss button. For proper styling, use of the contextual classes (e.g., `.alert-success`) is **required**. For inline dismissal, use the [Alert jQuery widget]({{ site.baseurl }}/widgets/alert/).

{% example html %}
<div class="alert alert-primary" role="alert">
  <strong>Primary!</strong> You read this important alert message.
</div>
<div class="alert alert-secondary" role="alert">
  <strong>Secondary!</strong> You read this important alert message.
</div>
<div class="alert alert-success" role="alert">
  <strong>Success!</strong> You successfully read this alert message.
</div>
<div class="alert alert-info" role="alert">
  <strong>Infomation!</strong> Something needs your attention, but it is not urgent.
</div>
<div class="alert alert-warning" role="alert">
  <strong>Warning!</strong> Something seems to have gone wrong with this item.
</div>
<div class="alert alert-danger" role="alert">
  <strong>Danger!</strong> There is definitaly some error now.
</div>
{% endexample %}

{% capture callout-include %}{% include callout-warning-color-assistive-technologies.md %}{% endcapture %}
{{ callout-include | markdownify }}

## Link Color

Use the `.alert-link` utility class to quickly provide matching colored links within any alert.

{% example html %}
<div class="alert alert-primary" role="alert">
  <strong>Primary!</strong> You read <a href="#" class="alert-link">this important alert message</a>.
</div>
<div class="alert alert-secondary" role="alert">
  <strong>Secondary!</strong> You read <a href="#" class="alert-link">this important alert message</a>.
</div>
<div class="alert alert-success" role="alert">
  <strong>Success!</strong> You successfully read <a href="#" class="alert-link">this alert message</a>.
</div>
<div class="alert alert-info" role="alert">
  <strong>Information!</strong> Something <a href="#" class="alert-link">needs your attention</a>, but it is not urgent.
</div>
<div class="alert alert-warning" role="alert">
  <strong>Warning!</strong> Something seems to have gone <a href="#" class="alert-link">wrong with this item</a>.
</div>
<div class="alert alert-danger" role="alert">
  <strong>Danger!</strong> There is definitaly <a href="#" class="alert-link">some error</a> now.
</div>
{% endexample %}

## Additional Content

Alerts can also contain additional HTML elements like headings and paragraphs.

{% example html %}
<div class="alert alert-success" role="alert">
  <h4 class="alert-heading">Well done!</h4>
  <p>You successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
  <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
</div>
{% endexample %}


