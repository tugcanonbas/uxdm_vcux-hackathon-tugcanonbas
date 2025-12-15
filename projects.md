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
    {% for project in site.data.projects %}
      <div class="project-card">
        <div class="card-visual">
           <div class="tech-circle">
             <!-- Simple geometric icon -->
             <div style="width: 8px; height: 8px; background: var(--text-color); border-radius: 50%; opacity: 0.5;"></div>
           </div>
        </div>
        <div class="card-content">
          <h3 class="card-title">{{ project.name }}</h3>
          <p class="card-desc">{{ project.description }}</p>
          <div class="card-tags">
            {% for tag in project.tags %}
              <span class="card-tag">{{ tag }}</span>
            {% endfor %}
          </div>
        </div>
      </div>
    {% endfor %}
  </div>
</div>

<script src="{{ '/assets/js/projects.js' | relative_url }}"></script>
