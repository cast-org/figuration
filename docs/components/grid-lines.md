---
layout: docs
title: Grid Lines
group: components
---

Grid lines is a simple component to create visual lines (rules) between content containers.

Grid lines have support for both a `table` style layout, along with both the opt-in flexbox and [full flexbox]({{ site.baseurl }}/layout/flexbox#full-flexbox-mode) modes.  To use the opt-in method, simply add a `.gridline-flex` class to the `.gridline` element.

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Basics

Start off with a parent `.gridline` container and add `.gridline-item` child containers to generate the grid lines.  If you are using only horizontal grid lines the `.gridline-item` containers are optional.

To get consitent spacing, some elements might require utility classes or custom styles.  `.gridline-item` containers can be mixed with the grid system to create the layout.

{% example html %}
<div class="gridline gridline-vr gridline-hr">
    <div class="gridline-item col-md-6">
        <h4>Header Level 4</h4>
        <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica.</p>
        <h5>Header Level 5</h5>
        <p>Pellentesque massa nibh, bibendum in lorem id, cursus porttitor augue! In quis lorem rutrum, bibendum nunc in, pharetra sapien. Nam eu vestibulum mi. Aliquam at luctus libero.</p>
    </div>
    <div class="gridline-item col-md-6">
        <h4>Header Level 4</h4>
        <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum.</p>
    </div>
</div>
<div class="gridline gridline-hr">
    <div class="gridline-item col-md-6">
        <h4>Header Level 4</h4>
        <p>Raw denim you probably haven't heard of them jean shorts Austin.</p>
    </div>
    <div class="gridline-item col-md-6">
        <h4>Header Level 4</h4>
        <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin.</p>
    </div>
</div>
{% endexample %}

## Options

The grid line options for horizontal and vertical lines both use the responsive grid system for showing the rules to that a responsive layout that converts from rows to columns is supported.

Use `.gridline-{breakpoint}-hr` for horizontal lines, and `.gridline-{breakpoint}-vr` for vertical lines. Please refer to how our [breakpoint nomenclature]({{ site.baseurl }}/layout/overview/#breakpoint-nomenclature) is used.

### Horizontal

Horizontal grid lines are created when there are mutliple `.gridline-*-hr` elements as sibling containers. The last item (or only item) in a series will not get a bottom grid line.

### Vertical

Vertical grid lines are created when there are multiple `.gridline-item` elements as sibling containers.  The first item (or only item) in a series will not get a left grid line.

### Bordered

To add an outer border, just add the class `.gridline-bordered` to a container around your `.gridline` items.

## Examples

### Single Column

{% example html %}
<strong>Rule: Horizontal</strong>
<div class="gridline gridline-hr">
    <div class="gridline-item col-md-12">
        <p>Row 1 - Column 1</p>
    </div>
</div>
<div class="gridline gridline-hr">
    <div class="gridline-item col-md-12">
        <p>Row 2 - Column 1</p>
    </div>
</div>
<div class="gridline gridline-hr">
    <div class="gridline-item col-md-12">
        <p>Row 3 - Column 1</p>
    </div>
</div>
{% endexample %}

### Double Column

{% example html %}
<strong>Rule: Vertical</strong>
<div class="gridline gridline-md-vr">
    <div class="gridline-item col-md-6">
        <p>Column 1</p>
    </div>
    <div class="gridline-item col-md-6">
        <p>Column 2</p>
    </div>
</div>
{% endexample %}

{% example html %}
<strong>Rule: Horizontal</strong>
<div class="gridline gridline-hr">
    <div class="gridline-item col-md-6">
        <p>Row 1 - Column 1</p>
    </div>
    <div class="gridline-item col-md-6">
        <p>Row 1 - Column 2</p>
    </div>
</div>
<div class="gridline gridline-hr">
    <div class="gridline-item col-md-6">
        <p>Row 2 - Column 1</p>
    </div>
    <div class="gridline-item col-md-6">
        <p>Row 2 - Column 2</p>
    </div>
</div>
<div class="gridline gridline-hr">
    <div class="gridline-item col-md-6">
        <p>Row 3 - Column 1</p>
    </div>
    <div class="gridline-item col-md-6">
        <p>Row 3 - Column 2</p>
    </div>
</div>
{% endexample %}

{% example html %}
<strong>Rule: Both</strong>
<div class="gridline gridline-hr gridline-md-vr">
    <div class="gridline-item col-md-6">
        <p>Row 1 - Column 1</p>
    </div>
    <div class="gridline-item col-md-6">
        <p>Row 1 - Column 2</p>
    </div>
</div>
<div class="gridline gridline-hr gridline-md-vr">
    <div class="gridline-item col-md-6">
        <p>Row 2 - Column 1</p>
    </div>
    <div class="gridline-item col-md-6">
        <p>Row 2 - Column 2</p>
    </div>
</div>
<div class="gridline gridline-hr gridline-md-vr">
    <div class="gridline-item col-md-6">
        <p>Row 3 - Column 1</p>
    </div>
    <div class="gridline-item col-md-6">
        <p>Row 3 - Column 2</p>
    </div>
</div>
{% endexample %}

### Triple Column

{% example html %}
<strong>Rule: Vertical</strong>
<div class="gridline gridline-md-vr">
    <div class="gridline-item col-md-4">
        <p>Column 1</p>
    </div>
    <div class="gridline-item col-md-4">
        <p>Column 2</p>
    </div>
    <div class="gridline-item col-md-4">
        <p>Column 3</p>
    </div>
</div>
{% endexample %}

{% example html %}
<strong>Rule: Horizontal</strong>
<div class="gridline gridline-hr">
    <div class="gridline-item col-md-4">
        <p>Row 1 - Column 1</p>
    </div>
    <div class="gridline-item col-md-4">
        <p>Row 1 - Column 2</p>
    </div>
    <div class="gridline-item col-md-4">
        <p>Row 1 - Column 3</p>
    </div>
</div>
<div class="gridline gridline-hr">
    <div class="gridline-item col-md-4">
        <p>Row 2 - Column 1</p>
    </div>
    <div class="gridline-item col-md-4">
        <p>Row 2 - Column 2</p>
    </div>
    <div class="gridline-item col-md-4">
        <p>Row 2 - Column 3</p>
    </div>
</div>
<div class="gridline gridline-hr">
    <div class="gridline-item col-md-4">
        <p>Row 3 - Column 1</p>
    </div>
    <div class="gridline-item col-md-4">
        <p>Row 3 - Column 2</p>
    </div>
    <div class="gridline-item col-md-4">
        <p>Row 3 - Column 3</p>
    </div>
</div>
{% endexample %}

{% example html %}
<strong>Rule: Both</strong>
<div class="gridline gridline-hr gridline-md-vr">
    <div class="gridline-item col-md-4">
        <p>Row 1 - Column 1</p>
    </div>
    <div class="gridline-item col-md-4">
        <p>Row 1 - Column 2</p>
    </div>
    <div class="gridline-item col-md-4">
        <p>Row 1 - Column 3</p>
    </div>
</div>
<div class="gridline gridline-hr gridline-md-vr">
    <div class="gridline-item col-md-4">
        <p>Row 2 - Column 1</p>
    </div>
    <div class="gridline-item col-md-4">
        <p>Row 2 - Column 2</p>
    </div>
    <div class="gridline-item col-md-4">
        <p>Row 2 - Column 3</p>
    </div>
</div>
<div class="gridline gridline-hr gridline-md-vr">
    <div class="gridline-item col-md-4">
        <p>Row 3 - Column 1</p>
    </div>
    <div class="gridline-item col-md-4">
        <p>Row 3 - Column 2</p>
    </div>
    <div class="gridline-item col-md-4">
        <p>Row 3 - Column 3</p>
    </div>
</div>
{% endexample %}

### Bordered
{% example html %}
<div class="gridline-bordered">
    <div class="gridline gridline-hr gridline-md-vr">
        <div class="gridline-item col-md-4">
            <p>Row 1 - Column 1</p>
        </div>
        <div class="gridline-item col-md-4">
            <p>Row 1 - Column 2</p>
        </div>
        <div class="gridline-item col-md-4">
            <p>Row 1 - Column 3</p>
        </div>
    </div>
    <div class="gridline gridline-md-hr gridline-md-vr">
        <div class="gridline-item col-md-4">
            <p>Row 2 - Column 1</p>
        </div>
        <div class="gridline-item col-md-4">
            <p>Row 2 - Column 2</p>
        </div>
        <div class="gridline-item col-md-4">
            <p>Row 2 - Column 3</p>
        </div>
    </div>
    <div class="gridline gridline-lg-hr gridline-md-vr">
        <div class="gridline-item col-md-4">
            <p>Row 3 - Column 1</p>
        </div>
        <div class="gridline-item col-md-4">
            <p>Row 3 - Column 2</p>
        </div>
        <div class="gridline-item col-md-4">
            <p>Row 3 - Column 3</p>
        </div>
    </div>
</div>
{% endexample %}