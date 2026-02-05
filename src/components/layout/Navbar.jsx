import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const services = [
  { name: 'XPEL-PPF / Lackschutzfolie', path: '/lackschutz' },
  { name: 'Car-Wrapping', path: '/car-wrapping' },
  { name: 'Detailing', path: '/detailing' },
  { name: 'Scheibentönung', path: '/scheibentoenung' },
]

const navLinks = [
  { name: 'Showroom', path: '/showroom' },
  { name: 'Wir', path: '/wir' },
  { name: 'Kontakt', path: '/kontakt' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s ease',
        backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        padding: scrolled ? '12px 0' : '16px 0',
      }}
    >
      <nav
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 24px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <Link to="/" style={{ flexShrink: 0, position: 'relative', zIndex: 10 }}>
            <img
              src="/images/5baf91.svg"
              alt="Epic Cars"
              style={{ height: '40px', width: 'auto' }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div
            className="hidden lg:flex"
            style={{
              alignItems: 'center',
              gap: '40px',
            }}
          >
            {/* Services Dropdown */}
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                Services
                <ChevronDown
                  style={{
                    height: '16px',
                    width: '16px',
                    transition: 'transform 0.2s',
                    transform: servicesOpen ? 'rotate(180deg)' : 'rotate(0)',
                  }}
                />
              </button>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    style={{
                      position: 'absolute',
                      top: '100%',
                      left: 0,
                      paddingTop: '16px',
                    }}
                  >
                    <div
                      style={{
                        width: '256px',
                        backgroundColor: 'rgba(22, 22, 22, 0.95)',
                        backdropFilter: 'blur(12px)',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                      }}
                    >
                      {services.map((service) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          style={{
                            display: 'block',
                            padding: '14px 20px',
                            fontSize: '14px',
                            color: 'rgba(255, 255, 255, 0.8)',
                            textDecoration: 'none',
                            transition: 'all 0.2s',
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.color = '#ffffff'
                            e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.color = 'rgba(255, 255, 255, 0.8)'
                            e.target.style.backgroundColor = 'transparent'
                          }}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Main Nav Links */}
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                {link.name}
              </NavLink>
            ))}

            {/* CTA Button */}
            <Link
              to="/kontakt"
              className="btn-primary"
              style={{
                marginLeft: '16px',
                padding: '12px 28px',
              }}
            >
              Angebot anfordern
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden"
            style={{
              position: 'relative',
              zIndex: 10,
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X style={{ height: '24px', width: '24px' }} /> : <Menu style={{ height: '24px', width: '24px' }} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden"
              style={{
                position: 'fixed',
                inset: 0,
                top: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.98)',
                zIndex: 40,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  paddingTop: '96px',
                  paddingLeft: '24px',
                  paddingRight: '24px',
                  paddingBottom: '32px',
                  overflowY: 'auto',
                }}
              >
                {/* Services Section */}
                <div style={{ marginBottom: '32px' }}>
                  <p
                    style={{
                      fontSize: '12px',
                      color: '#888888',
                      textTransform: 'uppercase',
                      letterSpacing: '0.2em',
                      marginBottom: '16px',
                    }}
                  >
                    Services
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        style={{
                          display: 'block',
                          padding: '12px 0',
                          fontSize: '18px',
                          color: 'rgba(255, 255, 255, 0.9)',
                          textDecoration: 'none',
                          transition: 'color 0.2s',
                        }}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div
                  style={{
                    width: '64px',
                    height: '2px',
                    background: 'linear-gradient(90deg, #E54B1E, #CC0D3F)',
                    marginBottom: '32px',
                  }}
                />

                {/* Main Links */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '32px' }}>
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      style={{
                        display: 'block',
                        padding: '12px 0',
                        fontSize: '18px',
                        color: 'rgba(255, 255, 255, 0.9)',
                        textDecoration: 'none',
                        transition: 'color 0.2s',
                      }}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>

                {/* Mobile CTA */}
                <div style={{ marginTop: 'auto' }}>
                  <Link
                    to="/kontakt"
                    className="btn-primary"
                    style={{
                      display: 'block',
                      width: '100%',
                      textAlign: 'center',
                      padding: '16px 40px',
                    }}
                  >
                    Angebot anfordern
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
