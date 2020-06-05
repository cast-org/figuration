---
layout: doc
title: Alerts
subtitle: alert.js
description: Enable dismiss functionality for alert messages.
group: widgets
toc: true
---

## Examples

For more examples of alert container layout and content, check out the [Alerts component page]({{ site.path }}/{{ version.docs }}/components/alerts/).

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

<div class="cf-example cf-example-bottom">
  <p>
    <button type="button" class="btn btn-outline-primary" id="alert-create">Insert Alert</button>
  </p>
  <div id="alert-demo"></div>

  <script>
    $('#alert-create').on('click', function(e) {
      if (e) e.preventDefault();
      $('#alert-demo').after('<div class="alert alert-info" role="alert"><button type="button" class="close" data-cfw-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times</span></button><strong>Sample alert!</strong> Click my close button --&gt;</div>');
    });
  </script>
</div>

## Usage

### Via Data Attributes

Just add `data-cfw-dismiss="alert"` to a close button **inside the alert container** to automatically give an alert close functionality.

### Via JavaScript

Enable dismissal of an alert via JavaScript:

{% capture highlight %}
$(".alert").CFW_Alert();
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
        <td>target</td>
        <td>string</td>
        <td><code>null</code></td>
        <td>The selector (jQuery style) of the target item to be dismissed.</td>
      </tr>
      <tr>
        <td>animate</td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>If alert targets should fade out.</td>
      </tr>
    </tbody>
  </table>
</div>

### Methods

#### `.CFW_Alert(options)`

Activates the element as a dismiss trigger. (Not necessary when using the Figuration widget API is enabled.) Accepts an optional options `object`.

{% capture highlight %}
$('#myAlert').CFW_Alert({
    animate: false
});
{% endcapture %}
{% renderHighlight highlight, "js" %}

#### `.CFW_Alert('close')`

Closes an alert.

#### `.CFW_Alert('dispose')`

Removes the click event listener from a trigger. This will not disable a dismiss item if the Figuration widget API is enabled.

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
        <td>beforeClose.cfw.alert</td>
        <td>This event is fired immediately when the <code>close</code> method is called.</td>
      </tr>
      <tr>
        <td>afterClose.cfw.alert</td>
        <td>This event is fired when an alert has been closed (will wait for CSS transitions to complete).</td>
      </tr>
    </tbody>
  </table>
</div>

{% capture highlight %}
$('#myAlert').on('beforeClose.cfw.alert', function () {
  // do something...
});
{% endcapture %}
{% renderHighlight highlight, "js" %}
