---
layout: doc
title: Position
description: Place a component outside the normal document flow.
group: utilities
toc: true
---

## Common Positioning

The following utilities are available for positioning.

{% capture highlight %}
<div class="position-static">...</div>
<div class="position-relative">...</div>
<div class="position-absolute">...</div>
<div class="position-fixed">...</div>
<div class="position-sticky">...</div>
{% endcapture %}
{% renderHighlight highlight, "html" %}

Responsive variants are also available in the form of `.position{breakpoint}-{type}`, such as `.position-md-relative`. Please refer to how our [breakpoint nomenclature]({{ site.path }}/{{ version.docs }}/layout/overview/#breakpoint-nomenclature) is used.

## Fixed Top

Position an element at the top of the viewport, from edge to edge.

{% capture highlight %}
<div class="fixed-top">...</div>
{% endcapture %}
{% renderHighlight highlight, "html" %}

## Fixed Bottom

Position an element at the bottom of the viewport, from edge to edge.

{% capture highlight %}
<div class="fixed-bottom">...</div>
{% endcapture %}
{% renderHighlight highlight, "html" %}

## Sticky Top

Position an element at the top of the viewport, from edge to edge, but only after you scroll past it.
This sticky utility uses CSS's `position: sticky`, which isn't fully supported in all browsers.  Additional support information can be found at [Can I Use - CSS position:sticky](https://caniuse.com/css-sticky).

**IE11 and IE10 will render `position: sticky` as `position: relative`.** As such, we wrap the styles in a `@supports` query, limiting the stickiness to only browsers that can render it properly.

{% capture highlight %}
<div class="sticky-top">...</div>
{% endcapture %}
{% renderHighlight highlight, "html" %}

## Responsive Sticky Top

Responsive variations also exist for `.sticky-top` utility.

{% capture highlight %}
<div class="sticky-sm-top">Stick to the top on viewports sized SM (small) or wider</div>
<div class="sticky-md-top">Stick to the top on viewports sized MD (medium) or wider</div>
<div class="sticky-lg-top">Stick to the top on viewports sized LG (large) or wider</div>
<div class="sticky-xl-top">Stick to the top on viewports sized XL (extra-large) or wider</div>
{% endcapture %}
{% renderHighlight highlight, "html" %}

## Element Placement
Arrange elements with the placement positioning utilities. The syntax is `{property}-{position}`.

Where *property* is one of:
- `top` - for the vertical `top` position
- `start` - for the horizontal `left` position (in LTR)
- `bottom` - for the vertical `bottom` position
- `end` - for the horizontal `right` position (in LTR)

Where *position* is one of:
- `0` - for `0` offset length
- `50` - for `50%` offset length
- `100` - for `100%` offset length

You can add more position values by adding entries to the `$position-offsets` Sass map variable. It is also possible to generate the responsive variants by modifying the `$utility-placement-breakpoints` Sass variable.

{% capture example %}
<div class="position-relative">
  <div class="position-absolute top-0 start-0"></div>
  <div class="position-absolute top-0 end-0"></div>
  <div class="position-absolute top-50 start-50"></div>
  <div class="position-absolute bottom-50 end-50"></div>
  <div class="position-absolute bottom-0 start-0"></div>
  <div class="position-absolute bottom-0 end-0"></div>
</div>
{% endcapture %}
{% renderExample example, "cf-example-placement" %}

## Element Translate

In addition, you can also center the elements with the transform utility class `.translate-middle`.

This class applies the transformations `translateX(-50%)` and `translateY(-50%)` to the element which, in combination with the edge positioning utilities, allows you to absolute center an element.

{% capture example %}
<div class="position-relative">
  <div class="position-absolute top-0 start-0 translate-middle"></div>
  <div class="position-absolute top-0 start-50 translate-middle"></div>
  <div class="position-absolute top-0 start-100 translate-middle"></div>
  <div class="position-absolute top-50 start-0 translate-middle"></div>
  <div class="position-absolute top-50 start-50 translate-middle"></div>
  <div class="position-absolute top-50 start-100 translate-middle"></div>
  <div class="position-absolute top-100 start-0 translate-middle"></div>
  <div class="position-absolute top-100 start-50 translate-middle"></div>
  <div class="position-absolute top-100 start-100 translate-middle"></div>
</div>
{% endcapture %}
{% renderExample example, "cf-example-placement" %}

By using `.translate-middle-x` or `.translate-middle-y` classes, elements can be positioned only in horizontal or vertical direction.

{% capture example %}
<div class="position-relative">
  <div class="position-absolute top-0 start-0"></div>
  <div class="position-absolute top-0 start-50 translate-middle-x"></div>
  <div class="position-absolute top-0 end-0"></div>
  <div class="position-absolute top-50 start-0 translate-middle-y"></div>
  <div class="position-absolute top-50 start-50 translate-middle"></div>
  <div class="position-absolute top-50 end-0 translate-middle-y"></div>
  <div class="position-absolute bottom-0 start-0"></div>
  <div class="position-absolute bottom-0 start-50 translate-middle-x"></div>
  <div class="position-absolute bottom-0 end-0"></div>
</div>
{% endcapture %}
{% renderExample example, "cf-example-placement" %}

It is also possible to generate the responsive variants of the translate utilities by modifying the `$utility-translate-breakpoints` Sass variable.

## Examples

Here are some real life examples of these classes:

{% capture example %}
<button type="button" class="btn btn-primary position-relative">
  Mails <span class="position-absolute top-0 start-100 translate-middle badge radius-pill bg-secondary">+99 <span class="sr-only">unread messages</span></span>
</button>

<button type="button" class="btn btn-dark position-relative">
  Marker <svg width="1em" height="1em" viewBox="0 0 8 8" class="position-absolute top-100 start-50 translate-middle mt-0_25 text-dark" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M0 0l4 4 4-4h-8z" transform="translate(0 2)" /></svg>
</button>

<button type="button" class="btn btn-primary position-relative">
  Alerts <span class="position-absolute top-0 start-100 translate-middle badge border border-light radius-circle bg-danger p-0_5"><span class="sr-only">unread messages</span></span>
</button>
{% endcapture %}
{% renderExample example, "d-flex flex-around" %}

You can use these classes with existing components to create new ones. Remember that you can extend its functionality by adding entries to the `$position-offsets` variable.

{% capture example %}
<div class="position-relative m-1_5">
  <div class="progress" style="height: 1px;">
    <div class="progress-bar bg-primary" role="progressbar" style="width: 50%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
  <button type="button" class="position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary radius-circle">1</button>
  <button type="button" class="position-absolute top-0 start-50 translate-middle btn btn-sm btn-primary radius-circle">2</button>
  <button type="button" class="position-absolute top-0 start-100 translate-middle btn btn-sm btn-secondary radius-circle">3</button>
</div>
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
        <td><code>$enable-utility-position</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the position utility classes.
          Smaller segements of the position utilities can be disabled with the following <code>$enable-*</code> variables.
        </td>
      </tr>
      <tr>
        <td><code>$enable-utility-position-fixed-top</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the fixed top position utility class.
        </td>
      </tr>
      <tr>
        <td><code>$enable-utility-position-fixed-bottom</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the fixed bottom position utility class.
        </td>
      </tr>
      <tr>
        <td><code>$enable-utility-position-sticky-top</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the sticky top position utility class.
        </td>
      </tr>
      <tr>
        <td><code>$enable-utility-position-sticky-top-responsive</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the additional responsive sticky top position utility class.
          <code>$enable-utility-position-sticky-top</code> needs to be <code>true</code> for this setting be be observed.
        </td>
      </tr>
      <tr>
        <td><code>$enable-utility-position-placement</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the placement position utility classes.
        </td>
      </tr>
      <tr>
        <td><code>$enable-utility-position-translate</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the translate position utility classes.
        </td>
      </tr>
      <tr>
        <td><code>$utility-position-breakpoints</code></td>
        <td>string</td>
        <td><code>map-keys($grid-breakpoints)</code></td>
        <td>
          Map of breakpoints that will be used to generate responsive position utilities.
        </td>
      </tr>
      <tr>
        <td><code>$utility-sticky-top-breakpoints</code></td>
        <td>string</td>
        <td><code>map-keys($grid-breakpoints)</code></td>
        <td>
          Map of breakpoints that will be used to generate responsive sticky-top utilities.
        </td>
      </tr>
      <tr>
        <td><code>$utility-placement-breakpoints</code></td>
        <td>string</td>
        <td><code>"xs"</code></td>
        <td>
          <p>Map of breakpoints that will be used to generate responsive placement utilities.</p>
          By default this is limited to just the <code>xs</code> breakpoint, so not all the responsive variants are created.
        </td>
      </tr>
      <tr>
        <td><code>$utility-translate-breakpoints</code></td>
        <td>string</td>
        <td><code>"xs"</code></td>
        <td>
          <p>Map of breakpoints that will be used to generate responsive translate utilities.</p>
          By default this is limited to just the <code>xs</code> breakpoint, so not all the responsive variants are created.
        </td>
      </tr>
      <tr>
        <td><code>$utility-position</code></td>
        <td>string</td>
        <td><code>static, relative, absolute, fixed, sticky</code></td>
        <td>
          List of position values that will be used to generate responsive position utilities.
        </td>
      </tr>
      <tr>
        <td><code>$position-offsets</code></td>
        <td>string</td>
        <td><code><pre>("0":    0,
"50":   50%,
"100":  100%)</pre></code></td>
        <td>
          Map of length (offset) values that will be used to generate placement utilities.
        </td>
      </tr>
      <tr>
        <td><code>$position-top-offsets</code></td>
        <td>string</td>
        <td><code>$position-offsets</code></td>
        <td>
          Map of length (offset) values that will be used to generate top placement utilities.
        </td>
      </tr>
      <tr>
        <td><code>$position-end-offsets</code></td>
        <td>string</td>
        <td><code>$position-offsets</code></td>
        <td>
          Map of length (offset) values that will be used to generate end-side placement utilities.
        </td>
      </tr>
      <tr>
        <td><code>$position-bottom-offsets</code></td>
        <td>string</td>
        <td><code>$position-offsets</code></td>
        <td>
          Map of length (offset) values that will be used to generate bottom placement utilities.
        </td>
      </tr>
      <tr>
        <td><code>$position-start-offsets</code></td>
        <td>string</td>
        <td><code>$position-offsets</code></td>
        <td>
          Map of length (offset) values that will be used to generate start-side placement utilities.
        </td>
      </tr>
    </tbody>
  </table>
</div>

### Mixins

No mixins available.
