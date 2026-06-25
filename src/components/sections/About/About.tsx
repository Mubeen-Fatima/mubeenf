import { motion } from 'framer-motion';
import { HiSparkles, HiRocketLaunch, HiShoppingCart } from 'react-icons/hi2';
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
            I build <span className="text-gradient">production multi-agent and RAG systems</span> for
            e-commerce, healthcare, and enterprise clients. From automated order pipelines to intelligent
            document retrieval—I ship reliable, scalable AI that delivers measurable results.
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
            <HiShoppingCart />
          </div>
          <div className="bento-specialty-body">
            <h3>E-commerce AI</h3>
            <p>Multi-agent workflows for orders, inventory, support, and product discovery at scale.</p>
          </div>
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
          <div className="bento-specialty-body">
            <h3>Multi-Agent & RAG</h3>
            <p>LangChain, LangGraph, and OpenAI Agents SDK for complex enterprise workflows.</p>
          </div>
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
          <div className="bento-specialty-body">
            <h3>Production-Ready</h3>
            <p>From concept to deployment with clean, maintainable, scalable code.</p>
          </div>
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
