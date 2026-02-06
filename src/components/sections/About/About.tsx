import { motion } from 'framer-motion';
import { HiSparkles, HiRocketLaunch, HiCpuChip } from 'react-icons/hi2';
import { SectionWrapper } from '../../ui/SectionWrapper';
import './About.css';

export function About() {
  return (
    <SectionWrapper
      id="about"
      title="About"
      subtitle="Who I am"
    >
      <div className="about-bento">
        {/* Main intro card - large */}
        <motion.div
          className="bento-card bento-main"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bento-glow" />
          <p className="bento-intro">
            I build <span className="text-gradient">autonomous AI systems</span> that help businesses
            operate smarter. From e-commerce automation to complex agentic workflows—I turn ideas
            into production-ready solutions.
          </p>
        </motion.div>

        {/* Specialty cards */}
        <motion.div
          className="bento-card bento-specialty"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ y: -5 }}
        >
          <div className="bento-icon">
            <HiCpuChip />
          </div>
          <h3>E-commerce AI Builder</h3>
          <p>AI agents for orders, support, and product discovery at scale.</p>
        </motion.div>

        <motion.div
          className="bento-card bento-specialty"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ y: -5 }}
        >
          <div className="bento-icon">
            <HiSparkles />
          </div>
          <h3>ROI-Focused</h3>
          <p>Solutions that solve real problems and deliver measurable results.</p>
        </motion.div>

        <motion.div
          className="bento-card bento-specialty"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ y: -5 }}
        >
          <div className="bento-icon">
            <HiRocketLaunch />
          </div>
          <h3>Fast Execution</h3>
          <p>From concept to production with clean, maintainable code.</p>
        </motion.div>

        {/* Code snippet decoration */}
        <motion.div
          className="bento-card bento-code"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="code-header">
            <span className="code-dot code-dot-red" />
            <span className="code-dot code-dot-yellow" />
            <span className="code-dot code-dot-green" />
            <span className="code-title mono">agent.py</span>
          </div>
          <pre className="code-content mono">
            <code>
              <span className="code-keyword">async def</span>{' '}
              <span className="code-function">process_order</span>(order):
              {'\n'}    agent = <span className="code-class">AIAgent</span>(
              {'\n'}        model=<span className="code-string">"gpt-4"</span>,
              {'\n'}        tools=[inventory, shipping]
              {'\n'}    )
              {'\n'}    <span className="code-keyword">return await</span> agent.<span className="code-function">execute</span>(order)
            </code>
          </pre>
        </motion.div>

        {/* Stats card */}
        <motion.div
          className="bento-card bento-stats"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="stat-item">
            <span className="stat-number">4+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-number">AI/ML</span>
            <span className="stat-label">Specialization</span>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
