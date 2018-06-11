---
layout: docs
title: Forms
group: content
---

Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Overview

Figuration's form controls expand on [the Rebooted form styles]({{ site.baseurl }}/content/reboot/#forms) with classes. Use these classes to opt into their customized displays for a more consistent rendering across browsers and devices.

Be sure to use an appropriate type attribute on all inputs (e.g., `email` for email address or `number` for numerical information) to take advantage of newer input controls like email verification, number selection, and more.

{% callout warning %}
Alternatives to Hidden Labels
{:.h5}

Assistive technologies such as screen readers will have trouble with your forms if you don't include a label for every input. For these inline forms, you can hide the labels using the `.sr-only` class. There are further alternative methods of providing a label for assistive technologies, such as the `aria-label`, `aria-labelledby` or `title` attribute. If none of these are present, assistive technologies may resort to using the `placeholder` attribute, if present, but note that use of `placeholder` as a replacement for other labelling methods is not advised.
{% endcallout %}

The example form below demonstrates Figuration's form styles.

{% example html %}
<form>
  <div class="form-group">
    <label for="overview-email">Email Address</label>
    <input type="email" class="form-control" id="overview-email" aria-describedby="overview-help" placeholder="Enter email">
    <small id="overview-help" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="overview-pass">Password</label>
    <input type="password" class="form-control" id="overview-pass" placeholder="Password">
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="overview-check">
    <label class="form-check-label" for="overview-check">Remember me</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
{% endexample %}

## Form Controls

Textual form controls---like `<input>`s, `<select>`s, and `<textarea>`s---are styled with the `.form-control` class.  Included are styles for general appearance, focus state, sizing, and more.

Check out our [custom forms](#custom-forms) for additonal `<select>` styling.

{% example html %}
<form>
  <div class="form-group">
    <label for="example-input">Example text input</label>
    <input type="text" class="form-control" id="example-input" placeholder="Input text here">
  </div>
  <div class="form-group">
    <label for="example-select-1">Example select</label>
    <select class="form-control" id="example-select-1">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <div class="form-group">
    <label for="example-select-2">Example multiple select</label>
    <select multiple class="form-control" id="example-select-2">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <div class="form-group">
    <label for="example-texarea">Example textarea</label>
    <textarea class="form-control" id="example-texarea" rows="3"></textarea>
  </div>
</form>
{% endexample %}

### Textual Inputs

Here are examples of `.form-control` applied to each textual HTML5 `<input>` `type`.

{% example html %}
<div class="form-group row">
  <label for="example-text-input" class="col-2 form-control-label">Text</label>
  <div class="col-10">
    <input class="form-control" type="text" value="awesome frameworks" id="example-text-input">
  </div>
</div>
<div class="form-group row">
  <label for="example-search-input" class="col-2 form-control-label">Search</label>
  <div class="col-10">
    <input class="form-control" type="search" value="How do I move mountains" id="example-search-input">
  </div>
</div>
<div class="form-group row">
  <label for="example-email-input" class="col-2 form-control-label">Email</label>
  <div class="col-10">
    <input class="form-control" type="email" value="name@example.com" id="example-email-input">
  </div>
</div>
<div class="form-group row">
  <label for="example-url-input" class="col-2 form-control-label">URL</label>
  <div class="col-10">
    <input class="form-control" type="url" value="http://cast.org/" id="example-url-input">
  </div>
</div>
<div class="form-group row">
  <label for="example-tel-input" class="col-2 form-control-label">Telephone</label>
  <div class="col-10">
    <input class="form-control" type="tel" value="1-(555)-555-5555" id="example-tel-input">
  </div>
</div>
<div class="form-group row">
  <label for="example-password-input" class="col-2 form-control-label">Password</label>
  <div class="col-10">
    <input class="form-control" type="password" value="hunter2" id="example-password-input">
  </div>
</div>
<div class="form-group row">
  <label for="example-number-input" class="col-2 form-control-label">Number</label>
  <div class="col-10">
    <input class="form-control" type="number" value="42" id="example-number-input">
  </div>
</div>
<div class="form-group row">
  <label for="example-datetime-local-input" class="col-2 form-control-label">Date and time</label>
  <div class="col-10">
    <input class="form-control" type="datetime-local" value="2011-08-19T13:45:00" id="example-datetime-local-input">
  </div>
</div>
<div class="form-group row">
  <label for="example-date-input" class="col-2 form-control-label">Date</label>
  <div class="col-10">
    <input class="form-control" type="date" value="2011-08-19" id="example-date-input">
  </div>
</div>
<div class="form-group row">
  <label for="example-month-input" class="col-2 form-control-label">Month</label>
  <div class="col-10">
    <input class="form-control" type="month" value="2011-08" id="example-month-input">
  </div>
</div>
<div class="form-group row">
  <label for="example-week-input" class="col-2 form-control-label">Week</label>
  <div class="col-10">
    <input class="form-control" type="week" value="2011-W33" id="example-week-input">
  </div>
</div>
<div class="form-group row">
  <label for="example-time-input" class="col-2 form-control-label">Time</label>
  <div class="col-10">
    <input class="form-control" type="time" value="13:45:00" id="example-time-input">
  </div>
</div>
{% endexample %}

### File Input

For file inputs, use `.form-control-file` instead of `.form-control`.

{% example html %}
<div class="form-group">
  <label for="example-file">Example file input</label>
  <input type="file" class="form-control-file" id="example-file">
</div>
{% endexample %}

### Control Sizing

Set heights and font-sizes using component sizing classes, such as:

- `.form-control-xsmall`
- `.form-control-small`
- `.form-control-large`
- `.form-control-xlarge`

{% example html %}
<input class="form-control form-control-xlarge" type="text" placeholder=".form-control-xlarge">
<input class="form-control form-control-large" type="text" placeholder=".form-control-large">
<input class="form-control" type="text" placeholder="Default input">
<input class="form-control form-control-small" type="text" placeholder=".form-control-small">
<input class="form-control form-control-xsmall" type="text" placeholder=".form-control-xsmall">
{% endexample %}

The sizing classes also work on other inputs such as `<select>`s and `<textarea>`s.

{% example html %}
<select class="form-control form-control-xlarge">
  <option>Extra large select</option>
</select>
<select class="form-control form-control-large">
  <option>Large select</option>
</select>
<select class="form-control">
  <option>Default select</option>
</select>
<select class="form-control form-control-small">
  <option>Small select</option>
</select>
<select class="form-control form-control-xsmall">
  <option>Extra small select</option>
</select>
{% endexample %}

## Checkboxes and Radios

Default checkboxes and radios are improved upon with the help of `.form-check`, **a single class for both input types that improves the layout and behavior of their HTML elements**. Checkboxes are for selecting one or several options in a list, while radios are for selecting one option from many.

Disabled checkboxes and radios are supported by using the `disabled` attribute on the `.form-check-input`, or by being inside a disabled `<fieldset>`, and will lighten the text color of a sibling `.form-check-label` to help indicate the input's state.

### Default (stacked)

By default, any number of checkboxes and radios that are immediate sibling will be vertically stacked and appropriately spaced with `.form-check`.

{% example html %}
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="default-checkbox-1">
  <label class="form-check-label" for="default-checkbox-1">Default checkbox</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="default-checkbox-2" disabled>
  <label class="form-check-label" for="default-checkbox-2">Disabled checkbox</label>
</div>
{% endexample %}

{% example html %}
<div class="form-check">
  <input class="form-check-input" type="radio" name="default-radio" value="" id="default-radio-1">
  <label class="form-check-label" for="default-radio-1">First default radio</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="default-radio" value="" id="default-radio-2">
  <label class="form-check-label" for="default-radio-2">Second default radio</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="default-radio" value="" id="default-radio-3" disabled>
  <label class="form-check-label" for="default-radio-3">Disabled radio</label>
</div>
{% endexample %}

### Inline

Group checkboxes or radios on the same horizontal row by adding `.form-check-inline` to any `.form-check`.

{% example html %}
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" value="" id="inline-checkbox-1">
  <label class="form-check-label" for="inline-checkbox-1">1</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" value="" id="inline-checkbox-2">
  <label class="form-check-label" for="inline-checkbox-2">2</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" value="" id="inline-checkbox-3" disabled>
  <label class="form-check-label" for="inline-checkbox-3">3 (disabled)</label>
</div>
{% endexample %}

{% example html %}
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inline-radio" value="" id="inline-radio-1">
  <label class="form-check-label" for="inline-radio-1">1</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inline-radio" value="" id="inline-radio-2">
  <label class="form-check-label" for="inline-radio-2">2</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inline-radio" value="" id="inline-radio-3" disabled>
  <label class="form-check-label" for="inline-radio-3">3 (disabled)</label>
</div>
{% endexample %}

### Without Labels

Add `.position-static` to inputs within `.form-check` that don't have any label text. Remember to still provide some form of label for assistive technologies (for instance, using `aria-label`).

{% example html %}
<div class="form-check">
  <input class="form-check-input position-static" type="checkbox" id="nolabel-checkbox" value="" aria-label="...">
</div>
<div class="form-check">
  <input class="form-check-input position-static" type="radio" name="nolabel-radio" id="nolabel-checkbox-1" value="" aria-label="...">
</div>
{% endexample %}

## Range Input

Set horizontally scrollable range inputs using `.form-control-range`.

{% example html %}
<div class="form-group">
  <label for="example-range">Example range input</label>
  <input type="range" class="form-control-range" id="example-range">
</div>
{% endexample %}

## Color Input

For color inputs, use `.form-control-color` instead of `.form-control`.

{% callout danger %}
Browser Compatibility
{:.h5}

While Figuration supports styling `<input type="color">` elements, some browsers don't. Use custom JavaScript to handle it in these browsers.  For support details, see [Can I Use](https://caniuse.com/#feat=input-color).
{% endcallout %}


{% example html %}
<div class="form-group">
  <label for="example-color">Example color input</label>
  <input type="color" class="form-control-range" id="example-color" value="#0055e9">
</div>
{% endexample %}

## Readonly Inputs

Add the `readonly` boolean attribute on an input to prevent modification of the input's value. Read-only inputs appear lighter (just like disabled inputs), but retain the standard cursor.

{% example html %}
<input class="form-control" type="text" placeholder="Readonly input" readonly>
{% endexample %}

## Static Inputs

When you want to have `readonly` fields in your form styled as plain text, use the `.form-control-static` class to remove the default form field styling and preserve the correct margin and padding.

{% example html %}
<form>
  <div class="form-group row">
    <label for="static-email" class="col-sm-2 form-control-label">Email</label>
    <div class="col-sm-10">
      <input type="text" readonly class="form-control-static" id="static-email" value="email@example.com">
    </div>
  </div>
  <div class="form-group row">
    <label for="static-password" class="col-sm-2 form-control-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="static-password" placeholder="Password">
    </div>
  </div>
</form>
{% endexample %}

{% example html %}
<form class="form-inline">
  <div class="form-group me-0_5">
    <label for="inputEmail2" class="sr-only">Email</label>
    <input type="text" readonly class="form-control-static" id="inputEmail2" value="email@example.com">
  </div>
  <div class="form-group me-0_5">
    <label for="inputPassword2" class="sr-only">Password</label>
    <input type="password" class="form-control" id="inputPassword2" placeholder="Password">
  </div>
  <button type="submit" class="btn btn-primary">Confirm identity</button>
</form>
{% endexample %}

## Label, Legend, and Static Sizing

Just like sizing the form inputs, you can size `<label>`s, `<legends>`, and static controls with:

- `.form-control-label-xsmall`
- `.form-control-label-small`
- `.form-control-label-large`
- `.form-control-label-xlarge`

{% example html %}
<div class="form-group flex-items-center row">
    <label class="col-sm-2 form-control-label form-control-label-xsmall" for="labelstatic-1">Email</label>
    <div class="col-sm-10">
        <input type="text" class="form-control-static form-control-label-xsmall" id="labelstatic-1" value="email@example.com">
    </div>
</div>
<div class="form-group flex-items-center row">
    <label class="col-sm-2 form-control-label form-control-label-small" for="labelstatic-2">Email</label>
    <div class="col-sm-10">
        <input type="text" class="form-control-static form-control-label-small" id="labelstatic-2" value="email@example.com">
    </div>
</div>
<div class="form-group flex-items-center row">
    <label class="col-sm-2 form-control-label" for="labelstatic-3">Email</label>
    <div class="col-sm-10">
        <input type="text" class="form-control-static" id="labelstatic-3" value="email@example.com">
    </div>
</div>
<div class="form-group flex-items-center row">
    <label class="col-sm-2 form-control-label form-control-label-large" for="labelstatic-4">Email</label>
    <div class="col-sm-10">
        <input type="text" class="form-control-static form-control-label-large" id="labelstatic-4" value="email@example.com">
    </div>
</div>
<div class="form-group flex-items-center row">
    <label class="col-sm-2 form-control-label form-control-label-xlarge" for="labelstatic-5">Email</label>
    <div class="col-sm-10">
        <input type="text" class="form-control-static form-control-label-xlarge" id="labelstatic-5" value="email@example.com">
    </div>
</div>
{% endexample %}

## Disabled States

Add the `disabled` attribute on an input to prevent user interactions and make it appear lighter in color.

{% example html %}
<input class="form-control" id="disabled-input" type="text" placeholder="Disabled input" disabled>
{% endexample %}

Add the `disabled` attribute to a `<fieldset>` to disable all the controls within.

{% example html %}
<form>
  <fieldset disabled>
    <div class="form-group">
      <label for="disabled-text">Disabled input</label>
      <input type="text" id="disabled-text" class="form-control" placeholder="Disabled input">
    </div>
    <div class="form-group">
      <label for="disabled-select">Disabled select menu</label>
      <select id="disabled-select" class="form-control">
        <option>Disabled select</option>
      </select>
    </div>
    <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="disabled-check">
        <label class="form-check-label" for="disabled-check">Can't check this</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </fieldset>
</form>
{% endexample %}

{% callout warning %}
Caveat About Link Functionality of `<a>`
{:.h5}

By default, browsers will treat all native form controls (`<input>`, `<select>` and `<button>` elements) inside a `<fieldset disabled>` as disabled, preventing both keyboard and mouse interactions on them. However, if your form also includes `<a ... class="btn btn-*">` elements, these will only be given a style of `pointer-events: none`. As noted in the section about [disabled state for buttons](../buttons/#disabled-state) (and specifically in the sub-section for anchor elements), this CSS property is not yet standardized and isn't fully supported in all browsers, and won't prevent keyboard users from being able to focus or activate these links. So to be safe, use custom JavaScript to disable such links.
{% endcallout %}

{% callout danger %}
Cross-browser Compatibility
{:.h5}

While Figuration will apply these styles in all browsers, Internet Explorer 11 and below don't fully support the `disabled` attribute on a `<fieldset>`. Use custom JavaScript to disable the fieldset in these browsers.
{% endcallout %}

## Help Text

Block-level help text in forms can be created using `.form-text`. Inline help text can be flexibly implemented using any inline HTML element and utility classes like `.text-muted`.

{% callout warning %}
Associating Help Text With Form Controls
{:.h5}

Help text should be explicitly associated with the form control it relates to using the `aria-describedby` attribute. This will ensure that assistive technologies---such as screen readers---will announce this help text when the user focuses or enters the control.
{% endcallout %}

Help text below inputs can be styled with `.form-text`. This class includes `display: block;` and adds some top margin for easy spacing from the inputs above.

{% example html %}
<label for="help-pass">Password</label>
<input type="password" id="help-pass" class="form-control" aria-describedby="help-pass-text">
<small id="help-pass-text" class="form-text text-muted">
  Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
</small>
{% endexample %}

Inline text can use any typical inline HTML element (be it a `<small>`, `<span>`, or something else), optionally using utility classes.

{% example html %}
<form class="form-inline">
  <div class="form-group">
    <label for="inline-pass" class="me-0_5">Password</label>
    <input type="password" id="inline-pass" class="form-control me-0_5" aria-describedby="inline-pass-text">
    <small id="inline-pass-text" class="text-muted">
      Must be 8-20 characters long.
    </small>
  </div>
</form>
{% endexample %}

## Layout

Since Figuration applies `display: block` and `width: 100%` to almost all our form controls, forms will by default stack vertically. Additional classes can be used to vary this layout on a per-form basis.

### Form Groups

The `.form-group` class is the easiest way to add some structure to forms. It provides a flexible class that encourages proper grouping of labels, controls, optional help text, and form validation messaging. By default it only applies `margin-bottom`, but it picks up additional styles in `.form-inline` as needed. Use it with `<fieldset>`s, `<div>`s, or nearly any other element.

{% example html %}
<form>
  <div class="form-group">
    <label class="form-control-label" for="formGroupExampleInput">Example label</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input">
  </div>
  <div class="form-group">
    <label class="form-control-label" for="formGroupExampleInput2">Another label</label>
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input">
  </div>
</form>
{% endexample %}

### Form Grid

More complex forms can be built using our [grid classes]({{ site.baseurl }}/layout/grid/). Use these for form layouts that require multiple columns, varied widths, and additional alignment options.

Grid-based form layouts also support [control sizing]({{ site.baseurl }}/content/forms/#control-sizing).

{% example html %}
<form>
  <div class="row">
    <div class="col">
      <input type="text" class="form-control" placeholder="First name">
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Last name">
    </div>
  </div>
</form>
{% endexample %}

### Form Row

You may also swap `.row` for `.form-row`, a variation of our standard grid row that overrides the default column gutters for tighter and more compact layouts.

{% example html %}
<form>
  <div class="form-row">
    <div class="col">
      <input type="text" class="form-control" placeholder="First name">
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Last name">
    </div>
  </div>
</form>
{% endexample %}

More complex layouts can also be created with the grid system.

{% example html %}
<form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="grid-email">Email</label>
      <input type="email" class="form-control" id="grid-email" placeholder="Email">
    </div>
    <div class="form-group col-md-6">
      <label for="grid-pass">Password</label>
      <input type="password" class="form-control" id="grid-pass" placeholder="Password">
    </div>
  </div>
  <div class="form-group">
    <label for="grid-address-1">Address</label>
    <input type="text" class="form-control" id="grid-address-1" placeholder="1234 Main St">
  </div>
  <div class="form-group">
    <label for="grid-address-2">Address 2</label>
    <input type="text" class="form-control" id="grid-address-2" placeholder="Apartment, studio, or floor">
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="grid-city">City</label>
      <input type="text" class="form-control" id="grid-city">
    </div>
    <div class="form-group col-md-4">
      <label for="grid-state">State</label>
      <select id="grid-state" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="grid-zip">Zip</label>
      <input type="text" class="form-control" id="grid-zip">
    </div>
  </div>
  <div class="form-group form-check">
    <input class="form-check-input" type="checkbox" id="grid-check">
    <label class="form-check-label" for="grid-check">
      Check me out
    </label>
  </div>
  <button type="submit" class="btn btn-primary">Sign in</button>
</form>
{% endexample %}

#### Horizontal Form

Create horizontal forms with the grid by adding the `.row` class to form groups and using the `.col-*-*` classes to specify the width of your labels and controls. Be sure to add `.form-control-label` to your `<label>`s as well so they're vertically centered with their associated form controls.

At times, you maybe need to use margin or padding utilities to create that perfect alignment you need. For example, we've removed the `padding-top` on our stacked radio inputs label to better align the text baseline.

{% example html %}
<form>
  <div class="form-group row">
    <label for="hform-email" class="col-sm-2 form-control-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="hform-email" placeholder="Email">
    </div>
  </div>
  <div class="form-group row">
    <label for="hform-pass" class="col-sm-2 form-control-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="hform-pass" placeholder="Password">
    </div>
  </div>
  <fieldset class="form-group">
    <div class="row">
      <legend class="form-control-label col-sm-2 pt-0">Radios</legend>
      <div class="col-sm-10">
        <div class="form-check">
          <input class="form-check-input" type="radio" name="hform-radio" id="gridRadios1" value="option1" checked>
          <label class="form-check-label" for="gridRadios1">
            First radio
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="hform-radio" id="hform-radio-2" value="option2">
          <label class="form-check-label" for="hform-radio-2">
            Second radio
          </label>
        </div>
        <div class="form-check disabled">
          <input class="form-check-input" type="radio" name="hform-radio" id="hform-radio-3" value="option3" disabled>
          <label class="form-check-label" for="hform-radio-3">
            Third disabled radio
          </label>
        </div>
      </div>
    </div>
  </fieldset>
  <div class="form-group row">
    <div class="col-sm-2">Checkbox</div>
    <div class="col-sm-10">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="hform-check">
        <label class="form-check-label" for="hform-check">
          Example checkbox
        </label>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-10">
      <button type="submit" class="btn btn-primary">Sign in</button>
    </div>
  </div>
</form>
{% endexample %}

#### Column Sizing

As shown in the previous examples, our grid system allows you to place any number of `.col`s within a `.row`. They will split the available width equally between them. You may also pick a subset of your columns to take up more or less space, while the remaining `.col`s equally split the rest, with specific column classes like `.col-7`.

{% example html %}
<form>
  <div class="form-row">
    <div class="col-7">
      <input type="text" class="form-control" placeholder="City">
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="State">
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Zip">
    </div>
  </div>
</form>
{% endexample %}

#### Auto-sizing

The example below uses a flexbox utility to vertically center the contents and changes `.col` to `.col-auto` so that your columns only take up as much space as needed. Put another way, the column sizes itself based on the contents.

{% example html %}
<form>
  <div class="form-row flex-items-center">
    <div class="col-auto mb-0_5">
      <label class="sr-only" for="autosize-name">Name</label>
      <input type="text" class="form-control" id="autosize-name" placeholder="Jane Doe">
    </div>
    <div class="col-auto mb-0_5">
      <label class="sr-only" for="autosize-user">Username</label>
      <div class="input-group">
        <div class="input-group-addon">
          <div class="input-group-text">@</div>
        </div>
        <input type="text" class="form-control" id="autosize-user" placeholder="Username">
      </div>
    </div>
    <div class="col-auto mb-0_5">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="autosize-check">
        <label class="form-check-label" for="autosize-check">Remember me</label>
      </div>
    </div>
    <div class="col-auto mb-0_5">
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </div>
</form>
{% endexample %}

Here is the same form, but this time using specified column widths

{% example html %}
<form>
  <div class="form-row flex-items-center">
    <div class="col-sm-3">
      <label class="sr-only" for="specsize-name">Name</label>
      <input type="text" class="form-control" id="specsize-name" placeholder="Jane Doe">
    </div>
    <div class="col-sm-3">
      <label class="sr-only" for="specsize-user">Username</label>
      <div class="input-group">
        <div class="input-group-addon">
          <div class="input-group-text">@</div>
        </div>
        <input type="text" class="form-control" id="specsize-user" placeholder="Username">
      </div>
    </div>
    <div class="col-auto">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="specsize-check">
        <label class="form-check-label" for="specsize-check">Remember me</label>
      </div>
    </div>
    <div class="col-auto">
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </div>
</form>
{% endexample %}

You can also use [custom form controls](#custom-forms) as needed.

{% example html %}
<form>
  <div class="form-row flex-items-center">
    <div class="col">
      <label class="sr-only" for="customsize-select">Preference</label>
      <select class="custom-select" id="customsize-select">
        <option selected>Choose...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
    <div class="col-auto">
      <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="customsize-check">
        <label class="custom-control-label" for="customsize-check">Remember my preference</label>
      </div>
    </div>
    <div class="col-auto">
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </div>
</form>
{% endexample %}

### Inline Forms

Use the `.form-inline` class to display a series of labels, form controls, and buttons on a single horizontal row. Form controls within inline forms vary slightly from their default states.

- Controls are `display: flex`, collapsing any HTML white space and allowing you to provide alignment control with [spacing]({{ site.baseurl }}/utilities/spacing/) and [flexbox]({{ site.baseurl }}/utilities/flexbox/) utilities.
- Controls and input groups receive `width: auto` to override the Figuration default `width: 100%`.
- Controls **only appear inline in viewports that are at least 36em/576px wide** to account for narrow viewports on mobile devices.

You may need to manually address the width and alignment of individual form controls with [spacing utilities]({{ site.baseurl }}/utilities/spacing/) (as shown below). Lastly, as shown below, you should always include a `<label>` with each form control, even if you need to hide it from non-screenreader users with `.sr-only`.

{% example html %}
<form class="form-inline">
  <label class="sr-only" for="inline-name">Name</label>
  <input type="text" class="form-control mb-0_5 me-sm-0_5" id="inline-name" placeholder="Jane Doe">

  <label class="sr-only" for="inline-user">Username</label>
  <div class="input-group mb-0_5 me-sm-0_5">
    <div class="input-group-addon">
      <div class="input-group-text">@</div>
    </div>
    <input type="text" class="form-control" id="inline-user" placeholder="Username">
  </div>

  <div class="form-check mb-0_5 me-sm-0_5">
    <input class="form-check-input" type="checkbox" id="inline-checkbox-4">
    <label class="form-check-label" for="inline-checkbox-4">Remember me</label>
  </div>

  <button type="submit" class="btn btn-primary mb-0_5">Submit</button>
</form>
{% endexample %}

Custom form controls and selects are also supported.

{% example html %}
<form class="form-inline">
  <label class="mb-0_5 me-0_5" for="inlineFormCustomSelectPref">Preference</label>
  <select class="custom-select mb-0_5 me-sm-0_5" id="inlineFormCustomSelectPref">
    <option selected>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>

  <div class="custom-control custom-checkbox mb-0_5 me-sm-0_5">
    <input type="checkbox" class="custom-control-input" id="customControlInline">
    <label class="custom-control-label" for="customControlInline">Remember my preference</label>
  </div>

  <button type="submit" class="btn btn-primary mb-0_5">Submit</button>
</form>
{% endexample %}

## Custom Forms

For even more customization and cross browser consistency, use our completely custom form elements to replace the browser defaults. They're built on top of semantic and accessible markup, so they're solid replacements for any default form control.

### Checkboxes and radios

Each checkbox and radio is wrapped in a block-level container with consolidated styling provided by `.custom-control`, and then an additional modifier class of `.custom-checkbox` or `.custom-radio` to control the specific indicator visuals. Structurally, this is similar to the approach of our default `.form-check`.

We hide the default `<input>` with `opacity` and use the `.custom-control-label` to build a new custom form indicator in its place with `::before` and `::after`. Unfortunately we can't build a custom one from just the `<input>` because CSS's `content` doesn't work on that element.

We also use the sibling selector (`~`) for all our `<input>` states—like `:checked`—to properly style our custom form indicator. When combined with the `.custom-control-label` class, we can also style the text for each item based on the `<input>`'s state.

In the checked and indeterminate states, we use **base64 embedded SVG icons** from [Open Iconic](https://useiconic.com/open). This provides us the best control for styling and positioning across browsers and devices.

#### Checkboxes

Checkboxes use the `.custom-checkbox` modifier class.

{% example html %}
<div class="custom-control custom-checkbox">
  <input type="checkbox" class="custom-control-input" id="custom-control-checkbox">
  <label class="custom-control-label" for="custom-control-checkbox">Check this custom checkbox</label>
</div>
{% endexample %}

Custom checkboxes can also utilize the `:indeterminate` pseudo class when manually set via JavaScript (there is no available HTML attribute for specifying it).

<div class="cf-example cf-example-bottom cf-example-indeterminate">
  <div class="custom-control custom-checkbox">
    <input type="checkbox" class="custom-control-input" id="custom-control-indeterminate">
    <label class="custom-control-label" for="custom-control-indeterminate">Check this custom checkbox</label>
  </div>
</div>

If you're using jQuery, something like this should suffice:

{% highlight js %}
$('.your-checkbox').prop('indeterminate', true)
{% endhighlight %}

#### Radios

Radios use the `.custom-radio` modifier class.

{% example html %}
<div class="custom-control custom-radio">
  <input type="radio" class="custom-control-input" name="custom-control-radio" id="custom-control-radio-1">
  <label class="custom-control-label" for="custom-control-radio-1">Toggle this custom radio</label>
</div>
<div class="custom-control custom-radio">
  <input type="radio" class="custom-control-input" name="custom-control-radio" id="custom-control-radio-2">
  <label class="custom-control-label" for="custom-control-radio-2">Or toggle this other custom radio</label>
</div>
{% endexample %}

#### Inline

Group custom controls on a horizontal row by using the `.custom-control-inline` modifier class on the `.custom-control` container.

{% example html %}
<div class="custom-control custom-control-inline custom-radio">
  <input type="radio" class="custom-control-input" name="custom-control-inline" id="custom-control-radio-3">
  <label class="custom-control-label" for="custom-control-radio-3">Toggle this custom radio</label>
</div>
<div class="custom-control custom-control-inline custom-radio">
  <input type="radio" class="custom-control-input" name="custom-control-inline" id="custom-control-radio-4">
  <label class="custom-control-label" for="custom-control-radio-4">Or toggle this other custom radio</label>
</div>
{% endexample %}


#### Disabled

Custom checkboxes and radios can also be disabled. Add the `disabled` boolean attribute to the `<input>` and the custom indicator and label description will be automatically styled.

{% example html %}
<div class="custom-control custom-checkbox">
  <input type="checkbox" class="custom-control-input" id="custom-checkbox-disabled"  disabled>
  <label class="custom-control-label" for="custom-checkbox-disabled">Check this custom checkbox</label>
</div>

<div class="custom-control custom-radio">
  <input type="radio" class="custom-control-input" name="custom-radio-disabled" id="custom-radio-disabled" disabled>
  <label class="custom-control-label" for="custom-radio-disabled">Toggle this custom radio</label>
</div>
{% endexample %}


### Select Menu

Custom `<select>` menus need only a custom class, `.custom-select` to trigger the custom styles.

{% example html %}
<select class="custom-select">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
{% endexample %}

Multiple size are also available.

{% example html %}
<select class="custom-select custom-select-xlarge">
  <option>Extra large select</option>
</select>
<select class="custom-select custom-select-large">
  <option>Large select</option>
</select>
<select class="custom-select">
  <option>Default select</option>
</select>
<select class="custom-select custom-select-small">
  <option>Small select</option>
</select>
<select class="custom-select custom-select-xsmall">
  <option>Extra small select</option>
</select>
{% endexample %}

### Color Picker

`<input type="color">` element need only a custom class, `.custom-color` to trigger the custom styles.

Please refer to the note regarding browser compatibility in the [color input](#color-input) section above.

{% example html %}
<input class="custom-color" type="color" value="#117dba" id="color">
{% endexample %}

### File Browser

The file input is the most gnarly of the bunch and requires additional JavaScript if you'd like to hook them up with functional *Choose file...* and selected file name text.

{% example html %}
<div class="custom-file">
  <input type="file" class="custom-file-input" id="custom-file">
  <label class="custom-file-label" for="custom-file">Choose file</label>
</div>
{% endexample %}

We hide the default file `<input>` via `opacity` and instead style the `<label>`. The button is generated and positioned with `::after`. Lastly, we declare a `width` and `height` on the `<input>` for proper spacing for surrounding content.

#### Translating or Customizing the Strings

The [`:lang()` pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/:lang) is used to allow for translation of the "Browse" text into other languages. Override or add entries to the `$custom-file-text` Sass variable with the relevant [language tag](https://en.wikipedia.org/wiki/IETF_language_tag) and localized strings. The English strings can be customized the same way. For example, here's how one might add a Spanish translation (Spanish's language code is `es`):

{% highlight scss %}
$custom-file-text: (
  en: "Browse",
  es: "Elegir"
);
{% endhighlight %}

This example shows `lang="es"` in action on the custom file input for a Spanish translation:

{% example html %}
<div class="custom-file">
  <input type="file" class="custom-file-input" id="custom-file-lang" lang="es">
  <label class="custom-file-label" for="custom-file-lang">Seleccionar Archivo</label>
</div>
{% endexample %}

You'll need to set the language of your document (or subtree thereof) correctly in order for the correct text to be shown. This can be done using [the `lang` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang) on the `<html>` element or the [`Content-Language` HTTP header](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.12), among other methods.

## Validation

Provide valuable, actionable feedback to your users with HTML5 form validation–[available in all our supported browsers](https://caniuse.com/#feat=form-validation). Choose from the browser default validation feedback, or implement custom messages with our built-in classes and starter JavaScript.

{% callout warning %}
We currently recommend using custom validation styles, as native browser default validation messages are not consistently exposed to assistive technologies in all browsers (most notably, Chrome on desktop and mobile).
{% endcallout %}

### How It Works

Here's how form validation works:

- HTML form validation is applied via CSS's two pseudo-classes, `:invalid` and `:valid`. It applies to `<input>`, `<select>`, and `<textarea>` elements.
- The `:invalid` and `:valid` styles are scoped to a parent `.was-validated` class, usually applied to the `<form>`. Otherwise, any required field without a value shows up as invalid on page load. This way, you may choose when to activate them (typically after form submission is attempted).
- To reset the appearance of the form (for instance, in the case of dynamic form submissions using AJAX), remove the `.was-validated` class from the `<form>` again after submission.
- As a fallback, `.is-invalid` and `.is-valid` classes may be used instead of the pseudo-classes for [server side validation](#server-side). They do not require a `.was-validated` parent class.
- Due to constraints in how CSS works, we cannot (at present) apply styles to a `<label>` that comes before a form control in the DOM without the help of custom JavaScript.
- All modern browsers support the [constraint validation API](https://www.w3.org/TR/html5/sec-forms.html#the-constraint-validation-api), a series of JavaScript methods for validating form controls.
- Feedback messages may utilize the [browser defaults](#browser-defaults) (different for each browser, and unstylable via CSS) or our custom feedback styles with additional HTML and CSS.
- You may provide custom validity messages with `setCustomValidity` in JavaScript.

With that in mind, consider the following demos for our custom form validation styles, optional server side classes, and browser defaults.

### Custom Styles

For custom form validation messages, you'll need to add the `novalidate` boolean attribute to your `<form>`. This disables the browser default feedback tooltips, but still provides access to the form validation APIs in JavaScript. Try to submit the form below; our JavaScript will intercept the submit button and relay feedback to you.

When attempting to submit, you'll see the `:invalid` and `:valid` styles applied to your form controls.

{% example html %}
<form class="needs-validation" novalidate>
  <div class="form-row">
    <div class="col-md-4 mb-1">
      <label for="validate-custom-1">First name</label>
      <input type="text" class="form-control" id="validate-custom-1" placeholder="First name" value="John" required>
      <div class="valid-feedback">Looks good!</div>
    </div>
    <div class="col-md-4 mb-1">
      <label for="validate-custom-2">Last name</label>
      <input type="text" class="form-control" id="validate-custom-2" placeholder="Last name" value="Smith" required>
      <div class="valid-feedback">Looks good!</div>
    </div>
    <div class="col-md-4 mb-1">
      <label for="validate-custom-3">Username</label>
      <div class="input-group">
        <div class="input-group-addon">
          <span class="input-group-text" id="validate-custom-4">@</span>
        </div>
        <input type="text" class="form-control input-group-end" id="validate-custom-3" placeholder="Username" aria-describedby="validate-custom-4" required>
        <div class="invalid-feedback">Please choose a username.</div>
      </div>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-1">
      <label for="validate-custom-5">City</label>
      <input type="text" class="form-control" id="validate-custom-5" placeholder="City" required>
      <div class="invalid-feedback">Please provide a valid city.</div>
    </div>
    <div class="col-md-3 mb-1">
      <label for="validate-custom-6">State</label>
      <input type="text" class="form-control" id="validate-custom-6" placeholder="State" required>
      <div class="invalid-feedback">Please provide a valid state.</div>
    </div>
    <div class="col-md-3 mb-1">
      <label for="validate-custom-7">Zip</label>
      <input type="text" class="form-control" id="validate-custom-7" placeholder="Zip" required>
      <div class="invalid-feedback">Please provide a valid zip.</div>
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="validate-custom-8" required>
      <label class="form-check-label" for="validate-custom-8">Agree to terms and conditions</label>
      <div class="invalid-feedback">You must agree before submitting.</div>
    </div>
  </div>
  <button class="btn btn-primary" type="submit">Submit form</button>
</form>

<script>
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
</script>
{% endexample %}

### Browser Defaults

Not interested in custom validation feedback messages or writing JavaScript to change form behaviors? All good, you can use the browser defaults. Try submitting the form below. Depending on your browser and OS, you'll see a slightly different style of feedback.

While these feedback styles cannot be styled with CSS, you can still customize the feedback text through JavaScript.

{% example html %}
<form>
  <div class="form-row">
    <div class="col-md-4 mb-1">
      <label for="validate-browser-1">First name</label>
      <input type="text" class="form-control" id="validate-browser-1" placeholder="First name" value="John" required>
    </div>
    <div class="col-md-4 mb-1">
      <label for="validate-browser-2">Last name</label>
      <input type="text" class="form-control" id="validate-browser-2" placeholder="Last name" value="Smith" required>
    </div>
    <div class="col-md-4 mb-1">
      <label for="validate-browser-3">Username</label>
      <div class="input-group">
        <div class="input-group-addon">
          <span class="input-group-text" id="validate-browser-4">@</span>
        </div>
        <input type="text" class="form-control input-group-end" id="validate-browser-3" placeholder="Username" aria-describedby="validate-browser-4" required>
      </div>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-1">
      <label for="validate-browser-5">City</label>
      <input type="text" class="form-control" id="validate-browser-5" placeholder="City" required>
    </div>
    <div class="col-md-3 mb-1">
      <label for="validate-browser-6">State</label>
      <input type="text" class="form-control" id="validate-browser-6" placeholder="State" required>
    </div>
    <div class="col-md-3 mb-1">
      <label for="validate-browser-7">Zip</label>
      <input type="text" class="form-control" id="validate-browser-7" placeholder="Zip" required>
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="validate-browser-8" required>
      <label class="form-check-label" for="validate-browser-8">Agree to terms and conditions</label>
    </div>
  </div>
  <button class="btn btn-primary" type="submit">Submit form</button>
</form>
{% endexample %}

### Server Side

We recommend using client side validation, but in case you require server side, you can indicate invalid and valid form fields with `.is-invalid` and `.is-valid`. Note that `.invalid-feedback` is also supported with these classes.

{% example html %}
<form>
  <div class="form-row">
    <div class="col-md-4 mb-1">
      <label for="validate-server-1">First name</label>
      <input type="text" class="form-control is-valid" id="validate-server-1" placeholder="First name" value="John" required>
      <div class="valid-feedback">Looks good!</div>
    </div>
    <div class="col-md-4 mb-1">
      <label for="validate-server-2">Last name</label>
      <input type="text" class="form-control is-valid" id="validate-server-2" placeholder="Last name" value="Smith" required>
      <div class="valid-feedback">Looks good!</div>
    </div>
    <div class="col-md-4 mb-1">
      <label for="validate-server-3">Username</label>
      <div class="input-group">
        <div class="input-group-addon">
          <span class="input-group-text" id="validate-server-4">@</span>
        </div>
        <input type="text" class="form-control input-group-end is-invalid" id="validate-server-3" placeholder="Username" aria-describedby="validate-server-4" required>
        <div class="invalid-feedback">Please choose a username.</div>
      </div>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-1">
      <label for="validate-server-5">City</label>
      <input type="text" class="form-control is-invalid" id="validate-server-5" placeholder="City" required>
      <div class="invalid-feedback">Please provide a valid city.</div>
    </div>
    <div class="col-md-3 mb-1">
      <label for="validate-server-6">State</label>
      <input type="text" class="form-control is-invalid" id="validate-server-6" placeholder="State" required>
      <div class="invalid-feedback">Please provide a valid state.</div>
    </div>
    <div class="col-md-3 mb-1">
      <label for="validate-server-7">Zip</label>
      <input type="text" class="form-control is-invalid" id="validate-server-7" placeholder="Zip" required>
      <div class="invalid-feedback">Please provide a valid zip.</div>
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input is-invalid" type="checkbox" value="" id="validate-server-8" required>
      <label class="form-check-label" for="validate-server-8">Agree to terms and conditions</label>
      <div class="invalid-feedback">You must agree before submitting.</div>
    </div>
  </div>
  <button class="btn btn-primary" type="submit">Submit form</button>
</form>
{% endexample %}

### Supported Elements

Our example forms show native textual `<input>`s above, but form validation styles are available for our custom form controls, too.

{% example html %}
<form class="was-validated">
  <div class="custom-control custom-checkbox mb-1">
    <input type="checkbox" class="custom-control-input" id="validate-support-1" required>
    <label class="custom-control-label" for="validate-support-1">Check this custom checkbox</label>
    <div class="invalid-feedback">Example invalid feedback text</div>
  </div>

  <div class="custom-control custom-radio">
    <input type="radio" class="custom-control-input" id="validate-support-2" name="radio-stacked" required>
    <label class="custom-control-label" for="validate-support-2">Toggle this custom radio</label>
  </div>
  <div class="custom-control custom-radio mb-1">
    <input type="radio" class="custom-control-input" id="validate-support-3" name="radio-stacked" required>
    <label class="custom-control-label" for="validate-support-3">Or toggle this other custom radio</label>
    <div class="invalid-feedback">More example invalid feedback text</div>
  </div>

  <div class="form-group">
    <select class="custom-select" required>
      <option value="">Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
    <div class="invalid-feedback">Example invalid custom select feedback</div>
  </div>

  <div class="custom-file">
    <input type="file" class="custom-file-input" id="validate-support-4" required>
    <label class="custom-file-label" for="validate-support-4">Choose file...</label>
    <div class="invalid-feedback">Example invalid custom file feedback</div>
  </div>
</form>
{% endexample %}

### Tooltips

If your form layout allows it, you can swap the `.{valid|invalid}-feedback` classes for `.{valid|invalid}-tooltip` classes to display validation feedback in a styled tooltip. Be sure to have a parent with `position: relative` on it for tooltip positioning. In the example below, our column classes have this already, but your project may require an alternative setup.

{% example html %}
<form class="needs-validation" novalidate>
  <div class="form-row">
    <div class="col-md-4 mb-1">
      <label for="validate-tooltip-1">First name</label>
      <input type="text" class="form-control" id="validate-tooltip-1" placeholder="First name" value="John" required>
      <div class="valid-tooltip">Looks good!</div>
    </div>
    <div class="col-md-4 mb-1">
      <label for="validate-tooltip-2">Last name</label>
      <input type="text" class="form-control" id="validate-tooltip-2" placeholder="Last name" value="Smith" required>
      <div class="valid-tooltip">Looks good!</div>
    </div>
    <div class="col-md-4 mb-1">
      <label for="validationTooltipUsername">Username</label>
      <div class="input-group">
        <div class="input-group-addon">
          <span class="input-group-text" id="validate-tooltip-3">@</span>
        </div>
        <input type="text" class="form-control input-group-end" id="validate-tooltip-4" placeholder="Username" aria-describedby="validate-tooltip-3" required>
        <div class="invalid-tooltip">Please choose a unique and valid username.</div>
      </div>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-1">
      <label for="validate-tooltip-5">City</label>
      <input type="text" class="form-control" id="validate-tooltip-5" placeholder="City" required>
      <div class="invalid-tooltip">Please provide a valid city.</div>
    </div>
    <div class="col-md-3 mb-1">
      <label for="validate-tooltip-6">State</label>
      <input type="text" class="form-control" id="validate-tooltip-6" placeholder="State" required>
      <div class="invalid-tooltip">Please provide a valid state.</div>
    </div>
    <div class="col-md-3 mb-1">
      <label for="validate-tooltip-7">Zip</label>
      <input type="text" class="form-control" id="validate-tooltip-7" placeholder="Zip" required>
      <div class="invalid-tooltip">Please provide a valid zip.</div>
    </div>
  </div>
  <button class="btn btn-primary" type="submit">Submit form</button>
</form>
{% endexample %}
