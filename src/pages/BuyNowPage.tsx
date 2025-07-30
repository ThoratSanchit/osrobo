import { Shield, Battery, Monitor, Star, Crown, Check, Clock, Zap } from 'lucide-react'
import './CommonPage.css'
import './BuyNowPage.css'

const BuyNowPage = () => {


  const premiumTools = [
    {
      id: 1,
      name: 'Internet Blocker Pro',
      description: 'Advanced website blocking and productivity tool with enterprise features.',
      icon: Shield,
      price: 49.99,
      originalPrice: 79.99,
      features: [
        'Unlimited website blocking',
        'Advanced scheduling',
        'Password protection',
        'Whitelist management',
        'Real-time monitoring',
        'Export/Import settings',
        'Priority support',
        'Lifetime updates'
      ],
      status: 'available',
      rating: 4.8,
      reviews: 1250
    },
    {
      id: 2,
      name: 'Battery Tester Pro',
      description: 'Professional battery health analysis and optimization software.',
      icon: Battery,
      price: 39.99,
      originalPrice: 59.99,
      features: [
        'Advanced battery analysis',
        'Performance optimization',
        'Real-time monitoring',
        'Battery calibration',
        'Power consumption tracking',
        'Detailed reports',
        'Priority support',
        'Lifetime updates'
      ],
      status: 'coming-soon',
      rating: 4.9,
      reviews: 890
    },
    {
      id: 3,
      name: 'PC Diagnostic Pro',
      description: 'Complete system diagnostics and performance optimization toolkit.',
      icon: Monitor,
      price: 69.99,
      originalPrice: 99.99,
      features: [
        'Advanced system analysis',
        'Hardware monitoring',
        'Driver management',
        'Registry optimization',
        'Disk health check',
        'Network diagnostics',
        'Priority support',
        'Lifetime updates'
      ],
      status: 'available',
      rating: 4.7,
      reviews: 2100
    }
  ]

  const handlePurchase = (toolId: number) => {
    console.log(`Purchasing tool ${toolId}`)
    // In a real app, this would redirect to payment processing
  }

  return (
    <div className="buy-now-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Premium Tools</h1>
          <p className="page-subtitle">
            Unlock the full potential with our premium software solutions
          </p>
        </div>

        {/* Pricing Banner */}
        <div className="pricing-banner">
          <div className="banner-content">
            <Crown size={32} />
            <div className="banner-text">
              <h2>Special Launch Offer</h2>
              <p>Get 40% off all premium tools for a limited time</p>
            </div>
            <div className="banner-timer">
              <Clock size={20} />
              <span>Offer ends in 7 days</span>
            </div>
          </div>
        </div>

        {/* Premium Tools Grid */}
        <div className="premium-tools-grid">
          {premiumTools.map((tool) => (
            <div key={tool.id} className="premium-tool-card">
              {tool.status === 'coming-soon' && (
                <div className="coming-soon-overlay">
                  <span>Coming Soon</span>
                </div>
              )}
              
              <div className="tool-header">
                <div className="tool-icon">
                  <tool.icon size={48} />
                </div>
                <div className="tool-badge">
                  <Crown size={16} />
                  Premium
                </div>
              </div>

              <div className="tool-info">
                <h3 className="tool-name">{tool.name}</h3>
                <p className="tool-description">{tool.description}</p>
                
                <div className="tool-rating">
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        className={i < Math.floor(tool.rating) ? 'star-filled' : 'star-empty'} 
                      />
                    ))}
                  </div>
                  <span className="rating-text">{tool.rating} ({tool.reviews} reviews)</span>
                </div>
              </div>

              <div className="tool-pricing">
                <div className="price-container">
                  <span className="current-price">${tool.price}</span>
                  <span className="original-price">${tool.originalPrice}</span>
                  <span className="discount-badge">Save ${tool.originalPrice - tool.price}</span>
                </div>
                <p className="pricing-note">One-time payment, lifetime access</p>
              </div>

              <div className="tool-features">
                <h4>What's included:</h4>
                <ul className="features-list">
                  {tool.features.map((feature, index) => (
                    <li key={index} className="feature-item">
                      <Check size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="tool-actions">
                {tool.status === 'available' ? (
                  <button 
                    className="btn btn-primary btn-large"
                    onClick={() => handlePurchase(tool.id)}
                  >
                    <Zap size={20} />
                    Buy Now - ${tool.price}
                  </button>
                ) : (
                  <button className="btn btn-secondary btn-large" disabled>
                    <Clock size={20} />
                    Coming Soon
                  </button>
                )}
                
                <button className="btn btn-outline">
                  Try Free Version
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="comparison-section">
          <div className="section-header">
            <h2>Compare Plans</h2>
            <p>See the difference between free and premium versions</p>
          </div>

          <div className="comparison-table">
            <div className="table-header">
              <div className="table-cell">Feature</div>
              <div className="table-cell">Free</div>
              <div className="table-cell">Premium</div>
            </div>
            
            <div className="table-row">
              <div className="table-cell">Basic Functionality</div>
              <div className="table-cell">✓</div>
              <div className="table-cell">✓</div>
            </div>
            
            <div className="table-row">
              <div className="table-cell">Advanced Features</div>
              <div className="table-cell">✗</div>
              <div className="table-cell">✓</div>
            </div>
            
            <div className="table-row">
              <div className="table-cell">Priority Support</div>
              <div className="table-cell">✗</div>
              <div className="table-cell">✓</div>
            </div>
            
            <div className="table-row">
              <div className="table-cell">Lifetime Updates</div>
              <div className="table-cell">✗</div>
              <div className="table-cell">✓</div>
            </div>
            
            <div className="table-row">
              <div className="table-cell">Export/Import</div>
              <div className="table-cell">✗</div>
              <div className="table-cell">✓</div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="faq-section">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
          </div>
          
          <div className="faq-grid">
            <div className="faq-item">
              <h4>What's included in the premium version?</h4>
              <p>Premium versions include advanced features, priority support, lifetime updates, and export/import capabilities.</p>
            </div>
            
            <div className="faq-item">
              <h4>Is there a money-back guarantee?</h4>
              <p>Yes, we offer a 30-day money-back guarantee on all premium purchases.</p>
            </div>
            
            <div className="faq-item">
              <h4>Do I need to pay for updates?</h4>
              <p>No, all premium purchases include lifetime updates at no additional cost.</p>
            </div>
            
            <div className="faq-item">
              <h4>Can I use the software on multiple devices?</h4>
              <p>Yes, you can install and use the software on up to 3 devices with a single license.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BuyNowPage 