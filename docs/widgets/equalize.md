---
layout: docs
title: Equalize
subtitle: equalize.js
group: widgets
---

Equalize is a way to create equal height content blocks.

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Examples

### Basic

Create equal height containers using a few data attributes. Apply the `data-cfw="equalize"` and `data-cfw-equalize-target="groupname"` attributes to a parent container. Then apply the `data-cfw-equalize-group="groupname"` attribute to each element to be given an equal height. The height of `data-cfw-equalize-group` attribute will be equal to that of the tallest element.

<div class="cf-example">
    <div class="row" data-cfw="equalize" data-cfw-equalize-target="foo">
        <div class="col-md-4">
            <div class="card card-block" data-cfw-equalize-group="foo">
                <h4>Panel 1</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac nisi sem. Maecenas elementum a lectus quis fermentum.</p>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card card-block" data-cfw-equalize-group="foo">
                <h4>Panel 2</h4>
                <p>Etiam nec pulvinar quam. Duis aliquam ut turpis et vulputate. Proin malesuada sem purus, in hendrerit ex dapibus sed. Cras orci quam, vestibulum eget purus at, ultricies ultricies libero! Morbi fringilla accumsan purus, eu sodales enim suscipit nec.</p>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card card-block" data-cfw-equalize-group="foo">
                <h4>Panel 3</h4>
                <p>Nam porta malesuada mi, quis hendrerit purus.</p>
                <img src="{{ site.baseurl }}/assets/img/test.gif" alt="test pattern" class="img-responsive" />
            </div>
        </div>
    </div>
</div>
{% highlight html %}
<div class="row" data-cfw="equalize" data-cfw-equalize-target="foo">
    <div class="col-md-4">
        <div class="card card-block" data-cfw-equalize-group="foo">
            ...
        </div>
    </div>
    <div class="col-md-4">
        <div class="card card-block" data-cfw-equalize-group="foo">
            ...
        </div>
    </div>
    <div class="col-md-4">
        <div class="card card-block" data-cfw-equalize-group="foo">
            ...
        </div>
    </div>
</div>
{% endhighlight %}

### Nested Equalize

Creating nested Equalize behaviour is as simple as creating another Equalize set using a different group name.  Note that each Equalize set will need it own parent element that is different from another sets parent element.

<div class="cf-example">
    <div data-cfw="equalize" data-cfw-equalize-target="foo">
        <div class="row" data-cfw="equalize" data-cfw-equalize-target="bar">
            <div class="col-md-4">
                <div class="card card-block" data-cfw-equalize-group="foo">
                    <h4>Panel 1</h4>
                    <div class="card card-block" data-cfw-equalize-group="bar">one</div>
                    one<br />one
                </div>
            </div>
            <div class="col-md-4">
                <div class="card card-block" data-cfw-equalize-group="foo">
                    <h4>Panel 2</h4>
                    <div class="card card-block" data-cfw-equalize-group="bar">two<br />two</div>
                    two
                </div>
            </div>
            <div class="col-md-4">
                <div class="card card-block" data-cfw-equalize-group="foo">
                    <h4>Panel 3</h4>
                    <div class="card card-block" data-cfw-equalize-group="bar">three<br />three<br />three</div>
                </div>
            </div>
        </div>
    </div>
</div>
{% highlight html %}
<div data-cfw="equalize" data-cfw-equalize-target="foo">
    <div class="row" data-cfw="equalize" data-cfw-equalize-target="bar">
        <div class="col-md-4">
            <div class="card card-block" data-cfw-equalize-group="foo">
                <div class="card card-block" data-cfw-equalize-group="bar">...</div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card card-block" data-cfw-equalize-group="foo">
                <div class="card card-block" data-cfw-equalize-group="bar">...</div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card card-block" data-cfw-equalize-group="foo">
                <div class="card card-block" data-cfw-equalize-group="bar">...</div>
            </div>
        </div>
    </div>
</div>
{% endhighlight %}

### Row Equalize

When using `row` mode, Equalize looks for items at the same starting top offset and will set the heights the same for each specified item.

{% example html %}
<div class="row" data-cfw="equalize" data-cfw-equalize-target=".card" data-cfw-equalize-row="true">
    <div class="col-md-4 col-lg-3">
        <div class="card card-block">
            <h4>Panel 1-1</h4>
        </div>
    </div>
    <div class="col-md-4 col-lg-3">
        <div class="card card-block">
            <h4>Panel 1-2</h4>
            <p>row one</p>
        </div>
    </div>
    <div class="col-md-4 col-lg-3">
        <div class="card card-block">
            <h4>Panel 1-3</h4>
        </div>
    </div>
    <div class="col-md-4 col-lg-3">
        <div class="card card-block">
            <h4>Panel 2-1</h4>
            <p>row two</p>
            <p>row two</p>
        </div>
    </div>
    <div class="col-md-4 col-lg-3">
        <div class="card card-block">
            <h4>Panel 2-2</h4>
        </div>
    </div>
</div>
{% endexample %}

## Usage

### Via Data Attributes

The equalize widget will need to have a container with a `data-cfw="equalize"</code>` and `data-cfw-equalize-target="groupID"` attributes. Where `groupID` can be a name, or the jQuery style selector for classes or ids. Then at least two block item descendants with `data-cfw-equalize-group="groupID"`, or the specified classes/ids will be needed.

### Via JavaScript

Call the widget manually with options:

{% highlight js %}
$('#myContainer').CFW_Equalize({
    target : 'selector/groupID'
});
{% endhighlight %}

### Options

Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-cfw-equalize`, as in `data-cfw-equalize-stack=false`.

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
            <td>target</td>
            <td>string</td>
            <td>null</td>
            <td>
                <p>Either the selector (jQuery style), or the string related to the target containers having a <code>data-cfw-equalize-group</code> attribute.</p>
                <p>The containers to be equalized are scoped by the calling container, so same selector/groupID can be resused if needed.</p>
            </td>
        </tr>
        <tr>
            <td>throttle</td>
            <td>integer</td>
            <td>250</td>
            <td>Timeout rate (milliseconds) for the throttle function helps to decrease function calls through resize events.</td>
        </tr>
        <tr>
            <td>stack</td>
            <td>boolean</td>
            <td>false</td>
            <td>Whether or not the specified containers should be equalized in height when they become stacked, either due to responsive reflow, or wrapping.  Otherwise, the specified containers all need to have the same top offset in order to be equalized.</td>
        </tr>
        <tr>
            <td>row</td>
            <td>boolean</td>
            <td>false</td>
            <td>Whether or not the specified containers should be equalized in height by rows, by determining each container in a row by their top offset.</td>
        </tr>
        <tr>
            <td>minimum</td>
            <td>boolean</td>
            <td>false</td>
            <td>If set to true, the specified containers will be equalized to the shortest container.  In this case, you may want to use <code>overflow: hidden;</code> to deal with the overflowing content.</td>
        </tr>
    </tbody>
    </table>
</div> <!-- /.table-responsive -->

### Methods

#### `.CFW_Equalize(options)`
{:.no_toc}

Activates the equalizer widget. Accepts an optional options `object`.

{% highlight js %}
$('#myContainer').CFW_Equalize({
    target : 'selector/groupID'
});
{% endhighlight %}

#### `.CFW_Equalize('update')`
{:.no_toc}

Update the container heights. This will also bubble up the DOM to equalize any ancestor equalize widgets in the case of nesting.

### Events

Event callbacks happen on the parent equalize element.

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
            <td>init.cfw.equalize</td>
            <td>This event fires after the equalize widget is initialized.</td>
        </tr>
        <tr>
            <td>beforeEqual.cfw.equalize</td>
            <td>This event fires before the container heights are reset and the heights are adjusted.</td>
        </tr>
        <tr>
            <td>afterEqual.cfw.equalize</td>
            <td>This event fires after the container heights are adjusted.</td>
        </tr>
    </tbody>
    </table>
</div> <!-- /.table-responsive -->

{% highlight js %}
$('#myContainer').on('afterEqual.cfw.equalize', function () {
  // do something...
});
{% endhighlight %}
