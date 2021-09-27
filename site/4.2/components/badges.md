---
layout: doc
title: Badges
description: Small and adaptive badges for adding context to just about any content.
group: components
toc: true
---

## Example

Badges scale to match the size of the immediate parent element by using relative font sizing and `em` units.

### Headings

{% capture example %}
<h1>Example heading <span class="badge">New</span></h1>
<h2>Example heading <span class="badge">New</span></h2>
<h3>Example heading <span class="badge">New</span></h3>
<h4>Example heading <span class="badge">New</span></h4>
<h5>Example heading <span class="badge">New</span></h5>
<h6>Example heading <span class="badge">New</span></h6>
{% endcapture %}
{% renderExample example %}

### Buttons

Badges can be used as part of links or buttons to provide a counter.

{% capture example %}
<button type="button" class="btn btn-primary">
  Notifications <span class="badge bg-light text-dark">4</span>
</button>
{% endcapture %}
{% renderExample example %}

Note that depending on how they are used, badges may be confusing for users of screen readers and similar assistive technologies. While the styling of badges provides a visual cue as to their purpose, these users will simply be presented with the content of the badge. Depending on the specific situation, these badges may seem like random additional words or numbers at the end of a sentence, link, or button.

Unless the context is clear (as with the "Notifications" example, where it is understood that the "4" is the number of notifications), consider including additional context with a visually hidden piece of additional text.

{% capture example %}
<button type="button" class="btn btn-primary">
  Profile <span class="badge bg-danger">9</span>
  <span class="sr-only">unread messages</span>
</button>
{% endcapture %}
{% renderExample example %}

### Positioned

Use utilities to modify a `.badge` and position it in the corner of a link or button.

{% capture example %}
<button type="button" class="btn btn-primary position-relative">
  Inbox
  <span class="position-absolute top-0 start-100 translate-middle badge radius-pill bg-danger">
    99+
    <span class="sr-only">unread messages</span>
  </span>
</button>
{% endcapture %}
{% renderExample example %}

You can also replace the `.badge` class with a few more utilities without a count for a more generic indicator.

{% capture example %}
<button type="button" class="btn btn-primary position-relative">
  Profile
  <span class="position-absolute top-0 start-100 translate-middle p-0_5 bg-warning border border-white radius-circle">
    <span class="sr-only">New alerts</span>
  </span>
</button>
{% endcapture %}
{% renderExample example %}

## Contextual Variations

Use our [background and text color utility]({{ site.path }}/{{ version.docs }}/utilities/color/) classes to quckly change the appearance of a badge.

{%- assign calloutColor = version.docs | valueIfEmpty: site.version.docs | prepend: "./" | append: "/partials/callout-warning-color-assistive-technologies.md" -%}
{% include calloutColor %}

{% capture example %}
<span class="badge bg-primary">Primary</span>
<span class="badge bg-secondary">Secondary</span>
<span class="badge bg-success">Success</span>
<span class="badge bg-info">Info</span>
<span class="badge bg-warning text-body">Warning</span>
<span class="badge bg-danger">Danger</span>
<span class="badge bg-light text-dark">Light</span>
<span class="badge bg-dark">Dark</span>
{% endcapture %}
{% renderExample example %}

## Outline Badges

Since badges have a transparent border by default, it is easy to create outline badges with the addition of [border color utility]({{ site.path }}/{{ version.docs }}/utilities/color/) classes, in combination with the background and text color utilities.

{% capture example %}
<span class="badge bg-transparent border-primary text-primary">Primary</span>
<span class="badge bg-transparent border-secondary text-secondary">Secondary</span>
<span class="badge bg-transparent border-success text-success">Success</span>
<span class="badge bg-transparent border-info text-info">Info</span>
<span class="badge bg-transparent border-warning text-warning">Warning</span>
<span class="badge bg-transparent border-danger text-danger">Danger</span>
<span class="badge bg-transparent border-light text-light">Light</span>
<span class="badge bg-transparent border-dark text-dark">Dark</span>
{% endcapture %}
{% renderExample example %}

## Pill Badges

Use the `.radius-pill` utility class to make badges more rounded.

{% capture example %}
<span class="badge radius-pill bg-primary">Primary</span>
<span class="badge radius-pill bg-secondary">Secondary</span>
<span class="badge radius-pill bg-success">Success</span>
<span class="badge radius-pill bg-info">Info</span>
<span class="badge radius-pill bg-warning text-body">Warning</span>
<span class="badge radius-pill bg-danger">Danger</span>
<span class="badge radius-pill bg-light text-dark">Light</span>
<span class="badge radius-pill bg-dark">Dark</span>
{% endcapture %}
{% renderExample example %}

{% capture example %}
<span class="badge radius-pill bg-transparent border-primary text-primary">Primary</span>
<span class="badge radius-pill bg-transparent border-secondary text-secondary">Secondary</span>
<span class="badge radius-pill bg-transparent border-success text-success">Success</span>
<span class="badge radius-pill bg-transparent border-info text-info">Info</span>
<span class="badge radius-pill bg-transparent border-warning text-warning">Warning</span>
<span class="badge radius-pill bg-transparent border-danger text-danger">Danger</span>
<span class="badge radius-pill bg-transparent border-light text-light">Light</span>
<span class="badge radius-pill bg-transparent border-dark text-dark">Dark</span>
{% endcapture %}
{% renderExample example %}

## Close Icon

Create "dismissable" badges by adding the `.close` icon within a badge. Note that `<button>` and `<a>` elements are not supported _within_ another `<a>`.

{% capture example %}
<span class="badge bg-primary">
  Dismissable badge
  <button type="button" class="close" aria-label="Dismiss">
    <span aria-hidden="true">&times;</span>
  </button>
</span>

<span class="badge radius-pill bg-success">
  Dismissable badge
  <button type="button" class="close" aria-label="Dismiss">
    <span aria-hidden="true">&times;</span>
  </button>
</span>

{% endcapture %}
{% renderExample example %}

### JavaScript Integration

Currently, no specific JavaScript is included with Figuration to do the dismissing for you, so it may be more beneficial to write your own to implement any desired behaviors.

However, you can use the [Alert widget]({{ site.path }}/{{ version.docs }}/widgets/alert/) with a `target` option as a quick implementation.

{% capture example %}
<span class="badge bg-info" id="alert-badge">
  Dismissable badge
  <button type="button" class="close" aria-label="Dismiss" data-cfw-dismiss="alert" data-cfw-alert-target="#alert-badge">
    <span aria-hidden="true">&times;</span>
  </button>
</span>
{% endcapture %}
{% renderExample example %}

## Badge Group

Group badges together using `.badge-group`.

{% capture example %}
<div class="badge-group me-1">
  <span class="badge bg-dark">version</span>
  <span class="badge bg-success">v4.2.1</span>
</div>

<div class="badge-group me-1">
  <span class="badge bg-dark">build</span>
  <span class="badge bg-danger">error</span>
</div>

<div class="badge-group me-1">
  <span class="badge radius-pill radius-e-0 bg-dark">response</span>
  <span class="badge radius-pill radius-s-0 bg-light text-dark">none</span>
</div>

<div class="badge-group">
  <span class="badge bg-primary">comments</span>
  <span class="badge bg-white border-primary text-primary">9</span>
</div>
{% endcapture %}
{% renderExample example %}

## SASS Reference

### Variables

The available [Customization options]({{ site.path }}/{{ version.docs }}/get-started/options/), or Sass variables, that can be customized for the badge component.

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
        <td><code>$enable-badge</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the badge component classes.
          Smaller segements of the badge component classes can be disabled with the following <code>$enable-*</code> variables.
        </td>
      </tr>
      <tr>
        <td><code>$enable-badge-close</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the badge close button rule.
        </td>
      </tr>
      <tr>
        <td><code>$enable-badge-group</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the badge group variant.
        </td>
      </tr>
      <tr>
        <td><code>$badge-bg</code></td>
        <td>string</td>
        <td><code>$uibase-500</code></td>
        <td>
          Badge default background color.
        </td>
      </tr>
      <tr>
        <td><code>$badge-color</code></td>
        <td>string</td>
        <td><code>$white</code></td>
        <td>
          Badge default text color.
        </td>
      </tr>
      <tr>
        <td><code>$badge-font-family</code></td>
        <td>string</td>
        <td><code>null</code></td>
        <td>
          Badge font family.
        </td>
      </tr>
      <tr>
        <td><code>$badge-font-size</code></td>
        <td>string</td>
        <td><code>.75em</code></td>
        <td>
          Badge font size.
        </td>
      </tr>
      <tr>
        <td><code>$badge-font-weight</code></td>
        <td>string</td>
        <td><code>$font-weight-bold</code></td>
        <td>
          Badge font weight.
        </td>
      </tr>
      <tr>
        <td><code>$badge-line-height</code></td>
        <td>string</td>
        <td><code>1</code></td>
        <td>
          Badge line height.
        </td>
      </tr>
      <tr>
        <td><code>$badge-padding-y</code></td>
        <td>string</td>
        <td><code>.25em</code></td>
        <td>
          Badge vertical padding.
        </td>
      </tr>
      <tr>
        <td><code>$badge-padding-x</code></td>
        <td>string</td>
        <td><code>.4375em</code></td>
        <td>
          Badge horizontal padding.
        </td>
      </tr>
      <tr>
        <td><code>$badge-border-width</code></td>
        <td>string</td>
        <td><code>$border-width</code></td>
        <td>
          Badge border width.
        </td>
      </tr>
      <tr>
        <td><code>$badge-border-radius</code></td>
        <td>string</td>
        <td><code>.25em</code></td>
        <td>
          Badge border radius.
        </td>
      </tr>
      <tr>
        <td><code>$badge-close-padding-x</code></td>
        <td>string</td>
        <td><code>.375em</code></td>
        <td>
          Badge close button horizontal padding.
        </td>
      </tr>
      <tr>
        <td><code>$badge-close-font-size</code></td>
        <td>string</td>
        <td><code>1.25em</code></td>
        <td>
          Badge close button font size.
        </td>
      </tr>
    </tbody>
  </table>
</div>


### Mixins

No mixins available.
