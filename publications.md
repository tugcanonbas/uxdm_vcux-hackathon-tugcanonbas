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
    {% for pub in site.data.publications %}
      <div class="pub-card">
        <div class="pub-year">{{ pub.year }}</div>
        
        <div class="pub-content">
          <h3 class="pub-title">{{ pub.title }}</h3>
          
          <div class="pub-meta">
            <span>{{ pub.authors }}</span>
            <span class="separator"></span>
            <span style="color: var(--text-color);">{{ pub.conference }}</span>
            {% if pub.pages %}<span class="separator"></span> <span>pp. {{ pub.pages }}</span>{% endif %}
          </div>
          
          <div class="pub-actions">
            {% if pub.url %}
            <a href="{{ pub.url }}" target="_blank" class="action-btn">
              Read Paper <span style="margin-left: 5px;">↗</span>
            </a>
            {% endif %}
            <button class="action-btn" style="border-style: dashed;">Cite</button>
            <button class="action-btn" style="border-style: dotted;">Abstract</button>
          </div>
        </div>
      </div>
    {% endfor %}
  </div>
</div>

<script src="{{ '/assets/js/publications.js' | relative_url }}"></script>
