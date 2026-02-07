import { motion } from 'framer-motion'
import { Award, Users, Clock, Shield, Building2 } from 'lucide-react'
import Partners from '../components/sections/Partners'

const stats = [
  { number: '500+', label: 'Zufriedene Kunden', icon: Users },
  { number: '10+', label: 'Jahre Erfahrung', icon: Clock },
  { number: '100%', label: 'Qualitätsgarantie', icon: Shield },
  { number: '50+', label: 'Zertifizierungen', icon: Award },
]


export default function About() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section
        style={{
          position: 'relative',
          padding: '160px 0 80px',
          backgroundColor: '#000000',
          overflow: 'hidden',
        }}
        className="lg:pt-52 lg:pb-28"
      >
        <div className="absolute inset-0">
          <img
            src="/images/herosection.jpeg"
            alt="Epic Cars Showroom"
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.3 }}
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
            style={{ maxWidth: '768px' }}
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
                <Building2 style={{ height: '20px', width: '20px', color: '#ffffff' }} />
              </div>
              <span
                style={{
                  color: '#E54B1E',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                Über Uns
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
              <span style={{ color: '#ffffff' }}>Über </span>
              <span className="gradient-text">Epic Cars</span>
            </h1>
            <p
              style={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '18px',
                lineHeight: 1.7,
              }}
            >
              Wir sind Ihr Partner für Fahrzeugveredelung, Performance und Schutz.
              Mit Leidenschaft und Expertise verwandeln wir besondere Autos in echte Unikate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
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
                <span style={{ color: '#ffffff' }}>Unsere </span>
                <span className="gradient-text">Geschichte</span>
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.7 }}>
                <p>
                  Was als Leidenschaft für außergewöhnliche Fahrzeuge begann, ist heute eines der
                  führenden Unternehmen für Fahrzeugveredelung in Deutschland.
                </p>
                <p>
                  Seit über 10 Jahren widmen wir uns der Perfektion. Jedes Fahrzeug, das unsere
                  Werkstatt verlässt, trägt unsere Handschrift - eine Kombination aus technischer
                  Expertise, hochwertigen Materialien und dem unermüdlichen Streben nach dem Besten.
                </p>
                <p>
                  Unsere Kunden vertrauen uns ihre wertvollsten Fahrzeuge an. Dieses Vertrauen ist
                  unsere größte Motivation und verpflichtet uns zu höchster Qualität.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group"
              style={{
                position: 'relative',
                aspectRatio: '4/3',
                borderRadius: '12px',
                overflow: 'hidden',
              }}
            >
              <img
                src="/images/Lackschutzfolie.jpeg"
                alt="Epic Cars Team"
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

      {/* Stats Section */}
      <section
        style={{
          padding: '64px 0',
          backgroundColor: '#000000',
        }}
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
            className="grid grid-cols-2 lg:grid-cols-4 lg:gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{
                  textAlign: 'center',
                  transition: 'transform 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <div
                  className="gradient-bg"
                  style={{
                    width: '64px',
                    height: '64px',
                    margin: '0 auto 16px',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <stat.icon style={{ height: '32px', width: '32px', color: '#ffffff' }} />
                </div>
                <div
                  className="gradient-text"
                  style={{
                    fontSize: '36px',
                    fontWeight: 900,
                    marginBottom: '8px',
                  }}
                >
                  {stat.number}
                </div>
                <div style={{ color: 'rgba(255, 255, 255, 0.6)' }}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Partners */}
      <Partners />
    </div>
  )
}
