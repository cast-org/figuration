---
layout: docs
title: Customization Options
description: Customize Figuration using Sass variables for global style preferences, color themes, and component adjustments.
group: get-started
---

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Customizing Options

Whenever possible, avoid modifying Figurations's core files. For Sass, that means creating your own stylesheet that imports Figuration so you can modify and extend it. Assuming you've downloaded our source files or are using a package manager, you'll have a file structure that looks like this:

{% highlight plaintext %}
your-project/
+-- scss
|   +-- custom.scss
+-- node_modules/
    +-- figuration
        +-- js
        +-- scss
{% endhighlight %}

If you are using a download version of our source files, you may need to manually setup something similar to that structure, keeping Figuration's source files separate from your own.

{% highlight plaintext %}
your-project/
+-- scss
|   +-- custom.scss
+-- figuration
    +-- js
    +-- scss
{% endhighlight %}

## Importing

In your `custom.scss`, you will import Figuration's source Sass files. Our recommended structure is to pick the parts you need, but you can include everything if desired. Be aware there are some requirements and dependencies across our components, so you may need to include slightly more than you need. Some of our components will also need have our JavaScript included in order to become interactive.

{% highlight scss %}
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
{% endhighlight %}

With that setup in place, you can begin to modify any of the Sass variables and maps in your `custom.scss`. You can also start to add parts of Figuration under the `// Optional` section as needed.

## Variable Defaults

Every Sass variable, or setting, in Figuration includes the `!default` flag allowing you to override the variable's default value in your own Sass without modifying Figuration's source code. Copy and paste variables as needed, modify their values, and remove the `!default` flag. If a variable has already been assigned, then it won't be re-assigned by the default values.

You will find the complete list of Figuration's setting variables in `scss/_settings.scss`. Some variables are set to `null`, these variables don't output the property unless they are overridden in your configuration.

Variable overrides within the same Sass file can come before or after the default variables. However, when overriding across Sass files, your overrides must come before you import Figuration's Sass files.

Here's an example that changes the `background-color` and `color` for the `<body>` when importing and compiling Figuration via grunt:

{% highlight scss %}
// Required - functions
@import "../node_modules/figuration/scss/functions";

// Custom - your setting overrides
$body-bg: #000;
$body-color: #fff;

// Required - settings and mixins
@import "../node_modules/figuration/scss/settings";
@import "../node_modules/figuration/scss/mixins";

// Core and Components
@import "../node_modules/figuration/scss/reboot";
@import "../node_modules/figuration/scss/typography";
...
{% endhighlight %}

Repeat as necessary for any variable in Figuration, including the global options below.

Sometimes you may need to pull in other variables that you did not plan on.  This is due of the order in which the Sass fils are proceesed, and also the use of various functions, that may require their configuration settings to be copied over to your `custom.scss`.

## Sass Maps

Figuration uses a bunch of Sass maps, key-value pairs, to generate certain portions of related CSS. Sass maps are used for grid breakpoints, colors, component sizing, and more.

Just like Sass variables, all Sass maps include the `!default` flag and can be overridden and extended.

Some of our Sass maps are merged into empty ones by default. This is done to allow easy expansion of a given Sass map, but makes _removing_ items from a map slightly more difficult.

### Changing Map Defaults

Change a pre-defined color in the `$base-colors` map, by adding the following to your custom Sass file:

{% highlight scss %}
$base-colors: (
    "primary": #004dd1,
    "danger": #bb1f11
);
{% endhighlight %}

### Adding to a Map

To add another color option to `$base-colors`, add a new key-value pair.

{% highlight scss %}
$base-colors: (
    "new-color": #990099
);
{% endhighlight %}

### Removing from a Map

To remove colors from `$base-colors`, use `map-remove()`. The same method can be used with other Sass maps.

However, you will need to insert this setting after the *Required* sections and before the *Core and Components* section.

Also note, that each component will inherit the `$base-colors` map, unless previously overridden, before the removal occurs.  This means is you may need to remove the colors again for each component where desired.

{% highlight scss %}
// Required - functions
@import "../node_modules/figuration/scss/functions";

// Required - settings and mixins
@import "../node_modules/figuration/scss/settings";
@import "../node_modules/figuration/scss/mixins";

// Custom map removals go in this location
$base-colors: map-remove($base-colors, "warning", "light", "dark");
$btn-colors: map-remove($btn-colors, "warning", "light", "dark");

// Core and Components
@import "../node_modules/figuration/scss/reboot";
@import "../node_modules/figuration/scss/typography";
...
{% endhighlight %}

## Global Options

You can find and customize these variables for key global options in our `_settings.scss` file.

| Variable                      | Values                             | Description                                                                                      |
| ------------------------------| ---------------------------------- | -------------------------------------------------------------------------------------------------|
| `$spacer`                     | `1rem` (default), or any value > 0 | Specifies the default spacer value used to programmatically generate the [Spacing utilities]({{ site.baseurl }}/{{ site.docs_version }}/utilities/spacing/). |
| `$enable-rounded`             | `true` (default) or `false`        | Enables predefined `border-radius` styles on various components.                                 |
| `$enable-shadows`             | `true` or `false` (default)        | Enables predefined `box-shadow` styles on various components.                                    |
| `$enable-transitions`         | `true` (default) or `false`        | Enables predefined `transition`s on various components.                                          |
| `$enable-transitions-reduced` | `true` (default) or `false`        | Enables the generation of [`prefers-reduced-motion` media query]({{ site.baseurl }}/{{ site.docs_version }}/get-started/accessibility/#reduced-motion), which suppresses certain animations/transitions based on the users' browser/operating system preferences.|
| `$enable-grid-classes`        | `true` (default) or `false`        | Enables the generation of CSS classes for the grid system (e.g. `.container`, `.row`, `.col-md-1`, etc.). |
| `$enable-print-styles`        | `true` (default) or `false`        | Enables predefined style overrides used when printing.                                           |
| `$enable-palette`             | `true` (default) or `false`        | Enables the generation of CSS classes for the palette color themes (e.g. `.text-blue-500`, etc.). |
| `$enable-sizing`              | `true` (default) or `false`        | Enables the generation of CSS classes for component sizes, and also for some utilites. (e.g. `.btn-small`, `.radius-t-xsmall`, etc.). |
| `$enable-bp-smallest`         | `true` or `false` (default)        | Enables the generation of CSS classes for breakpoint sizes that include the smallest breakpoint designator. (e.g. `.col-xs-12`).  Also refer to the [Breakpoint Nomenclature]({{ site.baseurl }}/{{ site.docs_version }}/layout/overview/#breakpoint-nomenclature) section. |
| `$enable-rfs-fluid`           | `true` or `false` (default)        | Enables the *fluid* Responsive typography option, , which fluidly scales element's `font-size` based on the dimensions of the viewport.  See the [Responsive Typography]({{ site.baseurl }}/{{ site.docs_version }}/content/typography/#responsive-typography) section for more details. |
| `$enable-rfs-scale`           | `true` or `false` (default)        | Enables the *scaled* Responsive typography option, which scales element's `font-size` on a per breakpoint basis.  See the [Responsive Typography]({{ site.baseurl }}/{{ site.docs_version }}/content/typography/#responsive-typography) section for more details. |
| `$enable-validation-icons`    | `true` (default) or `false`        | Enables the generation of CSS classes for the optional `background-image` icons within textual inputs and some custom forms for validation states. |

There are additional options in our `_settings_options.scss` that can be used to optionally disable the CSS generation for certain sets, or subsets, of components and utilities.  More information about these setting options can be found on the respective pages for each component and utility.

## Component Sizes

The button, button group, pagination, form-control and input-group components all use the same base sizing settings for consistency.

By using a map, we can be sure the components are all the same height when horizontally aligned.

You can modify, remove, or add additional sizes, beyond the default sizing, by redefining the `$component-sizes` map.  The `null` values will use the component's default line-height and `em` padding for the that particular size variant.

Below is the default additional settings for reference.

{% highlight scss %}
// Used for button, button groups, pagination, form-control, and input-group
$component-sizes: (
    "xsmall": (
        "padding-y":     null,
        "padding-x":     null,
        "font-size":     ($font-size-base * .75),
        "line-height":   null,
        "border-radius": .1875rem
    ),
    "small": (
        "padding-y":     null,
        "padding-x":     null,
        "font-size":     ($font-size-base * .875),
        "line-height":   null,
        "border-radius": .1875rem
    ),
    "large": (
        "padding-y":     null,
        "padding-x":     null,
        "font-size":     ($font-size-base * 1.125),
        "line-height":   null,
        "border-radius": .3125rem
    ),
    "xlarge": (
        "padding-y":     null,
        "padding-x":     null,
        "font-size":     ($font-size-base * 1.25),
        "line-height":   null,
        "border-radius": .3125rem
    )
);
{% endhighlight %}

If you wish to have more concise control over components, you can always force the sizing values to fit your needs.

{% highlight scss %}
// Used for button, button groups, pagination, form-control, and input-group
$component-sizes: (
    xsmall: (
        font-size:      .75rem,
        padding-y:      .1875rem,
        padding-x:      .375rem,
        border-radius:  .1875rem
    ),
    small: (
        font-size:      .875rem,
        padding-y:      .25rem,
        padding-x:      .5rem,
        border-radius:  .1875rem
   ),
    large: (
        font-size:      1.25rem,
        padding-y:      .625rem,
        padding-x:      1.25rem,
        border-radius:  .3125rem
    ),
    xlarge: (
        font-size:      1.5rem,
        padding-y:      .75rem,
        padding-x:      1.5rem,
        border-radius:  .3125rem
    )
);
{% endhighlight %}

## Color Themes

Here are the names and base color values for the color themes used throughout Figuration.  These colors are used to expand into a palette style color system, as seen below.

There is more information about working with the themes over in the Get Started section, under [Options: Color Themes]({{ site.baseurl }}/{{ site.docs_version }}/get-started/options/#color-themes).

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

{% highlight sass %}
.custom-element {
    color: $primary;
}
{% endhighlight %}


## Color Palette

Figuration uses a simplified color palettes extended from our base colors, similar to the concept by [Google's Material color palettes](https://www.google.com/design/spec/style/color.html#color-color-palette).

By 'simplified' we mean the base colors are simply mixed against white or black in stepped levels to create a color scale.

Since our base colors tend to be on the dark side, there is a skew in the mixing percentages between the light and dark sides so that we don't reach pure black before hitting the top of the scale.

More information and examples about using the color palette and related utilities is available on the [color utilities page]({{ site.baseurl }}/{{ site.docs_version }}/utilities/color/).

{% include callout-warning-color-assistive-technologies.md %}

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

{% highlight sass %}
palette($color, $level)
{% endhighlight %}

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
                     Valid levels are integer values 0-1000, with 0 being the lightest, 1000 being the darkest, 500 results in an unchanged color. Special values: level < 0 = <code>#fff</code>, level > 1000 = <code>#000</code>.
                </td>
            </tr>
        </tbody>
    </table>
</div>

Sample usage within SASS:

{% highlight sass %}
.custom-element {
    color: palette($primary, 600);
}
{% endhighlight %}

## Color Contrast

Figuration includes a handful of color contrast functions based the [WCAG 2.1 minimum contrast specification](https://www.w3.org/TR/WCAG21/#contrast-minimum), using the related [contrast ratio](https://www.w3.org/TR/WCAG21/#dfn-contrast-ratio) and [relative luminance](https://www.w3.org/TR/WCAG21#dfn-relative-luminance) formulas to determine contrast ratios.

### color-contrast()

Returns either a light (`#fff`) or dark (`#262d34`) color compared against a given one based on the minimum contrast ratio setting.

{% highlight sass %}
color-contrast($color, $light: $color-contrast-base-light, $dark: $color-contrast-base-dark)
{% endhighlight %}

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

{% highlight sass %}
color-max-contrast($color)
{% endhighlight %}

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

{% highlight sass %}
color-auto-contrast($color, $light: $color-contrast-base-light, $dark: $color-contrast-base-dark)
{% endhighlight %}

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

{% highlight sass %}
color-if-contrast($colorfore, $colorback, $light: $color-contrast-base-light, $dark: $color-contrast-base-dark) {
{% endhighlight %}

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

### Add Mixed Theme

Figuration uses mixed themes to build out our components. This way color stays consitent across all aspects of the component.

You can mix your own theme by using the

_mix-context-colors($colors, $levels)

**** TODO *****

### Add Custom Theme

You can also add a color map without all the additional color mixing functions with something a bit simpler.

{% highlight scss %}
// Adding a color theme
$single-color: (
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
{% endhighlight %}

{% highlight scss %}
// Required - functions
@import "../node_modules/figuration/scss/functions";

// Required - settings and mixins
@import "../node_modules/figuration/scss/settings";
@import "../node_modules/figuration/scss/mixins";

// Custom theme addition/removal go in this location
$btn-themes: map-merge($btn-themes, $single-color);

// Core and Components
@import "../node_modules/figuration/scss/reboot";
@import "../node_modules/figuration/scss/typography";
...
{% endhighlight %}

### Remove Theme

Just like removing from the color maps, use `map-remove()` to remove themes from `$btn-themes`.

As before, insert this setting after the *Required* sections and before the *Core and Components* section.

{% highlight scss %}
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
{% endhighlight %}

## Encoding SVG

An `encode-svg` function is available in our SASS to encode the `<`, `>` and `#` characters for SVG images provided through data URLs. These characters need to be encoded to properly render the background images in some browsers, such as IE.

{% highlight css %}
$form-checkradio-radio-icon: encode-svg(url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle fill='#{$form-checkradio-checked-color}' r='3'/></svg>")) !default;
{% endhighlight %}

## CSS Variables

Figuration includes some [CSS custom properties (variables)](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables) in its compiled CSS. These provide easy access to commonly used values like the theme colors, breakpoints, and primary font stacks when working in your browser's Inspector, a code sandbox, or general prototyping.

### Available Variables

Here are the variables we include (note that the `:root` is required). They're located in our `_root.scss` file.

{% highlight css %}
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
  --font-family-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Noto Sans", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --font-family-serif: Georgia, "Times New Roman", Times, serif;
  --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}
{% endhighlight %}

### Examples

CSS variables offer similar flexibility to Sass's variables, but without the need for compilation before being served to the browser. For example, here we are resetting the font and link styles with CSS variables.

{% highlight css %}
body {
  font: 1rem/1.5 var(--font-family-sans-serif);
}
a {
  color: var(--color-primary);
}
{% endhighlight %}

### Breakpoint Variables

While breakpoints are included in the CSS variables (e.g., `--breakpoint-md`), **these are not supported in media queries**, but they can still be used _within_ rulesets in media queries. [Learn more in the spec.](https://www.w3.org/TR/css-variables-1/#using-variables) The intention of including the breakpoints as CSS variables is for use in JavaScript. See some information about [working with custom properties in JavaScript](https://developers.google.com/web/updates/2016/02/css-variables-why-should-you-care#working_with_custom_properties_in_javascript).

Here's an example of **what's not supported:**

{% highlight css %}
@media (min-width: var(--breakpoint-sm)) {
  ...
}
{% endhighlight %}

And here's an example of **what is supported:**

{% highlight css %}
@media (min-width: 48em) {
  .custom-element {
    color: var(--color-primary);
  }
}
{% endhighlight %}

## SASS Reference

### Variables

The available [Customization options]({{ site.baseurl }}/{{ site.docs_version }}/get-started/options/), or Sass variables, that can be customized for generating the root CSS variables.

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
                    The percentage per palette level, less than 500, used to <a href="https://sass-lang.com/documentation/functions/color#mix">mix</a> a color against pure white (<code>#fff</code>).
                </td>
            </tr>
            <tr>
                <td><code>$palette-interval-dark</code></td>
                <td>percentage</td>
                <td><code>.15%</code></td>
                <td>
                    The percentage per palette level used, greater than 500, to <a href="https://sass-lang.com/documentation/functions/color#mix">mix</a> a color against pure black (<code>#000</code>).
                </td>
            </tr>
            <tr>
                <td><code>$level-control</code></td>
                <td>string</td>
                <td>
<code><pre>("bg": 500,
"color": -1,
"border-color": 600,
"hover-bg": 600,
"hover-color": -1,
"hover-border-color": 700,
"active-bg": 700,
"active-color": -1,
"active-border-color": 700)</pre></code>
                </td>
                <td>
                    <p>Palette levels for use in _mix-context-colors() to determine standardized color mapping for control items, such as buttons.</p>
                    <p>Special values: level < 0 = <code>#fff</code>, level > 1000 = <code>#000</code>.</p>
                </td>
            </tr>
            <tr>
                <td><code>$level-context</code></td>
                <td>string</td>
                <td>
<code><pre>("bg": 100,
"color": 800,
"border-color": 200,
"hover-bg": 200,
"hover-color": 900,
"hover-border-color": 300,
"active-bg": 300,
"active-color": 900,
"active-border-color":300)</pre></code>
                </td>
                <td>
                    <p>Palette levels for use in _mix-context-colors() to determine standardized color mapping for contextual items, such as alerts, lists, and tables.</p>
                    <p>Special values: level < 0 = <code>#fff</code>, level > 1000 = <code>#000</code>.</p>
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
<code><pre>("primary": $primary,
"secondary": $secondary,
"info": $info,
"success": $success,
"warning": $warning,
"danger": $danger,
"light": $light,
"dark": $dark)</pre></code>
                </td>
                <td>
                    Base color map used to generate the control and contextual variants.
                </td>
            </tr>
            <tr>
                <td><code>$palette-colors</code></td>
                <td>string</td>
                <td>
<code><pre>("uibase": $uibase,
"primary": $primary,
"secondary": $secondary,
"info": $info,
"success": $success,
"warning": $warning,
"danger": $danger,
"gray": $gray)</pre></code>
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
