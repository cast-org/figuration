---
layout: docs
title: Dropdown
subtitle: dropdown.js
group: widgets
---

Add dropdown menus to nearly anything with this widget, including buttons, navbars, tabs, and pills.

{% callout warning %}
#### Incompatible Widgets
For accessibility reasons, do not mix use of the [Tab widget]({{ site.baseurl }}/widgets/tab/) and [Dropdown widget]({{ site.baseurl }}/widgets/dropdown/) in the same nav item.  This will cause navigation and usability issues.  One or the other, but not both.
{% endcallout %}

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Overview

The Dropdown widget in Figuration is primarily designed for menus and navigation.  Not a container for forms or editable content, such as a login or registration.  You might want to consider using the [Popover widget]({{ site.baseurl }}/widgets/popover/) instead, or reworking the workflow or interface design.

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
            <li class="disabled"><a href="#">Disabled action</a></li>
            <li class="dropdown-submenu open">
                <a href="#">Something else here</a>
                <ul class="dropdown-menu">
                    <li class="dropdown-back"><a href="#">Back</a></li>
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                </ul>
            </li>
            <li class="divider"></li>
            <li><a href="#">Separated link</a></li>
        </ul>
    </div>
</div>

### Basic Dropdown

Wrap the dropdown's trigger and the dropdown menu within `.dropdown`, or another element that declares `position: relative;`. Then, add the menu's HTML.

Because of the support for nested dropdown menus, it is currently **required to use a `ul` element** to build your dropdown menus.

{% example html %}
<div class="dropdown">
  <a href="#" role="button" class="dropdown-toggle" data-cfw="dropdown" data-cfw-dropdown-toggle="#dropdownMenu1">
    Dropdown
  </a>
  <ul class="dropdown-menu" id="dropdownMenu1">
    <li><a href="#">Action</a></li>
    <li><a href="#">Another action</a></li>
    <li><a href="#">Something else here</a></li>
  </ul>
</div>
{% endexample %}

### Single Button Dropdown

You can optionally use `<button>` elements in your dropdowns instead of `<a>`s.  You can also use swap out the `.dropdown` class on the parent container with `.btn-group` if desired.

{% example html %}
<div class="btn-group">
  <button type="button" class="btn dropdown-toggle" data-cfw="dropdown" data-cfw-dropdown-toggle="#dropdownMenu2">
    Dropdown
  </button>
  <ul class="dropdown-menu" id="dropdownMenu2">
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
  <button type="button" class="btn dropdown-toggle dropdown-toggle-split" data-cfw="dropdown" data-cfw-dropdown-toggle="#dropdownMenu3">
    <span class="sr-only">Toggle Dropdown</span>
  </button>
  <ul class="dropdown-menu" id="dropdownMenu3">
    <li><a href="#">Action</a></li>
    <li><a href="#">Another action</a></li>
    <li><a href="#">Something else here</a></li>
  </ul>
</div>
{% endexample %}

### Within a Navbar

Dropdowns also work in a navbar, but require the use of a wrapping element for positioning.  Make sure to use seperate and nested `.nav-item` and `.nav-link` elements as in the following example.

{% example html %}
<nav class="navbar navbar-light bg-faded">
    <a href="#" class="navbar-brand">Navbar</a>
    <ul class="nav navbar-nav">
        <li class="nav-item dropdown">
            <a href="#" class="nav-link dropdown-toggle" data-cfw="dropdown" data-cfw-dropdown-toggle="dropdownNav1">Dropdown</a>
            <ul class="dropdown-menu" data-cfw-dropdown-target="dropdownNav1">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li class="divider"></li>
                <li><a href="#">Separated link</a></li>
            </ul>
        </li>
    </ul>
</nav>
{% endexample %}

## Components

### Menu Headers

Add a header to label sections of actions in any dropdown menu.

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

### Menu Dividers

Separate groups of related menu items with a divider.

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

Add `.disabled` to the `li` item in the dropdown to **style them as disabled**.

{% example html %}
<ul class="dropdown-menu">
  <li><a href="#">Regular link</a></li>
  <li class="disabled"><a href="#">Disabled link</a></li>
  <li><a href="#">Another link</a></li>
</ul>
{% endexample %}

{% callout warning %}
#### Link Functionality Caveat

The `.disabled` class uses `pointer-events: none` to try to disable the link functionality of `<a>`s, but that CSS property is not yet standardized. In addition, even in browsers that do support `pointer-events: none`, keyboard navigation remains unaffected, meaning that sighted keyboard users and users of assistive technologies will still be able to activate these links. So to be safe, add a `tabindex="-1"` attribute on these links (to prevent them from receiving keyboard focus) and use custom JavaScript to disable their functionality.
{% endcallout %}

### Active Menu Items

Add `.active` to the `li` item in the dropdown to show a visual emphasis.

{% example html %}
<ul class="dropdown-menu">
  <li><a href="#">Regular link</a></li>
  <li class="active"><a href="#">Active link</a></li>
  <li><a href="#">Another link</a></li>
</ul>
{% endexample %}

### 'Back' Menu Items

Using the [dropdown widget options](#options) you can have 'back' menu items automatically inserted into all submenus.  These links will close the current submenu and move focus back onto the parent menu item.  This can be useful if the parent menu/submenu item is being hidden, or obscured by the current submenu.

See the [menu alignment](#menu-alignment) section for an example of injected 'back' menu items.

## Variants

### Dropup

Trigger dropdown menus above elements by adding `.dropup` to the parent element.  A `.caret` or `.dropdown-toggle` will reverse direction automatically.

{% example html %}
<div class="dropdown dropup">
  <button type="button" class="btn dropdown-toggle" data-cfw="dropdown" data-cfw-dropdown-toggle="#dropdownVar1">
    Dropup
  </button>
  <ul class="dropdown-menu" id="dropdownVar1">
    <li><a href="#">Action</a></li>
    <li><a href="#">Another action</a></li>
    <li><a href="#">Something else here</a></li>
  </ul>
</div>

<div class="btn-group dropup">
  <button type="button" class="btn">Split Dropup</button>
  <button type="button" class="btn dropdown-toggle dropdown-toggle-split" data-cfw="dropdown" data-cfw-dropdown-toggle="#dropdownVar2">
    <span class="sr-only">Toggle Dropdown</span>
  </button>
  <ul class="dropdown-menu" id="dropdownVar2">
    <li><a href="#">Action</a></li>
    <li><a href="#">Another action</a></li>
    <li><a href="#">Something else here</a></li>
  </ul>
</div>
{% endexample %}

### Menu Alignment

By default, a dropdown menu is automatically positioned 100% from the top and along the left side of its parent.  While submenu items are aligned 100% to the left and to the top of its parent.

Add `.dropdown-menu-left` to a `.dropdown-menu` to right align the dropdown menu, this will also make all submenus open to the left side.  This can also be combined with `.dropup`.

{% example html %}
<div class="btn-group dropdown-menu-left" style="float: right;">
    <button type="button" class="btn btn-primary dropdown-toggle" data-cfw="dropdown" data-cfw-dropdown-toggle="dropdownVar3" data-cfw-dropdown-backlink="true">
        Drop Left
    </button>
    <ul data-cfw-dropdown-target="dropdownVar3">
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
                <li class="divider"></li>
                <li><a href="#">Separated link</a></li>
            </ul>
        </li>
        <li class="divider"></li>
        <li class="disabled"><a href="#">Disabled link</a></li>
    </ul>
</div>
{% endexample %}

### Submenu Alignment

The menu alignment class of `.dropdown-menu-left` will also work with submenu items, and you can use the available `.dropdown-menu-right` to switch submenu directions if needed.  Simply place either class on the `li` parent of the submenu list.

{% example html %}
<div class="btn-group">
    <button type="button" class="btn dropdown-toggle" data-cfw="dropdown" data-cfw-dropdown-toggle="dropdownSub1" data-cfw-dropdown-backlink="true">
        Dropdown
    </button>
    <ul data-cfw-dropdown-target="dropdownSub1">
        <li class="dropdown-header">Dropdown header</li>
        <li><a href="#">Action</a></li>
        <li class="dropdown-menu-left">
            <a href="#">Left menu</a>
            <ul>
                <li class="dropdown-menu-left">
                    <a href="#">Left menu</a>
                    <ul>
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Another action</a></li>
                    </ul>
                </li>
                <li class="dropdown-menu-right">
                    <a href="#">Right menu</a>
                    <ul>
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Another action</a></li>
                    </ul>
                </li>
            </ul>
        </li>
        <li class="dropdown-menu-right">
            <a href="#">Right menu</a>
            <ul>
                <li class="dropdown-menu-left">
                    <a href="#">Left menu</a>
                    <ul>
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Another action</a></li>
                    </ul>
                </li>
                <li class="dropdown-menu-right">
                    <a href="#">Right menu</a>
                    <ul>
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Another action</a></li>
                    </ul>
                </li>
            </ul>
        </li>
        <li class="divider"></li>
        <li class="disabled"><a href="#">Separated link</a></li>
    </ul>
</div>
{% endexample %}

## Usage

Via data attributes or JavaScript, the dropdown widget toggles hidden content (dropdown menus) by toggling the `.open` class on the parent list item.

On touch capable devices, the optional expand on hover functionality is forced off in favor of the default click interaction. Also, opening a dropdown adds a `.dropdown-backdrop` as a tap area for closing dropdown menus when tapping outside the menu, a requirement for proper iOS support. **This means that switching from an open dropdown menu to a different dropdown menu requires an extra tap on mobile.**

Note: The `data-cfw="dropdown"` attribute is relied on for closing dropdown menus at an application level, so it's a good idea to always use it.

### Via Data Attributes

Add `data-cfw="dropdown"` and a `data-cfw-dropdown-toggle` with a selector (jQuery style) or string value to then element to automatically assign control of a dropdown element.
If using a string value, then assign a `data-cfw-dropdown-target` attribute, with a matching value to the element to apply the collapse to.
Be sure to add the class `dropdown-menu` to the dropdown menu to ensure there is no flash of content at page load.

{% highlight html %}
<div class="dropdown">
  <a href="#" data-cfw="dropdown" data-cfw-dropdown-toggle="dropdownExample">Dropdown trigger</a>
  <ul class="dropdown-menu" data-cfw-dropdown-target="dropdownExample">
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
    </tbody>
    </table>
</div> <!-- /.table-responsive -->

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

### Events

Event callbacks for the root menu happen on the toggle element. Callbacks for the submenus occur on the submenu's sibling anchor (toggle).

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
</div> <!-- /.table-responsive -->

{% highlight js %}
$('#mDropdown').on('afterHide.cfw.dropdown', function () {
  // do something...
});
{% endhighlight %}