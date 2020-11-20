---
layout: doc
title: Popover
subtitle: popover.js
description: A more robust version of a tooltip, that allows for larger pieces of content or interactive functionality.
group: widgets
toc: true
---

## Notices

{% capture callout %}
Widget Dependencies
{.h5}

Popover requires the following:

- [Tooltip widget]({{ site.path }}/{{ version.docs }}/widgets/tooltip/) for the base functionality.
- [Drag widget]({{ site.path }}/{{ version.docs }}/widgets/drag/) for drag functionality.
- The third-party library [Popper.js](https://popper.js.org/) to provide dynamic positioning and viewport detection.
{% endcapture %}
{% renderCallout, callout, "info", "cf-callout-dep" %}

## Overview
Important notes about using the popover widget:

- Specify `container: 'body'` to avoid rendering problems in more complex components (like our input groups, button groups, etc).
- Triggering popovers on hidden elements will not work.
- Popovers for `.disabled` or `disabled` elements must be triggered on a wrapper element.
- When triggered from anchors that wrap across multiple lines, popovers will be centered between the anchors' overall width. Use `white-space: nowrap;` on your `<a>`s to avoid this behavior.

## Examples

### Default Toggle Example

{% capture example %}
<button type="button" class="btn btn-info" data-cfw="popover" title="Click Popover Example" data-cfw-popover-content="Click the trigger or close button to close me." data-cfw-popover-placement="forward">Click to toggle popover</button>
{% endcapture %}
{% renderExample example %}

### Four Directions

Four options are available: top, forward( right), bottom, and reverse (left) aligned.

**Heads up!** When using the right-to-left, `rtl`, variant of Figuration all horizontal directions will be reversed.  Meaning left becomes right, and vice-versa.

{% capture example %}
<button type="button" class="btn" data-cfw="popover" data-cfw-popover-container="body" data-cfw-popover-placement="top" data-cfw-popover-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
  Popover on top
</button>

<button type="button" class="btn" data-cfw="popover" data-cfw-popover-container="body" data-cfw-popover-placement="forward" data-cfw-popover-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
  Forward popover
</button>

<button type="button" class="btn" data-cfw="popover" data-cfw-popover-container="body" data-cfw-popover-placement="bottom" data-cfw-popover-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
  Popover on bottom
</button>

<button type="button" class="btn" data-cfw="popover" data-cfw-popover-container="body" data-cfw-popover-placement="reverse" data-cfw-popover-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
  Reverse popover
</button>
{% endcapture %}
{% renderExample example %}

### Hover Example

{% capture example %}
<button type="button" class="btn btn-info" id="cf-example-hover-popover" data-cfw="popover" title="Hover Popover Example" data-cfw-popover-content="Stop hovering over the trigger or the popover to auto-close." data-cfw-popover-placement="forward" data-cfw-popover-trigger="hover focus">Hover/focus to show popover</button>
{% endcapture %}
{% renderExample example %}

<script>
  $('#cf-example-hover-popover').on('click', function(){
    return false;
  });
</script>

### Draggable Example

Allow users to move popovers around the screen by enabling the `drag` option.  Drag support mouse, keyboard (with arrow keys), and touch movement.

{% capture example %}
<button type="button" class="btn btn-info" data-cfw="popover" title="Draggable Popover Example" data-cfw-popover-content="Click the trigger or close link to close me." data-cfw-popover-placement="forward" data-cfw-popover-drag="true">Draggable popover</button>
{% endcapture %}
{% renderExample example %}

### Popover with HTML

{% capture example %}
<button type="button" class="btn btn-info" data-cfw="popover" data-cfw-popover-html="true" data-cfw-popover-placement="forward" data-cfw-popover-content="<em>Popover</em> <u>with</u> <b>HTML</b>" title="<em>Popover</em> <u>with</u> <b>HTML</b>">Popover with HTML</button>
{% endcapture %}
{% renderExample example %}

If using more complex HTML, using a data attribute might not be optimal.  A better option would be to use the Javascript options, or with a pre-generated popover, as shown in the following example.

{% capture example %}
<button type="button" class="btn btn-info" id="html-popover">Popover with HTML</button>

<script>
$('#html-popover').CFW_Popover({
  html: true,
  title: '<em>Popover</em> <u>with</u> <b>HTML</b>',
  content: '<span aria-hidden="true">&middot;</span> <em>Popover</em> <u>with</u> <b>HTML</b>'
});
</script>
{% endcapture %}
{% renderExample example %}

### Pre-generated Popover

Have a complex content that you would like to show in a popover, or one that is updated dynamically?  Create the popover and then link to it with the `target` option.

{% capture example %}
<button type="button" class="btn btn-info" data-cfw="popover" data-cfw-popover-target="#popoverExample0" data-cfw-popover-placement="forward">Show Popover</button>

<div class="popover" id="popoverExample0">
  <h3 class="popover-header">Popover title</h3>
  <div class="popover-body">
    <p>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
    <figure class="figure">
      <img src="{{ site.path }}/assets/{{ version.docs }}/img/test.gif" class="figure-img img-fluid" alt="Sample image">
      <figcaption class="figure-caption">Sample image caption.</figcaption>
    </figure>
  </div>
  <div class="popover-arrow"></div>
</div>
{% endcapture %}
{% renderExample example %}

### Custom Placement

Locate a popover anywhere you need with the `placement` option.

{% capture example %}
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
{% endcapture %}
{% renderExample example %}

### Viewport Constrainment

Keep popovers in their place with the `viewport` option.

{% capture example %}
<div class="container-viewport" id="viewport-popover">
  <p class="viewport-text">Viewport constraints for popovers.</p>
  <button type="button" class="btn btn-info popover-viewport-bottom" title="This should be shifted to the right">Shift Right</button>
  <button type="button" class="btn btn-info popover-viewport-right" title="This should be shifted down">Shift Down</button>
  <button type="button" class="btn btn-info float-end popover-viewport-bottom" title="This should be shifted to the left">Shift Left</button>
  <button type="button" class="btn btn-info popover-viewport-right btn-bottom" title="This should be shifted up">Shift Up</button>
  <button type="button" class="btn btn-info popover-viewport-drag btn-drag" title="This should be confined to the viewport box">Drag Test (click)</button>
</div>
<script>
  $('.popover-viewport-right').CFW_Popover({
    placement: 'forward',
    viewport: '#viewport-popover',
    padding: 2
  });
  $('.popover-viewport-bottom').CFW_Popover({
    placement: 'bottom',
    viewport: '#viewport-popover',
    padding: 2
  });
  $('.popover-viewport-drag').CFW_Popover({
    drag: true,
    viewport: '#viewport-popover',
    padding: 2
  });
</script>
{% endcapture %}
{% renderExample example %}

### Fixed Draggable

Create a `fixed` position draggable popover by overriding the popperConfig options with a `positionFixed: true` setting.

{% capture example %}
<button class="btn popover-drag-fixed btn-secondary" title="This should be confined to the window">Fixed Drag</button>
<script>
$('.popover-drag-fixed').CFW_Popover({
  drag: true,
  popperConfig: {
    positionFixed: true
  }
});
</script>
{% endcapture %}
{% renderExample example %}

If a `fixed` position draggable popover is constrained by a viewport, then it will not move when the container is scrolled, but will attempt to stay inside the viewport if the body is scrolled.

{% capture example %}
<div class="container-viewport container-viewport-scroll" id="viewport-popover-scroll">
  <p class="viewport-text">Test viewport constraints for popovers.</p>
  <button class="btn popover-viewport-drag-fixed-scroll btn-drag" title="This should be confined to the viewport box">Fixed Drag</button>
</div>
<script>
$('.popover-viewport-drag-fixed-scroll').CFW_Popover({
  placement: 'reverse',
  drag: true,
  viewport: '#viewport-popover-scroll',
  popperConfig: {
    positionFixed: true
  }
});
</script>
{% endcapture %}
{% renderExample example %}

### Disabled Elements

Elements with the `disabled` attribute aren't interactive, meaning users cannot hover or click them to trigger a popover (or tooltip). As a workaround, you'll want to trigger the popover from a wrapper `<div>` or `<span>` and override the `pointer-events` on the disabled element.

For disabled popover triggers, you may also prefer `data-cfw-popover-trigger="hover"` so that the popover appears as immediate visual feedback to your users as they may not expect to _click_ on a disabled element.

{% capture example %}
<span class="d-inline-block" data-cfw="popover" data-cfw-popover-content="Popover for disabled item">
  <button class="btn btn-primary" style="pointer-events: none;" type="button" disabled>Disabled button</button>
</span>
{% endcapture %}
{% renderExample example %}

## Usage

The popover widget, by default, generates content and markup on demand, and by default places popovers after their trigger element.

### Via Data Attributes

The required markup for a popover is only a `data-cfw="popover"` attribute and `title` or a `data-cfw-popover-content=""` on the HTML element you wish to have a popover. The generated markup of a popover is rather simple, though it does require a position (by default, set to top by the widget).

If the popover item is already created, you can link to it using <code>data-cfw-popover-target="#somePopover"</code>, or <code>href="#somePopover"</code>. The proper `role` and `aria-` attributes will be automatically created to link the trigger and target elements.

### Via JavaScript

Enable manually with:

{% capture highlight %}
$('#myPopover').CFW_Popover();
{% endcapture %}
{% renderHighlight highlight, "js" %}

### Close Triggers
Any element with a data attribute of `data-cfw-dismiss="popover"` within the popover element will act as a close trigger for the popover.  There can be multiple close triggers, such as a header/titlebar close and a cancel button in the footer.

### Draggable Popovers

The added functionality from the [Drag widget]({{ site.path }}/{{ version.docs }}/widgets/drag/) allows for touch and mouse dragging to be available.

The drag event handlers will auto-enable when a `data-cfw-drag="popover"` trigger item is found within the popover item.  The `drag` option will insert a drag trigger into the popover element, resulting in invoking the drag handlers.

Draggable popovers will force the following settings:

- `container: 'body'`
- `trigger: 'click'`

### Options

Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-cfw-popover`, as in `data-cfw-popover-placement="forward"`.

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
        <td>The selector of the target popover.</td>
      </tr>
      <tr>
        <td><code>display</code></td>
        <td>string</td>
        <td><code>block</code></td>
        <td>Value of CSS <code>display</code> rule when popover is visible.</td>
      </tr>
      <tr>
        <td><code>animate</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>If popover items should fade in and out.</td>
      </tr>
      <tr>
        <td><code>placement</code></td>
        <td>string | object | function</td>
        <td><code>'top'</code></td>
        <td>
          <p>
            <strong>string:</strong><br />
            How to position the popover - top | bottom | reverse | forward | auto.
            <br />
            When "auto" is specified with a directional value, it will dynamically reorient the popover. For example, if placement is "auto reverse", the popover will display to the left when possible, otherwise it will display right. (Opposite horizontal directions apply for <code>rtl</code> mode.)
            When just "auto" is specified, a best fit approach will be used.
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
        <td><code>trigger</code></td>
        <td>string</td>
        <td><code>'click'</code></td>
        <td>How popover is triggered - click | hover | focus | manual. You may pass multiple triggers; separate them with a space. <code>manual</code> cannot be combined with any other trigger.</td>
      </tr>
      <tr>
        <td><code>delay</code></td>
        <td>number| object</td>
        <td><code>show:0, hide:250</code></td>
        <td>
          <p>Delay showing and hiding the popover (ms) - does not apply to manual trigger type.</p>
          <p>If a number is supplied, delay is applied to both hide/show.</p>
          Object structure is: <code>delay: { show: 500, hide: 100 }</code>
        </td>
      </tr>
      <tr>
        <td><code>container</code></td>
        <td>string | false</td>
        <td><code>false</code></td>
        <td>Appends the popover to a specific element. Example: <code>container: 'body'</code></td>
      </tr>
      <tr>
        <td><code>viewport</code></td>
        <td>string | element | function</td>
        <td><code>'scrollParent'</code></td>
        <td>
          <p>Keeps the popover within the bounds of this element. Example: <code>viewport: '#viewport'</code>.</p>
          <p>If a function is given, it is called with the triggering element DOM node as its only argument. The <code>this</code> context is set to the popover instance.</p>
          <p>This option maps to the <code>.boundariesElement</code> option in Popper.js, so it will accept values of <code>'viewport'</code>, <code>'window'</code>, <code>'scrollParent'</code>, or an HTMLElement reference (JavaScript only). For more information refer to Popper.js's <a href="https://popper.js.org/docs/v1/#modifiers..preventOverflow.boundariesElement">preventOverflow docs</a>.</p>
        </td>
      </tr>
      <tr>
        <td><code>padding</code></td>
        <td>integer</td>
        <td><code>0</code></td>
        <td>Spacing, in pixels, to keep the popover away from the viewport edge.</td>
      </tr>
      <tr>
        <td><code>html</code></td>
        <td>boolean</td>
        <td><code>false</code></td>
        <td>Insert HTML into the popover. If false, jQuery's <code>text</code> method will be used to insert content into the DOM. Use text if you're worried about XSS attacks.</td>
      </tr>
      <tr>
        <td><code>closetext</code></td>
        <td>string</td>
        <td><code>'&lt;span aria-hidden="true" &gt;&amp;times;&lt;/span&gt;'</code></td>
        <td>Visible text for close links when using option <code>trigger: 'click'</code></td>
      </tr>
      <tr>
        <td><code>closesrtext</code></td>
        <td>string</td>
        <td><code>'Close'</code></td>
        <td>Screen reader only text alternative for close links when using option <code>trigger: 'click'</code></td>
      </tr>
      <tr>
        <td><code>title</code></td>
        <td>string | function</td>
        <td><code>''</code></td>
        <td>Default title value if <code>title</code> attribute isn't present.</td>
      </tr>
      <tr>
        <td><code>content</code></td>
        <td>string | function</td>
        <td><code>''</code></td>
        <td>Default title value if <code>data-cfw-popover-content</code> attribute isn't present.</td>
      </tr>
      <tr>
        <td><code>unlink</code></td>
        <td>boolean</td>
        <td><code>false</code></td>
        <td>If the <code>unlink</code> method should be called when the popover is hidden.  This leaves the popover behind in the DOM.</td>
      </tr>
      <tr>
        <td><code>dispose</code></td>
        <td>boolean</td>
        <td><code>false</code></td>
        <td>If the <code>dispose</code> method should be called when the popover is hidden. This will remove the popover from the DOM.</td>
      </tr>
      <tr>
        <td><code>drag</code></td>
        <td>boolean</td>
        <td><code>false</code></td>
        <td>If the popover should have a drag handle inserted.</td>
      </tr>
      <tr>
        <td><code>dragtext</code></td>
        <td>string</td>
        <td><code>'&lt;span aria-hidden="true" &gt;+&lt;/span&gt;'</code></td>
        <td>Visible text for the auto-inserted drag handle.</td>
      </tr>
      <tr>
        <td><code>dragsrtext</code></td>
        <td>string</td>
        <td><code>'Drag'</code></td>
        <td>Screen reader only text alternative for the auto-inserted drag handle.</td>
      </tr>
      <tr>
        <td><code>dragstep</code></td>
        <td>integer</td>
        <td><code>10</code></td>
        <td>Pixel increment to move the popover when using arrow keys on a drag handle.</td>
      </tr>
      <tr>
        <td><code>show</code></td>
        <td>boolean</td>
        <td><code>false</code></td>
        <td>Show the popover automatically at the end of initialization. This will force the <code>trigger</code> option to a setting of <code>'click'</code>.</td>
      </tr>
      <tr>
        <td><code>popperConfig</code></td>
        <td>null | object</td>
        <td><code>null</code></td>
        <td>Pass a customized <a href="https://popper.js.org/docs/v1/#Popper.Defaults">Popper.js configuration</a> that will override the default Popper.js configuration.</td>
      </tr>
    </tbody>
  </table>
</div>

{% capture highlight %}
$('#myPopover').CFW_Popover({
  placement: 'forward'
});
{% endcapture %}
{% renderHighlight highlight, "js" %}

### Methods

Method calls can be made on either the trigger or the target `<div class="popover">` element.

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
        <td>Toggles a popover item to be shown or hidden.</td>
      </tr>
      <tr>
        <td><code>show</code></td>
        <td>Shows an element's popover.</td>
      </tr>
      <tr>
        <td><code>hide</code></td>
        <td>Hides an element's popover.</td>
      </tr>
      <tr>
        <td><code>locateUpdate</code></td>
        <td>Update the positioning of a popover. Can be useful after an AJAX content update.</td>
      </tr>
      <tr>
        <td><code>unlink</code></td>
        <td>Hides the popover, removes events and attributes from both trigger and popover.</td>
      </tr>
      <tr>
        <td><code>dispose</code></td>
        <td>Calls the `unlink` method, and then removes the popover from the DOM.</td>
      </tr>
    </tbody>
  </table>
</div>

{% capture highlight %}
$('#myPopover').CFW_Popover('show');
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
        <td><code>init.cfw.popover</code></td>
        <td>This event fires after the popover item is initialized.</td>
      </tr>
      <tr>
        <td><code>beforeShow.cfw.popover</code></td>
        <td>This event is fired immediately when the <code>show</code> method is called.  If the popover container is not present, it is created just after this event is called.</td>
      </tr>
      <tr>
        <td><code>afterShow.cfw.popover</code></td>
        <td>This event is fired when a popover has been made visible to the user (will wait for CSS transitions to complete).</td>
      </tr>
      <tr>
        <td><code>beforeHide.cfw.popover</code></td>
        <td>This event is fired immediately when the <code>hide</code> method is called.</td>
      </tr>
      <tr>
        <td><code>afterHide.cfw.popover</code></td>
        <td>This event is fired when a popover has been hidden from the user (will wait for CSS transitions to complete).</td>
      </tr>
      <tr>
        <td><code>inserted.cfw.popover</code></td>
        <td>This event is fired after the <code>beforeShow.cfw.popover</code> event when the popover has been added to the DOM.</td>
      </tr>
      <tr>
        <td><code>dragStart.cfw.popover</code></td>
        <td>This event is fired at the start of the drag action.</td>
      </tr>
      <tr>
        <td><code>dragEnd.cfw.popover</code></td>
        <td>This event is fired at the end of the drag action.</td>
      </tr>
      <tr>
        <td><code>beforeUnlink.cfw.popover</code></td>
        <td>This event is fired immediately when the <code>unlink</code> method is called. This event can occur after the <code>beforeHide</code> event if set to automatically unlink, or before if called via method.</td>
      </tr>
      <tr>
        <td><code>afterUnlink.cfw.popover</code></td>
        <td>
          <p>This event is fired on the trigger element when a popover item has been unlinked from its trigger item and the data-api removed. This event can occur after the <code>afterHide</code> event when invoked from the <code>unlink</code> method, or before if set to automatically unlink.</p>
          <p>This event may need to be listened for using event delegation, since all <code>cfw.popover</code> namespaced events will be detached from the trigger element as part of the unlink process.</p>
        </td>
      </tr>
      <tr>
        <td><code>dispose.cfw.popover</code></td>
        <td>
          <p>This event is fired immediately before the popover item is removed from the DOM.</p>
          <p>This event may need to be listened for using event delegation, since all <code>cfw.popover</code> namespaced events will be detached from the trigger element as part of the unlink process.</p>
        </td>
      </tr>
    </tbody>
  </table>
</div>

{% capture highlight %}
$('#myPopover').on('afterHide.cfw.popover', function() {
  // do something...
});
{% endcapture %}
{% renderHighlight highlight, "js" %}

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
      <li>or <code>$('#myPopover').CFW_Popover('dispose');</code></li>
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

If navigating from **above** the popover's trigger (typically with the `tab` key), the trigger becomes focused, the next **forward** focus will move from the trigger to the **first focusable item** inside the popover.

If navigating from **below** the popover's trigger (typically with the `shift`-`tab` key combination), when the trigger is focused, focus will be moved from the trigger to the **last focusable item** inside the popover.

When navigating **forward**, out the *bottom* of the popover, the focus will be moved to the next focusable item in the document relative to the trigger.  This is done so that if the `container` option is used, the focus will move to next logical item.  Otherwise, when using `container: body`, the focus will potentially drop off the end of the HTML document, leaving a keyboard user in an akward situation.

When navigating **backward**, out the *top* of the popover, the focus will be moved to the trigger.

This will not necessarily work with some assistive technologies reading modes.

## SASS Reference

### Variables

The available [Customization options]({{ site.path }}/{{ version.docs }}/get-started/options/), or Sass variables, that can be customized for the popover component.

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
        <td><code>$enable-popover</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the popover component classes.
          Smaller segements of the popover component classes can be disabled with the following <code>$enable-*</code> variables.
        </td>
      </tr>
      <tr>
        <td><code>$enable-popover-arrow</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation popover arrows classes.
        </td>
      </tr>
      <tr>
        <td><code>$enable-popover-header</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation popover header class.
        </td>
      </tr>
      <tr>
        <td><code>$enable-popover-body</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation popover body class.
        </td>
      </tr>
      <tr>
        <td><code>$enable-popover-close</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation popover close button class.
        </td>
      </tr>
      <tr>
        <td><code>$enable-popover-drag</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation popover drag button class.
        </td>
      </tr>
      <tr>
        <td><code>$enable-popover-draggable</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation draggable popover class.
        </td>
      </tr>
      <tr>
        <td><code>$popover-font-size</code></td>
        <td>string</td>
        <td><code>.9375rem</code></td>
        <td>
          Font size for popover container.
        </td>
      </tr>
      <tr>
        <td><code>$popover-bg</code></td>
        <td>string</td>
        <td><code>$component-bg</code></td>
        <td>
          Background color for popover container.
        </td>
      </tr>
      <tr>
        <td><code>$popover-margin</code></td>
        <td>string</td>
        <td><code>.125rem</code></td>
        <td>
          Spacing offset for popover container.
        </td>
      </tr>
      <tr>
        <td><code>$popover-max-width</code></td>
        <td>string</td>
        <td><code>rem(288px)</code> (18rem)</td>
        <td>
          Max width for popover container.
        </td>
      </tr>
      <tr>
        <td><code>$popover-border-width</code></td>
        <td>string</td>
        <td><code>$border-width</code></td>
        <td>
          Border width for popover container.
        </td>
      </tr>
      <tr>
        <td><code>$popover-border-color</code></td>
        <td>string</td>
        <td><code>$component-overlay-border-color</code></td>
        <td>
          Border color for popover container.
        </td>
      </tr>
      <tr>
        <td><code>$popover-border-radius</code></td>
        <td>string</td>
        <td><code>.3125rem</code></td>
        <td>
          Border radius for popover container.
        </td>
      </tr>
      <tr>
        <td><code>$popover-inner-border-radius</code></td>
        <td>string</td>
        <td><code>calc(#{$popover-border-radius} - #{$popover-border-width})</code></td>
        <td>
          Border radius for popover header and body.
        </td>
      </tr>
      <tr>
        <td><code>$popover-box-shadow</code></td>
        <td>string</td>
        <td><code>map-get($shadows, "d2")</code></td>
        <td>
          Border radius for popover container.
        </td>
      </tr>
      <tr>
        <td><code>$popover-header-padding-y</code></td>
        <td>string</td>
        <td><code>.5rem</code></td>
        <td>
          Vertical padding for popover header.
        </td>
      </tr>
      <tr>
        <td><code>$popover-header-padding-x</code></td>
        <td>string</td>
        <td><code>.75rem</code></td>
        <td>
          Horizontal padding for popover header.
        </td>
      </tr>
      <tr>
        <td><code>$popover-header-font-size</code></td>
        <td>string</td>
        <td><code>$font-size-base</code></td>
        <td>
          Font size for popover header.
        </td>
      </tr>
      <tr>
        <td><code>$popover-header-color</code></td>
        <td>string</td>
        <td><code>$headings-color</code></td>
        <td>
          Text color for popover header.
        </td>
      </tr>
      <tr>
        <td><code>$popover-header-bg</code></td>
        <td>string</td>
        <td><code>$component-section-bg</code></td>
        <td>
          Background color for popover header.
        </td>
      </tr>
      <tr>
        <td><code>$popover-header-border-width</code></td>
        <td>string</td>
        <td><code>$border-width</code></td>
        <td>
          Border width for popover header.
        </td>
      </tr>
      <tr>
        <td><code>$popover-header-border-color</code></td>
        <td>string</td>
        <td><code>$component-section-border-color</code></td>
        <td>
          Border color for popover header.
        </td>
      </tr>
      <tr>
        <td><code>$popover-control-padding-y</code></td>
        <td>string</td>
        <td><code>.125rem</code></td>
        <td>
          Vertical padding for close and drag buttons in popover header.
        </td>
      </tr>
      <tr>
        <td><code>$popover-control-padding-x</code></td>
        <td>string</td>
        <td><code>.3125rem</code></td>
        <td>
          Horizontal padding for close and drag buttons in popover header.
        </td>
      </tr>
      <tr>
        <td><code>$popover-body-padding-y</code></td>
        <td>string</td>
        <td><code>.5rem</code></td>
        <td>
          Vertical padding for popover body.
        </td>
      </tr>
      <tr>
        <td><code>$popover-body-padding-x</code></td>
        <td>string</td>
        <td><code>.75rem</code></td>
        <td>
          Horizontal padding for popover body.
        </td>
      </tr>
      <tr>
        <td><code>$popover-body-color</code></td>
        <td>string</td>
        <td><code>$body-color</code></td>
        <td>
          Text color for popover body.
        </td>
      </tr>
      <tr>
        <td><code>$popover-arrow-width</code></td>
        <td>string</td>
        <td><code>1.25rem</code></td>
        <td>
          Width for popover arrow, when placed on top or bottom. Height when used on sides.
        </td>
      </tr>
      <tr>
        <td><code>$popover-arrow-height</code></td>
        <td>string</td>
        <td><code>.625rem</code></td>
        <td>
          Height for popover arrow, when placed on top or bottom. Width when used on sides.
        </td>
      </tr>
      <tr>
        <td><code>$popover-arrow-color</code></td>
        <td>string</td>
        <td><code>$popover-bg</code></td>
        <td>
          Inner color for popover arrow.
        </td>
      </tr>
      <tr>
        <td><code>$popover-arrow-outer0color</code></td>
        <td>string</td>
        <td><code>$popover-border-color</code></td>
        <td>
          Border color for popover arrow.
        </td>
      </tr>
    </tbody>
  </table>
</div>

### Mixins

No mixins available.
