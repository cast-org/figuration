---
layout: docs
title: Accessibility
group: get-started
---

Figuration follows common web standards and---with minimal extra effort---can be used to create sites that are accessible to those using <abbr title="Assistive Technology" class="initialism">AT</abbr>.

{% callout info %}
**More to come!** Over time, we hope to add more accessibility notes here with links to specific sections from other areas of the docs.
{% endcallout %}

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Skip Navigation

If your navigation contains many links and comes before the main content in the DOM, add a `Skip to main content` link before the navigation (for a simple explanation, see this [A11Y Project article on skip navigation links](http://a11yproject.com/posts/skip-nav-links/)). Using the `.sr-only` class will visually hide the skip link, and the <code>.sr-only-focusable</code> class will ensure that the link becomes visible once focused (for sighted keyboard users).

{% callout danger %}
Due to long-standing shortcomings/bugs in Internet Explorer (see this article on [in-page links and focus order](http://accessibleculture.org/articles/2010/05/in-page-links/)), you will need to make sure that the target of your skip link is at least programmatically focusable by adding `tabindex="-1"`.

In addition, you may want to explicitly suppress a visible focus indication on the target (particularly as Chrome currently also sets focus on elements with `tabindex="-1"` when they are clicked with the mouse) with `#content:focus { outline: none; }`.

Note that this bug will also affect any other in-page links your site may be using, rendering them useless for keyboard users. You may consider adding a similar stop-gap fix to all other named anchors / fragment identifiers that act as link targets.
{% endcallout %}

{% highlight html %}
<body>
  <a href="#content" class="sr-only sr-only-focusable">Skip to main content</a>
  ...
  <div class="container" id="content" tabindex="-1">
    <!-- The main page content -->
  </div>
</body>
{% endhighlight %}

## Nested Headings

When nesting headings (`<h1>` - `<h6>`), your primary document header should be an `<h1>`. Subsequent headings should make logical use of `<h2>` - `<h6>` such that screen readers can construct a table of contents for your pages.

Avoid skipping heading levels when structuring your document, as it is confusing for screen readers. For example, after using an `<h2>` in your code, the next heading used should be either `<h2>` or `<h3>`. If you need a heading to look bigger or smaller to match a specific style, use CSS to override the default size.

Learn more at [HTML CodeSniffer](http://squizlabs.github.io/HTML_CodeSniffer/Standards/Section508/) and [Penn State's Accessibility](http://accessibility.psu.edu/headings/).

## Screen Reader Only Content

In some cases the design might call for content or layout that works fine for visual users, but screen reader users might need additional context to help with what the content is trying to convey.

Some quick examples would be using icons for layout, or links that might all visually contain the same information (the ever present 'read more' links).  In both cases a screen reader is left with no context.

Using [screen reader only content]({{ site.baseurl }}/utilities/screen-readers-visibility/#screen-readers-and-keyboard-users) is a way to provide this context without overloading the visual display.

Some helpful references:

- [Text for Screen Readers Only](http://www.coolfields.co.uk/2016/05/text-for-screen-readers-only-updated/)
- [Invisible Content Just for Screen Reader Users](http://webaim.org/techniques/css/invisiblecontent/)

## Disabled Anchors

Many of Figuration's components use of a `.disabled` class to make items _visually_ appear disabled.  While there is the `disabled` attribute available for `<button>`s, HTML does not have an easy way to disable user interaction with `<a>`s.

It should also be noted that:
- `<a>`s don't support the `disabled` attribute.
- The `.disabled` class uses a future-friendly `pointer-events: none` property to try to disable the `pointer-events` and link functionality of `<a>`s, but that CSS property is not yet standardized.
- In browsers which support `pointer-events: none`, keyboard navigation remains unaffected, meaning that sighted keyboard users and users of assistive technologies will still be able to activate these links.
- When using both the `pointer-events:none` and `cursor: not-allowed` styles, the disabled cursor is not shown when hovering over the item.

Some solutions include:
- In some cases, an acceptable solution would be to replace the `<a>` element with a `<span>` to allow for a similar layout.  This is due to `<span>`s also having a default `display: inline` and are not clickable or focusable through keyboard interaction.
- Disabled links, especially buttons and navigation items, would benefit from the inclusion of an `aria-disabled="true"` attribute to indicate the state of the element to assistive technologies.
- Add a `tabindex="-1"` attribute on disabled links to prevent them from receiving keyboard focus.
- Use custom JavaScript to disable their functionality. For example:
{% highlight js %}
$('.disabled').click(function(e) {
    e.preventDefault();
});
{% endhighlight %}

## Conveying Meaning With Color

Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies—such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the `.sr-only` class.

## Component Requirements

Some common HTML elements are always in need for basic accessibility enhancements through `role`s and ARIA attributes. Below is a list of some of the most frequently used ones.

### Button Groups

In order for assistive technologies---such as screen readers---to convey that a series of buttons is grouped, an appropriate `role` attribute needs to be provided. For button groups, this would be `role="group"`, while toolbars should have a `role="toolbar"`.

In addition, groups and toolbars should be given an explicit label, as most assistive technologies will otherwise not announce them, despite the presence of the correct `role` attribute. In the examples provided here, we use `aria-label`, but alternatives such as `aria-labelledby` can also be used.

## Additional Resources

- ["HTML Codesniffer" bookmarklet for identifying accessibility issues](https://github.com/squizlabs/HTML_CodeSniffer)
- [The A11Y Project](http://a11yproject.com/)
- [MDN accessibility documentation](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
