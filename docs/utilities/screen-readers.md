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

{% highlight html %}
<a class="sr-only sr-only-focusable" href="#content">Skip to main content</a>

<span class="sr-only-sm-down">...</span>
{% endhighlight %}

{% highlight scss %}
// Usage as a mixin
.skip-navigation {
  @include sr-only;
  @include sr-only-focusable;
}
{% endhighlight %}

## Hiding Content

Force an element to be hidden (including for screen readers) with the use of `.d{-breakpoint}-none` and `.d{-breakpoint}-down-none` classes.

A section on the [display utilities page]({{ site.baseurl }}/utilities/display/#responsively-hiding-content) gives more detail about how these classes and breakpoints are related.

## Invisible Content

The `.invisible` and `.visible` classes can be used to toggle only the `visibility` of an element, meaning its `display` is not modified and the element can still affect the flow of the document.

The [visibility utilities page]({{ site.baseurl }}/utilities/visibility/) gives more detail.

## Useful Resources

Still have questions?  There are some links to external resources avaiable in the [screen reader section on the Accessibility page]({{ site.baseurl }}/get-started/accessibility/#screen-reader-only-content)
