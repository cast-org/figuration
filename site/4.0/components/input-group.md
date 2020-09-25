---
layout: doc
title: Input Group
description: Easily extend form controls by adding text, buttons, and more, on either side of textual inputs, selects, and custom file inputs.
group: components
toc: true
---

## Basic Example

Place one textual addon or button on either side of an input. You may also place one on both sides of an input. Remember to place `<label>`s outside the input group.

{% capture example %}
<div class="input-group mb-1">
  <span class="input-group-text" id="basic-addon1">@</span>
  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
</div>

<div class="input-group mb-1">
  <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
  <span class="input-group-text" id="basic-addon2">@example.com</span>
</div>

<label for="basic-url">Your vanity URL</label>
<div class="input-group mb-1">
  <span class="input-group-text" id="basic-addon3">https://example.com/users/</span>
  <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
</div>

<div class="input-group mb-1">
  <span class="input-group-text">$</span>
  <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
  <span class="input-group-text">.00</span>
</div>

<div class="input-group">
  <span class="input-group-text">With textarea</span>
  <textarea class="form-control" aria-label="With textarea"></textarea>
</div>
{% endcapture %}
{% renderExample example %}

## Multiple Inputs

While multiple `<input>`s are supported visually, validation styles are only available for input groups with a single `<input>`.

{% capture example %}
<div class="input-group">
  <span class="input-group-text">First and last name</span>
  <input type="text" aria-label="First name" class="form-control">
  <input type="text" aria-label="Last name" class="form-control">
</div>
{% endcapture %}
{% renderExample example %}

## Wrapping

Input groups wrap by default in order to accommodate the use of custom form field validation within them.  Since this is done with `flex-wrap: wrap;`, you can easily disable this behaviour by using our `.flex-nowrap` utility.

{% capture example %}
<div class="input-group flex-nowrap">
  <span class="input-group-text" id="wrap-addon">@</span>
  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="wrap-addon">
</div>
{% endcapture %}
{% renderExample example %}

## Sizing

Add the relative form sizing classes to the `.input-group` itself and contents within will automatically resize—no need for repeating the form control size classes on each element.

**Sizing on the individual input group elements is not supported.**

{% capture example %}
<div class="input-group input-group-xsmall mb-1">
  <span class="input-group-text" id="inputGroup-sizing-xs">Extra Small</span>
  <input type="text" class="form-control" aria-label="Extra Small" aria-describedby="inputGroup-sizing-xs">
</div>

<div class="input-group input-group-small mb-1">
  <span class="input-group-text" id="inputGroup-sizing-sm">Small</span>
  <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
</div>

<div class="input-group mb-1">
  <span class="input-group-text" id="inputGroup-sizing-default">Default</span>
  <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
</div>

<div class="input-group input-group-large mb-1">
  <span class="input-group-text" id="inputGroup-sizing-large">Large</span>
  <input type="text" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-large">
</div>

<div class="input-group input-group-xlarge mb-1">
  <span class="input-group-text" id="inputGroup-sizing-xlarge">Extra Large</span>
  <input type="text" class="form-control" aria-label="Extra Large" aria-describedby="inputGroup-sizing-xlarge">
</div>
{% endcapture  %}
{% renderExample example %}

## Textual Addon

Use `.input-group-text` to size and align text, with some additional background color and border.

Sometimes an addon or control, like a button, is not the last item within the input group. You can add `.input-group-end` to the item to keep its `border-radius` from being reset.

{% capture example %}
<div class="input-group mb-1">
  <span class="input-group-text" id="text-addon-start">Start side addon</span>
  <input type="text" class="form-control" aria-label="Start side addon" aria-describedby="text-addon-start">
</div>

<div class="input-group">
  <input type="text" class="form-control" aria-label="End side addon" aria-describedby="text-addon-end">
  <span class="input-group-text" id="text-addon-end">End side addon</span>
</div>
{% endcapture %}
{% renderExample example %}

## Checkbox and Radio Inputs

Place any checkbox or radio option within an input group's textual addon instead of text.

{% capture example %}
<div class="input-group mb-1">
  <span class="input-group-text">
    <input type="checkbox" aria-label="Checkbox for following text input">
  </span>
  <input type="text" class="form-control" aria-label="Text input with checkbox">
</div>

<div class="input-group">
  <span class="input-group-text">
    <input type="radio" aria-label="Radio button for following text input">
  </span>
  <input type="text" class="form-control" aria-label="Text input with radio button">
</div>
{% endcapture %}
{% renderExample example %}

## Multiple Addons

Multiple textual addons are supported and can be mixed with checkbox and radio input versions.

{% capture example %}
<div class="input-group mb-1">
  <span class="input-group-text">$</span>
  <span class="input-group-text">0.00</span>
  <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)">
</div>

<div class="input-group">
  <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)">
  <span class="input-group-text">$</span>
  <span class="input-group-text">0.00</span>
</div>
{% endcapture %}
{% renderExample example %}

## Buttons

{% capture example %}
<div class="input-group mb-1">
  <button class="btn btn-outline-secondary" type="button" id="button-addon-1">Button</button>
  <input type="text" class="form-control" placeholder="" aria-label="Text input with button addon" aria-describedby="button-addon-1">
</div>

<div class="input-group mb-1">
  <input type="text" class="form-control" placeholder="" aria-label="Text input with button addon" aria-describedby="button-addon-2">
  <button class="btn btn-outline-secondary" type="button" id="button-addon-2">Button</button>
</div>

<div class="input-group mb-1">
  <button id="button-addon-3a" class="btn btn-outline-secondary" type="button">Button</button>
  <button id="button-addon-3b" class="btn btn-outline-secondary" type="button">Button</button>
  <input type="text" class="form-control" placeholder="" aria-label="Text input with two button addons" aria-describedby="button-addon-3a button-addon-3b">
</div>

<div class="input-group">
  <input type="text" class="form-control" placeholder="" aria-label="Text input with two button addons" aria-describedby="button-addon-4a button-addon-4b">
  <button id="button-addon-4a" class="btn btn-outline-secondary" type="button">Button</button>
  <button id="button-addon-4b" class="btn btn-outline-secondary" type="button">Button</button>
</div>
{% endcapture %}
{% renderExample example %}

### Checkbox or Radio Buttons

{% capture example %}
<div class="input-group">
  <div class="btn-check">
    <input id="btn-check-0" type="checkbox" class="btn-check-input">
    <label for="btn-check-0" class="btn">Checkbox Button</label>
  </div>
  <input type="text" aria-label="Text input with checkbox buttons" class="form-control">
  <div class="btn-check">
    <input id="btn-check-1" type="checkbox" class="btn-check-input">
    <label for="btn-check-1" class="btn">Checkbox Button</label>
  </div>
</div>
{% endcapture %}
{% renderExample example %}

### Buttons with Dropdowns

{% capture example %}
<div class="input-group mb-1">
  <button type="button" class="btn" data-cfw="dropdown">Dropdown <span class="caret" aria-hidden="true"></span></button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li role="separator" class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
  <input type="text" class="form-control" aria-label="Text input with dropdown button">
</div>

<div class="input-group">
  <input type="text" class="form-control" aria-label="Text input with dropdown button">
  <button type="button" class="btn input-group-end" data-cfw="dropdown">Dropdown <span class="caret" aria-hidden="true"></span></button>
  <ul class="dropdown-menu dropreverse">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li role="separator" class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>
{% endcapture %}
{% renderExample example %}

### Segmented Buttons

{% capture example %}
<div class="input-group mb-1">
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
  <input type="text" class="form-control" aria-label="Text input with segmented button dropdown">
</div>

<div class="input-group">
  <input type="text" class="form-control" aria-label="Text input with segmented button dropdown">
  <button type="button" class="btn">Action</button>
  <button type="button" class="btn btn-icon input-group-end" data-cfw="dropdown">
    <span class="sr-only">Toggle Dropdown</span>
    <span class="caret" aria-hidden="true"></span>
  </button>
  <ul class="dropdown-menu dropreverse">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li role="separator" class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>
{% endcapture %}
{% renderExample example %}

## Styled Forms

Input groups include support for styled selects and file inputs. Browser default versions of these are not supported.

### Styled Select

{% capture example %}
<div class="input-group mb-1">
  <span class="input-group-text" id="form-select-1-addon">Options</span>
  <select class="form-control" id="form-select-1" aria-describedby="form-select-1-addon">
    <option selected>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</div>

<div class="input-group mb-1">
  <select class="form-control" id="form-select-2" aria-describedby="form-select-2-addon">
    <option selected>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
  <span class="input-group-text" id="form-select-2-addon">Options</span>
</div>

<div class="input-group mb-1">
  <button class="btn btn-primary" type="button">Button</button>
  <select class="form-control" id="form-select-3" aria-label="Example select with button addon">
    <option selected>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</div>

<div class="input-group">
  <select class="form-control" id="form-select-4" aria-label="Example select with button addon">
    <option selected>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
  <button class="btn btn-primary" type="button">Button</button>
</div>
{% endcapture %}
{% renderExample example %}

### Styled File Input

{% capture example %}
<div class="input-group mb-1">
  <span class="input-group-text">Upload</span>
  <div class="form-file">
    <input type="file" class="form-file-input" id="form-file-1">
    <label class="form-file-label" for="form-file-1">
      <span class="form-file-text">Choose file...</span>
      <span class="form-file-button">Browse</span>
    </label>
  </div>
</div>

<div class="input-group mb-1">
  <div class="form-file">
    <input type="file" class="form-file-input" id="form-file-2">
    <label class="form-file-label" for="form-file-2">
      <span class="form-file-text">Choose file...</span>
      <span class="form-file-button">Browse</span>
    </label>
  </div>
  <span class="input-group-text">Upload</span>
</div>

<div class="input-group mb-1">
  <button class="btn btn-primary" type="button">Button</button>
  <div class="form-file">
    <input type="file" class="form-file-input" id="form-file-3">
    <label class="form-file-label" for="form-file-3">
      <span class="form-file-text">Choose file...</span>
      <span class="form-file-button">Browse</span>
    </label>
  </div>
</div>

<div class="input-group">
  <div class="form-file">
    <input type="file" class="form-file-input" id="form-file-4">
    <label class="form-file-label" for="form-file-4">
      <span class="form-file-text">Choose file...</span>
      <span class="form-file-button">Browse</span>
    </label>
  </div>
  <button class="btn btn-primary" type="button">Button</button>
</div>
{% endcapture %}
{% renderExample example %}

## Accessibility

Screen readers will have trouble with your forms if you don't include a label for every input. For these input groups, ensure that any additional label or functionality is conveyed to assistive technologies.

The exact technique to be used (`<label>` elements hidden using the `.sr-only` class, or use of the `aria-label` and `aria-labelledby` attributes, possibly in combination with `aria-describedby`) and what additional information will need to be conveyed will vary depending on the exact type of interface widget you're implementing. The examples in this section provide a few suggested, case-specific approaches.

There is also an issue when placing buttons before inputs, as this can cause a confusing ordering issue for those using screen readers, where the general expectation is that the buttons are at the end of a form, or at least, after the inputs.  This fix is not as simple as controlling the focus order since screen readers read in order of the DOM elements.  There might be ways to mitigate this using a description of some kind, but it might be better to ensure proper ordering of the elements, and putting the buttons after any input elements.

## SASS Reference

### Variables

The available [Customization options]({{ site.path }}/{{ version.docs }}/get-started/options/), or Sass variables, that can be customized for input groups.

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
        <td><code>$enable-input-group</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the input group classes.
          Smaller segements of the input group classes can be disabled with the following <code>$enable-*</code> variables.
        </td>
      </tr>
      <tr>
        <td><code>$enable-input-group-text</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of input group text classes.
        </td>
      </tr>
      <tr>
        <td><code>$enable-input-group-sizing</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of input group sizing classes.
        </td>
      </tr>
      <tr>
        <td><code>$input-group-text-padding-x</code></td>
        <td>string</td>
        <td><code>$input-padding-x</code></td>
        <td>
          Input group textual addon horizontal padding.
        </td>
      </tr>
      <tr>
        <td><code>$input-group-text-poadding-y</code></td>
        <td>string</td>
        <td><code>$input-padding-y</code></td>
        <td>
          Input group textual addon vertical padding.
        </td>
      </tr>
      <tr>
        <td><code>$input-group-text-font-weight</code></td>
        <td>string</td>
        <td><code>$input-font-weight</code></td>
        <td>
          Input group textual addon font-weight.
        </td>
      </tr>
      <tr>
        <td><code>$input-group-text-color</code></td>
        <td>string</td>
        <td><code>$input-color</code></td>
        <td>
          Input group textual addon color.
        </td>
      </tr>
      <tr>
        <td><code>$input-group-text-bg</code></td>
        <td>string</td>
        <td><code>$uibase-50</code></td>
        <td>
          Input group textual addon background color.
        </td>
      </tr>
      <tr>
        <td><code>$input-group-text-border-color</code></td>
        <td>string</td>
        <td><code>$input-border-color</code></td>
        <td>
          Input group textual addon border color.
        </td>
      </tr>
    </tbody>
  </table>
</div>

### Mixins

No mixins available.
