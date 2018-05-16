---
layout: docs
title: Typography
group: utilities
---

Quick and easy utilities to add some style to your text.

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Text Alignment

Easily realign text to components with text alignment classes.

{% example html %}
<p class="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit et mauris suscipit fermentum. Mauris massa dolor, mollis id augue ac, pretium faucibus massa. Ut posuere efficitur justo et luctus. Integer eget aliquam magna. In in vulputate nulla. Vivamus tristique leo id odio efficitur interdum eu ut metus.</p>
{% endexample %}

For left, right, and center alignment, responsive classes are available that use the same viewport width breakpoints as the grid system.  Please refer to how our [breakpoint nomenclature]({{ site.baseurl }}/layout/overview/#breakpoint-nomenclature) is used.

Instead of using `left/right` designators, the text alignment utilities use `start/end` designators to match up with the [flexbox utilities]({{ site.baseurl }}/utilities/flexbox/).

{% example html %}
<p class="text-start">Start aligned text on all viewport sizes.</p>
<p class="text-center">Center aligned text on all viewport sizes.</p>
<p class="text-end">End aligned text on all viewport sizes.</p>

<p class="text-sm-end">End aligned text on viewports sized SM (small) or wider.</p>
<p class="text-md-end">End aligned text on viewports sized MD (medium) or wider.</p>
<p class="text-lg-end">End aligned text on viewports sized LG (large) or wider.</p>
<p class="text-xl-end">End aligned text on viewports sized XL (extra-large) or wider.</p>
{% endexample %}

## Text Wrap and Truncate

Prevent text from wrapping with a `.text-nowrap` class.

{% example html %}
<div class="card card-body text-nowrap" style="width: 8rem;">
    This text should overflow the parent.
</div>
{% endexample %}

For longer content, you can add a `.text-truncate` class to truncate the text with an ellipsis.  **Requires `display: block;` or `display: inline-block;`.**

{% example html %}
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
{% endexample %}

## Text Transform

Transform text in components with text capitalization classes.

{% example html %}
<p class="text-lowercase">Lowercased text.</p>
<p class="text-uppercase">Uppercased text.</p>
<p class="text-capitalize">CapiTaliZed text.</p>
{% endexample %}

Note how `text-capitalize` only changes the first letter of each word, leaving the case of any other letters unaffected.

## Font Weight and Italics

Quickly change the weight (boldness) of text or italicize text.

{% example html %}
<p class="font-weight-light">Light weight text.</p>
<p class="font-weight-normal">Normal weight text.</p>
<p class="font-weight-bold">Bold text.</p>
<p class="font-italic">Italic text.</p>
{% endexample %}

## Font Family

Alter the font family for a section of text with

{% example html %}
<p class="font-family-sans-serif">This is an example of the sans serif font.</p>
<p class="font-family-serif">This is an example of the serif font.</p>
<p class="font-family-monospace">This is an example of the monospace font.</p>
{% endexample %}