---
layout: docs
title: Switch
group: components
---

Turn checkboxes and radio buttons into toggle switches without the need for JavaScript.

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Overview

Similar to our [Custom Checkbox and Radio form inputs]({{ site.baseurl }}/content/forms/#checkboxes-and-radios-1), we use a wrapping `<label>`, a hidden `<input>`, and the sibling selector (`~`) to control styling based on the `<input>`'s state.

Switches are height aligned to the to the `.form-control` inputs.  Currently, switches, have not been considered for placement within Input Groups.

Switches may also contain a textual description on either side of the toggle control, Note that any `.switch-description` items must be placed **after** the `<input.switch-input>` element in order to be properly styled.  Be sure to provide some form of label for assistive technologies, however you can hide the description with `.sr-only` or use some other method, such as by using aria-label, to hide the label desciption but keep accessibility.

## Checkboxes

{% example html %}
<label class="switch">
    <input type="checkbox" class="switch-input">
    <span class="switch-description">Off</span>
    <span class="switch-control"></span>
    <span class="switch-description">On</span>
</label>
{% endexample %}

## Radios

{% example html %}
<div class="form-group">
    <label class="switch">
        <input type="radio" class="switch-input" name="radioEx0" checked>
        <span class="switch-control"></span>
        <span class="switch-description">Option one</span>
    </label>
</div>
<div class="form-group">
    <label class="switch">
        <input type="radio" class="switch-input" name="radioEx0">
        <span class="switch-control"></span>
        <span class="switch-description">Option two</span>
    </label>
</div>
{% endexample %}

## Reversed

Reverse the direction that the toggle switch moves by using `.switch-reverse` modifier class.

{% example html %}
<label class="switch switch-reverse">
    <input type="checkbox" class="switch-input">
    <span class="switch-description">On</span>
    <span class="switch-control"></span>
    <span class="switch-description">Off</span>
</label>
{% endexample %}

## Rounded

Use the `.switch-rounded` modifier class to make switches more rounded.

{% example html %}
<label class="switch switch-rounded">
    <input type="checkbox" class="switch-input">
    <span class="switch-description">Off</span>
    <span class="switch-control"></span>
    <span class="switch-description">On</span>
</label>
{% endexample %}

## Disabled

Switches can also be disabled. Add the `disabled` boolean attribute to the `<input>` and the custom control and label descriptions will be automatically styled.

{% example html %}
<label class="switch mr-1">
    <input type="checkbox" class="switch-input" disabled>
    <span class="switch-control"></span>
    <span class="switch-description">Disabled checkbox</span>
</label>
<label class="switch">
    <input type="radio" class="switch-input" disabled>
    <span class="switch-control"></span>
    <span class="switch-description">Disabled radio</span>
</label>
{% endexample %}

## Sizing

Want a smaller or larger switch?  Add `.switch-xs`, `.switch-sm`, `.switch-lg`, or `.switch-xl` for additional sizes.

{% example html %}
<label class="switch switch-xs mr-1">
    <input type="checkbox" class="switch-input">
    <span class="switch-control"></span>
    <span class="switch-description">Extra small</span>
</label>
<label class="switch switch-sm mr-1">
    <input type="checkbox" class="switch-input">
    <span class="switch-control"></span>
    <span class="switch-description">Small</span>
</label>
<label class="switch mr-1">
    <input type="checkbox" class="switch-input">
    <span class="switch-control"></span>
    <span class="switch-description">Default</span>
</label>
<label class="switch switch-lg mr-1">
    <input type="checkbox" class="switch-input">
    <span class="switch-control"></span>
    <span class="switch-description">Large</span>
</label>
<label class="switch switch-xl mr-1">
    <input type="checkbox" class="switch-input">
    <span class="switch-control"></span>
    <span class="switch-description">Extra large</span>
</label>
{% endexample %}

Sizing also works for rounded switches.

{% example html %}
<label class="switch switch-rounded switch-xs mr-1">
    <input type="checkbox" class="switch-input">
    <span class="switch-control"></span>
    <span class="switch-description">Extra small</span>
</label>
<label class="switch switch-rounded switch-sm mr-1">
    <input type="checkbox" class="switch-input">
    <span class="switch-control"></span>
    <span class="switch-description">Small</span>
</label>
<label class="switch switch-rounded mr-1">
    <input type="checkbox" class="switch-input">
    <span class="switch-control"></span>
    <span class="switch-description">Default</span>
</label>
<label class="switch switch-rounded switch-lg mr-1">
    <input type="checkbox" class="switch-input">
    <span class="switch-control"></span>
    <span class="switch-description">Large</span>
</label>
<label class="switch switch-rounded switch-xl mr-1">
    <input type="checkbox" class="switch-input">
    <span class="switch-control"></span>
    <span class="switch-description">Extra large</span>
</label>
{% endexample %}

## Contextual Variations

Use contextual modifier classes to alter the color of the switch.

{% callout warning %}
Conveying Meaning to Assistive Technologies
{:.h5}

Please refer to the [Accessiblity notes about conveying meaning with color]({{ site.baseurl }}/get-started/accessibility/#conveying-meaning-with-color).
{% endcallout %}

{% example html %}
<div class="form-group">
    <label class="switch">
        <input type="checkbox" class="switch-input">
        <span class="switch-control"></span>
        <span class="switch-description">Default</span>
    </label>
</div>
<div class="form-group">
    <label class="switch switch-primary">
        <input type="checkbox" class="switch-input">
        <span class="switch-control"></span>
        <span class="switch-description">Primary</span>
    </label>
</div>
<div class="form-group">
    <label class="switch switch-secondary">
        <input type="checkbox" class="switch-input">
        <span class="switch-control"></span>
        <span class="switch-description">Secondary</span>
    </label>
</div>
<div class="form-group">
    <label class="switch switch-success">
        <input type="checkbox" class="switch-input">
        <span class="switch-control"></span>
        <span class="switch-description">Success</span>
    </label>
</div>
<div class="form-group">
    <label class="switch switch-info">
        <input type="checkbox" class="switch-input">
        <span class="switch-control"></span>
        <span class="switch-description">Info</span>
    </label>
</div>
<div class="form-group">
    <label class="switch switch-warning">
        <input type="checkbox" class="switch-input">
        <span class="switch-control"></span>
        <span class="switch-description">Warning</span>
    </label>
</div>
<div class="form-group">
    <label class="switch switch-danger">
        <input type="checkbox" class="switch-input">
        <span class="switch-control"></span>
        <span class="switch-description">Danger</span>
    </label>
</div>
{% endexample %}