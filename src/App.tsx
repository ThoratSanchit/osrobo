import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import DownloadsPage from './pages/DownloadsPage'
import ContactPage from './pages/ContactPage'
import BuyNowPage from './pages/BuyNowPage'
import InternetBlockerPage from './pages/InternetBlockerPage'
import BatteryTesterPage from './pages/BatteryTesterPage'
import AccessDeniedPage from './pages/AccessDeniedPage'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/downloads" element={<DownloadsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/buy" element={<BuyNowPage />} />
            <Route path="/internet-blocker" element={<InternetBlockerPage />} />
            <Route path="/battery-tester" element={<BatteryTesterPage />} />
            <Route path="/access-denied" element={<AccessDeniedPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
