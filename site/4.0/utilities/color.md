---
layout: doc
title: Color
description: Add a little, or a lot of, color to your site or application.
group: utilities
toc: true
---

{% capture callout %}
Dealing with Specificity
{.h5}

Sometimes contextual classes cannot be applied due to the specificity of another selector. In some cases, a sufficient workaround is to wrap your element's content in a `<div>` with the class.
{% endcapture %}
{% renderCallout, callout, "info" %}

{%- assign calloutColor = version.docs | valueIfEmpty: site.version.docs | prepend: "./" | append: "/partials/callout-warning-color-assistive-technologies.md" -%}
{% include calloutColor %}

{% capture callout %}
Some of the utility color styles use a relatively light foreground color, and should only be used on a dark background in order to have sufficient contrast.
{% endcapture %}
{% renderCallout, callout, "info" %}

## Text

Change your text color with contextual color utility classes.

{% capture example %}
<p class="text-primary">.text-primary</p>
<p class="text-success">.text-success</p>
<p class="text-info">.text-info</p>
<p class="text-warning">.text-warning</p>
<p class="text-danger">.text-danger</p>
<p class="text-light bg-dark">.text-light</p>
<p class="text-dark">.text-dark</p>
<p class="text-body">.text-body</p>
<p class="text-muted">.text-muted</p>
<p class="text-white bg-dark">.text-white</p>
<p class="text-black">.text-black</p>
{% endcapture %}
{% renderExample example %}

## Links

Contextual text color classes also work well on anchors with the provided hover and focus states.
Note: The `.text-body`, `.text-muted`, `.text-white`, and `.text-black` classes have no link styling, other than the default underline.

{% capture example %}
<p><a href="#" class="text-primary">.text-primary</a></p>
<p><a href="#" class="text-success">.text-success</a></p>
<p><a href="#" class="text-info">.text-info</a></p>
<p><a href="#" class="text-warning">.text-warning</a></p>
<p><a href="#" class="text-danger">.text-danger</a></p>
<p><a href="#" class="text-light bg-dark">.text-light</a></p>
<p><a href="#" class="text-dark">.text-dark</a></p>
<p><a href="#" class="text-body">.text-body</a></p>
<p><a href="#" class="text-muted">.text-muted</a></p>
<p><a href="#" class="text-white bg-dark">.text-white</a></p>
<p><a href="#" class="text-black">.text-black</a></p>
{% endcapture %}
{% renderExample example %}

## Backgrounds

Similar to the contextual text color classes, easily set the background color of an element to any contextual class. Background utilities **do not set** `color`, so in some cases you will want to use `.text-*` utilities.

There is also a `.bg-transparent` for removing the background color of an element.

{% capture example %}
<div class="p-0_5 mb-1 bg-primary text-white">.bg-primary</div>
<div class="p-0_5 mb-1 bg-success text-black">.bg-success</div>
<div class="p-0_5 mb-1 bg-info text-white">.bg-info</div>
<div class="p-0_5 mb-1 bg-warning text-black">.bg-warning</div>
<div class="p-0_5 mb-1 bg-danger text-white">.bg-danger</div>
<div class="p-0_5 mb-1 bg-light text-black">.bg-light</div>
<div class="p-0_5 mb-1 bg-dark text-white">.bg-dark</div>
<div class="p-0_5 mb-1 bg-body text-black">.bg-body</div>
<div class="p-0_5 mb-1 bg-white text-black">.bg-white</div>
<div class="p-0_5 mb-1 bg-black text-white">.bg-black</div>
<div class="p-0_5 mb-1 bg-transparent text-black">.bg-transparent</div>
{% endcapture %}
{% renderExample example %}

## Borders

Borders also be colored with their own set of contextual classes. Borders do not change color on hover and focus state.

There is also a `.border-transparent` that removes the border color of an element, but keeps the border width in place.

{% capture example %}
<span class="border border-primary"></span>
<span class="border border-secondary"></span>
<span class="border border-info"></span>
<span class="border border-warning"></span>
<span class="border border-danger"></span>
<span class="border border-light"></span>
<span class="border border-dark"></span>
<span class="border border-transparent"></span>
{% endcapture %}
{% renderExample example, "cf-example-border" %}

## Palette Colors

If the [color palette]({{ site.path }}/{{ version.docs }}/content/color/) is enabled, any color theme that is added to the `$palette-themes` Sass map will become available for use.  For example the theme named `primary`, then becomes available as `.text-primary-[level]`, `.bg-primary-[level]`, and `.border-primary-[level]`, where `level` is in the set defined by the `$palette-levels` variable.

{% capture example %}
<p class="text-primary-700">.text-primary-700 text</p>
<p><a href="#" class="text-primary-400">.text-primary-400 link</a></p>
<div class="bg-primary-100 text-primary-900 mb-0_5 p-0_5">.bg-primary-100 background with .text-primary-900</div>
<span class="border border-primary-200"></span>
{% endcapture %}
{% renderExample example, "cf-example-border" %}


## SASS Reference

### Variables

The available [Customization options]({{ site.path }}/{{ version.docs }}/get-started/options/), or Sass variables, that can be customized for this grouping of utility classes.

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
        <td><code>$enable-utility-bg-colors</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the theme background color utility classes.
        </td>
      </tr>
      <tr>
        <td><code>$enable-utility-bg-palette</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the palette background color utility classes.
        </td>
      </tr>
      <tr>
        <td><code>$enable-utility-bg-special</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the body, black, white, and transparent background color utility classes.
        </td>
      </tr>
      <tr>
        <td><code>$enable-utility-border-colors</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the theme border color utility classes.
        </td>
      </tr>
      <tr>
        <td><code>$enable-utility-border-palette</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the palette border color utility classes.
        </td>
      </tr>
      <tr>
        <td><code>$enable-utility-border-special</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the transparent border color utility class.
        </td>
      </tr>
      <tr>
        <td><code>$enable-utility-text-colors</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the theme text color utility classes.
        </td>
      </tr>
      <tr>
        <td><code>$enable-utility-text-palette</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the palette text color utility classes.
        </td>
      </tr>
      <tr>
        <td><code>$enable-utility-text-special</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the body, black, white, and muted background color utility classes.
        </td>
      </tr>
      <tr>
        <td><code>$utility-bg-colors</code></td>
        <td>map</td>
        <td><code>$base-colors</code></td>
        <td>
          Themed background colors.
        </td>
      </tr>
      <tr>
        <td><code>$palette-colors-bg</code></td>
        <td>map</td>
        <td><code>$palette-colors</code></td>
        <td>
          Palette-based background colors.
        </td>
      </tr>
      <tr>
        <td><code>$palette-levels-bg</code></td>
        <td>list</td>
        <td><code>$palette-levels</code></td>
        <td>
          List of palette levels to use with palette background colors.
        </td>
      </tr>
      <tr>
        <td><code>$utility-border-colors</code></td>
        <td>map</td>
        <td><code>$base-colors</code></td>
        <td>
          Themed border colors.
        </td>
      </tr>
      <tr>
        <td><code>$palette-colors-borders</code></td>
        <td>map</td>
        <td><code>$palette-colors</code></td>
        <td>
          Palette-based border colors.
        </td>
      </tr>
      <tr>
        <td><code>$palette-levels-borders</code></td>
        <td>list</td>
        <td><code>$palette-levels</code></td>
        <td>
          List of palette levels to use with palette colors.
        </td>
      </tr>
      <tr>
        <td><code>$utility-text-colors</code></td>
        <td>map</td>
        <td><code>$base-colors</code></td>
        <td>
          Themed text colors.
        </td>
      </tr>
      <tr>
        <td><code>$palette-colors-text</code></td>
        <td>map</td>
        <td><code>$palette-colors</code></td>
        <td>
          Palette-based text colors.
        </td>
      </tr>
      <tr>
        <td><code>$palette-levels-text</code></td>
        <td>list</td>
        <td><code>$palette-levels</code></td>
        <td>
          List of palette levels to use with palette text colors.
        </td>
      </tr>
    </tbody>
  </table>
</div>

### Mixins

No mixins available.
