---
permalink: "{{ site.path }}/robots.txt"
sitemapIgnore: true
templateEngineOverride: liquid
---
# Allow crawling of all content
User-agent: *
Disallow:
Sitemap: {{ site.url }}/sitemap.xml
