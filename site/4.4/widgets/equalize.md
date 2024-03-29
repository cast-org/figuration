---
layout: doc
title: Equalize
subtitle: equalize.js
description: Equalize is a way to create equal height content blocks.
group: widgets
toc: true
---

## Examples

### Basic

Create equal height containers using a few data attributes. Apply the `data-cfw="equalize"` and `data-cfw-equalize-target="groupname"` attributes to a parent container. Then apply the `data-cfw-equalize-group="groupname"` attribute to each element to be given an equal height. The height of `data-cfw-equalize-group` attribute will be equal to that of the tallest element.

<div class="cf-example">
  <div class="row" data-cfw="equalize" data-cfw-equalize-target="foo">
    <div class="col-md-4">
      <div class="card" data-cfw-equalize-group="foo">
        <div class="card-body">
          <h4>Card 1</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac nisi sem. Maecenas elementum a lectus quis fermentum.</p>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card" data-cfw-equalize-group="foo">
        <div class="card-body">
          <h4>Card 2</h4>
          <p>Etiam nec pulvinar quam. Duis aliquam ut turpis et vulputate. Proin malesuada sem purus, in hendrerit ex dapibus sed. Cras orci quam, vestibulum eget purus at, ultricies ultricies libero! Morbi fringilla accumsan purus, eu sodales enim suscipit nec.</p>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card" data-cfw-equalize-group="foo">
        <div class="card-body">
          <h4>Card 3</h4>
          <p>Nam porta malesuada mi, quis hendrerit purus.</p>
          <img src="{{ site.path }}/assets/{{ version.docs }}/img/test.gif" alt="test pattern" class="img-fluid">
        </div>
      </div>
    </div>
  </div>
</div>
{% capture highlight %}
<div class="row" data-cfw="equalize" data-cfw-equalize-target="foo">
  <div class="col-md-4">
    <div class="card" data-cfw-equalize-group="foo">
      <div class="card-body">
        ...
      </div>
    </div>
  </div>
  <div class="col-md-4">
    <div class="card" data-cfw-equalize-group="foo">
      <div class="card-body">
        ...
      </div>
    </div>
  </div>
  <div class="col-md-4">
    <div class="card" data-cfw-equalize-group="foo">
      <div class="card-body">
        ...
      </div>
    </div>
  </div>
</div>
{% endcapture %}
{% renderHighlight highlight, "html" %}

### Nested Equalize

Creating nested Equalize behavior is as simple as creating another Equalize set using a different group name.  Note that each Equalize set will need it own parent element that is different from another sets parent element.

<div class="cf-example">
  <div data-cfw="equalize" data-cfw-equalize-target="foo">
    <div class="row" data-cfw="equalize" data-cfw-equalize-target="bar">
      <div class="col-md-4">
        <div class="card" data-cfw-equalize-group="foo">
          <div class="card-body">
            <h4>Card 1</h4>
            <div class="card" data-cfw-equalize-group="bar"><div class="card-body">one</div></div>
            one<br>one
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card" data-cfw-equalize-group="foo">
          <div class="card-body">
            <h4>Card 2</h4>
            <div class="card" data-cfw-equalize-group="bar"><div class="card-body">two<br>two</div></div>
            two
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card" data-cfw-equalize-group="foo">
          <div class="card-body">
            <h4>Card 3</h4>
            <div class="card" data-cfw-equalize-group="bar"><div class="card-body">three<br>three<br>three</div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{% capture highlight %}
<div data-cfw="equalize" data-cfw-equalize-target="foo">
  <div class="row" data-cfw="equalize" data-cfw-equalize-target="bar">
    <div class="col-md-4">
      <div class="card" data-cfw-equalize-group="foo">
        <div class="card-body">
          <div class="card" data-cfw-equalize-group="bar">...</div>
        </div>
      </div>
    <div class="col-md-4">
      <div class="card" data-cfw-equalize-group="foo">
        <div class="card-body">
          <div class="card" data-cfw-equalize-group="bar">...</div>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card" data-cfw-equalize-group="foo">
        <div class="card-body">
          <div class="card" data-cfw-equalize-group="bar">...</div>
        </div>
      </div>
    </div>
  </div>
</div>
{% endcapture %}
{% renderHighlight highlight, "html" %}

### Row Equalize

When using `row` mode, Equalize looks for items at the same starting top offset and will set the heights the same for each specified item.

{% capture example %}
<div class="row" data-cfw="equalize" data-cfw-equalize-target=".card" data-cfw-equalize-row="true">
  <div class="col-md-4 col-lg-3">
    <div class="card card-body">
      <h4>Card 1-1</h4>
    </div>
  </div>
  <div class="col-md-4 col-lg-3">
    <div class="card card-body">
      <h4>Card 1-2</h4>
      <p>row one</p>
    </div>
  </div>
  <div class="col-md-4 col-lg-3">
    <div class="card card-body">
      <h4>Card 1-3</h4>
    </div>
  </div>
  <div class="col-md-4 col-lg-3">
    <div class="card card-body">
      <h4>Card 2-1</h4>
      <p>row two</p>
      <p>row two</p>
    </div>
  </div>
  <div class="col-md-4 col-lg-3">
    <div class="card card-body">
      <h4>Card 2-2</h4>
    </div>
  </div>
</div>
{% endcapture %}
{% renderExample example %}

### Stacked Equalize

When using `stack` mode, when items are stacked, they will all be given the same height, regardless of their top offset.

{% capture example %}
<div data-cfw="equalize" data-cfw-equalize-target=".card" data-cfw-equalize-stack="true">
  <div class="card card-body">
    <h4>Card 1</h4>
    One
  </div>
  <div class="card card-body">
    <h4>Card 2</h4>
    Two<br>Two
  </div>
  <div class="card card-body">
    <h4>Card 3</h4>
    Three<br>Three<br>Three
  </div>
</div>
{% endcapture %}
{% renderExample example %}

## Usage

### Via Data Attributes

The equalize widget will need to have a container with a `data-cfw="equalize"</code>` and `data-cfw-equalize-target="groupID"` attributes. Where `groupID` can be a name, or the jQuery style selector for classes or ids. Then at least two block item descendants with `data-cfw-equalize-group="groupID"`, or the specified classes/ids will be needed.

### Via JavaScript

Call the widget manually with options:

{% capture highlight %}
$('#myContainer').CFW_Equalize({
  target : 'selector/groupID'
});
{% endcapture %}
{% renderHighlight highlight, "js" %}

### Options

Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-cfw-equalize`, as in `data-cfw-equalize-stack=false`.

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
        <td>
          <p>Either the selector, or the string related to the target containers having a <code>data-cfw-equalize-group</code> attribute.</p>
          <p>The containers to be equalized are scoped by the calling container, so same selector/groupID can be resused if needed.</p>
        </td>
      </tr>
      <tr>
        <td><code>throttle</code></td>
        <td>integer</td>
        <td><code>250</code></td>
        <td>Timeout rate (milliseconds) for the throttle function helps to decrease function calls through resize events.</td>
      </tr>
      <tr>
        <td><code>stack</code></td>
        <td>boolean</td>
        <td><code>false</code></td>
        <td>Whether or not the specified containers should be equalized in height when they become stacked, either due to responsive reflow, or wrapping.  Otherwise, the specified containers all need to have the same top offset in order to be equalized.</td>
      </tr>
      <tr>
        <td><code>row</code></td>
        <td>boolean</td>
        <td><code>false</code></td>
        <td>Whether or not the specified containers should be equalized in height by rows, by determining each container in a row by their top offset.</td>
      </tr>
      <tr>
        <td><code>minimum</code></td>
        <td>boolean</td>
        <td><code>false</code></td>
        <td>If set to true, the specified containers will be equalized to the shortest container.  In this case, you may want to use <code>overflow: hidden;</code> to deal with the overflowing content.</td>
      </tr>
    </tbody>
  </table>
</div>

{% capture highlight %}
$('#myContainer').CFW_Equalize({
    target : 'selector/groupID'
});
{% endcapture %}
{% renderHighlight highlight, "js" %}

### Methods

Method calls should be made on the parent equalize element.

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
        <td><code>update</code></td>
        <td>Update the container heights. This will also bubble up the DOM to equalize any ancestor equalize widgets in the case of nesting.</td>
      </tr>
      <tr>
        <td><code>dispose</code></td>
        <td>Remove the data and global event listener for a given instance of equalize.  This does not alter any nested child equalize instances.</td>
      </tr>
    </tbody>
  </table>
</div>

{% capture highlight %}
$('#myContainer').CFW_Equalize('update');
{% endcapture %}
{% renderHighlight highlight, "js" %}

### Events

Event callbacks happen on the parent equalize element.

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
        <td><code>init.cfw.equalize</code></td>
        <td>This event fires after the equalize widget is initialized.</td>
      </tr>
      <tr>
        <td><code>beforeEqual.cfw.equalize</code></td>
        <td>This event fires before the container heights are reset and the heights are adjusted.</td>
      </tr>
      <tr>
        <td><code>afterEqual.cfw.equalize</code></td>
        <td>This event fires after the container heights are adjusted.</td>
      </tr>
    </tbody>
  </table>
</div>

{% capture highlight %}
$('#myContainer').on('afterEqual.cfw.equalize', function() {
  // do something...
});
{% endcapture %}
{% renderHighlight highlight, "js" %}
