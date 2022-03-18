---
layout: doc
title: Migration to v4.3.x
description: A brief rundown of major changes to get you started upgrading.
group: get-started
toc: true
---

## v4.3.1

### CSS
- `<hr>`, `.vr`, and other component dividers have all been consolidated to use borders, instead of `background-color` and `height` or `width`, to create dividers.

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