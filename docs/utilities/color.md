---
layout: docs
title: Color
group: utilities
---

Add a little, or a lot of, color to your site or application.

{% callout info %}
Dealing with Specificity
{:.h5}

Sometimes contextual classes cannot be applied due to the specificity of another selector. In some cases, a sufficient workaround is to wrap your element's content in a `<div>` with the class.
{% endcallout %}

{% callout warning %}
Conveying Meaning to Assistive Technologies
{:.h5}

Please refer to the [Accessiblity notes about conveying meaning with color]({{ site.baseurl }}/get-started/accessibility/#conveying-meaning-with-color).
{% endcallout %}

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Text

Change your text color with contextual color utility classes.

{% example html %}
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
{% endexample %}

## Links

Contextual text color classes also work well on anchors with the provided hover and focus states.
Note: The `.text-body`, `.text-muted`, `.text-white`, and `.text-black` classes have no link styling, other than the default underline.

{% example html %}
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
{% endexample %}

## Backgrounds

Similar to the contextual text color classes, easily set the background color of an element to any contextual class. Anchor components will darken on hover, just like the text classes.

Background utilities **do not set** `color`, so in some cases you will want to use `.text-*` utilities.

There is also a `.bg-transparent` for removing the background color for an element.

{% example html %}
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
{% endexample %}

## Link Backgrounds

Also similar to the contextual text color classes, the background color classes also work well on anchors with the provided hover and focus states.
Note: The `.bg-body`, `.bg-white`, `.bg-black`, and `bg-transparent` classes have no link styling.

{% example html %}
<p><a href="#" class="p-0_5 d-inline-block bg-primary text-white">.bg-primary</a></p>
<p><a href="#" class="p-0_5 d-inline-block bg-success text-black">.bg-success</a></p>
<p><a href="#" class="p-0_5 d-inline-block bg-info text-white">.bg-info</a></p>
<p><a href="#" class="p-0_5 d-inline-block bg-warning text-black">.bg-warning</a></p>
<p><a href="#" class="p-0_5 d-inline-block bg-danger text-white">.bg-danger</a></p>
<p><a href="#" class="p-0_5 d-inline-block bg-light text-black">.bg-light</a></p>
<p><a href="#" class="p-0_5 d-inline-block bg-dark text-white">.bg-dark</a></p>
<p><a href="#" class="p-0_5 d-inline-block bg-body text-black">.bg-body</a></p>
<p><a href="#" class="p-0_5 d-inline-block bg-white text-black">.bg-white</a></p>
<p><a href="#" class="p-0_5 d-inline-block bg-black text-white">.bg-black</a></p>
<p><a href="#" class="p-0_5 d-inline-block bg-transparent text-black">.bg-transparent</a></p>
{% endexample %}

## Borders

Borders also be colored with their own set of contextual classes. Borders do not change color on hover and focus state.

There is also a `.border-transparent` that removes the border color for an element, but keeps the border width in place.

<div class="cf-example-border">
{% example html%}
<span class="border border-primary"></span>
<span class="border border-secondary"></span>
<span class="border border-info"></span>
<span class="border border-warning"></span>
<span class="border border-danger"></span>
<span class="border border-light"></span>
<span class="border border-dark"></span>
<span class="border border-transparent"></span>
{% endexample %}
</div>

## Palette Colors

If the [color palette]({{ site.baseurl }}/content/color/) is enabled, any color theme that is added to the `$palette-themes` Sass map will become available for use.  For example the theme named `primary`, then becomes available as `.text-primary-[level]`, `.bg-primary-[level]`, and `border-primary-[level]`, where `level` is in the set defined by the `$palette-levels` variable.

<div class="cf-example-border">
{% example html %}
<p class="text-primary-700">.text-primary-700 text</p>
<p><a href="#" class="text-primary-400">.text-primary-400 link</a></p>
<div class="bg-primary-100 text-primary-900 mb-0_5 p-0_5">.bg-primary-100 background with .text-primary-900</div>
<span class="border border-primary-200"></span>
{% endexample %}
</div>
