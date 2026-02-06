# Data Model: Static Portfolio Website

**Feature**: 1-static-portfolio
**Date**: 2026-02-05

## Overview

This is a static website with no backend database. All content is embedded directly in HTML or loaded from static JSON files. This document defines the logical data structures used to organize content.

---

## Entities

### Service

Represents a service category offered by Mubeen.

```typescript
interface Service {
  id: string;              // Unique identifier (e.g., "ai-development")
  name: string;            // Display name (e.g., "AI Development")
  description: string;     // Brief description (1-2 sentences)
  icon: string;            // Icon identifier or path
  offerings: string[];     // List of specific services within category
}
```

**Instances** (from profile-reference.md):

| id | name | offerings |
|----|------|-----------|
| ai-development | AI Development | AI Agents & Agentic Workflows, RAG Applications, Customer Care Automation, AI Automation Workflows |
| automation | Automation | Business Process Automation, Automation Bots, Web & Browser Automation, API Integrations, Data Processing |
| project-management | Project Management | AI-Driven PM, Agile & Scrum Leadership, Technical Program Management, Release & Delivery Oversight, Stakeholder Communication |

---

### Project

Represents a portfolio item showcasing past work.

```typescript
interface Project {
  id: string;              // Unique identifier (e.g., "uni-com")
  name: string;            // Project name
  client: string;          // Client name or "Personal Project"
  industry: string;        // Client industry (e.g., "E-commerce", "Healthcare")
  problem: string;         // Business challenge (1-2 sentences)
  solution: string;        // How it was solved (1-2 sentences)
  technologies: string[];  // Tech stack used
  outcome: string;         // Results/impact (quantifiable if possible)
  image: string;           // Path to project screenshot
  url?: string;            // Optional: Live project URL
  featured: boolean;       // Whether to highlight prominently
}
```

**Instances** (from profile-reference.md):

| id | name | industry | featured |
|----|------|----------|----------|
| uni-com | Uni-Com | E-commerce | true |
| healthplans-nc | Health Plans of NC | Healthcare | true |
| sophie | Sophie | Personal Assistant | true |
| books-bot | Books Bot | Education | true |
| social-media-bots | Social Media Bots | Marketing | false |
| restaurant-system | Restaurant Web System | Hospitality | false |
| llama3-assistant | LLAMA 3 Assistant | Edge AI | false |
| rag-chatbot | RAG Chatbot (Botpress) | Customer Service | false |

---

### Testimonial

Represents client feedback.

```typescript
interface Testimonial {
  id: string;              // Unique identifier
  quote: string;           // Client's testimonial text
  clientName: string;      // Client name or anonymized identifier
  projectRef?: string;     // Optional: Reference to Project.id
  role?: string;           // Optional: Client's role/title
}
```

**Instances** (from profile-reference.md):

| id | clientName | projectRef |
|----|------------|------------|
| rag-chatbot-client | RAG Chatbot Client | rag-chatbot |
| llama3-client | LLAMA 3 Assistant Client | llama3-assistant |
| restaurant-client | Restaurant System Client | restaurant-system |
| python-tutoring-client | Python Tutoring Client | N/A |

---

### TechStackItem

Represents a technology in the skills section.

```typescript
interface TechStackItem {
  id: string;              // Unique identifier
  name: string;            // Technology name
  category: string;        // Category (e.g., "Languages", "AI & LLM", "Development")
  icon: string;            // Path to icon or icon identifier
  proficiency: "primary" | "secondary";  // Skill level for display emphasis
}
```

**Categories** (from profile-reference.md):
- Languages: Python, JavaScript
- AI & LLM: OpenAI APIs, LangGraph, Claude, MCP, RAG Pipelines, Vector DBs
- Development: FastAPI, REST APIs, Node.js, React JS, Django
- Automation: Selenium, Playwright, Scrapy, Zapier, Make.com, n8n
- Project Management: Jira, ClickUp, Confluence, Notion, GitHub

---

### SocialLink

Represents external profile links.

```typescript
interface SocialLink {
  platform: string;        // Platform name
  url: string;             // Profile URL
  icon: string;            // Icon identifier
  label: string;           // Accessible label
}
```

**Instances**:

| platform | url |
|----------|-----|
| Email | mailto:mubeenfatima.cs@gmail.com |
| LinkedIn | https://www.linkedin.com/in/mubeenf/ |
| Upwork | https://www.upwork.com/freelancers/mubee |
| GitHub | (to be added if applicable) |

---

### SiteMetadata

Global site configuration.

```typescript
interface SiteMetadata {
  title: string;           // "Mubeen F. | AI Agentic Engineer"
  description: string;     // Meta description for SEO
  author: string;          // "Mubeen F."
  url: string;             // "https://mubeenf.com"
  image: string;           // Open Graph image path
  themeColor: string;      // "#2680EB"

  stats: {
    jobSuccessRate: string;    // "100%"
    completedJobs: number;     // 9
    totalEarnings: string;     // "$3,400+"
  };
}
```

---

## Content Storage

For a static site, content can be stored in:

1. **Inline HTML**: Direct embedding in index.html (simplest)
2. **JSON files**: Separate data files loaded via fetch (more maintainable)
3. **JavaScript modules**: Exported data objects (easy typing)

**Recommendation**: Use inline HTML for this project to avoid additional fetch requests and maintain simplicity per Constitution VI. Content is relatively static and updates are infrequent.

---

## Relationships

```
┌─────────────┐     references      ┌─────────────────┐
│ Testimonial │────────────────────▶│     Project     │
└─────────────┘                     └─────────────────┘
                                           │
                                           │ uses
                                           ▼
                                    ┌─────────────────┐
                                    │  TechStackItem  │
                                    └─────────────────┘

┌─────────────┐
│   Service   │  (standalone - no relationships)
└─────────────┘

┌─────────────┐
│ SocialLink  │  (standalone - no relationships)
└─────────────┘
```

---

## Validation Rules

| Entity | Field | Rule |
|--------|-------|------|
| Project | technologies | Must reference valid TechStackItem.name values |
| Testimonial | projectRef | Must reference valid Project.id (if provided) |
| Service | offerings | Minimum 3 items per category |
| SocialLink | url | Must be valid URL format |
| All | id | Must be unique within entity type, lowercase, hyphenated |
