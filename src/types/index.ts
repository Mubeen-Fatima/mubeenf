export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  offerings: string[];
}

export interface Project {
  id: string;
  name: string;
  client: string;
  industry: string;
  problem: string;
  solution: string;
  technologies: string[];
  outcome: string;
  image?: string;
  url?: string;
  featured: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  projectRef?: string;
  role?: string;
}

export interface TechStackItem {
  id: string;
  name: string;
  category: string;
  icon?: string;
  proficiency: 'primary' | 'secondary';
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  label: string;
}

export interface SiteStats {
  jobSuccessRate: string;
  completedJobs: number;
  totalEarnings: string;
}
