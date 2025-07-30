import { useState } from 'react'
import { Wrench, Monitor, Laptop, Printer, CheckCircle, Clock, Phone, Mail } from 'lucide-react'
import './CommonPage.css'
import './ServicePage.css'

const RepairServicesPage = () => {
  const [activeTab, setActiveTab] = useState('overview')

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'services', label: 'Services' },
    { id: 'process', label: 'Process' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'contact', label: 'Contact' }
  ]

  const repairServices = [
    {
      title: 'Computer Repair',
      description: 'Complete desktop computer repair and maintenance',
      icon: Monitor,
      features: ['Hardware diagnostics', 'Component replacement', 'Performance optimization', 'System upgrades']
    },
    {
      title: 'Laptop Repair',
      description: 'Professional laptop repair and maintenance services',
      icon: Laptop,
      features: ['Screen replacement', 'Battery replacement', 'Keyboard repair', 'Motherboard repair']
    },
    {
      title: 'Printer Repair',
      description: 'All types of printer repair and maintenance',
      icon: Printer,
      features: ['Print head cleaning', 'Cartridge replacement', 'Paper feed repair', 'Network setup']
    },
    {
      title: 'Hardware Upgrades',
      description: 'Professional hardware upgrade services',
      icon: Wrench,
      features: ['RAM upgrades', 'Storage upgrades', 'Graphics card installation', 'Processor upgrades']
    }
  ]

  return (
    <div className="service-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Repair Services</h1>
          <p className="page-subtitle">
            Professional computer, laptop, and hardware repair services with expert technicians
          </p>
        </div>

        <div className="service-content">
          <div className="service-info">
            <div className="service-header">
              <div className="service-icon">
                <Wrench size={64} />
              </div>
              <div className="service-details">
                <h2>Expert Repair Services</h2>
                <p>Professional repair services for all types of computers and hardware. Our certified technicians provide reliable, fast, and affordable repair solutions.</p>
                <div className="service-highlights">
                  <div className="highlight-item">
                    <CheckCircle size={20} />
                    <span>Certified Technicians</span>
                  </div>
                  <div className="highlight-item">
                    <Clock size={20} />
                    <span>Same Day Service</span>
                  </div>
                  <div className="highlight-item">
                    <Wrench size={20} />
                    <span>Warranty Included</span>
                  </div>
                </div>
              </div>
              <div className="service-actions">
                <button className="btn btn-primary btn-large">
                  <Phone size={20} />
                  Book Repair
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
                    <h3>Repair Services Overview</h3>
                    <p>Our comprehensive repair services cover all types of computer hardware and peripherals. From desktop computers to laptops, printers, and hardware upgrades, we provide professional repair solutions with guaranteed results.</p>
                    
                    <div className="overview-stats">
                      <div className="stat-card">
                        <h4>8,000+</h4>
                        <p>Repairs Completed</p>
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
                        <h4>1 Year</h4>
                        <p>Warranty</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'services' && (
                  <div className="tab-panel">
                    <h3>Repair Services</h3>
                    <div className="services-grid">
                      {repairServices.map((service, index) => (
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
                        <div className="price">₹800</div>
                        <ul className="pricing-features">
                          <li>Diagnostic service</li>
                          <li>Basic repairs</li>
                          <li>Software issues</li>
                          <li>3-month warranty</li>
                        </ul>
                        <button className="btn btn-primary">Book Now</button>
                      </div>
                      <div className="pricing-card featured">
                        <h4>Standard Repair</h4>
                        <div className="price">₹1,500</div>
                        <ul className="pricing-features">
                          <li>Hardware repairs</li>
                          <li>Component replacement</li>
                          <li>Performance optimization</li>
                          <li>6-month warranty</li>
                        </ul>
                        <button className="btn btn-primary">Book Now</button>
                      </div>
                      <div className="pricing-card">
                        <h4>Premium Repair</h4>
                        <div className="price">₹2,500</div>
                        <ul className="pricing-features">
                          <li>Complex repairs</li>
                          <li>Hardware upgrades</li>
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
                          <p>repair@osrobo.com</p>
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

export default RepairServicesPage 