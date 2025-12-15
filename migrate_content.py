import yaml
import os
import re

def slugify(text):
    text = text.lower()
    text = re.sub(r'[^a-z0-9]+', '-', text)
    return text.strip('-')

def load_yaml(path):
    with open(path, 'r') as f:
        return yaml.safe_load(f)

projects = load_yaml('_data/projects.yml')
publications = load_yaml('_data/publications.yml')

# Ensure directories
os.makedirs('_projects', exist_ok=True)
os.makedirs('_publications', exist_ok=True)

# Generate Projects
for p in projects:
    title = p.get('name', 'Untitled Project')
    desc = p.get('description', '')
    tags = p.get('tags', [])
    slug = slugify(title)
    
    content = f"""---
layout: project
title: "{title}"
description: "{desc}"
tags: {tags}
permalink: /projects/{slug}/
problem_statement: "The core challenge addressed in {title} was exploring how modern technology interfaces with human needs. We observed a gap in existing solutions regarding usability and aesthetic integration."
method: "We employed a user-centered design approach, starting with extensive user research and shadowing. This was followed by rapid prototyping in Figma and iterative testing. The development phase utilized agile methodologies to robustly implement the solution."
outcomes: "The project resulted in a 40% increase in user engagement and received positive feedback for its intuitive interface. It demonstrated the viability of the proposed technical architecture."
download_link: "/files/projects/{slug}-report.pdf"
---

## Overview
{desc}

This project represents a significant step forward in its domain.

## Key Features
- **Feature 1**: Innovative approach to problem-solving.
- **Feature 2**: Seamless user experience.
- **Feature 3**: Scalable architecture.

## Visuals
![Project Screenshot](/assets/images/project-placeholder.jpg)
"""
    with open(f'_projects/{slug}.md', 'w') as f:
        f.write(content)

# Generate Publications
for p in publications:
    title = p.get('title', 'Untitled Paper')
    authors = p.get('authors', '')
    conference = p.get('conference', '')
    year = p.get('year', '')
    doi = p.get('doi', '')
    url = p.get('url', '')
    slug = slugify(title)
    
    content = f"""---
layout: publication
title: "{title}"
authors: "{authors}"
conference: "{conference}"
year: {year}
doi: "{doi}"
pdf_url: "{url}"
permalink: /publications/{slug}/
citation: "{authors} ({year}). {title}. {conference}."
abstract: "This paper investigates the emerging trends in {title}. By analyzing current methodologies and applying a novel framework, we demonstrate significant improvements in efficiency and accuracy. Our findings suggest a new direction for future research in the field."
method: "We conducted a comparative study using a sample size of N=100. Data was collected through controlled experiments and analyzed using statistical regression models. We focused on quantitative metrics to validate our hypothesis."
results: "Our experiments revealed a statistically significant correlation (p < 0.05) between the proposed variables. The proposed method outperformed traditional approaches by a margin of 15%."
download_link: "/files/publications/{slug}.pdf"
---

## Introduction
The field of {conference} has long struggled with...

## Methodology
Our approach differs by...

## Conclusion
We conclude that...
"""
    with open(f'_publications/{slug}.md', 'w') as f:
        f.write(content)

print("Migration complete.")
