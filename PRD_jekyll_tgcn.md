# Product Requirement Document (PRD) - Premium Personal Website (Jekyll)

## 1. Overview
Create a bespoke, high-end personal academic/portfolio website for Tugcan Onbas using Jekyll. While functionality may draw inspiration from the "Academic Pages" structure, the frontend must be entirely custom, featuring interactive layouts, premium aesthetics, and dynamic user experiences. The site will be hosted on GitHub Pages but will push the boundaries of standard static site design to deliver a "wow" factor.

## 2. Goals
*   **Visual Excellence:** A premium design using glassmorphism, dynamic gradients, and refined typography.
*   **High Interactivity:** Engaging user experience with micro-animations, hover effects, and scroll-triggered transitions.
*   **Custom Layouts/Themes:** Unique, non-template designs for every page type (Landing, Project Details, Publications).
*   **Responsive & Dynamic:** A site that feels alive and responsive, moving beyond simple static text.

## 3. Tech Stack
*   **Static Site Generator:** Jekyll (v4.x compatible).
*   **Styling:** Advanced SCSS/Sass (Native Jekyll support).
    *   Usage of CSS Variables for dynamic interactions and theming.
    *   Focus on Vanilla CSS for maximum control and performance.
*   **Scripting:** Vanilla JavaScript (ES6+).
    *   Authorized for standard UI logic and advanced interactive elements (canvas, scroll observers).
    *   No heavy frameworks (React/Vue) to ensure lightweight load, but "Application-like" feel.
*   **Hosting:** GitHub Pages.

## 4. Features & Site Structure
The content foundation remains `tugcanonbas.md`, but the presentation will be radically transformed.

### 4.1. Global Configuration
*   **Theme:** Custom-built theme engine supporting dynamic switching (Dark/Light) with smooth transitions.
*   **Navigation:** Floating, glassmorphic navigation bar with scroll-spy active states and mobile-responsive animations.

### 4.2. Page-Specific Layouts
1.  **Landing Page (Home):**
    *   **Hero Section:** Full-screen interactive conceptual design. Dynamic background (e.g., animated gradients, localized glows, or interactive particles).
    *   **Introduction:** "Bio" section with scroll-triggered fade-ins and typographic styling.
    *   **Featured Showcase:** Interactive carousel or horizontal scroll section highlighting top projects.

2.  **Projects / Portfolio:**
    *   **Gallery View:** Masonry or asymmetric grid layout with hover-reveal details. Filtering by category with animation.
    *   **Detail Page (Case Studies):** Custom layout for each project.
        *   Full-width hero header.
        *   Sticky Table of Contents (TOC).
        *   Rich media integration (video loops, before/after sliders).
        *   "Next/Previous" project navigation.

3.  **Publications (Research):**
    *   **Interactive List:** distinct visual separation for journals vs. conferences.
    *   **Interactivity:** Expandable cards showing abstracts, citation buttons, and direct PDF downloads.
    *   **Timeline View:** (Optional) Visual timeline of research career.

4.  **CV / Resume:**
    *   **Digital Experience:** Not just a text dump. Interactive timeline or accordion-style experience section.
    *   **Skills Visualization:** Animated bars, radar charts, or tag clouds for technical skills.

5.  **Contact:**
    *   Stylized contact cards with magnetic hover effects on social links.

## 5. Content Strategy
*   **Source:** `tugcanonbas.md` (and associated assets).
*   **Data Management:** Utilize Jekyll `_data` files to structure complex content (like timelines or skill matrices) to allow for the custom HTML rendering required by the new design.

## 6. Design System (Premium Aesthetics)
### 6.1. Visual Direction
*   **Style:** Modern, Tech-Forward, Glassmorphism.
*   **Aesthetics:** Deep depth, subtle colorful glows, frosted glass layers.
*   **Animations:**
    *   **Entrance:** Elements fade up and in upon scroll.
    *   **Hover:** Magnetic buttons, glow intensification.
    *   **Page Transitions:** Smooth opacity/transform transitions between pages.

### 6.2. Color Palette (Curated)
*   **Dark Theme (Primary):**
    *   Background: `#080808` (Obsidian)
    *   Surface: `rgba(255, 255, 255, 0.03)` (Glass)
    *   Text: `#EDEDED` (Off-white for readability)
*   **Accents (Gradients):**
    *   **Primary:** Linear Gradient (`#4F46E5` Indigo to `#9333EA` Purple).
    *   **Secondary:** Linear Gradient (`#06B6D4` Cyan to `#3B82F6` Blue).
*   **Light Theme:** High-contrast, clean editorial look with softer shadows instead of glows.

### 6.3. Typography
*   **Headings:** `Outfit` or `Space Grotesk` (Google Fonts) – Bold, modern, geometric.
*   **Body:** `Inter` or `Plus Jakarta Sans` – Highly legible, neutral.

### 6.4. Iconography
*   **No Template Assets:** Remove all default `academicpages` icon dependencies (e.g., standard FontAwesome builds).
*   **Custom Set:** Use a modern, coherent stroke-based icon library (e.g., Lucide, Phosphor) or custom SVGs.
*   **Implementation:** Use inline SVGs to allow for direct CSS manipulation (stroke animation on hover, color changes) to match the premium interactive feel.

## 7. Implementation Constraints & Requirements
*   **Performance:** Achieve 90+ Lighthouse score despite animations. Use `will-change` properties sparingly and optimize paints.
*   **Mobile:** The "Wow" factor must translate to mobile (touch interactions, responsive layouts).
*   **SEO:** Proper semantic HTML5 tags (Article, Section, Nav) and meta tags implementation.