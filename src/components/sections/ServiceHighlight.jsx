import { useState, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { Plus, Minus } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const hotspots = [
  {
    id: 'lackveredelung',
    title: 'Lackveredelung',
    cta: 'Mehr Schutz',
    description:
      'Professionelle Lackaufbereitung, Hochglanzpolitur und Versiegelung für neuwertigen Glanz und langanhaltenden Schutz.',
    link: '/lackveredelung',
    x: 32,
    y: 58,
  },
  {
    id: 'scheibentoenung',
    title: 'Scheibentönung',
    cta: 'Schau rein',
    description:
      'Professionelle Scheibentönung für mehr Privatsphäre, UV-Schutz und eine elegante Optik Ihres Fahrzeugs.',
    link: '/scheibentoenung',
    x: 48,
    y: 48,
  },
  {
    id: 'keramik',
    title: 'Keramik Beschichtung',
    cta: 'Mehr erfahren',
    description:
      'Langzeitschutz durch hochwertige Keramikversiegelung mit hydrophobem Effekt und intensivem Tiefenglanz.',
    link: '/keramik-beschichtung',
    x: 65,
    y: 50,
  },
  {
    id: 'felgen',
    title: 'Felgen Beschichtung',
    cta: 'Mehr erfahren',
    description:
      'Hochwertige Felgenbeschichtung für optimalen Schutz vor Bremsstaub und Korrosion.',
    link: '/felgen-beschichtung',
    x: 72,
    y: 75,
  },
]

export default function ServiceHighlight() {
  const [activeSpot, setActiveSpot] = useState(null)
  const accordionRefs = useRef({})

  const toggleSpot = (id) => {
    setActiveSpot((prev) => (prev === id ? null : id))
  }

  // Mobile pin click: toggle accordion and scroll to it
  const handleMobilePinClick = useCallback((id) => {
    const newActive = activeSpot === id ? null : id
    setActiveSpot(newActive)
    if (newActive && accordionRefs.current[id]) {
      setTimeout(() => {
        accordionRefs.current[id].scrollIntoView({ behavior: 'smooth', block: 'nearest' })
      }, 100)
    }
  }, [activeSpot])

  return (
    <section
      style={{
        position: 'relative',
        backgroundColor: '#000000',
        overflow: 'hidden',
      }}
    >
      {/* Full-width image container */}
      <div style={{ position: 'relative' }}>
        {/* Car Image - full width, contain on mobile */}
        <img
          src="/images/porche-background.avif"
          alt="Porsche 911 - Perfektion in allen Details"
          className="service-highlight-img"
          style={{
            width: '100%',
            display: 'block',
          }}
        />

        {/* Top black gradient */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '65%',
            background: 'linear-gradient(to bottom, #000000 0%, #000000 15%, rgba(0,0,0,0.85) 30%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.3) 72%, transparent 100%)',
            pointerEvents: 'none',
            zIndex: 2,
          }}
        />

        {/* Bottom black gradient */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '30%',
            background: 'linear-gradient(to top, #000000 0%, rgba(0,0,0,0.5) 40%, transparent 100%)',
            pointerEvents: 'none',
            zIndex: 2,
          }}
        />

        {/* Header text overlaid on top gradient */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 5,
            padding: '4px 24px 0',
            textAlign: 'center',
          }}
          className="service-highlight-header"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="headline-decorated"
              style={{
                fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
                fontWeight: 900,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '16px',
                color: '#ffffff',
              }}
            >
              Perfektion in allen Details
            </h2>
            <p
              style={{
                color: 'rgba(255, 255, 255, 0.8)',
                maxWidth: '576px',
                margin: '0 auto',
                fontSize: '16px',
                lineHeight: 1.7,
              }}
              className="hidden lg:block lg:text-lg"
            >
              Höchste Qualität und Präzision in jedem Arbeitsschritt — für ein Ergebnis, das begeistert.
            </p>
          </motion.div>
        </div>

        {/* Mobile Pin Points - visible on small screens, no modals */}
        <div className="block lg:hidden">
          {hotspots.map((spot) => {
            const isActive = activeSpot === spot.id
            return (
              <button
                key={spot.id}
                onClick={() => handleMobilePinClick(spot.id)}
                style={{
                  position: 'absolute',
                  left: `${spot.x}%`,
                  top: `${spot.y}%`,
                  transform: 'translate(-50%, -50%)',
                  zIndex: 10,
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: isActive ? 'rgba(229, 75, 30, 0.3)' : 'rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(4px)',
                  WebkitBackdropFilter: 'blur(4px)',
                  border: isActive ? '2px solid #E54B1E' : '2px solid rgba(255, 255, 255, 0.6)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  padding: 0,
                }}
                aria-label={spot.title}
              >
                {isActive ? (
                  <Minus style={{ width: '16px', height: '16px', color: '#ffffff' }} />
                ) : (
                  <Plus style={{ width: '16px', height: '16px' }} />
                )}
              </button>
            )
          })}
        </div>

        {/* Desktop Hotspot Pins - with modals */}
        <div className="hidden lg:block">
          {hotspots.map((spot) => {
            const isActive = activeSpot === spot.id
            return (
              <div
                key={spot.id}
                style={{
                  position: 'absolute',
                  left: `${spot.x}%`,
                  top: `${spot.y}%`,
                  transform: 'translate(-50%, -50%)',
                  zIndex: isActive ? 20 : 10,
                }}
              >
                {/* + / - Circle button */}
                <button
                  onClick={() => toggleSpot(spot.id)}
                  style={{
                    position: 'relative',
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    backdropFilter: 'blur(4px)',
                    WebkitBackdropFilter: 'blur(4px)',
                    border: '2px solid rgba(255, 255, 255, 0.6)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    zIndex: 20,
                    padding: 0,
                  }}
                  aria-label={spot.title}
                >
                  {isActive ? (
                    <Minus style={{ width: '22px', height: '22px', color: '#ffffff' }} />
                  ) : (
                    <Plus style={{ width: '20px', height: '20px' }} />
                  )}
                </button>

                {/* Modal - pin sits in top-right corner */}
                <div
                  className={`hotspot-container ${isActive ? 'hotspot-visible' : ''}`}
                  style={{
                    position: 'absolute',
                    top: '-12px',
                    right: '-12px',
                    zIndex: 15,
                  }}
                >
                      <div
                        className={`hotspot-modal ${isActive ? 'hotspot-modal-visible' : ''}`}
                        style={{
                          width: '320px',
                          padding: '24px',
                        }}
                      >
                        {/* Title row */}
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginBottom: '4px',
                          }}
                        >
                          <h3
                            style={{
                              color: '#ffffff',
                              fontSize: '18px',
                              fontWeight: 700,
                              fontStyle: 'italic',
                            }}
                          >
                            {spot.title}
                          </h3>
                        </div>

                        {/* Accent underline */}
                        <div
                          style={{
                            width: '40px',
                            height: '2px',
                            background: 'linear-gradient(90deg, #E54B1E, #CC0D3F)',
                            marginBottom: '12px',
                          }}
                        />

                        <p
                          style={{
                            color: 'rgba(255, 255, 255, 0.7)',
                            fontSize: '14px',
                            lineHeight: 1.6,
                            marginBottom: '20px',
                            fontStyle: 'italic',
                          }}
                        >
                          {spot.description}
                        </p>

                        {/* CTA Button */}
                        <Link
                          to={spot.link}
                          style={{
                            display: 'inline-block',
                            padding: '10px 28px',
                            background: 'transparent',
                            borderRadius: '0',
                            color: '#ffffff',
                            fontSize: '13px',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            textDecoration: 'none',
                            transition: 'all 0.3s ease',
                            border: '2px solid #E54B1E',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'linear-gradient(135deg, #E54B1E 0%, #CC0D3F 100%)'
                            e.currentTarget.style.borderColor = 'transparent'
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'transparent'
                            e.currentTarget.style.borderColor = '#E54B1E'
                          }}
                        >
                          {spot.cta}
                        </Link>
                      </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Mobile active service content - shown below the image when a pin is tapped */}
      <div className="block lg:hidden" ref={(el) => { accordionRefs.current['mobile-content'] = el }}>
        <AnimatePresence mode="wait">
          {activeSpot && (() => {
            const spot = hotspots.find((s) => s.id === activeSpot)
            if (!spot) return null
            return (
              <motion.div
                key={spot.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                style={{
                  padding: '24px 24px 32px',
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)',
                  borderLeft: '3px solid #E54B1E',
                  margin: '0 24px 32px',
                }}
              >
                <h3
                  style={{
                    color: '#ffffff',
                    fontSize: '16px',
                    fontWeight: 700,
                    marginBottom: '10px',
                    fontStyle: 'italic',
                  }}
                >
                  {spot.title}
                </h3>

                <p
                  style={{
                    color: 'rgba(255, 255, 255, 0.6)',
                    fontSize: '14px',
                    lineHeight: 1.6,
                    marginBottom: '16px',
                    fontStyle: 'italic',
                  }}
                >
                  {spot.description}
                </p>

                <Link
                  to={spot.link}
                  style={{
                    display: 'inline-block',
                    padding: '8px 24px',
                    background: 'transparent',
                    borderRadius: '0',
                    color: '#ffffff',
                    fontSize: '12px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    border: '2px solid #E54B1E',
                  }}
                >
                  {spot.cta}
                </Link>
              </motion.div>
            )
          })()}
        </AnimatePresence>
      </div>

      {/* Styles */}
      <style>{`
        .service-highlight-img {
          height: auto;
          min-height: 300px;
          object-fit: cover;
          background-color: #000000;
        }
        .hotspot-container {
          display: none;
        }
        .hotspot-visible {
          display: block !important;
        }
        .hotspot-modal {
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
        }
        @media (min-width: 1024px) {
          .service-highlight-img {
            min-height: 400px;
          }
          .service-highlight-header {
            padding-top: 80px !important;
          }
        }
        @media (min-width: 1440px) {
          .service-highlight-header {
            padding-top: 200px !important;
          }
        }
      `}</style>
    </section>
  )
}
