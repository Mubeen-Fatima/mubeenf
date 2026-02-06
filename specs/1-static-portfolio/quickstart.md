# Quickstart: Static Portfolio Website

**Feature**: 1-static-portfolio
**Date**: 2026-02-05

## Prerequisites

- Git installed
- A code editor (VS Code recommended)
- Web browser for testing
- (Optional) Live Server extension for hot reload

---

## Project Setup

### 1. Clone Repository

```bash
git clone <repository-url>
cd mubeenf
```

### 2. Project Structure

```
mubeenf/
├── index.html          # Main single-page application
├── css/
│   ├── variables.css   # Theme colors, CSS custom properties
│   ├── base.css        # Reset, typography, utilities
│   ├── components.css  # Buttons, cards, forms, navigation
│   └── sections.css    # Hero, about, services, portfolio, etc.
├── js/
│   ├── theme.js        # Dark/light mode toggle
│   ├── navigation.js   # Mobile menu, smooth scrolling
│   └── form.js         # Contact form validation & submission
├── images/
│   ├── hero/           # Hero section images
│   ├── projects/       # Portfolio screenshots
│   └── icons/          # Tech stack & social icons
├── CNAME               # Custom domain config
├── robots.txt          # SEO directives
└── sitemap.xml         # Site structure for search engines
```

---

## Development

### Local Development

**Option 1: VS Code Live Server**
1. Install "Live Server" extension
2. Right-click `index.html` → "Open with Live Server"
3. Site opens at `http://localhost:5500`

**Option 2: Python HTTP Server**
```bash
python -m http.server 8000
# Open http://localhost:8000
```

**Option 3: Node HTTP Server**
```bash
npx serve .
# Open http://localhost:3000
```

### Making Changes

1. **Content**: Edit `index.html` directly
2. **Styles**: Modify files in `css/` folder
3. **Behavior**: Update JavaScript in `js/` folder
4. **Images**: Add optimized images to `images/` folders

---

## Key Configurations

### Theme Colors (css/variables.css)

```css
:root {
  /* Primary color */
  --color-primary: #2680EB;
  --color-primary-hover: #1a6dd4;

  /* Light mode (default values overridden by dark) */
  --color-bg: #ffffff;
  --color-bg-secondary: #f5f5f5;
  --color-text: #1a1a1a;
  --color-text-secondary: #666666;
}

[data-theme="dark"] {
  --color-bg: #0d1117;
  --color-bg-secondary: #161b22;
  --color-text: #f0f6fc;
  --color-text-secondary: #8b949e;
}
```

### Contact Form (Formspree)

1. Create form at [formspree.io](https://formspree.io)
2. Get your form ID
3. Update form action in `index.html`:

```html
<form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Custom Domain

1. In GitHub repo settings → Pages → Custom domain: `mubeenf.com`
2. Ensure `CNAME` file contains: `mubeenf.com`
3. Configure DNS records at your domain registrar:
   - A record: `185.199.108.153` (and other GitHub IPs)
   - Or CNAME: `yourusername.github.io`

---

## Testing Checklist

### Functionality
- [ ] All navigation links scroll to correct sections
- [ ] Mobile menu opens/closes properly
- [ ] Theme toggle switches between dark/light modes
- [ ] Theme preference persists after page refresh
- [ ] Contact form validates inputs
- [ ] Contact form submits successfully
- [ ] Portfolio cards expand/collapse correctly

### Responsive Design
- [ ] Test at 320px width (minimum mobile)
- [ ] Test at 768px width (tablet)
- [ ] Test at 1024px width (laptop)
- [ ] Test at 1440px width (desktop)
- [ ] No horizontal scrolling at any size

### Performance
- [ ] Page loads in <3 seconds
- [ ] Images are optimized (WebP format)
- [ ] No console errors

### SEO & Accessibility
- [ ] All images have alt text
- [ ] Heading hierarchy is correct (h1 → h2 → h3)
- [ ] Meta tags are present and accurate
- [ ] Site works without JavaScript (basic content)

---

## Deployment

### GitHub Pages

1. Push changes to main branch:
```bash
git add .
git commit -m "Update portfolio content"
git push origin main
```

2. GitHub Pages automatically deploys from main branch

3. View live site at: `https://mubeenf.com` (or `https://username.github.io/repo`)

### Verifying Deployment

- Check GitHub Actions for deployment status
- Clear browser cache if changes don't appear
- Test all functionality on live site

---

## Common Tasks

### Adding a New Project

1. Add project screenshot to `images/projects/`
2. Add project card HTML in Portfolio section:

```html
<article class="project-card" data-project="new-project">
  <div class="project-summary">
    <h3>Project Name</h3>
    <p class="project-industry">Industry</p>
    <p class="project-outcome">Brief outcome description</p>
  </div>
  <div class="project-details">
    <h4>The Challenge</h4>
    <p>Problem description...</p>
    <h4>The Solution</h4>
    <p>Solution description...</p>
    <h4>Technologies</h4>
    <div class="tech-tags">
      <span>Python</span>
      <span>FastAPI</span>
    </div>
    <h4>Results</h4>
    <p>Outcome with metrics...</p>
  </div>
</article>
```

### Updating Testimonials

Add new testimonial in Testimonials section:

```html
<blockquote class="testimonial">
  <p>"Testimonial quote here..."</p>
  <cite>— Client Name, Project</cite>
</blockquote>
```

### Adding Tech Stack Icons

1. Add icon to `images/icons/` (SVG preferred, 48x48px)
2. Add item to Tech Stack section:

```html
<div class="tech-item">
  <img src="images/icons/tech-name.svg" alt="Technology Name">
  <span>Technology Name</span>
</div>
```

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Theme not persisting | Check localStorage is enabled in browser |
| Form not submitting | Verify Formspree form ID is correct |
| Images not loading | Check file paths are correct (case-sensitive) |
| Styles not updating | Hard refresh (Ctrl+Shift+R) or clear cache |
| GitHub Pages not updating | Wait 1-2 minutes; check Actions tab for errors |
| Custom domain not working | Verify DNS propagation (can take 24-48 hours) |
