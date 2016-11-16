---
layout: docs
title: Badges
group: components
---

Small and adaptive badges for adding context to just about any content.

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Example

Badges scale to match the size of the immediate parent element by using relative font sizing and `em` units.

{% example html %}
<h1>Example heading <span class="badge">New</span></h1>
<h2>Example heading <span class="badge">New</span></h2>
<h3>Example heading <span class="badge">New</span></h3>
<h4>Example heading <span class="badge">New</span></h4>
<h5>Example heading <span class="badge">New</span></h5>
<h6>Example heading <span class="badge">New</span></h6>
{% endexample %}

## Contextual Variations

Add any of the below mentioned modifier classes to change the appearance of a badge.

{% example html %}
<strong>Basic Badges:</strong>
<p>
<span class="badge">Default</span>
<span class="badge badge-primary">Primary</span>
<span class="badge badge-secondary">Secondary</span>
<span class="badge badge-success">Success</span>
<span class="badge badge-info">Info</span>
<span class="badge badge-warning">Warning</span>
<span class="badge badge-danger">Danger</span>
</p>

<strong>Anchor Badges:</strong>
<p>
<a href="#" class="badge">Default</a>
<a href="#" class="badge badge-primary">Primary</a>
<a href="#" class="badge badge-secondary">Secondary</a>
<a href="#" class="badge badge-success">Success</a>
<a href="#" class="badge badge-info">Info</a>
<a href="#" class="badge badge-warning">Warning</a>
<a href="#" class="badge badge-danger">Danger</a>
</p>

{% endexample %}

{% capture callout-include %}{% include callout-warning-color-assistive-technologies.md %}{% endcapture %}
{{ callout-include | markdownify }}

## Pill Badges

Use the `.badge-pill` modifier class to make badges more rounded (with a larger `border-radius` and additional horizontal `padding`).

{% example html %}
<span class="badge badge-pill">Default</span>
<span class="badge badge-pill badge-primary">Primary</span>
<span class="badge badge-pill badge-secondary">Secondary</span>
<span class="badge badge-pill badge-success">Success</span>
<span class="badge badge-pill badge-info">Info</span>
<span class="badge badge-pill badge-warning">Warning</span>
<span class="badge badge-pill badge-danger">Danger</span>
{% endexample %}

## Outline Badges

Just like our buttons, you can get badges that are not quite as bold by using the `.badge-outline-*` contextual color modifier classes.  You can also combine this with the `.badge-pill` class.

{% example html %}
<strong>Outline Badges:</strong>
<p>
<span class="badge badge-outline">Default</span>
<span class="badge badge-outline-primary">Primary</span>
<span class="badge badge-outline-secondary">Secondary</span>
<span class="badge badge-outline-success">Success</span>
<span class="badge badge-outline-info">Info</span>
<span class="badge badge-outline-warning">Warning</span>
<span class="badge badge-outline-danger">Danger</span>
</p>

<strong>Anchor Outline Badges:</strong>
<p>
<a href="#" class="badge badge-outline">Default</a>
<a href="#" class="badge badge-outline-primary">Primary</a>
<a href="#" class="badge badge-outline-secondary">Secondary</a>
<a href="#" class="badge badge-outline-success">Success</a>
<a href="#" class="badge badge-outline-info">Info</a>
<a href="#" class="badge badge-outline-warning">Warning</a>
<a href="#" class="badge badge-outline-danger">Danger</a>
</p>
{% endexample %}
