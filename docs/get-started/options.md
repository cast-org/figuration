---
layout: docs
title: Customization Options
group: get-started
---

Customize Figuration using Sass variables for global style preferences, color themes, and component adjustments.

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
$control-colors: (
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
| `$spacer`                     | `1rem` (default), or any value > 0 | Specifies the default spacer value used to programmatically generate the [Spacing utilities]({{ site.baseurl }}/utilities/spacing/). |
| `$enable-rounded`             | `true` (default) or `false`        | Enables predefined `border-radius` styles on various components.                                 |
| `$enable-shadows`             | `true` or `false` (default)        | Enables predefined `box-shadow` styles on various components.                                    |
| `$enable-transitions`         | `true` (default) or `false`        | Enables predefined `transition`s on various components.                                          |
| `$enable-transitions-reduced` | `true` (default) or `false`        | Enables the generation of [`prefers-reduced-motion` media query]({{ site.baseurl }}/getting-started/accessibility/#reduced-motion), which suppresses certain animations/transitions based on the users' browser/operating system preferences.|
| `$enable-grid-classes`        | `true` (default) or `false`        | Enables the generation of CSS classes for the grid system (e.g. `.container`, `.row`, `.col-md-1`, etc.). |
| `$enable-print-styles`        | `true` (default) or `false`        | Enables predefined style overrides used when printing.                                           |
| `$enable-palette`             | `true` (default) or `false`        | Enables the generation of CSS classes for the palette color themes (e.g. `.text-blue-500`, etc.). |
| `$enable-sizing`              | `true` (default) or `false`        | Enables the generation of CSS classes for component sizes, and also for some utilites. (e.g. `.btn-small`, `.radius-t-xsmall`, etc.). |
| `$enable-bp-smallest`         | `true` or `false` (default)        | Enables the generation of CSS classes for breakpoint sizes that include the smallest breakpoint designator. (e.g. `.col-xs-12`).  Also refer to the [Breakpoint Nomenclature]({{ site.baseurl }}/layout/overview/#breakpoint-nomenclature) section. |
| `$enable-rfs-fluid`           | `true` or `false` (default)        | Enables the *fluid* Responsive typography option, , which fluidly scales element's `font-size` based on the dimensions of the viewport.  See the [Responsive Typography]({{ site.baseurl}}/content/typography/#responsive-typography) section for more details. |
| `$enable-rfs-scale`           | `true` or `false` (default)        | Enables the *scaled* Responsive typography option, which scales element's `font-size` on a per breakpoint basis.  See the [Responsive Typography]({{ site.baseurl}}/content/typography/#responsive-typography) section for more details. |
| `$enable-validation-icons`    | `true` (default) or `false`        | Enables the generation of CSS classes for the optional `background-image` icons within textual inputs and some custom forms for validation states. |

There are additional options in our `_settings_options.scss` that can be used to optionally disable the CSS generation for certain sets, or subsets, of components and utilities.  More information about these setting options can be found on the respective pages for each component and utility.

## Component Sizes

The button, button group, pagination, form-control and input-group components all use the same base sizing settings for consitency.

By using a map, we can be sure the components are all the same height when horizontally aligned.

{% callout info %}
`<select>` Sizing Caveat
{:.h5}

Currently there is a minor issue with vertical sizing and `<select>` elements with Internet Explorer.  IE will render `<select>` elements slightly shorter in vertical height than other browsers.

This has not undergone stringent testing on mobile devices yet.

{% endcallout %}

You can modify, remove, or add additional sizes, beyond the default sizing, by redefining the `$component-sizes` variable and
Below is the default additional settings for reference.  Try not to confuse the size designations (`sm`, `lg`, etc.) with the grid breakpoints designations.

{% highlight scss %}
// Used for button, button groups, pagination, form-control, and input-group
$component-sizes: (
    xs: (
        font-size:      .75rem,
        padding-y:      .1875rem,
        padding-x:      .375rem,
        border-radius:  .1875rem
    ),
    sm: (
        font-size:      .875rem,
        padding-y:      .25rem,
        padding-x:      .5rem,
        border-radius:  .1875rem
   ),
    lg: (
        font-size:      1.25rem,
        padding-y:      .625rem,
        padding-x:      1.25rem,
        border-radius:  .3125rem
    ),
    xl: (
        font-size:      1.5rem,
        padding-y:      .75rem,
        padding-x:      1.5rem,
        border-radius:  .3125rem
    )
);
{% endhighlight %}

## Color Themes

Colors that are defined in the `$control-color` and

### Adding a Theme

Extend the default contextual color map with your own custom colors.

Yes, it is a substantial and confusing piece of SCSS, but allows for reasonable flexibility.

The `$control-themes` map is used by mainly by control items---specifically---buttons, badges, and switches.

The `$context-themes` map is used for contextual items---specifically---alerts, lists, and tables.

You can also add a single color map without all the additional color mixing functions with something a bit simpler.

{% highlight scss %}
// Adding a color theme
$single-color: (
    "purple": (
        "bg":                        #990099,
        "color":                     #fff,
        "border-color":              #800080,
        "hover-bg":                  #770077,
        "hover-color":               #fff,
        "hover-border-color":        #660066,
        "active-hover-bg":           #ffb3ff,
        "active-hover-color":        #990099,
        "active-hover-border-color": #ff29ff
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

### Removing a Theme

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

## Palette Variables

When enabled, any theme in the `$palette-themes` map get CSS generated for each defined level for both text and background variants.

{% highlight scss %}
// Palette Colors
$red:       #c81d0e;
$green:     #108918;
$blue:      #1242ba;
$cyan:      #117dba;
$yellow:    #c98800;
$gray:      #666;

// Palette Map
$palette-themes: (
    "red":      $red,
    "green":    $green,
    "blue":     $blue,
    "cyan":     $cyan,
    "yellow":   $yellow,
    "gray":     $gray
);
{% endhighlight %}

The default setting for the color levels to be generated is defined as the following.

{% highlight scss %}
$palette-levels: 50 100 200 300 400 500 600 700 800 900;
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

### SASS Reference

#### Variables

The available [Customization options]({{ site.baseurl }}/get-started/options/), or Sass variables, that can be customized for generating the root CSS variables.

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
                <td><code>$root-colors</code></td>
                <td>map</td>
                <td><code> map-merge($base-colors, $palette-colors)</code></td>
                <td>
                    Colors to output as CSS variables.
                </td>
            </tr>
        </tbody>
    </table>
</div>

#### Mixins

No mixins available.
