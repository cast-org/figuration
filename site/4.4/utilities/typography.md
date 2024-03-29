---
layout: doc
title: Typography
description: Quick and easy utilities to add some style to your text.
group: utilities
toc: true
---

## Text Alignment

Easily realign text to components with text alignment classes.

{% capture example %}
<p class="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit et mauris suscipit fermentum. Mauris massa dolor, mollis id augue ac, pretium faucibus massa. Ut posuere efficitur justo et luctus. Integer eget aliquam magna. In in vulputate nulla. Vivamus tristique leo id odio efficitur interdum eu ut metus.</p>
{% endcapture %}
{% renderExample example %}

For left, right, and center alignment, responsive classes are available that use the same viewport width breakpoints as the grid system.  Please refer to how our [breakpoint nomenclature]({{ site.path }}/{{ version.docs }}/layout/breakpoints/#breakpoint-nomenclature) is used.

Instead of using `left/right` designators, the text alignment utilities use `start/end` designators to match up with the [flexbox utilities]({{ site.path }}/{{ version.docs }}/utilities/flexbox/).

{% capture example %}
<p class="text-start">Start aligned text on all viewport sizes.</p>
<p class="text-center">Center aligned text on all viewport sizes.</p>
<p class="text-end">End aligned text on all viewport sizes.</p>

<p class="text-sm-end">End aligned text on viewports sized SM (small) or wider.</p>
<p class="text-md-end">End aligned text on viewports sized MD (medium) or wider.</p>
<p class="text-lg-end">End aligned text on viewports sized LG (large) or wider.</p>
<p class="text-xl-end">End aligned text on viewports sized XL (extra-large) or wider.</p>
{% endcapture %}
{% renderExample example %}

## Text Wrap and Truncate

Allow text to wrap with a `.text-wrap` class.

{% capture example %}
<div class="badge bg-secondary text-wrap" style="width: 6rem;">
  This text should wrap.
</div>
{% endcapture %}
{% renderExample example %}

Prevent text from wrapping with a `.text-nowrap` class.

{% capture example %}
<div class="text-nowrap bg-light border" style="width: 8rem;">
  This text should overflow the parent.
</div>
{% endcapture %}
{% renderExample example %}

For longer content, you can add a `.text-truncate` class to truncate the text with an ellipsis.  **Requires `display: block;` or `display: inline-block;`.**

{% capture example %}
<!-- Block -->
<div class="row">
  <div class="col-2 text-truncate">
    Praeterea iter est quasdam res quas ex communi.
  </div>
</div>

<!-- Inline block -->
<div class="d-inline-block text-truncate" style="max-width: 150px;">
  Praeterea iter est quasdam res quas ex communi.
</div>
{% endcapture %}
{% renderExample example %}

## Word Break

Prevent long strings of text from breaking your components' layout by using `.text-break` to set `word-wrap: break-word` and `word-break: break-word`. We use `word-wrap` instead of the more common `overflow-wrap` for wider browser support, and add the deprecated `word-break: break-word` to avoid issues with flex containers.

{% capture example %}
<div class="border p-0_5 text-break" style="width: 8rem;">
  ABCDEFGHIJKLMNOPQRSTUVWXYZ
</div>
{% endcapture %}
{% renderExample example %}

## Text Transform

Transform text in components with text capitalization classes.

{% capture example %}
<p class="text-lowercase">Lowercased text.</p>
<p class="text-uppercase">Uppercased text.</p>
<p class="text-capitalize">CapiTaliZed text.</p>
{% endcapture %}
{% renderExample example %}

Note how `.text-capitalize` only changes the first letter of each word, leaving the case of any other letters unaffected.

## Line Height

A few line height adjustment classes are available, `.lh-{size}`.

Where *size* is one of the following:
- `small` - `1.25`;
- `base` - `1.5`;
- `large` - `1.75`;

<div class="cf-example">
  <div class="mb-1_5">
    <div class="lh-small text-muted">.lh-small</div>
    <p class="lh-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit et mauris suscipit fermentum. Mauris massa dolor, mollis id augue ac, pretium faucibus massa. Ut posuere efficitur justo et luctus. Integer eget aliquam magna. In in vulputate nulla. Vivamus tristique leo id odio efficitur interdum eu ut metus.</p>
  </div>
  <div class="mb-1_5">
    <div class="lh-base text-muted">.lh-base</div>
    <p class="lh-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit et mauris suscipit fermentum. Mauris massa dolor, mollis id augue ac, pretium faucibus massa. Ut posuere efficitur justo et luctus. Integer eget aliquam magna. In in vulputate nulla. Vivamus tristique leo id odio efficitur interdum eu ut metus.</p>
  </div>
  <div class="mb-1_5">
    <div class="lh-large text-muted">.lh-large</div>
    <p class="lh-large">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit et mauris suscipit fermentum. Mauris massa dolor, mollis id augue ac, pretium faucibus massa. Ut posuere efficitur justo et luctus. Integer eget aliquam magna. In in vulputate nulla. Vivamus tristique leo id odio efficitur interdum eu ut metus.</p>
  </div>
</div>

{% capture highlight %}
<p class="lh-small">Lorem ipsum dolor sit amet ...</p>
<p class="lh-base">Lorem ipsum dolor sit amet ...</p>
<p class="lh-large">Lorem ipsum dolor sit amet ...</p>
{% endcapture %}
{% renderHighlight highlight, "html" %}

## Font Size

Responsive font size utilities use the format `.fs{-breakpoint}-{size}`.

Where *size* is one of the following:
- `xsmall` - `.75rem`
- `small` - `.875rem`
- `normal` - `1rem`
- `large` - `1.125rem`
- `xlarge` - `1.25rem`
- `2xlarge` - `1.5rem`
- `3xlarge` - `1.75rem`
- `4xlarge` - `2rem`
- `5xlarge` - `2.5rem`

<div class="cf-example">
  <div class="mb-1_5">
    <div class="fs-small text-muted">.fs-xsmall</div>
    <p class="fs-xsmall text-truncate">The quick brown fox jumped over the lazy dog.</p>
  </div>
  <div class="mb-1_5">
    <div class="fs-small text-muted">.fs-small</div>
    <p class="fs-small text-truncate">The quick brown fox jumped over the lazy dog.</p>
  </div>
  <div class="mb-1_5">
    <div class="fs-small text-muted">.fs-base</div>
    <p class="fs-base text-truncate">The quick brown fox jumped over the lazy dog.</p>
  </div>
  <div class="mb-1_5">
    <div class="fs-small text-muted">.fs-large</div>
    <p class="fs-large text-truncate">The quick brown fox jumped over the lazy dog.</p>
  </div>
  <div class="mb-1_5">
    <div class="fs-small text-muted">.fs-xlarge</div>
    <p class="fs-xlarge text-truncate">The quick brown fox jumped over the lazy dog.</p>
  </div>
  <div class="mb-1_5">
    <div class="fs-small text-muted">.fs-2xlarge</div>
    <p class="fs-2xlarge text-truncate">The quick brown fox jumped over the lazy dog.</p>
  </div>
  <div class="mb-1_5">
    <div class="fs-small text-muted">.fs-3xlarge</div>
    <p class="fs-3xlarge text-truncate">The quick brown fox jumped over the lazy dog.</p>
  </div>
  <div class="mb-1_5">
    <div class="fs-small text-muted">.fs-4xlarge</div>
    <p class="fs-4xlarge text-truncate">The quick brown fox jumped over the lazy dog.</p>
  </div>
  <div class="mb-1_5">
    <div class="fs-small text-muted">.fs-5xlarge</div>
    <p class="fs-5xlarge text-truncate">The quick brown fox jumped over the lazy dog.</p>
  </div>
</div>

{% capture highlight %}
<p class="fs-xsmall">The quick brown fox ...</p>
<p class="fs-small">The quick brown fox ...</p>
<p class="fs-base">The quick brown fox ...</p>
<p class="fs-large">The quick brown fox ...</p>
<p class="fs-xlarge">The quick brown fox ...</p>
<p class="fs-2xlarge">The quick brown fox ...</p>
<p class="fs-3xlarge">The quick brown fox ...</p>
<p class="fs-4xlarge">The quick brown fox ...</p>
<p class="fs-5xlarge">The quick brown fox ...</p>
{% endcapture %}
{% renderHighlight highlight, "html" %}

## Font Weight

Quickly change the weight (boldness) of text.

The `.font-weight-lighter` and `.font-weight-bolder` classes are relative by default, with `lighter` and `bolder` values respectively, but can be configured with numeric weights by overriding their values in the `_settings.scss`.

{% capture example %}
<p class="font-weight-light">Light weight text.</p>
<p class="font-weight-normal">Normal weight text.</p>
<p class="font-weight-medium">Medium weight text.</p>
<p class="font-weight-semibold">Semi-bold weight text.</p>
<p class="font-weight-bold">Bold weight text.</p>
<p class="font-weight-black">Black weight text.</p>
<p class="font-weight-light">Light weight with <span class="font-weight-bolder">bolder weight</span> text.</p>
<p class="font-weight-bold">Bold weight with <span class="font-weight-lighter">lighter weight</span> text.</p>
{% endcapture %}
{% renderExample example %}

## Font Style

Italicize or reset the font style for a section of text.

{% capture example %}
<p class="font-italic">Italic text.</p>
<p class="font-normal">Text without font style</p>
{% endcapture %}
{% renderExample example %}

## Font Family

Alter the font family for a section of text.

{% capture example %}
<p class="font-family-sans-serif">This is an example of the sans serif font.</p>
<p class="font-family-serif">This is an example of the serif font.</p>
<p class="font-family-monospace">This is an example of the monospace font.</p>
{% endcapture %}
{% renderExample example %}

## Color Reset

Reset the text color with `.text-reset`, so that it inherits the color from its parent.

{% capture example %}
<p class="text-muted">
  Muted text with a <a href="#" class="text-reset">reset link</a>.
</p>
{% endcapture %}
{% renderExample example %}

## Text Decoration

Decorate text in components with text decoration classes.

{% capture example %}
<p><a href="#" class="text-decoration-none">Non-underlined link</a></p>
<p class="text-decoration-underline">This text has a line underneath it.</p>
<p class="text-decoration-line-through">This text has a line going through it.</p>
{% endcapture %}
{% renderExample example %}

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
        <td><code>$enable-utility-text</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the typography utility classes.
        </td>
      </tr>
      <tr>
        <td><code>$enable-utility-text-justify</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the text justify utility class.
        </td>
      </tr>
      <tr>
        <td><code>$enable-utility-text-wrap</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
            Enable the generation of the `.text-wrap` utility class.
        </td>
      </tr>
      <tr>
        <td><code>$enable-utility-text-nowrap</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the `.text-nowrap` utility class.
        </td>
      </tr>
      <tr>
        <td><code>$enable-utility-text-align</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the text alignment utility classes.
        </td>
      </tr>
      <tr>
        <td><code>$enable-utility-text-transform</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the text transform utility classes.
        </td>
      </tr>
      <tr>
        <td><code>$enable-utility-text-truncate</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the text truncate utility classes.
        </td>
      </tr>
      <tr>
        <td><code>$enable-utility-text-decoration</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the text decoration utility classes.
        </td>
      </tr>
      <tr>
        <td><code>$enable-utility-text-break</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the `.text-break` utility class.
        </td>
      </tr>
      <tr>
        <td><code>$enable-utility-text-weight</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the font weight utility classes.
        </td>
      </tr>
      <tr>
        <td><code>$enable-utility-text-style</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the font style utility classes.
        </td>
      </tr>
      <tr>
        <td><code>$enable-utility-text-family</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the font family utility classes.
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
        <td><code>$enable-utility-text-reset</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the reset color utility class.
        </td>
      </tr>
      <tr>
        <td><code>$enable-utility-text-height</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the line-height utility classes.
        </td>
      </tr>
      <tr>
        <td><code>$enable-utility-text-size</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the font-size utility classes.
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
      <tr>
        <td><code>$line-heights</code></td>
        <td>map</td>
        <td><pre><code>(
  "small":    1.25,
  "base":     $line-height-base,
  "large":    1.75
)</code></pre></td>
        <td>
          Map used to generate the line-height utility classes.
        </td>
      </tr>
      <tr>
        <td><code>$font-sizes</code></td>
        <td>map</td>
        <td><pre><code>(
  "xsmall":   ($font-size-base * .75),
  "small":    ($font-size-base * .875),
  "base":     $font-size-base,
  "large":    ($font-size-base * 1.125),
  "xlarge":   ($font-size-base * 1.25),
  "2xlarge":  ($font-size-base * 1.5),
  "3xlarge":  ($font-size-base * 1.75),
  "4xlarge":  ($font-size-base * 2),
  "5xlarge":  ($font-size-base * 2.5)
)</code></pre></td>
        <td>
          Map used to generate the font-size utility classes.
        </td>
      </tr>
      <tr>
        <td><code>$font-weights</code></td>
        <td>map</td>
        <td><pre><code>(
    "light":    $font-weight-light,
    "normal":   $font-weight-normal,
    "medium":   $font-weight-medium,
    "semibold": $font-weight-semibold,
    "bold":     $font-weight-bold,
    "black":    $font-weight-black,
    "lighter":  $font-weight-lighter,
    "bolder":   $font-weight-bolder
)</code></pre></td>
        <td>
          Map used to generate the font-weight utility classes.
        </td>
      </tr>
    </tbody>
  </table>
</div>

### Mixins

Here are the mixins related to this grouping of utility classes that we use to help generate our CSS.  You can also uses these mixins to generate your own custom components or utilities.

#### text-truncate

Visually truncate a line of text.

{% capture highlight %}
@include text-truncate();
{% endcapture %}
{% renderHighlight highlight, "sass" %}

#### text-emphasis-variant

Generate a text color rule with a hover/focus state when used as an anchor using the palette system.

{% capture highlight %}
@include text-emphasis-variant($parent, $color, $level-delta);
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
        <td><code>$parent</code></td>
        <td>string</td>
        <td><code>null</code></td>
        <td>
          Designated CSS rule.
        </td>
      </tr>
      <tr>
        <td><code>$color</code></td>
        <td>string</td>
        <td><code>null</code></td>
        <td>
          Base color.
        </td>
      </tr>
      <tr>
        <td><code>$level-delta</code></td>
        <td>string</td>
        <td><code>null</code></td>
        <td>
          Alter palette <code>$level</code> to mix base color to for hover/focus states when used as an anchor, Uses <code>500</code> as the base palette level.
        </td>
      </tr>
    </tbody>
  </table>
</div>

#### text-emphasis-palette-variant

Generate a text color rule with a hover/focus state when used as an anchor using the palette system.

{% capture highlight %}
@include text-emphasis-palette-variant($parent, $color, $level, $level-delta);
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
        <td><code>$parent</code></td>
        <td>string</td>
        <td><code>null</code></td>
        <td>
          Designated CSS rule.
        </td>
      </tr>
      <tr>
        <td><code>$color</code></td>
        <td>string</td>
        <td><code>null</code></td>
        <td>
          Base color.
        </td>
      </tr>
      <tr>
        <td><code>$level</code></td>
        <td>string</td>
        <td><code>null</code></td>
        <td>
          Palette level to mix base color to.
        </td>
      </tr>
      <tr>
        <td><code>$level-delta</code></td>
        <td>string</td>
        <td><code>null</code></td>
        <td>
          Alter palette <code>$level</code> to mix base color to for hover/focus states when used as an anchor.
        </td>
      </tr>
    </tbody>
  </table>
</div>
