---
layout: doc
title: Modal
subtitle: modal.js
description: The Modal widget allows you to add dialog style windows to your site or application.
group: widgets
toc: true
---

## Important Notes

- Modals get positioned over everything else in the document and remove scroll from the `<body>` so that modal content scrolls instead.
- By default, clicking on the modal "backdrop" will automatically close the modal.
- Figuration only supports one modal at a time.  Nested modals are not supported, as this can cause difficult usability and accessibility issues.
- Modals use `position: fixed`. Always try to place modal HTML code in a top-level position in your document, such as a direct chld of the `<body>` element. Putting modal HTML within a fixed position element will adversely affect placement.
- There are some caveats regarding using modals on mobile devices. See [our browser support docs]({{ site.path }}/{{ version.docs }}/get-started/browsers-and-devices/#modals-and-dropdowns-on-mobile) for details.
- Embedding YouTube videos in modals requires additional JavaScript, not included in Figuration, to automatically stop playback and more. [See this helpful Stack Overflow post](https://stackoverflow.com/questions/18622508/bootstrap-3-and-youtube-in-modal) for more information.
- The [`autofocus`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-autofocus) HTML attribute has no effect in modals. To achieve the same effect you will need some custom JavaScript:
{% capture highlight %}
$('#myModal').on('afterShow.cfw.modal', function() {
  $('#myInput').trigger('focus');
});
{% endcapture %}
{% renderHighlight highlight, "js" %}

## Examples

### Modal Components

Below is a static modal example (meaning its `position` and `display` have been overridden). Included are the modal header, modal body (required for `padding`), and modal footer (optional). It is highly suggested to include modal headers with dismiss actions whenever possible, or provide another explicit dismiss action.

{% capture example %}
<div class="modal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Modal title</h4>
        <button type="button" class="close" data-cfw-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      </div>
      <div class="modal-body">
        <p>Modal body content&hellip;</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn" data-cfw-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
{% endcapture %}
{% renderExample example %}

### Live Demo

Toggle a modal via JavaScript by clicking the button below. It will slide down and fade in from the top of the page. Examples of tooltips, popover, and scroll handling included.

<div class="modal" id="modalLive">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Modal Heading</h4>
        <button type="button" class="close" data-cfw-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      </div>
      <div class="modal-body">
        <h4>Text in a modal</h4>
        <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
        <h4>Popover in a modal</h4>
        <p>This <button type="button" class="btn btn-secondary" data-cfw="popover" title="A Title" data-cfw-popover-content="And here's some amazing content. It's very engaging. right?" data-cfw-popover-placement="forward">button</button> should trigger a popover on click.</p>
        <h4>Tooltips in a modal</h4>
        <p><a href="#" data-cfw="tooltip" title="Tooltip">This link</a> and <a href="#" data-cfw="tooltip" title="Tooltip">that link</a> should have tooltips on hover.</p>
        <h4>Collapse in a modal</h4>
        <a href="#modal_collapse" role="button" class="btn btn-secondary" data-cfw="collapse">Collapse <span class="caret"></span></a>
          <div id="modal_collapse" class="collapse">
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
    </div>
  </div>
</div>

<div class="cf-example">
  <button class="btn btn-primary" data-cfw="modal" data-cfw-modal-target="#modalLive">
    Launch demo modal
  </button>
</div>

{% capture highlight %}
<!-- Button trigger -->
<button class="btn btn-primary" data-cfw="modal" data-cfw-modal-target="#modalLive">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal" id="modalLive">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Modal title</h4>
        <button type="button" class="close" data-cfw-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
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
{% endcapture %}
{% renderHighlight highlight, "html" %}

### Scrolling Long Content

When modals become too long for the user's viewport or device, they scroll independent of the page itself.  Try the demo below for an example.

<div class="modal" id="modalScroll">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Modal title</h4>
        <button type="button" class="close" data-cfw-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      </div>
      <div class="modal-body">
        <h5>Overflowing text to show scroll behavior</h5>
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
        <button type="button" class="btn btn-primary">Save</button>
      </div>
    </div>
  </div>
</div>

<div class="cf-example">
  <button class="btn btn-primary" data-cfw="modal" data-cfw-modal-target="#modalScroll">
    Scrolling modal
  </button>
</div>

{% capture highlight %}
<!-- Button trigger -->
<button class="btn btn-primary" data-cfw="modal" data-cfw-modal-target="#modalScroll">
  Scrolling modal
</button>

<!-- Modal -->
<div class="modal" id="modalScroll">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Modal title</h4>
        <button type="button" class="close" data-cfw-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
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
{% endcapture %}
{% renderHighlight highlight, "html" %}

### Scrollable Body

Add `.modal-dialog-scrollable` to `.modal-dialog` where the `.modal-body` is the scrollable region, and the entire modal fits within the viewport height.

<div class="modal" id="modalScrollBody">
  <div class="modal-dialog modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Modal title</h4>
        <button type="button" class="close" data-cfw-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      </div>
      <div class="modal-body">
        <h5>Overflowing text to show scroll behavior</h5>
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
        <button type="button" class="btn btn-primary">Save</button>
      </div>
    </div>
  </div>
</div>

<div class="cf-example">
  <button type="button" class="btn btn-primary" data-cfw="modal" data-cfw-modal-target="#modalScrollBody">
    Scrollable modal body
  </button>
</div>

{% capture highlight %}
<!-- Button trigger -->
<button type="button" class="btn btn-primary" data-cfw="modal" data-cfw-modal-target="#modalScrollBody">
  Scrollable modal body
</button>

<!-- Modal -->
<div class="modal" id="modalScrollBody">
  <div class="modal-dialog modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Modal title</h4>
        <button type="button" class="close" data-cfw-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
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
{% endcapture %}
{% renderHighlight highlight, "html" %}

### Vertically Centered

Add `.modal-dialog-centered` to `.modal-dialog` to vertically center the modal.

<div class="modal" id="modalCenter">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Modal title</h4>
        <button type="button" class="close" data-cfw-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      </div>
      <div class="modal-body">
        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn" data-cfw-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

<div class="cf-example">
  <button type="button" class="btn btn-primary" data-cfw="modal" data-cfw-modal-target="#modalCenter">
    Centered modal
  </button>
</div>

{% capture highlight %}
<!-- Button trigger -->
<button class="btn btn-primary" data-cfw="modal" data-cfw-modal-target="#modalCenter">
  Centered modal
</button>

<!-- Modal -->
<div class="modal" id="modalCenter">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Modal title</h4>
        <button type="button" class="close" data-cfw-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
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
{% endcapture %}
{% renderHighlight highlight, "html" %}

A vertically centered dialog will also scroll when the content is longer than the viewport.

<div class="modal" id="modalCenterScroll">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Modal title</h4>
        <button type="button" class="close" data-cfw-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      </div>
      <div class="modal-body">
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
    </div>
  </div>
</div>

<div class="cf-example">
  <button type="button" class="btn btn-primary" data-cfw="modal" data-cfw-modal-target="#modalCenterScroll">
    Scrolling centered modal
  </button>
</div>

{% capture highlight %}
<!-- Button trigger -->
<button class="btn btn-primary" data-cfw="modal" data-cfw-modal-target="#modalCenterScroll">
  Scrolling centered modal
</button>

<!-- Modal -->
<div class="modal" id="modalCenterScroll">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Modal title</h4>
        <button type="button" class="close" data-cfw-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
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
{% endcapture %}
{% renderHighlight highlight, "html" %}

You can also combine `.modal-dialog-centered` with `.modal-dialog-scrollable` to keep the modal within the viewport height.

<div class="modal" id="modalCenterBody">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Modal title</h4>
        <button type="button" class="close" data-cfw-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      </div>
      <div class="modal-body">
        <h5>Overflowing text to show scroll behavior</h5>
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
        <button type="button" class="btn btn-primary">Save</button>
      </div>
    </div>
  </div>
</div>

<div class="cf-example">
  <button type="button" class="btn btn-primary" data-cfw="modal" data-cfw-modal-target="#modalCenterBody">
    Centered, scrolling modal body
  </button>
</div>

{% capture highlight %}
<!-- Button trigger -->
<button type="button" class="btn btn-primary" data-cfw="modal" data-cfw-modal-target="#modalCenterBody">
  Centered, scrolling modal body
</button>

<!-- Modal -->
<div class="modal" id="modalCenterBody">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Modal title</h4>
        <button type="button" class="close" data-cfw-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
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
{% endcapture %}
{% renderHighlight highlight, "html" %}

### Grid Usage

To take advantage of the grid system within a modal, just nest `.container-fluid` within the `.modal-body` and then use the normal grid system classes within this container.

<div class="modal" id="modalGrid">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Grid in a Modal</h4>
        <button type="button" class="close" data-cfw-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
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
    </div>
  </div>
</div>

<div class="cf-example">
  <button class="btn btn-primary" data-cfw="modal" data-cfw-modal-target="#modalGrid">
    Grid in a Modal
  </button>
</div>

{% capture highlight %}
<div class="modal-body">
  <div class="container-fluid">
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
{% endcapture %}
{% renderHighlight highlight, "html" %}

### Tooltips and Popovers

[Tooltips]({{ site.path }}/{{ version.docs }}/widgets/tooltip/) and [popovers]({{ site.path }}/{{ version.docs }}/widgets/popover/) can be placed within modal as needed.  When modals are closed, any tooltips or popovers within are also automatically dismissed.

<div class="modal" id="modalTips">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Modal title</h4>
        <button type="button" class="close" data-cfw-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      </div>
      <div class="modal-body">
        <h5>Popover in a modal</h5>
        <p>This <a href="#" role="button" class="btn" title="Popover title" data-cfw="popover" data-cfw-popover-content="Popover body content is set in this attribute." data-cfw-popover-placement="forward">button</a> triggers a popover on click.</p>
        <hr>
        <h5>Tooltips in a modal</h5>
        <p><a href="#" title="Tooltip" data-cfw="tooltip">This link</a> and <a href="#" title="Tooltip" data-cfw="tooltip">that link</a> have tooltips on hover.</p>
     </div>
    </div>
  </div>
</div>

<div class="cf-example">
  <button class="btn btn-primary" data-cfw="modal" data-cfw-modal-target="#modalTips">
    Launch demo modal
  </button>
</div>

{% capture highlight %}
<div class="modal-body">
  <h5>Popover in a modal</h5>
  <p>This <a href="#" role="button" class="btn" title="Popover title" data-cfw="popover" data-cfw-popover-content="Popover body content is set in this attribute." data-cfw-popover-placement="forward">button</a> triggers a popover on click.</p>
  <hr>
  <h5>Tooltips in a modal</h5>
  <p><a href="#" title="Tooltip" data-cfw="tooltip">This link</a> and <a href="#" title="Tooltip" data-cfw="tooltip">that link</a> have tooltips on hover.</p>
</div>
{% endcapture %}
{% renderHighlight highlight, "html" %}


### Optional Sizes

Modals have two optional sizes, provided by Figuration's base CSS, available via modifier classes to be placed on a `.modal-dialog`.

<div class="modal" id="modalLg">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Large modal</h4>
        <button type="button" class="close" data-cfw-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      </div>
      <div class="modal-body">
        ...
      </div>
    </div>
  </div>
</div>

<div class="modal" id="modalSm">
  <div class="modal-dialog modal-sm">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Small modal</h4>
        <button type="button" class="close" data-cfw-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      </div>
      <div class="modal-body">
        ...
      </div>
    </div>
  </div>
</div>

<div class="cf-example">
  <button class="btn btn-primary" data-cfw="modal" data-cfw-modal-target="#modalLg">Large modal</button>
  <button class="btn btn-primary" data-cfw="modal" data-cfw-modal-target="#modalSm">Small modal</button>
</div>

{% capture highlight %}
<!-- Large modal -->
<button class="btn btn-primary" data-cfw="modal" data-cfw-modal-target="#modalLg">Large modal</button>

<div class="modal" id="modalLg">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      ...
    </div>
  </div>
</div>

<!-- Small modal -->
<button class="btn btn-primary" data-cfw="modal" data-cfw-modal-target="#modalSm">Small modal</button>

<div class="modal" id="modalSm">
  <div class="modal-dialog modal-sm">
    <div class="modal-content">
      ...
    </div>
  </div>
</div>
{% endcapture %}
{% renderHighlight highlight, "html" %}

### Side Aligned

Position a modal to the side of the page with a `.modal-dialog-side-start` or `.modal-dialog-side-end` modifier class placed on a the `.modal-dialog`. Side aligned modals can be used with `.modal-dialog-scrollable`, and can also use the sizing classes.

<div class="modal" id="modalSideStart">
  <div class="modal-dialog modal-dialog-side-start">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Start side modal</h4>
        <button type="button" class="close" data-cfw-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      </div>
      <div class="modal-body">
        <h5>Overflowing text to show scroll behavior</h5>
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
        <button type="button" class="btn btn-primary">Save</button>
    </div>
    </div>
  </div>
</div>

<div class="modal" id="modalSideEnd">
  <div class="modal-dialog modal-dialog-side-end modal-dialog-scrollable modal-sm">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">End side modal</h4>
        <button type="button" class="close" data-cfw-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      </div>
      <div class="modal-body">
        <h5>Overflowing text to show scroll behavior</h5>
        <p>Using optional width and scrollable body modifiers.</p>
        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn" data-cfw-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save</button>
      </div>
    </div>
  </div>
</div>

<div class="cf-example">
  <button class="btn btn-primary" data-cfw="modal" data-cfw-modal-target="#modalSideStart">Start side modal</button>
  <button class="btn btn-primary" data-cfw="modal" data-cfw-modal-target="#modalSideEnd">End side modal</button>
</div>

{% capture highlight %}
<!-- Large modal -->
<button class="btn btn-primary" data-cfw="modal" data-cfw-modal-target="#modalSideStart">Start side modal</button>

<div class="modal" id="modalSideStart">
  <div class="modal-dialog modal-dialog-side-start">
    <div class="modal-content">
      ...
    </div>
  </div>
</div>

<!-- Small modal -->
<button class="btn btn-primary" data-cfw="modal" data-cfw-modal-target="#modalSideEnd">End side modal</button>

<div class="modal" id="modalSideEnd">
  <div class="modal-dialog modal-dialog-side-end modal-dialog-scrollable modal-sm">
    <div class="modal-content">
      ...
    </div>
  </div>
</div>
{% endcapture %}
{% renderHighlight highlight, "html" %}

### Static Backdrop

When `backdrop` option is set to `static`, the modal will not close when clicking outside it. Click the button below to try it.

<div class="modal" id="modalStaticBackdrop">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Static backdrop modal</h4>
        <button type="button" class="close" data-cfw-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      </div>
      <div class="modal-body">
        <p>I will not close if you click outside me.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn" data-cfw-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save</button>
      </div>
    </div>
  </div>
</div>

<div class="cf-example">
  <button class="btn btn-primary" data-cfw="modal" data-cfw-modal-backdrop="static" data-cfw-modal-target="#modalStaticBackdrop">Static backdrop modal</button>
</div>

{% capture highlight %}
<button class="btn btn-primary" data-cfw="modal" data-cfw-modal-backdrop="static" data-cfw-modal-target="#modalStaticBackdrop">Static backdrop modal</button>

<div class="modal" id="modalStaticBackdrop">
  <div class="modal-dialog modal-dialog-side-end modal-dialog-scrollable modal-sm">
    <div class="modal-content">
      ...
    </div>
  </div>
</div>
{% endcapture %}
{% renderHighlight highlight, "html" %}

### Fullscreen Modal

Enlarge a modal to fill the entire viewport with a `.modal-fullscreen` modifider class placed on the `.modal-dialog`.

<div class="modal" id="modalFullscreen">
  <div class="modal-dialog modal-fullscreen">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Fullscreen modal</h4>
        <button type="button" class="close" data-cfw-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      </div>
      <div class="modal-body">
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
        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn" data-cfw-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

<div class="cf-example">
<button class="btn btn-primary" data-cfw="modal" data-cfw-modal-target="#modalFullscreen">Fullscreen modal</button>
</div>

{% capture highlight %}
<button class="btn btn-primary" data-cfw="modal" data-cfw-modal-target="#modalFullscreen">Fullscreen modal</button>

<div class="modal" id="modalFullscreen">
  <div class="modal-dialog modal-fullscreen">
    <div class="modal-content">
      ...
    </div>
  </div>
</div>
{% endcapture %}
{% renderHighlight highlight, "html" %}

Responsive variants are also available. These work for a given breakpoint and below with the form `.modal-fullscreen-{breakpoint}-down`.

**Heads up!** There is no `.modal-fullscreen-*-down` class created for the largest breakpoint since it is functionally equivalent to using `.modal-fullscreen`.

<div class="modal" id="modalFullscreenXs">
  <div class="modal-dialog modal-fullscreen-xs-down">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Fullscreen modal at `xs`</h4>
        <button type="button" class="close" data-cfw-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn" data-cfw-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

<div class="modal" id="modalFullscreenSm">
  <div class="modal-dialog modal-fullscreen-sm-down">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Fullscreen modal at `sm` and below</h4>
        <button type="button" class="close" data-cfw-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn" data-cfw-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

<div class="modal" id="modalFullscreenMd">
  <div class="modal-dialog modal-fullscreen-md-down">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Fullscreen modal at `md` and below</h4>
        <button type="button" class="close" data-cfw-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn" data-cfw-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

<div class="modal" id="modalFullscreenLg">
  <div class="modal-dialog modal-fullscreen-lg-down">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Fullscreen modal at `lg` and below</h4>
        <button type="button" class="close" data-cfw-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn" data-cfw-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

<div class="cf-example">
<button class="btn btn-primary my-0_25" data-cfw="modal" data-cfw-modal-target="#modalFullscreenXs">Fullscreen `xs` modal</button>
<button class="btn btn-primary my-0_25" data-cfw="modal" data-cfw-modal-target="#modalFullscreenSm">Fullscreen `sm` modal</button>
<button class="btn btn-primary my-0_25" data-cfw="modal" data-cfw-modal-target="#modalFullscreenMd">Fullscreen `md` modal</button>
<button class="btn btn-primary my-0_25" data-cfw="modal" data-cfw-modal-target="#modalFullscreenLg">Fullscreen `lg` modal</button>
</div>

{% capture highlight %}
<!-- Fullscreen modal at `xs` breakpoint -->
<div class="modal-dialog modal-fullscreen-xs-down">
  ...
</div>

<!-- Fullscreen modal at `sm` breakpoint and below -->
<div class="modal-dialog modal-fullscreen-sm-down">
  ...
</div>

<!-- Fullscreen modal at `md` breakpoint and below -->
<div class="modal-dialog modal-fullscreen-md-down">
  ...
</div>

<!-- Fullscreen modal at `lg` breakpoint and below -->
<div class="modal-dialog modal-fullscreen-lg-down">
  ...
</div>
{% endcapture %}
{% renderHighlight highlight, "html" %}

You can also combine fullscreen variants with the centered and scrollable variants.  The fullscreen version of the modal will then assume a similar scrolling behavior to match, but centering will not occur since the modal will be stretched to the size of the viewport.

<div class="modal" id="modalFullMdScroll">
  <div class="modal-dialog modal-fullscreen-md-down modal-dialog-scrollable">
      <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Modal title</h4>
        <button type="button" class="close" data-cfw-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      </div>
      <div class="modal-body">
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
        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn" data-cfw-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

<div class="modal" id="modalFullMdCenter">
  <div class="modal-dialog modal-fullscreen-md-down modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Modal title</h4>
        <button type="button" class="close" data-cfw-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      </div>
      <div class="modal-body">
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
        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn" data-cfw-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
    </div>
    </div>
  </div>
</div>

<div class="modal" id="modalFullMdCenterScroll">
  <div class="modal-dialog modal-fullscreen-md-down modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Modal title</h4>
        <button type="button" class="close" data-cfw-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      </div>
      <div class="modal-body">
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
    </div>
  </div>
</div>

<div class="cf-example">
<button class="btn btn-primary my-0_25" data-cfw="modal" data-cfw-modal-target="#modalFullMdScroll">Fullscreen scrolling body</button>
<button class="btn btn-primary my-0_25" data-cfw="modal" data-cfw-modal-target="#modalFullMdCenter">Fullscreen centered</button>
<button class="btn btn-primary my-0_25" data-cfw="modal" data-cfw-modal-target="#modalFullMdCenterScroll">Fullscreen centered, scrolling body</button>
</div>

{% capture highlight %}
<!-- Fullscreen modals at `md` breakpoint and below -->

<!-- Scrollable body above `md` breakpoint -->
<div class="modal-dialog modal-fullscreen-md-down modal-dialog-scrollable">
  ...
</div>

<!-- Centered above `md` breakpoint -->
<div class="modal-dialog modal-fullscreen-md-down modal-dialog-centered">
  ...
</div>

<!-- Centered and scrollable body above `md` breakpoint -->
<div class="modal-dialog modal-fullscreen-md-down modal-dialog-centered modal-dialog-scrollable">
  ...
</div>

{% endcapture %}
{% renderHighlight highlight, "html" %}

## Usage

The modal widget toggles your hidden content on demand, via data attributes or JavaScript. It also adds `.modal-open` to the `<body>` to override default scrolling behavior and generates a `.modal-backdrop` to provide a click area for dismissing shown modals when clicking outside the modal.

### Via Data Attributes

Activate a modal without writing JavaScript. Set `data-cfw="modal"` on a controller element, like a button, along with a `data-cfw-modal-target="#foo"` or `href="#foo"` to target a specific modal to toggle.

{% capture highlight %}
<button type="button" data-cfw="modal" data-cfw-modal-target="#foo">Launch modal</button>
{% endcapture %}
{% renderHighlight highlight, "html" %}

### Via JavaScript

Call a modal with id `myModal` with a single line of JavaScript:

{% capture highlight %}
$('#myModal').CFW_Modal();
{% endcapture %}
{% renderHighlight highlight, "js" %}

### Close Triggers

Any an element with a data attribute of `data-cfw-dismiss="modal"` within the modal element will act as a close trigger for the modal.  There can be multiple close triggers, such as a header/titlebar close and a cancel button in the footer.

### Alter Animation

In Sass settings, The `$modal-transform-fade` setting determines the transform state of `.modal-dialog` before the modal fade-in animation, the `$modal-transform-in` setting determines the transform of `.modal-dialog` at the end of the modal fade-in animation.

If you want for example a zoom-in animation, you can set `$modal-transform-fade: scale(.75)`.

### Dynamic Heights

If the height of a modal changes while it is open, you will need to call `$('#myModal').CFW_Modal('handleUpdate');` to readjust the modal's position and backdrop.

### With Fixed Position Content

Since the scrollbar is removed from the `<body>` when a modal is shown, there can be some shifting of content in fixed position elements.  To help with this issue, when a modal is shown, any elements using the [fixed positioning utility]({{ site.path }}/{{ version.docs }}/utilities/position/) classes, (`.fixed-top` and `.fixed-bottom`), will have additional padding added to their right side.  This padding width should match the width of the scrollbar that becomes hidden.  When the modal is hidden, the `padding-right` CSS value will be reset.

There is also an additional special classname that the modal widget will look for when adjusting padding values.  Simply add the `.is-fixed` class to your element, and it will automatically be handled.

### Options

Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-cfw-modal-`, as in `data-cfw-modal-animate=false`.

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
        <td>The selector of the target modal.</td>
      </tr>
      <tr>
        <td><code>animate</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>If modal targets should fade and slide in.</td>
      </tr>
      <tr>
        <td><code>unlink</code></td>
        <td>boolean</td>
        <td><code>false</code></td>
        <td>If the <code>unlink</code> method should be called when the modal is hidden.  This leaves the modal behind in the DOM.</td>
      </tr>
      <tr>
        <td><code>dispose</code></td>
        <td>boolean</td>
        <td><code>false</code></td>
        <td>If the <code>dispose</code> method should be called when the modal is hidden. This will remove the modal from the DOM.</td>
      </tr>
      <tr>
        <td><code>backdrop</code></td>
        <td>boolean or the string <code>'static'</code></td>
        <td><code>true</code></td>
        <td>
          <p>Includes a modal-backdrop element. Alternatively, specify <code>'static'</code> for a backdrop which doesn't close the modal on click.</p>
          <p>The backdrop is the semi-opaque overlay used to visually seperate the modal from the page content.</p>
         </td>
      </tr>
      <tr>
        <td><code>keyboard</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>Closes the modal when escape key is pressed.</td>
      </tr>
      <tr>
        <td><code>show</code></td>
        <td>boolean</td>
        <td><code>false</code></td>
        <td>Shows the modal when initialized.</td>
    </tr>
    </tbody>
  </table>
</div>

{% capture highlight %}
$('#myModal').CFW_Modal({
  animate: false
});
{% endcapture %}
{% renderHighlight highlight, "js" %}

### Methods

Method calls can be made on either the trigger or the target `<div class="modal">` element.

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
        <td><code>toggle</code></td>
        <td>Toggles a modal dialog to be shown or hidden.</td>
      </tr>
      <tr>
        <td><code>show</code></td>
        <td>Shows a modal dialog.</td>
      </tr>
      <tr>
        <td><code>hide</code></td>
        <td>Hides a modal dialog.</td>
      </tr>
      <tr>
        <td><code>unlink</code></td>
        <td>Hides the modal, removes events and attributes from both trigger and modal.</td>
      </tr>
      <tr>
        <td><code>dispose</code></td>
        <td>Calls the <code>unlink</code> method, and then removes the modal from the DOM.</td>
      </tr>
    </tbody>
  </table>
</div>

{% capture highlight %}
$('#myModal').CFW_Modal('show');
{% endcapture %}
{% renderHighlight highlight, "js" %}

### Events

Event callbacks happen on the target `<div class="modal">` element.

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
        <td><code>init.cfw.modal</code></td>
        <td>This event fires after the modal item is initialized.</td>
      </tr>
      <tr>
        <td><code>beforeShow.cfw.modal</code></td>
        <td>This event is fired immediately when the <code>show</code> method is called.</td>
      </tr>
      <tr>
        <td><code>scrollbarSet.cfw.modal</code></td>
        <td>This event is fired immediately when the <code>&lt;body&gt;</code> padding is adjusted for the scrollbar width.</td>
      </tr>
      <tr>
        <td><code>afterShow.cfw.modal</code></td>
        <td>This event is fired when a modal dialog has been made visible to the user (will wait for CSS transitions to complete).</td>
      </tr>
      <tr>
        <td><code>scrollbarReset.cfw.modal</code></td>
        <td>This event is fired immediately when the <code>&lt;body&gt;</code> padding adjustment for the scrollbar is removed.</td>
      </tr>
      <tr>
        <td><code>beforeHide.cfw.modal</code></td>
        <td>This event is fired immediately when the <code>hide</code> method is called.</td>
      </tr>
      <tr>
        <td><code>afterHide.cfw.modal</code></td>
        <td>This event is fired when a modal dialog has been hidden from the user (will wait for CSS transitions to complete).</td>
      </tr>
      <tr>
        <td><code>beforeUnlink.cfw.modal</code></td>
        <td>This event is fired immediately when the <code>unlink</code> method is called. This event can occur after the `beforeHide` event if set to automatically unlink, or before if called via method.</td>
      </tr>
      <tr>
        <td><code>afterUnlink.cfw.modal</code></td>
        <td>This event is fired when a modal item has been unlinked from its trigger item and the data-api removed. This event can occur after the <code>afterHide</code> event when invoked from the <code>unlink</code> method, or before if set to automatically unlink.</td>
      </tr>
      <tr>
        <td><code>dispose.cfw.modal</code></td>
        <td>This event is fired immediately before the modal item is removed from the DOM.</td>
      </tr>
    </tbody>
  </table>
</div>

{% capture highlight %}
$('#myModal').on('afterHide.cfw.modal', function() {
  // do something...
});
{% endcapture %}
{% renderHighlight highlight, "js" %}

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
      <li>or <code>$('#myModal').CFW_Modal('dispose');</code></li>
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

{% capture highlight %}
// This needs to be loaded after Figuration's JavaScript
// PLEASE DO NOT DO THIS!!! - Just here for reference
$.fn.CFW_Modal.Constructor.prototype.enforceFocus = function() {};
// SERIOUSLY DO NOT DO THIS!!!
{% endcapture %}
{% renderHighlight highlight, "js" %}

However, we do not advise disabling it completely, but overriding the function to handle the focus conditionally.

{% capture highlight %}
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
{% endcapture %}
{% renderHighlight highlight, "js" %}

## SASS Reference

### Variables

The available [Customization options]({{ site.path }}/{{ version.docs }}/get-started/options/), or Sass variables, that can be customized for the modal component.

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
        <td><code>$enable-modal</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the modal component classes.
          Smaller segements of the modal component classes can be disabled with the following <code>$enable-*</code> variables.
        </td>
      </tr>
      <tr>
        <td><code>$enable-modal-centered</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the vertically centered modal variant.
        </td>
      </tr>
      <tr>
        <td><code>$enable-modal-scrollable</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the scrollable body modal variant.
        </td>
      </tr>
      <tr>
        <td><code>$enable-modal-side-start</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the start side aligned modal variant.
        </td>
      </tr>
      <tr>
        <td><code>$enable-modal-side-end</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the end side aligned modal variant.
        </td>
      </tr>
      <tr>
        <td><code>$enable-modal-fullscreen</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the fullscreen modal variant.
        </td>
      </tr>
      <tr>
        <td><code>$enable-modal-fullscreen-responsive</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the responsive fullscreen modal variants.
        </td>
      </tr>
      <tr>
        <td><code>$enable-modal-header</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the modal header class.
        </td>
      </tr>
      <tr>
        <td><code>$enable-modal-title</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the modal title class.
        </td>
      </tr>
      <tr>
        <td><code>$enable-modal-body</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the modal body class.
        </td>
      </tr>
      <tr>
        <td><code>$enable-modal-footer</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>
          Enable the generation of the modal footer class.
        </td>
      </tr>
      <tr>
        <td><code>$modal-dialog-margin</code></td>
        <td>string</td>
        <td><code>.625rem</code></td>
        <td>
          Spacing around modal dialog.
        </td>
      </tr>
      <tr>
        <td><code>$modal-dialog-bp-up-margin-y</code></td>
        <td>string</td>
        <td><code>.625rem</code></td>
        <td>
          Vertical spacing for modal dialog starting at the breakpoint defined by <code>$modal-breakpoint</code>.
        </td>
      </tr>
      <tr>
        <td><code>$modal-content-bg</code></td>
        <td>string</td>
        <td><code>$component-bg</code></td>
        <td>
          Background color for modal content container.
        </td>
      </tr>
      <tr>
        <td><code>$modal-content-border-color</code></td>
        <td>string</td>
        <td><code>$component-overlay-border-color</code></td>
        <td>
          Border color for modal content container.
        </td>
      </tr>
      <tr>
        <td><code>$modal-content-border-width</code></td>
        <td>string</td>
        <td><code>$border-width</code></td>
        <td>
          Border width for modal content container.
        </td>
      </tr>
      <tr>
        <td><code>$modal-content-box-shadow</code></td>
        <td>string</td>
        <td><code>map-get($shadows, "d3")</code></td>
        <td>
          Box shadow for modal content container.
        </td>
      </tr>
      <tr>
        <td><code>$modal-content-bp-up-box-shadow</code></td>
        <td>string</td>
        <td><code>map-get($shadows, "d4")</code></td>
        <td>
          Box shadow for modal content container at the breakpoint defined by <code>$modal-breakpoint</code>.
        </td>
      </tr>
      <tr>
        <td><code>$modal-border-radius</code></td>
        <td>string</td>
        <td><code>.375rem</code></td>
        <td>
          Border radius for modal content container.
        </td>
      </tr>
      <tr>
        <td><code>$modal-inner-border-radius</code></td>
        <td>string</td>
        <td><code>calc(#{$modal-border-radius} - #{$modal-content-border-width})</code></td>
        <td>
          Border radius for modal header and footer.
        </td>
      </tr>
      <tr>
        <td><code>$modal-backdrop-bg</code></td>
        <td>string</td>
        <td><code>$dark</code></td>
        <td>
          Background color for modal backdrop.
        </td>
      </tr>
      <tr>
        <td><code>$modal-backdrop-opacity</code></td>
        <td>string</td>
        <td><code>.5</code></td>
        <td>
          Opacity for modal backdrop.
        </td>
      </tr>
      <tr>
        <td><code>$modal-header-padding-y</code></td>
        <td>string</td>
        <td><code>.75rem</code></td>
        <td>
          Vertical padding for modal header.
        </td>
      </tr>
      <tr>
        <td><code>$modal-header-padding-x</code></td>
        <td>string</td>
        <td><code>1rem</code></td>
        <td>
          Horizontal padding for modal header.
        </td>
      </tr>
      <tr>
        <td><code>$modal-header-color</code></td>
        <td>string</td>
        <td><code>null</code></td>
        <td>
          Text color for modal header.
        </td>
      </tr>
      <tr>
        <td><code>$modal-header-background-color</code></td>
        <td>string</td>
        <td><code>null</code></td>
        <td>
          Background color for modal header.
        </td>
      </tr>
      <tr>
        <td><code>$modal-header-border-color</code></td>
        <td>string</td>
        <td><code>rgba($uibase-900, .2)</code></td>
        <td>
          Border color for modal header.
        </td>
      </tr>
      <tr>
        <td><code>$modal-header-border-width</code></td>
        <td>string</td>
        <td><code>$modal-content-border-width</code></td>
        <td>
          Border width for modal header.
        </td>
      </tr>
      <tr>
        <td><code>$modal-title-line-height</code></td>
        <td>string</td>
        <td><code>$line-height-base</code></td>
        <td>
          Line height for modal header.
        </td>
      </tr>
      <tr>
        <td><code>$modal-close-padding-y</code></td>
        <td>string</td>
        <td><code>.75rem</code></td>
        <td>
          Vertical padding for close button in modal header.
        </td>
      </tr>
      <tr>
        <td><code>$modal-close-padding-x</code></td>
        <td>string</td>
        <td><code>.75rem</code></td>
        <td>
          Horizontal padding for close button in modal header.
        </td>
      </tr>
      <tr>
        <td><code>$modal-body-padding-y</code></td>
        <td>string</td>
        <td><code>.75rem</code></td>
        <td>
          Vertical padding for modal body.
        </td>
      </tr>
      <tr>
        <td><code>$modal-body-padding-x</code></td>
        <td>string</td>
        <td><code>1rem</code></td>
        <td>
          Horizontal padding for modal body.
        </td>
      </tr>
      <tr>
        <td><code>$modal-footer-padding-y</code></td>
        <td>string</td>
        <td><code>.75rem</code></td>
        <td>
          Vertical padding for modal footer.
        </td>
      </tr>
      <tr>
        <td><code>$modal-footer-padding-x</code></td>
        <td>string</td>
        <td><code>1rem</code></td>
        <td>
          Horizontal padding for modal footer.
        </td>
      </tr>
      <tr>
        <td><code>$modal-footer-color</code></td>
        <td>string</td>
        <td><code>null</code></td>
        <td>
          Text color for modal footer.
        </td>
      </tr>
      <tr>
        <td><code>$modal-footer-background-color</code></td>
        <td>string</td>
        <td><code>null</code></td>
        <td>
          Background color for modal footer.
        </td>
      </tr>
      <tr>
        <td><code>$modal-footer-border-color</code></td>
        <td>string</td>
        <td><code>$modal-header-border-color</code></td>
        <td>
          Border color for modal footer.
        </td>
      </tr>
      <tr>
        <td><code>$modal-footer-border-width</code></td>
        <td>string</td>
        <td><code>$modal-header-border-width</code></td>
        <td>
          Border width for modal footer.
        </td>
      </tr>
      <tr>
        <td><code>$modal-sm</code></td>
        <td>string</td>
        <td><code>rem(304px)</code> (19rem)</td>
        <td>
          Max width for small modal dialog variant.
        </td>
      </tr>
      <tr>
        <td><code>$modal-md</code></td>
        <td>string</td>
        <td><code>rem(528px)</code> (33rem)</td>
        <td>
          Max width for modal dialog starting at the breakpoint defined by <code>$modal-breakpoint</code>.
        </td>
      </tr>
      <tr>
        <td><code>$modal-lg</code></td>
        <td>string</td>
        <td><code>rem(896px)</code> (56rem)</td>
        <td>
          Max width for large modal dialog variant.
        </td>
      </tr>
      <tr>
        <td><code>$modal-breakpoint</code></td>
        <td>string</td>
        <td><code>sm</code></td>
        <td>
          When to start scaling up modal width and margins.
        </td>
      </tr>
      <tr>
        <td><code>$modal-lg-breakpoint</code></td>
        <td>string</td>
        <td><code>lg</code></td>
        <td>
          The minimum breakpoint to allow <code>.modal-lg</code>.
        </td>
      </tr>
      <tr>
        <td><code>$modal-transform-fade</code></td>
        <td>string</td>
        <td><code>translate(0, -3rem)</code></td>
        <td>
          Transform state of <code>.modal-dialog</code> before the modal fade-in animation
        </td>
      </tr>
      <tr>
        <td><code>$modal-transform-in</code></td>
        <td>string</td>
        <td><code>none</code></td>
        <td>
          Transform state of <code>.modal-dialog</code> at the end of the modal fade-in animation.
        </td>
      </tr>
      <tr>
        <td><code>$modal-transform-side-offset</code></td>
        <td>string</td>
        <td><code>-5rem</code></td>
        <td>
          Transform state offset of <code>.modal-dialog</code> before the modal fade-in animation for side variant modals.
        </td>
      </tr>
      <tr>
        <td><code>$modal-transform-blocked</code></td>
        <td>string</td>
        <td><code>scale(1.01)</code></td>
        <td>
          Transform state of <code>.modal-dialog</code> for when the close is blocked animation.
        </td>
      </tr>
      <tr>
        <td><code>$modal-transform-fullscreen</code></td>
        <td>string</td>
        <td><code>none</code></td>
        <td>
          Transform state of <code>.modal-dialog</code> for the slide animation when the modal in fullscreen mode.
        </td>
      </tr>
      <tr>
        <td><code>$modal-transition</code></td>
        <td>string</td>
        <td><code>transform .15s linear</code></td>
        <td>
          Transition settings for the <code>.modal-dialog</code> animations.
        </td>
      </tr>
      <tr>
        <td><code>$modal-fullscreen-breakpoints</code></td>
        <td>list</td>
        <td><code>map-keys($grid-breakpoints)</code></td>
        <td>
          Breakpoint list for responsive fullscreen modals.
        </td>
      </tr>
    </tbody>
  </table>
</div>

### Mixins

#### modal-fullscreen()

Enable fullscreen mode on a `.modal-dialog`.

{% capture highlight %}
@include modal-fullscreen();
{% endcapture %}
{% renderHighlight highlight, "sass" %}
