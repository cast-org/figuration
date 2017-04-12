---
layout: docs
title: Navbar
group: components
---

The navbar is a simple wrapper for positioning branding, navigation, and other elements into a concise navigation header. It's easily extensible and, with the help of our [Collapse widget]({{ site.baseurl }}/widgets/collapse/), it can easily integrate offscreen content.

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Basics

Here's what you need to know before getting started with the navbar:

- Navbars require a wrapping `.navbar`, with `.navbar-expand{-sm|-md|-lg|-xl}` for responsive collapsing, and [color scheme](#color-schemes) classes.
- Navbars and their contents are fluid by default. Use [optional containers](#containers) to limit their horizontal width.
- Navbars and their contents are built with flexbox, providing easy alignment options via [flexbox utility]({{ site.baseurl }}/utilities/flexbox/) and [margin utility]({{ site.baseurl }}/utilities/spacing/) classes.
- Navbars are responsive by default, but you can easily modify them to change that. Responsive behavior depends on our [Collapse widget]({{ site.baseurl }}/widgets/collapse/).
- Ensure accessibility by using a `<nav>` element or, if using a more generic element such as a `<div>`, add a `role="navigation"` to every navbar to explicitly identify it as a landmark region for users of assistive technologies.

## Responsive Behaviors

Navbars are built with repsonsive design in mind.  Using a `.navbar-expand{-sm|-md|-lg|-xl}` on the `.navbar` along with a `.navbar-collapse` container.

The following list gives a quick run-down of how the breakpoints are utilized.

- No modifier, just `.navbar`, is never expanded
- `.navbar-expand` is always expanded
- `.navbar-expand-sm` expands at `sm` and up
- `.navbar-expand-md` expands at `md` and up
- `.navbar-expand-lg` expands at `lg` and up
- `.navbar-expand-xl` expands at `xl` and up

Please refer to how our [breakpoint nomenclature]({{ site.baseurl }}/layout/overview/#breakpoint-nomenclature) is used.

For the examples throughout this page, you will need to resize your browser window below/above the `lg` breakpoint to see the navbars switch between modes.

### Never Expand

The most basic example of a `.navbar` is one that never expands, no matter the screen width.

<div class="cf-example">
  <nav class="navbar navbar-light bg-faded mb-1">
      <button class="navbar-toggle collapsed" type="button" data-cfw="collapse" data-cfw-collapse-target="#navbarB0">
          <span aria-hidden="true">&#8801;</span>
      </button>
      <a href="#" class="navbar-brand ml-0_5">Never Expand</a>

      <div class="navbar-collapse collapse" id="navbarB0">
          <ul class="navbar-nav">
              <li class="nav-item">
                  <a href="#" class="nav-link active">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                  <a href="#" class="nav-link">Link</a>
              </li>
              <li class="nav-item">
                  <a href="#" class="nav-link disabled">Disabled</a>
              </li>
          </ul>
      </div>
  </nav>

  <nav class="navbar navbar-light bg-faded flex-between">
      <a href="#" class="navbar-brand">Never Expand</a>
      <button class="navbar-toggle collapsed" type="button" data-cfw="collapse" data-cfw-collapse-target="#navbarB1">
          <span aria-hidden="true">&#8801;</span>
      </button>

      <div class="navbar-collapse collapse" id="navbarB1">
          <ul class="navbar-nav">
              <li class="nav-item">
                  <a href="#" class="nav-link active">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                  <a href="#" class="nav-link">Link</a>
              </li>
              <li class="nav-item">
                  <a href="#" class="nav-link disabled">Disabled</a>
              </li>
          </ul>
      </div>
  </nav>
</div>
{% highlight html %}
<nav class="navbar navbar-light bg-faded">
    <button class="navbar-toggle collapsed" type="button" data-cfw="collapse" data-cfw-collapse-target="#navbarB0">
        <span aria-hidden="true">&#8801;</span>
    </button>
    <a href="#" class="navbar-brand ml-0_5">Never Expand</a>

    <div class="navbar-collapse collapse" id="navbarB0">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a href="#" class="nav-link active">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Link</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link disabled">Disabled</a>
            </li>
        </ul>
    </div>
</nav>

<nav class="navbar navbar-light bg-faded flex-between">
    <a href="#" class="navbar-brand">Never Expand</a>
    <button class="navbar-toggle collapsed" type="button" data-cfw="collapse" data-cfw-collapse-target="#navbarB1">
        <span aria-hidden="true">&#8801;</span>
    </button>

    <div class="navbar-collapse collapse" id="navbarB1">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a href="#" class="nav-link active">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Link</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link disabled">Disabled</a>
            </li>
        </ul>
    </div>
</nav>
{% endhighlight %}

### Responsive Expand

Be default, navbars start out collapsed, but when the target breakpoint is reached, the navbar will expand into a horizontal row of elements.

{% example html %}
<nav class="navbar navbar-expand-lg navbar-light bg-faded flex-between">
  <a href="#" class="navbar-brand">Navbar</a>
  <button class="navbar-toggle collapsed" type="button" data-cfw="collapse" data-cfw-collapse-target="#navbarR0">
    <span aria-hidden="true">&#8801;</span>
  </button>

  <div class="navbar-collapse collapse" id="navbarR0">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a href="#" class="nav-link active">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link">Link</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link disabled">Disabled</a>
      </li>
    </ul>
    <form class="form-inline ml-auto">
      <input class="form-control" type="text" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-primary" type="submit">Search</button>
    </form>
  </div>
</nav>
{% endexample %}

With the `.navbar-brand` in the collapsing area.

{% example html %}
<nav class="navbar navbar-expand-lg navbar-light bg-faded">
  <button class="navbar-toggle collapsed" type="button" data-cfw="collapse" data-cfw-collapse-target="#navbarR1">
    <span aria-hidden="true">&#8801;</span>
  </button>

  <div class="navbar-collapse collapse" id="navbarR1">
    <a href="#" class="navbar-brand">Navbar</a>
    <ul class="navbar-nav">
      <li class="nav-item">
        <a href="#" class="nav-link active">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link">Link</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link disabled">Disabled</a>
      </li>
    </ul>
    <form class="form-inline ml-auto">
      <input class="form-control" type="text" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-primary" type="submit">Search</button>
    </form>
  </div>
</nav>
{% endexample %}

## Supported Content

Navbars come with built-in support for a handful of sub-components. Mix and match from the following as you need:

- `.navbar-brand` for your company, product, or project name.
- `.navbar-nav` for navigation links (including support for dropdowns).
- `.form-inline` for any form controls and actions.
- `.navbar-text` for adding vertically aligned text content with support for recoloring, using [color scheme](#color-schemes).
- `.navbar-toggle` for use with our [Collapse widget]({{ site.baseurl }}/widgets/collapse/) and other [navigation toggling](#collapsible-content) behaviors.
- `.collapse.navbar-collapse` for grouping and hiding navbar contents by a parent breakpoint.

Here's an example of some sub-components included in a default, light navbar:

{% example html %}
<nav class="navbar navbar-expand-lg navbar-light bg-faded flex-between">
  <a href="#" class="navbar-brand">Navbar</a>
  <button class="navbar-toggle collapsed" type="button" data-cfw="collapse" data-cfw-collapse-target="#navbar0">
    <span aria-hidden="true">&#8801;</span>
  </button>

  <div class="navbar-collapse collapse" id="navbar0">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a href="#" class="nav-link active">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link">Link</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link disabled">Disabled</a>
      </li>
    </ul>
    <form class="form-inline ml-auto">
      <input class="form-control" type="text" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-primary" type="submit">Search</button>
    </form>
  </div>
</nav>
{% endexample %}

### Brand

The `.navbar-brand` can be applied to most elements, but an anchor works best as some elements might require utility classes or custom styles.

<div class="cf-example">
  <nav class="navbar navbar-light bg-faded mb-1">
    <a href="#" class="navbar-brand">Navbar</a>
  </nav>

  <nav class="navbar navbar-light bg-faded">
    <h1 class="navbar-brand mb-0">Navbar</h1>
  </nav>
</div>
{% highlight html %}
<nav class="navbar navbar-light bg-faded">
  <a href="#" class="navbar-brand">Navbar</a>
</nav>

<nav class="navbar navbar-light bg-faded">
  <h1 class="navbar-brand mb-0">Navbar</h1>
</nav>
{% endhighlight %}

Adding images to the `.navbar-brand` will likely always require custom styles or utilities to properly size. Here are some examples to demonstrate.

{% example html %}
<!-- Just an image -->
<nav class="navbar navbar-light bg-faded">
  <a class="navbar-brand" href="#">
    <img src="{{ site.baseurl }}/assets/img/home.svg" width="30" height="30" alt="">
  </a>
</nav>
{% endexample %}

{% example html %}
<!-- Image and text -->
<nav class="navbar navbar-light bg-faded">
  <a class="navbar-brand" href="#">
    <img src="{{ site.baseurl }}/assets/img/home.svg" width="30" height="30" class="d-inline-block align-top" alt="">
    Navbar
  </a>
</nav>
{% endexample %}

### Nav

Navbar navigation builds on some of the `.nav` options with their own modifier class and require the use of toggler classes for proper responsive styling.

Add `.active` directly to a `.nav-link`, to indicate a certain state, such as the current page.

{% example html %}
<nav class="navbar navbar-expand-lg navbar-light bg-faded flex-between">
  <div class="navbar-brand">Navbar</div>
  <button class="navbar-toggle collapsed" type="button" data-cfw="collapse" data-cfw-collapse-target="#navbar1">
    <span aria-hidden="true">&#8801;</span>
  </button>

  <div class="navbar-collapse collapse" id="navbar1">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a href="#" class="nav-link active">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link">Features</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link">Pricing</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link disabled" tabindex="-1">Disabled</a>
      </li>
    </ul>
  </div>
</nav>
{% endexample %}

And because we use classes for our navs, you can avoid the list-based approach entirely if you like.

{% example html %}
<nav class="navbar navbar-expand-lg navbar-light bg-faded flex-between">
 <div class="navbar-brand">Navbar</div>
  <button class="navbar-toggle collapsed" type="button" data-cfw="collapse" data-cfw-collapse-target="#navbar2">
    <span aria-hidden="true">&#8801;</span>
  </button>

  <div class="navbar-collapse collapse" id="navbar2">
    <div class="navbar-nav">
      <a href="#" class="nav-item nav-link active">Home <span class="sr-only">(current)</span></a>
      <a href="#" class="nav-item nav-link">Features</a>
      <a href="#" class="nav-item nav-link">Pricing</a>
      <a href="#" class="nav-item nav-link disabled" tabindex="-1">Disabled</a>
    </div>
  </div>
</nav>
{% endexample %}

### Dropdowns

You may also utilize the [Dropdown widget]({{ site.baseurl}}/widgets/dropdown/) in your navbar nav. Dropdown menus require a wrapping element for positioning, so be sure to use separate and nested elements for `.nav-item` and `.nav-link` as shown below.

If a dropdown is displayed in a non-expanded navbar, they will display 'inline' with the rest of the navbar menu.

{% example html %}
<nav class="navbar navbar-expand-lg navbar-light bg-faded flex-between">
  <a href="#" class="navbar-brand">Navbar</a>
  <button class="navbar-toggle collapsed" type="button" data-cfw="collapse" data-cfw-collapse-target="#navbar3">
    <span aria-hidden="true">&#8801;</span>
  </button>

  <div class="navbar-collapse collapse" id="navbar3">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a href="#" class="nav-link active">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link">Link</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link disabled">Disabled</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" data-cfw="dropdown">Dropdown</a>
        <div class="dropdown-menu">
          <a href="#">Action</a>
          <a href="#">Another action</a>
          <a href="#">Something else here</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
{% endexample %}

### Forms and Buttons

Place various form controls and components within a navbar with `.form-inline`.

{% example html %}
<nav class="navbar navbar-light bg-faded">
  <form class="form-inline">
    <input class="form-control" type="text" placeholder="Search" aria-label="Search">
    <button class="btn btn-outline-primary" type="submit">Search</button>
  </form>
</nav>
{% endexample %}

Align the contents of your inline forms with utilities as needed.

{% example html %}
<nav class="navbar navbar-light bg-faded flex-between">
  <a href="#" class="navbar-brand">Navbar</a>
  <form class="form-inline">
    <input class="form-control" type="text" placeholder="Search" aria-label="Search">
    <button class="btn btn-outline-primary" type="submit">Search</button>
  </form>
</nav>
{% endexample %}

Input groups work, too:

{% example html %}
<nav class="navbar navbar-light bg-faded">
  <form class="form-inline">
    <div class="input-group">
      <span class="input-group-addon" id="basic-addon1">@</span>
      <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
    </div>
  </form>
</nav>
{% endexample %}

Various buttons are supported as part of these navbar forms, too. This is also a great reminder that vertical alignment utilities can be used to align different sized elements.

{% example html %}
<nav class="navbar navbar-light bg-faded">
  <form class="form-inline">
    <button type="button" class="btn btn-outline-success">Main button</button>
    <button type="button" class="btn btn-sm align-middle btn-outline-secondary">Smaller button</button>
  </form>
</nav>
{% endexample %}

### Text

Add normal text to your navbars with the help of `.navbar-text`.  This class adjusts vertical alignment for strings of text.

{% example html %}
<nav class="navbar navbar-light bg-faded">
    <span class="navbar-text">Navbar text example</span>
</nav>
{% endexample %}

Using the utility classes, you can change the alignment and appearance of your navbar text.

{% example html %}
<nav class="navbar navbar-light bg-faded flex-end">
    <span class="navbar-text text-danger">
        Navbar text aligned right
    </span>
</nav>
{% endexample %}

You can also use utility classes to align navbar text to other navbar elements like the brand and navigation.

{% example html %}
<nav class="navbar navbar-expand-lg navbar-light bg-faded flex-between">
  <a href="#" class="navbar-brand">Navbar</a>
  <button class="navbar-toggle collapsed" type="button" data-cfw="collapse" data-cfw-collapse-target="#navbar6">
    <span aria-hidden="true">&#8801;</span>
  </button>

  <div class="navbar-collapse collapse flex-between" id="navbar6">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a href="#" class="nav-link active">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link">Link</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link disabled">Disabled</a>
      </li>
    </ul>
    <span class="navbar-text">
        Navbar text example
    </span>
  </div>
</nav>
{% endexample %}

### Disabled Links

Add `.disabled` to a `.nav-link` to indicate a disabled state.

{% callout warning %}
Disabling Anchors
{:.h5}

Please refer to the [Accessiblity notes about disabled anchors]({{ site.baseurl }}/get-started/accessibility/#disabled-anchors).
{% endcallout %}

<div class="cf-example">
  <nav class="navbar navbar-expand-lg navbar-light bg-faded flex-between mb-1">
    <a href="#" class="navbar-brand">Navbar</a>
    <button class="navbar-toggle collapsed" type="button" data-cfw="collapse" data-cfw-collapse-target="#navbar7">
      <span aria-hidden="true">&#8801;</span>
    </button>

    <div class="navbar-collapse collapse flex-between" id="navbar7">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a href="#" class="nav-link">Home</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link disabled" aria-disabled="true" tabindex="-1">Disabled</a>
        </li>
        <li class="nav-item">
          <span class="nav-link disabled">Disabled</span>
        </li>
      </ul>
    </div>
  </nav>

  <nav class="navbar navbar-expand-lg navbar-dark bg-inverse flex-between">
    <a href="#" class="navbar-brand">Navbar</a>
    <button class="navbar-toggle collapsed" type="button" data-cfw="collapse" data-cfw-collapse-target="#navbar8">
      <span aria-hidden="true">&#8801;</span>
    </button>

    <div class="navbar-collapse collapse flex-between" id="navbar8">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a href="#" class="nav-link">Home</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link disabled" aria-disabled="true" tabindex="-1">Disabled</a>
        </li>
        <li class="nav-item">
          <span class="nav-link disabled">Disabled</span>
        </li>
      </ul>
    </div>
  </nav>
</div>
{% highlight html %}
<nav class="navbar navbar-expand-lg navbar-light bg-faded flex-between">
  <a href="#" class="navbar-brand">Navbar</a>
  <button class="navbar-toggle collapsed" type="button" data-cfw="collapse" data-cfw-collapse-target="#navbar7">
    <span aria-hidden="true">&#8801;</span>
  </button>

  <div class="navbar-collapse collapse flex-between" id="navbar7">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a href="#" class="nav-link">Home</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link disabled" aria-disabled="true" tabindex="-1">Disabled</a>
      </li>
      <li class="nav-item">
        <span class="nav-link disabled">Disabled</span>
      </li>
    </ul>
  </div>
</nav>

<nav class="navbar navbar-expand-lg navbar-dark bg-inverse flex-between">
  <a href="#" class="navbar-brand">Navbar</a>
  <button class="navbar-toggle collapsed" type="button" data-cfw="collapse" data-cfw-collapse-target="#navbar8">
    <span aria-hidden="true">&#8801;</span>
  </button>

  <div class="navbar-collapse collapse flex-between" id="navbar8">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a href="#" class="nav-link">Home</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link disabled" aria-disabled="true" tabindex="-1">Disabled</a>
      </li>
      <li class="nav-item">
        <span class="nav-link disabled">Disabled</span>
      </li>
    </ul>
  </div>
</nav>
{% endhighlight %}

### Divider

Place a visual separator between segments of the navbar.

<div class="cf-example">
  <nav class="navbar navbar-expand-lg navbar-light bg-faded flex-between mb-1">
    <a href="#" class="navbar-brand">Navbar</a>
    <button class="navbar-toggle collapsed" type="button" data-cfw="collapse" data-cfw-collapse-target="#navbar9">
      <span aria-hidden="true">&#8801;</span>
    </button>

    <div class="navbar-collapse collapse flex-between" id="navbar9">
        <div class="navbar-nav">
        <a href="#" class="nav-item nav-link active">Home <span class="sr-only">(current)</span></a>
        <a href="#" class="nav-item nav-link">Features</a>
        <span class="navbar-divider"></span>
        <a href="#" class="nav-item nav-link">Pricing</a>
        <a href="#" class="nav-item nav-link">About</a>
      </div>
    </div>
  </nav>

  <nav class="navbar navbar-expand-lg navbar-dark bg-inverse flex-between">
    <a href="#" class="navbar-brand">Navbar</a>
    <button class="navbar-toggle collapsed" type="button" data-cfw="collapse" data-cfw-collapse-target="#navbar10">
      <span aria-hidden="true">&#8801;</span>
    </button>

    <div class="navbar-collapse collapse flex-between" id="navbar10">
        <div class="navbar-nav">
        <a href="#" class="nav-item nav-link active">Home <span class="sr-only">(current)</span></a>
        <a href="#" class="nav-item nav-link">Features</a>
        <span class="navbar-divider"></span>
        <a href="#" class="nav-item nav-link">Pricing</a>
        <a href="#" class="nav-item nav-link">About</a>
      </div>
    </div>
  </nav>
</div>
{% highlight html %}
<nav class="navbar navbar-expand-lg navbar-light bg-faded flex-between">
  <a href="#" class="navbar-brand">Navbar</a>
  <button class="navbar-toggle collapsed" type="button" data-cfw="collapse" data-cfw-collapse-target="#navbar9">
    <span aria-hidden="true">&#8801;</span>
  </button>

  <div class="navbar-collapse collapse flex-between" id="navbar9">
      <div class="navbar-nav">
      <a href="#" class="nav-item nav-link active">Home <span class="sr-only">(current)</span></a>
      <a href="#" class="nav-item nav-link">Features</a>
      <span class="navbar-divider"></span>
      <a href="#" class="nav-item nav-link">Pricing</a>
      <a href="#" class="nav-item nav-link">About</a>
    </div>
  </div>
</nav>

<nav class="navbar navbar-expand-lg navbar-dark bg-inverse flex-between">
  <a href="#" class="navbar-brand">Navbar</a>
  <button class="navbar-toggle collapsed" type="button" data-cfw="collapse" data-cfw-collapse-target="#navbar10">
    <span aria-hidden="true">&#8801;</span>
  </button>

  <div class="navbar-collapse collapse flex-between" id="navbar10">
      <div class="navbar-nav">
      <a href="#" class="nav-item nav-link active">Home <span class="sr-only">(current)</span></a>
      <a href="#" class="nav-item nav-link">Features</a>
      <span class="navbar-divider"></span>
      <a href="#" class="nav-item nav-link">Pricing</a>
      <a href="#" class="nav-item nav-link">About</a>
    </div>
  </div>
</nav>
{% endhighlight %}

### Collapsible Content

Our [Collapse widget]({{ site.baseurl }}/widgets/collapse/) can also to toggle hidden content elsewhere on the page.

{% example html %}
<nav class="navbar navbar-light bg-faded">
  <button class="navbar-toggle" type="button" data-cfw="collapse" data-cfw-collapse-target="#exCollapsingNavbar" aria-label="Toggle navigation">
    <span aria-hidden="true">&#8801;</span>
  </button>
  <div class="collapse w-100 mt-0_5" id="exCollapsingNavbar">
    <div class="bg-inverse p-1">
      <h4>Collapsed content</h4>
      Toggleable via the navbar button.
    </div>
  </div>
</nav>
{% endexample %}

## Color Schemes

Theming the navbar has never been easier thanks to the combination of a simple link color modifier class and `background-color` utilities. Put another way, you specify light or dark and apply a background color.

Here are some examples to show what we mean.

<div class="bd-example">
  <nav class="navbar navbar-expand-lg navbar-dark bg-inverse flex-between mb-1">
    <a href="#" class="navbar-brand">Navbar</a>
    <button class="navbar-toggle collapsed" type="button" data-cfw="collapse" data-cfw-collapse-target="#navbar11">
      <span aria-hidden="true">&#8801;</span>
    </button>

    <div class="navbar-collapse collapse flex-between" id="navbar11">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a href="#" class="nav-link active">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">Link</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link disabled" tabindex="-1">Disabled</a>
        </li>
      </ul>
      <form class="form-inline float-right">
        <input class="form-control" type="text" placeholder="Search" aria-label="Search">
        <button class="btn btn-secondary" type="submit">Search</button>
      </form>
    </div>
  </nav>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary flex-between mb-1">
    <a href="#" class="navbar-brand">Navbar</a>
    <button class="navbar-toggle collapsed" type="button" data-cfw="collapse" data-cfw-collapse-target="#navbar12">
      <span aria-hidden="true">&#8801;</span>
    </button>

    <div class="navbar-collapse collapse flex-between" id="navbar12">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a href="#" class="nav-link active">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">Link</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link disabled" tabindex="-1">Disabled</a>
        </li>
      </ul>
      <form class="form-inline float-right">
        <input class="form-control" type="text" placeholder="Search" aria-label="Search">
        <button class="btn btn-secondary" type="submit">Search</button>
      </form>
    </div>
  </nav>
  <nav class="navbar navbar-expand-lg navbar-light flex-between mb-1" style="background-color: #e3f2fd;">
    <a href="#" class="navbar-brand">Navbar</a>
    <button class="navbar-toggle collapsed" type="button" data-cfw="collapse" data-cfw-collapse-target="#navbar13">
      <span aria-hidden="true">&#8801;</span>
    </button>

    <div class="navbar-collapse collapse flex-between" id="navbar13">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a href="#" class="nav-link active">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">Link</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link disabled" tabindex="-1">Disabled</a>
        </li>
      </ul>
      <form class="form-inline float-right">
        <input class="form-control" type="text" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-primary" type="submit">Search</button>
      </form>
    </div>
  </nav>
</div>

{% highlight html %}
<nav class="navbar navbar-dark bg-inverse">
  <!-- Navbar content -->
</nav>

<nav class="navbar navbar-dark bg-primary">
  <!-- Navbar content -->
</nav>

<nav class="navbar navbar-light" style="background-color: #e3f2fd;">
  <!-- Navbar content -->
</nav>
{% endhighlight %}

## Containers

Although it's not required, you can wrap a navbar in a `.container` to center it on a page or add one within to only center the contents of a [fixed or static top navbar](#placement).

{% example html %}
<div class="container">
  <nav class="navbar navbar-light bg-faded">
    <a href="#" class="navbar-brand">Navbar</a>
  </nav>
</div>
{% endexample %}

{% example html %}
<nav class="navbar navbar-light bg-faded">
  <div class="container">
    <a href="#" class="navbar-brand">Navbar</a>
  </div>
</nav>
{% endexample %}

## Placement

Navbars are statically placed by default, or use the [position utilities]({{ site.baseurl }}/utilities/position/) to alter their location.

**Note: `position: sticky`, used for `.sticky-top`, [isn't fully supported in every browser](http://caniuse.com/#feat=css-sticky).**

{% example html %}
<nav class="navbar navbar-light bg-faded">
  <a href="#" class="navbar-brand">Static default</a>
</nav>
{% endexample %}

{% example html %}
<nav class="navbar navbar-light bg-faded fixed-top">
  <a href="#" class="navbar-brand">Fixed top</a>
</nav>
{% endexample %}

{% example html %}
<nav class="navbar navbar-light bg-faded fixed-bottom">
  <a href="#" class="navbar-brand">Fixed bottom</a>
</nav>
{% endexample %}

{% example html %}
<nav class="navbar navbar-light bg-faded sticky-top">
  <a href="#" class="navbar-brand">Sticky top</a>
</nav>
{% endexample %}
