import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Palette, CheckCircle } from 'lucide-react'

const benefits = [
  'Unbegrenzte Farbauswahl',
  'Schutz des Originallacks',
  'Jederzeit reversibel',
  'Individuelle Designs möglich',
  'Matt, Glanz, Satin, Chrom und mehr',
  'Wertsteigerung durch Unikat-Status',
]

const finishes = [
  { name: 'Glanz', description: 'Klassischer Hochglanz-Look', image: '/images/gallery-2.jpg' },
  { name: 'Matt', description: 'Elegante matte Oberfläche', image: '/images/gallery-5.jpg' },
  { name: 'Satin', description: 'Seidiger Halbglanz', image: '/images/gallery-7.jpg' },
  { name: 'Chrom', description: 'Spiegelnde Chromoptik', image: '/images/gallery-9.jpg' },
]

export default function CarWrapping() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section
        style={{
          position: 'relative',
          padding: '80px 0',
          overflow: 'hidden',
        }}
        className="lg:py-28"
      >
        <div className="absolute inset-0">
          <img
            src="/images/epic-cars-car-wrapping.jpg"
            alt="Car Wrapping"
            className="w-full h-full object-cover"
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to right, #000000, rgba(0,0,0,0.8), transparent)',
            }}
          />
        </div>
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 24px',
            position: 'relative',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ maxWidth: '672px' }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '24px',
              }}
            >
              <div
                className="gradient-bg"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Palette style={{ height: '20px', width: '20px', color: '#ffffff' }} />
              </div>
              <span
                style={{
                  color: '#E54B1E',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                Car Wrapping
              </span>
            </div>
            <h1
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: 900,
                textTransform: 'uppercase',
                marginBottom: '24px',
                lineHeight: 1.1,
              }}
            >
              <span style={{ color: '#ffffff' }}>Individuelle </span>
              <span className="gradient-text">Fahrzeugfolierung</span>
            </h1>
            <p
              style={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '18px',
                lineHeight: 1.7,
                marginBottom: '32px',
              }}
            >
              Verleihen Sie Ihrem Fahrzeug einen völlig neuen Look. Mit Premium-Folien von
              3M, Avery Dennison und Inozetek realisieren wir Ihre Vorstellungen.
            </p>
            <Link to="/kontakt" className="btn-primary">
              Angebot anfordern
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        style={{
          padding: '80px 0',
          backgroundColor: '#161616',
        }}
        className="lg:py-28"
      >
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 24px',
          }}
        >
          <div
            style={{ gap: '16px' }}
            className="grid grid-cols-1 lg:grid-cols-2 lg:gap-6 items-center"
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                style={{
                  fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  marginBottom: '24px',
                }}
              >
                <span style={{ color: '#ffffff' }}>Ihre </span>
                <span className="gradient-text">Vorteile</span>
              </h2>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                    }}
                  >
                    <CheckCircle style={{ height: '24px', width: '24px', color: '#E54B1E', flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ color: 'rgba(255, 255, 255, 0.7)' }}>{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group"
              style={{
                position: 'relative',
                aspectRatio: '16/9',
                borderRadius: '12px',
                overflow: 'hidden',
              }}
            >
              <img
                src="/images/gallery-4.jpg"
                alt="Car Wrapping Prozess"
                className="img-zoom"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.3), transparent)',
                  opacity: 0,
                  transition: 'opacity 0.5s ease',
                }}
                className="group-hover:opacity-100"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Finishes Gallery */}
      <section
        style={{
          padding: '80px 0',
          backgroundColor: '#000000',
        }}
        className="lg:py-28"
      >
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 24px',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              textAlign: 'center',
              marginBottom: '56px',
            }}
            className="lg:mb-20"
          >
            <h2
              className="headline-decorated"
              style={{
                fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
                fontWeight: 900,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '24px',
                color: '#ffffff',
              }}
            >
              Oberflächen & Finishes
            </h2>
            <p
              style={{
                color: 'rgba(255, 255, 255, 0.7)',
                maxWidth: '576px',
                margin: '0 auto',
                fontSize: '16px',
                lineHeight: 1.7,
              }}
              className="lg:text-lg"
            >
              Von klassisch bis ausgefallen - wir bieten eine Vielzahl von Oberflächen für Ihren individuellen Stil.
            </p>
          </motion.div>

          <div
            style={{ gap: '16px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
          >
            {finishes.map((finish, index) => (
              <motion.div
                key={finish.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
                style={{
                  position: 'relative',
                  aspectRatio: '3/4',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <img
                  src={finish.image}
                  alt={finish.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                  }}
                  className="group-hover:scale-110"
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '24px',
                  }}
                >
                  <h3
                    style={{
                      fontSize: '20px',
                      fontWeight: 700,
                      color: '#ffffff',
                      marginBottom: '4px',
                    }}
                  >
                    {finish.name}
                  </h3>
                  <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '14px' }}>
                    {finish.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          padding: '80px 0',
          backgroundColor: '#161616',
        }}
        className="lg:py-28"
      >
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 24px',
            textAlign: 'center',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="headline-decorated"
              style={{
                fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
                fontWeight: 900,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '24px',
                color: '#ffffff',
              }}
            >
              Bereit für Ihren neuen Look?
            </h2>
            <p
              style={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '18px',
                marginBottom: '32px',
              }}
              className="lg:text-lg"
            >
              Kontaktieren Sie uns für eine kostenlose Beratung und ein individuelles Angebot.
            </p>
            <Link to="/kontakt" className="btn-primary">
              Jetzt anfragen
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
