---
layout: docs
title: Affix
subtitle: affix.js
group: widgets
---

Affix is used to handle the positioning of components based on the scroll position of the window with top and bottom boundaries.

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Example
The 'floating' of the 'top of page' link at the bottom of the screen, is a live demo of the widget.

## Usage

Use the affix widget via data attributes or manually with your own JavaScript. **In both situations, you must provide CSS for the positioning of your content.**{:.text-danger}

### Positioning via CSS

The affix widget toggles between three classes, each representing a particular state: `.affix`, `.affix-top`, and `.affix-bottom`. You must provide the styles for these classes yourself (independent of this widget) to handle the actual positions.

Here's how the affix widget works:

- To start, the widget adds `.affix-top` to indicate the element is in its top-most position. At this point no CSS positioning is required.
- Scrolling past the element you want affixed should trigger the actual affixing. This is where `.affix` replaces `.affix-top` and sets `position: fixed;` (provided by Bootstrap's CSS).
- If a bottom offset is defined, scrolling past it should replace `.affix` with `.affix-bottom`. Since offsets are optional, setting one requires you to set the appropriate CSS. In this case, add `position: absolute;` when necessary. The widget uses the data attribute or JavaScript option to determine where to position the element from there.

Follow the above steps to set your CSS for either of the usage options below.

### Via Data Attributes

To easily add affix behavior to any element, just add `data-cfw="affix"` to the element you want to spy on. Use offsets to define when to toggle the pinning of an element.

{% highlight html %}
<div data-cfw="affix" data-cfw-affix-offset-top="60" data-cfw-affix-offset-bottom="200">
  ...
</div>
{% endhighlight %}

### Via JavaScript

Call the affix widget via JavaScript:
{% highlight js %}
$('#myAffix').CFW_Affix({
    offset: {
        top: 100,
        bottom: function () {
            return (this.bottom = $('.footer').outerHeight(true));
        }
    }
});
{% endhighlight %}

### Options

Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-cfw-affix-`, as in `data-cfw-affix-offset-top="200"`.

<div class="table-responsive">
    <table class="table table-bordered table-striped">
    <thead>
        <tr>
            <th style="width: 100px;">Name</th>
            <th style="width: 100px;">type</th>
            <th style="width: 50px;">default</th>
            <th>description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>offset</td>
            <td>number | function | object</td>
            <td>0</td>
            <td>Pixels to offset from screen when calculating position of scroll. If a single number is provided, the offset will be applied in both top and bottom directions. To provide a unique, bottom and top offset just provide an object <code>offset: { top: 10 }</code> or <code>offset: { top: 10, bottom: 5 }</code>. Use a function when you need to dynamically calculate an offset.</td>
        </tr>
        <tr>
            <td>target</td>
            <td>selector | node | jQuery element</td>
            <td>the `window` object</td>
            <td>Specifies the target element of the affix.</td>
        </tr>
    </tbody>
    </table>
</div> <!-- /.table-responsive -->

### Methods

#### `.CFW_Affix(options)`
{:.no_toc}

Activates an element to be affixed. Accepts an optional options object.

{% highlight js %}
$('#myAffix').CFW_Affix({
    offset: {top: 10}
});
{% endhighlight %}

#### `.CFW_Affix('checkPosition')`
{:.no_toc}

Recalculates the state of the affix based on the dimensions, position, and scroll position of the relevant elements. The `.affix`, `.affix-top`, and `.affix-bottom` classes are added to or removed from the affixed content according to the new state. This method needs to be called whenever the dimensions of the affixed content or the target element are changed, to ensure correct positioning of the affixed content.

{% highlight js %}
$('#myAffix').CFW_Affix('checkPosition');
{% endhighlight %}


### Events

CFW's affix widget exposes a few events for hooking into affix functionality.

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
            <td>init.cfw.affix</td>
            <td>This event is fired after the affix element has been initialized.</td>
        </tr>
        <tr>
            <td>affix.cfw.affix</td>
            <td>This event is immediately before after the element is affixed.</td>
        </tr>
        <tr>
            <td>affixed.cfw.affix</td>
            <td>This event is after after the element has been affixed.</td>
        </tr>
        <tr>
            <td>affix-top.cfw.affix</td>
            <td>This event is fired immediately before the element is affixed-top.</td>
        </tr>
        <tr>
            <td>affixed-top.cfw.affix</td>
            <td>This event is fired after the element has been affixed-top.</td>
        </tr>
        <tr>
            <td>affix-bottom.cfw.affix</td>
            <td>This event is immediately before after the element is affixed-bottom.</td>
        </tr>
        <tr>
            <td>affixed-bottom.cfw.affix</td>
            <td>This event is fired after the element has been affixed-bottom.</td>
        </tr>
    </tbody>
    </table>
</div> <!-- /.table-responsive -->

{% highlight js %}
$('#myAffix').on('affix.cfw.affix', function () {
  // do something...
});
{% endhighlight %}