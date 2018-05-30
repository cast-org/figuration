---
layout: docs
title: Pagination
group: components
---

Pagination links indicate a series of related content exists across multiple pages. Typically these are used where a multi-page approach to long lists of content improves general performance, such as in search results.

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Basic Pagination

Pagination is built with list HTML elements so screen readers can announce the number of available links. Use a wrapping `<nav>` element to identify it as a navigation section to screen readers and other assistive technologies.

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

## Styled Pagination

Add some visual style to lists with a couple of modifier classes.

### Spaced

Add a border around each `.page-link` and spaced them out a bit with `.pagination-spaced`.

{% example html %}
<nav aria-label="Page navigation">
    <ul class="pagination pagination-spaced">
        <li class="page-item"><a href="#" class="page-link">Previous</a></li>
        <li class="page-item"><a href="#" class="page-link">1</a></li>
        <li class="page-item"><a href="#" class="page-link">2</a></li>
        <li class="page-item"><a href="#" class="page-link">3</a></li>
        <li class="page-item"><a href="#" class="page-link">Next</a></li>
    </ul>
</nav>
{% endexample %}

### Group

Group pagination together in a large block of connected items that is hard to miss with `.pagination-group`.

{% example html %}
<nav aria-label="Page navigation">
    <ul class="pagination pagination-group">
        <li class="page-item"><a href="#" class="page-link">Previous</a></li>
        <li class="page-item"><a href="#" class="page-link">1</a></li>
        <li class="page-item"><a href="#" class="page-link">2</a></li>
        <li class="page-item"><a href="#" class="page-link">3</a></li>
        <li class="page-item"><a href="#" class="page-link">Next</a></li>
    </ul>
</nav>
{% endexample %}

## Using Icons

Want to use an icon or symbol in place of text for some pagination links? Be sure to provide proper screen reader support with `aria-` attributes.

{% example html %}
<nav aria-label="Page navigation">
    <ul class="pagination">
        <li class="page-item">
            <a href="#" class="page-link" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
            </a>
        </li>
        <li class="page-item"><a href="#" class="page-link">1</a></li>
        <li class="page-item"><a href="#" class="page-link">2</a></li>
        <li class="page-item"><a href="#" class="page-link">3</a></li>
        <li class="page-item">
            <a href="#" class="page-link" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
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
            <a href="#" class="page-link disabled" tabindex="-1" aria-disabled="true">Previous</a>
        </li>
        <li class="page-item">
            <a href="#" class="page-link active" aria-current="page">1</a>
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
                <span class="sr-only">(current page)</span>
            </span>
        </li>
        <li class="page-item"><a href="#" class="page-link">2</a></li>
        <li class="page-item"><a href="#" class="page-link">3</a></li>
        <li class="page-item"><a href="#" class="page-link">Next</a></li>
    </ul>
</nav>
{% endexample %}

## With Text

Add normal text to your pagination navigation by using `.page-text`.  This class will adjust the alignment, spacing, and size the text to match the controls.

{% example html %}
<nav aria-label="...">
    <ul class="pagination">
        <li class="page-item"><span class="page-link disabled">Previous</span></li>
        <li class="page-item"><a href="#" class="page-link">1</a></li>
        <li class="page-item"><a href="#" class="page-link">2</a></li>
        <li class="page-item"><span class="page-text">&hellip;</span></li>
        <li class="page-item"><a href="#" class="page-link">98</a></li>
        <li class="page-item"><a href="#" class="page-link">99</a></li>
        <li class="page-item"><a href="#" class="page-link">Next</a></li>
    </ul>
</nav>
{% endexample %}

## Sizes

Fancy larger or smaller pagination? Add `.pagination-xsmall`, `.pagination-small`, `.pagination-large`,  or `.pagination-xlarge` for additional sizes.

<div class="cf-example">
    <nav aria-label="...">
        <ul class="pagination pagination-group pagination-xlarge">
            <li class="page-item"><span class="page-link disabled">Previous</span></li>
            <li class="page-item"><a href="#" class="page-link">1</a></li>
            <li class="page-item"><a href="#" class="page-link">2</a></li>
            <li class="page-item"><span class="page-text">&hellip;</span></li>
            <li class="page-item"><a href="#" class="page-link">98</a></li>
            <li class="page-item"><a href="#" class="page-link">99</a></li>
            <li class="page-item"><a href="#" class="page-link">Next</a></li>
        </ul>
    </nav>

    <nav aria-label="...">
        <ul class="pagination pagination-group pagination-large">
            <li class="page-item"><span class="page-link disabled">Previous</span></li>
            <li class="page-item"><a href="#" class="page-link">1</a></li>
            <li class="page-item"><a href="#" class="page-link">2</a></li>
            <li class="page-item"><span class="page-text">&hellip;</span></li>
            <li class="page-item"><a href="#" class="page-link">98</a></li>
            <li class="page-item"><a href="#" class="page-link">99</a></li>
            <li class="page-item"><a href="#" class="page-link">Next</a></li>
        </ul>
    </nav>

    <nav aria-label="...">
        <ul class="pagination pagination-group">
            <li class="page-item"><span class="page-link disabled">Previous</span></li>
            <li class="page-item"><a href="#" class="page-link">1</a></li>
            <li class="page-item"><a href="#" class="page-link">2</a></li>
            <li class="page-item"><span class="page-text">&hellip;</span></li>
            <li class="page-item"><a href="#" class="page-link">98</a></li>
            <li class="page-item"><a href="#" class="page-link">99</a></li>
            <li class="page-item"><a href="#" class="page-link">Next</a></li>
        </ul>
    </nav>

    <nav aria-label="...">
        <ul class="pagination pagination-group pagination-small">
            <li class="page-item"><span class="page-link disabled">Previous</span></li>
            <li class="page-item"><a href="#" class="page-link">1</a></li>
            <li class="page-item"><a href="#" class="page-link">2</a></li>
            <li class="page-item"><span class="page-text">&hellip;</span></li>
            <li class="page-item"><a href="#" class="page-link">98</a></li>
            <li class="page-item"><a href="#" class="page-link">99</a></li>
            <li class="page-item"><a href="#" class="page-link">Next</a></li>
        </ul>
    </nav>

    <nav aria-label="...">
        <ul class="pagination pagination-group pagination-xsmall">
            <li class="page-item"><span class="page-link disabled">Previous</span></li>
            <li class="page-item"><a href="#" class="page-link">1</a></li>
            <li class="page-item"><a href="#" class="page-link">2</a></li>
            <li class="page-item"><span class="page-text">&hellip;</span></li>
            <li class="page-item"><a href="#" class="page-link">98</a></li>
            <li class="page-item"><a href="#" class="page-link">99</a></li>
            <li class="page-item"><a href="#" class="page-link">Next</a></li>
        </ul>
    </nav>
</div>

{% highlight html %}
<!-- Extra Large pagination -->
<nav aria-label="...">
    <ul class="pagination pagination-group pagination-xlarge">
        ...
    </ul>
</nav>

<!-- Large pagination -->
<nav aria-label="...">
    <ul class="pagination pagination-group pagination-large">
        ...
    </ul>
</nav>

<!-- Default pagination -->
<nav aria-label="...">
    <ul class="pagination pagination-group">
        ...
    </ul>
</nav>

<!-- Small pagination -->
<nav aria-label="...">
    <ul class="pagination pagination-group pagination-small">
        ...
    </ul>
</nav>

<!-- Extra Small pagination -->
<nav aria-label="...">
    <ul class="pagination pagination-group pagination-xsmall">
        ...
    </ul>
</nav>
{% endhighlight %}

## Alignment

Change the alignment of pagination components using the [flexbox utilities]({{ sitebaseurl }}/utilities/flexbox/).

{% example html %}
<nav aria-label="...">
    <ul class="pagination pagination-group flex-center">
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
    <ul class="pagination pagination-group flex-end">
        <li class="page-item"><a href="#" class="page-link">Previous</a></li>
        <li class="page-item"><a href="#" class="page-link">1</a></li>
        <li class="page-item"><a href="#" class="page-link">2</a></li>
        <li class="page-item"><a href="#" class="page-link">3</a></li>
        <li class="page-item"><a href="#" class="page-link">Next</a></li>
    </ul>
</nav>
{% endexample %}

{% example html %}
<nav aria-label="..." class="d-flex flex-between">
    <ul class="pagination pagination-group">
        <li class="page-item"><a href="#" class="page-link">1</a></li>
        <li class="page-item"><a href="#" class="page-link">2</a></li>
        <li class="page-item"><a href="#" class="page-link">3</a></li>
    </ul>

    <ul class="pagination pagination-spaced">
        <li class="page-item"><a href="#" class="page-link">Previous</a></li>
        <li class="page-item"><a href="#" class="page-link">Next</a></li>
    </ul>
</nav>
{% endexample %}