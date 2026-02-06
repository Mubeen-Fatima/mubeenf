import { motion } from 'framer-motion';
import { SectionWrapper } from '../../ui/SectionWrapper';
import { techStack, techCategories } from '../../../data/techStack';
import './TechStack.css';

export function TechStack() {
  // Group tech items by category
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
      <div className="tech-categories">
        {groupedTech.map((group, categoryIndex) => (
          <motion.div
            key={group.category}
            className="tech-category"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
          >
            <h3 className="tech-category-title mono">{group.category}</h3>
            <div className="tech-items">
              {group.items.map((tech, techIndex) => (
                <motion.div
                  key={tech.id}
                  className="tech-item"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: categoryIndex * 0.1 + techIndex * 0.05
                  }}
                  whileHover={{ y: -4 }}
                >
                  <div className="tech-item-icon">
                    <span className="tech-icon-placeholder">{tech.name.charAt(0)}</span>
                  </div>
                  <span className="tech-item-name">{tech.name}</span>
                  <div className="tech-proficiency">
                    <div
                      className="tech-proficiency-bar"
                      style={{
                        width: tech.proficiency === 'primary' ? '100%' : '65%'
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
