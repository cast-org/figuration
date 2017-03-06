---
layout: docs
title: Pagination
group: components
---

Pagination links indicate a series of related content exists across multiple pages. Typically these are used where a multi-page approach to long lists of content improves general performance, such as in search results.

List groups have support for both an `inline-block` style layout, along with both the opt-in flexbox and [full flexbox]({{ site.baseurl }}/layout/flexbox#full-flexbox-mode) modes.  To use the opt-in method, simply add a `.pagination-flex` class to the `.pagination` element.

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Overview

Pagination is designed to be a large block of connected links that is hard to miss, easily scalable, and provide large click areas. It is built with list HTML elements so screen readers can announce the number of available links. Use a wrapping `<nav>` element to identify it as a navigation section to screen readers and other assistive technologies.

{% example html %}
<nav aria-label="Page navigation">
  <ul class="pagination">
    <li class="page-item"><a href="#" class="page-link">Previous</a></li>
    <li class="page-item"><a href="#" class="page-link">1</a></li>
    <li class="page-item"><a href="#" class="page-link">2</a></li>
    <li class="page-item"><a href="#" class="page-link">3</a></li>
    <li class="page-item"><a href="#" class="page-link">Next</a></li>
  </ul>
</nav>
{% endexample %}

## Using Icons

Want to use an icon or symbol in place of text for some pagination links? Be sure to provide proper screen reader support with `aria` attributes and the `.sr-only` utility.

{% example html %}
<nav aria-label="Page navigation">
  <ul class="pagination">
    <li class="page-item">
      <a href="#" class="page-link" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
        <span class="sr-only">Previous</span>
      </a>
    </li>
    <li class="page-item"><a href="#" class="page-link">1</a></li>
    <li class="page-item"><a href="#" class="page-link">2</a></li>
    <li class="page-item"><a href="#" class="page-link">3</a></li>
    <li class="page-item">
      <a href="#" class="page-link" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
        <span class="sr-only">Next</span>
      </a>
    </li>
  </ul>
</nav>
{% endexample %}

## Disabled and Active States

Links are customizable for different circumstances. Use `.disabled` for unclickable links and `.active` to indicate the current page.

{% callout warning %}
Disabling Anchors
{:.h5}

Please refer to the [Accessiblity notes about disabled anchors]({{ site.baseurl }}/get-started/accessibility/#disabled-anchors).
{% endcallout %}

{% example html %}
<nav aria-label="...">
  <ul class="pagination">
    <li class="page-item">
      <a href="#" class="page-link disabled" tabindex="-1">Previous</a>
    </li>
    <li class="page-item">
      <a href="#" class="page-link active">
        1
        <span class="sr-only">(current)</span>
      </a>
    </li>
    <li class="page-item"><a href="#" class="page-link">2</a></li>
    <li class="page-item"><a href="#" class="page-link">3</a></li>
    <li class="page-item"><a href="#" class="page-link">Next</a></li>
  </ul>
</nav>
{% endexample %}

You can optionally swap out active or disabled anchors for `<span>`, or omit the anchor in the case of the prev/next arrows, to remove click functionality and prevent keyboard focus while retaining intended styles.

{% example html %}
<nav aria-label="...">
  <ul class="pagination">
    <li class="page-item">
      <span class="page-link disabled">Previous</span>
    </li>
    <li class="page-item">
      <span class="page-link active">
        1
        <span class="sr-only">(current)</span>
      </span>
    </li>
    <li class="page-item"><a href="#" class="page-link">2</a></li>
    <li class="page-item"><a href="#" class="page-link">3</a></li>
    <li class="page-item"><a href="#" class="page-link">Next</a></li>
  </ul>
</nav>
{% endexample %}

## Sizes

Fancy larger or smaller pagination? Add `.pagination-xs`, `.pagination-sm`, `.pagination-lg`,  or `.pagination-xl` for additional sizes.

<div class="cf-example">
  <nav aria-label="...">
    <ul class="pagination pagination-xl">
      <li class="page-item">
        <a href="#" class="page-link" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
          <span class="sr-only">Previous</span>
        </a>
      </li>
      <li class="page-item"><a href="#" class="page-link">1</a></li>
      <li class="page-item"><a href="#" class="page-link">2</a></li>
      <li class="page-item"><a href="#" class="page-link">3</a></li>
      <li class="page-item">
        <a href="#" class="page-link" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
          <span class="sr-only">Next</span>
        </a>
      </li>
    </ul>
  </nav>

  <nav aria-label="...">
    <ul class="pagination pagination-lg">
      <li class="page-item">
        <a href="#" class="page-link" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
          <span class="sr-only">Previous</span>
        </a>
      </li>
      <li class="page-item"><a href="#" class="page-link">1</a></li>
      <li class="page-item"><a href="#" class="page-link">2</a></li>
      <li class="page-item"><a href="#" class="page-link">3</a></li>
      <li class="page-item">
        <a href="#" class="page-link" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
          <span class="sr-only">Next</span>
        </a>
      </li>
    </ul>
  </nav>

  <nav aria-label="...">
    <ul class="pagination pagination-sm">
      <li class="page-item">
        <a href="#" class="page-link" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
          <span class="sr-only">Previous</span>
        </a>
      </li>
      <li class="page-item"><a href="#" class="page-link">1</a></li>
      <li class="page-item"><a href="#" class="page-link">2</a></li>
      <li class="page-item"><a href="#" class="page-link">3</a></li>
      <li class="page-item">
        <a href="#" class="page-link" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
          <span class="sr-only">Next</span>
        </a>
      </li>
    </ul>
  </nav>

  <nav aria-label="...">
    <ul class="pagination pagination-xs">
      <li class="page-item">
        <a href="#" class="page-link" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
          <span class="sr-only">Previous</span>
        </a>
      </li>
      <li class="page-item"><a href="#" class="page-link">1</a></li>
      <li class="page-item"><a href="#" class="page-link">2</a></li>
      <li class="page-item"><a href="#" class="page-link">3</a></li>
      <li class="page-item">
        <a href="#" class="page-link" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
          <span class="sr-only">Next</span>
        </a>
      </li>
    </ul>
  </nav>
</div>

{% highlight html %}
<!-- Extra Large pagination -->
<nav aria-label="...">
  <ul class="pagination pagination-xl">
    ...
  </ul>
</nav>
<!-- Large pagination -->
<nav aria-label="...">
  <ul class="pagination pagination-lg">
    ...
  </ul>
</nav>
<!-- Small pagination -->
<nav aria-label="...">
  <ul class="pagination pagination-sm">
    ...
  </ul>
</nav>
<!-- Extra Small pagination -->
<nav aria-label="...">
  <ul class="pagination pagination-xs">
    ...
  </ul>
</nav>
{% endhighlight %}


## Flexbox Alignment

Change the alignment of pagination components using the flexbox modes and the [flexbox utilities]({{ sitebaseurl }}/utilities/flexbox/).

{% example html %}
<nav aria-label="...">
  <ul class="pagination pagination-flex flex-center">
    <li class="page-item"><a href="#" class="page-link">Previous</a></li>
    <li class="page-item"><a href="#" class="page-link">1</a></li>
    <li class="page-item"><a href="#" class="page-link">2</a></li>
    <li class="page-item"><a href="#" class="page-link">3</a></li>
    <li class="page-item"><a href="#" class="page-link">Next</a></li>
  </ul>
</nav>
{% endexample %}

{% example html %}
<nav aria-label="...">
  <ul class="pagination pagination-flex flex-end">
    <li class="page-item"><a href="#" class="page-link">Previous</a></li>
    <li class="page-item"><a href="#" class="page-link">1</a></li>
    <li class="page-item"><a href="#" class="page-link">2</a></li>
    <li class="page-item"><a href="#" class="page-link">3</a></li>
    <li class="page-item"><a href="#" class="page-link">Next</a></li>
  </ul>
</nav>
{% endexample %}
