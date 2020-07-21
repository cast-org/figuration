---
layout: doc
title: Collapse
subtitle: collapse.js
description: Get base styles and flexible support for toggling content on your page.
group: widgets
toc: true
---

## How It Works

The collapse JavaScript plugin is used to show and hide content. Buttons or anchors are used as triggers that are mapped to specific elements you toggle. Collapsing an element will animate the `height`, or `width`, from it's current value to `0`. Given how CSS handles animations, you cannot use `padding` on a `.collapse` element. Instead, use the class as an independent wrapping element.

## Examples

Click the buttons below to show and hide another element via class changes.

### Basic

{% capture example %}
<button type="button" class="btn btn-outline-primary" data-cfw="collapse" data-cfw-collapse-target="#collapseEx1">Collapse <span class="caret"></span></button>
<div id="collapseEx1" class="collapse">
  <p>Fusce vel posuere nulla. Cras urna enim, tristique a diam quis, suscipit euismod ante. Praesent fringilla tincidunt augue facilisis condimentum. Nam eget congue nisl. Sed hendrerit, arcu convallis gravida scelerisque, purus lectus scelerisque enim, nec gravida sapien diam eget sem.</p>
</div>
{% endcapture %}
{% renderExample example %}


### Multiple Triggers

You can assign multiple triggers to control one collapse target. It is required to use either the `data-cfw-collapse-target` or `href` attributes in order for all the control triggers, and target states to become synchronised.

{% capture example %}
<a href="#" role="button" class="btn btn-outline-primary" data-cfw="collapse" data-cfw-collapse-target="#multi-collapse">Trigger 1 <span class="caret"></span></a>
<button type="button" class="btn btn-outline-primary" data-cfw="collapse" data-cfw-collapse-target="#multi-collapse">Trigger 2 <span class="caret"></span></button>
<div id="multi-collapse">
  <p>Fusce vel posuere nulla. Cras urna enim, tristique a diam quis, suscipit euismod ante. Praesent fringilla tincidunt augue facilisis condimentum. Nam eget congue nisl. Sed hendrerit, arcu convallis gravida scelerisque, purus lectus scelerisque enim, nec gravida sapien diam eget sem. In sed sem et diam condimentum malesuada? Nam cursus venenatis posuere. Praesent id purus turpis. Curabitur pretium arcu nec diam interdum, id elementum sapien ultricies. Fusce ornare magna et risus rhoncus; eu consectetur sem vulputate.</p>
</div>
{% endcapture %}
{% renderExample example %}

Using `id` and matching `href` attributes.

{% capture example %}
<a href="#href-collapse" role="button" class="btn btn-outline-primary" data-cfw="collapse">ID Trigger 1 <span class="caret"></span></a>
<a href="#href-collapse" role="button" class="btn btn-outline-primary" data-cfw="collapse">ID Trigger 2 <span class="caret"></span></a>
<div id="href-collapse" class="collapse">
  <p>Fusce vel posuere nulla. Cras urna enim, tristique a diam quis, suscipit euismod ante. Praesent fringilla tincidunt augue facilisis condimentum. Nam eget congue nisl. Sed hendrerit, arcu convallis gravida scelerisque, purus lectus scelerisque enim, nec gravida sapien diam eget sem. In sed sem et diam condimentum malesuada? Nam cursus venenatis posuere. Praesent id purus turpis. Curabitur pretium arcu nec diam interdum, id elementum sapien ultricies. Fusce ornare magna et risus rhoncus; eu consectetur sem vulputate.</p>
</div>
{% endcapture %}
{% renderExample example %}


### Horizonal

A horizontal variant of a collapse can be invoked by placing a class of `width` on the collapse target, or by using the data attribute `data-cfw-collapse-horizontal="true"` on the trigger.  A child container with a fixed dimension width (not a percentage) is needed for proper animation.

{% capture example %}
<button type="button" class="btn btn-outline-primary" data-cfw="collapse" data-cfw-collapse-target="#collapseEx2" data-cfw-collapse-horizontal="true">Collapse <span class="caret"></span></button>
<div id="collapseEx2" class="collapse width">
  <div style="width: 20em">
    <p>Fusce vel posuere nulla. Cras urna enim, tristique a diam quis, suscipit euismod ante. Praesent fringilla tincidunt augue facilisis condimentum. Nam eget congue nisl. Sed hendrerit, arcu convallis gravida scelerisque, purus lectus scelerisque enim, nec gravida sapien diam eget sem.</p>
  </div>
</div>
{% endcapture %}
{% renderExample example %}

## Usage

The collapse widget utilizes a few classes to handle the heavy lifting:

- `.collapse` hides the content
- `.collapse.in` shows the content
- `.collapsing` is added when the transition starts, and removed when it finishes
- `.collapsing.width` uses the horizontal transition instead of the default vertical transition

These classes can be found in `_animation.scss`.

### Via Data Attributes

Add `data-cfw="collapse"` and a target selector through a `data-cfw-collapse-target` or `href` attribute to automatically assign control of a collapsible element.
Be sure to add the class `collapse` to the collapsible element.
If you'd like it to default open, add the additional class `open` to the trigger control.

### Via JavaScript

Activate some content as a collapsible element.

{% capture highlight %}
$('#myCollapse').CFW_Collapse();
{% endcapture %}
{% renderHighlight highlight, "js" %}

### Options

Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-cfw-collapse`, as in `data-cfw-collapse-animate="false"`.

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
        <td>The selector of the target collapse item.</td>
      </tr>
      <tr>
        <td><code>animate</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>If collapse targets should expand and contract.</td>
      </tr>
      <tr>
        <td><code>follow</code></td>
        <td>boolean</td>
        <td><code>false</code></td>
        <td>If browser focus should move when a collapse trigger is activated.</td>
      </tr>
      <tr>
        <td><code>horizontal</code></td>
        <td>boolean</td>
        <td><code>false</code></td>
        <td>Use a horizontal transition instead of the default vertical transition.</td>
      </tr>
    </tbody>
  </table>
</div>

{% capture highlight %}
$('#myCollapse').CFW_Collapse({
  follow: false
});
{% endcapture %}
{% renderHighlight highlight, "js" %}

### Methods

Method calls are made on the toggle/trigger element.

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
        <td><code>toggle</code></td>
        <td>Toggles a collapsible element to be shown or hidden.</td>
      </tr>
      <tr>
        <td><code>show</code></td>
        <td>Shows a collapsible element.</td>
      </tr>
      <tr>
        <td><code>hide</code></td>
        <td>Hides a collapsible element.</td>
      </tr>
      <tr>
        <td><code>dispose</code></td>
        <td>Disables the collapse control functionality for a given element, leaving the collapse target is its current state.</td>
      </tr>
    </tbody>
  </table>
</div>

{% capture highlight %}
$('#myCollapse').CFW_Collapse('show');
{% endcapture %}
{% renderHighlight highlight, "js" %}


### Events

Event callbacks happen on the toggle/trigger element.

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
        <td><code>init.cfw.collapse</code></td>
        <td>This event fires after the collapse item is initialized.</td>
      </tr>
      <tr>
        <td><code>beforeShow.cfw.collapse</code></td>
        <td>This event is fired immediately when the <code>show</code> method is called.</td>
      </tr>
      <tr>
        <td><code>afterShow.cfw.collapse</code></td>
        <td>This event is fired when a collapse element has been made visible to the user (will wait for CSS transitions to complete).</td>
      </tr>
      <tr>
        <td><code>beforeHide.cfw.collapse</code></td>
        <td>This event is fired immediately when the <code>hide</code> method is called.</td>
      </tr>
      <tr>
        <td><code>afterHide.cfw.collapse</code></td>
        <td>This event is fired when a collapse element has been hidden from the user (will wait for CSS transitions to complete).</td>
      </tr>
    </tbody>
  </table>
</div>

{% capture highlight %}
$('#myCollapse').on('afterHide.cfw.collapse', function() {
  // do something...
});
{% endcapture %}
{% renderHighlight highlight, "js" %}

## Accessibility

If the control element's HTML element is not a button (e.g., an `<a>` or `<div>`), the attribute `role="button"` should be added to the element.