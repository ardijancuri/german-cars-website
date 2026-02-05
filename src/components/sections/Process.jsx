import { motion } from 'framer-motion'
import { MessageSquare, FileText, Wrench, Building2, Heart } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Kontakt aufnehmen',
    description: 'Kontaktieren Sie uns über das Formular, telefonisch oder per WhatsApp.',
    icon: MessageSquare,
  },
  {
    number: '02',
    title: 'Angebot erhalten',
    description: 'Sie erhalten ein individuelles Angebot, zugeschnitten auf Ihr Fahrzeug.',
    icon: FileText,
  },
  {
    number: '03',
    title: 'Wir legen los',
    description: 'Unser Team beginnt mit der Arbeit. Abholung Ihres Fahrzeugs möglich.',
    icon: Wrench,
  },
  {
    number: '04',
    title: 'Showroom-Übergabe',
    description: 'Exklusive Übergabe in unserem Showroom mit Getränken und Ambiente.',
    icon: Building2,
  },
  {
    number: '05',
    title: 'Bewunderung genießen',
    description: 'Genießen Sie die Blicke und Komplimente für Ihr veredeltes Fahrzeug.',
    icon: Heart,
  },
]

export default function Process() {
  return (
    <section
      style={{
        padding: '80px 0',
        backgroundColor: '#000000',
        overflow: 'hidden',
      }}
      className="lg:py-28"
    >
      {/* Section Header */}
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 24px',
          marginBottom: '56px',
        }}
        className="lg:mb-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          style={{
            textAlign: 'center',
          }}
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
            <span style={{ color: '#ffffff' }}>Ihr Weg zum </span>
            <span>Epic Car</span>
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
            In fünf einfachen Schritten zu Ihrem veredelten Fahrzeug.
          </p>
        </motion.div>
      </div>

      {/* Process Steps - Full Width 5 Columns Layout */}
      <div
        style={{
          maxWidth: '100%',
          padding: '0 24px',
        }}
      >
        <div
          style={{
            display: 'grid',
            gap: '16px',
          }}
          className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                backgroundColor: 'rgba(22, 22, 22, 0.6)',
                borderRadius: '12px',
                padding: '24px',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
              }}
              className="lg:p-6"
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(22, 22, 22, 0.9)'
                e.currentTarget.style.borderColor = 'rgba(229, 75, 30, 0.5)'
                e.currentTarget.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(22, 22, 22, 0.6)'
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              {/* Step Number - Large Background */}
              <div
                style={{
                  position: 'absolute',
                  top: '-15px',
                  right: '-5px',
                  fontSize: '100px',
                  fontWeight: 900,
                  color: 'rgba(229, 75, 30, 0.15)',
                  lineHeight: 1,
                  userSelect: 'none',
                }}
                className="lg:text-[120px]"
              >
                {step.number}
              </div>

              {/* Icon */}
              <div
                className="gradient-bg"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '56px',
                  height: '56px',
                  borderRadius: '12px',
                  marginBottom: '16px',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                <step.icon style={{ height: '24px', width: '24px', color: '#ffffff' }} />
              </div>

              {/* Content */}
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '10px',
                  }}
                >
                  <span
                    style={{
                      fontSize: '12px',
                      fontWeight: 700,
                      color: '#E54B1E',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                    }}
                  >
                    Schritt {step.number}
                  </span>
                </div>
                <h3
                  style={{
                    color: '#ffffff',
                    fontSize: '18px',
                    fontWeight: 700,
                    marginBottom: '10px',
                    lineHeight: 1.3,
                  }}
                  className="lg:text-xl"
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    color: 'rgba(255, 255, 255, 0.6)',
                    fontSize: '14px',
                    lineHeight: 1.6,
                  }}
                >
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
