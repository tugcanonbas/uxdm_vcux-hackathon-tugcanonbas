# Project Overview

This project is the development of a bespoke, high-end personal academic and portfolio website for **Tuğcan ÖNBAŞ**. While built upon a Jekyll foundation, the site's frontend is entirely custom, prioritizing interactive layouts, premium aesthetics, and a dynamic user experience. It aims to push the boundaries of standard static site design to deliver a "wow" factor, distinguishing itself from typical Jekyll templates. The site is hosted on GitHub Pages.

# Project Vision & Goals

The core vision for this project is to achieve:

*   **Visual Excellence:** A premium design utilizing glassmorphism, dynamic gradients, and refined typography (`Outfit`, `Space Grotesk`, `Inter`).
*   **High Interactivity:** Engaging user experience through micro-animations, magnetic hover effects, and scroll-triggered transitions.
*   **Custom Layouts/Themes:** Unique, non-template designs for every page type (Landing, Project Details, Publications, CV).
*   **Responsive & Dynamic:** A website that feels alive, adapting seamlessly across devices, featuring a custom theme engine for smooth Dark/Light mode transitions.

# Tech Stack

*   **Static Site Generator:** Jekyll (v4.x compatible)
*   **Styling:** Advanced SCSS/Sass (Native Jekyll support) with extensive use of CSS Variables for dynamic theming. Focus on Vanilla CSS for maximum control and performance.
*   **Scripting:** Vanilla JavaScript (ES6+) for standard UI logic and advanced interactive elements (e.g., canvas, scroll observers), designed for a lightweight, "application-like" feel.
*   **Hosting:** GitHub Pages.

# Key Features

*   **Dynamic Theme Engine:** Supports seamless Dark (Obsidian/Glass) and Light (High-contrast, clean editorial) theme switching.
*   **Custom Navigation:** Floating, glassmorphic navigation bar with scroll-spy active states and mobile-responsive animations.
*   **Landing Page (Home):** Features a full-screen interactive hero section with dynamic backgrounds and a featured project showcase.
*   **Projects / Portfolio:** Utilizes masonry or asymmetric grid layouts with hover-reveal details, category filtering, and custom detail pages for case studies.
*   **Publications (Research):** Presents an interactive list with distinct visual separation for journals vs. conferences, expandable cards, citation buttons, and direct PDF downloads.
*   **CV / Resume:** Offers a digital experience with interactive timelines and animated skills visualization.
*   **Custom Iconography:** All default `academicpages` icon dependencies are replaced with a modern, coherent stroke-based icon library (e.g., Lucide, Phosphor) or custom SVGs for CSS manipulation.

# Building and Running

## Prerequisites

*   Ruby (with `bundler`)
*   Node.js (for JS asset bundling/minification)

## Commands

*   **Install Ruby dependencies:**
    ```bash
    bundle install
    ```

*   **Install Node dependencies:**
    ```bash
    npm install
    ```

*   **Run local development server:**
    ```bash
    bundle exec jekyll serve # or bundle exec jekyll serve --livereload
    ```
    (Site accessible at `http://localhost:4000`)

*   **Build JavaScript assets:**
    ```bash
    npm run build:js
    ```

*   **Docker:**
    ```bash
    docker-compose up
    ```

# Development Workflow & Conventions

*   **Content Foundation:** Content is primarily managed through Markdown files (`_pages/`, `_posts/`, `_publications/`, etc.) and Jekyll `_data` files, allowing flexible presentation.
*   **Custom Theming:** The existing `_sass/` structure is used for advanced SCSS development, focusing on custom styles rather than inherited template defaults.
*   **Asset Pipeline:** Node.js scripts (`package.json`) are used for JavaScript asset optimization.
*   **Personalization:** Content from `tugcanonbas.md` (Tuğcan ÖNBAŞ's personal details) serves as the source of truth for dynamic content population across the site.

# Author Context

**Tuğcan ÖNBAŞ** is a Multidisciplinary Designer & Software Developer based in Ingolstadt, Germany. His work focuses on Human-Computer Interaction (HCI), user-centered design, scalable/secure systems, and immersive technologies within the Apple ecosystem. He fuses creativity and technology to design experiences that he can code.