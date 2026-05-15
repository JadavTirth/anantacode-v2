# AnantaCode SEO Optimizations

This document contains all the SEO configurations, tags, and structure that have been applied to the project to improve search engine rankings, indexing, and performance.

## 1. Meta Tags & Open Graph Tags (OG)
Added directly to `index.html` to ensure immediate availability for search engine crawlers without waiting for React to render.

```html
<!-- Primary Meta Tags -->
<title>AnantaCode | Premium SaaS & Web Development Agency</title>
<meta name="description" content="AnantaCode engineers modern, high-performance web applications and scalable SaaS platforms for startups. Secure, fast, and conversion-focused." />
<meta name="keywords" content="web development, cloud, DevOps, UI/UX, React, Next.js, AnantaCode" />

<!-- Canonical Link -->
<link rel="canonical" href="https://anantacode.in" />

<!-- Open Graph Tags (For LinkedIn, Twitter, WhatsApp sharing) -->
<meta property="og:title" content="AnantaCode | Web Development" />
<meta property="og:description" content="We build high-performance web solutions and SaaS platforms for startups." />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://anantacode.in" />
<meta property="og:image" content="https://anantacode.in/og-image.webp" />
```

## 2. sitemap.xml
Located at: `public/sitemap.xml`
Helps Google and other search engines easily map and crawl the website structure.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://anantacode.in/</loc>
    <lastmod>2024-05-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

## 3. robots.txt
Located at: `public/robots.txt`
Instructions for web crawlers indicating which pages to crawl and where the sitemap is located.

```text
User-agent: *
Allow: /

Sitemap: https://anantacode.in/sitemap.xml
```

## 4. Lazy Loading & Alt Text
Added to all images across components (`HeroSection`, `ProjectsSection`, `Navbar`, `Footer`, `PopupForm`) to improve page load speed and accessibility.

```html
<img 
  src="/logo.png" 
  alt="AnantaCode web development logo" 
  loading="lazy" 
/>
```

## 5. Heading Hierarchy & Semantic HTML
- **Strict H1 Rule:** Maintained exactly one `<h1>` tag in the `HeroSection.jsx` to establish the main context of the page.
- All other sections logically follow with `<h2>` and `<h3>` tags.
- Main navigation is wrapped in `<nav>` and `<header>`.
- Footer is correctly enclosed inside a `<footer>` semantic tag.
