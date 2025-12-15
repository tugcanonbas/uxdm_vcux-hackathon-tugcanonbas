---
layout: default
title: Projects
permalink: /projects/
---

<div class="container">
  <h1 class="section-title" style="margin-top: var(--spacing-lg);">Projects</h1>
  
  <div class="project-grid">
    {% for project in site.data.projects %}
      <div class="card">
        <h3>{{ project.name }}</h3>
        <p>{{ project.description }}</p>
        <div class="tags">
          {% for tag in project.tags %}
            <span>{{ tag }}</span>
          {% endfor %}
        </div>
      </div>
    {% endfor %}
  </div>
</div>
