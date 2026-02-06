# Project Memory - Mubeen F. Portfolio

## Project Overview
- **Type:** Personal portfolio website for Mubeen F. - E-commerce AI Agents Builder
- **Tech Stack:** React + TypeScript + Vite
- **Styling:** CSS with CSS Variables, Framer Motion for animations
- **Icons:** react-icons (Simple Icons + Heroicons)

## Design System

### Brand Colors
- Primary: `#2680EB` (dark mode), `#1D6FD1` (light mode)
- Font: Plus Jakarta Sans (sans), IBM Plex Mono (mono)

### Theme Support
- Dark mode (default): Dark backgrounds (#09090B), light text
- Light mode: Light backgrounds (#FAFBFC), improved contrast

## Key Components & Features

### Hero Section
- Centered layout with greeting, bold name, title, description
- **Background Effects:**
  - Noise/grain texture overlay (SVG fractal noise)
  - Three animated gradient glows (blue center, light blue top-right, purple bottom-left)
  - 12 floating elements - mix of tech icons and code text
    - Icons: CodeBracket, CommandLine, Python, OpenAI, Sparkles, Cloud, CpuChip
    - Text: "AI", "async", "{ }", "</>", "api"
  - All with smooth Framer Motion animations
- "Available for projects" badge with pulse animation
- Single CTA button: "Contact Now"

### Tech Stack Section
- 3-column grid of category cards
- Categories: Languages, AI & LLM, E-commerce AI, Development, Automation, Project Management
- Tech pills with icons, primary skills highlighted in blue
- Added: UCP protocols, E-commerce AI tools (Shopify, WooCommerce, Amazon SP-API, etc.)

### Contact Section
- Two-column layout: info (left), form (right)
- Contact info: Response time, availability, timezone
- Social links integration
- Form fields: First Name, Last Name, Email, Project Details
- Formspree integration ready

### Navigation
- Fixed header with blur effect on scroll
- Mobile hamburger menu with full-screen overlay
- Theme toggle (dark/light)

## Light Mode Improvements
- Enhanced color contrast for text and borders
- Adjusted primary color for better visibility
- Added shadows to cards and forms
- Surface colors for better depth perception

## Files Modified
- `src/components/sections/Hero/Hero.tsx` - Hero with background effects
- `src/components/sections/Hero/Hero.css` - Hero styles with texture, gradients
- `src/components/sections/TechStack/TechStack.tsx` - Icons and categories
- `src/components/sections/TechStack/TechStack.css` - Light mode styles
- `src/components/sections/Contact/Contact.tsx` - Two-column layout
- `src/components/sections/Contact/Contact.css` - Light mode styles
- `src/data/techStack.ts` - Added UCP and E-commerce AI tools
- `src/styles/variables.css` - Light theme improvements
- `src/styles/base.css` - Light mode text gradient
- `src/components/ui/Button.css` - Light mode button styles
- `src/components/ui/SectionWrapper.css` - Light mode section styles
- `src/components/Navigation/Navigation.css` - Light mode nav styles

## Deployment
- Platform: GitHub Pages
- Build command: `npm run build`
- Output: `dist/` folder
