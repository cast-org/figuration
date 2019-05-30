---
layout: docs
title: Typography
description: Quick and easy utilities to add some style to your text.
group: utilities
---

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Text Alignment

Easily realign text to components with text alignment classes.

{% capture example %}
<p class="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit et mauris suscipit fermentum. Mauris massa dolor, mollis id augue ac, pretium faucibus massa. Ut posuere efficitur justo et luctus. Integer eget aliquam magna. In in vulputate nulla. Vivamus tristique leo id odio efficitur interdum eu ut metus.</p>
{% endcapture %}
{% include example.html content=example %}

For left, right, and center alignment, responsive classes are available that use the same viewport width breakpoints as the grid system.  Please refer to how our [breakpoint nomenclature]({{ site.baseurl }}/{{ site.docs_version }}/layout/overview/#breakpoint-nomenclature) is used.

Instead of using `left/right` designators, the text alignment utilities use `start/end` designators to match up with the [flexbox utilities]({{ site.baseurl }}/{{ site.docs_version }}/utilities/flexbox/).

{% capture example %}
<p class="text-start">Start aligned text on all viewport sizes.</p>
<p class="text-center">Center aligned text on all viewport sizes.</p>
<p class="text-end">End aligned text on all viewport sizes.</p>

<p class="text-sm-end">End aligned text on viewports sized SM (small) or wider.</p>
<p class="text-md-end">End aligned text on viewports sized MD (medium) or wider.</p>
<p class="text-lg-end">End aligned text on viewports sized LG (large) or wider.</p>
<p class="text-xl-end">End aligned text on viewports sized XL (extra-large) or wider.</p>
{% endcapture %}
{% include example.html content=example %}

## Text Wrap and Truncate

Allow text to wrap with a `.text-wrap` class.

{% capture example %}
<div class="badge badge-secondary text-wrap" style="width: 6rem;">
    This text should wrap.
</div>
{% endcapture %}
{% include example.html content=example %}

Prevent text from wrapping with a `.text-nowrap` class.

{% capture example %}
<div class="card card-body text-nowrap" style="width: 8rem;">
    This text should overflow the parent.
</div>
{% endcapture %}
{% include example.html content=example %}

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
{% include example.html content=example %}

## Word Break

Prevent long strings of text from breaking your layout by using `.text-break` to set `overflow-wrap: break-word` (and `word-break: break-word` for IE & Edge compatibility).

{% capture example %}
<div class="border p-0_5 text-break" style="width: 8rem;">
    ABCDEFGHIJKLMNOPQRSTUVWXYZ
</div>
{% endcapture %}
{% include example.html content=example %}

## Text Transform

Transform text in components with text capitalization classes.

{% capture example %}
<p class="text-lowercase">Lowercased text.</p>
<p class="text-uppercase">Uppercased text.</p>
<p class="text-capitalize">CapiTaliZed text.</p>
{% endcapture %}
{% include example.html content=example %}

Note how `.text-capitalize` only changes the first letter of each word, leaving the case of any other letters unaffected.

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

{% highlight html %}
<p class="fs-xsmall">The quick brown fox ...</p>
<p class="fs-small">The quick brown fox ...</p>
<p class="fs-base">The quick brown fox ...</p>
<p class="fs-large">The quick brown fox ...</p>
<p class="fs-xlarge">The quick brown fox ...</p>
<p class="fs-2xlarge">The quick brown fox ...</p>
<p class="fs-3xlarge">The quick brown fox ...</p>
<p class="fs-4xlarge">The quick brown fox ...</p>
<p class="fs-5xlarge">The quick brown fox ...</p>
{% endhighlight %}

## Font Weight

Quickly change the weight (boldness) of text.

The `.font-weight-lighter` and `.font-weight-bolder` classes are relative by default, with `lighter` and `bolder` values respectively, but can be configured with numeric weights by overriding their values in the `_settings.scss`.

{% capture example %}
<p class="font-weight-light">Light weight text.</p>
<p class="font-weight-normal">Normal weight text.</p>
<p class="font-weight-bold">Bold text.</p>
<p class="font-weight-light">Light weight with <span class="font-weight-bolder">bolder weight</span> text.</p>
<p class="font-weight-bold">Bold weight with <span class="font-weight-lighter">lighter weight</span> text.</p>
{% endcapture %}
{% include example.html content=example %}

## Italics

Italicize text with `.font-italic`.

{% capture example %}
<p class="font-italic">Italic text.</p>
{% endcapture %}
{% include example.html content=example %}

## Font Family

Alter the font family for a section of text with

{% capture example %}
<p class="font-family-sans-serif">This is an example of the sans serif font.</p>
<p class="font-family-serif">This is an example of the serif font.</p>
<p class="font-family-monospace">This is an example of the monospace font.</p>
{% endcapture %}
{% include example.html content=example %}

## Color Reset

Reset the text color with `.text-reset`, so that it inherits the color from its parent.

{% capture example %}
<p class="text-muted">
    Muted text with a <a href="#" class="text-reset">reset link</a>.
</p>
{% endcapture %}
{% include example.html content=example %}

## Text Decoration

Remove a text decoration with the `.text-decoration-none` class.

{% capture example %}
<a href="#" class="text-decoration-none">Non-underlined link</a>
{% endcapture %}
{% include example.html content=example %}

## SASS Reference

### Variables

The available [Customization options]({{ site.baseurl }}/{{ site.docs_version }}/get-started/options/), or Sass variables, that can be customized for this grouping of utility classes.

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

Here are the mixins related to this grouping of utility classes that we use to help generate our CSS.  You can also uses these mixins to generate your own custom components or utilities.

#### text-truncate
{:.no_toc}

Visually truncate a line of text.

{% highlight sass %}
@include text-truncate();
{% endhighlight %}

#### text-emphasis-variant
{:.no_toc}

Generate a text color rule with a hover/focus state when used as an anchor using the palette system.

{% highlight sass %}
@include text-emphasis-variant($parent, $color, $level-delta);
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
{:.no_toc}

Generate a text color rule with a hover/focus state when used as an anchor using the palette system.

{% highlight sass %}
@include text-emphasis-palette-variant($parent, $color, $level, $level-delta);
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

## SASS Reference

### Variables

The available [Customization options]({{ site.baseurl }}/{{ site.docs_version }}/get-started/options/), or Sass variables, that can be customized for the typography.

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
                <td><code>$enable-typography</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the typography CSS ruless.
                    Smaller segements of the border utilities can be disabled with the following <code>$enable-*</code> variables.
                </td>
            </tr>
            <tr>
                <td><code>$enable-typography-headings</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the headings typography classes.
                </td>
            </tr>
            <tr>
                <td><code>$enable-typography-lead</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the lead typography class.
                </td>
            </tr>
            <tr>
                <td><code>$enable-typography-small</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the small typography class.
                </td>
            </tr>
            <tr>
                <td><code>$enable-typography-mark</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the mark typography class.
                </td>
            </tr>
            <tr>
                <td><code>$enable-typography-list-unstyled</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the unstyled list typography class.
                </td>
            </tr>
            <tr>
                <td><code>$enable-typography-initialism</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the initialism typography class.
                </td>
            </tr>
            <tr>
                <td><code>$enable-typography-blockquote</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the blockquote typography classes.
                </td>
            </tr>
        </tbody>
    </table>
</div>