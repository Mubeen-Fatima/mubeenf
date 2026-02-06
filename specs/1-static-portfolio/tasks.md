# Tasks: Static Portfolio Website

**Input**: Design documents from `/specs/1-static-portfolio/`
**Prerequisites**: plan.md (required), spec.md (required), research.md, data-model.md, contracts/
**Framework**: React JS with Vite (user-specified override)
**Design Approach**: Use `/frontend-design` skill for high-quality, distinctive UI implementation

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (US1, US2, US3, US4, US5)
- Include exact file paths in descriptions

---

## Phase 1: Setup (Project Infrastructure)

**Purpose**: Initialize React + Vite project configured for GitHub Pages static deployment

- [ ] T001 Initialize Vite React TypeScript project with `npm create vite@latest . -- --template react-ts`
- [ ] T002 [P] Configure vite.config.ts for GitHub Pages (base path, build output to /docs)
- [ ] T003 [P] Create .gitignore with Node.js/React patterns (node_modules, dist, .env)
- [ ] T004 [P] Set up project folder structure: src/components, src/styles, src/data, src/hooks, src/types
- [ ] T005 [P] Create TypeScript interfaces in src/types/index.ts for Service, Project, Testimonial, TechStackItem, SocialLink
- [ ] T006 Install dependencies: react-icons (icons), framer-motion (animations)
- [ ] T007 [P] Create CSS custom properties in src/styles/variables.css with theme colors (#2680EB primary, dark/light modes)
- [ ] T008 [P] Create base styles in src/styles/base.css with reset, typography, utilities

**Checkpoint**: Project builds and runs with `npm run dev`

---

## Phase 2: Foundational (Theme System & Layout)

**Purpose**: Build core infrastructure that ALL user stories depend on - BLOCKS all story phases

- [ ] T009 Create ThemeContext with useTheme hook in src/contexts/ThemeContext.tsx (localStorage persistence, dark default)
- [ ] T010 Create ThemeProvider wrapper in src/App.tsx that applies data-theme attribute to document
- [ ] T011 [P] Create Layout component in src/components/Layout/Layout.tsx with header/main/footer structure
- [ ] T012 [P] Create reusable Button component in src/components/ui/Button.tsx with primary/secondary/ghost variants
- [ ] T013 [P] Create reusable Card component in src/components/ui/Card.tsx for services and projects
- [ ] T014 [P] Create SectionWrapper component in src/components/ui/SectionWrapper.tsx for consistent section spacing
- [ ] T015 Create Navigation component in src/components/Navigation/Navigation.tsx with 5 nav items (Home, About, Services, Portfolio, Contact)
- [ ] T016 Implement smooth scroll navigation using native scrollIntoView with behavior: smooth

**Checkpoint**: App renders with theme toggle functional, navigation works - user stories can begin

---

## Phase 3: User Story 1 - Discover Mubeen's Services (Priority: P1)

**Goal**: Visitor understands value proposition within 10 seconds of landing

**Independent Test**: Load homepage, verify name/title/CTA visible within 3 seconds, services section shows 3 categories

### Implementation for User Story 1

- [ ] T017 [US1] Create Hero section in src/components/sections/Hero/Hero.tsx with name "Mubeen F.", title "AI Agentic Engineer", CTA button
- [ ] T018 [P] [US1] Style Hero with gradient background, animated entrance, responsive layout in src/components/sections/Hero/Hero.css
- [ ] T019 [US1] Create About section in src/components/sections/About/About.tsx with bio, experience summary, 100% success rate stat
- [ ] T020 [P] [US1] Create stats display component showing job success rate, completed jobs, earnings in src/components/About/Stats.tsx
- [ ] T021 [US1] Create Services section in src/components/sections/Services/Services.tsx
- [ ] T022 [US1] Create ServiceCard component in src/components/Services/ServiceCard.tsx with icon, name, description, offerings list
- [ ] T023 [US1] Add services data in src/data/services.ts with 3 categories from data-model.md (AI Development, Automation, Project Management)
- [ ] T024 [US1] Wire Hero CTA to scroll to Contact section

**Checkpoint**: US1 complete - Hero, About, Services sections render with real content

---

## Phase 4: User Story 2 - View Portfolio Projects (Priority: P1)

**Goal**: Visitor sees project examples with expandable details showing problem/solution/outcome

**Independent Test**: Navigate to Portfolio, verify 6+ projects display, click card expands to show full details

### Implementation for User Story 2

- [ ] T025 [US2] Create Portfolio section in src/components/sections/Portfolio/Portfolio.tsx
- [ ] T026 [US2] Create ProjectCard component in src/components/Portfolio/ProjectCard.tsx with collapsed/expanded states
- [ ] T027 [US2] Implement accordion expand/collapse animation using framer-motion in ProjectCard
- [ ] T028 [P] [US2] Add projects data in src/data/projects.ts with 8 projects from data-model.md (uni-com, healthplans-nc, sophie, books-bot, etc.)
- [ ] T029 [US2] Style ProjectCard with problem/solution/outcome sections visible on expand in src/components/Portfolio/ProjectCard.css
- [ ] T030 [P] [US2] Create TechStack section in src/components/sections/TechStack/TechStack.tsx with categorized technology icons
- [ ] T031 [P] [US2] Add tech stack data in src/data/techStack.ts with categories: Languages, AI & LLM, Development, Automation, PM tools
- [ ] T032 [US2] Create TechBadge component in src/components/TechStack/TechBadge.tsx for individual technology display

**Checkpoint**: US2 complete - Portfolio shows projects with working accordion, TechStack displays skills

---

## Phase 5: User Story 3 - Contact Mubeen (Priority: P1)

**Goal**: Visitor can submit inquiry via simple form with clear feedback

**Independent Test**: Fill contact form, submit, verify success message appears

### Implementation for User Story 3

- [ ] T033 [US3] Create Contact section in src/components/sections/Contact/Contact.tsx
- [ ] T034 [US3] Create ContactForm component in src/components/Contact/ContactForm.tsx with Name, Email, Project Brief fields
- [ ] T035 [US3] Implement form validation (required fields, email format) with inline error messages
- [ ] T036 [US3] Integrate Formspree submission with fetch API, handle success/error states
- [ ] T037 [P] [US3] Add honeypot field for spam protection (hidden input)
- [ ] T038 [P] [US3] Create SocialLinks component in src/components/Contact/SocialLinks.tsx with Email, LinkedIn, Upwork icons
- [ ] T039 [US3] Add social links data in src/data/socialLinks.ts
- [ ] T040 [US3] Create Testimonials section in src/components/sections/Testimonials/Testimonials.tsx with client quotes
- [ ] T041 [P] [US3] Add testimonials data in src/data/testimonials.ts from data-model.md

**Checkpoint**: US3 complete - Contact form validates, submits to Formspree, shows feedback, testimonials display

---

## Phase 6: User Story 4 - Dark/Light Mode Toggle (Priority: P2)

**Goal**: Visitor can toggle theme with instant switch and persistence across sessions

**Independent Test**: Click theme toggle, verify colors change within 200ms, refresh page, verify theme persists

### Implementation for User Story 4

- [ ] T042 [US4] Create ThemeToggle component in src/components/ui/ThemeToggle.tsx with sun/moon icon toggle
- [ ] T043 [US4] Add ThemeToggle to Navigation header (desktop) and mobile menu
- [ ] T044 [US4] Implement instant theme switch with CSS transition (no flicker)
- [ ] T045 [US4] Verify dark mode is default for first-time visitors (no localStorage key)
- [ ] T046 [P] [US4] Test theme persistence - localStorage reads on mount, writes on toggle

**Checkpoint**: US4 complete - Theme toggles instantly, persists across page refreshes

---

## Phase 7: User Story 5 - Mobile Navigation (Priority: P2)

**Goal**: Site is fully usable on mobile devices from 320px width

**Independent Test**: View at 320px viewport, verify all content accessible, mobile menu works, forms touch-friendly

### Implementation for User Story 5

- [ ] T047 [US5] Create MobileMenu component in src/components/Navigation/MobileMenu.tsx with hamburger icon and slide-out drawer
- [ ] T048 [US5] Implement mobile menu open/close with framer-motion animation
- [ ] T049 [US5] Add responsive breakpoints to all section CSS (320px, 640px, 768px, 1024px, 1280px)
- [ ] T050 [P] [US5] Ensure touch-friendly tap targets (min 44px) for buttons and form inputs
- [ ] T051 [US5] Test and fix Hero section responsive layout at all breakpoints
- [ ] T052 [P] [US5] Test and fix Services/Portfolio grid layouts at mobile breakpoints
- [ ] T053 [US5] Test and fix Contact form layout for mobile

**Checkpoint**: US5 complete - Site fully functional at 320px, no horizontal scroll, touch-friendly

---

## Phase 8: Polish & Deployment

**Purpose**: SEO, accessibility, performance optimization, GitHub Pages deployment

- [ ] T054 [P] Create Footer component in src/components/sections/Footer/Footer.tsx with copyright, quick links, social proof stats
- [ ] T055 [P] Add meta tags to index.html: title, description, Open Graph, Twitter Card
- [ ] T056 [P] Add JSON-LD structured data for Person and ProfessionalService schemas in index.html
- [ ] T057 [P] Create public/robots.txt with standard directives
- [ ] T058 [P] Create public/sitemap.xml with site structure
- [ ] T059 Add public/CNAME file with mubeenf.com for custom domain
- [ ] T060 [P] Optimize images: convert to WebP, add lazy loading, responsive srcset
- [ ] T061 Accessibility audit: ARIA labels on interactive elements, heading hierarchy (h1→h2→h3), alt text on images
- [ ] T062 [P] Add loading states and error boundaries for graceful degradation
- [ ] T063 Configure GitHub Actions workflow in .github/workflows/deploy.yml for automatic deployment on push
- [ ] T064 Final build and deploy: `npm run build`, push to main, verify at mubeenf.com

---

## Dependencies & Execution Order

### Phase Dependencies

```
Phase 1 (Setup)
    │
    ▼
Phase 2 (Foundational) ──── BLOCKS ALL USER STORIES
    │
    ├──▶ Phase 3 (US1: Discover Services) ─┐
    │                                       │
    ├──▶ Phase 4 (US2: Portfolio) ─────────┤ Can run in
    │                                       │ priority order
    ├──▶ Phase 5 (US3: Contact) ───────────┤ or parallel
    │                                       │
    ├──▶ Phase 6 (US4: Theme Toggle) ──────┤
    │                                       │
    └──▶ Phase 7 (US5: Mobile) ────────────┘
                    │
                    ▼
            Phase 8 (Polish)
```

### User Story Independence

Each user story (US1-US5) is independently testable after Phase 2:
- **US1**: Requires Hero, About, Services sections
- **US2**: Requires Portfolio, TechStack sections
- **US3**: Requires Contact, Testimonials sections
- **US4**: Requires ThemeToggle integration
- **US5**: Requires responsive CSS across all sections

### Parallel Opportunities per Phase

**Phase 1**: T002, T003, T004, T005, T007, T008 can run in parallel
**Phase 2**: T011, T012, T013, T014 can run in parallel
**Phase 3**: T018, T020 can run in parallel after dependencies
**Phase 4**: T028, T030, T031 can run in parallel
**Phase 5**: T037, T038, T041 can run in parallel
**Phase 6**: T046 can run in parallel with T042-T045
**Phase 7**: T050, T052 can run in parallel
**Phase 8**: T054, T055, T056, T057, T058, T060, T062 can all run in parallel

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 1 (Discover Services)
4. **STOP and VALIDATE**: Test Hero, About, Services independently
5. Deploy MVP if ready

### Incremental Delivery

1. Setup + Foundational → Foundation ready
2. Add US1 (Services) → Test → Deploy (MVP!)
3. Add US2 (Portfolio) → Test → Deploy
4. Add US3 (Contact) → Test → Deploy
5. Add US4 (Theme) → Test → Deploy
6. Add US5 (Mobile) → Test → Deploy
7. Polish + Deploy final

---

## Summary

| Metric | Count |
|--------|-------|
| Total Tasks | 64 |
| Phase 1 (Setup) | 8 |
| Phase 2 (Foundational) | 8 |
| Phase 3 (US1) | 8 |
| Phase 4 (US2) | 8 |
| Phase 5 (US3) | 9 |
| Phase 6 (US4) | 5 |
| Phase 7 (US5) | 7 |
| Phase 8 (Polish) | 11 |
| Parallel Opportunities | 25+ tasks marked [P] |

**MVP Scope**: Tasks T001-T024 (Setup + Foundational + US1) = 24 tasks

**Frontend Design**: Use `/frontend-design` skill for T017-T018 (Hero), T025-T029 (Portfolio), T033-T034 (Contact) to ensure distinctive, high-quality UI that avoids generic AI aesthetics.
