import { useState } from 'react'
import { Monitor, CheckCircle, Clock, Phone, Mail } from 'lucide-react'
import './CommonPage.css'
import './ServicePage.css'

const ComputersPage = () => {
  const [activeTab, setActiveTab] = useState('overview')

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'services', label: 'Services' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'contact', label: 'Contact' }
  ]

  const computerServices = [
    {
      title: 'Desktop Assembly',
      description: 'Custom desktop computer assembly and configuration',
      icon: Monitor,
      features: ['Custom PC building', 'Component selection', 'Performance optimization', 'OS installation']
    },
    {
      title: 'Computer Maintenance',
      description: 'Regular maintenance and optimization services',
      icon: CheckCircle,
      features: ['System cleanup', 'Performance tuning', 'Hardware diagnostics', 'Software updates']
    },
    {
      title: 'Hardware Upgrades',
      description: 'Professional hardware upgrade services',
      icon: Clock,
      features: ['RAM upgrades', 'Storage upgrades', 'Graphics cards', 'Processor upgrades']
    }
  ]

  return (
    <div className="service-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Computer Services</h1>
          <p className="page-subtitle">
            Professional desktop computer services including assembly, maintenance, and upgrades
          </p>
        </div>

        <div className="service-content">
          <div className="service-info">
            <div className="service-header">
              <div className="service-icon">
                <Monitor size={64} />
              </div>
              <div className="service-details">
                <h2>Desktop Computer Services</h2>
                <p>Expert desktop computer services including custom assembly, maintenance, and hardware upgrades. Build your perfect PC with our professional guidance.</p>
                <div className="service-highlights">
                  <div className="highlight-item">
                    <CheckCircle size={20} />
                    <span>Custom Assembly</span>
                  </div>
                  <div className="highlight-item">
                    <Clock size={20} />
                    <span>Quick Service</span>
                  </div>
                  <div className="highlight-item">
                    <Monitor size={20} />
                    <span>Expert Support</span>
                  </div>
                </div>
              </div>
              <div className="service-actions">
                <button className="btn btn-primary btn-large">
                  <Phone size={20} />
                  Get Quote
                </button>
              </div>
            </div>

            <div className="service-tabs">
              <div className="tab-nav">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="tab-content">
                {activeTab === 'overview' && (
                  <div className="tab-panel">
                    <h3>Computer Services Overview</h3>
                    <p>Our desktop computer services cover everything from custom PC assembly to maintenance and upgrades. Whether you need a new gaming rig or want to upgrade your existing system, we've got you covered.</p>
                    
                    <div className="overview-stats">
                      <div className="stat-card">
                        <h4>500+</h4>
                        <p>Custom PCs Built</p>
                      </div>
                      <div className="stat-card">
                        <h4>100%</h4>
                        <p>Quality Guarantee</p>
                      </div>
                      <div className="stat-card">
                        <h4>Same Day</h4>
                        <p>Service Available</p>
                      </div>
                      <div className="stat-card">
                        <h4>1 Year</h4>
                        <p>Warranty</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'services' && (
                  <div className="tab-panel">
                    <h3>Computer Services</h3>
                    <div className="services-grid">
                      {computerServices.map((service, index) => (
                        <div key={index} className="service-card">
                          <div className="service-card-icon">
                            <service.icon size={32} />
                          </div>
                          <h4>{service.title}</h4>
                          <p>{service.description}</p>
                          <ul className="service-features">
                            {service.features.map((feature, idx) => (
                              <li key={idx}>{feature}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'pricing' && (
                  <div className="tab-panel">
                    <h3>Pricing Plans</h3>
                    <div className="pricing-cards">
                      <div className="pricing-card">
                        <h4>Basic Service</h4>
                        <div className="price">₹1,000</div>
                        <ul className="pricing-features">
                          <li>System maintenance</li>
                          <li>Basic diagnostics</li>
                          <li>Software installation</li>
                          <li>3-month warranty</li>
                        </ul>
                        <button className="btn btn-primary">Get Started</button>
                      </div>
                      <div className="pricing-card featured">
                        <h4>Custom Assembly</h4>
                        <div className="price">₹3,000</div>
                        <ul className="pricing-features">
                          <li>Custom PC building</li>
                          <li>Component selection</li>
                          <li>OS installation</li>
                          <li>1-year warranty</li>
                        </ul>
                        <button className="btn btn-primary">Get Started</button>
                      </div>
                      <div className="pricing-card">
                        <h4>Premium Service</h4>
                        <div className="price">₹5,000</div>
                        <ul className="pricing-features">
                          <li>High-end assembly</li>
                          <li>Performance optimization</li>
                          <li>Extended warranty</li>
                          <li>Priority support</li>
                        </ul>
                        <button className="btn btn-primary">Get Started</button>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'contact' && (
                  <div className="tab-panel">
                    <h3>Contact Us</h3>
                    <div className="contact-info">
                      <div className="contact-item">
                        <Phone size={24} />
                        <div>
                          <h4>Call Us</h4>
                          <p>+91 98765 43210</p>
                        </div>
                      </div>
                      <div className="contact-item">
                        <Mail size={24} />
                        <div>
                          <h4>Email Us</h4>
                          <p>computers@osrobo.com</p>
                        </div>
                      </div>
                      <div className="contact-item">
                        <Clock size={24} />
                        <div>
                          <h4>Business Hours</h4>
                          <p>Mon-Sat: 9:00 AM - 7:00 PM</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComputersPage 