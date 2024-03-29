---
layout: doc
title: Interactions
description: Utility classes that change how users interact with contents of a website.
group: utilities
toc: true
---

## Text Selection

Change the way in which the content is selected when the user interacts with it.

{% capture example %}
<p class="user-select-all">This paragraph will be entirely selected when clicked by the user.</p>
<p class="user-select-auto">This paragraph has default select behavior.</p>
<p class="user-select-none">This paragraph will not be selectable when clicked by the user.</p>
{% endcapture %}
{% renderExample example %}

## Pointer Events

Use the provided `.pe-none` and `.pe-auto` classes to prevent or add element interactions.

{% capture example %}
<p><a href="#" class="pe-none" tabindex="-1" aria-disabled="true">This link</a> can not be clicked.</p>
<p><a href="#" class="pe-auto">This link</a> can be clicked (this is default behavior).</p>
<p class="pe-none"><a href="#" tabindex="-1" aria-disabled="true">This link</a> can not be clicked because the <code>pointer-events</code> property is inherited from its parent. However, <a href="#" class="pe-auto">this link</a> has a <code>pe-auto</code> class and can be clicked.</p>
{% endcapture %}
{% renderExample example %}

{% capture callout %}
The `.pe-none` class (and the `pointer-events` CSS property it sets) only prevents interactions with a pointer (mouse, stylus, touch). Links and controls with `.pe-none` are, by default, still focusable and actionable for keyboard users. To ensure that they are completely neutralized even for keyboard users, you may need to add further attributes such as `tabindex="-1"` (to prevent them from receiving keyboard focus) and `aria-disabled="true"` (to convey the fact they are effectively disabled to assistive technologies), and possibly use JavaScript to completely prevent them from being actionable.

If possible, the simpler solution is:
- For form controls, add the `disabled` HTML attribute.
- For links, remove the `href` attribute, making it a non-interactive anchor or placeholder link.

Additional information can found in the accessibility section about [disabled anchors]({{ site.path }}/{{ version.docs }}/get-started/accessibility/#disabled-anchors).
{% endcapture %}
{% renderCallout callout, "warning" %}

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
        <td><code>$enable-utility-user-select</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the text selection utility classes.
        </td>
      </tr>
      <tr>
        <td><code>$enable-utility-pointer-events</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the text selection utility classes.
        </td>
      </tr>
    </tbody>
  </table>
</div>
