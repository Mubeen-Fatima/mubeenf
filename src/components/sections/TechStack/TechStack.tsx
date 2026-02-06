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
  HiDocumentText,
  HiArrowPath,
  HiSquare3Stack3D,
} from 'react-icons/hi2';
import { SectionWrapper } from '../../ui/SectionWrapper';
import { techStack, techCategories } from '../../../data/techStack';
import './TechStack.css';

// Icon mapping for each tech
const techIcons: Record<string, React.ReactNode> = {
  python: <SiPython />,
  javascript: <SiJavascript />,
  typescript: <SiTypescript />,
  openai: <SiOpenai />,
  langchain: <HiLink />,
  langgraph: <HiCpuChip />,
  claude: <SiAnthropic />,
  mcp: <HiCommandLine />,
  ucp: <HiSquare3Stack3D />,
  rag: <HiCircleStack />,
  vectordb: <HiCircleStack />,
  shopify: <SiShopify />,
  woocommerce: <SiWoo />,
  amazon: <SiAmazon />,
  orderautomation: <HiArrowPath />,
  inventoryai: <HiCube />,
  aisearch: <HiMagnifyingGlass />,
  productfeed: <HiDocumentText />,
  fastapi: <SiFastapi />,
  react: <SiReact />,
  nodejs: <SiNodedotjs />,
  django: <SiDjango />,
  restapi: <HiCog6Tooth />,
  selenium: <SiSelenium />,
  playwright: <HiPlay />,
  scrapy: <SiPython />,
  zapier: <SiZapier />,
  n8n: <HiCog6Tooth />,
  jira: <SiJira />,
  clickup: <SiClickup />,
  notion: <SiNotion />,
  github: <SiGithub />,
};

// Category icons
const categoryIcons: Record<string, React.ReactNode> = {
  'Languages': <HiCodeBracket />,
  'AI & LLM': <HiSparkles />,
  'E-commerce AI': <HiShoppingCart />,
  'Development': <HiCpuChip />,
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
