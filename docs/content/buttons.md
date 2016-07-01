---
layout: docs
title: Buttons
group: content
---

Use Figuration's custom button styles for actions in forms, dialogs, and more. Includes support for a handful of contextual variations, sizes, states, and more.

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Examples

Figuration includes a few predefined button styles, each serving its own semantic purpose.

{% example html %}
<!-- Base button style -->
<button type="button" class="btn">Default</button>

<!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
<button type="button" class="btn btn-primary">Primary</button>

<!-- Secondary button context-->
<button type="button" class="btn btn-secondary">Secondary</button>

<!-- Indicates a successful or positive action -->
<button type="button" class="btn btn-success">Success</button>

<!-- Contextual button for informational alert messages -->
<button type="button" class="btn btn-info">Info</button>

<!-- Indicates caution should be taken with this action -->
<button type="button" class="btn btn-warning">Warning</button>

<!-- Indicates a dangerous or potentially negative action -->
<button type="button" class="btn btn-danger">Danger</button>

<!-- Deemphasize a button by making it look like a link while maintaining button behavior -->
<button type="button" class="btn btn-link">Link</button>
{% endexample %}

{% capture callout-include %}{% include callout-warning-color-assistive-technologies.md %}{% endcapture %}
{{ callout-include | markdownify }}

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
<button type="button" class="btn btn-outline-primary">Primary</button>
<button type="button" class="btn btn-outline-secondary">Secondary</button>
<button type="button" class="btn btn-outline-success">Success</button>
<button type="button" class="btn btn-outline-info">Info</button>
<button type="button" class="btn btn-outline-warning">Warning</button>
<button type="button" class="btn btn-outline-danger">Danger</button>
{% endexample %}


## Sizes

Fancy larger or smaller buttons? Add `.btn-xs`, `.btn-sm`, `.btn-lg`, or `.btn-xl` for additional sizes.

{% example html %}
<p>
  <button type="button" class="btn btn-primary btn-xl">Extra Large button</button>
  <button type="button" class="btn btn-xl">Extra Large button</button>
</p>
<p>
  <button type="button" class="btn btn-primary btn-lg">Large button</button>
  <button type="button" class="btn btn-lg">Large button</button>
</p>
<p>
  <button type="button" class="btn btn-primary">Default button</button>
  <button type="button" class="btn">Default button</button>
</p>
<p>
  <button type="button" class="btn btn-primary btn-sm">Small button</button>
  <button type="button" class="btn btn-sm">Small button</button>
</p>
<p>
  <button type="button" class="btn btn-primary btn-xs">Extra small button</button>
  <button type="button" class="btn btn-xs">Extra small button</button>
</p>
{% endexample %}

Create block level buttons---those that span the full width of a parent---by adding `.btn-block`.

{% example html %}
<button type="button" class="btn btn-primary btn-lg btn-block">Large Block level button</button>
<button type="button" class="btn btn-success btn-sm btn-block">Small Block level button</button>
{% endexample %}

## Active State

Buttons will appear pressed (with a darker background, darker border, and inset shadow) when active. **There's no need to add a class to `<button>`s as they use a pseudo-class**. However, you can still force the same active appearance with `.active` (and include the <code>aria-pressed="true"</code> attribute) should you need to replicate the state programmatically.

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
<button type="button" class="btn btn-link active">Link</button>
</p>

<strong>Outline Buttons:</strong>
<p>
<button type="button" class="btn btn-outline-primary active">Primary</button>
<button type="button" class="btn btn-outline-secondary active">Secondary</button>
<button type="button" class="btn btn-outline-success active">Success</button>
<button type="button" class="btn btn-outline-info active">Info</button>
<button type="button" class="btn btn-outline-warning active">Warning</button>
<button type="button" class="btn btn-outline-danger active">Danger</button>
</p>
{% endexample %}

## Disabled State

Make buttons look inactive by adding the `disabled` boolean attribute to any `<button>` element.

{% callout info %}
**Heads up!** IE9 and below render disabled buttons with gray, shadowed text that we can't override.
{% endcallout %}

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
<button type="button" class="btn btn-link" disabled>Link</button>
</p>

<strong>Outline Buttons:</strong>
<p>
<button type="button" class="btn btn-outline-primary" disabled>Primary</button>
<button type="button" class="btn btn-outline-secondary" disabled>Secondary</button>
<button type="button" class="btn btn-outline-success" disabled>Success</button>
<button type="button" class="btn btn-outline-info" disabled>Info</button>
<button type="button" class="btn btn-outline-warning" disabled>Warning</button>
<button type="button" class="btn btn-outline-danger" disabled>Danger</button>
</p>
{% endexample %}

Disabled buttons using the `<a>` element behave a bit different:

- `<a>`s don't support the `disabled` attribute, so you must add the `.disabled` class to make it visually appear disabled.
- Some future-friendly styles are included to disable all `pointer-events` on anchor buttons. In browsers which support that property, you won't see the disabled cursor at all.
- Disabled buttons should include the `aria-disabled="true"` attribute to indicate the state of the element to assistive technologies.

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
<a href="#" role="button" class="btn btn-link disabled" aria-disabled="true">Link</a>
</p>

<strong>Anchor Outline Buttons:</strong>
<p>
<a href="#" role="button" class="btn btn-outline-primary disabled" aria-disabled="true">Primary</a>
<a href="#" role="button" class="btn btn-outline-secondary disabled" aria-disabled="true">Secondary</a>
<a href="#" role="button" class="btn btn-outline-success disabled" aria-disabled="true">Success</a>
<a href="#" role="button" class="btn btn-outline-info disabled" aria-disabled="true">Info</a>
<a href="#" role="button" class="btn btn-outline-warning disabled" aria-disabled="true">Warning</a>
<a href="#" role="button" class="btn btn-outline-danger disabled" aria-disabled="true">Danger</a>
</p>
{% endexample %}

{% callout warning %}
#### Link Functionality Caveat

The `.disabled` class uses `pointer-events: none` to try to disable the link functionality of `<a>`s, but that CSS property is not yet standardized. In addition, even in browsers that do support `pointer-events: none`, keyboard navigation remains unaffected, meaning that sighted keyboard users and users of assistive technologies will still be able to activate these links. So to be safe, add a `tabindex="-1"` attribute on these links (to prevent them from receiving keyboard focus) and use custom JavaScript to disable their functionality.
{% endcallout %}
