import { motion } from 'framer-motion';
import { HiArrowDown, HiSparkles } from 'react-icons/hi2';
import { Button } from '../../ui/Button';
import './Hero.css';

export function Hero() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPortfolio = () => {
    document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      {/* Animated Background */}
      <div className="hero-bg">
        <div className="hero-grid" />
        <div className="hero-glow" />
        <FloatingCode />
      </div>

      <div className="hero-content container">
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <HiSparkles />
          <span>Available for new projects</span>
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Hi, I'm <span className="text-gradient">Mubeen F.</span>
        </motion.h1>

        <motion.div
          className="hero-subtitle-wrapper"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="hero-subtitle mono">AI Agentic Engineer</span>
        </motion.div>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          I build AI-powered automation systems that think, decide, and act.
          Specializing in <strong>e-commerce automation</strong> and{' '}
          <strong>agentic workflows</strong> that deliver real ROI.
        </motion.p>

        <motion.div
          className="hero-stats"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="hero-stat">
            <span className="hero-stat-value">100%</span>
            <span className="hero-stat-label">Job Success</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="hero-stat-value">9+</span>
            <span className="hero-stat-label">Projects</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="hero-stat-value">$3.4k+</span>
            <span className="hero-stat-label">Earned</span>
          </div>
        </motion.div>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Button size="lg" onClick={scrollToContact}>
            Let's Work Together
          </Button>
          <Button variant="secondary" size="lg" onClick={scrollToPortfolio}>
            View My Work
          </Button>
        </motion.div>

        <motion.div
          className="hero-scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <HiArrowDown />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function FloatingCode() {
  const codeSnippets = [
    'async def', 'agent.run()', 'LangChain', 'RAG', 'vector_db',
    'await', 'openai', 'workflow', 'automate', 'API',
  ];

  return (
    <div className="floating-code">
      {codeSnippets.map((snippet, i) => (
        <motion.span
          key={i}
          className="code-snippet mono"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.15, 0],
            y: [-20, -100],
          }}
          transition={{
            duration: 8,
            delay: i * 0.8,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            left: `${10 + (i * 9)}%`,
            top: `${60 + (i % 3) * 15}%`,
          }}
        >
          {snippet}
        </motion.span>
      ))}
    </div>
  );
}
