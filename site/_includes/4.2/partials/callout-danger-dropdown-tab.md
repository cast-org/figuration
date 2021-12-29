 {% capture callout %}
Incompatible Widgets
{.h5}

For accessibility reasons, **do not** mix use of the [Tab widget]({{ site.path }}/{{ version.docs }}/widgets/tab/) and [Dropdown widget]({{ site.path }}/{{ version.docs }}/widgets/dropdown/) in the same nav item.  This will cause navigation and usability issues.  One or the other, but not both.

From a usability perspective, the example where the currently displayed tab's trigger element might not immediately visible (as it could be inside a closed dropdown menu) would cause confusion. From an accessibility point of view, there is currently no sensible way to map this sort of construct to a standard WAI ARIA pattern, meaning that it cannot be easily made understandable to users of assistive technologies.
{% endcapture %}
{% renderCallout, callout, "danger" %}
