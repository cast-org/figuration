---
layout: doc
title: Offcanvas
subtitle: Offcanvas.js
description: Add hidden dialog sidebars that slide into view from the edge of the page or container.
group: widgets
toc: true
extras:
  name: offcanvas
---

## How It Works

Offcanvas is a component to create sidebars that can be toggled using JavaScript to appear from the edges of a viewport or container.
- Buttons, or anchors, are used to toggle the associated offcanvas element.
- Offcanvas shares much of the same functionality as modals, but operates slightly differently.
- By default, offcanvas also uses a backdrop when showing that can be clicked to hide the offcanvas.
- Only one offcanvas should be shown at a time.

**Heads up!**  You should not use `margin` or `translate` on an `.offcanvas` element as this will interfere with the CSS animations. Instead, use the class as an independent wrapping element.

## Examples

### Offcanvas Components

Below is an offcanvas example that is shown by default (via `.in` on `.offcanvas`). Offcanvas includes support for a header with a close button, an optional body class for some initial `padding` and `overflow` handling. Also available is a completely optional footer container with some available `padding` and end-aligned content.  The offcanvas body will automatically grow to fill the available height.

We suggest that you include offcanvas headers with dismiss actions whenever possible, or provide an explicit dismiss action.

{% capture example %}
<div class="offcanvas offcanvas-start">
  <div class="offcanvas-header">
    <h4 class="offcanvas-title h5">Offcanvas</h4>
    <button type="button" class="close" data-cfw-dismiss="offcanvas" aria-label="Close"><span aria-hidden="true">&times;</span></button>
  </div>
  <div class="offcanvas-body">
    Content for the offcanvas goes here. You can place just about any component or custom element here.
  </div>
  <div class="offcanvas-footer">
    Offcanvas footer
  </div>
</div>
{% endcapture %}
{% renderExample example "cf-example-offcanvas p-0 bg-light overflow-hidden" %}

### Live Demo

Use the buttons below to show and hide an offcanvas element via JavaScript that toggles the `.in` class on an element with the `.offcanvas` class.

- `.offcanvas` hides content (default)
- `.offcanvas.in` shows content

You can use a link with the `href` attribute, or a button with the `data-cfw-offcanvas-target` attribute. In both cases, the `data-cfw="offcanvas"` attribute is required.

{% capture example %}
<button type="button" class="btn btn-primary" data-cfw="offcanvas" data-cfw-offcanvas-target="#offcanvasData">
  Button with data-*-target
</button>

<div id="offcanvasData" class="offcanvas offcanvas-start">
  <div class="offcanvas-header">
    <h4 class="offcanvas-title h5">Offcanvas</h4>
    <button type="button" class="close" data-cfw-dismiss="offcanvas" aria-label="Close"><span aria-hidden="true">&times;</span></button>
  </div>
  <div class="offcanvas-body">
    <p>Some placeholder text. You can include elements here such as, text, images, links, and even more complex components.</p>
    <div class="dropdown">
      <button type="button" class="btn btn-secondary" data-cfw="dropdown">
      Dropdown <span class="caret" aria-hidden="true"></span>
    </button>
    <ul class="dropdown-menu">
      <li><a href="#">Action</a></li>
      <li><a href="#">Another action</a></li>
      <li><a href="#">Something else here</a></li>
    </ul>
    </div>
  </div>
  <div class="offcanvas-footer">
    Offcanvas footer
  </div>
</div>
{% endcapture %}
{% renderExample example %}

{% capture example %}
<a role="button" class="btn btn-primary" data-cfw="offcanvas" href="#offcanvasHref">
  Link with href
</a>

<div id="offcanvasHref" class="offcanvas offcanvas-start">
  <div class="offcanvas-header">
    <h4 class="offcanvas-title h5">Offcanvas</h4>
    <button type="button" class="close" data-cfw-dismiss="offcanvas" aria-label="Close"><span aria-hidden="true">&times;</span></button>
  </div>
  <div class="offcanvas-body">
    <p>Some placeholder text. You can include elements here such as, text, images, links, and even more complex components.</p>
    <div class="dropdown">
      <button type="button" class="btn btn-secondary" data-cfw="dropdown">
      Dropdown <span class="caret" aria-hidden="true"></span>
    </button>
    <ul class="dropdown-menu">
      <li><a href="#">Action</a></li>
      <li><a href="#">Another action</a></li>
      <li><a href="#">Something else here</a></li>
    </ul>
    </div>
  </div>
  <div class="offcanvas-footer">
    Offcanvas footer
  </div>
</div>
{% endcapture %}
{% renderExample example %}

### Placement

There is no default placement for an offcanvas components, so you must add one of the following modifier classes;

- `.offcanvas-start` - start edge of the viewport
- `.offcanvas-end` - end edge of the viewport
- `.offcanvas-top` - top edge of the viewport
- `.offcanvas-bottom` - bottom edge  of the viewport

{% capture example %}
<!-- Toggle buttons -->
<button class="btn btn-primary" type="button" data-cfw="offcanvas" data-cfw-offcanvas-target="#offcanvasStart">Offcanvas start</button>
<button class="btn btn-primary" type="button" data-cfw="offcanvas" data-cfw-offcanvas-target="#offcanvasEnd">Offcanvas end</button>
<button class="btn btn-primary" type="button" data-cfw="offcanvas" data-cfw-offcanvas-target="#offcanvasTop">Offcanvas top</button>
<button class="btn btn-primary" type="button" data-cfw="offcanvas" data-cfw-offcanvas-target="#offcanvasBottom">Offcanvas bottom</button>

<!-- Directional examples -->
<div id="offcanvasStart" class="offcanvas offcanvas-start">
  <div class="offcanvas-header">
    <h4 class="offcanvas-title h5">Offcanvas start</h4>
    <button type="button" class="close" data-cfw-dismiss="offcanvas" aria-label="Close"><span aria-hidden="true">&times;</span></button>
  </div>
  <div class="offcanvas-body">
    Offcanvas content
  </div>
</div>

<div id="offcanvasEnd" class="offcanvas offcanvas-end">
  <div class="offcanvas-header">
    <h4 class="offcanvas-title h5">Offcanvas end</h4>
    <button type="button" class="close" data-cfw-dismiss="offcanvas" aria-label="Close"><span aria-hidden="true">&times;</span></button>
  </div>
  <div class="offcanvas-body">
    Offcanvas content
  </div>
</div>

<div id="offcanvasTop" class="offcanvas offcanvas-top">
  <div class="offcanvas-header">
    <h4 class="offcanvas-title h5">Offcanvas top</h4>
    <button type="button" class="close" data-cfw-dismiss="offcanvas" aria-label="Close"><span aria-hidden="true">&times;</span></button>
  </div>
  <div class="offcanvas-body">
    Offcanvas content
  </div>
</div>

<div id="offcanvasBottom" class="offcanvas offcanvas-bottom">
  <div class="offcanvas-header">
    <h4 class="offcanvas-title h5">Offcanvas bottom</h4>
    <button type="button" class="close" data-cfw-dismiss="offcanvas" aria-label="Close"><span aria-hidden="true">&times;</span></button>
  </div>
  <div class="offcanvas-body">
    Offcanvas content
  </div>
</div>
{% endcapture %}
{% renderExample example %}

### Backdrop and Scrolling

Scrolling the `<body>` element is disabled when an offcanvas and its backdrop are visible. Use the `scroll` option to toggle `<body>` scrolling and the `backdrop` option to toggle the use of a backdrop.

When `backdrop` option is set to `static`, the offcanvas will not close when clicking outside it.

{% capture example %}
<!-- Toggle buttons -->
<button class="btn btn-primary" type="button" data-cfw="offcanvas" data-cfw-offcanvas-target="#offcanvasBack" data-cfw-offcanvas-backdrop="true" data-cfw-offcanvas-scroll="false">Enable backdrop (default)</button>
<button class="btn btn-primary" type="button" data-cfw="offcanvas" data-cfw-offcanvas-target="#offcanvasScroll"  data-cfw-offcanvas-backdrop="false" data-cfw-offcanvas-scroll="true">Disabled backdrop and enable scrolling</button>
<button class="btn btn-primary" type="button" data-cfw="offcanvas" data-cfw-offcanvas-target="#offcanvasBackScroll"  data-cfw-offcanvas-backdrop="true" data-cfw-offcanvas-scroll="true">Enable both backdrop and scrolling</button>
<button class="btn btn-primary" type="button" data-cfw="offcanvas" data-cfw-offcanvas-target="#offcanvasStatic" data-cfw-offcanvas-backdrop="static">Static backdrop</button>

<!-- Offcanvas elements -->
<div id="offcanvasBack" class="offcanvas offcanvas-start">
  <div class="offcanvas-header">
    <h4 class="offcanvas-title h5">Offcanvas with backdrop</h4>
    <button type="button" class="close" data-cfw-dismiss="offcanvas" aria-label="Close"><span aria-hidden="true">&times;</span></button>
  </div>
  <div class="offcanvas-body">
    Body scrolling is disabled and you may click on the backdrop to dimiss the offcanvas item.
  </div>
</div>

<div id="offcanvasScroll" class="offcanvas offcanvas-start">
  <div class="offcanvas-header">
    <h4 class="offcanvas-title h5">Offcanvas with body scrolling</h4>
    <button type="button" class="close" data-cfw-dismiss="offcanvas" aria-label="Close"><span aria-hidden="true">&times;</span></button>
  </div>
  <div class="offcanvas-body">
    The backdrop has been disabled and the page can be scrolled and interacted with.
  </div>
</div>

<div id="offcanvasBackScroll" class="offcanvas offcanvas-start">
  <div class="offcanvas-header">
    <h4 class="offcanvas-title h5">Offcanvas backdrop and scroll</h4>
    <button type="button" class="close" data-cfw-dismiss="offcanvas" aria-label="Close"><span aria-hidden="true">&times;</span></button>
  </div>
  <div class="offcanvas-body">
    Scrolling is enabled so you can scroll and interact with the page, but clicking on the backdrop will dismiss the offcanvas item.
  </div>
</div>

<div id="offcanvasStatic" class="offcanvas offcanvas-start">
  <div class="offcanvas-header">
    <h4 class="offcanvas-title h5">Offcanvas static backdrop</h4>
    <button type="button" class="close" data-cfw-dismiss="offcanvas" aria-label="Close"><span aria-hidden="true">&times;</span></button>
  </div>
  <div class="offcanvas-body">
    Clicking on a 'static' backdrop will not dismiss the offcanvas item.
  </div>
</div>
{% endcapture %}
{% renderExample example %}

### Within a Navbar

Offcanvas is supported within the navbar component allowing for flexible navigation options along with support for responsive layouts.

Information and examples can be found in the [Offcanvas section on the Navbar component page]({{ site.path }}/{{ version.docs }}/components/navbar/#offcanvas).

### Contained Offcanvas

Contained offcanvas will display the backdrop and offcanvas within a specified element and not cover the entire page.

Place the offcanvas HTML within the container, apply `position: relative;` to the container, and specify the `rootElement` option on the trigger button to limit the offcanvas to the container.

It may also be useful to add a `z-index` to the container, this will keep the offcanvas from appearing above other items that exist outside the container, such as a navbar.  In the example below a `z-index: 1;` has been added to the `#offcanvasRootElement` container so that the contained offcanvas, and backdrop, do not overlap the site header when the page is scrolled.

{% capture example %}
<div id="offcanvasRootElement" class="bg-light border overflow-hidden position-relative" style="height: 200px; z-index: 1;">
  <div id="offcanvasContained" class="offcanvas offcanvas-start">
    <div class="offcanvas-header">
      <h4 class="offcanvas-title h5">Contained offcanvas</h4>
      <button type="button" class="close" data-cfw-dismiss="offcanvas" aria-label="Close"><span aria-hidden="true">&times;</span></button>
    </div>
    <div class="offcanvas-body">
      Offcanvas content
    </div>
    <div class="offcanvas-footer">
      Offcanvas footer
    </div>
  </div>

</div>
<button class="btn btn-primary" type="button" data-cfw="offcanvas" data-cfw-offcanvas-target="#offcanvasContained" data-cfw-offcanvas-root-element="#offcanvasRootElement">
  Contained offcanvas
</button>
{% endcapture %}
{% renderExample example %}

## Usage

The offcanvas widget toggles your hidden content on demand, via data attributes or JavaScript. It also generates a `.offcanvas-backdrop` to provide a click area for dismissing shown offcanvas when clicking outside the offcanvas.

### Via Data Attributes

#### Toggle

Activate an offcanvas without writing JavaScript. Set `data-cfw="offcanvas"` on a controller element, like a button, along with a `data-cfw-offcanvas-target="#foo"` or `href="#foo"` to target a specific offcanvas to toggle.

{% capture highlight %}
<button type="button" data-cfw="offcanvas" data-cfw-offcanvas-target="#myOffcanvas">Launch offcanvas</button>
{% endcapture %}
{% renderHighlight highlight, "html" %}

#### Dismiss

{% assign jsDismiss = version.docs | valueIfEmpty: site.version.docs | prepend: "./site/_includes/" | append: "/partials/js-dismiss.md" -%}
{% renderFile jsDismiss, extras %}

{% capture callout %}
While both ways to dismiss an offcanvas are supported, keep in mind that dismissing from outside an offcanvas does not match [the WAI-ARIA modal dialog design pattern](https://www.w3.org/TR/wai-aria-practices-1.1/#dialog_modal). Do this at your own risk.
{% endcapture %}
{% renderCallout callout, "warning" %}

### Via JavaScript

Call an offcanvas with id `myOffcanvas` with a single line of JavaScript:

{% capture highlight %}
$('#myOffcanvas').CFW_Offcanvas();
{% endcapture %}
{% renderHighlight highlight, "js" %}

### Close Triggers

Any an element with a data attribute of `data-cfw-dismiss="offcanvas"` within the offcanvas element will act as a close trigger for the offcanvas.  There can be multiple close triggers, such as a header/titlebar close and a cancel button in the footer.

### With Fixed Position Content

When the scrollbar is removed from the `<body>` when an offcanvas is shown, there can be some shifting of content in fixed position elements.  To help with this issue, when an offcanvas is shown, any elements using the [fixed positioning utility]({{ site.path }}/{{ version.docs }}/utilities/position/) classes, (`.fixed-top` and `.fixed-bottom`), will have additional padding added to their right side.  This padding width should match the width of the scrollbar that becomes hidden.  When the offcanvas is hidden, the `padding-right` CSS value will be reset.

There is also an additional special classname that the offcanvas widget will look for when adjusting padding values.  Simply add the `.is-fixed` class to your element, and it will automatically be handled.

### Options

Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-cfw-offcanvas-`, as in `data-cfw-offcanvas-animate=false`.

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
        <td>The selector of the target offcanvas.</td>
      </tr>
      <tr>
        <td><code>rootElement</code></td>
        <td>string</td>
        <td><code>'body'</code></td>
        <td>The selector of the container to display offcanvas within.</td>
      </tr>
      <tr>
        <td><code>animate</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>If offcanvas targets should fade and slide in.</td>
      </tr>
      <tr>
        <td><code>backdrop</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          <p>Include an offcanvas-backdrop element.</p>
          <p>The backdrop is the semi-opaque overlay used to visually seperate the offcanvas from the page content.</p>
         </td>
      </tr>
      <tr>
        <td><code>scroll</code></td>
        <td>boolean</td>
        <td><code>false</code></td>
        <td>Allow rootElement scrolling while offcanvas is open.</td>
      </tr>
      <tr>
        <td><code>keyboard</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>Closes the offcanvas when escape key is pressed.</td>
      </tr>
      <tr>
        <td><code>focus</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>Enforce focus when using keyboard navigation to remain within the offcanvas dialog.</td>
      </tr>
      <tr>
        <td><code>manual</code></td>
        <td>boolean</td>
        <td><code>false</code></td>
        <td>If the offcanvas should be triggered manually through method calls, not from clicking the trigger element.  Closing a manual offcanvas will not autoamatically return focus to the trigger item when the offcanvas is hidden.</td>
      </tr>
    </tbody>
  </table>
</div>

{% capture highlight %}
$('#myOffcanvas').CFW_Offcanvas({
  animate: false
});
{% endcapture %}
{% renderHighlight highlight, "js" %}

### Methods

Method calls can be made on either the trigger or the target `<div class="offcanvas">` element.

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
        <td>Toggles an offcanvas dialog to be shown or hidden.</td>
      </tr>
      <tr>
        <td><code>show</code></td>
        <td>Shows an offcanvas dialog.</td>
      </tr>
      <tr>
        <td><code>hide</code></td>
        <td>Hides an offcanvas dialog.</td>
      </tr>
      <tr>
        <td><code>dispose</code></td>
        <td>Removes the event listeners from the trigger and target items.</td>
      </tr>
    </tbody>
  </table>
</div>

{% capture highlight %}
$('#myOffcanvas').CFW_Offcanvas('show');
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
        <td><code>init.cfw.offcanvas</code></td>
        <td>This event fires after the offcanvas item is initialized.</td>
      </tr>
      <tr>
        <td><code>beforeShow.cfw.offcanvas</code></td>
        <td>This event is fired immediately when the <code>show</code> method is called.</td>
      </tr>
      <tr>
        <td><code>afterShow.cfw.offcanvas</code></td>
        <td>This event is fired when an offcanvas dialog has been made visible to the user (will wait for CSS transitions to complete).</td>
      </tr>
      <tr>
        <td><code>beforeHide.cfw.offcanvas</code></td>
        <td>This event is fired immediately when the <code>hide</code> method is called.</td>
      </tr>
      <tr>
        <td><code>afterHide.cfw.offcanvas</code></td>
        <td>This event is fired when an offcanvas dialog has been hidden from the user (will wait for CSS transitions to complete).</td>
      </tr>
    </tbody>
  </table>
</div>

{% capture highlight %}
$('#myOffcanvas').on('afterHide.cfw.offcanvas', function() {
  // do something...
});
{% endcapture %}
{% renderHighlight highlight, "js" %}

## Accessibility

### Offcanvas Title

It is recommended that a `.offcanvas-title` item is used, even if visually hidden, within the offcanvas since it will be automatically be found and linked with an `aria-labelledby` on the `.offcanvas` container.  This provides a potential description of the offcanvas to screen-reader users when the offcanvas is shown and focus is automatically moved to the `.offcanvas` container.

### Key Commands

The following key commands are handled when focus is inside the offcanvas:

- <kbd>Esc</kbd> - Close the offcanvas
- <kbd>Tab</kbd> - Moves focus to next focusable element inside the dialog. When focus is on the last focusable element in the dialog, moves focus to the first focusable element in the dialog.
- <kbd>Shift + Tab</kbd> - Moves focus to previous focusable element inside the dialog. When focus is on the first focusable element in the dialog, moves focus to the last focusable element in the dialog.

### Enforced Focus

Offcanvas employ a 'focus trap' in an attempt to keep focus with the offcanvas dialog when one is open, as specified by the [WAI-ARIA](https://www.w3.org/TR/wai-aria-1.2/) recommendations.

If for some reason you need to disable the enforced focus for offcanvas, you can override the behavior by setting the `focus` option to `false`.

## SASS Reference

### Variables

The available [Customization options]({{ site.path }}/{{ version.docs }}/get-started/options/), or Sass variables, that can be customized for the offcanvas component.

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
        <td><code>$enable-offcanvas</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the offcanvas component classes.
          Smaller segements of the offcanvas component classes can be disabled with the following <code>$enable-*</code> variables.
        </td>
      </tr>
      <tr>
        <td><code>$enable-offcanvas-side-start</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the start side aligned offcanvas variant.
        </td>
      </tr>
      <tr>
        <td><code>$enable-offcanvas-side-end</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the end side aligned offcanvas variant.
        </td>
      </tr>
      <tr>
        <td><code>$enable-offcanvas-side-top</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the top side aligned offcanvas variant.
        </td>
      </tr>
      <tr>
        <td><code>$enable-offcanvas-side-bottom</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the bottom side aligned offcanvas variant.
        </td>
      </tr>
      <tr>
        <td><code>$enable-offcanvas-header</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the offcanvas header class.
        </td>
      </tr>
      <tr>
        <td><code>$enable-offcanvas-title</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the offcanvas title class.
        </td>
      </tr>
      <tr>
        <td><code>$enable-offcanvas-body</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the offcanvas body class.
        </td>
      </tr>
      <tr>
        <td><code>$enable-offcanvas-footer</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the offcanvas footer class.
        </td>
      </tr>
      <tr>
        <td><code>$offcanvas-bg</code></td>
        <td>string</td>
        <td><code>$component-bg</code></td>
        <td>
          Background color for offcanvas container.
        </td>
      </tr>
      <tr>
        <td><code>$offcanvas-bg</code></td>
        <td>string</td>
        <td><code>$component-bg</code></td>
        <td>
          Background color for offcanvas container.
        </td>
      </tr>
      <tr>
        <td><code>$offcanvas-color</code></td>
        <td>string</td>
        <td><code>null</code></td>
        <td>
          Text color for offcanvas container.
        </td>
      </tr>
      <tr>
        <td><code>$offcanvas-border-color</code></td>
        <td>string</td>
        <td><code>$component-overlay-border-color</code></td>
        <td>
          Border color for offcanvas container.
        </td>
      </tr>
      <tr>
        <td><code>$offcanvas-border-width</code></td>
        <td>string</td>
        <td><code>$border-width</code></td>
        <td>
          Border width for offcanvas container.
        </td>
      </tr>
      <tr>
        <td><code>$offcanvas-box-shadow</code></td>
        <td>string</td>
        <td><code>map-get($shadows, "d3")</code></td>
        <td>
          Border width for offcanvas container.
        </td>
      </tr>
      <tr>
        <td><code>$offcanvas-backdrop-bg</code></td>
        <td>string</td>
        <td><code>$dark</code></td>
        <td>
          Background color for offcanvas backdrop.
        </td>
      </tr>
      <tr>
        <td><code>$offcanvas-backdrop-opacity</code></td>
        <td>string</td>
        <td><code>.5</code></td>
        <td>
          Opacity for offcanvas backdrop.
        </td>
      </tr>
      <tr>
        <td><code>$offcanvas-header-padding-y</code></td>
        <td>string</td>
        <td><code>.75rem</code></td>
        <td>
          Vertical padding for offcanvas header.
        </td>
      </tr>
      <tr>
        <td><code>$offcanvas-header-padding-x</code></td>
        <td>string</td>
        <td><code>1rem</code></td>
        <td>
          Horizontal padding for offcanvas header.
        </td>
      </tr>
      <tr>
        <td><code>$offcanvas-header-color</code></td>
        <td>string</td>
        <td><code>null</code></td>
        <td>
          Text color for offcanvas header.
        </td>
      </tr>
      <tr>
        <td><code>$offcanvas-header-background-color</code></td>
        <td>string</td>
        <td><code>null</code></td>
        <td>
          Background color for offcanvas header.
        </td>
      </tr>
      <tr>
        <td><code>$offcanvas-header-border-color</code></td>
        <td>string</td>
        <td><code>rgba($uibase-900, .2)</code></td>
        <td>
          Border color for offcanvas header.
        </td>
      </tr>
      <tr>
        <td><code>$offcanvas-header-border-width</code></td>
        <td>string</td>
        <td><code>0</code></td>
        <td>
          Border width for offcanvas header.
        </td>
      </tr>
      <tr>
        <td><code>$offcanvas-title-line-height</code></td>
        <td>string</td>
        <td><code>$line-height-base</code></td>
        <td>
          Line height for offcanvas header.
        </td>
      </tr>
      <tr>
        <td><code>$offcanvas-close-padding-y</code></td>
        <td>string</td>
        <td><code>.75rem</code></td>
        <td>
          Vertical padding for close button in offcanvas header.
        </td>
      </tr>
      <tr>
        <td><code>$offcanvas-close-padding-x</code></td>
        <td>string</td>
        <td><code>.75rem</code></td>
        <td>
          Horizontal padding for close button in offcanvas header.
        </td>
      </tr>
      <tr>
        <td><code>$offcanvas-body-padding-y</code></td>
        <td>string</td>
        <td><code>.75rem</code></td>
        <td>
          Vertical padding for offcanvas body.
        </td>
      </tr>
      <tr>
        <td><code>$offcanvas-body-padding-x</code></td>
        <td>string</td>
        <td><code>1rem</code></td>
        <td>
          Horizontal padding for offcanvas body.
        </td>
      </tr>
      <tr>
        <td><code>$offcanvas-footer-padding-y</code></td>
        <td>string</td>
        <td><code>.75rem</code></td>
        <td>
          Vertical padding for offcanvas footer.
        </td>
      </tr>
      <tr>
        <td><code>$offcanvas-footer-padding-x</code></td>
        <td>string</td>
        <td><code>1rem</code></td>
        <td>
          Horizontal padding for offcanvas footer.
        </td>
      </tr>
      <tr>
        <td><code>$offcanvas-footer-color</code></td>
        <td>string</td>
        <td><code>null</code></td>
        <td>
          Text color for offcanvas footer.
        </td>
      </tr>
      <tr>
        <td><code>$offcanvas-footer-background-color</code></td>
        <td>string</td>
        <td><code>null</code></td>
        <td>
          Background color for offcanvas footer.
        </td>
      </tr>
      <tr>
        <td><code>$offcanvas-footer-border-color</code></td>
        <td>string</td>
        <td><code>$offcanvas-header-border-color</code></td>
        <td>
          Border color for offcanvas footer.
        </td>
      </tr>
      <tr>
        <td><code>$offcanvas-footer-border-width</code></td>
        <td>string</td>
        <td><code>$offcanvas-header-border-width</code></td>
        <td>
          Border width for modal footer.
        </td>
      </tr>
      <tr>
        <td><code>$offcanvas-horizontal-width</code></td>
        <td>string</td>
        <td><code>rem(400px)</code></td>
        <td>
          Width for horizontal side aligned offcanvas containers.
        </td>
      </tr>
      <tr>
        <td><code>$offcanvas-vertical-height</code></td>
        <td>string</td>
        <td><code>33vh</code></td>
        <td>
          Height for vertical side aligned offcanvas containers.
        </td>
      </tr>
      <tr>
        <td><code>$offcanvas-transition</code></td>
        <td>string</td>
        <td><code>transform .3s linear</code></td>
        <td>
          Transition settings for the <code>.offcanvas</code> animations.
        </td>
      </tr>
      <tr>
        <td><code>$offcanvas-blocked-transition</code></td>
        <td>string</td>
        <td><code>transform .15s linear</code></td>
        <td>
          Transition setting for close being blocked.
        </td>
      </tr>
      <tr>
        <td><code>$offcanvas-blocked-transform</code></td>
        <td>string</td>
        <td><code>scale(1.01)</code></td>
        <td>
          Transform setting for close being blocked.
        </td>
      </tr>
    </tbody>
  </table>
</div>

### Mixins

No mixins available.
