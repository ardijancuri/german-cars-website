import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const services = [
  {
    title: 'Lackschutz',
    description: 'XPEL PPF Schutzfolien schützen Ihren Lack vor Steinschlägen, Kratzern und Umwelteinflüssen.',
    image: '/images/gallery-1.jpg',
    link: '/lackschutz',
  },
  {
    title: 'Scheibentönung',
    description: 'Professionelle Scheibentönung für mehr Privatsphäre, UV-Schutz und eine elegante Optik.',
    image: '/images/gallery-4.jpg',
    link: '/scheibentoenung',
  },
  {
    title: 'Detailing',
    description: 'High-End Fahrzeugaufbereitung mit Premium-Produkten für ein makelloses Finish.',
    image: '/images/gallery-6.jpg',
    link: '/detailing',
  },
  {
    title: 'Car Wrapping',
    description: 'Individuelle Fahrzeugfolierung für einzigartige Designs und Farbwechsel.',
    image: '/images/epic-cars-car-wrapping.jpg',
    link: '/car-wrapping',
  },
]

export default function Services() {
  return (
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
        {/* Section Header with decorated lines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
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
            }}
          >
            <span style={{ color: '#ffffff' }}>Unsere </span>
            <span>Services</span>
          </h2>
          <p
            style={{
              color: '#FFFFFF',
              maxWidth: '576px',
              margin: '0 auto',
              fontSize: '16px',
              lineHeight: 1.7,
            }}
            className="lg:text-lg"
          >
            Besondere Autos verdienen das Besondere. Entdecken Sie unser umfassendes Angebot für Ihr Fahrzeug.
          </p>
        </motion.div>

        {/* Services Grid - 2x2 on desktop, stacked on mobile */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '16px',
          }}
          className="lg:gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={service.link}
                className="group"
                style={{
                  display: 'block',
                  position: 'relative',
                  aspectRatio: '16/9',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  backgroundColor: '#161616',
                }}
              >
                {/* Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="img-zoom"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />

                {/* Gradient Overlay */}
                <div className="service-card-overlay" style={{ position: 'absolute', inset: 0 }} />

                {/* Large Background Number */}
                <div
                  style={{
                    position: 'absolute',
                    top: '10px',
                    right: '15px',
                    fontSize: '100px',
                    fontWeight: 900,
                    color: 'rgba(255, 255, 255, 0.5)',
                    lineHeight: 1,
                    userSelect: 'none',
                    zIndex: 1,
                  }}
                  className="lg:text-[120px]"
                >
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Content */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '20px',
                  }}
                  className="lg:p-6"
                >
                  <h3
                    style={{
                      color: '#ffffff',
                      fontSize: '20px',
                      fontWeight: 700,
                      marginBottom: '8px',
                      transition: 'color 0.3s ease',
                    }}
                    className="lg:text-2xl group-hover:text-accent-orange"
                  >
                    {service.title}
                  </h3>
                  <p
                    className="line-clamp-2"
                    style={{
                      color: 'rgba(255, 255, 255, 0.6)',
                      fontSize: '14px',
                      lineHeight: 1.6,
                      marginBottom: '16px',
                    }}
                  >
                    {service.description}
                  </p>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      color: '#E54B1E',
                      fontSize: '14px',
                      fontWeight: 600,
                    }}
                  >
                    <span>Mehr erfahren</span>
                    <ArrowRight
                      className="group-hover:translate-x-1"
                      style={{
                        marginLeft: '8px',
                        height: '16px',
                        width: '16px',
                        transition: 'transform 0.3s ease',
                      }}
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
