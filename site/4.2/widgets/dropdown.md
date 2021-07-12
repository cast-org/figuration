---
layout: doc
title: Dropdown
subtitle: dropdown.js
description: Add a context menu or list of links to a control item.  Support for nested lists is included automatically.
group: widgets
toc: true
---

## Notices

{% capture callout %}
Widget Dependencies
{.h5}

Dropdown requires the following:

- The third-party library [Popper](https://popper.js.org/) to provide dynamic positioning and viewport detection.  Static positioning does not require the use of Popper.js.
{% endcapture %}
{% renderCallout, callout, "info", "cf-callout-dep" %}

{% capture callout %}
Incompatible Widgets
{.h5}

For accessibility reasons, do not mix use of the [Tab widget]({{ site.path }}/{{ version.docs }}/widgets/tab/) and [Dropdown widget]({{ site.path }}/{{ version.docs }}/widgets/dropdown/) in the same nav item.  This will cause navigation and usability issues.  One or the other, but not both.
{% endcapture %}
{% renderCallout, callout, "warning" %}

## Overview

Wrap the dropdown's toggle (your button or link) and the dropdown menu within `.dropdown`, or another element that declares `position: relative;`. Dropdowns can be triggered from `<a>` or `<button>` elements.

Because of the support for nested dropdown menus, it is currently **required to use a `ul` element** to build your dropdown menus.

There is an expand on hover option available, even though we recommend that you use the default click to toggle mode for consitent usability across devices.

## Examples

### Dropdown Layout

Here is a static example showing the dropdown layout and content pieces.

<div class="cf-example cf-example-bottom cf-example-dropdown">
  <div class="dropdown">
    <button type="button" class="btn btn-info open">
      Dropdown
      <span class="caret"></span>
    </button>
    <ul class="dropdown-menu open">
      <li class="dropdown-header">Sample Header</li>
      <li><a href="#">Action</a></li>
      <li><a href="#" class="disabled" tabindex="-1" aria-disabled="true">Disabled action</a></li>
      <li class="dropdown-submenu">
        <a href="#" class="open">Something else here</a>
        <ul class="dropdown-menu dropdown-subalign-forward open">
          <li class="dropdown-back"><button type="button" class="dropdown-item">Back</button></li>
          <li><a href="#">Action</a></li>
          <li><a href="#">Another action</a></li>
          <li><a href="#">Something else here</a></li>
        </ul>
      </li>
      <li class="dropdown-divider"></li>
      <li><a href="#">Separated link</a></li>
    </ul>
  </div>
</div>

### Basic Dropdown

Wrap the dropdown's trigger and the dropdown menu within `.dropdown`, or another element that declares `position: relative;`. Then, add the menu's HTML.

{% capture example %}
<div class="dropdown">
  <a href="#" role="button" data-cfw="dropdown">
    Toggle Dropdown
  </a>
  <ul class="dropdown-menu">
    <li><a href="#">Action</a></li>
    <li><a href="#">Another action</a></li>
    <li><a href="#">Something else here</a></li>
  </ul>
</div>
{% endcapture %}
{% renderExample example %}

### Toggle Indicator

Optionally use the `.caret` utility icon and add it as an element within the control element. Use [spacing utilities]({{ site.path }}/{{ version.docs }}/utilities/spacing/) as needed.

We use this method instead of using a class placed on the control so that you can use your own icons as needed, and not have interference from hard-coded functionality.

{% capture example %}
<div class="dropdown">
  <a href="#" role="button" data-cfw="dropdown">
    Toggle Dropdown<span class="caret ms-0_25" aria-hidden="true"></span>
  </a>
  <ul class="dropdown-menu">
    <li><a href="#">Action</a></li>
    <li><a href="#">Another action</a></li>
    <li><a href="#">Something else here</a></li>
  </ul>
</div>
{% endcapture %}
{% renderExample example %}

### Single Button Dropdown

You can also use `<button>` elements in your dropdowns instead of `<a>`s.  You can also use swap out the `.dropdown` class on the parent container with `.btn-group` if desired.

{% capture example %}
<div class="btn-group">
  <button type="button" class="btn btn-info btn-group-end" data-cfw="dropdown">
    Dropdown <span class="caret" aria-hidden="true"></span>
  </button>
  <ul class="dropdown-menu">
    <li><a href="#">Action</a></li>
    <li><a href="#">Another action</a></li>
    <li><a href="#">Something else here</a></li>
  </ul>
</div>
{% endcapture %}
{% renderExample example %}

### Split Button Dropdown

Similarly, create split button dropdowns with virtually the same markup as single button dropdowns, but with the addition of `.btn-icon` for proper spacing around the caret. We use this extra class to reduce the horizontal `padding` on either side of the caret and provide a more appropriately sized hit area next to the main button.

The use of the `.btn-group-end` class allows us to place the dropdown within the `.btn-group` itself and not reset the `border-radius` on the end side of the button.

{% capture example %}
<div class="btn-group">
  <button type="button" class="btn btn-info">Default</button>
  <button type="button" class="btn btn-info btn-icon btn-group-end" data-cfw="dropdown" aria-label="Toggle Dropdown">
    <span class="caret" aria-hidden="true"></span>
  </button>
  <ul class="dropdown-menu">
    <li><a href="#">Action</a></li>
    <li><a href="#">Another action</a></li>
    <li><a href="#">Something else here</a></li>
  </ul>
</div>
{% endcapture %}
{% renderExample example %}

### Within a Navbar

Dropdowns also work in a navbar, but require the use of a wrapping element for positioning.  Make sure to use seperate and nested `.nav-item` and `.nav-link` elements as in the following example.

{% capture example %}
<nav class="navbar navbar-expand navbar-light bg-light">
    <a href="#" class="navbar-brand">Navbar</a>
    <ul class="navbar-nav">
      <li class="nav-item dropdown">
        <a href="#" role="button" class="nav-link" data-cfw="dropdown">Dropdown<span class="caret ms-0_25" aria-hidden="true"></span></a>
        <ul class="dropdown-menu">
          <li><a href="#">Action</a></li>
          <li><a href="#">Another action</a></li>
          <li><a href="#">Something else here</a></li>
          <li class="dropdown-divider"></li>
          <li><a href="#">Separated link</a></li>
        </ul>
      </li>
    </ul>
</nav>
{% endcapture %}
{% renderExample example %}

## Components

### Menu Headers

Add a header to label sections of actions in any dropdown menu with `.dropdown-header`.

{% capture example %}
<ul class="dropdown-menu">
  <li class="dropdown-header">Dropdown header</li>
  <li><a href="#">Action</a></li>
  <li><a href="#">Another action</a></li>
</ul>

<ul class="dropdown-menu">
  <li><h6 class="dropdown-header">Dropdown header</h6></li>
  <li><a href="#">Action</a></li>
  <li><a href="#">Another action</a></li>
</ul>
{% endcapture %}
{% renderExample example %}

### Menu Text

Add a non-interactive text item to a dropdown menu with `.dropdown-text`.

{% capture example %}
<ul class="dropdown-menu">
  <li class="dropdown-text">Non-interactive text</li>
  <li><a href="#">Action</a></li>
  <li><a href="#">Another action</a></li>
</ul>
{% endcapture %}
{% renderExample example %}

### Menu Dividers

Separate groups of related menu items with a divider by using `.dropdown-divider`.

{% capture example %}
<ul class="dropdown-menu">
  <li><a href="#">Action</a></li>
  <li><a href="#">Another action</a></li>
  <li><a href="#">Something else here</a></li>
  <li class="dropdown-divider"></li>
  <li><a href="#">Separated link</a></li>
</ul>
{% endcapture %}
{% renderExample example %}

### Disabled Menu Items

Add `.disabled` to the `a` item in the dropdown to make them visually _appear_ disabled.

{%- assign calloutAnchors = version.docs | valueIfEmpty: site.version.docs | prepend: "./" | append: "/partials/callout-warning-disabling-anchors.md" -%}
{% include calloutAnchors %}

{% capture example %}
<ul class="dropdown-menu">
  <li><a href="#">Regular link</a></li>
  <li><a href="#" class="disabled" tabindex="-1" aria-disabled="true">Disabled link</a></li>
  <li><a href="#">Another link</a></li>
</ul>
{% endcapture %}
{% renderExample example %}

### Active Menu Items

Add `.active` to the child of the `li` item in the dropdown to show a visual emphasis.

To convey the active state to assistive technologies, use the `aria-current` attribute &mdash; using the `page` value for the current page, or `true` for the current item in a set.

{% capture example %}
<ul class="dropdown-menu">
  <li><a href="#">Regular link</a></li>
  <li><a href="#" class="active" aria-current="true">Active link</a></li>
  <li><a href="#">Another link</a></li>
</ul>
{% endcapture %}
{% renderExample example %}

### Submenus

You can nest submenus by adding a nested list along side it's toggle.

{% capture example %}
<div class="dropdown">
  <button type="button" class="btn btn-info" data-cfw="dropdown">
    Dropdown <span class="caret" aria-hidden="true"></span>
  </button>
  <ul class="dropdown-menu">
    <li class="dropdown-header">Sample Header</li>
    <li><a href="#">Action</a></li>
    <li>
      <a href="#">Something else here</a>
      <ul>
        <li><a href="#">Action</a></li>
        <li><a href="#">Another action</a></li>
      </ul>
    </li>
    <li><a href="#">Another action</a></li>
  </ul>
</div>
{% endcapture %}
{% renderExample example %}

### 'Back' Menu Items

Using the [`backlink` option](#options), you can have 'back' menu items automatically inserted into all submenus.  These links will close the current submenu and move focus back onto the parent menu item.  This can be useful if the parent menu/submenu item is being hidden, or obscured by the current submenu.

{% capture example %}
<div class="dropdown">
  <button type="button" class="btn btn-info" data-cfw="dropdown" data-cfw-dropdown-backlink="true">
    Dropdown <span class="caret" aria-hidden="true"></span>
  </button>
  <ul class="dropdown-menu">
    <li><a href="#">Action</a></li>
    <li><a href="#">Another action</a></li>
    <li>
      <a href="#">Something else here</a>
      <ul>
        <li><a href="#">Action</a></li>
        <li><a href="#">Another action</a></li>
        <li>
          <a href="#">Something else here</a>
          <ul>
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
          </ul>
        </li>
      </ul>
    </li>
    <li class="dropdown-divider"></li>
    <li><a href="#" class="disabled" tabindex="-1" aria-disabled="true">Disabled item</a></li>
  </ul>
</div>
{% endcapture %}
{% renderExample example %}

### Special Items

The Dropdown widget in Figuration is primarily designed for menus and navigation, not a container for forms or editable content, such as a login or registration.  You might want to consider using the [Popover widget]({{ site.path }}/{{ version.docs }}/widgets/popover/) instead, or reworking the workflow or interface design.

However, there is some support for handling `<button>`, `<input>`, and `<textarea>` elements within a menu.  Each of these special items require the use of either the `.dropdown-item` or `.dropdown-text` class when inside the menu to adjust their layout .

#### Buttons

You can optionally use `<button>` elements in your dropdowns instead of just `<a>`s.

{% capture example %}
<div class="dropdown">
  <button type="button" class="btn btn-info" data-cfw="dropdown" data-cfw-dropdown-backlink="true">
    Dropdown <span class="caret" aria-hidden="true"></span>
  </button>
  <ul class="dropdown-menu">
    <li><button type="button" class="dropdown-item">Regular button</button></li>
    <li><button type="button" class="dropdown-item active">Active button</button></li>
    <li><button type="button" class="dropdown-item">Another button</button></li>
    <li class="dropdown-divider"></li>
    <li><button type="button" class="dropdown-item" disabled>Disabled button</button></li>
  </ul>
</div>
{% endcapture %}
{% renderExample example %}

#### Checkbox and Radio Inputs

Checkbox and radio inputs are allowed, but only **one per menu item**.

{% capture example %}
<div class="dropdown">
  <button type="button" class="btn btn-info" data-cfw="dropdown" data-cfw-dropdown-backlink="true">
    Dropdown <span class="caret" aria-hidden="true"></span>
  </button>
  <ul class="dropdown-menu">
    <li class="dropdown-text">
      <div class="form-check">
        <input type="checkbox" id="checkbox1" class="form-check-input">
        <label for="checkbox1" class="form-check-label">Checkbox 1</label>
      </div>
    </li>
    <li class="dropdown-text">
      <div class="form-check">
        <input type="checkbox" id="checkbox2" class="form-check-input">
        <label for="checkbox2" class="form-check-label">Checkbox 2</label>
      </div>
    </li>
    <li class="dropdown-text">
      <div class="form-check">
        <input type="checkbox" id="checkbox3" class="form-check-input">
        <label for="checkbox3" class="form-check-label">Checkbox 3</label>
      </div>
    </li>
  </ul>
</div>
{% endcapture %}
{% renderExample example %}

{% capture example %}
<div class="dropdown">
  <button type="button" class="btn btn-info" data-cfw="dropdown" data-cfw-dropdown-backlink="true">
    Dropdown <span class="caret" aria-hidden="true"></span>
  </button>
  <ul class="dropdown-menu">
    <li class="dropdown-text">
      <div class="form-check">
        <input type="radio" id="radio1" name="dropradio" class="form-check-input">
        <label for="radio1" class="form-check-label">Radio 1</label>
      </div>
    </li>
    <li class="dropdown-text">
      <div class="form-check">
        <input type="radio" id="radio2" name="dropradio" class="form-check-input">
        <label for="radio2" class="form-check-label">Radio 2</label>
      </div>
    </li>
    <li class="dropdown-text">
      <div class="form-check">
        <input type="radio" id="radio3" name="dropradio" class="form-check-input">
        <label for="radio3" class="form-check-label">Radio 3</label>
      </div>
    </li>
  </ul>
</div>
{% endcapture %}
{% renderExample example %}

#### Textual Inputs

Add `<input>`, `<textarea>`, or `<select>` items to your dropdown menu.  Other types of [textual inputs]({{ site.path }}/{{ version.docs }}/content/forms/#textual-inputs) have not been tested, and may cause issues.  Again, use only **one per menu item**.

{% capture example %}
<div class="dropdown">
  <button type="button" class="btn btn-info" data-cfw="dropdown" data-cfw-dropdown-backlink="true">
    Dropdown <span class="caret" aria-hidden="true"></span>
  </button>
  <ul class="dropdown-menu">
    <li><a href="#">Action</a></li>
    <li><a href="#">Action</a></li>
    <li>
      <div class="dropdown-text">
        <label for="input1" class="sr-only">Example input</label>
        <input type="text" id="input1" class="form-control" placeholder="text input"/>
      </div>
    </li>
    <li>
      <div class="dropdown-text">
        <label for="textarea1" class="sr-only">Example textarea</label>
        <textarea id="textarea1" class="form-control" placeholder="textarea"></textarea>
      </div>
    </li>
    <li>
      <div class="dropdown-text">
        <label for="select1" class="sr-only">Example select</label>
        <select id="select1" class="form-control">
            <option>One</option>
            <option>Two</option>
            <option>Three</option>
        </select>
      </div>
    </li>
    <li><a href="#">Action</a></li>
  </ul>
</div>
{% endcapture %}
{% renderExample example %}

## Variants

### Reverse Alignment

By default, a dropdown menu is automatically positioned 100% from the top and aligned to the left side of its parent.  While submenu items are aligned 100% from the left and to the top of its parent.

Add `.dropreverse` to a `.dropdown-menu` to align the dropdown menu to the right side of the parent. This will also make all submenus open out to the left side.  This can also be combined with `.dropup`.

**Heads up!** When using the right-to-left, `rtl`, variant of Figuration all horizontal directions will be reversed.  Meaning left becomes right, and vice-versa.

{% capture example %}
<div class="dropdown float-end">
  <button type="button" class="btn btn-info" data-cfw="dropdown" data-cfw-dropdown-backlink="true">
    Reverse Dropdown <span class="caret" aria-hidden="true"></span>
  </button>
  <ul class="dropdown-menu dropreverse">
    <li class="dropdown-header">Dropdown header</li>
    <li><a href="#">Action</a></li>
    <li><a href="#">Another action</a></li>
    <li>
      <a href="#">Something else here</a>
      <ul>
        <li><a href="#">Action</a></li>
        <li><a href="#">Another action</a></li>
        <li>
          <a href="#">Something else here</a>
          <ul>
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
          </ul>
        </li>
        <li class="dropdown-divider"></li>
        <li><a href="#">Separated link</a></li>
      </ul>
    </li>
    <li class="dropdown-divider"></li>
    <li><a href="#" class="disabled" tabindex="-1" aria-disabled="true">Disabled link</a></li>
  </ul>
</div>
{% endcapture %}
{% renderExample example, "clearfix" %}

### Dropup

Trigger dropdown menus above elements by adding `.dropup` to the `.dropdown-menu` element.  The visual caret for the toggle control can be reversed in direction by switching to `.caretup`.

<div class="cf-example">
  <div class="dropdown">
    <button type="button" class="btn btn-info" data-cfw="dropdown" data-cfw-dropdown-backlink="true">
      Dropup <span class="caretup" aria-hidden="true"></span>
    </button>
    <ul class="dropdown-menu dropup">
      <li class="dropdown-header">Dropdown header</li>
      <li><a href="#">Action</a></li>
      <li><a href="#">Another action</a></li>
      <li>
        <a href="#">Something else here</a>
        <ul>
          <li><a href="#">Action</a></li>
          <li><a href="#">Another action</a></li>
          <li>
            <a href="#">Something else here</a>
            <ul>
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
            </ul>
          </li>
          <li class="dropdown-divider"></li>
          <li><a href="#">Separated link</a></li>
        </ul>
      </li>
      <li class="dropdown-divider"></li>
      <li><a href="#" class="disabled" tabindex="-1" aria-disabled="true">Disabled link</a></li>
    </ul>
  </div>
</div>

{% capture highlight %}
<div class="dropdown">
  <button type="button" class="btn btn-info" data-cfw="dropdown" data-cfw-dropdown-backlink="true">
    Dropup <span class="caretup" aria-hidden="true"></span>
  </button>
  <ul class="dropdown-menu dropup">
    ...
  </ul>
</div>
{% endcapture %}
{% renderHighlight highlight, "html" %}

### Side Aligned

Use `.dropstart` and `.dropend` to attach the menu to the side of the trigger.  As indicated by the classnames, `.dropstart` attaches the submenu to the start side of the parent menu, while `.dropend` attaches on the end side. Simply place either class on the `.dropdown-menu` element. This can also be combined with `.dropup`.

Submenus will continue to open in the same direction as the parent, unless [Submenu Alignment](#submenu-alignment) overrides are used.

<div class="cf-example">
  <div class="btn-toolbar flex-center">
    <div class="btn-group me-1">
      <button type="button" class="btn btn-info btn-group-end" data-cfw="dropdown">
        <span class="caretstart" aria-hidden="true"></span> Dropstart
      </button>
      <ul class="dropdown-menu dropstart">
        <li><a href="#">Action</a></li>
        <li><a href="#">Another action</a></li>
        <li>
          <a href="#">Something else here</a>
          <ul>
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="btn-group">
      <button type="button" class="btn btn-info btn-group-end" data-cfw="dropdown">
        Dropend <span class="caretend" aria-hidden="true"></span>
      </button>
      <ul class="dropdown-menu dropend">
        <li><a href="#">Action</a></li>
        <li><a href="#">Another action</a></li>
        <li>
          <a href="#">Something else here</a>
          <ul>
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
  <div class="btn-toolbar flex-center mt-1">
    <div class="btn-group me-1">
      <div class="btn-group">
        <button type="button" class="btn btn-info btn-icon btn-group-end" data-cfw="dropdown" aria-label="Toggle Dropdown">
          <span class="caretstart" aria-hidden="true"></span>
        </button>
        <ul class="dropdown-menu dropstart">
          <li><a href="#">Action</a></li>
          <li><a href="#">Another action</a></li>
          <li>
            <a href="#">Something else here</a>
            <ul>
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
            </ul>
          </li>
        </ul>
      </div>
      <button type="button" class="btn btn-info">Split Dropstart</button>
    </div>
    <div class="btn-group">
      <button type="button" class="btn btn-info">Split Dropend</button>
      <div class="btn-group">
        <button type="button" class="btn btn-info btn-icon btn-group-end" data-cfw="dropdown" aria-label="Toggle Dropdown">
          <span class="caretend" aria-hidden="true"></span>
        </button>
        <ul class="dropdown-menu dropend">
          <li><a href="#">Action</a></li>
          <li><a href="#">Another action</a></li>
          <li>
            <a href="#">Something else here</a>
            <ul>
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

{% capture highlight %}
<div class="btn-group">
  <button type="button" class="btn btn-info btn-group-end" data-cfw="dropdown">
    <span class="caret" aria-hidden="true"></span> Dropstart
  </button>
  <ul class="dropdown-menu dropstart">
    ...
  </ul>
</div>

<div class="btn-group">
  <button type="button" class="btn btn-info btn-group-end" data-cfw="dropdown">
    Dropend <span class="caret" aria-hidden="true"></span>
  </button>
  <ul class="dropdown-menu dropend">
    ...
  </ul>
</div>

<div class="btn-group">
  <div class="btn-group">
    <button type="button" class="btn btn-info" data-cfw="dropdown" aria-label="Toggle Dropdown">
      <span class="caret" aria-hidden="true"></span>
    </button>
    <ul class="dropdown-menu">
      ...
    </ul>
  </div>
  <button type="button" class="btn btn-info">Split Dropstart</button>
</div>

<div class="btn-group">
  <button type="button" class="btn btn-info">Split Dropend</button>
  <div class="btn-group">
    <button type="button" class="btn btn-info" data-cfw="dropdown" aria-label="Toggle Dropdown">
      <span class="caret" aria-hidden="true"></span>
    </button>
    <ul class="dropdown-menu">
      ...
    </ul>
  </div>
</div>
{% endcapture %}
{% renderHighlight highlight, "html" %}

### Submenu Alignment

You can also use the available `.dropstart` and `.dropend` to switch submenu directions if needed.  Place either class on the `ol` or `ul` submenu list element.

{% capture example %}
<div class="dropdown">
  <button type="button" class="btn btn-info" data-cfw="dropdown">
    Dropdown <span class="caret" aria-hidden="true"></span>
  </button>
  <ul class="dropdown-menu">
    <li class="dropdown-header">Dropdown header</li>
    <li><a href="#">Action</a></li>
    <li>
      <a href="#">Start side menu</a>
      <ul class="dropstart">
        <li>
          <a href="#">Start side menu</a>
          <ul class="dropstart">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
          </ul>
        </li>
        <li>
          <a href="#">End side menu</a>
          <ul class="dropend">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
          </ul>
        </li>
      </ul>
    </li>
    <li>
      <a href="#">End side menu</a>
      <ul class="dropend">
        <li>
          <a href="#">Start side menu</a>
          <ul class="dropstart">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
          </ul>
        </li>
        <li>
          <a href="#">End side menu</a>
          <ul class="dropend">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
          </ul>
        </li>
      </ul>
    </li>
    <li class="dropdown-divider"></li>
    <li><a href="#" class="disabled" tabindex="-1" aria-disabled="true">Separated link</a></li>
  </ul>
</div>
{% endcapture %}
{% renderExample example %}

### Using a Reference

Use the `reference` option to help control the location of a dropdown menu.

{% capture example %}
<div class="d-flex">
  <div class="btn-group me-1">
    <button type="button" class="btn btn-info">Default</button>
    <button type="button" class="btn btn-info btn-icon btn-group-end" data-cfw="dropdown" aria-label="Toggle Dropdown">
      <span class="caret" aria-hidden="true"></span>
    </button>
    <ul class="dropdown-menu">
      <li><a href="#">Action</a></li>
      <li><a href="#">Another action</a></li>
      <li><a href="#">Something else here</a></li>
    </ul>
  </div>

  <div class="btn-group">
    <button type="button" class="btn btn-info">Reference</button>
    <button type="button" class="btn btn-info btn-icon btn-group-end" data-cfw="dropdown" data-cfw-dropdown-reference="parent" aria-label="Toggle Dropdown">
      <span class="caret" aria-hidden="true"></span>
    </button>
    <ul class="dropdown-menu">
      <li><a href="#">Action</a></li>
      <li><a href="#">Another action</a></li>
      <li><a href="#">Something else here</a></li>
    </ul>
  </div>
</div>
{% endcapture %}
{% renderExample example %}

### Auto Close

By default, the dropdown menu is closed when clicking inside or outside the dropdown menu. You can use the `autoClose` option to change this behavior of the dropdown.

When auto close is being used, pressing the <kbd>ESC</kbd> key will still close the menu (or submenu), and all methods should work as expected.

<div class="cf-example">
  <div class="btn-group">
    <button type="button" class="btn btn-info btn-group-end" data-cfw="dropdown" data-cfw-dropdown-auto-close="true">
      Default close <span class="caret" aria-hidden="true"></span>
    </button>
    <ul class="dropdown-menu">
      <li><a href="#">Action</a></li>
      <li><a href="#">Another action</a></li>
      <li><a href="#">Something else here</a></li>
    </ul>
  </div>
  <div class="btn-group">
    <button type="button" class="btn btn-info btn-group-end" data-cfw="dropdown" data-cfw-dropdown-auto-close="false">
      Manual close <span class="caret" aria-hidden="true"></span>
    </button>
    <ul class="dropdown-menu">
      <li><a href="#">Action</a></li>
      <li><a href="#">Another action</a></li>
      <li><a href="#">Something else here</a></li>
    </ul>
  </div>
  <div class="btn-group">
    <button type="button" class="btn btn-info btn-group-end" data-cfw="dropdown" data-cfw-dropdown-auto-close="outside">
      Outside close <span class="caret" aria-hidden="true"></span>
    </button>
    <ul class="dropdown-menu">
      <li><a href="#">Action</a></li>
      <li><a href="#">Another action</a></li>
      <li><a href="#">Something else here</a></li>
    </ul>
  </div>
  <div class="btn-group">
    <button type="button" class="btn btn-info btn-group-end" data-cfw="dropdown" data-cfw-dropdown-auto-close="inside">
      Inside close <span class="caret" aria-hidden="true"></span>
    </button>
    <ul class="dropdown-menu">
      <li><a href="#">Action</a></li>
      <li><a href="#">Another action</a></li>
      <li><a href="#">Something else here</a></li>
    </ul>
  </div>
</div>

{% capture highlight %}
<div class="btn-group">
  <button type="button" class="btn btn-info btn-group-end" data-cfw="dropdown" data-cfw-dropdown-auto-close="true">
    Default close <span class="caret" aria-hidden="true"></span>
  </button>
  <ul class="dropdown-menu">
    ...
  </ul>
</div>

<div class="btn-group">
  <button type="button" class="btn btn-info btn-group-end" data-cfw="dropdown" data-cfw-dropdown-auto-close="false">
    Manual close <span class="caret" aria-hidden="true"></span>
  </button>
  <ul class="dropdown-menu">
    ...
  </ul>
</div>

<div class="btn-group">
  <button type="button" class="btn btn-info btn-group-end" data-cfw="dropdown" data-cfw-dropdown-auto-close="outside">
    Outside close <span class="caret" aria-hidden="true"></span>
  </button>
  <ul class="dropdown-menu">
    ...
  </ul>
</div>
<div class="btn-group">
  <button type="button" class="btn btn-info btn-group-end" data-cfw="dropdown" data-cfw-dropdown-auto-close="inside">
    Inside close <span class="caret" aria-hidden="true"></span>
  </button>
  <ul class="dropdown-menu">
    ...
  </ul>
</div>
</div>

{% endcapture %}
{% renderHighlight highlight, "html" %}

## Usage

Via data attributes or JavaScript, the dropdown widget toggles hidden content (dropdown menus) by toggling the `.open` class on the parent list item.

On touch capable devices, the optional expand on hover functionality is forced off in favor of the default click interaction. Also, opening a dropdown adds empty (`$.noop`) `mouseover` handlers to the immediate children of the `<body>` element. This ugly hack is necessary to work around a [quirk in iOS' event delegation](https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html), which would otherwise prevent a tap anywhere outside of the dropdown from triggering the code that closes the dropdown. Once the dropdown is closed, these additional empty `mouseover` handlers are removed.

Note: The `data-cfw="dropdown"` attribute is relied on for closing dropdown menus at an application level, so it's a good idea to always use it.

### Via Data Attributes

Add `data-cfw="dropdown"` to the dropdown toggle element, and the widget will automatically link to the sibling `.dropdown-menu` list element.

Be sure to add the class `dropdown-menu` to the dropdown menu to ensure there is no flash of content at page load.

{% capture highlight %}
<div class="dropdown">
  <a href="#" role="button" data-cfw="dropdown">Dropdown trigger</a>
  <ul class="dropdown-menu">
    ...
  </ul>
</div>
{% endcapture %}
{% renderHighlight highlight, "html" %}

### Via JavaScript

Call the dropdowns via JavaScript:

{% capture highlight %}
$('#myDropdown').CFW_Dropdown();
{% endcapture %}
{% renderHighlight highlight, "js" %}

### Options

Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-cfw-dropdown`, as in `data-cfw-dropdown-backlink="true"`. Make sure to change the case type of the option name from camelCase to kebab-case when passing the options via data attributes. For example, instead of using `data-cfw-dropdown-autoClose="false"`, use `data-cfw-dropdown-auto-close="false"`.

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
        <td>Either the selector, or the string related to the target dropdown having a <code>data-cfw-dropdown-target</code> attribute.</td>
      </tr>
      <tr>
        <td><code>delay</code></td>
        <td>integer</td>
        <td><code>350</code></td>
        <td>Delay for hiding menu on loss of focus or hover when not in click only mode (milliseconds).</td>
      </tr>
      <tr>
        <td><code>hover</code></td>
        <td>boolean</td>
        <td><code>false</code></td>
        <td>If hover style navigation should be enabled in addition to click/key navigation.  If a touch capable device is found, this setting is overruled.</td>
      </tr>
      <tr>
        <td><code>backlink</code></td>
        <td>boolean</td>
        <td><code>false</code></td>
        <td>Insert back links into submenus.</td>
      </tr>
      <tr>
        <td><code>backtop</code></td>
        <td>boolean</td>
        <td><code>false</code></td>
        <td>If back links should be applied at the top level menu as opposed to only submenus.</td>
      </tr>
      <tr>
        <td><code>backtext</code></td>
        <td>string</td>
        <td><code>'Back'</code></td>
        <td>Text to be used for back links.</td>
      </tr>
      <tr>
        <td><code>container</code></td>
        <td>element | false</td>
        <td><code>false</code></td>
        <td>
          <p>Appends the dropdown menu to a specific element. Example: <code>container: 'body'</code></p>
        </td>
      </tr>
      <tr>
        <td><code>reference</code></td>
        <td>string | element</td>
        <td><code>'toggle'</code></td>
        <td>
          <p>Reference element of the dropdown menu. Accepts the values of <code>'toggle'</code>, <code>'parent'</code>, an HTMLElement reference, or an object providing <code>getBoundingClientRect</code>. For more information refer to Popper.js's <a href="https://popper.js.org/docs/v1/#referenceObject">referenceObject docs</a>.</p>
        </td>
      </tr>
      <tr>
        <td><code>boundary</code></td>
        <td>string | element</td>
        <td><code>'scrollParent'</code></td>
        <td>
          <p>Overflow constraint boundary of the dropdown menu. Accepts the values of <code>'viewport'</code>, <code>'window'</code>, <code>'scrollParent'</code>, or an HTMLElement reference (JavaScript only). For more information refer to Popper.js's <a href="https://popper.js.org/docs/v1/#modifiers..preventOverflow.boundariesElement">preventOverflow docs</a>.</p>
        </td>
      </tr>
      <tr>
        <td><code>flip</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          <p>Allow Dropdown to flip in case of an overlapping on the reference element. For more information refer to Popper's <a href="https://popper.js.org/docs/v1/#modifiers..flip.enabled">flip docs</a>.</p>
        </td>
      </tr>
      <tr>
        <td><code>display</code></td>
        <td>string</td>
        <td><code>'dynamic'</code></td>
        <td>
          <p>By default, we use Popper for dynamic positioning. Disable this with <code>'static'</code>.</p>
        </td>
      </tr>
      <tr>
        <td><code>popperConfig</code></td>
        <td>null | object</td>
        <td><code>null</code></td>
        <td>Pass a customized <a href="https://popper.js.org/docs/v1/#Popper.Defaults">Popper configuration</a> that will override the default Popper configuration.</td>
      </tr>
      <tr>
        <td><code>autoClose</code></td>
        <td>boolean | string</td>
        <td><code>true</code></td>
        <td>
          <p>Configure the auto close behavior of the dropdown:</p>
          <ul>
            <li><code>true</code> - (default) the dropdown will close by clicking outside or inside the dropdown menu.</li>
            <li><code>false</code> - the dropdown will close by clicking the toggle button, but not when clicking inside or outside the menu.</li>
            <li><code>'inside'</code> - the dropdown will close when clicking inside the dropdown menu.</li>
            <li><code>'outside'</code> - the dropdown will close when clicking outside the dropdown menu.</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td><code>loop</code></td>
        <td>boolean</td>
        <td><code>true</code</td>
        <td>Allow looping from the last menu item to the first menu item, and vice versa, when using arrow key navigation.</td>
      </tr>
      <tr>
        <td><code>startEnd</code></td>
        <td>boolean</td>
        <td><code>true</code</td>
        <td>
            <p>When pressing the up arrow when focused on the main trigger, the last menu item in the list will recieve focus.</p>
            Note: Does not apply to submenus.
        </td>
      </tr>
    </tbody>
  </table>
</div>

{% capture highlight %}
$('#myDropdown').CFW_Dropdown({
    backlink: true
});
{% endcapture %}
{% renderHighlight highlight, "js" %}

### Methods

Event callbacks happen on the dropdown trigger element.

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
        <td>Toggles a root menu to be shown or hidden.</td>
      </tr>
      <tr>
        <td><code>show</code></td>
        <td>Shows the root menu element.</td>
      </tr>
      <tr>
        <td><code>hide</code></td>
        <td>Hides the root menu element, and any open submenus.</td>
      </tr>
      <tr>
        <td><code>dispose</code></td>
        <td>Hides the root menu element and disconnect all the event listeners and data from the menu items and the trigger element.</td>
      </tr>
    </tbody>
  </table>
</div>

{% capture highlight %}
$('#myDropdown').CFW_Dropdown('show');
{% endcapture %}
{% renderHighlight highlight, "js" %}

### Events

Event callbacks for the root menu happen on the toggle element. Callbacks for the submenus occur on the submenu's sibling anchor (toggle).

Show and hide, both before and after, events have an added `relatedTarget` property, whose value is the toggling anchor element.

Before and after hide events have a `clickEvent` property (only when the original event type is `click`) that contains an event object for the click event.

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
        <td><code>init.cfw.dropdown</code></td>
        <td>This event fires after the menu item is initialized.</td>
      </tr>
      <tr>
        <td><code>beforeShow.cfw.dropdown</code></td>
        <td>This event is fired immediately when the internal <code>showMenu</code> method is called.</td>
      </tr>
      <tr>
        <td><code>afterShow.cfw.dropdown</code></td>
        <td>This event is fired when a menu element has been made visible to the user.</td>
      </tr>
      <tr>
        <td><code>beforeHide.cfw.dropdown</code></td>
        <td>This event is fired immediately when the internal <code>hideMenu</code> method is called.</td>
      </tr>
      <tr>
        <td><code>afterHide.cfw.dropdown</code></td>
        <td>This event is fired when a menu element has been hidden from the user.</td>
      </tr>
    </tbody>
  </table>
</div>

{% capture highlight  %}
$('#mDropdown').on('afterHide.cfw.dropdown', function() {
  // do something...
});
{% endcapture %}
{% renderHighlight highlight, "js" %}

## Accessibility

### General Purpose

While there is an official [<abbr title="Web Accessibility Initiative">WAI</abbr>-<abbr title="Accessible Rich Internet Applications">ARIA</abbr>](https://www.w3.org/TR/wai-aria/) specification for a [`role="menu"` widget](https://www.w3.org/TR/wai-aria/#menu), it is mainly intended for application-style menus that invoke functionality or actions.

The dropdown widget provided by Figuration is intended be generic and apply to a wider number of use-cases. If you require full <abbr title="Accessible Rich Internet Applications">ARIA</abbr> compliant menus, then you will need to add the appropriate `role` and `aria-` attributes as needed.

### Keyboard Navigation

<dl class="cf-docs-keys">
  <dt>
    <kbd>enter</kbd> / <kbd>space</kbd>
  </dt>
  <dd>
    When the focus is on the main trigger item, the menu is opened, and the menu items can be navigated using the arrow keys.
  </dd>
  <dt>
    <kbd>esc</kbd>
  </dt>
  <dd>
    Closes the currently focused menu, and moved focus to the main trigger.
  </dd>
  <dt>
    <kbd title="up arrow"><span class="fas fa-arrow-up" aria-hidden="true"></span></kbd> /
    <kbd title="down arrow"><span class="fas fa-arrow-down" aria-hidden="true"></span></kbd>
  </dt>
  <dd>
    Moves focus to the previous or next item in the menu list.
    If current focus is in a textarea, the text caret will move accordingly.
    If current focus is on a checkbox or radio input, moves focus to the previous or next item in the menu list.
  </dd>
  <dt>
    <kbd title="right arrow"><span class="fas fa-arrow-right" aria-hidden="true"></span></kbd>
  </dt>
  <dd>
    Opens the submenu if one exists.
    If current focus is in a text input or textarea, the text caret will move accordingly.
  </dd>
  <dt>
    <kbd title="left arrow"><span class="fas fa-arrow-left" aria-hidden="true"></span></kbd>
  </dt>
  <dd>
    Closes the currently focused submenu, and returns focus back to the triggering element.
    If current focus is in a text input or textarea, the text caret will move accordingly.
  </dd>
</dl>

## SASS Reference

### Variables

The available [Customization options]({{ site.path }}/{{ version.docs }}/get-started/options/), or Sass variables, that can be customized for the dropdown component.

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
                <td><code>$enable-dropdown</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the dropdown component classes.
                    Smaller segements of the dropdown component classes can be disabled with the following <code>$enable-*</code> variables.
                </td>
            </tr>
            <tr>
                <td><code>$enable-dropdown-header</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the dropdown header class.
                </td>
            </tr>
            <tr>
                <td><code>$enable-dropdown-text</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the dropdown text class.
                </td>
            </tr>
            <tr>
                <td><code>$enable-dropdown-divider</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the dropdown divider class.
                </td>
            </tr>
            <tr>
                <td><code>$enable-dropdown-dropup</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the dropdown dropup classes.
                </td>
            </tr>
            <tr>
                <td><code>$enable-dropdown-back</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the dropdown 'back' caret indicator class.
                </td>
            </tr>
            <tr>
                <td><code>$dropdown-min-width</code></td>
                <td>string</td>
                <td><code>10rem</code></td>
                <td>
                    Minimum width for dropdown menus.
                </td>
            </tr>
            <tr>
                <td><code>$dropdown-padding-x</code></td>
                <td>string</td>
                <td><code>0</code></td>
                <td>
                    Horizontal padding for dropdown menus.
                </td>
            </tr>
            <tr>
                <td><code>$dropdown-padding-y</code></td>
                <td>string</td>
                <td><code>.3125rem</code></td>
                <td>
                    Vertical padding for dropdown menus.
                </td>
            </tr>
            <tr>
                <td><code>$dropdown-spacer</code></td>
                <td>string</td>
                <td><code>.125rem</code></td>
                <td>
                    Top vertical spacing for dropdown menus.
                </td>
            </tr>
            <tr>
                <td><code>$dropdown-font-size</code></td>
                <td>string</td>
                <td><code>$font-size-base</code></td>
                <td>
                    Font size for dropdown menus.
                </td>
            </tr>
            <tr>
                <td><code>$dropdown-line-height</code></td>
                <td>string</td>
                <td><code>$line-height-base</code></td>
                <td>
                    Line height for dropdown menus.
                </td>
            </tr>
            <tr>
                <td><code>$dropdown-bg</code></td>
                <td>string</td>
                <td><code>$component-bg</code></td>
                <td>
                    Background color for dropdown menus.
                </td>
            </tr>
            <tr>
                <td><code>$dropdown-border-color</code></td>
                <td>string</td>
                <td><code>$component-border-color</code></td>
                <td>
                    Border color for dropdown menus.
                </td>
            </tr>
            <tr>
                <td><code>$dropdown-border-width</code></td>
                <td>string</td>
                <td><code>$border-width</code></td>
                <td>
                    Border width for dropdown menus.
                </td>
            </tr>
            <tr>
                <td><code>$dropdown-border-radius</code></td>
                <td>string</td>
                <td><code>$border-radius</code></td>
                <td>
                    Border radius for dropdown menus.
                </td>
            </tr>
            <tr>
                <td><code>$dropdown-divider-width</code></td>
                <td>string</td>
                <td><code>$border-width</code></td>
                <td>
                    Border width for dropdown menu dividers.
                </td>
            </tr>
            <tr>
                <td><code>$dropdown-divider-color</code></td>
                <td>string</td>
                <td><code>$component-section-border-color</code></td>
                <td>
                    Border color for dropdown menu dividers.
                </td>
            </tr>
            <tr>
                <td><code>$dropdown-divider-spacer</code></td>
                <td>string</td>
                <td><code>.3125rem</code></td>
                <td>
                    Vertical spacing for dropdown menu dividers.
                </td>
            </tr>
            <tr>
                <td><code>$dropdown-box-shadow</code></td>
                <td>string</td>
                <td><code>map-get($shadows, "d2")</code></td>
                <td>
                    Box shadow for dropdown menus.
                </td>
            </tr>
            <tr>
                <td><code>$dropdown-link-color</code></td>
                <td>string</td>
                <td><code>$component-action-color</code></td>
                <td>
                    Text color for dropdown menu links.
                </td>
            </tr>
            <tr>
                <td><code>$dropdown-link-hover-color</code></td>
                <td>string</td>
                <td><code>$component-action-hover-color</code></td>
                <td>
                    Text color for dropdown menu links in hover and focus states.
                </td>
            </tr>
            <tr>
                <td><code>$dropdown-link-hover-bg</code></td>
                <td>string</td>
                <td><code>$component-hover-bg</code></td>
                <td>
                    Background color for dropdown menu links in hover and focus states.
                </td>
            </tr>
            <tr>
                <td><code>$dropdown-link-active-color</code></td>
                <td>string</td>
                <td><code>$component-active-color</code></td>
                <td>
                    Text color for dropdown menu links in active state.
                </td>
            </tr>
            <tr>
                <td><code>$dropdown-link-active-bg</code></td>
                <td>string</td>
                <td><code>$component-active-bg</code></td>
                <td>
                    Background color for dropdown menu links in active state.
                </td>
            </tr>
            <tr>
                <td><code>$dropdown-link-disabled-color</code></td>
                <td>string</td>
                <td><code>$component-active-color</code></td>
                <td>
                    Text color for dropdown menu links in disabled state.
                </td>
            </tr>
            <tr>
                <td><code>$dropdown-link-disabled-bg</code></td>
                <td>string</td>
                <td><code>$component-active-bg</code></td>
                <td>
                    Background color for dropdown menu links in disabled state.
                </td>
            </tr>
            <tr>
                <td><code>$dropdown-item-padding-y</code></td>
                <td>string</td>
                <td><code>.125rem</code></td>
                <td>
                    Vertical padding for dropdown menu links.
                </td>
            </tr>
            <tr>
                <td><code>$dropdown-item-padding-x</code></td>
                <td>string</td>
                <td><code>1.125rem</code></td>
                <td>
                    Horizontal padding for dropdown menu links.
                </td>
            </tr>
            <tr>
                <td><code>$dropdown-header-padding</code></td>
                <td>string</td>
                <td><code>$dropdown-item-padding-y $dropdown-item-padding-x</code></td>
                <td>
                    Padding for dropdown menu headers.
                </td>
            </tr>
            <tr>
                <td><code>$dropdown-header-font-size</code></td>
                <td>string</td>
                <td><code>($font-size-base * .875)</code></td>
                <td>
                    Font size for dropdown menu headers.
                </td>
            </tr>
            <tr>
                <td><code>$dropdown-header-font-weight</code></td>
                <td>string</td>
                <td><code>$font-weight-bold</code></td>
                <td>
                    Font weight for dropdown menu headers.
                </td>
            </tr>
            <tr>
                <td><code>$dropdown-header-color</code></td>
                <td>string</td>
                <td><code>$uibase-500</code></td>
                <td>
                    Text color for dropdown menu headers.
                </td>
            </tr>
            <tr>
                <td><code>$dropdown-text-color</code></td>
                <td>string</td>
                <td><code>$body-color</code></td>
                <td>
                    Text color for dropdown menu text.
                </td>
            </tr>
            <tr>
                <td><code>$dropdown-caret-width</code></td>
                <td>string</td>
                <td><code>$caret-border-width</code></td>
                <td>
                    Border width for dropdown submenu indicator.
                </td>
            </tr>
            <tr>
                <td><code>$dropdown-caret-color</code></td>
                <td>string</td>
                <td><code>$uibase-400</code></td>
                <td>
                    Border color for dropdown submenu indicator.
                </td>
            </tr>
            <tr>
                <td><code>$dropdown-caret-active-color</code></td>
                <td>string</td>
                <td><code>$component-active-color</code></td>
                <td>
                    Border color for dropdown submenu indicator in active state.
                </td>
            </tr>
            <tr>
                <td><code>$dropdown-caret-spacer-x</code></td>
                <td>string</td>
                <td><code>.375rem</code></td>
                <td>
                    Horizontal spacing for dropdown submenu indicator.
                </td>
            </tr>
            <tr>
                <td><code>$dropdown-back-width</code></td>
                <td>string</td>
                <td><code>$caret-border-width</code></td>
                <td>
                    Border width for dropdown menu 'back' indicator.
                </td>
            </tr>
            <tr>
                <td><code>$back-caret-color</code></td>
                <td>string</td>
                <td><code>$uibase-400</code></td>
                <td>
                    Border color for dropdown menu 'back' indicator.
                </td>
            </tr>
            <tr>
                <td><code>$dropdown-back-spacer-x</code></td>
                <td>string</td>
                <td><code>.375rem</code></td>
                <td>
                    Horizontal spacing for dropdown menu 'back' indicator.
                </td>
            </tr>
        </tbody>
    </table>
</div>

### Mixins

No mixins available.
