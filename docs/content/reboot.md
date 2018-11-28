---
layout: docs
title: Reboot
group: content
redirect_from: "/content/"
---

Part of Figuration's job is to provide an elegant, consistent, and simple baseline to build upon. We use Reboot, a collection of element-specific CSS changes in a single file, to kickstart that.

Borrowed from Bootstrap, Reboot heavily builds upon Normalize.css, providing many HTML elements with somewhat opinionated styles using only element selectors. Additional styling is done only with classes. For example, we reboot some `<table>` styles for a simpler baseline and later provide `.table`, `.table-bordered`, and more.

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Approach

Here are our guidelines and reasons for choosing what to override in Reboot:

- Update some browser default values to use `rem`s instead of `em`s for scalable component spacing.
- Avoid `margin-top`. Vertical margins can collapse, yielding unexpected results. More importantly though, a single direction of `margin` is a simpler mental model.
- For easier scaling across device sizes, block elements should use `rem`s for `margin`s.
- Keep declarations of `font`-related properties to a minimum, using `inherit` whenever possible.

## Page Defaults

The `<html>` and `<body>` elements are updated to provide better page-wide defaults. More specifically:

- The `box-sizing` is globally set on every element---including `*::before` and `*::after`, to `border-box`. This ensures that the declared width of element is never exceeded due to padding or border.
- A base `font-size: 100%` (assuming a 16px browser default) is declared on the `<html>` and `font-size: 1rem` on the `<body>` for easy responsive type-scaling via media queries while respecting user preferences allowing for a more accessible approach.
- The `<body>` also sets a global `font-family`, `line-height`, and `text-align`. This is inherited later by some form elements to prevent font inconsistencies.
- For safety, the `<body>` has a declared `background-color`, defaulting to `#fff`.

## Native Font Stack

The default web fonts (Helvetica Neue, Helvetica, and Arial) have been dropped in Figuration and replaced with a "native font stack" for optimum text rendering on every device and OS. Read more about [native font stacks in this *Smashing Magazine* article](https://www.smashingmagazine.com/2015/11/using-system-ui-fonts-practical-guide/).

{% highlight sass %}
$font-family-sans-serif:
  // Safari for macOS and iOS (San Francisco)
  -apple-system,
  // Chrome for macOS (San Francisco)
  BlinkMacSystemFont,
  // Windows
  "Segoe UI",
  // Android
  "Roboto",
  // Linux
  "Noto Sans",
  // Basic web fallback
  "Helvetica Neue", Arial, sans-serif,
  // Emoji fonts
  "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" !default;
{% endhighlight %}

This `font-family` is applied to the `<body>` and automatically inherited globally throughout Figuration. To switch the global `font-family`, update `$font-family-base` and recompile Figuration.

## Headings and Paragraphs

All heading elements---e.g., `<h1>`---and `<p>` are reset to have their `margin-top` removed. Headings have `margin-bottom: .5rem` added and paragraphs `margin-bottom: 1rem` for easy spacing.

<div class="cf-example cf-example-bottom">
<h1>h1 heading</h1>
Curabitur blandit tempus porttitor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.

<h2>h2 heading</h2>
Curabitur blandit tempus porttitor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.

<h3>h3 heading</h3>
Curabitur blandit tempus porttitor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.

<h4>h4 heading</h4>
Curabitur blandit tempus porttitor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.

<h5>h5 heading</h5>
Curabitur blandit tempus porttitor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.

<h6>h6 heading</h6>
Curabitur blandit tempus porttitor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
</div>

## Lists

All lists---`<ul>`, `<ol>`, and `<dl>`---have their `margin-top` removed and a `margin-bottom: 1rem`. Nested lists have no `margin-bottom`.

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

Tables are slightly adjusted to style `<caption>`s, collapse borders, and ensure consistent `text-align` throughout. Additional changes for borders, padding, and more come with [the `.table` class]({{ site.baseurl }}/content/tables/).

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
      <label for="time">Example temporal</label>
      <input type="datetime-local" id="time">
    </p>

    <p>
      <label for="output">Example output</label>
      <output name="result" id="output">100</output>
    </p>

    <p>
      <button type="submit">Button submit</button>
      <input type="submit" value="Input submit button">
      <input type="button" value="Input button">
    </p>

    <p>
      <button type="submit" disabled>Button submit</button>
      <input type="submit" value="Input submit button" disabled>
      <input type="button" value="Input button" disabled>
    </p>
  </fieldset>
</form>

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
    <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
  </blockquote>
</div>

### Inline Elements

The `<abbr>` element receives basic styling to make it stand out amongst paragraph text.

<div class="cf-example cf-example-bottom">
  Nulla <abbr title="attribute">attr</abbr> vitae elit libero, a pharetra augue.
</div>

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

HTML5 adds [a new global attribute named `[hidden]`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/hidden), which is styled as `display: none` by default. Borrowing an idea from [PureCSS](https://purecss.io/), we improve upon this default by making `[hidden] { display: none !important; }` to help prevent its `display` from getting accidentally overridden. While `[hidden]` isn't natively supported by IE10, the explicit declaration in our CSS gets around that problem.

{% highlight html %}
<input type="text" hidden>
{% endhighlight %}

{% capture callout %}
jQuery Incompatibility
{:.h5 .no_toc}

`[hidden]` is not compatible with jQuery's `$(...).hide()` and `$(...).show()` methods. Therefore, we don't currently especially endorse `[hidden]` over other techniques for managing the `display` of elements.
{% endcapture %}
{% include callout.html content=callout type="warning" %}

To merely toggle the visibility of an element, meaning its `display` is not modified and the element can still affect the flow of the document, use [the `.invisible` class]({{ site.baseurl }}/utilities/visibility/) instead.

## SASS Reference

### Variables

The available [Customization options]({{ site.baseurl }}/get-started/options/), or Sass variables, that can be customized for the reboot CSS styles.

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
                <td><code>underline</code></td>
                <td>
                    Text decoration for hovered or focused links.
                </td>
            </tr>
            <tr>
                <td><code>$headings-margin-bottom</code></td>
                <td>string</td>
                <td><code>($spacer / 2)</code></td>
                <td>
                    Bottom margin for <code>&lt;hN&gt;</code> headings and heading classes.
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
                <td><code>$table-cell-padding</code></td>
                <td>string</td>
                <td><code>.75rem</code></td>
                <td>
                    Padding for table cells.
                </td>
            </tr>
            <tr>
                <td><code>$table-caption-color</code></td>
                <td>string</td>
                <td><code>$uibase-500</code></td>
                <td>
                    Text color for table captions.
                </td>
            </tr>
        </tbody>
    </table>
</div>

### Mixins

No mixins available.
