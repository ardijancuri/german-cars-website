import { motion } from 'framer-motion'
import { Truck, Award, Settings, Shield, Building2, Coffee } from 'lucide-react'

const fullServices = [
  {
    title: 'Transport',
    description: 'Geschlossener und gesicherter Fahrzeugtransport mit eigenem Anhänger. Abholung und Lieferung europaweit möglich.',
    image: '/images/webseitetransport.jpg',
    icon: Truck,
  },
  {
    title: 'Qualifikation',
    description: 'Jahrelange Erfahrung mit Premium-Fahrzeugen aller Marken. Zertifizierte XPEL-Installateure.',
    image: '/images/epic-cars-service-qualifikation.jpg',
    icon: Award,
  },
  {
    title: 'Ausstattung',
    description: 'Modernste Werkstattausstattung und hochwertige Materialien führender Hersteller.',
    image: '/images/ruf.jpg',
    icon: Settings,
  },
  {
    title: 'Sicherheit',
    description: 'Videoüberwachung, Bewegungsmelder und Alarmanlage. Ihr Fahrzeug ist bei uns sicher aufgehoben.',
    image: '/images/epic-cars-service-sicherheit.jpg',
    icon: Shield,
  },
  {
    title: 'Showroom',
    description: 'Exklusive Fahrzeugübergabe in unserem Showroom mit Ambiente, Getränken und Musik.',
    image: '/images/showroom.jpg',
    icon: Building2,
  },
  {
    title: 'Gästeservice',
    description: 'Persönliche Betreuung, First-Look-Video und Dokumentation Ihres Fahrzeugs.',
    image: '/images/gaesteservice.jpg',
    icon: Coffee,
  },
]

export default function FullService() {
  return (
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
        {/* Section Header */}
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
              color: '#ffffff',
            }}
          >
            Epischer Rundumservice
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
            Bei uns erhalten Sie nicht nur erstklassige Arbeit, sondern ein komplettes Erlebnis rund um Ihr Fahrzeug.
          </p>
        </motion.div>

        {/* Services Grid - 3 columns */}
        <div
          style={{
            display: 'grid',
            gap: '16px',
          }}
          className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
        >
          {fullServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group"
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                borderRadius: '12px',
                overflow: 'hidden',
                transition: 'background-color 0.3s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.6)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.4)'}
            >
              {/* Image */}
              <div
                style={{
                  position: 'relative',
                  aspectRatio: '16/10',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={service.image}
                  alt={service.title}
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
                    background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)',
                  }}
                />
              </div>

              {/* Content */}
              <div
                style={{
                  padding: '16px',
                }}
                className="sm:p-5 lg:p-6"
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                  }}
                  className="sm:gap-4"
                >
                  <div
                    className="gradient-bg"
                    style={{
                      flexShrink: 0,
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <service.icon style={{ height: '18px', width: '18px', color: '#ffffff' }} className="sm:h-5 sm:w-5" />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h3
                      style={{
                        color: '#ffffff',
                        fontSize: '16px',
                        fontWeight: 700,
                        marginBottom: '6px',
                      }}
                      className="sm:text-lg"
                    >
                      {service.title}
                    </h3>
                    <p
                      style={{
                        color: 'rgba(255, 255, 255, 0.5)',
                        fontSize: '13px',
                        lineHeight: 1.6,
                      }}
                      className="sm:text-sm"
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
