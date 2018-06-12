---
layout: docs
title: Button Group
group: components
---

Group a series of buttons together on a single line with the button group. Add on optional JavaScript radio and checkbox style behavior with [our Buttons widget]({{ site.baseurl }}/widgets/button).

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

Combine sets of button groups into button toolbars for more complex components. Use utility classes as needed to space out groups, buttons, and more.

{% example html %}
<div class="btn-toolbar mb-1" role="toolbar" aria-label="Toolbar with button groups">
  <div class="btn-group me-0_5" role="group" aria-label="First group">
    <button type="button" class="btn">1</button>
    <button type="button" class="btn">2</button>
    <button type="button" class="btn">3</button>
    <button type="button" class="btn">4</button>
  </div>
  <div class="btn-group me-0_5" role="group" aria-label="Second group">
    <button type="button" class="btn btn-primary">5</button>
    <button type="button" class="btn btn-primary">6</button>
    <button type="button" class="btn btn-primary">7</button>
  </div>
  <div class="btn-group" role="group" aria-label="Third group">
    <button type="button" class="btn btn-danger">8</button>
  </div>
</div>

<div class="btn-toolbar flex-between" role="toolbar" aria-label="Toolbar with button groups">
  <div class="btn-group me-0_5" role="group" aria-label="First group">
    <button type="button" class="btn">1</button>
    <button type="button" class="btn">2</button>
    <button type="button" class="btn">3</button>
    <button type="button" class="btn">4</button>
  </div>
  <div class="btn-group me-0_5" role="group" aria-label="Second group">
    <button type="button" class="btn btn-primary">5</button>
    <button type="button" class="btn btn-primary">6</button>
    <button type="button" class="btn btn-primary">7</button>
  </div>
  <div class="btn-group" role="group" aria-label="Third group">
    <button type="button" class="btn btn-danger">8</button>
  </div>
</div>

{% endexample %}

### With Input Groups

Mix input groups with button groups in your toolbars. Similar to the example above, you may need some utilities classes to space things out.

{% example html %}
<div class="btn-toolbar mb-1" role="toolbar" aria-label="Toolbar with button groups">
  <div class="btn-group me-0_5" role="group" aria-label="First group">
    <button type="button" class="btn">1</button>
    <button type="button" class="btn">2</button>
    <button type="button" class="btn">3</button>
    <button type="button" class="btn">4</button>
  </div>
  <div class="input-group">
    <div class="input-group-addon">
        <span class="input-group-text" id="btnGroupAddon">@</span>
    </div>
    <input type="text" class="form-control" placeholder="Input group example" aria-label="Input group example" aria-describedby="btnGroupAddon">
  </div>
</div>

<div class="btn-toolbar flex-between mb-1" role="toolbar" aria-label="Toolbar with button groups">
  <div class="btn-group" role="group" aria-label="First group">
    <button type="button" class="btn">1</button>
    <button type="button" class="btn">2</button>
    <button type="button" class="btn">3</button>
    <button type="button" class="btn">4</button>
  </div>
  <div class="input-group">
    <div class="input-group-addon">
        <span class="input-group-text" id="btnGroupAddon2">@</span>
    </div>
    <input type="text" class="form-control" placeholder="Input group example" aria-label="Input group example" aria-describedby="btnGroupAddon2">
  </div>
</div>
{% endexample %}

## Sizing

Instead of applying button sizing classes to every button in a group, just add `.btn-group-*` to each `.btn-group`, including each one when nesting multiple groups.

<div class="cf-example">
  <div class="btn-group btn-group-xlarge" role="group" aria-label="Extra Large button group">
    <button type="button" class="btn">Left</button>
    <button type="button" class="btn">Middle</button>
    <button type="button" class="btn">Right</button>
  </div>
  <br>
  <div class="btn-group btn-group-large" role="group" aria-label="Large button group">
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
  <div class="btn-group btn-group-small" role="group" aria-label="Small button group">
    <button type="button" class="btn">Left</button>
    <button type="button" class="btn">Middle</button>
    <button type="button" class="btn">Right</button>
  </div>
  <br>
  <div class="btn-group btn-group-xsmall" role="group" aria-label="Extra Small button group">
    <button type="button" class="btn">Left</button>
    <button type="button" class="btn">Middle</button>
    <button type="button" class="btn">Right</button>
  </div>
</div>

{% highlight html %}
<div class="btn-group btn-group-xlarge" role="group" aria-label="...">...</div>
<div class="btn-group btn-group-large" role="group" aria-label="...">...</div>
<div class="btn-group" role="group" aria-label="...">...</div>
<div class="btn-group btn-group-small" role="group" aria-label="...">...</div>
<div class="btn-group btn-group-xsmall" role="group" aria-label="...">...</div>
{% endhighlight %}

## Nesting

Place a `.btn-group` within another `.btn-group` when you want dropdown menus mixed with a series of buttons. You can add `.btn-group-end` to the toggle button to keep its `border-radius` from being reset.

{% example html %}
<div class="btn-group" role="group" aria-label="Button group with nested dropdown">
  <button type="button" class="btn">1</button>
  <button type="button" class="btn">2</button>

  <div class="btn-group" role="group">
    <button type="button" class="btn btn-group-end" data-cfw="dropdown">
      Dropdown
      <span class="caret" aria-hidden="true"></span>
    </button>
    <ul class="dropdown-menu">
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
      <button type="button" class="btn" data-cfw="dropdown">
        Dropdown
        <span class="caret" aria-hidden="true"></span>
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Dropdown link</a></li>
        <li><a class="dropdown-item" href="#">Dropdown link</a></li>
      </ul>
    </div>
    <button type="button" class="btn">Button</button>
    <button type="button" class="btn">Button</button>
    <div class="btn-group" role="group">
      <button type="button" class="btn" data-cfw="dropdown">
        Dropdown
        <span class="caret" aria-hidden="true"></span>
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Dropdown link</a></li>
        <li><a class="dropdown-item" href="#">Dropdown link</a></li>
      </ul>
    </div>
    <div class="btn-group" role="group">
      <button type="button" class="btn" data-cfw="dropdown">
        Dropdown
        <span class="caret" aria-hidden="true"></span>
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Dropdown link</a></li>
        <li><a class="dropdown-item" href="#">Dropdown link</a></li>
      </ul>
    </div>
    <div class="btn-group" role="group">
      <button type="button" class="btn btn-group-end" data-cfw="dropdown">
        Dropdown
        <span class="caret" aria-hidden="true"></span>
      </button>
      <ul class="dropdown-menu">
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

Due to their specific implementation (and some other components), a bit of special casing is required for tooltips and popovers within button groups. **You'll have to specify the option `container: 'body'`** to avoid unwanted side effects (such as the element growing wider and/or losing its rounded corners when the tooltip or popover is triggered).

{% example html %}
<div class="btn-toolbar" aria-label="Toolbar with tooltip buttons">
  <div class="btn-group me-1">
    <button type="button" class="btn" data-cfw="tooltip" data-cfw-tooltip-title="I have a long sentence to be crushed inside a tooltip.">Tooltip</button>
  </div>
  <div class="btn-group">
    <button type="button" class="btn" data-cfw="tooltip" data-cfw-tooltip-title="I have a long sentence that is not crushed because this tooltip uses the container option." data-cfw-tooltip-container="body">Tooltip container</button>
  </div>
</div>
{% endexample %}

{% example html %}
<div class="btn-toolbar" aria-label="Toolbar with popover buttons">
  <div class="btn-group me-1">
    <button type="button" class="btn" data-cfw="popover" data-cfw-popover-title="Popover title" data-cfw-popover-content="I have a long sentence to be crushed inside a popover.">Popover</button>
  </div>
  <div class="btn-group">
    <button type="button" class="btn" data-cfw="popover" data-cfw-popover-title="Popover title" data-cfw-popover-content="I have a long sentence that is not crushed because this popover uses the container option." data-cfw-popover-container="body">Popover container</button>
  </div>
</div>
{% endexample %}

## Accessibility

### Ensure correct `role` and provide a label

In order for assistive technologies (such as screen readers) to convey that a series of buttons is grouped, an appropriate `role` attribute needs to be provided. For button groups, this would be `role="group"`, while toolbars should have a `role="toolbar"`.

In addition, groups and toolbars should be given an explicit label, as most assistive technologies will otherwise not announce them, despite the presence of the correct role attribute. In the examples provided here, we use `aria-label`, but alternatives such as `aria-labelledby` can also be used.
