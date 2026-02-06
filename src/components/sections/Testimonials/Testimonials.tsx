import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronLeft, HiChevronRight, HiStar } from 'react-icons/hi2';
import { SectionWrapper } from '../../ui/SectionWrapper';
import { testimonials } from '../../../data/testimonials';
import './Testimonials.css';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <SectionWrapper
      id="testimonials"
      title="Testimonials"
      subtitle="What clients say about working with me"
    >
      <div className="testimonials-container">
        <button
          className="testimonial-nav testimonial-nav-prev"
          onClick={prevTestimonial}
          aria-label="Previous testimonial"
        >
          <HiChevronLeft />
        </button>

        <div className="testimonial-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="testimonial-card"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <div className="testimonial-rating">
                {[...Array(5)].map((_, i) => (
                  <HiStar
                    key={i}
                    className={i < 5 ? 'star-filled' : 'star-empty'}
                  />
                ))}
              </div>

              <blockquote className="testimonial-quote">
                "{current.quote}"
              </blockquote>

              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  {current.clientName.charAt(0)}
                </div>
                <div className="testimonial-author-info">
                  <strong className="testimonial-name">{current.clientName}</strong>
                  {current.role && (
                    <span className="testimonial-role">{current.role}</span>
                  )}
                </div>
              </div>

              {current.projectRef && (
                <div className="testimonial-project mono">
                  Project: {current.projectRef}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          className="testimonial-nav testimonial-nav-next"
          onClick={nextTestimonial}
          aria-label="Next testimonial"
        >
          <HiChevronRight />
        </button>
      </div>

      <div className="testimonial-dots">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`testimonial-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
