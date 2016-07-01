---
layout: docs
title: Collapse
subtitle: collapse.js
group: widgets
---

Get base styles and flexible support for collapsible components like accordions and navigation.

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Examples

Click the buttons below to show and hide another element via class changes.

### Basic

{% example html %}
<button type="button" class="btn btn-outline-primary" data-cfw="collapse" data-cfw-collapse-toggle="collapseEx1">Collapse <span class="caret"></span></button>
<div class="collapse" data-cfw-collapse-target="collapseEx1">
    <p>Fusce vel posuere nulla. Cras urna enim, tristique a diam quis, suscipit euismod ante. Praesent fringilla tincidunt augue facilisis condimentum. Nam eget congue nisl. Sed hendrerit, arcu convallis gravida scelerisque, purus lectus scelerisque enim, nec gravida sapien diam eget sem.</p>
</div>
{% endexample %}


### Multiple Triggers

You can assign multiple triggers to control one collapse target, but you need to use the `data-cfw-collapse-toggle` and matching `data-cfw-collapse-target` attributes so that the toggle and target states are all synchronised.

{% example html %}
<a href="#" role="button" class="btn btn-outline-primary" data-cfw="collapse" data-cfw-collapse-toggle="multi-collapse">Trigger 1 <span class="caret"></span></a>
<button type="button" class="btn btn-outline-primary" data-cfw="collapse" data-cfw-collapse-toggle="multi-collapse">Trigger 2 <span class="caret"></span></button>
<div data-cfw-collapse-target="multi-collapse">
    <p>Fusce vel posuere nulla. Cras urna enim, tristique a diam quis, suscipit euismod ante. Praesent fringilla tincidunt augue facilisis condimentum. Nam eget congue nisl. Sed hendrerit, arcu convallis gravida scelerisque, purus lectus scelerisque enim, nec gravida sapien diam eget sem. In sed sem et diam condimentum malesuada? Nam cursus venenatis posuere. Praesent id purus turpis. Curabitur pretium arcu nec diam interdum, id elementum sapien ultricies. Fusce ornare magna et risus rhoncus; eu consectetur sem vulputate.</p>
</div>
{% endexample %}

### Horizonal

A horizontal variant of a collapse can be invoked by placing a class of `width` on the collapse target, or by using the data attribute `data-cfw-collapse-horizontal="true"` on the trigger.  A child container with a fixed dimension width (not a percentage) is needed for proper animation.

{% example html %}
<button type="button" class="btn btn-outline-primary" data-cfw="collapse" data-cfw-collapse-toggle="collapseEx2" data-cfw-collapse-horizontal="true">Collapse <span class="caret"></span></button>
<div class="collapse width" data-cfw-collapse-target="collapseEx2">
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

Add `data-cfw="collapse"` and a `data-cfw-collapse-toggle` with a selector (jQuery style) or string value to the toggle/trigger element to automatically assign control of a collapsible element.
If using a string value, then assign a `data-cfw-collapse-target` attribute, with a matching value to the element to apply the collapse to.
Be sure to add the class `collapse` to the collapsible element.
If you'd like it to default open, add the additional class `open` to the toggle.

### Via JavaScript

Enable manually with:

{% highlight js %}
$('#myCollapse').CFW_Collapse();
{% endhighlight %}

### Options

Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-cfw-collapse`, as in `data-cfw-collapse-animate="false"`.

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
            <td>toggle</td>
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
            <td>speed</td>
            <td>integer</td>
            <td>350</td>
            <td>Speed of animation (milliseconds) - corresponds the animation speed specified in CSS.</td>
        </tr>
        <tr>
            <td>follow</td>
            <td>boolean</td>
            <td>false</td>
            <td>If browser focus should move when a collapse toggle is activated.</td>
        </tr>
        <tr>
            <td>horizontal</td>
            <td>boolean</td>
            <td>false</td>
            <td>Use a horizontal transition instead of the default vertical transition.</td>
        </tr>
        <tr>
            <td>hidden</td>
            <td>boolean</td>
            <td>true</td>
            <td>Use the <code>aria-hidden</code> attribute on the target container to indicate visibility status to screen readers.</td>
        </tr>
    </tbody>
    </table>
</div> <!-- /.table-responsive -->

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

### Events

Event callbacks happen on the toggle/trigger element.
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
</div> <!-- /.table-responsive -->

{% highlight js %}
$('#myCollapse').on('afterHide.cfw.collapse', function () {
  // do something...
});
{% endhighlight %}