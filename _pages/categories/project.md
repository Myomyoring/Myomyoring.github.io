---
permalink: categories/project
title: "Project"
layout: archive
author_profile: true
sidebar_main: true
---
{% assign posts = site.categories.Project %}
{% for post in posts %} {% include archive-single.html type=page.entries_layout %} {% endfor %}
