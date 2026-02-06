import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'

const services = [
  {
    name: 'XPEL-PPF / Lackschutzfolie',
    path: '/lackschutz',
    image: '/images/porche-car1.jpeg',
    description: 'Schützen Sie Ihren Lack vor Steinschlägen'
  },
  {
    name: 'Car-Wrapping',
    path: '/car-wrapping',
    image: '/images/car-wrapping.jpeg',
    description: 'Individuelle Fahrzeugfolierung'
  },
  {
    name: 'Detailing',
    path: '/detailing',
    image: '/images/detailing.jpeg',
    description: 'High-End Fahrzeugaufbereitung'
  },
  {
    name: 'Scheibentönung',
    path: '/scheibentoenung',
    image: '/images/lambo-car.jpeg',
    description: 'Professionelle Scheibentönung'
  },
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
  const servicesRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close services menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setServicesOpen(false)
      }
    }
    if (servicesOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [servicesOpen])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location])

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: '16px 0',
      }}
    >
      {/* Background layer with backdrop-filter - separate from interactive content */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          transition: 'all 0.3s ease',
          backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
          pointerEvents: 'none',
        }}
      />
      <nav
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 24px',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'relative',
            zIndex: 10,
          }}
        >
          {/* Logo */}
          <Link to="/" style={{ flexShrink: 0, position: 'relative', zIndex: 10 }}>
            <img
              src="/images/autopflege-logo.png"
              alt="Autopflege Aria"
              style={{ height: '40px', width: 'auto' }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div
            className="hidden lg:flex"
            style={{
              alignItems: 'center',
              gap: '40px',
              flex: 1,
              marginLeft: '48px',
              pointerEvents: 'auto',
            }}
          >
            {/* Services Megamenu */}
            <div
              ref={servicesRef}
              style={{ position: 'relative' }}
            >
              <button
                className="nav-link"
                style={{ display: 'flex', alignItems: 'center', gap: '4px' }}
                onClick={() => setServicesOpen(!servicesOpen)}
              >
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
                  <>
                    {/* Backdrop overlay to close menu when clicking outside */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      onClick={() => setServicesOpen(false)}
                      style={{
                        position: 'fixed',
                        inset: 0,
                        top: '72px',
                        backgroundColor: 'transparent',
                        zIndex: 39,
                      }}
                    />
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      style={{
                        position: 'fixed',
                        left: 0,
                        right: 0,
                        top: '72px',
                        backgroundColor: '#ffffff',
                        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
                        zIndex: 40,
                        pointerEvents: 'auto',
                      }}
                    >
                    <div
                      style={{
                        maxWidth: '1400px',
                        margin: '0 auto',
                        padding: '40px 24px',
                      }}
                    >
                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(4, 1fr)',
                          gap: '24px',
                        }}
                      >
                        {services.map((service) => (
                          <Link
                            key={service.path}
                            to={service.path}
                            className="group"
                            style={{
                              display: 'block',
                              textDecoration: 'none',
                              borderRadius: '8px',
                              overflow: 'hidden',
                              transition: 'transform 0.3s ease',
                            }}
                            onClick={() => setServicesOpen(false)}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform = 'translateY(-4px)'
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform = 'translateY(0)'
                            }}
                          >
                            {/* Image */}
                            <div
                              style={{
                                position: 'relative',
                                aspectRatio: '16/10',
                                overflow: 'hidden',
                                borderRadius: '8px',
                                marginBottom: '12px',
                              }}
                            >
                              <img
                                src={service.image}
                                alt={service.name}
                                style={{
                                  width: '100%',
                                  height: '100%',
                                  objectFit: 'cover',
                                  filter: 'grayscale(100%)',
                                  transition: 'filter 0.3s ease, transform 0.3s ease',
                                }}
                                onMouseEnter={(e) => {
                                  e.target.style.filter = 'grayscale(0%)'
                                  e.target.style.transform = 'scale(1.05)'
                                }}
                                onMouseLeave={(e) => {
                                  e.target.style.filter = 'grayscale(100%)'
                                  e.target.style.transform = 'scale(1)'
                                }}
                              />
                            </div>
                            {/* Content */}
                            <div>
                              <h3
                                style={{
                                  color: '#000000',
                                  fontSize: '16px',
                                  fontWeight: 700,
                                  marginBottom: '4px',
                                  transition: 'color 0.3s ease',
                                }}
                                onMouseEnter={(e) => {
                                  e.target.style.color = '#E54B1E'
                                }}
                                onMouseLeave={(e) => {
                                  e.target.style.color = '#000000'
                                }}
                              >
                                {service.name}
                              </h3>
                              <p
                                style={{
                                  color: '#666666',
                                  fontSize: '13px',
                                  lineHeight: 1.5,
                                }}
                              >
                                {service.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                  </>
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

            {/* Right Side - Social Icons & CTA Button */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '24px',
                marginLeft: 'auto',
              }}
            >
              {/* Social Icons */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <a
                  href="https://www.instagram.com/autopflege_aria"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#ffffff',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#E54B1E'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#ffffff'}
                >
                  <FontAwesomeIcon icon={faInstagram} style={{ height: '24px', width: '24px' }} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#ffffff',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#E54B1E'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#ffffff'}
                >
                  <FontAwesomeIcon icon={faFacebook} style={{ height: '24px', width: '24px' }} />
                </a>
              </div>

              {/* CTA Button */}
              <Link
                to="/kontakt"
                className="btn-primary"
                style={{
                  padding: '12px 28px',
                }}
              >
                Angebot anfordern
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="flex lg:hidden"
            style={{
              position: 'relative',
              zIndex: 100,
              width: '44px',
              height: '44px',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              pointerEvents: 'auto',
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
                zIndex: 60,
              }}
            >
              {/* Close button */}
              <button
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '24px',
                  width: '44px',
                  height: '44px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  zIndex: 50,
                }}
                aria-label="Close menu"
              >
                <X style={{ height: '28px', width: '28px' }} />
              </button>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  paddingTop: '80px',
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
