---
layout: docs
title: Overview
group: widgets
redirect_from: "/widgets/"
---

Widgets can be included individually (using Figuration's individual `*.js` files), or all at once (using `figuration.js` or the minified `figuration.min.js`).

{% callout warning %}
#### Using the compiled JavaScript

Both `figuration.js` and `figuration.min.js` contain all widgets in a single file. **Include only one.**
{% endcallout %}

{% callout danger %}
#### One Widget per Element

Don't use multiple widgets on the same element. For example, a button should not both have a tooltip and toggle a modal. Doing so would cause a conflict in functionality and with the ARIA attributes.
{% endcallout %}

{% callout info %}
#### Widget Dependencies

Some widgets and CSS components depend on other widgets. If you include widgets individually, make sure to check for these dependencies in the docs. Also note that all widgets depend on jQuery (this means jQuery must be included **before** the widget files). Figuration is currently only tested/supported on the latest version of jQuery.
{% endcallout %}

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## No Conflict
Figuration has opted to not go with a .noConflict mode.  Due to crosstalk between some of the widgets, we extended the namespaces by marking all functionalty with `CFW` or `cfw`, as in **C**AST **F**iguration **W**idget.

The structure is: `CFW_WidgetName` for widgets, `data.cfw.widgetName` for data storage, `data-cfw-widgetName-option` for data attributes, `event.cfw.widgetName` for events.

This is to hopefully reduce the chance of conflicting with other frameworks and plugins.

## Scoped Initilization

Initizliaing the widgets in AJAX inserted content can be accomplished easily by calling the `$().CFW_Init()` function.  This also happens automatically at page load using `document.body` as the initial scope.

{% highlight js %}
$("#myContainer").CFW_Init();
// Where '#myContainer' is the region of new content to initialize the Figuration widgets.
{% endhighlight %}

## Data Attributes

You can use most Figuration widgets purely through the markup API without writing a single line of JavaScript.

In some situations it may be desirable to turn this functionality off. The data attribute API auto-initialize can be disabled by inserting a global variable in the `<head>` of the document, before loading the `figuration.js`, to stop the initial call to `$().CFW_Init()` from occuring.

{% highlight js %}
<script>var CFW_API = false;</script>
{% endhighlight %}

## Option Inheritance

When using both data attributes and JavaScript options, the JavaScript options take precendence over any element attributes.

{% example html js %}
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
{% endexample %}

## Programmatic API

You can also use all Figuration widgets purely through the JavaScript API. All public APIs are single, chainable methods, and return the collection acted upon.

{% highlight js %}
$('#myCollapse').CFW_Collapse('hide').removeClass('aClass');
{% endhighlight %}

All methods should accept an optional options object, a string which targets a particular method, or nothing (which initiates a widget with default behavior):

{% highlight js %}
$('#myPop').CFW_Popover();                          // initialized with defaults
$('#myPop').CFW_Popover({ placement: 'bottom' });   // initialized with bottom alignment
$('#myPop').CFW_Popover('show');                    // invokes show method
{% endhighlight %}

Each widget also exposes its raw constructor on a `Constructor` property: `$.fn.CFW_Popover.Constructor`. If you'd like to get a particular widget instance, retrieve it directly from an element: `$('[rel=popover]').data('CFW_Popover')`.

## Events

Figuration provides custom events for most widgets' unique actions. Generally, these typically come in a before and after form - where the before form (ex. `beforeShow`) is triggered at the start of an event, and its after form (ex. `afterShow`) is trigger on the completion of an action.

All before events provide `preventDefault` functionality. This provides the ability to stop the execution of an action before it starts.

{% highlight js %}
$('#myModal').on('beforeShow.cfw.modal', function(e) {
    if (!data) return e.preventDefault(); // stops modal from being shown
});
{% endhighlight %}

## No Fallbacks
Figuration's widgets don't fallback or degrade gracefully when JavaScript is disabled. If you care about the user experience in this case, use `<noscript>` to explain the situation (and how to re-enable JavaScript) to your users, and/or add your own custom fallbacks.

## Accessibility

### Best Practices Approach

Figuration attempts to take a best practices approach to providing as much accessibility and usability to the widgets.

All widgets take into account keyboard, mouse, and touch navigation methods where possible to provide usability across a wide array of platforms.  In come cases functionality is forced on or off depending on the presence of touch devices.

### Automatic Attribute Generation

To provide screen readers with high levels of accessibility the widgets will automatically generate the neccessary `id`, `tabindex`, `role`, and `aria-*` attributes that best fit the functionality.  If an `id` is already provided the widgets will keep the existing one and use it accordingly.

This was done to alleviate the complexity of any generated source code&mdash;the data api adds enough on its own&mdash;and remove concerns over which attributes are needed for the developers and content authors.

{% callout warning %}
#### `role` Attributes on Container Items

Container items at a higher level from a widget component might need to have a `role` specificied.  These are not handled by the widget code and will need to be used as needed.
{% endcallout %}