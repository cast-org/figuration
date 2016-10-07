---
layout: docs
title: Team
group: about
---

Figuration is maintained by a small team. Hopefully soon we can generate support and involvement from the community.

<div class="list-group cf-team">
  {% for member in site.data.core-team %}
    <div class="list-group-item">
      <iframe class="github-btn" src="https://ghbtns.com/github-btn.html?user={{ member.user }}&amp;type=follow"></iframe>
      <a class="team-member" href="https://github.com/{{ member.user }}">
        <img src="https://secure.gravatar.com/avatar/{{ member.gravatar }}" alt="@{{ member.user }}" width="32" height="32">
        <strong>{{ member.name }}</strong> <small>@{{ member.user }}</small>
      </a>
    </div>
  {% endfor %}
</div>

Get involved with Figuration development by [opening an issue](https://github.com/cast-org/figuration/issues/new) or submitting a pull request. Read our [contributing guidelines](https://github.com/cast-org/figuration/blob/master/CONTRIBUTING.md) for information on how we develop.
