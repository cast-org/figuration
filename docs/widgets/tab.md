---
layout: docs
title: Tab
subtitle: tab.js
group: widgets
---

Add quick, dynamic tab functionality to transition through panes of content.

{% callout warning %}
#### Incompatible Widgets
For accessibility reasons, do not mix use of the [Tab widget]({{ site.baseurl }}/widgets/tab/) and [Dropdown widget]({{ site.baseurl }}/widgets/dropdown/) in the same nav item.  This will cause navigation and usability issues.  One or the other, but not both.
{% endcallout %}

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Example

The tab widget works with [tab]({{ site.baseurl }}/components/navs/#tabs) or [pill]({{ site.baseurl }}/components/navs/#pills) style navigation.

<div class="cf-example cf-example-tabs">
    <ul class="nav nav-tabs">
        <li class="nav-item"><a href="#tabpanel1" class="nav-link" data-cfw="tab">Tab 1</a></li>
        <li class="nav-item active"><a href="#tabpanel2" class="nav-link" data-cfw="tab">Tab 2</a></li>
        <li class="nav-item"><a href="#tabpanel3" class="nav-link" data-cfw="tab">Tab 3</a></li>
        <li class="nav-item"><a href="#tabpanel4" class="nav-link disabled" data-cfw="tab">Tab 4</a></li>
    </ul>
    <div class="tab-content">
        <div class="tab-pane" id="tabpanel1">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pulvinar ligula ac sapien auctor viverra. Aliquam elit tortor, consequat at ultrices sit amet, vehicula eu leo. In fermentum lacus purus, ac dictum orci placerat ut. Integer magna lacus, adipiscing sed justo ut, sollicitudin rhoncus libero. Pellentesque accumsan pretium sem eu euismod? Nunc id facilisis sem? Quisque quis laoreet mi.</p>
        </div>
        <div class="tab-pane" id="tabpanel2">
            <p>Phasellus at nisl et arcu tincidunt sagittis et nec nunc. Fusce ultrices venenatis felis, in faucibus mauris egestas nec. Etiam malesuada dictum nisi, at pulvinar orci. Aenean venenatis metus in pharetra aliquam. Mauris ac odio tortor! Maecenas eget orci in ipsum ullamcorper malesuada. Nunc interdum lobortis velit sed accumsan.</p>
        </div>
        <div class="tab-pane" id="tabpanel3">
            <p> Praesent laoreet augue sed mauris vulputate, ut commodo justo malesuada. Pellentesque adipiscing; lorem vel convallis dignissim, leo est condimentum sapien, nec viverra dui risus at metus! Phasellus tellus magna, hendrerit eget tempor quis, fringilla id sem.</p>
        </div>
        <div class="tab-pane" id="tabpanel4">
            <p>Duis pharetra suscipit felis, id congue purus tempus sed. Nunc porttitor nec arcu at interdum. Nulla placerat odio luctus malesuada dapibus. Suspendisse et auctor metus. Suspendisse fringilla commodo cursus. Suspendisse sodales vitae enim ut commodo. Nunc ut nibh quis tellus varius fermentum at et nibh. Nulla nisl leo, hendrerit ut rutrum faucibus, ullamcorper ut lectus. Donec tristique justo justo, nec imperdiet leo porttitor non. Donec vehicula purus dapibus hendrerit ornare.</p>
        </div>
    </div>
</div>

{% highlight html %}
<ul class="nav nav-tabs">
    <li class="nav-item"><a href="#tabpanel1" class="nav-link" data-cfw="tab">Tab 1</a></li>
    <li class="nav-item active"><a href="#tabpanel2" class="nav-link" data-cfw="tab">Tab 2</a></li>
    <li class="nav-item"><a href="#tabpanel3" class="nav-link" data-cfw="tab">Tab 3</a></li>
    <li class="nav-item"><a href="#tabpanel4" class="nav-link disabled" data-cfw="tab">Tab 4</a></li>
</ul>
<div class="tab-content">
    <div class="tab-pane" id="tabpanel1">
        ...
    </div>
    <div class="tab-pane" id="tabpanel2">
        ...
    </div>
    <div class="tab-pane" id="tabpanel3">
        ...
    </div>
    <div class="tab-pane" id="tabpanel4">
        ...
    </div>
</div>
{% endhighlight %}

## Usage

Tabs need to be activated individually.

### Via Data Attributes

Add `data-cfw="tab"` to each tab element. The target tab pane can be specified either by the data attribue `data-cfw-tab-target="#tabPane0"` or from the `<a href="#tabPane0">`, where the target pane has an `id="tabPane0"`.

To set a default active tab, add the class `.active` to the parent `<li>` of the trigger item.

{% highlight html %}
<!-- Nav tabs -->
<ul class="nav nav-tabs">
    <li class="nav-item active"><a href="#home" class="nav-link" data-cfw="tab">Home</a></li>
    <li class="nav-item"><a href="#profile" class="nav-link" data-cfw="tab">Profile</a></li>
    <li class="nav-item"><a href="#messages" class="nav-link" data-cfw="tab">Messages</a></li>
    <li class="nav-item"><a href="#" class="nav-link" data-cfw="tab" data-cfw-tab-target="#settings">Settings</a></li>
</ul>

<!-- Tab panes -->
<div class="tab-content">
    <div class="tab-pane" id="home">...</div>
    <div class="tab-pane" id="profile">...</div>
    <div class="tab-pane" id="messages">...</div>
    <div class="tab-pane" id="settings">...</div>
</div>
{% endhighlight %}

### Via JavaScript

You can activate individual tabs in several ways:

{% highlight js %}
$('#myTab a[href="#profile"]').CFW_Tab('show'); // Select tab by name
$('#myTab a:first').CFW_Tab('show');            // Select first tab
$('#myTab a:last').CFW_Tab('show');             // Select last tab
$('#myTab li:eq(2) a').CFW_Tab('show');         // Select third tab (0-indexed)
{% endhighlight %}

### Options

Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-cfw-tab`, as in `data-cfw-tab-animate="false"`.

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
            <td>animate</td>
            <td>boolean</td>
            <td>true</td>
            <td>If the tab pane target should fade in and out.</td>
        </tr>
        <tr>
            <td>speed</td>
            <td>integer</td>
            <td>350</td>
            <td>Speed of animation (milliseconds) - corresponds the animation speed specified in CSS.</td>
        </tr>
        <tr>
            <td>hidden</td>
            <td>boolean</td>
            <td>true</td>
            <td>Use the <code>aria-hidden</code> attribute on the target container to indicate visibility status to screen readers.</td>
        </tr>
    </tbody>
    </table>
</div> <!-- /.table-responsive -->

### Methods

#### `.CFW_Tab(options)`
{:.no_toc}

Activates the content as a tab element. Accepts an optional options `object`.

{% highlight js %}
$('#myTab a').CFW_Tab({
    animate: false
});
{% endhighlight %}

#### `.CFW_Tab('show')`
{:.no_toc}

Shows the `tab-pane` for a given tab, and hides all sibling `tab-pane` items.

### Events
Event callbacks happen on the toggle/trigger element.

When showing a new tab, the events fire in the following order:

- `beforeHide.cfw.tab` (on the current active tab)
- `beforeShow.cfw.tab` (on the to-be-shown tab)
- `afterHidden.cfw.tab` (on the previous active tab, the same one as for the `beforeHide.cfw.tab` event)
- `afterShow.cfw.tab` (on the newly-active just-shown tab, the same one as for the `beforeShow.cfw.tab` event)

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
            <td>init.cfw.tab</td>
            <td>This event fires after the tab item is initialized.</td>
        </tr>
        <tr>
            <td>beforeShow.cfw.tab</td>
            <td>This event fires on tab show, but before the new tab has been shown. Use <code>event.target</code> and <code>event.relatedTarget</code> to target the active tab and the previous active tab (if available) respectively.</td>
        </tr>
        <tr>
            <td>afterShow.cfw.tab</td>
            <td>This event fires on tab show after a tab has been shown. Use <code>event.target</code> and <code>event.relatedTarget</code> to target the active tab and the previous active tab (if available) respectively.</td>
        </tr>
        <tr>
            <td>beforeHhide.cfw.tab</td>
            <td>This event fires when a new tab is to be shown (and thus the previous active tab is to be hidden). Use <code>event.target</code> and <code>event.relatedTarget</code> to target the current active tab and the new soon-to-be-active tab, respectively.</td>
        </tr>
        <tr>
            <td>afterHhide.cfw.tab</td>
            <td>This event fires after a new tab is shown (and thus the previous active tab is hidden). Use <code>event.target</code> and <code>event.relatedTarget</code> to target the previous active tab and the new active tab, respectively.</td>
        </tr>
    </tbody>
    </table>
</div> <!-- /.table-responsive -->

{% highlight js %}
$('a[data-cfw="tab"]').on('afterShow.cfw.tab', function(e) {
    e.target // newly activated tab
    e.relatedTarget // previous active tab
});
{% endhighlight %}
