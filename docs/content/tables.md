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
</table>
{% endexample %}

## Contextual Classes

Use contextual classes to color table rows or individual cells.

<div class="table-responsive">
  <table class="table table-bordered table-striped">
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
</div>

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
  </table>
</div>

{% highlight html %}
<!-- On rows -->
<tr class="table-active">...</tr>
<tr class="table-success">...</tr>
<tr class="table-warning">...</tr>
<tr class="table-danger">...</tr>
<tr class="table-info">...</tr>

<!-- On cells (`td` or `th`) -->
<tr>
  <td class="table-active">...</td>
  <td class="table-success">...</td>
  <td class="table-warning">...</td>
  <td class="table-danger">...</td>
  <td class="table-info">...</td>
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
  </table>
</div>

{% highlight html %}
<!-- On rows -->
<tr class="bg-primary">...</tr>
<tr class="bg-success">...</tr>
<tr class="bg-warning">...</tr>
<tr class="bg-danger">...</tr>
<tr class="bg-info">...</tr>

<!-- On cells (`td` or `th`) -->
<tr>
  <td class="bg-primary">...</td>
  <td class="bg-success">...</td>
  <td class="bg-warning">...</td>
  <td class="bg-danger">...</td>
  <td class="bg-info">...</td>
</tr>
{% endhighlight %}

{% capture callout-include %}{% include callout-warning-color-assistive-technologies.md %}{% endcapture %}
{{ callout-include | markdownify }}

## Responsive Tables

Create responsive tables by wrapping any `.table` in `.table-responsive` to make them scroll horizontally if they become too wide, otherwise, you will not see any difference in these tables.  You might need to reduce the size of your browser in order for the examples scroll.

{% callout warning %}
#### Firefox and Fieldsets

Firefox has some awkward fieldset styling involving `width` that interferes with the responsive table. This cannot be overridden without a Firefox-specific hack that we **don't** provide in Figuration:

{% highlight css %}
@-moz-document url-prefix() {
  fieldset { display: table-cell; }
}
{% endhighlight %}

For more information, read [this Stack Overflow answer](https://stackoverflow.com/questions/17408815/fieldset-resizes-wrong-appears-to-have-unremovable-min-width-min-content/17863685#17863685).
{% endcallout %}

<div class="cf-example">
  <div class="table-responsive">
    <table class="table">
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
    </table>
  </div>

  <div class="table-responsive">
    <table class="table table-bordered">
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
    </table>
  </div>
</div>

{% highlight html %}
<div class="table-responsive">
  <table class="table">
    ...
  </table>
</div>
{% endhighlight %}
