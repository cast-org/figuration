---
layout: doc
title: Drag
subtitle: drag.js
description: A simple widget that allows for both mouse and touch drag handling for use by other Figuration widgets.
group: widgets
toc: true
---

## Examples

An example can be found with the draggable popover on the [Popover widget]({{ site.path }}/{{ version.docs }}/widgets/popover/#draggable-example) page.

## Disabled

If the element on which the drag widget is attached to is disabled either by `.disabled` or `:disabled` then the `dragStart` action will not occur.  The same is true if a handle is defined, and the handle is marked as disabled.

## Usage

### Via JavaScript

Call the widget manually with options:

{% capture highlight %}
$('#myDrag').CFW_Drag({
  handle : '#myDragHandle'
});
{% endcapture %}
{% renderHighlight highlight, "js" %}

### Options

Options can be passed via JavaScript.

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
        <td><code>handle</code></td>
        <td>string</td>
        <td><code>null</code></td>
        <td>
          <p>The selector for the element where dragging is allow to begin.</p>
          <p>The handle must be a descendant of the element where the drag is attached.</p>
        </td>
      </tr>
    </tbody>
  </table>
</div>

{% capture highlight %}
$('#myDrag').CFW_Drag({
  handle: '#myDragHandle'
});
{% endcapture %}
{% renderHighlight highlight, "js" %}

### Methods

Method calls should be made on the drag element.

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
        <td><code>dispose</code></td>
        <td>Disables the drag functionality.</td>
      </tr>
    </tbody>
  </table>
</div>

{% capture highlight %}
$('#myDrag').CFW_Drag('dispose');
{% endcapture %}
{% renderHighlight highlight, "js" %}

### Events

Event callbacks happen on the item where the drag is attached.

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
        <td><code>init.cfw.drag</code></td>
        <td>This event fires after the drag widget is initialized.</td>
      </tr>
      <tr>
        <td><code>dragStart.cfw.drag</code></td>
        <td>This event fires when the drag item or handle is activated.</td>
      </tr>
      <tr>
        <td><code>drag.cfw.drag</code></td>
        <td>This event fires as the item is being moved.</td>
      </tr>
      <tr>
        <td><code>dragEnd.cfw.drag</code></td>
        <td>This event fires when the drag item or handle is released.</td>
      </tr>
    </tbody>
  </table>
</div>

{% capture highlight %}
$('#myDrag').on('drag.cfw.drag', function() {
  // do something...
});
{% endcapture %}
{% renderHighlight highlight, "js" %}

### Event Properties

Each event callback, except for `init.cfw.drag`, returns the following additional properties.

<div class="table-scroll">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th style="width: 150px;">Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>startX</code></td>
        <td>The horizontal location of the <code>dragStart.cfw.drag</code> event.</td>
      </tr>
      <tr>
        <td><code>startY</code></td>
        <td>The vertical location of the <code>dragStart.cfw.drag</code> event.</td>
      </tr>
      <tr>
        <td><code>pageX</code></td>
        <td>The horizontal location of the <code>drag.cfw.drag</code> event.</td>
      </tr>
      <tr>
        <td><code>pageY</code></td>
        <td>The vertical location of the <code>drag.cfw.drag</code> event.</td>
      </tr>
      <tr>
        <td><code>deltaX</code></td>
        <td>The horizontal distance moved from <code>startX</code>.</td>
      </tr>
      <tr>
        <td><code>deltaY</code></td>
        <td>The vertical distance moved from <code>startX</code>.</td>
      </tr>
      <tr>
        <td><code>originalX</code></td>
        <td>The starting horizontal position of the drag "target" element..</td>
      </tr>
      <tr>
        <td><code>originalY</code></td>
        <td>The starting vertical position of the drag "target" element.</td>
      </tr>
      <tr>
        <td><code>offsetX</code></td>
        <td>The moved horizontal position of the drag "target" element, the sum of <code>originalX</code> and <code>deltaX</code>.</td>
      </tr>
      <tr>
        <td><code>offsetY</td>
        <td>The moved vertical position of the drag "target" element, the sum of <code>originalY</code> and <code>deltaY</code>.</td>
      </tr>
    </tbody>
  </table>
</div>

{% capture highlight %}
$('#myDrag').on('drag.cfw.drag', function(event) {
    someFunction(event.offsetY, event.offsetX);
});
{% endcapture %}
{% renderHighlight highlight, "js" %}


