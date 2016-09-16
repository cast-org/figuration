---
layout: docs
title: Screen Readers & Visibility
group: utilities
---

Hide content without sacrificing accessibility.

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Screen Readers and Keyboard Users

Hide an element to all devices **except screen readers** with `.sr-only`. Combine `.sr-only` with `.sr-only-focusable` to show the element again when it's focused (e.g. by a keyboard-only user). Can also be used as mixins.

There are also repsonsive variants available in the form `.sr-only-{breakpoint}-{up/down}`.  For example, to visually hide content, **except for screen readers**, for a `sm` or smaller screens you would use `.sr-only-sm-down`.

These classes are exceptionally useful helping to follow [accessibility best practices]({{ site.baseurl }}/get-started/accessibility).

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

## Hidden Content

Force an element to be hidden (including for screen readers) with the use of `.hidden-{breakpoint}-{up/down}` classes. These classes use `!important` to avoid specificity conflicts. For example, to hide content for `lg` or larger screens you would use `.hidden-lg-up`.

{% highlight html %}
<span class="hidden-lg-up">...</span>
<span class="hidden-sm-down">...</span>
{% endhighlight %}

## Invisible Content

The `.invisible` class can be used to toggle only the visibility of an element, meaning its `display` is not modified and the element can still affect the flow of the document.

{% highlight html %}
<div class="invisible">...</div>
{% endhighlight %}

{% highlight scss %}
// Class
.invisible {
  visibility: hidden;
}

// Usage as a mixin
.element {
  @include invisible;
}
{% endhighlight %}