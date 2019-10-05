---
layout: doc
title: Download
description: Figuration is available for download in several ways. Choose from multiple options to get what you need.
group: get-started
---

<div class="h3 cf-toc-header">Page Contents</div>

${toc}

## Quick Download

<div data-cfw="equalize" data-cfw-equalize-target=".card-body">
  <div class="row mt-2" data-cfw="equalize" data-cfw-equalize-target=".card-footer">
    <div class="col-sm-6">
      <div class="card card-download">
        <h3 class="h4 card-header text-light" style="background-color: #246;">Compiled</h3>
        <div class="card-body">
            Download just the compiled and minified CSS and JavaScript. Doesn't include any documentation or original source files.
        </div>
        <div class="card-footer text-sm-center">
            <a href="{{ site.download.dist }}" class="btn btn-info" onclick="ga('send', 'event', 'Get Started', 'Download', 'Download compiled {{ site.version.docs }}');">Download Figuration</a>
        </div>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="card card-download">
        <h3 class="h4 card-header text-light" style="background-color: #246;">Source Files</h3>
        <div class="card-body">
            Download everything: source Sass, JavaScript, and documentation files. <strong>Requires a Sass compiler, <a href="https://github.com/postcss/autoprefixer">Autoprefixer</a>, <a href="https://github.com/luisrudge/postcss-flexbugs-fixes">postcss-flexbugs-fixes</a>, <a href="https://github.com/postcss/postcss-calc">postcss-calc</a>, and <a href="{{ site.path }}/{{ version.docs }}/get-started/build-tools/#tooling-setup">some setup</a>.</strong>
        </div>
        <div class="card-footer text-sm-center">
            <a href="{{ site.download.source }}" class="btn" onclick="ga('send', 'event', 'Get Started', 'Download', 'Download source {{ site.version.docs }}');">Download source</a>
        </div>
      </div>
    </div>
  </div>
</div>

## Package Managers

Pull in Figuration's **source files** into nearly any project with some of the most popular package managers. No matter the package manager, Figuration will **require a Sass compiler along with [Autoprefixer](https://github.com/postcss/autoprefixer), [postcss-flexbugs-fixes](https://github.com/luisrudge/postcss-flexbugs-fixes), and [postcss-calc](https://github.com/postcss/postcss-calc)** for a setup that matches our official compiled versions.

### npm

Install Figuration in your Node.js powered apps with [the npm package](https://www.npmjs.com/package/figuration):

{% capture example %}
npm install figuration@{{ site.version.docs }}
{% endcapture %}
{% renderHighlight example, "bash" %}

### Yarn

{% capture example %}
yarn add figuration@{{ site.version.docs }}
{% endcapture %}
{% renderHighlight example, "bash" %}

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

{% capture example %}
figuration/
+-- dist/
|   +-- css/
|   +-- js/
+-- grunt/
+-- js/
+-- scss/
{% endcapture %}
{% renderHighlight example, "text" %}

Basically just the dist, along with the source `js` and `scss` files, and just enough to build the dist. If you need the docs and all the tests for local dev, then download the source version, or clone the [Figuration repository from GitHub]({{ site.repo }}).

## What Is Included

The [quick download versions](#quick-download) listed above, contain the following directories and files, logically grouping common resources and providing both compiled and minified variations.

### Compiled Version

Once downloaded, unzip the compressed folder to see the structure of (the compiled) Figuration. You'll see something like this:

{% capture example %}
figuration/
+-- dist/
    +-- css/
    |   +-- figuration.css
    |   +-- figuration.min.css
    |   +-- figuration-rtl.css
    |   +-- figuration-rtl.min.css
    +-- js/
        +-- figuration.js
        +-- figuration.min.js
{% endcapture %}
{% renderHighlight example, "text" %}

This is the most basic form of Figuration: precompiled files for quick drop-in usage in nearly any web project. We provide compiled CSS and JavaScript (`figuration.*`), as well as compiled and minified CSS and JavaScript (`figuration.min.*`). CSS <a href="https://developers.google.com/web/tools/chrome-devtools/javascript/source-maps">source maps</a> (`figuration.*.map`) are available for use with certain browsers' developer tools.

### Source Version

The Figuration source code download includes the precompiled CSS and JavaScript, along with source Sass, JavaScript, and documentation. More specifically, it includes the following and more:

{% capture example %}
figuration/
+-- dist/
|   +-- css/
|   +-- js/
+-- docs/
+-- grunt/
+-- js/
+-- scss/
+-- test/
{% endcapture %}
{% renderHighlight example, "text" %}

The `scss/`, and `js/` folders are the source code for our CSS and JavaScript (respectively). The `dist/` folder includes everything listed in the precompiled download section above. The `docs/` folder includes the source code for our documentation. Beyond that, any other included file provides support for packages, license information, and development.
