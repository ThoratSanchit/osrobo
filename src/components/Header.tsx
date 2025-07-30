import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Download } from 'lucide-react'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const location = useLocation()

  // Refs for dropdowns
  const productsRef = useRef<HTMLLIElement>(null)
  const servicesRef = useRef<HTMLLIElement>(null)

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        productsRef.current &&
        !productsRef.current.contains(event.target as Node) &&
        isProductsOpen
      ) {
        setIsProductsOpen(false)
      }
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node) &&
        isServicesOpen
      ) {
        setIsServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isProductsOpen, isServicesOpen])

  // Helper for active link
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
            
            <li
              className="nav-item dropdown"
              ref={productsRef}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button
                className={`nav-link dropdown-toggle ${isProductsOpen ? 'active' : ''}`}
                onClick={() => setIsProductsOpen((open) => !open)}
                onMouseEnter={() => setIsProductsOpen(true)}
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

            <li
              className="nav-item dropdown"
              ref={servicesRef}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className={`nav-link dropdown-toggle ${isServicesOpen ? 'active' : ''}`}
                onClick={() => setIsServicesOpen((open) => !open)}
                onMouseEnter={() => setIsServicesOpen(true)}
              >
                Services
                <ChevronDown className="chevron" />
              </button>
              <ul className={`dropdown-menu ${isServicesOpen ? 'show' : ''}`}>
                <li><Link to="/data-recovery" className="dropdown-link">Data Recovery</Link></li>
                <li><Link to="/remote-installation" className="dropdown-link">Remote-Online Installation</Link></li>
                <li><Link to="/antivirus" className="dropdown-link">Antivirus</Link></li>
                <li><Link to="/computers" className="dropdown-link">Computers</Link></li>
                <li><Link to="/laptops" className="dropdown-link">Laptops</Link></li>
                <li><Link to="/monitors" className="dropdown-link">Monitors</Link></li>
                <li><Link to="/printers" className="dropdown-link">Printers</Link></li>
                <li><Link to="/repair-services" className="dropdown-link">Repair Services</Link></li>
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