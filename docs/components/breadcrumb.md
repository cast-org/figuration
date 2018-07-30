---
layout: docs
title: Breadcrumb
group: components
---

Indicate the current page's location within a navigational hierarchy.

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Example

{% example html %}
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
{% endexample %}

## Changing the Separator

Separators are automatically added in CSS through [`::before`](https://developer.mozilla.org/en-US/docs/Web/CSS/::before) and [`content`](https://developer.mozilla.org/en-US/docs/Web/CSS/content). They can be changed by changing `$breadcrumb-divider`. The [quote](http://sass-lang.com/documentation/Sass/Script/Functions.html#quote-instance_method) function is needed to generate the quotes around a string, so if you want `>` as seperator, you can use this:

<div class="cf-example">
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb breadcrumb-chevron">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">Library</li>
        </ol>
    </nav>
</div>
{% highlight scss %}
$breadcrumb-divider: quote(">");
{% endhighlight %}

It is also possible to use a **base64 embedded SVG icon**:

<div class="cf-example">
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb breadcrumb-icon">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">Library</li>
        </ol>
    </nav>
</div>
{% highlight scss %}
$breadcrumb-divider: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiIHZpZXdCb3g9IjAgMCA4IDgiPgogIDxwYXRoIGQ9Ik0xLjUgMGwtMS41IDEuNSAyLjUgMi41LTIuNSAyLjUgMS41IDEuNSA0LTQtNC00eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMSkiIC8+Cjwvc3ZnPg==");
{% endhighlight %}

The separator can be removed by setting `$breadcrumb-divider` to `none`:

<div class="cf-example">
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb breadcrumb-none">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">Library</li>
        </ol>
    </nav>
</div>
{% highlight scss %}
$breadcrumb-divider: none;
{% endhighlight %}

## Accessibility

Since breadcrumbs provide a navigation, it is a good idea to add a meaningful label such as `aria-label="breadcrumb"` to describe the type of navigation provided in the `<nav>` element, as well as applying an `aria-current="page"` to the last item of the set to indicate that it represents the current page.

For more information, see the [WAI-ARIA Authoring Practices for the breadcrumb pattern](https://www.w3.org/TR/wai-aria-practices/#breadcrumb).
