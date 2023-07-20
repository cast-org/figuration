---
layout: doc
title: Customization Options
description: Customize Figuration using Sass variables for global style preferences, color themes, and component adjustments.
group: get-started
toc: true
---

## Customizing Options

Whenever possible, avoid modifying Figurations's core files. For Sass, that means creating your own stylesheet that imports Figuration so you can modify and extend it. Assuming you've downloaded our source files or are using a package manager, you'll have a file structure that looks like this:

{% capture highlight %}
your-project/
+-- scss
|   +-- custom.scss
+-- node_modules/
    +-- figuration
        +-- js
        +-- scss
{% endcapture %}
{% renderHighlight highlight, "text" %}

If you are using a download version of our source files, you may need to manually setup something similar to that structure, keeping Figuration's source files separate from your own.

{% capture highlight %}
your-project/
+-- scss
|   +-- custom.scss
+-- figuration
    +-- js
    +-- scss
{% endcapture %}
{% renderHighlight highlight, "text" %}

## Importing

In your `custom.scss`, you will import Figuration's source Sass files. Our recommended structure is to pick the parts you need, but you can include everything if desired. Be aware there are some requirements and dependencies across our components, so you may need to include slightly more than you need. Some of our components will also need have our JavaScript included in order to become interactive.

{% capture highlight %}
// custom.scss
// Recommended structure for importing Figuration into your
// project allowing for use of Figuration's Sass functions
// in your custom setting overrides

// Required - functions
@import "../node_modules/figuration/scss/functions";

// Custom - your setting overrides
// typically go in this location

// Required - settings
@import "../node_modules/figuration/scss/settings";
@import "../node_modules/figuration/scss/settings-options";

// Custom - your setting removals
// typically go in this location

// Required - mixins
@import "../node_modules/figuration/scss/mixins";

// Core and Components
@import "../node_modules/figuration/scss/root";
@import "../node_modules/figuration/scss/reboot";
@import "../node_modules/figuration/scss/typography";
@import "../node_modules/figuration/scss/images";
@import "../node_modules/figuration/scss/buttons";
@import "../node_modules/figuration/scss/grid";
...
{% endcapture %}
{% renderHighlight highlight, "sass" %}

With that setup in place, you can begin to modify any of the Sass variables and maps in your `custom.scss`. You can also start to add parts of Figuration under the `// Optional` section as needed.

## Variable Defaults

Every Sass variable, or setting, in Figuration includes the `!default` flag allowing you to override the variable's default value in your own Sass without modifying Figuration's source code. Copy and paste variables as needed, modify their values, and remove the `!default` flag. If a variable has already been assigned, then it won't be re-assigned by the default values.

You will find the complete list of Figuration's setting variables in `scss/_settings.scss`. Some variables are set to `null`, these variables don't output the property unless they are overridden in your configuration.

Variable overrides within the same Sass file can come before or after the default variables. However, when overriding across Sass files, your overrides must come before you import Figuration's Sass files.

Here's an example that changes the `background-color` and `color` for the `<body>` when importing and compiling Figuration via grunt:

{% capture highlight %}
// Required - functions
@import "../node_modules/figuration/scss/functions";

// Custom - your setting overrides
$body-bg: #000;
$body-color: #fff;

// Required - settings and mixins
@import "../node_modules/figuration/scss/settings";
@import "../node_modules/figuration/scss/settings-options";
@import "../node_modules/figuration/scss/mixins";

// Core and Components
@import "../node_modules/figuration/scss/reboot";
@import "../node_modules/figuration/scss/typography";
...
{% endcapture %}
{% renderHighlight highlight, "sass" %}

Repeat as necessary for any variable in Figuration, including the global options below.

Sometimes you may need to pull in other variables that you did not plan on.  This is due of the order in which the Sass fils are proceesed, and also the use of various functions, that may require their configuration settings to be copied over to your `custom.scss`.

## Sass Maps

Figuration uses a bunch of Sass maps, key-value pairs, to generate certain portions of related CSS. Sass maps are used for grid breakpoints, colors, component sizing, and more.

Just like Sass variables, all Sass maps include the `!default` flag and can be overridden and extended.

Some of our Sass maps are merged into empty ones by default. This is done to allow easy expansion of a given Sass map, but makes _removing_ items from a map slightly more difficult.

### Changing Map Defaults

Change a pre-defined color in the `$base-colors` map, by adding the following to your custom Sass file:

{% capture highlight %}
$base-colors: (
  "primary": #004dd1,
  "danger": #bb1f11
);
{% endcapture %}
{% renderHighlight highlight, "sass" %}

### Adding to a Map

Add new colors to `$base-colors`, or any other map, by creating a new Sass map with your custom values and merging it with the original map. In this case, we'll create a new `$custom-colors` map and merge it with `$base-colors`.

{% capture highlight %}
// Create your own map
$custom-colors: (
  "custom-color": #909
);

// Merge the maps
$base-colors: map-merge($base-colors, $custom-colors);
{% endcapture %}
{% renderHighlight highlight, "sass" %}

### Removing from a Map

To remove colors from `$base-colors`, use `map-remove()`. The same method can be used with other Sass maps.

However, you will need to insert this setting after the *Required* sections and before the *Core and Components* section.

Also note, that each component will inherit the `$base-colors` map, unless previously overridden, before the removal occurs.  This means is you may need to remove the colors again for each component where desired.

{% capture highlight %}
// Required - functions
@import "../node_modules/figuration/scss/functions";

// Required - settings and mixins
@import "../node_modules/figuration/scss/settings";
@import "../node_modules/figuration/scss/settings-options";
@import "../node_modules/figuration/scss/mixins";

// Custom map removals go in this location
$base-colors: map-remove($base-colors, "warning", "light", "dark");
$btn-colors: map-remove($btn-colors, "warning", "light", "dark");

// Core and Components
@import "../node_modules/figuration/scss/reboot";
@import "../node_modules/figuration/scss/typography";
...
{% endcapture %}
{% renderHighlight highlight, "sass" %}

## Global Options

You can find and customize these variables for key global options in our `_settings.scss` file.

<div class="table-scroll">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th>Variable</th>
        <th>Values</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>$spacer</code></td>
        <td><code>1rem</code> (default), or any value > 0</td>
        <td>Specifies the default spacer value used to programmatically generate the <a href="{{ site.path }}/{{ version.docs }}/utilities/spacing/">Spacing utilities</a>.</td>
      </tr>
      <tr>
        <td><code>$enable-rounded</code></td>
        <td><code>true</code> (default) or <code>false</code></td>
        <td>Enables predefined <code>border-radius</code> styles on various components.</td>
      </tr>
      <tr>
        <td><code>$enable-shadows</code></td>
        <td><code>true</code> or <code>false</code> (default)</td>
        <td>Enables predefined decorative <code>box-shadow</code> styles on various components. Does not affect <code>box-shadow</code>s used for focus states.</td>
      </tr>
      <tr>
        <td><code>$enable-transitions</code></td>
        <td><code>true</code> (default) or <code>false</code></td>
        <td>Enables predefined <code>transition</code>s on various components.</td>
      </tr>
      <tr>
        <td><code>$enable-transitions-reduced</code></td>
        <td><code>true</code> (default) or <code>false</code></td>
        <td>Enables the generation of <a href="{{ site.path }}/{{ version.docs }}/get-started/accessibility/#reduced-motion"><code>prefers-reduced-motion</code> media query</a>, which suppresses certain animations/transitions based on the users' browser/operating system preferences.</td>
      </tr>
      <tr>
        <td><code>$enable-smooth-scroll</code></td>
        <td><code>true</code> (default) or <code>false</code></td>
        <td>Enables <code>scroll-behavior: smooth</code> globally, except for users asking for reduced motion through <a href="{{ site.path }}/{{ version.docs }}/get-started/accessibility/#reduced-motion"><code>prefers-reduced-motion</code> media query</a>.</td>
      </tr>
      <tr>
        <td><code>$enable-grid-classes</code></td>
        <td><code>true</code> (default) or <code>false</code></td>
        <td>Enables the generation of CSS classes for the grid system (e.g. <code>.container</code>, <code>.row</code>, <code>.col-md-1</code>, etc.).</td>
      </tr>
      <tr>
        <td><code>$enable-print-styles</code></td>
        <td><code>true</code> (default) or <code>false</code></td>
        <td>Enables predefined style overrides used when printing.</td>
      </tr>
      <tr>
        <td><code>$enable-palette</code></td>
        <td><code>true</code> (default) or <code>false</code></td>
        <td>Enables the generation of CSS classes for the palette color themes (e.g. <code>.text-blue-500</code>, etc.).</td>
      </tr>
      <tr>
        <td><code>$enable-sizing</code></td>
        <td><code>true</code> (default) or <code>false</code></td>
        <td>Enables the generation of CSS classes for component sizes, and also for some utilites. (e.g. <code>.btn-small</code>, <code>.radius-t-xsmall</code>, etc.).</td>
      </tr>
      <tr>
        <td><code>$enable-bp-smallest</code></td>
        <td><code>true</code> or <code>false</code> (default)</td>
        <td>Enables the generation of CSS classes for breakpoint sizes that include the smallest breakpoint designator. (e.g. <code>.col-xs-12</code>).  Also refer to the <a href="{{ site.path }}/{{ version.docs }}/layout/breakpoints/#breakpoint-nomenclature">Breakpoint Nomenclature</a> section.</td>
      </tr>
      <tr>
        <td><code>$enable-rfs-fluid</code></td>
        <td><code>true</code> or <code>false</code> (default)</td>
        <td>Enables the *fluid* Responsive typography option, , which fluidly scales element's <code>font-size</code> based on the dimensions of the viewport.  See the <a href="{{ site.path }}/{{ version.docs }}/content/typography/#responsive-typography">Responsive Typography</a> section for more details.</td>
      </tr>
      <tr>
        <td><code>$enable-rfs-scale</code></td>
        <td><code>true</code> or <code>false</code> (default)</td>
        <td>Enables the *scaled* Responsive typography option, which scales element's <code>font-size</code> on a per breakpoint basis.  See the <a href="{{ site.path }}/{{ version.docs }}/content/typography/#responsive-typography">Responsive Typography</a> section for more details.</td>
      </tr>
    </tbody>
  </table>
</div>
There are additional options in our `_settings_options.scss` that can be used to optionally disable the CSS generation for certain sets, or subsets, of components and utilities.  More information about these setting options can be found on the respective pages for each component and utility.

## Color

Learn about Figuration's colors, themes, palette system, and how to more about customizing it over on the [color documentation page]({{ site.path }}/{{ version.docs }}/content/color/).

## Component Sizes

The button, button group, pagination, form-control and input-group components all use the same base sizing settings for consistency.

By using a map, we can be sure the components are all the same height when horizontally aligned.

You can modify, remove, or add additional sizes, beyond the default sizing, by redefining the `$component-sizes` map.  The `null` values will use the component's default line-height and `em` padding for the that particular size variant.

Below is the default additional settings for reference.

{% capture highlight %}
// Used for button, button groups, pagination, form-control, and input-group
$component-sizes: (
  "xsmall": (
    "padding-y":     null,
    "padding-x":     null,
    "font-size":     ($font-size-base * .75),
    "line-height":   null,
    "border-radius": .25rem
  ),
  "small": (
    "padding-y":     null,
    "padding-x":     null,
    "font-size":     ($font-size-base * .875),
    "line-height":   null,
    "border-radius": .25rem
  ),
  "large": (
    "padding-y":     null,
    "padding-x":     null,
    "font-size":     ($font-size-base * 1.125),
    "line-height":   null,
    "border-radius": .375rem
  ),
  "xlarge": (
    "padding-y":     null,
    "padding-x":     null,
    "font-size":     ($font-size-base * 1.25),
    "line-height":   null,
    "border-radius": .5rem
  )
) !default;
{% endcapture %}
{% renderHighlight highlight, "sass" %}

If you wish to have more concise control over components, you can always force the sizing values to fit your needs.

{% capture highlight %}
// Used for button, button groups, pagination, form-control, and input-group
$component-sizes: (
  "xsmall": (
    "padding-y":     .1875rem,
    "padding-x":     .375rem,
    "font-size":     .75rem,
    "line-height":   1.5,
    "border-radius": .1875rem
  ),
  "small": (
    "padding-y":     .25rem,
    "padding-x":     .5rem,
    "font-size":     .875rem,
    "line-height":   1.5,
    "border-radius": .1875rem
  ),
  "large": (
    "padding-y":     .625rem,
    "padding-x":     1.25rem,
    "font-size":     1.25rem,
    "line-height":   1.5,
    "border-radius": .3125rem
  ),
  "xlarge": (
    "padding-y":     .75rem,
    "padding-x":     1.5rem,
    "font-size":     1.5rem,
    "line-height":   1.5,
    "border-radius": .3125rem
  )
);
{% endcapture %}
{% renderHighlight highlight, "sass" %}

## Encoding SVG

An `encode-svg` function is available in our SASS to encode the `<`, `>` and `#` characters for SVG images provided through data URIs. These characters need to be encoded to properly render the background images in some browsers, such as IE.  Data URIs passed through `encode-svg()` must be surrounded by quotes, as seen below. If customizing a CSS variable, you must handle this yourself. Read [Kevin Weber's explanations on CodePen](https://codepen.io/kevinweber/pen/dXWoRw ) for more info.

{% capture highlight %}
$form-checkradio-radio-icon: encode-svg(url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle fill='#{$form-checkradio-checked-color}' r='3'/></svg>")) !default;
{% endcapture %}
{% renderHighlight highlight, "css" %}

## CSS Variables

Figuration includes some [CSS custom properties (variables)](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables) in its compiled CSS. These provide easy access to commonly used values like the theme colors, breakpoints, and primary font stacks when working in your browser's Inspector, a code sandbox, or general prototyping.

### Available Variables

Here are the variables we include (note that the `:root` is required). They're located in our `_root.scss` file.

{% capture highlight %}
:root {
  --color-primary: #0055e9;
  --color-secondary: #5e7182;
  --color-info: #1680a4;
  --color-success: #0e8a16;
  --color-warning: #f8c223;
  --color-danger: #d42314;
  --color-light: #eff1f3;
  --color-dark: #343e48;
  --color-uibase: #5e7182;
  --color-gray: #666;
  --breakpoint-xs: 0;
  --breakpoint-sm: 36em;
  --breakpoint-md: 48em;
  --breakpoint-lg: 62em;
  --breakpoint-xl: 75em;
  --font-family-sans-serif: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --font-family-serif: Georgia, "Times New Roman", Times, serif;
  --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}
{% endcapture %}
{% renderHighlight highlight, "css" %}

### Examples

CSS variables offer similar flexibility to Sass's variables, but without the need for compilation before being served to the browser. For example, here we are resetting the font and link styles with CSS variables.

{% capture highlight %}
body {
  font: 1rem/1.5 var(--font-family-sans-serif);
}
a {
  color: var(--color-primary);
}
{% endcapture %}
{% renderHighlight highlight, "css" %}

### Breakpoint Variables

While breakpoints are included in the CSS variables (e.g., `--breakpoint-md`), **these are not supported in media queries**, but they can still be used _within_ rulesets in media queries. [Learn more in the spec.](https://www.w3.org/TR/css-variables-1/#using-variables) The intention of including the breakpoints as CSS variables is for use in JavaScript. See some information about [working with custom properties in JavaScript](https://developers.google.com/web/updates/2016/02/css-variables-why-should-you-care#working_with_custom_properties_in_javascript).

Here's an example of **what's not supported:**

{% capture highlight %}
@media (min-width: var(--breakpoint-sm)) {
  ...
}
{% endcapture %}
{% renderHighlight highlight, "css" %}

And here's an example of **what is supported:**

{% capture highlight %}
@media (min-width: 48em) {
  .custom-element {
    color: var(--color-primary);
  }
}
{% endcapture %}
{% renderHighlight highlight, "css" %}

## SASS Reference

### Variables

Here are some Customization options, or Sass variables, that can be customized for generating the root CSS variables.

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
        <td><code>$enable-root</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of root CSS variables.
          Smaller segements of the root CSS variables can be disabled with the following <code>$enable-*</code> variables.
        </td>
      </tr>
      <tr>
        <td><code>$enable-root-colors</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the color CSS variables.
        </td>
      </tr>
      <tr>
        <td><code>$enable-root-breakpoints</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the breakpoint CSS variables.
        </td>
      </tr>
      <tr>
        <td><code>$enable-root-fonts</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the font CSS variables.
        </td>
      </tr>
    </tbody>
  </table>
</div>

### Mixins

No mixins available.
