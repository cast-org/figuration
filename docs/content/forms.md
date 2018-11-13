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
        <input type="checkbox" class="custom-control-input" id="customize-check">
        <label class="custom-control-indicator" for="customize-check"></label>
        <label class="custom-control-label" for="customize-check">Remember my preference</label>
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
    <label class="custom-control-indicator" for="customControlInline"></label>
    <label class="custom-control-label" for="customControlInline">Remember my preference</label>
  </div>

  <button type="submit" class="btn btn-primary mb-0_5">Submit</button>
</form>
{% endexample %}

## Custom Forms

For even more customization and cross browser consistency, use our completely custom form elements to replace the browser defaults. They're built on top of semantic and accessible markup, so they're solid replacements for any default form control.

### Checkboxes and Radios

Each checkbox and radio is wrapped in a block-level container with consolidated styling provided by `.custom-control`, and then an additional modifier class of `.custom-checkbox`, `.custom-radio`, or `.custom-switch` to control the specific indicator visuals. Structurally, this is a slightly different approach than our default `.form-check`.

We hide the default `<input>` with `opacity` and use a `<label>` element with `.custom-control-indicator` to build a new custom form indicator in its place with `::before` and `::after`. Unfortunately we can't build a custom one from just the `<input>` because CSS's `content` doesn't work on that element.  Additionally, we use a second `<label>` with `.custom-control-label` to provde for a textual label for the input. We use this additional label element to provide some gains in layout possibilities, and the ability to *visually hide* the input's textual label, and not break the layout.

We also use the sibling selector (`~`) for all our `<input>` states—like `:checked`—to properly style our custom form indicator. When combined with the `.custom-control-label` class, we can also style the text for each item based on the `<input>`'s state.

In the checked and indeterminate states, we use **base64 embedded SVG icons** from [Open Iconic](https://github.com/iconic/open-iconic). This provides us the best control for styling and positioning across browsers and devices.

#### Checkboxes

Checkboxes use the `.custom-checkbox` modifier class.

{% example html %}
<div class="custom-control custom-checkbox">
  <input type="checkbox" class="custom-control-input" id="custom-control-checkbox">
  <label class="custom-control-indicator" for="custom-control-checkbox"></label>
  <label class="custom-control-label" for="custom-control-checkbox">Check this custom checkbox</label>
</div>
{% endexample %}

Custom checkboxes can also utilize the `:indeterminate` pseudo class when manually set via JavaScript (there is no available HTML attribute for specifying it).

<div class="cf-example cf-example-bottom cf-example-indeterminate">
  <div class="custom-control custom-checkbox">
    <input type="checkbox" class="custom-control-input" id="custom-control-indeterminate">
    <label class="custom-control-indicator" for="custom-control-indeterminate"></label>
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
  <label class="custom-control-indicator" for="custom-control-radio-1"></label>
  <label class="custom-control-label" for="custom-control-radio-1">Toggle this custom radio</label>
</div>
<div class="custom-control custom-radio">
  <input type="radio" class="custom-control-input" name="custom-control-radio" id="custom-control-radio-2">
  <label class="custom-control-indicator" for="custom-control-radio-2"></label>
  <label class="custom-control-label" for="custom-control-radio-2">Or toggle this other custom radio</label>
</div>
{% endexample %}

#### Switches

Make custom checkboxes or custom radios look like toggle switches with the `.custom-switch` modifier class.

{% example html %}
<div class="custom-control custom-switch mb-1">
  <input type="checkbox" class="custom-control-input" id="custom-control-switch-0">
  <label class="custom-control-indicator" for="custom-control-switch-0"></label>
  <label class="custom-control-label" for="custom-control-switch-0">Check this custom checkbox</label>
</div>

<div class="custom-control custom-switch">
  <input type="radio" class="custom-control-input" name="custom-control-radio" id="custom-control-switch-1">
  <label class="custom-control-indicator" for="custom-control-switch-1"></label>
  <label class="custom-control-label" for="custom-control-switch-1">Toggle this custom radio</label>
</div>
<div class="custom-control custom-switch">
  <input type="radio" class="custom-control-input" name="custom-control-radio" id="custom-control-switch-2">
  <label class="custom-control-indicator" for="custom-control-switch-2"></label>
  <label class="custom-control-label" for="custom-control-switch-2">Or toggle this other custom radio</label>
</div>
{% endexample %}

#### Inline

Group custom controls on a horizontal row by using the `.custom-control-inline` modifier class on the `.custom-control` container.

{% example html %}
<div class="custom-control custom-control-inline custom-radio">
  <input type="radio" class="custom-control-input" name="custom-control-inline" id="custom-control-radio-3">
  <label class="custom-control-indicator" for="custom-control-radio-3"></label>
  <label class="custom-control-label" for="custom-control-radio-3">Toggle this custom radio</label>
</div>
<div class="custom-control custom-control-inline custom-radio">
  <input type="radio" class="custom-control-input" name="custom-control-inline" id="custom-control-radio-4">
  <label class="custom-control-indicator" for="custom-control-radio-4"></label>
  <label class="custom-control-label" for="custom-control-radio-4">Or toggle this other custom radio</label>
</div>
{% endexample %}


#### Disabled

Custom checkboxes and radios can also be disabled. Add the `disabled` boolean attribute to the `<input>` and the custom indicator and label description will be automatically styled.

{% example html %}
<div class="custom-control custom-checkbox">
  <input type="checkbox" class="custom-control-input" id="custom-checkbox-disabled" disabled>
  <label class="custom-control-indicator" for="custom-checkbox-disabled"></label>
  <label class="custom-control-label" for="custom-checkbox-disabled">Check this custom checkbox</label>
</div>

<div class="custom-control custom-radio">
  <input type="radio" class="custom-control-input" name="custom-radio-disabled" id="custom-radio-disabled" disabled>
  <label class="custom-control-indicator" for="custom-radio-disabled"></label>
  <label class="custom-control-label" for="custom-radio-disabled">Toggle this custom radio</label>
</div>

<div class="custom-control custom-switch">
  <input type="checkbox" class="custom-control-input" id="custom-switch-disabled" disabled>
  <label class="custom-control-indicator" for="custom-switch-disabled"></label>
  <label class="custom-control-label" for="custom-switch-disabled">Toggle this custom switch</label>
</div>
{% endexample %}


### Select Menu

Custom `<select>` menus need only a custom class, `.custom-select` to trigger the custom styles. Custom styles are limited to the `<select>`'s initial appearance and cannot modify the `<option>`s due to browser limitations.

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

### Range

Create custom `<input type="range">` controls with `.custom-range`. The track (the background) and thumb (the value) are both styled to appear the same across browsers. As only IE and Firefox support "filling" their track from the left or right of the thumb as a means to visually indicate progress, we do not currently support it.  We also hide the tooltip provided only by IE to maintain cross-browser consistency.

{% example html %}
<label for="customRange1">Example range</label>
<input type="range" class="custom-range" id="customRange1">
{% endexample %}

Range inputs have implicit values for `min` and `max`—`0` and `100`, respectively. You may specify new values for those using the `min` and `max` attributes.

{% example html %}
<label for="customRange2">Example range</label>
<input type="range" class="custom-range" min="0" max="5" id="customRange2">
{% endexample %}

By default, range inputs "snap" to integer values. To change this, you can specify a `step` value. In the example below, we double the number of steps by using `step="0.5"`.

{% example html %}
<label for="customRange3">Example range</label>
<input type="range" class="custom-range" min="0" max="5" step="0.5" id="customRange3">
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

#### Translating or Customizing the Strings with SCSS

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

#### Translating or Customizing the Strings with HTML

We also provide a way to translate the "Browse" text in HTML with the `data-browse` attribute which can be added to the custom input label (example in Dutch):

This method uses the `!important` CSS rule to override any SCSS designated translation, otherwise the browser's, or a page's, language setting would override the data attribute value.

{% example html %}
<div class="custom-file">
  <input type="file" class="custom-file-input" id="custom-file-lang-html">
  <label class="custom-file-label" for="custom-file-lang-html" data-browse="Bestand kiezen">Voeg je document toe</label>
</div>
{% endexample %}

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

When attempting to submit, you'll see the `:invalid` and `:valid` styles applied to the form controls.

Custom feedback styles apply custom colors, borders, focus styles, feedback messages, and optional background icons to better communicate feedback. Background icons for `<select>`s are only available with `.custom-select`, and not `.form-control`.

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

Our example forms show native textual `<input>`s above, but form validation styles are also available for `<textarea>`s and custom form controls.

{% example html %}
<form class="was-validated">
  <div class="mb-1">
    <label for="validate-textarea">Textarea</label>
    <textarea class="form-control is-invalid" id="validate-textarea" rows="3" placeholder="Required example textarea" required></textarea>
    <div class="invalid-feedback">Please enter a message in the textarea.</div>
  </div>

  <div class="custom-control custom-checkbox mb-1">
    <input type="checkbox" class="custom-control-input" id="validate-support-1" required>
    <label class="custom-control-indicator" for="validate-support-1"></label>
    <label class="custom-control-label" for="validate-support-1">Check this custom checkbox</label>
    <div class="invalid-feedback">Example invalid feedback text</div>
  </div>

  <div class="custom-control custom-radio">
    <input type="radio" class="custom-control-input" id="validate-support-2" name="radio-stacked" required>
    <label class="custom-control-indicator" for="validate-support-2"></label>
    <label class="custom-control-label" for="validate-support-2">Toggle this custom radio</label>
  </div>
  <div class="custom-control custom-radio mb-1">
    <input type="radio" class="custom-control-input" id="validate-support-3" name="radio-stacked" required>
    <label class="custom-control-indicator" for="validate-support-3"></label>
    <label class="custom-control-label" for="validate-support-3">Or toggle this other custom radio</label>
    <div class="invalid-feedback">More example invalid feedback text</div>
  </div>

  <div class="custom-control custom-switch mb-1">
    <input type="checkbox" class="custom-control-input" id="validate-support-4" required>
    <label class="custom-control-indicator" for="validate-support-4"></label>
    <label class="custom-control-label" for="validate-support-4">Check this custom checkbox</label>
    <div class="invalid-feedback">Example invalid feedback text</div>
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
    <input type="file" class="custom-file-input" id="validate-support-5" required>
    <label class="custom-file-label" for="validate-support-5">Choose file...</label>
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
      <label for="validate-tooltip-3">Username</label>
      <div class="input-group">
        <div class="input-group-addon">
          <span class="input-group-text" id="validate-tooltip-4">@</span>
        </div>
        <input type="text" class="form-control input-group-end" id="validate-tooltip-3" placeholder="Username" aria-describedby="validate-tooltip-4" required>
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

### Icons

Optional visual icon representations of the validation state can be added to _textual_ `<input class="form-control">`, `<textarea class="form-control">`, and `<select class="custom-select">` elements by adding a `.has-validation-icon` class.

- Validation icons are `url()`s configured via Sass variables that are applied to `background-image` rules for each state.
- You may use your own base64 PNGs or SVGs by updating the Sass variables and recompiling.
- Icons can also be disabled entirely by setting the `$enable-validation-icons` variable to `false` in the [Sass global options]({{ site.baseurl }}/get-started/options/#global-options).

{% example html %}
<form class="needs-validation" novalidate>
  <div class="form-row">
    <div class="col-md-4 mb-1">
      <label for="validate-icon-1">First name</label>
      <input type="text" class="form-control has-validation-icon" id="validate-icon-1" placeholder="First name" value="John" required>
      <div class="valid-feedback">Looks good!</div>
    </div>
    <div class="col-md-4 mb-1">
      <label for="validate-icon-2">Last name</label>
      <input type="text" class="form-control has-validation-icon" id="validate-icon-2" placeholder="Last name" value="Smith" required>
      <div class="valid-feedback">Looks good!</div>
    </div>
    <div class="col-md-4 mb-1">
      <label for="validate-icon-3">Username</label>
      <div class="input-group">
        <div class="input-group-addon">
          <span class="input-group-text" id="validate-icon-4">@</span>
        </div>
        <input type="text" class="form-control has-validation-icon input-group-end" id="validate-icon-3" placeholder="Username" aria-describedby="validate-icon-4" required>
        <div class="invalid-feedback">Please choose a unique and valid username.</div>
      </div>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-1">
      <label for="validate-icon-5">City</label>
      <input type="text" class="form-control has-validation-icon" id="validate-icon-5" placeholder="City" required>
      <div class="invalid-feedback">Please provide a valid city.</div>
    </div>
    <div class="col-md-3 mb-1">
      <label for="validate-icon-6">State</label>
      <input type="text" class="form-control has-validation-icon" id="validate-icon-6" placeholder="State" required>
      <div class="invalid-feedback">Please provide a valid state.</div>
    </div>
    <div class="col-md-3 mb-1">
      <label for="validate-icon-7">Zip</label>
      <input type="text" class="form-control has-validation-icon" id="validate-icon-7" placeholder="Zip" required>
      <div class="invalid-feedback">Please provide a valid zip.</div>
    </div>
  </div>
  <div class="form-group">
    <label for="validate-icon-8">Options</label>
    <select class="custom-select has-validation-icon" id="validate-icon-8" required>
      <option value="">Choose one...</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
    <div class="invalid-feedback">Example invalid custom select feedback</div>
  </div>
  <div class="form-group">
    <label for="validate-icon-9">Textarea</label>
    <textarea class="form-control has-validation-icon" id="validate-icon-9" rows="3" placeholder="Required example textarea" required></textarea>
    <div class="invalid-feedback">Please enter a message in the textarea.</div>
    </div>
  <button class="btn btn-primary" type="submit">Submit form</button>
</form>
{% endexample %}

## SASS Reference

### Variables

The available [Customization options]({{ site.baseurl }}/get-started/options/), or Sass variables, that can be customized for forms.

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
                <td><code>$enable-form</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the form classes.
                    Smaller segements of the form classes can be disabled with the following <code>$enable-*</code> variables.
                </td>
            </tr>
            <tr>
                <td><code>$enable-form-control</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the textual form control rules.
                </td>
            </tr>
            <tr>
                <td><code>$enable-form-control-special</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the form control classes for color, file, and range inputs.
                </td>
            </tr>
            <tr>
                <td><code>$enable-form-control-sizes</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the sizing classes for form controls.
                </td>
            </tr>
            <tr>
                <td><code>$enable-form-control-label</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the form control label class.
                </td>
            </tr>
            <tr>
                <td><code>$enable-form-control-label-sizes</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the sizing classes for form control labels.
                </td>
            </tr>
            <tr>
                <td><code>$enable-form-control-static</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the static form control class.
                </td>
            </tr>
            <tr>
                <td><code>$enable-form-control-static</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the static form controls.
                </td>
            </tr>
            <tr>
                <td><code>$enable-form-group</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the form group classes.
                </td>
            </tr>
            <tr>
                <td><code>$enable-form-text</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the form text class.
                </td>
            </tr>
            <tr>
                <td><code>$enable-form-row</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the form row classes.
                </td>
            </tr>
            <tr>
                <td><code>$enable-form-check</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the checkbox and radio input classes.
                </td>
            </tr>
            <tr>
                <td><code>$enable-form-check</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the inline variant for checkbox and radio inputs.
                </td>
            </tr>
            <tr>
                <td><code>$enable-form-validation</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the form validation classes.
                </td>
            </tr>
            <tr>
                <td><code>$enable-form-validation-feeback</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the form validation text feedback classes.
                </td>
            </tr>
            <tr>
                <td><code>$enable-form-validation-tooltip</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the form validation tooltip classes.
                </td>
            </tr>
            <tr>
                <td><code>$enable-form-inline</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the inline form classes.
                </td>
            </tr>
            <tr>
                <td><code>$enable-custom-control</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the common classes for custom checkbox and radio controls.
                </td>
            </tr>
            <tr>
                <td><code>$enable-custom-checkbox</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the classes for custom checkbox controls.
                </td>
            </tr>
            <tr>
                <td><code>$enable-custom-radio</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the classes for custom radio controls.
                </td>
            </tr>
            <tr>
                <td><code>$enable-custom-switch</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the classes for custom switch controls.
                </td>
            </tr>
            <tr>
                <td><code>$enable-custom-select</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the classes for custom select inputs.
                </td>
            </tr>
            <tr>
                <td><code>$enable-custom-select-sizes</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the classes for custom select sizing.
                </td>
            </tr>
            <tr>
                <td><code>$enable-custom-file</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the classes for custom file inputs.
                </td>
            </tr>
            <tr>
                <td><code>$enable-custom-color</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the classes for custom color inputs.
                </td>
            </tr>
            <tr>
                <td><code>$enable-custom-range</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the classes for custom range inputs.
                </td>
            </tr>
            <tr>
                <td><code>$input-font-size</code></td>
                <td>string</td>
                <td><code>$btn-font-size</code></td>
                <td>
                    Base input font size.
                </td>
            </tr>
            <tr>
                <td><code>$input-font-weight</code></td>
                <td>string</td>
                <td><code>$font-weight-normal</code></td>
                <td>
                    Base input font weight.
                </td>
            </tr>
            <tr>
                <td><code>$input-line-height</code></td>
                <td>string</td>
                <td><code>$btn-line-height</code></td>
                <td>
                    Base input line height.
                </td>
            </tr>
            <tr>
                <td><code>$input-padding-y</code></td>
                <td>string</td>
                <td><code>$btn-padding-y</code></td>
                <td>
                    Base input vertical padding.
                </td>
            </tr>
            <tr>
                <td><code>$input-padding-x</code></td>
                <td>string</td>
                <td><code>$btn-padding-x</code></td>
                <td>
                    Base input horizontal padding.
                </td>
            </tr>
            <tr>
                <td><code>$input-border-width</code></td>
                <td>string</td>
                <td><code>$border-width</code></td>
                <td>
                    Base input border-width.
                </td>
            </tr>
            <tr>
                <td><code>$input-border-radius</code></td>
                <td>string</td>
                <td><code>$border-radius</code></td>
                <td>
                    Base input border-radius.
                </td>
            </tr>
            <tr>
                <td><code>$input-sizes</code></td>
                <td>string</td>
                <td><code>$component-sizes</code></td>
                <td>
                    Input size variants.
                </td>
            </tr>
            <tr>
                <td><code>$input-bg</code></td>
                <td>string</td>
                <td><code>$white</code></td>
                <td>
                    Input background color for inactive state.
                </td>
            </tr>
            <tr>
                <td><code>$input-color</code></td>
                <td>string</td>
                <td><code>$uibase-700</code></td>
                <td>
                    Input text color for inactive state.
                </td>
            </tr>
            <tr>
                <td><code>$input-border-color</code></td>
                <td>string</td>
                <td><code>$uibase-200</code></td>
                <td>
                    Input border color for inactive state.
                </td>
            </tr>
            <tr>
                <td><code>$input-box-shadow</code></td>
                <td>string</td>
                <td><code>map-get($shadows, "i1")</code></td>
                <td>
                    Input inner box shadow for inactive state.
                </td>
            </tr>
            <tr>
                <td><code>$input-focus-bg</code></td>
                <td>string</td>
                <td><code>$input-bg</code></td>
                <td>
                    Input background color for focus state.
                </td>
            </tr>
            <tr>
                <td><code>$input-focus-color</code></td>
                <td>string</td>
                <td><code>$input-color</code></td>
                <td>
                    Input text color for focus state.
                </td>
            </tr>
            <tr>
                <td><code>$input-focus-border-color</code></td>
                <td>string</td>
                <td><code>palette($primary, 300)</code></td>
                <td>
                    Input border color for focus state.
                </td>
            </tr>
            <tr>
                <td><code>$input-focus-box-shadow-size</code></td>
                <td>string</td>
                <td><code>0 0 0 .1875rem</code></td>
                <td>
                    Input box shadow dimensions for focus state.
                </td>
            </tr>
            <tr>
                <td><code>$input-focus-box-shadow-alpha</code></td>
                <td>float</td>
                <td><code>.35</code></td>
                <td>
                    Input box shadow alpha, opacity, value for focus state.
                </td>
            </tr>
            <tr>
                <td><code>$input-focus-box-shadow</code></td>
                <td>string</td>
                <td><code>$input-focus-box-shadow-size rgba($component-active-bg, $input-focus-box-shadow-alpha)</code></td>
                <td>
                    Input box shadow for focus state.
                </td>
            </tr>
            <tr>
                <td><code>$input-disabled-bg</code></td>
                <td>string</td>
                <td><code>$component-disabled-bg</code></td>
                <td>
                    Input background color for disabled state.
                </td>
            </tr>
            <tr>
                <td><code>$input-disabled-color</code></td>
                <td>string</td>
                <td><code>$component-disabled-color</code></td>
                <td>
                    Input text color for disabled state.
                </td>
            </tr>
            <tr>
                <td><code>$input-placeholder-color</code></td>
                <td>string</td>
                <td><code>#999</code></td>
                <td>
                    Input placheholder text color.
                </td>
            </tr>
            <tr>
                <td><code>$input-label-font-weight</code></td>
                <td>string</td>
                <td><code>$font-weight-normal</code></td>
                <td>
                    Font weight for <code>.form-control-label</code>.
                </td>
            </tr>
            <tr>
                <td><code>$form-text-margin-top</code></td>
                <td>string</td>
                <td><code>.25rem</code></td>
                <td>
                    Vertical spacing between input and support text.
                </td>
            </tr>
            <tr>
                <td><code>$form-check-input-gutter</code></td>
                <td>string</td>
                <td><code>1.25rem</code></td>
                <td>
                    Reserved width for inputs within <code>.form-check</code>.
                </td>
            </tr>
            <tr>
                <td><code>$form-check-input-margin-y</code></td>
                <td>string</td>
                <td><code>.3125rem</code></td>
                <td>
                    Vertical adjustment for inputs within <code>.form-check</code>.
                </td>
            </tr>
            <tr>
                <td><code>$form-check-input-margin-x</code></td>
                <td>string</td>
                <td><code>.25rem</code></td>
                <td>
                    Horizontal spacing between input and label within <code>.form-check</code>.
                </td>
            </tr>
            <tr>
                <td><code>$form-check-inline-margin-x</code></td>
                <td>string</td>
                <td><code>.75rem</code></td>
                <td>
                    Horizontal spacing between consecutive <code>.form-check</code> items.
                </td>
            </tr>
            <tr>
                <td><code>$form-check-disabled-color</code></td>
                <td>string</td>
                <td><code>$component-disabled-color</code></td>
                <td>
                    Text color for <code>.form-check</code> disabled state.
                </td>
            </tr>
            <tr>
                <td><code>$form-check-inline-input-margin-x</code></td>
                <td>string</td>
                <td><code>.3125rem</code></td>
                <td>
                    Horizontal spacing between input and label within <code>.form-check</code> when inline.
                </td>
            </tr>
            <tr>
                <td><code>$form-group-margin-bottom</code></td>
                <td>string</td>
                <td><code>1rem</code></td>
                <td>
                    Vertical spacing for form group.
                </td>
            </tr>
            <tr>
                <td><code>$form-row-gutter</code></td>
                <td>string</td>
                <td><code>.3125rem</code></td>
                <td>
                    Gutter spacing for form row.
                </td>
            </tr>
            <tr>
                <td><code>$form-inline-breakpoint</code></td>
                <td>breakpoint</td>
                <td><code>sm</code></td>
                <td>
                    Breakpoint where inline froms switch from vertical to horizontal layout.
                </td>
            </tr>
            <tr>
                <td><code>$form-inline-breakpoint</code></td>
                <td>breakpoint</td>
                <td><code>sm</code></td>
                <td>
                    Breakpoint where inline froms switch from vertical to horizontal layout.
                </td>
            </tr>
            <tr>
                <td><code>$form-inline-breakpoint</code></td>
                <td>breakpoint</td>
                <td><code>sm</code></td>
                <td>
                    Breakpoint where inline froms switch from vertical to horizontal layout.
                </td>
            </tr>
            <tr>
                <td><code>$custom-control-gutter</code></td>
                <td>string</td>
                <td><code>1.5rem</code></td>
                <td>
                    Reserved width for inputs within <code>.custom-control</code>.
                </td>
            </tr>
            <tr>
                <td><code>$custom-control-inline-margin-x</code></td>
                <td>string</td>
                <td><code>.75rem</code></td>
                <td>
                    Horizontal spacing between consecutive <code>.custom-control</code> items.
                </td>
            </tr>
            <tr>
                <td><code>$custom-control-indicator-size</code></td>
                <td>string</td>
                <td><code>1rem</code></td>
                <td>
                    Width of indicator for custom checkbox and radio inputs.
                </td>
            </tr>
            <tr>
                <td><code>$custom-control-indicator-bg</code></td>
                <td>string</td>
                <td><code>$uibase-50</code></td>
                <td>
                    Background color of indicator for custom checkbox and radio inputs.
                </td>
            </tr>
            <tr>
                <td><code>$custom-control-indicator-bg-size</code></td>
                <td>string</td>
                <td><code>50% 50%</code></td>
                <td>
                    Size of background image of indicator for custom checkbox and radio inputs.
                </td>
            </tr>
            <tr>
                <td><code>$custom-control-indicator-box-shadow</code></td>
                <td>string</td>
                <td><code>50% 50%</code></td>
                <td>
                    Box shadow of indicator for custom checkbox and radio inputs.
                </td>
            </tr>
            <tr>
                <td><code>$custom-control-indicator-border-width</code></td>
                <td>string</td>
                <td><code>$border-width</code></td>
                <td>
                    Border width of indicator for custom checkbox and radio inputs.
                </td>
            </tr>
            <tr>
                <td><code>$custom-control-indicator-border-color</code></td>
                <td>string</td>
                <td><code>$input-border-color</code></td>
                <td>
                    Border color of indicator for custom checkbox and radio inputs.
                </td>
            </tr>
            <tr>
                <td><code>$custom-control-disabled-indicator-opacity</code></td>
                <td>float</td>
                <td><code>.6</code></td>
                <td>
                    Opacity of indicator for custom controls inputs in disabled state.
                </td>
            </tr>
            <tr>
                <td><code>$custom-control-disabled-description-color</code></td>
                <td>string</td>
                <td><code>$uibase-400</code></td>
                <td>
                    Text color of descriptor for custom controls in disabled state.
                </td>
            </tr>
            <tr>
                <td><code>$custom-control-checked-indicator-bg</code></td>
                <td>string</td>
                <td><code>$primary</code></td>
                <td>
                    Background color for custom checkbox and radio inputs in checked state.
                </td>
            </tr>
            <tr>
                <td><code>$custom-control-checked-indicator-bg</code></td>
                <td>string</td>
                <td><code>color-if-contrast($white, $custom-control-checked-indicator-bg)</code></td>
                <td>
                    Icon color for custom checkbox and radio inputs in checked state.
                </td>
            </tr>
            <tr>
                <td><code>$custom-control-checked-indicator-box-shadow</code></td>
                <td>string</td>
                <td><code>none</code></td>
                <td>
                    Box shadow for custom checkbox and radio inputs in checked state.
                </td>
            </tr>
            <tr>
                <td><code>$custom-control-checked-indicator-border-color</code></td>
                <td>string</td>
                <td><code>$primary</code></td>
                <td>
                    Border color for custom checkbox and radio inputs in checked state.
                </td>
            </tr>
            <tr>
                <td><code>$custom-control-focus-indicator-box-shadow</code></td>
                <td>string</td>
                <td><code>$input-focus-box-shadow</code></td>
                <td>
                    Box shadow for custom checkbox and radio inputs in focus state.
                </td>
            </tr>
            <tr>
                <td><code>$custom-control-active-indicator-bg</code></td>
                <td>string</td>
                <td><code>$custom-control-checked-indicator-bg</code></td>
                <td>
                    Background color for custom checkbox and radio inputs in active state.
                </td>
            </tr>
            <tr>
                <td><code>$custom-control-active-indicator-color</code></td>
                <td>string</td>
                <td><code>$custom-control-checked-indicator-color</code></td>
                <td>
                    Icon color for custom checkbox and radio inputs in active state.
                </td>
            </tr>
            <tr>
                <td><code>$custom-checkbox-radius</code></td>
                <td>string</td>
                <td><code>$border-radius</code></td>
                <td>
                    Border radius for custom checkbox inputs.
                </td>
            </tr>
            <tr>
                <td><code>$custom-checkbox-checked-icon</code></td>
                <td>string</td>
                <td><code>str-replace(url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e"), "#", "%23")</code></td>
                <td>
                    Icon for custom checkbox inputs in checked state.
                </td>
            </tr>
            <tr>
                <td><code>$custom-checkbox-indeterminate-bg</code></td>
                <td>string</td>
                <td><code>$primary</code></td>
                <td>
                    background color for custom checkbox inputs in indeterminate state.
                </td>
            </tr>
            <tr>
                <td><code>$custom-checkbox-indeterminate-icon</code></td>
                <td>string</td>
                <td><code>str-replace(url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3e%3cpath stroke='%23fff' d='M0 2h4'/%3e%3c/svg%3e"), "#", "%23")</code></td>
                <td>
                    Icon for custom checkbox inputs in indeterminate state.
                </td>
            </tr>
            <tr>
                <td><code>$custom-checkbox-indeterminate-box-shadow</code></td>
                <td>string</td>
                <td><code>none</code></td>
                <td>
                    Box shadow for custom checkbox inputs in indeterminate state.
                </td>
            </tr>
            <tr>
                <td><code>$custom-radio-radius</code></td>
                <td>string</td>
                <td><code>50%</code></td>
                <td>
                    Border radius for custom radio inputs.
                </td>
            </tr>
            <tr>
                <td><code>$custom-radio-checked-icon</code></td>
                <td>string</td>
                <td><code>str-replace(url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e"), "#", "%23")</code></td>
                <td>
                    Icon for custom radio inputs in checked state.
                </td>
            </tr>
            <tr>
                <td><code>$custom-switch-gutter</code></td>
                <td>string</td>
                <td><code>2.5rem</code></td>
                <td>
                    Reserved space for switch input.
                </td>
            </tr>
            <tr>
                <td><code>$custom-switch-width</code></td>
                <td>string</td>
                <td><code>2.5rem</code></td>
                <td>
                    Width of switch input.
                </td>
            </tr>
            <tr>
                <td><code>$custom-switch-track-height</code></td>
                <td>string</td>
                <td><code>1rem</code></td>
                <td>
                    Height of track for switch input.
                </td>
            </tr>
            <tr>
                <td><code>$custom-switch-track-bg</code></td>
                <td>string</td>
                <td><code>$uibase-50</code></td>
                <td>
                    Background color of track for switch input.
                </td>
            </tr>
            <tr>
                <td><code>$custom-switch-track-radius</code></td>
                <td>string</td>
                <td><code>1rem</code></td>
                <td>
                    Border radius of track for switch input.
                </td>
            </tr>
            <tr>
                <td><code>$custom-switch-track-border-width</code></td>
                <td>string</td>
                <td><code>$border-width</code></td>
                <td>
                    Border width of track for switch input.
                </td>
            </tr>
            <tr>
                <td><code>$custom-switch-track-border-color</code></td>
                <td>string</td>
                <td><code>$input-border-color</code></td>
                <td>
                    Border color of track for switch input.
                </td>
            </tr>
            <tr>
                <td><code>$custom-switch-track-box-shadow</code></td>
                <td>string</td>
                <td><code>map-get($shadows, "i1")</code></td>
                <td>
                    Box shadow of track for switch input.
                </td>
            </tr>
            <tr>
                <td><code>$custom-switch-thumb-width</code></td>
                <td>string</td>
                <td><code>1rem</code></td>
                <td>
                    Width of thumb for switch input.
                </td>
            </tr>
            <tr>
                <td><code>$custom-switch-thumb-height</code></td>
                <td>string</td>
                <td><code>1rem</code></td>
                <td>
                    Height of thumb for switch input.
                </td>
            </tr>
            <tr>
                <td><code>$custom-switch-thumb-bg</code></td>
                <td>string</td>
                <td><code>$uibase-300</code></td>
                <td>
                    Background color of thumb for switch input.
                </td>
            </tr>
            <tr>
                <td><code>$custom-switch-thumb-radius</code></td>
                <td>string</td>
                <td><code>10rem</code></td>
                <td>
                    Border radius color of thumb for switch input.
                </td>
            </tr>
            <tr>
                <td><code>$custom-switch-thumb-border-width</code></td>
                <td>string</td>
                <td><code>$border-width</code></td>
                <td>
                    Border width of thumb for switch input.
                </td>
            </tr>
            <tr>
                <td><code>$custom-switch-thumb-border-color</code></td>
                <td>string</td>
                <td><code>$custom-switch-thumb-bg</code></td>
                <td>
                    Border color of thumb for switch input.
                </td>
            </tr>
            <tr>
                <td><code>$custom-switch-thumb-box-shadow</code></td>
                <td>string</td>
                <td><code>none</code></td>
                <td>
                    Box shadow of thumb for switch input.
                </td>
            </tr>
            <tr>
                <td><code>$custom-switch-checked-track-bg</code></td>
                <td>string</td>
                <td><code>$uibase-50</code></td>
                <td>
                    Background color of track for switch input in checked state.
                </td>
            </tr>
            <tr>
                <td><code>$custom-switch-checked-track-border-color</code></td>
                <td>string</td>
                <td><code>$uibase-300</code></td>
                <td>
                    Border color of track for switch input in checked state.
                </td>
            </tr>
            <tr>
                <td><code>$custom-switch-active-track-bg</code></td>
                <td>string</td>
                <td><code>$uibase-50</code></td>
                <td>
                    Background color of track for switch input in active state.
                </td>
            </tr>
            <tr>
                <td><code>$custom-switch-checked-thumb-bg</code></td>
                <td>string</td>
                <td><code>$primary</code></td>
                <td>
                    Background color of thumb for switch input in checked state.
                </td>
            </tr>
            <tr>
                <td><code>$custom-switch-checked-thumb-border-color</code></td>
                <td>string</td>
                <td><code>$primary</code></td>
                <td>
                    Border color of thumb for switch input in checked state.
                </td>
            </tr>
            <tr>
                <td><code>$custom-switch-active-thumb-bg</code></td>
                <td>string</td>
                <td><code>palette($primary, 400)</code></td>
                <td>
                    Background color of thumb for switch input in active state.
                </td>
            </tr>
            <tr>
                <td><code>$custom-switch-disabled-thumb-bg</code></td>
                <td>string</td>
                <td><code>$uibase-200</code></td>
                <td>
                    Background color of thumb for switch input in disabled state.
                </td>
            </tr>
            <tr>
                <td><code>$custom-switch-disabled-checked-thumb-bg</code></td>
                <td>string</td>
                <td><code>palette($primary, 200)</code></td>
                <td>
                    Background color of thumb for switch input in disabled, checked state.
                </td>
            </tr>
            <tr>
                <td><code>$custom-select-indicator-offset</code></td>
                <td>string</td>
                <td><code>.375rem</code></td>
                <td>
                    Additional horizontal spacing of visual indicator for custom select input.
                </td>
            </tr>
            <tr>
                <td><code>$custom-select-indicator-width</code></td>
                <td>string</td>
                <td><code>10px</code></td>
                <td>
                    Width of visual indicator for custom select input.
                </td>
            </tr>
            <tr>
                <td><code>$custom-select-indicator-height</code></td>
                <td>string</td>
                <td><code>10px</code></td>
                <td>
                    Height of visual indicator for custom select input.
                </td>
            </tr>
            <tr>
                <td><code>$custom-select-indicator-image</code></td>
                <td>string</td>
                <td><code>str-replace(url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23333' d='M3 0l-3 3h6l-3-3zm-3 5l3 3 3-3h-6z'/%3e%3c/svg%3e"), "#", "%23")</code></td>
                <td>
                    Icon for visual indicator of custom select input.
                </td>
            </tr>
            <tr>
                <td><code>$custom-select-indicator</code></td>
                <td>string</td>
                <td><code>$custom-select-indicator-image no-repeat right $custom-select-indicator-offset center / $custom-select-indicator-width $custom-select-indicator-height</code></td>
                <td>
                    Used so we can have multiple background elements (e.g., arrow and feedback icon).
                </td>
            </tr>
            <tr>
                <td><code>$custom-file-button-color</code></td>
                <td>string</td>
                <td><code>$uibase-600</code></td>
                <td>
                    Button text color for custom file input.
                </td>
            </tr>
            <tr>
                <td><code>$custom-file-button-bg</code></td>
                <td>string</td>
                <td><code>$uibase-50</code></td>
                <td>
                    Button background color for custom file input.
                </td>
            </tr>
            <tr>
                <td><code>$custom-file-button-disabled-opacity</code></td>
                <td>string</td>
                <td><code>.6</code></td>
                <td>
                    Button opacity for custom file input when in disabled state.
                </td>
            </tr>
            <tr>
                <td><code>$custom-file-button-disabled-opacity</code></td>
                <td>string</td>
                <td><pre><code>$custom-file-text: (
    en: "Browse"
)</code></pre></td>
                <td>
                    Visual text label for custom file input.
                </td>
            </tr>
            <tr>
                <td><code>$custom-range-track-height</code></td>
                <td>string</td>
                <td><code>.5rem</code></td>
                <td>
                    Height of track for custom range input.
                </td>
            </tr>
            <tr>
                <td><code>$custom-range-track-cursor</code></td>
                <td>string</td>
                <td><code>pointer</code></td>
                <td>
                    Pointer style of track for custom range input.
                </td>
            </tr>
            <tr>
                <td><code>$custom-range-track-bg</code></td>
                <td>string</td>
                <td><code>$uibase-100</code></td>
                <td>
                    Background color of track for custom range input.
                </td>
            </tr>
            <tr>
                <td><code>$custom-range-border</code></td>
                <td>string</td>
                <td><code>0</code></td>
                <td>
                    Border style of track for custom range input.
                </td>
            </tr>
            <tr>
                <td><code>$custom-range-track-border-radius</code></td>
                <td>string</td>
                <td><code>$custom-range-track-height</code></td>
                <td>
                    Border radius of track for custom range input.
                </td>
            </tr>
            <tr>
                <td><code>$custom-range-track-box-shadow</code></td>
                <td>string</td>
                <td><code>map-get($shadows, "i1")</code></td>
                <td>
                    Box shadow of track for custom range input.
                </td>
            </tr>
            <tr>
                <td><code>$custom-range-thumb-width</code></td>
                <td>string</td>
                <td><code>1.125rem</code></td>
                <td>
                    Width of thumb for custom range input.
                </td>
            </tr>
            <tr>
                <td><code>$custom-range-thumb-height</code></td>
                <td>string</td>
                <td><code>$custom-range-thumb-width</code></td>
                <td>
                    Height of thumb for custom range input.
                </td>
            </tr>
            <tr>
                <td><code>$custom-range-thumb-bg</code></td>
                <td>string</td>
                <td><code>$component-active-bg</code></td>
                <td>
                    Background color of thumb for custom range input.
                </td>
            </tr>
            <tr>
                <td><code>$custom-range-thumb-border</code></td>
                <td>string</td>
                <td><code>0</code></td>
                <td>
                    Border style of thumb for custom range input.
                </td>
            </tr>
            <tr>
                <td><code>$custom-range-thumb-border-radius</code></td>
                <td>string</td>
                <td><code>50%</code></td>
                <td>
                    Border radius of thumb for custom range input.
                </td>
            </tr>
            <tr>
                <td><code>$custom-range-thumb-box-shadow</code></td>
                <td>string</td>
                <td><code>map-get($shadows, "d1")</code></td>
                <td>
                    Box shadow of thumb for custom range input.
                </td>
            </tr>
            <tr>
                <td><code>$custom-range-thumb-focus-box-shadow</code></td>
                <td>string</td>
                <td><code>$input-focus-box-shadow</code></td>
                <td>
                    Box shadow of thumb for custom range input in focus state.
                </td>
            </tr>
            <tr>
                <td><code>$custom-range-thumb-focus-box-shadow-width</code></td>
                <td>string</td>
                <td><code>.1875rem</code></td>
                <td>
                    Width of box shadow of thumb for custom range input in focus state.
                </td>
            </tr>
            <tr>
                <td><code>$custom-range-thumb-active-bg</code></td>
                <td>string</td>
                <td><code>palette($component-active-bg, 600)</code></td>
                <td>
                    Background color of thumb for custom range input in active state.
                </td>
            </tr>
            <tr>
                <td><code>$custom-range-thumb-disabled-bg</code></td>
                <td>string</td>
                <td><code>$uibase-300</code></td>
                <td>
                    Background color of thumb for custom range input in disabled state.
                </td>
            </tr>
            <tr>
                <td><code>$custom-range-height</code></td>
                <td>string</td>
                <td><code>$custom-range-thumb-height + ($custom-range-thumb-focus-box-shadow-width * 2)</code></td>
                <td>
                    Height of custom range input.
                </td>
            </tr>
            <tr>
                <td><code>$custom-range-min-width</code></td>
                <td>string</td>
                <td><code>8rem</code></td>
                <td>
                    <p>Minimum width of custom range input.</p>
                    <p class="small">Note: Browser default seems to be 129px/~8rem for IE/Chrome/Safari</p>
                </td>
            </tr>
            <tr>
                <td><code>$form-feedback-margin-top</code></td>
                <td>string</td>
                <td><code>$form-text-margin-top</code></td>
                <td>
                    Vertical spacing between input and feeback text.
                </td>
            </tr>
            <tr>
                <td><code>$form-feedback-font-size</code></td>
                <td>string</td>
                <td><code>$small-font-size</code></td>
                <td>
                    Font size for feedback text.
                </td>
            </tr>
            <tr>
                <td><code>$form-feedback-valid-color</code></td>
                <td>string</td>
                <td><code>map-get($base-colors, "success")</code></td>
                <td>
                    Base color for <em>valid</em> feedback state.
                </td>
            </tr>
            <tr>
                <td><code>$form-feedback-invalid-color</code></td>
                <td>string</td>
                <td><code>map-get($base-colors, "danger")</code></td>
                <td>
                    Base color for <em>invalid</em> feedback state.
                </td>
            </tr>
            <tr>
                <td><code>$form-feedback-icon-offset</code></td>
                <td>string</td>
                <td><code>.375rem</code></td>
                <td>
                    Additional horizontal spacing of visual feedback indicator icon.
                </td>
            </tr>
            <tr>
                <td><code>$form-feedback-icon-width</code></td>
                <td>string</td>
                <td><code>16px</code></td>
                <td>
                    Width of visual feedback indicator icon.
                </td>
            </tr>
            <tr>
                <td><code>$form-feedback-icon-height</code></td>
                <td>string</td>
                <td><code>16px</code></td>
                <td>
                    Height of visual feedback indicator icon.
                </td>
            </tr>
            <tr>
                <td><code>$form-feedback-icon-valid-color</code></td>
                <td>string</td>
                <td><code>$form-feedback-valid-color</code></td>
                <td>
                    Icon color for <em>valid</em> feedback state.
                </td>
            </tr>
            <tr>
                <td><code>$form-feedback-icon-valid-image</code></td>
                <td>string</td>
                <td><code>str-replace(url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='#{$form-feedback-icon-valid-color}' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e"), "#", "%23")</code></td>
                <td>
                    Icon for <em>valid</em> feedback state.
                </td>
            </tr>
            <tr>
                <td><code>$form-feedback-icon-invalid-color</code></td>
                <td>string</td>
                <td><code>$form-feedback-invalid-color</code></td>
                <td>
                    Icon color for <em>invalid</em> feedback state.
                </td>
            </tr>
            <tr>
                <td><code>$form-feedback-icon-invalid-image</code></td>
                <td>string</td>
                <td><code>str-replace(url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='#{palette($danger, 500)}' viewBox='-2 -2 7 7'%3e%3cpath stroke='#{$form-feedback-icon-invalid-color}' d='M0 0l3 3m0-3L0 3'/%3e%3ccircle r='.5'/%3e%3ccircle cx='3' r='.5'/%3e%3ccircle cy='3' r='.5'/%3e%3ccircle cx='3' cy='3' r='.5'/%3e%3c/svg%3e"), "#", "%23")</code></td>
                <td>
                    Icon for <em>invalid</em> feedback state.
                </td>
            </tr>
            <tr>
                <td><code>$input-transition</code></td>
                <td>map</td>
                <td><code>background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out</code></td>
                <td>
                    Transition effect for inputs.
                </td>
            </tr>
            <tr>
                <td><code>$switch-transition</code></td>
                <td>map</td>
                <td><code>all .15s ease</code></td>
                <td>
                    Transition effect for custom switch inputs.
                </td>
            </tr>
        </tbody>
    </table>
</div>

### Mixins

Here are the mixins related to forms that we use to help generate our CSS.  You can also uses these mixins to generate your own custom components or utilities.

#### form-validation-state
{:.no_toc}

Build form validation rules.

{% highlight sass %}
@include form-validation-state($state, $color, $icon);
{% endhighlight %}

<div class="table-scroll">
    <table class="table table-bordered table-striped">
        <thead>
            <tr>
                <th style="width: 100px;">Argument</th>
                <th style="width: 50px;">Type</th>
                <th style="width: 50px;">Default</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><code>$state</code></td>
                <td>string</td>
                <td><code>''</code></td>
                <td>
                    The value appended to generate the classes for the given validation state.
                </td>
            </tr>
            <tr>
                <td><code>$color</code></td>
                <td>string</td>
                <td>none</td>
                <td>
                    The color to mix and use throughout the validation state.
                </td>
            </tr>
            <tr>
                <td><code>$icon</code></td>
                <td>string</td>
                <td>none</td>
                <td>
                    The icon to use throughout the validation state.
                </td>
            </tr>
        </tbody>
    </table>
</div>

#### form-control-focus
{:.no_toc}

Add the focus state to a form control or input.

{% highlight sass %}
@include form-control-focus()
{% endhighlight %}

#### custom-range-track()
{:.no_toc}

Add the common, cross-browser rules for track of a range input.

{% highlight sass %}
@include custom-range-track()
{% endhighlight %}

#### custom-range-thumb
{:.no_toc}

Add the common, cross-browser rules for thumb of a range input.

{% highlight sass %}
@include custom-range-thumb()
{% endhighlight %}
