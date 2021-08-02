Dismissal can be achieved with `data` attributes on a button **within the {{ name }}** as demonstrated below:

{% capture highlight %}
<button type="button" class="close" data-cfw-dismiss="{{ name }}" aria-label="Close"><span aria-hidden="true">&times;</span></button>
{% endcapture %}
{% renderHighlight highlight, "html" %}

or on a button **outside the {{ name }}** using the `data-cfw-{{ name }}-target` as demonstrated below:

{% capture highlight %}
<button type="button" class="close" data-cfw-dismiss="{{ name }}" data-cfw-{{ name }}-target="#my{{ name | capitalize }}">Close {{ name }}</button>
{% endcapture %}
{% renderHighlight highlight, "html" %}