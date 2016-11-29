---
layout: docs
title: Modal
subtitle: modal.js
group: widgets
---

The modal widget allows you to add dialog style windows to your site or application.

{% callout warning %}
#### Overlapping modals not supported

Be sure not to open a modal while another is still visible. Showing more than one modal at a time requires custom code.
{% endcallout %}

{% callout warning %}
#### Modal Markup Placement

Always try to place a modal's HTML code in a top-level position in your document, such as a direct chld of the `<body>` element, to avoid other components affecting the modal's appearance and/or functionality. Placing it within a `position: fixed;` element may adversely affect placement.
{% endcallout %}

{% callout warning %}
#### Mobile Device Caveats

There are some caveats regarding using modals on mobile devices. See [our browser support docs]({{ site.baseurl }}/get-started/browsers-devices/#modals-and-dropdowns-on-mobile) for details.
{% endcallout %}

{% callout info %}
#### Embedding YouTube Videos

Embedding YouTube videos in modals requires additional JavaScript not in Figuration to automatically stop playback and more. [See this helpful Stack Overflow post](https://stackoverflow.com/questions/18622508/bootstrap-3-and-youtube-in-modal) for more information.
{% endcallout %}

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Examples

### Static Example

{% example html %}
<div class="modal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-cfw-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">Modal title</h4>
            </div>
            <div class="modal-body">
                <p>Modal body content&hellip;</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn" data-cfw-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
        </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
</div><!-- /.modal -->
{% endexample %}

### Live Demo

Toggle a modal via JavaScript by clicking the button below. It will slide down and fade in from the top of the page. Examples of tooltips, popover, and scroll handling included.

<div class="modal" id="modalLive">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-cfw-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">Modal Heading</h4>
            </div>
            <div class="modal-body">
                <h4>Text in a modal</h4>
                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                <h4>Popover in a modal</h4>
                <p>This <button type="button" class="btn btn-secondary" data-cfw="popover" title="A Title" data-cfw-popover-content="And here's some amazing content. It's very engaging. right?" data-cfw-popover-placement="right">button</button> should trigger a popover on click.</p>
                <h4>Tooltips in a modal</h4>
                <p><a href="#" data-cfw="tooltip" title="Tooltip">This link</a> and <a href="#" data-cfw="tooltip" title="Tooltip">that link</a> should have tooltips on hover.</p>
                <h4>Collapse in a modal</h4>
                <a href="#" role="button" class="btn btn-secondary" data-cfw="collapse" data-cfw-collapse-toggle="modal_collapse">Collapse<span class="caret"></span></a>
                    <div data-cfw-collapse-target="modal_collapse">
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                    </div>
                <hr />
                <h4>Overflowing text to show scroll behavior</h4>
                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn" data-cfw-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
        </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
</div><!-- /.modal -->

<div class="cf-example">
    <button class="btn btn-primary" data-cfw="modal" data-cfw-modal-toggle="#modalLive">
        Launch demo modal
    </button>
</div>

{% highlight html %}
<!-- Button trigger -->
<button class="btn btn-primary" data-cfw="modal" data-cfw-modal-toggle="#modalLive">
    Launch demo modal
</button>

<!-- Modal -->
<div class="modal" id="modalLive">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-cfw-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">Modal title</h4>
            </div>
            <div class="modal-body">
                ...
            </div>
            <div class="modal-footer">
                <button type="button" class="btn" data-cfw-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
        </div>
    </div>
</div>
{% endhighlight %}

### Grid Usage in Modals

To take advantage of the grid system within a modal, just nest `.container-fluid` within the `.modal-body` and then use the normal grid system classes within this container.

<div class="modal" id="modalGrid">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-cfw-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">Grid in a Modal</h4>
            </div>
            <div class="modal-body">
                <div class="container-fluid cf-example-row">
                    <div class="row">
                        <div class="col-md-4">.col-md-4</div>
                        <div class="col-md-4 offset-md-4">.col-md-4 .offset-md-4</div>
                    </div>
                    <div class="row">
                        <div class="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
                        <div class="col-md-2 offset-md-4">.col-md-2 .offset-md-4</div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 offset-md-3">.col-md-6 .offset-md-3</div>
                    </div>
                    <div class="row">
                        <div class="col-sm-9">
                            Level 1: .col-sm-9
                            <div class="row">
                                <div class="col-8 col-sm-6">
                                    Level 2: .col-8 .col-sm-6
                                </div>
                                <div class="col-4 col-sm-6">
                                    Level 2: .col-4 .col-sm-6
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn" data-cfw-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
        </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
</div><!-- /.modal -->

<div class="cf-example">
    <button class="btn btn-primary" data-cfw="modal" data-cfw-modal-toggle="#modalGrid">
        Grid in a Modal
    </button>
</div>

{% highlight html %}
<!-- Button trigger -->
<button class="btn btn-primary" data-cfw="modal" data-cfw-modal-toggle="#modalLive">
    Launch demo modal
</button>

<!-- Modal -->
<div class="modal" id="modalLive">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-cfw-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">Modal title</h4>
            </div>
            <div class="modal-body">
                <div class="container-fluid
                    <div class="row">
                        <div class="col-md-4">.col-md-4</div>
                        <div class="col-md-4">.col-md-4</div>
                        <div class="col-md-4">.col-md-4</div>
                    </div>
                    ...
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn" data-cfw-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
        </div>
    </div>
</div>
{% endhighlight %}

### Optional Sizes

Modals have two optional sizes, provided by Figuration's base CSS, available via modifier classes to be placed on a `.modal-dialog`.

<div class="modal" id="modalLg">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-cfw-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="myLargeModalLabel">Large modal</h4>
            </div>
            <div class="modal-body">
                ...
            </div>
        </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
</div><!-- /.modal -->

<div class="modal" id="modalSm">
    <div class="modal-dialog modal-sm">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-cfw-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="mySmallModalLabel">Small modal</h4>
            </div>
            <div class="modal-body">
                ...
            </div>
        </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
</div><!-- /.modal -->

<div class="cf-example">
    <button class="btn btn-primary" data-cfw="modal" data-cfw-modal-toggle="#modalLg">Large modal</button>
    <button class="btn btn-primary" data-cfw="modal" data-cfw-modal-toggle="#modalSm">Small modal</button>
</div>

{% highlight html %}
<!-- Large modal -->
<button class="btn btn-primary" data-cfw="modal" data-cfw-modal-toggle="#modalLg">Large modal</button>

<div class="modal" id="modalLg">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            ...
        </div>
    </div>
</div>

<!-- Small modal -->
<button class="btn btn-primary" data-cfw="modal" data-cfw-modal-toggle="#modalSm">Small modal</button>

<div class="modal" id="modalSm">
    <div class="modal-dialog modal-sm">
        <div class="modal-content">
            ...
        </div>
    </div>
</div>
{% endhighlight %}

## Usage

The modal widget toggles your hidden content on demand, via data attributes or JavaScript. It also adds `.modal-open` to the `<body>` to override default scrolling behavior and generates a `.modal-backdrop` to provide a click area for dismissing shown modals when clicking outside the modal.

### Via Data Attributes

Activate a modal without writing JavaScript. Set `data-cfw="modal"` on a controller element, like a button, along with a `data-cfw-modal-toggle="#foo"` or `href="#foo"` to target a specific modal to toggle.

{% highlight html %}
<button type="button" data-cfw="modal" data-cfw-modal-toggle="#foo">Launch modal</button>
{% endhighlight %}

### Via JavaScript

Call a modal with id `myModal` with a single line of JavaScript:

{% highlight js %}
$('#myModal').CFW_Modal();
{% endhighlight %}

### Close Triggers

Any an element with a data attribute of `data-cfw-dismiss="modal"` within the modal element will act as a close trigger for the modal.  There can be multiple close triggers, such as a header/titlebar close and a cancel button in the footer.

### Options

Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-cfw-modal-`, as in `data-cfw-modal-animate=false`.

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
            <td>toggle</td>
            <td>string</td>
            <td>null</td>
            <td>Either the selector (jQuery style), or the string related to the target tooltip having a `data-cfw-modal-target` attribute.</td>
        </tr>
        <tr>
            <td>animate</td>
            <td>boolean</td>
            <td>true</td>
            <td>If modal targets should fade and slide in.</td>
        </tr>
        <tr>
            <td>speed</td>
            <td>number| object</td>
            <td>backdrop:150, modal:300</td>
            <td>
                <p>Speed of animations for fading backdrop and sliding the modal dialog (ms).</p>
                <p>If a number is supplied, speed is applied to both fade/slide.  These numbers need to correspsond to the CSS animation settings.</p>
                Object structure is: `speed: { backdrop: 150, modal: 300 }`
            </td>
        </tr>
        <tr>
            <td>unlink</td>
            <td>boolean</td>
            <td>false</td>
            <td>If the `unlink` method should be called when the modal is hidden.  This leaves the modal behind in the DOM.</td>
        </tr>
        <tr>
            <td>destroy</td>
            <td>boolean</td>
            <td>false</td>
            <td>If the `destroy` method should be called when the modal is hidden. This will remove the modal from the DOM.</td>
        </tr>
        <tr>
            <td>backdrop</td>
            <td>boolean or the string `'static'`</td>
            <td>true</td>
            <td>
                <p>Includes a modal-backdrop element. Alternatively, specify `static` for a backdrop which doesn't close the modal on click.</p>
                <p>The backdrop is the semi-opaque overlay used to visually seperate the modal from the page content.</p>
             </td>
        </tr>
        <tr>
            <td>keyboard</td>
            <td>boolean</td>
            <td>true</td>
            <td>Closes the modal when escape key is pressed</td>
        </tr>
        <tr>
            <td>show</td>
            <td>boolean</td>
            <td>false</td>
            <td>Shows the modal when initialized.</td>
        </tr>
    </tbody>
    </table>
</div> <!-- /.table-responsive -->

### Methods

#### `.CFW_Modal(options)`
{:.no_toc}

Activates a modal dialog. Accepts an optional options `object`.
{% highlight js %}
$('#myModal').CFW_Modal({
    animate: false
});
{% endhighlight %}

#### `.CFW_Modal('toggle')`
{:.no_toc}

Toggles a modal dialog to be shown or hidden.

#### `.CFW_Modal('show')`
{:.no_toc}

Shows a modal dialog.

#### `.CFW_Modal('hide')`
{:.no_toc}

Hides a modal dialog.

#### `.CFW_Modal('unlink')`
{:.no_toc}

Hides the modal, removes events and attributes from both trigger and modal.

#### `.CFW_Modal('destroy')`
{:.no_toc}

Calls the `unlink` method, and then removes the modal from the DOM.

### Events

Event callbacks happen on the target `<div class="modal">` element.

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
            <td>init.cfw.modal</td>
            <td>This event fires after the modal item is initialized.</td>
        </tr>
        <tr>
            <td>beforeShow.cfw.modal</td>
            <td>This event is fired immediately when the <code>show</code> method is called.</td>
        </tr>
        <tr>
            <td>scrollbarSet.cfw.modal</td>
            <td>This event is fired immediately when the <code>&lt;body&gt;</code> padding is adjusted for the scrollbar width.</td>
        </tr>
        <tr>
            <td>afterShow.cfw.modal</td>
            <td>This event is fired when a modal dialog has been made visible to the user (will wait for CSS transitions to complete).</td>
        </tr>
        <tr>
            <td>scrollbarReset.cfw.modal</td>
            <td>This event is fired immediately when the <code>&lt;body&gt;</code> padding adjustment for the scrollbar is removed.</td>
        </tr>
        <tr>
            <td>beforeHide.cfw.modal</td>
            <td>This event is fired immediately when the <code>hide</code> method is called.</td>
        </tr>
        <tr>
            <td>afterHide.cfw.modal</td>
            <td>This event is fired when a modal dialog has been hidden from the user (will wait for CSS transitions to complete).</td>
        </tr>
        <tr>
            <td>beforeUnlink.cfw.modal</td>
            <td>This event is fired immediately when the <code>unlink</code> method is called. This event can occur after the `beforeHide` event if set to automatically unlink, or before if called via method.</td>
        </tr>
        <tr>
            <td>afterUnlink.cfw.modal</td>
            <td>This event is fired when a modal item has been unlinked from its trigger item and the data-api removed. This event can occur after the `afterHide` event when invoked from the `unlink` method, or before if set to automatically unlink.</td>
        </tr>
        <tr>
            <td>destroy.cfw.modal</td>
            <td>This event is fired immediately before the modal item is removed from the DOM.</td>
        </tr>
    </tbody>
    </table>
</div> <!-- /.table-responsive -->

{% highlight js %}
$('#myModal').on('afterHide.cfw.modal', function () {
  // do something...
});
{% endhighlight %}

### Server-side Apps

Modals are designed to hopefully work with server side applications, such as Apache Wicket, and other instances where the server-side application might need to create or update the modal content after the initial page load.

A quick example:<br />
<ol>
    <li>An item with an event handler that makes a callback to create a new modal is interacted with.</li>
    <li>
        Call as needed:<br />
        <ul>
            <li><code>$('#myModal').CFW_Modal('hide');</code></li>
            <li>or <code>$('#myModal').CFW_Modal('unlink');</code></li>
            <li>or <code>$('#myModal').CFW_Modal('destroy');</code></li>
        </ul>
    </li>
    <li>Update/create the modal object and insert into DOM.</li>
    <li>Initialize the modal: <code>$('#myModal').CFW_Modal(options);</code> with desired options.</li>
    <li>Show modal: <code>$('#myModal').CFW_Modal('show');</code></li>
</ol>

## Accessibility

### Key Commands

The following key commands are handled when focus is inside the modal:

- <kbd>Esc</kbd> - Close the modal

### Enforced Focus

In order to keep assistive technology users from interacting with the rest of the page when a modal is open, the focus is automatically forced back to the modal when a user tries to navigate out.

When navigating **forward**, out the *bottom* of the modal, focus will be moved to the **top of the modal**.

When navigation **backward**, out the *top* of the modal, focus will be moved back to the **top of the modal**.

If for some reason you need to disable the enforced focus for modals, you can override the `enforceFocus()` method.

{% highlight js %}
// This needs to be loaded after Figuration's JavaScript
// PLEASE DO NOT DO THIS!!! - Just here for reference
$.fn.CFW_Modal.Constructor.prototype.enforceFocus = function() {};
// SERIOUSLY DO NOT DO THIS!!!
{% endhighlight %}

However, we do not advise disabling it completely, but overriding the function to handle the focus conditionally.

{% highlight js %}
// This needs to be loaded after Figuration's JavaScript
$.fn.CFW_Modal.Constructor.prototype.enforceFocus = function() {
    var $selfRef = this;
    $(document)
        .off('focusin.cfw.modal') // guard against infinite focus loop
        .on('focusin.cfw.modal', function(e) {
            if (document !== e.target && $selfRef.$targetElm[0] !== e.target && !$selfRef.$targetElm.has(e.target).length)
                // Add conditions here
                // In this case items with a 'focusuable-item' class
                && !$(e.target.parentNode).hasClass('focusuable-item') {
                    $selfRef.$targetElm.trigger('focus');
            }
        });
    }
};
{% endhighlight %}
