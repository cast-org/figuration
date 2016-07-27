---
layout: docs
title: Flexbox
group: layout
---

Flexbox support is coming to Figuration.  The goal is to have both an opt-in system via classes, as well as a full option that forces the use of flexbox on supported components.

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## What's Included

Flexbox support is available for a number of Figurations's components:

- [Grid layout]({{ site.baseurl }}/layout/grid/#flexbox), which switches from `float`s to `display: flex;`.
- [Utility classes]({{ site.baseurl }}/components/utilities/#flexbox-alignment), for alignment options for flexbox enabled components.
- More coming!

Vendor prefixes are provided in our compiled CSS with [Autoprefixer](https://github.com/postcss/autoprefixer) via Grunt. Some bugs in IE10-11's Flexbox implementation are worked around via [postcss-flexbugs-fixes](https://github.com/luisrudge/postcss-flexbugs-fixes).

## Why Flexbox?

In a nutshell, flexbox provides simpler and more flexible layout options in CSS. More specifically, it provides:

- Easy vertical alignment of content within a parent element.
- Easy reordering of content across devices and screen resolutions with the help of media queries.
- Easy CSS-only equal height columns for your grid-based layouts.

All these things are possible outside flexbox, but typically require extra hacks and workarounds to do right.

## Full Flexbox Mode

If you're familiar with modifying variables in Sass---or any other CSS preprocessor---you'll be right at home to move into flexbox mode.

1. Open the `_settings.scss` file and find the `$enable-flex-full` variable.
    - You may also copy the setting into the `_custom.scss` file if you wish to use a custom configuration.
2. Change it from `false` to `true`.
3. Recompile, and done!

{% comment %}
Alternatively, if you don't need the source Sass files, you may swap the default Figuration compiled CSS with the compiled flexbox variation. [Head to the download page]({{ site.baseurl }}/get-started/download) for more information.
{% endcomment %}

## Browser Support

Using/enabling flexbox means **reduced browser and device support:**

- Internet Explorer 9 and below do not support flexbox.
- Internet Explorer 10 has a few known quirks (see the "Known issues" tab in [Can I use...](http://caniuse.com/#feat=flexbox)), requires using a prefix, and only supports the syntax from the old 2012 version of the spec.

Please be extra conscious of your user base when enabling flexbox in your project. Visit [Can I use...](http://caniuse.com/#feat=flexbox) for details on browser support of flexbox.
