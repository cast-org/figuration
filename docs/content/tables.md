---
layout: docs
title: Tables
group: content
---

Due to the widespread use of tables across third-party widgets like calendars and date pickers, we've designed our tables to be **opt-in**. Just add the base class `.table` to any `<table>`, then extend with custom styles or our various included modifier classes.

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Basic Table

Using the most basic table markup, a `.table` will result in a mostly unstyled table, and will use all available width.

Nested tables are not explicitly supported by Figuration as they can create usability and accessibility issues for screen reader users.  The recommendation would be to break up complex tables into multiple simpler tables.
Check out [MDN's HTML table advanced features and accessibility document](https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Advanced) for additional help when building tables.

{% example html %}
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Header 1</th>
      <th scope="col">Header 2</th>
      <th scope="col">Header 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td colspan="2">Spanned Cell</td>
      <td>Cell</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="col"></th>
      <th scope="col">Footer 1</th>
      <th scope="col">Footer 2</th>
      <th scope="col">Footer 3</th>
    </tr>
  </tfoot>
</table>
{% endexample %}

## Styled Tables

### Striped Rows

Use `.table-striped{-alt}` to add zebra-striping to any table row within the `<tbody>`.  This is done by using a semi-opaque, inset `box-shadow` within each cell to adjust the perceived background color.

Variants include:
- `.table-striped` - darken the striped row's background-color
- `.table-striped-alt` - lighten the striped row's background-color

<div class="cf-example">
  <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Header 1</th>
        <th scope="col">Header 2</th>
        <th scope="col">Header 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td colspan="2">Spanned Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th></th>
        <th>Footer 1</th>
        <th>Footer 2</th>
        <th>Footer 3</th>
      </tr>
    </tfoot>
  </table>
</div>
{% highlight html %}
<table class="table table-striped">
  ...
</table>
{% endhighlight %}

<div class="cf-example">
  <table class="table table-striped-alt bg-dark text-white">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Header 1</th>
        <th scope="col">Header 2</th>
        <th scope="col">Header 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td colspan="2">Spanned Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th></th>
        <th>Footer 1</th>
        <th>Footer 2</th>
        <th>Footer 3</th>
      </tr>
    </tfoot>
  </table>
</div>
{% highlight html %}
<table class="table table-striped-alt bg-dark text-white">
  ...
</table>
{% endhighlight %}

### Hoverable Rows

Add `.table-hover{-alt}` to enable a hover state on table rows within a `<tbody>`. This is done by using a semi-opaque, inset `box-shadow` within each cell to adjust the perceived background color.

Variants include:
- `.table-hover` - darken the hovered row's background-color
- `.table-hover-alt` - lighten the hovered row's background-color

<div class="cf-example">
  <table class="table table-hover">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Header 1</th>
        <th scope="col">Header 2</th>
        <th scope="col">Header 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td colspan="2">Spanned Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th></th>
        <th>Footer 1</th>
        <th>Footer 2</th>
        <th>Footer 3</th>
      </tr>
    </tfoot>
  </table>
</div>
{% highlight html %}
<table class="table table-hover">
  ...
</table>
{% endhighlight %}

<div class="cf-example">
  <table class="table table-hover-alt bg-dark text-white">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Header 1</th>
        <th scope="col">Header 2</th>
        <th scope="col">Header 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td colspan="2">Spanned Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th></th>
        <th>Footer 1</th>
        <th>Footer 2</th>
        <th>Footer 3</th>
      </tr>
    </tfoot>
  </table>
</div>
{% highlight html %}
<table class="table table-hover-alt bg-dark text-white">
  ...
</table>
{% endhighlight %}

### Condensed Table

Add `.table-condensed` to make tables more compact by reducing the cell padding.

<div class="cf-example">
  <table class="table table-condensed">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Header 1</th>
        <th scope="col">Header 2</th>
        <th scope="col">Header 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td colspan="2">Spanned Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th></th>
        <th>Footer 1</th>
        <th>Footer 2</th>
        <th>Footer 3</th>
      </tr>
    </tfoot>
  </table>
</div>
{% highlight html %}
<table class="table table-condensed">
  ...
</table>
{% endhighlight %}

### Narrow Table

Use our [sizing utilities]({{ site.baseurl }}/utilities/sizing/), such as `w-auto`, to control a table's width.

<div class="cf-example">
  <table class="table w-auto">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Header 1</th>
        <th scope="col">Header 2</th>
        <th scope="col">Header 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td colspan="2">Spanned Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th></th>
        <th>Footer 1</th>
        <th>Footer 2</th>
        <th>Footer 3</th>
      </tr>
    </tfoot>
  </table>
</div>
{% highlight html %}
<table class="table w-auto">
  ...
</table>
{% endhighlight %}

## Table Borders

### Divided Table

Add a horizontal border between rows using `.table-divided`.

<div class="cf-example">
  <table class="table table-divided">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Header 1</th>
        <th scope="col">Header 2</th>
        <th scope="col">Header 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td colspan="2">Spanned Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th></th>
        <th>Footer 1</th>
        <th>Footer 2</th>
        <th>Footer 3</th>
      </tr>
    </tfoot>
  </table>
</div>
{% highlight html %}
<table class="table table-divided">
  ...
</table>
{% endhighlight %}

### Ruled Table

Put a border on the top and bottom of a table, and between rows using `.table-ruled`.

<div class="cf-example">
  <table class="table table-ruled">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Header 1</th>
        <th scope="col">Header 2</th>
        <th scope="col">Header 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td colspan="2">Spanned Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th></th>
        <th>Footer 1</th>
        <th>Footer 2</th>
        <th>Footer 3</th>
      </tr>
    </tfoot>
  </table>
</div>
{% highlight html %}
<table class="table table-ruled">
  ...
</table>
{% endhighlight %}

### Pillared Table

Put a vertical border and between columns using `.table-pillared`.

<div class="cf-example">
  <table class="table table-pillared">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Header 1</th>
        <th scope="col">Header 2</th>
        <th scope="col">Header 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td colspan="2">Spanned Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th></th>
        <th>Footer 1</th>
        <th>Footer 2</th>
        <th>Footer 3</th>
      </tr>
    </tfoot>
  </table>
</div>
{% highlight html %}
<table class="table table-pillared">
  ...
</table>
{% endhighlight %}

### Walled Table

Put a border on the sides of a table, and between columns using `.table-walled`.

<div class="cf-example">
  <table class="table table-walled">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Header 1</th>
        <th scope="col">Header 2</th>
        <th scope="col">Header 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td colspan="2">Spanned Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th></th>
        <th>Footer 1</th>
        <th>Footer 2</th>
        <th>Footer 3</th>
      </tr>
    </tfoot>
  </table>
</div>
{% highlight html %}
<table class="table table-walled">
  ...
</table>
{% endhighlight %}

### Celled Table

Put horizontal and vertical borders between rows and columns using `.table-celled`.

<div class="cf-example">
  <table class="table table-celled">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Header 1</th>
        <th scope="col">Header 2</th>
        <th scope="col">Header 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td colspan="2">Spanned Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th></th>
        <th>Footer 1</th>
        <th>Footer 2</th>
        <th>Footer 3</th>
      </tr>
    </tfoot>
  </table>
</div>
{% highlight html %}
<table class="table table-celled">
  ...
</table>
{% endhighlight %}

### Wrapped Table

Put a border all around the outisde of a table with `.table-wrapped`.

<div class="cf-example">
  <table class="table table-wrapped">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Header 1</th>
        <th scope="col">Header 2</th>
        <th scope="col">Header 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td colspan="2">Spanned Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th></th>
        <th>Footer 1</th>
        <th>Footer 2</th>
        <th>Footer 3</th>
      </tr>
    </tfoot>
  </table>
</div>
{% highlight html %}
<table class="table table-wrapped">
  ...
</table>
{% endhighlight %}

### Bordered Table

Put a border around the table and every cell with `.table-bordered`.

<div class="cf-example">
  <table class="table table-bordered">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Header 1</th>
        <th scope="col">Header 2</th>
        <th scope="col">Header 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td colspan="2">Spanned Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th></th>
        <th>Footer 1</th>
        <th>Footer 2</th>
        <th>Footer 3</th>
      </tr>
    </tfoot>
  </table>
</div>
{% highlight html %}
<table class="table table-bordered">
  ...
</table>
{% endhighlight %}

## Captions

A `<caption>` functions like a heading for a table. It helps users with screen readers to find a table and understand what it’s about and decide if they want to read it.

{% example html %}
<table class="table">
  <caption>List of users</caption>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>John</td>
      <td>Doe</td>
      <td>jdoe</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jane</td>
      <td>Smith</td>
      <td>jsmith</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>James</td>
      <td>White</td>
      <td>jwhite</td>
    </tr>
  </tbody>
</table>
{% endexample %}

## Scrolling Tables

Having an issue with tables becoming too wide for their containers? Add a `.table-scroll` wrapper to any `.table` to make them scroll horizontally if they become wider than their container.

{% callout warning %}
Vertical Clipping
{:.h5}

Scrolling tables make use of `overflow-y: hidden`, which clips off any content that goes beyond the bottom or top edges of the table. In particular, this can clip off dropdown menus and other third-party widgets.
{% endcallout %}

### Always Scrolling

<div class="cf-example">
  <div class="table-scroll">
    <table class="table table-bordered text-nowrap">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Header 1</th>
          <th scope="col">Header 2</th>
          <th scope="col">Header 3</th>
          <th scope="col">Header 4</th>
          <th scope="col">Header 5</th>
          <th scope="col">Header 6</th>
          <th scope="col">Header 7</th>
          <th scope="col">Header 8</th>
          <th scope="col">Header 9</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th></th>
          <th>Footer 1</th>
          <th>Footer 2</th>
          <th>Footer 3</th>
          <th>Footer 4</th>
          <th>Footer 5</th>
          <th>Footer 6</th>
          <th>Footer 7</th>
          <th>Footer 8</th>
          <th>Footer 9</th>
        </tr>
      </tfoot>
    </table>
  </div>
</div>

{% highlight html %}
<div class="table-scroll">
    <table class="table table-bordered">
        ...
    </table>
</div>
{% endhighlight %}

### Responsive Scrolling

Table scrolling is also available in responsive variants of the form `.table-scroll-*`, where the table will horizontally scroll when the table is wider than it's container and when the viewport is at the given breakpoint or smaller.

Responsive variants are:
- `.table-scroll-xs`
- `.table-scroll-sm`
- `.table-scroll-md`
- `.table-scroll-lg`

**Heads up!** There is no `.table-scroll-*` class created for the largest breakpoint, `.table-scroll-xl`, since it is functionally equivalent to using `.table-scroll`.

<div class="cf-example">
  <div class="table-scroll-xs">
    <table class="table table-bordered text-nowrap">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Header 1</th>
          <th scope="col">Header 2</th>
          <th scope="col">Header 3</th>
          <th scope="col">Header 4</th>
          <th scope="col">Header 5</th>
          <th scope="col">Header 6</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th></th>
          <th>Footer 1</th>
          <th>Footer 2</th>
          <th>Footer 3</th>
          <th>Footer 4</th>
          <th>Footer 5</th>
          <th>Footer 6</th>
        </tr>
      </tfoot>
    </table>
  </div>

  <div class="table-scroll-sm">
    <table class="table table-bordered text-nowrap">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Header 1</th>
          <th scope="col">Header 2</th>
          <th scope="col">Header 3</th>
          <th scope="col">Header 4</th>
          <th scope="col">Header 5</th>
          <th scope="col">Header 6</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th></th>
          <th>Footer 1</th>
          <th>Footer 2</th>
          <th>Footer 3</th>
          <th>Footer 4</th>
          <th>Footer 5</th>
          <th>Footer 6</th>
        </tr>
      </tfoot>
    </table>
  </div>

  <div class="table-scroll-md">
    <table class="table table-bordered text-nowrap">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Header 1</th>
          <th scope="col">Header 2</th>
          <th scope="col">Header 3</th>
          <th scope="col">Header 4</th>
          <th scope="col">Header 5</th>
          <th scope="col">Header 6</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th></th>
          <th>Footer 1</th>
          <th>Footer 2</th>
          <th>Footer 3</th>
          <th>Footer 4</th>
          <th>Footer 5</th>
          <th>Footer 6</th>
        </tr>
      </tfoot>
    </table>
  </div>

  <div class="table-scroll-lg">
    <table class="table table-bordered text-nowrap">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Header 1</th>
          <th scope="col">Header 2</th>
          <th scope="col">Header 3</th>
          <th scope="col">Header 4</th>
          <th scope="col">Header 5</th>
          <th scope="col">Header 6</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th></th>
          <th>Footer 1</th>
          <th>Footer 2</th>
          <th>Footer 3</th>
          <th>Footer 4</th>
          <th>Footer 5</th>
          <th>Footer 6</th>
        </tr>
      </tfoot>
    </table>
  </div>
</div>

{% highlight html %}
<div class="table-scroll-xs">
    <table class="table table-bordered">
        ...
    </table>
</div>

<div class="table-scroll-sm">
    <table class="table table-bordered">
        ...
    </table>
</div>

<div class="table-scroll-md">
    <table class="table table-bordered">
        ...
    </table>
</div>

<div class="table-scroll-lg">
    <table class="table table-bordered">
        ...
    </table>
</div>
{% endhighlight %}

## Color Variants

Use [color utility classes]({{ site.baseurl }}/utilities/color/) to style tables with color.

{% callout warning %}
Conveying Meaning to Assistive Technologies
{:.h5}

Please refer to the [Accessiblity notes about conveying meaning with color]({{ site.baseurl }}/get-started/accessibility/#conveying-meaning-with-color).
{% endcallout %}

### Inverse Table

Easily create an inverted table with light text on a dark background.

<div class="cf-example">
  <table class="table table-bordered bg-dark border-secondary text-white">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Header 1</th>
        <th scope="col">Header 2</th>
        <th scope="col">Header 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td colspan="2">Spanned Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th></th>
        <th>Footer 1</th>
        <th>Footer 2</th>
        <th>Footer 3</th>
      </tr>
    </tfoot>
  </table>
</div>
{% highlight html %}
<table class="table table-bordered bg-dark border-secondary text-white">
  ...
</table>
{% endhighlight %}

### Header/Footer Color

Use [text or background utilities]({{ site.baseurl }}/utilities/color/) to alter the look of the header and/or footer.

<div class="cf-example">
  <table class="table">
    <thead class="bg-dark text-light">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Header 1</th>
        <th scope="col">Header 2</th>
        <th scope="col">Header 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td colspan="2">Spanned Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
    </tbody>
    <tfoot class="bg-light text-dark">
      <tr>
        <th></th>
        <th>Footer 1</th>
        <th>Footer 2</th>
        <th>Footer 3</th>
      </tr>
    </tfoot>
  </table>
</div>
{% highlight html %}
<table class="table table-bordered bg-dark border-secondary text-white">
  <thead class "bg-dark text-light">
    ...
  </thead>
  <tbody>
    ...
  </tbody>
  <tfoot class="bg-light text-dark">
    ...
  </tfoot>
</table>
{% endhighlight %}

### Border Color

`.table`s are defined with `border-{side}-color: inherit;`, allowing for easy recoloring of the borders by setting the `border-color` on the `.table` itself.  Setting a `border-color` on a table row or cell will affect the border color for that specific element and it's descendants.

All cells use `border-top` for their horizontal borders,  while `<thead>` adds a `border-bottom` to `<th>` elements.
All cells use `border-left` for their vertical ones, unless they are the last ones in a row, then they potentially add a `border-right` depending on the modifier used.

<div class="cf-example"
  <table class="table table-bordered border-primary">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Header 1</th>
        <th scope="col">Header 2</th>
        <th scope="col">Header 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td colspan="2">Spanned Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th></th>
        <th>Footer 1</th>
        <th>Footer 2</th>
        <th>Footer 3</th>
      </tr>
    </tfoot>
  </table>
</div>
{% highlight html %}
<table class="table table-bordered border-primary">
  ...
</table>
{% endhighlight %}

<div class="cf-example">
  <table class="table table-divided">
    <thead class="border-primary">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Header 1</th>
        <th scope="col">Header 2</th>
        <th scope="col">Header 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td colspan="2">Spanned Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
    </tbody>
    <tfoot class="border-danger">
      <tr>
        <th></th>
        <th>Footer 1</th>
        <th>Footer 2</th>
        <th>Footer 3</th>
      </tr>
    </tfoot>
  </table>
</div>
{% highlight html %}
<table class="table table-divided">
  <thead class="border-primary">
    ...
  </thead>
  <tbody>
    ...
  </tbody>
  <tfoot class="border-danger">
    ...
  </tfoot>
</table>
{% endhighlight %}

### Contextual Classes

Use contextual classes to color table rows or individual cells.

<div class="cf-example">
    <table class="table table-bordered">
        <tbody>
            <tr>
                <th scope="row">Default</th>
                <td>Cell</td>
                <td>Cell</td>
            </tr>
            <tr class="table-active">
                <th scope="row">Active</th>
                <td>Cell</td>
                <td>Cell</td>
            </tr>
            <tr class="table-primary">
                <th scope="row">Primary</th>
                <td>Cell</td>
                <td>Cell</td>
            </tr>
            <tr class="table-secondary">
                <th scope="row">Secondary</th>
                <td>Cell</td>
                <td>Cell</td>
            </tr>
            <tr class="table-success">
                <th scope="row">Success</th>
                <td>Cell</td>
                <td>Cell</td>
            </tr>
            <tr class="table-info">
                <th scope="row">Info</th>
                <td>Cell</td>
                <td>Cell</td>
            </tr>
            <tr class="table-warning">
                <th scope="row">Warning</th>
                <td>Cell</td>
                <td>Cell</td>
            </tr>
            <tr class="table-danger">
                <th scope="row">Danger</th>
                <td>Cell</td>
                <td>Cell</td>
            </tr>
            <tr class="table-light">
                <th scope="row">Light</th>
                <td>Cell</td>
                <td>Cell</td>
            </tr>
            <tr class="table-dark">
                <th scope="row">Dark</th>
                <td>Cell</td>
                <td>Cell</td>
            </tr>
        </tbody>
    </table>
</div>

{% highlight html %}
<!-- On rows -->
<tr class="table-active">...</tr>
<tr class="table-success">...</tr>
<tr class="table-info">...</tr>
<tr class="table-warning">...</tr>
<tr class="table-danger">...</tr>

<!-- On cells (`td` or `th`) -->
<tr>
  <td class="table-active">...</td>
  <td class="table-success">...</td>
  <td class="table-info">...</td>
  <td class="table-warning">...</td>
  <td class="table-danger">...</td>
</tr>
{% endhighlight %}

You may also use [text or background utilities]({{ site.baseurl }}/utilities/color/).

<div class="cf-example">
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Column heading</th>
        <th scope="col">Column heading</th>
        <th scope="col">Column heading</th>
      </tr>
    </thead>
    <tbody>
      <tr class="bg-primary text-white">
        <th scope="row">1</th>
        <td>Column content</td>
        <td>Column content</td>
        <td>Column content</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Column content</td>
        <td>Column content</td>
        <td>Column content</td>
      </tr>
      <tr class="bg-success">
        <th scope="row">3</th>
        <td>Column content</td>
        <td>Column content</td>
        <td>Column content</td>
      </tr>
      <tr>
        <th scope="row">4</th>
        <td>Column content</td>
        <td>Column content</td>
        <td>Column content</td>
      </tr>
      <tr class="bg-info text-white">
        <th scope="row">5</th>
        <td>Column content</td>
        <td>Column content</td>
        <td>Column content</td>
      </tr>
      <tr>
        <th scope="row">6</th>
        <td>Column content</td>
        <td>Column content</td>
        <td>Column content</td>
      </tr>
      <tr class="bg-warning">
        <th scope="row">7</th>
        <td>Column content</td>
        <td>Column content</td>
        <td>Column content</td>
      </tr>
      <tr>
        <th scope="row">8</th>
        <td>Column content</td>
        <td>Column content</td>
        <td>Column content</td>
      </tr>
      <tr class="bg-danger text-white">
        <th scope="row">9</th>
        <td>Column content</td>
        <td>Column content</td>
        <td>Column content</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th></th>
        <th>Column footer</th>
        <th>Column footer</th>
        <th>Column footer</th>
      </tr>
    </tfoot>
  </table>
</div>

{% highlight html %}
<!-- On rows -->
<tr class="bg-primary">...</tr>
<tr class="bg-success">...</tr>
<tr class="bg-info">...</tr>
<tr class="bg-warning">...</tr>
<tr class="bg-danger">...</tr>

<!-- On cells (`td` or `th`) -->
<tr>
  <td class="bg-primary">...</td>
  <td class="bg-success">...</td>
  <td class="bg-info">...</td>
  <td class="bg-warning">...</td>
  <td class="bg-danger">...</td>
</tr>
{% endhighlight %}

You can also use [text or background utilities]({{ site.baseurl }}/utilities/color/) to achieve multiple styles.

{% example html %}
<table class="table">
  <thead class="text-light bg-primary">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Header 1</th>
      <th scope="col">Header 2</th>
      <th scope="col">Header 3</th>
    </tr>
  </thead>
  <tbody>
    <tr class="text-info">
      <th scope="row">1</th>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td colspan="2" class="text-success">table cell</td>
      <td class="text-danger">table cell</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td class="text-light bg-success">table cell</td>
      <td>Cell</td>
      <td class="text-light bg-danger">table cell</td>
    </tr>
  </tbody>
  <tfoot class="bg-info text-light">
    <tr>
      <th></th>
      <th>Footer 1</th>
      <th>Footer 2</th>
      <th>Footer 3</th>
    </tr>
  </tfoot>
</table>
{% endexample %}
