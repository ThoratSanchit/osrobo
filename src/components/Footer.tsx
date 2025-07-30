import { Link } from 'react-router-dom'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* About Us Column */}
          <div className="footer-column">
            <h3 className="footer-title">About Us</h3>
            <p className="footer-text">
              OsRobo.com provides cutting-edge utility software tools for tech-savvy users. 
              From internet blockers to PC diagnostics, we deliver professional solutions 
              that enhance your computing experience.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Location Column */}
          <div className="footer-column">
            <h3 className="footer-title">Location</h3>
            <div className="contact-info">
              <div className="contact-item">
                <MapPin size={18} />
                <span>123 Tech Street, Silicon Valley, CA 94025</span>
              </div>
              <div className="contact-item">
                <Phone size={18} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="contact-item">
                <Mail size={18} />
                <span>support@osrobo.com</span>
              </div>
            </div>
          </div>

          {/* Policies Column */}
          <div className="footer-column">
            <h3 className="footer-title">Policies</h3>
            <ul className="footer-links">
              <li><Link to="/privacy" className="footer-link">Privacy Policy</Link></li>
              <li><Link to="/terms" className="footer-link">Terms of Service</Link></li>
              <li><Link to="/refund" className="footer-link">Refund Policy</Link></li>
              <li><Link to="/license" className="footer-link">Software License</Link></li>
              <li><Link to="/security" className="footer-link">Security</Link></li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="footer-column">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/downloads" className="footer-link">Free Downloads</Link></li>
              <li><Link to="/buy" className="footer-link">Premium Tools</Link></li>
              <li><Link to="/contact" className="footer-link">Contact Support</Link></li>
              <li><Link to="/blog" className="footer-link">Blog</Link></li>
              <li><Link to="/faq" className="footer-link">FAQ</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © 2024 OsRobo.com. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <Link to="/sitemap" className="footer-bottom-link">Sitemap</Link>
              <Link to="/accessibility" className="footer-bottom-link">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 