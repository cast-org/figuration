---
layout: doc
title: Widgets
description: Add more functionality and interactivity to Figuration with our optional jQuery powered widgets. Each one is designed with accessibility already built-in.
group: widgets
toc: true
---

## Notices

{% capture callout %}
Using the compiled JavaScript
{.h5}

Both `figuration.js` and `figuration.min.js` contain all widgets and helper utilities in a single file. **Include only one.**
{% endcapture %}
{% renderCallout, callout, "warning" %}

{% capture callout %}
One Widget per Element
{.h5}

Don't use multiple widgets on the same element. For example, a button should not both have a tooltip and toggle a modal. Doing so would cause a conflict in functionality and accessibility.
{% endcapture %}
{% renderCallout, callout, "danger" %}

{% capture callout %}
Widget Dependencies
{.h5}

Some widgets and CSS components depend on other widgets. If you include widgets individually, make sure to check for these dependencies in the docs. Also note that all widgets depend on [jQuery](https://jquery.com/), while the Tooltip, Popover, and Dropdown widgets also require [Popper.js](https://popper.js.org/) This means jQuery and Popper.js must be included **before** the widget files. Figuration is currently only tested/supported on the latest version of jQuery.
{% endcapture %}
{% renderCallout, callout, "info" %}

## Util

All of Figuration's widgets depend on `util.js` and it has to be included alongside the other JavaScript files. If you're using the compiled (or minified) `figuration.js`, there is no need to include this—it's already there.

`util.js` includes utility functions and a basic helper for `transitionEnd` events as well as a CSS transition emulator. It's used by the other plugins to check for CSS transition support and to catch hanging transitions.

Also, some of the widgets use [MutationObserver](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) utilities to watch for and respond to DOM changes.

## No Conflict
Figuration has opted to not go with a .noConflict mode.  Due to crosstalk between some of the widgets, we extended the namespaces by marking all functionalty with `CFW` or `cfw`, as in **C**AST **F**iguration **W**idget.

The structure is: `CFW_WidgetName` for widgets, `data.cfw.widgetName` for data storage, `data-cfw-widgetName-option` for data attributes, `event.cfw.widgetName` for events.

This is to hopefully reduce the chance of conflicting with other frameworks and plugins.

## Scoped Initilization

Initializing the widgets in AJAX inserted content can be accomplished easily by calling the `$().CFW_Init()` function.  Widgets set with data attributes on both the specified element, and it's descendants, will be initialized.

This function that also called at page load using `document.body` as the initial scope.

{% capture highlight %}
$("#myContainer").CFW_Init();
// Where '#myContainer' is the region of new content to initialize the Figuration widgets.
{% endcapture %}
{% renderHighlight highlight, "js" %}

## Scoped Dispose

In those cases where you are need to call the `dispose` method on every Figuration widget for a given region, you can use the `$().CFW_Dispose()` function.  Any widget encountered on the specified element, and it's descendants, will have their `dispose` methods invoked.

{% capture highlight %}
$("#myContainer").CFW_Dispose();
// Where '#myContainer' is the region to `dispose` of Figuration widgets.
{% endcapture %}
{% renderHighlight highlight, "js" %}

## Data Attributes

You can use most Figuration widgets purely through the markup API without writing a single line of JavaScript.

In some situations it may be desirable to turn this functionality off. The data attribute API auto-initialize can be disabled by inserting a global variable in the `<head>` of the document, before loading the `figuration.js`, to stop the initial call to `$().CFW_Init()` from occuring.

{% capture highlight %}
<script>var CFW_API = false;</script>
{% endcapture %}
{% renderHighlight highlight, "js" %}

## Programmatic API

You can also use all Figuration widgets purely through the JavaScript API. All public APIs are single, chainable methods, and return the collection acted upon.

{% capture highlight %}
$('#myCollapse').CFW_Collapse('hide').removeClass('aClass');
{% endcapture %}
{% renderHighlight highlight, "js" %}

All methods should accept an optional options object, a string which targets a particular method, or nothing (which initiates a widget with default behavior):

{% capture highlight %}
$('#myPop').CFW_Popover();                          // initialized with defaults
$('#myPop').CFW_Popover({ placement: 'bottom' });   // initialized with bottom alignment
$('#myPop').CFW_Popover('show');                    // invokes show method
{% endcapture %}
{% renderHighlight highlight, "js" %}

Each widget also exposes its raw constructor on a `Constructor` property: `$.fn.CFW_Popover.Constructor`. If you'd like to get a particular widget instance, retrieve it directly from an element: `$('#myPop').data('cfw.popover')`.

## Option Inheritance

When using both data attributes and JavaScript options, the JavaScript options take precendence over any element attributes.

{% capture example %}
<!-- Override the HTML attribute -->
<button type="button" id="optionOrder0" class="btn" title="ignored title">Show Tooltip</button>
<script>
$('#optionOrder0').CFW_Tooltip({
    title: 'tooltip title',
    container: 'body'
});
</script>

<!-- Override the data attribute -->
<button type="button" id="optionOrder1" class="btn" data-cfw-tootltip-title="ignored title">Show Tooltip</button>
<script>
$('#optionOrder1').CFW_Tooltip({
    title: 'tooltip title',
    container: 'body'
});
</script>
{% endcapture %}
{% renderExample example %}

## Method Calls

Method are typically called on the trigger element, where the widget is initially attached.  Some widgets will also allow methods calls upon their target element.

Method calls are made by passing the method name as a `string` value through the widget function, as shown in the following example.

{% capture highlight %}
$('#myPop').CFW_Popover('show');
{% endcapture %}
{% renderHighlight highlight, "js" %}

## Events

Figuration provides custom events for most widgets' unique actions. Generally, these typically come in a before and after form - where the before form (ex. `beforeShow`) is triggered at the start of an event, and its after form (ex. `afterShow`) is trigger on the completion of an action.

All before events provide `preventDefault` functionality. This provides the ability to stop the execution of an action before it starts.

{% capture highlight %}
$('#myModal').on('beforeShow.cfw.modal', function(e) {
    if (!data) return e.preventDefault(); // stops modal from being shown
});
{% endcapture %}
{% renderHighlight highlight, "js" %}

## Asynchronous Functions and Transitions

All programmatic API methods are **asynchronous** and return to the caller once the transition is started but **before it ends**.

In order to execute an action once the transition is complete, you can listen to the corresponding event.

{% capture highlight %}
$('#myCollapse').on('afterShow.cfw.collapse', function(e) {
  // Action to execute once the collapsible area is expanded
})
{% endcapture %}
{% renderHighlight highlight, "js" %}

In addition a method call on a **transitioning component will be ignored**.

{% capture highlight %}
$('#myCollapse').on('afterShow.cfw.collapse', function(e) {
  $('#myCollapse').CFW_Collapse('hide'); // Will hide the collapsible area as soon as the transition for opening the area is finished
})

$('#myCollapse').CFW_Collapse('show'); // Will start opening the collapsible area and returns to the caller
$('#myCollapse').CFW_Collapse('hide'); // ** Will be ignored, as the opening transition has not completed **
{% endcapture %}
{% renderHighlight highlight, "js" %}

## No Fallbacks

Figuration's widgets don't fallback or degrade gracefully when JavaScript is disabled. If you care about the user experience in this case, use `<noscript>` to explain the situation (and how to re-enable JavaScript) to your users, and/or add your own custom fallbacks.

## Dispose Methods

Every widget has a `dispose` method that should remove any event listeners and data, as well as nullify any constructed JavaScript variables associated with a given widget.  Certain widgets will also remove their dynamically created content or controls from the DOM.

While most likely not needed in everyday use, there may be specific circumstances when this might be useful.  For example, if you are doing large amounts of dynamic content, in order to help with memory garbage collection, it might be beneficial to call the `dispose` on a widget before you remove the content from the DOM.

## Accessibility

### Best Practices Approach

Figuration attempts to take a best practices approach to providing as much accessibility and usability to the widgets.

All widgets take into account keyboard, mouse, and touch navigation methods where possible to provide usability across a wide array of platforms.  In come cases functionality is forced on or off depending on the presence of touch devices.

### Automatic Attribute Generation

To provide screen readers with high levels of accessibility the widgets will automatically generate the neccessary `id`, `tabindex`, `role`, and `aria-*` attributes that best fit the functionality.  If an `id` is already provided the widgets will keep the existing one and use it accordingly.

This was done to alleviate the complexity of any generated source code&mdash;the data api adds enough on its own&mdash;and remove concerns over which attributes are needed for the developers and content authors.

{% capture callout %}
`role` Attributes on Container Items
{.h5}

Container items at a higher level from a widget component might need to have a `role` specificied.  These are not handled by the widget code and will need to be used as needed.
{% endcapture %}
{% renderCallout, callout, "warning" %}
