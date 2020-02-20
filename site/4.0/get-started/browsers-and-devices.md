---
layout: doc
title: Browsers & Devices
description: Figuration supports a wide variety of modern browsers and devices, and some older ones. See which exact ones below, as well as detailed information on known quirks and bugs.
group: get-started
---

<div class="h3 cf-toc-header">Page Contents</div>

${toc}

## Supported Browsers

Figuration supports the **latest, stable releases** of all major browsers and platforms. On Windows, **we support Internet Explorer 11 / Microsoft Edge**.

Alternative browsers which use the latest version of WebKit, Blink, or Gecko, whether directly or via the platform's web view API, are not explicitly supported. However, Figuration should (in most cases) display and function correctly in these browsers as well. More specific support information is provided below.

We use [Autoprefixer](https://github.com/postcss/autoprefixer) to handle intended browser support via CSS prefixes, which uses [Browserslist](https://github.com/browserslist/browserslist) to manage these browser versions.

You can find our supported range of browsers and their versions [in our `.browserslistrc`]({{ site.repo }}/blob/v4-dev/.browserslistrc):

{% capture highlight %}
# https://github.com/browserslist/browserslist#readme

>= 1%
last 1 major version
not dead
Chrome >= 57
Firefox >= 52
Edge >= 15
Explorer >= 11
iOS >= 10
Safari >= 10
Android >= 6
Opera >= 44
{% endcapture %}
{% renderHighlight highlight, "text" %}

### Mobile Devices

Generally speaking, Figuration supports the latest versions of each major platform's default browsers. Note that proxy browsers (such as Opera Mini, Opera Mobile's Turbo mode, UC Browser Mini, Amazon Silk) are not supported.

<div class="table-scroll">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <td></td>
        <th>Chrome</th>
        <th>Firefox</th>
        <th>Safari</th>
        <th>Android Browser &amp; WebView</th>
        <th>Microsoft Edge</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Android</th>
        <td class="text-success">Supported</td>
        <td class="text-success">Supported</td>
        <td class="text-muted">N/A</td>
        <td class="text-success">v6.0+</td>
        <td class="text-success">Supported</td>
      </tr>
      <tr>
        <th scope="row">iOS</th>
        <td class="text-success">Supported</td>
        <td class="text-success">Supported</td>
        <td class="text-success">Supported</td>
        <td class="text-muted">N/A</td>
        <td class="text-success">Supported</td>
      </tr>
      <tr>
        <th scope="row">Windows 10 Mobile</th>
        <td class="text-muted">N/A</td>
        <td class="text-muted">N/A</td>
        <td class="text-muted">N/A</td>
        <td class="text-muted">N/A</td>
        <td class="text-success">Supported</td>
      </tr>
    </tbody>
  </table>
</div>

### Desktop Browsers

Similarly, the latest versions of most desktop browsers are supported.

<div class="table-scroll">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <td></td>
        <th>Chrome</th>
        <th>Firefox</th>
        <th>Internet Explorer</th>
        <th>Microsoft Edge</th>
        <th>Opera</th>
        <th>Safari</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Mac</th>
        <td class="text-success">Supported</td>
        <td class="text-success">Supported</td>
        <td class="text-muted">N/A</td>
        <td class="text-success">Supported</td>
        <td class="text-success">Supported</td>
        <td class="text-success">Supported</td>
      </tr>
      <tr>
        <th scope="row">Windows</th>
        <td class="text-success">Supported</td>
        <td class="text-success">Supported</td>
        <td class="text-success">Supported, IE11+</td>
        <td class="text-success">Supported</td>
        <td class="text-success">Supported</td>
        <td class="text-danger">Not supported</td>
      </tr>
    </tbody>
  </table>
</div>

For Firefox, in addition to the latest normal stable release, we also support the latest [Extended Support Release (ESR)](https://www.mozilla.org/en-US/firefox/organizations/#faq) version of Firefox.

Unofficially, Figuration should look and behave well enough in Chromium and Chrome for Linux, and Firefox for Linux, though they are not officially supported.

## Internet Explorer

Internet Explorer 11+ is also supported, IE 10 and down are not. Please be aware that some CSS3 properties and HTML5 elements are not fully supported in IE10, or require prefixed properties for full functionality. Visit [Can I use…](https://caniuse.com/) for details on browser support of CSS3 and HTML5 features.

## MutationObserver

Some of Figuration's [JavaScript Widgets]({{ site.path }}/{{ version.docs }}/widgets/overview/) have some support for the use of [MutationObserver](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) to watch for and respond to changes in the DOM.

## Modals and Dropdowns on Mobile

### Overflow and Scrolling

Support for `overflow: hidden;` on the `<body>` element is quite limited in iOS and Android. To that end, when you scroll past the top or bottom of a modal in either of those devices' browsers, the `<body>` content will begin to scroll. See [Chrome bug #175502](https://bugs.chromium.org/p/chromium/issues/detail?id=175502) (fixed in Chrome v40) and [WebKit bug #153852](https://bugs.webkit.org/show_bug.cgi?id=153852).

### iOS Text Fields and Scrolling

As of iOS 9.2, while a modal is open, if the initial touch of a scroll gesture is within the boundary of a textual `<input>` or a `<textarea>`, the `<body>` content underneath the modal will be scrolled instead of the modal itself. See [WebKit bug #153856](https://bugs.webkit.org/show_bug.cgi?id=153856).

## Browser Zooming

Page zooming inevitably presents rendering artifacts in some components, both in Figuration and the rest of the web. Depending on the issue, we may be able to fix it (search first and then open an issue if need be). However, we tend to ignore these as they often have no direct solution other than hacky workarounds.

## Printing

Even in some modern browsers, printing can be quirky.

As of Safari v8.0, use of the fixed-width `.container` class can cause Safari to use an unusually small font size when printing. See [Bootstrap issue #14868](https://github.com/twbs/bootstrap/issues/14868) and [WebKit bug #138192](https://bugs.webkit.org/show_bug.cgi?id=138192) for more details. One potential workaround is the following CSS:

{% capture highlight %}
@media print {
  .container {
    width: auto;
  }
}
{% endcapture %}
{% renderHighlight highlight, "css" %}

## Validators

In order to provide the best possible experience to old and buggy browsers, Figuration uses [CSS browser hacks](http://browserhacks.com/) in several places to target special CSS to certain browser versions in order to work around bugs in the browsers themselves. These hacks understandably cause CSS validators to complain that they are invalid. In a couple places, we also use bleeding-edge CSS features that aren't yet fully standardized, but these are used purely for progressive enhancement.

These validation warnings don't matter in practice since the non-hacky portion of our CSS does fully validate and the hacky portions don't interfere with the proper functioning of the non-hacky portion, hence why we deliberately ignore these particular warnings.

{% comment %}
Our HTML docs likewise have some trivial and inconsequential HTML validation warnings due to our inclusion of a workaround for [a certain Firefox bug](https://bugzilla.mozilla.org/show_bug.cgi?id=654072).
{% endcomment %}
