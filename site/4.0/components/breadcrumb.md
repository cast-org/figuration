---
layout: doc
title: Breadcrumb
description: Indicate the current page's location within a navigational hierarchy.
group: components
toc: true
---

## Example

{% capture example %}
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item active" aria-current="page">Home</li>
  </ol>
</nav>

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">Library</li>
  </ol>
</nav>

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item"><a href="#">Library</a></li>
    <li class="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
</nav>
{% endcapture %}
{% renderExample example %}

## Changing the Separator

Separators are automatically added in CSS through [`::before`](https://developer.mozilla.org/en-US/docs/Web/CSS/::before) and [`content`](https://developer.mozilla.org/en-US/docs/Web/CSS/content). They can be changed by changing `$breadcrumb-divider` settings variable in the SCSS. The [quote](https://sass-lang.com/documentation/modules/string#quote) function is needed to generate the quotes around a string, so if you want `>` as the separator, you can use this:

<div class="cf-example">
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb breadcrumb-chevron">
      <li class="breadcrumb-item"><a href="#">Home</a></li>
      <li class="breadcrumb-item active" aria-current="page">Library</li>
    </ol>
  </nav>
</div>
{% capture highlight %}
$breadcrumb-divider: quote(">");
{% endcapture %}
{% renderHighlight highlight, "sass" %}

It is also possible to use a **base64 embedded SVG icon**:

<div class="cf-example">
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb breadcrumb-icon">
      <li class="breadcrumb-item"><a href="#">Home</a></li>
      <li class="breadcrumb-item active" aria-current="page">Library</li>
    </ol>
  </nav>
</div>
{% capture highlight %}
$breadcrumb-divider: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiIHZpZXdCb3g9IjAgMCA4IDgiPgogIDxwYXRoIGQ9Ik0xLjUgMGwtMS41IDEuNSAyLjUgMi41LTIuNSAyLjUgMS41IDEuNSA0LTQtNC00eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMSkiIC8+Cjwvc3ZnPg==");
{% endcapture %}
{% renderHighlight highlight, "sass" %}

The separator can be removed by setting `$breadcrumb-divider` to `none`:

<div class="cf-example">
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb breadcrumb-none">
      <li class="breadcrumb-item"><a href="#">Home</a></li>
      <li class="breadcrumb-item active" aria-current="page">Library</li>
    </ol>
  </nav>
</div>
{% capture highlight %}
$breadcrumb-divider: none;
{% endcapture %}
{% renderHighlight highlight, "sass" %}

## Accessibility

Since breadcrumbs provide a navigation, it is a good idea to add a meaningful label such as `aria-label="breadcrumb"` to describe the type of navigation provided in the `<nav>` element, as well as applying an `aria-current="page"` to the last item of the set to indicate that it represents the current page.

For more information, see the [WAI-ARIA Authoring Practices for the breadcrumb pattern](https://www.w3.org/TR/wai-aria-practices/#breadcrumb).

## SASS Reference

### Variables

The available [Customization options]({{ site.path }}/{{ version.docs }}/get-started/options/), or Sass variables, that can be customized for the breadcrumb component.

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
        <td><code>$enable-breadcrumb</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the breadcrumb component classes.
        </td>
      </tr>
      <tr>
        <td><code>$breadcrumb-margin-bottom</code></td>
        <td>string</td>
        <td><code>1rem</code></td>
        <td>
          Vertical spacing for breadcrumb.
        </td>
      </tr>
      <tr>
        <td><code>$breadcrumb-font-size</code></td>
        <td>string</td>
        <td><code>null</code></td>
        <td>
          Font size for breadcrumb.
        </td>
      </tr>
      <tr>
        <td><code>$breadcrumb-item-padding-x</code></td>
        <td>string</td>
        <td><code>.5rem</code></td>
        <td>
          Horizontal spacing for breadcrumb items.
        </td>
      </tr>
      <tr>
        <td><code>$breadcrumb-active-color</code></td>
        <td>string</td>
        <td><code>$uibase-700</code></td>
        <td>
          Text color for active breadcrumb items.
        </td>
      </tr>
      <tr>
        <td><code>$breadcrumb-divider</code></td>
        <td>string</td>
        <td><code>quote("/")</code></td>
        <td>
          Breadcrumb divider content.
        </td>
      </tr>
      <tr>
        <td><code>$breadcrumb-divider-color</code></td>
        <td>string</td>
        <td><code>$uibase-300</code></td>
        <td>
          Text color of breadcrumb divider.
        </td>
      </tr>
    </tbody>
  </table>
</div>

### Mixins

No mixins available.