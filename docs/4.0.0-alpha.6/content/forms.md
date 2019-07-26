---
layout: docs
title: Forms
description: Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.
group: content
---

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Overview

Figuration's form controls expand on [the Rebooted form styles]({{ site.baseurl }}/{{ site.docs_version }}/content/reboot/#forms) with classes. Use these classes to opt into their customized displays for a more consistent rendering across browsers and devices.

Be sure to use an appropriate type attribute on all inputs (e.g., `email` for email address or `number` for numerical information) to take advantage of newer input controls like email verification, number selection, and more.

{% capture callout %}
Alternatives to Hidden Labels
{:.h5 .no_toc}

Assistive technologies such as screen readers will have trouble with your forms if you don't include a label for every input. For these inline forms, you can hide the labels using the `.sr-only` class. There are further alternative methods of providing a label for assistive technologies, such as the `aria-label`, `aria-labelledby` or `title` attribute. If none of these are present, assistive technologies may resort to using the `placeholder` attribute, if present, but note that use of `placeholder` as a replacement for other labelling methods is not advised.
{% endcapture %}
{% include callout.html content=callout type="warning" %}


## Text Inputs

Textual form controls---like `<input>`s, `<select>`s, and `<textarea>`s---are styled with the `.form-control` class.  Included are styles for general appearance, focus state, sizing, and more.

{% capture example %}
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
{% endcapture %}
{% include example.html content=example %}

### Control Sizing

By default, `.form-control` uses `em` units for sizing so that they will scale with their explicit `font-size`.

You can also set heights and font-sizes using component sizing classes, such as:

- `.form-control-xsmall`
- `.form-control-small`
- `.form-control-large`
- `.form-control-xlarge`

{% capture example %}
<input class="form-control form-control-xlarge" type="text" placeholder="Extra large form control">
<input class="form-control form-control-large" type="text" placeholder="Large form control">
<input class="form-control" type="text" placeholder="Default form control">
<input class="form-control form-control-small" type="text" placeholder="Small form control">
<input class="form-control form-control-xsmall mb-2" type="text" placeholder="Extra small form control">
<input class="form-control fs-large" type="text" placeholder="Explicit large font size">
<input class="form-control fs-small" type="text" placeholder="Explicit small font size">
{% endcapture %}
{% include example.html content=example %}

The sizing classes also work on other inputs such as `<select>`s and `<textarea>`s.

{% capture example %}
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
{% endcapture %}
{% include example.html content=example %}

### Readonly Inputs

Add the `readonly` boolean attribute on an input to prevent modification of the input's value. Read-only inputs appear lighter (just like disabled inputs), but retain the standard cursor.

{% capture example %}
<input class="form-control" type="text" placeholder="Readonly input" readonly>
{% endcapture %}
{% include example.html content=example %}

### Static Inputs

When you want to have `readonly` fields in your form styled as plain text, use the `.form-control-static` class to remove the default form field styling and preserve the correct margin and padding.

{% capture example %}
<form>
  <div class="form-group row">
    <label for="static-email" class="col-sm-2 form-label">Email</label>
    <div class="col-sm-10">
      <input type="text" readonly class="form-control-static" id="static-email" value="email@example.com">
    </div>
  </div>
  <div class="form-group row">
    <label for="static-password" class="col-sm-2 form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="static-password" placeholder="Password">
    </div>
  </div>
</form>
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
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
{% endcapture %}
{% include example.html content=example %}

## Label, Legend, and Static Sizing

Just like sizing the form inputs, you can size `<label>`s, `<legends>`, and static controls with:

- `.form-label-xsmall`
- `.form-label-small`
- `.form-label-large`
- `.form-label-xlarge`

{% capture example %}
<div class="form-group flex-items-center row">
    <label class="col-sm-2 form-label form-label-xsmall" for="labelstatic-1">Email</label>
    <div class="col-sm-10">
        <input type="text" class="form-control-static form-label-xsmall" id="labelstatic-1" value="email@example.com">
    </div>
</div>
<div class="form-group flex-items-center row">
    <label class="col-sm-2 form-label form-label-small" for="labelstatic-2">Email</label>
    <div class="col-sm-10">
        <input type="text" class="form-control-static form-label-small" id="labelstatic-2" value="email@example.com">
    </div>
</div>
<div class="form-group flex-items-center row">
    <label class="col-sm-2 form-label" for="labelstatic-3">Email</label>
    <div class="col-sm-10">
        <input type="text" class="form-control-static" id="labelstatic-3" value="email@example.com">
    </div>
</div>
<div class="form-group flex-items-center row">
    <label class="col-sm-2 form-label form-label-large" for="labelstatic-4">Email</label>
    <div class="col-sm-10">
        <input type="text" class="form-control-static form-label-large" id="labelstatic-4" value="email@example.com">
    </div>
</div>
<div class="form-group flex-items-center row">
    <label class="col-sm-2 form-label form-label-xlarge" for="labelstatic-5">Email</label>
    <div class="col-sm-10">
        <input type="text" class="form-control-static form-label-xlarge" id="labelstatic-5" value="email@example.com">
    </div>
</div>
{% endcapture %}
{% include example.html content=example %}

## Disabled States

Add the `disabled` attribute on an input to prevent user interactions and make it appear lighter in color.

{% capture example %}
<input class="form-control" id="disabled-input" type="text" placeholder="Disabled input" disabled>
{% endcapture %}
{% include example.html content=example %}

Add the `disabled` attribute to a `<fieldset>` to disable all the controls within.

{% capture example %}
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
{% endcapture %}
{% include example.html content=example %}

{% capture callout %}
Caveat About Link Functionality of `<a>`
{:.h5 .no_toc}

By default, browsers will treat all native form controls (`<input>`, `<select>` and `<button>` elements) inside a `<fieldset disabled>` as disabled, preventing both keyboard and mouse interactions on them. However, if your form also includes `<a ... class="btn btn-*">` elements, these will only be given a style of `pointer-events: none`. As noted in the section about [disabled state for buttons](../buttons/#disabled-state) (and specifically in the sub-section for anchor elements), this CSS property is not yet standardized and isn't fully supported in all browsers, and won't prevent keyboard users from being able to focus or activate these links. So to be safe, use custom JavaScript to disable such links.
{% endcapture %}
{% include callout.html content=callout type="warning" %}

{% capture callout %}
Cross-browser Compatibility
{:.h5 .no_toc}

While Figuration will apply these styles in all browsers, Internet Explorer 11 and below don't fully support the `disabled` attribute on a `<fieldset>`. Use custom JavaScript to disable the fieldset in these browsers.
{% endcapture %}
{% include callout.html content=callout type="danger" %}

## Help Text

Block-level help text in forms can be created using `.form-text`. Inline help text can be flexibly implemented using any inline HTML element and utility classes like `.text-muted`.

{% capture callout %}
Associating Help Text With Form Controls
{:.h5 .no_toc}

Help text should be explicitly associated with the form control it relates to using the `aria-describedby` attribute. This will ensure that assistive technologies---such as screen readers---will announce this help text when the user focuses or enters the control.
{% endcapture %}
{% include callout.html content=callout type="warning" %}

Help text below inputs can be styled with `.form-text`. This class includes `display: block;` and adds some top margin for easy spacing from the inputs above.

{% capture example %}
<label for="help-pass">Password</label>
<input type="password" id="help-pass" class="form-control" aria-describedby="help-pass-text">
<small id="help-pass-text" class="form-text text-muted">
  Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
</small>
{% endcapture %}
{% include example.html content=example %}

Inline text can use any typical inline HTML element (be it a `<small>`, `<span>`, or something else), optionally using utility classes.

{% capture example %}
<form class="form-inline">
  <div class="form-group">
    <label for="inline-pass" class="me-0_5">Password</label>
    <input type="password" id="inline-pass" class="form-control me-0_5" aria-describedby="inline-pass-text">
    <small id="inline-pass-text" class="text-muted">
      Must be 8-20 characters long.
    </small>
  </div>
</form>
{% endcapture %}
{% include example.html content=example %}

## Checkboxes and Radios

Default checkboxes and radios are improved upon with the help of `.form-check`, **a single class for both input types that improves the layout and behavior of their HTML elements**. Checkboxes are for selecting one or several options in a list, while radios are for selecting one option from many.

Disabled checkboxes and radios are supported by using the `disabled` attribute on the `<input>`, or by being inside a disabled `<fieldset>`, and will lighten the text color of a sibling `.form-check-label` to help indicate the input's state.

The `.form-check` container has a `padding-left` so that the siblings of the `<input>` (such as `<label>`, help text, or validation feedback) are easily aligned.

By default, any number of checkboxes and radios that are immediate sibling will be vertically stacked and appropriately spaced with `.form-check`.

{% capture example %}
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="default-checkbox-1">
  <label class="form-check-label" for="default-checkbox-1">Default checkbox</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="default-checkbox-2">
  <label class="form-check-label" for="default-checkbox-2">Default checkbox</label>
  <small class="text-muted d-block">Some additional help text could appear right here.</small>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="default-checkbox-3" disabled>
  <label class="form-check-label" for="default-checkbox-3">Disabled checkbox</label>
</div>
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
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
{% endcapture %}
{% include example.html content=example %}

### Custom Style

For even more customization and cross browser consistency, use our stylized form elements to replace the browser defaults.

Add the `.form-checkradio` modifier class to a `.form-check` to enable the stylized inputs.  The visual treatment is determined from the `type` attribute on the `<input>`.

We hide the default `<input>` with `opacity` and use a `<label>` element with `.form-check-label` to build the stylized indicator in its place with `::before` and `::after`. Unfortunately we can't build a custom one from just the `<input>` because CSS does not support `content`, `appearance` in IE 11, or pseudo-elements on that element.

We also use the sibling selector (`~`) and the `<input>` states---like `:checked`---to style the form indicator and `<label>` text for each item.

Stylized checkboxes can also utilize the `:indeterminate` pseudo class when manually set via JavaScript (there is no available HTML attribute for specifying it).

In the checked and indeterminate states, we use icons from [Open Iconic](https://github.com/iconic/open-iconic). This provides us the best control for styling and positioning across browsers and devices.

{% capture example %}
<div class="form-check form-checkradio">
  <input class="form-check-input" type="checkbox" id="check0" checked>
  <label class="form-check-label" for="check0">Custom checkbox</label>
  <small class="text-muted d-block">Some additional help text could appear right here.</small>
</div>
<div class="form-check form-checkradio">
  <input class="form-check-input" type="checkbox" id="check1">
  <label class="form-check-label" for="check1">Indeterminate custom checkbox</label>
  <small class="text-muted d-block">Indeterminate checkboxes must be toggled via JavaScript—there's no HTML attribute for this.</small>
</div>
<div class="form-check form-checkradio">
  <input class="form-check-input" type="checkbox" id="check2">
  <label class="form-check-label" for="check2">Custom checkbox with a really long label to see what layout becomes when the text content wraps to the next line, but this needs a large amount of text to make sure the wrapping occurs.</label>
</div>
<div class="form-check form-checkradio">
  <input class="form-check-input" type="checkbox" id="check3" disabled>
  <label class="form-check-label" for="check3">Disabled custom checkbox</label>
</div>
<div class="form-check form-checkradio">
  <input class="form-check-input" type="checkbox" id="check4" disabled checked>
  <label class="form-check-label" for="check4">Disabled checked custom checkbox</label>
</div>
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
<div class="form-check form-checkradio">
  <input class="form-check-input" type="radio" id="radio0" name="radios" checked>
  <label class="form-check-label" for="radio0">Custom radio</label>
</div>
<div class="form-check form-checkradio">
  <input class="form-check-input" type="radio" id="radio1" name="radios">
  <label class="form-check-label" for="radio1">Custom radio</label>
</div>
<div class="form-check form-checkradio">
  <input class="form-check-input" type="radio" id="radio2" name="radios" disabled>
  <label class="form-check-label" for="radio2">Disabled custom radio</label>
</div>
<div class="form-check form-checkradio">
  <input class="form-check-input" type="radio" id="radio3" name="radiosdis" disabled checked>
  <label class="form-check-label" for="radio3">Disabled checked custom radio</label>
</div>
{% endcapture %}
{% include example.html content=example %}

For the indeterminate checkbox above we are using the following script:

{% highlight js %}
document.getElementById("check1").indeterminate = true;
{% endhighlight %}
<script>
    document.getElementById("check1").indeterminate = true;
</script>

### Switch

In similar fashion to the stylized checkbox and radio input, transform either of the input types to a stylized toggle switch by the using the `.form-switch` modifier class instead.

{% capture example %}
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="switch0">
  <label class="form-check-label" for="switch0">Custom switch checkbox</label>
  <small class="text-muted d-block">Some additional help text could appear right here.</small>
</div>
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="switch1" disabled>
  <label class="form-check-label" for="switch1">Disabled custom switch checkbox</label>
  <small class="text-muted d-block">Some additional help text could appear right here.</small>
</div>
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="switch2" disabled checked>
  <label class="form-check-label" for="switch2">Disabled checked custom switch checkbox</label>
  <small class="text-muted d-block">Some additional help text could appear right here.</small>
</div>
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
<div class="form-check form-switch">
  <input class="form-check-input" type="radio" id="switchradio0" name="switchradio" checked>
  <label class="form-check-label" for="switchradio0">Custom switch radio</label>
</div>
<div class="form-check form-switch">
  <input class="form-check-input" type="radio" id="switchradio1" name="switchradio">
  <label class="form-check-label" for="switchradio1">Custom switch radio</label>
</div>
{% endcapture %}
{% include example.html content=example %}

### Without Labels

You can use `.form-check` without labels, but you will still need to provide some form of label for assistive technologies (for instance, using `aria-label`).

However, the stylized inputs will need to keep their label in order for the visual input to appear.

{% capture example %}
<div class="form-check">
  <input class="form-check-input" type="checkbox" id="nolabel0" value="" aria-label="...">
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="nolabel-radio" id="nolabel-1" value="" aria-label="...">
</div>
<div class="form-check form-checkradio">
  <input class="form-check-input" type="checkbox" id="nolabel2" value="">
  <label class="form-check-label" for="nolabel2">
    <span class="sr-only">Visually hidden label text</span>
  </label>
</div>
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="nolabel3" value="">
  <label class="form-check-label" for="nolabel3">
    <span class="sr-only">Visually hidden label text</span>
  </label>
</div>
{% endcapture %}
{% include example.html content=example %}

### External Labels

Label can be supplied outside of the `.form-check` container also.

{% capture example %}
<div class="row">
    <label class="col-md-auto" for="extlabel0">External label</label>
    <div class="col">
        <div class="form-check form">
            <input class="form-check-input" type="checkbox" id="extlabel0" checked>
            <label class="form-check-label" for="extlabel0"></label>
        </div>
    </div>
</div>
<div class="row">
    <label class="col-md-auto" for="extlabel1">External label</label>
    <div class="col">
        <div class="form-check form-checkradio">
            <input class="form-check-input" type="checkbox" id="extlabel1" checked>
            <label class="form-check-label" for="extlabel1"></label>
        </div>
    </div>
</div>
<div class="row">
    <label class="col-md-auto" for="extlabel2">External label</label>
    <div class="col">
        <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" id="extlabel2" checked>
            <label class="form-check-label" for="extlabel2"></label>
        </div>
    </div>
</div>
{% endcapture %}
{% include example.html content=example %}

### Inline

Group checkboxes or radios on the same horizontal row by using `display` and `margin` utility classes, such as `.d-inline-block` and `.me-1`.

{% capture example %}
<div class="form-check d-inline-block me-1">
    <input class="form-check-input" type="checkbox" id="inline0" checked>
    <label class="form-check-label" for="inline0">Inline checkbox</label>
</div>
<div class="form-check form-checkradio d-inline-block me-1">
    <input class="form-check-input" type="checkbox" id="inline1" checked>
    <label class="form-check-label" for="inline1">Inline custom checkbox</label>
</div>
<div class="form-check form-checkradio d-inline-block me-1">
    <input class="form-check-input" type="radio" id="inline2" checked>
    <label class="form-check-label" for="inline2">Inline custom radio</label>
</div>
<div class="form-check form-switch d-inline-block">
    <input class="form-check-input" type="checkbox" id="inline3" checked>
    <label class="form-check-label" for="inline3">Inline custom switch</label>
</div>
{% endcapture %}
{% include example.html content=example %}

### Sizing

Our custom checkbox, radio, and switch inputs use `em` for sizing, so that they will scale with their explicit or inherited `font-size`.

{% capture example %}
<div class="form-check form-checkradio fs-xlarge">
    <input class="form-check-input" type="checkbox" id="resize0" checked>
    <label class="form-check-label" for="resize0">Resized custom checkbox</label>
</div>
<div class="form-check form-checkradio">
    <input class="form-check-input" type="radio" id="resize1" checked>
    <label class="form-check-label fs-large" for="resize1">Resized custom radio</label>
</div>
<div class="fs-small">
    <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" id="resize2" checked>
        <label class="form-check-label" for="resize2">Resized custom switch</label>
    </div>
</div>
{% endcapture %}
{% include example.html content=example %}

You can also set a `font-size` on the `.form-check` container, then reset `font-size` of content **inside** the `<label>`.

{% capture example %}
<div class="form-check form-checkradio fs-xlarge">
    <input class="form-check-input" type="checkbox" id="resizealt0" checked>
    <label class="form-check-label" for="resize0"><span class="fs-base">Resized custom checkbox</span></label>
</div>
{% endcapture %}
{% include example.html content=example %}

## File Browser

Using `.form-file` as a wrapper, we hide the default file `<input>` via `opacity` and instead style the `<label>` with some additional child elements to recreate the filename text and button portions of the input.  A `width` and `height` are also set on the `<input>` for proper spacing for surrounding content.

The file input requires additional JavaScript if you would like to have a functional *Choose file...* and selected file name text.

{% capture example %}
<div class="form-file">
  <input type="file" class="form-file-input" id="formFile">
  <label class="form-file-label" for="formFile">
    <span class="form-file-text">Choose file...</span>
    <span class="form-file-button">Browse</span>
  </label>
</div>
{% endcapture %}
{% include example.html content=example %}

Longer filename text is truncated and an ellipsis is added when there's not enough space.

{% capture example %}
<div class="form-file">
  <input type="file" class="form-file-input" id="formFileLong">
  <label class="form-file-label" for="formFileLong">
    <span class="form-file-text">Lorem ipsum posuere consectetur est at lobortis nulla vitae elit libero a pharetra augue fusce dapibus tellus ac cursus commodo tortor mauris condimentum nibh ut fermentum massa justo sit amet risus cras mattis consectetur purus sit amet fermentum</span>
    <span class="form-file-button">Browse</span>
  </label>
</div>
{% endcapture %}
{% include example.html content=example %}

## Range

Create custom `<input type="range">` controls with `.form-range`. The track (the background) and thumb (the value) are both styled to appear the same across browsers. As only IE and Firefox support "filling" their track from the left or right of the thumb as a means to visually indicate progress, we do not currently support it.  We also hide the tooltip provided only by IE to maintain cross-browser consistency.

{% capture example %}
<label for="customRange1">Example range</label>
<input type="range" class="form-range" id="customRange1">
{% endcapture %}
{% include example.html content=example %}

Range inputs have implicit values for `min` and `max`---`0` and `100`, respectively. You may specify new values for those using the `min` and `max` attributes.

{% capture example %}
<label for="customRange2">Example range</label>
<input type="range" class="form-range" min="0" max="5" id="customRange2">
{% endcapture %}
{% include example.html content=example %}

By default, range inputs "snap" to integer values. To change this, you can specify a `step` value. In the example below, we double the number of steps by using `step="0.5"`.

{% capture example %}
<label for="customRange3">Example range</label>
<input type="range" class="form-range" min="0" max="5" step="0.5" id="customRange3">
{% endcapture %}
{% include example.html content=example %}

## Color Picker

`<input type="color">` element need only a custom class, `.form-color` to trigger the custom styles.

{% capture callout %}
Browser Compatibility
{:.h5 .no_toc}

While Figuration supports styling `<input type="color">` elements, some browsers don't. Use custom JavaScript to handle it in these browsers.  For support details, see [Can I Use](https://caniuse.com/#feat=input-color).
{% endcapture %}
{% include callout.html content=callout type="danger" %}

{% capture example %}
<input class="form-color" type="color" value="#117dba" id="color">
{% endcapture %}
{% include example.html content=example %}

## Layout

Since Figuration applies `display: block` and `width: 100%` to almost all our form controls, forms will by default stack vertically. Additional classes can be used to vary this layout on a per-form basis.

### Form Groups

The `.form-group` class is the easiest way to add some structure to forms. It provides a flexible class that encourages proper grouping of labels, controls, optional help text, and form validation messaging. By default it only applies `margin-bottom`, but it picks up additional styles in `.form-inline` as needed. Use it with `<fieldset>`s, `<div>`s, or nearly any other element.

{% capture example %}
<form>
  <div class="form-group">
    <label class="form-label" for="formGroupExampleInput">Example label</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input">
  </div>
  <div class="form-group">
    <label class="form-label" for="formGroupExampleInput2">Another label</label>
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input">
  </div>
</form>
{% endcapture %}
{% include example.html content=example %}

### Form Grid

More complex forms can be built using our [grid classes]({{ site.baseurl }}/{{ site.docs_version }}/layout/grid/). Use these for form layouts that require multiple columns, varied widths, and additional alignment options.

Grid-based form layouts also support [control sizing]({{ site.baseurl }}/{{ site.docs_version }}/content/forms/#control-sizing).

{% capture example %}
<form>
  <div class="row">
    <div class="col">
      <label for="formGridExampleInput">First Name</label>
      <input type="text" class="form-control" id="formGridExampleInput" placeholder="First name">
    </div>
    <div class="col">
      <label for="formGridExampleInput2">Last Name</label>
      <input type="text" class="form-control" id="formGridExampleInput2" placeholder="Last name">
    </div>
  </div>
</form>
{% endcapture %}
{% include example.html content=example %}

### Form Row

You may also swap `.row` for `.form-row`, a variation of our standard grid row that overrides the default column gutters for tighter and more compact layouts.

{% capture example %}
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
{% endcapture %}
{% include example.html content=example %}

More complex layouts can also be created with the grid system.

{% capture example %}
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
{% endcapture %}
{% include example.html content=example %}

#### Horizontal Form

Create horizontal forms with the grid by adding the `.row` class to form groups and using the `.col-*-*` classes to specify the width of your labels and controls. Be sure to add `.form-label` to your `<label>`s as well so they're vertically centered with their associated form controls.

At times, you maybe need to use margin or padding utilities to create that perfect alignment you need. For example, we've removed the `padding-top` on our stacked radio inputs label to better align the text baseline.

{% capture example %}
<form>
  <div class="form-group row">
    <label for="hform-email" class="col-sm-2 form-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="hform-email" placeholder="Email">
    </div>
  </div>
  <div class="form-group row">
    <label for="hform-pass" class="col-sm-2 form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="hform-pass" placeholder="Password">
    </div>
  </div>
  <fieldset class="form-group">
    <div class="row">
      <legend class="form-label col-sm-2 pt-0">Radios</legend>
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
    <div class="col-sm-10 offset-sm-2">
      <button type="submit" class="btn btn-primary">Sign in</button>
    </div>
  </div>
</form>
{% endcapture %}
{% include example.html content=example %}

#### Column Sizing

As shown in the previous examples, our grid system allows you to place any number of `.col`s within a `.row`. They will split the available width equally between them. You may also pick a subset of your columns to take up more or less space, while the remaining `.col`s equally split the rest, with specific column classes like `.col-7`.

{% capture example %}
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
{% endcapture %}
{% include example.html content=example %}

#### Auto-sizing

The example below uses a flexbox utility to vertically center the contents and changes `.col` to `.col-auto` so that your columns only take up as much space as needed. Put another way, the column sizes itself based on the contents.

{% capture example %}
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
    <div class="col-auto mb-0_25">
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
{% endcapture %}
{% include example.html content=example %}

Here is the same form, but this time using specified column widths

{% capture example %}
<form>
  <div class="form-row flex-items-center">
    <div class="col-sm-3 mb-0_5">
      <label class="sr-only" for="specsize-name">Name</label>
      <input type="text" class="form-control" id="specsize-name" placeholder="Jane Doe">
    </div>
    <div class="col-sm-3 mb-0_5">
      <label class="sr-only" for="specsize-user">Username</label>
      <div class="input-group">
        <div class="input-group-addon">
          <div class="input-group-text">@</div>
        </div>
        <input type="text" class="form-control" id="specsize-user" placeholder="Username">
      </div>
    </div>
    <div class="col-auto mb-0_25">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="specsize-check">
        <label class="form-check-label" for="specsize-check">Remember me</label>
      </div>
    </div>
    <div class="col-auto mb-0_5">
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </div>
</form>
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
<form>
  <div class="form-row flex-items-center">
    <div class="col mb-0_5">
      <label class="sr-only" for="form-select">Preference</label>
      <select class="form-control" id="form-select">
        <option selected>Choose...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
    <div class="col-auto mb-0_25">
      <div class="form-check form-checkradio">
        <input type="checkbox" class="form-check-input" id="customize-check">
        <label class="form-check-label" for="customize-check">Remember my preference</label>
      </div>
    </div>
    <div class="col-auto mb-0_5">
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </div>
</form>
{% endcapture %}
{% include example.html content=example %}

### Inline Forms

Use the `.form-inline` class to display a series of labels, form controls, and buttons on a single horizontal row. Form controls within inline forms vary slightly from their default states.

- Controls are `display: flex`, collapsing any HTML white space and allowing you to provide alignment control with [spacing]({{ site.baseurl }}/{{ site.docs_version }}/utilities/spacing/) and [flexbox]({{ site.baseurl }}/{{ site.docs_version }}/utilities/flexbox/) utilities.
- Controls and input groups receive `width: auto` to override the Figuration default `width: 100%`.
- Controls **only appear inline in viewports that are at least 36em/576px wide** to account for narrow viewports on mobile devices.

You may need to manually address the width and alignment of individual form controls with [spacing utilities]({{ site.baseurl }}/{{ site.docs_version }}/utilities/spacing/) (as shown below). Lastly, as shown below, you should always include a `<label>` with each form control, even if you need to hide it from non-screenreader users with `.sr-only`.

{% capture example %}
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
{% endcapture %}
{% include example.html content=example %}

Custom form controls and selects are also supported.

{% capture example %}
<form class="form-inline">
  <label class="mb-0_5 me-0_5" for="inlineFormSelectPref">Preference</label>
  <select class="form-control mb-0_5 me-sm-0_5" id="inlineFormSelectPref">
    <option selected>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>

  <div class="form-check form-checkradio mb-0_5 me-sm-0_5">
    <input type="checkbox" class="form-check-input" id="customControlInline">
    <label class="form-check-label" for="customControlInline">Remember my preference</label>
  </div>

  <button type="submit" class="btn btn-primary mb-0_5">Submit</button>
</form>
{% endcapture %}
{% include example.html content=example %}

## Validation

Provide valuable, actionable feedback to your users with HTML5 form validation–[available in all our supported browsers](https://caniuse.com/#feat=form-validation). Choose from the browser default validation feedback, or implement custom messages with our built-in classes and starter JavaScript.

{% capture callout %}
We currently recommend using custom validation styles, as native browser default validation messages are not consistently exposed to assistive technologies in all browsers (most notably, Chrome on desktop and mobile).
{% endcapture %}
{% include callout.html content=callout type="warning" %}

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

Custom feedback styles apply custom colors, borders, focus styles, feedback messages, and optional background icons to better communicate feedback.

{% capture example %}
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
{% endcapture %}
{% include example.html content=example %}

### Browser Defaults

Not interested in custom validation feedback messages or writing JavaScript to change form behaviors? All good, you can use the browser defaults. Try submitting the form below. Depending on your browser and OS, you'll see a slightly different style of feedback.

While these feedback styles cannot be styled with CSS, you can still customize the feedback text through JavaScript.

{% capture example %}
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
{% endcapture %}
{% include example.html content=example %}

### Server Side

We recommend using client side validation, but in case you require server side, you can indicate invalid and valid form fields with `.is-invalid` and `.is-valid`. Note that `.invalid-feedback` is also supported with these classes.

{% capture example %}
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
{% endcapture %}
{% include example.html content=example %}

### Supported Elements

Validation styles are supported for the following form controls and components:

- `<input>`s, `<textarea>`s, and `<select>`s using `.form-control` (only supports one `.form-control` in input groups)
- `.form-check`s with either native of custom variants
- `.form-file`

{% capture example %}
<form class="was-validated">
  <div class="mb-1">
    <label for="validate-textarea">Textarea</label>
    <textarea class="form-control" id="validate-textarea" rows="3" placeholder="Required example textarea" required></textarea>
    <div class="invalid-feedback">Please enter a message in the textarea.</div>
  </div>

  <div class="form-check mb-1">
    <input type="checkbox" class="form-check-input" id="validate-support-1" required>
    <label class="form-check-label" for="validate-support-1">Check this native checkbox</label>
    <div class="invalid-feedback">Example invalid feedback text</div>
  </div>

  <div class="form-check">
    <input type="radio" class="form-check-input" id="validate-support-2" name="radio-stacked" required>
    <label class="form-check-label" for="validate-support-2">Toggle this native radio</label>
  </div>
  <div class="form-check mb-1">
    <input type="radio" class="form-check-input" id="validate-support-3" name="radio-stacked" required>
    <label class="form-check-label" for="validate-support-3">Or toggle this other native radio</label>
    <div class="invalid-feedback">More example invalid feedback text</div>
  </div>

  <div class="form-check form-checkradio mb-1">
    <input type="checkbox" class="form-check-input" id="validate-support-4" required>
    <label class="form-check-label" for="validate-support-4">Check this custom checkbox</label>
    <div class="invalid-feedback">Example invalid feedback text</div>
  </div>

  <div class="form-check form-checkradio">
    <input type="radio" class="form-check-input" id="validate-support-5" name="radio-stacked" required>
    <label class="form-check-label" for="validate-support-5">Toggle this custom radio</label>
  </div>
  <div class="form-check form-checkradio mb-1">
    <input type="radio" class="form-check-input" id="validate-support-6" name="radio-stacked" required>
    <label class="form-check-label" for="validate-support-6">Or toggle this other custom radio</label>
    <div class="invalid-feedback">More example invalid feedback text</div>
  </div>

  <div class="form-check form-switch mb-1">
    <input type="checkbox" class="form-check-input" id="validate-support-7" required>
    <label class="form-check-label" for="validate-support-7">Check this custom checkbox</label>
    <div class="invalid-feedback">Example invalid feedback text</div>
  </div>

  <div class="form-group">
    <select class="form-control" required>
      <option value="">Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
    <div class="invalid-feedback">Example invalid custom select feedback</div>
  </div>

  <div class="form-group mb-1">
    <div class="form-file">
      <input type="file" class="form-file-input is-invalid" id="validatedCustomFile" required>
      <label class="form-file-label" for="validatedCustomFile">
        <span class="form-file-text">Choose file...</span>
        <span class="form-file-button">Browse</span>
      </label>
      <div class="invalid-feedback">Example invalid custom file feedback</div>
    </div>
  </div>

  <div class="input-group">
    <div class="input-group-addon">
        <span class="input-group-text" id="validate-support-ig">@</span>
    </div>
    <input type="text" class="form-control input-group-end" placeholder="Username" aria-label="Username" aria-describedby="validate-support-ig" required>
    <div class="invalid-feedback">Please choose a unique and valid username.</div>
  </div>
</form>
{% endcapture %}
{% include example.html content=example %}

### Tooltips

If your form layout allows it, you can swap the `.{valid|invalid}-feedback` classes for `.{valid|invalid}-tooltip` classes to display validation feedback in a styled tooltip. Be sure to have a parent with `position: relative` on it for tooltip positioning. In the example below, our column classes have this already, but your project may require an alternative setup.

{% capture example %}
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
{% endcapture %}
{% include example.html content=example %}

### Icons

Optional visual icon representations of the validation state can be added to _textual_ `<input class="form-control">`, `<textarea class="form-control">`, and `<select class="form-control">` elements by adding a `.has-validation-icon` class.

- Validation icons are `url()`s configured via Sass variables that are applied to `background-image` rules for each state.
- You may use your own base64 PNGs or SVGs by updating the Sass variables and recompiling.
- Icons can also be disabled entirely by setting the `$enable-validation-icons` variable to `false` in the [Sass global options]({{ site.baseurl }}/{{ site.docs_version }}/get-started/options/#global-options).

{% capture example %}
<form class="was-validated">
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
    <select class="form-control has-validation-icon" id="validate-icon-8" required>
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
</form>
{% endcapture %}
{% include example.html content=example %}

### Customizing

Validation states can be customized via Sass with the `$form-validation-states` map. Located in our `_settings.scss` file, this Sass map is looped over to generate the default `valid`/`invalid` validation states. Included is a nested map for customizing each state's color and icon. While no other states are supported by browsers, those using custom styles can easily add more complex form feedback.

Please note that we do not recommend customizing these values without also modifying the `form-validation-state` mixin.

{% highlight scss %}
// Sass map from `_settings.scss`
// Override this and recompile your Sass to generate different states
$form-validation-states: map-merge(
  (
    "valid": (
      "color": $form-feedback-valid-color,
      "icon": $form-feedback-icon-valid-image
    ),
    "invalid": (
      "color": $form-feedback-invalid-color,
      "icon": $form-feedback-icon-invalid-image
    ),
  ),
  $form-validation-states
);

// Loop from `_forms.scss`
// Any modifications to the above Sass map will be reflected in your compiled
// CSS via this loop.
@each $state, $data in $form-validation-states {
  @include form-validation-state($state, map-get($data, color), map-get($data, icon));
}
{% endhighlight %}

## SASS Reference

### Variables

The available [Customization options]({{ site.baseurl }}/{{ site.docs_version }}/get-started/options/), or Sass variables, that can be customized for forms.

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
                <td><code>$enable-form-control-sizing</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the sizing classes for form controls.
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
                <td><code>$enable-form-label</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the form control label class.
                </td>
            </tr>
            <tr>
                <td><code>$enable-form-label-sizing</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the sizing classes for form control labels.
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
                <td><code>$enable-form-check</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the stacking layout for checkbox and radio inputs.
                </td>
            </tr>
            <tr>
                <td><code>$enable-form-check-checkradio</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the custom styles for checkbox and radio inputs.
                </td>
            </tr>
            <tr>
                <td><code>$enable-form-check-switch</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the custom switch styles for checkbox and radio inputs.
                </td>
            </tr>
            <tr>
                <td><code>$enable-form-file</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the classes for file inputs.
                </td>
            </tr>
            <tr>
                <td><code>$enable-form-range</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the classes for custom range inputs.
                </td>
            </tr>
            <tr>
                <td><code>$enable-form-color</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the classes for custom color inputs.
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
                <td><code>$enable-form-row</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the form row classes.
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
                <td><code>$input-font-family</code></td>
                <td>string</td>
                <td><code>null</code></td>
                <td>
                    Base input font family.
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
                <td><code>$uibase-50</code></td>
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
                <td><code>$input-disabled-border-color</code></td>
                <td>string</td>
                <td><code>null</code></td>
                <td>
                    Border color for disabled state.
                </td>
            </tr>
            <tr>
                <td><code>$input-disabled-opacity</code></td>
                <td>string</td>
                <td><code>1</code></td>
                <td>
                    Opacity value for disabled state.
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
                <td><code>$input-static-color</code></td>
                <td>string</td>
                <td><code>$body-color</code></td>
                <td>
                    Text color for static readonly inputs.
                </td>
            </tr>
            <tr>
                <td><code>$form-label-font-weight</code></td>
                <td>string</td>
                <td><code>$font-weight-normal</code></td>
                <td>
                    Font weight for <code>.form-label</code>.
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
                <td><code>$form-group-margin-bottom</code></td>
                <td>string</td>
                <td><code>1rem</code></td>
                <td>
                    Vertical spacing for form group.
                </td>
            </tr>
            <tr>
                <td><code>$form-row-gutter-width</code></td>
                <td>string</td>
                <td><code>.625rem</code></td>
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
                <td><code>$form-inline-check-margin-x</code></td>
                <td>string</td>
                <td><code>.25rem</code></td>
                <td>
                    Horizontal spacing for form check when inline.
                </td>
            </tr>
            <tr>
                <td><code>$form-check-gutter</code></td>
                <td>string</td>
                <td><code>1.25rem</code></td>
                <td>
                    Reserved spacing width for default inputs within <code>.form-check</code>.
                </td>
            </tr>
            <tr>
                <td><code>$form-check-margin-bottom</code></td>
                <td>string</td>
                <td><code>.3125rem</code></td>
                <td>
                    Vertical adjustment for inputs within <code>.form-check</code>.
                </td>
            </tr>
            <tr>
                <td><code>$form-check-label-font-weight</code></td>
                <td>string</td>
                <td><code>null</code></td>
                <td>
                    Font weight for `.form-check-label`.
                </td>
            </tr>
            <tr>
                <td><code>$form-check-label-disabled-opacity</code></td>
                <td>string</td>
                <td><code>.6</code></td>
                <td>
                    Opacity for `.form-check-label` when the input is disabled.
                </td>
            </tr>
            <tr>
                <td><code>$form-checkradio-size</code></td>
                <td>string</td>
                <td><code>1em</code></td>
                <td>
                    Height and width for custom styled checkbox and radio inputs.
                </td>
            </tr>
            <tr>
                <td><code>$form-checkradio-gutter</code></td>
                <td>string</td>
                <td><code>calc(#{$form-checkradio-size} + .375em)</code></td>
                <td>
                    Reserved spacing width for custom styled checkbox and radio inputs.
                </td>
            </tr>
            <tr>
                <td><code>$form-checkradio-bg</code></td>
                <td>string</td>
                <td><code>$white</code></td>
                <td>
                    Background color for custom styled checkbox and radio inputs in inactive state.
                </td>
            </tr>
            <tr>
                <td><code>$form-checkradio-border-width</code></td>
                <td>string</td>
                <td><code>$border-width</code></td>
                <td>
                    Border width for custom styled checkbox and radio inputs
                </td>
            </tr>
            <tr>
                <td><code>$form-checkradio-border-color</code></td>
                <td>string</td>
                <td><code>$input-border-color</code></td>
                <td>
                    Border color for custom styled checkbox and radio inputs in inactive state.
                </td>
            </tr>
            <tr>
                <td><code>$form-checkradio-box-shadow</code></td>
                <td>string</td>
                <td><code>$input-box-shadow</code></td>
                <td>
                    Box shadow for custom styled checkbox and radio inputs in inactive state.
                </td>
            </tr>
            <tr>
                <td><code>$form-checkradio-icon-size</code></td>
                <td>string</td>
                <td><code>calc(#{$form-checkradio-size} - .375em)</code></td>
                <td>
                    Height and width of the background image icon for custom styled checkbox and radio input.
                </td>
            </tr>
            <tr>
                <td><code>$form-checkradio-focus-border-color</code></td>
                <td>string</td>
                <td><code>$input-border-color</code></td>
                <td>
                    Border color for custom styled checkbox and radio inputs in focused state.
                </td>
            </tr>
            <tr>
                <td><code>$form-checkradio-focus-box-shadow</code></td>
                <td>string</td>
                <td><code>$input-focus-box-shadow</code></td>
                <td>
                    Box shadow for custom styled checkbox and radio inputs in focused state.
                </td>
            </tr>
            <tr>
                <td><code>$form-checkradio-checked-bg</code></td>
                <td>string</td>
                <td><code>$primary</code></td>
                <td>
                    Background color for custom styled checkbox and radio inputs in checked state.
                </td>
            </tr>
            <tr>
                <td><code>$form-checkradio-checked-color</code></td>
                <td>string</td>
                <td><code>$white</code></td>
                <td>
                    Icon color for custom styled checkbox and radio inputs in checked state.
                </td>
            </tr>
            <tr>
                <td><code>$form-checkradio-checked-border-color</code></td>
                <td>string</td>
                <td><code>$primary</code></td>
                <td>
                    Border color for custom styled checkbox and radio inputs in checked state.
                </td>
            </tr>
            <tr>
                <td><code>$form-checkradio-checkbox-border-radius</code></td>
                <td>string</td>
                <td><code>$border-radius</code></td>
                <td>
                    Border radius for custom styled checkbox inputs.
                </td>
            </tr>
            <tr>
                <td><code>$form-checkradio-checkbox-icon</code></td>
                <td>string</td>
                <td><code>str-replace(url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='#{$form-checkradio-checked-color}' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e"), "#", "%23")</code></td>
                <td>
                    Icon for custom styled checkbox inputs when in checked state.
                </td>
            </tr>
            <tr>
                <td><code>$form-checkradio-radio-border-radius</code></td>
                <td>string</td>
                <td><code>50%</code></td>
                <td>
                    Border radius for custom styled radio inputs.
                </td>
            </tr>
            <tr>
                <td><code>$form-checkradio-radio-icon</code></td>
                <td>string</td>
                <td><code>str-replace(url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='#{$form-checkradio-checked-color}'/%3e%3c/svg%3e"), "#", "%23")</code></td>
                <td>
                    Icon for custom styled radio inputs when in checked state.
                </td>
            </tr>
            <tr>
                <td><code>$form-checkradio-indeterminate-bg</code></td>
                <td>string</td>
                <td><code>$primary</code></td>
                <td>
                    Background color for custom styled checkbox inputs when in indeterminate state.
                </td>
            </tr>
            <tr>
                <td><code>$form-checkradio-checkbox-icon</code></td>
                <td>string</td>
                <td><code>str-replace(url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3e%3cpath stroke='#{$form-checkradio-checked-color}' d='M0 2h4'/%3e%3c/svg%3e"), "#", "%23")</code></td>
                <td>
                    Icon for custom styled checkbox inputs when in indeterminate state.
                </td>
            </tr>
            <tr>
                <td><code>$form-switch-width</code></td>
                <td>string</td>
                <td><code>1.75em</code></td>
                <td>
                    Width for custom styled switch inputs.
                </td>
            </tr>
            <tr>
                <td><code>$form-switch-gutter</code></td>
                <td>string</td>
                <td><code>calc(#{$form-switch-width} + .375em)</code></td>
                <td>
                    Reserved spacing width for custom styled checkbox and radio inputs.
                </td>
            </tr>
            <tr>
                <td><code>$form-switch-track-height</code></td>
                <td>string</td>
                <td><code>1em</code></td>
                <td>
                    Height for track of custom styled switch inputs.
                </td>
            </tr>
            <tr>
                <td><code>$form-switch-track-bg</code></td>
                <td>string</td>
                <td><code>$white</code></td>
                <td>
                    Background color for track of custom styled switch inputs in inactive state.
                </td>
            </tr>
            <tr>
                <td><code>$form-switch-track-border-width</code></td>
                <td>string</td>
                <td><code>$input-border-width</code></td>
                <td>
                    Border width for track of custom styled switch inputs.
                </td>
            </tr>
            <tr>
                <td><code>$form-switch-track-border-color</code></td>
                <td>string</td>
                <td><code>$input-border-color</code></td>
                <td>
                    Border color for track of custom styled switch inputs in inactive state.
                </td>
            </tr>
            <tr>
                <td><code>$form-switch-track-border-radius</code></td>
                <td>string</td>
                <td><code>$white</code></td>
                <td>
                    Border radius for track of custom styled switch inputs.
                </td>
            </tr>
            <tr>
                <td><code>$form-switch-track-box-shadow</code></td>
                <td>string</td>
                <td><code>$input-box-shadow</code></td>
                <td>
                    Box shadow for track of custom styled switch inputs.
                </td>
            </tr>
            <tr>
                <td><code>$form-switch-track-focus-bg</code></td>
                <td>string</td>
                <td><code>null</code></td>
                <td>
                    Background color for track of custom styled switch inputs in focused state.
                </td>
            </tr>
            <tr>
                <td><code>$form-switch-track-focus-border-color</code></td>
                <td>string</td>
                <td><code>$input-focus-border-color</code></td>
                <td>
                    Border color for track of custom styled switch inputs in focused state.
                </td>
            </tr>
            <tr>
                <td><code>$form-switch-track-focus-box-shadow</code></td>
                <td>string</td>
                <td><code>$input-focus-box-shadow</code></td>
                <td>
                    Box shadow for track of custom styled switch inputs in focused state.
                </td>
            </tr>
            <tr>
                <td><code>$form-switch-track-checked-bg</code></td>
                <td>string</td>
                <td><code>$primary</code></td>
                <td>
                    Background color for track of custom styled switch inputs in checked state.
                </td>
            </tr>
            <tr>
                <td><code>$form-switch-track-checked-border-color</code></td>
                <td>string</td>
                <td><code>$primary</code></td>
                <td>
                    Border color for track of custom styled switch inputs in checked state.
                </td>
            </tr>
            <tr>
                <td><code>$form-switch-thumb-offset</code></td>
                <td>string</td>
                <td><code>calc(.25em - #{$form-switch-track-border-width})</code></td>
                <td>
                    Horizontal offset for thumb of custom styled switch inputs.
                </td>
            </tr>
            <tr>
                <td><code>$form-switch-thumb-width</code></td>
                <td>string</td>
                <td><code>.625em</code></td>
                <td>
                    Width for thumb of custom styled switch inputs.
                </td>
            </tr>
            <tr>
                <td><code>$form-switch-thumb-height</code></td>
                <td>string</td>
                <td><code>.625em</code></td>
                <td>
                    Height for thumb of custom styled switch inputs.
                </td>
            </tr>
            <tr>
                <td><code>$form-switch-thumb-bg</code></td>
                <td>string</td>
                <td><code>$uibase-300</code></td>
                <td>
                    Background color for thumb of custom styled switch inputs in inactive state.
                </td>
            </tr>
            <tr>
                <td><code>$form-switch-thumb-border-width</code></td>
                <td>string</td>
                <td><code>$border-width</code></td>
                <td>
                    Border width for thumb of custom styled switch inputs.
                </td>
            </tr>
            <tr>
                <td><code>$form-switch-thumb-border-color</code></td>
                <td>string</td>
                <td><code>$form-switch-thumb-bg</code></td>
                <td>
                    Border color for thumb of custom styled switch inputs.
                </td>
            </tr>
            <tr>
                <td><code>$form-switch-thumb-border-radius</code></td>
                <td>string</td>
                <td><code>50%</code></td>
                <td>
                    Border radius for thumb of custom styled switch inputs.
                </td>
            </tr>
            <tr>
                <td><code>$form-switch-thumb-box-shadow</code></td>
                <td>string</td>
                <td><code>$input-box-shadow</code></td>
                <td>
                    Box shadow for thumb of custom styled switch inputs.
                </td>
            </tr>
            <tr>
                <td><code>$form-switch-thumb-focus-bg</code></td>
                <td>string</td>
                <td><code>palette($primary, 300)</code></td>
                <td>
                    Background color for thumb of custom styled switch inputs in focused state.
                </td>
            </tr>
            <tr>
                <td><code>$form-switch-thumb-focus-border-color</code></td>
                <td>string</td>
                <td><code>$form-switch-thumb-focus-bg</code></td>
                <td>
                    Border color for thumb of custom styled switch inputs in focused state.
                </td>
            </tr>
            <tr>
                <td><code>$form-switch-thumb-focus-border-color</code></td>
                <td>string</td>
                <td><code>$form-switch-thumb-focus-bg</code></td>
                <td>
                    Border color for thumb of custom styled switch inputs in focused state.
                </td>
            </tr>
            <tr>
                <td><code>$form-switch-thumb-focus-box-shadow</code></td>
                <td>string</td>
                <td><code>$input-focus-box-shadow</code></td>
                <td>
                    Box shadow for thumb of custom styled switch inputs in focused state.
                </td>
            </tr>
            <tr>
                <td><code>$form-switch-thumb-checked-bg</code></td>
                <td>string</td>
                <td><code>$white</code></td>
                <td>
                    Background color for thumb of custom styled switch inputs in checked state.
                </td>
            </tr>
            <tr>
                <td><code>$form-switch-thumb-checked-border-color</code></td>
                <td>string</td>
                <td><code>$white</code></td>
                <td>
                    Border color for thumb of custom styled switch inputs in checked state.
                </td>
            </tr>
            <tr>
                <td><code>$form-select-indicator-offset</code></td>
                <td>string</td>
                <td><code>.375rem</code></td>
                <td>
                    Additional horizontal spacing of visual indicator for custom select input.
                </td>
            </tr>
            <tr>
                <td><code>$form-select-indicator-width</code></td>
                <td>string</td>
                <td><code>.75em</code></td>
                <td>
                    Width of visual indicator for custom select input.
                </td>
            </tr>
            <tr>
                <td><code>$form-select-indicator-height</code></td>
                <td>string</td>
                <td><code>.75em</code></td>
                <td>
                    Height of visual indicator for custom select input.
                </td>
            </tr>
            <tr>
                <td><code>$form-select-indicator-color</code></td>
                <td>string</td>
                <td><code>.rgba($uibase-700, .85)</code></td>
                <td>
                    Color of visual indicator for custom select input.
                </td>
            </tr>
            <tr>
                <td><code>$form-select-indicator-image</code></td>
                <td>string</td>
                <td><code>str-replace(url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='#{$form-select-indicator-color}' d='M3 0l-3 3h6l-3-3zm-3 5l3 3 3-3h-6z'/%3e%3c/svg%3e"), "#", "%23")</code></td>
                <td>
                    Icon for visual indicator of custom select input.
                </td>
            </tr>
            <tr>
                <td><code>$form-select-indicator</code></td>
                <td>string</td>
                <td><code>$form-select-indicator-image no-repeat right $form-select-indicator-offset center / $form-select-indicator-width $form-select-indicator-height</code></td>
                <td>
                    Used so we can have multiple background elements (e.g., arrow and feedback icon).
                </td>
            </tr>
            <tr>
                <td><code>$form-file-button-color</code></td>
                <td>string</td>
                <td><code>$uibase-600</code></td>
                <td>
                    Button text color for file input.
                </td>
            </tr>
            <tr>
                <td><code>$form-file-button-bg</code></td>
                <td>string</td>
                <td><code>$uibase-50</code></td>
                <td>
                    Button background color for file input.
                </td>
            </tr>
            <tr>
                <td><code>$form-file-button-disabled-color</code></td>
                <td>string</td>
                <td><code>$component-disabled-color</code></td>
                <td>
                    Button text color for file input when in disabled state.
                </td>
            </tr>
            <tr>
                <td><code>$form-file-button-disabled-bg</code></td>
                <td>string</td>
                <td><code>$uibase-50</code></td>
                <td>
                    Button background color for file input when in disabled state.
                </td>
            </tr>
            <tr>
                <td><code>$form-file-button-disabled-opacity</code></td>
                <td>string</td>
                <td><code>1</code></td>
                <td>
                    Button opacity for file input when in disabled state.
                </td>
            </tr>
            <tr>
                <td><code>$form-range-track-height</code></td>
                <td>string</td>
                <td><code>.5em</code></td>
                <td>
                    Height of track for custom range input.
                </td>
            </tr>
            <tr>
                <td><code>$form-range-track-cursor</code></td>
                <td>string</td>
                <td><code>pointer</code></td>
                <td>
                    Pointer style of track for custom range input.
                </td>
            </tr>
            <tr>
                <td><code>$form-range-track-bg</code></td>
                <td>string</td>
                <td><code>$uibase-100</code></td>
                <td>
                    Background color of track for custom range input.
                </td>
            </tr>
            <tr>
                <td><code>$form-range-border</code></td>
                <td>string</td>
                <td><code>0</code></td>
                <td>
                    Border style of track for custom range input.
                </td>
            </tr>
            <tr>
                <td><code>$form-range-track-border-radius</code></td>
                <td>string</td>
                <td><code>$form-range-track-height</code></td>
                <td>
                    Border radius of track for custom range input.
                </td>
            </tr>
            <tr>
                <td><code>$form-range-track-box-shadow</code></td>
                <td>string</td>
                <td><code>map-get($shadows, "i1")</code></td>
                <td>
                    Box shadow of track for custom range input.
                </td>
            </tr>
            <tr>
                <td><code>$form-range-thumb-width</code></td>
                <td>string</td>
                <td><code>1.125em</code></td>
                <td>
                    Width of thumb for custom range input.
                </td>
            </tr>
            <tr>
                <td><code>$form-range-thumb-height</code></td>
                <td>string</td>
                <td><code>$form-range-thumb-width</code></td>
                <td>
                    Height of thumb for custom range input.
                </td>
            </tr>
            <tr>
                <td><code>$form-range-thumb-bg</code></td>
                <td>string</td>
                <td><code>$primary</code></td>
                <td>
                    Background color of thumb for custom range input.
                </td>
            </tr>
            <tr>
                <td><code>$form-range-thumb-border</code></td>
                <td>string</td>
                <td><code>0</code></td>
                <td>
                    Border style of thumb for custom range input.
                </td>
            </tr>
            <tr>
                <td><code>$form-range-thumb-border-radius</code></td>
                <td>string</td>
                <td><code>50%</code></td>
                <td>
                    Border radius of thumb for custom range input.
                </td>
            </tr>
            <tr>
                <td><code>$form-range-thumb-box-shadow</code></td>
                <td>string</td>
                <td><code>map-get($shadows, "d1")</code></td>
                <td>
                    Box shadow of thumb for custom range input.
                </td>
            </tr>
            <tr>
                <td><code>$form-range-thumb-focus-box-shadow</code></td>
                <td>string</td>
                <td><code>$input-focus-box-shadow</code></td>
                <td>
                    Box shadow of thumb for custom range input in focus state.
                </td>
            </tr>
            <tr>
                <td><code>$form-range-thumb-focus-box-shadow-width</code></td>
                <td>string</td>
                <td><code>.1875rem</code></td>
                <td>
                    Width of box shadow of thumb for custom range input in focus state.
                </td>
            </tr>
            <tr>
                <td><code>$form-range-thumb-active-bg</code></td>
                <td>string</td>
                <td><code>palette($primary, 600)</code></td>
                <td>
                    Background color of thumb for custom range input in active state.
                </td>
            </tr>
            <tr>
                <td><code>$form-range-thumb-disabled-bg</code></td>
                <td>string</td>
                <td><code>$uibase-300</code></td>
                <td>
                    Background color of thumb for custom range input in disabled state.
                </td>
            </tr>
            <tr>
                <td><code>$form-range-height</code></td>
                <td>string</td>
                <td><code>calc(#{$form-range-thumb-height} + (#{$form-range-thumb-focus-box-shadow-width} * 2))</code></td>
                <td>
                    Height of custom range input.
                </td>
            </tr>
            <tr>
                <td><code>$form-range-min-width</code></td>
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
                <td><code>.25em</code></td>
                <td>
                    Additional horizontal spacing of visual feedback indicator icon.
                </td>
            </tr>
            <tr>
                <td><code>$form-feedback-icon-width</code></td>
                <td>string</td>
                <td><code>1em</code></td>
                <td>
                    Width of visual feedback indicator icon.
                </td>
            </tr>
            <tr>
                <td><code>$form-feedback-icon-height</code></td>
                <td>string</td>
                <td><code>1em</code></td>
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
                <td>string</td>
                <td><code>background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out</code></td>
                <td>
                    Transition effect for inputs.
                </td>
            </tr>
            <tr>
                <td><code>$switch-transition</code></td>
                <td>string</td>
                <td><code>all .15s ease-in-out</code></td>
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

#### form-range-track()
{:.no_toc}

Add the common, cross-browser rules for track of a range input.

{% highlight sass %}
@include form-range-track()
{% endhighlight %}

#### form-range-thumb
{:.no_toc}

Add the common, cross-browser rules for thumb of a range input.

{% highlight sass %}
@include form-range-thumb()
{% endhighlight %}
