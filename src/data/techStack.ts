import type { TechStackItem } from '../types';

export const techStack: TechStackItem[] = [
  // Languages
  { id: 'python', name: 'Python', category: 'Languages', proficiency: 'primary' },
  { id: 'typescript', name: 'TypeScript', category: 'Languages', proficiency: 'primary' },
  { id: 'javascript', name: 'JavaScript', category: 'Languages', proficiency: 'primary' },
  { id: 'sql', name: 'SQL', category: 'Languages', proficiency: 'secondary' },

  // AI & LLM
  { id: 'openai', name: 'OpenAI', category: 'AI & LLM', proficiency: 'primary' },
  { id: 'openaiagentssdk', name: 'OpenAI Agents SDK', category: 'AI & LLM', proficiency: 'primary' },
  { id: 'langchain', name: 'LangChain', category: 'AI & LLM', proficiency: 'primary' },
  { id: 'langgraph', name: 'LangGraph', category: 'AI & LLM', proficiency: 'primary' },
  { id: 'claude', name: 'Claude', category: 'AI & LLM', proficiency: 'primary' },
  { id: 'mcp', name: 'MCP', category: 'AI & LLM', proficiency: 'primary' },
  { id: 'rag', name: 'RAG Pipelines', category: 'AI & LLM', proficiency: 'primary' },
  { id: 'promptengineering', name: 'Prompt Engineering', category: 'AI & LLM', proficiency: 'primary' },

  // Vector Databases
  { id: 'qdrant', name: 'Qdrant', category: 'Vector Databases', proficiency: 'primary' },
  { id: 'pinecone', name: 'Pinecone', category: 'Vector Databases', proficiency: 'primary' },
  { id: 'chroma', name: 'Chroma', category: 'Vector Databases', proficiency: 'secondary' },

  // E-commerce AI
  { id: 'shopify', name: 'Shopify', category: 'E-commerce AI', proficiency: 'primary' },
  { id: 'woocommerce', name: 'WooCommerce', category: 'E-commerce AI', proficiency: 'primary' },
  { id: 'amazon', name: 'Amazon SP-API', category: 'E-commerce AI', proficiency: 'primary' },
  { id: 'orderautomation', name: 'Order Automation', category: 'E-commerce AI', proficiency: 'primary' },
  { id: 'inventoryai', name: 'Inventory AI', category: 'E-commerce AI', proficiency: 'primary' },
  { id: 'aisearch', name: 'AI Search', category: 'E-commerce AI', proficiency: 'primary' },

  // ML/DL
  { id: 'pytorch', name: 'PyTorch', category: 'ML/DL', proficiency: 'secondary' },
  { id: 'tensorflow', name: 'TensorFlow', category: 'ML/DL', proficiency: 'secondary' },
  { id: 'huggingface', name: 'Hugging Face', category: 'ML/DL', proficiency: 'secondary' },
  { id: 'scikitlearn', name: 'Scikit-learn', category: 'ML/DL', proficiency: 'secondary' },

  // Backend & APIs
  { id: 'fastapi', name: 'FastAPI', category: 'Backend & APIs', proficiency: 'primary' },
  { id: 'django', name: 'Django', category: 'Backend & APIs', proficiency: 'secondary' },
  { id: 'flask', name: 'Flask', category: 'Backend & APIs', proficiency: 'secondary' },
  { id: 'nodejs', name: 'Node.js', category: 'Backend & APIs', proficiency: 'secondary' },
  { id: 'react', name: 'React', category: 'Backend & APIs', proficiency: 'secondary' },

  // Cloud & DevOps
  { id: 'aws', name: 'AWS', category: 'Cloud & DevOps', proficiency: 'primary' },
  { id: 'azure', name: 'Azure', category: 'Cloud & DevOps', proficiency: 'primary' },
  { id: 'docker', name: 'Docker', category: 'Cloud & DevOps', proficiency: 'primary' },
  { id: 'kubernetes', name: 'Kubernetes', category: 'Cloud & DevOps', proficiency: 'secondary' },
  { id: 'cicd', name: 'CI/CD', category: 'Cloud & DevOps', proficiency: 'secondary' },
  { id: 'git', name: 'Git', category: 'Cloud & DevOps', proficiency: 'primary' },

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
  'Vector Databases',
  'E-commerce AI',
  'ML/DL',
  'Backend & APIs',
  'Cloud & DevOps',
  'Automation',
  'Project Management',
];
