---
layout: page
title: Tags
permalink: /tags/
---

{% for tag in site.tags %}{% assign tagname = tag[0] %} <a href="#{{ tagname }}" onclick="smoothscroll(event)">#{{ tagname }}</a> {% endfor %}

{% for tag in site.tags %}
<div id="{{ tag[0] }}"><h3>{{ tag[0] }}</h3></div>
{{ tag[1] | size }} posts
{% for post in tag[1] %}
- [{{ post.title }}]({% include relative %}{{ post.url }})
{% endfor %}
{% endfor %}

<script src="https://cdn.jsdelivr.net/gh/zichenstudio/smoothscroll.js/dist/smoothscroll.min.js"></script>
