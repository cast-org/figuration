---
layout: docs
title: Popover
subtitle: popover.js
group: widgets
---

A more robust version of a tooltip, that allows for larger pieces of content or interactive functionality.

{% callout info %}
#### Widget Dependencies

Popover requires the following:

* [Tooltip widget]({{ site.baseurl}}/widgets/tooltip/) for the base functionality.
* [Drag widget]({{ site.baseurl}}/widgets/drag/) for drag functionality.
{% endcallout %}
{:.cf-callout-dep}

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Overview
Important notes about using the popover widget:

- Specify `container: 'body'` to avoid rendering problems in more complex components (like our input groups, button groups, etc).
- Triggering popovers on hidden elements will not work.
- Popovers for `.disabled` or `disabled` elements must be triggered on a wrapper element.
- When triggered from hyperlinks that span multiple lines, popovers will be centered. Use `white-space: nowrap;` on your `<a>`s to avoid this behavior.

## Examples

### Static Popover

Four options are available: top, right, bottom, and left aligned.

<div class="cf-example cf-example-bottom cf-example-popover">
    <div class="popover top">
        <h3 class="popover-title">Popover top</h3>
        <div class="popover-content">
            <p>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
        </div>
        <div class="popover-arrow"></div>
    </div>

    <div class="popover right">
        <h3 class="popover-title">Popover right</h3>
        <div class="popover-content">
            <p>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
        </div>
        <div class="popover-arrow"></div>
    </div>

    <div class="popover bottom">
        <h3 class="popover-title">Popover bottom</h3>
        <div class="popover-content">
            <p>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
        </div>
        <div class="popover-arrow"></div>
    </div>

    <div class="popover left">
        <h3 class="popover-title">Popover left</h3>
        <div class="popover-content">
            <p>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
        </div>
        <div class="popover-arrow"></div>
    </div>
</div>

### Four Directions

{% example html %}
<button type="button" class="btn" data-cfw="popover" data-cfw-popover-container="body" data-cfw-popover-placement="top" data-cfw-popover-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
  Popover on top
</button>

<button type="button" class="btn" data-cfw="popover" data-cfw-popover-container="body" data-cfw-popover-placement="right" data-cfw-popover-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
  Popover on right
</button>

<button type="button" class="btn" data-cfw="popover" data-cfw-popover-container="body" data-cfw-popover-placement="bottom" data-cfw-popover-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
  Popover on bottom
</button>

<button type="button" class="btn" data-cfw="popover" data-cfw-popover-container="body" data-cfw-popover-placement="left" data-cfw-popover-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
  Popover on left
</button>
{% endexample %}

### Default Toggle Example

{% example html %}
<button type="button" class="btn btn-info" data-cfw="popover" title="Click Popover Example" data-cfw-popover-content="Click the trigger or close button to close me." data-cfw-popover-placement="right">Click to toggle popover</button>
{% endexample %}

### Hover Example

{% example html %}
<button type="button" class="btn btn-info" id="cf-example-hover-popover" data-cfw="popover" title="Hover Popover Example" data-cfw-popover-content="Stop hovering over the trigger or the popover to auto-close." data-cfw-popover-placement="right" data-cfw-popover-trigger="hover focus">Hover/focus to show popover</button>
{% endexample %}

<script>
    $('#cf-example-hover-popover').on('click', function(){
        return false;
    });
</script>

### Draggable Example

Allow users to move popovers around the screen by enabling the `drag` option.  Drag support mouse, keyboard (with arrow keys), and touch movement.

{% example html %}
<button type="button" class="btn btn-info" data-cfw="popover" title="Draggable Popover Example" data-cfw-popover-content="Click the trigger or close link to close me." data-cfw-popover-placement="right" data-cfw-popover-drag="true">Draggable popover</button>
{% endexample %}

### Popover with HTML

{% example html %}
<button type="button" class="btn btn-info" data-cfw="popover" data-cfw-popover-html="true" data-cfw-popover-placement="right" data-cfw-popover-content="<em>Popover</em> <u>with</u> <b>HTML</b>" title="<em>Popover</em> <u>with</u> <b>HTML</b>">Popover with HTML</button>
{% endexample %}

If using more complex HTML, using a data attribute might not be optimal.  A better option would be to use the Javascript options, or with a pre-generated popover, as shown in the following example.

{% example html %}
<button type="button" class="btn btn-info" id="html-popover">Popover with HTML</button>

<script>
$('#html-popover').CFW_Popover({
    html: true,
    title: '<em>Popover</em> <u>with</u> <b>HTML</b>',
    content: '<span aria-hidden="true">&middot;</span> <em>Popover</em> <u>with</u> <b>HTML</b>'
});
</script>
{% endexample %}

### Pre-generated Popover

Have a complex content that you would like to show in a popover, or one that is updated dynamically?  Create the popover and then link to it with the `toggle` option.

{% example html %}
<button type="button" class="btn btn-info" data-cfw="popover" data-cfw-popover-toggle="#popoverExample0" data-cfw-popover-placement="right">Show Popover</button>

<div class="popover" id="popoverExample0">
    <h3 class="popover-title">Popover title</h3>
    <div class="popover-content">
        <p>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
        <figure class="figure">
          <img src="{{ site.baseurl }}/assets/img/test.gif" class="figure-img img-responsive" alt="Sample image">
          <figcaption class="figure-caption">Sample image caption.</figcaption>
        </figure>
    </div>
    <div class="popover-arrow"></div>
</div>
{% endexample %}

### Custom Placement

Locate a popover anywhere you need with the `placement` option.

{% example html js %}
<button type="button" class="btn btn-info" id="cf-example-placed-popover" title="Custom placed popover" data-cfw-popover-content="Look, I am way over here!">Custom Placement Popover</button>
<script>
    $('#cf-example-placed-popover').CFW_Popover({
        placement : function(tip, trigger) {
            var $trigger = $(trigger);
            var loc = {};
            var pos = $trigger.offset();
            loc.top = pos.top;
            loc.left = pos.left + $trigger.parent().width() - $trigger.outerWidth();
            return loc;
        }
    });
</script>
{% endexample %}

### Viewport Constrainment

Keep popovers in their place with the `viewport` option.

{% example html js %}
<div class="container-viewport" id="viewport-popover">
    <p class="viewport-text">Viewport constraints for popovers.</p>

    <button class="btn btn-info popover-viewport-bottom" title="This should be shifted to the right">Shift Right</button>

    <button class="btn btn-info popover-viewport-right" title="This should be shifted down">Shift Down</button>

    <button class="btn btn-info float-right popover-viewport-bottom" title="This should be shifted to the left">Shift Left</button>

    <button class="btn btn-info popover-viewport-right btn-bottom" title="This should be shifted up">Shift Up</button>

    <button class="btn btn-info popover-viewport-drag btn-drag" title="This should be confined to the viewport box">Drag Test (click)</button>
</div>
<script>
    $('.popover-viewport-right').CFW_Popover({
        placement: 'right',
        viewport: {selector: '#viewport-popover', padding: 2}
    });
    $('.popover-viewport-bottom').CFW_Popover({
        placement: 'bottom',
        viewport: {selector: '#viewport-popover', padding: 2}
    });
    $('.popover-viewport-drag').CFW_Popover({
        drag: true,
        viewport: {selector: '#viewport-popover', padding: 2}
    });
</script>
{% endexample %}

## Usage

The popover widget, by default, generates content and markup on demand, and by default places popovers after their trigger element.

### Via Data Attributes

The required markup for a popover is only a `data-cfw="popover"` attribute and `title` or a `data-cfw-popover-content=""` on the HTML element you wish to have a popover. The generated markup of a popover is rather simple, though it does require a position (by default, set to top by the widget).

### Via JavaScript

Enable manually with:

{% highlight js %}
$('#myPopover').CFW_Popover();
{% endhighlight %}

### Close Triggers
Any element with a data attribute of `data-cfw-dismiss="popover"` within the popover element will act as a close trigger for the popover.  There can be multiple close triggers, such as a header/titlebar close and a cancel button in the footer.

### Draggable Popovers

The added functionality from the [Drag widget]({{ site.baseurl}}/widgets/drag/) allows for touch and mouse dragging to be available.

The drag event handlers will auto-enable when a `data-cfw-drag="popover"` trigger item is found within the popover item.  The `drag` option will insert a drag trigger into the popover element, resulting in invoking the drag handlers.

Draggable popovers will force the following settings:

- `container: 'body'`
- `trigger: 'click'`

### Options

Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-cfw-popover`, as in `data-cfw-popover-placement="right"`.

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
            <td>Either the selector (jQuery style), or the string related to the target popover having a <code>data-cfw-popover-target</code> attribute.</td>
        </tr>
        <tr>
            <td>animate</td>
            <td>boolean</td>
            <td>true</td>
            <td>If popover items should fade in and out.</td>
        </tr>
        <tr>
            <td>speed</td>
            <td>integer</td>
            <td>150</td>
            <td>Speed of animation (milliseconds) - corresponds the animation speed specified in CSS.</td>
        </tr>
        <tr>
            <td>follow</td>
            <td>boolean</td>
            <td>false</td>
            <td>If browser focus should move when a popover is activated - overridden to true when click trigger is used.</td>
        </tr>
        <tr>
            <td>placement</td>
            <td>string | object | function</td>
            <td>'top'</td>
            <td>
                <p>
                    <strong>string:</strong><br />
                    How to position the popover - top | bottom | left | right | auto.
                    <br />
                    When "auto" is specified, it will dynamically reorient the popover. For example, if placement is "auto left", the popover will display to the left when possible, otherwise it will display right.
                </p>
                <p>
                    <strong>object:</strong><br />
                    This is a way to custom position a popover in a specific place not handled by the standard placement locations.
                    A custom positioned popover is forced to using the <code>&lt;body&gt;</code> as the container to make positioning easier.
                    Object structure is: <code>placement: { top: 5, left: 10 }</code>, the same as jQuery offset.
                </p>
                <p>
                    <strong>function:</strong><br />
                    A function call can return either a string or object placement type.
                    The function allows access to the complete popover data-api, as well as passing the popover target and trigger as arguments.
                </p>
<pre>
function myPopoverAlign(tip, trigger) {
    // this - popover data-api
    // tip -> popover target
    // trigger -> popover trigger
}
</pre>
            </td>
        </tr>
        <tr>
            <td>trigger</td>
            <td>string</td>
            <td>'hover focus'</td>
            <td>How popover is triggered - click | hover | focus | manual. You may pass multiple triggers; separate them with a space. <code>manual</code> cannot be combined with any other trigger.</td>
        </tr>
        <tr>
            <td>delay</td>
            <td>number| object</td>
            <td>show:0, hide:250</td>
            <td>
                <p>Delay showing and hiding the popover (ms) - does not apply to manual trigger type.</p>
                <p>If a number is supplied, delay is applied to both hide/show.</p>
                Object structure is: <code>delay: { show: 500, hide: 100 }</code>
            </td>
        </tr>
        <tr>
            <td>container</td>
            <td>string | false</td>
            <td>false</td>
            <td>Appends the popover to a specific element. Example: <code>container: 'body'</code></td>
        </tr>
        <tr>
            <td>viewport</td>
            <td>string | object</td>
            <td>{ selector: 'body', padding: 0 }</td>
            <td>
                <p>Keeps the popover within the bounds of this element. Example: <code>viewport: '#viewport'</code> or <code>{ selector: '#viewport', padding: 0 }</code></p>
                <p>If a function is given, it is called with the triggering element DOM node as its only argument. The <code>this</code> context is set to the popover instance.</p>
            </td>
        </tr>
        <tr>
            <td>html</td>
            <td>boolean</td>
            <td>false</td>
            <td>Insert HTML into the popover. If false, jQuery's <code>text</code> method will be used to insert content into the DOM. Use text if you're worried about XSS attacks.</td>
        </tr>
        <tr>
            <td>closetext</td>
            <td>string</td>
            <td>'&lt;span aria-hidden="true" &gt;&amp;times;&lt;/span&gt;'</td>
            <td>Visible text for close links when using option <code>trigger: 'click'</code></td>
        </tr>
        <tr>
            <td>closesrtext</td>
            <td>string</td>
            <td>'Close'</td>
            <td>Screen reader only text alternative for close links when using option <code>trigger: 'click'</code></td>
        </tr>
        <tr>
            <td>toggle</td>
            <td>string</td>
            <td>null</td>
            <td>
                <p>If the popover item is already created, you can link to it using <code>data-cfw-popover-toggle="somePopover"</code>.</p>
                <p>The target popover item will then need the associated attribute <code>data-cfw-popover-target="somePopover"</code>.</p>
                <p>The proper role and ARIA attributes will be automatically created to link the trigger and target elements.</p>
            </td>
        </tr>
        <tr>
            <td>title</td>
            <td>string | function</td>
            <td>''</td>
            <td>Default title value if <code>title</code> attribute isn't present.</td>
        </tr>
        <tr>
            <td>content</td>
            <td>string | function</td>
            <td>''</td>
            <td>Default title value if <code>data-cfw-popover-content</code> attribute isn't present.</td>
        </tr>
        <tr>
            <td>unlink</td>
            <td>boolean</td>
            <td>false</td>
            <td>If the <code>unlink</code> method should be called when the popover is hidden.  This leaves the popover behind in the DOM.</td>
        </tr>
        <tr>
            <td>destroy</td>
            <td>boolean</td>
            <td>false</td>
            <td>If the <code>destroy</code> method should be called when the popover is hidden. This will remove the popover from the DOM.</td>
        </tr>
        <tr>
            <td>drag</td>
            <td>boolean</td>
            <td>false</td>
            <td>If the popover should have a drag handle inserted.</td>
        </tr>
        <tr>
            <td>dragtext</td>
            <td>string</td>
            <td>'&lt;span aria-hidden="true" &gt;+&lt;/span&gt;'</td>
            <td>Visible text for the auto-inserted drag handle.</td>
        </tr>
        <tr>
            <td>dragsrtext</td>
            <td>string</td>
            <td>'Drag'</td>
            <td>Screen reader only text alternative for the auto-inserted drag handle.</td>
        </tr>
        <tr>
            <td>dragstep</td>
            <td>integer</td>
            <td>10</td>
            <td>Pixel increment to move the popover when using arrow keys on a drag handle.</td>
        </tr>
        <tr>
            <td>activate</td>
            <td>boolean</td>
            <td>false</td>
            <td>Show the popover automatically at the end of initialization. This will force the <code>trigger</code> option to a setting of <code>'click'</code>.</td>
        </tr>
    </tbody>
    </table>
</div> <!-- /.table-responsive -->

### Methods

#### `.CFW_Popover(options)`
{:.no_toc}

Activates a popover on a given element. Accepts an optional options `object`.

{% highlight js %}
$('#myPopover').CFW_Popover({
    placement: 'right'
});
{% endhighlight %}

#### `.CFW_Popover('toggle')`
{:.no_toc}

Toggles a popover item to be shown or hidden.

#### `.CFW_Popover('show')`
{:.no_toc}

Shows an element's popover.

#### `.CFW_Popover('hide')`
{:.no_toc}

Hides an element's popover.

#### `.CFW_Popover('unlink')`
{:.no_toc}

Hides the popover, removes events and attributes from both trigger and popover.

#### `.CFW_Popover('destroy')`
{:.no_toc}

Calls the `unlink` method, and then removes the popover from the DOM.

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
            <td>init.cfw.popover</td>
            <td>This event fires after the popover item is initialized.</td>
        </tr>
        <tr>
            <td>beforeShow.cfw.popover</td>
            <td>This event is fired immediately when the <code>show</code> method is called.  If the popover container is not present, it is created just after this event is called.</td>
        </tr>
        <tr>
            <td>afterShow.cfw.popover</td>
            <td>This event is fired when a popover has been made visible to the user (will wait for CSS transitions to complete).</td>
        </tr>
        <tr>
            <td>beforeHide.cfw.popover</td>
            <td>This event is fired immediately when the <code>hide</code> method is called.</td>
        </tr>
        <tr>
            <td>afterHide.cfw.popover</td>
            <td>This event is fired when a popover has been hidden from the user (will wait for CSS transitions to complete).</td>
        </tr>
        <tr>
            <td>inserted.cfw.popover</td>
            <td>This event is fired after the <code>beforeShow.cfw.popover</code> event when the popover has been added to the DOM.</td>
        </tr>
        <tr>
            <td>dragStart.cfw.popover</td>
            <td>This event is fired at the start of the drag action.</td>
        </tr>
        <tr>
            <td>dragEnd.cfw.popover</td>
            <td>This event is fired at the end of the drag action.</td>
        </tr>
        <tr>
            <td>beforeUnlink.cfw.popover</td>
            <td>This event is fired immediately when the <code>unlink</code> method is called. This event can occur after the <code>beforeHide</code> event if set to automatically unlink, or before if called via method.</td>
        </tr>
        <tr>
            <td>afterUnlink.cfw.popover</td>
            <td>This event is fired when a popover item has been unlinked from its trigger item and the data-api removed. This event can occur after the <code>afterHide</code> event when invoked from the <code>unlink</code> method, or before if set to automatically unlink.</td>
        </tr>
        <tr>
            <td>destroy.cfw.popover</td>
            <td>This event is fired immediately before the popover item is removed from the DOM.</td>
        </tr>
    </tbody>
    </table>
</div> <!-- /.table-responsive -->

{% highlight js %}
$('#myPopover').on('afterHide.cfw.popover', function () {
  // do something...
});
{% endhighlight %}

### Server-side Apps

Popovers are designed to hopefully work with server side applications, such as Apache Wicket, and other instances where the server-side application might need to create or update the popover content after the initial page load.

A quick example:<br />
<ol>
    <li>An item with an event handler that makes a callback to create a new popover is interacted with.</li>
    <li>
        Call as needed:<br />
        <ul>
            <li><code>$('#myPopover').CFW_Popover('hide');</code></li>
            <li>or <code>$('#myPopover').CFW_Popover('unlink');</code></li>
            <li>or <code>$('#myPopover').CFW_Popover('destroy');</code></li>
        </ul>
    </li>
    <li>Update/create the popover object and insert into DOM.</li>
    <li>Initialize the popover: <code>$('#myPopover').CFW_Popover(options);</code> with desired options.</li>
    <li>Show popover: <code>$('#myPopover').CFW_Popover('show');</code></li>
</ol>

## Accessibility

### Key Commands

The following key commands are handled when focus is inside the popover:

- <kbd>Esc</kbd> - Close the popover

### Focus Handling

Popovers have additional focus handling when using keyboard navigation.

If navigating from **above** the popover's trigger (typically with the `tab` key), when the trigger becomes focused, focus will be moved from the trigger to the **top of the popover**.

If navigating from **below** the popover's trigger (typically with the `shift`-`tab` key combination), when the trigger is focused, focus will be moved from the trigger to the **last focusable item** inside the popover.

When navigating **forward**, out the *bottom* of the popover, the focus will be moved to the next focusable item in the document relative to the trigger.  This is done so that if the `container` option is used, the focus will move to next logical item.  Otherwise, when using `container: body`, the focus will potentially drop off the end of the HTML document, leaving a keyboard user in an akward situation.

When navigating **backward**, out the *top* of the popover, the focus will be moved to the preceding focusable item in the document relative to the trigger.

This will not necessarily work with some assistive technologies reading modes.
