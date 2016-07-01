---
layout: docs
title: Slider
subtitle: slider.js
group: widgets
---

Slider is a robust replacement for the HTML5 element `<input type="range">` with the addition of being able to be used for ranged/multi-thumb input.

{% callout info %}
#### Widget Dependencies

Slider requires the following:

* [Drag widget]({{ site.baseurl}}/widgets/drag/) for drag functionality.
{% endcallout %}
{:.cf-callout-dep}

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Examples

### Single Slider

{% example html %}
<span data-cfw="slider" data-cfw-slider-min="0" data-cfw-slider-max="100">
    <label>Value <input type="text" value="50" /></label>
</span>
{% endexample %}

### Ranged Slider

When using a ranged slider, the thumbs/handles are constrained by the value of the other thumb/handle per the [WAI-ARIA 1.0 specifications for multi-thumb sliders](http://www.w3.org/TR/wai-aria-practices/#slidertwothumb).

{% example html %}
<span data-cfw="slider" data-cfw-slider-min="-50" data-cfw-slider-max="50" data-cfw-slider-step="5">
    <label>Min <input type="text" value="-25" /></label>
    <label><input type="text" value="25" /> Max</label>
</span>
{% endexample %}

### Vertical Slider

This vertical slider has also been reversed so that larger values are at the top.

{% example html %}
<span data-cfw="slider" data-cfw-slider-min="0" data-cfw-slider-max="5" data-cfw-slider-vertical="true" data-cfw-slider-reversed="true">
    <label for="slider1">Rating</label>
    <select id="slider1">
        <option value="0">0</option>
        <option value="1" selected>1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
    </select>
</span>
{% endexample %}

### Double Select Slider

{% example html %}
<span id="slider2">
    <label for="slider2_0">Start</label>
    <select id="slider2_0">
        <option value="12:00 am">12:00 am</option>
        <option value="1:00 am">1:00 am</option>
        <option value="2:00 am">2:00 am</option>
        <option value="3:00 am">3:00 am</option>
        <option value="4:00 am">4:00 am</option>
        <option value="5:00 am" selected>5:00 am</option>
        <option value="6:00 am">6:00 am</option>
        <option value="7:00 am">7:00 am</option>
        <option value="8:00 am">8:00 am</option>
        <option value="9:00 am">9:00 am</option>
        <option value="10:00 am">10:00 am</option>
        <option value="11:00 am">11:00 am</option>
        <option value="12:00 pm">12:00 pm</option>
        <option value="1:00 pm">1:00 pm</option>
        <option value="2:00 pm">2:00 pm</option>
        <option value="3:00 pm">3:00 pm</option>
        <option value="4:00 pm">4:00 pm</option>
        <option value="5:00 pm">5:00 pm</option>
        <option value="6:00 pm">6:00 pm</option>
        <option value="7:00 pm">7:00 pm</option>
        <option value="8:00 pm">8:00 pm</option>
        <option value="9:00 pm">9:00 pm</option>
        <option value="10:00 pm">10:00 pm</option>
        <option value="11:00 pm">11:00 pm</option>
        <option value="12:00 am">12:00 am</option>
    </select>
    <select id="slider2_1">
        <option value="12:00 am">12:00 am</option>
        <option value="1:00 am">1:00 am</option>
        <option value="2:00 am">2:00 am</option>
        <option value="3:00 am">3:00 am</option>
        <option value="4:00 am">4:00 am</option>
        <option value="5:00 am">5:00 am</option>
        <option value="6:00 am">6:00 am</option>
        <option value="7:00 am">7:00 am</option>
        <option value="8:00 am">8:00 am</option>
        <option value="9:00 am">9:00 am</option>
        <option value="10:00 am">10:00 am</option>
        <option value="11:00 am">11:00 am</option>
        <option value="12:00 pm" selected>12:00 pm</option>
        <option value="1:00 pm">1:00 pm</option>
        <option value="2:00 pm">2:00 pm</option>
        <option value="3:00 pm">3:00 pm</option>
        <option value="4:00 pm">4:00 pm</option>
        <option value="5:00 pm">5:00 pm</option>
        <option value="6:00 pm">6:00 pm</option>
        <option value="7:00 pm">7:00 pm</option>
        <option value="8:00 pm">8:00 pm</option>
        <option value="9:00 pm">9:00 pm</option>
        <option value="10:00 pm">10:00 pm</option>
        <option value="11:00 pm">11:00 pm</option>
        <option value="12:00 am">12:00 am</option>
    </select>
    <label id="slider2_1_Label" for="slider2_1">End</label>
</span>
<script type="text/javascript">
$('#slider2').CFW_Slider({
    min : 0,
    max : 24
});
</script>
{% endexample %}

## Usage

The slider will determine the number of thumbs based on the nunber on inputs found within the specified container, up to a maximum of two thumbs.

If more than two inputs are found, the slider will use the first input found for the first thumb, and the last input found for the second thumb.

If the need to read the values as determined by the slider, the data variable on the container can be accessed as follows.

Note: If using `<select>` elements, the value is the internal tracking value, not the actual value of the input. In this case, the value should match the index of the selected item.

{% highlight js %}
$('mySlider').data('cfw.slider')['val0']; // First thumb value
$('mySlider').data('cfw.slider')['val1']; // Second thumb value
{% endhighlight %}

### Via Data Attributes

The basic slider will need to have a container with an `<input>` element within it.  On the container specify the `data-cfw="slider"` attribute, and at minimum the attributes of `data-cfw-slider-min` and `data-cfw-slider-max` with integer values.

### Via JavaScript

Call the widget manually with options:

{% highlight js %}
$('#mySlider').CFW_Slider({
    min : 0,
    max : 24
});
{% endhighlight %}

### Options

Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-cfw-slider`, as in `data-cfw-slider-step=5`.

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
            <td>min</td>
            <td>integer | float</td>
            <td>null</td>
            <td>Numerical value for the minimum values in the range</td>
        </tr>
        <tr>
            <td>max</td>
            <td>integer | float</td>
            <td>null</td>
            <td>Numerical value for the maximum values in the range.</td>
        </tr>
        <tr>
            <td>step</td>
            <td>integer | float</td>
            <td>1</td>
            <td>The minimum movement size.  This value must be a positive, non-zero value.</td>
        </tr>
        <tr>
            <td>chunk</td>
            <td>integer | float</td>
            <td>null</td>
            <td>
                <p>The 'large step' size used for PgUp/PgDown keyboard navigation.</p>
                <p>If not defined, the chunk will be auto determined based on the size of the step and the range.</p>
            </td>
        </tr>
        <tr>
            <td>vertical</td>
            <td>boolean</td>
            <td>false</td>
            <td>The orientation of the slider in a horizontal (default), or vertical layout.</td>
        </tr>
        <tr>
            <td>reversed</td>
            <td>boolean</td>
            <td>false</td>
            <td>If the selection, thumbs, and movement should all be revsersed.</td>
        </tr>
        <tr>
            <td>enabled</td>
            <td>boolean</td>
            <td>true</td>
            <td>If the slider is enabled or disabled at creation.</td>
        </tr>

    </tbody>
    </table>
</div> <!-- /.table-responsive -->

### Methods

#### `.CFW_Slider(options)`
{:.no_toc}

Activates the content as a slider element. Accepts an optional options `object`.

{% highlight js %}
$('#mySlider').CFW_Slider({
    min: 0,
    max: 100
});
{% endhighlight %}

#### `.CFW_Slider('enable')`
{:.no_toc}

Enable the slider.

#### `.CFW_Slider('disable')`
{:.no_toc}

Disable the slider.

### Events

Event callbacks happen on the created slider element.

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
            <td>init.cfw.slider</td>
            <td>This event fires after the slider item is initialized.</td>
        </tr>
        <tr>
            <td>slid.cfw.slider</td>
            <td>This event is fired when a thumb item is manually moved.</td>
        </tr>
        <tr>
            <td>changed.cfw.slider</td>
            <td>This event is fired when one of the associated input values has been changed.</td>
        </tr>
    </tbody>
    </table>
</div> <!-- /.table-responsive -->

{% highlight js %}
$('#mySlider').on('slid.cfw.slider', function () {
  // do something...
});
{% endhighlight %}
