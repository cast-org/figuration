---
layout: docs
title: Quick Start
group: get-started
redirect_from: "/get-started/"
---

Looking to quickly add Figuration to your project? Use the CDN links. Using a package manager or need to download the source files? [Head to the downloads page.]({{ site.baseurl }}/get-started/download/)

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Using the CDN

CDN services are provided for free by the awesome folks over at [jsDelivr](https://www.jsdelivr.com/).

Copy-paste the stylesheet `<link>` into your `<head>` before all other stylesheets to load our CSS.

{% highlight html %}
<link rel="stylesheet" href="{{ site.cdn.css }}" integrity="{{ site.cdn.css_hash }}" crossorigin="anonymous">
{% endhighlight %}

Add our JavaScript widgets and jQuery, either in the `<head>`, or near the end of your pages, right before the closing `</body>` tag. Be sure to place jQuery first, as our code depends on it.

{% highlight html %}
<script src="{{ site.cdn.jquery }}" integrity="{{ site.cdn.jquery_hash }}" crossorigin="anonymous"></script>
<script src="{{ site.cdn.js }}" integrity="{{ site.cdn.js_hash }}" crossorigin="anonymous"></script>
{% endhighlight %}

## Basic Template
Be sure to have your pages set up with the latest design and development standards. That means:

* Use the HTML5 doctype
* Force Internet Explorer to use its latest rendering mode ([read more](http://stackoverflow.com/q/6771258))
* Utilize the viewport meta tag

Essentially something like this:

{% highlight html %}
<!DOCTYPE html>
<html lang="en-us">
  <head>
    <!-- Required meta tags always come first -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">

    <!-- Figuration CSS -->
    <link rel="stylesheet" href="{{ site.cdn.css }}" integrity="{{ site.cdn.css_hash }}" crossorigin="anonymous">

    <!-- jQuery and Figuration JS -->
    <script src="{{ site.cdn.jquery }}" integrity="{{ site.cdn.jquery_hash }}" crossorigin="anonymous"></script>
    <script src="{{ site.cdn.js }}" integrity="{{ site.cdn.js_hash }}" crossorigin="anonymous"></script>
  </head>
  <body>
    <h1>Hello, world!</h1>
  </body>
</html>
{% endhighlight %}

That should be all you need for overall page requirements. Visit the [Layout docs]({{ site.baseurl }}/layout/overview/) to begin building out your content and components.

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
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
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

With the above snippet, nested elements---including generated content via `:before` and `:after`---will all inherit the specified `box-sizing` for that `.selector-for-some-widget`.

Learn more about [box model and sizing at CSS Tricks](https://css-tricks.com/box-sizing/).

### Normalize.css

For improved cross-browser rendering, we use [Normalize.css](http://necolas.github.io/normalize.css/) to correct small inconsistencies across browsers and devices. We further build on this with our own, slightly more opinionated styles with [Reboot]({{ site.baseurl }}/content/reboot/).

## Community

We are just getting started so there is not much of a community yet.  Please spread the word and help us expand.

- Follow [@figuration_org on Twitter](https://twitter.com/figuration_org)