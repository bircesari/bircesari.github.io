# How to integrate style.css into your GitHub Pages

## Step 1 — Upload style.css to the repo root
Place `style.css` alongside `index.html` at the top level of the repository.
All blog pages (blog/*.html) can reference it as `../style.css`.

---

## Step 2 — index.html

### Add this ONE line inside <head>, after your existing <link> tags:
```html
<link rel="stylesheet" href="style.css">
```

### Then REMOVE the entire <style> block from the <head>:
Everything between (and including):
```html
<style>
:root{ ...
```
...down to the closing:
```html
</style>
```

Everything else in index.html stays exactly as-is — no text, structure, or
script changes needed. The JS functions (toggleTheme, toggleCategory,
toggleSubcategory, toggleExperience) remain in their <script> tags.

---

## Step 3 — Blog pages (blog/*.html and any other sub-pages)

Each blog page should have in <head>:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
<link rel="stylesheet" href="../style.css">
```

If a blog page has its own <style> block, remove it and use
the shared classes instead (.blog-post-container, .blog-post-header,
.blog-post-body, .blog-post-meta, .blog-post-back, .recommended-readings).

---

## Step 4 — Any future pages

Add to <head>:
```html
<link rel="stylesheet" href="/style.css">
```
(absolute path works from any depth when hosted on GitHub Pages)

---

## What the stylesheet covers

| Section              | Classes / IDs                                     |
|----------------------|---------------------------------------------------|
| Design tokens        | :root CSS variables — change ONE place for colors |
| Dark mode            | body.dark — all dark overrides included           |
| Navigation           | #nav-stand, .nav-container, .navbar, .nav-book    |
| Hero                 | .hero, .hero-content, .profile, .buttons          |
| About                | #about, .about-book-cta                           |
| Skills               | .skills-grid, .skill-card                         |
| Works / Catalogue    | .catalogue                                        |
| Experience timeline  | .timeline, .timeline-item, .timeline-header, etc. |
| Awards               | .awards-grid, .award-card                         |
| Blog listing         | .blog-grid, .blog-card, .blog-tag, .blog-link     |
| Blog article pages   | .blog-post-container, .blog-post-body, etc.       |
| Services             | .service-catalogue, .category-header, etc.        |
| Education            | .education-table, .degree, .thesis                |
| Contact              | .book-banner, .contact-form, .social-links        |
| Footer               | footer                                            |
| Utilities            | .text-primary, .mt-md, .mb-lg, etc.               |
| Responsive           | 768px + 480px breakpoints                         |

---

## Quick brand update

To change brand colors across the ENTIRE site, edit only these two lines in style.css:

```css
--primary:   #4dd0e1;   /* teal */
--secondary: #b39ddb;   /* lavender */
```

Everything — gradient, tags, links, borders, shadows — updates automatically.

## German level update

Your About section currently shows German (B1). Once you reach B2,
update the HTML text in index.html — no CSS change needed.
