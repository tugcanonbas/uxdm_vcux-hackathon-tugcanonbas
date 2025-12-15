---
layout: default
title: Projects
permalink: /projects/
---

<div class="container project-section">
  <div class="projects-hero">
    <canvas id="projects-canvas"></canvas>
    <div class="hero-content">
      <h1 class="section-title">Selected Works</h1>
      <p style="color: var(--text-muted); max-width: 600px; font-size: 1.1rem; margin-top: 0.5rem; line-height: 1.6;">
        A collection of experiments, products, and open-source contributions designed to push boundaries.
      </p>
    </div>
  </div>
  
  <div class="project-grid">
    {% for project in site.projects %}
      <a href="{{ project.url | relative_url }}" class="project-card" style="text-decoration: none;">
        <div class="card-visual">
           {% if project.teaser %}
           <img src="{{ project.teaser | relative_url }}" alt="{{ project.title }} Visual" style="width: 60%; height: 60%; object-fit: contain;">
           {% else %}
           <div class="tech-circle">
             <div style="width: 8px; height: 8px; background: var(--text-color); border-radius: 50%; opacity: 0.5;"></div>
           </div>
           {% endif %}
        </div>
        <div class="card-content">
          <h3 class="card-title">{{ project.title }}</h3>
          <p class="card-desc">{{ project.description }}</p>
          <div class="card-tags">
            {% for tag in project.tags %}
              <span class="card-tag">{{ tag }}</span>
            {% endfor %}
          </div>
        </div>
      </a>
    {% endfor %}
  </div>
</div>

<script src="{{ '/assets/js/projects.js' | relative_url }}"></script>
