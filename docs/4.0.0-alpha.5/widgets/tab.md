---
layout: docs
title: Tab
subtitle: tab.js
description: Add quick, dynamic tab functionality to transition through panes of content.
group: widgets
---

{% capture callout %}
Incompatible Widgets
{:.h5 .no_toc}

For accessibility reasons, do not mix use of the [Tab widget]({{ site.baseurl }}/{{ site.docs_version }}/widgets/tab/) and [Dropdown widget]({{ site.baseurl }}/{{ site.docs_version }}/widgets/dropdown/) in the same nav item.  This will cause navigation and usability issues.  One or the other, but not both.
{% endcapture %}
{% include callout.html content=callout type="warning" %}

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Examples

### Tabs

The tab widget works with [tab]({{ site.baseurl }}/{{ site.docs_version }}/components/navs/#tabs) style navigation.

<div class="cf-example cf-example-tabs">
    <ul class="nav nav-tabs">
        <li class="nav-item"><a href="#tab1" class="nav-link" data-cfw="tab">Tab 1</a></li>
        <li class="nav-item"><a href="#tab2" class="nav-link active" data-cfw="tab">Tab 2</a></li>
        <li class="nav-item"><a href="#tab3" class="nav-link" data-cfw="tab">Tab 3</a></li>
        <li class="nav-item"><a href="#tab4" class="nav-link disabled" data-cfw="tab" tabindex="-1" aria-disabled="true">Tab 4</a></li>
    </ul>
    <div class="tab-content">
        <div class="tab-pane" id="tab1">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pulvinar ligula ac sapien auctor viverra. Aliquam elit tortor, consequat at ultrices sit amet, vehicula eu leo. In fermentum lacus purus, ac dictum orci placerat ut. Integer magna lacus, adipiscing sed justo ut, sollicitudin rhoncus libero. Pellentesque accumsan pretium sem eu euismod? Nunc id facilisis sem? Quisque quis laoreet mi.</p>
        </div>
        <div class="tab-pane" id="tab2">
            <p>Phasellus at nisl et arcu tincidunt sagittis et nec nunc. Fusce ultrices venenatis felis, in faucibus mauris egestas nec. Etiam malesuada dictum nisi, at pulvinar orci. Aenean venenatis metus in pharetra aliquam. Mauris ac odio tortor! Maecenas eget orci in ipsum ullamcorper malesuada. Nunc interdum lobortis velit sed accumsan.</p>
        </div>
        <div class="tab-pane" id="tab3">
            <p> Praesent laoreet augue sed mauris vulputate, ut commodo justo malesuada. Pellentesque adipiscing; lorem vel convallis dignissim, leo est condimentum sapien, nec viverra dui risus at metus! Phasellus tellus magna, hendrerit eget tempor quis, fringilla id sem.</p>
        </div>
        <div class="tab-pane" id="tab4">
            <p>Duis pharetra suscipit felis, id congue purus tempus sed. Nunc porttitor nec arcu at interdum. Nulla placerat odio luctus malesuada dapibus. Suspendisse et auctor metus. Suspendisse fringilla commodo cursus. Suspendisse sodales vitae enim ut commodo. Nunc ut nibh quis tellus varius fermentum at et nibh. Nulla nisl leo, hendrerit ut rutrum faucibus, ullamcorper ut lectus. Donec tristique justo justo, nec imperdiet leo porttitor non. Donec vehicula purus dapibus hendrerit ornare.</p>
        </div>
    </div>
</div>

{% highlight html %}
<ul class="nav nav-tabs">
    <li class="nav-item"><a href="#tab1" class="nav-link" data-cfw="tab">Tab 1</a></li>
    <li class="nav-item"><a href="#tab2" class="nav-link active" data-cfw="tab">Tab 2</a></li>
    <li class="nav-item"><a href="#tab3" class="nav-link" data-cfw="tab">Tab 3</a></li>
    <li class="nav-item"><a href="#tab4" class="nav-link disabled" data-cfw="tab" tabindex="-1" aria-disabled="true">Tab 4</a></li>
</ul>
<div class="tab-content">
    <div class="tab-pane" id="tab1">...</div>
    <div class="tab-pane" id="tab2">...</div>
    <div class="tab-pane" id="tab3">...</div>
    <div class="tab-pane" id="tab4">...</div>
</div>
{% endhighlight %}

### Pills

The tab widget also works with [pill]({{ site.baseurl }}/{{ site.docs_version }}/components/navs/#pills) style navigation.

<div class="cf-example cf-example-tabs">
    <ul class="nav nav-pills">
        <li class="nav-item"><a href="#pill1" class="nav-link" data-cfw="tab">Tab 1</a></li>
        <li class="nav-item"><a href="#pill2" class="nav-link active" data-cfw="tab">Tab 2</a></li>
        <li class="nav-item"><a href="#pill3" class="nav-link" data-cfw="tab">Tab 3</a></li>
        <li class="nav-item"><a href="#pill4" class="nav-link disabled" data-cfw="tab" tabindex="-1" aria-disabled="true">Tab 4</a></li>
    </ul>
    <div class="tab-content">
        <div class="tab-pane" id="pill1">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pulvinar ligula ac sapien auctor viverra. Aliquam elit tortor, consequat at ultrices sit amet, vehicula eu leo. In fermentum lacus purus, ac dictum orci placerat ut. Integer magna lacus, adipiscing sed justo ut, sollicitudin rhoncus libero. Pellentesque accumsan pretium sem eu euismod? Nunc id facilisis sem? Quisque quis laoreet mi.</p>
        </div>
        <div class="tab-pane" id="pill2">
            <p>Phasellus at nisl et arcu tincidunt sagittis et nec nunc. Fusce ultrices venenatis felis, in faucibus mauris egestas nec. Etiam malesuada dictum nisi, at pulvinar orci. Aenean venenatis metus in pharetra aliquam. Mauris ac odio tortor! Maecenas eget orci in ipsum ullamcorper malesuada. Nunc interdum lobortis velit sed accumsan.</p>
        </div>
        <div class="tab-pane" id="pill3">
            <p> Praesent laoreet augue sed mauris vulputate, ut commodo justo malesuada. Pellentesque adipiscing; lorem vel convallis dignissim, leo est condimentum sapien, nec viverra dui risus at metus! Phasellus tellus magna, hendrerit eget tempor quis, fringilla id sem.</p>
        </div>
        <div class="tab-pane" id="pill4">
            <p>Duis pharetra suscipit felis, id congue purus tempus sed. Nunc porttitor nec arcu at interdum. Nulla placerat odio luctus malesuada dapibus. Suspendisse et auctor metus. Suspendisse fringilla commodo cursus. Suspendisse sodales vitae enim ut commodo. Nunc ut nibh quis tellus varius fermentum at et nibh. Nulla nisl leo, hendrerit ut rutrum faucibus, ullamcorper ut lectus. Donec tristique justo justo, nec imperdiet leo porttitor non. Donec vehicula purus dapibus hendrerit ornare.</p>
        </div>
    </div>
</div>

{% highlight html %}
<ul class="nav nav-tabs">
    <li class="nav-item"><a href="#pill1" class="nav-link" data-cfw="tab">Pill 1</a></li>
    <li class="nav-item"><a href="#pill2" class="nav-link active" data-cfw="tab">Pill 2</a></li>
    <li class="nav-item"><a href="#pill3" class="nav-link" data-cfw="tab">Pill 3</a></li>
    <li class="nav-item"><a href="#pill4" class="nav-link disabled" data-cfw="tab" tabindex="-1" aria-disabled="true">Pill 4</a></li>
</ul>
<div class="tab-content">
    <div class="tab-pane" id="pill1">...</div>
    <div class="tab-pane" id="pill2">...</div>
    <div class="tab-pane" id="pill3">...</div>
    <div class="tab-pane" id="pill4">...</div>
</div>
{% endhighlight %}

### List

The tab widget even work with the [`.list` component]({{ site.baseurl }}/{{ site.docs_version }}/components/lists/).

<div class="cf-example cf-example-tabs">
    <div class="row">
        <div class="col-md-4">
            <nav class="list list-spaced list-ruled">
                <a href="#list1" data-cfw="tab" class="list-item list-item-action">List Item 1</a>
                <a href="#list2" data-cfw="tab" class="list-item list-item-action active">List Item 2</a>
                <a href="#list3" data-cfw="tab" class="list-item list-item-action">List Item 3</a>
                <a href="#list4" data-cfw="tab" class="list-item list-item-action disabled" tabindex="-1" aria-disabled="true">List Item 4</a>
            </nav>
        </div>
        <div class="col-md-8">
            <div class="tab-content">
                <div class="tab-pane" id="list1">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pulvinar ligula ac sapien auctor viverra. Aliquam elit tortor, consequat at ultrices sit amet, vehicula eu leo. In fermentum lacus purus, ac dictum orci placerat ut. Integer magna lacus, adipiscing sed justo ut, sollicitudin rhoncus libero. Pellentesque accumsan pretium sem eu euismod? Nunc id facilisis sem? Quisque quis laoreet mi.</p>
                </div>
                <div class="tab-pane" id="list2">
                    <p>Phasellus at nisl et arcu tincidunt sagittis et nec nunc. Fusce ultrices venenatis felis, in faucibus mauris egestas nec. Etiam malesuada dictum nisi, at pulvinar orci. Aenean venenatis metus in pharetra aliquam. Mauris ac odio tortor! Maecenas eget orci in ipsum ullamcorper malesuada. Nunc interdum lobortis velit sed accumsan.</p>
                </div>
                <div class="tab-pane" id="list3">
                    <p> Praesent laoreet augue sed mauris vulputate, ut commodo justo malesuada. Pellentesque adipiscing; lorem vel convallis dignissim, leo est condimentum sapien, nec viverra dui risus at metus! Phasellus tellus magna, hendrerit eget tempor quis, fringilla id sem.</p>
                </div>
                <div class="tab-pane" id="list4">
                    <p>Duis pharetra suscipit felis, id congue purus tempus sed. Nunc porttitor nec arcu at interdum. Nulla placerat odio luctus malesuada dapibus. Suspendisse et auctor metus. Suspendisse fringilla commodo cursus. Suspendisse sodales vitae enim ut commodo. Nunc ut nibh quis tellus varius fermentum at et nibh. Nulla nisl leo, hendrerit ut rutrum faucibus, ullamcorper ut lectus. Donec tristique justo justo, nec imperdiet leo porttitor non. Donec vehicula purus dapibus hendrerit ornare.</p>
                </div>
            </div>
        </div>
    </div>
</div>

{% highlight html %}
<div class="row">
    <div class="col-md-4">
        <nav class="list list-spaced list-ruled">
            <a href="#list1" class="list-item list-item-action">List Item 1</a>
            <a href="#list2" class="list-item list-item-action active">List Item 2</a>
            <a href="#list3" class="list-item list-item-action">List Item 3</a>
            <a href="#list4" class="list-item list-item-action disabled" tabindex="-1" aria-disabled="true">List Item 4</a>
        </nav>
    </div>
    <div class="col-md-8">
        <div class="tab-content">
            <div class="tab-pane" id="list1">...</div>
            <div class="tab-pane" id="list2">...</div>
            <div class="tab-pane" id="list3">...</div>
            <div class="tab-pane" id="list4">...</div>
        </div>
    </div>
</div>
{% endhighlight %}

## Usage

Tabs need to be activated individually, and require the use of a `ul`, `ol`, or `nav` as an ancestor item of all tab triggers, especially if they are to be grouped together.

### Via Data Attributes

Add `data-cfw="tab"` to each tab element. The target tab pane can be specified either by the data attribue `data-cfw-tab-target="#tabPane0"` or from the `<a href="#tabPane0">`, where the target pane has an `id="tabPane0"`.

To set a default active tab, add the class `.active` to the trigger item.

{% highlight html %}
<!-- Nav tabs -->
<ul class="nav nav-tabs">
    <li class="nav-item"><a href="#home" class="nav-link active" data-cfw="tab">Home</a></li>
    <li class="nav-item"><a href="#profile" class="nav-link" data-cfw="tab">Profile</a></li>
    <li class="nav-item"><a href="#" class="nav-link" data-cfw="tab" data-cfw-tab-target="#messages">Messages</a></li>
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
$('#myTab a:nth-child(3)').CFW_Tab('show')      // Select third tab
{% endhighlight %}

### Options

Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-cfw-tab`, as in `data-cfw-tab-animate="false"`.

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
                <td>animate</td>
                <td>boolean</td>
                <td>true</td>
                <td>If the tab pane target should fade in and out.</td>
            </tr>
        </tbody>
    </table>
</div>

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

#### `.CFW_Tab('dispose')`
{:.no_toc}

Will disable the listen events for the given tab, but leave it otherwise unchanged.

### Events
Event callbacks happen on the toggle/trigger element.

When showing a new tab, the events fire in the following order:

- `beforeHide.cfw.tab` (on the current active tab)
- `beforeShow.cfw.tab` (on the to-be-shown tab)
- `afterHidden.cfw.tab` (on the previous active tab, the same one as for the `beforeHide.cfw.tab` event)
- `afterShow.cfw.tab` (on the newly-active just-shown tab, the same one as for the `beforeShow.cfw.tab` event)

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
                <td>beforeHide.cfw.tab</td>
                <td>This event fires when a new tab is to be shown (and thus the previous active tab is to be hidden). Use <code>event.target</code> and <code>event.relatedTarget</code> to target the current active tab and the new soon-to-be-active tab, respectively.</td>
            </tr>
            <tr>
                <td>afterHide.cfw.tab</td>
                <td>This event fires after a new tab is shown (and thus the previous active tab is hidden). Use <code>event.target</code> and <code>event.relatedTarget</code> to target the previous active tab and the new active tab, respectively.</td>
            </tr>
        </tbody>
    </table>
</div>

{% highlight js %}
$('a[data-cfw="tab"]').on('afterShow.cfw.tab', function(e) {
    e.target // newly activated tab
    e.relatedTarget // previous active tab
});
{% endhighlight %}

## Accessibility

### Keyboard Navigation

<dl class="cf-docs-keys">
    <dt>
        <kbd>tab</kbd>
    </dt>
    <dd>
        When the tab list if recieving focus, the active tab element becomes focused.
        When the tab list has the focus, moves the focus to the next focusable item on the page.
    </dd>
    <dt>
        <kbd title="right arrow" aria-label="right arrow"><span class="fas fa-arrow-right" aria-hidden="true"></span></kbd> /
        <kbd title="down arrow" aria-label="down arrow"><span class="fas fa-arrow-down" aria-hidden="true"></span></kbd>
    </dt>
    <dd>
        Moves focus to the next tab and activates it, displaying the related tabpanel content.
    </dd>
    <dt>
        <kbd title="left arrow" aria-label="left arrow"><span class="fas fa-arrow-left" aria-hidden="true"></span></kbd> /
        <kbd title="up arrow" aria-label="up arrow"><span class="fas fa-arrow-up" aria-hidden="true"></span></kbd>
    </dt>
    <dd>
        Moves focus to the previous tab and activates it, displaying the related tabpanel content.
    </dd>
</dl>

### ARIA and Role Attributes

Dynamic tabbed interfaces, as described in the [<abbr title="Web Accessibility Initiative">WAI</abbr> <abbr title="Accessible Rich Internet Applications">ARIA</abbr> Authoring Practices](https://www.w3.org/TR/wai-aria-practices/#tabpanel), require `role="tablist"`, `role="tab"`, `role="tabpanel"`, and additional `aria-` attributes in order to convey their structure, functionality and current state to users of assistive technologies (such as screen readers).

All of these requirements are automatically added by the Tab widget, and will update automatically as the user interacts with the tabbed interface.