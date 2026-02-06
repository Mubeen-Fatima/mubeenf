import type { Service } from '../types';

export const services: Service[] = [
  {
    id: 'ai-workflows',
    name: 'AI Workflow Automation',
    description: 'End-to-end AI-powered workflow automation that transforms how your business operates.',
    icon: 'brain',
    offerings: [
      'Custom AI Agents',
      'Process Automation',
      'Intelligent Document Processing',
      'Automated Decision Making',
    ],
  },
  {
    id: 'ecommerce-ai',
    name: 'E-commerce AI Agents',
    description: 'AI agents designed specifically for e-commerce merchants to scale operations effortlessly.',
    icon: 'cart',
    offerings: [
      'UCP Integration',
      'AI Search Optimization',
      'Order Automation',
      'Customer Support Agents',
    ],
  },
  {
    id: 'project-management',
    name: 'Project Management',
    description: 'Strategic project leadership combining Agile methodologies with modern tooling.',
    icon: 'chart',
    offerings: [
      'Agile & Scrum',
      'Technical Program Management',
      'Stakeholder Communication',
      'Delivery Oversight',
    ],
  },
];
