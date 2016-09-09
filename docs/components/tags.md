---
layout: docs
title: Tags
group: components
---

Small and adaptive tag for adding context to just about any content.

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Example

Tags scale to match the size of the immediate parent element by using relative font sizing and `em` units.

{% example html %}
<h1>Example heading <span class="tag">New</span></h1>
<h2>Example heading <span class="tag">New</span></h2>
<h3>Example heading <span class="tag">New</span></h3>
<h4>Example heading <span class="tag">New</span></h4>
<h5>Example heading <span class="tag">New</span></h5>
<h6>Example heading <span class="tag">New</span></h6>
{% endexample %}

## Contextual Variations

Add any of the below mentioned modifier classes to change the appearance of a tag.

{% example html %}
<strong>Basic Tags:</strong>
<p>
<span class="tag">Default</span>
<span class="tag tag-primary">Primary</span>
<span class="tag tag-secondary">Secondary</span>
<span class="tag tag-success">Success</span>
<span class="tag tag-info">Info</span>
<span class="tag tag-warning">Warning</span>
<span class="tag tag-danger">Danger</span>
</p>

<strong>Anchor Tags:</strong>
<p>
<a href="#" class="tag">Default</a>
<a href="#" class="tag tag-primary">Primary</a>
<a href="#" class="tag tag-secondary">Secondary</a>
<a href="#" class="tag tag-success">Success</a>
<a href="#" class="tag tag-info">Info</a>
<a href="#" class="tag tag-warning">Warning</a>
<a href="#" class="tag tag-danger">Danger</a>
</p>

{% endexample %}

{% capture callout-include %}{% include callout-warning-color-assistive-technologies.md %}{% endcapture %}
{{ callout-include | markdownify }}

## Pill Tags

Use the `.tag-pill` modifier class to make tags more rounded (with a larger `border-radius` and additional horizontal `padding`).

{% example html %}
<span class="tag tag-pill">Default</span>
<span class="tag tag-pill tag-primary">Primary</span>
<span class="tag tag-pill tag-secondary">Secondary</span>
<span class="tag tag-pill tag-success">Success</span>
<span class="tag tag-pill tag-info">Info</span>
<span class="tag tag-pill tag-warning">Warning</span>
<span class="tag tag-pill tag-danger">Danger</span>
{% endexample %}

## Outline Tags

Just like our buttons, you can get tags that are not quite as bold by using the `.tag-outline-*` contextual color modifier classes.  You can also combine this with the `.tag-pill` class.

{% example html %}
<strong>Outline Tags:</strong>
<p>
<span class="tag tag-outline">Default</span>
<span class="tag tag-outline-primary">Primary</span>
<span class="tag tag-outline-secondary">Secondary</span>
<span class="tag tag-outline-success">Success</span>
<span class="tag tag-outline-info">Info</span>
<span class="tag tag-outline-warning">Warning</span>
<span class="tag tag-outline-danger">Danger</span>
</p>

<strong>Anchor Outline Tags:</strong>
<p>
<a href="#" class="tag tag-outline">Default</a>
<a href="#" class="tag tag-outline-primary">Primary</a>
<a href="#" class="tag tag-outline-secondary">Secondary</a>
<a href="#" class="tag tag-outline-success">Success</a>
<a href="#" class="tag tag-outline-info">Info</a>
<a href="#" class="tag tag-outline-warning">Warning</a>
<a href="#" class="tag tag-outline-danger">Danger</a>
</p>
{% endexample %}
