import { Link } from 'react-router-dom'
import { Download, ArrowRight, Star } from 'lucide-react'
import { featuredToolsData } from '../api/featuredToolsData'
import { getIconComponent } from '../api/iconHelper'
import './HomePage.css'

const HomePage = () => {
  const featuredTools = featuredToolsData

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Professional
              <span className="hero-title-highlight"> PC Tools</span>
              <br />
              for Tech-Savvy Users
            </h1>
            <p className="hero-subtitle">
              Download powerful utility software designed to enhance your computing experience. 
              From internet blocking to system diagnostics, we've got you covered.
            </p>
            <div className="hero-actions">
              <Link to="/downloads" className="btn btn-primary btn-large">
                <Download size={20} />
                Free Download
              </Link>
              <Link to="/buy" className="btn btn-secondary btn-large">
                View Premium Tools
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-graphic">
              <div className="floating-card card-1">
                {(() => {
                  const IconComponent = getIconComponent('Shield')
                  return <IconComponent size={32} />
                })()}
                <span>Internet Blocker</span>
              </div>
              <div className="floating-card card-2">
                {(() => {
                  const IconComponent = getIconComponent('Battery')
                  return <IconComponent size={32} />
                })()}
                <span>Battery Tester</span>
              </div>
              <div className="floating-card card-3">
                {(() => {
                  const IconComponent = getIconComponent('Monitor')
                  return <IconComponent size={32} />
                })()}
                <span>PC Diagnostic</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tools Section */}
      <section className="featured-tools">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Tools</h2>
            <p className="section-subtitle">
              Discover our most popular utility software trusted by thousands of users worldwide
            </p>
          </div>

          <div className="tools-grid">
            {featuredTools.map((tool) => (
              <div key={tool.id} className="tool-card">
                <div className="tool-header">
                  <div className="tool-icon">
                    {(() => {
                      const IconComponent = getIconComponent(tool.icon)
                      return <IconComponent size={40} />
                    })()}
                  </div>
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
                    <span className="rating-text">{tool.rating}</span>
                  </div>
                </div>

                <h3 className="tool-name">{tool.name}</h3>
                <p className="tool-description">{tool.description}</p>

                <div className="tool-features">
                  {tool.features.map((feature, index) => (
                    <span key={index} className="tool-feature">{feature}</span>
                  ))}
                </div>

                <div className="tool-footer">
                  <span className="downloads-count">{tool.downloads.toLocaleString()} downloads</span>
                  <Link to="/downloads" className="btn btn-outline">
                    Download Free
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3 className="stat-number">500K+</h3>
              <p className="stat-label">Downloads</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">50+</h3>
              <p className="stat-label">Countries</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">4.8</h3>
              <p className="stat-label">Average Rating</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">24/7</h3>
              <p className="stat-label">Support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage 