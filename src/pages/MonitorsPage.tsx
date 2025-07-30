import { useState } from 'react'
import { Monitor, CheckCircle, Clock, Phone, Mail } from 'lucide-react'
import './CommonPage.css'
import './ServicePage.css'

const MonitorsPage = () => {
  const [activeTab, setActiveTab] = useState('overview')

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'services', label: 'Services' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'contact', label: 'Contact' }
  ]

  const monitorServices = [
    {
      title: 'Monitor Repair',
      description: 'Professional monitor repair and maintenance services',
      icon: Monitor,
      features: ['Screen replacement', 'Power supply repair', 'Display calibration', 'Hardware diagnostics']
    },
    {
      title: 'Display Setup',
      description: 'Multi-monitor setup and configuration',
      icon: CheckCircle,
      features: ['Dual monitor setup', 'Display calibration', 'Resolution optimization', 'Color correction']
    },
    {
      title: 'Monitor Maintenance',
      description: 'Regular maintenance and cleaning services',
      icon: Clock,
      features: ['Screen cleaning', 'Dust removal', 'Performance optimization', 'Preventive maintenance']
    }
  ]

  return (
    <div className="service-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Monitor Services</h1>
          <p className="page-subtitle">
            Professional monitor repair, setup, and maintenance services
          </p>
        </div>

        <div className="service-content">
          <div className="service-info">
            <div className="service-header">
              <div className="service-icon">
                <Monitor size={64} />
              </div>
              <div className="service-details">
                <h2>Monitor Repair & Services</h2>
                <p>Expert monitor repair and setup services for all types of displays. From basic repairs to multi-monitor configurations, we ensure optimal display performance.</p>
                <div className="service-highlights">
                  <div className="highlight-item">
                    <CheckCircle size={20} />
                    <span>All Brands</span>
                  </div>
                  <div className="highlight-item">
                    <Clock size={20} />
                    <span>Quick Service</span>
                  </div>
                  <div className="highlight-item">
                    <Monitor size={20} />
                    <span>Expert Setup</span>
                  </div>
                </div>
              </div>
              <div className="service-actions">
                <button className="btn btn-primary btn-large">
                  <Phone size={20} />
                  Book Service
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
                    <h3>Monitor Services Overview</h3>
                    <p>Our comprehensive monitor services cover repair, setup, and maintenance for all types of displays. We work with LCD, LED, and OLED monitors from all major brands.</p>
                    
                    <div className="overview-stats">
                      <div className="stat-card">
                        <h4>1,500+</h4>
                        <p>Monitors Repaired</p>
                      </div>
                      <div className="stat-card">
                        <h4>98%</h4>
                        <p>Success Rate</p>
                      </div>
                      <div className="stat-card">
                        <h4>Same Day</h4>
                        <p>Service Available</p>
                      </div>
                      <div className="stat-card">
                        <h4>6 Months</h4>
                        <p>Warranty</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'services' && (
                  <div className="tab-panel">
                    <h3>Monitor Services</h3>
                    <div className="services-grid">
                      {monitorServices.map((service, index) => (
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
                        <div className="price">₹800</div>
                        <ul className="pricing-features">
                          <li>Basic diagnostics</li>
                          <li>Screen cleaning</li>
                          <li>Connection setup</li>
                          <li>3-month warranty</li>
                        </ul>
                        <button className="btn btn-primary">Book Now</button>
                      </div>
                      <div className="pricing-card featured">
                        <h4>Standard Repair</h4>
                        <div className="price">₹1,500</div>
                        <ul className="pricing-features">
                          <li>Hardware repair</li>
                          <li>Display calibration</li>
                          <li>Multi-monitor setup</li>
                          <li>6-month warranty</li>
                        </ul>
                        <button className="btn btn-primary">Book Now</button>
                      </div>
                      <div className="pricing-card">
                        <h4>Premium Service</h4>
                        <div className="price">₹2,500</div>
                        <ul className="pricing-features">
                          <li>Screen replacement</li>
                          <li>Advanced calibration</li>
                          <li>Same day service</li>
                          <li>1-year warranty</li>
                        </ul>
                        <button className="btn btn-primary">Book Now</button>
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
                          <p>monitors@osrobo.com</p>
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

export default MonitorsPage 