---
permalink: categories/install
title: "Install"
layout: archive
author_profile: true
sidebar_main: true
---
{% assign posts = site.categories.Install %}
{% for post in posts %} {% include archive-single.html type=page.entries_layout %} {% endfor %}
