import { socialLinks } from '../../../data/socialLinks';
import './Footer.css';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <span className="footer-logo mono">MF</span>
            <p className="footer-tagline">
              Building AI solutions that deliver real business value
            </p>
          </div>

          <nav className="footer-nav">
            <div className="footer-nav-group">
              <h4 className="footer-nav-title mono">Navigation</h4>
              <ul className="footer-nav-list">
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer-nav-group">
              <h4 className="footer-nav-title mono">Services</h4>
              <ul className="footer-nav-list">
                <li><a href="#services">AI Agent Development</a></li>
                <li><a href="#services">Process Automation</a></li>
                <li><a href="#services">Technical PM</a></li>
              </ul>
            </div>

            <div className="footer-nav-group">
              <h4 className="footer-nav-title mono">Connect</h4>
              <ul className="footer-nav-list">
                {socialLinks.map((link) => (
                  <li key={link.platform}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      {link.platform}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Mubeen F. All rights reserved.
          </p>
          <p className="footer-credit mono">
            Built with React + TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}
