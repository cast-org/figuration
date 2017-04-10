---
layout: docs
title: Collapse
subtitle: collapse.js
group: widgets
---

Get base styles and flexible support for toggling content on your page.

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Examples

Click the buttons below to show and hide another element via class changes.

### Basic

{% example html %}
<button type="button" class="btn btn-outline-primary" data-cfw="collapse" data-cfw-collapse-target="#collapseEx1">Collapse <span class="caret"></span></button>
<div id="collapseEx1" class="collapse">
    <p>Fusce vel posuere nulla. Cras urna enim, tristique a diam quis, suscipit euismod ante. Praesent fringilla tincidunt augue facilisis condimentum. Nam eget congue nisl. Sed hendrerit, arcu convallis gravida scelerisque, purus lectus scelerisque enim, nec gravida sapien diam eget sem.</p>
</div>
{% endexample %}


### Multiple Triggers

You can assign multiple triggers to control one collapse target. It is required to use either the `data-cfw-collapse-target` or `href` attributes in order for all the control triggers, and target states to become synchronised.

{% example html %}
<a href="#" role="button" class="btn btn-outline-primary" data-cfw="collapse" data-cfw-collapse-target="#multi-collapse">Trigger 1 <span class="caret"></span></a>
<button type="button" class="btn btn-outline-primary" data-cfw="collapse" data-cfw-collapse-target="#multi-collapse">Trigger 2 <span class="caret"></span></button>
<div id="multi-collapse">
    <p>Fusce vel posuere nulla. Cras urna enim, tristique a diam quis, suscipit euismod ante. Praesent fringilla tincidunt augue facilisis condimentum. Nam eget congue nisl. Sed hendrerit, arcu convallis gravida scelerisque, purus lectus scelerisque enim, nec gravida sapien diam eget sem. In sed sem et diam condimentum malesuada? Nam cursus venenatis posuere. Praesent id purus turpis. Curabitur pretium arcu nec diam interdum, id elementum sapien ultricies. Fusce ornare magna et risus rhoncus; eu consectetur sem vulputate.</p>
</div>
{% endexample %}

Using `id` and matching `href` attributes.

{% example html %}
<a href="#href-collapse" role="button" class="btn btn-outline-primary" data-cfw="collapse">ID Trigger 1 <span class="caret"></span></a>
<a href="#href-collapse" role="button" class="btn btn-outline-primary" data-cfw="collapse">ID Trigger 2 <span class="caret"></span></a>
<div id="href-collapse" class="collapse">
    <p>Fusce vel posuere nulla. Cras urna enim, tristique a diam quis, suscipit euismod ante. Praesent fringilla tincidunt augue facilisis condimentum. Nam eget congue nisl. Sed hendrerit, arcu convallis gravida scelerisque, purus lectus scelerisque enim, nec gravida sapien diam eget sem. In sed sem et diam condimentum malesuada? Nam cursus venenatis posuere. Praesent id purus turpis. Curabitur pretium arcu nec diam interdum, id elementum sapien ultricies. Fusce ornare magna et risus rhoncus; eu consectetur sem vulputate.</p>
</div>
{% endexample %}


### Horizonal

A horizontal variant of a collapse can be invoked by placing a class of `width` on the collapse target, or by using the data attribute `data-cfw-collapse-horizontal="true"` on the trigger.  A child container with a fixed dimension width (not a percentage) is needed for proper animation.

{% example html %}
<button type="button" class="btn btn-outline-primary" data-cfw="collapse" data-cfw-collapse-target="#collapseEx2" data-cfw-collapse-horizontal="true">Collapse <span class="caret"></span></button>
<div id="collapseEx2" class="collapse width" >
    <div style="width: 20em">
        <p>Fusce vel posuere nulla. Cras urna enim, tristique a diam quis, suscipit euismod ante. Praesent fringilla tincidunt augue facilisis condimentum. Nam eget congue nisl. Sed hendrerit, arcu convallis gravida scelerisque, purus lectus scelerisque enim, nec gravida sapien diam eget sem.</p>
    </div>
</div>
{% endexample %}

## Usage

The collapse widget utilizes a few classes to handle the heavy lifting:

* `.collapse` hides the content
* `.collapse.in` shows the content
* `.collapsing` is added when the transition starts, and removed when it finishes
* `.collapsing.width` uses the horizontal transition instead of the default vertical transition

These classes can be found in `_animation.scss`.

### Via Data Attributes

Add `data-cfw="collapse"` and a target selector through a `data-cfw-collapse-target` or `href` attribute to automatically assign control of a collapsible element.
Be sure to add the class `collapse` to the collapsible element.
If you'd like it to default open, add the additional class `open` to the trigger control.

### Via JavaScript

Enable manually with:

{% highlight js %}
$('#myCollapse').CFW_Collapse();
{% endhighlight %}

### Options

Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-cfw-collapse`, as in `data-cfw-collapse-animate="false"`.

<table class="table table-scroll table-bordered table-striped">
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
        <td>null</td>
        <td>Either the selector (jQuery style), or the string related to the target collapse having a <code>data-cfw-collapse-target</code> attribute.</td>
    </tr>
    <tr>
        <td>animate</td>
        <td>boolean</td>
        <td>true</td>
        <td>If collapse targets should expand and contract.</td>
    </tr>
    <tr>
        <td>follow</td>
        <td>boolean</td>
        <td>false</td>
        <td>If browser focus should move when a collapse trigger is activated.</td>
    </tr>
    <tr>
        <td>horizontal</td>
        <td>boolean</td>
        <td>false</td>
        <td>Use a horizontal transition instead of the default vertical transition.</td>
    </tr>
</tbody>
</table>

### Methods

#### `.CFW_Collapse(options)`
{:.no_toc}

Activates the content as a collapsible element. Accepts an optional options `object`.

{% highlight js %}
$('#myCollapse').CFW_Collapse({
    follow: false
});
{% endhighlight %}

#### `.CFW_Collapse('toggle')`
{:.no_toc}

Toggles a collapsible element to be shown or hidden.

#### `.CFW_Collapse('show')`
{:.no_toc}

Shows a collapsible element.

#### `.CFW_Collapse('hide')`
{:.no_toc}

Hides a collapsible element.

#### `.CFW_Collapse('dispose')`
{:.no_toc}

Disables the collapse control functionality for a given element, leaving the collapse target is its current state.


### Events

Event callbacks happen on the toggle/trigger element.

<table class="table table-scroll table-bordered table-striped">
<thead>
    <tr>
        <th style="width: 150px;">Event Type</th>
        <th>Description</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>init.cfw.collapse</td>
        <td>This event fires after the collapse item is initialized.</td>
    </tr>
    <tr>
        <td>beforeShow.cfw.collapse</td>
        <td>This event is fired immediately when the <code>show</code> method is called.</td>
    </tr>
    <tr>
        <td>afterShow.cfw.collapse</td>
        <td>This event is fired when a collapse element has been made visible to the user (will wait for CSS transitions to complete).</td>
    </tr>
    <tr>
        <td>beforeHide.cfw.collapse</td>
        <td>This event is fired immediately when the <code>hide</code> method is called.</td>
    </tr>
    <tr>
        <td>afterHide.cfw.collapse</td>
        <td>This event is fired when a collapse element has been hidden from the user (will wait for CSS transitions to complete).</td>
    </tr>
</tbody>
</table>

{% highlight js %}
$('#myCollapse').on('afterHide.cfw.collapse', function () {
  // do something...
});
{% endhighlight %}