import { useState } from 'react'
import { Download, Star, FileText, Image, BarChart3, History } from 'lucide-react'
import { toolsData, getToolById } from '../api/toolsData'
import type { Tool } from '../api/toolsData'
import { getIconComponent } from '../api/iconHelper'
import './DownloadsPage.css'

const DownloadsPage = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedTool, setSelectedTool] = useState('internet-blocker')

  const tools = toolsData

  const tabs = [
    { id: 'overview', label: 'Overview', icon: FileText },
    { id: 'features', label: 'Features', icon: BarChart3 },
    { id: 'screenshots', label: 'Screenshots', icon: Image },
    { id: 'changelog', label: 'Changelog', icon: History }
  ]

  const currentTool = tools.find(tool => tool.id === selectedTool) || tools[0]

  const handleDownload = (toolId: string) => {
    // Simulate download
    console.log(`Downloading tool ${toolId}`)
    // In a real app, this would trigger the actual download
  }

  return (
    <div className="downloads-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Download Tools</h1>
          <p className="page-subtitle">
            Choose from our collection of professional utility software tools
          </p>
        </div>

        <div className="downloads-layout">
          {/* Tools List */}
          <div className="tools-list">
            {tools.map((tool) => (
              <div 
                key={tool.id} 
                className={`tool-item ${selectedTool === tool.id ? 'active' : ''}`}
                onClick={() => setSelectedTool(tool.id)}
              >
                <div className="tool-item-icon">
                  {(() => {
                    const IconComponent = getIconComponent(tool.icon)
                    return <IconComponent size={32} />
                  })()}
                </div>
                <div className="tool-item-info">
                  <h3 className="tool-item-name">{tool.name}</h3>
                  <p className="tool-item-desc">{tool.description}</p>
                  <div className="tool-item-meta">
                    <span className="version">v{tool.version}</span>
                    <span className="size">{tool.size}</span>
                    <div className="rating">
                      <Star size={14} className="star-filled" />
                      <span>{tool.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tool Details */}
          <div className="tool-details">
            <div className="tool-header">
              <div className="tool-header-info">
                <div className="tool-header-icon">
                  {(() => {
                    const IconComponent = getIconComponent(currentTool.icon)
                    return <IconComponent size={48} />
                  })()}
                </div>
                <div className="tool-header-text">
                  <h2 className="tool-title">{currentTool.name}</h2>
                  <p className="tool-subtitle">{currentTool.description}</p>
                  <div className="tool-stats">
                    <span className="stat">
                      <Download size={16} />
                      {currentTool.downloads.toLocaleString()} downloads
                    </span>
                    <span className="stat">
                      <Star size={16} className="star-filled" />
                      {currentTool.rating} rating
                    </span>
                  </div>
                </div>
              </div>
              <button 
                className="btn btn-primary btn-large"
                onClick={() => handleDownload(currentTool.id)}
              >
                <Download size={20} />
                Free Download
              </button>
            </div>

            {/* Tabs */}
            <div className="tool-tabs">
              <div className="tab-nav">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <tab.icon size={18} />
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="tab-content">
                {activeTab === 'overview' && (
                  <div className="tab-panel">
                    <h3>Overview</h3>
                    <p>{currentTool.description}</p>
                    <div className="overview-stats">
                      <div className="stat-card">
                        <h4>Version</h4>
                        <p>{currentTool.version}</p>
                      </div>
                      <div className="stat-card">
                        <h4>File Size</h4>
                        <p>{currentTool.size}</p>
                      </div>
                      <div className="stat-card">
                        <h4>Downloads</h4>
                        <p>{currentTool.downloads.toLocaleString()}</p>
                      </div>
                      <div className="stat-card">
                        <h4>Rating</h4>
                        <p>{currentTool.rating}/5.0</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'features' && (
                  <div className="tab-panel">
                    <h3>Features</h3>
                    <ul className="features-list">
                      {currentTool.features.map((feature, index) => (
                        <li key={index} className="feature-item">
                          <span className="feature-bullet">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === 'screenshots' && (
                  <div className="tab-panel">
                    <h3>Screenshots</h3>
                    <div className="screenshots-grid">
                      {currentTool.screenshots.map((screenshot, index) => (
                        <div key={index} className="screenshot-placeholder">
                          <Image size={48} />
                          <span>{screenshot}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'changelog' && (
                  <div className="tab-panel">
                    <h3>Changelog</h3>
                    <div className="changelog-list">
                      {currentTool.changelog.map((entry, index) => (
                        <div key={index} className="changelog-entry">
                          <div className="changelog-header">
                            <h4>Version {entry.version}</h4>
                            <span className="changelog-date">{entry.date}</span>
                          </div>
                          <ul className="changelog-changes">
                            {entry.changes.map((change, changeIndex) => (
                              <li key={changeIndex}>{change}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
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

export default DownloadsPage 