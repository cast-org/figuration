---
layout: docs
title: Media Object
group: components
---

The media object helps build complex and repetitive components where some media is positioned alongside content that doesn't wrap around said media.

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Basic Example

Below is an example of a single media object. Only two classes are required—the wrapping `.media` and the `.media-body` around your content. Optional padding and margin can be controlled through [spacing utilities]({{ site.baseurl }}/utilities/spacing/).

{% example html %}
<div class="media">
  <img class="d-flex me-1" data-src="holder.js/64x64" alt="Generic placeholder image">
  <div class="media-body">
    <h5>Media heading</h5>
    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
  </div>
</div>
{% endexample %}

{% callout warning %}
Flexbug #12: Inline elements aren't treated as flex items
{:.h5}

Internet Explorer 10-11 do not render inline elements like links or images (or `::before` and `::after` pseudo-elements) as flex items. The only workaround is to set a non-inline `display` value (e.g., `block`, `inline-block`, or `flex`). You can also use one of our [display utilities]({{ site.baseurl }}/utilities/display-property/), such as `.d-flex`, for an easy fix.

**Source:** [Flexbugs on GitHub](https://github.com/philipwalton/flexbugs#12-inline-elements-are-not-treated-as-flex-items)
{% endcallout %}

## Nesting

Media components can also be nested as many times as needed. Place nested `.media` within the `.media-body` of a parent media object.

{% example html %}
<div class="media">
  <img class="d-flex me-1" data-src="holder.js/64x64" alt="Generic placeholder image">
  <div class="media-body">
    <h5>Media heading</h5>
    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
    <div class="media">
      <a href="#" class="d-flex me-1">
        <img data-src="holder.js/64x64" alt="Generic placeholder image">
      </a>
      <div class="media-body">
        <h5>Nested media heading</h5>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      </div>
    </div>
  </div>
</div>
{% endexample %}

## Alignment

Media in a media object can be aligned with [flexbox utilities]({{ site.baseurl }}/utilities/flexbox/) to the top (default), middle, or end of your `.media-body` content.

{% example html %}
<div class="media">
  <img class="d-flex me-1" data-src="holder.js/64x64" alt="Generic placeholder image">
  <div class="media-body">
    <h5>Top aligned media</h5>
    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
    <p class="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
  </div>
</div>
{% endexample %}

{% example html %}
<div class="media">
  <img class="d-flex flex-self-center me-1" data-src="holder.js/64x64" alt="Generic placeholder image">
  <div class="media-body">
    <h5>Center aligned media</h5>
    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
    <p class="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
  </div>
</div>
{% endexample %}

{% example html %}
<div class="media">
  <img class="d-flex flex-self-end me-1" data-src="holder.js/64x64" alt="Generic placeholder image">
  <div class="media-body">
    <h5>Bottom aligned media</h5>
    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
    <p class="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
  </div>
</div>
{% endexample %}

## Order

Change the order of content in media objects by modifying the HTML itself, or by adding some custom flexbox CSS to set the `order` property (to an integer of your choosing).

{% example html %}
<div class="media">
  <div class="media-body">
    <h5>Media heading</h5>
    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
  </div>
  <img class="d-flex ms-1" data-src="holder.js/64x64" alt="Generic placeholder image">
</div>
{% endexample %}

## Media List

Because the media object has so few structural requirements, you can also use these classes on list HTML elements. On your `<ul>` or `<ol>`, add the `.list-unstyled` to remove any browser default list styles, and then apply `.media` to your `<li>`s. As always, use spacing utilities wherever needed to fine tune.

{% example html %}
<ul class="list-unstyled">
  <li class="media">
    <img class="d-flex me-1" data-src="holder.js/64x64" alt="Generic placeholder image">
    <div class="media-body">
      <h5>List-based media object</h5>
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
    </div>
  </li>
  <li class="media">
    <img class="d-flex me-1" data-src="holder.js/64x64" alt="Generic placeholder image">
    <div class="media-body">
      <h5>List-based media object</h5>
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
    </div>
  </li>
  <li class="media">
    <img class="d-flex me-1" data-src="holder.js/64x64" alt="Generic placeholder image">
    <div class="media-body">
      <h5>List-based media object</h5>
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
    </div>
  </li>
</ul>
{% endexample %}

## Other Content

You can include many other components, such as forms, buttons, and more.

{% example html %}
<div class="media">
  <img class="d-flex me-1" data-src="holder.js/64x64" alt="Generic placeholder image">
  <div class="media-body">
    <form>
      <div class="form-group mb-0_5">
        <label for="exampleTextarea0" class="sr-only">Example textarea</label>
        <textarea class="form-control" id="exampleTextarea0" placeholder="Add a comment..." rows="4"></textarea>
      </div>
      <div class="d-flex flex-between flex-items-center">
        <div class="form-check mb-0">
          <label class="form-check-label">
            <input class="form-check-input" type="checkbox"> Some item to check
          </label>
        </div>
        <button type="submit" class="btn btn-outline-secondary">Post Comment</button>
      </div>
    </form>
  </div>
</div>
{% endexample %}

Put media items on the both sides.

{% example html %}
<div class="media">
  <img class="d-flex me-1" data-src="holder.js/64x64" alt="Generic placeholder image">
  <div class="media-body">
    <h5>Media heading</h5>
    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
  </div>
  <img class="d-flex ms-1" data-src="holder.js/64x64" alt="Generic placeholder image">
</div>
{% endexample %}

Even create your own social media layout.

{% example html %}
<div class="media">
  <img class="d-flex me-1" data-src="holder.js/64x64" alt="Generic placeholder image">
  <div class="media-body">
    <h5>Media heading</h5>
    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
    <div class="media">
      <a href="#" class="d-flex me-1">
        <img data-src="holder.js/64x64" alt="Generic placeholder image">
      </a>
      <div class="media-body">
        <h5>Nested media heading</h5>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      </div>
    </div>
    <div class="media">
      <a href="#" class="d-flex me-1">
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
  <img class="d-flex me-1" data-src="holder.js/64x64" alt="Generic placeholder image">
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
{% endexample %}
