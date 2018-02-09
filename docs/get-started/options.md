---
layout: docs
title: Customization Options
group: get-started
---

Customize Figuration using Sass variables for global style preferences, easy theming, and component adjustments.

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

In your `custom.scss`, you will import Figuration's source Sass files. Our recommended structure is to pick the parts you need, but you can include everything if desired. Be aware there are some requirements and dependencies across our components, so you may need to include slightly more than you need. Some of our components will also need have our our JavaScript included in order to become interactive.

{% highlight scss %}
// custom.scss
// Recommended structure for importing Figuration into your
// project allowing for use of Figuration's Sass functions
// in your custom setting overrides

// Required - functions
@import "node_modules/figuration/scss/functions";

// Custom - your setting overrides
// go in this location

// Required - settings and mixins
@import "node_modules/figuration/scss/settings";
@import "node_modules/figuration/scss/mixins";

// Core and Components
@import "node_modules/figuration/scss/reboot";
@import "node_modules/figuration/scss/typography";
@import "node_modules/figuration/scss/images";
@import "node_modules/figuration/scss/buttons";
@import "node_modules/figuration/scss/grid";
...
{% endhighlight %}

With that setup in place, you can begin to modify any of the Sass variables and maps in your `custom.scss`. You can also start to add parts of Figuration under the `// Optional` section as needed.

## Variable Defaults

Every Sass variable, or setting, in Figuration includes the `!default` flag allowing you to override the variable's default value in your own Sass without modifying Figuration's source code. Copy and paste variables as needed, modify their values, and remove the `!default` flag. If a variable has already been assigned, then it won't be re-assigned by the default values.

Variable overrides within the same Sass file can come before or after the default variables. However, when overriding across Sass files, your overrides must come before you import Figuration's Sass files.

Here's an example that changes the `background-color` and `color` for the `<body>` when importing and compiling Figuration via grunt:

{% highlight scss %}
// Required - functions
@import "node_modules/figuration/scss/functions";

// Custom - your setting overrides
$body-bg: #000;
$body-color: #fff;

// Required - settings and mixins
@import "node_modules/figuration/scss/settings";
@import "node_modules/figuration/scss/mixins";

// Core and Components
...
{% endhighlight %}

Repeat as necessary for any variable in Figuration, including the global options below.

## Global Options

You can find and customize these variables for key global options in our `_settings.scss` file.

| Variable               | Values                             | Description                                                                                      |
| ---------------------- | ---------------------------------- | -------------------------------------------------------------------------------------------------|
| `$spacer`              | `1rem` (default), or any value > 0 | Specifies the default spacer value used to programmatically generate the [Spacing utilities]({{ site.baseurl }}/utilities/spacing/). |
| `$enable-rounded`      | `true` (default) or `false`        | Enables predefined `border-radius` styles on various components.                                 |
| `$enable-shadows`      | `true` or `false` (default)        | Enables predefined `box-shadow` styles on various components.                                    |
| `$enable-transitions`  | `true` (default) or `false`        | Enables predefined `transition`s on various components.                                          |
| `$enable-grid-classes` | `true` (default) or `false`        | Enables the generation of CSS classes for the grid system (e.g. `.container`, `.row`, `.col-md-1`, etc.). |
| `$enable-print-styles` | `true` (default) or `false`        | Enables predefined style overrides used when printing.                                           |
| `$enable-palette`      | `true` (default) or `false`        | Enables the generation of CSS classes for the palette color themes (e.g. `.text-blue-500`, etc.). |
| `$enable-sizing`       | `true` (default) or `false`        | Enables the generation of CSS classes for component sizes, and also for some utilites. (e.g. `.btn-sm`, `.radius-t-xs`, etc.). |
| `$enable-bp-smallest`  | `true` or `false` (default)        | Enables the generation of CSS classes for breakpoint sizes that include the smallest breakpoint designator. (e.g. `.col-xs-12`).  Also refer to the [Breakpoint Nomenclature]({{ site.baseurl }}/layout/overview/#breakpoint-nomenclature) section. |
| `$enable-rfs-fluid`    | `true` or `false` (default)        | Enables the *fluid* Responsive typography option, , which fluidly scales element's `font-size` based on the dimensions of the viewport.  See the [Responsive Typography]({{ site.baseurl}}/content/typography/#responsive-typography) section for more details. |
| `$enable-rfs-scale`    | `true` or `false` (default)        | Enabled the *scaled* Responsive typography option, which scales element's `font-size` on a per breakpoint basis.  See the [Responsive Typography]({{ site.baseurl}}/content/typography/#responsive-typography) section for more details. |

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

## Contextual Colors

Extend the default contextual color map with your own custom colors.

Yes, it is a substantial and confusing piece of SCSS, but allows for reasonable flexibility.

The `control-*` keys are used by mainly by control items---specifically---buttons, button groups, pagination, progress bars, badges, and background context.

The `context-*` keys are used for contextual items---specifically---tables, list groups, form validation, and alerts.

{% callout warning %}
Conveying Meaning to Assistive Technologies
{:.h5}

Please refer to the [Accessiblity notes about conveying meaning with color]({{ site.baseurl }}/get-started/accessibility/#conveying-meaning-with-color).
{% endcallout %}

{% highlight scss %}
// Sample of adding more colors using a mixing function
$custom-context: (
    purple: #990099,
    aqua:   #00ffff
);

// Process custom colors into context color variants
$custom-themes: _mix-context-colors($custom-context);
// Merge into master context themes map
$context-themes: map-merge($context-themes, $custom-themes);

{% endhighlight %}

### Single Color Addition

You can also add a single color map without all the additional color mixing functions with something a bit simpler.

{% highlight scss %}
// Adding a single color map
$single-color: (
    "purple": (
        "control-color":        #fff,
        "control-bg":           #990099,
        "control-border":       #800080,
        "control-hover-color":  #fff,
        "control-hover-bg":     #770077,
        "control-hover-border": #660066,
        "context-color":        #990099,
        "context-bg":           #ffb3ff,
        "context-border":       #ff29ff
    );
);
$context-themes: map-merge($context-themes, $single-color);
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
