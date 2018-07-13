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

Badges can be used as part of links or buttons to provide a counter.

{% example html %}
<button type="button" class="btn btn-primary">
    Notifications <span class="badge">4</span>
</button>
{% endexample %}

Note that depending on how they are used, badges may be confusing for users of screen readers and similar assistive technologies. While the styling of badges provides a visual cue as to their purpose, these users will simply be presented with the content of the badge. Depending on the specific situation, these badges may seem like random additional words or numbers at the end of a sentence, link, or button.

Unless the context is clear (as with the "Notifications" example, where it is understood that the "4" is the number of notifications), consider including additional context with a visually hidden piece of additional text.

{% example html %}
<button type="button" class="btn btn-primary">
    Profile <span class="badge badge-danger">9</span>
    <span class="sr-only">unread messages</span>
</button>
{% endexample %}

## Contextual Variations

Add any of the below mentioned modifier classes to change the appearance of a badge.

{% callout warning %}
Conveying Meaning to Assistive Technologies
{:.h5}

Please refer to the [Accessiblity notes about conveying meaning with color]({{ site.baseurl }}/get-started/accessibility/#conveying-meaning-with-color).
{% endcallout %}

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

## Close Icon

Create "dismissable" badges by adding the `.close` icon within a badge. Note that `<button>` and `<a>` elements are not supported _within_ another `<a>`.

{% example html %}
<p>
    <span class="badge badge-primary">
        Dismissable badge
        <button type="button" class="close" aria-label="Dismiss">
            <span aria-hidden="true">&times;</span>
        </button>
    </span>
    <a href="#" class="badge badge-secondary">
        Dismissable anchor badge
        <span role="button" class="close" aria-label="Dismiss">
            <span aria-hidden="true">&times;</span>
        </span>
    </a>
</p>
<p>
    <span class="badge badge-pill badge-warning">
        Dismissable badge
        <button type="button" class="close" aria-label="Dismiss">
            <span aria-hidden="true">&times;</span>
        </button>
    </span>
    <a href="#" class="badge badge-pill badge-success">
        Dismissable anchor badge
        <span role="button" class="close" aria-label="Dismiss">
            <span aria-hidden="true">&times;</span>
        </span>
    </a>
</p>
{% endexample %}

### JavaScript Integration

Currently, no specific JavaScript is included with Figuration to do the dismissing for you, so it may be more beneficial to write your own to implement any desired behaviors.

However, you can use the [Alert widget]({{ site.baseurl }}/widgets/alert/) with a `target` option as a quick implementation.

{% example html %}
<span class="badge badge-info" id="alert-badge">
    Dismissable badge
    <button type="button" class="close" aria-label="Dismiss" data-cfw-dismiss="alert" data-cfw-alert-target="#alert-badge">
        <span aria-hidden="true">&times;</span>
    </button>
</span>
{% endexample %}

## Badge Group

Group badges together using `.badge-group`.

{% example html%}
<div class="badge-group me-1">
    <span class="badge badge-dark">version</span>
    <span class="badge badge-success">v4.0.0</span>
</div>

<div class="badge-group me-1">
    <span class="badge badge-dark">build</span>
    <span class="badge badge-danger">error</span>
</div>

<div class="badge-group me-1">
    <span class="badge badge-dark">response</span>
    <span class="badge badge-light">none</span>
</div>

<div class="badge-group">
    <span class="badge badge-primary">comments</span>
    <span class="badge badge-outline-primary">9</span>
</div>
{% endexample %}