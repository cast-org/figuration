---
layout: doc
title: Button Group
description: Group a series of buttons together on a single line with the button group.
group: components
toc: true
---

## Basic Example

Wrap a series of buttons with `.btn` in `.btn-group`.

{% capture example %}
<div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn">Left</button>
  <button type="button" class="btn">Middle</button>
  <button type="button" class="btn">Right</button>
</div>
{% endcapture %}
{% renderExample example %}

A button group can also be used with links, as an alternative to the [`.nav` navigation components]({{ site.path }}/{{ version.docs }}/components/navs/).

{% capture example %}
<div class="btn-group">
  <a href="#" class="btn btn-outline-info active" aria-current="page">Active link</a>
  <a href="#" class="btn btn-outline-info">Link</a>
  <a href="#" class="btn btn-outline-info">Link</a>
</div>
{% endcapture %}
{% renderExample example %}

## Mixed Styles

{% capture example %}
<div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-warning">Left</button>
  <button type="button" class="btn btn-danger">Middle</button>
  <button type="button" class="btn btn-success">Right</button>
</div>
{% endcapture %}
{% renderExample example %}

## Outline Styles

{% capture example %}
<div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-outline-info">Left</button>
  <button type="button" class="btn btn-outline-info">Middle</button>
  <button type="button" class="btn btn-outline-info">Right</button>
</div>
{% endcapture %}
{% renderExample example %}

## Checkbox and Radio Button Groups

Button groups can also be a great way to associate [checkbox and radio input button]({{ site.path }}/{{ version.docs }}/content/buttons/#grouped-input-buttons) controls together.

{% capture example %}
<div class="btn-group">
  <div class="btn-check">
    <input id="radio2-0" type="radio" name="radio2" class="btn-check-input" checked>
    <label for="radio2-0" class="btn btn-outline-info">Radio 1</label>
  </div>
  <div class="btn-check">
    <input id="radio2-1" type="radio" name="radio2" class="btn-check-input">
    <label for="radio2-1" class="btn btn-outline-info">Radio 2</label>
  </div>
  <div class="btn-check">
    <input id="radio2-2" type="radio" name="radio2" class="btn-check-input" disabled>
    <label for="radio2-2" class="btn btn-outline-info">Radio 3</label>
  </div>
</div>
{% endcapture %}
{% renderExample example %}


## Button Toolbar

Combine sets of button groups into button toolbars for more complex components. Use utility classes as needed to space out groups, buttons, and more.

{% capture example %}
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
{% endcapture %}
{% renderExample example %}

### With Input Groups

Mix input groups with button groups in your toolbars. Similar to the example above, you may need some utilities classes to space things out.

{% capture example %}
<div class="btn-toolbar mb-1" role="toolbar" aria-label="Toolbar with button groups">
  <div class="btn-group me-0_5" role="group" aria-label="First group">
    <button type="button" class="btn">1</button>
    <button type="button" class="btn">2</button>
    <button type="button" class="btn">3</button>
    <button type="button" class="btn">4</button>
  </div>
  <div class="input-group">
    <span class="input-group-text" id="btnGroupAddon">@</span>
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
    <span class="input-group-text" id="btnGroupAddon2">@</span>
    <input type="text" class="form-control" placeholder="Input group example" aria-label="Input group example" aria-describedby="btnGroupAddon2">
  </div>
</div>
{% endcapture %}
{% renderExample example %}

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

{% capture highlight %}
<div class="btn-group btn-group-xlarge" role="group" aria-label="...">...</div>
<div class="btn-group btn-group-large" role="group" aria-label="...">...</div>
<div class="btn-group" role="group" aria-label="...">...</div>
<div class="btn-group btn-group-small" role="group" aria-label="...">...</div>
<div class="btn-group btn-group-xsmall" role="group" aria-label="...">...</div>
{% endcapture %}
{% renderHighlight highlight, "html" %}

## Nesting

Place a `.btn-group` within another `.btn-group` when you want dropdown menus mixed with a series of buttons. You can add `.btn-group-end` to the toggle button to keep its `border-radius` from being reset.

{% capture example %}
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
{% endcapture %}
{% renderExample example %}

## Vertical Variation

Make a set of buttons appear vertically stacked rather than horizontally. **Split button dropdowns are not supported here.**

<div class="cf-example cf-example-bottom">
  <div class="btn-group-vertical" role="group" aria-label="Vertical button group">
    <button type="button" class="btn btn-success">Button</button>
    <button type="button" class="btn btn-success">Button</button>
    <button type="button" class="btn btn-success">Button</button>
  </div>
</div>

<div class="cf-example cf-example-bottom">
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

<div class="cf-example">
  <div class="btn-group-vertical" role="group" aria-label="Vertical radio toggle button group">
    <div class="btn-check">
      <input id="radiov-0" type="radio" name="radio2" class="btn-check-input" checked>
      <label for="radiov-0" class="btn btn-outline-info">Radio 1</label>
    </div>
    <div class="btn-check">
      <input id="radiov-1" type="radio" name="radio2" class="btn-check-input">
      <label for="radiov-1" class="btn btn-outline-info">Radio 2</label>
    </div>
    <div class="btn-check">
      <input id="radiov-2" type="radio" name="radio2" class="btn-check-input" disabled>
      <label for="radiov-2" class="btn btn-outline-info">Radio 3</label>
    </div>
  </div>
</div>

{% capture highlight %}
<div class="btn-group-vertical">
  ...
</div>
{% endcapture %}
{% renderHighlight highlight, "html" %}

## Tooltips and Popovers

Due to their specific implementation (and some other components), a bit of special casing is required for tooltips and popovers within button groups. **You'll have to specify the option `container: 'body'`** to avoid unwanted side effects (such as the element growing wider and/or losing its rounded corners when the tooltip or popover is triggered).

{% capture example %}
<div class="btn-toolbar" role="group" aria-label="Toolbar with tooltip buttons">
  <div class="btn-group me-1">
    <button type="button" class="btn" data-cfw="tooltip" data-cfw-tooltip-title="I have a long sentence to be crushed inside a tooltip.">Tooltip</button>
  </div>
  <div class="btn-group">
    <button type="button" class="btn" data-cfw="tooltip" data-cfw-tooltip-title="I have a long sentence that is not crushed because this tooltip uses the container option." data-cfw-tooltip-container="body">Tooltip container</button>
  </div>
</div>
{% endcapture %}
{% renderExample example %}

{% capture example %}
<div class="btn-toolbar" role="group" aria-label="Toolbar with popover buttons">
  <div class="btn-group me-1">
    <button type="button" class="btn" data-cfw="popover" data-cfw-popover-title="Popover title" data-cfw-popover-content="I have a long sentence to be crushed inside a popover.">Popover</button>
  </div>
  <div class="btn-group">
    <button type="button" class="btn" data-cfw="popover" data-cfw-popover-title="Popover title" data-cfw-popover-content="I have a long sentence that is not crushed because this popover uses the container option." data-cfw-popover-container="body">Popover container</button>
  </div>
</div>
{% endcapture %}
{% renderExample example %}

## Accessibility

### Ensure correct `role` and provide a label

In order for assistive technologies (such as screen readers) to convey that a series of buttons is grouped, an appropriate `role` attribute needs to be provided. For button groups, this would be `role="group"`, while toolbars should have a `role="toolbar"`.

In addition, groups and toolbars should be given an explicit label, as most assistive technologies will otherwise not announce them, despite the presence of the correct role attribute. Use `aria-label` or `aria-labelledby` to label them.

## SASS Reference

### Variables

The available [Customization options]({{ site.path }}/{{ version.docs }}/get-started/options/), or Sass variables, that can be customized for the button group component.

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
        <td><code>$enable-btn-group</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the button group component classes.
          Smaller segements of the button group component classes can be disabled with the following <code>$enable-*</code> variables.
        </td>
      </tr>
      <tr>
        <td><code>$enable-btn-group-horizontal</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the horizontal button group classes.
        </td>
      </tr>
      <tr>
        <td><code>$enable-btn-group-vertical</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the vertical button group classes.
        </td>
      </tr>
      <tr>
        <td><code>$enable-btn-group-sizing</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the button group sizing classes.
        </td>
      </tr>
      <tr>
        <td><code>$enable-btn-toolbar</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the button toolbar classes.
        </td>
      </tr>
    </tbody>
  </table>
</div>

### Mixins

No mixins available.