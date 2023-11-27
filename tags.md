---
layout: page
title: Tags
permalink: /tags/
---

{% for tag in site.tags %}{% assign tagname = tag[0] %} <a href="#{{ tagname }}" onclick="smoothScroll(event)">#{{ tagname }}</a> {% endfor %}

{% for tag in site.tags %}
<div id="{{ tag[0] }}"><h3>{{ tag[0] }}</h3></div>
{{ tag[1] | size }} posts
{% for post in tag[1] %}
- [{{ post.title }}]({% include relative %}{{ post.url }})
{% endfor %}
{% endfor %}

<script>
function smoothScroll(event) {
    event.preventDefault();
    const targetId = event.target.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
    });
}
</script>
