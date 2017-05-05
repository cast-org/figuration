---
layout: docs
title: Browsers & Devices
group: get-started
---

Figuration supports a wide variety of modern browsers and devices, and some older ones. See which exact ones below, as well as detailed information on known quirks and bugs.

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Supported Browsers

Figuration supports the **latest, stable releases** of all major browsers and platforms. On Windows, **we support Internet Explorer 10-11 / Microsoft Edge**.

Alternative browsers which use the latest version of WebKit, Blink, or Gecko, whether directly or via the platform's web view API, are not explicitly supported. However, Figuration should (in most cases) display and function correctly in these browsers as well. More specific support information is provided below.

### Mobile Devices

Generally speaking, Figuration supports the latest versions of each major platform's default browsers. Note that proxy browsers (such as Opera Mini, Opera Mobile's Turbo mode, UC Browser Mini, Amazon Silk) are not supported.

<table class="table table-scroll table-bordered table-striped">
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
      <td class="text-success">Android v5.0+ supported</td>
      <td class="text-muted">N/A</td>
    </tr>
    <tr>
      <th scope="row">iOS</th>
      <td class="text-success">Supported</td>
      <td class="text-success">Supported</td>
      <td class="text-success">Supported</td>
      <td class="text-muted">N/A</td>
      <td class="text-muted">N/A</td>
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

### Desktop Browsers

Similarly, the latest versions of most desktop browsers are supported.

<table class="table table-scroll table-bordered table-striped">
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
      <td class="text-muted">N/A</td>
      <td class="text-success">Supported</td>
      <td class="text-success">Supported</td>
    </tr>
    <tr>
      <th scope="row">Windows</th>
      <td class="text-success">Supported</td>
      <td class="text-success">Supported</td>
      <td class="text-success">Supported IE10+</td>
      <td class="text-success">Supported</td>
      <td class="text-success">Supported</td>
      <td class="text-danger">Not supported</td>
    </tr>
  </tbody>
</table>

For Firefox, in addition to the latest normal stable release, we also support the latest [Extended Support Release (ESR)](https://www.mozilla.org/en-US/firefox/organizations/faq/) version of Firefox.

Unofficially, Figuration should look and behave well enough in Chromium and Chrome for Linux, and Firefox for Linux, though they are not officially supported.

## Internet Explorer

Internet Explorer 10+ are also supported, IE9 and down is not. Please be aware that some CSS3 properties and HTML5 elements are not fully supported in IE10, or require prefixed properties for full functionality. Visit [Can I use…](http://caniuse.com/) for details on browser support of CSS3 and HTML5 features.

### MutationObserver

Some of Figuration's [JavaScript Widgets]({{ site.baseurl }}/widgets/overview/) have some support for the use of [MutationObserver](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) to watch for and respond to changes in the DOM.  Internet Explorer 10 does not support MutationObserver, but this can be mitigated with the use of a Polyfill.  Check out the [Quick Start page]({{ site.baseurl }}/get-started/quick-start/#mutationobserver) for more details.

## Internet Explorer 10 in Windows Phone 8

Internet Explorer 10 in Windows Phone 8 versions older than [Update 3 (a.k.a. GDR3)](http://blogs.windows.com/windows_phone/b/wpdev/archive/2013/10/14/introducing-windows-phone-preview-for-developers.aspx) doesn't differentiate **device width** from **viewport width** in `@-ms-viewport` at-rules, and thus doesn't properly apply the media queries in Figuration's CSS. To address this, you'll need to **include the following JavaScript, provided by Bootstrap, to work around the bug**.

{% highlight js %}
// Copyright 2014-2015 The Bootstrap Authors
// Copyright 2014-2015 Twitter, Inc.
// Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
  var msViewportStyle = document.createElement('style')
  msViewportStyle.appendChild(
    document.createTextNode(
      '@-ms-viewport{width:auto!important}'
    )
  )
  document.head.appendChild(msViewportStyle)
}
{% endhighlight %}

For more information and usage guidelines, read [Windows Phone 8 and Device-Width](http://timkadlec.com/2013/01/windows-phone-8-and-device-width/).

As a heads up, we include this in all of Figuration's documentation and examples as a demonstration.

## Modals and Dropdowns on Mobile

### Overflow and Scrolling

Support for `overflow: hidden;` on the `<body>` element is quite limited in iOS and Android. To that end, when you scroll past the top or bottom of a modal in either of those devices' browsers, the `<body>` content will begin to scroll. See [Chrome bug #175502](https://bugs.chromium.org/p/chromium/issues/detail?id=175502) (fixed in Chrome v40) and [WebKit bug #153852](https://bugs.webkit.org/show_bug.cgi?id=153852).

### iOS Text Fields and Scrolling

As of iOS 9.2, while a modal is open, if the initial touch of a scroll gesture is within the boundary of a textual `<input>` or a `<textarea>`, the `<body>` content underneath the modal will be scrolled instead of the modal itself. See [WebKit bug #153856](https://bugs.webkit.org/show_bug.cgi?id=153856).

## Browser Zooming

Page zooming inevitably presents rendering artifacts in some components, both in Figuration and the rest of the web. Depending on the issue, we may be able to fix it (search first and then open an issue if need be). However, we tend to ignore these as they often have no direct solution other than hacky workarounds.

## Sticky `:hover`/`:focus` on Mobile
Even though real hovering isn't possible on most touchscreens, most mobile browsers emulate hovering support and make `:hover` "sticky". In other words, `:hover` styles start applying after tapping an element and only stop applying after the user taps some other element. On mobile-first sites, this behavior is normally undesirable.

Bootstrap has a workaround for this. Use their [mq4-hover-shim](https://github.com/twbs/mq4-hover-shim) to disable `:hover` styles in browsers that emulate hovering, thus preventing sticky `:hover` styles. There are some caveats to this workaround; see the shim's documentation for details.

## Printing

Even in some modern browsers, printing can be quirky.

As of Safari v8.0, use of the fixed-width `.container` class can cause Safari to use an unusually small font size when printing. See [Bootstrap issue #14868](https://github.com/twbs/bootstrap/issues/14868) and [WebKit bug #138192](https://bugs.webkit.org/show_bug.cgi?id=138192) for more details. One potential workaround is the following CSS:

{% highlight css %}
@media print {
  .container {
    width: auto;
  }
}
{% endhighlight %}

## Android Stock Browser

Out of the box, Android 4.1 (and even some newer releases apparently) ship with the Browser app as the default web browser of choice (as opposed to Chrome). Unfortunately, the Browser app has lots of bugs and inconsistencies with CSS in general.

#### Select Menu

On `<select>` elements, the Android stock browser will not display the side controls if there is a `border-radius` and/or `border` applied. (See [this StackOverflow question](https://stackoverflow.com/questions/14744437/html-select-box-not-showing-drop-down-arrow-on-android-version-4-0-when-set-with) for details.) Use the snippet of code below to remove the offending CSS and render the `<select>` as an unstyled element on the Android stock browser. The user agent sniffing avoids interference with Chrome, Safari, and Mozilla browsers.

{% highlight html %}
<script>
$(function () {
  var nua = navigator.userAgent
  var isAndroid = (nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1)
  if (isAndroid) {
    $('select.form-control').removeClass('form-control').css('width', '100%')
  }
})
</script>
{% endhighlight %}

Want to see an example? [Check out this JS Bin demo.](http://jsbin.com/OyaqoDO/2)

## Validators

In order to provide the best possible experience to old and buggy browsers, Figuration uses [CSS browser hacks](http://browserhacks.com) in several places to target special CSS to certain browser versions in order to work around bugs in the browsers themselves. These hacks understandably cause CSS validators to complain that they are invalid. In a couple places, we also use bleeding-edge CSS features that aren't yet fully standardized, but these are used purely for progressive enhancement.

These validation warnings don't matter in practice since the non-hacky portion of our CSS does fully validate and the hacky portions don't interfere with the proper functioning of the non-hacky portion, hence why we deliberately ignore these particular warnings.

{% comment %}
Our HTML docs likewise have some trivial and inconsequential HTML validation warnings due to our inclusion of a workaround for [a certain Firefox bug](https://bugzilla.mozilla.org/show_bug.cgi?id=654072).
{% endcomment %}
