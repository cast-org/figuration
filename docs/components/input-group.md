---
layout: docs
title: Input Group
group: components
---

Easily extend form controls by adding text, buttons, or button groups on either side of textual `<input>`s.

Input groups have support for both a `table` style layout, along with both the opt-in flexbox and [full flexbox]({{ site.baseurl }}/layout/flexbox#full-flexbox-mode) modes.  To use the opt-in method, simply add a `.input-group-flex` class to the `.input-group` element.

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Basic Example

Place one add-on or button on either side of an input. You may also place one on both sides of an input. **We do not support multiple form-controls in a single input group.**

{% example html %}
<div class="input-group">
  <span class="input-group-addon" id="basic-addon1">@</span>
  <input type="text" class="form-control" placeholder="Username" aria-describedby="basic-addon1">
</div>
<br>
<div class="input-group">
  <input type="text" class="form-control" placeholder="Recipient's username" aria-describedby="basic-addon2">
  <span class="input-group-addon" id="basic-addon2">@example.com</span>
</div>
<br>
<label for="basic-url">Your vanity URL</label>
<div class="input-group">
  <span class="input-group-addon" id="basic-addon3">https://example.com/users/</span>
  <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
</div>
<br>
<div class="input-group">
  <span class="input-group-addon">$</span>
  <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
  <span class="input-group-addon">.00</span>
</div>
<br>
<div class="input-group">
  <span class="input-group-addon">$</span>
  <span class="input-group-addon">0.00</span>
  <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
</div>
{% endexample %}

## Sizing

Add the relative form sizing classes to the `.input-group` itself and contents within will automatically resize---no need for repeating the form control size classes on each element.

{% example html %}
<div class="input-group input-group-lg">
  <span class="input-group-addon" id="sizing-addon1">@</span>
  <input type="text" class="form-control" placeholder="Username" aria-describedby="sizing-addon1">
</div>
<br>
<div class="input-group input-group-sm">
  <span class="input-group-addon" id="sizing-addon2">@</span>
  <input type="text" class="form-control" placeholder="Username" aria-describedby="sizing-addon2">
</div>
{% endexample %}

## Checkboxes and Radio Addons

Place any checkbox or radio option within an input group's addon instead of text.

{% example html %}
<div class="row">
  <div class="col-lg-6">
    <div class="input-group">
      <span class="input-group-addon">
        <input type="checkbox" aria-label="Checkbox for following text input">
      </span>
      <input type="text" class="form-control" aria-label="Text input with checkbox">
    </div>
  </div>
  <div class="col-lg-6">
    <div class="input-group">
      <span class="input-group-addon">
        <input type="radio" aria-label="Radio button for following text input">
      </span>
      <input type="text" class="form-control" aria-label="Text input with radio button">
    </div>
  </div>
</div>
{% endexample %}

## Multiple Addons

Multiple add-ons are supported and can be mixed with checkbox and radio input versions.

{% example html %}
<div class="row">
  <div class="col-lg-6">
    <div class="input-group">
      <span class="input-group-addon">
        <input type="checkbox" aria-label="Checkbox for following text input">
      </span>
      <span class="input-group-addon">$</span>
      <input type="text" class="form-control" aria-label="Text input with checkbox">
    </div>
  </div>
  <div class="col-lg-6">
    <div class="input-group">
      <span class="input-group-addon">$</span>
      <span class="input-group-addon">0.00</span>
      <input type="text" class="form-control" aria-label="Text input with radio button">
    </div>
  </div>
</div>
{% endexample %}


## Button Addons

Buttons in input groups must wrapped in a `.input-group-btn` for proper alignment and sizing.  This is required due to default browser styles that cannot be overridden.

{% example html %}
<div class="row">
  <div class="col-lg-6">
    <div class="input-group">
      <span class="input-group-btn">
        <button class="btn" type="button">Go!</button>
      </span>
      <input type="text" class="form-control" placeholder="Search for...">
    </div>
  </div>
  <div class="col-lg-6">
    <div class="input-group">
      <input type="text" class="form-control" placeholder="Search for...">
      <span class="input-group-btn">
        <button class="btn" type="button">Go!</button>
      </span>
    </div>
  </div>
</div>
<br>
<div class="row">
  <div class="col-lg-offset-3 col-lg-6">
    <div class="input-group">
      <span class="input-group-btn">
        <button class="btn" type="button">Hate it</button>
      </span>
      <input type="text" class="form-control" placeholder="Product name">
      <span class="input-group-btn">
        <button class="btn" type="button">Love it</button>
      </span>
    </div>
  </div>
</div>
{% endexample %}

## Buttons with Dropdowns

{% example html %}
<div class="row">
  <div class="col-lg-6">
    <div class="input-group">
      <div class="input-group-btn">
        <button type="button" class="btn dropdown-toggle" data-cfw="dropdown" data-cfw-dropdown-toggle="#inputGroupDropdown1">
          Action
        </button>
        <ul class="dropdown-menu" id="inputGroupDropdown1">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
          <li role="separator" class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#">Separated link</a></li>
        </ul>
      </div>
      <input type="text" class="form-control" aria-label="Text input with dropdown button">
    </div>
  </div>
  <div class="col-lg-6">
    <div class="input-group">
      <input type="text" class="form-control" aria-label="Text input with dropdown button">
      <div class="input-group-btn">
        <button type="button" class="btn dropdown-toggle" data-cfw="dropdown" data-cfw-dropdown-toggle="#inputGroupDropdown2">
          Action
        </button>
        <ul class="dropdown-menu dropdown-menu-right" id="inputGroupDropdown2">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
          <li role="separator" class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#">Separated link</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>
{% endexample %}

## Segmented Buttons

{% example html %}
<div class="row">
  <div class="col-lg-6">
    <div class="input-group">
      <div class="input-group-btn">
        <button type="button" class="btn">Action</button>
        <button type="button" class="btn dropdown-toggle dropdown-toggle-split" data-cfw="dropdown" data-cfw-dropdown-toggle="#inputGroupDropdown3">
          <span class="sr-only">Toggle Dropdown</span>
        </button>
        <ul class="dropdown-menu" id="inputGroupDropdown3">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
          <li role="separator" class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#">Separated link</a></li>
        </ul>
      </div>
      <input type="text" class="form-control" aria-label="Text input with segmented button dropdown">
    </div>
  </div>
  <div class="col-lg-6">
    <div class="input-group">
      <input type="text" class="form-control" aria-label="Text input with segmented button dropdown">
      <div class="input-group-btn">
        <button type="button" class="btn">Action</button>
        <button type="button" class="btn dropdown-toggle dropdown-toggle-split" data-cfw="dropdown" data-cfw-dropdown-toggle="#inputGroupDropdown4">
          <span class="sr-only">Toggle Dropdown</span>
        </button>
        <ul class="dropdown-menu dropdown-menu-right" id="inputGroupDropdown4">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
          <li role="separator" class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#">Separated link</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>
{% endexample %}

## Accessibility

Screen readers will have trouble with your forms if you don't include a label for every input. For these input groups, ensure that any additional label or functionality is conveyed to assistive technologies.

The exact technique to be used (`<label>` elements hidden using the `.sr-only` class, or use of the `aria-label`, `aria-labelledby`, `aria-describedby`, `title` or `placeholder` attribute) and what additional information will need to be conveyed will vary depending on the exact type of interface widget you're implementing. The examples in this section provide a few suggested, case-specific approaches.

There is also an issue when placing buttons before inputs, as this can cause a confusing ordering issue for those using screen readers, where the general expectation is that the buttons are at the end of a form, or at least, after the inputs.  This fix is not as simple as controlling the focus order since screen readers read in order of the DOM elements.  There might be ways to mitigate this using a description of some kind, but it might be better to ensure proper ordering of the elements, and putting the buttons after any input elements.