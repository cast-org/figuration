---
layout: doc
title: Team
description: An overview of who the core contributors are for Figuration.
group: about
toc: false
search: false
---

Figuration is maintained by a small team. Hopefully soon we can generate support and involvement from the community.

<div class="list list-spaced list-ruled">
{% for member in team %}
<a class="list-item list-item-action d-flex flex-items-center" href="https://github.com/{{ member.user }}">
  <img src="https://github.com/{{ member.user }}.png" alt="@{{ member.user }}" width="32" height="32" class="radius me-0_5">
  <strong class="me-0_25">{{ member.name }}</strong>
  <small>@{{ member.user }}</small>
</a>
{% endfor %}
</div>

Get involved with Figuration development by [opening an issue](https://github.com/cast-org/figuration/issues/new) or submitting a pull request. Read our [contributing guidelines](https://github.com/cast-org/figuration/blob/master/CONTRIBUTING.md) for information on how we develop.
