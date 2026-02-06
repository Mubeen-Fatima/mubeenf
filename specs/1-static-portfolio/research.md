# Research: Static Portfolio Website

**Feature**: 1-static-portfolio
**Date**: 2026-02-05
**Status**: Complete

## Technology Stack Decision

### Decision: Vanilla HTML/CSS/JavaScript (No Framework)

**Rationale**: For a single-page static portfolio with GitHub Pages deployment, a framework adds unnecessary complexity. The requirements (8 sections, theme toggle, contact form, responsive design) can be elegantly achieved with modern HTML5, CSS3, and minimal vanilla JavaScript.

**Alternatives Considered**:

| Option | Pros | Cons | Verdict |
|--------|------|------|---------|
| React/Next.js | Component reuse, ecosystem | Overkill for static site, build complexity | Rejected |
| Astro | Good for static, partial hydration | Extra tooling, learning curve | Rejected |
| Hugo/Jekyll | GitHub Pages native support | Template syntax, content-heavy focus | Rejected |
| **Vanilla HTML/CSS/JS** | Zero dependencies, fast, simple deployment | Manual DOM manipulation | **Selected** |

**Key Factors**:
- Constitution requires minimal dependencies (Principle VI)
- GitHub Pages serves static files directly - no build step needed
- Performance targets (LCP < 2.5s) easier to achieve without framework overhead
- Maintainability: any developer can edit without framework knowledge

---

## CSS Architecture Decision

### Decision: CSS Custom Properties + Utility Classes

**Rationale**: CSS Custom Properties (variables) enable theme switching without JavaScript class toggling on every element. Combined with a minimal set of utility classes, this provides flexibility without the overhead of a full CSS framework.

**Alternatives Considered**:

| Option | Pros | Cons | Verdict |
|--------|------|------|---------|
| Tailwind CSS | Rapid development, consistent | Requires build step, large initial CSS | Rejected |
| Bootstrap | Components ready | Heavy, opinionated, not minimal | Rejected |
| Sass/SCSS | Nesting, mixins | Requires compilation | Rejected |
| **CSS Custom Properties** | Native, no build, theme-ready | Manual setup | **Selected** |

**Implementation Approach**:
```css
:root {
  --color-primary: #2680EB;
  --color-bg: #ffffff;
  --color-text: #1a1a1a;
}

[data-theme="dark"] {
  --color-bg: #0d1117;
  --color-text: #f0f6fc;
}
```

---

## Theme Toggle Implementation

### Decision: data-theme Attribute + LocalStorage

**Rationale**: Using a `data-theme` attribute on the document root, combined with CSS custom properties, allows instant theme switching with a single DOM operation. LocalStorage persists the preference across sessions.

**Implementation Pattern**:
1. Check localStorage for saved preference on page load
2. Default to dark mode if no preference saved (per clarification)
3. Apply `data-theme="dark"` or `data-theme="light"` to `<html>`
4. Toggle button updates attribute and saves to localStorage

**Performance**: Theme switch completes in <200ms as required (single attribute change triggers CSS cascade).

---

## Contact Form Integration

### Decision: Formspree

**Rationale**: Per clarification session, Formspree was selected for contact form handling.

**Integration Details**:
- Endpoint: `https://formspree.io/f/{form_id}`
- Method: POST with form data
- Fields: name, email, message (project brief)
- Honeypot field for spam protection (Constitution V)
- Client-side validation before submission
- Success/error states displayed inline

**Setup Required**:
1. Create Formspree account
2. Create form, get form ID
3. Configure email notifications to mubeenfatima.cs@gmail.com

---

## Image Optimization Strategy

### Decision: WebP with JPEG Fallback

**Rationale**: Constitution requires modern image formats (WebP/AVIF). WebP has 95%+ browser support; AVIF support is growing but not universal. JPEG fallback ensures compatibility.

**Implementation**:
- Use `<picture>` element with WebP source and JPEG fallback
- Lazy loading via `loading="lazy"` attribute
- Responsive images with `srcset` for different viewport sizes
- Target: Hero image <200KB, project thumbnails <50KB each

---

## Responsive Design Approach

### Decision: Mobile-First with CSS Grid/Flexbox

**Rationale**: Constitution mandates mobile-first responsive design. CSS Grid and Flexbox are native, performant, and well-supported.

**Breakpoints**:
| Breakpoint | Width | Target |
|------------|-------|--------|
| Base | 320px+ | Mobile phones (minimum per SC-007) |
| sm | 640px+ | Large phones, small tablets |
| md | 768px+ | Tablets |
| lg | 1024px+ | Laptops, desktops |
| xl | 1280px+ | Large desktops |

**Navigation Pattern**:
- Mobile: Hamburger menu with slide-out drawer
- Desktop: Horizontal navigation bar

---

## SEO Implementation

### Decision: Semantic HTML + JSON-LD Structured Data

**Per Constitution IV requirements**:

1. **Meta Tags**: Title, description, Open Graph, Twitter Card
2. **Semantic HTML**: `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`
3. **Structured Data**: JSON-LD for Person and ProfessionalService schemas
4. **Accessibility**: ARIA labels, proper heading hierarchy, alt text
5. **Technical**: sitemap.xml, robots.txt, canonical URLs

---

## Deployment Strategy

### Decision: GitHub Pages with Custom Domain

**Configuration**:
- Repository: mubeenf/mubeenf.com (or similar)
- Branch: `gh-pages` or `main` with `/docs` folder
- Custom domain: mubeenf.com (CNAME record)
- HTTPS: Automatically enabled by GitHub Pages

**Workflow**:
1. Push changes to main branch
2. GitHub Pages automatically deploys
3. No build step required (vanilla HTML/CSS/JS)

---

## File/Folder Structure Decision

### Decision: Flat Static Site Structure

```text
/
├── index.html              # Single page with all sections
├── css/
│   ├── variables.css       # CSS custom properties, themes
│   ├── base.css            # Reset, typography, utilities
│   ├── components.css      # Buttons, cards, forms
│   └── sections.css        # Hero, about, services, etc.
├── js/
│   ├── theme.js            # Theme toggle logic
│   ├── navigation.js       # Mobile menu, smooth scroll
│   └── form.js             # Contact form validation/submission
├── images/
│   ├── hero/               # Hero background/profile
│   ├── projects/           # Portfolio screenshots
│   └── icons/              # Tech stack icons, social icons
├── CNAME                   # Custom domain for GitHub Pages
├── robots.txt              # Search engine directives
├── sitemap.xml             # Site structure for SEO
└── README.md               # Project documentation
```

---

## Performance Budget

| Metric | Target | Strategy |
|--------|--------|----------|
| LCP | < 2.5s | Optimize hero image, inline critical CSS |
| FID | < 100ms | Minimal JS, async loading |
| CLS | < 0.1 | Reserve space for images, no layout shifts |
| Total Weight | < 1MB | Compress images, minify CSS/JS |
| Time to Interactive | < 3s | Defer non-critical resources |

---

## Summary of Resolved Items

All technical decisions have been made. No NEEDS CLARIFICATION items remain.

| Item | Decision |
|------|----------|
| Framework | Vanilla HTML/CSS/JS |
| CSS Architecture | Custom Properties + utilities |
| Theme Toggle | data-theme attribute + localStorage |
| Contact Form | Formspree |
| Images | WebP with JPEG fallback |
| Responsive | Mobile-first, CSS Grid/Flexbox |
| SEO | Semantic HTML + JSON-LD |
| Deployment | GitHub Pages with custom domain |
