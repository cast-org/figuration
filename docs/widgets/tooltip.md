---
layout: docs
title: Tooltip
subtitle: tooltip.js
group: widgets
---

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Overview
Important notes about using the tooltip widget:

- Specify `container: 'body'` to avoid rendering problems in more complex components (like our input groups, button groups, etc).
- Triggering tooltips on hidden elements will not work.
- Tooltips for `.disabled` or `disabled` elements must be triggered on a wrapper element.
- When triggered from hyperlinks that span multiple lines, tooltips will be centered. Use `white-space: nowrap;` on your `<a>`s to avoid this behavior.

## Examples

### Static Tooltip

Four options are available: top, right, bottom, and left aligned.

<div class="cf-example cf-example-bottom cf-example-tooltip">
    <div class="tooltip top" role="tooltip">
        <div class="tooltip-inner">
            Tooltip on the top
        </div>
        <div class="tooltip-arrow"></div>
    </div>

    <div class="tooltip right" role="tooltip">
        <div class="tooltip-inner">
            Tooltip on the right
        </div>
        <div class="tooltip-arrow"></div>
    </div>

    <div class="tooltip bottom" role="tooltip">
        <div class="tooltip-inner">
            Tooltip on the bottom
        </div>
        <div class="tooltip-arrow"></div>
    </div>

    <div class="tooltip left" role="tooltip">
        <div class="tooltip-inner">
            Tooltip on the left
        </div>
        <div class="tooltip-arrow"></div>
    </div>
</div>

### Four Directions

{% example html %}
<button type="button" class="btn" data-cfw="tooltip" data-cfw-tooltip-container="body" data-cfw-tooltip-placement="top" title="Tooltip on top">
    Tooltip on top
</button>

<button type="button" class="btn" data-cfw="tooltip" data-cfw-tooltip-container="body" data-cfw-tooltip-placement="right" title="Tooltip on right">
    Tooltip on right
</button>

<button type="button" class="btn" data-cfw="tooltip" data-cfw-tooltip-container="body" data-cfw-tooltip-placement="bottom" title="Tooltip on bottom">
    Tooltip on bottom
</button>

<button type="button" class="btn" data-cfw="tooltip" data-cfw-tooltip-container="body" data-cfw-tooltip-placement="left" title="Tooltip on left">
    Tooltip on left
</button>
{% endexample %}

### Live Demo

<div class="cf-example cf-example-bottom">
    <p>
        Lorem ipsum dolor sit amet,
        <a href="#" role="button" data-cfw="tooltip" title="Example tooltip">consectetur</a>
        adipiscing elit. Morbi a arcu felis. Ut vulputate quis lectus id
        <a href="#" role="button" data-cfw="tooltip" title="Another tooltip">tristique</a>.
        Donec mattis justo eu turpis facilisis interdum. Nulla facilisi. Suspendisse potenti. In lobortis, est ut aliquam blandit, felis lacus tempor magna, nec
        <a href="#" role="button" data-cfw="tooltip" title="Even more tooltip">pharetra</a>
         libero odio nec enim.
    </p>
</div>

### Toggle Example

{% example html %}
<button type="button" class="btn btn-info" data-cfw="tooltip" title="Click the trigger or close button to close me." data-cfw-tooltip-placement="right" data-cfw-tooltip-trigger="click">Click to toggle tooltip</button>
{% endexample %}

### Tooltip with HTML

{% example html %}
<button type="button" class="btn btn-info" data-cfw="tooltip" data-cfw-tooltip-html="true" data-cfw-tooltip-placement="right" title="<em>Tooltip</em> <u>with</u> <b>HTML</b>">Tooltip with HTML</button>
{% endexample %}

When using more complex HTML, using a data attribute might not be optimal.  A better option would be to use the Javascript options.

{% example html %}
<button type="button" class="btn btn-info" id="html-tooltip">Tooltip with HTML</button>

<script>
$('#html-tooltip').CFW_Tooltip({
    html: true,
    placement: 'right',
    title: '<span aria-hidden="true">&middot;</span> <em>Tooltip</em> <u>with</u> <b>HTML</b>'
});
</script>
{% endexample %}

### Viewport Constrainment

Keep tooltips in their place with the `viewport` option.

{% example html js %}
<div class="container-viewport" id="viewport-tooltip">
    <p class="viewport-text">Test viewport constraints for tooltips.</p>

    <button type="button" class="btn btn-default tooltip-viewport-bottom" title="This should be shifted to the right">Shift Right</button>

    <button type="button" class="btn btn-default tooltip-viewport-right" title="This should be shifted down">Shift Down</button>

    <button type="button" class="btn btn-default float-right tooltip-viewport-bottom" title="This should be shifted to the left">Shift Left</button>

    <button type="button" class="btn btn-default tooltip-viewport-right btn-bottom" title="This should be shifted up">Shift Up</button>
</div>
<script>
    $('.tooltip-viewport-right').CFW_Tooltip({
        placement: 'right',
        viewport: {selector: '#viewport-tooltip', padding: 2}
    });
    $('.tooltip-viewport-bottom').CFW_Tooltip({
        placement: 'bottom',
        viewport: {selector: '#viewport-tooltip', padding: 2}
    });
</script>
{% endexample %}

## Usage

The tooltip widget, by default, generates content and markup on demand, and by default places tooltips after their trigger element.

### Via Data Attributes

The required markup for a tooltip is only a `data-cfw="tooltip"` attribute and `title` on the HTML element you wish to have a tooltip. The generated markup of a tooltip is rather simple, though it does require a position (by default, set to top by the widget).

### Via JavaScript

Enable manually with:

{% highlight js %}
$('#myTooltip').CFW_Tooltip();
{% endhighlight %}

### Close Triggers

Any element with a data attribute of `data-cfw-dismiss="tooltip"` within the tooltip element will act as a close trigger for the tooltip.

### Options

Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-cfw-tooltip`, as in `data-cfw-tooltip-placement="right"`.

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
            <td>Either the selector (jQuery style), or the string related to the target tooltip having a <code>data-cfw-tooltip-target</code> attribute.</td>
        </tr>
        <tr>
            <td>animate</td>
            <td>boolean</td>
            <td>true</td>
            <td>If tooltip items should fade in and out.</td>
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
            <td>If browser focus should move when a tooltip is activated - overridden to true when click trigger is used.</td>
        </tr>
        <tr>
            <td>placement</td>
            <td>string | object | function</td>
            <td>'top'</td>
            <td>
                <p>
                    <strong>string:</strong><br />
                    How to position the tooltip - top | bottom | left | right | auto.
                    <br />
                    When "auto" is specified, it will dynamically reorient the tooltip. For example, if placement is "auto left", the tooltip will display to the left when possible, otherwise it will display right.
                </p>
                <p>
                    <strong>object:</strong><br />
                    This is a way to custom position a tooltip in a specific place not handled by the standard placement locations.
                    A custom positioned tooltip is forced to using the <code>&lt;body&gt;</code> as the container to make positioning easier.
                    Object structure is: <code>placement: { top: 5, left: 10 }</code>, the same as jQuery offset.
                </p>
                <p>
                    <strong>function:</strong><br />
                    A function call can return either a string or object placement type.
                    The function allows access to the complete tooltip data-api, as well as passing the tooltip target and trigger as arguments.
                </p>
<pre>
function myTipAlign(tip, trigger) {
    // this - tooltip data-api
    // tip -> tooltip target
    // trigger -> tooltip trigger
}
</pre>
            </td>
        </tr>
        <tr>
            <td>trigger</td>
            <td>string</td>
            <td>'hover focus'</td>
            <td>How tooltip is triggered - click | hover | focus | manual. You may pass multiple triggers; separate them with a space. <code>manual</code> cannot be combined with any other trigger.</td>
        </tr>
        <tr>
            <td>delay</td>
            <td>number| object</td>
            <td>show:0, hide:250</td>
            <td>
                <p>Delay showing and hiding the tooltip (ms) - does not apply to manual trigger type.</p>
                <p>If a number is supplied, delay is applied to both hide/show.</p>
                Object structure is: <code>delay: { show: 500, hide: 100 }</code>
            </td>
        </tr>
        <tr>
            <td>container</td>
            <td>string | false</td>
            <td>false</td>
            <td>Appends the tooltip to a specific element. Example: <code>container: 'body'</code></td>
        </tr>
        <tr>
            <td>viewport</td>
            <td>string | object | function</td>
            <td>{ selector: 'body', padding: 0 }</td>
            <td>
                <p>Keeps the tooltip within the bounds of this element. Example: <code>viewport: '#viewport'</code> or <code>{ selector: '#viewport', padding: 0 }</code></p>
                <p>If a function is given, it is called with the triggering element DOM node as its only argument. The <code>this</code> context is set to the tooltip instance.</p>
            </td>
        </tr>
        <tr>
            <td>html</td>
            <td>boolean</td>
            <td>false</td>
            <td>
                <p>Allow HTML in the tooltip.</p>
                <p>If false, jQuery's <code>text</code> method will be used to insert content into the DOM. Use text if you're worried about XSS attacks.</p>
            </td>
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
                <p>If the tooltip item is already created, you can link to it using <code>data-cfw-tooltip-toggle="someTooltip"</code>.</p>
                <p>The target tooltip item will then need the associated attribute <code>data-cfw-tooltip-target="someTooltip"</code>.</p>
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
            <td>unlink</td>
            <td>boolean</td>
            <td>false</td>
            <td>If the <code>unlink</code> method should be called when the tooltip is hidden.  This leaves the tooltip behind in the DOM.</td>
        </tr>
        <tr>
            <td>destroy</td>
            <td>boolean</td>
            <td>false</td>
            <td>If the <code>destroy</code> method should be called when the tooltip is hidden. This will remove the tooltip from the DOM.</td>
        </tr>
        <tr>
            <td>activate</td>
            <td>boolean</td>
            <td>false</td>
            <td>Show the tooltip automatically at the end of initialization. This will force the <code>trigger</code> option to a setting of <code>'click'</code>.</td>
        </tr>
    </tbody>
    </table>
</div> <!-- /.table-responsive -->

### Methods

#### `.CFW_Tooltip(options)`
{:.no_toc}

Activates a tooltip on a given element. Accepts an optional options `object`.

{% highlight js %}
$('#myTooltip').CFW_Tooltip({
    placement: 'right'
});
{% endhighlight %}

#### `.CFW_Tooltip('toggle')`
{:.no_toc}

Toggles a tooltip item to be shown or hidden.

#### `.CFW_Tooltip('show')`
{:.no_toc}

Shows an element's tooltip.

#### `.CFW_Tooltip('hide')`
{:.no_toc}

Hides an element's tooltip.

#### `.CFW_Tooltip('unlink')`
{:.no_toc}

Hides the tooltip, removes events and attributes from both trigger and tooltip.

#### `.CFW_Tooltip('destroy')`
{:.no_toc}

Calls the `unlink` method, and then removes the tooltip from the DOM.

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
            <td>init.cfw.tooltip</td>
            <td>This event fires after the tooltip item is initialized.</td>
        </tr>
        <tr>
            <td>beforeShow.cfw.tooltip</td>
            <td>This event is fired immediately when the <code>show</code> method is called.  If the tooltip container is not present, it is created just after this event is called.</td>
        </tr>
        <tr>
            <td>afterShow.cfw.tooltip</td>
            <td>This event is fired when a tooltip has been made visible to the user (will wait for CSS transitions to complete).</td>
        </tr>
        <tr>
            <td>beforeHide.cfw.tooltip</td>
            <td>This event is fired immediately when the <code>hide</code> method is called.</td>
        </tr>
        <tr>
            <td>afterHide.cfw.tooltip</td>
            <td>This event is fired when a tooltip has been hidden from the user (will wait for CSS transitions to complete).</td>
        </tr>
        <tr>
            <td>inserted.cfw.tooltip</td>
            <td>This event is fired after the <code>beforeShow.cfw.tooltip</code> event when the tooltip has been added to the DOM.</td>
        </tr>
        <tr>
            <td>beforeUnlink.cfw.tooltip</td>
            <td>This event is fired immediately when the <code>unlink</code> method is called. This event can occur after the <code>beforeHide</code> event if set to automatically unlink, or before if called via method.</td>
        </tr>
        <tr>
            <td>afterUnlink.cfw.tooltip</td>
            <td>This event is fired when a tooltip item has been unlinked from its trigger item and the data-api removed. This event can occur after the <code>afterHide</code> event when invoked from the <code>unlink</code> method, or before if set to automatically unlink.</td>
        </tr>
        <tr>
            <td>destroy.cfw.tooltip</td>
            <td>This event is fired immediately before the tooltip item is removed from the DOM.</td>
        </tr>
    </tbody>
    </table>
</div> <!-- /.table-responsive -->

{% highlight js %}
$('#myTooltip').on('afterHide.cfw.tooltip', function () {
  // do something&hellip;
});
{% endhighlight %}

### Server-side Apps

Tooltips are designed to hopefully work with server side applications, such as Apache Wicket, and other instances where the server-side application might need to create or update the tooltip content after the initial page load.

A quick example:<br />
<ol>
    <li>An item with an event handler that makes a callback to create a new tooltip is interacted with.</li>
    <li>
        Call as needed:<br />
        <ul>
            <li><code>$('#myTooltip').CFW_Tooltip('hide');</code></li>
            <li>or <code>$('#myTooltip').CFW_Tooltip('unlink');</code></li>
            <li>or <code>$('#myTooltip').CFW_Tooltip('destroy');</code></li>
        </ul>
    </li>
    <li>Update/create the tooltip object and insert into DOM.</li>
    <li>Initialize the tooltip: <code>$('#myTooltip').CFW_Tooltip(options);</code> with desired options.</li>
    <li>Show tooltip: <code>$('#myTooltip').CFW_Tooltip('show');</code></li>
</ol>

## Accessibility

### Consider Keyboard and Assistive Technology Users

You should only add tooltips to HTML elements that are traditionally keyboard-focusable and interactive (such as links or form controls). Although arbitrary HTML elements (such as `<span>`s) can be made focusable by adding the `tabindex="0"` attribute, this will add potentially annoying and confusing tab stops on non-interactive elements for keyboard users. In addition, most assistive technologies currently do not announce the tooltip in this situation.

### Key Commands

The following key commands are handled when focus is inside the toolip:

- <kbd>Esc</kbd> - Close the tooltip (when using `trigger: click`)

### Focus Handling

Tooltips have additional focus handling when using keyboard navigation.

If navigating from **above** the tooltip's trigger (typically with the `tab` key), when the trigger becomes focused, focus will be moved from the trigger to the **top of the tooltip**.

If navigating from **below** the tooltip's trigger (typically with the `shift`-`tab` key combination), when the trigger is focused, focus will be moved from the trigger to the **last focusable item** inside the tooltip.

When navigating **forward**, out the *bottom* of the tooltip, the focus will be moved to the next focusable item in the document relative to the trigger.  This is done so that if the `container` option is used, the focus will move to next logical item.  Otherwise, when using `container: body`, the focus will potentially drop off the end of the HTML document, leaving a keyboard user in an akward situation.

When navigating **backward**, out the *top* of the tooltip, the focus will be moved to the preceding focusable item in the document relative to the trigger.

This will not necessarily work with some assistive technologies reading modes.
