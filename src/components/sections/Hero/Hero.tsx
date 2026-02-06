import { motion } from 'framer-motion';
import {
  HiCodeBracket,
  HiCpuChip,
  HiCommandLine,
  HiSparkles,
  HiCloud
} from 'react-icons/hi2';
import { SiPython, SiOpenai } from 'react-icons/si';
import { Button } from '../../ui/Button';
import './Hero.css';

export function Hero() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Floating tech elements - mix of icons and text
  const floatingElements = [
    { content: <HiCodeBracket />, x: '6%', y: '22%', type: 'icon' },
    { content: 'AI', x: '90%', y: '18%', type: 'text' },
    { content: <HiCommandLine />, x: '8%', y: '68%', type: 'icon' },
    { content: 'async', x: '88%', y: '62%', type: 'text' },
    { content: <SiPython />, x: '4%', y: '45%', type: 'icon' },
    { content: <HiSparkles />, x: '92%', y: '40%', type: 'icon' },
    { content: '{ }', x: '14%', y: '82%', type: 'text' },
    { content: <HiCloud />, x: '85%', y: '78%', type: 'icon' },
    { content: <SiOpenai />, x: '12%', y: '35%', type: 'icon' },
    { content: '</>', x: '86%', y: '30%', type: 'text' },
    { content: <HiCpuChip />, x: '3%', y: '58%', type: 'icon' },
    { content: 'api', x: '94%', y: '52%', type: 'text' },
  ];

  return (
    <section id="home" className="hero">
      {/* Noise Texture Overlay */}
      <div className="hero-texture" />

      {/* Animated Background */}
      <div className="hero-bg">
        {/* Primary gradient - center */}
        <motion.div
          className="hero-gradient hero-gradient-1"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.4, 0.25],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Secondary gradient - top right */}
        <motion.div
          className="hero-gradient hero-gradient-2"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Tertiary gradient - bottom left */}
        <motion.div
          className="hero-gradient hero-gradient-3"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating tech icons and text */}
        {floatingElements.map((item, index) => (
          <motion.div
            key={index}
            className={`hero-float-item ${item.type === 'text' ? 'hero-float-text' : 'hero-float-icon'}`}
            style={{ left: item.x, top: item.y }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.2, 0.35, 0.2],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 5 + index * 0.3,
              delay: index * 0.15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {item.content}
          </motion.div>
        ))}
      </div>

      <div className="hero-content container">
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <span className="hero-badge-dot" />
          <span>Available for projects</span>
        </motion.div>

        <motion.p
          className="hero-greeting"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          Hello, I am
        </motion.p>

        <motion.h1
          className="hero-name"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Mubeen F.
        </motion.h1>

        <motion.h2
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <span className="text-gradient">E-commerce AI Agents</span> Builder
        </motion.h2>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          I create autonomous AI systems for e-commerce automation and agentic workflows
          that help businesses operate smarter and scale faster.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button onClick={scrollToContact}>
            Contact Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
