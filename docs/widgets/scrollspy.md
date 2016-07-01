---
layout: docs
title: Scrollspy
subtitle: scrollspy.js
group: widgets
---

The Scrollspy widget is for automatically updating nav targets based on scroll position.

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Example

Scroll the area below the navbar and watch the active class change. The dropdown sub items will be highlighted as well.

<div class="cf-example">
    <nav id="navbar-example" class="navbar navbar-light bg-faded">
        <a class="navbar-brand" href="#">Navbar</a>
        <ul class="nav nav-pills">
            <li class="nav-item"><a href="#alpha" class="nav-link">Alpha</a></li>
            <li class="nav-item"><a href="#beta" class="nav-link">Beta</a></li>
            <li class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle" data-cfw="dropdown" data-cfw-dropdown-toggle="dropdownS">Dropdown</a>
                <ul data-cfw-dropdown-target="dropdownS">
                    <li><a href="#one" tabindex="-1">one</a></li>
                    <li><a href="#two" tabindex="-1">two</a></li>
                    <li class="divider"></li>
                    <li><a href="#three" tabindex="-1">three</a></li>
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


## Usage

### Requires Relative Positioning

No matter the implementation method, scrollspy requires the use of `position: relative;` on the element you're spying on. In most cases this is the `<body>`. When scrollspying on elements other than the `<body>`, be sure to have a `height` set and `overflow-y: scroll;` applied.

{% callout danger %}
#### Resolvable ID targets required

Navbar links must have resolvable id targets. For example, a `<a href="#home">home</a>` must correspond to something in the DOM like `<div id="home"></div>`.
{% endcallout %}

{% callout info %}
#### Non-`:visible` target elements ignored

Target elements that are not [`:visible` according to jQuery](https://api.jquery.com/visible-selector/) will be ignored and their corresponding nav items will never be highlighted.
{% endcallout %}

### Via Data Attributes

To easily add scrollspy behavior to your topbar navigation, add `data-cfw="scrollspy"` to the element you want to spy on (most typically this would be the `<body>`). Then add the `data-cfw-scrollspy-target` attribute with the ID or class of the parent element of any `.nav` component.

{% highlight css %}
body {
    position: relative;
}
{% endhighlight%}

{% highlight html %}
<body data-cfw="scroll" data-cfw-scrollspy-target="#navbar-example">
  ...
  <nav id="navbar-example">
    <ul class="nav navbar-nav">
        ...
    </ul>
    </nav>
  ...
</body>
{% endhighlight%}

### Via JavaScript

After adding `position: relative;` in your CSS, call the scrollspy via JavaScript:

{% highlight js %}
$('body').CFW_Scrollspy({ target: '#navbar-example' });
{% endhighlight%}

### Options

Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-cfw-scrollspy`, as in `data-cfw-scrollspy-target=".navbar-example"`.

<div class="table-responsive">
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
            <td>offset</td>
            <td>integer</td>
            <td>10</td>
            <td>Pixels to offset from top when calculating position of scroll.</td>
        </tr>
    </tbody>
    </table>
</div> <!-- /.table-responsive -->

### Methods

#### `.CFW_Scrollspy(options)`
{:.no_toc}

Activates scrollspy widget. Accepts an optional options `object`.

{% highlight js %}
$('#myScrollspy').CFW_Scrollspy({
    target: '.navbar-example'
});
{% endhighlight %}

#### `.CFW_Scrollspy('refresh')`
{:.no_toc}

When using scrollspy in conjunction with adding or removing of elements from the DOM, you'll need to call the refresh method like so:

{% highlight js %}
$('[data-cfw="scrollspy"]').each(function() {
    var $spy = $(this).CFW_Scrollspy('refresh');
});
{% endhighlight %}

### Events

Event callbacks happen on the or designated scrolling region (for `init.cfw.scrollspy`) or the activated navigation element (for `activate.cfw.scrollspy`).

<div class="table-responsive">
    <table class="table table-bordered table-striped">
    <thead>
        <tr>
            <th style="width: 150px;">Event Type</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>init.cfw.scrollspy</td>
            <td>This event fires after the scrollspy is initialized.</td>
        </tr>
        <tr>
            <td>activate.cfw.scrollspy</td>
            <td>This event fires whenever a new item becomes activated by the scrollspy.</td>
        </tr>
    </tbody>
    </table>
</div> <!-- /.table-responsive -->

{% highlight js %}
$('#myScrollspy').on('activate.cfw.scrollspy', function () {
  // do something...
});
{% endhighlight%}

