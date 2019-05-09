---
layout: docs
title: Migration from v3 to v4
group: migration
---

Figuration v4 is a considerable rework, and there are a large number of breaking changes across the entire framework.  We will try to explain the changes below.

Some changes will most likely have been missed, so please refer to the documentation pages to see the revised/new implementations.


## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Color
- Reworked the colors, internal palette system, and consolidated the re-used component colors.
- Added functions to check, and/or determine the best color, these can be found in `/scss/functions/_color-util.scss`.
- Extended the contextual colors with light and dark contextual variants.  **These variants are not available as palettes** by default.

## Typography
- Added two methods of Responsive Typography support.
  - Ratio scaling - variable sizing based on viewport dimension
  - Stepped scaling - one defined size per breakpoint
- Inline lists, `.list-inline`, has been dropped and replaced with the `.list-horizontal` modifier in the new [List component]({{ site.baseurl }}/components/lists/).

## Table
- `.table` now creates a visually simple table, borders are controlled through a selection of modifier classes.
- `.table-hover` and `.table-striped` now use a solid gradient color overlayed using `background-image` to create their visual state.
- `.table-scroll-*` has dropped the `down` portion of the class name, and is now meant to used as a wrapper to prevent conflict with screen-readers due to the use of `display: block`.

## Form
- Rewrote both custom and default checkboxes and radios into a consolidated `.form-check`. Now, both have matching HTML structure (outer `<div>` with sibling `<input>` and `<label>`, and the same layout styles (stacked default, inline with utilitiy classes). This allows us to style the label based on the input's state, simplifying support for the `disabled` attribute (previously requiring a parent class) and better support for form validation.
  - `.custom-control` is replaced with `.form-check`.
  - `.custom-checkbox` and `.custom-radio` modifiers are replaced with `.form-checkradio`, the styling is now determined by the input `type`.
  - added `.form-switch` modifier to make checkbox or radio look like a toggle switch.


- Removed `.col-form-legend` in favor of an improved `.form-label`. This way the sizing variants, such as `.form-label-sm` and `.form-label-lg`, can be used on `<legend>` elements also.

- Custom file inputs have been reworked with a new `.form-file` class and markup, replacing `.custom-file`. Along with removing the SCSS map and psuedo-elements. Using children elements in the `<label>`, the `Choose file` text now comes from the `.form-file-text`, and the `Browse` button is now a `.form-file-button` element, allowing for translations right in the HTML.

- Custom select inputs have been reworked also, dropping the `.custom-select`, resulting in a merge into `.form-control`.

- Added custom styling for `input type="range"` with the use for `.form-range`.  The Slider widget has been removed from Figuration and moved into it's own repository: [Figuration Slider](https://github.com/cast-org/figuration-slider).

- Validation icons have been re-implemented.  The `.form-control-icon` has been replaced with `.has-validation-icon`. The icons are still optional and can now be used with textual `<input class="form-control">`, `<textarea class="form-control">`, and `<select class="form-control">` elements.  Icons can be used within `.input-groups` but they no longer scale with the input sizing.

- Dropped `.form-control-color`, `.form-control-range`, and `.form-control-file` . Use the updated `.form-color`, `.form-range` or `.form-file`  classes instead to get a consistent visual input.

{% comment %}
## Sizing
{% endcomment %}

## Grid
- Dropped the `.push` and `.pull` modifiers in favor of `.offset-*` and flex utilities.


## Components

### Breadbcrumb
- Removed `padding`, `background-color` and `border-radius` from parent `.breadcrumb` element.

### Button
- Added support for CSS checkbox and radio buttons, using `.btn-check` and `.btn-check-input` classes.
- Content in buttons will now wrap by default.  You can use the `.text-nowrap` utility class to preserve old behaviour.

### Card
- Contextually colored cards have been removed. Now you will need to use the with text, background, and border color utilities.
- Cards have been converted to flexbox layout.
- Images now need to be wrapped with `.card-img` to keep aspect ratio and scaling in check due to flexbox.
- List and table sub-components now use a `.card-list` or `.card-table` respectively.
- Repsonsive horizontal card layouts have been added with `.card-horizontal{breakpoint}`, `.card-horizontal{breakpoint}-reverse`, and child `.card-col` elements.

### Input Group
- Input group addons have been revised, simplifying much of the related CSS. Within an addon, place your buttons as they would exist anywhere else, but wrap text in `.input-group-text`.
- Validation styles are now supported, as are multiple inputs (though you can only validate one input per group).
- Sizing classes must be on the parent `.input-group` and not the individual form elements.

### List Group
- The List Group is no longer a stand-alone component, and is now modifier within the new [List component]({{ site.baseurl }}/components/lists/).

### List
- A new component that allows for greater styling options for lists, or pseudo-lists using `<div>`s.

### Pagination
- Pagination has been modified with a couple of style modifier classes for greater flexibility.  The use of the `.pagination-group` modifier class on the `.pagination` element is needed to keep the same look as the older pagination component.

### Switch
- Dropped Switch component and consolidated with the `.form-check` radio and checkbox controls, through the use of the `.form-switch` modifier class. Check out the [new switch custom control]({{ site.baseurl }}/content/forms/#switches).


## Utilities

### Flexbox
- Renamed `.flex-order` to `.order` to both shorten and also match standard rule name.

### Image Replacement
- Dropped the `.text-hide` util and `.text-hide()` mixin---in favor of using `.sr-only` as the replacement.


## Widgets

### Button
- Dropped button widget in favor of CSS input buttons.  Single state toggles can be replaced with checkbox `.btn-check` variant.

### Lazy
- Dropped support for jQuery animations as the slim build does not support them.  Added an optional fade-in CSSS animation.

### Slider
- Dropped the slider widget as a bundled plugin.  This has been replaced with the `.form-range` styled `<input type="range">` element.

### Player
- Dropped support for sliders using the Slider widget, and added support for `<input type="range">` elements.  A few improvements on the accesibility of the sliders were also added.


## Build Tools
- Figuration now requires Node.js v8 or newer if using our build tools.  This is due to the minimum Node.js requirement for `grunt-sass`.
