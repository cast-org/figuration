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

{% include callout-warning-color-assistive-technologies.md %}

{% capture example %}
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
  <strong>Danger!</strong> There is definitely some error now.
</div>
{% endcapture %}
{% include example.html content=example %}

## Link Color

Use the `.alert-link` utility class to quickly provide matching colored links within any alert.

{% capture example %}
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
  <strong>Danger!</strong> There is definitely <a href="#" class="alert-link">some error</a> now.
</div>
{% endcapture %}
{% include example.html content=example %}

## Additional Content

Alerts can also contain additional HTML elements like headings, paragraphs, and dividers.

{% capture example %}
<div class="alert alert-success" role="alert">
  <h4 class="alert-heading">Well done!</h4>
  <p>You successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
  <hr />
  <p class="mb-0">Whenever you need to, use the margin utilities to keep things nice and tidy.</p>
</div>
{% endcapture %}
{% include example.html content=example %}

## SASS Reference

### Variables

The available [Customization options]({{ site.baseurl }}/get-started/options/), or Sass variables, that can be customized for the alert component.

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
                <td><code>$enable-alert</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the alert component classes.
                    Smaller segements of the alert component classes can be disabled with the following <code>$enable-*</code> variables.
                </td>
            </tr>
            <tr>
                <td><code>$enable-alert-close</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the alert close button rule.
                </td>
            </tr>
            <tr>
                <td><code>$enable-alert-heading</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the alert heading override.
                </td>
            </tr>
            <tr>
                <td><code>$enable-alert-link</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the alert link styles.
                </td>
            </tr>
            <tr>
                <td><code>$enable-alert-hr</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the alert horizontal rule styles.
                </td>
            </tr>
            <tr>
                <td><code>$enable-alert-colors</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the alert color variants.
                </td>
            </tr>
            <tr>
                <td><code>$alert-padding-y</code></td>
                <td>string</td>
                <td><code>1rem</code></td>
                <td>
                    Vertical padding for alert containers.
                </td>
            </tr>
            <tr>
                <td><code>$alert-padding-x</code></td>
                <td>string</td>
                <td><code>1rem</code></td>
                <td>
                    Horizontal padding for alert containers.
                </td>
            </tr>
            <tr>
                <td><code>$alert-margin-bottom</code></td>
                <td>string</td>
                <td><code>$spacer</code></td>
                <td>
                    Vertical spacing for alert containers.
                </td>
            </tr>
            <tr>
                <td><code>$alert-border-width</code></td>
                <td>string</td>
                <td><code>$border-width</code></td>
                <td>
                    Border width for alert containers.
                </td>
            </tr>
            <tr>
                <td><code>$alert-border-radius</code></td>
                <td>string</td>
                <td><code>$border-radius</code></td>
                <td>
                    Border radius for alert containers.
                </td>
            </tr>
            <tr>
                <td><code>$alert-link-font-weight</code></td>
                <td>string</td>
                <td><code>$font-weight-bold</code></td>
                <td>
                    Font weight adjustment for alert links.
                </td>
            </tr>
            <tr>
                <td><code>$alert-close-padding-y</code></td>
                <td>string</td>
                <td><code>.75rem</code></td>
                <td>
                    Vertical padding for alert close buttons.
                </td>
            </tr>
            <tr>
                <td><code>$alert-close-padding-x</code></td>
                <td>string</td>
                <td><code>.75rem</code></td>
                <td>
                    Horizontal padding for alert close buttons.
                </td>
            </tr>
            <tr>
                <td><code>$alert-themes</code></td>
                <td>map</td>
                <td><code>()</code></td>
                <td>
                    Map of color schemes for alerts.
                </td>
            </tr>
            <tr>
                <td><code>$alert-colors</code></td>
                <td>list</td>
                <td><code>$base-colors</code></td>
                <td>
                    Colors to mix and merge into <code>$alert-themes</code>
                </td>
            </tr>
            <tr>
                <td><code>$alert-levels</code></td>
                <td>map</td>
                <td><code>$level-context</code></td>
                <td>
                    Levels to mix alert colors with.
                </td>
            </tr>
        </tbody>
    </table>
</div>

### Mixins

Here are the mixins related to alerts that we use to help generate our CSS. You can also uses these mixins to generate your own custom components or utilities.

#### alert-variant
{:.no_toc}

Generate an alert color variant.

{% highlight sass %}
@include alert-variant($color, $bg, $border, $hover-color);
{% endhighlight %}

<div class="table-scroll">
    <table class="table table-bordered table-striped">
        <thead>
            <tr>
                <th style="width: 100px;">Argument</th>
                <th style="width: 50px;">Type</th>
                <th style="width: 50px;">Default</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><code>$color</code></td>
                <td>number</td>
                <td>none</td>
                <td>
                    Text color for an alert.
                </td>
            </tr>
            <tr>
                <td><code>$bg</code></td>
                <td>number</td>
                <td>none</td>
                <td>
                    Background color for an alert.
                </td>
            </tr>
            <tr>
                <td><code>$border</code></td>
                <td>number</td>
                <td>none</td>
                <td>
                    Border and horizontal rule color for an alert.
                </td>
            </tr>
            <tr>
                <td><code>$hover-color</code></td>
                <td>number</td>
                <td>none</td>
                <td>
                    Hover state text color for alert links.
                </td>
            </tr>
        </tbody>
    </table>
</div>
