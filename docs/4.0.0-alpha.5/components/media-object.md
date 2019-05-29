---
layout: docs
title: Media Object
description: The media object helps build complex and repetitive components where some media is positioned alongside content that doesn't wrap around said media.
group: components
---

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Basic Example

Below is an example of a single media object. Only two classes are required—the wrapping `.media` and the `.media-body` around your content. Optional padding and margin can be controlled through [spacing utilities]({{ site.baseurl }}/utilities/spacing/).

{% capture example %}
<div class="media">
  <img class="me-1" data-src="holder.js/64x64" alt="Generic placeholder image">
  <div class="media-body">
    <h5>Media heading</h5>
    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

{% capture callout %}
Flexbug #12: Inline elements aren't treated as flex items
{:.h5 .no_toc}

Internet Explorer 10-11 do not render inline elements like links or images (or `::before` and `::after` pseudo-elements) as flex items. The only workaround is to set a non-inline `display` value (e.g., `block`, `inline-block`, or `flex`). You can also use one of our [display utilities]({{ site.baseurl }}/utilities/display/), such as `.d-flex`, for an easy fix.

**Source:** [Flexbugs on GitHub](https://github.com/philipwalton/flexbugs#12-inline-elements-are-not-treated-as-flex-items)
{% endcapture %}
{% include callout.html content=callout type="warning" %}

## Nesting

Media components can also be nested as many times as needed. Place nested `.media` within the `.media-body` of a parent media object.

{% capture example %}
<div class="media">
  <img class="me-1" data-src="holder.js/64x64" alt="Generic placeholder image">
  <div class="media-body">
    <h5>Media heading</h5>
    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
    <div class="media">
      <a href="#" class="me-1">
        <img data-src="holder.js/64x64" alt="Generic placeholder image">
      </a>
      <div class="media-body">
        <h5>Nested media heading</h5>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      </div>
    </div>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

## Alignment

Media in a media object can be aligned with [flexbox utilities]({{ site.baseurl }}/utilities/flexbox/) to the top (default), middle, or end of your `.media-body` content.

{% capture example %}
<div class="media">
  <img class="me-1" data-src="holder.js/64x64" alt="Generic placeholder image">
  <div class="media-body">
    <h5>Top aligned media</h5>
    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
    <p class="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
<div class="media">
  <img class="flex-self-center me-1" data-src="holder.js/64x64" alt="Generic placeholder image">
  <div class="media-body">
    <h5>Center aligned media</h5>
    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
    <p class="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
<div class="media">
  <img class="flex-self-end me-1" data-src="holder.js/64x64" alt="Generic placeholder image">
  <div class="media-body">
    <h5>Bottom aligned media</h5>
    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
    <p class="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

## Order

Change the order of content in media objects by modifying the HTML itself, or by adding some custom flexbox CSS to set the `order` property (to an integer of your choosing).

{% capture example %}
<div class="media">
  <div class="media-body">
    <h5>Media heading</h5>
    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
  </div>
  <img class="ms-1" data-src="holder.js/64x64" alt="Generic placeholder image">
</div>
{% endcapture %}
{% include example.html content=example %}

## Media List

Because the media object has so few structural requirements, you can also use these classes on list HTML elements. On your `<ul>` or `<ol>`, add the `.list-unstyled` to remove any browser default list styles, and then apply `.media` to your `<li>`s. As always, use spacing utilities wherever needed to fine tune.

{% capture example %}
<ul class="list-unstyled">
  <li class="media">
    <img class="me-1" data-src="holder.js/64x64" alt="Generic placeholder image">
    <div class="media-body">
      <h5>List-based media object</h5>
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
    </div>
  </li>
  <li class="media">
    <img class="me-1" data-src="holder.js/64x64" alt="Generic placeholder image">
    <div class="media-body">
      <h5>List-based media object</h5>
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
    </div>
  </li>
  <li class="media">
    <img class="me-1" data-src="holder.js/64x64" alt="Generic placeholder image">
    <div class="media-body">
      <h5>List-based media object</h5>
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
    </div>
  </li>
</ul>
{% endcapture %}
{% include example.html content=example %}

## Other Content

You can include many other components, such as forms, buttons, and more.

{% capture example %}
<div class="media">
  <img class="me-1" data-src="holder.js/64x64" alt="Generic placeholder image">
  <div class="media-body">
    <form>
      <div class="form-group mb-0_5">
        <label for="exampleTextarea0" class="sr-only">Example textarea</label>
        <textarea class="form-control" id="exampleTextarea0" placeholder="Add a comment..." rows="4"></textarea>
      </div>
      <div class="flex-between flex-items-center">
        <div class="form-check mb-0_5">
          <input id="checkbox1" class="form-check-input" type="checkbox">
          <label for="checkbox1" class="form-check-label">Some item to check</label>
        </div>
        <button type="submit" class="btn btn-outline-secondary">Post Comment</button>
      </div>
    </form>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

Put media items on the both sides.

{% capture example %}
<div class="media">
  <img class="me-1" data-src="holder.js/64x64" alt="Generic placeholder image">
  <div class="media-body">
    <h5>Media heading</h5>
    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
  </div>
  <img class="ms-1" data-src="holder.js/64x64" alt="Generic placeholder image">
</div>
{% endcapture %}
{% include example.html content=example %}

Even create your own social media layout.

{% capture example %}
<div class="media">
  <img class="me-1" data-src="holder.js/64x64" alt="Generic placeholder image">
  <div class="media-body">
    <h5>Media heading</h5>
    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
    <div class="media">
      <a href="#" class="me-1">
        <img data-src="holder.js/64x64" alt="Generic placeholder image">
      </a>
      <div class="media-body">
        <h5>Nested media heading</h5>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      </div>
    </div>
    <div class="media">
      <a href="#" class="me-1">
        <img data-src="holder.js/64x64" alt="Generic placeholder image">
      </a>
      <div class="media-body">
        <h5>Nested media heading</h5>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      </div>
    </div>
  </div>
</div>
<div class="media">
  <img class="me-1" data-src="holder.js/64x64" alt="Generic placeholder image">
  <div class="media-body">
    <form>
      <div class="form-group mb-0_5">
        <label for="exampleTextarea1" class="sr-only">Example textarea</label>
        <textarea class="form-control" id="exampleTextarea1" placeholder="Add a comment..." rows="4"></textarea>
      </div>
      <button type="submit" class="btn btn-outline-secondary">Post Comment</button>
    </form>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

## SASS Reference

### Variables

The available [Customization options]({{ site.baseurl }}/get-started/options/), or Sass variables, that can be customized for the media object component.

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
                <td><code>$enable-media</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the media object classes.
                </td>
            </tr>
            <tr>
                <td><code>$media-margin-y</code></td>
                <td>string</td>
                <td><code>1rem</code></td>
                <td>
                    Vertical spacing under a media object.
                </td>
            </tr>
        </tbody>
    </table>
</div>

### Mixins

No mixins available.