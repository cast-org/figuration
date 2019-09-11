---
layout: docs
title: Links
description: Various design treatments for anchor elements.
group: utilities
---

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Stretchable Links

Make any HTML element or component clickable by “stretching” a nested link via CSS.

Add `.link-stretch` to a link to make its [containing block](https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block) clickable via a `::after` pseudo element. In most cases, this means that an element with `position: relative;` that contains a link with the `.link-stretch` class is clickable.

### Examples

#### Using with Cards

By default, cards have `position: relative`, so in this case you can safely add the `.link-stretch` class to a link in the card without any other HTML changes.

{% capture example %}
<div class="card" style="width: 18rem;">
    <div class="card-img">
        <img class="img-fluid card-img-top" data-src="holder.js/100px150/" alt="Card image cap">
    </div>
    <div class="card-body">
        <h5 class="card-title">Card with stretched link</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary link-stretch">Go somewhere</a>
    </div>
</div>
{% endcapture %}
{% include example.html content=example %}

#### Using with Custom Components

Most custom components do not have `position: relative` by default, so we need to add the `.position-relative` here to prevent the link from stretching outside the parent element.

{% capture example %}
<div class="media border position-relative">
    <img class="me-1" data-src="holder.js/128x128" alt="Generic placeholder image">
    <div class="media-body">
        <h5>Custom component with stretched link</h5>
        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>
        <a href="#" class="link-stretch">Go somewhere</a>
    </div>
</div>
{% endcapture %}
{% include example.html content=example %}

#### Using with Columns

Columns are also `position: relative` by default, so clickable columns only require the `.link-stretch` class on a link. However, stretching a link over an entire `.row` requires `.position-static` on the column and `.position-relative` on the row.

{% capture example %}
<div class="row no-gutters bg-light position-relative">
    <div class="col-md-6 mb-md-0 p-md-1">
        <img class="me-1" data-src="holder.js/100px128" alt="Generic placeholder image">
    </div>
    <div class="col-md-6 position-static p-1 ps-md-0">
        <h5 class="mt-0">Columns with stretched link</h5>
        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>
        <a href="#" class="link-stretch">Go somewhere</a>
    </div>
</div>
{% endcapture %}
{% include example.html content=example %}

#### Using with Multiple Links

Multiple links and tap targets are not recommended with stretched links. However, some `position` and `z-index` styles can help should this be required.
{% highlight css%}
.has-link-stretch a:not(.link-stretch) {
    position: relative;
    z-index: 2;
}
{% endhighlight %}
{% capture example %}
<div class="card has-link-stretch" style="width: 18rem;">
    <div class="card-img">
        <img class="img-fluid card-img-top" data-src="holder.js/100px150/" alt="Card image cap">
    </div>
    <div class="card-body">
        <h5 class="card-title">Card with stretched link</h5>
        <p class="card-text">The 'Unstretched' link will also clickable, and will 'sit' above the stretched link due to its higher <code>z-index</code> value.</p>
        <div class="d-flex flex-between">
            <a href="#stretched" class="btn btn-primary link-stretch">Stretched</a>
            <a href="#unstretched" class="btn">Unstretched</a>
        </div>
    </div>
</div>
{% endcapture %}
{% include example.html content=example %}



### Identifying the Containing Block

If the stretched link doesn't seem to work, the [containing block](https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#Identifying_the_containing_block) will probably be the cause. The following CSS properties will make an element the containing block:

- A `position` value other than `static`
- A `transform` or `perspective` value other than `none`
- A `will-change` value of `transform` or `perspective`
- A `filter` value other than `none` or a `will-change` value of `filter` (only works on Firefox)

{% capture example %}
<div class="card" style="width: 18rem;">
    <div class="card-img">
        <img class="img-fluid card-img-top" data-src="holder.js/100px150/" alt="Card image cap">
    </div>
    <div class="card-body">
        <h5 class="card-title">Card with stretched links</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <p class="card-text">
            <a href="#" class="link-stretch text-danger" style="position: relative;">Stretched link will not work here, because <code>position: relative</code> is added to the link</a>
        </p>
        <p class="card-text bg-light" style="transform: rotate(0);">
            This <a href="#" class="text-warning link-stretch">stretched link</a> will only be spread over the <code>p</code>-tag, because a transform is applied to it.
        </p>
    </div>
</div>
{% endcapture %}
{% include example.html content=example %}

## SASS Reference

### Variables

The available [Customization options]({{ site.baseurl }}/{{ site.docs_version }}/get-started/options/), or Sass variables, that can be customized for this grouping of utility classes.

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
                <td><code>$enable-utility-link-stretch</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the stretchable link utility class.
                </td>
            </tr>
            <tr>
                <td><code>$enable-utility-link-stretch</code></td>
                <td>string</td>
                <td><code>after</code></td>
                <td>
                    Pseudo element to use for stretched links.
                </td>
            </tr>
            <tr>
                <td><code>$enable-utility-link-stretch</code></td>
                <td>integer</td>
                <td><code>1</code></td>
                <td>
                    Z-index to use for stretched links.
                </td>
            </tr>
        </tbody>
    </table>
</div>

### Mixins

No mixins available.
