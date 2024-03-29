---
layout: doc
title: Navbar
description: Create a navigation header, with support for responsive layout, branding, navigation links and more.
group: components
toc: true
---

## Overview

The navbar is a simple wrapper for positioning branding, navigation, and other elements into a concise navigation header. It's easily extensible and, with the help of our [Collapse widget]({{ site.path }}/{{ version.docs }}/widgets/collapse/).

## Basics

Here's what you need to know before getting started with the navbar:

- Navbars require a wrapping `.navbar`, with `.navbar-expand{-sm|-md|-lg|-xl}` for responsive collapsing, and [color scheme](#color-schemes) classes.
- Navbars and their contents are fluid by default. Use [optional containers](#containers) to limit their horizontal width.
- Navbars and their contents are built with flexbox, providing easy alignment options via [flexbox utility]({{ site.path }}/{{ version.docs }}/utilities/flexbox/) and [margin utility]({{ site.path }}/{{ version.docs }}/utilities/spacing/) classes.
- Navbars are responsive by default, but you can easily modify them to change that. Responsive behavior depends on our [Collapse widget]({{ site.path }}/{{ version.docs }}/widgets/collapse/).
- Ensure accessibility by using a `<nav>` element or, if using a more generic element such as a `<div>`, add a `role="navigation"` to every navbar to explicitly identify it as a landmark region for users of assistive technologies.
- Indicate the current item by using `aria-current="page"` for the current page or `aria-current="true"` for the current item in a set.

## Responsive Behaviors

Navbars are built with responsive design in mind.  Using a `.navbar-expand{-sm|-md|-lg|-xl}` on the `.navbar` along with a `.navbar-toggle` control, and a `.navbar-collapse` container, you can determine when their content collapses behind a button. In combination with other utilities, you can easily choose when to show or hide particular elements.

The following list gives a quick run-down of how the breakpoints are utilized.

- No modifier, just `.navbar`, is never expanded
- `.navbar-expand` is always expanded
- `.navbar-expand-sm` expands at `sm` and up
- `.navbar-expand-md` expands at `md` and up
- `.navbar-expand-lg` expands at `lg` and up
- `.navbar-expand-xl` expands at `xl` and up

Please refer to how our [breakpoint nomenclature]({{ site.path }}/{{ version.docs }}/layout/breakpoints/#breakpoint-nomenclature) is used.

For the examples throughout this page, you will need to resize your browser window below/above the `lg` breakpoint to see the navbars switch between modes.

### Never Expand

The most basic example of a `.navbar` is one that never expands, no matter the screen width.

{% capture example %}
<nav class="navbar navbar-light bg-light">
  <button class="navbar-toggle" type="button" data-cfw="collapse" data-cfw-collapse-target="#navbarB0" aria-label="Toggle navigation">
    <span aria-hidden="true">&#8801;</span>
  </button>

  <a href="#" class="navbar-brand ms-0_5">Never Expand</a>
  <div class="navbar-collapse collapse" id="navbarB0">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a href="#" class="nav-link active" aria-current="page">Home</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
      </li>
    </ul>
  </div>
</nav>

<nav class="navbar navbar-light bg-light flex-between">
  <a href="#" class="navbar-brand">Never Expand</a>
  <button class="navbar-toggle" type="button" data-cfw="collapse" data-cfw-collapse-target="#navbarB1" aria-label="Toggle navigation">
    <span aria-hidden="true">&#8801;</span>
  </button>

  <div class="navbar-collapse collapse" id="navbarB1">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a href="#" class="nav-link active" aria-current="page">Home</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
      </li>
    </ul>
  </div>
</nav>
{% endcapture %}
{% renderExample example %}

### Responsive Expand

Be default, navbars start out collapsed, but when the target breakpoint is reached, the navbar will expand into a horizontal row of elements.

{% capture example %}
<nav class="navbar navbar-expand-lg navbar-light bg-light flex-between">
  <a href="#" class="navbar-brand">Navbar</a>
  <button class="navbar-toggle" type="button" data-cfw="collapse" data-cfw-collapse-target="#navbarR0" aria-label="Toggle navigation">
    <span aria-hidden="true">&#8801;</span>
  </button>

  <div class="navbar-collapse collapse" id="navbarR0">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a href="#" class="nav-link active" aria-current="page">Home</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
      </li>
    </ul>
    <form class="d-flex">
      <input class="form-control me-0_25" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-primary" type="submit">Search</button>
    </form>
  </div>
</nav>
{% endcapture %}
{% renderExample example %}

With the `.navbar-brand` in the collapsing area.

{% capture example %}
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggle" type="button" data-cfw="collapse" data-cfw-collapse-target="#navbarR1" aria-label="Toggle navigation">
    <span aria-hidden="true">&#8801;</span>
  </button>

  <div class="navbar-collapse collapse" id="navbarR1">
    <a href="#" class="navbar-brand">Navbar</a>
    <ul class="navbar-nav">
      <li class="nav-item">
        <a href="#" class="nav-link active" aria-current="page">Home</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
      </li>
    </ul>
    <form class="d-flex">
      <input class="form-control me-0_25" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-primary" type="submit">Search</button>
    </form>
  </div>
</nav>
{% endcapture %}
{% renderExample example %}

### Offcanvas

Add an offcanvas drawer with the [Offcanvas widget]({{ site.path }}/{{ version.docs }}/widgets/offcanvas/). The offcanvas styles are adjusted when contained within a navbar, and with use of `.navbar-expand-*` classes, you can create flexible and respsonsive navigation.

To create an offcanvas navbar that is always collapsed, simply leave off the `.navbar-expand-*` class from the `.navbar` element.

{% capture example %}
<nav class="navbar navbar-light bg-light">
  <div class="container-fluid flex-between">
    <a class="navbar-brand" href="#">Offcanvas navbar</a>
    <button class="navbar-toggle" type="button" data-cfw="offcanvas" data-cfw-offcanvas-target="#offcanvasNavbar" aria-label="Toggle navigation">
        <span aria-hidden="true">&#8801;</span>
    </button>
    <div id="offcanvasNavbar" class="offcanvas offcanvas-end">
      <div class="offcanvas-header">
        <h4 class="offcanvas-title h5">Offcanvas navbar example</h4>
        <button type="button" class="close" data-cfw-dismiss="offcanvas" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav flex-end flex-grow-1 pe-1">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link" href="#" role="button" data-cfw="dropdown">
              Dropdown
              <span class="caret" aria-hidden="true"></span>
            </a>
            <ul class="dropdown-menu mb-1">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex mt-1" role="search">
          <input class="form-control me-0_5" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-info" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav>
{% endcapture %}
{% renderExample example %}

To create an offcanvas navbar that expands into a normal navbar at a specific breakpoint like `lg`, use `.navbar-expand-lg`.

For a working example, please check out the [Offcanvas Navbar example]({{ site.path }}/{{ version.docs }}/examples/navbar-offcanvas/).

{% capture highlight %}
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid flex-between">
    <a class="navbar-brand" href="#">Offcanvas navbar</a>
    <button class="navbar-toggle" type="button" data-cfw="offcanvas" data-cfw-offcanvas-target="#offcanvasNavbar" aria-label="Toggle navigation">
        <span aria-hidden="true">&#8801;</span>
    </button>
    <div id="offcanvasNavbar" class="offcanvas offcanvas-end">
      ...
    </div>
  </div>
</nav>
{% endcapture %}
{% renderHighlight highlight, "html" %}

## Supported Content

Navbars come with built-in support for a handful of sub-components. Mix and match from the following as you need:

- `.navbar-brand` for your company, product, or project name.
- `.navbar-nav` for navigation links (including support for dropdowns).
- `.navbar-text` for adding vertically aligned text content with support for recoloring, using [color scheme](#color-schemes).
- `.navbar-toggle` for use with our [Collapse widget]({{ site.path }}/{{ version.docs }}/widgets/collapse/) and other [navigation toggling](#collapsible-content) behaviors.
- `.collapse.navbar-collapse` for grouping and hiding navbar contents by a parent breakpoint.

Here's an example of some sub-components included in a default, light navbar:

{% capture example %}
<nav class="navbar navbar-expand-lg navbar-light bg-light flex-between">
  <a href="#" class="navbar-brand">Navbar</a>
  <button class="navbar-toggle" type="button" data-cfw="collapse" data-cfw-collapse-target="#navbar0" aria-label="Toggle navigation">
    <span aria-hidden="true">&#8801;</span>
  </button>

  <div class="navbar-collapse collapse" id="navbar0">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a href="#" class="nav-link active" aria-current="page">Home</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
      </li>
    </ul>
    <form class="d-flex">
      <input class="form-control me-0_25" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-primary" type="submit">Search</button>
    </form>
  </div>
</nav>
{% endcapture %}
{% renderExample example %}

### Brand

The `.navbar-brand` can be applied to most elements, but an anchor works best, as some elements might require utility classes or custom styles.

#### Text

Add your text within an element with the `.navbar-brand` class.

{% capture example %}
<nav class="navbar navbar-light bg-light">
  <a href="#" class="navbar-brand">Navbar</a>
</nav>

<nav class="navbar navbar-light bg-light">
  <span class="navbar-brand mb-0">Navbar</span>
</nav>
{% endcapture %}
{% renderExample example %}

#### Image

You can replace the text within the `.navbar-brand` with an `<img>`.

{% capture example %}
<!-- Just an image -->
<nav class="navbar navbar-light bg-light">
  <a class="navbar-brand" href="#">
    <img src="{{ site.path }}/assets/{{ version.docs }}/img/home.svg" width="30" height="30" alt="Logo">
  </a>
</nav>
{% endcapture %}
{% renderExample example %}

#### Image and Text

You can also make use of some additional utilities to add an image and text at the same time. Note the addition of `.d-inline-block` and `.valign-text-top` on the `<img>`.

{% capture example %}
<!-- Image and text -->
<nav class="navbar navbar-light bg-light">
  <a class="navbar-brand" href="#">
    <img src="{{ site.path }}/assets/brand/figuration-solid.svg" width="30" height="30" class="d-inline-block valign-text-top" alt="Figuration">
    Navbar
  </a>
</nav>
{% endcapture %}
{% renderExample example %}

### Nav

Navbar navigation builds on some of the `.nav` options with their own modifier class and require the use of toggle classes for proper responsive styling.

Add `.active` directly to a `.nav-link`, to indicate a certain state, such as the current page.

{% capture example %}
<nav class="navbar navbar-expand-lg navbar-light bg-light flex-between">
  <div class="navbar-brand">Navbar</div>
  <button class="navbar-toggle" type="button" data-cfw="collapse" data-cfw-collapse-target="#navbar1" aria-label="Toggle navigation">
    <span aria-hidden="true">&#8801;</span>
  </button>

  <div class="navbar-collapse collapse" id="navbar1">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a href="#" class="nav-link active" aria-current="page">Home</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link">Features</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
      </li>
    </ul>
  </div>
</nav>
{% endcapture %}
{% renderExample example %}

And because we use classes for our navs, you can avoid the list-based approach entirely if you like.

{% capture example %}
<nav class="navbar navbar-expand-lg navbar-light bg-light flex-between">
 <div class="navbar-brand">Navbar</div>
  <button class="navbar-toggle" type="button" data-cfw="collapse" data-cfw-collapse-target="#navbar2" aria-label="Toggle navigation">
    <span aria-hidden="true">&#8801;</span>
  </button>

  <div class="navbar-collapse collapse" id="navbar2">
    <div class="navbar-nav">
      <a href="#" class="nav-link active" aria-current="page">Home</a>
      <a href="#" class="nav-link">Features</a>
      <a href="#" class="nav-link">Pricing</a>
      <a class="nav-link disabled" aria-disabled="true">Disabled</a>
    </div>
  </div>
</nav>
{% endcapture %}
{% renderExample example %}

### Dropdowns

You can also use the [Dropdown widget]({{ site.path }}/{{ version.docs }}/widgets/dropdown/) in your navbar. Dropdown menus require a wrapping element for positioning, so be sure to use separate and nested elements for `.nav-item` and `.nav-link` as shown below.

If a dropdown is displayed in a non-expanded navbar, they will display 'inline' with the rest of the navbar menu.

{% capture example %}
<nav class="navbar navbar-expand-lg navbar-light bg-light flex-between">
  <a href="#" class="navbar-brand">Navbar</a>
  <button class="navbar-toggle" type="button" data-cfw="collapse" data-cfw-collapse-target="#navbar3" aria-label="Toggle navigation">
    <span aria-hidden="true">&#8801;</span>
  </button>

  <div class="navbar-collapse collapse" id="navbar3">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a href="#" class="nav-link active" aria-current="page">Home</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link" href="#" data-cfw="dropdown">Dropdown<span class="caret" aria-hidden="true"></span></a>
        <ul class="dropdown-menu">
          <li><a href="#">Action</a></li>
          <li><a href="#">Another action</a></li>
          <li><a href="#">Something else here</a></li>
        </ul>
      </li>
    </ul>
  </div>
</nav>
{% endcapture %}
{% renderExample example %}

### Forms and Buttons

Place various form controls and components within a navbar.

{% capture example %}
<nav class="navbar navbar-light bg-light">
  <form class="d-flex">
    <input class="form-control me-0_25" type="search" placeholder="Search" aria-label="Search">
    <button class="btn btn-outline-primary" type="submit">Search</button>
  </form>
</nav>
{% endcapture %}
{% renderExample example %}

Immediate child elements of `.navbar` use flex layout. Align the contents of your inline forms with [flexbox utilities]({{ site.path }}/{{ version.docs }}/utilities/flexbox/) as needed.

{% capture example %}
<nav class="navbar navbar-light bg-light flex-between">
  <a href="#" class="navbar-brand">Navbar</a>
  <form class="d-flex">
    <input class="form-control me-0_25" type="search" placeholder="Search" aria-label="Search">
    <button class="btn btn-outline-primary" type="submit">Search</button>
  </form>
</nav>
{% endcapture %}
{% renderExample example %}

Input groups work, too. If your navbar is an entire form, or mostly a form, you can use the `<form>` element as the container and save some HTML.

{% capture example %}
<nav class="navbar navbar-light bg-light">
  <form class="container-fluid">
    <div class="input-group">
      <span class="input-group-text" id="basic-addon1">@</span>
      <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
    </div>
  </form>
</nav>
{% endcapture %}
{% renderExample example %}

Various buttons are supported as part of these navbar forms, too. This is also a great reminder that vertical alignment utilities can be used to align different sized elements.

{% capture example %}
<nav class="navbar navbar-light bg-light">
  <form>
    <button type="button" class="btn btn-outline-success me-0_25">Main button</button>
    <button type="button" class="btn btn-small align-middle btn-outline-secondary">Smaller button</button>
  </form>
</nav>
{% endcapture %}
{% renderExample example %}

### Text

Add normal text to your navbars with the help of `.navbar-text`.  This class adjusts vertical alignment for strings of text.

{% capture example %}
<nav class="navbar navbar-light bg-light">
  <span class="navbar-text">Navbar text example</span>
</nav>
{% endcapture %}
{% renderExample example %}

Using the utility classes, you can change the alignment and appearance of your navbar text.

{% capture example %}
<nav class="navbar navbar-light bg-light flex-end">
  <span class="navbar-text text-danger">
    Navbar text aligned right
  </span>
</nav>
{% endcapture %}
{% renderExample example %}

You can also use utility classes to align navbar text to other navbar elements like the brand and navigation.

{% capture example %}
<nav class="navbar navbar-expand-lg navbar-light bg-light flex-between">
  <a href="#" class="navbar-brand">Navbar</a>
  <button class="navbar-toggle" type="button" data-cfw="collapse" data-cfw-collapse-target="#navbar6" aria-label="Toggle navigation">
    <span aria-hidden="true">&#8801;</span>
  </button>

  <div class="navbar-collapse collapse flex-between" id="navbar6">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a href="#" class="nav-link active" aria-current="page">Home</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
      </li>
    </ul>
    <span class="navbar-text">
        Navbar text example
    </span>
  </div>
</nav>
{% endcapture %}
{% renderExample example %}

### Disabled Links

Add `.disabled` to a `.nav-link` to indicate a disabled state.

{%- assign calloutAnchors = version.docs | valueIfEmpty: site.version.docs | prepend: "./" | append: "/partials/callout-warning-disabling-anchors.md" -%}
{% include calloutAnchors %}

{% capture example %}
<nav class="navbar navbar-expand-lg navbar-light bg-light flex-between">
  <a href="#" class="navbar-brand">Navbar</a>
  <button class="navbar-toggle" type="button" data-cfw="collapse" data-cfw-collapse-target="#navbar7" aria-label="Toggle navigation">
    <span aria-hidden="true">&#8801;</span>
  </button>

  <div class="navbar-collapse collapse flex-between" id="navbar7">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a href="#" class="nav-link">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
      </li>
      <li class="nav-item">
        <span class="nav-link disabled">Disabled</span>
      </li>
    </ul>
  </div>
</nav>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark flex-between">
  <a href="#" class="navbar-brand">Navbar</a>
  <button class="navbar-toggle" type="button" data-cfw="collapse" data-cfw-collapse-target="#navbar8" aria-label="Toggle navigation">
    <span aria-hidden="true">&#8801;</span>
  </button>

  <div class="navbar-collapse collapse flex-between" id="navbar8">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a href="#" class="nav-link">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
      </li>
      <li class="nav-item">
        <span class="nav-link disabled">Disabled</span>
      </li>
    </ul>
  </div>
</nav>
{% endcapture %}
{% renderExample example %}

### Divider

Place a visual separator between segments of the navbar.

{% capture example %}
<nav class="navbar navbar-expand-lg navbar-light bg-light flex-between">
  <a href="#" class="navbar-brand">Navbar</a>
  <button class="navbar-toggle" type="button" data-cfw="collapse" data-cfw-collapse-target="#navbar9" aria-label="Toggle navigation">
    <span aria-hidden="true">&#8801;</span>
  </button>

  <div class="navbar-collapse collapse flex-between" id="navbar9">
    <div class="navbar-nav">
      <a href="#" class="nav-link active" aria-current="page">Home</a>
      <a href="#" class="nav-link">Features</a>
      <span class="navbar-divider"></span>
      <a href="#" class="nav-link">Pricing</a>
      <a href="#" class="nav-link">About</a>
    </div>
  </div>
</nav>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark flex-between">
  <a href="#" class="navbar-brand">Navbar</a>
  <button class="navbar-toggle" type="button" data-cfw="collapse" data-cfw-collapse-target="#navbar10" aria-label="Toggle navigation">
    <span aria-hidden="true">&#8801;</span>
  </button>

  <div class="navbar-collapse collapse flex-between" id="navbar10">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a href="#" class="nav-link active" aria-current="page">Home</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link">Features</a>
      </li>
      <li class="navbar-divider"></li>
      <li class="nav-item">
        <a href="#" class="nav-link">Pricing</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link">About</a>
      </li>
    </ul>
  </div>
</nav>
{% endcapture %}
{% renderExample example %}

## Collapsible Content

Our [Collapse widget]({{ site.path }}/{{ version.docs }}/widgets/collapse/) can also to toggle hidden content elsewhere on the page.

Consider using the available `follow` option to move the focus programmatically to the container when it is opened. Otherwise, keyboard users and users of assistive technologies will likely have a hard time finding the newly revealed content, particularly if the container that was opened comes *before* the toggle in the document's structure. In theory, this will allow assistive technology users to jump directly from the toggle to the container it controls, but support for this is inconsitent.

{% capture example %}
<nav class="navbar navbar-light bg-light">
  <button class="navbar-toggle" type="button" data-cfw="collapse" data-cfw-collapse-target="#exCollapsingNavbar" data-cfw-collapse-follow=true aria-label="Toggle navigation">
    <span aria-hidden="true">&#8801;</span>
  </button>
</nav>
<div class="collapse" id="exCollapsingNavbar">
  <div class="bg-dark text-light p-1">
    <h4>Collapsed content</h4>
    Toggleable via the navbar button.
  </div>
</div>
{% endcapture %}
{% renderExample example %}

## Color Schemes

Theming the navbar has never been easier thanks to the combination of a simple link color modifier class and `background-color` utilities. Put another way, you specify light or dark and apply a background color.

Here are some examples to show what we mean.

<div class="cf-example">
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark flex-between mb-1">
    <a href="#" class="navbar-brand">Navbar</a>
    <button class="navbar-toggle" type="button" data-cfw="collapse" data-cfw-collapse-target="#navbar11" aria-label="Toggle navigation">
      <span aria-hidden="true">&#8801;</span>
    </button>
    <div class="navbar-collapse collapse flex-between" id="navbar11">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a href="#" class="nav-link active" aria-current="page">Home</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex float-end">
        <input class="form-control me-0_25" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-secondary" type="submit">Search</button>
      </form>
    </div>
  </nav>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary flex-between mb-1">
    <a href="#" class="navbar-brand">Navbar</a>
    <button class="navbar-toggle" type="button" data-cfw="collapse" data-cfw-collapse-target="#navbar12" aria-label="Toggle navigation">
      <span aria-hidden="true">&#8801;</span>
    </button>
    <div class="navbar-collapse collapse flex-between" id="navbar12">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a href="#" class="nav-link active" aria-current="page">Home</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex float-end">
        <input class="form-control me-0_25" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-secondary" type="submit">Search</button>
      </form>
    </div>
  </nav>
  <nav class="navbar navbar-expand-lg navbar-light flex-between mb-1" style="background-color: #e3f2fd;">
    <a href="#" class="navbar-brand">Navbar</a>
    <button class="navbar-toggle" type="button" data-cfw="collapse" data-cfw-collapse-target="#navbar13" aria-label="Toggle navigation">
      <span aria-hidden="true">&#8801;</span>
    </button>
    <div class="navbar-collapse collapse flex-between" id="navbar13">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a href="#" class="nav-link active" aria-current="page">Home</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex float-end">
        <input class="form-control me-0_25" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-primary" type="submit">Search</button>
      </form>
    </div>
  </nav>
</div>

{% capture highlight %}
<nav class="navbar navbar-dark bg-dark">
  <!-- Navbar content -->
</nav>

<nav class="navbar navbar-dark bg-primary">
  <!-- Navbar content -->
</nav>

<nav class="navbar navbar-light" style="background-color: #e3f2fd;">
  <!-- Navbar content -->
</nav>
{% endcapture %}
{% renderHighlight highlight, "html" %}

## Containers

Although it's not required, you can wrap a navbar in a `.container` to center it on a page, or add one within to center the contents of navbar.

{% capture example %}
<div class="container">
  <nav class="navbar navbar-light bg-light">
    <a href="#" class="navbar-brand">Navbar</a>
  </nav>
</div>
{% endcapture %}
{% renderExample example %}

{% capture example %}
<nav class="navbar navbar-light bg-light">
  <div class="container">
    <a href="#" class="navbar-brand">Navbar</a>
  </div>
</nav>
{% endcapture %}
{% renderExample example %}

There may also be instances where you may need to reset the padding on the `.navbar` to align with other `.container` wrapped content.

{% capture example %}
<nav class="navbar navbar-light bg-light px-0">
  <div class="container">
    <a href="#" class="navbar-brand">Navbar</a>
  </div>
</nav>
<div class="container">
    <p>The quick brown fox jumped over the lazy dog.</p>
</div>
{% endcapture %}
{% renderExample example %}

Use any of the responsive containers to change how wide the content in your navbar is presented.

{% capture example %}
<nav class="navbar navbar-light bg-light">
  <div class="container-md">
    <a href="#" class="navbar-brand">Navbar</a>
  </div>
</nav>
{% endcapture %}
{% renderExample example %}

## Placement

Use our [position utilities]({{ site.path }}/{{ version.docs }}/utilities/position/) to place navbars in non-static positions. Choose from fixed to the top, fixed to the bottom, or stickied to the top (scrolls with the page until it reaches the top, then stays there). Fixed navbars use `position: fixed`, meaning they're pulled from the normal flow of the DOM and may require custom CSS (e.g., `padding-top` on the `<body>`) to prevent overlap with other elements.

**Note: `position: sticky`, used for `.sticky-top`, [isn't fully supported in every browser](https://caniuse.com/css-sticky).**

{% capture example %}
<nav class="navbar navbar-light bg-light">
  <a href="#" class="navbar-brand">Static default</a>
</nav>
{% endcapture %}
{% renderExample example %}

{% capture example %}
<nav class="navbar navbar-light bg-light fixed-top">
  <a href="#" class="navbar-brand">Fixed top</a>
</nav>
{% endcapture %}
{% renderExample example %}

{% capture example %}
<nav class="navbar navbar-light bg-light fixed-bottom">
  <a href="#" class="navbar-brand">Fixed bottom</a>
</nav>
{% endcapture %}
{% renderExample example %}

{% capture example %}
<nav class="navbar navbar-light bg-light sticky-top">
  <a href="#" class="navbar-brand">Sticky top</a>
</nav>
{% endcapture %}
{% renderExample example %}

## SASS Reference

### Variables

The available [Customization options]({{ site.path }}/{{ version.docs }}/get-started/options/), or Sass variables, that can be customized for navbar components.

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
        <td><code>$enable-navbar</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the navbar classes.
          Smaller segements of the navbar classes can be disabled with the following <code>$enable-*</code> variables.
        </td>
      </tr>
      <tr>
        <td><code>$enable-navbar-brand</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of navbar brand classes.
        </td>
      </tr>
      <tr>
        <td><code>$enable-navbar-nav</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of navbar nav classes.
        </td>
      </tr>
      <tr>
        <td><code>$enable-navbar-text</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of navbar text classes.
        </td>
      </tr>
      <tr>
        <td><code>$enable-navbar-divider</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of navbar divider classes.
        </td>
      </tr>
      <tr>
        <td><code>$enable-navbar-collapse</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of navbar collapse classes.
        </td>
      </tr>
      <tr>
        <td><code>$enable-navbar-toggle</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of navbar toggle classes.
        </td>
      </tr>
      <tr>
        <td><code>$enable-navbar-light</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of color overrides for use on a navbar with a light background color.
        </td>
      </tr>
      <tr>
        <td><code>$enable-navbar-dark</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of color overrides for use on a navbar with a dark background color.
        </td>
      </tr>
      <tr>
        <td><code>$navbar-padding-y</code></td>
        <td>string</td>
        <td><code>($spacer * .5)</code></td>
        <td>
          Vertical padding for navbar.
        </td>
      </tr>
      <tr>
        <td><code>$navbar-padding-x</code></td>
        <td>string</td>
        <td><code>$spacer</code></td>
        <td>
          Horizontal padding for navbar.
        </td>
      </tr>
      <tr>
        <td><code>$navbar-item-padding-y</code></td>
        <td>string</td>
        <td><code>.3125rem</code></td>
        <td>
          Vertical padding for <code>.nav-link</code> items within navbar.
        </td>
      </tr>
      <tr>
        <td><code>$navbar-item-padding-x</code></td>
        <td>string</td>
        <td><code>.5rem</code></td>
        <td>
          Horizontal padding for <code>.nav-link</code> items within navbar.
        </td>
      </tr>
      <tr>
        <td><code>$navbar-brand-padding-y</code></td>
        <td>string</td>
        <td><code>.125rem</code></td>
        <td>
          Vertical padding for navbar brand.
        </td>
      </tr>
      <tr>
        <td><code>$navbar-brand-padding-x</code></td>
        <td>string</td>
        <td><code>1rem</code></td>
        <td>
          Horizontal padding for navbar brand.
        </td>
      </tr>
      <tr>
        <td><code>$navbar-brand-font-size</code></td>
        <td>string</td>
        <td><code>($font-size-base * 1.25)</code></td>
        <td>
          Font size for navbar brand.
        </td>
      </tr>
      <tr>
        <td><code>$navbar-brand-font-weight</code></td>
        <td>string</td>
        <td><code>$font-weight-bold</code></td>
        <td>
          Font weight for navbar brand.
        </td>
      </tr>
      <tr>
        <td><code>$navbar-divider-width</code></td>
        <td>string</td>
        <td><code>$border-width</code></td>
        <td>
          Border width for navbar divider.
        </td>
      </tr>
      <tr>
        <td><code>$navbar-divider-color</code></td>
        <td>string</td>
        <td><code>rgba($black, .65)</code></td>
        <td>
          Border color for navbar divider.
        </td>
      </tr>
      <tr>
        <td><code>$navbar-divider-margin-y</code></td>
        <td>string</td>
        <td><code>.25rem</code></td>
        <td>
          Vertical spacing for navbar divider.
        </td>
      </tr>
      <tr>
        <td><code>$navbar-divider-margin-x</code></td>
        <td>string</td>
        <td><code>.25rem</code></td>
        <td>
          Horizontal spacing for navbar divider.
        </td>
      </tr>
      <tr>
        <td><code>$navbar-toggle-font-size</code></td>
        <td>string</td>
        <td><code>($font-size-base * 1.25)</code></td>
        <td>
          Font size for navbar toggle.
        </td>
      </tr>
      <tr>
        <td><code>$navbar-toggle-padding-y</code></td>
        <td>string</td>
        <td><code>$btn-padding-y</code></td>
        <td>
          Vertical spacing for navbar toggle.
        </td>
      </tr>
      <tr>
        <td><code>$navbar-toggle-padding-x</code></td>
        <td>string</td>
        <td><code>$btn-padding-x</code></td>
        <td>
          Horizontal spacing for navbar toggle.
        </td>
      </tr>
      <tr>
        <td><code>$navbar-toggle-border-radius</code></td>
        <td>string</td>
        <td><code>$btn-border-radius</code></td>
        <td>
          Border radius for navbar toggle.
        </td>
      </tr>
      <tr>
        <td><code>$navbar-toggle-focus-box-shadow</code></td>
        <td>string</td>
        <td><code>0 0 0 .1875rem</code></td>
        <td>
          Box shadow for navbar toggle in focus state.
        </td>
      </tr>
      <tr>
        <td><code>$navbar-toggle-transition</code></td>
        <td>string</td>
        <td><code>box-shadow .15s ease-in-out</code></td>
        <td>
          Transition effect for navbar toggle button.
        </td>
      </tr>
      <tr>
        <td><code>$navbar-expand-breakpoints</code></td>
        <td>list</td>
        <td><code>map-keys($grid-breakpoints)</code></td>
        <td>
          Breakpoints to generate the rules for expanding navbars.
        </td>
      </tr>
      <tr>
        <td><code>$navbar-light-color</code></td>
        <td>string</td>
        <td><code>rgba($black, .6)</code></td>
        <td>
          Text color override for use on a navbar with a light background color.
        </td>
      </tr>
      <tr>
        <td><code>$navbar-light-hover-color</code></td>
        <td>string</td>
        <td><code>rgba($black, .85)</code></td>
        <td>
          Text color override in hover or focus state for use on a navbar with a light background color.
        </td>
      </tr>
      <tr>
        <td><code>$navbar-light-active-color</code></td>
        <td>string</td>
        <td><code>rgba($black, .95)</code></td>
        <td>
          Text color override in active state for use on a navbar with a light background color.
        </td>
      </tr>
      <tr>
        <td><code>$navbar-light-disabled-color</code></td>
        <td>string</td>
        <td><code>rgba($black, .5)</code></td>
        <td>
          Text color override in disabled state for use on a navbar with a light background color.
        </td>
      </tr>
      <tr>
        <td><code>$navbar-light-divider-color</code></td>
        <td>string</td>
        <td><code>rgba($black, .65)</code></td>
        <td>
          Divider border color override for use on a navbar with a light background color.
        </td>
      </tr>
      <tr>
        <td><code>$navbar-light-toggle-border</code></td>
        <td>string</td>
        <td><code>rgba($black, .35)</code></td>
        <td>
          Toggle border color override for use on a navbar with a light background color.
        </td>
      </tr>
      <tr>
        <td><code>$navbar-light-brand-color</code></td>
        <td>string</td>
        <td><code>$navbar-light-active-color</code></td>
        <td>
          Brand text color override for use on a navbar with a light background color.
        </td>
      </tr>
      <tr>
        <td><code>$navbar-light-disabled-color</code></td>
        <td>string</td>
        <td><code>$navbar-light-active-color</code></td>
        <td>
          Brand text color override in hover or focus state for use on a navbar with a light background color.
        </td>
      </tr>
      <tr>
        <td><code>$navbar-dark-color</code></td>
        <td>string</td>
        <td><code>rgba($white, .65)</code></td>
        <td>
          Text color override for use on a navbar with a dark background color.
        </td>
      </tr>
      <tr>
        <td><code>$navbar-dark-hover-color</code></td>
        <td>string</td>
        <td><code>rgba($white, .9)</code></td>
        <td>
          Text color override in hover or focus state for use on a navbar with a dark background color.
        </td>
      </tr>
      <tr>
        <td><code>$navbar-dark-active-color</code></td>
        <td>string</td>
        <td><code>rgba($white, .95)</code></td>
        <td>
          Text color override in active state for use on a navbar with a dark background color.
        </td>
      </tr>
      <tr>
        <td><code>$navbar-dark-disabled-color</code></td>
        <td>string</td>
        <td><code>rgba($white, .5)</code></td>
        <td>
          Text color override in disabled state for use on a navbar with a dark background color.
        </td>
      </tr>
      <tr>
        <td><code>$navbar-dark-divider-color</code></td>
        <td>string</td>
        <td><code>rgba($white, .7)</code></td>
        <td>
          Divider border color override for use on a navbar with a dark background color.
        </td>
      </tr>
      <tr>
        <td><code>$navbar-dark-toggle-border</code></td>
        <td>string</td>
        <td><code>rgba($white, .35)</code></td>
        <td>
          Toggle border color override for use on a navbar with a dark background color.
        </td>
      </tr>
      <tr>
        <td><code>$navbar-dark-brand-color</code></td>
        <td>string</td>
        <td><code>$navbar-dark-active-color</code></td>
        <td>
          Brand text color override for use on a navbar with a dark background color.
        </td>
      </tr>
      <tr>
        <td><code>$navbar-dark-disabled-color</code></td>
        <td>string</td>
        <td><code>$navbar-dark-active-color</code></td>
        <td>
          Brand text color override in hover or focus state for use on a navbar with a dark background color.
        </td>
      </tr>
    </tbody>
  </table>
</div>

### Mixins

No mixins available.