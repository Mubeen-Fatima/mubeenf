import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronDown, HiArrowTopRightOnSquare } from 'react-icons/hi2';
import { SectionWrapper } from '../../ui/SectionWrapper';
import { projects } from '../../../data/projects';
import './Portfolio.css';

export function Portfolio() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <SectionWrapper
      id="portfolio"
      title="Portfolio"
      subtitle="Projects that delivered real results"
    >
      <div className="portfolio-featured">
        {featuredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            isExpanded={expandedId === project.id}
            onToggle={() => setExpandedId(expandedId === project.id ? null : project.id)}
          />
        ))}
      </div>

      {otherProjects.length > 0 && (
        <>
          <h3 className="portfolio-subtitle mono">Other Projects</h3>
          <div className="portfolio-others">
            {otherProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={featuredProjects.length + index}
                isExpanded={expandedId === project.id}
                onToggle={() => setExpandedId(expandedId === project.id ? null : project.id)}
                compact
              />
            ))}
          </div>
        </>
      )}
    </SectionWrapper>
  );
}

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
  compact?: boolean;
}

function ProjectCard({ project, index, isExpanded, onToggle, compact = false }: ProjectCardProps) {
  return (
    <motion.div
      className={`project-card ${compact ? 'project-card-compact' : ''} ${isExpanded ? 'expanded' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <button className="project-header" onClick={onToggle}>
        <div className="project-header-content">
          <span className="project-industry mono">{project.industry}</span>
          <h3 className="project-name">{project.name}</h3>
          <p className="project-summary">{project.outcome}</p>
        </div>
        <motion.div
          className="project-toggle"
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <HiChevronDown />
        </motion.div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="project-details"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="project-details-content">
              <div className="project-section">
                <h4>The Challenge</h4>
                <p>{project.problem}</p>
              </div>

              <div className="project-section">
                <h4>The Solution</h4>
                <p>{project.solution}</p>
              </div>

              <div className="project-section">
                <h4>Technologies</h4>
                <div className="project-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag mono">{tech}</span>
                  ))}
                </div>
              </div>

              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Visit Project <HiArrowTopRightOnSquare />
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
