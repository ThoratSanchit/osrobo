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
import DataRecoveryPage from './pages/DataRecoveryPage'
import RemoteInstallationPage from './pages/RemoteInstallationPage'
import AntivirusPage from './pages/AntivirusPage'
import ComputersPage from './pages/ComputersPage'
import LaptopsPage from './pages/LaptopsPage'
import MonitorsPage from './pages/MonitorsPage'
import PrintersPage from './pages/PrintersPage'
import RepairServicesPage from './pages/RepairServicesPage'
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
                 <Route path="/data-recovery" element={<DataRecoveryPage />} />
                 <Route path="/remote-installation" element={<RemoteInstallationPage />} />
                 <Route path="/antivirus" element={<AntivirusPage />} />
                 <Route path="/computers" element={<ComputersPage />} />
                 <Route path="/laptops" element={<LaptopsPage />} />
                 <Route path="/monitors" element={<MonitorsPage />} />
                 <Route path="/printers" element={<PrintersPage />} />
                 <Route path="/repair-services" element={<RepairServicesPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
