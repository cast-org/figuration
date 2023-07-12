---
layout: doc
title: Migration to v4.3.x
description: A brief rundown of major changes to get you started upgrading.
group: get-started
toc: true
---

## v4.4.0

### CSS

#### Nav
- Added new lined variant using `.nav-lined`.
- Added vertical tab and lined variants, both using `.nav-vertical`.
- Added ability to flip the tab and line variants using `.nav-reverse`, which can be paired with `.nav-vertical`.

#### Progress bars

The markup for [progress bars]({{ site.path }}/{{ version.docs }}/components/progress/) has been updated. Due to the placement of `role` and various `aria-` attributes on the inner `.progress-bar` element, **some screen readers were not announcing zero value progress bars**. Now, `role="progressbar"` and the relevant `aria-*` attributes are on the outer `.progress` element, leaving the `.progress-bar` purely for the visual presentation of the bar and optional label.

While we recommend adopting the new markup for improved compatibility with all screen readers, note that the legacy progress bar structure will continue to work as before.

{% capture highlight %}
<!-- Previous markup -->
<div class="progress">
  <div class="progress-bar" role="progressbar" aria-label="Basic example" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>

<!-- New markup -->
<div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width: 25%"></div>
</div>
{% endcapture %}
{% renderHighlight highlight, "html" %}

We've also introduced a new `.progress-stacked` class to more logically wrap [stacked progress bars]({{ site.path }}/{{ version.docs }}/components/progress/#stacked) into a single stacked progress bar.

{% capture highlight %}
<!-- Previous markup -->
<div class="progress">
  <div class="progress-bar" role="progressbar" aria-label="Segment one" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="progress-bar bg-success" role="progressbar" aria-label="Segment two" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="progress-bar bg-info" role="progressbar" aria-label="Segment three" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
</div>

<!-- New markup -->
<div class="progress-stacked">
  <div class="progress" role="progressbar" aria-label="Segment one" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" style="width: 15%">
    <div class="progress-bar"></div>
  </div>
  <div class="progress" role="progressbar" aria-label="Segment two" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style="width: 30%">
    <div class="progress-bar bg-success"></div>
  </div>
  <div class="progress" role="progressbar" aria-label="Segment three" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%">
    <div class="progress-bar bg-info"></div>
  </div>
</div>
{% endcapture %}
{% renderHighlight highlight, "html" %}

## v4.3.3

### Widgets

#### Offcanvas
 - New responsive offcanvas variants have been added.  These will hide content when below the specified breakpoint, otherwise the content will appear normally.

## v4.3.1

### CSS
- Font stack has been updated to give preference to Linux fonts over Arial.
- `<hr>`, `.vr`, and other component dividers have all been consolidated to use borders, instead of `background-color` and `height` or `width`, to create dividers.
- `border-radius` values have been slightly increased to soften the corners of most components.  Additional `.radius-*` utility classes have also been added.

### Widgets

#### Dropdown
- Added 'centered' and 'middle' alignment variants.  Submenus do not inherit the centered or middle alignment, but will logically align based on direction.

## v4.3.0

### CSS
- Reboot now has an opinionated sizing for the browser default checkbox and radio inputs.
- `z-index` values for tooltip, popover, modal-backdrop and modal elements were increased slightly to make space for the new Offcanvas components.

### Layout

#### Grid
- Split containers out into their own component with the addition of the `$enable-container` and `$enable-container-responsive` (replaces `$enable-grid-responsive-containers`).
- Moved container related Sass into `.\scss\component\container.scss`

### Contents

#### Tables
- Added striped column variant.

### Components

#### Forms
- Reverse layout for `.form-check` now possible using the `.form-check-reverse` modifier class.  Works for both default and custom checkbox and radio inputs that use the `.form-check` markup.

#### Loader
- Added a new animated loaders, also known as "spinners", to help indicate busy or loading states. Two variations are available - `.loader-circle` and `.loader-double`. Color can be adjusted using `.text-{color}` utility classes, otherwise they inherit the text color with `currentcolor`.

#### Placeholder
- Added a new 'skeleton' or placeholder component as another way to indicate that content is in a loading state.  Comes with static and animated variants.

### Utilites
- Added new vertical rule utility class. Also extends and reuses `<hr>` Sass settings.
- Added opacity utilities.
- Added orientation utilities to rotate and flip elements.
- Added `.sticky-bottom` and related responsive classes to positioning utilities.

### Widgets

#### New helper utilites
- `$.CFW_Backdrop()` - control backdrop visibility within a defined element
- `$.CFW_Scrollbar()` - control scrollbar disabling and `padding`/`margin` updates for `fixed` and `sticky` positioned elements.  Adds a check for the computed `position` propery to allow for responsive positioning.
- `$.CFW_Focuser()` - allows for two different focus handling variants:
  - 'focus trap' - for items like modals where you want to keep focus contained within a dialog.
    - Focus loops around from top-to-bottom and bottom-to-top when keyboard navigating.
  - 'focus flow' - what we traditionally used for tooltips and popovers placed within containers. Since the tip is placed out of document flow, we simulate it being inline for keyboard navigation, but the user can 'flow' out of the tip.
    - Internal tip navigation:
      - Forward navigation (out the bottom of tip) moves focus to the next focusable item after the trigger.
      - Backward navigation (out the top of the tip) moves focus back to the trigger.
    - External tip navigation:
      - Forward motion from the trigger, when the tip is open, moves focus to start of tip.
      - Backward motion onto the trigger, when the tip is open, moves focus to end of tip.
  - Also removes the need for those injected focusable helper `<span>`s that were being used in previous versions.

#### Modals
- New 'contained' variant.  Set a modal within a container, instead of blocking the entire page.
- New `focus` option - to disable the modal's focus trap.  Replaces the need to create an override function.
- New `manual` option - trigger element will not get click toggle handler, and closing modal does not force focus back to trigger.

#### Offcanvas
- New widget!  Similar to the side-aligned modals, there a few slight differences in functionality, such as the responsive drawer capabilities when contained within a navbar.