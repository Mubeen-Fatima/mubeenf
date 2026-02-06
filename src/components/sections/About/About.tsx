import { motion } from 'framer-motion';
import { HiAcademicCap, HiBriefcase, HiCheckBadge } from 'react-icons/hi2';
import { SectionWrapper } from '../../ui/SectionWrapper';
import './About.css';

export function About() {
  return (
    <SectionWrapper
      id="about"
      title="About"
      subtitle="Get to know me and my journey"
    >
      <div className="about-content">
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="about-intro">
            I help businesses and startups deliver software projects faster, smarter,
            and more efficiently by combining <strong>Agile project management</strong> with{' '}
            <strong>AI-powered agentic workflows</strong>.
          </p>

          <p>
            From building autonomous AI agents to managing complex software projects,
            I bridge the gap between technology, operations, and business impact.
            As a Technical Software Project Manager, I leverage AI to automate
            operational tasks, optimize processes, and ensure projects are delivered
            on time and aligned with business goals.
          </p>

          <div className="about-highlights">
            <div className="highlight-item">
              <HiCheckBadge className="highlight-icon" />
              <div>
                <strong>100% Job Success Rate</strong>
                <span>on Upwork across all projects</span>
              </div>
            </div>
            <div className="highlight-item">
              <HiBriefcase className="highlight-icon" />
              <div>
                <strong>4+ Years Experience</strong>
                <span>in AI/ML, web dev, and automation</span>
              </div>
            </div>
            <div className="highlight-item">
              <HiAcademicCap className="highlight-icon" />
              <div>
                <strong>MS Software Project Management</strong>
                <span>FAST NUCES (2025-2027)</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="about-cards"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="about-card">
            <div className="about-card-header">
              <span className="mono text-primary">01</span>
              <h3>AI That Delivers ROI</h3>
            </div>
            <p>
              I don't just build AI tools—I build AI solutions that solve real
              business problems and deliver measurable results.
            </p>
          </div>

          <div className="about-card">
            <div className="about-card-header">
              <span className="mono text-primary">02</span>
              <h3>E-commerce Specialist</h3>
            </div>
            <p>
              Deep expertise in e-commerce automation, from order processing
              to customer support AI agents that scale with your business.
            </p>
          </div>

          <div className="about-card">
            <div className="about-card-header">
              <span className="mono text-primary">03</span>
              <h3>Fast Execution</h3>
            </div>
            <p>
              From idea to production quickly. Clean, maintainable,
              well-documented solutions that your team can build upon.
            </p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
