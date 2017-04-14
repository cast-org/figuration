---
layout: docs
title: Button
subtitle: button.js
group: widgets
---

Do more with buttons. Control button states or create groups of buttons for more components like toolbars.

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Examples

### Toggle State

Add `data-cfw="button"` to toggle a button's `active` and `aria-pressed` states. If you're pre-toggling a button, you must manually add the `.active` class to the `<button>`, the `aria-pressed="true"` will be added automatically by the widget.

{% example html %}
<button type="button" data-cfw="button" class="btn btn-info">Single toggle</button>
<button type="button" data-cfw="button" class="btn btn-info active">Pre-selected toggle</button>
{% endexample %}

### Checkbox and Radio Buttons

Our `.btn` styles can be applied to other elements, such as `<label>`s, to provide checkbox or radio style button toggling. Add `data-toggle="buttons"` to a `.btn-group` containing those modified buttons to enable toggling in their respective styles.

The checked state for these buttons is **only updated via `click` event** on the button. If you use another method to update the input---e.g., with `<input type="reset">` or by manually applying the input's `checked` property---you'll need to toggle `.active` **and** `aria-pressed` on the `<label>` manually.

Note that pre-checked buttons will automatically add the `.active` class  and `aria-pressed` attribute to the input's `<label>` when initialized by the Button widget.

{% example html %}
<div class="btn-group" data-cfw="buttons">
    <label class="btn btn-info">
        <input type="checkbox" checked>Checkbox 1 (pre-checked)
    </label>
    <label class="btn btn-info">
        <input type="checkbox">Checkbox 2
    </label>
    <label class="btn btn-info">
        <input type="checkbox">Checkbox 3
    </label>
</div>
{% endexample %}

{% example html %}
<div class="btn-group" data-cfw="buttons">
    <label class="btn btn-info">
        <input type="radio" name="options" checked> Radio 1 (pre-selected)
    </label>
    <label class="btn btn-info">
        <input type="radio" name="options"> Radio 2
    </label>
    <label class="btn btn-info">
        <input type="radio" name="options"> Radio 3
    </label>
</div>
{% endexample %}

### Grouped Buttons

You could also use `.btn`s inside a `.btn-group` for interface controls.

{% example html %}
<div class="btn-group" data-cfw="buttons">
    <button class="btn" type="button">One</button>
    <button class="btn active" type="button">Two</button>
    <button class="btn" type="button">Three</button>
</div>
{% endexample %}

### Disabled Buttons

The button widget will not toggle items that have either a `disabled` class or attribute on the button or input elements.  Note that you will need to add the `.disabled` class on the `.btn` element in order to convey the **visually** disabled state.

{% example html %}
<div class="btn-group" data-cfw="buttons">
    <button class="btn btn-info disabled" type="button">Disabled Button</button>
    <label class="btn btn-info disabled">
        <input type="checkbox" disabled>Disabled Checkbox
    </label>
    <label class="btn btn-info disabled">
        <input type="radio" name="optionsD" disabled>Disabled Radio
    </label>
</div>
{% endexample %}

## Usage

### Via Data Attributes

See the above examples to determine the appropriate data attribute for your use case.

Typically, use `data-cfw="button"` on a single button for toggle, and 'data-cfw="buttons"` on a ancestor element for grouped buttons.

### Via JavaScript

Enable manually with:

{% highlight js %}
$('#myCollapse').CFW_Button();
{% endhighlight %}

### Options

None.

### Methods

#### `.CFW_Button()`
{:.no_toc}

Activate a single or group of buttons to act as toggles.

#### `.CFW_Button('toggle')`
{:.no_toc}

Toggles push state. Changes the button the appearance and `aria-pressed` state to indicate that it has been activated or deactivated.

#### `.CFW_Button('dispose')`
{:.no_toc}

Removes the toggle functionality for a single or group of buttons.  This will leave the button or group of buttons in their current state.

## Accessibility

### Widget Initialization

If used on a group of buttons using the `data-toggle="buttons"`, the Button widget will initialize individually on each descendant `.btn` element.

Upon initialization, the Button widget will automatically apply the visual `.active` class and the `aria-pressed` attribute in the following manner.
1. Check to see if the button item contains an `<input>`:
    - Update the `.active` state based on the state of the `checked` property.  The class will be added if the property is present, or removed if not present.
2. If the button item does not contain an `<input>`, the visual active state will not be modified.
3. Finally, `aria-pressed="true"` is set if the button item has the `.active` class, or set to `aria-pressed="false"` if the class is not set.

### Toggle
Somewhat similar to the initialization phase, the property, class, and attributes are set the same order.
1. Check to see if the button item contains an `<input>`:
    - If the button item is in a set of `type="radio"` elements, unset/deactivate the currently active radio input.
    - Activate the state of the `checked` property for the toggled item.
2. Toggle the state of the visual `.active` class by adding or removing.
3. Finally, `aria-pressed="true"` is set if the button item has the `.active` class, or set to `aria-pressed="false"` if the class is not set.

### Visual Focus
For button items that contain an `<input>` element, the focus needs to be placed on the `<input>` itself so interaction is possible.  To assist in visual cues, a visual `.focus` class is added to the `.btn` element when the descendant `<input>` receives focus, and removed upon loss of focus.
