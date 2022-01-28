---
layout: doc
title: Alerts
subtitle: alert.js
description: Enable dismiss functionality for alert messages.
group: widgets
toc: true
extras:
  name: alert
---

{% capture callout %}
Accessibility Warning
{.h5}

When an alert is dismissed, the element is completely removed from the page structure. If a keyboard user dismisses the alert using the close button, their focus will suddenly be lost and, depending on the browser, reset to the start of the page/document. For this reason, it is  recommended to use additional JavaScript that listens for the `afterClose.cfw.alert` event and programmatically sets `focus()` to the most appropriate location in the page. If you're planning to move focus to a non-interactive element that normally does not receive focus, be sure to add `tabindex="-1"` to the element.
{% endcapture %}
{% renderCallout, callout, "warning" %}

## Examples

For more examples of alert container layout and content, check out the [Alerts component page]({{ site.path }}/{{ version.docs }}/components/alerts/).

These examples show the automatically attached alert dismiss triggers, enabled through data attributes.

{% capture example %}
<div class="alert alert-warning" role="alert">
  <strong>Warning!</strong> Objects in the mirror are closer than they appear.
  <button type="button" class="close" data-cfw-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
</div>

<div class="alert alert-danger" role="alert">
  <h4>Oops! You got an error!</h4>
  <p>Change this and that and try again. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.</p>
  <p>
    <button type="button" class="btn btn-danger">Take this action</button>
    <button type="button" class="btn btn-secondary" data-cfw-dismiss="alert">Close</button>
  </p>
</div>
{% endcapture %}
{% renderExample example %}

The dismiss will work with dynamically inserted alerts.

{% capture example %}
<p>
  <button type="button" class="btn btn-primary" id="alertCreate">Insert Alert</button>
</p>
<div id="alertDemoContainer"></div>

<script>
  $('#alertCreate').on('click', function() {
    $('#alertDemoContainer').after('<div class="alert alert-info" role="alert"><button type="button" class="close" data-cfw-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times</span></button><strong>Sample alert!</strong> Click my close button --&gt;</div>');
  });
</script>
{% endcapture %}
{% renderExample example %}

Enable an alert's dismiss trigger through scripting.

{% capture example %}
<div class="alert alert-primary" role="alert">
  <button id="alertBtn0" type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>
  <strong>Hey!</strong> Remove this alert with the default fade animation.
</div>

<div class="alert alert-secondary" role="alert" id="alert1">
  <button id="alertBtn1" type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>
  <strong>Boom!</strong> Remove this alert without the animation.
</div>
{% endcapture %}
{% renderExample example %}

{% capture highlight %}
$('#alertBtn0').CFW_Alert();

$('#alertBtn1').CFW_Alert({
  animate: false
});
{% endcapture %}
{% renderHighlight highlight, "js" %}

<script>
$('#alertBtn0').CFW_Alert();
$('#alertBtn1').CFW_Alert({ animate: false });
</script>

If the dismiss button is disabled, then the close action will be blocked.

{% capture example %}
<div class="alert alert-danger" role="alert">
  <button type="button" class="close" data-cfw-dismiss="alert" aria-label="Close" disabled><span aria-hidden="true">&times;</span></button>
  <strong>Sorry!</strong> You can't close me.
</div>
{% endcapture %}
{% renderExample example %}

## Usage

### Via Data Attributes

{% assign jsDismiss = version.docs | valueIfEmpty: site.version.docs | prepend: "./site/_includes/" | append: "/partials/js-dismiss.md" -%}
{% renderFile jsDismiss, extras %}

An example can be found in the [JavaScript Intergration section within the Badges component page]({{ site.path }}/{{ version.docs }}/components/badges/#javascript-integration).


### Via JavaScript

Enable dismissal of an alert via JavaScript:

{% capture highlight %}
$("#myAlert").CFW_Alert();
{% endcapture %}
{% renderHighlight highlight, "js" %}

### Options

Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-cfw-alert`, as in `data-cfw-alert-animate="false"`.

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
        <td><code>target</code></td>
        <td>string</td>
        <td><code>null</code></td>
        <td>The selector of the target item to be dismissed, or the parent <code>.alert</code> container will be used.</td>
      </tr>
      <tr>
        <td><code>animate</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>If alert targets should fade out.</td>
      </tr>
    </tbody>
  </table>
</div>

{% capture highlight %}
$('#myAlert').CFW_Alert({
    animate: false
});
{% endcapture %}
{% renderHighlight highlight, "js" %}

### Methods

Method calls should be made on the alert dismiss trigger.

<div class="table-scroll">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th style="width: 150px;">Method Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>close</code></td>
        <td>Closes an alert.</td>
      </tr>
      <tr>
        <td><code>dispose</code></td>
        <td>Removes the click event listener from a trigger. This will not disable a dismiss item if the Figuration widget API is enabled.</td>
      </tr>
    </tbody>
  </table>
</div>

{% capture highlight %}
$('#myAlertDismiss').CFW_Alert('close');
{% endcapture %}
{% renderHighlight highlight, "js" %}

### Events

Event callbacks happen on the target alert container.

<div class="table-scroll">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th style="width: 150px;">Event Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>beforeClose.cfw.alert</code></td>
        <td>This event is fired immediately when the <code>close</code> method is called.</td>
      </tr>
      <tr>
        <td><code>afterClose.cfw.alert</code></td>
        <td>This event is fired when an alert has been closed (will wait for CSS transitions to complete).</td>
      </tr>
    </tbody>
  </table>
</div>

{% capture highlight %}
$('#myAlert').on('beforeClose.cfw.alert', function() {
  // do something...
});
{% endcapture %}
{% renderHighlight highlight, "js" %}
