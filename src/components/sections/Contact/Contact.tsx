import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../../ui/SectionWrapper';
import { socialLinks } from '../../../data/socialLinks';
import './Contact.css';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export function Contact() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
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
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
        {/* Left - Contact Info */}
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -20 }}
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
              <span className="contact-detail-label">Response Time</span>
              <span className="contact-detail-value">Within 24 hours</span>
            </div>
            <div className="contact-detail-item">
              <span className="contact-detail-label">Availability</span>
              <span className="contact-detail-value">Open to projects</span>
            </div>
            <div className="contact-detail-item">
              <span className="contact-detail-label">Timezone</span>
              <span className="contact-detail-value">PKT (UTC+5)</span>
            </div>
          </div>

          <div className="contact-social">
            <span className="contact-social-label">Connect with me</span>
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

        {/* Right - Contact Form */}
        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName" className="form-label">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="John"
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName" className="form-label">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="Doe"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
              placeholder="john@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">Project Details</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="form-input form-textarea"
              placeholder="Tell me about your project..."
              rows={4}
            />
          </div>

          <button
            type="submit"
            className="form-submit"
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? 'Sending...' : status === 'success' ? 'Sent!' : 'Send Message'}
          </button>

          {status === 'success' && (
            <p className="form-message form-success">
              Thanks for reaching out! I'll get back to you soon.
            </p>
          )}

          {status === 'error' && (
            <p className="form-message form-error">
              Something went wrong. Please try again.
            </p>
          )}
        </motion.form>
      </div>
    </SectionWrapper>
  );
}
