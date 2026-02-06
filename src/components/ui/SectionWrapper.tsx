import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import './SectionWrapper.css';

interface SectionWrapperProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
}

export function SectionWrapper({
  id,
  title,
  subtitle,
  children,
  className = '',
  dark = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`section-wrapper ${dark ? 'section-dark' : ''} ${className}`}
    >
      <div className="container">
        {(title || subtitle) && (
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            {title && (
              <h2 className="section-title">
                <span className="section-title-hash mono">#</span>
                {title}
              </h2>
            )}
            {subtitle && <p className="section-subtitle">{subtitle}</p>}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
