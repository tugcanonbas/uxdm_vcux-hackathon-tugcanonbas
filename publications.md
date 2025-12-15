---
layout: default
title: Publications
permalink: /publications/
---

<div class="container project-section">
  <!-- Interactive Hero -->
  <div class="pubs-hero">
    <canvas id="pubs-canvas"></canvas>
    <div class="pubs-header-content">
      <h1>The Archive</h1>
      <p style="color: var(--text-muted); letter-spacing: 2px; text-transform: uppercase; font-size: 0.8rem; margin-top: 1rem;">Research & Publications</p>
    </div>
  </div>

  <!-- Unique Stack Container -->
    <div class="pub-stack-container">
      {% for pub in site.publications %}
        <a href="{{ pub.url | relative_url }}" class="pub-card-wrapper" style="text-decoration: none;">
            <div class="pub-card">
              <div class="pub-spine"></div>
              <div class="pub-content">
                <div class="pub-year-bg">{{ pub.year }}</div>
                
                <span class="pub-type-badge">{{ pub.type | default: "Paper" }}</span>
                
                <h3 class="pub-title">{{ pub.title }}</h3>
                <p class="pub-authors">{{ pub.authors }}</p>
                <div class="pub-meta">
                  <span class="pub-conf">{{ pub.conference }}</span>
                  <span class="pub-year">{{ pub.year }}</span>
                </div>
                
                <div class="pub-actions">
                  <span class="action-btn">Open Detail</span>
                </div>
              </div>
            </div>
        </a>
      {% endfor %}
    </div>
</div>

<script src="{{ '/assets/js/publications.js' | relative_url }}"></script>
