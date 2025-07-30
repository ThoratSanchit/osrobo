import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from 'lucide-react'
import './CommonPage.css'
import './ContactPage.css'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // In a real app, this would send the form data to a server
  }

  return (
    <div className="contact-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">
            Get in touch with our support team for any questions or assistance
          </p>
        </div>

        <div className="contact-layout">
          {/* Contact Form */}
          <div className="contact-form-section">
            <div className="form-card">
              <div className="form-header">
                <h2>Send us a Message</h2>
                <p>We'll get back to you within 24 hours</p>
              </div>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <div className="input-wrapper">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                      placeholder=" "
                    />
                    <label htmlFor="name" className="form-label">Full Name</label>
                  </div>
                </div>

                <div className="form-group">
                  <div className="input-wrapper">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                      placeholder=" "
                    />
                    <label htmlFor="email" className="form-label">Email Address</label>
                  </div>
                </div>

                <div className="form-group">
                  <div className="input-wrapper">
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                    >
                      <option value="">Select a subject</option>
                      <option value="technical-support">Technical Support</option>
                      <option value="sales-inquiry">Sales Inquiry</option>
                      <option value="bug-report">Bug Report</option>
                      <option value="feature-request">Feature Request</option>
                      <option value="general">General Inquiry</option>
                    </select>
                    <label htmlFor="subject" className="form-label">Subject</label>
                  </div>
                </div>

                <div className="form-group">
                  <div className="input-wrapper">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="form-input"
                      placeholder=" "
                    />
                    <label htmlFor="message" className="form-label">Message</label>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary btn-large">
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="contact-info-section">
            <div className="info-card">
              <h3>Get in Touch</h3>
              <p>We're here to help with any questions about our software tools.</p>

              <div className="contact-methods">
                <div className="contact-method">
                  <div className="contact-icon">
                    <Mail size={24} />
                  </div>
                  <div className="contact-details">
                    <h4>Email Support</h4>
                    <p>support@osrobo.com</p>
                    <span className="response-time">Response within 2 hours</span>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-icon">
                    <Phone size={24} />
                  </div>
                  <div className="contact-details">
                    <h4>Phone Support</h4>
                    <p>+1 (555) 123-4567</p>
                    <span className="response-time">Mon-Fri, 9AM-6PM PST</span>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-icon">
                    <MapPin size={24} />
                  </div>
                  <div className="contact-details">
                    <h4>Office Address</h4>
                    <p>123 Tech Street<br />Silicon Valley, CA 94025</p>
                    <span className="response-time">Visit by appointment</span>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-icon">
                    <Clock size={24} />
                  </div>
                  <div className="contact-details">
                    <h4>Business Hours</h4>
                    <p>Monday - Friday<br />9:00 AM - 6:00 PM PST</p>
                    <span className="response-time">24/7 online support</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Support */}
            <div className="quick-support-card">
              <div className="quick-support-header">
                <MessageSquare size={24} />
                <h4>Quick Support</h4>
              </div>
              <p>Need immediate help? Check our FAQ or use our live chat feature.</p>
              <div className="quick-actions">
                <button className="btn btn-outline">View FAQ</button>
                <button className="btn btn-outline">Live Chat</button>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="map-section">
          <div className="map-container">
            <div className="map-placeholder">
              <MapPin size={48} />
              <h3>Our Location</h3>
              <p>123 Tech Street, Silicon Valley, CA 94025</p>
              <button className="btn btn-outline">Open in Google Maps</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage 