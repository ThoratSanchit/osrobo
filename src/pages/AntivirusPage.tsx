import { useState } from 'react'
import { Shield, AlertTriangle, CheckCircle, Clock, Phone, Mail } from 'lucide-react'
import './CommonPage.css'
import './ServicePage.css'

const AntivirusPage = () => {
  const [activeTab, setActiveTab] = useState('overview')

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'services', label: 'Services' },
    { id: 'process', label: 'Process' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'contact', label: 'Contact' }
  ]

  const antivirusServices = [
    {
      title: 'Antivirus Installation',
      description: 'Professional installation of leading antivirus software',
      icon: Shield,
      features: ['Premium antivirus installation', 'Real-time protection setup', 'Automatic updates', 'Threat detection']
    },
    {
      title: 'Malware Removal',
      description: 'Complete removal of viruses, spyware, and malware',
      icon: AlertTriangle,
      features: ['Virus scanning & removal', 'Spyware elimination', 'Rootkit detection', 'System cleanup']
    },
    {
      title: 'Security Configuration',
      description: 'Comprehensive security setup and optimization',
      icon: CheckCircle,
      features: ['Firewall configuration', 'Email protection', 'Web protection', 'Parental controls']
    },
    {
      title: 'Security Monitoring',
      description: 'Ongoing security monitoring and maintenance',
      icon: Clock,
      features: ['Regular security scans', 'Threat monitoring', 'Performance optimization', 'Security updates']
    }
  ]

  return (
    <div className="service-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Antivirus Services</h1>
          <p className="page-subtitle">
            Professional antivirus installation, malware removal, and comprehensive security solutions
          </p>
        </div>

        <div className="service-content">
          <div className="service-info">
            <div className="service-header">
              <div className="service-icon">
                <Shield size={64} />
              </div>
              <div className="service-details">
                <h2>Complete Security Solutions</h2>
                <p>Protect your computer with professional antivirus installation and security services. Our experts ensure your system is fully protected against all types of threats.</p>
                <div className="service-highlights">
                  <div className="highlight-item">
                    <CheckCircle size={20} />
                    <span>100% Protection</span>
                  </div>
                  <div className="highlight-item">
                    <Shield size={20} />
                    <span>Real-time Security</span>
                  </div>
                  <div className="highlight-item">
                    <Clock size={20} />
                    <span>24/7 Monitoring</span>
                  </div>
                </div>
              </div>
              <div className="service-actions">
                <button className="btn btn-primary btn-large">
                  <Phone size={20} />
                  Get Protected
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
                    <h3>Antivirus Services Overview</h3>
                    <p>Our comprehensive antivirus services provide complete protection for your computer. From professional installation to ongoing security monitoring, we ensure your system stays safe from all types of threats.</p>
                    
                    <div className="overview-stats">
                      <div className="stat-card">
                        <h4>15,000+</h4>
                        <p>Protected Systems</p>
                      </div>
                      <div className="stat-card">
                        <h4>99.9%</h4>
                        <p>Threat Detection</p>
                      </div>
                      <div className="stat-card">
                        <h4>24/7</h4>
                        <p>Security Monitoring</p>
                      </div>
                      <div className="stat-card">
                        <h4>100%</h4>
                        <p>Malware Removal</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'services' && (
                  <div className="tab-panel">
                    <h3>Security Services</h3>
                    <div className="services-grid">
                      {antivirusServices.map((service, index) => (
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
                        <h4>Basic Protection</h4>
                        <div className="price">₹1,200</div>
                        <ul className="pricing-features">
                          <li>Antivirus installation</li>
                          <li>Basic malware removal</li>
                          <li>1-year protection</li>
                          <li>Email support</li>
                        </ul>
                        <button className="btn btn-primary">Get Started</button>
                      </div>
                      <div className="pricing-card featured">
                        <h4>Complete Security</h4>
                        <div className="price">₹2,500</div>
                        <ul className="pricing-features">
                          <li>Premium antivirus</li>
                          <li>Complete malware removal</li>
                          <li>Security configuration</li>
                          <li>Priority support</li>
                        </ul>
                        <button className="btn btn-primary">Get Started</button>
                      </div>
                      <div className="pricing-card">
                        <h4>Enterprise Security</h4>
                        <div className="price">₹4,500</div>
                        <ul className="pricing-features">
                          <li>Multi-device protection</li>
                          <li>Advanced security features</li>
                          <li>24/7 monitoring</li>
                          <li>Dedicated support</li>
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
                          <p>security@osrobo.com</p>
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

export default AntivirusPage 