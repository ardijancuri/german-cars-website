import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Camera } from 'lucide-react'

const showroomImages = [
  { src: '/images/porche-car1.jpeg', title: 'Porsche 911 GT3', service: 'Lackschutzfolie' },
  { src: '/images/lambo-car2.jpeg', title: 'Lamborghini Urus', service: 'Car Wrapping' },
  { src: '/images/mercedes-car.jpeg', title: 'Mercedes G-Klasse', service: 'Scheibentönung' },
  { src: '/images/bmw-car.jpeg', title: 'BMW M4 CS', service: 'Detailing' },
  { src: '/images/car-wrapping.jpeg', title: 'Porsche 911 GT3 RS', service: 'Vollfolierung' },
  { src: '/images/lambo-car1.jpeg', title: 'Maserati MC20', service: 'PPF & Detailing' },
  { src: '/images/detailing.jpeg', title: 'Porsche 911 GT3', service: 'Lackschutz' },
  { src: '/images/porche-car.jpeg', title: 'Porsche 911 GT3', service: 'Car Wrapping' },
  { src: '/images/Lackschutzfolie.jpeg', title: 'Porsche 911', service: 'Lackschutzfolie' },
  { src: '/images/herosection1.jpeg', title: 'Porsche 911 GT3', service: 'Detailing' },
]

export default function Showroom() {
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
            src="/images/porche-car1.jpeg"
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
                <Camera style={{ height: '20px', width: '20px', color: '#ffffff' }} />
              </div>
              <span
                style={{
                  color: '#E54B1E',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                Galerie
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
              <span style={{ color: '#ffffff' }}>Unser </span>
              <span className="gradient-text">Showroom</span>
            </h1>
            <p
              style={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '18px',
                lineHeight: 1.7,
              }}
            >
              Entdecken Sie unsere Arbeiten und lassen Sie sich von den Fahrzeugen inspirieren,
              die wir veredelt haben. Jedes Projekt ist ein Unikat.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
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
                marginBottom: '16px',
                color: '#ffffff',
              }}
            >
              <span style={{ color: '#ffffff' }}>Unsere </span>
              <span className="gradient-text">Arbeiten</span>
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
              Entdecken Sie die Vielfalt unserer Projekte - von Lackschutz bis Car Wrapping.
            </p>
          </motion.div>
          <div
            style={{ gap: '16px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
          >
            {showroomImages.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
                style={{
                  position: 'relative',
                  aspectRatio: '4/3',
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
                  src={item.src}
                  alt={item.title}
                  className="img-zoom"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                {/* Service badge - always visible */}
                <div style={{ position: 'absolute', top: '16px', left: '16px', zIndex: 10 }}>
                  <span
                    className="gradient-bg"
                    style={{
                      padding: '4px 12px',
                      borderRadius: '9999px',
                      fontSize: '12px',
                      fontWeight: 600,
                      color: '#ffffff',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {item.service}
                  </span>
                </div>
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.2), transparent)',
                    opacity: 0.6,
                    transition: 'opacity 0.3s ease',
                  }}
                  className="group-hover:opacity-100"
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '24px',
                    transform: 'translateY(8px)',
                    transition: 'transform 0.3s ease',
                  }}
                  className="group-hover:translate-y-0"
                >
                  <h3
                    style={{
                      color: '#ffffff',
                      fontWeight: 700,
                      fontSize: '18px',
                    }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ color: '#E54B1E', fontSize: '14px' }}>{item.service}</p>
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
              <span style={{ color: '#ffffff' }}>Ihr Fahrzeug </span>
              <span className="gradient-text">hier?</span>
            </h2>
            <p
              style={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '18px',
                marginBottom: '32px',
              }}
              className="lg:text-lg"
            >
              Kontaktieren Sie uns für ein unverbindliches Angebot und werden Sie Teil unserer Showroom-Galerie.
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
