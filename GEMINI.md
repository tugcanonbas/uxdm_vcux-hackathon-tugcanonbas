# Project Overview

This project is a personal academic website based on the **AcademicPages** Jekyll template. It is designed to showcase a portfolio, publications, talks, teaching experience, and blog posts. The site uses **Jekyll** for static site generation and is hosted on GitHub Pages.

# Building and Running

## Prerequisites

*   Ruby (with `bundler`)
*   Node.js (for asset building)

## Key Commands

*   **Install Ruby dependencies:**
    ```bash
    bundle install
    ```

*   **Install Node dependencies:**
    ```bash
    npm install
    ```

*   **Run the local development server:**
    ```bash
    bundle exec jekyll serve
    # Or with livereload
    bundle exec jekyll serve --livereload
    ```
    The site will be available at `http://localhost:4000`.

*   **Build JavaScript assets:**
    ```bash
    npm run build:js
    ```
    This minifies and bundles the JS files into `assets/js/main.min.js`.

*   **Docker:**
    Build and run the container:
    ```bash
    docker-compose up
    ```

# Development Conventions

## Directory Structure

*   **`_config.yml`**: Main site configuration (title, author, navigation, etc.).
*   **`_pages/`**: Standalone pages (e.g., About, CV).
*   **`_posts/`**: Blog posts formatted as `YYYY-MM-DD-title.md`.
*   **`_publications/`**: Publications collection.
*   **`_talks/`**: Talks and presentations collection.
*   **`_teaching/`**: Teaching materials collection.
*   **`_portfolio/`**: Portfolio items collection.
*   **`_data/`**: Data files for navigation (`navigation.yml`) and UI text (`ui-text.yml`).
*   **`assets/`**: CSS, JS, and font assets.
*   **`markdown_generator/`**: Python scripts/notebooks to generate markdown content from data sources (e.g., BibTeX, CSV).

## Content Management

*   **Markdown:** Content is primarily written in Markdown with YAML front matter.
*   **Collections:** Specialized content like publications and talks are stored in their respective `_` directories. The `_config.yml` defines these collections.
*   **Navigation:** Update `_data/navigation.yml` to change the main menu links.

## Styling

*   Sass files are located in `_sass/`.
*   The main stylesheet is `assets/css/main.scss`.
