import { useState } from 'react'
import { Shield, Download, Star, Check } from 'lucide-react'
import './InternetBlockerPage.css'

const InternetBlockerPage = () => {
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
          <h1 className="page-title">App Internet Blocker</h1>
          <p className="page-subtitle">
            Advanced website blocking and productivity tool with scheduling features
          </p>
        </div>

        <div className="product-content">
          <div className="product-info">
            <div className="product-header">
              <div className="product-icon">
                <Shield size={64} />
              </div>
              <div className="product-details">
                <h2>App Internet Blocker (Freeware)</h2>
                <p>Next-generation internet blocking tool for computers and laptops. Yes, it's free for everyone.</p>
                <div className="product-rating">
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} className="star-filled" />
                    ))}
                  </div>
                  <span>4.8 (1,250 reviews)</span>
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
                    <p>App Internet Blocker is a powerful tool designed to help you manage your internet usage and improve productivity. With advanced blocking capabilities and flexible scheduling options, you can take control of your digital environment.</p>
                  </div>
                )}

                {activeTab === 'features' && (
                  <div className="tab-panel">
                    <h3>Features</h3>
                    <ul className="features-list">
                      <li><Check size={16} /> Website blocking with wildcard support</li>
                      <li><Check size={16} /> Time-based scheduling</li>
                      <li><Check size={16} /> Password protection</li>
                      <li><Check size={16} /> Whitelist management</li>
                      <li><Check size={16} /> Real-time monitoring</li>
                      <li><Check size={16} /> Export/Import settings</li>
                    </ul>
                  </div>
                )}

                {activeTab === 'screenshots' && (
                  <div className="tab-panel">
                    <h3>Screenshots</h3>
                    <div className="screenshots-grid">
                      <div className="screenshot-placeholder">Main Interface</div>
                      <div className="screenshot-placeholder">Settings Panel</div>
                      <div className="screenshot-placeholder">Scheduling</div>
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
                        <div>Basic Blocking</div>
                        <div>✓</div>
                        <div>✓</div>
                      </div>
                      <div className="table-row">
                        <div>Advanced Scheduling</div>
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
                        <p>Basic features for personal use</p>
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
                        <div className="price">450 Rs</div>
                        <button className="btn btn-success">Buy Now</button>
                      </div>
                      <div className="pricing-card">
                        <h4>Multi PC License</h4>
                        <div className="price">850 Rs</div>
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

export default InternetBlockerPage 