---
layout: doc
title: Tab
subtitle: tab.js
description: Add quick, dynamic tab functionality to transition through panes of content.
group: widgets
toc: true
---

## Notices

{% capture callout %}
Incompatible Widgets
{.h5}

For accessibility reasons, do not mix use of the [Tab widget]({{ site.path }}/{{ version.docs }}/widgets/tab/) and [Dropdown widget]({{ site.path }}/{{ version.docs }}/widgets/dropdown/) in the same nav item.  This will cause navigation and usability issues.  One or the other, but not both.
{% endcapture %}
{% renderCallout, callout, "warning" %}

As a best practice, we recommend using `<button>` elements for the tabs, as these are controls that trigger a dynamic change, rather than links that navigate to a new page or location.

However, if you choose to use the historical method using anchors, be sure to abide by the recommendations for disabled links.

{%- assign calloutAnchors = version.docs | valueIfEmpty: site.version.docs | prepend: "./" | append: "/partials/callout-warning-disabling-anchors.md" -%}
{% include calloutAnchors %}

## Examples

The tab widget can be used with the following semantic structures: `ul`, `ol`, and `nav`. In order to support more use-cases, the following classes will also allowed for tabs when used on the wrapping container: `.nav`, `.list`, and `.btn-group`. For even more flexibility, the custom class `.is-tablist` is also available.

### Tabs

The tab widget works with [tab]({{ site.path }}/{{ version.docs }}/components/navs/#tabs) style navigation.

<div class="cf-example">
  <ul class="nav nav-tabs">
    <li class="nav-item"><button type="button" class="nav-link" data-cfw="tab" data-cfw-tab-target="#tab1">Tab 1</button></li>
    <li class="nav-item"><button type="button" class="nav-link active" data-cfw="tab" data-cfw-tab-target="#tab2">Tab 2</button></li>
    <li class="nav-item"><button type="button" class="nav-link" data-cfw="tab" data-cfw-tab-target="#tab3">Tab 3</button></li>
    <li class="nav-item"><button type="button" class="nav-link" data-cfw="tab" data-cfw-tab-target="#tab4" disabled>Tab 4</button></li>
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

{% capture highlight %}
<ul class="nav nav-tabs">
  <li class="nav-item"><button type="button" class="nav-link" data-cfw="tab" data-cfw-tab-target="#tab1">Tab 1</button></li>
  <li class="nav-item"><button type="button" class="nav-link active" data-cfw="tab" data-cfw-tab-target="#tab2">Tab 2</button></li>
  <li class="nav-item"><button type="button" class="nav-link" data-cfw="tab" data-cfw-tab-target="#tab3">Tab 3</button></li>
  <li class="nav-item"><button type="button" class="nav-link" data-cfw="tab" data-cfw-tab-target="#tab4" disabled>Tab 4</button></li>
</ul>
<div class="tab-content">
  <div class="tab-pane" id="tab1">...</div>
  <div class="tab-pane" id="tab2">...</div>
  <div class="tab-pane" id="tab3">...</div>
  <div class="tab-pane" id="tab4">...</div>
</div>
{% endcapture %}
{% renderHighlight highlight, "html" %}

### Pills

The tab widget also works with [pill]({{ site.path }}/{{ version.docs }}/components/navs/#pills) style navigation.

<div class="cf-example">
  <ul class="nav nav-pills">
    <li class="nav-item"><button type="button" class="nav-link" data-cfw="tab" data-cfw-tab-target="#pill1">Pill 1</button></li>
    <li class="nav-item"><button type="button" class="nav-link active" data-cfw="tab" data-cfw-tab-target="#pill2">Pill 2</button></li>
    <li class="nav-item"><button type="button" class="nav-link" data-cfw="tab" data-cfw-tab-target="#pill3">Pill 3</button></li>
    <li class="nav-item"><button type="button" class="nav-link" data-cfw="tab" data-cfw-tab-target="#pill4" disabled>Pill 4</button></li>
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

{% capture highlight %}
<ul class="nav nav-pills">
  <li class="nav-item"><button type="button" class="nav-link" data-cfw="tab" data-cfw-tab-target="#pill1">Pill 1</button></li>
  <li class="nav-item"><button type="button" class="nav-link active" data-cfw="tab" data-cfw-tab-target="#pill2">Pill 2</button></li>
  <li class="nav-item"><button type="button" class="nav-link" data-cfw="tab" data-cfw-tab-target="#pill3">Pill 3</button></li>
  <li class="nav-item"><button type="button" class="nav-link" data-cfw="tab" data-cfw-tab-target="#pill4" disabled>Pill 4</button></li>
</ul>
<div class="tab-content">
  <div class="tab-pane" id="pill1">...</div>
  <div class="tab-pane" id="pill2">...</div>
  <div class="tab-pane" id="pill3">...</div>
  <div class="tab-pane" id="pill4">...</div>
</div>
{% endcapture %}
{% renderHighlight highlight, "html" %}

And with vertical pills.

<div class="cf-example">
  <div class="d-flex align-items-start">
    <ul class="nav nav-pills flex-column me-1">
      <li class="nav-item"><button type="button" class="nav-link text-nowrap" data-cfw="tab" data-cfw-tab-target="#pillV1">Vertical Pill 1</button></li>
      <li class="nav-item"><button type="button" class="nav-link text-nowrap active" data-cfw="tab" data-cfw-tab-target="#pillV2">Vertical Pill 2</button></li>
      <li class="nav-item"><button type="button" class="nav-link text-nowrap" data-cfw="tab" data-cfw-tab-target="#pillV3">Vertical Pill 3</button></li>
      <li class="nav-item"><button type="button" class="nav-link text-nowrap" data-cfw="tab" data-cfw-tab-target="#pillV4" disabled>Vertical Pill 4</button></li>
    </ul>
    <div class="tab-content">
      <div class="tab-pane" id="pillV1">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pulvinar ligula ac sapien auctor viverra. Aliquam elit tortor, consequat at ultrices sit amet, vehicula eu leo. In fermentum lacus purus, ac dictum orci placerat ut. Integer magna lacus, adipiscing sed justo ut, sollicitudin rhoncus libero. Pellentesque accumsan pretium sem eu euismod? Nunc id facilisis sem? Quisque quis laoreet mi.</p>
      </div>
      <div class="tab-pane" id="pillV2">
        <p>Phasellus at nisl et arcu tincidunt sagittis et nec nunc. Fusce ultrices venenatis felis, in faucibus mauris egestas nec. Etiam malesuada dictum nisi, at pulvinar orci. Aenean venenatis metus in pharetra aliquam. Mauris ac odio tortor! Maecenas eget orci in ipsum ullamcorper malesuada. Nunc interdum lobortis velit sed accumsan.</p>
      </div>
      <div class="tab-pane" id="pillV3">
        <p> Praesent laoreet augue sed mauris vulputate, ut commodo justo malesuada. Pellentesque adipiscing; lorem vel convallis dignissim, leo est condimentum sapien, nec viverra dui risus at metus! Phasellus tellus magna, hendrerit eget tempor quis, fringilla id sem.</p>
      </div>
      <div class="tab-pane" id="pillV4">
        <p>Duis pharetra suscipit felis, id congue purus tempus sed. Nunc porttitor nec arcu at interdum. Nulla placerat odio luctus malesuada dapibus. Suspendisse et auctor metus. Suspendisse fringilla commodo cursus. Suspendisse sodales vitae enim ut commodo. Nunc ut nibh quis tellus varius fermentum at et nibh. Nulla nisl leo, hendrerit ut rutrum faucibus, ullamcorper ut lectus. Donec tristique justo justo, nec imperdiet leo porttitor non. Donec vehicula purus dapibus hendrerit ornare.</p>
      </div>
    </div>
  </div>
</div>

{% capture highlight %}
<div class="d-flex align-items-start">
  <ul class="nav nav-pills me-1">
    <li class="nav-item"><button type="button" class="nav-link" data-cfw="tab" data-cfw-tab-target="#pillV1">Vertical Pill 1</button></li>
    <li class="nav-item"><button type="button" class="nav-link active" data-cfw="tab" data-cfw-tab-target="#pillV2">Vertical Pill 2</button></li>
    <li class="nav-item"><button type="button" class="nav-link" data-cfw="tab" data-cfw-tab-target="#pillV3">Vertical Pill 3</button></li>
    <li class="nav-item"><button type="button" class="nav-link" data-cfw="tab" data-cfw-tab-target="#pillV4" disabled>Vertical Pill 4</button></li>
  </ul>
  <div class="tab-content">
    <div class="tab-pane" id="pillV1">...</div>
    <div class="tab-pane" id="pillV2">...</div>
    <div class="tab-pane" id="pillV3">...</div>
    <div class="tab-pane" id="pillV4">...</div>
  </div>
</div>
{% endcapture %}
{% renderHighlight highlight, "html" %}

### List

The tab widget even works with the [`.list` component]({{ site.path }}/{{ version.docs }}/components/lists/).

<div class="cf-example">
  <div class="row">
    <div class="col-md-4">
      <nav>
        <div class="list list-spaced list-ruled">
          <button type="button" class="list-item list-item-action" data-cfw="tab" data-cfw-tab-target="#list1">List Item 1</button>
          <button type="button" class="list-item list-item-action active" data-cfw="tab" data-cfw-tab-target="#list2">List Item 2</button>
          <button type="button" class="list-item list-item-action" data-cfw="tab" data-cfw-tab-target="#list3">List Item 3</button>
          <button type="button" class="list-item list-item-action" data-cfw="tab" data-cfw-tab-target="#list4" disabled>List Item 4</button>
        </div>
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

{% capture highlight %}
<div class="row">
  <div class="col-md-4">
    <nav>
      <div class="list list-spaced list-ruled">
        <button type="button" class="list-item list-item-action" data-cfw="tab" data-cfw-tab-target="#list1">List Item 1</button>
        <button type="button" class="list-item list-item-action active" data-cfw="tab" data-cfw-tab-target="#list2">List Item 2</button>
        <button type="button" class="list-item list-item-action" data-cfw="tab" data-cfw-tab-target="#list3">List Item 3</button>
        <button type="button" class="list-item list-item-action" data-cfw="tab" data-cfw-tab-target="#list4" disabled>List Item 4</button>
      </div>
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
{% endcapture %}
{% renderHighlight highlight, "html" %}

### Button Group

Control tab panels using a [button group]({{ site.path }}/{{ version.docs }}/components/button-group/).

<div class="cf-example">
  <div class="btn-group mb-0_5">
    <button type="button" class="btn" data-cfw="tab" data-cfw-tab-target="#btngroup1">Button 1</button>
    <button type="button" class="btn active" data-cfw="tab" data-cfw-tab-target="#btngroup2">Button 2</button>
    <button type="button" class="btn" data-cfw="tab" data-cfw-tab-target="#btngroup3" disabled>Button 3</button>
    <button type="button" class="btn" data-cfw="tab" data-cfw-tab-target="#btngroup4">Button 4</button>
  </div>
  <div class="tab-content">
    <div class="tab-pane" id="btngroup1">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pulvinar ligula ac sapien auctor viverra. Aliquam elit tortor, consequat at ultrices sit amet, vehicula eu leo. In fermentum lacus purus, ac dictum orci placerat ut. Integer magna lacus, adipiscing sed justo ut, sollicitudin rhoncus libero. Pellentesque accumsan pretium sem eu euismod? Nunc id facilisis sem? Quisque quis laoreet mi.</p>
    </div>
    <div class="tab-pane" id="btngroup2">
      <p>Phasellus at nisl et arcu tincidunt sagittis et nec nunc. Fusce ultrices venenatis felis, in faucibus mauris egestas nec. Etiam malesuada dictum nisi, at pulvinar orci. Aenean venenatis metus in pharetra aliquam. Mauris ac odio tortor! Maecenas eget orci in ipsum ullamcorper malesuada. Nunc interdum lobortis velit sed accumsan.</p>
    </div>
    <div class="tab-pane" id="btngroup3">
      <p> Praesent laoreet augue sed mauris vulputate, ut commodo justo malesuada. Pellentesque adipiscing; lorem vel convallis dignissim, leo est condimentum sapien, nec viverra dui risus at metus! Phasellus tellus magna, hendrerit eget tempor quis, fringilla id sem.</p>
    </div>
    <div class="tab-pane" id="btngroup4">
      <p>Duis pharetra suscipit felis, id congue purus tempus sed. Nunc porttitor nec arcu at interdum. Nulla placerat odio luctus malesuada dapibus. Suspendisse et auctor metus. Suspendisse fringilla commodo cursus. Suspendisse sodales vitae enim ut commodo. Nunc ut nibh quis tellus varius fermentum at et nibh. Nulla nisl leo, hendrerit ut rutrum faucibus, ullamcorper ut lectus. Donec tristique justo justo, nec imperdiet leo porttitor non. Donec vehicula purus dapibus hendrerit ornare.</p>
    </div>
  </div>
</div>

{% capture highlight %}
<div class="btn-group mb-0_5">
  <button type="button" class="btn" data-cfw="tab" data-cfw-tab-target="#btngroup1">Button 1</button>
  <button type="button" class="btn active" data-cfw="tab" data-cfw-tab-target="#btngroup2">Button 2</button>
  <button type="button" class="btn" data-cfw="tab" data-cfw-tab-target="#btngroup3" disabled>Button 3</button>
  <button type="button" class="btn" data-cfw="tab" data-cfw-tab-target="#btngroup4">Button 4</button>
</div>
<div class="tab-content">
  <div class="tab-pane" id="btngroup1">...</div>
  <div class="tab-pane" id="btngroup2">...</div>
  <div class="tab-pane" id="btngroup3">...</div>
  <div class="tab-pane" id="btngroup4">...</div>
</div>
{% endcapture %}
{% renderHighlight highlight, "html" %}

### Customized

Here is a tab example using a customized layout, an `.is-tablist` wrapping container, and some Font Awesome icons.

<div class="cf-example">
  <div class="position-relative">
    <div class="is-tablist position-absolute top-0 start-50 translate-middle-x">
      <button type="button" class="btn btn-link fs-2xlarge p-0" data-cfw="tab" data-cfw-tab-target="#custom1">
        <span class="fas fa-fw fa-dice-one" aria-hidden="true"></span>
        <span class="sr-only">Tab 1</span>
      </button>
      <button type="button" class="btn btn-link fs-2xlarge p-0" data-cfw="tab" data-cfw-tab-target="#custom2">
        <span class="fas fa-fw fa-dice-two" aria-hidden="true"></span>
        <span class="sr-only">Tab 2</span>
      </button>
      <button type="button" class="btn btn-link fs-2xlarge p-0" data-cfw="tab" data-cfw-tab-target="#custom3">
        <span class="fas fa-fw fa-dice-three" aria-hidden="true"></span>
        <span class="sr-only">Tab 3</span>
      </button>
    </div>
    <div class="tab-content pt-2 px-2">
      <div class="tab-pane" id="custom1">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pulvinar ligula ac sapien auctor viverra. Aliquam elit tortor, consequat at ultrices sit amet, vehicula eu leo. In fermentum lacus purus, ac dictum orci placerat ut. Integer magna lacus, adipiscing sed justo ut, sollicitudin rhoncus libero. Pellentesque accumsan pretium sem eu euismod? Nunc id facilisis sem? Quisque quis laoreet mi.</p>
      </div>
      <div class="tab-pane" id="custom2">
        <p>Phasellus at nisl et arcu tincidunt sagittis et nec nunc. Fusce ultrices venenatis felis, in faucibus mauris egestas nec. Etiam malesuada dictum nisi, at pulvinar orci. Aenean venenatis metus in pharetra aliquam. Mauris ac odio tortor! Maecenas eget orci in ipsum ullamcorper malesuada. Nunc interdum lobortis velit sed accumsan.</p>
      </div>
      <div class="tab-pane" id="custom3">
        <p> Praesent laoreet augue sed mauris vulputate, ut commodo justo malesuada. Pellentesque adipiscing; lorem vel convallis dignissim, leo est condimentum sapien, nec viverra dui risus at metus! Phasellus tellus magna, hendrerit eget tempor quis, fringilla id sem.</p>
      </div>
    </div>
  </div>
</div>

### Anchors

For reference, this is a 'historical' example, using anchors, as shown in earlier iterations of Figuration. As previously mentioned, we recommend using `<button>` elements for the tabs, as seen in the examples above. Regardless, this alternative may be helpful for some situations.

<div class="cf-example">
  <ul class="nav nav-tabs">
    <li class="nav-item"><a href="#tabOld1" class="nav-link" data-cfw="tab">Tab 1</a></li>
    <li class="nav-item"><a href="#tabOld2" class="nav-link active" data-cfw="tab">Tab 2</a></li>
    <li class="nav-item"><a href="#tabOld3" class="nav-link" data-cfw="tab">Tab 3</a></li>
    <li class="nav-item"><a href="#tabOld4" class="nav-link disabled" data-cfw="tab" tabindex="-1" aria-disabled="true">Tab 4</a></li>
  </ul>
  <div class="tab-content">
    <div class="tab-pane" id="tabOld1">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pulvinar ligula ac sapien auctor viverra. Aliquam elit tortor, consequat at ultrices sit amet, vehicula eu leo. In fermentum lacus purus, ac dictum orci placerat ut. Integer magna lacus, adipiscing sed justo ut, sollicitudin rhoncus libero. Pellentesque accumsan pretium sem eu euismod? Nunc id facilisis sem? Quisque quis laoreet mi.</p>
    </div>
    <div class="tab-pane" id="tabOld2">
      <p>Phasellus at nisl et arcu tincidunt sagittis et nec nunc. Fusce ultrices venenatis felis, in faucibus mauris egestas nec. Etiam malesuada dictum nisi, at pulvinar orci. Aenean venenatis metus in pharetra aliquam. Mauris ac odio tortor! Maecenas eget orci in ipsum ullamcorper malesuada. Nunc interdum lobortis velit sed accumsan.</p>
    </div>
    <div class="tab-pane" id="tabOld3">
      <p> Praesent laoreet augue sed mauris vulputate, ut commodo justo malesuada. Pellentesque adipiscing; lorem vel convallis dignissim, leo est condimentum sapien, nec viverra dui risus at metus! Phasellus tellus magna, hendrerit eget tempor quis, fringilla id sem.</p>
    </div>
    <div class="tab-pane" id="tabOld4">
      <p>Duis pharetra suscipit felis, id congue purus tempus sed. Nunc porttitor nec arcu at interdum. Nulla placerat odio luctus malesuada dapibus. Suspendisse et auctor metus. Suspendisse fringilla commodo cursus. Suspendisse sodales vitae enim ut commodo. Nunc ut nibh quis tellus varius fermentum at et nibh. Nulla nisl leo, hendrerit ut rutrum faucibus, ullamcorper ut lectus. Donec tristique justo justo, nec imperdiet leo porttitor non. Donec vehicula purus dapibus hendrerit ornare.</p>
    </div>
  </div>
</div>

{% capture highlight %}
<ul class="nav nav-tabs">
  <li class="nav-item"><a href="#tabOld1" class="nav-link" data-cfw="tab">Tab 1</a></li>
  <li class="nav-item"><a href="#tabOld2" class="nav-link active" data-cfw="tab">Tab 2</a></li>
  <li class="nav-item"><a href="#tabOld3" class="nav-link" data-cfw="tab">Tab 3</a></li>
  <li class="nav-item"><a href="#tabOld4" class="nav-link disabled" data-cfw="tab" tabindex="-1" aria-disabled="true">Tab 4</a></li>
</ul>
<div class="tab-content">
  <div class="tab-pane" id="tabOld1">...</div>
  <div class="tab-pane" id="tabOld2">...</div>
  <div class="tab-pane" id="tabOld3">...</div>
  <div class="tab-pane" id="tabOld4">...</div>
</div>
{% endcapture %}
{% renderHighlight highlight, "html" %}

## Usage

Tabs need to be activated individually, and require the use of a `ul`, `ol`, or `nav` as an ancestor item of all tab triggers, especially if they are to be grouped together.

### Via Data Attributes

Add `data-cfw="tab"` to each tab element. The target tab pane can be specified either by the data attribue `data-cfw-tab-target="#tabPane0"` or from the `<a href="#tabPane0">`, where the target pane has an `id="tabPane0"`.

To set a default active tab, add the class `.active` to the trigger item.

{% capture highlight %}
<!-- Nav tabs -->
<ul class="nav nav-tabs">
  <li class="nav-item"><a href="#home" class="nav-link active" data-cfw="tab">Home</a></li>
  <li class="nav-item"><a href="#profile" class="nav-link" data-cfw="tab">Profile</a></li>
  <li class="nav-item"><button type="button" class="nav-link" data-cfw="tab" data-cfw-tab-target="#messages">Messages</button></li>
  <li class="nav-item"><button type="button" class="nav-link" data-cfw="tab" data-cfw-tab-target="#settings">Settings</button></li>
</ul>

<!-- Tab panes -->
<div class="tab-content">
  <div class="tab-pane" id="home">...</div>
  <div class="tab-pane" id="profile">...</div>
  <div class="tab-pane" id="messages">...</div>
  <div class="tab-pane" id="settings">...</div>
</div>
{% endcapture %}
{% renderHighlight highlight, "html" %}

### Via JavaScript

You can activate individual tabs in several ways:

{% capture highlight %}
$('#myTab a[href="#profile"]').CFW_Tab('show');  // Select tab by href
$('#myTab button:first').CFW_Tab('show');        // Select first tab
$('#myTab button:last').CFW_Tab('show');         // Select last tab
$('#myTab button:nth-child(3)').CFW_Tab('show'); // Select third tab
{% endcapture %}
{% renderHighlight highlight, "js" %}

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
        <td><code>animate</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>If the tab pane target should fade in and out.</td>
      </tr>
    </tbody>
  </table>
</div>

{% capture highlight %}
$('#myTab a').CFW_Tab({
  animate: false
});
{% endcapture %}
{% renderHighlight highlight, "js" %}

### Methods

Methods calls should be made on the toggle/trigger element.

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
        <td><code>show</code></td>
        <td>Shows the <code>tab-pane</code> for a given tab, and hides all sibling <code>tab-pane</code> items.</td>
      </tr>
      <tr>
        <td><code>dispose</code></td>
        <td>Will disable the listen events for the given tab, but leave it otherwise unchanged.</td>
      </tr>
    </tbody>
  </table>
</div>

{% capture highlight %}
$('#myTab a').CFW_Tab('show');
{% endcapture %}
{% renderHighlight highlight, "js" %}

### Events
Event callbacks happen on the toggle/trigger element.

When showing a new tab, the events fire in the following order:

- `beforeHide.cfw.tab` (on the current active tab)
- `beforeShow.cfw.tab` (on the to-be-shown tab)
- `afterHide.cfw.tab` (on the previous active tab, the same one as for the `beforeHide.cfw.tab` event)
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
        <td><code>init.cfw.tab</code></td>
        <td>This event fires after the tab item is initialized.</td>
      </tr>
      <tr>
        <td><code>beforeShow.cfw.tab</code></td>
        <td>This event fires on tab show, but before the new tab has been shown. Use <code>event.target</code> and <code>event.relatedTarget</code> to target the active tab and the previous active tab (if available) respectively.</td>
      </tr>
      <tr>
        <td><code>afterShow.cfw.tab</code></td>
        <td>This event fires on tab show after a tab has been shown. Use <code>event.target</code> and <code>event.relatedTarget</code> to target the active tab and the previous active tab (if available) respectively.</td>
      </tr>
      <tr>
        <td><code>beforeHide.cfw.tab</code></td>
        <td>This event fires when a new tab is to be shown (and thus the previous active tab is to be hidden). Use <code>event.target</code> and <code>event.relatedTarget</code> to target the current active tab and the new soon-to-be-active tab, respectively.</td>
      </tr>
      <tr>
        <td><code>afterHide.cfw.tab</code></td>
        <td>This event fires after a new tab is shown (and thus the previous active tab is hidden). Use <code>event.target</code> and <code>event.relatedTarget</code> to target the previous active tab and the new active tab, respectively.</td>
      </tr>
    </tbody>
  </table>
</div>

{% capture highlight %}
$('a[data-cfw="tab"]').on('afterShow.cfw.tab', function(event) {
  event.target // newly activated tab
  event.relatedTarget // previous active tab
});
{% endcapture %}
{% renderHighlight highlight, "js" %}

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
    <kbd title="right arrow"><span class="fas fa-arrow-right" aria-hidden="true"></span></kbd> /
    <kbd title="down arrow"><span class="fas fa-arrow-down" aria-hidden="true"></span></kbd>
  </dt>
  <dd>
    Moves focus to the next tab and activates it, displaying the related tabpanel content.
  </dd>
  <dt>
    <kbd title="left arrow"><span class="fas fa-arrow-left" aria-hidden="true"></span></kbd> /
    <kbd title="up arrow"><span class="fas fa-arrow-up" aria-hidden="true"></span></kbd>
  </dt>
  <dd>
    Moves focus to the previous tab and activates it, displaying the related tabpanel content.
  </dd>
</dl>

### ARIA and Role Attributes

Dynamic tabbed interfaces, as described in the [<abbr title="Web Accessibility Initiative">WAI</abbr> <abbr title="Accessible Rich Internet Applications">ARIA</abbr> Authoring Practices](https://www.w3.org/TR/wai-aria-practices/#tabpanel), require `role="tablist"`, `role="tab"`, `role="tabpanel"`, and additional `aria-` attributes in order to convey their structure, functionality and current state to users of assistive technologies (such as screen readers).

All of these requirements are automatically added by the Tab widget, and will update automatically as the user interacts with the tabbed interface.

The `aria-current` attribute is not necessary on dynamic tabbed interfaces since our JavaScript handles the selected state by adding `aria-selected="true"` on the active tab.

### Using a Nav Element

If you are using `<nav>`, the `role="tablist"` will not be automatically added to it, as this would override the `<nav>`'s native role as a navigation landmark. Instead, switch to an alternative element (such as `<div>`) and wrap the `<nav>` around that.  Refer to the [tab widget using a list example](#list) for a better look.
