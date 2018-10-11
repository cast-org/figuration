---
layout: docs
title: Buttons
group: content
---

<!-- Font CSS -->
{% if site.github %}
  <link href="{{ site.cdn.fontawe }}" integrity="{{ site.cdn.fontawe_hash }}" crossorigin="anonymous" rel="stylesheet" property="stylesheet">
{% else %}
  <link href="{{ site.baseurl }}/assets/fonts/fontawesome/css/fontawesome-all.css" rel="stylesheet" property="stylesheet">
{% endif %}

Use Figuration's custom button styles for actions in forms, dialogs, and more. Includes support for a handful of contextual variations, sizes, states, and more.

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Examples

Figuration includes a few predefined button styles, each serving its own semantic purpose.

{% callout warning %}
Conveying Meaning to Assistive Technologies
{:.h5}

Please refer to the [Accessiblity notes about conveying meaning with color]({{ site.baseurl }}/get-started/accessibility/#conveying-meaning-with-color).
{% endcallout %}

{% example html %}
<button type="button" class="btn">Default</button>
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>
<button type="button" class="btn btn-link">Link</button>
{% endexample %}

## Button Tags

The `.btn` classes are designed to be used with the `<button>` element. However, you can also use these classes on `<a>` or `<input>` elements (though some browsers may apply a slightly different rendering).

When using button classes on `<a>` elements that are used to trigger in-page functionality (like collapsing content), rather than linking to new pages or sections within the current page, these links should be given a `role="button"` to appropriately convey their purpose to assistive technologies such as screen readers.

{% example html %}
<a class="btn btn-primary" href="#" role="button">Link</a>
<button class="btn btn-primary" type="submit">Button</button>
<input class="btn btn-primary" type="button" value="Input">
<input class="btn btn-primary" type="submit" value="Submit">
<input class="btn btn-primary" type="reset" value="Reset">
{% endexample %}

## Outline Buttons

In need of a button, but not the hefty background colors they bring? Replace the default modifier classes with the `.btn-outline-*` ones to remove all background images and colors on any button.

{% example html %}
<button type="button" class="btn btn-outline">Default</button>
<button type="button" class="btn btn-outline-primary">Primary</button>
<button type="button" class="btn btn-outline-secondary">Secondary</button>
<button type="button" class="btn btn-outline-success">Success</button>
<button type="button" class="btn btn-outline-info">Info</button>
<button type="button" class="btn btn-outline-warning">Warning</button>
<button type="button" class="btn btn-outline-danger">Danger</button>
<button type="button" class="btn btn-outline-light">Light</button>
<button type="button" class="btn btn-outline-dark">Dark</button>
{% endexample %}

## Sizes

### Available Sizes

Fancy larger or smaller buttons? Add `.btn-xsmall`, `.btn-small`, `.btn-large`, or `.btn-xlarge` for additional sizes.

{% example html %}
<p>
  <button type="button" class="btn btn-primary btn-xlarge">Extra Large button</button>
  <button type="button" class="btn btn-xlarge">Extra Large button</button>
</p>
<p>
  <button type="button" class="btn btn-primary btn-large">Large button</button>
  <button type="button" class="btn btn-large">Large button</button>
</p>
<p>
  <button type="button" class="btn btn-primary">Default button</button>
  <button type="button" class="btn">Default button</button>
</p>
<p>
  <button type="button" class="btn btn-primary btn-small">Small button</button>
  <button type="button" class="btn btn-small">Small button</button>
</p>
<p>
  <button type="button" class="btn btn-primary btn-xsmall">Extra small button</button>
  <button type="button" class="btn btn-xsmall">Extra small button</button>
</p>
{% endexample %}

## Icon Button

If a button only contains an icon, you can use `.btn-icon` to reduce the horizontal `padding` of the button.  This will create more of a square button rather than a rectangular one using the default padding.

The icons shown in the examples are from [Font Awesome](https://fontawesome.com/), and not included with Figuration.

{% example html %}
<p>
  <button type="button" class="btn btn-icon btn-xlarge" aria-label="Extra large icon button"><span class="fas fa-fw fa-info-circle" aria-hidden="true"></span></button>
</p>
<p>
  <button type="button" class="btn btn-icon btn-large" aria-label="Large icon button"><span class="fas fa-fw fa-info-circle" aria-hidden="true"></span></button>
</p>
<p>
  <button type="button" class="btn btn-icon" aria-label="Default size icon button"><span class="fas fa-fw fa-info-circle" aria-hidden="true"></span></button>
</p>
<p>
  <button type="button" class="btn btn-icon btn-small" aria-label="Small icon button"><span class="fas fa-fw fa-info-circle" aria-hidden="true"></span></button>
</p>
<p>
  <button type="button" class="btn btn-icon btn-xsmall" aria-label="Extra small icon button"><span class="fas fa-fw fa-info-circle" aria-hidden="true"></span></button>
</p>
{% endexample %}

### Block Buttons

Create block level buttons---those that span the full width of a parent---by adding `.btn-block`.

{% example html %}
<button type="button" class="btn btn-primary btn-xlarge btn-block">Extra Large Block level button</button>
<button type="button" class="btn btn-secondary btn-large btn-block">Large Block level button</button>
<button type="button" class="btn btn-success btn-block">Default block level button</button>
<button type="button" class="btn btn-warning btn-small btn-block">Small Block level button</button>
<button type="button" class="btn btn-danger btn-xsmall btn-block">Extra Small Block level button</button>
{% endexample %}


## Active State

Buttons will appear pressed (with a darker background and border) when active. **There's no need to add a class to `<button>`s as they use the `:active` pseudo-class**. However, you can still force the same active appearance with `.active` (and include the <code>aria-pressed="true"</code> attribute) should you need to replicate the state programmatically.

{% example html %}
<strong>Standard Buttons:</strong>
<p>
<button type="button" class="btn active">Default</button>
<button type="button" class="btn btn-primary active">Primary</button>
<button type="button" class="btn btn-secondary active">Secondary</button>
<button type="button" class="btn btn-success active">Success</button>
<button type="button" class="btn btn-info active">Info</button>
<button type="button" class="btn btn-warning active">Warning</button>
<button type="button" class="btn btn-danger active">Danger</button>
<button type="button" class="btn btn-light active">Light</button>
<button type="button" class="btn btn-dark active">Dark</button>
<button type="button" class="btn btn-link active">Link</button>
</p>

<strong>Outline Buttons:</strong>
<p>
<button type="button" class="btn btn-outline active">Default</button>
<button type="button" class="btn btn-outline-primary active">Primary</button>
<button type="button" class="btn btn-outline-secondary active">Secondary</button>
<button type="button" class="btn btn-outline-success active">Success</button>
<button type="button" class="btn btn-outline-info active">Info</button>
<button type="button" class="btn btn-outline-warning active">Warning</button>
<button type="button" class="btn btn-outline-danger active">Danger</button>
<button type="button" class="btn btn-outline-light active">Light</button>
<button type="button" class="btn btn-outline-dark active">Dark</button>
</p>
{% endexample %}

## Disabled State

Make buttons look inactive by adding the `disabled` boolean attribute to any `<button>` element.

{% example html %}
<strong>Standard Buttons:</strong>
<p>
<button type="button" class="btn" disabled>Default</button>
<button type="button" class="btn btn-primary" disabled>Primary</button>
<button type="button" class="btn btn-secondary" disabled>Secondary</button>
<button type="button" class="btn btn-success" disabled>Success</button>
<button type="button" class="btn btn-info" disabled>Info</button>
<button type="button" class="btn btn-warning" disabled>Warning</button>
<button type="button" class="btn btn-danger" disabled>Danger</button>
<button type="button" class="btn btn-light" disabled>Light</button>
<button type="button" class="btn btn-dark" disabled>Dark</button>
<button type="button" class="btn btn-link" disabled>Link</button>
</p>

<strong>Outline Buttons:</strong>
<p>
<button type="button" class="btn btn-outline" disabled>Default</button>
<button type="button" class="btn btn-outline-primary" disabled>Primary</button>
<button type="button" class="btn btn-outline-secondary" disabled>Secondary</button>
<button type="button" class="btn btn-outline-success" disabled>Success</button>
<button type="button" class="btn btn-outline-info" disabled>Info</button>
<button type="button" class="btn btn-outline-warning" disabled>Warning</button>
<button type="button" class="btn btn-outline-danger" disabled>Danger</button>
<button type="button" class="btn btn-outline-light" disabled>Light</button>
<button type="button" class="btn btn-outline-dark" disabled>Dark</button>
</p>
{% endexample %}

Disabled buttons using the `<a>` element behave a bit different:

{% callout warning %}
Disabling Anchors
{:.h5}

Please refer to the [Accessiblity notes about disabled anchors]({{ site.baseurl }}/get-started/accessibility/#disabled-anchors).
{% endcallout %}

{% example html %}
<strong>Anchor Standard Buttons:</strong>
<p>
<a href="#" role="button" class="btn disabled" aria-disabled="true">Default</a>
<a href="#" role="button" class="btn btn-primary disabled" aria-disabled="true">Primary</a>
<a href="#" role="button" class="btn btn-secondary disabled" aria-disabled="true">Secondary</a>
<a href="#" role="button" class="btn btn-success disabled" aria-disabled="true">Success</a>
<a href="#" role="button" class="btn btn-info disabled" aria-disabled="true">Info</a>
<a href="#" role="button" class="btn btn-warning disabled" aria-disabled="true">Warning</a>
<a href="#" role="button" class="btn btn-danger disabled" aria-disabled="true">Danger</a>
<a href="#" role="button" class="btn btn-light disabled" aria-disabled="true">Light</a>
<a href="#" role="button" class="btn btn-dark disabled" aria-disabled="true">Dark</a>
<a href="#" role="button" class="btn btn-link disabled" aria-disabled="true">Link</a>

</p>

<strong>Anchor Outline Buttons:</strong>
<p>
<a href="#" role="button" class="btn btn-outline disabled" aria-disabled="true">Default</a>
<a href="#" role="button" class="btn btn-outline-primary disabled" aria-disabled="true">Primary</a>
<a href="#" role="button" class="btn btn-outline-secondary disabled" aria-disabled="true">Secondary</a>
<a href="#" role="button" class="btn btn-outline-success disabled" aria-disabled="true">Success</a>
<a href="#" role="button" class="btn btn-outline-info disabled" aria-disabled="true">Info</a>
<a href="#" role="button" class="btn btn-outline-warning disabled" aria-disabled="true">Warning</a>
<a href="#" role="button" class="btn btn-outline-danger disabled" aria-disabled="true">Danger</a>
<a href="#" role="button" class="btn btn-outline-light disabled" aria-disabled="true">Light</a>
<a href="#" role="button" class="btn btn-outline-dark disabled" aria-disabled="true">Dark</a>
</p>
{% endexample %}

## Checkbox and Radio Input Buttons

Figuration's `.btn` styles can be applied to checkbox and radio inputs as well. By using a wrapping `.btn-check` class, visually hiding the `<input>` with `.btn-check-input`, and the sibling selector (`~`) to control `.btn` styling based on the `<input>`'s state.
**A single class is used to consolidate layout and behavior of their HTML elements.**

The `<input>`s and `<label>`s are sibling elements as opposed to an `<input>` within a `<label>`. You will need to use `id` and `for` attributes to associate the `<input>` and `<label>` elements.

### Checkbox Input Button

{% example html %}
<div class="btn-check">
    <input id="checkbox0" type="checkbox" class="btn-check-input">
    <label for="checkbox0" class="btn">Checkbox Button</label>
</div>
{% endexample %}

### Radio Input Buttons

{% example html %}
<div class="btn-check">
    <input id="radio0-0" type="radio" name="radio0" class="btn-check-input" checked>
    <label for="radio0-0" class="btn">Radio 1</label>
</div>
<div class="btn-check">
    <input id="radio0-1" type="radio" name="radio0" class="btn-check-input">
    <label for="radio0-1" class="btn">Radio 2</label>
</div>
<div class="btn-check">
    <input id="radio0-2" type="radio" name="radio0" class="btn-check-input">
    <label for="radio0-2" class="btn">Radio 3</label>
</div>
{% endexample %}

### Disabled Input Buttons

Disabled checkboxes and radios are supported, you will need to add the `disabled` attribute to the `.btn-check-input`. This will also apply the disabled `.btn` styling to indicate the input's state.

{% example html %}
<div class="btn-check">
    <input id="checkbox1" type="checkbox" class="btn-check-input" disabled>
    <label for="checkbox1" class="btn">Disabled Checkbox</label>
</div>

<div class="btn-check">
    <input id="radio1-0" type="radio" name="radio1" class="btn-check-input" disabled>
    <label for="radio1-0" class="btn">Disabled Radio</label>
</div>
{% endexample %}

### Grouped Input Buttons

You can also use `.btn-check`s inside a `.btn-group` for grouping controls together.

{% example html %}
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
        <input id="radio2-2" type="radio" name="radio2" class="btn-check-input">
        <label for="radio2-2" class="btn btn-outline-info">Radio 3</label>
    </div>
</div>
{% endexample %}

## SASS Reference

### Variables

The available [Customization options]({{ site.baseurl }}/get-started/options/), or Sass variables, that can be customized for the button component.

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
                <td><code>$enable-btn</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the button component classes.
                    Smaller segements of the button component classes can be disabled with the following <code>$enable-*</code> variables.
                </td>
            </tr>
            <tr>
                <td><code>$enable-btn-default</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the default button color variant.
                </td>
            </tr>
            <tr>
                <td><code>$enable-btn-colors</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the button contextual color variants.
                </td>
            </tr>
            <tr>
                <td><code>$enable-btn-outline</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the default outline button color variant.
                </td>
            </tr>
            <tr>
                <td><code>$enable-btn-outline-colors</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the outline button contextual color variants.
                </td>
            </tr>
            <tr>
                <td><code>$enable-btn-link</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the link button variant.
                </td>
            </tr>
            <tr>
                <td><code>$enable-btn-sizes</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the button size classes.
                </td>
            </tr>
            <tr>
                <td><code>$enable-btn-icon</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the icon button classes.
                </td>
            </tr>
            <tr>
                <td><code>$enable-btn-icon-sizes</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the icon button size classes.
                </td>
            </tr>
            <tr>
                <td><code>$enable-btn-bock</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the block button variant.
                </td>
            </tr>
            <tr>
                <td><code>$enable-btn-check</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the checkbox and radio button variant.
                </td>
            </tr>
            <tr>
                <td><code>$btn-padding-y</code></td>
                <td>string</td>
                <td><code>.25rem</code></td>
                <td>
                    Base button vertical padding.
                </td>
            </tr>
            <tr>
                <td><code>$btn-padding-x</code></td>
                <td>string</td>
                <td><code>.75rem</code></td>
                <td>
                    Base button horizontal padding.
                </td>
            </tr>
            <tr>
                <td><code>$btn-font-weight</code></td>
                <td>string</td>
                <td><code>$font-weight-normal</code></td>
                <td>
                    Base button font weight.
                </td>
            </tr>
            <tr>
                <td><code>$btn-line-height</code></td>
                <td>string</td>
                <td><code>1.5</code></td>
                <td>
                    Base button line height.
                </td>
            </tr>
            <tr>
                <td><code>$btn-border-width</code></td>
                <td>string</td>
                <td><code>$border-width</code></td>
                <td>
                    Button border width.
                </td>
            </tr>
            <tr>
                <td><code>$btn-border-radius</code></td>
                <td>string</td>
                <td><code>$border-radius</code></td>
                <td>
                    Base button border-radius.
                </td>
            </tr>
            <tr>
                <td><code>$btn-box-shadow</code></td>
                <td>string</td>
                <td><code>inset 0 .125em .25em rgba($white, .25), 0 .125em .125em rgba($black, .075)</code></td>
                <td>
                    Button inner box shadow for inactive state.
                </td>
            </tr>
            <tr>
                <td><code>$btn-active-box-shadow</code></td>
                <td>string</td>
                <td><code>inset 0 .25em .3125em rgba($black, .125)</code></td>
                <td>
                    Button inner box shadow for active state.
                </td>
            </tr>
            <tr>
                <td><code>$btn-focus-box-shadow-size</code></td>
                <td>string</td>
                <td><code>0 0 0 .1875rem</code></td>
                <td>
                    Button box shadow dimensions for focus state.
                </td>
            </tr>
            <tr>
                <td><code>$btn-focus-box-shadow-alpha</code></td>
                <td>string</td>
                <td><code>.35</code></td>
                <td>
                    Button box shadow alpha, opacity, value for focus state.
                </td>
            </tr>
            <tr>
                <td><code>$btn-focus-box-shadow</code></td>
                <td>string</td>
                <td><code>$btn-focus-box-shadow-size rgba($component-active-bg, $btn-focus-box-shadow-alpha)</code></td>
                <td>
                    Button box shadow for focus state.
                </td>
            </tr>
            <tr>
                <td><code>$btn-outline-bg</code></td>
                <td>string</td>
                <td><code>transparent</code></td>
                <td>
                    Outline button background color override.
                </td>
            </tr>
            <tr>
                <td><code>$btn-disabled-opacity</code></td>
                <td>string</td>
                <td><code>.6</code></td>
                <td>
                    Opacity value for button disabled state.
                </td>
            </tr>
            <tr>
                <td><code>$btn-sizes</code></td>
                <td>map</td>
                <td><code>$component-sizes</code></td>
                <td>
                    Button size variants.
                </td>
            </tr>
            <tr>
                <td><code>$btn-block-spacing-y</code></td>
                <td>string</td>
                <td><code>.25rem</code></td>
                <td>
                    Vertical spacing between consecutive sibling block variant buttons.
                </td>
            </tr>
            <tr>
                <td><code>$btn-icon-multiplier</code></td>
                <td>string</td>
                <td><code>.625</code></td>
                <td>
                    Multiplier for horizontal padding of icon button variants.
                </td>
            </tr>
            <tr>
                <td><code>$btn-default-bg</code></td>
                <td>string</td>
                <td><code>$white</code></td>
                <td>
                    Default button background color.
                </td>
            </tr>
            <tr>
                <td><code>$btn-default-color</code></td>
                <td>string</td>
                <td><code>color-if-contrast($uibase-500, $btn-default-bg)</code></td>
                <td>
                    Default button text color.
                </td>
            </tr>
            <tr>
                <td><code>$btn-default-border-color</code></td>
                <td>string</td>
                <td><code>$uibase-300</code></td>
                <td>
                    Default button border color.
                </td>
            </tr>
            <tr>
                <td><code>$btn-default-focus-box-shadow-color</code></td>
                <td>string</td>
                <td><code>$component-active-bg</code></td>
                <td>
                    Default button box shadow color for focus state.
                </td>
            </tr>
            <tr>
                <td><code>$btn-default-hover-bg</code></td>
                <td>string</td>
                <td><code>$uibase-100</code></td>
                <td>
                    Default button background color for hover state.
                </td>
            </tr>
            <tr>
                <td><code>$btn-default-hover-color</code></td>
                <td>string</td>
                <td><code>color-if-contrast($uibase-600, $btn-default-hover-bg)</code></td>
                <td>
                    Default button text color for hover state.
                </td>
            </tr>
            <tr>
                <td><code>$btn-default-hover-border-color</code></td>
                <td>string</td>
                <td><code>$uibase-400</code></td>
                <td>
                    Default button border color for hover state.
                </td>
            </tr>
            <tr>
                <td><code>$btn-default-active-bg</code></td>
                <td>string</td>
                <td><code>$uibase-200</code></td>
                <td>
                    Default button background color for active state.
                </td>
            </tr>
            <tr>
                <td><code>$btn-default-active-color</code></td>
                <td>string</td>
                <td><code>color-if-contrast($btn-default-hover-color, $btn-default-active-bg)</code></td>
                <td>
                    Default button text color for active state.
                </td>
            </tr>
            <tr>
                <td><code>$btn-default-active-border-color</code></td>
                <td>string</td>
                <td><code>$uibase-400</code></td>
                <td>
                    Default button border color for active state.
                </td>
            </tr>
            <tr>
                <td><code>$btn-themes</code></td>
                <td>map</td>
                <td><code>()</code></td>
                <td>
                    Map of color schemes for buttons.
                </td>
            </tr>
            <tr>
                <td><code>$btn-colors</code></td>
                <td>list</td>
                <td><code>$base-colors</code></td>
                <td>
                    Colors to mix and merge into <code>$btn-themes</code>
                </td>
            </tr>
            <tr>
                <td><code>$btn-levels</code></td>
                <td>map</td>
                <td><code>$level-control</code></td>
                <td>
                    Levels to mix button colors with.
                </td>
            </tr>
            <tr>
                <td><code>$btn-outline-themes</code></td>
                <td>map</td>
                <td><code>()</code></td>
                <td>
                    Map of color schemes for outline buttons.
                </td>
            </tr>
            <tr>
                <td><code>$btn-outline-colors</code></td>
                <td>list</td>
                <td><code>$base-colors</code></td>
                <td>
                    Colors to mix and merge into <code>$btn-outline-themes</code>
                </td>
            </tr>
            <tr>
                <td><code>$btn-outline-levels</code></td>
                <td>map</td>
                <td><code>$level-control</code></td>
                <td>
                    Levels to mix outline button colors with.
                </td>
            </tr>
            <tr>
                <td><code>$btn-transition</code></td>
                <td>map</td>
                <td><code>color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out</code></td>
                <td>
                    Transition effect for buttons.
                </td>
            </tr>
        </tbody>
    </table>
</div>

### Mixins

Here are the mixins related to buttons that we use to help generate our CSS.  You can also uses these mixins to generate your own custom components or utilities.

#### button-variant
{:.no_toc}

Build a color variant to be applied to a button.

{% highlight sass %}
@include button-variant($parent, $color, $bg, $border, $focus-shadow, $hover-color, $hover-bg, $hover-border, $active-color, $active-bg, $active-border);
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
                <td><code>$parent</code></td>
                <td>string</td>
                <td><code>''</code></td>
                <td>
                    The value appended to generate the class <code>.btn-#{$parent}</code>.
                </td>
            </tr>
            <tr>
                <td><code>$color</code></td>
                <td>string</td>
                <td>none</td>
                <td>
                    Text color for the inactive button state.
                </td>
            </tr>
            <tr>
                <td><code>$bg</code></td>
                <td>string</td>
                <td>none</td>
                <td>
                    Background color for the inactive button state.
                </td>
            </tr>
            <tr>
                <td><code>$border</code></td>
                <td>string</td>
                <td>none</td>
                <td>
                    Border color for the inactive button state.
                </td>
            </tr>
            <tr>
                <td><code>$focus-shadow</code></td>
                <td>string</td>
                <td>none</td>
                <td>
                    Box shadow, or focus-ring, effect the focused button state.
                </td>
            </tr>
            <tr>
                <td><code>$hover-color</code></td>
                <td>string</td>
                <td>none</td>
                <td>
                    Text color for the hovered button state.
                </td>
            </tr>
            <tr>
                <td><code>$hover-bg</code></td>
                <td>string</td>
                <td>none</td>
                <td>
                    Background color for the hovered button state.
                </td>
            </tr>
            <tr>
                <td><code>$hover-border</code></td>
                <td>string</td>
                <td>none</td>
                <td>
                    Border color for the hovered button state.
                </td>
            </tr>
            <tr>
                <td><code>$active-color</code></td>
                <td>string</td>
                <td>none</td>
                <td>
                    Text color for the active button state.
                </td>
            </tr>
            <tr>
                <td><code>$active-bg</code></td>
                <td>string</td>
                <td>none</td>
                <td>
                    Background color for the active button state.
                </td>
            </tr>
            <tr>
                <td><code>$active-border</code></td>
                <td>string</td>
                <td>none</td>
                <td>
                    Border color for the active button state.
                </td>
            </tr>
        </tbody>
    </table>
</div>

#### button-variant-control
{:.no_toc}

Build a button color variant, using a pre-mixed color map.

{% highlight sass %}
@include button-variant-control($parent, $colors)
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
                <td><code>$parent</code></td>
                <td>string</td>
                <td><code>''</code></td>
                <td>
                    The value appended to generate the class <code>.btn-#{$parent}</code>.
                </td>
            </tr>
            <tr>
                <td><code>$color</code></td>
                <td>string</td>
                <td>none</td>
                <td>
                    The pre-mixed color map.
                </td>
            </tr>
        </tbody>
    </table>
</div>

#### button-variant-control-outline
{:.no_toc}

Build a outline button color variant, using a pre-mixed color map, with a special override for the inactive background color.

{% highlight sass %}
@include button-variant-control-outline($parent, $colors, $bg)
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
                <td><code>$parent</code></td>
                <td>string</td>
                <td><code>''</code></td>
                <td>
                    The value appended to generate the class <code>.btn-#{$parent}</code>.
                </td>
            </tr>
            <tr>
                <td><code>$color</code></td>
                <td>string</td>
                <td>none</td>
                <td>
                    The pre-mixed color map.
                </td>
            </tr>
            <tr>
                <td><code>$bg</code></td>
                <td>string</td>
                <td><code>$btn-outline-bg</code></td>
                <td>
                    Background color override for the inactive button state.
                </td>
            </tr>
        </tbody>
    </table>
</div>

#### button-size
{:.no_toc}

Build a button size variant.

{% highlight sass %}
@include button-size($padding-y, $padding-x, $font-size, $line-height, $border-radius)
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
                <td><code>$padding-y</code></td>
                <td>string</td>
                <td>none</td>
                <td>
                    Vertical padding.
                </td>
            </tr>
            <tr>
                <td><code>$padding-x</code></td>
                <td>string</td>
                <td>none</td>
                <td>
                    Horizontal padding.
                </td>
            </tr>
            <tr>
                <td><code>$font-size</code></td>
                <td>string</td>
                <td>none</td>
                <td>
                    Font size.
                </td>
            </tr>
            <tr>
                <td><code>$line-height</code></td>
                <td>string</td>
                <td>none</td>
                <td>
                    Line height.
                </td>
            </tr>
            <tr>
                <td><code>$border-radius</code></td>
                <td>string</td>
                <td>none</td>
                <td>
                    Border radius.
                </td>
            </tr>
        </tbody>
    </table>
</div>
