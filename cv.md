---
layout: default
permalink: /cv/
title: CV
---

<div class="container">
  <header style="text-align: center; margin: var(--spacing-lg) 0;">
    <h1>{{ site.data.personal.name }}</h1>
    <p style="color: var(--text-muted);">{{ site.data.personal.role }}</p>
    <p>{{ site.data.personal.location }} • <a href="mailto:{{ site.data.personal.email }}">{{ site.data.personal.email }}</a></p>
  </header>

  <section style="margin-bottom: var(--spacing-lg);">
    <h2>Experience</h2>
    <div class="timeline">
      {% for job in site.data.experience %}
        <div class="timeline-item">
          <h3>{{ job.role }}</h3>
          <p class="meta" style="color: #4F46E5; font-weight: 500;">{{ job.company }}</p>
          <p class="meta">{{ job.location }}</p>
          {% if job.details %}
          <ul style="margin-top: 0.5rem; font-size: 0.95rem; color: var(--text-muted);">
            {% for detail in job.details %}
              <li>{{ detail }}</li>
            {% endfor %}
          </ul>
          {% endif %}
        </div>
      {% endfor %}
    </div>
  </section>

  <section style="margin-bottom: var(--spacing-lg);">
    <h2>Education</h2>
    <div class="timeline">
      {% for edu in site.data.education %}
        <div class="timeline-item">
          <h3>{{ edu.degree }}</h3>
          <p class="meta">{{ edu.institution }}</p>
          <p class="meta">{{ edu.location }} {% if edu.gpa %}| GPA: {{ edu.gpa }}{% endif %} {% if edu.status %}| {{ edu.status }}{% endif %}</p>
        </div>
      {% endfor %}
    </div>
  </section>

  <section style="margin-bottom: var(--spacing-lg);">
    <h2>Skills</h2>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: var(--spacing-md);">
      {% for skill_group in site.data.skills %}
        <div class="card">
          <h4 style="margin-top: 0; color: #4F46E5;">{{ skill_group.category }}</h4>
          <div class="tags">
            {% for skill in skill_group.items %}
              <span>{{ skill }}</span>
            {% endfor %}
          </div>
        </div>
      {% endfor %}
    </div>
  </section>
</div>
