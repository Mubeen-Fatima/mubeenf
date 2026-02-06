import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { HiPaperAirplane, HiCheckCircle, HiExclamationCircle } from 'react-icons/hi2';
import { SectionWrapper } from '../../ui/SectionWrapper';
import { socialLinks } from '../../../data/socialLinks';
import './Contact.css';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export function Contact() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <SectionWrapper
      id="contact"
      title="Get in Touch"
      subtitle="Let's discuss how I can help with your project"
      dark
    >
      <div className="contact-container">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="contact-info-title">Let's Work Together</h3>
          <p className="contact-info-text">
            Whether you need an AI agent, automation solution, or technical project
            management—I'm here to help turn your ideas into reality.
          </p>

          <div className="contact-details">
            <div className="contact-detail-item">
              <span className="contact-detail-label mono">Response Time</span>
              <span className="contact-detail-value">Within 24 hours</span>
            </div>
            <div className="contact-detail-item">
              <span className="contact-detail-label mono">Availability</span>
              <span className="contact-detail-value">Open to new projects</span>
            </div>
            <div className="contact-detail-item">
              <span className="contact-detail-label mono">Timezone</span>
              <span className="contact-detail-value">PKT (UTC+5)</span>
            </div>
          </div>

          <div className="contact-social">
            <span className="contact-social-label mono">Connect with me</span>
            <div className="contact-social-links">
              {socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-link"
                  aria-label={link.label}
                >
                  {link.platform}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name" className="form-label mono">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="Your name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label mono">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="subject" className="form-label mono">Subject</label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="form-input form-select"
            >
              <option value="">Select a topic</option>
              <option value="ai-agent">AI Agent Development</option>
              <option value="automation">Process Automation</option>
              <option value="project-management">Project Management</option>
              <option value="consulting">Consulting</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label mono">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="form-input form-textarea"
              placeholder="Tell me about your project..."
              rows={5}
            />
          </div>

          <button
            type="submit"
            className="form-submit"
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? (
              <>Sending...</>
            ) : status === 'success' ? (
              <>
                <HiCheckCircle />
                Message Sent!
              </>
            ) : status === 'error' ? (
              <>
                <HiExclamationCircle />
                Try Again
              </>
            ) : (
              <>
                <HiPaperAirplane />
                Send Message
              </>
            )}
          </button>

          {status === 'success' && (
            <p className="form-message form-success">
              Thanks for reaching out! I'll get back to you soon.
            </p>
          )}

          {status === 'error' && (
            <p className="form-message form-error">
              Something went wrong. Please try again or email me directly.
            </p>
          )}
        </motion.form>
      </div>
    </SectionWrapper>
  );
}
