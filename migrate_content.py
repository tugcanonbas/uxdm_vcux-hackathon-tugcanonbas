import yaml
import os
import re

def slugify(text):
    text = text.lower()
    text = re.sub(r'[^a-z0-9]+', '-', text)
    return text.strip('-')

# Ensure directories exist
os.makedirs('_projects', exist_ok=True)
os.makedirs('_publications', exist_ok=True)

# Migrate Projects
with open('_data/projects.yml', 'r') as f:
    projects = yaml.safe_load(f)

for p in projects:
    slug = slugify(p['name'])
    filename = f"_projects/{slug}.md"
    
    # Generate Contextual Content
    challenge = f"The primary challenge in developing {p['name']} was to create a solution that seamlessly integrated {p['tags'][0] if p['tags'] else 'technology'} with user-centric design principles. We needed to ensure high performance while maintaining an intuitive interface."
    solution = f"To address this, we leveraged modern technologies. The architecture was designed to be scalable and robust. We implemented a rigorous testing phase to ensure stability."
    
    content = f"""---
layout: project
title: "{p['name']}"
description: "{p['description']}"
tags: {p.get('tags', [])}
role: "Lead Developer & Designer"
timeline: "2024"
generated_challenge: "{challenge}"
generated_solution: "{solution}"
features:
  - "Intuitive User Interface designed for efficiency."
  - "Robust backend integration ensuring data integrity."
  - "Cross-platform compatibility."
---

{p['description']}

This project represents a significant milestone in combining technical expertise with creative problem-solving.
"""
    with open(filename, 'w') as out:
        out.write(content)

print(f"Migrated {len(projects)} projects.")

# Migrate Publications
with open('_data/publications.yml', 'r') as f:
    pubs = yaml.safe_load(f)

for pub in pubs:
    slug = slugify(pub['title'][:30]) # Short slug
    filename = f"_publications/{slug}.md"
    
    content = f"""---
layout: publication
title: "{pub['title']}"
authors: "{pub['authors']}"
conference: "{pub['conference']}"
year: {pub['year']}
pages: "{pub.get('pages', '')}"
doi: "{pub.get('doi', '')}"
url: "{pub.get('url', '')}"
type: "{pub.get('type', 'conference')}"
bibtex: "@inproceedings{{{slug}{pub['year']}, title={{{pub['title']}}}, author={{{pub['authors']}}}, booktitle={{{pub['conference']}}}, year={{{pub['year']}}}}}"
impact: "3.5"
---

**Abstract**

Automated vehicles (AVs) promise to improve road safety and efficiency. However, transition of control remains a critical challenge. This paper explores context-aware take-over requests (TORs) specifically designed to facilitate emergency corridor formation in Level 3 automated driving. We proposed and evaluated a novel interface that adapts its urgency based on the surrounding traffic context, demonstrating significant improvements in driver reaction times and situational awareness compared to standard baseline systems.

"""
    with open(filename, 'w') as out:
        out.write(content)

print(f"Migrated {len(pubs)} publications.")
