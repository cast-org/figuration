---
layout: docs
title: Cards
group: components
---

A **card** is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Example

Cards are built with as little markup and styles as possible, but still manage to deliver a ton of control and customization.

Below is an example of a basic card with mixed content and a fixed width. Cards have no fixed width to start, so they’ll naturally fill the full width of its parent element. This is easily customized with our various [sizing options](#sizing).

{% example html %}
<div class="card" style="max-width: 18rem;">
  <div class="card-img card-img-top">
    <img class="img-fluid" data-src="holder.js/100px150/" alt="Card image cap">
  </div>
  <div class="card-body">
    <h4 class="card-title">Card title</h4>
    <p class="card-text">Some sample text to build out the size of the card. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
{% endexample %}

## Content Types

Cards support a wide variety of content, including images, text, list, links, and more. Below are examples of what's supported.

### Body

A basic building block of a card is the `.card-body`. Use it whenever you need a padded section within a card.

{% example html %}
<div class="card">
  <div class="card-body">
    This is some text within a card body.
  </div>
</div>
{% endexample %}

### Titles

Card titles and subtitles are used by adding `.card-title` or `.card-subtitle` to a `<h*>` tag. If the `.card-title` and the `.card-subtitle` items are placed in a `.card-body` item, the card title and subtitle are aligned nicely.

{% example html %}
<div class="card">
  <div class="card-body">
    <h4 class="card-title">Card title</h4>
    <h5 class="h6 card-subtitle text-muted">Support card subtitle</h5>
  </div>
</div>
{% endexample %}

### Text

With `.card-text`, text can be added to the card. Text within `.card-text` can also be styled with the standard HTML tags.

`.card-text` will also remove the bottom margin from the **last child** in a section.

{% example html %}
<div class="card">
  <div class="card-body">
    <p class="card-text">Some sample text to build out the size of the card. Lorem ipsum dolor sit amet, consectetur.</p>
    <p class="card-text">Another portion of sample text that will have the bottom margin removed.</p>
  </div>
</div>
{% endexample %}

### Links

Links can placed next to each other with some spacing by adding `.card-link` to the `<a>` tags.

{% example html %}
<div class="card">
  <div class="card-body">
    <p class="card-text">Some sample text to build out the size of the card. Lorem ipsum dolor sit amet, consectetur.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
{% endexample %}

### Images

Cards include a few options for working with images. Choose from embedding an image in a card, appending "image caps" at either end of a card, or overlaying images with card content.

Images need to be wrapped with `.card-img` to prevent additional whitespace from appearing in some browsers, such as IE.

#### Standard Images

Images can help add some visual interest to your cards.

{% example html %}
<div class="card" style="max-width: 18rem;">
  <h4 class="card-header">Sample Card</h4>
  <div class="card-img">
    <img class="img-fluid" src="{{ site.baseurl }}/assets/img/test.gif" alt="Card image">
  </div>
  <div class="card-body">
    <p class="card-text">Some sample text to build out the size of the card. Lorem ipsum dolor sit amet, consectetur.</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </div>
</div>
{% endexample %}

{% example html %}
<div class="card" style="max-width: 18rem;">
  <div class="card-body">
    <h4 class="card-title">Card title</h4>
    <p class="card-text">This is a card with text and a nested image.</p>
    <div class="card-img mb-0_5">
      <img class="img-fluid" src="{{ site.baseurl }}/assets/img/test.gif" alt="Card image">
    </div>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </div>
</div>
{% endexample %}

#### Image Caps

Similar to headers and footers, cards can include top and bottom image caps.

Use `.card-img-top` to round over the top corners when placing an image at the top of a card.

{% example html %}
<div class="card" style="max-width: 18rem;">
  <div class="card-img card-img-top">
    <img class="img-fluid" src="{{ site.baseurl }}/assets/img/test.gif" alt="Card image cap">
  </div>
  <div class="card-body">
    <h4 class="card-title">Card title</h4>
    <p class="card-text">Some sample text to build out the size of the card. Lorem ipsum dolor sit amet, consectetur.</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </div>
</div>
{% endexample %}

Use `.card-img-bottom` to round over the bottom corners when placing an image at the bottom of a card.

{% example html %}
<div class="card" style="max-width: 18rem;">
  <div class="card-body">
    <h4 class="card-title">Card title</h4>
    <p class="card-text">Some sample text to build out the size of the card. Lorem ipsum dolor sit amet, consectetur.</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </div>
  <div class="card-img card-img-bottom">
    <img class="img-fluid" src="{{ site.baseurl }}/assets/img/test.gif" alt="Card image cap">
  </div>
</div>
{% endexample %}

#### Image Overlay

Turn an image into a card background and overlay your card's text. The use of `.card-img` will round over all corners of the image, and `.card-img-overlay` will allow content to overlay the image. Depending on the image, you may or may not need additional styles or utility classes.

{% example html %}
<div class="card text-white" style="max-width: 18rem;">
  <div class="card-img card-img-top card-img-bottom">
    <img class="img-fluid" data-src="holder.js/100px225/?text=Image background" alt="Card image">
  </div>
  <div class="card-img-overlay">
    <h4 class="card-title">Card title</h4>
    <p class="card-text">Some sample text to build out the size of the card. Lorem ipsum dolor sit amet, consectetur.</p>
    <p class="card-text"><small>Last updated 3 mins ago</small></p>
  </div>
</div>
{% endexample %}

### Lists

Create lists of content in a card with [`.list` component]({{ site.baseurl }}/components/lists/) and it's modifiers.

{% example html %}
<div class="card">
  <ul class="list list-spaced list-divided">
    <li class="list-item">List item</li>
    <li class="list-item">List item</li>
    <li class="list-item">List item</li>
  </ul>
</div>
{% endexample %}

{% example html %}
<div class="card">
  <h3 class="card-header">Sample Header</h3>
  <ul class="list list-spaced list-divided mb-0">
    <li class="list-item">List item</li>
    <li class="list-item">List item</li>
    <li class="list-item">List item</li>
  </ul>
  <div class="card-footer">Sample Footer</div>
</div>
{% endexample %}

### All Together

The multiple content types can be easily combined to create the card you need.

{% example html %}
<div class="card" style="max-width: 18rem;">
  <div class="card-img card-img-top">
    <img class="img-fluid" data-src="holder.js/100px150/?text=Image cap" alt="Card image cap">
  </div>
  <div class="card-body">
    <h4 class="card-title">Card title</h4>
    <p class="card-text">Some sample text to build out the size of the card. Lorem ipsum dolor sit amet, consectetur.</p>
  </div>
  <ul class="list list-spaced list-ruled mb-0">
    <li class="list-item">List item</li>
    <li class="list-item">List item</li>
    <li class="list-item">List item</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
{% endexample %}

### Header and Footer

Add an optional header and/or footer within a card.

{% example html %}
<div class="card">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h4 class="card-title">Special title treatment</h4>
    <p class="card-text">Some sample text to build out the size of the card. Lorem ipsum dolor sit amet, consectetur.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
{% endexample %}

Card headers can be styled by adding `.card-header` to `<h*>` elements.

{% example html %}
<div class="card">
  <h3 class="card-header">Featured</h3>
  <div class="card-body">
    <h4 class="card-title">Special title treatment</h4>
    <p class="card-text">Some sample text to build out the size of the card. Lorem ipsum dolor sit amet, consectetur.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
{% endexample %}

{% example html %}
<div class="card">
  <div class="card-header">
    Quote
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
    </blockquote>
  </div>
</div>
{% endexample %}

{% example html %}
<div class="card text-center">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h4 class="card-title">Special title treatment</h4>
    <p class="card-text">Some sample text to build out the size of the card. Lorem ipsum dolor sit amet, consectetur.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  <div class="card-footer text-muted">
    2 days ago
  </div>
</div>
{% endexample %}

## Sizing

Cards assume no specific `width` to start, so they'll be 100% wide unless otherwise stated.

Constrain the width of cards via grid classes or custom CSS.

### Grid Controlled

Using the grid, wrap cards in columns and rows as needed.

{% example html %}
<div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h3 class="card-title">Special title treatment</h3>
        <p class="card-text">Some sample text to build out the size of the card. Lorem ipsum dolor sit amet, consectetur.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h3 class="card-title">Special title treatment</h3>
        <p class="card-text">Some sample text to build out the size of the card. Lorem ipsum dolor sit amet, consectetur.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>
{% endexample %}

### Custom CSS

Use custom CSS in your stylesheets or as inline styles to set a width.

{% example html %}
<div class="card" style="max-width: 18rem;">
  <div class="card-body">
    <h3 class="card-title">Special title treatment</h3>
    <p class="card-text">Some sample text to build out the size of the card. Lorem ipsum dolor sit amet, consectetur.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
{% endexample %}

## Text Alignment

You can quickly change the text alignment of any card---in its entirety or specific parts---with our [text align classes]({{ site.baseurl }}/utilities/typography/#text-alignment).

{% example html %}
<div class="card" style="max-width: 18rem;">
  <div class="card-body">
    <h4 class="card-title">Special title treatment</h4>
    <p class="card-text">Some sample text to build out the size of the card. Lorem ipsum dolor sit amet, consectetur.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

<div class="card text-center" style="max-width: 18rem;">
  <div class="card-body">
    <h4 class="card-title">Special title treatment</h4>
    <p class="card-text">Some sample text to build out the size of the card. Lorem ipsum dolor sit amet, consectetur.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

<div class="card text-end" style="max-width: 18rem;">
  <div class="card-body">
    <h4 class="card-title">Special title treatment</h4>
    <p class="card-text">Some sample text to build out the size of the card. Lorem ipsum dolor sit amet, consectetur.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
{% endexample %}

## Navigation

Add navigation items within a card's header (or block) with Figuration's [navigation components]({{ site.baseurl}}//components/navs/).

{% example html %}
<div class="card text-center">
  <div class="card-header">
    <ul class="nav nav-tabs card-header-tabs">
      <li class="nav-item">
        <a href="#" class="nav-link active">Active</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link">Link</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link disabled" tabindex="-1">Disabled</a>
      </li>
    </ul>
  </div>
  <div class="card-body">
    <h4 class="card-title">Special title treatment</h4>
    <p class="card-text">Some sample text to build out the size of the card. Lorem ipsum dolor sit amet, consectetur.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
{% endexample %}

{% example html %}
<div class="card text-center">
  <div class="card-header">
    <ul class="nav nav-pills card-header-pills">
      <li class="nav-item">
        <a href="#" class="nav-link active">Active</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link">Link</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link disabled" tabindex="-1">Disabled</a>
      </li>
    </ul>
  </div>
  <div class="card-body">
    <h4 class="card-title">Special title treatment</h4>
    <p class="card-text">Some sample text to build out the size of the card. Lorem ipsum dolor sit amet, consectetur.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
{% endexample %}

## Styling Cards

Cards include various options for customizing their backgrounds, borders, and text color.

{% callout warning %}
Conveying Meaning to Assistive Technologies
{:.h5}

Please refer to the [Accessiblity notes about conveying meaning with color]({{ site.baseurl }}/get-started/accessibility/#conveying-meaning-with-color).
{% endcallout %}

### Background and Text

Use the [text and background color utilities]({{ site.baseurl }}/utilities/color/) to change the look of a card.

{% example html %}
<div class="card bg-primary text-light" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Primary card</h5>
    <h6 class="card-subtitle">Subtitle text</h6>
    <p class="card-text">Some sample text to build out the size of the card. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
</div>

<div class="card bg-secondary text-light" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Secondary card</h5>
    <h6 class="card-subtitle">Subtitle text</h6>
    <p class="card-text">Some sample text to build out the size of the card. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
</div>

<div class="card bg-success text-black" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Success card</h5>
    <h6 class="card-subtitle">Subtitle text</h6>
    <p class="card-text">Some sample text to build out the size of the card. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
</div>

<div class="card bg-info text-light" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Info card</h5>
    <h6 class="card-subtitle">Subtitle text</h6>
    <p class="card-text">Some sample text to build out the size of the card. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
</div>

<div class="card bg-warning text-body" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Warning card</h5>
    <h6 class="card-subtitle">Subtitle text</h6>
    <p class="card-text">Some sample text to build out the size of the card. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
</div>

<div class="card bg-danger text-light" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Danger card</h5>
    <h6 class="card-subtitle">Subtitle text</h6>
    <p class="card-text">Some sample text to build out the size of the card. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
</div>

<div class="card bg-light text-dark" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Light card</h5>
    <h6 class="card-subtitle">Subtitle text</h6>
    <p class="card-text">Some sample text to build out the size of the card. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
</div>

<div class="card bg-dark text-light" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Dark card</h5>
    <h6 class="card-subtitle">Subtitle text</h6>
    <p class="card-text">Some sample text to build out the size of the card. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
</div>
{% endexample %}

### Border and Content

Use the [border color utilities]({{ site.baseurl }}/utilities/color/#border) to change just the `border-color` of a card. Note that you can put `.text-{color}` classes on the parent `.card` or a subset of the card's contents as shown below.

{% example html %}
<div class="card border-primary" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body text-primary">
    <h5 class="card-title">Primary outline card</h5>
    <h6 class="card-subtitle">Subtitle text</h6>
    <p class="card-text">Some sample text to build out the size of the card. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
</div>

<div class="card border-secondary" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body text-secondary">
    <h5 class="card-title">Secondary outline card</h5>
    <h6 class="card-subtitle">Subtitle text</h6>
    <p class="card-text">Some sample text to build out the size of the card. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
</div>

<div class="card border-success" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body text-success-700">
    <h5 class="card-title">Success outline card</h5>
    <h6 class="card-subtitle">Subtitle text</h6>
    <p class="card-text">Some sample text to build out the size of the card. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
</div>

<div class="card border-info" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body text-info">
    <h5 class="card-title">Info outline card</h5>
    <h6 class="card-subtitle">Subtitle text</h6>
    <p class="card-text">Some sample text to build out the size of the card. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
</div>

<div class="card border-warning" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body text-warning-800">
    <h5 class="card-title">Warning outline card</h5>
    <h6 class="card-subtitle">Subtitle text</h6>
    <p class="card-text">Some sample text to build out the size of the card. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
</div>

<div class="card border-danger" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body text-danger">
    <h5 class="card-title">Danger outline card</h5>
    <h6 class="card-subtitle">Subtitle text</h6>
    <p class="card-text">Some sample text to build out the size of the card. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
</div>

<div class="card border-light" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Light outline card</h5>
    <h6 class="card-subtitle">Subtitle text</h6>
    <p class="card-text">Some sample text to build out the size of the card. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
</div>

<div class="card border-dark" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body text-dark">
    <h5 class="card-title">Dark outline card</h5>
    <h6 class="card-subtitle">Subtitle text</h6>
    <p class="card-text">Some sample text to build out the size of the card. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
</div>
{% endexample %}

### Header and Footer Variants

Recolor the header and footer sections of your cards by using the background context colors. **Darker colors require the use of `.card-inverse`.**

{% example html %}
<div class="card">
  <h3 class="card-header card-inverse bg-primary">Featured</h3>
  <div class="card-body">
    <h4 class="card-title">Special title treatment</h4>
    <p class="card-text">Some sample text to build out the size of the card. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  <div class="card-footer card-inverse bg-primary">
    Footer
  </div>
</div>
{% endexample %}

## Layout Options

In addition to styling the content within cards, Figuration includes a few options for laying out series of cards.

### Card Groups

Use card groups to render cards as a single, attached element with equal width and height columns. Card groups use `display: flex;` to achieve their uniform sizing.  Card groups are available with the class syntax of `.card-group{-breakpoint}`, such as `.card-group-md` to enable the group layout for `md` screens and above.

{% example html %}
<div class="card-group-sm">
  <div class="card">
    <div class="card-img card-img-top">
      <img class="img-fluid" data-src="holder.js/100px150/" alt="Card image cap">
    </div>
    <div class="card-body">
      <h4 class="card-title">Card title</h4>
      <p class="card-text">Some sample text to build out the size of the card. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <div class="card-img card-img-top">
      <img class="img-fluid" data-src="holder.js/100px150/" alt="Card image cap">
    </div>
    <div class="card-body">
      <h4 class="card-title">Card title</h4>
      <p class="card-text">Some sample text to build out the size of the card.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <div class="card-img card-img-top">
      <img class="img-fluid" data-src="holder.js/100px150/" alt="Card image cap">
    </div>
    <div class="card-body">
      <h4 class="card-title">Card title</h4>
      <p class="card-text">Some sample text to build out the size of the card. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
{% endexample %}

When using card groups with footers, they will automatically line up along the bottom edge of the card.

{% example html %}
<div class="card-group-sm">
  <div class="card">
    <div class="card-img card-img-top">
      <img class="img-fluid" data-src="holder.js/100px150/" alt="Card image cap">
    </div>
    <div class="card-body">
      <h4 class="card-title">Card title</h4>
      <p class="card-text">This is a card with text and an image.</p>
      <div class="card-img">
        <img class="img-fluid" src="{{ site.baseurl }}/assets/img/test.gif" alt="Card image">
      </div>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card">
    <div class="card-img card-img-top">
      <img class="img-fluid" data-src="holder.js/100px150/" alt="Card image cap">
    </div>
    <div class="card-body">
      <h4 class="card-title">Card title</h4>
      <p class="card-text">Some sample text to build out the size of the card. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card">
    <div class="card-img card-img-top">
      <img class="img-fluid" data-src="holder.js/100px150/" alt="Card image cap">
    </div>
    <div class="card-body">
      <h4 class="card-title">Card title</h4>
      <p class="card-text">Some sample text to build out the size of the card. This card has even longer content than the first to show that equal height action.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
</div>
{% endexample %}

### Card Decks

Need a set of equal width and height cards that aren't attached to one another? Use card decks, with the class syntax of `.card-deck{-breakpoint}`, such as `.card-deck-sm` to enable the deck layout for `sm` screens and above.

{% example html %}
<div class="card-deck-sm">
  <div class="card">
    <div class="card-img card-img-top">
      <img class="img-fluid" data-src="holder.js/100px150/" alt="Card image cap">
    </div>
    <div class="card-body">
      <h4 class="card-title">Card title</h4>
      <p class="card-text">Some sample text to build out the size of the card. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <div class="card-img card-img-top">
      <img class="img-fluid" data-src="holder.js/100px150/" alt="Card image cap">
    </div>
    <div class="card-body">
      <h4 class="card-title">Card title</h4>
      <p class="card-text">Some sample text to build out the size of the card.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <div class="card-img card-img-top">
      <img class="img-fluid" data-src="holder.js/100px150/" alt="Card image cap">
    </div>
    <div class="card-body">
      <h4 class="card-title">Card title</h4>
      <p class="card-text">Some sample text to build out the size of the card. Lorem ipsum dolor sit amet, consectetur adipiscing elit. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
{% endexample %}

Just like with card groups, card footers in decks will automatically line up.

{% example html %}
<div class="card-deck-sm">
  <div class="card">
    <div class="card-img card-img-top">
      <img class="img-fluid" data-src="holder.js/100px150/" alt="Card image cap">
    </div>
    <div class="card-body">
      <h4 class="card-title">Card title</h4>
      <p class="card-text">This is a card with text and an image.</p>
      <div class="card-img mb-0_5">
        <img class="img-fluid" src="{{ site.baseurl }}/assets/img/test.gif" alt="Card image">
      </div>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card">
    <div class="card-img card-img-top">
      <img class="img-fluid" data-src="holder.js/100px150/" alt="Card image cap">
    </div>
    <div class="card-body">
      <h4 class="card-title">Card title</h4>
      <p class="card-text">Some sample text to build out the size of the card. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card">
    <div class="card-img card-img-top">
      <img class="img-fluid" data-src="holder.js/100px150/" alt="Card image cap">
    </div>
    <div class="card-body">
      <h4 class="card-title">Card title</h4>
      <p class="card-text">Some sample text to build out the size of the card. This card has even longer content than the first to show that equal height action.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
</div>
{% endexample %}

#### Responsive Rows

Controlling the number of cards in a row, based on the screen width is also possible using `flex-basis`.  Here is an example a way to achieve 1-across on `xs` screens, 2-across on `sm` and `md` screens, and 4-across on `lg` and up.

**Heads Up!** In order for this to work, the width of the card deck gutter (margins) need to be accounted for when assigning the `width`.  We are using `width` and `flex-basis: auto;` due to [Flexbug #8](https://github.com/philipwalton/flexbugs#8-flex-basis-doesnt-support-calc).

{% highlight scss %}
<style>
.card-deck-col {
    flex-flow: row wrap;
    align-items: stretch;
    justify-content: flex-start;
    margin-right: -1rem;
    margin-bottom: 0;
    margin-left: -1rem;
}
.card-deck-col > .card {
    flex-basis: auto;
    width: calc(100% - 2rem);
    margin-right: 1rem;
    margin-bottom: 1rem;
    margin-left: 1rem;
}
@media (min-width: 35em) {
    .card-deck-col > .card {
        width: calc(50% - 2rem);
    }
}
@media (min-width: 62em) {
    .card-deck-col > .card {
       width: calc(25% - 2rem);
    }
}
</style>
{% endhighlight %}
{% example html %}
<div class="card-deck-sm card-deck-col">
    <div class="card">
        <div class="card-img card-img-top">
            <img class="img-fluid" data-src="holder.js/100px150/" alt="Card image cap">
        </div>
        <div class="card-body">
            <h4 class="card-title">Card title</h4>
            <p class="card-text">Some sample text to build out the size of the card. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
    </div>
    <div class="card">
        <div class="card-img card-img-top">
            <img class="img-fluid" data-src="holder.js/100px150/" alt="Card image cap">
        </div>
        <div class="card-body">
            <h4 class="card-title">Card title</h4>
            <p class="card-text">Some sample text to build out the size of the card. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
    </div>
    <div class="card">
        <div class="card-img card-img-top">
            <img class="img-fluid" data-src="holder.js/100px150/" alt="Card image cap">
        </div>
        <div class="card-body">
            <h4 class="card-title">Card title</h4>
            <p class="card-text">Some sample text to build out the size of the card. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
    </div>
    <div class="card">
        <div class="card-img card-img-top">
            <img class="img-fluid" data-src="holder.js/100px150/" alt="Card image cap">
        </div>
        <div class="card-body">
            <h4 class="card-title">Card title</h4>
            <p class="card-text">Some sample text to build out the size of the card. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
    </div>
</div>
{% endexample %}

### Card Columns

Cards can be organized into [Masonry](https://masonry.desandro.com/)-like columns with just CSS by wrapping them in `.card-columns`. Cards are ordered from top to bottom and left to right when wrapped in `.card-columns`. Card columns use the [`column-*` CSS properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Columns/Using_multi-column_layouts).

Responsive variants are available with the class syntax of `.card-columns{-breakpoint}`, such as `.card-columns-sm` to enable the columns layout for `sm` screens and above.

**Heads up!** Your mileage with card columns may vary. To prevent cards breaking across columns, we set them to `display: inline-table`, as `column-break-inside: avoid` isn't a fully supported option yet.

{% example html %}
<div class="card-columns-sm">
  <div class="card">
    <div class="card-img card-img-top">
      <img class="img-fluid" data-src="holder.js/100px150/" alt="Card image cap">
    </div>
    <div class="card-body">
      <h4 class="card-title">Card title that wraps to a new line</h4>
      <p class="card-text">Some sample text to build out the size of the card. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </div>
  <div class="card">
    <div class="card-body">
      <blockquote class="blockquote">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        <footer class="blockquote-footer">
          <small class="text-muted">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </small>
        </footer>
      </blockquote>
    </div>
  </div>
  <div class="card">
    <div class="card-img card-img-top">
      <img class="img-fluid" data-src="holder.js/100px160/" alt="Card image cap">
    </div>
    <div class="card-body">
      <h4 class="card-title">Card title</h4>
      <p class="card-text">Some sample text to build out the size of the card. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card card-inverse card-primary text-center">
    <div class="card-body">
      <blockquote class="blockquote text-light">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
        <footer class="blockquote-footer card-inverse">
          <small>
            Someone famous in <cite title="Source Title">Source Title</cite>
          </small>
        </footer>
      </blockquote>
    </div>
  </div>
  <div class="card text-center">
    <div class="card-body">
      <h4 class="card-title">Card title</h4>
      <p class="card-text">Some sample text to build out the size of the card. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <div class="card-img">
      <img class="img-fluid" data-src="holder.js/100px260/" alt="Card image">
    </div>
  </div>
  <div class="card text-end">
    <div class="card-body">
      <blockquote class="blockquote">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        <footer class="blockquote-footer">
          <small class="text-muted">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </small>
        </footer>
      </blockquote>
    </div>
  </div>
  <div class="card">
    <div class="card-body">
      <h4 class="card-title">Card title</h4>
      <p class="card-text">Some sample text to build out the size of the card. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
{% endexample %}

Card columns can also be extended and customized with some additional code. Shown below is an extension of the `.card-columns` class using Sass to generate a set of responsive tiers for changing the number of CSS columns.

{% highlight scss %}
.card-columns {
  @include media-breakpoint-only(lg) {
    column-count: 4;
  }
  @include media-breakpoint-only(xl) {
    column-count: 5;
  }
}
{% endhighlight %}

If you are using responsive variants of the card columns, you may need to include all variations, or a combination, of the responsive `.card-{breakpoint}-columns` classes, if it applies to your use-case.

{% highlight scss %}
.card-columns
.card-columns-sm
.card-columns-md
.card-columns-lg
.card-columns-xl {
  @include media-breakpoint-only(lg) {
    column-count: 4;
  }
  @include media-breakpoint-only(xl) {
    column-count: 5;
  }
}
{% endhighlight %}