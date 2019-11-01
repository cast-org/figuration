---
permalink: "/sitemap.xml"
sitemapIgnore: true
---
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
{%- for page in collections.all %}
{%- unless page.data.sitemapIgnore == true %}
  <url>
    <loc>{{ site.url | append: site.path | append: page.url }}</loc>
    <lastmod>{{ page.date | sitemapDateString }}</lastmod>
    {%- if page.data.changefreq %}
    <changefreq>{{ page.data.changefreq }}</changefreq>
    {%- endif %}
    {%- if page.data.priority > 0.0 %}
    <priority>{{ page.data.priority }}</priority>
    {%- endif %}
  </url>
{%- endunless %}
{%- endfor %}
</urlset>
