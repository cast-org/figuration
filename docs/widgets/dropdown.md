---
layout: docs
title: Dropdown
subtitle: dropdown.js
group: widgets
---

<!-- Font CSS -->
{% if site.github %}
  <link href="{{ site.cdn.fontawe }}" integrity="{{ site.cdn.fontawe_hash }}" crossorigin="anonymous" rel="stylesheet" property="stylesheet">
{% else %}
  <link href="{{ site.baseurl }}/assets/fonts/fontawesome/css/fontawesome-all.css" rel="stylesheet" property="stylesheet">
{% endif %}

Add a context menu or list of links to a control item.  Support for nested lists is included automatically.  There is also an expand on hover option, even though we recommend that you use the default click to toggle mode for consitent usability across devices.

{% callout warning %}
Incompatible Widgets
{:.h5}
For accessibility reasons, do not mix use of the [Tab widget]({{ site.baseurl }}/widgets/tab/) and [Dropdown widget]({{ site.baseurl }}/widgets/dropdown/) in the same nav item.  This will cause navigation and usability issues.  One or the other, but not both.
{% endcallout %}

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Overview

Wrap the dropdown's toggle (your button or link) and the dropdown menu within `.dropdown`, or another element that declares `position: relative;`. Dropdowns can be triggered from `<a>` or `<button>` elements.

Because of the support for nested dropdown menus, it is currently **required to use a `ul` element** to build your dropdown menus.

## Examples

### Dropdown Layout

Here is a static example showing the dropdown layout and content pieces.

<div class="cf-example cf-example-bottom cf-example-dropdown">
    <div class="dropdown open clearfix">
        <button type="button" class="btn btn-info dropdown-toggle">
            Dropdown
        </button>
        <ul class="dropdown-menu">
            <li class="dropdown-header">Sample Header</li>
            <li><a href="#">Action</a></li>
            <li><a href="#" class="disabled">Disabled action</a></li>
            <li class="dropdown-submenu open">
                <a href="#">Something else here</a>
                <ul class="dropdown-menu">
                    <li class="dropdown-back"><a href="#">Back</a></li>
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

{% example html %}
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
{% endexample %}

### Toggle Indicator

Add an indicator to the dropdown toggle by adding `.dropdown-toggle` to the control.

{% example html %}
<div class="dropdown">
  <a href="#" role="button" class="dropdown-toggle" data-cfw="dropdown">
    Toggle Dropdown
  </a>
  <ul class="dropdown-menu">
    <li><a href="#">Action</a></li>
    <li><a href="#">Another action</a></li>
    <li><a href="#">Something else here</a></li>
  </ul>
</div>
{% endexample %}

Another option would be to use the `.caret` utility icon and add it to an element within the control element.

{% example html %}
<div class="dropdown">
  <a href="#" role="button" data-cfw="dropdown">
    Toggle Dropdown
    <span class="caret" aria-hidden="true"></span>
  </a>
  <ul class="dropdown-menu">
    <li><a href="#">Action</a></li>
    <li><a href="#">Another action</a></li>
    <li><a href="#">Something else here</a></li>
  </ul>
</div>
{% endexample %}

### Single Button Dropdown

You can also use `<button>` elements in your dropdowns instead of `<a>`s.  You can also use swap out the `.dropdown` class on the parent container with `.btn-group` if desired.

{% example html %}
<div class="btn-group">
  <button type="button" class="btn dropdown-toggle" data-cfw="dropdown">
    Dropdown
  </button>
  <ul class="dropdown-menu">
    <li><a href="#">Action</a></li>
    <li><a href="#">Another action</a></li>
    <li><a href="#">Something else here</a></li>
  </ul>
</div>
{% endexample %}

### Split Button Dropdown

Similarly, create split button dropdowns with virtually the same markup as single button dropdowns, but with the addition of `.dropdown-toggle-split` for proper spacing around the dropdown caret.

We use this extra class to reduce the horizontal `padding` on either side of the caret by 25% and remove the `margin-left` that's added for regular button dropdowns. Those extra changes keep the caret centered in the split button and provide a more appropriately sized hit area next to the main button.

{% example html %}
<div class="btn-group">
  <button type="button" class="btn">Default</button>
  <button type="button" class="btn dropdown-toggle dropdown-toggle-split" data-cfw="dropdown" aria-label="Toggle Dropdown"></button>
  <ul class="dropdown-menu">
    <li><a href="#">Action</a></li>
    <li><a href="#">Another action</a></li>
    <li><a href="#">Something else here</a></li>
  </ul>
</div>
{% endexample %}

### Within a Navbar

Dropdowns also work in a navbar, but require the use of a wrapping element for positioning.  Make sure to use seperate and nested `.nav-item` and `.nav-link` elements as in the following example.

{% example html %}
<nav class="navbar navbar-expand navbar-light bg-faded">
    <a href="#" class="navbar-brand">Navbar</a>
    <ul class="navbar-nav">
        <li class="nav-item dropdown">
            <a href="#" role="button" class="nav-link dropdown-toggle" data-cfw="dropdown">Dropdown</a>
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
{% endexample %}

## Components

### Menu Headers

Add a header to label sections of actions in any dropdown menu with `.dropdown-header`.

{% example html %}
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
{% endexample %}

### Menu Text

Add a non-interactive text item to a dropdown menu with `.dropdown-text`.

{% example html %}
<ul class="dropdown-menu">
  <li class="dropdown-text">Non-interactive text</li>
  <li><a href="#">Action</a></li>
  <li><a href="#">Another action</a></li>
</ul>
{% endexample %}

### Menu Dividers

Separate groups of related menu items with a divider by using `.dropdown-divider`.

{% example html %}
<ul class="dropdown-menu">
  <li><a href="#">Action</a></li>
  <li><a href="#">Another action</a></li>
  <li><a href="#">Something else here</a></li>
  <li class="dropdown-divider"></li>
  <li><a href="#">Separated link</a></li>
</ul>
{% endexample %}

### Disabled Menu Items

Add `.disabled` to the `a` item in the dropdown to make them visually _appear_ disabled.

{% callout warning %}
Disabling Anchors
{:.h5}

Please refer to the [Accessiblity notes about disabled anchors]({{ site.baseurl }}/get-started/accessibility/#disabled-anchors).
{% endcallout %}

{% example html %}
<ul class="dropdown-menu">
  <li><a href="#">Regular link</a></li>
  <li><a href="#" class="disabled">Disabled link</a></li>
  <li><a href="#">Another link</a></li>
</ul>
{% endexample %}

### Active Menu Items

Add `.active` to the `li` item in the dropdown to show a visual emphasis.

{% example html %}
<ul class="dropdown-menu">
  <li><a href="#">Regular link</a></li>
  <li><a href="#" class="active">Active link</a></li>
  <li><a href="#">Another link</a></li>
</ul>
{% endexample %}

### Submenus

You can nest submenus by adding a nested list along side it's toggle.

{% example html %}
<div class="dropdown">
        <button type="button" class="btn btn-info dropdown-toggle" data-cfw="dropdown">
            Dropdown
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

{% endexample %}

### 'Back' Menu Items

Using the [`backlink` option](#options), you can have 'back' menu items automatically inserted into all submenus.  These links will close the current submenu and move focus back onto the parent menu item.  This can be useful if the parent menu/submenu item is being hidden, or obscured by the current submenu.

{% example html %}
<div class="dropdown">
    <button type="button" class="btn dropdown-toggle" data-cfw="dropdown" data-cfw-dropdown-backlink="true">
        Dropdown
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
        <li><a href="#" class="disabled">Disabled item</a></li>
    </ul>
</div>
{% endexample %}

### Special Items

The Dropdown widget in Figuration is primarily designed for menus and navigation, not a container for forms or editable content, such as a login or registration.  You might want to consider using the [Popover widget]({{ site.baseurl }}/widgets/popover/) instead, or reworking the workflow or interface design.

However, there is some support for handling `<input>` and `<textarea>` items within the parent `.dropdown` container, and within the menu itself.  Each of these special items require the use of the `.dropdown-item` helper class, when inside the menu, to adjust their layout and become available to the dropdown menu keyboard navigation.

#### Buttons

You can optionally use `<button>` elements in your dropdowns instead of just `<a>`s.

{% example html %}
<div class="dropdown">
  <button type="button" class="btn dropdown-toggle" data-cfw="dropdown" data-cfw-dropdown-backlink="true">
    Dropdown
  </button>
  <ul class="dropdown-menu">
    <li><button type="button" class="dropdown-item">Regular button</button></li>
    <li><button type="button" class="dropdown-item active">Active button</button></li>
    <li><button type="button" class="dropdown-item">Another button</button></li>
    <li class="dropdown-divider"></li>
    <li><button type="button" class="dropdown-item disabled">Disabled button</button></li>
    <li><button type="button" class="dropdown-item" disabled>Disabled button</button></li>
  </ul>
</div>
{% endexample %}

#### Checkbox and Radio Inputs

Checkbox and radio inputs are allowed, but only **one per menu item**.

{% example html %}
<div class="dropdown">
  <button type="button" class="btn dropdown-toggle" data-cfw="dropdown" data-cfw-dropdown-backlink="true">
    Dropdown
  </button>
  <ul class="dropdown-menu">
    <li><label class="dropdown-item form-check-label"><input type="checkbox" class="form-check-input"> Checkbox 1</label></li>
    <li><label class="dropdown-item form-check-label"><input type="checkbox" class="form-check-input"> Checkbox 2</label></li>
    <li><label class="dropdown-item form-check-label"><input type="checkbox" class="form-check-input"> Checkbox 3</label></li>
  </ul>
</div>
{% endexample %}

{% example html %}
<div class="dropdown">
  <button type="button" class="btn dropdown-toggle" data-cfw="dropdown" data-cfw-dropdown-backlink="true">
    Dropdown
  </button>
  <ul class="dropdown-menu">
    <li><label class="dropdown-item form-check-label"><input type="radio" name="dropradio" class="form-check-input"> Radio 1</label></li>
    <li><label class="dropdown-item form-check-label"><input type="radio" name="dropradio" class="form-check-input"> Radio 2</label></li>
    <li><label class="dropdown-item form-check-label"><input type="radio" name="dropradio" class="form-check-input"> Radio 3</label></li>
  </ul>
</div>
{% endexample %}

#### Textual Inputs

Add `<input type="text">` or `textarea` items to your dropdown menu.  Other types of [textual inputs]({{ site.baseurl }}/content/forms/#textual-inputs) have not been tested, and may cause issues.  Again, use only **one per menu item**.

Since keyboard navigation needs to change once you enter one of these elements, for ease of editing, they use the <kbd>tab</kbd> key to navigate out.

{% example html %}
<div class="dropdown">
  <button type="button" class="btn dropdown-toggle" data-cfw="dropdown" data-cfw-dropdown-backlink="true">
    Dropdown
  </button>
  <ul class="dropdown-menu">
    <li><a href="#">Action</a></li>
    <li>
      <label class="dropdown-item">
        <span class="sr-only">Example input</span>
        <input type="text" class="form-control" placeholder="text input"/>
      </label>
    </li>
    <li><a href="#">Action</a></li>
    <li>
      <label class="dropdown-item">
        <span class="sr-only">Example textarea</span>
        <textarea class="form-control" placeholder="textarea"></textarea>
      </label>
    </li>
    <li><a href="#">Action</a></li>
  </ul>
</div>
{% endexample %}




## Variants

### Dropup

Trigger dropdown menus above elements by adding `.dropup` to the parent element.  The visual `.caret` or `.dropdown-toggle` for the toggle control will reverse direction automatically.

{% example html %}
<div class="dropdown dropup">
    <button type="button" class="btn btn-primary dropdown-toggle" data-cfw="dropdown" data-cfw-dropdown-backlink="true">
        Dropup
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
        <li><a href="#" class="disabled">Disabled link</a></li>
    </ul>
</div>
{% endexample %}

### Menu Alignment

By default, a dropdown menu is automatically positioned 100% from the top and aligned to the left side of its parent.  While submenu items are aligned 100% from the left and to the top of its parent.

Add `.dropdown-menu-reverse` to a `.dropdown-menu` to align the dropdown menu to the right side of the parent. This will also make all submenus open out to the left side.  This can also be combined with `.dropup`.

**Heads up!** When using the right-to-left, `rtl`, variant of Figuration all horizontal directions will be reversed.  Meaning left becomes right, and vice-versa.

{% example html %}
<div class="dropdown dropdown-menu-reverse float-end">
    <button type="button" class="btn btn-primary dropdown-toggle" data-cfw="dropdown" data-cfw-dropdown-backlink="true">
        Reverse Dropdown
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
        <li><a href="#" class="disabled">Disabled link</a></li>
    </ul>
</div>
{% endexample %}

### Submenu Alignment

The menu alignment class of `.dropdown-menu-reverse` will also work with submenu items, and you can use the available `.dropdown-menu-forward` to switch submenu directions if needed.  Simply place either class on the `li` parent of the submenu list.

{% example html %}
<div class="dropdown">
    <button type="button" class="btn dropdown-toggle" data-cfw="dropdown" data-cfw-dropdown-backlink="true">
        Dropdown
    </button>
    <ul class="dropdown-menu">
        <li class="dropdown-header">Dropdown header</li>
        <li><a href="#">Action</a></li>
        <li class="dropdown-menu-reverse">
            <a href="#">Reverse menu</a>
            <ul>
                <li class="dropdown-menu-reverse">
                    <a href="#">Reverse menu</a>
                    <ul>
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Another action</a></li>
                    </ul>
                </li>
                <li class="dropdown-menu-forward">
                    <a href="#">Forward menu</a>
                    <ul>
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Another action</a></li>
                    </ul>
                </li>
            </ul>
        </li>
        <li class="dropdown-menu-forward">
            <a href="#">Forward menu</a>
            <ul>
                <li class="dropdown-menu-reverse">
                    <a href="#">Reverse menu</a>
                    <ul>
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Another action</a></li>
                    </ul>
                </li>
                <li class="dropdown-menu-forward">
                    <a href="#">Forward menu</a>
                    <ul>
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Another action</a></li>
                    </ul>
                </li>
            </ul>
        </li>
        <li class="dropdown-divider"></li>
        <li><a href="#" class="disabled">Separated link</a></li>
    </ul>
</div>
{% endexample %}

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
                <td>null</td>
                <td>Either the selector (jQuery style), or the string related to the target dropdown having a <code>data-cfw-dropdown-target</code> attribute.</td>
            </tr>
            <tr>
                <td>delay</td>
                <td>integer</td>
                <td>350</td>
                <td>Delay for hiding menu on loss of focus or hover when not in click only mode (milliseconds).</td>
            </tr>
            <tr>
                <td>hover</td>
                <td>boolean</td>
                <td>false</td>
                <td>If hover style navigation should be enabled in addition to click/key navigation.  If a touch capable device is found, this setting is overruled.</td>
            </tr>
            <tr>
                <td>backlink</td>
                <td>boolean</td>
                <td>false</td>
                <td>Insert back links into submenus.</td>
            </tr>
            <tr>
                <td>backtop</td>
                <td>boolean</td>
                <td>false</td>
                <td>If back links should be applied at the top level menu as opposed to only submenus.</td>
            </tr>
            <tr>
                <td>backtext</td>
                <td>string</td>
                <td>Back</td>
                <td>Text to be used for back links.</td>
            </tr>
            <tr>
                <td>container</td>
                <td>string | false</td>
                <td>false</td>
                <td>
                    <p>Appends the dropdown menu to a specific element. Example: <code>container: 'body'</code></p>
                    <p>This does not apply when the dropdown is inside of a `.navbar-collapse`.</p>
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

While there is an official [<abbr title="Web Accessibility Initiative">WAI</abbr>-<abbr title="Accessible Rich Internet Applications">ARIA</abbr>](https://www.w3.org/TR/wai-aria/) specification for a [`role="menu"` widget](https://www.w3.org/TR/wai-aria/roles#menu), it is mainly intended for application-style menus that invoke functionality or actions.

The dropdown widget provided by Figuration is intended be generic and apply to a wider number of use-cases. If you require full <abbr title="Accessible Rich Internet Applications">ARIA</abbr> compliant menus, then you will need to add the appropriate `role` and `aria-` attributes as needed.

### Keyboard Navigation

<dl class="cf-docs-keys">
    <dt>
        <kbd>tab</kbd>
    </dt>
    <dd>
        Closes the currently focused menu, and moves focus to the next focusable items in the document.
        If current focus is on an input or textarea in the menu, the focus moves to the next focusable item in the menu.
    </dd>
    <dt>
        <kbd>enter</kbd>
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
