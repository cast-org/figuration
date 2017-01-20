---
layout: docs
title: Cards
group: components
---

A **card** is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.

If you're familiar with Bootstrap v3, cards replace their old panels, wells, and thumbnails. Similar functionality to those components is available as modifier classes for cards.

Cards have some basic support for both a `block` style layout, along with both the opt-in flexbox and [full flexbox]({{ site.baseurl }}/layout/flexbox#full-flexbox-mode) modes.  To use the opt-in method, simply add a `.card-flex` class to the `.card` element.

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Example

Cards require a small amount of markup and classes to provide you with as much control as possible. These classes and markup are flexible though and can typically be remixed and extended with ease. For example, if your card has no flush content like images, feel free to put the `.card-block` class on the `.card` element to consolidate your markup.

Below is an example of a basic card with mixed content and a fixed width. Cards have no fixed width to start, so they'll naturally fill the full width of its parent element.

{% example html %}
<div class="card" style="width: 20rem;">
  <img class="card-img-top img-responsive" data-src="holder.js/100px180/" alt="Card image cap">
  <div class="card-block">
    <h4 class="card-title">Card title</h4>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
{% endexample %}

## Content Types

Cards support a wide variety of content, including images, text, list groups, links, and more. Below are examples of what's supported.

### Blocks

A basic building block of a card is the `.card-block`. Use it whenever you need a padded section within a card.

{% example html %}
<div class="card">
  <div class="card-block">
    This is some text within a card block.
  </div>
</div>
{% endexample %}

### Titles

Card titles and subtitles are used by adding `.card-title` or `.card-subtitle` to a `<h*>` tag. If the `.card-title` and the `.card-subtitle` items are placed in a `.card-block` item, the card title and subtitle are aligned nicely.

{% example html %}
<div class="card">
  <div class="card-block">
    <h4 class="card-title">Card title</h4>
    <h5 class="h6 card-subtitle text-muted">Support card subtitle</h5>
  </div>
</div>
{% endexample %}

### Text

With `.card-text`, text can be added to the card. Text within `.card-text` can also be styled with the standard HTML tags.

`.card-text` will also remove the bottom margin from the ***last child*** in a section.

{% example html %}
<div class="card">
  <div class="card-block">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <p class="card-text">Another portion of example text that will have the bottom margin removed.</p>
  </div>
</div>
{% endexample %}

### Links

Links can placed next to each other with some spacing by adding `.card-link` to the `<a>` tags.

{% example html %}
<div class="card">
  <div class="card-block">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
{% endexample %}

### Images

`.card-img-top` places an image to the top of the card.

{% example html %}
<div class="card">
  <img class="card-img-top img-responsive" data-src="holder.js/100px180/?text=Image cap" alt="Card image cap">
  <div class="card-block">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
{% endexample %}

### List Group

Create lists of content in a card with a flush list group.

{% example html %}
<div class="card">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Vestibulum at eros</li>
  </ul>
</div>
{% endexample %}

### All Together

The multiple content types can be easily combined to create the card you need.

{% example html %}
<div class="card" style="width: 20rem;">
  <img class="card-img-top img-responsive" data-src="holder.js/100px180/?text=Image cap" alt="Card image cap">
  <div class="card-block">
    <h4 class="card-title">Card title</h4>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Vestibulum at eros</li>
  </ul>
  <div class="card-block">
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
  <div class="card-block">
    <h4 class="card-title">Special title treatment</h4>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
{% endexample %}

Card headers can be styled by adding `.card-header` to `<h*>` elements.

{% example html %}
<div class="card">
  <h3 class="card-header">Featured</h3>
  <div class="card-block">
    <h4 class="card-title">Special title treatment</h4>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
{% endexample %}

{% example html %}
<div class="card">
  <div class="card-header">
    Quote
  </div>
  <div class="card-block">
    <blockquote class="card-blockquote">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
    </blockquote>
  </div>
</div>
{% endexample %}

{% example html %}
<div class="card text-center">
  <div class="card-header">
    Featured
  </div>
  <div class="card-block">
    <h4 class="card-title">Special title treatment</h4>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
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
    <div class="card card-block">
      <h3 class="card-title">Special title treatment</h3>
      <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card card-block">
      <h3 class="card-title">Special title treatment</h3>
      <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</div>
{% endexample %}

### Custom CSS

Use custom CSS in your stylesheets or as inline styles to set a width.

{% example html %}
<div class="card card-block" style="width: 20rem;">
  <h3 class="card-title">Special title treatment</h3>
  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
{% endexample %}

## Text Alignment

You can quickly change the text alignment of any card---in its entirety or specific parts---with our [text align classes]({{ site.baseurl }}/utilities/typography/#text-alignment).

{% example html %}
<div class="card card-block">
  <h4 class="card-title">Special title treatment</h4>
  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>

<div class="card card-block text-center">
  <h4 class="card-title">Special title treatment</h4>
  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>

<div class="card card-block text-right">
  <h4 class="card-title">Special title treatment</h4>
  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
{% endexample %}

## Navigation

Add navigation items within a card's header (or block) with Figuration's [navigation components]({{ site.baseurl}}//components/navs/).

{% example html %}
<div class="card text-center">
  <div class="card-header">
    <ul class="nav nav-tabs card-header-tabs">
      <li class="nav-item">
        <a class="nav-link active" href="#">Active</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
  <div class="card-block">
    <h4 class="card-title">Special title treatment</h4>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
{% endexample %}

{% example html %}
<div class="card text-center">
  <div class="card-header">
    <ul class="nav nav-pills card-header-pills">
      <li class="nav-item">
        <a class="nav-link active" href="#">Active</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
  <div class="card-block">
    <h4 class="card-title">Special title treatment</h4>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
{% endexample %}

## Images

Cards include a few options for working with images. Choose from appending "image caps" at either end of a card, overlaying images with card content, or simply embedding the image in a card.

### Image Caps

Similar to headers and footers, cards include top and bottom image caps.

{% example html %}
<div class="card">
  <img class="card-img-top img-responsive" data-src="holder.js/100px180/" alt="Card image cap">
  <div class="card-block">
    <h4 class="card-title">Card title</h4>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </div>
</div>
<div class="card">
  <div class="card-block">
    <h4 class="card-title">Card title</h4>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </div>
  <img class="card-img-bottom img-responsive" data-src="holder.js/100px180/" alt="Card image cap">
</div>
{% endexample %}

### Image Overlays

Turn an image into a card background and overlay your card's text. Depending on the image, you may or may not need `.card-inverse` (see below).

{% example html %}
<div class="card card-inverse">
  <img class="card-img img-responsive" data-src="holder.js/100px270/#55595c:#373a3c/text:Card image" alt="Card image">
  <div class="card-img-overlay">
    <h4 class="card-title">Card title</h4>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </div>
</div>
{% endexample %}

## Styling Cards

Cards include various options for customizing their backgrounds, borders, and color.

### Inverted Text

By default, cards use dark text and assume a light background. You can reverse that by toggling the `color` of text within, as well as that of the card's subcomponents, with `.card-inverse`. Then, specify a dark `background-color` and `border-color` to go with it.

You can also use `.card-inverse` with the [contextual backgrounds variants](#background-variants).

{% example html %}
<div class="card card-inverse" style="background-color: #333; border-color: #333;">
  <div class="card-block">
    <h3 class="card-title">Special title treatment</h3>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

<div class="card card-inverse text-center" style="background-color: #333; border-color: #333;">
  <div class="card-header">
    Inverse card
  </div>
  <div class="card-block">
    <h3 class="card-title">Special title treatment</h3>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
  </div>
  <div class="card-footer">
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
{% endexample %}

### Background Variants

Cards include their own variant classes for quickly changing the `background-color` and `border-color` of a card. **Darker colors require the use of `.card-inverse`.**

{% example html %}
<div class="card card-inverse card-primary text-center">
  <div class="card-block">
    <blockquote class="card-blockquote">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
    </blockquote>
  </div>
</div>
<div class="card card-inverse card-success text-center">
  <div class="card-block">
    <blockquote class="card-blockquote">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
    </blockquote>
  </div>
</div>
<div class="card card-inverse card-info text-center">
  <div class="card-block">
    <blockquote class="card-blockquote">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
    </blockquote>
  </div>
</div>
<div class="card card-inverse card-warning text-center">
  <div class="card-block">
    <blockquote class="card-blockquote">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
    </blockquote>
  </div>
</div>
<div class="card card-inverse card-danger text-center">
  <div class="card-block">
    <blockquote class="card-blockquote">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
    </blockquote>
  </div>
</div>
{% endexample %}

{% capture callout-include %}{% include callout-warning-color-assistive-technologies.md %}{% endcapture %}
{{ callout-include | markdownify }}

### Outline Variants

In need of a colored card, but not the hefty background colors they bring? Replace the default modifier classes with the `.card-outline-*` ones to style just the `border-color` of a card.

{% example html %}
<div class="card card-outline-primary text-center">
  <div class="card-block">
    <blockquote class="card-blockquote">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
    </blockquote>
  </div>
</div>
<div class="card card-outline-secondary text-center">
  <div class="card-block">
    <blockquote class="card-blockquote">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
    </blockquote>
  </div>
</div>
<div class="card card-outline-success text-center">
  <div class="card-block">
    <blockquote class="card-blockquote">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
    </blockquote>
  </div>
</div>
<div class="card card-outline-info text-center">
  <div class="card-block">
    <blockquote class="card-blockquote">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
    </blockquote>
  </div>
</div>
<div class="card card-outline-warning text-center">
  <div class="card-block">
    <blockquote class="card-blockquote">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
    </blockquote>
  </div>
</div>
<div class="card card-outline-danger text-center">
  <div class="card-block">
    <blockquote class="card-blockquote">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
    </blockquote>
  </div>
</div>
{% endexample %}

### Header and Footer Variants

Recolor the header and footer sections of your cards by using the background context colors. **Darker colors require the use of `.card-inverse`.**

{% example html %}
<div class="card">
  <h3 class="card-header card-inverse bg-primary">Featured</h3>
  <div class="card-block">
    <h4 class="card-title">Special title treatment</h4>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  <div class="card-footer card-inverse bg-primary">
    Footer
  </div>
</div>
{% endexample %}

## Layout Options

In addition to styling the content within cards, Figuration includes a few options for laying out series of cards.

For the time being, these layout options only apply to small devices and above, so ***they are not yet fully responsive***.

### Card Groups

Use card groups to render cards as a single, attached element with equal width and height columns. Card groups use `display: table;` and `table-layout: fixed;` to achieve their uniform sizing.

Groups have support for both a `table` style layout, along with both the opt-in flexbox and [full flexbox]({{ site.baseurl }}/layout/flexbox#full-flexbox-mode) modes.  To use the opt-in method, simply add a `.card-group-flex` class to the `.card-group` element.

{% example html %}
<div class="card-group">
  <div class="card">
    <img class="card-img-top img-responsive" data-src="holder.js/100px180/" alt="Card image cap">
    <div class="card-block">
      <h4 class="card-title">Card title</h4>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top img-responsive" data-src="holder.js/100px180/" alt="Card image cap">
    <div class="card-block">
      <h4 class="card-title">Card title</h4>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top img-responsive" data-src="holder.js/100px180/" alt="Card image cap">
    <div class="card-block">
      <h4 class="card-title">Card title</h4>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
{% endexample %}

When in flexbox mode, or with `.card-group-flex` and `.card-flex`, using card groups with footers, their content will automatically line up.

{% example html %}
<div class="card-group card-group-flex">
  <div class="card card-flex">
    <img class="card-img-top img-responsive" data-src="holder.js/100px180/" alt="Card image cap">
    <div class="card-block">
      <h4 class="card-title">Card title</h4>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card card-flex">
    <img class="card-img-top img-responsive" data-src="holder.js/100px180/" alt="Card image cap">
    <div class="card-block">
      <h4 class="card-title">Card title</h4>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card card-flex">
    <img class="card-img-top img-responsive" data-src="holder.js/100px180/" alt="Card image cap">
    <div class="card-block">
      <h4 class="card-title">Card title</h4>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
</div>
{% endexample %}

### Card Decks

Need a set of equal width and height cards that aren't attached to one another? Use card decks. By default, card decks require two wrapping elements: `.card-deck-wrapper` and a `.card-deck`. We use table styles for the sizing and the gutters on `.card-deck`. The `.card-deck-wrapper` is used to negative margin out the `border-spacing` on the `.card-deck`.

Decks have support for both a `table` style layout, along with both the opt-in flexbox and [full flexbox]({{ site.baseurl }}/layout/flexbox#full-flexbox-mode) modes.  To use the opt-in method, simply add a `.card-deck-flex` class to the `.card-deck` element.

If you wish to have a card deck that matches the grid layout, you will need to use the `.card-deck-wrapper` for both the `table` and `flexbox` styles.  Note that unless you are using the full flexbox mode, there will be a horizontal scroll is used within a full body-width `.container-fluid` element.  This can be mitigated by using `overflow: hidden;` style on a wrapping container.

{% example html %}
<div class="card-deck-wrapper">
  <div class="card-deck">
    <div class="card">
      <img class="card-img-top img-responsive" data-src="holder.js/100px200/" alt="Card image cap">
      <div class="card-block">
        <h4 class="card-title">Card title</h4>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
    <div class="card">
      <img class="card-img-top img-responsive" data-src="holder.js/100px200/" alt="Card image cap">
      <div class="card-block">
        <h4 class="card-title">Card title</h4>
        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
    <div class="card">
      <img class="card-img-top img-responsive" data-src="holder.js/100px200/" alt="Card image cap">
      <div class="card-block">
        <h4 class="card-title">Card title</h4>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
{% endexample %}

When in flexbox mode, or with `.card-deck-flex` and `.card-flex`, using card decks with footers, their content will automatically line up.

{% example html %}
<div class="card-deck-wrapper">
  <div class="card-deck card-deck-flex">
    <div class="card card-flex">
      <img class="card-img-top img-responsive" data-src="holder.js/100px200/" alt="Card image cap">
      <div class="card-block">
        <h4 class="card-title">Card title</h4>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
    <div class="card card-flex">
      <img class="card-img-top img-responsive" data-src="holder.js/100px200/" alt="Card image cap">
      <div class="card-block">
        <h4 class="card-title">Card title</h4>
        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
    <div class="card card-flex">
      <img class="card-img-top img-responsive" data-src="holder.js/100px200/" alt="Card image cap">
      <div class="card-block">
        <h4 class="card-title">Card title</h4>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
</div>
{% endexample %}

### Card Columns

Cards can be organized into [Masonry](http://masonry.desandro.com)-like columns with just CSS by wrapping them in `.card-columns`. Cards are ordered from top to bottom and left to right when wrapped in `.card-columns`.

**Heads up!** This is **not available in IE9 and below** as they have no support for the [`column-*` CSS properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Columns/Using_multi-column_layouts).

{% example html %}
<div class="card-columns">
  <div class="card">
    <img class="card-img-top img-responsive" data-src="holder.js/100px160/" alt="Card image cap">
    <div class="card-block">
      <h4 class="card-title">Card title that wraps to a new line</h4>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
  </div>
  <div class="card card-block">
    <blockquote class="card-blockquote">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <footer>
        <small class="text-muted">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </div>
  <div class="card">
    <img class="card-img-top img-responsive" data-src="holder.js/100px160/" alt="Card image cap">
    <div class="card-block">
      <h4 class="card-title">Card title</h4>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card card-block card-inverse card-primary text-center">
    <blockquote class="card-blockquote">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
      <footer>
        <small>
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </div>
  <div class="card card-block text-center">
    <h4 class="card-title">Card title</h4>
    <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </div>
  <div class="card">
    <img class="card-img img-responsive" data-src="holder.js/100px260/" alt="Card image">
  </div>
  <div class="card card-block text-right">
    <blockquote class="card-blockquote">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <footer>
        <small class="text-muted">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </div>
  <div class="card card-block">
    <h4 class="card-title">Card title</h4>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </div>
</div>
{% endexample %}

Card columns can also be extended and customized with some additional code. Shown below is an extension of the `.card-columns` class using the same CSS we use---CSS columns--- to generate a set of responsive tiers for changing the number of columns.

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
