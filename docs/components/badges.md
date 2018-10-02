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
    <a href="#" role="button" class="badge badge-secondary">
        Dismissable anchor badge
        <span class="close" aria-label="Dismiss">
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
    <a href="#" role="button" class="badge badge-pill badge-success">
        Dismissable anchor badge
        <span class="close" aria-label="Dismiss">
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

## SASS Reference

### Variables

The available [Customization options]({{ site.baseurl }}/get-started/options/), or Sass variables, that can be customized for badges.

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
                    Enable the generation of the badge classes.
                    Smaller segements of the badge classes can be disabled with the following <code>$enable-*</code> variables.
                </td>
            </tr>
            <tr>
                <td><code>$enable-badge-common</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                Enable the generation of common badge, <code>.badge</code>, rules.
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
                <td><code>$enable-badge-pill</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the badge pill variant.
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
                <td><code>$enable-badge-default</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the default badge color variant.
                </td>
            </tr>
            <tr>
                <td><code>$enable-badge-colors</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the badge contextual color variants.
                </td>
            </tr>
            <tr>
                <td><code>$enable-badge-outline</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the default outline badge color variant.
                </td>
            </tr>
            <tr>
                <td><code>$enable-badge-outline-colors</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the outline badge contextual color variants.
                </td>
            </tr>
            <tr>
                <td><code>$badge-font-size</code></td>
                <td>string</td>
                <td><code>75%</code></td>
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
                <td><code>$line-height-base</code></td>
                <td>
                    Badge line height.
                </td>
            </tr>
            <tr>
                <td><code>$badge-padding-y</code></td>
                <td>string</td>
                <td><code>0</code></td>
                <td>
                    Badge vertical padding.
                </td>
            </tr>
            <tr>
                <td><code>$badge-padding-x</code></td>
                <td>string</td>
                <td><code>.375em</code></td>
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
                <td><code>.375rem</code></td>
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
            <tr>
                <td><code>$badge-pill-padding-x</code></td>
                <td>string</td>
                <td><code>.5em</code></td>
                <td>
                    Badge pill variant horizontal padding.
                </td>
            </tr>
            <tr>
                <td><code>$badge-pill-border-radius</code></td>
                <td>string</td>
                <td><code>10rem</code></td>
                <td>
                    Badge pill variant border radius.
                </td>
            </tr>
            <tr>
                <td><code>$badge-outline-bg</code></td>
                <td>string</td>
                <td><code>transparent</code></td>
                <td>
                    Background color for outline badge variant.
                </td>
            </tr>
            <tr>
                <td><code>$badge-default-bg</code></td>
                <td>string</td>
                <td><code>$white</code></td>
                <td>
                    Default badge background color.
                </td>
            </tr>
            <tr>
                <td><code>$badge-default-color</code></td>
                <td>string</td>
                <td><code>color-if-contrast($uibase-500, $badge-default-bg)</code></td>
                <td>
                    Default badge text color.
                </td>
            </tr>
            <tr>
                <td><code>$badge-default-border</code></td>
                <td>string</td>
                <td><code>$uibase-300</code></td>
                <td>
                    Default badge border color.
                </td>
            </tr>
            <tr>
                <td><code>$badge-default-hover-bg</code></td>
                <td>string</td>
                <td><code>$uibase-50</code></td>
                <td>
                    Default badge background color for hover and focus states.
                </td>
            </tr>
            <tr>
                <td><code>$badge-default-hover-color</code></td>
                <td>string</td>
                <td><code>color-if-contrast($uibase-600, $badge-default-hover-bg)</code></td>
                <td>
                    Default badge text color for hover and focus states.
                </td>
            </tr>
            <tr>
                <td><code>$badge-default-hover-border</code></td>
                <td>string</td>
                <td><code>$uibase-400</code></td>
                <td>
                    Default badge border color for hover and focus states.
                </td>
            </tr>
            <tr>
                <td><code>$badge-themes</code></td>
                <td>map</td>
                <td><code>()</code></td>
                <td>
                    Map of color schemes for badges.
                </td>
            </tr>
            <tr>
                <td><code>$badge-colors</code></td>
                <td>list</td>
                <td><code>$base-colors</code></td>
                <td>
                    Colors to mix and merge into <code>$badge-themes</code>
                </td>
            </tr>
            <tr>
                <td><code>$badge-levels</code></td>
                <td>map</td>
                <td><code>$level-context</code></td>
                <td>
                    Levels to mix badge colors with.
                </td>
            </tr>
            <tr>
                <td><code>$badge-outline-themes</code></td>
                <td>map</td>
                <td><code>()</code></td>
                <td>
                    Map of color schemes for outline badges.
                </td>
            </tr>
            <tr>
                <td><code>$badge-outline-colors</code></td>
                <td>list</td>
                <td><code>$base-colors</code></td>
                <td>
                    Colors to mix and merge into <code>$badge-outline-themes</code>
                </td>
            </tr>
            <tr>
                <td><code>$badge-outline-levels</code></td>
                <td>map</td>
                <td><code>$level-control</code></td>
                <td>
                    Levels to mix outline badge colors with.
                </td>
            </tr>
        </tbody>
    </table>
</div>


### Mixins

Here are the mixins related to badges that we use to help generate our CSS. You can also uses these mixins to generate your own custom components or utilities.

#### badge-variant
{:.no_toc}

Generate a badge color variant.

{% highlight sass %}
@include badge-variant($color, $bg, $border, $hover-color, $hover-bg, $hover-border);
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
                <td><code>$color</code></td>
                <td>number</td>
                <td>none</td>
                <td>
                    Text color for a badge.
                </td>
            </tr>
            <tr>
                <td><code>$bg</code></td>
                <td>number</td>
                <td>none</td>
                <td>
                    Background color for a badge.
                </td>
            </tr>
            <tr>
                <td><code>$border</code></td>
                <td>number</td>
                <td>none</td>
                <td>
                    Border color for a badge.
                </td>
            </tr>
            <tr>
                <td><code>$hover-color</code></td>
                <td>number</td>
                <td>none</td>
                <td>
                    Text color for a badge in hover or focus state.
                </td>
            </tr>
            <tr>
                <td><code>$hover-bg</code></td>
                <td>number</td>
                <td>none</td>
                <td>
                    Background color for a badge in hover or focus state.
                </td>
            </tr>
            <tr>
                <td><code>$hover-border</code></td>
                <td>number</td>
                <td>none</td>
                <td>
                    Border color for a badge in hover or focus state.
                </td>
            </tr>
        </tbody>
    </table>
</div>
