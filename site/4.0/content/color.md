---
layout: doc
title: Color
description: Theme colors, quick overview of the palette system for consitent control of colors used within Figuration, and the available color contrast SASS functions.
group: content
toc: true
---

## Themes

Here are the names and base color values for the color themes used throughout Figuration.  These colors are used to expand into a palette style color system, as seen below.

<div class="row text-black">
  <div class="palette col-sm-6 col-md-4">
    <div class="palette-base bg-primary text-white">
        primary
    </div>
  </div>
  <div class="palette col-sm-6 col-md-4">
    <div class="palette-base bg-secondary text-white">
        secondary
    </div>
  </div>
  <div class="palette col-sm-6 col-md-4">
    <div class="palette-base bg-success">
        success
    </div>
  </div>
  <div class="palette col-sm-6 col-md-4">
    <div class="palette-base bg-info text-white">
        info
    </div>
  </div>
  <div class="palette col-sm-6 col-md-4">
    <div class="palette-base bg-warning">
        warning
    </div>
  </div>
  <div class="palette col-sm-6 col-md-4">
    <div class="palette-base bg-danger text-white">
        danger
    </div>
  </div>
  <div class="palette col-sm-6 col-md-4">
    <div class="palette-base bg-light">
        light
    </div>
  </div>
  <div class="palette col-sm-6 col-md-4">
    <div class="palette-base bg-dark text-white">
        dark
    </div>
  </div>
</div>

The pre-defined color variables are available when building your own components.

{% capture highlight %}
.custom-element {
    color: $primary;
}
{% endcapture %}
{% renderHighlight highlight, "sass" %}

## Palette

Figuration uses a simplified color palettes extended from our base colors, similar to the concept by [Google's Material color palettes](https://www.google.com/design/spec/style/color.html#color-color-palette).

By 'simplified' we mean the base colors are simply mixed against white or black in stepped levels to create a color scale.

Since our base colors tend to be on the dark side, there is a skew in the mixing percentages between the light and dark sides so that we don't reach pure black before hitting the top of the scale.

More information and examples about using the color palette and related utilities is available on the [color utilities page]({{ site.path }}/{{ version.docs }}/utilities/color/).

{%- assign calloutColor = version.docs | valueIfEmpty: site.version.docs | prepend: "./" | append: "/partials/callout-warning-color-assistive-technologies.md" -%}
{% include calloutColor %}

<div class="row text-black">
  <div class="palette col-sm-6 col-md-4">
    <div class="palette-base bg-primary text-white">
      <p>primary</p>
      500
    </div>
    <div class="palette-item bg-primary-50">50</div>
    <div class="palette-item bg-primary-100">100</div>
    <div class="palette-item bg-primary-200">200</div>
    <div class="palette-item bg-primary-300">300</div>
    <div class="palette-item bg-primary-400">400</div>
    <div class="palette-item bg-primary-500 text-white">500</div>
    <div class="palette-item bg-primary-600 text-white">600</div>
    <div class="palette-item bg-primary-700 text-white">700</div>
    <div class="palette-item bg-primary-800 text-white">800</div>
    <div class="palette-item bg-primary-900 text-white">900</div>
  </div>

  <div class="palette col-sm-6 col-md-4">
    <div class="palette-base bg-secondary text-white">
      <p>secondary</p>
      500
    </div>
    <div class="palette-item bg-secondary-50">50</div>
    <div class="palette-item bg-secondary-100">100</div>
    <div class="palette-item bg-secondary-200">200</div>
    <div class="palette-item bg-secondary-300">300</div>
    <div class="palette-item bg-secondary-400">400</div>
    <div class="palette-item bg-secondary-500 text-white">500</div>
    <div class="palette-item bg-secondary-600 text-white">600</div>
    <div class="palette-item bg-secondary-700 text-white">700</div>
    <div class="palette-item bg-secondary-800 text-white">800</div>
    <div class="palette-item bg-secondary-900 text-white">900</div>
  </div>

  <div class="palette col-sm-6 col-md-4">
    <div class="palette-base bg-success">
      <p>success</p>
      500
    </div>
    <div class="palette-item bg-success-50">50</div>
    <div class="palette-item bg-success-100">100</div>
    <div class="palette-item bg-success-200">200</div>
    <div class="palette-item bg-success-300">300</div>
    <div class="palette-item bg-success-400">400</div>
    <div class="palette-item bg-success-500">500</div>
    <div class="palette-item bg-success-600 text-white">600</div>
    <div class="palette-item bg-success-700 text-white">700</div>
    <div class="palette-item bg-success-800 text-white">800</div>
    <div class="palette-item bg-success-900 text-white">900</div>
  </div>

  <div class="palette col-sm-6 col-md-4">
    <div class="palette-base bg-info text-white">
      <p>info</p>
      500
    </div>
    <div class="palette-item bg-info-50">50</div>
    <div class="palette-item bg-info-100">100</div>
    <div class="palette-item bg-info-200">200</div>
    <div class="palette-item bg-info-300">300</div>
    <div class="palette-item bg-info-400">400</div>
    <div class="palette-item bg-info-500 text-white">500</div>
    <div class="palette-item bg-info-600 text-white">600</div>
    <div class="palette-item bg-info-700 text-white">700</div>
    <div class="palette-item bg-info-800 text-white">800</div>
    <div class="palette-item bg-info-900 text-white">900</div>
  </div>

  <div class="palette col-sm-6 col-md-4">
    <div class="palette-base bg-warning">
      <p>warning</p>
      500
    </div>
    <div class="palette-item bg-warning-50">50</div>
    <div class="palette-item bg-warning-100">100</div>
    <div class="palette-item bg-warning-200">200</div>
    <div class="palette-item bg-warning-300">300</div>
    <div class="palette-item bg-warning-400">400</div>
    <div class="palette-item bg-warning-500">500</div>
    <div class="palette-item bg-warning-600">600</div>
    <div class="palette-item bg-warning-700">700</div>
    <div class="palette-item bg-warning-800 text-white">800</div>
    <div class="palette-item bg-warning-900 text-white">900</div>
  </div>

  <div class="palette col-sm-6 col-md-4">
    <div class="palette-base bg-danger-500 text-white">
      <p>danger</p>
      500
    </div>
    <div class="palette-item bg-danger-50">50</div>
    <div class="palette-item bg-danger-100">100</div>
    <div class="palette-item bg-danger-200">200</div>
    <div class="palette-item bg-danger-300">300</div>
    <div class="palette-item bg-danger-400">400</div>
    <div class="palette-item bg-danger-500 text-white">500</div>
    <div class="palette-item bg-danger-600 text-white">600</div>
    <div class="palette-item bg-danger-700 text-white">700</div>
    <div class="palette-item bg-danger-800 text-white">800</div>
    <div class="palette-item bg-danger-900 text-white">900</div>
  </div>

  <div class="palette col-sm-6 col-md-4">
    <div class="palette-base bg-uibase-500 text-white">
      <p>uibase</p>
      500
    </div>
    <div class="palette-item bg-uibase-50">50</div>
    <div class="palette-item bg-uibase-100">100</div>
    <div class="palette-item bg-uibase-200">200</div>
    <div class="palette-item bg-uibase-300">300</div>
    <div class="palette-item bg-uibase-400">400</div>
    <div class="palette-item bg-uibase-500 text-white">500</div>
    <div class="palette-item bg-uibase-600 text-white">600</div>
    <div class="palette-item bg-uibase-700 text-white">700</div>
    <div class="palette-item bg-uibase-800 text-white">800</div>
    <div class="palette-item bg-uibase-900 text-white">900</div>
  </div>

  <div class="palette col-sm-6 col-md-4">
    <div class="palette-base bg-gray-500 text-white">
      <p>gray</p>
      500
    </div>
    <div class="palette-item bg-gray-50">50</div>
    <div class="palette-item bg-gray-100">100</div>
    <div class="palette-item bg-gray-200">200</div>
    <div class="palette-item bg-gray-300">300</div>
    <div class="palette-item bg-gray-400">400</div>
    <div class="palette-item bg-gray-500 text-white">500</div>
    <div class="palette-item bg-gray-600 text-white">600</div>
    <div class="palette-item bg-gray-700 text-white">700</div>
    <div class="palette-item bg-gray-800 text-white">800</div>
    <div class="palette-item bg-gray-900 text-white">900</div>
  </div>
</div>

### palette()

Mix your own colors using the palette function.

{% capture highlight %}
palette($color, $level)
{% endcapture %}
{% renderHighlight highlight, "sass" %}

<div class="table-scroll">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th style="width: 100px;">Argument</th>
        <th style="width: 50px;">Type</th>
        <th style="width: 50px;">Default</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>$color</code></td>
        <td>string</td>
        <td><code>''</code></td>
        <td>
          The base color to mix against.
        </td>
      </tr>
      <tr>
        <td><code>$level</code></td>
        <td>integer</td>
        <td><code>500</code></td>
        <td>
           Valid levels are integer values 0-1000, with 0 being the lightest, 1000 being the darkest, 500 results in an unchanged color. Special values: level &lt; 0 = <code>#fff</code>, level &gt; 1000 = <code>#000</code>.
        </td>
      </tr>
    </tbody>
  </table>
</div>

Sample usage within SASS:

{% capture highlight %}
.custom-element {
    color: palette($primary, 600);
}
{% endcapture %}
{% renderHighlight highlight, "sass" %}

## Contrast

Figuration includes a handful of color contrast functions based the [WCAG 2.1 minimum contrast specification](https://www.w3.org/TR/WCAG21/#contrast-minimum), using the related [contrast ratio](https://www.w3.org/TR/WCAG21/#dfn-contrast-ratio) and [relative luminance](https://www.w3.org/TR/WCAG21#dfn-relative-luminance) formulas to determine contrast ratios.

### color-contrast()

Returns either a light (`#fff`) or dark (`#262d34`) color compared against a given one based on the minimum contrast ratio setting.

{% capture highlight %}
color-contrast($color, $light: $color-contrast-base-light, $dark: $color-contrast-base-dark);
{% endcapture %}
{% renderHighlight highlight, "sass" %}

<div class="table-scroll">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th style="width: 100px;">Argument</th>
        <th style="width: 50px;">Type</th>
        <th style="width: 50px;">Default</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>$color</code></td>
        <td>string</td>
        <td><code>''</code></td>
        <td>
          The base color to compare against.
        </td>
      </tr>
      <tr>
        <td><code>$light</code></td>
        <td>string</td>
        <td><code>$color-contrast-base-light</code></td>
        <td>
          Light color to use for auto-determination result.
        </td>
      </tr>
      <tr>
        <td><code>$dark</code></td>
        <td>string</td>
        <td><code>$color-contrast-base-dark</code></td>
        <td>
          Dark color to use for auto-determination result.
        </td>
      </tr>
    </tbody>
  </table>
</div>

### color-max-contrast()

Returns either white (`#fff`) or black (`#000`) depending on which color has the maximum contrast ratio based against the given color.

{% capture highlight %}
color-max-contrast($color);
{% endcapture %}
{% renderHighlight highlight, "sass" %}

<div class="table-scroll">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th style="width: 100px;">Argument</th>
        <th style="width: 50px;">Type</th>
        <th style="width: 50px;">Default</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>$color</code></td>
        <td>string</td>
        <td><code>''</code></td>
        <td>
          The base color to compare against.
        </td>
      </tr>
    </tbody>
  </table>
</div>

### color-auto-contrast()

Check to see if the defined light (`#fff`) or dark (`#262d34`) color meet minimum contrast against a given color.  If neither meet minumum contrast, then return white or black depending on the best contrast ratio.

{% capture highlight %}
color-auto-contrast($color, $light: $color-contrast-base-light, $dark: $color-contrast-base-dark);
{% endcapture %}
{% renderHighlight highlight, "sass" %}

<div class="table-scroll">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th style="width: 100px;">Argument</th>
        <th style="width: 50px;">Type</th>
        <th style="width: 50px;">Default</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>$color</code></td>
        <td>string</td>
        <td><code>''</code></td>
        <td>
          The base color to compare against.
        </td>
      </tr>
      <tr>
        <td><code>$light</code></td>
        <td>string</td>
        <td><code>$color-contrast-base-light</code></td>
        <td>
          Light color to use for auto-determination result.
        </td>
      </tr>
      <tr>
        <td><code>$dark</code></td>
        <td>string</td>
        <td><code>$color-contrast-base-dark</code></td>
        <td>
          Dark color to use for auto-determination result.
        </td>
      </tr>
    </tbody>
  </table>
</div>

### color-if-contrast()

Compare a foreground color against a background color.  Returns the foreground color if it passes the minimum contrast ratio, otherwise return the result from `color-auto-contrast()`.

Check to see if the defined light (`#fff`) or dark (`#262d34`) color meet minimum contrast against a given color.  If neither meet minumum contrast, then return white or black depending on the best contrast ratio.

{% capture highlight %}
color-if-contrast($colorfore, $colorback, $light: $color-contrast-base-light, $dark: $color-contrast-base-dark);
{% endcapture %}
{% renderHighlight highlight, "sass" %}

<div class="table-scroll">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th style="width: 100px;">Argument</th>
        <th style="width: 50px;">Type</th>
        <th style="width: 50px;">Default</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>$colorfore</code></td>
        <td>string</td>
        <td><code>''</code></td>
        <td>
          Foreground color to use in comparison.
        </td>
      </tr>
      <tr>
        <td><code>$colorback</code></td>
        <td>string</td>
        <td><code>''</code></td>
        <td>
          Background color to use in comparison.
        </td>
      </tr>
      <tr>
        <td><code>$light</code></td>
        <td>string</td>
        <td><code>$color-contrast-base-light</code></td>
        <td>
          Light color to use for auto-determination result.
        </td>
      </tr>
      <tr>
        <td><code>$dark</code></td>
        <td>string</td>
        <td><code>$color-contrast-base-dark</code></td>
        <td>
          Dark color to use for auto-determination result.
        </td>
      </tr>
    </tbody>
  </table>
</div>

## Adjusting Themes

### Add Color

Add a color to all themes by appending it to the `$base-colors` map.

{% capture highlight %}
$base-colors: (
  "new-color": #990099
);
{% endcapture %}
{% renderHighlight highlight, "sass" %}

### Add Mixed Theme

Figuration uses mixed themes to build out our components. This way color stays consitent across all aspects of the component.

You can mix your own theme by using the `_mix-context-colors()` function.

{% capture highlight %}
_mix-context-colors($colors, $levels);
{% endcapture %}
{% renderHighlight highlight, "sass" %}

<div class="table-scroll">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th style="width: 100px;">Argument</th>
        <th style="width: 50px;">Type</th>
        <th style="width: 50px;">Default</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>$color</code></td>
        <td>string</td>
        <td><code>''</code></td>
        <td>
            The base color to mix with.
        </td>
      </tr>
      <tr>
        <td><code>$levels</code></td>
        <td>map</td>
        <td><code>''</code></td>
        <td>
          Palette levels for each state of a contextual element.  Refer to the <code>$level-control</code> variable for the map specifications.
        </td>
      </tr>
    </tbody>
  </table>
</div>

{% capture highlight %}
// Adding a mixed theme with custom mix levels
$mix-levels: (
    "bg":                   550,
    "color":                -1,
    "border-color":         650,
    "hover-bg":             650,
    "hover-color":          -1,
    "hover-border-color":   750,
    "active-bg":            750,
    "active-color":         -1,
    "active-border-color":  750
);

$mixed-theme = _mix-context-colors(#990099, $mix-levels)
$btn-themes: map-merge($btn-themes, $mixed-theme);
{% endcapture %}
{% renderHighlight highlight, "sass" %}

### Add Custom Theme

You can also add a color map without using the color mixing function, allowing for greater customization.

{% capture highlight %}
// Adding a custom theme
$custom-theme: (
  "purple": (
    "base":                 #990099,
    "bg":                   #990099,
    "color":                #fff,
    "border-color":         #800080,
    "hover-bg":             #770077,
    "hover-color":          #fff,
    "hover-border-color":   #660066,
    "active-bg":            #ffb3ff,
    "active-color":         #990099,
    "active-border-color":  #ff29ff
  );
);
{% endcapture %}
{% renderHighlight highlight, "sass" %}

{% capture highlight %}
// Required - functions
@import "../node_modules/figuration/scss/functions";

// Required - settings and mixins
@import "../node_modules/figuration/scss/settings";
@import "../node_modules/figuration/scss/mixins";

// Custom theme addition/removal go in this location
$btn-themes: map-merge($btn-themes, $custom-theme);

// Core and Components
@import "../node_modules/figuration/scss/reboot";
@import "../node_modules/figuration/scss/typography";
...
{% endcapture %}
{% renderHighlight highlight, "sass" %}

### Remove Theme

Just like removing from the color maps, use `map-remove()` to remove themes from `$btn-themes`.

As before, insert this setting after the *Required* sections and before the *Core and Components* section.

{% capture highlight %}
// Required - functions
@import "../node_modules/figuration/scss/functions";

// Required - settings and mixins
@import "../node_modules/figuration/scss/settings";
@import "../node_modules/figuration/scss/mixins";

// Custom theme addition/removal go in this location
$btn-themes: map-remove('warning', 'light', 'dark');

// Core and Components
@import "../node_modules/figuration/scss/reboot";
@import "../node_modules/figuration/scss/typography";
...
{% endcapture %}
{% renderHighlight highlight, "sass" %}

## SASS Reference

### Variables

The available [Customization options]({{ site.path }}/{{ version.docs }}/get-started/options/), or Sass variables, that can be customized for colors.

<div class="table-scroll">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th style="width: 100px;">Name</th>
        <th style="width: 50px;">Type</th>
        <th style="width: 50px;">Default</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>$palette-levels</code></td>
        <td>string</td>
        <td><code>50 100 200 300 400 500 600 700 800 900</code></td>
        <td>
          Levels used to generate colors within the palettes.  Valid levels are integer values 0-1000, with 0 being the lightest, 1000 being the darkest, 500 results in an unchanged color.
        </td>
      </tr>
      <tr>
        <td><code>$palette-interval-light</code></td>
        <td>percentage</td>
        <td><code>.2%</code></td>
        <td>
          The percentage per palette level, less than 500, used to <a href="https://sass-lang.com/documentation/modules/color#mix">mix</a> a color against pure white (<code>#fff</code>).
        </td>
      </tr>
      <tr>
        <td><code>$palette-interval-dark</code></td>
        <td>percentage</td>
        <td><code>.15%</code></td>
        <td>
          The percentage per palette level used, greater than 500, to <a href="https://sass-lang.com/documentation/modules/color#mix">mix</a> a color against pure black (<code>#000</code>).
        </td>
      </tr>
      <tr>
        <td><code>$level-control</code></td>
        <td>string</td>
        <td>
<pre><code>("bg": 500,
"color": -1,
"border-color": 600,
"hover-bg": 600,
"hover-color": -1,
"hover-border-color": 700,
"active-bg": 700,
"active-color": -1,
"active-border-color": 700)</code></pre>
        </td>
        <td>
          <p>Palette levels for use in _mix-context-colors() to determine standardized color mapping for control items, such as buttons.</p>
          <p>Special values: level &lt; 0 = <code>#fff</code>, level &gt; 1000 = <code>#000</code>.</p>
        </td>
      </tr>
      <tr>
        <td><code>$level-context</code></td>
        <td>string</td>
        <td>
<pre><code>("bg": 100,
"color": 800,
"border-color": 200,
"hover-bg": 200,
"hover-color": 900,
"hover-border-color": 300,
"active-bg": 300,
"active-color": 900,
"active-border-color":300)</code></pre>
        </td>
        <td>
          <p>Palette levels for use in _mix-context-colors() to determine standardized color mapping for contextual items, such as alerts, lists, and tables.</p>
          <p>Special values: level &lt; 0 = <code>#fff</code>, level &gt; 1000 = <code>#000</code>.</p>
        </td>
      </tr>
      <tr>
        <td><code>$level-delta-hover-color</code></td>
        <td>integer</td>
        <td><code>100</code></td>
        <td>
          Increase (or decrease with negative number) to alter color for the hover state of <code>.text-{color}-(palette-level}</code> utility classes.
        </td>
      </tr>
      <tr>
        <td><code>$base-colors</code></td>
        <td>string</td>
        <td>
<pre><code>("primary": $primary,
"secondary": $secondary,
"info": $info,
"success": $success,
"warning": $warning,
"danger": $danger,
"light": $light,
"dark": $dark)</code></pre>
        </td>
        <td>
          Base color map used to generate the control and contextual variants.
        </td>
      </tr>
      <tr>
        <td><code>$palette-colors</code></td>
        <td>string</td>
        <td>
<pre><code>("uibase": $uibase,
"primary": $primary,
"secondary": $secondary,
"info": $info,
"success": $success,
"warning": $warning,
"danger": $danger,
"gray": $gray)</code></pre>
        </td>
        <td>
          Base color map used to generate the palette utility variants.
        </td>
      </tr>
      <tr>
        <td><code>$root-colors</code></td>
        <td>map</td>
        <td><code> map-merge($base-colors, $palette-colors)</code></td>
        <td>
          Colors to output as CSS variables.
        </td>
      </tr>
      <tr>
        <td><code>$color-contrast-min-ratio</code></td>
        <td>float</td>
        <td><code>4.5</code></td>
        <td>
          Minimum contrast ratio to use in Figuration's color contrast SASS functions.
          <code>4.5</code> is the <a href="https://www.w3.org/TR/WCAG21/#contrast-minimum">WCAG 2.1 level AA specification for contrast</a>.
        </td>
      </tr>
      <tr>
        <td><code>$color-contrast-base-light</code></td>
        <td>string</td>
        <td><code>$white</code></td>
        <td>
          Default light color to be used with the color contrast functions.
        </td>
      </tr>
      <tr>
        <td><code>$color-contrast-base-dark</code></td>
        <td>string</td>
        <td><code>$uibase-900</code></td>
        <td>
          Default dark color to be used with the color contrast functions.
        </td>
      </tr>
    </tbody>
  </table>
</div>

### Mixins

No mixins available.
