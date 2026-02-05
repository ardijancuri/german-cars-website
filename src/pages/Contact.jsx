import { motion } from 'framer-motion'
import { Mail, Clock, Calendar } from 'lucide-react'
import ContactForm from '../components/sections/ContactForm'

export default function Contact() {
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
            src="/images/showroom.jpg"
            alt="Epic Cars Kontakt"
            className="w-full h-full object-cover"
            style={{ opacity: 0.2 }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.8), #000000)',
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
            style={{ textAlign: 'center' }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
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
                <Mail style={{ height: '20px', width: '20px', color: '#ffffff' }} />
              </div>
              <span
                style={{
                  color: '#E54B1E',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                Kontakt
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
              <span style={{ color: '#ffffff' }}>Kontaktieren </span>
              <span className="gradient-text">Sie uns</span>
            </h1>
            <p
              style={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '18px',
                maxWidth: '768px',
                margin: '0 auto',
                lineHeight: 1.7,
              }}
            >
              Haben Sie Fragen zu unseren Services oder möchten Sie ein individuelles Angebot?
              Wir freuen uns auf Ihre Nachricht.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />

      {/* Map Section */}
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              textAlign: 'center',
              marginBottom: '32px',
            }}
          >
            <h2
              className="headline-decorated"
              style={{
                fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
                fontWeight: 900,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: '#ffffff',
              }}
            >
              <span style={{ color: '#ffffff' }}>Unser </span>
              <span className="gradient-text">Standort</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              aspectRatio: '21/9',
              borderRadius: '12px',
              overflow: 'hidden',
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.4055750474575!2d13.404953976892088!3d52.52000997203654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e373f035901%3A0x42120465b5e3b70!2sBerlin!5e0!3m2!1sde!2sde!4v1704067200000!5m2!1sde!2sde"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Epic Cars Standort"
            />
          </motion.div>
        </div>
      </section>

      {/* Opening Hours */}
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
              marginBottom: '32px',
            }}
          >
            <h2
              className="headline-decorated"
              style={{
                fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
                fontWeight: 900,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: '#ffffff',
              }}
            >
              <span style={{ color: '#ffffff' }}>Öffnungs</span>
              <span className="gradient-text">zeiten</span>
            </h2>
          </motion.div>
          <div
            style={{ gap: '16px', maxWidth: '672px', margin: '0 auto' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:gap-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                borderRadius: '12px',
                padding: '24px',
                textAlign: 'center',
                transition: 'all 0.3s ease',
              }}
              className="sm:p-5 lg:p-6"
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.6)'
                e.currentTarget.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.4)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <div
                className="gradient-bg"
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                }}
              >
                <Clock style={{ height: '24px', width: '24px', color: '#ffffff' }} />
              </div>
              <h3
                style={{
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '18px',
                  marginBottom: '8px',
                }}
              >
                Montag - Freitag
              </h3>
              <p style={{ color: '#E54B1E', fontWeight: 600 }}>09:00 - 18:00 Uhr</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                borderRadius: '12px',
                padding: '24px',
                textAlign: 'center',
                transition: 'all 0.3s ease',
              }}
              className="sm:p-5 lg:p-6"
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.6)'
                e.currentTarget.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.4)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <div
                className="gradient-bg"
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                }}
              >
                <Calendar style={{ height: '24px', width: '24px', color: '#ffffff' }} />
              </div>
              <h3
                style={{
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '18px',
                  marginBottom: '8px',
                }}
              >
                Samstag
              </h3>
              <p style={{ color: '#E54B1E', fontWeight: 600 }}>Nach Vereinbarung</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
