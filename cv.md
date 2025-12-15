---
layout: default
permalink: /cv/
title: CV
---

<div class="container">
  <div class="cv-actions" style="display: flex; gap: 1rem; justify-content: flex-end; margin-top: 2rem; align-items: center; flex-wrap: wrap;">
    
    <!-- Listen Button -->
    <button id="listen-cv-btn" class="button secondary" style="display: inline-flex; align-items: center; gap: 0.5rem;">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
      Listen to CV
    </button>

    <!-- Audio Container (Hidden initially) -->
    <div id="audio-container" style="display: none; align-items: center; gap: 0.5rem; background: var(--glass-bg); padding: 4px; border-radius: 99px; border: 1px solid var(--border-color); animation: fade-in-up 0.3s ease;">
      <audio id="cv-audio-player" controls style="height: 36px; border-radius: 20px;">
        <source src="{{ '/assets/audio/cv_audio.m4a' | relative_url }}?v={{ site.time | date: '%s' }}" type="audio/mp4">
        Your browser does not support the audio element.
      </audio>
      <button id="close-audio-btn" aria-label="Close audio" style="background: none; border: none; cursor: pointer; color: var(--text-color); padding: 0 8px; display: flex; align-items: center;">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>

    <a href="{{ '/CV.pdf' | relative_url }}" target="_blank" class="button primary" style="display: inline-flex; align-items: center; gap: 0.5rem;">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
      Download CV
    </a>
  </div>

  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const listenBtn = document.getElementById('listen-cv-btn');
      const audioContainer = document.getElementById('audio-container');
      const closeBtn = document.getElementById('close-audio-btn');
      const audioPlayer = document.getElementById('cv-audio-player');

      listenBtn.addEventListener('click', () => {
        // Force reload audio source with timestamp to prevent caching
        const source = audioPlayer.querySelector('source');
        if (source) {
            const baseUrl = source.src.split('?')[0];
            source.src = `${baseUrl}?v=${Date.now()}`;
            audioPlayer.load(); // Reload the audio element
        }
        
        listenBtn.style.display = 'none';
        audioContainer.style.display = 'flex';
        audioPlayer.play();
      });

      closeBtn.addEventListener('click', () => {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
        audioContainer.style.display = 'none';
        listenBtn.style.display = 'inline-flex';
      });
    });
  </script>

  <header style="text-align: center; margin: var(--spacing-lg) 0;">
    <h1>{{ site.data.personal.name }}</h1>
    <p style="color: var(--text-muted);">{{ site.data.personal.role }}</p>
    <p>{{ site.data.personal.location }} • <a href="mailto:{{ site.data.personal.email }}">{{ site.data.personal.email }}</a></p>
  </header>

  <section style="margin-bottom: var(--spacing-lg);">
    <h2 style="max-width: 800px; margin: 0 auto var(--spacing-lg) auto;">Experience</h2>
    <div class="cv-timeline">
      {% for job in site.data.experience %}
        <div class="cv-timeline-item">
          <div class="cv-timeline-node"></div>
          <div class="cv-timeline-content">
            <div class="cv-card-header">
                <h3>{{ job.role }}</h3>
                <span class="cv-company">{{ job.company }}</span>
            </div>
            <p class="cv-meta">{{ job.location }}</p>
            {% if job.details %}
            <ul class="cv-details">
              {% for detail in job.details %}
                <li>{{ detail }}</li>
              {% endfor %}
            </ul>
            {% endif %}
          </div>
        </div>
      {% endfor %}
    </div>
  </section>

  <section style="margin-bottom: var(--spacing-lg);">
    <h2 style="max-width: 800px; margin: 0 auto var(--spacing-lg) auto;">Education</h2>
    <div class="cv-timeline">
      {% for edu in site.data.education %}
        <div class="cv-timeline-item">
          <div class="cv-timeline-node"></div>
          <div class="cv-timeline-content">
            <div class="cv-card-header">
                <h3>{{ edu.degree }}</h3>
                <span class="cv-company">{{ edu.institution }}</span>
            </div>
            <p class="cv-meta">{{ edu.location }} {% if edu.gpa %}<span class="separator">•</span> GPA: {{ edu.gpa }}{% endif %} {% if edu.status %}<span class="separator">•</span> {{ edu.status }}{% endif %}</p>
          </div>
        </div>
      {% endfor %}
    </div>
  </section>

  <section class="skills-section">
    <h2>Skills & Technologies</h2>
    <div class="skill-grid">
      {% for skill_group in site.data.skills %}
        <div class="skill-module">
          <div class="module-header">
            <h4>{{ skill_group.category }}</h4>
            <div class="status-indicator"></div>

          </div>
          <div class="skill-tags">
            {% for skill in skill_group.items %}
              <span class="tech-tag">{{ skill }}</span>
            {% endfor %}
          </div>
        </div>
      {% endfor %}
    </div>
  </section>
</div>

<script src="{{ '/assets/js/cv.js' | relative_url }}"></script>
