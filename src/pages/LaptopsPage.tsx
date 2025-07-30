import { useState } from 'react'
import { Laptop, CheckCircle, Clock, Phone, Mail } from 'lucide-react'
import './CommonPage.css'
import './ServicePage.css'

const LaptopsPage = () => {
  const [activeTab, setActiveTab] = useState('overview')

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'services', label: 'Services' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'contact', label: 'Contact' }
  ]

  const laptopServices = [
    {
      title: 'Laptop Repair',
      description: 'Professional laptop repair and maintenance services',
      icon: Laptop,
      features: ['Screen replacement', 'Battery replacement', 'Keyboard repair', 'Motherboard repair']
    },
    {
      title: 'Performance Upgrade',
      description: 'Laptop performance optimization and upgrades',
      icon: CheckCircle,
      features: ['RAM upgrades', 'SSD installation', 'Thermal paste replacement', 'Performance tuning']
    },
    {
      title: 'Software Services',
      description: 'Laptop software installation and optimization',
      icon: Clock,
      features: ['OS installation', 'Driver updates', 'Software optimization', 'Data recovery']
    }
  ]

  return (
    <div className="service-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Laptop Services</h1>
          <p className="page-subtitle">
            Professional laptop repair, maintenance, and upgrade services
          </p>
        </div>

        <div className="service-content">
          <div className="service-info">
            <div className="service-header">
              <div className="service-icon">
                <Laptop size={64} />
              </div>
              <div className="service-details">
                <h2>Laptop Repair & Services</h2>
                <p>Expert laptop repair and maintenance services for all brands and models. From hardware repairs to performance upgrades, we keep your laptop running smoothly.</p>
                <div className="service-highlights">
                  <div className="highlight-item">
                    <CheckCircle size={20} />
                    <span>All Brands</span>
                  </div>
                  <div className="highlight-item">
                    <Clock size={20} />
                    <span>Quick Repair</span>
                  </div>
                  <div className="highlight-item">
                    <Laptop size={20} />
                    <span>Expert Service</span>
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
                    <h3>Laptop Services Overview</h3>
                    <p>Our comprehensive laptop services cover all aspects of laptop maintenance, repair, and optimization. We work with all major brands and provide reliable, fast service.</p>
                    
                    <div className="overview-stats">
                      <div className="stat-card">
                        <h4>2,000+</h4>
                        <p>Laptops Repaired</p>
                      </div>
                      <div className="stat-card">
                        <h4>95%</h4>
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
                    <h3>Laptop Services</h3>
                    <div className="services-grid">
                      {laptopServices.map((service, index) => (
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
                        <h4>Basic Repair</h4>
                        <div className="price">₹1,200</div>
                        <ul className="pricing-features">
                          <li>Software issues</li>
                          <li>Basic diagnostics</li>
                          <li>Driver updates</li>
                          <li>3-month warranty</li>
                        </ul>
                        <button className="btn btn-primary">Book Now</button>
                      </div>
                      <div className="pricing-card featured">
                        <h4>Standard Repair</h4>
                        <div className="price">₹2,500</div>
                        <ul className="pricing-features">
                          <li>Hardware repairs</li>
                          <li>Component replacement</li>
                          <li>Performance upgrade</li>
                          <li>6-month warranty</li>
                        </ul>
                        <button className="btn btn-primary">Book Now</button>
                      </div>
                      <div className="pricing-card">
                        <h4>Premium Service</h4>
                        <div className="price">₹4,000</div>
                        <ul className="pricing-features">
                          <li>Complex repairs</li>
                          <li>Major upgrades</li>
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
                          <p>laptops@osrobo.com</p>
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

export default LaptopsPage 