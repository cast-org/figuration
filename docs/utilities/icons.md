---
layout: docs
title: Icons
group: utilities
---

A few simple icons to indicate state or function.

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Caret Icon

Use carets to indicate some meaning of functionality or direction. Note that the default caret will reverse automatically in [dropup menus]({{ site.baseurl }}/widgets/dropdown/).

If inside of an element marked as `.open` the caret will reverse direction accordingly to indicate state.

{% example html %}
<span class="caret" aria-hidden="true"></span>
<span class="open">
  <span class="caret" aria-hidden="true"></span>
</span>
&mdash;
<span class="dropup">
  <span class="caret" aria-hidden="true"></span>
</span>
<span class="dropup open">
  <span class="caret" aria-hidden="true"></span>
</span>
{% endexample %}

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

{% highlight scss %}
// Create the base caret
@include caret($direction, $border-width, $border-color);

// Modify the caret direction
@include caret-down($border-width, $border-color);
@include caret-up($border-width, $border-color);
@include caret-start($border-width, $border-color);
@include caret-end($border-width, $border-color);
{% endhighlight %}

### Example

{% highlight scss %}
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
{% endhighlight %}

{% example html %}
Hover over, or focus on the following button to change caret direction:<br />
<button type="button" class="btn">
    Caret example
    <span class="example-caret" aria-hidden="true"></span>
</button>
{% endexample %}


## Close Icon

Use a generic close icon for dismissing content like modals and alerts. **Be sure to include text for screen readers**, as we've done with `aria-label`.

{% example html %}
<button type="button" class="close" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>

<a href="#" role="button" class="close" aria-label="Close">
    <span aria-hidden="true">&times;</span>
</a>
{% endexample %}
