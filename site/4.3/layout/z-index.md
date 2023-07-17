---
layout: doc
title: Z-index
description: Z-indexes specify how our component and widget pieces overlay with one another to control visuals and interactions.
group: layout
toc: false
---

Several Figuration components utilize `z-index`, the CSS property that helps control layout by providing a third axis to arrange content. We utilize a default z-index scale in Figuration that's been designed to properly layer navigation, tooltips and popovers, modals, and more.

We use a defined set because of the layered components—tooltips, popovers, navbars, dropdowns, modals, offcanvas—so they remain consistent in terms of behavior.

Customizing these values is most likely not needed, and we don't recommend adjusting the values.  However, if you change one, you will need to review and possibly update all of the other values.

{% capture highlight %}
$zindex-dropdown:           1000 !default;
$zindex-sticky:             1010 !default;
$zindex-fixed:              1020 !default;
$zindex-offcanvas-backdrop: 1030 !default;
$zindex-offcanvas:          1035 !default;
$zindex-popover:            1040 !default;
$zindex-popover-draggable:  1045 !default;
$zindex-tooltip:            1050 !default;
$zindex-modal-backdrop:     1060 !default;
$zindex-modal:              1065 !default;
{% endcapture %}
{% renderHighlight highlight, "sass" %}

Background elements&mdash;like the backdrops that allow click-dismissing&mdash;tend to reside on a lower `z-index`s, while navigation and popovers utilize higher `z-index`s to ensure they overlay surrounding content.  Modals get a higher z-index so they are placed above popover/tooltip items, in the case that one or more of those items is held open.

To handle overlapping borders within components (e.g., buttons and inputs in input groups), we use low single digit `z-index` values of `1`, `2`, and `3` for default, hover, and active states. On hover/focus/active, we bring a particular element to the forefront with a higher `z-index` value to show their border over the sibling elements.
