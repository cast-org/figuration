---
layout: doc
title: Quick Start
description: Get started using Figuration today with our CDN links and starter templates.
group: get-started
---

Looking to quickly add Figuration to your project? Use the CDN links. Using a package manager or need to download the source files? [Head to the downloads page.]({{ site.path }}/{{ site.version.path }}/get-started/download/)

<div class="h3">Page Contents</div>

${toc}

## Using the CDN

Quickly add Figuration to your project by using the CDN services provided for free by the awesome folks over at [jsDelivr](https://www.jsdelivr.com/).  If you are using a package manager, or need to download the source files, more information can be found on the [download page.]({{ site.path }}/{{ site.version.path }}/get-started/download/)

### CSS

Copy-paste the stylesheet `<link>` into your `<head>` before all other stylesheets to load our CSS.

{% highlight html %}
<link rel="stylesheet" href="{{ site.cdn.css }}" integrity="{{ site.cdn.css_hash }}" crossorigin="anonymous">
{% endhighlight %}

### JavaScript

[Figuration's widgets]({{ site.path }}/{{ site.version.path }}/widgets/overview/), our interactive components, require [jQuery](https://jquery.com/) and [Popper.js](https://popper.js.org/), along with our own JavaScript library to function. Add jQuery Popper, and our JavaScript widgets either in the `<head>`, or near the end of your pages, right before the closing `</body>` tag. Be sure to place jQuery and Popper first, as our code depends on them.

Our widgets work with either the full version of jQuery, or the [jQuery's slim build](https://blog.jquery.com/2016/06/09/jquery-3-0-final-released/).

{% highlight html %}
<script src="{{ site.cdn.jquery }}" integrity="{{ site.cdn.jquery_hash }}" crossorigin="anonymous"></script>
<script src="{{ site.cdn.popper }}" integrity="{{ site.cdn.popper_hash }}" crossorigin="anonymous"></script>
<script src="{{ site.cdn.js }}" integrity="{{ site.cdn.js_hash }}" crossorigin="anonymous"></script>
{% endhighlight %}

## Basic Template

Be sure to have your pages set up with the latest design and development standards. That means using the HTML5 doctype, and including the viewport meta tag to allow responsive behaviors.

Essentially something like this:

{% highlight html %}
<!DOCTYPE html>
<html lang="en-us">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Hello, world!</title>

    <!-- Figuration CSS -->
    <link rel="stylesheet" href="{{ site.cdn.css }}" integrity="{{ site.cdn.css_hash }}" crossorigin="anonymous">

    <!-- jQuery and Figuration JS -->
    <script src="{{ site.cdn.jquery }}" integrity="{{ site.cdn.jquery_hash }}" crossorigin="anonymous"></script>
    <script src="{{ site.cdn.popper }}" integrity="{{ site.cdn.popper_hash }}" crossorigin="anonymous"></script>
    <script src="{{ site.cdn.js }}" integrity="{{ site.cdn.js_hash }}" crossorigin="anonymous"></script>
  </head>
  <body>
    <h1>Hello, world!</h1>
  </body>
</html>
{% endhighlight %}

That should be all you need for overall page requirements. Visit the [Layout docs]({{ site.path }}/{{ site.version.path }}/layout/overview/) to begin building out your content and components.

## Right-to-left Support

Working with a language that reads from right to left? Use the `rtl` version of the Figuration CSS.  The markup and classes are the same between the `ltr` and `rtl` versions of Figuration.

**Pro Tip!** We have included a way to preview layout, component, and widget behavior with the documentation.  Use the **settings** menu in the top navbar to change between text directions.

The steps needed to switch from `ltr` to `rtl` mode are:
- Add the `dir="rtl"` attribute to the `<html>` tag.
- Update the `lang` attribute on the `<html>` tag to match the language being used.
    - Refer to this [list of language codes](https://www.loc.gov/standards/iso639-2/php/code_list.php) provided by the US Library of Congress to find the one you require.
    {% highlight html %}
    <!-- This example is for a right-to-left Arabic layout -->
    <html lang="ar" dir="rtl">
    {% endhighlight %}
- Load the `rtl` version of the Figuration CSS.  Load this **in place of** the default Figuration CSS.
    {% highlight html %}
    <!-- Figuration RTL CSS -->
    <link rel="stylesheet" href="{{ site.cdn.css_rtl }}" integrity="{{ site.cdn.css_rtl_hash }}" crossorigin="anonymous">
    {% endhighlight %}

When complete, the basic template for a right-to-left markup should look like the following example.
{% highlight html %}
<!DOCTYPE html>
<html lang="ar" dir="rtl">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Hello, world!</title>

    <!-- Figuration RTL CSS -->
    <link rel="stylesheet" href="{{ site.cdn.css_rtl }}" integrity="{{ site.cdn.css_rtl_hash }}" crossorigin="anonymous">

    <!-- jQuery and Figuration JS -->
    <script src="{{ site.cdn.jquery }}" integrity="{{ site.cdn.jquery_hash }}" crossorigin="anonymous"></script>
    <script src="{{ site.cdn.popper }}" integrity="{{ site.cdn.popper_hash }}" crossorigin="anonymous"></script>
    <script src="{{ site.cdn.js }}" integrity="{{ site.cdn.js_hash }}" crossorigin="anonymous"></script>
  </head>
  <body>
    <h1>Hello, world!</h1>
  </body>
</html>
{% endhighlight %}

## Important Markup

Figuration depends a handful of important global styles and settings that you'll need to be aware of when using it, all of which are almost exclusively geared towards the *normalization* of cross browser styles.

### HTML5 Doctype

Figuration requires the use of the HTML5 doctype. Without it, you'll see some incomplete styling.

{% highlight html %}
<!DOCTYPE html>
<html lang="en-us">
  ...
</html>
{% endhighlight %}

### Responsive Meta Tag

Figuration is developed *mobile first*, a strategy in which we optimize code for mobile devices first and then scale up components as necessary using CSS media queries. To ensure proper rendering and touch zooming for all devices, **add the responsive viewport meta tag** to your `<head>`.

{% highlight html %}
<meta name="viewport" content="width=device-width, initial-scale=1">
{% endhighlight %}

You can see an example of this in action in the [basic template](#basic-template).

### Box-sizing

For more straightforward sizing in CSS, we switch the global `box-sizing` value from `content-box` to `border-box`. This ensures `padding` does not affect the final computed width of an element, but it can cause problems with some third party software like Google Maps and Google Custom Search Engine.

On the rare occasion you need to override it, use something like the following:

{% highlight scss %}
.selector-for-some-widget {
  -webkit-box-sizing: content-box;
     -moz-box-sizing: content-box;
          box-sizing: content-box;
}
{% endhighlight %}

With the above snippet, nested elements---including generated content via `::before` and `::after`---will all inherit the specified `box-sizing` for that `.selector-for-some-widget`.

Learn more about [box model and sizing at CSS Tricks](https://css-tricks.com/box-sizing/).

### Reboot

For improved cross-browser rendering, we use [Bootstrap's Reboot](https://getbootstrap.com/docs/4.1/content/reboot/) to correct inconsistencies across browsers and devices while providing slightly more opinionated resets to common HTML elements.

## Community

We are just getting started so there is not much of a community yet.  Please spread the word and help us expand.

- Follow [@figuration_org on Twitter]({{ site.twitter}})