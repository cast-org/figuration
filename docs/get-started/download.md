---
layout: docs
title: Download
group: get-started
---

**Figuration v{{ site.current_version}}** is available for download in several ways. Choose from the options below get what you need.

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Quick Download

<div data-cfw="equalize" data-cfw-equalize-target=".card-block">
  <div class="row mt-2" data-cfw="equalize" data-cfw-equalize-target=".card-footer">
    <div class="col-sm-6">
      <div class="card card-download">
        <h3 class="h4 card-header card-inverse" style="background-color: #246;">Compiled</h3>
        <div class="card-block">
{% markdown %}
Download just the compiled and minified CSS and JavaScript. Doesn't include any documentation or original source files.
{% endmarkdown %}
        </div>
        <div class="card-footer text-sm-center">
<a href="{{ site.download.dist }}" class="btn btn-info" onclick="ga('send', 'event', 'Get Started', 'Download', 'Download compiled {{ site.current_version }}');">Download Figuration</a>
        </div> <!-- /.card-footer -->
      </div> <!-- /.card -->
    </div>
    <div class="col-sm-6">
      <div class="card card-download">
        <h3 class="h4 card-header card-inverse" style="background-color: #246;">Source Files</h3>
        <div class="card-block">
{% markdown %}
Download everything: source Sass, JavaScript, and documentation files. **Requires a Sass compiler, [Autoprefixer](https://github.com/postcss/autoprefixer), [postcss-flexbugs-fixes](https://github.com/luisrudge/postcss-flexbugs-fixes), and [some setup]({{ site.baseurl }}/get-started/build-tools/#tooling-setup).**
{% endmarkdown %}
        </div>
        <div class="card-footer text-sm-center">
<a href="{{ site.download.source }}" class="btn" onclick="ga('send', 'event', 'Get Started', 'Download', 'Download source {{ site.current_version }}');">Download source</a>
        </div> <!-- /.card-footer -->
      </div> <!-- /.card -->
    </div>  <!-- /.col -->
  </div> <!-- /.row -->
</div>

## Package Managers

Pull in Figuration's **source files** into nearly any project with some of the most popular package managers. No matter the package manager, Figuration will **require a Sass compiler and [Autoprefixer](https://github.com/postcss/autoprefixer)** for a setup that matches our official compiled versions.

### npm

Install Figuration in your Node powered apps with [the npm package](https://www.npmjs.org/package/figuration):

{% highlight bash %}
npm install figuration@{{ site.current_version }}
{% endhighlight %}

### Yarn

{% highlight bash %}
yarn add figuration@{{ site.current_version }}
{% endhighlight %}

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

## What's Included

The [quick download versions](#quick-download) listed above, contain the following directories and files, logically grouping common resources and providing both compiled and minified variations.

### Compiled Version

Once downloaded, unzip the compressed folder to see the structure of (the compiled) Figuration. You'll see something like this:

{% highlight plaintext %}
figuration/
+-- css/
|   +-- figuration.css
|   +-- figuration.css.map
|   +-- figuration.min.css
|   +-- figuration.min.css.map
+-- js/
    +-- figuration.js
    +-- figuration.min.js
{% endhighlight %}

This is the most basic form of Figuration: precompiled files for quick drop-in usage in nearly any web project. We provide compiled CSS and JavaScript (`figuration.*`), as well as compiled and minified CSS and JavaScript (`figuration.min.*`). CSS <a href="https://developers.google.com/web/tools/chrome-devtools/javascript/source-maps">source maps</a> (`figuration.*.map`) are available for use with certain browsers' developer tools.

### Source Version

The Figuration source code download includes the precompiled CSS and JavaScript, along with source Sass, JavaScript, and documentation. More specifically, it includes the following and more:

{% highlight plaintext %}
figuration/
+-- dist/
|   +-- css/
|   +-- js/
+-- docs/
+-- js/
+-- scss/
{% comment %}
    +-- examples/
{% endcomment %}
{% endhighlight %}

The `scss/`, and `js/` folders are the source code for our CSS and JS (respectively). The `dist/` folder includes everything listed in the precompiled download section above. The `docs/` folder includes the source code for our documentation. Beyond that, any other included file provides support for packages, license information, and development.
