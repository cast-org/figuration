---
layout: docs
title: Button Group
group: components
---

Group a series of buttons together on a single line with the button group. Add on optional JavaScript radio and checkbox style behavior with [our Buttons widget]({{ site.baseurl }}/widgets/button).

Button groups have support for both a `float` style layout, along with both the opt-in flexbox and [full flexbox]({{ site.baseurl }}/layout/flexbox#full-flexbox-mode) modes.  To use the opt-in method, simply add a `.btn-group-flex` class to the `.btn-group` element, or a `.btn-group-vertical-flex` class to the `.btn-group-vertical`.

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Basic Example

Wrap a series of buttons with `.btn` in `.btn-group`.

{% example html %}
<div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn">Left</button>
  <button type="button" class="btn">Middle</button>
  <button type="button" class="btn">Right</button>
</div>
{% endexample %}

## Button Toolbar

Combine sets of button groups into button toolbars for more complex components.

{% example html %}
<div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
  <div class="btn-group" role="group" aria-label="First group">
    <button type="button" class="btn">1</button>
    <button type="button" class="btn">2</button>
    <button type="button" class="btn">3</button>
    <button type="button" class="btn">4</button>
  </div>
  <div class="btn-group" role="group" aria-label="Second group">
    <button type="button" class="btn btn-primary">5</button>
    <button type="button" class="btn btn-primary">6</button>
    <button type="button" class="btn btn-primary">7</button>
  </div>
  <div class="btn-group" role="group" aria-label="Third group">
    <button type="button" class="btn btn-danger">8</button>
  </div>
</div>
{% endexample %}

## Sizing

Instead of applying button sizing classes to every button in a group, just add `.btn-group-*` to each `.btn-group`, including each one when nesting multiple groups.

<div class="cf-example">
  <div class="btn-group btn-group-xl" role="group" aria-label="Extra Large button group">
    <button type="button" class="btn">Left</button>
    <button type="button" class="btn">Middle</button>
    <button type="button" class="btn">Right</button>
  </div>
  <br>
  <div class="btn-group btn-group-lg" role="group" aria-label="Large button group">
    <button type="button" class="btn">Left</button>
    <button type="button" class="btn">Middle</button>
    <button type="button" class="btn">Right</button>
  </div>
  <br>
  <div class="btn-group" role="group" aria-label="Default button group">
    <button type="button" class="btn">Left</button>
    <button type="button" class="btn">Middle</button>
    <button type="button" class="btn">Right</button>
  </div>
  <br>
  <div class="btn-group btn-group-sm" role="group" aria-label="Small button group">
    <button type="button" class="btn">Left</button>
    <button type="button" class="btn">Middle</button>
    <button type="button" class="btn">Right</button>
  </div>
  <br>
  <div class="btn-group btn-group-xs" role="group" aria-label="Extra Small button group">
    <button type="button" class="btn">Left</button>
    <button type="button" class="btn">Middle</button>
    <button type="button" class="btn">Right</button>
  </div>
</div>

{% highlight html %}
<div class="btn-group btn-group-xl" role="group" aria-label="...">...</div>
<div class="btn-group btn-group-lg" role="group" aria-label="...">...</div>
<div class="btn-group" role="group" aria-label="...">...</div>
<div class="btn-group btn-group-sm" role="group" aria-label="...">...</div>
<div class="btn-group btn-group-xs" role="group" aria-label="...">...</div>
{% endhighlight %}

## Nesting

Place a `.btn-group` within another `.btn-group` when you want dropdown menus mixed with a series of buttons.

{% example html %}
<div class="btn-group" role="group" aria-label="Button group with nested dropdown">
  <button type="button" class="btn">1</button>
  <button type="button" class="btn">2</button>

  <div class="btn-group" role="group">
    <button type="button" class="btn dropdown-toggle" data-cfw="dropdown" data-cfw-dropdown-toggle="#btnGroupDrop1">
      Dropdown
    </button>
    <ul class="dropdown-menu" id="btnGroupDrop1">
      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
    </ul>
  </div>
</div>
{% endexample %}

## Vertical Variation

Make a set of buttons appear vertically stacked rather than horizontally. **Split button dropdowns are not supported here.**

<div class="cf-example">
  <div class="btn-group-vertical" role="group" aria-label="Vertical button group">
    <button type="button" class="btn">Button</button>
    <button type="button" class="btn">Button</button>
    <div class="btn-group" role="group">
      <button type="button" class="btn dropdown-toggle" data-cfw="dropdown" data-cfw-dropdown-toggle="#btnGroupVerticalDrop1">
        Dropdown
      </button>
      <ul class="dropdown-menu" id="btnGroupVerticalDrop1">
        <li><a class="dropdown-item" href="#">Dropdown link</a></li>
        <li><a class="dropdown-item" href="#">Dropdown link</a></li>
      </ul>
    </div>
    <button type="button" class="btn">Button</button>
    <button type="button" class="btn">Button</button>
    <div class="btn-group" role="group">
      <button type="button" class="btn dropdown-toggle" data-cfw="dropdown" data-cfw-dropdown-toggle="#btnGroupVerticalDrop2">
        Dropdown
      </button>
      <ul class="dropdown-menu" id="btnGroupVerticalDrop2">
        <li><a class="dropdown-item" href="#">Dropdown link</a></li>
        <li><a class="dropdown-item" href="#">Dropdown link</a></li>
      </ul>
    </div>
    <div class="btn-group" role="group">
      <button type="button" class="btn dropdown-toggle" data-cfw="dropdown" data-cfw-dropdown-toggle="#btnGroupVerticalDrop3">
        Dropdown
      </button>
      <ul class="dropdown-menu" id="btnGroupVerticalDrop3">
        <li><a class="dropdown-item" href="#">Dropdown link</a></li>
        <li><a class="dropdown-item" href="#">Dropdown link</a></li>
      </ul>
    </div>
    <div class="btn-group" role="group">
      <button type="button" class="btn dropdown-toggle" data-cfw="dropdown" data-cfw-dropdown-toggle="#btnGroupVerticalDrop1">
        Dropdown
      </button>
      <ul class="dropdown-menu" id="btnGroupVerticalDrop4">
        <li><a class="dropdown-item" href="#">Dropdown link</a></li>
        <li><a class="dropdown-item" href="#">Dropdown link</a></li>
      </ul>
    </div>
  </div>
</div>

{% highlight html %}
<div class="btn-group-vertical">
  ...
</div>
{% endhighlight %}

## Tooltips and Popovers

Due to the specific implementation (and some other components), a bit of special casing is required for tooltips and popovers within button groups. **You'll have to specify the option `container: 'body'`** to avoid unwanted side effects (such as the element growing wider and/or losing its rounded corners when the tooltip or popover is triggered).
