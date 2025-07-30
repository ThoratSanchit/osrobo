import { useState } from 'react'
import { HardDrive, Shield, Clock, CheckCircle, AlertTriangle, Download, Phone, Mail } from 'lucide-react'
import './CommonPage.css'
import './ServicePage.css'

const DataRecoveryPage = () => {
  const [activeTab, setActiveTab] = useState('overview')

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'services', label: 'Services' },
    { id: 'process', label: 'Process' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'contact', label: 'Contact' }
  ]

  const recoveryServices = [
    {
      title: 'Hard Drive Recovery',
      description: 'Recover data from failed, corrupted, or damaged hard drives',
      icon: HardDrive,
      features: ['Physical damage recovery', 'Logical corruption repair', 'RAID array recovery', 'SSD data recovery']
    },
    {
      title: 'Deleted File Recovery',
      description: 'Recover accidentally deleted files and folders',
      icon: Download,
      features: ['Quick file recovery', 'Deep scan technology', 'Multiple file formats', 'Preview before recovery']
    },
    {
      title: 'Formatted Drive Recovery',
      description: 'Recover data from formatted or repartitioned drives',
      icon: Shield,
      features: ['Format recovery', 'Partition recovery', 'Boot sector repair', 'File system reconstruction']
    },
    {
      title: 'Virus Damage Recovery',
      description: 'Recover data affected by malware and ransomware',
      icon: AlertTriangle,
      features: ['Malware removal', 'Encrypted file recovery', 'System restoration', 'Data integrity verification']
    }
  ]

  const recoveryProcess = [
    {
      step: 1,
      title: 'Initial Assessment',
      description: 'Free evaluation of your device and data loss situation',
      icon: CheckCircle
    },
    {
      step: 2,
      title: 'Recovery Plan',
      description: 'Detailed recovery strategy and cost estimation',
      icon: Shield
    },
    {
      step: 3,
      title: 'Data Recovery',
      description: 'Professional recovery using advanced tools and techniques',
      icon: HardDrive
    },
    {
      step: 4,
      title: 'Verification & Delivery',
      description: 'Data verification and secure delivery of recovered files',
      icon: CheckCircle
    }
  ]

  return (
    <div className="service-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Data Recovery Services</h1>
          <p className="page-subtitle">
            Professional data recovery solutions for all types of storage devices and data loss scenarios
          </p>
        </div>

        <div className="service-content">
          <div className="service-info">
            <div className="service-header">
              <div className="service-icon">
                <HardDrive size={64} />
              </div>
              <div className="service-details">
                <h2>Expert Data Recovery Services</h2>
                <p>Don't lose your valuable data. Our certified technicians use advanced recovery tools and techniques to retrieve your files from any storage device.</p>
                <div className="service-highlights">
                  <div className="highlight-item">
                    <CheckCircle size={20} />
                    <span>95% Success Rate</span>
                  </div>
                  <div className="highlight-item">
                    <Clock size={20} />
                    <span>24-48 Hour Turnaround</span>
                  </div>
                  <div className="highlight-item">
                    <Shield size={20} />
                    <span>100% Confidential</span>
                  </div>
                </div>
              </div>
              <div className="service-actions">
                <button className="btn btn-primary btn-large">
                  <Phone size={20} />
                  Get Free Quote
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
                    <h3>Data Recovery Overview</h3>
                    <p>Our data recovery services are designed to help you retrieve lost, deleted, or corrupted data from various storage devices. Whether you've experienced hardware failure, accidental deletion, or malware damage, our expert team can help.</p>
                    
                    <div className="overview-stats">
                      <div className="stat-card">
                        <h4>10,000+</h4>
                        <p>Successful Recoveries</p>
                      </div>
                      <div className="stat-card">
                        <h4>95%</h4>
                        <p>Success Rate</p>
                      </div>
                      <div className="stat-card">
                        <h4>24-48h</h4>
                        <p>Average Turnaround</p>
                      </div>
                      <div className="stat-card">
                        <h4>100%</h4>
                        <p>Confidentiality</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'services' && (
                  <div className="tab-panel">
                    <h3>Recovery Services</h3>
                    <div className="services-grid">
                      {recoveryServices.map((service, index) => (
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
                    <h3>Recovery Process</h3>
                    <div className="process-steps">
                      {recoveryProcess.map((step) => (
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
                        <h4>Basic Recovery</h4>
                        <div className="price">₹1,500</div>
                        <ul className="pricing-features">
                          <li>Deleted file recovery</li>
                          <li>Basic hard drive issues</li>
                          <li>24-48 hour turnaround</li>
                          <li>Email support</li>
                        </ul>
                        <button className="btn btn-primary">Get Started</button>
                      </div>
                      <div className="pricing-card featured">
                        <h4>Standard Recovery</h4>
                        <div className="price">₹3,500</div>
                        <ul className="pricing-features">
                          <li>Advanced data recovery</li>
                          <li>Formatted drive recovery</li>
                          <li>Virus damage recovery</li>
                          <li>Priority support</li>
                        </ul>
                        <button className="btn btn-primary">Get Started</button>
                      </div>
                      <div className="pricing-card">
                        <h4>Premium Recovery</h4>
                        <div className="price">₹5,500</div>
                        <ul className="pricing-features">
                          <li>Complex data recovery</li>
                          <li>RAID array recovery</li>
                          <li>SSD data recovery</li>
                          <li>24/7 support</li>
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
                          <p>recovery@osrobo.com</p>
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

export default DataRecoveryPage 