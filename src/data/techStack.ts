import type { TechStackItem } from '../types';

export const techStack: TechStackItem[] = [
  // Languages
  { id: 'python', name: 'Python', category: 'Languages', proficiency: 'primary' },
  { id: 'javascript', name: 'JavaScript', category: 'Languages', proficiency: 'primary' },
  { id: 'typescript', name: 'TypeScript', category: 'Languages', proficiency: 'secondary' },

  // AI & LLM
  { id: 'openai', name: 'OpenAI', category: 'AI & LLM', proficiency: 'primary' },
  { id: 'langchain', name: 'LangChain', category: 'AI & LLM', proficiency: 'primary' },
  { id: 'langgraph', name: 'LangGraph', category: 'AI & LLM', proficiency: 'primary' },
  { id: 'claude', name: 'Claude', category: 'AI & LLM', proficiency: 'primary' },
  { id: 'mcp', name: 'MCP', category: 'AI & LLM', proficiency: 'secondary' },
  { id: 'rag', name: 'RAG Pipelines', category: 'AI & LLM', proficiency: 'primary' },
  { id: 'vectordb', name: 'Vector DBs', category: 'AI & LLM', proficiency: 'secondary' },

  // Development
  { id: 'fastapi', name: 'FastAPI', category: 'Development', proficiency: 'primary' },
  { id: 'react', name: 'React', category: 'Development', proficiency: 'primary' },
  { id: 'nodejs', name: 'Node.js', category: 'Development', proficiency: 'secondary' },
  { id: 'django', name: 'Django', category: 'Development', proficiency: 'secondary' },
  { id: 'restapi', name: 'REST APIs', category: 'Development', proficiency: 'primary' },

  // Automation
  { id: 'selenium', name: 'Selenium', category: 'Automation', proficiency: 'primary' },
  { id: 'playwright', name: 'Playwright', category: 'Automation', proficiency: 'secondary' },
  { id: 'scrapy', name: 'Scrapy', category: 'Automation', proficiency: 'secondary' },
  { id: 'zapier', name: 'Zapier', category: 'Automation', proficiency: 'secondary' },
  { id: 'n8n', name: 'n8n', category: 'Automation', proficiency: 'secondary' },

  // Project Management
  { id: 'jira', name: 'Jira', category: 'Project Management', proficiency: 'primary' },
  { id: 'clickup', name: 'ClickUp', category: 'Project Management', proficiency: 'secondary' },
  { id: 'notion', name: 'Notion', category: 'Project Management', proficiency: 'secondary' },
  { id: 'github', name: 'GitHub', category: 'Project Management', proficiency: 'primary' },
];

export const techCategories = [
  'Languages',
  'AI & LLM',
  'Development',
  'Automation',
  'Project Management',
];
