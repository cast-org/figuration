---
layout: docs
title: Input Group
group: components
---

Easily extend form controls by adding text, buttons, and more, on either side of textual inputs, custom selects, and custom file inputs

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Basic Example

Place one add-on or button on either side of an input. You may also place one on both sides of an input. Remember to place `<label>`s outside the input group.

{% example html %}
<div class="input-group mb-1">
  <div class="input-group-addon">
    <span class="input-group-text" id="basic-addon1">@</span>
  </div>
  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
</div>

<div class="input-group mb-1">
  <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
  <div class="input-group-addon">
     <span class="input-group-text" id="basic-addon2">@example.com</span>
   </div>
</div>

<label for="basic-url">Your vanity URL</label>
<div class="input-group mb-1">
  <div class="input-group-addon">
    <span class="input-group-text" id="basic-addon3">https://example.com/users/</span>
  </div>
  <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
</div>

<div class="input-group mb-1">
  <div class="input-group-addon">
    <span class="input-group-text">$</span>
  </div>
  <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
  <div class="input-group-addon">
    <span class="input-group-text">.00</span>
  </div>
</div>

<div class="input-group">
  <div class="input-group-addon">
    <span class="input-group-text">With textarea</span>
  </div>
  <textarea class="form-control" aria-label="With textarea"></textarea>
</div>
{% endexample %}

## Multiple Inputs

While multiple `<input>`s are supported visually, validation styles are only available for input groups with a single `<input>`.

{% example html %}
<div class="input-group">
  <div class="input-group-addon">
    <span class="input-group-text">First and last name</span>
  </div>
  <input type="text" aria-label="First name" class="form-control">
  <input type="text" aria-label="Last name" class="form-control">
</div>
{% endexample %}

## Sizing

Add the relative form sizing classes to the `.input-group` itself and contents within will automatically resize---no need for repeating the form control size classes on each element.

**Sizing on the individual input group elements is not supported.**

{% example html %}
<div class="input-group input-group-xsmall mb-1">
  <div class="input-group-addon">
    <span class="input-group-text" id="inputGroup-sizing-xs">Extra Small</span>
  </div>
  <input type="text" class="form-control" aria-label="Extra Small" aria-describedby="inputGroup-sizing-xs">
</div>

<div class="input-group input-group-small mb-1">
  <div class="input-group-addon">
    <span class="input-group-text" id="inputGroup-sizing-sm">Small</span>
  </div>
  <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
</div>

<div class="input-group mb-1">
  <div class="input-group-addon">
    <span class="input-group-text" id="inputGroup-sizing-default">Default</span>
  </div>
  <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
</div>

<div class="input-group input-group-large mb-1">
  <div class="input-group-addon">
    <span class="input-group-text" id="inputGroup-sizing-large">Large</span>
  </div>
  <input type="text" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-large">
</div>

<div class="input-group input-group-xlarge mb-1">
  <div class="input-group-addon">
    <span class="input-group-text" id="inputGroup-sizing-xlarge">Extra Large</span>
  </div>
  <input type="text" class="form-control" aria-label="Extra Large" aria-describedby="inputGroup-sizing-xlarge">
</div>
{% endexample %}

## Addons

Place an add-on on either side of an input by using the `.input-group-addon` container.

### Text

Inside the addon container, use `.input-group-text` to size and align text, with some additional background color and border.

{% example html %}
<div class="input-group mb-1">
  <div class="input-group-addon">
    <span class="input-group-text" id="text-addon-start">Start side addon</span>
  </div>
  <input type="text" class="form-control" aria-label="Start side addon" aria-describedby="text-addon-start">
</div>

<div class="input-group">
  <input type="text" class="form-control" aria-label="End side addon" aria-describedby="text-addon-end">
  <div class="input-group-addon">
    <span class="input-group-text" id="text-addon-end">End side addon</span>
  </div>
</div>
{% endexample %}

### Checkbox and Radio Inputs

Place any checkbox or radio option within an input group's addon instead of text.

{% example html %}
<div class="input-group mb-1">
  <div class="input-group-addon">
    <span class="input-group-text">
      <input type="checkbox" aria-label="Checkbox for following text input">
    </span>
  </div>
  <input type="text" class="form-control" aria-label="Text input with checkbox">
</div>

<div class="input-group">
  <div class="input-group-addon">
    <span class="input-group-text">
      <input type="radio" aria-label="Radio button for following text input">
    </span>
  </div>
  <input type="text" class="form-control" aria-label="Text input with radio button">
</div>
{% endexample %}

### Multiple Addons

Multiple add-ons are supported and can be mixed with checkbox and radio input versions.

{% example html %}
<div class="input-group mb-1">
  <div class="input-group-addon">
    <span class="input-group-text">$</span>
    <span class="input-group-text">0.00</span>
  </div>
  <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)">
</div>

<div class="input-group">
  <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)">
  <div class="input-group-addon">
    <span class="input-group-text">$</span>
    <span class="input-group-text">0.00</span>
  </div>
</div>
{% endexample %}

### Buttons

{% example html %}
<div class="input-group mb-1">
  <div class="input-group-addon">
    <button class="btn btn-outline-secondary" type="button" id="button-addon-1">Button</button>
  </div>
  <input type="text" class="form-control" placeholder="" aria-label="Text input with button addon" aria-describedby="button-addon-1">
</div>

<div class="input-group mb-1">
  <input type="text" class="form-control" placeholder="" aria-label="Text input with button addon" aria-describedby="button-addon-2">
  <div class="input-group-addon">
    <button class="btn btn-outline-secondary" type="button" id="button-addon-2">Button</button>
  </div>
</div>

<div class="input-group mb-1">
  <div class="input-group-addon" id="button-addon-3">
    <button class="btn btn-outline-secondary" type="button">Button</button>
    <button class="btn btn-outline-secondary" type="button">Button</button>
  </div>
  <input type="text" class="form-control" placeholder="" aria-label="Text input with two button addons" aria-describedby="button-addon-3">
</div>

<div class="input-group">
  <input type="text" class="form-control" placeholder="" aria-label="Text input with two button addons" aria-describedby="button-addon-4">
  <div class="input-group-addon" id="button-addon-4">
    <button class="btn btn-outline-secondary" type="button">Button</button>
    <button class="btn btn-outline-secondary" type="button">Button</button>
  </div>
</div>
{% endexample %}

### Checkbox or Radio Buttons

{% example html %}
<div class="input-group">
    <div class="input-group-addon">
        <div class="btn-check">
            <input id="btn-check-0" type="checkbox" class="btn-check-input">
            <label for="btn-check-0" class="btn">Checkbox Button</label>
        </div>
    </div>
    <input type="text" aria-label="Text input with checkbox buttons" class="form-control">
    <div class="input-group-addon">
        <div class="btn-check">
            <input id="btn-check-1" type="checkbox" class="btn-check-input">
            <label for="btn-check-1" class="btn">Checkbox Button</label>
        </div>
    </div>
</div>
{% endexample %}

### Buttons with Dropdowns

Since the dropdown toggle button is not the last item within the addon container. You can add `.input-group-end` to the toggle button to keep its `border-radius` from being reset.

{% example html %}
<div class="input-group mb-1">
  <div class="input-group-addon">
    <button type="button" class="btn" data-cfw="dropdown">Dropdown <span class="caret" aria-hidden="true"></span></button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li role="separator" class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div>
  <input type="text" class="form-control" aria-label="Text input with dropdown button">
</div>

<div class="input-group">
  <input type="text" class="form-control" aria-label="Text input with dropdown button">
  <div class="input-group-addon dropdown-menu-reverse">
    <button type="button" class="btn input-group-end" data-cfw="dropdown">Dropdown <span class="caret" aria-hidden="true"></span></button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li role="separator" class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div>
</div>
{% endexample %}

### Segmented Buttons

{% example html %}
<div class="input-group mb-1">
  <div class="input-group-addon">
    <button type="button" class="btn">Action</button>
    <button type="button" class="btn btn-icon" data-cfw="dropdown">
      <span class="sr-only">Toggle Dropdown</span>
      <span class="caret" aria-hidden="true"></span>
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li role="separator" class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div>
  <input type="text" class="form-control" aria-label="Text input with segmented button dropdown">
</div>

<div class="input-group">
  <input type="text" class="form-control" aria-label="Text input with segmented button dropdown">
  <div class="input-group-addon dropdown-menu-reverse">
    <button type="button" class="btn">Action</button>
    <button type="button" class="btn btn-icon input-group-end" data-cfw="dropdown">
      <span class="sr-only">Toggle Dropdown</span>
      <span class="caret" aria-hidden="true"></span>
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li role="separator" class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div>
</div>
{% endexample %}

## Custom Forms

Input groups include support for custom selects and custom file inputs. Browser default versions of these are not supported.

### Custom Select

{% example html %}
<div class="input-group mb-1">
  <div class="input-group-addon">
    <span class="input-group-text" id="custom-select-1-addon">Options</span>
  </div>
  <select class="custom-select" id="custom-select-1" aria-describedby="custom-select-1-addon">
    <option selected>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</div>

<div class="input-group mb-1">
  <select class="custom-select" id="custom-select-2" aria-describedby="custom-select-2-addon">
    <option selected>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
  <div class="input-group-addon">
    <span class="input-group-text" id="custom-select-2-addon">Options</span>
  </div>
</div>

<div class="input-group mb-1">
  <span class="input-group-addon">
    <button class="btn btn-primary" type="button">Button</button>
  </span>
  <select class="custom-select" id="custom-select-3" aria-label="Example select with button addon">
    <option selected>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</div>

<div class="input-group">
  <select class="custom-select" id="custom-select-4" aria-label="Example select with button addon">
    <option selected>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
  <span class="input-group-addon">
    <button class="btn btn-primary" type="button">Button</button>
  </span>
</div>
{% endexample %}

### Custom File Input

{% example html %}
<div class="input-group mb-1">
  <div class="input-group-addon">
    <span class="input-group-text">Upload</span>
  </div>
  <div class="custom-file">
    <input type="file" class="custom-file-input" id="custom-file-1">
    <label class="custom-file-label" for="custom-file-1">Choose file...</label>
  </div>
</div>

<div class="input-group mb-1">
  <div class="custom-file">
    <input type="file" class="custom-file-input" id="custom-file-2">
    <label class="custom-file-label" for="custom-file-2">Choose file...</label>
  </div>
  <div class="input-group-addon">
    <span class="input-group-text">Upload</span>
  </div>
</div>

<div class="input-group mb-1">
  <span class="input-group-addon">
    <button class="btn btn-primary" type="button">Button</button>
  </span>
<div class="custom-file">
    <input type="file" class="custom-file-input" id="custom-file-3">
    <label class="custom-file-label" for="custom-file-3">Choose file...</label>
  </div>
</div>

<div class="input-group">
  <div class="custom-file">
    <input type="file" class="custom-file-input" id="custom-file-4">
    <label class="custom-file-label" for="custom-file-4">Choose file...</label>
  </div>
  <span class="input-group-addon">
    <button class="btn btn-primary" type="button">Button</button>
  </span>
</div>
{% endexample %}

## Accessibility

Screen readers will have trouble with your forms if you don't include a label for every input. For these input groups, ensure that any additional label or functionality is conveyed to assistive technologies.

The exact technique to be used (`<label>` elements hidden using the `.sr-only` class, or use of the `aria-label` and `aria-labelledby` attributes, possibly in combination with `aria-describedby`) and what additional information will need to be conveyed will vary depending on the exact type of interface widget you're implementing. The examples in this section provide a few suggested, case-specific approaches.

There is also an issue when placing buttons before inputs, as this can cause a confusing ordering issue for those using screen readers, where the general expectation is that the buttons are at the end of a form, or at least, after the inputs.  This fix is not as simple as controlling the focus order since screen readers read in order of the DOM elements.  There might be ways to mitigate this using a description of some kind, but it might be better to ensure proper ordering of the elements, and putting the buttons after any input elements.
