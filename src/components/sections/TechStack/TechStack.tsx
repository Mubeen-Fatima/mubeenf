import { motion } from 'framer-motion';
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiOpenai,
  SiReact,
  SiNodedotjs,
  SiFastapi,
  SiDjango,
  SiFlask,
  SiSelenium,
  SiZapier,
  SiJira,
  SiClickup,
  SiNotion,
  SiGithub,
  SiAnthropic,
  SiShopify,
  SiWoo,
  SiAmazon,
  SiPytorch,
  SiTensorflow,
  SiHuggingface,
  SiScikitlearn,
  SiDocker,
  SiKubernetes,
  SiGit,
} from 'react-icons/si';
import {
  HiCpuChip,
  HiCircleStack,
  HiCog6Tooth,
  HiLink,
  HiCommandLine,
  HiPlay,
  HiCodeBracket,
  HiSparkles,
  HiWrenchScrewdriver,
  HiClipboardDocumentList,
  HiShoppingCart,
  HiCube,
  HiMagnifyingGlass,
  HiArrowPath,
  HiSquare3Stack3D,
  HiCloud,
  HiBeaker,
  HiTableCells,
  HiServer,
} from 'react-icons/hi2';
import { SectionWrapper } from '../../ui/SectionWrapper';
import { techStack, techCategories } from '../../../data/techStack';
import './TechStack.css';

const techIcons: Record<string, React.ReactNode> = {
  // Languages
  python: <SiPython />,
  javascript: <SiJavascript />,
  typescript: <SiTypescript />,
  sql: <HiTableCells />,

  // AI & LLM
  openai: <SiOpenai />,
  openaiagentssdk: <SiOpenai />,
  langchain: <HiLink />,
  langgraph: <HiCpuChip />,
  claude: <SiAnthropic />,
  mcp: <HiCommandLine />,
  rag: <HiCircleStack />,
  promptengineering: <HiSparkles />,

  // Vector Databases
  qdrant: <HiServer />,
  pinecone: <HiSquare3Stack3D />,
  chroma: <HiCube />,

  // E-commerce AI
  shopify: <SiShopify />,
  woocommerce: <SiWoo />,
  amazon: <SiAmazon />,
  orderautomation: <HiArrowPath />,
  inventoryai: <HiCube />,
  aisearch: <HiMagnifyingGlass />,

  // ML/DL
  pytorch: <SiPytorch />,
  tensorflow: <SiTensorflow />,
  huggingface: <SiHuggingface />,
  scikitlearn: <SiScikitlearn />,

  // Backend & APIs
  fastapi: <SiFastapi />,
  react: <SiReact />,
  nodejs: <SiNodedotjs />,
  django: <SiDjango />,
  flask: <SiFlask />,
  restapi: <HiCog6Tooth />,

  // Cloud & DevOps
  aws: <SiAmazon />,
  azure: <HiCloud />,
  docker: <SiDocker />,
  kubernetes: <SiKubernetes />,
  cicd: <HiArrowPath />,
  git: <SiGit />,

  // Automation
  selenium: <SiSelenium />,
  playwright: <HiPlay />,
  scrapy: <SiPython />,
  zapier: <SiZapier />,
  n8n: <HiCog6Tooth />,

  // Project Management
  jira: <SiJira />,
  clickup: <SiClickup />,
  notion: <SiNotion />,
  github: <SiGithub />,
};

const categoryIcons: Record<string, React.ReactNode> = {
  'Languages': <HiCodeBracket />,
  'AI & LLM': <HiSparkles />,
  'Vector Databases': <HiCircleStack />,
  'E-commerce AI': <HiShoppingCart />,
  'ML/DL': <HiBeaker />,
  'Backend & APIs': <HiCpuChip />,
  'Cloud & DevOps': <HiCloud />,
  'Automation': <HiWrenchScrewdriver />,
  'Project Management': <HiClipboardDocumentList />,
};

export function TechStack() {
  const groupedTech = techCategories.map(category => ({
    category,
    items: techStack.filter(tech => tech.category === category)
  }));

  return (
    <SectionWrapper
      id="tech"
      title="Tech Stack"
      subtitle="Tools and technologies I work with"
      dark
    >
      <div className="tech-grid">
        {groupedTech.map((group, categoryIndex) => (
          <motion.div
            key={group.category}
            className="tech-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
          >
            <div className="tech-card-header">
              <div className="tech-card-icon">
                {categoryIcons[group.category]}
              </div>
              <h3 className="tech-card-title">{group.category}</h3>
            </div>

            <div className="tech-card-items">
              {group.items.map((tech, techIndex) => (
                <motion.div
                  key={tech.id}
                  className={`tech-pill ${tech.proficiency === 'primary' ? 'tech-pill-primary' : ''}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.2,
                    delay: categoryIndex * 0.05 + techIndex * 0.03
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="tech-pill-icon">
                    {techIcons[tech.id] || <HiCpuChip />}
                  </span>
                  <span className="tech-pill-name">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
