---
layout: doc
title: Icons
description: A few simple icons to indicate state or function.
group: utilities
toc: true
---

## Caret Icons

Use carets to indicate some meaning of functionality or direction.

If used inside of an element marked as `.open` the caret will reverse direction accordingly to indicate state.

{% capture example %}
<span class="caret" aria-hidden="true"></span>
<span class="caretup" aria-hidden="true"></span>
<span class="caretstart" aria-hidden="true"></span>
<span class="caretend" aria-hidden="true"></span>
{% endcapture %}
{% renderExample example %}

### Mixins

Create custom uses of the caret with the Sass mixins.

Four directions are available, with the following names: down, up, start, and end.

The *start/end directions* are designated as follows depending on which version of the Figuration CSS you are using.  The default `figuration.*.css` uses the `ltr` mode, where `figuration-rtl.*.css` uses the `rtl` mode.

- For `left-to-right` mode (`ltr` - default);
  - `start` caret points to the `left` side
  - `end` caret points to the `right` side
- For `right-to-left` mode (`rtl`);
  - `start` caret points to the `right` side
  - `end` caret points to the `left` side

{% capture highlight %}
// Create the base caret
@include caret($direction, $border-width, $border-color);

// Modify the caret direction
@include caret-down($border-width, $border-color);
@include caret-up($border-width, $border-color);
@include caret-start($border-width, $border-color);
@include caret-end($border-width, $border-color);
{% endcapture %}
{% renderHighlight highlight, "sass" %}

### Example

{% capture highlight %}
.btn {
  .example-caret {
    @include caret(start, .5rem, #000);
  }

  @include hover-focus() {
    .example-caret {
      @include caret-end(.5rem, #000);
    }
  }
}
{% endcapture %}
{% renderHighlight highlight, "sass" %}

{% capture example %}
Hover over, or focus on the following button to change caret direction:<br>
<button type="button" class="btn">
  Caret example
  <span class="example-caret" aria-hidden="true"></span>
</button>
{% endcapture %}
{% renderExample example %}


## Close Icon

Use a generic close icon for dismissing content like alerts, modals, tooltips, and popovers. **Be sure to include text for screen readers**, as we've done with `aria-label`.

{% capture example %}
<button type="button" class="close" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
{% endcapture %}
{% renderExample example %}


## Drag Icon

Figuration also uses a drag icon with draggable popovers. **Be sure to include text for screen readers**, as we've done with `aria-label`.

{% capture example %}
<button type="button" class="drag" aria-label="Drag">
  <span aria-hidden="true">+</span>
</button>
{% endcapture %}
{% renderExample example %}

## SASS Reference

### Variables

The available [Customization options]({{ site.path }}/{{ version.docs }}/get-started/options/), or Sass variables, that can be customized for this grouping of utility classes.

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
        <td><code>$enable-utility-caret</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable generation of the caret icon utility classes.
        </td>
      </tr>
      <tr>
        <td><code>$enable-utility-close</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          <p>Enable generation of the close icon utility class.</p>
          <small><strong>Disabling this may adversely affect the layout of any close icons used within a component.</strong></small>
        </td>
      </tr>
      <tr>
        <td><code>$enable-utility-drag</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          <p>Enable generation of the drag icon utility class.</p>
          <small><strong>Disabling this may adversely affect the layout of the drag icons used within a component.</strong></small>
        </td>
      </tr>
      <tr>
        <td><code>$caret-width</code></td>
        <td>string</td>
        <td><code>.75rem</code></td>
        <td>
          Caret element width.
        </td>
      </tr>
      <tr>
        <td><code>$caret-border-width</code></td>
        <td>string</td>
        <td><code>.3125rem</code></td>
        <td>
          Caret border width.
        </td>
      </tr>
      <tr>
        <td><code>$close-font-size</code></td>
        <td>string</td>
        <td><code>($font-size-base * 1.5)</code></td>
        <td>
          Close icon font size.
        </td>
      </tr>
      <tr>
        <td><code>$close-font-weight</code></td>
        <td>string</td>
        <td><code>$font-weight-bold</code></td>
        <td>
          Close icon font weight.
        </td>
      </tr>
      <tr>
        <td><code>$close-opacity</code></td>
        <td>float</td>
        <td><code>.65</code></td>
        <td>
          Close icon opacity.
        </td>
      </tr>
      <tr>
        <td><code>$close-hover-opacity</code></td>
        <td>float</td>
        <td><code>.85</code></td>
        <td>
          Close icon opacity when hovered/focused.
        </td>
      </tr>
      <tr>
        <td><code>$drag-font-size</code></td>
        <td>string</td>
        <td><code>($font-size-base * 1.5)</code></td>
        <td>
          Drag icon font size.
        </td>
      </tr>
      <tr>
        <td><code>$drag-font-weight</code></td>
        <td>string</td>
        <td><code>$font-weight-bold</code></td>
        <td>
          Drag icon font weight.
        </td>
      </tr>
      <tr>
        <td><code>$drag-opacity</code></td>
        <td>float</td>
        <td><code>.65</code></td>
        <td>
          Drag icon opacity.
        </td>
      </tr>
      <tr>
        <td><code>$drag-hover-opacity</code></td>
        <td>float</td>
        <td><code>.85</code></td>
        <td>
          Drag icon opacity when hovered/focused.
        </td>
      </tr>
    </tbody>
  </table>
</div>

### Mixins

Here are the mixins related to this grouping of utility classes that we use to help generate our CSS.  You can also uses these mixins to generate your own custom components or utilities.

#### caret()

Build the base caret icon.

{% capture highlight %}
@include caret($direction, $width, $color);
{% endcapture %}
{% renderHighlight highlight, "sass" %}

<div class="table-scroll">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th style="width: 100px;">Argument</th>
        <th style="width: 50px;">Type</th>
        <th style="width: 50px;">Default</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>$direction</code></td>
        <td>string</td>
        <td><code>down</code></td>
        <td>
          Direction the caret should point.  Options are <code>up</code>, <code>down</code>,<code>start</code>, or <code>end</code>.
        </td>
      </tr>
      <tr>
        <td><code>$width</code></td>
        <td>string</td>
        <td><code>$caret-border-width</code></td>
        <td>
          Width of the borders used to size the caret.
        </td>
      </tr>
      <tr>
        <td><code>$color</code></td>
        <td>string</td>
        <td><code>null</code></td>
        <td>
          The color of the caret.  A <code>null</code> value will inhterit the font color.
        </td>
      </tr>
    </tbody>
  </table>
</div>

#### caret-up()

Alter the base caret to point in the up direction. Uuseful for a `hover` or `active` state.

{% capture highlight %}
@include caret-up($width, $color);
{% endcapture %}
{% renderHighlight highlight, "sass" %}

<div class="table-scroll">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th style="width: 100px;">Argument</th>
        <th style="width: 50px;">Type</th>
        <th style="width: 50px;">Default</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>$width</code></td>
        <td>string</td>
        <td><code>$caret-border-width</code></td>
        <td>
          Width of the borders used to size the caret.
        </td>
      </tr>
      <tr>
        <td><code>$color</code></td>
        <td>string</td>
        <td><code>null</code></td>
        <td>
          The color of the caret.  A <code>null</code> value will inhterit the font color.
        </td>
      </tr>
    </tbody>
  </table>
</div>

#### caret-down()

Alter the base caret to point in the down direction. Uuseful for a `hover` or `active` state.

{% capture highlight %}
@include caret-down($width, $color);
{% endcapture %}
{% renderHighlight highlight, "sass" %}

<div class="table-scroll">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th style="width: 100px;">Argument</th>
        <th style="width: 50px;">Type</th>
        <th style="width: 50px;">Default</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>$width</code></td>
        <td>string</td>
        <td><code>$caret-border-width</code></td>
        <td>
          Width of the borders used to size the caret.
        </td>
      </tr>
      <tr>
        <td><code>$color</code></td>
        <td>string</td>
        <td><code>null</code></td>
        <td>
          The color of the caret.  A <code>null</code> value will inhterit the font color.
        </td>
      </tr>
    </tbody>
  </table>
</div>

#### caret-start()

Alter the base caret to point in the start direction. Uuseful for a `hover` or `active` state.

{% capture highlight %}
@include caret-start($width, $color);
{% endcapture %}
{% renderHighlight highlight, "sass" %}

<div class="table-scroll">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th style="width: 100px;">Argument</th>
        <th style="width: 50px;">Type</th>
        <th style="width: 50px;">Default</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>$width</code></td>
        <td>string</td>
        <td><code>$caret-border-width</code></td>
        <td>
          Width of the borders used to size the caret.
        </td>
      </tr>
      <tr>
        <td><code>$color</code></td>
        <td>string</td>
        <td><code>null</code></td>
        <td>
          The color of the caret.  A <code>null</code> value will inhterit the font color.
        </td>
      </tr>
    </tbody>
  </table>
</div>

#### caret-end()

Alter the base caret to point in the end direction. Uuseful for a `hover` or `active` state.

{% capture highlight %}
@include caret-end($width, $color);
{% endcapture %}
{% renderHighlight highlight, "sass" %}

<div class="table-scroll">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th style="width: 100px;">Argument</th>
        <th style="width: 50px;">Type</th>
        <th style="width: 50px;">Default</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>$width</code></td>
        <td>string</td>
        <td><code>$caret-border-width</code></td>
        <td>
          Width of the borders used to size the caret.
        </td>
      </tr>
      <tr>
        <td><code>$color</code></td>
        <td>string</td>
        <td><code>null</code></td>
        <td>
          The color of the caret.  A <code>null</code> value will inhterit the font color.
        </td>
      </tr>
    </tbody>
  </table>
</div>