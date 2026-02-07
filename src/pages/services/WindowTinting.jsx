import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Sun, CheckCircle } from 'lucide-react'

const benefits = [
  'UV-Schutz bis zu 99%',
  'Wärmereduktion im Innenraum',
  'Erhöhte Privatsphäre',
  'Reduzierte Blendung',
  'Schutz der Innenausstattung',
  'Elegante Optik',
]

const tintLevels = [
  { name: '70%', description: 'Leicht - Fast unsichtbar', legal: 'Frontscheibe erlaubt' },
  { name: '50%', description: 'Mittel - Dezente Tönung', legal: 'Vordere Seitenscheiben' },
  { name: '35%', description: 'Dunkel - Guter Sichtschutz', legal: 'Hintere Scheiben' },
  { name: '20%', description: 'Sehr dunkel - Maximale Privatsphäre', legal: 'Nur hintere Scheiben' },
  { name: '5%', description: 'Limousine - Nahezu undurchsichtig', legal: 'Nur Heckscheibe' },
]

export default function WindowTinting() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section
        style={{
          position: 'relative',
          padding: '160px 0 80px',
          overflow: 'hidden',
        }}
        className="lg:pt-52 lg:pb-28"
      >
        <div className="absolute inset-0">
          <img
            src="/images/lambo-car.jpeg"
            alt="Scheibentönung"
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
                <Sun style={{ height: '20px', width: '20px', color: '#ffffff' }} />
              </div>
              <span
                style={{
                  color: '#E54B1E',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                Scheibentönung
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
              <span style={{ color: '#ffffff' }}>Professionelle </span>
              <span className="gradient-text">Scheibentönung</span>
            </h1>
            <p
              style={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '18px',
                lineHeight: 1.7,
                marginBottom: '32px',
              }}
            >
              Mehr Privatsphäre, weniger Hitze und ein eleganter Look. Unsere hochwertigen
              Tönungsfolien bieten optimalen Schutz und erfüllen alle gesetzlichen Anforderungen.
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
                src="/images/mercedes-car.jpeg"
                alt="Scheibentönung Beispiel"
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

      {/* Tint Levels Section */}
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
              Tönungsgrade & Optionen
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
              Von dezent bis dunkel - wählen Sie den passenden Tönungsgrad für Ihr Fahrzeug.
            </p>
          </motion.div>

          <div
            style={{ gap: '16px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6"
          >
            {tintLevels.map((level, index) => (
              <motion.div
                key={level.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{
                  backgroundColor: 'rgba(22, 22, 22, 0.6)',
                  borderRadius: '12px',
                  padding: '24px',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                }}
                className="sm:p-5 lg:p-6"
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(22, 22, 22, 0.9)'
                  e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(22, 22, 22, 0.6)'
                  e.currentTarget.style.transform = 'translateY(0) scale(1)'
                }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    margin: '0 auto 16px',
                    borderRadius: '50%',
                    border: '4px solid #E54B1E',
                    backgroundColor: `rgba(0, 0, 0, ${1 - parseInt(level.name) / 100})`,
                  }}
                />
                <h3
                  style={{
                    fontSize: '24px',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '4px',
                  }}
                >
                  {level.name}
                </h3>
                <p style={{ color: '#E54B1E', fontSize: '14px', marginBottom: '8px' }}>
                  {level.description}
                </p>
                <p style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '12px' }}>
                  {level.legal}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Info */}
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
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              borderRadius: '12px',
              padding: '32px',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.6)'
              e.currentTarget.style.transform = 'translateY(-4px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.4)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <h3
              style={{
                fontSize: '20px',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '16px',
              }}
            >
              Rechtliche Hinweise
            </h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.6)', lineHeight: 1.7 }}>
              In Deutschland gelten strenge Vorschriften für die Scheibentönung. Die Frontscheibe und
              die vorderen Seitenscheiben müssen eine Lichtdurchlässigkeit von mindestens 70% aufweisen.
              Wir beraten Sie gerne zu den gesetzlichen Möglichkeiten und sorgen für eine fachgerechte
              Installation, die alle Vorschriften erfüllt.
            </p>
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
              Interesse geweckt?
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
