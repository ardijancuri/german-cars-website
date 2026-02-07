import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import SideContact from './components/layout/SideContact'
import Home from './pages/Home'
import Showroom from './pages/Showroom'
import About from './pages/About'
import Contact from './pages/Contact'
import PaintFinishing from './pages/services/PaintFinishing'
import CeramicCoating from './pages/services/CeramicCoating'
import WheelCoating from './pages/services/WheelCoating'
import ScratchRemoval from './pages/services/ScratchRemoval'
import DentRemoval from './pages/services/DentRemoval'
import Interior from './pages/services/Interior'
import LeaseReturn from './pages/services/LeaseReturn'
import WindowTinting from './pages/services/WindowTinting'

function App() {
  return (
    <div className="min-h-screen bg-primary-black">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/showroom" element={<Showroom />} />
          <Route path="/wir" element={<About />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/lackveredelung" element={<PaintFinishing />} />
          <Route path="/keramik-beschichtung" element={<CeramicCoating />} />
          <Route path="/felgen-beschichtung" element={<WheelCoating />} />
          <Route path="/kratzer-entfernung" element={<ScratchRemoval />} />
          <Route path="/dellenentfernung" element={<DentRemoval />} />
          <Route path="/interieur" element={<Interior />} />
          <Route path="/leasing-ruecklaeufer" element={<LeaseReturn />} />
          <Route path="/scheibentoenung" element={<WindowTinting />} />
        </Routes>
      </main>
      <Footer />
      <SideContact />
    </div>
  )
}

export default App
