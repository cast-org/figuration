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
- Added functions to check, and/or determine the best color, these can be found in '/scss/functions/_color-util.scss'.
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

### Card
- Contextually colored cards have been removed. Now you will need to use the with text, background, and border color utilities.
- Cards have been converted to flexbox layout.
- Images now need to be wrapped with `.card-img` to keep aspect ratio and scaling in check due to flexbox.

### List Group
- The List Group is no longer a stand-alone component, and is now modifier within the new [List component]({{ site.baseurl }}/components/lists/).

### List
- A new component that allows for greater styling options for lists, or pseudo-lists using `<div>`s.

### Pagination
- Pagination has been modified with a couple of style modifier classes for greater flexibility.  The use of the `.pagination-group` modifier class on the `.pagination` element is needed to keep the same look as the older pagination component.


## Utilities

### Flexbox
- Renamed `.flex-order` to `.order` to both shorten and also match standard rule name.

## Widgets

### Button
- Dropped button widget in favor of CSS input buttons.  Single state toggles can be replaced with checkbox `.btn-check` variant.

### Lazy
- Dropped support for jQuery animations as the slim build does not support them.  Added an optional fade-in CSSS animation.
