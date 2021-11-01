---
layout: doc
title: Migration to v4.3.x
description: A brief rundown of major changes to get you started upgrading.
group: get-started
toc: true
---

## v4.3.0

### Grid
 - Split containers out into their own component with the addition of the `$enable-container` and `$enable-container-responsive` (replaces `$enable-grid-responsive-containers`).
 - Moved container related Sass into `.\scss\component\container.scss`

### Components

#### Loader
 - Added a new animated loaders, also known as "spinners", to help indicate busy or loading states. Two variations are available - `.loader-circle` and `.loader-double`. Color can be adjusted using `.text-{color}` utility classes, otherwise they inherit the text color with `currentColor`.
