---
layout: default
title: Publications
permalink: /publications/
---

<div class="container">
  <h1 class="section-title" style="margin-top: var(--spacing-lg);">Publications</h1>

  <div class="timeline">
    {% for pub in site.data.publications %}
      <div class="timeline-item">
        <h3>{{ pub.title }}</h3>
        <p class="meta">{{ pub.authors }}</p>
        <p style="font-style: italic; color: var(--text-muted);">{{ pub.conference }} ({{ pub.year }})</p>
        <div style="margin-top: 1rem;">
          <a href="{{ pub.url }}" target="_blank" class="button-sm" style="border: 1px solid var(--glass-border); padding: 4px 12px; border-radius: 4px; font-size: 0.8rem;">DOI</a>
        </div>
      </div>
    {% endfor %}
  </div>
</div>
