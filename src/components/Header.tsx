import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Download } from 'lucide-react'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <span className="logo-text">OsRobo</span>
          <span className="logo-dot">.com</span>
        </Link>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
                Home
              </Link>
            </li>
            
            <li className="nav-item dropdown">
              <button 
                className={`nav-link dropdown-toggle ${isProductsOpen ? 'active' : ''}`}
                onClick={() => setIsProductsOpen(!isProductsOpen)}
              >
                Products
                <ChevronDown className="chevron" />
              </button>
              <ul className={`dropdown-menu ${isProductsOpen ? 'show' : ''}`}>
                <li><Link to="/downloads" className="dropdown-link">Free Downloads</Link></li>
                <li><Link to="/buy" className="dropdown-link">Premium Tools</Link></li>
                <li><Link to="/internet-blocker" className="dropdown-link">Internet Blocker</Link></li>
                <li><Link to="/battery-tester" className="dropdown-link">Battery Tester</Link></li>
                <li><Link to="/downloads" className="dropdown-link">PC Diagnostic</Link></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <button 
                className={`nav-link dropdown-toggle ${isServicesOpen ? 'active' : ''}`}
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                Services
                <ChevronDown className="chevron" />
              </button>
              <ul className={`dropdown-menu ${isServicesOpen ? 'show' : ''}`}>
                <li><Link to="/contact" className="dropdown-link">Technical Support</Link></li>
                <li><Link to="/contact" className="dropdown-link">Custom Development</Link></li>
                <li><Link to="/contact" className="dropdown-link">Consulting</Link></li>
              </ul>
            </li>

            <li className="nav-item">
              <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <Link to="/downloads" className="btn btn-primary">
            <Download size={16} />
            Free Download
          </Link>
          
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header 