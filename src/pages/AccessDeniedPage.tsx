import { Link } from 'react-router-dom'
import { Shield, Home, ArrowLeft } from 'lucide-react'
import './AccessDeniedPage.css'

const AccessDeniedPage = () => {
  return (
    <div className="access-denied-page">
      <div className="container">
        <div className="error-content">
          <div className="error-icon">
            <Shield size={80} />
          </div>
          
          <h1 className="error-title">Access Denied</h1>
          
          <div className="error-message">
            <p className="primary-message">
              We're sorry, but you do not have permission to access this resource.
            </p>
            <p className="secondary-message">
              You do not have permission to access this resource.
            </p>
            <p className="help-message">
              If you believe this is an error, please contact the administrator.
            </p>
          </div>

          <div className="error-actions">
            <Link to="/" className="btn btn-primary">
              <Home size={20} />
              Go to Homepage
            </Link>
            <button 
              onClick={() => window.history.back()} 
              className="btn btn-outline"
            >
              <ArrowLeft size={20} />
              Go Back
            </button>
          </div>

          <div className="error-help">
            <h3>Need Help?</h3>
            <p>If you're experiencing issues, please contact our support team:</p>
            <div className="contact-info">
              <p>📧 support@osrobo.com</p>
              <p>📞 +1 (555) 123-4567</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccessDeniedPage 