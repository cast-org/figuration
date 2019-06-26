---
layout: docs
title: Dropdown
subtitle: dropdown.js
description: Add a context menu or list of links to a control item.  Support for nested lists is included automatically.
group: widgets
---

{% capture callout %}
Widget Dependencies
{:.h5 .no_toc}

Dropdown requires the following:

* The third-party library [Popper.js](https://popper.js.org/) to provide dynamic positioning and viewport detection.  Static positioning does not require the use of Popper.js.
{% endcapture %}
{% include callout.html content=callout type="info" class="cf-callout-dep" %}

{% capture callout %}
Incompatible Widgets
{:.h5 .no_toc}

For accessibility reasons, do not mix use of the [Tab widget]({{ site.baseurl }}/{{ site.docs_version }}/widgets/tab/) and [Dropdown widget]({{ site.baseurl }}/{{ site.docs_version }}/widgets/dropdown/) in the same nav item.  This will cause navigation and usability issues.  One or the other, but not both.
{% endcapture %}
{% include callout.html content=callout type="warning" %}

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Overview

Wrap the dropdown's toggle (your button or link) and the dropdown menu within `.dropdown`, or another element that declares `position: relative;`. Dropdowns can be triggered from `<a>` or `<button>` elements.

Because of the support for nested dropdown menus, it is currently **required to use a `ul` element** to build your dropdown menus.

There is an expand on hover option available, even though we recommend that you use the default click to toggle mode for consitent usability across devices.

## Examples

### Dropdown Layout

Here is a static example showing the dropdown layout and content pieces.

<div class="cf-example cf-example-bottom cf-example-dropdown">
    <div class="dropdown open">
        <button type="button open" class="btn btn-info">
            Dropdown
            <span class="caret"></span>
        </button>
        <ul class="dropdown-menu open">
            <li class="dropdown-header">Sample Header</li>
            <li><a href="#">Action</a></li>
            <li><a href="#" class="disabled" tabindex="-1" aria-disabled="true">Disabled action</a></li>
            <li class="dropdown-submenu">
                <a href="#" class="open">Something else here</a>
                <ul class="dropdown-menu open">
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
{% include example.html content=example %}

### Toggle Indicator

Optionally use the `.caret` utility icon and add it as an element within the control element. Use [spacing utilities]({{ site.baseurl }}/{{ site.docs_version }}/utilities/spacing/) as needed.

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
{% include example.html content=example %}

### Single Button Dropdown

You can also use `<button>` elements in your dropdowns instead of `<a>`s.  You can also use swap out the `.dropdown` class on the parent container with `.btn-group` if desired.

{% capture example %}
<div class="btn-group">
  <button type="button" class="btn btn-group-end" data-cfw="dropdown">
    Dropdown <span class="caret" aria-hidden="true"></span>
  </button>
  <ul class="dropdown-menu">
    <li><a href="#">Action</a></li>
    <li><a href="#">Another action</a></li>
    <li><a href="#">Something else here</a></li>
  </ul>
</div>
{% endcapture %}
{% include example.html content=example %}

### Split Button Dropdown

Similarly, create split button dropdowns with virtually the same markup as single button dropdowns, but with the addition of `.btn-icon` for proper spacing around the caret. We use this extra class to reduce the horizontal `padding` on either side of the caret and provide a more appropriately sized hit area next to the main button.

The use of the `.btn-group-end` class allows us to place the dropdown within the `.btn-group` itself and not reset the `border-radius` on the end side of the button.

{% capture example %}
<div class="btn-group">
  <button type="button" class="btn">Default</button>
  <button type="button" class="btn btn-icon btn-group-end" data-cfw="dropdown" aria-label="Toggle Dropdown">
    <span class="caret" aria-hidden="true"></span>
  </button>
  <ul class="dropdown-menu">
    <li><a href="#">Action</a></li>
    <li><a href="#">Another action</a></li>
    <li><a href="#">Something else here</a></li>
  </ul>
</div>
{% endcapture %}
{% include example.html content=example %}

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
{% include example.html content=example %}

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
{% include example.html content=example %}

### Menu Text

Add a non-interactive text item to a dropdown menu with `.dropdown-text`.

{% capture example %}
<ul class="dropdown-menu">
  <li class="dropdown-text">Non-interactive text</li>
  <li><a href="#">Action</a></li>
  <li><a href="#">Another action</a></li>
</ul>
{% endcapture %}
{% include example.html content=example %}

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
{% include example.html content=example %}

### Disabled Menu Items

Add `.disabled` to the `a` item in the dropdown to make them visually _appear_ disabled.

{% include callout-warning-disabling-anchors.md %}

{% capture example %}
<ul class="dropdown-menu">
  <li><a href="#">Regular link</a></li>
  <li><a href="#" class="disabled" tabindex="-1" aria-disabled="true">Disabled link</a></li>
  <li><a href="#">Another link</a></li>
</ul>
{% endcapture %}
{% include example.html content=example %}

### Active Menu Items

Add `.active` to the `li` item in the dropdown to show a visual emphasis.

{% capture example %}
<ul class="dropdown-menu">
  <li><a href="#">Regular link</a></li>
  <li><a href="#" class="active">Active link</a></li>
  <li><a href="#">Another link</a></li>
</ul>
{% endcapture %}
{% include example.html content=example %}

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
{% include example.html content=example %}

### 'Back' Menu Items

Using the [`backlink` option](#options), you can have 'back' menu items automatically inserted into all submenus.  These links will close the current submenu and move focus back onto the parent menu item.  This can be useful if the parent menu/submenu item is being hidden, or obscured by the current submenu.

{% capture example %}
<div class="dropdown">
    <button type="button" class="btn" data-cfw="dropdown" data-cfw-dropdown-backlink="true">
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
{% include example.html content=example %}

### Special Items

The Dropdown widget in Figuration is primarily designed for menus and navigation, not a container for forms or editable content, such as a login or registration.  You might want to consider using the [Popover widget]({{ site.baseurl }}/{{ site.docs_version }}/widgets/popover/) instead, or reworking the workflow or interface design.

However, there is some support for handling `<button>`, `<input>`, and `<textarea>` elements within a menu.  Each of these special items require the use of either the `.dropdown-item` or `.dropdown-text` class when inside the menu to adjust their layout .

#### Buttons

You can optionally use `<button>` elements in your dropdowns instead of just `<a>`s.

{% capture example %}
<div class="dropdown">
  <button type="button" class="btn" data-cfw="dropdown" data-cfw-dropdown-backlink="true">
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
{% include example.html content=example %}

#### Checkbox and Radio Inputs

Checkbox and radio inputs are allowed, but only **one per menu item**.

{% capture example %}
<div class="dropdown">
  <button type="button" class="btn" data-cfw="dropdown" data-cfw-dropdown-backlink="true">
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
{% include example.html content=example %}

{% capture example %}
<div class="dropdown">
  <button type="button" class="btn" data-cfw="dropdown" data-cfw-dropdown-backlink="true">
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
{% include example.html content=example %}

#### Textual Inputs

Add `<input type="text">` or `textarea` items to your dropdown menu.  Other types of [textual inputs]({{ site.baseurl }}/{{ site.docs_version }}/content/forms/#textual-inputs) have not been tested, and may cause issues.  Again, use only **one per menu item**.

{% capture example %}
<div class="dropdown">
  <button type="button" class="btn" data-cfw="dropdown" data-cfw-dropdown-backlink="true">
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
    <li><a href="#">Action</a></li>
  </ul>
</div>
{% endcapture %}
{% include example.html content=example %}

## Variants

### Dropup

Trigger dropdown menus above elements by adding `.dropup` to the parent element.  The visual `.caret` for the toggle control will reverse direction automatically.

{% capture example %}
<div class="dropdown dropup">
    <button type="button" class="btn btn-primary" data-cfw="dropdown" data-cfw-dropdown-backlink="true">
        Dropup <span class="caret" aria-hidden="true"></span>
    </button>
    <ul class="dropdown-menu">
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
{% include example.html content=example %}

### Menu Alignment

By default, a dropdown menu is automatically positioned 100% from the top and aligned to the left side of its parent.  While submenu items are aligned 100% from the left and to the top of its parent.

Add `.dropdown-reverse` to a `.dropdown-menu` to align the dropdown menu to the right side of the parent. This will also make all submenus open out to the left side.  This can also be combined with `.dropup`.

**Heads up!** When using the right-to-left, `rtl`, variant of Figuration all horizontal directions will be reversed.  Meaning left becomes right, and vice-versa.

{% capture example %}
<div class="dropdown dropdown-reverse float-end">
    <button type="button" class="btn btn-primary" data-cfw="dropdown" data-cfw-dropdown-backlink="true">
        Reverse Dropdown <span class="caret" aria-hidden="true"></span>
    </button>
    <ul class="dropdown-menu">
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
{% include example.html content=example %}

### Submenu Alignment

The menu alignment class of `.dropdown-reverse` will also work with submenu items, and you can use the available `.dropdown-forward` to switch submenu directions if needed.  Simply place either class on the `li` parent of the submenu list.

{% capture example %}
<div class="dropdown">
    <button type="button" class="btn" data-cfw="dropdown" data-cfw-dropdown-backlink="true">
        Dropdown <span class="caret" aria-hidden="true"></span>
    </button>
    <ul class="dropdown-menu">
        <li class="dropdown-header">Dropdown header</li>
        <li><a href="#">Action</a></li>
        <li class="dropdown-reverse">
            <a href="#">Reverse menu</a>
            <ul>
                <li class="dropdown-reverse">
                    <a href="#">Reverse menu</a>
                    <ul>
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Another action</a></li>
                    </ul>
                </li>
                <li class="dropdown-forward">
                    <a href="#">Forward menu</a>
                    <ul>
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Another action</a></li>
                    </ul>
                </li>
            </ul>
        </li>
        <li class="dropdown-forward">
            <a href="#">Forward menu</a>
            <ul>
                <li class="dropdown-reverse">
                    <a href="#">Reverse menu</a>
                    <ul>
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Another action</a></li>
                    </ul>
                </li>
                <li class="dropdown-forward">
                    <a href="#">Forward menu</a>
                    <ul>
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
{% include example.html content=example %}

### Using a Reference

Use the `reference` option to help control the location of a dropdown menu.

{% capture example %}
<div class="d-flex">
    <div class="btn-group me-1">
        <button type="button" class="btn">Default</button>
        <button type="button" class="btn btn-icon btn-group-end" data-cfw="dropdown" aria-label="Toggle Dropdown">
            <span class="caret" aria-hidden="true"></span>
        </button>
        <ul class="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
        </ul>
    </div>

    <div class="btn-group">
        <button type="button" class="btn">Reference</button>
        <button type="button" class="btn btn-icon btn-group-end" data-cfw="dropdown" data-cfw-dropdown-reference="parent" aria-label="Toggle Dropdown">
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
{% include example.html content=example %}

## Usage

Via data attributes or JavaScript, the dropdown widget toggles hidden content (dropdown menus) by toggling the `.open` class on the parent list item.

On touch capable devices, the optional expand on hover functionality is forced off in favor of the default click interaction. Also, opening a dropdown adds empty (`$.noop`) `mouseover` handlers to the immediate children of the `<body>` element. This ugly hack is necessary to work around a [quirk in iOS' event delegation](https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html), which would otherwise prevent a tap anywhere outside of the dropdown from triggering the code that closes the dropdown. Once the dropdown is closed, these additional empty `mouseover` handlers are removed.

Note: The `data-cfw="dropdown"` attribute is relied on for closing dropdown menus at an application level, so it's a good idea to always use it.

### Via Data Attributes

Add `data-cfw="dropdown"` to the dropdown toggle element, and the widget will automatically link to the sibling `.dropdown-menu` list element.

Be sure to add the class `dropdown-menu` to the dropdown menu to ensure there is no flash of content at page load.

{% highlight html %}
<div class="dropdown">
  <a href="#" role="button" data-cfw="dropdown">Dropdown trigger</a>
  <ul class="dropdown-menu">
    ...
  </ul>
</div>
{% endhighlight %}

### Via JavaScript

Call the dropdowns via JavaScript:

{% highlight js %}
$('#myDropdown').CFW_Dropdown();
{% endhighlight %}

### Options

Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-cfw-dropdown`, as in `data-cfw-dropdown-backlink="true"`.

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
                <td><code>null</code></td>
                <td>Either the selector (jQuery style), or the string related to the target dropdown having a <code>data-cfw-dropdown-target</code> attribute.</td>
            </tr>
            <tr>
                <td>delay</td>
                <td>integer</td>
                <td><code>350</code></td>
                <td>Delay for hiding menu on loss of focus or hover when not in click only mode (milliseconds).</td>
            </tr>
            <tr>
                <td>hover</td>
                <td>boolean</td>
                <td><code>false</code></td>
                <td>If hover style navigation should be enabled in addition to click/key navigation.  If a touch capable device is found, this setting is overruled.</td>
            </tr>
            <tr>
                <td>backlink</td>
                <td>boolean</td>
                <td><code>false</code></td>
                <td>Insert back links into submenus.</td>
            </tr>
            <tr>
                <td>backtop</td>
                <td>boolean</td>
                <td><code>false</code></td>
                <td>If back links should be applied at the top level menu as opposed to only submenus.</td>
            </tr>
            <tr>
                <td>backtext</td>
                <td>string</td>
                <td><code>Back</code></td>
                <td>Text to be used for back links.</td>
            </tr>
            <tr>
                <td>container</td>
                <td>element | false</td>
                <td><code>false</code></td>
                <td>
                    <p>Appends the dropdown menu to a specific element. Example: <code>container: 'body'</code></p>
                </td>
            </tr>
            <tr>
                <td>reference</td>
                <td>string | element</td>
                <td><code>'toggle'</code></td>
                <td>
                    <p>Reference element of the dropdown menu. Accepts the values of <code>'toggle'</code>, <code>'parent'</code>, or an HTMLElement reference. For more information refer to Popper.js's <a href="https://popper.js.org/popper-documentation.html#referenceObject">referenceObject docs</a>.</p>
                </td>
            </tr>
            <tr>
                <td>boundary</td>
                <td>string | element</td>
                <td><code>'scrollParent'</code></td>
                <td>
                    <p>Overflow constraint boundary of the dropdown menu. Accepts the values of <code>'viewport'</code>, <code>'window'</code>, <code>'scrollParent'</code>, or an HTMLElement reference (JavaScript only). For more information refer to Popper.js's <a href="https://popper.js.org/popper-documentation.html#modifiers..preventOverflow.boundariesElement">preventOverflow docs</a>.</p>
                </td>
            </tr>
            <tr>
                <td>flip</td>
                <td>boolean</td>
                <td><code>'true'</code></td>
                <td>
                    <p>Allow Dropdown to flip in case of an overlapping on the reference element. For more information refer to Popper.js's <a href="https://popper.js.org/popper-documentation.html#modifiers..flip.enabled">flip docs</a>.</p>
                </td>
            </tr>
            <tr>
                <td>display</td>
                <td>string</td>
                <td><code>'dynamic'</code></td>
                <td>
                    <p>By default, we use Popper.js for dynamic positioning. Disable this with <code>'static'</code>.</p>
                </td>
            </tr>
        </tbody>
    </table>
</div>

### Methods

#### `.CFW_Dropdown(options)`
{:.no_toc}

Activates the dropdown menu. Accepts an optional options `object`.

{% highlight js %}
$('#myDropdown').CFW_Dropdown({
    backlink: true
});
{% endhighlight %}

#### `.CFW_Dropdown('toggle')`
{:.no_toc}

Toggles a root menu to be shown or hidden.

#### `.CFW_Dropdown('show')`
{:.no_toc}

Shows the root menu element.

#### `.CFW_Dropdown('hide')`
{:.no_toc}

Hides the root menu element.

#### `.CFW_Dropdown('dispose')`
{:.no_toc}

Hides the root menu element and disconnect all the event listeners and data from the menu items and the trigger element.

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
                <td>init.cfw.dropdown</td>
                <td>This event fires after the menu item is initialized.</td>
            </tr>
            <tr>
                <td>beforeShow.cfw.dropdown</td>
                <td>This event is fired immediately when the internal <code>showMenu</code> method is called.</td>
            </tr>
            <tr>
                <td>afterShow.cfw.dropdown</td>
                <td>This event is fired when a menu element has been made visible to the user.</td>
            </tr>
            <tr>
                <td>beforeHide.cfw.dropdown</td>
                <td>This event is fired immediately when the internal <code>hideMenu</code> method is called.</td>
            </tr>
            <tr>
                <td>afterHide.cfw.dropdown</td>
                <td>This event is fired when a menu element has been hidden from the user.</td>
            </tr>
        </tbody>
    </table>
</div>

{% highlight js %}
$('#mDropdown').on('afterHide.cfw.dropdown', function () {
  // do something...
});
{% endhighlight %}

## Accessibility

### General Purpose

While there is an official [<abbr title="Web Accessibility Initiative">WAI</abbr>-<abbr title="Accessible Rich Internet Applications">ARIA</abbr>](https://www.w3.org/TR/wai-aria/) specification for a [`role="menu"` widget](https://www.w3.org/TR/wai-aria/#menu), it is mainly intended for application-style menus that invoke functionality or actions.

The dropdown widget provided by Figuration is intended be generic and apply to a wider number of use-cases. If you require full <abbr title="Accessible Rich Internet Applications">ARIA</abbr> compliant menus, then you will need to add the appropriate `role` and `aria-` attributes as needed.

### Keyboard Navigation

<dl class="cf-docs-keys">
    <dt>
        <kbd>enter</kbd>/<br /><kbd>space</kbd>
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
        <kbd title="up arrow" aria-label="up arrow"><span class="fas fa-arrow-up" aria-hidden="true"></span></kbd> /
        <kbd title="down arrow" aria-label="down arrow"><span class="fas fa-arrow-down" aria-hidden="true"></span></kbd>
    </dt>
    <dd>
        Moves focus to the previous or next item in the menu list.
        If current focus is in a textarea, the text caret will move accordingly.
        If current focus is on a checkbox or radio input, moves focus to the previous or next item in the menu list.
    </dd>
    <dt>
        <kbd title="right arrow" aria-label="right arrow"><span class="fas fa-arrow-right" aria-hidden="true"></span></kbd>
    </dt>
    <dd>
        Opens the submenu if one exists.
        If current focus is in a text input or textarea, the text caret will move accordingly.
    </dd>
    <dt>
        <kbd title="left arrow" aria-label="left arrow"><span class="fas fa-arrow-left" aria-hidden="true"></span></kbd>
    </dt>
    <dd>
        Closes the currently focused submenu, and returns focus back to the triggering element.  If there are no submenus open, focus will be returned to the main trigger.
        If current focus is in a text input or textarea, the text caret will move accordingly.
    </dd>
</dl>

## SASS Reference

### Variables

The available [Customization options]({{ site.baseurl }}/{{ site.docs_version }}/get-started/options/), or Sass variables, that can be customized for the dropdown component.

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
                <td><code>$dropdown-padding-y</code></td>
                <td>string</td>
                <td><code>.3135rem</code></td>
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
