---
layout: docs
title: Tooltip
subtitle: tooltip.js
description: Add stylized tooltips to items for contextual or informational support.
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
- When triggered from hyperlinks that span multiple lines, tooltips will be centered. Use `.text-nowrap` on your `<a>`s to avoid this behavior.

## Examples

### Static Tooltip

Four options are available: top, forward (right), bottom, and reverse (left) aligned.

**Heads up!** When using the right-to-left, `rtl`, variant of Figuration all horizontal directions will be reversed.  Meaning left becomes right, and vice-versa.

<div class="cf-example cf-example-bottom cf-example-tooltip">
    <div class="tooltip top" role="tooltip">
        <div class="tooltip-body">
            Tooltip on the top
        </div>
        <div class="tooltip-arrow"></div>
    </div>

    <div class="tooltip forward" role="tooltip">
        <div class="tooltip-body">
            Forward tooltip
        </div>
        <div class="tooltip-arrow"></div>
    </div>

    <div class="tooltip bottom" role="tooltip">
        <div class="tooltip-body">
            Tooltip on the bottom
        </div>
        <div class="tooltip-arrow"></div>
    </div>

    <div class="tooltip reverse" role="tooltip">
        <div class="tooltip-body">
            Reverse tooltip
        </div>
        <div class="tooltip-arrow"></div>
    </div>
</div>

### Four Directions

{% capture example %}
<button type="button" class="btn" data-cfw="tooltip" data-cfw-tooltip-container="body" data-cfw-tooltip-placement="top" title="Tooltip on top">
    Tooltip on top
</button>

<button type="button" class="btn" data-cfw="tooltip" data-cfw-tooltip-container="body" data-cfw-tooltip-placement="forward" title="Forward tooltip">
    Forward tooltip
</button>

<button type="button" class="btn" data-cfw="tooltip" data-cfw-tooltip-container="body" data-cfw-tooltip-placement="bottom" title="Tooltip on bottom">
    Tooltip on bottom
</button>

<button type="button" class="btn" data-cfw="tooltip" data-cfw-tooltip-container="body" data-cfw-tooltip-placement="reverse" title="Reverse tooltip">
    Reverse tooltip
</button>
{% endcapture %}
{% include example.html content=example %}

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

{% capture example %}
<button type="button" class="btn btn-info" data-cfw="tooltip" title="Click the trigger or close button to close me." data-cfw-tooltip-placement="forward" data-cfw-tooltip-trigger="click">Click to toggle tooltip</button>
{% endcapture %}
{% include example.html content=example %}

### Tooltip with HTML

{% capture example %}
<button type="button" class="btn btn-info" data-cfw="tooltip" data-cfw-tooltip-html="true" data-cfw-tooltip-placement="forward" title="<em>Tooltip</em> <u>with</u> <b>HTML</b>">Tooltip with HTML</button>
{% endcapture %}
{% include example.html content=example %}

When using more complex HTML, using a data attribute might not be optimal.  A better option would be to use the Javascript options.

{% capture example %}
<button type="button" class="btn btn-info" id="html-tooltip">Tooltip with HTML</button>

<script>
$('#html-tooltip').CFW_Tooltip({
    html: true,
    placement: 'forward',
    title: '<span aria-hidden="true">&middot;</span> <em>Tooltip</em> <u>with</u> <b>HTML</b>'
});
</script>
{% endcapture %}
{% include example.html content=example %}

### Viewport Constrainment

Keep tooltips in their place with the `viewport` option.

{% capture example %}
<div class="container-viewport" id="viewport-tooltip">
    <p class="viewport-text">Test viewport constraints for tooltips.</p>

    <button type="button" class="btn tooltip-viewport-bottom" title="This should be shifted to the right">Shift Right</button>

    <button type="button" class="btn tooltip-viewport-right" title="This should be shifted down">Shift Down</button>

    <button type="button" class="btn float-end tooltip-viewport-bottom" title="This should be shifted to the left">Shift Left</button>

    <button type="button" class="btn tooltip-viewport-right btn-bottom" title="This should be shifted up">Shift Up</button>
</div>
<script>
    $('.tooltip-viewport-right').CFW_Tooltip({
        placement: 'forward',
        viewport: '#viewport-tooltip',
        padding: 2
    });
    $('.tooltip-viewport-bottom').CFW_Tooltip({
        placement: 'bottom',
        viewport: '#viewport-tooltip',
        padding: 2
    });
</script>
{% endcapture %}
{% include example.html content=example %}

### Disabled Elements

Elements with the `disabled` attribute aren't interactive, meaning users cannot hover or click them to trigger a tooltip (or popover). As a workaround, you'll want to trigger the tooltip from a wrapper `<div>` or `<span>` and override the `pointer-events` on the disabled element.

{% capture example %}
<span class="d-inline-block" data-cfw="tooltip" title="Tooltip for disabled item">
    <button class="btn btn-primary" style="pointer-events: none;" type="button" disabled>Disabled button</button>
</span>
{% endcapture %}
{% include example.html content=example %}

## Usage

The tooltip widget, by default, generates content and markup on demand, and by default places tooltips after their trigger element.

### Via Data Attributes

The required markup for a tooltip is only a `data-cfw="tooltip"` attribute and `title` on the HTML element you wish to have a tooltip. The generated markup of a tooltip is rather simple, though it does require a position (by default, set to top by the widget).

If the tooltip item is already created, you can link to it using <code>data-cfw-tooltip-target="#someTooltip"</code>, or <code>href="#someTooltip"</code>. The proper `role` and `aria-` attributes will be automatically created to link the trigger and target elements.

### Via JavaScript

Enable manually with:

{% highlight js %}
$('#myTooltip').CFW_Tooltip();
{% endhighlight %}

### Close Triggers

Any element with a data attribute of `data-cfw-dismiss="tooltip"` within the tooltip element will act as a close trigger for the tooltip.

### Options

Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-cfw-tooltip`, as in `data-cfw-tooltip-placement="forward"`.

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
                <td>null</td>
                <td>The selector (jQuery style) of the target tooltip.</td>
            </tr>
            <tr>
                <td>animate</td>
                <td>boolean</td>
                <td>true</td>
                <td>If tooltip items should fade in and out.</td>
            </tr>
            <tr>
                <td>placement</td>
                <td>string | object | function</td>
                <td>'top'</td>
                <td>
                    <p>
                        <strong>string:</strong><br />
                        How to position the tooltip - top | bottom | reverse | forward| auto.
                        <br />
                        When "auto" is specified, it will dynamically reorient the tooltip. For example, if placement is "auto reverse", the tooltip will display to the left when possible, otherwise it will display right. (Opposite horizontal directions apply for <code>rtl</code> mode.)
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
                <td>string | function</td>
                <td>'body'</td>
                <td>
                    <p>Keep the tooltip within the bounds of this element. Example: <code>viewport: '#viewport'</code>.</p>
                    <p>If a function is given, it is called with the triggering element DOM node as its only argument. The <code>this</code> context is set to the tooltip instance.</p>
                </td>
            </tr>
            <tr>
                <td>padding</td>
                <td>integer</td>
                <td>0</td>
                <td>Spacing, in pixels, to keep the tooltip away from the viewport edge.</td>
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
                <td>target</td>
                <td>string</td>
                <td>null</td>
                <td>The selector (jQuery style) of the target tooltip.</td>
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
                <td>dispose</td>
                <td>boolean</td>
                <td>false</td>
                <td>If the <code>dispose</code> method should be called when the tooltip is hidden. This will remove the tooltip from the DOM.</td>
            </tr>
            <tr>
                <td>show</td>
                <td>boolean</td>
                <td>false</td>
                <td>Show the tooltip automatically at the end of initialization. This will force the <code>trigger</code> option to a setting of <code>'click'</code>.</td>
            </tr>
        </tbody>
    </table>
</div>

### Methods

#### `.CFW_Tooltip(options)`
{:.no_toc}

Activates a tooltip on a given element. Accepts an optional options `object`.

{% highlight js %}
$('#myTooltip').CFW_Tooltip({
    placement: 'forward'
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

#### `.CFW_Tooltip('dispose')`
{:.no_toc}

Calls the `unlink` method, and then removes the tooltip from the DOM.

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
                <td>dispose.cfw.tooltip</td>
                <td>This event is fired immediately before the tooltip item is removed from the DOM.</td>
            </tr>
        </tbody>
    </table>
</div>

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
            <li>or <code>$('#myTooltip').CFW_Tooltip('dispose');</code></li>
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

If navigating from **above** the tooltip's trigger (typically with the `tab` key), the trigger becomes focused, the next **forward** focus will move from the trigger to the **first focusable item** inside the tooltip.

If navigating from **below** the tooltip's trigger (typically with the `shift`-`tab` key combination), when the trigger is focused, focus will be moved from the trigger to the **last focusable item** inside the tooltip.

When navigating **forward**, out the *bottom* of the tooltip, the focus will be moved to the next focusable item in the document relative to the trigger.  This is done so that if the `container` option is used, the focus will move to next logical item.  Otherwise, when using `container: body`, the focus will potentially drop off the end of the HTML document, leaving a keyboard user in an akward situation.

When navigating **backward**, out the *top* of the tooltip, the focus will be moved to the trigger.

This will not necessarily work with some assistive technologies reading modes.


## SASS Reference

### Variables

The available [Customization options]({{ site.baseurl }}/{{ site.docs_version }}/get-started/options/), or Sass variables, that can be customized for the tooltip component.

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
                <td><code>$enable-tooltip</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the tooltip component classes.
                    Smaller segements of the tooltip component classes can be disabled with the following <code>$enable-*</code> variables.
                </td>
            </tr>
            <tr>
                <td><code>$enable-tooltip-arrow</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation tooltip arrows classes.
                </td>
            </tr>
            <tr>
                <td><code>$enable-tooltip-body</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation tooltip body class.
                </td>
            </tr>
            <tr>
                <td><code>$enable-tooltip-close</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation tooltip close button class.
                </td>
            </tr>
            <tr>
                <td><code>$tooltip-max-width</code></td>
                <td>string</td>
                <td><code>rem(208px)</code> (13rem)</td>
                <td>
                    Max width for tooltip container.
                </td>
            </tr>
            <tr>
                <td><code>$tooltip-padding-y</code></td>
                <td>string</td>
                <td><code>.25rem</code></td>
                <td>
                    Vertical padding for tooltip body.
                </td>
            </tr>
            <tr>
                <td><code>$tooltip-padding-x</code></td>
                <td>string</td>
                <td><code>.5rem</code></td>
                <td>
                    Horizontal padding for tooltip body.
                </td>
            </tr>
            <tr>
                <td><code>$tooltip-padding-x</code></td>
                <td>string</td>
                <td><code>.5rem</code></td>
                <td>
                    Horizontal padding for tooltip body.
                </td>
            </tr>
            <tr>
                <td><code>$tooltip-margin</code></td>
                <td>string</td>
                <td><code>.125rem</code></td>
                <td>
                    Spacing offset for tooltip container.
                </td>
            </tr>
            <tr>
                <td><code>$tooltip-font-size</code></td>
                <td>string</td>
                <td><code>($font-size-base * .875)</code></td>
                <td>
                    Font size for tooltip container.
                </td>
            </tr>
            <tr>
                <td><code>$tooltip-bg</code></td>
                <td>string</td>
                <td><code>$uibase-900</code></td>
                <td>
                    Background color for tooltip body.
                </td>
            </tr>
            <tr>
                <td><code>$tooltip-color</code></td>
                <td>string</td>
                <td><code>color-auto-contrast($uibase-900)</code></td>
                <td>
                    Text color for tooltip body.
                </td>
            </tr>
            <tr>
                <td><code>$tooltip-opactity</code></td>
                <td>string</td>
                <td><code>.9</code></td>
                <td>
                    Opacity for tooltip container.
                </td>
            </tr>
            <tr>
                <td><code>$tooltip-border-radius</code></td>
                <td>string</td>
                <td><code>$border-radius</code></td>
                <td>
                    Border radius for tooltip body.
                </td>
            </tr>
            <tr>
                <td><code>$tooltip-close-padding-y</code></td>
                <td>string</td>
                <td><code>.125rem</code></td>
                <td>
                    Vertical padding for tooltip close button.
                </td>
            </tr>
            <tr>
                <td><code>$tooltip-close-padding-x</code></td>
                <td>string</td>
                <td><code>.3125rem</code></td>
                <td>
                    Horizontal padding for tooltip close button.
                </td>
            </tr>
            <tr>
                <td><code>$tooltip-close-color</code></td>
                <td>string</td>
                <td><code>$tooltip-color</code></td>
                <td>
                    Text color for tooltip close button.
                </td>
            </tr>
            <tr>
                <td><code>$tooltip-close-opacity</code></td>
                <td>string</td>
                <td><code>$close-opacity</code></td>
                <td>
                    Opacity for tooltip close button.
                </td>
            </tr>
            <tr>
                <td><code>$tooltip-close-hover-color</code></td>
                <td>string</td>
                <td><code>$tooltip-color</code></td>
                <td>
                    Text color for tooltip close button in hover and focus states.
                </td>
            </tr>
            <tr>
                <td><code>$tooltip-close-hover-opacity</code></td>
                <td>string</td>
                <td><code>$close-hover-opacity</code></td>
                <td>
                    Opacity for tooltip close button in hover and focus states.
                </td>
            </tr>
            <tr>
                <td><code>$tooltip-arrow-width</code></td>
                <td>string</td>
                <td><code>.75rem</code></td>
                <td>
                    Width for tooltip arrow, when placed on top or bottom. Height when used on sides.
                </td>
            </tr>
            <tr>
                <td><code>$tooltip-arrow-height</code></td>
                <td>string</td>
                <td><code>.375rem</code></td>
                <td>
                    Height for tooltip arrow, when placed on top or bottom. Width when used on sides.
                </td>
            </tr>
            <tr>
                <td><code>$tooltip-arrow-color</code></td>
                <td>string</td>
                <td><code>$tooltip-bg</code></td>
                <td>
                    Background color for tooltip arrow.
                </td>
            </tr>
        </tbody>
    </table>
</div>

### Mixins

No mixins available.
