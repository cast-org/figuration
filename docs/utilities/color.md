---
layout: docs
title: Color
group: utilities
---

Add a little, or a lot of, color to your site or application.

{% callout info %}
Dealing with Specificity
{:.h5}

Sometimes contextual classes cannot be applied due to the specificity of another selector. In some cases, a sufficient workaround is to wrap your element's content in a `<div>` with the class.
{% endcallout %}

{% callout warning %}
Conveying Meaning to Assistive Technologies
{:.h5}

Please refer to the [Accessiblity notes about conveying meaning with color]({{ site.baseurl }}/get-started/accessibility/#conveying-meaning-with-color).
{% endcallout %}

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Text

Convey meaning through color with a handful of emphasis utility classes. These may also be applied to links and will darken on hover just like our default link styles.

{% example html %}
<p class="text-muted">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>
<p class="text-primary">Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
<p class="text-success">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
<p class="text-info">Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
<p class="text-warning">Etiam porta sem malesuada magna mollis euismod.</p>
<p class="text-danger">Donec ullamcorper nulla non metus auctor fringilla.</p>
{% endexample %}

Contextual text classes also work well on anchors with the provided hover and focus states.

{% example html %}
<a href="#" class="text-muted">Muted link</a>
<a href="#" class="text-primary">Primary link</a>
<a href="#" class="text-success">Success link</a>
<a href="#" class="text-info">Info link</a>
<a href="#" class="text-warning">Warning link</a>
<a href="#" class="text-danger">Danger link</a>
{% endexample %}

There are also two special text color cases for use with either light and dark backgrounds. They can handle anchors too.  Use `.text-dark` on lighter backgrounds, and `.text-light` on darker backgrounds.  These will not provide accessible ratios of contrast for all items.

{% example html %}
<div class="cf-textalt row">
    <div class="col-sm-6">
        <div class="text-dark bg-info">Light text <a href="#" class="text-dark">anchor link</a></div>
        <div class="text-dark bg-danger">Light text <a href="#" class="text-dark">anchor link</a></div>
        <div class="text-dark bg-gray-100">Dark text <a href="#" class="text-dark">anchor link</a></div>
        <div class="text-dark bg-gray-200">Dark text <a href="#" class="text-dark">anchor link</a></div>
    </div>
    <div class="col-sm-6">
        <div class="text-light bg-gray-800">Light text <a href="#" class="text-light">anchor link</a></div>
        <div class="text-light bg-gray-900">Light text <a href="#" class="text-light">anchor link</a></div>
        <div class="text-light bg-danger">Light text <a href="#" class="text-light">anchor link</a></div>
        <div class="text-light bg-info">Light text <a href="#" class="text-light">anchor link</a></div>
    </div>
</div>
{% endexample %}

## Backgrounds

Similar to the contextual text color classes, easily set the background color of an element to any contextual class. Anchor components will darken on hover, just like the text classes.

There is also a `.bg-transparent` for removing the background color for an element.

{% example html %}
<div class="bg-primary">Nullam id dolor id nibh ultricies vehicula ut id elit.</div>
<div class="bg-success">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</div>
<div class="bg-info">Maecenas sed diam eget risus varius blandit sit amet non magna.</div>
<div class="bg-warning">Etiam porta sem malesuada magna mollis euismod.</div>
<div class="bg-danger">Donec ullamcorper nulla non metus auctor fringilla.</div>
<div class="bg-inverse">Cras mattis consectetur purus sit amet fermentum.</div>
<div class="bg-faded"> Vestibulum ante ipsum primis in faucibus orci luctus.</div>
{% endexample %}

## Borders

Borders also be colored with their own set of contextual classes. Borders do not change color on hover state.

There is also a `.border-transparent` that removes the border color for an element, but keeps the border width in place.

{% example html %}
<div class="border-primary mb-0_5 p-0_25" style="border: 2px solid;">Primary</div>
<div class="border-secondary mb-0_5 p-0_25" style="border: 2px solid;">Secondary</div>
<div class="border-success mb-0_5 p-0_25" style="border: 2px solid;">Success</div>
<div class="border-info mb-0_5 p-0_25" style="border: 2px solid;">Info</div>
<div class="border-warning mb-0_5 p-0_25" style="border: 2px solid;">Warning</div>
<div class="border-danger mb-0_5 p-0_25" style="border: 2px solid;">Danger</div>
{% endexample %}

## Palette Colors

If the [color palette]({{ site.baseurl }}/content/color/) is enabled, any color theme that is added to the `$palette-themes` Sass map will become available for use.  For example a theme named `blue`, then becomes available as `.text-blue-[level]` or `.bg-blue-[level]`, where `level` is in the set defined by the `$palette-levels` variable.

{% example html %}
<p class="text-blue-700">blue-700 text sample</p>
<p><a href="#" class="text-blue-400">blue-400 link example</a></p>
<div class="bg-blue-100 text-dark">Blue-100 background with dark text</div>
<div class="border-cyan-300 mb-0_5 p-0_25" style="border: 2px solid;">Cyan-300 border color</div>
{% endexample %}
