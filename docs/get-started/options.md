---
layout: docs
title: Customization Options
group: get-started
---

Customize Figuration with our built-in custom variables file and easily toggle global CSS preferences with new `$enable-*` Sass variables. Override a variable's value and recompile with the included Gruntfile as needed.

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Customizing Variables

Figuration ships with a `/scss/_custom.scss` file for an easy method of overriding the default variables found in `/scss/_settings.scss`. Copy and paste relevant lines from `/scss/_settings.scss` into the `/scss/_custom.scss` file, modify the values, and recompile your Sass to change our default values. **Be sure to remove the `!default` flag from override values.**

For example, to change out the `background-color` and `color` for the `<body>`, you'd do the following:

{% highlight scss %}
// Custom settings
//
// Copy settings from `_settings.scss` to this file to override the defaults.
// This allows for customization without changing core files.

$body-bg:    $gray-darker;
$body-color: $gray-lighter;
{% endhighlight %}

Do the same for any variable you need to override, including the global options listed below.

## Global Options

You can find and customize these variables for key global options in our `_settings.scss` file.

| Variable                    | Values                             | Description                                                                                      |
| --------------------------- | ---------------------------------- | -------------------------------------------------------------------------------------------------|
| `$spacer`                   | `1rem` (default), or any value > 0 | Specifies the default spacer value for our spacer utilities.                                     |
| `$enable-rounded`           | `true` (default) or `false`        | Enables predefined `border-radius` styles on various components.                                 |
| `$enable-shadows`           | `true` or `false` (default)        | Enables predefined `box-shadow` styles on various components.                                    |
| `$enable-transitions`       | `true` (default) or `false`        | Enables predefined `transition`s on various components.                                          |
| `$enable-grid-classes`      | `true` (default) or `false`        | Enables the generation of CSS classes for the grid system (e.g. `.container`, `.row`, `.col-md-1`, etc.). |
| `$enable-print-styles`      | `true` (default) or `false`        | Enables predefined style overrides used when printing.                                           |
| `$enable-palette`           | `true` (default) or `false`        | Enables the generation of CSS classes for the palette color themes (e.g. `.text-blue-500`, etc.). |
| `$enable-sizing`            | `true` (default) or `false`        | Enables the generation of CSS classes for component sizes, and also for some utilites. (e.g. `.btn-sm`, `.radius-t-xs`, etc.). |
| `$enable-bp-smallest`       | `true` or `false` (default)        | Enables the generation of CSS classes for breakpoint sizes that include the smallest breakpoint designator. (e.g. `.col-xs-12`).  Also refer to the [Breakpoint Nomenclature]({{ site.baseurl }}/layout/overview/#breakpoint-nomenclature) section. |
| `$enable-flex-opt`          | `true` (default) or `false`        | Enables the opt-in flexbox model using classes, such as `.row-flex`.                             |
| `$enable-flex-full`         | `true` or `false` (default)        | Enables the full flexbox model where all supported components will use `display: flex;`.         |

If both `$enable-flex-opt` and `$enable-flex-full` are set to `true` the `$enable-flex-opt` option will be disabled.

## Component Sizes

The button, button group, pagination, form-control and input-group components all use the same base sizing settings for consitency.

By using a map, we can be sure the components are all the same height when horizontally aligned.

{% callout info %}
#### `<select>` Sizing Caveat

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
The line `$context-themes: ();` should only be defined once in the `_custom.scss` file even if merging multiple color maps.

The `control-*` keys are used by mainly by control items---specifically---buttons, button groups, pagination, progress bars, badges, and background context.

The `context-*` keys are used for contextual items---specifically---tables, list groups, form validation, and alerts.

{% capture callout-include %}{% include callout-warning-color-assistive-technologies.md %}{% endcapture %}
{{ callout-include | markdownify }}

{% highlight scss %}
// Sample of adding more colors using a mixing function
$context-themes: ();    // <-- only define ONCE - must be before merging maps
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
$context-themes: ();    // <-- only define ONCE - must be before merging maps
$single-color: (
    "purple": (
        "control-color":  #fff,
        "control-bg":     #990099,
        "control-border": #800080,
        "context-color":  #990099,
        "context-bg":     #ffb3ff,
        "context-border": #ff29ff
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
$mustard:   #c98800;
$gray:      #666;

// Palette Map
$palette-themes: (
    "red":      $red,
    "green":    $green,
    "blue":     $blue,
    "cyan":     $cyan,
    "mustard":  $mustard,
    "gray":     $gray
);
{% endhighlight %}

The default setting for the color levels to be generated is defined as the following.

{% highlight scss %}
$palette-levels: 50 100 200 300 400 500 600 700 800 900;
{% endhighlight %}
