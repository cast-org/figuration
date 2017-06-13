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


## Examples

Using the most basic table markup, here's how `.table`-based tables look in Figuration. All table styles are inherited, meaning any nested tables will be styled in the same manner as the parent.

{% example html %}
<table class="table">
  <thead>
    <tr>
      <th>#</th>
      <th>Table Header 1</th>
      <th>Table Header 2</th>
      <th>Table Header 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>table cell</td>
      <td>table cell</td>
      <td>table cell</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td colspan="2">table cell</td>
      <td>table cell</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>table cell</td>
      <td>table cell</td>
      <td>table cell</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th></th>
      <th>Table Footer 1</th>
      <th>Table Footer 2</th>
      <th>Table Footer 3</th>
    </tr>
  </tfoot>
</table>
{% endexample %}

You can also invert the colors---with light text on dark backgrounds---with `.table-inverse`.

{% example html %}
<table class="table table-inverse">
  <thead>
    <tr>
      <th>#</th>
      <th>Table Header 1</th>
      <th>Table Header 2</th>
      <th>Table Header 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>table cell</td>
      <td>table cell</td>
      <td>table cell</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td colspan="2">table cell</td>
      <td>table cell</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>table cell</td>
      <td>table cell</td>
      <td>table cell</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th></th>
      <th>Table Footer 1</th>
      <th>Table Footer 2</th>
      <th>Table Footer 3</th>
    </tr>
  </tfoot>
</table>
{% endexample %}

## Table Head Options

Similar to default and inverse tables, use one of two modifier classes to make `<thead>`s appear light or dark gray.

{% example html %}
<table class="table">
  <thead class="thead-inverse">
    <tr>
      <th>#</th>
      <th>Table Header 1</th>
      <th>Table Header 2</th>
      <th>Table Header 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>table cell</td>
      <td>table cell</td>
      <td>table cell</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td colspan="2">table cell</td>
      <td>table cell</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>table cell</td>
      <td>table cell</td>
      <td>table cell</td>
    </tr>
  </tbody>
</table>

<table class="table">
  <thead class="thead-default">
    <tr>
      <th>#</th>
      <th>Table Header 1</th>
      <th>Table Header 2</th>
      <th>Table Header 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>table cell</td>
      <td>table cell</td>
      <td>table cell</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td colspan="2">table cell</td>
      <td>table cell</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>table cell</td>
      <td>table cell</td>
      <td>table cell</td>
    </tr>
  </tbody>
</table>
{% endexample %}

## Table Footer Options

Just like the headers, use one of two modifier classes to make `<tfoot>`s appear light or dark gray.

{% example html %}
<table class="table">
  <thead>
    <tr>
      <th>#</th>
      <th>Table Header 1</th>
      <th>Table Header 2</th>
      <th>Table Header 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>table cell</td>
      <td>table cell</td>
      <td>table cell</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td colspan="2">table cell</td>
      <td>table cell</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>table cell</td>
      <td>table cell</td>
      <td>table cell</td>
    </tr>
  </tbody>
  <tfoot class="tfoot-inverse">
    <tr>
      <th></th>
      <th>Table Footer 1</th>
      <th>Table Footer 2</th>
      <th>Table Footer 3</th>
    </tr>
  </tfoot>
</table>

<table class="table">
  <thead>
    <tr>
      <th>#</th>
      <th>Table Header 1</th>
      <th>Table Header 2</th>
      <th>Table Header 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>table cell</td>
      <td>table cell</td>
      <td>table cell</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td colspan="2">table cell</td>
      <td>table cell</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>table cell</td>
      <td>table cell</td>
      <td>table cell</td>
    </tr>
  </tbody>
  <tfoot class="tfoot-default">
    <tr>
      <th></th>
      <th>Table Footer 1</th>
      <th>Table Footer 2</th>
      <th>Table Footer 3</th>
    </tr>
  </tfoot>
</table>
{% endexample %}

## Striped Rows

Use `.table-striped` to add zebra-striping to any table row within the `<tbody>`.

{% example html %}
<table class="table table-striped">
  <thead>
    <tr>
      <th>#</th>
      <th>Table Header 1</th>
      <th>Table Header 2</th>
      <th>Table Header 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>table cell</td>
      <td>table cell</td>
      <td>table cell</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td colspan="2">table cell</td>
      <td>table cell</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>table cell</td>
      <td>table cell</td>
      <td>table cell</td>
    </tr>
  </tbody>
</table>
{% endexample %}

{% example html %}
<table class="table table-striped table-inverse">
  <thead>
    <tr>
      <th>#</th>
      <th>Table Header 1</th>
      <th>Table Header 2</th>
      <th>Table Header 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>table cell</td>
      <td>table cell</td>
      <td>table cell</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td colspan="2">table cell</td>
      <td>table cell</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>table cell</td>
      <td>table cell</td>
      <td>table cell</td>
    </tr>
  </tbody>
</table>
{% endexample %}

## Bordered Table

Add `.table-bordered` for borders on all sides of the table and cells.

{% example html %}
<table class="table table-bordered">
  <thead>
    <tr>
      <th>#</th>
      <th>Table Header 1</th>
      <th>Table Header 2</th>
      <th>Table Header 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>table cell</td>
      <td>table cell</td>
      <td>table cell</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td colspan="2">table cell</td>
      <td>table cell</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>table cell</td>
      <td>table cell</td>
      <td>table cell</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th></th>
      <th>Table Footer 1</th>
      <th>Table Footer 2</th>
      <th>Table Footer 3</th>
    </tr>
  </tfoot>
</table>
{% endexample %}

{% example html %}
<table class="table table-bordered table-inverse">
  <thead>
    <tr>
      <th>#</th>
      <th>Table Header 1</th>
      <th>Table Header 2</th>
      <th>Table Header 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>table cell</td>
      <td>table cell</td>
      <td>table cell</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td colspan="2">table cell</td>
      <td>table cell</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>table cell</td>
      <td>table cell</td>
      <td>table cell</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th></th>
      <th>Table Footer 1</th>
      <th>Table Footer 2</th>
      <th>Table Footer 3</th>
    </tr>
  </tfoot>
</table>
{% endexample %}

## Borderless Table

Add `.table-borderless` to remove borders from all sides of the cells, but leave a border between the table's header or footer and the table body.

{% example html %}
<table class="table table-borderless">
  <thead>
    <tr>
      <th>#</th>
      <th>Table Header 1</th>
      <th>Table Header 2</th>
      <th>Table Header 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>table cell</td>
      <td>table cell</td>
      <td>table cell</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td colspan="2">table cell</td>
      <td>table cell</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>table cell</td>
      <td>table cell</td>
      <td>table cell</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th></th>
      <th>Table Footer 1</th>
      <th>Table Footer 2</th>
      <th>Table Footer 3</th>
    </tr>
  </tfoot>
</table>
{% endexample %}

{% example html %}
<table class="table table-borderless table-inverse">
  <thead>
    <tr>
      <th>#</th>
      <th>Table Header 1</th>
      <th>Table Header 2</th>
      <th>Table Header 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>table cell</td>
      <td>table cell</td>
      <td>table cell</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td colspan="2">table cell</td>
      <td>table cell</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>table cell</td>
      <td>table cell</td>
      <td>table cell</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th></th>
      <th>Table Footer 1</th>
      <th>Table Footer 2</th>
      <th>Table Footer 3</th>
    </tr>
  </tfoot>
</table>
{% endexample %}

## Non-Bordered Table

Add `.table-noborder` to remove borders from all sides of the cells, including the border between the table's header or footer and the table body.

{% example html %}
<table class="table table-noborder">
  <thead>
    <tr>
      <th>#</th>
      <th>Table Header 1</th>
      <th>Table Header 2</th>
      <th>Table Header 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>table cell</td>
      <td>table cell</td>
      <td>table cell</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td colspan="2">table cell</td>
      <td>table cell</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>table cell</td>
      <td>table cell</td>
      <td>table cell</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th></th>
      <th>Table Footer 1</th>
      <th>Table Footer 2</th>
      <th>Table Footer 3</th>
    </tr>
  </tfoot>
</table>
{% endexample %}

{% example html %}
<table class="table table-noborder table-inverse">
  <thead>
    <tr>
      <th>#</th>
      <th>Table Header 1</th>
      <th>Table Header 2</th>
      <th>Table Header 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>table cell</td>
      <td>table cell</td>
      <td>table cell</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td colspan="2">table cell</td>
      <td>table cell</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>table cell</td>
      <td>table cell</td>
      <td>table cell</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th></th>
      <th>Table Footer 1</th>
      <th>Table Footer 2</th>
      <th>Table Footer 3</th>
    </tr>
  </tfoot>
</table>
{% endexample %}

## Mixed-Border Table

Mix `.table-bordered` along with `.table-borderless` or `.table-noborder` to vary the table's borders.

{% example html %}
<table class="table table-bordered table-borderless">
  <thead>
    <tr>
      <th>#</th>
      <th>Table Header 1</th>
      <th>Table Header 2</th>
      <th>Table Header 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>table cell</td>
      <td>table cell</td>
      <td>table cell</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td colspan="2">table cell</td>
      <td>table cell</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>table cell</td>
      <td>table cell</td>
      <td>table cell</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th></th>
      <th>Table Footer 1</th>
      <th>Table Footer 2</th>
      <th>Table Footer 3</th>
    </tr>
  </tfoot>
</table>
{% endexample %}

{% example html %}
<table class="table table-bordered table-noborder">
  <thead>
    <tr>
      <th>#</th>
      <th>Table Header 1</th>
      <th>Table Header 2</th>
      <th>Table Header 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>table cell</td>
      <td>table cell</td>
      <td>table cell</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td colspan="2">table cell</td>
      <td>table cell</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>table cell</td>
      <td>table cell</td>
      <td>table cell</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th></th>
      <th>Table Footer 1</th>
      <th>Table Footer 2</th>
      <th>Table Footer 3</th>
    </tr>
  </tfoot>
</table>
{% endexample %}

## Hoverable Rows

Add `.table-hover` to enable a hover state on table rows within a `<tbody>`.

{% example html %}
<table class="table table-hover">
  <thead>
    <tr>
      <th>#</th>
      <th>Table Header 1</th>
      <th>Table Header 2</th>
      <th>Table Header 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>table cell</td>
      <td>table cell</td>
      <td>table cell</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td colspan="2">table cell</td>
      <td>table cell</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>table cell</td>
      <td>table cell</td>
      <td>table cell</td>
    </tr>
  </tbody>
</table>
{% endexample %}

{% example html %}
<table class="table table-hover table-inverse">
  <thead>
    <tr>
      <th>#</th>
      <th>Table Header 1</th>
      <th>Table Header 2</th>
      <th>Table Header 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>table cell</td>
      <td>table cell</td>
      <td>table cell</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td colspan="2">table cell</td>
      <td>table cell</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>table cell</td>
      <td>table cell</td>
      <td>table cell</td>
    </tr>
  </tbody>
</table>
{% endexample %}

## Condensed Table

Add `.table-condensed` to make tables more compact by reducing the cell padding.

{% example html %}
<table class="table table-condensed">
  <thead>
    <tr>
      <th>#</th>
      <th>Table Header 1</th>
      <th>Table Header 2</th>
      <th>Table Header 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>table cell</td>
      <td>table cell</td>
      <td>table cell</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td colspan="2">table cell</td>
      <td>table cell</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>table cell</td>
      <td>table cell</td>
      <td>table cell</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th></th>
      <th>Table Footer 1</th>
      <th>Table Footer 2</th>
      <th>Table Footer 3</th>
    </tr>
  </tfoot>
</table>
{% endexample %}

{% example html %}
<table class="table table-condensed table-inverse">
  <thead>
    <tr>
      <th>#</th>
      <th>Table Header 1</th>
      <th>Table Header 2</th>
      <th>Table Header 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>table cell</td>
      <td>table cell</td>
      <td>table cell</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td colspan="2">table cell</td>
      <td>table cell</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>table cell</td>
      <td>table cell</td>
      <td>table cell</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th></th>
      <th>Table Footer 1</th>
      <th>Table Footer 2</th>
      <th>Table Footer 3</th>
    </tr>
  </tfoot>
</table>
{% endexample %}

## Contextual Classes

Use contextual classes to color table rows or individual cells.

{% callout warning %}
Conveying Meaning to Assistive Technologies
{:.h5}

Please refer to the [Accessiblity notes about conveying meaning with color]({{ site.baseurl }}/get-started/accessibility/#conveying-meaning-with-color).
{% endcallout %}

<table class="table table-scroll table-bordered table-striped">
  <thead>
    <tr>
      <th>Class</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
        <code>.table-active</code>
      </th>
      <td>Applies the hover color to a particular row or cell</td>
    </tr>
    <tr>
      <th scope="row">
        <code>.table-success</code>
      </th>
      <td>Indicates a successful or positive action</td>
    </tr>
    <tr>
      <th scope="row">
        <code>.table-info</code>
      </th>
      <td>Indicates a neutral informative change or action</td>
    </tr>
    <tr>
      <th scope="row">
        <code>.table-warning</code>
      </th>
      <td>Indicates a warning that might need attention</td>
    </tr>
    <tr>
      <th scope="row">
        <code>.table-danger</code>
      </th>
      <td>Indicates a dangerous or potentially negative action</td>
    </tr>
  </tbody>
</table>

<div class="cf-example">
  <table class="table">
    <thead>
      <tr>
        <th>#</th>
        <th>Column heading</th>
        <th>Column heading</th>
        <th>Column heading</th>
      </tr>
    </thead>
    <tbody>
      <tr class="table-active">
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
      <tr class="table-success">
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
      <tr class="table-info">
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
      <tr class="table-warning">
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
      <tr class="table-danger">
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

Regular table background variants are not available with the inverse table, however, you may use [text or background utilities]({{ site.baseurl }}/utilities/color/#contextual-colors-and-backgrounds) to achieve similar styles.

<div class="cf-example">
  <table class="table table-inverse">
    <thead>
      <tr>
        <th>#</th>
        <th>Column heading</th>
        <th>Column heading</th>
        <th>Column heading</th>
      </tr>
    </thead>
    <tbody>
      <tr class="bg-primary">
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
      <tr class="bg-info">
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
      <tr class="bg-danger">
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

You can also use [text or background utilities]({{ site.baseurl }}/utilities/color/#contextual-colors-and-backgrounds) to achieve multiple styles.

{% example html %}
<table class="table">
  <thead class="text-light bg-blue-500">
    <tr>
      <th>#</th>
      <th>Table Header 1</th>
      <th>Table Header 2</th>
      <th>Table Header 3</th>
    </tr>
  </thead>
  <tbody>
    <tr class="text-cyan-500">
      <th scope="row">1</th>
      <td>table cell</td>
      <td>table cell</td>
      <td>table cell</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td colspan="2" class="text-success">table cell</td>
      <td class="text-danger">table cell</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td class="text-light bg-success">table cell</td>
      <td>table cell</td>
      <td class="text-dark bg-red-100">table cell</td>
    </tr>
  </tbody>
  <tfoot class="bg-blue-100">
    <tr>
      <th></th>
      <th>Table Footer 1</th>
      <th>Table Footer 2</th>
      <th>Table Footer 3</th>
    </tr>
  </tfoot>
</table>
{% endexample %}

## Scrolling Tables

Having an issue with tables becoming too wide for their containers? Add `.table-scroll` to any `.table` to make them scroll horizontally if they become wider than their container.

{% callout warning %}
Vertical Clipping
{:.h5}

Scrolling tables make use of `overflow-y: hidden`, which clips off any content that goes beyond the bottom or top edges of the table. In particular, this can clip off dropdown menus and other third-party widgets.
{% endcallout %}

<div class="cf-example">
  <table class="table table-scroll">
    <thead>
      <tr>
        <th>#</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th></th>
        <th>Table footer</th>
        <th>Table footer</th>
        <th>Table footer</th>
        <th>Table footer</th>
        <th>Table footer</th>
        <th>Table footer</th>
        <th>Table footer</th>
        <th>Table footer</th>
      </tr>
    </tfoot>
  </table>

  <table class="table table-scroll table-bordered">
    <thead>
      <tr>
        <th>#</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th></th>
        <th>Table footer</th>
        <th>Table footer</th>
        <th>Table footer</th>
        <th>Table footer</th>
        <th>Table footer</th>
        <th>Table footer</th>
        <th>Table footer</th>
        <th>Table footer</th>
      </tr>
    </tfoot>
  </table>
</div>

{% highlight html %}
<table class="table table-scroll">
  ...
</table>
{% endhighlight %}

Table scrolling is also available in repsonsive variants of the form `.table-scroll-*-down`, where the table will horizontally scroll when the table is wider than it's container and when the viewport is at the given breakpoint or smaller.

Responsive variants are:
- `.table-scroll-xs-down`
- `.table-scroll-sm-down`
- `.table-scroll-md-down`
- `.table-scroll-lg-down`

**Heads up!** There is no `.table-scroll-*-down` class created for the largest breakpoint, `.table-scroll-xl-down`, since it is functionally equivalent to using `.table-scroll`.

{% example html %}
  <table class="table table-scroll-md-down">
    <thead>
      <tr>
        <th>#</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th></th>
        <th>Table footer</th>
        <th>Table footer</th>
        <th>Table footer</th>
        <th>Table footer</th>
        <th>Table footer</th>
        <th>Table footer</th>
      </tr>
    </tfoot>
  </table>
{% endexample %}
