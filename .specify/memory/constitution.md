<!--
  ================== SYNC IMPACT REPORT ==================
  Version Change: 0.0.0 → 1.0.0 (MAJOR - Initial ratification)

  Modified Principles: N/A (initial creation)

  Added Sections:
    - I. Modern Minimalist Design
    - II. Client-Centric UX
    - III. Performance First
    - IV. SEO & Discoverability
    - V. Security & Privacy
    - VI. Maintainability
    - Design Standards
    - Content Guidelines
    - Governance

  Removed Sections: N/A (initial creation)

  Templates Requiring Updates:
    - plan-template.md: ✅ No changes needed (generic structure compatible)
    - spec-template.md: ✅ No changes needed (generic structure compatible)
    - tasks-template.md: ✅ No changes needed (generic structure compatible)

  Follow-up TODOs: None
  =========================================================
-->

# MubeenF Portfolio Constitution

## Core Principles

### I. Modern Minimalist Design

The portfolio MUST embody modern, clean aesthetics that reflect professionalism and technical expertise.

- Design MUST use generous whitespace to guide focus and reduce cognitive load
- Typography MUST be limited to 2 font families maximum (one for headings, one for body)
- Color palette MUST be restrained: primary brand color, neutral backgrounds, and strategic accent colors
- Visual hierarchy MUST be clear—visitors should understand page structure within 3 seconds
- Animations and transitions MUST be subtle and purposeful, never distracting
- Mobile-first responsive design is REQUIRED; all breakpoints must be tested
- Dark mode support SHOULD be considered for user preference

**Rationale**: As an AI Agentic Engineer, the portfolio must visually communicate precision, clarity, and modern technical thinking. Minimalism builds trust and keeps focus on services and results.

### II. Client-Centric UX

Every design decision MUST prioritize the prospective client's journey from discovery to contact.

- Navigation MUST be immediately clear with maximum 5 primary menu items
- Call-to-action (CTA) for contact MUST be visible on every page/section
- Portfolio projects MUST showcase outcomes and business impact, not just technical details
- Testimonials and social proof MUST be prominently displayed
- Services MUST be organized by client problem (automation, AI agents, project management)
- Contact form MUST be simple: Name, Email, Project Brief—no unnecessary fields
- Page load time MUST NOT exceed 3 seconds on 3G connections

**Rationale**: The primary goal is client acquisition. Every element should reduce friction between "visitor lands" and "visitor sends inquiry."

### III. Performance First

The website MUST be fast, accessible, and work reliably across all devices and network conditions.

- Core Web Vitals targets: LCP < 2.5s, FID < 100ms, CLS < 0.1
- Total page weight SHOULD NOT exceed 1MB (excluding hero images)
- Images MUST use modern formats (WebP/AVIF) with appropriate compression
- Critical CSS MUST be inlined; non-critical styles deferred
- JavaScript MUST be minimal and loaded asynchronously where possible
- Hosting MUST use CDN for global performance
- WCAG 2.1 Level AA accessibility compliance is REQUIRED

**Rationale**: Fast sites convert better. Performance demonstrates technical competence and respects users' time and bandwidth.

### IV. SEO & Discoverability

The portfolio MUST be optimized for search engines to support organic client acquisition.

- Each page MUST have unique, descriptive meta title and description
- Semantic HTML5 elements MUST be used correctly (header, main, article, section)
- Structured data (JSON-LD) MUST be implemented for Person and Services schemas
- URLs MUST be clean, descriptive, and lowercase
- Heading hierarchy MUST follow H1 → H2 → H3 without skipping levels
- Alt text MUST be provided for all meaningful images
- Sitemap and robots.txt MUST be properly configured

**Rationale**: Organic search is a sustainable client acquisition channel. Proper SEO compounds over time.

### V. Security & Privacy

User data MUST be protected, and the site MUST not introduce security vulnerabilities.

- HTTPS is REQUIRED with valid SSL certificate
- Contact form submissions MUST be validated server-side
- No sensitive data (API keys, credentials) in client-side code
- Third-party scripts MUST be audited and minimized
- Privacy policy MUST be present if collecting any user data
- Form submissions SHOULD include honeypot or rate limiting for spam protection
- No tracking without explicit consent where legally required

**Rationale**: Security reflects professionalism. Vulnerabilities on a tech professional's portfolio would undermine credibility.

### VI. Maintainability

The codebase MUST be easy to update and extend without specialized knowledge.

- Code MUST be well-organized with clear file/folder structure
- CSS MUST use consistent naming conventions (BEM or similar)
- Content SHOULD be separable from presentation (consider headless CMS for blog if included)
- Dependencies MUST be kept minimal and up-to-date
- Build process MUST be documented in README
- Version control (Git) is REQUIRED with meaningful commit messages

**Rationale**: The portfolio will evolve. Maintainable code ensures future updates are quick and low-risk.

## Design Standards

### Brand Identity

| Element | Specification |
|---------|---------------|
| Primary Color | Professional blue or dark theme reflecting AI/tech industry |
| Typography | Sans-serif for modern, clean readability (e.g., Inter, Plus Jakarta Sans) |
| Logo | "MF" monogram or "mubeenf" wordmark, clean and scalable |
| Imagery | High-quality project screenshots, minimal stock photos |
| Icons | Consistent icon set (outline or filled, not mixed) |

### Required Sections

1. **Hero**: Name, tagline ("AI Agentic Engineer"), CTA
2. **About**: Brief professional bio emphasizing AI agents and automation
3. **Services**: AI Development, Automation, Project Management (from reference data)
4. **Portfolio**: Featured projects with outcomes (uni-com.app, healthplansofnc.com)
5. **Testimonials**: Client quotes with attribution
6. **Tech Stack**: Visual representation of tools and technologies
7. **Contact**: Simple form + email + social links (LinkedIn, Upwork)
8. **Footer**: Copyright, quick links, social proof stats

### Project Showcase Format

Each portfolio item MUST include:
- Project name and client industry
- Problem statement (what business challenge was solved)
- Solution approach (technologies and methods used)
- Results/outcomes (quantifiable where possible)
- Visual (screenshot, demo link, or case study link)

## Content Guidelines

### Voice & Tone

- Professional but approachable
- Results-oriented language emphasizing business outcomes
- Technical depth available but not overwhelming
- Active voice preferred
- No jargon without context

### Key Messages to Convey

1. **100% job success rate** - reliability and quality
2. **AI agents that deliver ROI** - business value focus
3. **E-commerce automation specialist** - niche expertise
4. **Fast execution from idea to production** - efficiency
5. **Clean, maintainable, well-documented solutions** - professionalism

## Governance

This constitution serves as the authoritative guide for all design and development decisions on the mubeenf.com portfolio project.

### Amendment Process

1. Proposed changes MUST be documented with rationale
2. Changes affecting core principles require explicit approval
3. All amendments MUST update the version number appropriately
4. Migration plan REQUIRED for breaking changes

### Compliance

- All pull requests/reviews MUST verify alignment with these principles
- Complexity beyond minimum viable MUST be justified
- Deviations from constitution require documented exception

### Versioning Policy

- MAJOR: Principle removal or redefinition
- MINOR: New principle or section added
- PATCH: Clarifications, typos, non-semantic refinements

**Version**: 1.0.0 | **Ratified**: 2026-02-05 | **Last Amended**: 2026-02-05
