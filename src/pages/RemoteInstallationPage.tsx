import { useState } from 'react'
import { Monitor, Shield, Clock, CheckCircle, Globe, Download, Phone, Mail } from 'lucide-react'
import './CommonPage.css'
import './ServicePage.css'

const RemoteInstallationPage = () => {
  const [activeTab, setActiveTab] = useState('overview')

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'services', label: 'Services' },
    { id: 'process', label: 'Process' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'contact', label: 'Contact' }
  ]

  const installationServices = [
    {
      title: 'Software Installation',
      description: 'Professional installation of any software on your computer',
      icon: Download,
      features: ['Operating system installation', 'Driver installation', 'Application software', 'System updates']
    },
    {
      title: 'Remote Support',
      description: 'Get instant technical support and troubleshooting',
      icon: Monitor,
      features: ['Remote desktop access', 'Real-time troubleshooting', 'System optimization', 'Performance tuning']
    },
    {
      title: 'Security Setup',
      description: 'Complete security software installation and configuration',
      icon: Shield,
      features: ['Antivirus installation', 'Firewall setup', 'VPN configuration', 'Security updates']
    },
    {
      title: 'System Maintenance',
      description: 'Regular system maintenance and optimization',
      icon: CheckCircle,
      features: ['Disk cleanup', 'Registry optimization', 'Startup optimization', 'Performance monitoring']
    }
  ]

  const installationProcess = [
    {
      step: 1,
      title: 'Schedule Session',
      description: 'Book a convenient time for remote installation',
      icon: Clock
    },
    {
      step: 2,
      title: 'Connect Securely',
      description: 'Secure remote connection using encrypted protocols',
      icon: Shield
    },
    {
      step: 3,
      title: 'Install & Configure',
      description: 'Professional installation and configuration of software',
      icon: Download
    },
    {
      step: 4,
      title: 'Test & Verify',
      description: 'Thorough testing and verification of installation',
      icon: CheckCircle
    }
  ]

  return (
    <div className="service-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Remote Installation Services</h1>
          <p className="page-subtitle">
            Professional remote software installation and technical support from certified experts
          </p>
        </div>

        <div className="service-content">
          <div className="service-info">
            <div className="service-header">
              <div className="service-icon">
                <Globe size={64} />
              </div>
              <div className="service-details">
                <h2>Remote Installation & Support</h2>
                <p>Get professional software installation and technical support from anywhere. Our certified technicians provide secure, reliable remote assistance for all your computer needs.</p>
                <div className="service-highlights">
                  <div className="highlight-item">
                    <CheckCircle size={20} />
                    <span>24/7 Availability</span>
                  </div>
                  <div className="highlight-item">
                    <Shield size={20} />
                    <span>Secure Connection</span>
                  </div>
                  <div className="highlight-item">
                    <Clock size={20} />
                    <span>Quick Setup</span>
                  </div>
                </div>
              </div>
              <div className="service-actions">
                <button className="btn btn-primary btn-large">
                  <Phone size={20} />
                  Schedule Now
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
                    <h3>Remote Installation Overview</h3>
                    <p>Our remote installation services allow you to get professional software installation and technical support without leaving your home or office. Using secure remote desktop technology, our certified technicians can access your computer safely and efficiently.</p>
                    
                    <div className="overview-stats">
                      <div className="stat-card">
                        <h4>5,000+</h4>
                        <p>Successful Installations</p>
                      </div>
                      <div className="stat-card">
                        <h4>99%</h4>
                        <p>Success Rate</p>
                      </div>
                      <div className="stat-card">
                        <h4>30min</h4>
                        <p>Average Time</p>
                      </div>
                      <div className="stat-card">
                        <h4>24/7</h4>
                        <p>Support Available</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'services' && (
                  <div className="tab-panel">
                    <h3>Installation Services</h3>
                    <div className="services-grid">
                      {installationServices.map((service, index) => (
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

                {activeTab === 'process' && (
                  <div className="tab-panel">
                    <h3>Installation Process</h3>
                    <div className="process-steps">
                      {installationProcess.map((step) => (
                        <div key={step.step} className="process-step">
                          <div className="step-number">{step.step}</div>
                          <div className="step-content">
                            <h4>{step.title}</h4>
                            <p>{step.description}</p>
                          </div>
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
                        <h4>Basic Installation</h4>
                        <div className="price">₹800</div>
                        <ul className="pricing-features">
                          <li>Single software installation</li>
                          <li>Basic configuration</li>
                          <li>30-minute session</li>
                          <li>Email support</li>
                        </ul>
                        <button className="btn btn-primary">Book Now</button>
                      </div>
                      <div className="pricing-card featured">
                        <h4>Standard Package</h4>
                        <div className="price">₹1,500</div>
                        <ul className="pricing-features">
                          <li>Multiple software installation</li>
                          <li>Advanced configuration</li>
                          <li>60-minute session</li>
                          <li>Priority support</li>
                        </ul>
                        <button className="btn btn-primary">Book Now</button>
                      </div>
                      <div className="pricing-card">
                        <h4>Premium Package</h4>
                        <div className="price">₹2,500</div>
                        <ul className="pricing-features">
                          <li>Complete system setup</li>
                          <li>Security configuration</li>
                          <li>90-minute session</li>
                          <li>24/7 support</li>
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
                          <p>remote@osrobo.com</p>
                        </div>
                      </div>
                      <div className="contact-item">
                        <Clock size={24} />
                        <div>
                          <h4>Business Hours</h4>
                          <p>24/7 Remote Support Available</p>
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

export default RemoteInstallationPage 