import { useState } from 'react'
import { Battery, Download, Star, Check } from 'lucide-react'
import './CommonPage.css'
import './ProductPage.css'

const BatteryTesterPage = () => {
  const [activeTab, setActiveTab] = useState('overview')

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'features', label: 'Features' },
    { id: 'screenshots', label: 'Screenshots' },
    { id: 'comparison', label: 'Comparison' },
    { id: 'download', label: 'Download' },
    { id: 'buy', label: 'Buy Now' }
  ]

  return (
    <div className="product-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Laptop Battery Tester</h1>
          <p className="page-subtitle">
            Comprehensive battery health analysis and optimization software
          </p>
        </div>

        <div className="product-content">
          <div className="product-info">
            <div className="product-header">
              <div className="product-icon">
                <Battery size={64} />
              </div>
              <div className="product-details">
                <h2>Laptop Battery Tester (Freeware)</h2>
                <p>Professional battery testing and optimization tool for laptops and computers. Monitor battery health and performance.</p>
                <div className="product-rating">
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} className="star-filled" />
                    ))}
                  </div>
                  <span>4.9 (890 reviews)</span>
                </div>
              </div>
              <button className="btn btn-primary btn-large">
                <Download size={20} />
                Free Download
              </button>
            </div>

            <div className="product-tabs">
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
                    <h3>Overview</h3>
                    <p>Laptop Battery Tester is a comprehensive tool designed to analyze, monitor, and optimize your laptop's battery performance. Get detailed insights into battery health, capacity, and usage patterns.</p>
                  </div>
                )}

                {activeTab === 'features' && (
                  <div className="tab-panel">
                    <h3>Features</h3>
                    <ul className="features-list">
                      <li><Check size={16} /> Battery health analysis</li>
                      <li><Check size={16} /> Performance optimization</li>
                      <li><Check size={16} /> Real-time monitoring</li>
                      <li><Check size={16} /> Battery calibration</li>
                      <li><Check size={16} /> Power consumption tracking</li>
                      <li><Check size={16} /> Detailed reports</li>
                    </ul>
                  </div>
                )}

                {activeTab === 'screenshots' && (
                  <div className="tab-panel">
                    <h3>Screenshots</h3>
                    <div className="screenshots-grid">
                      <div className="screenshot-item">
                        <img 
                          src="https://images.unsplash.com/photo-1609592806598-04c4d7e5c1e8?w=800&h=600&fit=crop&crop=center" 
                          alt="Battery Health Analysis"
                          className="screenshot-image"
                          loading="lazy"
                        />
                        <div className="screenshot-overlay">
                          <h4>Battery Health</h4>
                          <p>Comprehensive battery health analysis and status overview</p>
                        </div>
                      </div>
                      <div className="screenshot-item">
                        <img 
                          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center" 
                          alt="Battery Performance Monitor"
                          className="screenshot-image"
                          loading="lazy"
                        />
                        <div className="screenshot-overlay">
                          <h4>Performance Monitor</h4>
                          <p>Real-time battery performance monitoring and statistics</p>
                        </div>
                      </div>
                      <div className="screenshot-item">
                        <img 
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&crop=center" 
                          alt="Battery Calibration Tool"
                          className="screenshot-image"
                          loading="lazy"
                        />
                        <div className="screenshot-overlay">
                          <h4>Calibration Tool</h4>
                          <p>Advanced battery calibration and optimization tools</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'comparison' && (
                  <div className="tab-panel">
                    <h3>Comparison</h3>
                    <div className="comparison-table">
                      <div className="table-header">
                        <div>Feature</div>
                        <div>Free Version</div>
                        <div>Pro Version</div>
                      </div>
                      <div className="table-row">
                        <div>Basic Analysis</div>
                        <div>✓</div>
                        <div>✓</div>
                      </div>
                      <div className="table-row">
                        <div>Advanced Calibration</div>
                        <div>✗</div>
                        <div>✓</div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'download' && (
                  <div className="tab-panel">
                    <h3>Download</h3>
                    <div className="download-options">
                      <div className="download-card">
                        <h4>Free Version</h4>
                        <p>Basic battery testing features</p>
                        <button className="btn btn-primary">Download Free</button>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'buy' && (
                  <div className="tab-panel">
                    <h3>Buy Now</h3>
                    <div className="pricing-cards">
                      <div className="pricing-card">
                        <h4>Demo Version</h4>
                        <div className="price">Free</div>
                        <button className="btn btn-primary">Free Download</button>
                      </div>
                      <div className="pricing-card">
                        <h4>Single PC License</h4>
                        <div className="price">350 Rs</div>
                        <button className="btn btn-success">Buy Now</button>
                      </div>
                      <div className="pricing-card">
                        <h4>Multi PC License</h4>
                        <div className="price">650 Rs</div>
                        <button className="btn btn-success">Buy Now</button>
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

export default BatteryTesterPage 