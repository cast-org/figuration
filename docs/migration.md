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
- Added functions to check, and/or determine the best color, these can be found in '/scss/functions/_color-util.scss`.
- Extended the contextual colors with light and dark contextual variants.  **These variants are not available** as palettes by default.

## Typography
- Added two methods of Responsive Typography support.
  - Ratio scaling - variable sizing based on viewport dimension
  - Stepped scaling - one defined size per breakpoint

{% comment %}
## Sizing
{% endcomment %}

## Components

### Breadbcrumb
- Removed `padding`, `background-color` and `border-radius` from parent `.breadcrumb` element.

### Cards
- Contextually colored cards have been removed. Now you will need to use the with text, background, and border color utilities.

## Widgets