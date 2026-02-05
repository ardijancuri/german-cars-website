import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Shield, CheckCircle, Award } from 'lucide-react'

const benefits = [
  'Schutz vor Steinschlägen und Kratzern',
  'UV-beständig und vergilbungsfrei',
  'Selbstheilende Oberfläche',
  'Unsichtbarer Schutz',
  '10 Jahre Garantie auf XPEL-Folien',
  'Rückstandslose Entfernung möglich',
]

const packages = [
  {
    name: 'Basis',
    description: 'Frontpartie-Schutz',
    features: ['Motorhaube', 'Stoßstange vorne', 'Scheinwerfer', 'Spiegel'],
  },
  {
    name: 'Premium',
    description: 'Erweiterter Schutz',
    features: ['Basis-Paket +', 'Kotflügel vorne', 'A-Säulen', 'Türkanten', 'Schweller'],
  },
  {
    name: 'Ultimate',
    description: 'Vollfolierung',
    features: ['Komplettes Fahrzeug', 'Alle lackierten Teile', 'Einstiegsleisten', 'Türgriffe'],
  },
]

export default function PaintProtection() {
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
            src="/images/gallery-1.jpg"
            alt="Lackschutzfolie"
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
                <Shield style={{ height: '20px', width: '20px', color: '#ffffff' }} />
              </div>
              <span
                style={{
                  color: '#E54B1E',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                Lackschutz
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
              <span style={{ color: '#ffffff' }}>XPEL PPF </span>
              <span className="gradient-text">Lackschutzfolie</span>
            </h1>
            <p
              style={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '18px',
                lineHeight: 1.7,
                marginBottom: '32px',
              }}
            >
              Schützen Sie Ihren Lack mit der weltweit führenden Lackschutzfolie. XPEL PPF bietet
              unsichtbaren Schutz vor Steinschlägen, Kratzern und Umwelteinflüssen.
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
                src="/images/epic-cars-folierung-3.jpg"
                alt="PPF Anwendung"
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

      {/* Packages Section */}
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
              Unsere Pakete
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
              Wählen Sie das passende Schutzpaket für Ihr Fahrzeug.
            </p>
          </motion.div>

          <div
            style={{ gap: '16px' }}
            className="grid grid-cols-1 md:grid-cols-3 lg:gap-6"
          >
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{
                  backgroundColor: 'rgba(22, 22, 22, 0.6)',
                  borderRadius: '12px',
                  padding: '24px',
                  transition: 'all 0.3s ease',
                }}
                className="sm:p-5 lg:p-6"
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(22, 22, 22, 0.9)'
                  e.currentTarget.style.transform = 'translateY(-4px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(22, 22, 22, 0.6)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                  <div
                    className="gradient-bg"
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 16px',
                    }}
                  >
                    <Award style={{ height: '24px', width: '24px', color: '#ffffff' }} />
                  </div>
                  <h3
                    style={{
                      fontSize: '24px',
                      fontWeight: 700,
                      color: '#ffffff',
                      marginBottom: '8px',
                    }}
                  >
                    {pkg.name}
                  </h3>
                  <p style={{ color: '#E54B1E' }}>{pkg.description}</p>
                </div>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        color: 'rgba(255, 255, 255, 0.6)',
                      }}
                    >
                      <CheckCircle style={{ height: '16px', width: '16px', color: '#E54B1E' }} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/kontakt" className="btn-secondary w-full justify-center">
                  Anfragen
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* XPEL Certification */}
      <section
        style={{
          padding: '64px 0',
          backgroundColor: '#161616',
        }}
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
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              textAlign: 'center',
            }}
            className="md:flex-row md:text-left md:gap-8"
          >
            <div
              className="gradient-bg"
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Award style={{ height: '32px', width: '32px', color: '#ffffff' }} />
            </div>
            <div>
              <h3
                style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: '8px',
                }}
              >
                XPEL Zertifizierter Installateur
              </h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                Als zertifizierter XPEL-Partner garantieren wir höchste Qualität und professionelle Installation.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
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
              Bereit für maximalen Schutz?
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
