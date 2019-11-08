---
layout: doc
title: Flexbox
description: Flexbox is now a full-time part of Figuration. Many components, but not all, are flexbox enabled. Flexbox allows for greater layout flexibility, making sizing and alignment of elements much easier.
group: layout
---

<div class="h3 cf-toc-header">Page Contents</div>

${toc}

## What's Included

Flexbox support is available for a number of Figuration's components:

- [Grid Layout]({{ site.path }}/{{ version.docs }}/layout/grid/)
- [Breadcrumb]({{ site.path }}/{{ version.docs }}/components/breadcrumb/)
- [Button Group]({{ site.path }}/{{ version.docs }}/components/button-group/)
- [Button Toolbar]({{ site.path }}/{{ version.docs }}/components/button-group/#button-toolbar)
- [Card Deck]({{ site.path }}/{{ version.docs }}/components/cards/#card-decks)
- [Card Group]({{ site.path }}/{{ version.docs }}/components/cards/#card-groups)
- [Inline Forms]({{ site.path }}/{{ version.docs }}/content/forms/#inline-forms)
- [Input Group]({{ site.path }}/{{ version.docs }}/components/input-group/)
- [Media Object]({{ site.path }}/{{ version.docs }}/components/media-object/)
- [Navs]({{ site.path }}/{{ version.docs }}/components/navs/)
- [Navbar]({{ site.path }}/{{ version.docs }}/components/navbar/)
- [Pagination]({{ site.path }}/{{ version.docs }}/components/pagination/)
- [Progress]({{ site.path }}/{{ version.docs }}/components/progress/)
- [Flexbox Utilities]({{ site.path }}/{{ version.docs }}/utilities/flexbox/)

Vendor prefixes are provided in our compiled CSS with [Autoprefixer](https://github.com/postcss/autoprefixer) via Grunt. Some bugs in IE10-11's Flexbox implementation are worked around via [postcss-flexbugs-fixes](https://github.com/luisrudge/postcss-flexbugs-fixes).

If you need a reference for working with flexbox, there is an excellent resource over at CSS Tricks with [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).

## Why Flexbox?

In a nutshell, flexbox provides simpler and more flexible layout options in CSS. More specifically, it provides:

- Easy vertical alignment of content within a parent element.
- Easy reordering of content across devices and screen resolutions with the help of media queries.
- Easy CSS-only equal height columns for your grid-based layouts.

All these things are possible outside flexbox, but typically require extra hacks and workarounds to do right.

## Browser Support

Using flexbox means **reduced browser and device support**, but mostly for older technology.

Visit [Can I use...](https://caniuse.com/#feat=flexbox) for details on browser support of flexbox.

There are also a number of browser bugs and cross-browser issues with flexbox.  Some of which do not have possible workarounds, while there are other that do.  Check out the [Flexbugs](https://github.com/philipwalton/flexbugs) repository for additional information.
