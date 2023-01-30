---
layout: doc
title: Reboot
description: Built upon Bootstrap's Reboot, a collection of element-specific CSS to provide a consistent visual baseline across browsers.
group: content
toc: true
---

## Approach

Part of Figuration's job is to provide an elegant, consistent, and simple baseline to build upon. We use Reboot, a collection of element-specific CSS changes in a single file, to kickstart that.

Borrowed from Bootstrap, Reboot heavily builds upon Normalize.css, providing many HTML elements with somewhat opinionated styles using only element selectors. Additional styling is done only with classes. For example, we reboot some `<table>` styles for a simpler baseline and later provide `.table`, `.table-bordered`, and more.

Here are our guidelines and reasons for choosing what to override in Reboot:

- Update some browser default values to use `rem`s instead of `em`s for scalable component spacing.
- Avoid `margin-top`. Vertical margins can collapse, yielding unexpected results. More importantly though, a single direction of `margin` is a simpler mental model.
- For easier scaling across device sizes, block elements should use `rem`s for `margin`s.
- Keep declarations of `font`-related properties to a minimum, using `inherit` whenever possible.

## Page Defaults

The `<html>` and `<body>` elements are updated to provide better page-wide defaults. More specifically:

- The `box-sizing` is globally set on every element—including `*::before` and `*::after`, to `border-box`. This ensures that the declared width of element is never exceeded due to padding or border.
- No base `font-size` is declared on the `<html>`, but a `16px` browser default is assumed. `font-size: 1rem` on the `<body>` for easy responsive type-scaling via media queries while respecting user preferences allowing for a more accessible approach. This browser default can be overridden by modifying the `$font-size-root` variable.
- The `<body>` also sets a global `font-family`, `line-height`, and `text-align`. This is inherited later by some form elements to prevent font inconsistencies.
- For safety, the `<body>` has a declared `background-color`, defaulting to `#fff`.

## Native Font Stack

Figuration uses a "native font stack", sometimes called a "system font stack", for optimum text rendering on every device and OS. These system fonts have been designed specifically with today's devices in mind, with improved rendering on screens, variable font support, and more. Read more about [native font stacks in this *Smashing Magazine* article](https://www.smashingmagazine.com/2015/11/using-system-ui-fonts-practical-guide/).

{% capture highlight %}
$font-family-sans-serif:
    // macOS and iOS
    system-ui,
    -apple-system,
    // Windows
    "Segoe UI",
    // Android
    Roboto,
    // older macOS and iOS
    "Helvetica Neue",
    // Linux
    "Noto Sans",
    "Liberation Sans",
    // Basic web fallback
    Arial,
    // Sans serif fallback
    sans-serif,
    // Emoji fonts
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
    "Noto Color Emoji"
{% endcapture %}
{% renderHighlight highlight, "sass" %}

Note that because the font stack includes emoji fonts, many common symbol/dingbat unicode characters will be rendered as multi-colored pictographs. Their appearance will vary, depending on the style used in the browser/platform's native emoji font, and they won't be affected by any CSS `color` styles.

This `font-family` is applied to the `<body>` and automatically inherited globally throughout Figuration. To switch the global `font-family`, update `$font-family-base` and recompile Figuration.

## Headings and Paragraphs

All heading elements—e.g., `<h1>`—and `<p>` are reset to have their `margin-top` removed. Headings have `margin-bottom: .5rem` added and paragraphs `margin-bottom: 1rem` for easy spacing.

<div class="cf-example cf-example-bottom">
<h1>h1 heading</h1>
<p>Curabitur blandit tempus porttitor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>

<h2>h2 heading</h2>
<p>Curabitur blandit tempus porttitor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>

<h3>h3 heading</h3>
<p>Curabitur blandit tempus porttitor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>

<h4>h4 heading</h4>
<p>Curabitur blandit tempus porttitor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>

<h5>h5 heading</h5>
<p>Curabitur blandit tempus porttitor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>

<h6>h6 heading</h6>
<p>Curabitur blandit tempus porttitor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
</div>

## Lists

All lists—`<ul>`, `<ol>`, and `<dl>`—have their `margin-top` removed and a `margin-bottom: 1rem`. Nested lists have no `margin-bottom`.

<div class="cf-example cf-example-bottom">
<ul>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing elit</li>
  <li>Integer molestie lorem at massa</li>
  <li>Facilisis in pretium nisl aliquet</li>
  <li>Nulla volutpat aliquam velit
    <ul>
      <li>Phasellus iaculis neque</li>
      <li>Purus sodales ultricies</li>
      <li>Vestibulum laoreet porttitor sem</li>
      <li>Ac tristique libero volutpat at</li>
    </ul>
  </li>
  <li>Faucibus porta lacus fringilla vel</li>
  <li>Aenean sit amet erat nunc</li>
  <li>Eget porttitor lorem</li>
</ul>

<ol>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing elit</li>
  <li>Integer molestie lorem at massa</li>
  <li>bFacilisis in pretium nisl aliquet</li>
  <li>Nulla volutpat aliquam velit</li>
  <li>Faucibus porta lacus fringilla vel</li>
  <li>Aenean sit amet erat nunc</li>
  <li>Eget porttitor lorem</li>
</ol>
</div>

For simpler styling, clear hierarchy, and better spacing, description lists have updated `margin`s. `<dd>`s reset `margin-left` to `0` and add `margin-bottom: .5rem`. `<dt>`s are **bolded**.

<div class="cf-example cf-example-bottom">
<dl>
  <dt>Description lists</dt>
  <dd>A description list is perfect for defining terms.</dd>
  <dt>Euismod</dt>
  <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem.</dd>
  <dd>Donec id elit non mi porta gravida at eget metus.</dd>
  <dt>Malesuada porta</dt>
  <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
</dl>
</div>

## Preformatted Text

The `<pre>` element is reset to remove its `margin-top` and use `rem` units for its `margin-bottom`.

<div class="cf-example cf-example-bottom">
<pre>
.example-element {
  margin-bottom: 1rem;
}
</pre>
</div>

## Tables

Tables are slightly adjusted to style `<caption>`s, collapse borders, and ensure consistent `text-align` throughout. Additional changes for borders, padding, and more come with [the `.table` class]({{ site.path }}/{{ version.docs }}/content/tables/).

<div class="cf-example cf-example-bottom">
  <table>
    <caption>
      This is an example table, and this is its caption to describe the contents.
    </caption>
    <thead>
      <tr>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
    </tbody>
  </table>
</div>

## Forms

Various form elements have been rebooted for simpler base styles. Here are some of the most notable changes:

- `<fieldset>`s have no borders, padding, or margin so they can be easily used as wrappers for individual inputs or groups of inputs.
- `<legend>`s, like fieldsets, have also been restyled to be displayed as a heading of sorts.
- `<label>`s are set to `display: inline-block` to allow `margin` to be applied.
- `<input>`s, `<select>`s, `<textarea>`s, and `<button>`s are mostly addressed by Normalize, but Reboot removes their `margin` and sets `line-height: inherit`, too.
- `<textarea>`s are modified to only be resizable vertically as horizontal resizing often "breaks" page layout.

These changes, and more, are demonstrated below.

<form class="cf-example">
  <fieldset>
    <legend>Example legend</legend>
    <p>
      <label for="input">Example input</label>
      <input type="text" id="input" placeholder="Example input">
    </p>
    <p>
      <label for="email">Example email</label>
      <input type="email" id="email" placeholder="lorem@ipsum.com">
    </p>
    <p>
      <label for="tel">Example telephone</label>
      <input type="tel" id="tel">
    </p>
    <p>
      <label for="url">Example url</label>
      <input type="url" id="url">
    </p>
    <p>
      <label for="number">Example number</label>
      <input type="number" id="number">
    </p>
    <p>
      <label for="search">Example search</label>
      <input type="search" id="search">
    </p>
    <p>
      <label for="range">Example range</label>
      <input type="range" id="range" min="0" max="10">
    </p>
    <p>
      <label for="file">Example file input</label>
      <input type="file" id="file">
    </p>
    <p>
      <label for="select">Example select</label>
      <select id="select">
        <option value="">Choose...</option>
        <optgroup label="Option group 1">
          <option value="">Option 1</option>
          <option value="">Option 2</option>
          <option value="">Option 3</option>
        </optgroup>
        <optgroup label="Option group 2">
          <option value="">Option 4</option>
          <option value="">Option 5</option>
          <option value="">Option 6</option>
        </optgroup>
      </select>
    </p>
    <p>
      <label>
        <input type="checkbox" value="">
        Check this checkbox
      </label>
    </p>
    <p>
      <label>
        <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>
        Option one is this and that
      </label>
      <label>
        <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
        Option two is something else that's also super long to demonstrate the wrapping of these fancy form controls.
      </label>
      <label>
        <input type="radio" name="optionsRadios" id="optionsRadios3" value="option3" disabled>
        Option three is disabled
      </label>
    </p>
    <p>
      <label for="textarea">Example textarea</label>
      <textarea id="textarea" rows="3"></textarea>
    </p>
    <p>
      <label for="date">Example date</label>
      <input type="date" id="date">
    </p>
    <p>
      <label for="time">Example time</label>
      <input type="time" id="time">
    </p>
    <p>
      <label for="password">Example password</label>
      <input type="password" id="password">
    </p>
    <p>
      <label for="datetime-local">Example datetime-local</label>
      <input type="datetime-local" id="datetime-local">
    </p>
    <p>
      <label for="week">Example week</label>
      <input type="week" id="week">
    </p>
    <p>
      <label for="month">Example month</label>
      <input type="month" id="month">
    </p>
    <p>
      <label for="color">Example color</label>
      <input type="color" id="color">
    </p>
    <p>
      <label for="output">Example output</label>
      <output name="result" id="output">100</output>
    </p>
    <p>
      <button type="submit">Button submit</button>
      <input type="submit" value="Input submit button">
      <input type="reset" value="Input reset button">
      <input type="button" value="Input button">
    </p>
    <p>
      <button type="submit" disabled>Button submit</button>
      <input type="submit" value="Input submit button" disabled>
      <input type="reset" value="Input reset button" disabled>
      <input type="button" value="Input button" disabled>
    </p>
  </fieldset>
</form>

{% capture callout %}
Date, Time, and Color Input Support
{.h5}

Be aware that not all browsers support the [date and time](https://caniuse.com/input-datetime) or [color](https://caniuse.com/input-color) input types.
{% endcapture %}
{% renderCallout, callout, "warning" %}

## Pointers On Buttons

Reboot includes an enhancement for `role="button"` to change the default cursor to `pointer`. Add this attribute to elements to help indicate elements are interactive. This role isn't necessary for `<button>` elements, which get their own `cursor` change.

{% capture example %}
<span role="button" tabindex="0">Non-button element button</span>
{% endcapture %}
{% renderExample example %}

## Misc Elements

### Address

The `<address>` element is updated to reset the browser default `font-style` from `italic` to `normal`. `line-height` is also now inherited, and `margin-bottom: 1rem` has been added. `<address>`s are for presenting contact information for the nearest ancestor (or an entire body of work). Preserve formatting by ending lines with `<br>`.

<div class="cf-example cf-example-bottom">
  <address>
    <strong>Company Name, Inc.</strong><br>
    123 Main St, Suite 45<br>
    Somecity, MA 12345<br>
    <abbr title="Phone">P:</abbr> (123) 456-7890
  </address>

  <address>
    <strong>Full Name</strong><br>
    <a href="mailto:first.last@example.com">first.last@example.com</a>
  </address>
</div>

### Blockquote

The default `margin` on blockquotes is `1em 40px`, so we reset that to `0 0 1rem` for something more consistent with other elements.

<div class="cf-example cf-example-bottom">
  <blockquote class="blockquote">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  </blockquote>
  <p>Someone famous in <cite title="Source Title">Source Title</cite></p>
</div>

### Inline Elements

The `<abbr>` element receives basic styling to make it stand out amongst paragraph text.

<div class="cf-example cf-example-bottom">
  Nulla <abbr title="attribute">attr</abbr> vitae elit libero, a pharetra augue.
</div>

### Inline Frame

`<iframe>`s have are set to `border: 0;` so there is no need for a `frameborder="0"` attribute.

### Summary

The default `cursor` on summary is `text`, so we reset that to `pointer` to convey that the element can be interacted with by clicking on it.

<div class="cf-example cf-example-bottom">
  <details>
    <summary>Some details</summary>
    <p>More info about the details.</p>
  </details>

  <details open>
    <summary>Even more details</summary>
    <p>Here are even more details about the details.</p>
  </details>
</div>

## HTML5 `[hidden]` Attribute

HTML5 adds <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/hidden">a new global attribute named <code>[hidden]</code></a>, which is styled as `display: none` by default. Borrowing an idea from [PureCSS](https://purecss.io/), we improve upon this default by making `[hidden] { display: none !important; }` to help prevent its `display` from getting accidentally overridden. While `[hidden]` isn't natively supported by IE10, the explicit declaration in our CSS gets around that problem.

{% capture highlight %}
<input type="text" hidden>
{% endcapture %}
{% renderHighlight highlight, "html" %}

{% capture callout %}
jQuery Incompatibility
{.h5}

`[hidden]` is not compatible with jQuery's `$(...).hide()` and `$(...).show()` methods. Therefore, we don't currently especially endorse `[hidden]` over other techniques for managing the `display` of elements.
{% endcapture %}
{% renderCallout, callout, "warning" %}

To merely toggle the visibility of an element, meaning its `display` is not modified and the element can still affect the flow of the document, use [the `.invisible` class]({{ site.path }}/{{ version.docs }}/utilities/visibility/) instead.

## SASS Reference

### Variables

The available [Customization options]({{ site.path }}/{{ version.docs }}/get-started/options/), or Sass variables, that can be customized for the reboot CSS styles.

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
        <td><code>$font-family-base</code></td>
        <td>string</td>
        <td><code>$font-family-sans-serif</code></td>
        <td>
          Base font family stack, used for the body and many component resets.
        </td>
      </tr>
      <tr>
        <td><code>$font-size-root</code></td>
        <td>string</td>
        <td><code>null</code></td>
        <td>
          Root font size. Impacts <code>rem</code> value.
        </td>
      </tr>
      <tr>
        <td><code>$font-size-base</code></td>
        <td>string</td>
        <td><code>1rem</code></td>
        <td>
          Base font size.
        </td>
      </tr>
      <tr>
        <td><code>$font-weight-base</code></td>
        <td>string</td>
        <td><code>$font-weight-normal</code></td>
        <td>
          Base font weight.
        </td>
      </tr>
      <tr>
        <td><code>$line-height-base</code></td>
        <td>float</td>
        <td><code>1.5</code></td>
        <td>
          Base line height.
        </td>
      </tr>
      <tr>
        <td><code>$body-bg</code></td>
        <td>string</td>
        <td><code>$white</code></td>
        <td>
          Base background color for body.
        </td>
      </tr>
      <tr>
        <td><code>$body-color</code></td>
        <td>string</td>
        <td><code>$uibase-900</code></td>
        <td>
          Base text color for body.
        </td>
      </tr>
      <tr>
        <td><code>$body-text-align</code></td>
        <td>string</td>
        <td><code>null</code></td>
        <td>
          Base text alignment for body.
        </td>
      </tr>
      <tr>
        <td><code>$link-color</code></td>
        <td>string</td>
        <td><code>$primary</code></td>
        <td>
          Text color for links.
        </td>
      </tr>
      <tr>
        <td><code>$link-decoration</code></td>
        <td>string</td>
        <td><code>underline</code></td>
        <td>
          Text decoration for links.
        </td>
      </tr>
      <tr>
        <td><code>$link-hover-color</code></td>
        <td>string</td>
        <td><code>palette($primary, 700)</code></td>
        <td>
          Color for hovered or focused links.
        </td>
      </tr>
      <tr>
        <td><code>$link-hover-decoration</code></td>
        <td>string</td>
        <td><code>null</code></td>
        <td>
          Text decoration for hovered or focused links.
        </td>
      </tr>
      <tr>
        <td><code>$font-size-h1</code></td>
        <td>string</td>
        <td><code>($font-size-base * 2.5)</code></td>
        <td>
          <code>&lt;h1&gt;</code> font size.
        </td>
      </tr>
      <tr>
        <td><code>$font-size-h2</code></td>
        <td>string</td>
        <td><code>($font-size-base * 2)</code></td>
        <td>
          <code>&lt;h2&gt;</code> font size.
        </td>
      </tr>
      <tr>
        <td><code>$font-size-h3</code></td>
        <td>string</td>
        <td><code>($font-size-base * 1.75)</code></td>
        <td>
          <code>&lt;h3&gt;</code> font size.
        </td>
      </tr>
      <tr>
        <td><code>$font-size-h4</code></td>
        <td>string</td>
        <td><code>($font-size-base * 1.5)</code></td>
        <td>
          <code>&lt;h4&gt;</code> font size.
        </td>
      </tr>
      <tr>
        <td><code>$font-size-h5</code></td>
        <td>string</td>
        <td><code>($font-size-base * 1.25)</code></td>
        <td>
          <code>&lt;h5&gt;</code> font size.
        </td>
      </tr>
      <tr>
        <td><code>$font-size-h6</code></td>
        <td>string</td>
        <td><code>($font-size-base * 1)</code></td>
        <td>
          <code>&lt;h6&gt;</code> font size.
        </td>
      </tr>
      <tr>
        <td><code>$headings-margin-bottom</code></td>
        <td>string</td>
        <td><code>($spacer * .5)</code></td>
        <td>
          Bottom margin for <code>&lt;hN&gt;</code> headings and heading classes.
        </td>
      </tr>
      <tr>
        <td><code>$headings-font-family</code></td>
        <td>string</td>
        <td><code>null</code></td>
        <td>
          Headings font family.
        </td>
      </tr>
      <tr>
        <td><code>$headings-font-style</code></td>
        <td>string</td>
        <td><code>null</code></td>
        <td>
          Headings font style.
        </td>
      </tr>
      <tr>
        <td><code>$headings-font-weight</code></td>
        <td>string/integer</td>
        <td><code>600</code></td>
        <td>
          Headings font weight.
        </td>
      </tr>
      <tr>
        <td><code>$headings-line-height</code></td>
        <td>float</td>
        <td><code>1.25</code></td>
        <td>
          Headings line height.
        </td>
      </tr>
      <tr>
        <td><code>$headings-color</code></td>
        <td>string</td>
        <td><code>null</code></td>
        <td>
          Headings text color.
        </td>
      </tr>
      <tr>
        <td><code>$paragraph-spacer-y</code></td>
        <td>string</td>
        <td><code>1rem</code></td>
        <td>
          Bottom padding for paragraphs.
        </td>
      </tr>
      <tr>
        <td><code>$dt-font-weight</code></td>
        <td>string</td>
        <td><code>$font-weight-bold</code></td>
        <td>
          Font weight for definition terms.
        </td>
      </tr>
      <tr>
        <td><code>$hr-margin-y</code></td>
        <td>string</td>
        <td><code>1rem</code></td>
        <td>
          Horizontal rule vertical spacing.
        </td>
      </tr>
      <tr>
        <td><code>$hr-color</code></td>
        <td>string</td>
        <td><code>inherit</code></td>
        <td>
          Horizontal rule text color.
        </td>
      </tr>
      <tr>
        <td><code>$hr-border-width</code></td>
        <td>string</td>
        <td><code>$border-width</code></td>
        <td>
          Horizontal rule border width.
        </td>
      </tr>
      <tr>
        <td><code>$hr-border-color</code></td>
        <td>string</td>
        <td><code>null</code></td>
        <td>
          Horizontal rule border color.
        </td>
      </tr>
      <tr>
        <td><code>$hr-opacity</code></td>
        <td>string</td>
        <td><code>.25</code></td>
        <td>
          Horizontal rule opacity.
        </td>
      </tr>
      <tr>
        <td><code>$table-cell-padding</code></td>
        <td>string</td>
        <td><code>.75rem</code></td>
        <td>
          Padding for table cells.
        </td>
      </tr>
      <tr>
        <td><code>$table-th-font-weight</code></td>
        <td>string</td>
        <td><code>null</code></td>
        <td>
        Font weight for <code>th</code> cells.
        </td>
      </tr>
      <tr>
        <td><code>$small-font-size</code></td>
        <td>string</td>
        <td><code>.875em</code></td>
        <td>
          Small font size.
        </td>
      </tr>
      <tr>
        <td><code>$sub-sup-font-size</code></td>
        <td>string</td>
        <td><code>.875em</code></td>
        <td>
          Font size for subscript and superscript text.
        </td>
      </tr>
      <tr>
        <td><code>$mark-padding</code></td>
        <td>string</td>
        <td><code>.125em .25em</code></td>
        <td>
          Mark element padding.
        </td>
      </tr>
      <tr>
        <td><code>$mark-bg</code></td>
        <td>string</td>
        <td><code>#ff0</code></td>
        <td>
          Mark element background color.
        </td>
      </tr>
      <tr>
        <td><code>$label-margin-bottom</code></td>
        <td>string</td>
        <td><code>.5rem</code></td>
        <td>
          Bottom margin for form labels.
        </td>
      </tr>
      <tr>
        <td><code>$legend-margin-bottom</code></td>
        <td>string</td>
        <td><code>.5rem</code></td>
        <td>
          Bottom margin for form legends.
        </td>
      </tr>
      <tr>
        <td><code>$legend-font-size</code></td>
        <td>string</td>
        <td><code>1.5rem</code></td>
        <td>
          Font size for form legends.
        </td>
      </tr>
      <tr>
        <td><code>$legend-font-weight</code></td>
        <td>string</td>
        <td><code>null</code></td>
        <td>
          Font weight for form legends.
        </td>
      </tr>
    </tbody>
  </table>
</div>

### Mixins

No mixins available.
