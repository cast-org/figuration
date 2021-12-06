---
layout: doc
title: Scrollspy
subtitle: scrollspy.js
description: The Scrollspy widget is for automatically updating nav targets based on scroll position.
group: widgets
toc: true
---

## How It Works

- Scrollspy requires the use of a `ul`, `ol`, or `nav` as the target element containing the subset of navigation links.
- Navigation links must have resolvable id targets. For example, a `<a href="#home">home</a>` must correspond to something in the DOM like `<div id="home"></div>`.
  - In those, hopefully rare, cases where you do not need a working link, use a `data-cfw-scrollspy-target` attribute on the indicator item. For example, using the attribute `data-cfw-scrollspy-target="#home"` would a correspond to the DOM target `<div id="home"></div>`.
- Scrollspy requires the use of `position: relative;` on the element you're spying on, typically the `<body>`.
- If you are making a scrollable container on elements (other than the `<body>`), be sure to have a `height` set and `overflow-y: scroll;` applied.
- Non-`:visible` target elements will be ignored. Target elements that are not [`:visible` according to jQuery](https://api.jquery.com/visible-selector/) will be ignored and their corresponding nav items will never be highlighted.
- For keyboard accessibility, scrollable containers (other than the `<body>`) will have a `tabindex="0"` attribute automatically added.

When successfully implemented, your nav or list group will update accordingly, moving the `.active` class from one item to the next based on their associated targets.

## Examples

### Navbar

Scroll the area below the navbar and watch the active class change. The dropdown sub items will be highlighted as well.

<div class="cf-example">
  <nav id="navbar-example" class="navbar navbar-light bg-light">
    <a class="navbar-brand" href="#">Navbar</a>
    <ul class="nav nav-pills">
      <li class="nav-item"><a href="#alpha" class="nav-link">Alpha</a></li>
      <li class="nav-item"><a href="#beta" class="nav-link">Beta</a></li>
      <li class="nav-item dropdown">
        <a href="#" class="nav-link" data-cfw="dropdown">Dropdown <span class="caret"></span></a>
        <ul class="dropdown-menu">
          <li><a href="#one">one</a></li>
          <li><a href="#two">two</a></li>
          <li class="dropdown-divider"></li>
          <li><a href="#three">three</a></li>
        </ul>
      </li>
    </ul>
  </nav>
  <div data-cfw="scrollspy" data-cfw-scrollspy-target="#navbar-example" data-cfw-scrollspy-offset="0" class="cf-example-scrollspy">
    <h4 id="alpha">Alpha</h4>
    <p>Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat.</p>
    <h4 id="beta">Beta</h4>
    <p>Veniam marfa mustache skateboard, adipisicing fugiat velit pitchfork beard. Freegan beard aliqua cupidatat mcsweeney's vero. Cupidatat four loko nisi, ea helvetica nulla carles. Tattooed cosby sweater food truck, mcsweeney's quis non freegan vinyl. Lo-fi wes anderson +1 sartorial. Carles non aesthetic exercitation quis gentrify. Brooklyn adipisicing craft beer vice keytar deserunt.</p>
    <h4 id="one">one</h4>
    <p>Occaecat commodo aliqua delectus. Fap craft beer deserunt skateboard ea. Lomo bicycle rights adipisicing banh mi, velit ea sunt next level locavore single-origin coffee in magna veniam. High life id vinyl, echo park consequat quis aliquip banh mi pitchfork. Vero VHS est adipisicing. Consectetur nisi DIY minim messenger bag. Cred ex in, sustainable delectus consectetur fanny pack iphone.</p>
    <h4 id="two">two</h4>
    <p>In incididunt echo park, officia deserunt mcsweeney's proident master cleanse thundercats sapiente veniam. Excepteur VHS elit, proident shoreditch +1 biodiesel laborum craft beer. Single-origin coffee wayfarers irure four loko, cupidatat terry richardson master cleanse. Assumenda you probably haven't heard of them art party fanny pack, tattooed nulla cardigan tempor ad. Proident wolf nesciunt sartorial keffiyeh eu banh mi sustainable. Elit wolf voluptate, lo-fi ea portland before they sold out four loko. Locavore enim nostrud mlkshk brooklyn nesciunt.</p>
    <h4 id="three">three</h4>
    <p>Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat.</p>
    <p>Keytar twee blog, culpa messenger bag marfa whatever delectus food truck. Sapiente synth id assumenda. Locavore sed helvetica cliche irony, thundercats you probably haven't heard of them consequat hoodie gluten-free lo-fi fap aliquip. Labore elit placeat before they sold out, terry richardson proident brunch nesciunt quis cosby sweater pariatur keffiyeh ut helvetica artisan. Cardigan craft beer seitan readymade velit. VHS chambray laboris tempor veniam. Anim mollit minim commodo ullamco thundercats.</p>
  </div>
</div> <!-- /.cf-example -->

{% capture highlight %}
<nav id="navbar-example" class="navbar navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <ul class="nav nav-pills">
    <li class="nav-item"><a href="#alpha" class="nav-link">Alpha</a></li>
    <li class="nav-item"><a href="#beta" class="nav-link">Beta</a></li>
    <li class="nav-item dropdown">
      <a href="#" class="nav-link" data-cfw="dropdown">Dropdown <span class="caret"></span></a>
      <ul class="dropdown-menu">
        <li><a href="#one">one</a></li>
        <li><a href="#two">two</a></li>
        <li class="dropdown-divider"></li>
        <li><a href="#three">three</a></li>
      </ul>
    </li>
  </ul>
</nav>
<div data-cfw="scrollspy" data-cfw-scrollspy-target="#navbar-example" data-cfw-scrollspy-offset="0">
  <h4 id="alpha">Alpha</h4>
  <p>...</p>
  <h4 id="beta">Beta</h4>
  <p>...</p>
  <h4 id="one">one</h4>
  <p>...</p>
  <h4 id="two">two</h4>
  <p>...</p>
  <h4 id="three">three</h4>
  <p>...</p>
</div>
{% endcapture %}
{% renderHighlight highlight, "html" %}

### Sub-navigation

The Scrollspy widget also works with nested `.nav`s. If a sub-`.nav` is `.active`, it's parents will also be `.active`. Scroll the area next to the navbar and watch the active class change.

<div class="cf-example">
  <div class="row">
    <div class="col-4">
      <nav id="subnav-example" class="navbar navbar-light bg-light flex-column flex-items-start">
        <a class="navbar-brand" href="#">Navbar</a>
        <nav class="nav nav-pills flex-column">
          <a class="nav-link" href="#item-1">Item 1</a>
          <nav class="nav nav-pills flex-column">
            <a class="nav-link ms-1 my-0_25" href="#item-1-1">Item 1-1</a>
            <a class="nav-link ms-1 my-0_25" href="#item-1-2">Item 1-2</a>
          </nav>
          <a class="nav-link" href="#item-2">Item 2</a>
          <a class="nav-link" href="#item-3">Item 3</a>
          <nav class="nav nav-pills flex-column">
            <a class="nav-link ms-1 my-0_25" href="#item-3-1">Item 3-1</a>
            <a class="nav-link ms-1 my-0_25" href="#item-3-2">Item 3-2</a>
          </nav>
         </nav>
      </nav>
    </div>
    <div class="col-8">
      <div data-cfw="scrollspy" data-cfw-scrollspy-target="#subnav-example" data-cfw-scrollspy-offset="0" class="cf-example-scrollspy2">
        <h4 id="item-1">Item 1</h4>
        <p>Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat.</p>
        <h5 id="item-1-1">Item 1-1</h5>
        <p>Veniam marfa mustache skateboard, adipisicing fugiat velit pitchfork beard. Freegan beard aliqua cupidatat mcsweeney's vero. Cupidatat four loko nisi, ea helvetica nulla carles. Tattooed cosby sweater food truck, mcsweeney's quis non freegan vinyl. Lo-fi wes anderson +1 sartorial. Carles non aesthetic exercitation quis gentrify. Brooklyn adipisicing craft beer vice keytar deserunt.</p>
        <h5 id="item-1-2">Item 1-2</h5>
        <p>Occaecat commodo aliqua delectus. Fap craft beer deserunt skateboard ea. Lomo bicycle rights adipisicing banh mi, velit ea sunt next level locavore single-origin coffee in magna veniam. High life id vinyl, echo park consequat quis aliquip banh mi pitchfork. Vero VHS est adipisicing. Consectetur nisi DIY minim messenger bag. Cred ex in, sustainable delectus consectetur fanny pack iphone.</p>
        <h4 id="item-2">Item 2</h4>
        <p>Veniam marfa mustache skateboard, adipisicing fugiat velit pitchfork beard. Freegan beard aliqua cupidatat mcsweeney's vero. Cupidatat four loko nisi, ea helvetica nulla carles. Tattooed cosby sweater food truck, mcsweeney's quis non freegan vinyl. Lo-fi wes anderson +1 sartorial. Carles non aesthetic exercitation quis gentrify. Brooklyn adipisicing craft beer vice keytar deserunt.</p>
        <h4 id="item-3">Item 3</h4>
        <p>In incididunt echo park, officia deserunt mcsweeney's proident master cleanse thundercats sapiente veniam. Excepteur VHS elit, proident shoreditch +1 biodiesel laborum craft beer. Single-origin coffee wayfarers irure four loko, cupidatat terry richardson master cleanse. Assumenda you probably haven't heard of them art party fanny pack, tattooed nulla cardigan tempor ad. Proident wolf nesciunt sartorial keffiyeh eu banh mi sustainable. Elit wolf voluptate, lo-fi ea portland before they sold out four loko. Locavore enim nostrud mlkshk brooklyn nesciunt.</p>
        <h5 id="item-3-1">Item 3-1</h5>
        <p>Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat.</p>
        <h5 id="item-3-2">Item 3-2</h5>
        <p>Keytar twee blog, culpa messenger bag marfa whatever delectus food truck. Sapiente synth id assumenda. Locavore sed helvetica cliche irony, thundercats you probably haven't heard of them consequat hoodie gluten-free lo-fi fap aliquip. Labore elit placeat before they sold out, terry richardson proident brunch nesciunt quis cosby sweater pariatur keffiyeh ut helvetica artisan. Cardigan craft beer seitan readymade velit. VHS chambray laboris tempor veniam. Anim mollit minim commodo ullamco thundercats.</p>
      </div>
    </div>
  </div>
</div>

{% capture highlight %}
<div class="row">
  <div class="col-4">
    <nav id="subnav-example" class="navbar navbar-light bg-light flex-column flex-items-start">
      <a class="navbar-brand" href="#">Navbar</a>
      <nav class="nav nav-pills flex-column">
        <a class="nav-link" href="#item-1">Item 1</a>
        <nav class="nav nav-pills flex-column">
          <a class="nav-link ms-1 my-0_25" href="#item-1-1">Item 1-1</a>
          <a class="nav-link ms-1 my-0_25" href="#item-1-2">Item 1-2</a>
        </nav>
        <a class="nav-link" href="#item-2">Item 2</a>
        <a class="nav-link" href="#item-3">Item 3</a>
        <nav class="nav nav-pills flex-column">
          <a class="nav-link ms-1 my-0_25" href="#item-3-1">Item 3-1</a>
          <a class="nav-link ms-1 my-0_25" href="#item-3-2">Item 3-2</a>
        </nav>
      </nav>
    </nav>
  </div>
  <div class="col-8">
    <div data-cfw="scrollspy" data-cfw-scrollspy-target="#subnav-example" data-cfw-scrollspy-offset="0">
      <h4 id="item-1">Item 1</h4>
      <p>...</p>
      <h5 id="item-1-1">Item 1-1</h5>
      <p>...</p>
      <h5 id="item-1-2">Item 1-2</h5>
      <p>...</p>
      <h4 id="item-2">Item 2</h4>
      <p>...</p>
      <h4 id="item-3">Item 3</h4>
      <p>...</p>
      <h5 id="item-3-1">Item 3-1</h5>
      <p>...</p>
      <h5 id="item-3-2">Item 3-2</h5>
      <p>...</p>
    </div>
  </div>
</div>
{% endcapture %}
{% renderHighlight highlight, "html" %}

### Nested Options

By default parent items will be marked `active` when a descendant is `active`. However, you can choose to not mark the parents as `active` by setting the option `nested` to `false`.

<div class="cf-example">
  <div class="row">
    <div class="col-4">
      <nav id="nest-example" class="navbar navbar-light bg-light flex-column flex-items-start">
        <a class="navbar-brand" href="#">Navbar</a>
        <nav class="nav nav-pills flex-column">
          <a class="nav-link" href="#nest-1">Item 1</a>
          <nav class="nav nav-pills flex-column">
            <a class="nav-link ms-1 my-0_25" href="#nest-1-1">Item 1-1</a>
            <a class="nav-link ms-1 my-0_25" href="#nest-1-2">Item 1-2</a>
          </nav>
          <a class="nav-link" href="#nest-2">Item 2</a>
          <a class="nav-link" href="#nest-3">Item 3</a>
          <nav class="nav nav-pills flex-column">
            <a class="nav-link ms-1 my-0_25" href="#nest-3-1">Item 3-1</a>
            <a class="nav-link ms-1 my-0_25" href="#nest-3-2">Item 3-2</a>
          </nav>
         </nav>
      </nav>
    </div>
    <div class="col-8">
      <div data-cfw="scrollspy" data-cfw-scrollspy-target="#nest-example" data-cfw-scrollspy-offset="0" data-cfw-scrollspy-nested=false class="cf-example-scrollspy2">
        <h4 id="nest-1">Item 1</h4>
        <p>Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat.</p>
        <h5 id="nest-1-1">Item 1-1</h5>
        <p>Veniam marfa mustache skateboard, adipisicing fugiat velit pitchfork beard. Freegan beard aliqua cupidatat mcsweeney's vero. Cupidatat four loko nisi, ea helvetica nulla carles. Tattooed cosby sweater food truck, mcsweeney's quis non freegan vinyl. Lo-fi wes anderson +1 sartorial. Carles non aesthetic exercitation quis gentrify. Brooklyn adipisicing craft beer vice keytar deserunt.</p>
        <h5 id="nest-1-2">Item 1-2</h5>
        <p>Occaecat commodo aliqua delectus. Fap craft beer deserunt skateboard ea. Lomo bicycle rights adipisicing banh mi, velit ea sunt next level locavore single-origin coffee in magna veniam. High life id vinyl, echo park consequat quis aliquip banh mi pitchfork. Vero VHS est adipisicing. Consectetur nisi DIY minim messenger bag. Cred ex in, sustainable delectus consectetur fanny pack iphone.</p>
        <h4 id="nest-2">Item 2</h4>
        <p>Veniam marfa mustache skateboard, adipisicing fugiat velit pitchfork beard. Freegan beard aliqua cupidatat mcsweeney's vero. Cupidatat four loko nisi, ea helvetica nulla carles. Tattooed cosby sweater food truck, mcsweeney's quis non freegan vinyl. Lo-fi wes anderson +1 sartorial. Carles non aesthetic exercitation quis gentrify. Brooklyn adipisicing craft beer vice keytar deserunt.</p>
        <h4 id="nest-3">Item 3</h4>
        <p>In incididunt echo park, officia deserunt mcsweeney's proident master cleanse thundercats sapiente veniam. Excepteur VHS elit, proident shoreditch +1 biodiesel laborum craft beer. Single-origin coffee wayfarers irure four loko, cupidatat terry richardson master cleanse. Assumenda you probably haven't heard of them art party fanny pack, tattooed nulla cardigan tempor ad. Proident wolf nesciunt sartorial keffiyeh eu banh mi sustainable. Elit wolf voluptate, lo-fi ea portland before they sold out four loko. Locavore enim nostrud mlkshk brooklyn nesciunt.</p>
        <h5 id="nest-3-1">Item 3-1</h5>
        <p>Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat.</p>
        <h5 id="nest-3-2">Item 3-2</h5>
        <p>Keytar twee blog, culpa messenger bag marfa whatever delectus food truck. Sapiente synth id assumenda. Locavore sed helvetica cliche irony, thundercats you probably haven't heard of them consequat hoodie gluten-free lo-fi fap aliquip. Labore elit placeat before they sold out, terry richardson proident brunch nesciunt quis cosby sweater pariatur keffiyeh ut helvetica artisan. Cardigan craft beer seitan readymade velit. VHS chambray laboris tempor veniam. Anim mollit minim commodo ullamco thundercats.</p>
      </div>
    </div>
  </div>
</div>
{% capture highlight %}
<div data-cfw="scrollspy" data-cfw-scrollspy-target="#someID" data-cfw-scrollspy-nested=false>
    ...
</div>
{% endcapture %}
{% renderHighlight highlight, "html" %}

Setting the `nested` option to `'dropdown'` will also not mark the parents as `active`, but will mark the dropdown toggle item `active` if its children become active.

<div class="cf-example">
  <div class="row">
    <div class="col-4">
      <nav id="nestdrop-example" class="navbar navbar-light bg-light flex-column flex-items-start">
        <a class="navbar-brand" href="#">Navbar</a>
        <nav class="nav nav-pills flex-column">
          <a class="nav-link" href="#nestdrop-main">Main Title</a>
          <nav class="nav nav-pills flex-column">
            <a class="nav-link ms-1 my-0_25" href="#nestdrop-alpha">Alpha</a>
            <a class="nav-link ms-1 my-0_25" href="#nestdrop-beta">Beta</a>
          </nav>
          <div class="dropdown">
            <a href="#" class="nav-link" data-cfw="dropdown">Dropdown <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="#nestdrop-one">one</a></li>
              <li><a href="#nestdrop-two">two</a></li>
              <li class="dropdown-divider"></li>
              <li><a href="#nestdrop-three">three</a></li>
            </ul>
          </div>
         </nav>
      </nav>
    </div>
    <div class="col-8">
      <div data-cfw="scrollspy" data-cfw-scrollspy-target="#nestdrop-example" data-cfw-scrollspy-offset="0" data-cfw-scrollspy-nested="dropdown" class="cf-example-scrollspy">
        <h4 id="nestdrop-main">Main Title</h4>
        <h5 id="nestdrop-alpha">Alpha</h5>
        <p>Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat.</p>
        <h5 id="nestdrop-beta">Beta</h5>
        <p>Veniam marfa mustache skateboard, adipisicing fugiat velit pitchfork beard. Freegan beard aliqua cupidatat mcsweeney's vero. Cupidatat four loko nisi, ea helvetica nulla carles. Tattooed cosby sweater food truck, mcsweeney's quis non freegan vinyl. Lo-fi wes anderson +1 sartorial. Carles non aesthetic exercitation quis gentrify. Brooklyn adipisicing craft beer vice keytar deserunt.</p>
        <h5 id="nestdrop-one">one</h5>
        <p>Occaecat commodo aliqua delectus. Fap craft beer deserunt skateboard ea. Lomo bicycle rights adipisicing banh mi, velit ea sunt next level locavore single-origin coffee in magna veniam. High life id vinyl, echo park consequat quis aliquip banh mi pitchfork. Vero VHS est adipisicing. Consectetur nisi DIY minim messenger bag. Cred ex in, sustainable delectus consectetur fanny pack iphone.</p>
        <h5 id="nestdrop-two">two</h5>
        <p>In incididunt echo park, officia deserunt mcsweeney's proident master cleanse thundercats sapiente veniam. Excepteur VHS elit, proident shoreditch +1 biodiesel laborum craft beer. Single-origin coffee wayfarers irure four loko, cupidatat terry richardson master cleanse. Assumenda you probably haven't heard of them art party fanny pack, tattooed nulla cardigan tempor ad. Proident wolf nesciunt sartorial keffiyeh eu banh mi sustainable. Elit wolf voluptate, lo-fi ea portland before they sold out four loko. Locavore enim nostrud mlkshk brooklyn nesciunt.</p>
        <h5 id="nestdrop-three">three</h5>
        <p>Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat.</p>
        <p>Keytar twee blog, culpa messenger bag marfa whatever delectus food truck. Sapiente synth id assumenda. Locavore sed helvetica cliche irony, thundercats you probably haven't heard of them consequat hoodie gluten-free lo-fi fap aliquip. Labore elit placeat before they sold out, terry richardson proident brunch nesciunt quis cosby sweater pariatur keffiyeh ut helvetica artisan. Cardigan craft beer seitan readymade velit. VHS chambray laboris tempor veniam. Anim mollit minim commodo ullamco thundercats.</p>
      </div>
    </div>
  </div>
</div>
{% capture highlight %}
<div data-cfw="scrollspy" data-cfw-scrollspy-target="#someID" data-cfw-scrollspy-nested='dropdown'>
    ...
</div>
{% endcapture %}
{% renderHighlight highlight, "html" %}

### List

The Scrollspy widget can also work with a `.list`. Scroll the area next to the list group and watch the active class change.

<div class="cf-example">
  <div class="row">
    <div class="col-4">
      <nav id="list-example" class="list list-spaced list-ruled">
        <a class="list-item list-item-action" href="#list-1">Item 1</a>
        <a class="list-item list-item-action" href="#list-2">Item2</a>
        <a class="list-item list-item-action" href="#list-3">Item 3</a>
        <a class="list-item list-item-action" href="#list-4">Item 4</a>
      </nav>
    </div>
    <div class="col-8">
      <div data-cfw="scrollspy" data-cfw-scrollspy-target="#list-example" data-cfw-scrollspy-offset="0" class="cf-example-scrollspy">
      <h4 id="list-1">Item 1</h4>
      <p>Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat.</p>
      <h4 id="list-2">Item 2</h4>
      <p>Veniam marfa mustache skateboard, adipisicing fugiat velit pitchfork beard. Freegan beard aliqua cupidatat mcsweeney's vero. Cupidatat four loko nisi, ea helvetica nulla carles. Tattooed cosby sweater food truck, mcsweeney's quis non freegan vinyl. Lo-fi wes anderson +1 sartorial. Carles non aesthetic exercitation quis gentrify. Brooklyn adipisicing craft beer vice keytar deserunt.</p>
      <h4 id="list-3">Item 3</h4>
      <p>Occaecat commodo aliqua delectus. Fap craft beer deserunt skateboard ea. Lomo bicycle rights adipisicing banh mi, velit ea sunt next level locavore single-origin coffee in magna veniam. High life id vinyl, echo park consequat quis aliquip banh mi pitchfork. Vero VHS est adipisicing. Consectetur nisi DIY minim messenger bag. Cred ex in, sustainable delectus consectetur fanny pack iphone.</p>
      <h4 id="list-4">Item 4</h4>
      <p>In incididunt echo park, officia deserunt mcsweeney's proident master cleanse thundercats sapiente veniam. Excepteur VHS elit, proident shoreditch +1 biodiesel laborum craft beer. Single-origin coffee wayfarers irure four loko, cupidatat terry richardson master cleanse. Assumenda you probably haven't heard of them art party fanny pack, tattooed nulla cardigan tempor ad. Proident wolf nesciunt sartorial keffiyeh eu banh mi sustainable. Elit wolf voluptate, lo-fi ea portland before they sold out four loko. Locavore enim nostrud mlkshk brooklyn nesciunt.</p>
      <p>Keytar twee blog, culpa messenger bag marfa whatever delectus food truck. Sapiente synth id assumenda. Locavore sed helvetica cliche irony, thundercats you probably haven't heard of them consequat hoodie gluten-free lo-fi fap aliquip. Labore elit placeat before they sold out, terry richardson proident brunch nesciunt quis cosby sweater pariatur keffiyeh ut helvetica artisan. Cardigan craft beer seitan readymade velit. VHS chambray laboris tempor veniam. Anim mollit minim commodo ullamco thundercats.</p>
      </div>
    </div>
  </div>
</div>

{% capture highlight %}
<div class="row">
  <div class="col-4">
    <nav id="list-example" class="list list-spaced list-ruled">
      <a class="list-item list-item-action" href="#list-1">Item 1</a>
      <a class="list-item list-item-action" href="#list-2">Item2</a>
      <a class="list-item list-item-action" href="#list-3">Item 3</a>
      <a class="list-item list-item-action" href="#list-4">Item 4</a>
    </nav>
  </div>
  <div class="col-8">
    <div data-cfw="scrollspy" data-cfw-scrollspy-target="#list-example" data-cfw-scrollspy-offset="0">
      <h4 id="list-1">Item 1</h4>
      <p>...</p>
      <h4 id="list-2">Item 2</h4>
      <p>...</p>
      <h4 id="list-3">Item 3</h4>
      <p>...</p>
      <h4 id="list-4">Item 4</h4>
      <p>...</p>
    </div>
  </div>
</div>
{% endcapture %}
{% renderHighlight highlight, "html" %}

## Usage

### Via Data Attributes

To easily add scrollspy behavior to a navigation section, add `data-cfw="scrollspy"` to the element you want to spy on (most typically this would be the `<body>`). Then add the `data-cfw-scrollspy-target` attribute with the ID, or other selector, for the target element containing the subset of navigation links.

{% capture highlight %}
body {
  position: relative;
}
{% endcapture %}
{% renderHighlight highlight, "css" %}

{% capture highlight %}
<body data-cfw="scrollspy" data-cfw-scrollspy-target="#navbar-example">
  ...
  <nav id="navbar-example">
    <ul class="navbar-nav">
      ...
    </ul>
    </nav>
  ...
</body>
{% endcapture %}
{% renderHighlight highlight, "html" %}

### Via JavaScript

After adding `position: relative;` in your CSS, call the scrollspy via JavaScript:

{% capture highlight %}
$('body').CFW_Scrollspy({ target: '#navbar-example' });
{% endcapture %}
{% renderHighlight highlight, "js" %}

### Options

Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-cfw-scrollspy`, as in `data-cfw-scrollspy-target="#navbar-example"`.

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
        <td><code>target</code></td>
        <td>string</td>
        <td><code>null</code></td>
        <td>The selector for the target container.</td>
      </tr>
      <tr>
        <td><code>offset</code></td>
        <td>integer</td>
        <td><code>10</code></td>
        <td>Pixels to offset from top when calculating position of scroll.</td>
      </tr>
      <tr>
        <td><code>nested</code></td>
        <td>boolean | string</td>
        <td><code>true</code></td>
        <td>
          Available options are <code>true</code> (default), <code>false</code>, or <code>'dropdown'</code>.
          <ul class="mb-0">
            <li><code>false</code>: Disables the active marker being added to parent navigation items.</li>
            <li><code>'dropdown'</code> Disables the active marker being added to parent navigation items, unless the parent is a dropdown toggle.</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td><code>throttle</code></td>
        <td>integer</td>
        <td><code>100</code></td>
        <td>Timeout rate (milliseconds) for the throttle function helps to decrease function calls through scroll event.</td>
      </tr>
    </tbody>
  </table>
</div>

{% capture highlight %}
$('#myScrollspy').CFW_Scrollspy({
  target: '#navbar-example'
});
{% endcapture %}
{% renderHighlight highlight, "js" %}

### Methods

Methods calls should be made on the scrollspy element.

<div class="table-scroll">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th style="width: 150px;">Method Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>refresh</code></td>
        <td>Update the scrollspy active indicator status.</td>
      </tr>
      <tr>
        <td><code>dispose</code></td>
        <td>Removes the associated event listener for the given scrollspy element, leaving the target navigation in its current state.</td>
      </tr>
    </tbody>
  </table>
</div>

When using scrollspy in conjunction with adding or removing elements from the DOM, it may be useful to call the refresh method like so:

{% capture highlight %}
$('[data-cfw="scrollspy"]').each(function() {
  $(this).CFW_Scrollspy('refresh');
});
{% endcapture %}
{% renderHighlight highlight, "js" %}

### Events

Event callbacks happen on the or designated scrolling region (for `init.cfw.scrollspy`) or the activated navigation element (for `activate.cfw.scrollspy`).

<div class="table-scroll">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th style="width: 150px;">Event Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>init.cfw.scrollspy</code></td>
        <td>This event fires after the scrollspy is initialized.</td>
      </tr>
      <tr>
        <td><code>activate.cfw.scrollspy</code></td>
        <td>This event fires whenever a new item becomes activated by the scrollspy.</td>
      </tr>
    </tbody>
  </table>
</div>

{% capture highlight %}
$('#myScrollspy').on('activate.cfw.scrollspy', function() {
  // do something...
});
{% endcapture %}
{% renderHighlight highlight, "js" %}

