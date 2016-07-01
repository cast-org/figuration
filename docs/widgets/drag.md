---
layout: docs
title: Drag
subtitle: drag.js
group: widgets
---

A simple widget that allows for both mouse and touch drag handling for use by other Figuration widgets.

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Examples

Working examples can be found on the [Slider widget]({{ site.baseurl}}/widgets/slider/) page, and at the draggable example on the [Popover widget]({{ site.baseurl}}/widgets/popover/#draggable-example) page.

## Usage

### Via JavaScript

Call the widget manually with options:

{% highlight js %}
$('#myDrag').CFW_Drag({
    handle : '#myDragHandle'
});
{% endhighlight %}

### Options

Options can be passed via JavaScript.

<div class="table-responsive">
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
            <td>handle</td>
            <td>integer</td>
            <td>null</td>
            <td>
                <p>The selector (jQuery style) for the element where dragging is allow to begin.</p>
                <p>The handle must be a descendant of the element where the drag is attached.</p>
            </td>
        </tr>
    </tbody>
    </table>
</div> <!-- /.table-responsive -->

### Methods

#### `.CFW_Drag(options)`
{:.no_toc}

Activates the equalizer widget. Accepts an optional options `object`.

#### `.CFW_Drag('destroy')`
{:.no_toc}

Disables the drag functionality.

### Events

Event callbacks happen on the item where the drag is attached.

<div class="table-responsive">
    <table class="table table-bordered table-striped">
    <thead>
        <tr>
            <th style="width: 150px;">Event Type</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>init.cfw.drag</td>
            <td>This event fires after the drag widget is initialized.</td>
        </tr>
        <tr>
            <td>dragStart.cfw.drag</td>
            <td>This event fires when the drag item or handle is activated.</td>
        </tr>
        <tr>
            <td>drag.cfw.drag</td>
            <td>This event fires as the item is being moved.</td>
        </tr>
        <tr>
            <td>dragEnd.cfw.drag</td>
            <td>This event fires when the drag item or handle is released.</td>
        </tr>
    </tbody>
    </table>
</div> <!-- /.table-responsive -->

{% highlight js %}
$('#myDrag').on('drag.cfw.drag', function () {
  // do something...
});
{% endhighlight %}

### Event Properties

Each event callback, except for `init.cfw.drag`, returns the following additional properties.

<div class="table-responsive">
    <table class="table table-bordered table-striped">
    <thead>
        <tr>
            <th style="width: 150px;">Name</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>startX</td>
            <td>The horizontal location of the <code>dragStart.cfw.drag</code> event.</td>
        </tr>
        <tr>
            <td>startY</td>
            <td>The vertical location of the <code>dragStart.cfw.drag</code> event.</td>
        </tr>
        <tr>
            <td>pageX</td>
            <td>The horizontal location of the <code>drag.cfw.drag</code> event.</td>
        </tr>
        <tr>
            <td>pageY</td>
            <td>The vertical location of the <code>drag.cfw.drag</code> event.</td>
        </tr>
        <tr>
            <td>deltaX</td>
            <td>The horizontal distance moved from <code>startX</code>.</td>
        </tr>
        <tr>
            <td>deltaY</td>
            <td>The vertical distance moved from <code>startX</code>.</td>
        </tr>
        <tr>
            <td>originalX</td>
            <td>The starting horizontal position of the drag "target" element..</td>
        </tr>
        <tr>
            <td>originalY</td>
            <td>The starting vertical position of the drag "target" element.</td>
        </tr>
        <tr>
            <td>offsetX</td>
            <td>The moved horizontal position of the drag "target" element..</td>
        </tr>
        <tr>
            <td>offsetY</td>
            <td>The moved vertical position of the drag "target" element.</td>
        </tr>
    </tbody>
    </table>
</div> <!-- /.table-responsive -->