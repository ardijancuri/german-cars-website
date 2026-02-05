import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import SideContact from './components/layout/SideContact'
import Home from './pages/Home'
import Showroom from './pages/Showroom'
import About from './pages/About'
import Contact from './pages/Contact'
import PaintProtection from './pages/services/PaintProtection'
import CarWrapping from './pages/services/CarWrapping'
import Detailing from './pages/services/Detailing'
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
          <Route path="/lackschutz" element={<PaintProtection />} />
          <Route path="/car-wrapping" element={<CarWrapping />} />
          <Route path="/detailing" element={<Detailing />} />
          <Route path="/scheibentoenung" element={<WindowTinting />} />
        </Routes>
      </main>
      <Footer />
      <SideContact />
    </div>
  )
}

export default App
