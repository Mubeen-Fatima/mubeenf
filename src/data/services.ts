import type { Service } from '../types';

export const services: Service[] = [
  {
    id: 'ai-development',
    name: 'AI Development',
    description: 'Building autonomous AI agents that think, decide, and act. From RAG chatbots to complex agentic workflows.',
    icon: 'brain',
    offerings: [
      'AI Agents & Agentic Workflows',
      'RAG Applications',
      'Customer Care Automation',
      'AI Automation Workflows',
    ],
  },
  {
    id: 'automation',
    name: 'Automation',
    description: 'End-to-end business process automation that saves time, reduces costs, and scales with your business.',
    icon: 'cog',
    offerings: [
      'Business Process Automation',
      'Automation Bots',
      'Web & Browser Automation',
      'API Integrations',
      'Data Processing',
    ],
  },
  {
    id: 'project-management',
    name: 'Project Management',
    description: 'AI-enhanced project delivery combining Agile methodologies with intelligent automation.',
    icon: 'chart',
    offerings: [
      'AI-Driven PM',
      'Agile & Scrum Leadership',
      'Technical Program Management',
      'Release & Delivery Oversight',
      'Stakeholder Communication',
    ],
  },
];
