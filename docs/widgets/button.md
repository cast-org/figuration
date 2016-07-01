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

Add `data-cfw="button"` to toggle a button's `active` state. If you're pre-toggling a button, you must manually add the `.active` class and `aria-pressed="true"` to the `<button>`.

{% example html %}
<button type="button" data-cfw="button" class="btn btn-primary">Single toggle</button>
{% endexample %}

### Checkbox and Radio Buttons

Our `.button` styles can be applied to other elements, such as `<label>`s, to provide checkbox or radio style button toggling. Add `data-toggle="buttons"` to a `.btn-group` containing those modified buttons to enable toggling in their respective styles.

The checked state for these buttons is **only updated via `click` event** on the button. If you use another method to update the input---e.g., with `<input type="reset">` or by manually applying the input's `checked` property---you'll need to toggle `.active` on the `<label>` manually.

Note that pre-checked buttons require you to manually add the `.active` class to the input's `<label>`.

{% example html %}
<div class="btn-group" data-cfw="buttons">
    <label class="btn btn-primary active">
        <input type="checkbox" checked>Checkbox 1 (pre-checked)
    </label>
    <label class="btn btn-primary">
        <input type="checkbox">Checkbox 2
    </label>
    <label class="btn btn-primary">
        <input type="checkbox">Checkbox 3
    </label>
</div>
{% endexample %}

{% example html %}
<div class="btn-group" data-cfw="buttons">
    <label class="btn btn-primary active">
        <input type="radio" name="options" checked> Radio 1 (preselected)
    </label>
    <label class="btn btn-primary">
        <input type="radio" name="options"> Radio 2
    </label>
    <label class="btn btn-primary">
        <input type="radio" name="options"> Radio 3
    </label>
</div>
{% endexample %}

## Usage

### Methods

#### `.CFW_Button('toggle')`
{:.no_toc}

Toggles push state. Gives the button the appearance that it has been activated.
