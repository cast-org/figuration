---
layout: docs
title: Color
group: content
---

Figuration offers some simple color palettes extended from our base colors, similar to the concept by [Google's Material color palettes](https://www.google.com/design/spec/style/color.html#color-color-palette).

Since our base colors tend to be dark, to mostly comply with [accessible text contrast ratios](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html) of 4.5:1 on a white background, the lighter side (<500 levels) of the palette has a larger interval than the darker side (>500 levels) to compensate.
Please note that the `warning/mustard` color is not compliant with a 4.5:1 contrast ratio, and is not particularly suited for use as a text color.

These can used for text or background colors. If applied to links, the colors will darken on hover.  Foregound items use the class format `.text-blue-500` and background items use `.bg-blue-500`.

<div class="row">
    <div class="palette col-sm-4">
        <div class="palette-base bg-gray-500 text-light">
            <p>gray</p>
            500
        </div>
        <div class="palette-item bg-gray-50">50</div>
        <div class="palette-item bg-gray-100">100</div>
        <div class="palette-item bg-gray-200">200</div>
        <div class="palette-item bg-gray-300">300</div>
        <div class="palette-item bg-gray-400 text-light">400</div>
        <div class="palette-item bg-gray-500 text-light">500</div>
        <div class="palette-item bg-gray-600 text-light">600</div>
        <div class="palette-item bg-gray-700 text-light">700</div>
        <div class="palette-item bg-gray-800 text-light">800</div>
        <div class="palette-item bg-gray-900 text-light">900</div>
    </div>

    <div class="palette col-sm-4">

        <div class="palette-base bg-red-500 text-light">
            <p>red</p>
            500
        </div>
        <div class="palette-item bg-red-50">50</div>
        <div class="palette-item bg-red-100">100</div>
        <div class="palette-item bg-red-200">200</div>
        <div class="palette-item bg-red-300">300</div>
        <div class="palette-item bg-red-400 text-light">400</div>
        <div class="palette-item bg-red-500 text-light">500</div>
        <div class="palette-item bg-red-600 text-light">600</div>
        <div class="palette-item bg-red-700 text-light">700</div>
        <div class="palette-item bg-red-800 text-light">800</div>
        <div class="palette-item bg-red-900 text-light">900</div>
    </div>

    <div class="palette col-sm-4">
        <div class="palette-base bg-green-500 text-light">
            <p>green</p>
            500
        </div>
        <div class="palette-item bg-green-50">50</div>
        <div class="palette-item bg-green-100">100</div>
        <div class="palette-item bg-green-200">200</div>
        <div class="palette-item bg-green-300">300</div>
        <div class="palette-item bg-green-400">400</div>
        <div class="palette-item bg-green-500 text-light">500</div>
        <div class="palette-item bg-green-600 text-light">600</div>
        <div class="palette-item bg-green-700 text-light">700</div>
        <div class="palette-item bg-green-800 text-light">800</div>
        <div class="palette-item bg-green-900 text-light">900</div>
    </div>

    <div class="palette col-sm-4">
        <div class="palette-base bg-blue-500 text-light">
            <p>blue</p>
            500
        </div>
        <div class="palette-item bg-blue-50">50</div>
        <div class="palette-item bg-blue-100">100</div>
        <div class="palette-item bg-blue-200">200</div>
        <div class="palette-item bg-blue-300">300</div>
        <div class="palette-item bg-blue-400 text-light">400</div>
        <div class="palette-item bg-blue-500 text-light">500</div>
        <div class="palette-item bg-blue-600 text-light">600</div>
        <div class="palette-item bg-blue-700 text-light">700</div>
        <div class="palette-item bg-blue-800 text-light">800</div>
        <div class="palette-item bg-blue-900 text-light">900</div>
    </div>

    <div class="palette col-sm-4">
        <div class="palette-base bg-cyan-500 text-light">
            <p>cyan</p>
            500
        </div>
        <div class="palette-item bg-cyan-50">50</div>
        <div class="palette-item bg-cyan-100">100</div>
        <div class="palette-item bg-cyan-200">200</div>
        <div class="palette-item bg-cyan-300">300</div>
        <div class="palette-item bg-cyan-400">400</div>
        <div class="palette-item bg-cyan-500 text-light">500</div>
        <div class="palette-item bg-cyan-600 text-light">600</div>
        <div class="palette-item bg-cyan-700 text-light">700</div>
        <div class="palette-item bg-cyan-800 text-light">800</div>
        <div class="palette-item bg-cyan-900 text-light">900</div>
    </div>

    <div class="palette col-sm-4">
        <div class="palette-base bg-mustard-500 text-light">
            <p>mustard</p>
            500
        </div>
        <div class="palette-item bg-mustard-50">50</div>
        <div class="palette-item bg-mustard-100">100</div>
        <div class="palette-item bg-mustard-200">200</div>
        <div class="palette-item bg-mustard-300">300</div>
        <div class="palette-item bg-mustard-400">400</div>
        <div class="palette-item bg-mustard-500 text-light">500</div>
        <div class="palette-item bg-mustard-600 text-light">600</div>
        <div class="palette-item bg-mustard-700 text-light">700</div>
        <div class="palette-item bg-mustard-800 text-light">800</div>
        <div class="palette-item bg-mustard-900 text-light">900</div>
    </div>
</div>

{% capture callout-include %}{% include callout-warning-color-assistive-technologies.md %}{% endcapture %}
{{ callout-include | markdownify }}
