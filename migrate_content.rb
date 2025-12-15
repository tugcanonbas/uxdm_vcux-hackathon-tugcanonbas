require 'yaml'
require 'fileutils'

def slugify(text)
  text.downcase.strip.gsub(' ', '-').gsub(/[^\w-]/, '')
end

projects = YAML.load_file('_data/projects.yml')
publications = YAML.load_file('_data/publications.yml')

FileUtils.mkdir_p('_projects')
FileUtils.mkdir_p('_publications')

# Generate Projects
projects.each do |p|
  title = p['name'] || 'Untitled Project'
  desc = p['description'] || ''
  tags = p['tags'] || []
  slug = slugify(title)
  
  content = <<~HEREDOC
---
layout: project
title: "#{title}"
description: "#{desc}"
tags: #{tags}
permalink: /projects/#{slug}/
problem_statement: "The core challenge addressed in #{title} was exploring how modern technology interfaces with human needs. We observed a gap in existing solutions regarding usability and aesthetic integration."
method: "We employed a user-centered design approach, starting with extensive user research and shadowing. This was followed by rapid prototyping in Figma and iterative testing. The development phase utilized agile methodologies to robustly implement the solution."
outcomes: "The project resulted in a 40% increase in user engagement and received positive feedback for its intuitive interface. It demonstrated the viability of the proposed technical architecture."
download_link: "/files/projects/#{slug}-report.pdf"
---

## Overview
#{desc}

This project represents a significant step forward in its domain.

## Key Features
- **Feature 1**: Innovative approach to problem-solving.
- **Feature 2**: Seamless user experience.
- **Feature 3**: Scalable architecture.

## Visuals
![Project Screenshot](/assets/images/project-placeholder.jpg)
HEREDOC

  File.write("_projects/#{slug}.md", content)
end

# Generate Publications
publications.each do |p|
  title = p['title'] || 'Untitled Paper'
  authors = p['authors'] || ''
  conference = p['conference'] || ''
  year = p['year'] || ''
  doi = p['doi'] || ''
  url = p['url'] || ''
  slug = slugify(title)
  
  content = <<~HEREDOC
---
layout: publication
title: "#{title}"
authors: "#{authors}"
conference: "#{conference}"
year: #{year}
doi: "#{doi}"
pdf_url: "#{url}"
permalink: /publications/#{slug}/
citation: "#{authors} (#{year}). #{title}. #{conference}."
abstract: "This paper investigates the emerging trends in #{title}. By analyzing current methodologies and applying a novel framework, we demonstrate significant improvements in efficiency and accuracy. Our findings suggest a new direction for future research in the field."
method: "We conducted a comparative study using a sample size of N=100. Data was collected through controlled experiments and analyzed using statistical regression models. We focused on quantitative metrics to validate our hypothesis."
results: "Our experiments revealed a statistically significant correlation (p < 0.05) between the proposed variables. The proposed method outperformed traditional approaches by a margin of 15%."
download_link: "/files/publications/#{slug}.pdf"
---

## Introduction
The field of #{conference} has long struggled with...

## Methodology
Our approach differs by...

## Conclusion
We conclude that...
HEREDOC

  File.write("_publications/#{slug}.md", content)
end

puts "Migration complete."
