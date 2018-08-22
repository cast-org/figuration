---
layout: docs
title: Clearfix
group: utilities
---

Easily clear `float`s by adding `.clearfix` **to the parent element**. A detailed explanation of [how the clearfix works](http://cssmojo.com/the-very-latest-clearfix-reloaded/) is available.

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Usage

{% highlight html %}
<div class="clearfix">...</div>
{% endhighlight %}

Can also be used as a mixin.

{% highlight scss %}
// Mixin itself
@mixin clearfix() {
    &::after {
        display: block;
        clear: both;
        content: "";
    }
}

// Usage as a mixin
.element {
  @include clearfix();
}
{% endhighlight %}

## Example

The following example shows how the clearfix can be used. Without the clearfix the wrapping div would not span around the buttons which would cause a broken layout, as shown in the second part of the example.

<div class="cf-example">
    <strong>With <code>.clearfix</code></strong>
    <div class="bg-info clearfix mb-1">
        <button type="button" class="btn float-start">Button floated to start</button>
        <button type="button" class="btn float-end">Button floated to end</button>
    </div>

    <strong>Without <code>.clearfix</code></strong>
    <div class="bg-info">
        <button type="button" class="btn float-start">Button floated to start</button>
        <button type="button" class="btn float-end">Button floated to end</button>
    </div>
</div>
{% highlight html %}
    <!-- With .clearfix -->
    <div class="bg-info clearfix">
        <button type="button" class="btn float-start">Button floated to start</button>
        <button type="button" class="btn float-end">Button floated to end</button>
    </div>

    <!-- Without .clearfix -->
    <div class="bg-info">
        <button type="button" class="btn float-start">Button floated to start</button>
        <button type="button" class="btn float-end">Button floated to end</button>
    </div>
{% endhighlight %}

## SASS Reference

### Variables

The available [Customization options]({{ site.baseurl }}/get-started/options/), or Sass variables, that can be customized for this grouping of utility classes.

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
                <td><code>$enable-utility-clearfix</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the clearfix utility class.
                </td>
            </tr>
        </tbody>
    </table>
</div>

### Mixins

Here are the mixins related to this grouping of utility classes that we use to help generate our CSS.  You can also uses these mixins to generate your own custom components or utilities.

#### clearfix
{:.no_toc}

Apply a clearfix to an element.

{% highlight sass %}
@include clerafix();
{% endhighlight %}

#### clearfix-disable
{:.no_toc}

Disable the clearfix on an element.

{% highlight sass %}
@include clearfix-disable();
{% endhighlight %}