---
layout: docs
title: Screen Readers
group: utilities
---

Hide content without sacrificing accessibility.

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Screen Reader Only Content

Hide an element to all devices **except screen readers** with `.sr-only`. Combine `.sr-only` with `.sr-only-focusable` to show the element again when it's focused (e.g. by a keyboard-only user). Can also be used as mixins.

There are also responsive variants available in the form `.sr-only{-breakpoint}-{up/down}`.  For example, to visually hide content, **except for screen readers**, for a `sm` or smaller screens you would use `.sr-only-sm-down`.

These classes are exceptionally useful helping to follow [accessibility best practices]({{ site.baseurl }}/get-started/accessibility).

**Heads up!** There is no `.sr-only-*` class created for the smallest breakpoint and no `.sr-only-*-down` class created for the largest breakpoint, `.sr-only-xs` and `.sr-only-xl-down` respectively, since they are functionally equivalent to using `.sr-only`.

{% example html %}
<a class="sr-only sr-only-focusable" href="#content">Skip to main content</a>

<span class="sr-only-sm-down">...</span>
{% endexample %}

{% highlight scss %}
// Usage as a mixin
.skip-navigation {
  @include sr-only;
  @include sr-only-focusable;
}
{% endhighlight %}

## Image Replacement

Visually hide the text and show an image replacement by using a `background-image`.

{% example html %}
<h1 style="background-image: url('{{ site.baseurl}}/assets/brand/figuration-solid.svg'); width: 3rem; height: 3rem;">
    <span class="sr-only">CAST Figuration</span>
</h1>
{% endexample %}

## Hiding Content

Force an element to be hidden (including for screen readers) with the use of `.d{-breakpoint}-none` and `.d{-breakpoint}-down-none` classes.

A section on the [display utilities page]({{ site.baseurl }}/utilities/display/#responsively-hiding-content) gives more detail about how these classes and breakpoints are related.

## Invisible Content

The `.invisible` and `.visible` classes can be used to toggle only the `visibility` of an element, meaning its `display` is not modified and the element can still affect the flow of the document.

The [visibility utilities page]({{ site.baseurl }}/utilities/visibility/) gives more detail.

## Useful Resources

Still have questions?  There are some links to external resources avaiable in the [screen reader section on the Accessibility page]({{ site.baseurl }}/get-started/accessibility/#screen-reader-only-content)

## SASS Reference

### Variables

The available [Customization options]({{ site.baseurl }}/get-started/options/), or Sass variables, that can be customized for this grouping of utility classes.

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
                <td><code>$enable-utility-sronly</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the position utility classes.
                    Smaller segements of the position utilities can be disabled with the following <code>$enable-*</code> variables.
                </td>
            </tr>
            <tr>
                <td><code>$enable-utility-sronly-common</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the base `.sr-only` utility class.
                </td>
            </tr>
            <tr>
                <td><code>$enable-utility-sronly-focusable</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the base `.sr-only-focusable` utility class.
                </td>
            </tr>
            <tr>
                <td><code>$enable-utility-sronly-responsive</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the responsive screen reader only utility classes.
                </td>
            </tr>
            <tr>
                <td><code>$enable-utility-sronly-responsive-down</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the down responsive down variants of screen reader only utility classes.
                </td>
            </tr>
        </tbody>
    </table>
</div>

### Mixins

Here are the mixins related to this grouping of utility classes that we use to help generate our CSS.  You can also uses these mixins to generate your own custom components or utilities.

#### sr-only
{:.no_toc}

Only display content to screen readers.

{% highlight sass %}
@include sr-only();
{% endhighlight %}

#### sr-only-focusable
{:.no_toc}

Use in conjunction with `.sr-only` to only display content when it becomes focused.

{% highlight sass %}
@include sr-only-focusable();
{% endhighlight %}
