import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { Send, Phone, Mail, MapPin, CheckCircle, AlertCircle } from 'lucide-react'

const serviceOptions = [
  'Lackschutzfolie (PPF)',
  'Car Wrapping',
  'Detailing',
  'Scheibentönung',
  'Sonstiges',
]

export default function ContactForm() {
  const formRef = useRef()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicle: '',
    services: [],
    message: '',
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleServiceChange = (service) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'
      )

      setStatus({
        type: 'success',
        message: 'Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.',
      })
      setFormData({
        name: '',
        email: '',
        phone: '',
        vehicle: '',
        services: [],
        message: '',
      })
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputStyle = {
    width: '100%',
    padding: '14px 16px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '8px',
    color: '#ffffff',
    fontSize: '16px',
    transition: 'border-color 0.3s ease',
    outline: 'none',
  }

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
        <div
          style={{
            display: 'grid',
            gap: '48px',
          }}
          className="grid-cols-1 lg:grid-cols-2 lg:gap-20"
        >
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h2
              style={{
                fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
                fontWeight: 900,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '16px',
                color: '#ffffff',
              }}
            >
              Jetzt Kontakt aufnehmen
            </h2>
            <p
              style={{
                color: '#FFFFFF',
                fontSize: '15px',
                lineHeight: 1.7,
                marginBottom: '32px',
              }}
              className="sm:text-base sm:mb-10 lg:text-lg"
            >
              Haben Sie Fragen oder möchten Sie ein Angebot anfordern? Wir freuen uns auf Ihre Nachricht.
            </p>

            {/* Contact Details - Card-based Layout */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }} className="sm:gap-4">
              <div
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.4)',
                  borderRadius: '12px',
                  padding: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  transition: 'all 0.3s ease',
                }}
                className="sm:p-5 sm:gap-4"
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.6)'
                  e.currentTarget.style.borderColor = 'rgba(229, 75, 30, 0.3)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.4)'
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)'
                }}
              >
                <div
                  className="gradient-bg"
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Phone style={{ height: '20px', width: '20px', color: '#ffffff' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <h4 style={{ color: '#ffffff', fontWeight: 600, marginBottom: '4px', fontSize: '15px' }}>Telefon</h4>
                  <a
                    href="tel:+4917672567199"
                    style={{
                      color: 'rgba(255, 255, 255, 0.6)',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease',
                      fontSize: '15px',
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#E54B1E'}
                    onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.6)'}
                  >
                    0176 725 671 99
                  </a>
                </div>
              </div>

              <div
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.4)',
                  borderRadius: '12px',
                  padding: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  transition: 'all 0.3s ease',
                }}
                className="sm:p-5 sm:gap-4"
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.6)'
                  e.currentTarget.style.borderColor = 'rgba(229, 75, 30, 0.3)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.4)'
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)'
                }}
              >
                <div
                  className="gradient-bg"
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Mail style={{ height: '20px', width: '20px', color: '#ffffff' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <h4 style={{ color: '#ffffff', fontWeight: 600, marginBottom: '4px', fontSize: '15px' }}>E-Mail</h4>
                  <a
                    href="mailto:autopflegearia@gmail.com"
                    style={{
                      color: 'rgba(255, 255, 255, 0.6)',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease',
                      fontSize: '15px',
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#E54B1E'}
                    onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.6)'}
                  >
                    autopflegearia@gmail.com
                  </a>
                </div>
              </div>

              <div
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.4)',
                  borderRadius: '12px',
                  padding: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  transition: 'all 0.3s ease',
                }}
                className="sm:p-5 sm:gap-4"
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.6)'
                  e.currentTarget.style.borderColor = 'rgba(229, 75, 30, 0.3)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.4)'
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)'
                }}
              >
                <div
                  className="gradient-bg"
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <MapPin style={{ height: '20px', width: '20px', color: '#ffffff' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <h4 style={{ color: '#ffffff', fontWeight: 600, marginBottom: '6px', fontSize: '15px' }}>Adresse</h4>
                  <p style={{ color: 'rgba(255, 255, 255, 0.6)', lineHeight: 1.6, fontSize: '15px' }}>
                    Autopflege Aria<br />
                    Forchheimer Straße 17<br />
                    79359 Riegel<br />
                    Beim Car Wash Center
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* Name & Email */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: '16px',
                }}
                className="sm:grid-cols-2"
              >
                <div>
                  <label
                    htmlFor="name"
                    style={{
                      display: 'block',
                      color: '#ffffff',
                      fontSize: '14px',
                      fontWeight: 500,
                      marginBottom: '8px',
                    }}
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                    placeholder="Ihr Name"
                    onFocus={(e) => e.target.style.borderColor = '#E54B1E'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    style={{
                      display: 'block',
                      color: '#ffffff',
                      fontSize: '14px',
                      fontWeight: 500,
                      marginBottom: '8px',
                    }}
                  >
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                    placeholder="ihre@email.de"
                    onFocus={(e) => e.target.style.borderColor = '#E54B1E'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
                  />
                </div>
              </div>

              {/* Phone & Vehicle */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: '16px',
                }}
                className="sm:grid-cols-2"
              >
                <div>
                  <label
                    htmlFor="phone"
                    style={{
                      display: 'block',
                      color: '#ffffff',
                      fontSize: '14px',
                      fontWeight: 500,
                      marginBottom: '8px',
                    }}
                  >
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    style={inputStyle}
                    placeholder="0176 725 671 99"
                    onFocus={(e) => e.target.style.borderColor = '#E54B1E'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
                  />
                </div>
                <div>
                  <label
                    htmlFor="vehicle"
                    style={{
                      display: 'block',
                      color: '#ffffff',
                      fontSize: '14px',
                      fontWeight: 500,
                      marginBottom: '8px',
                    }}
                  >
                    Fahrzeug
                  </label>
                  <input
                    type="text"
                    id="vehicle"
                    name="vehicle"
                    value={formData.vehicle}
                    onChange={handleChange}
                    style={inputStyle}
                    placeholder="z.B. Porsche 911"
                    onFocus={(e) => e.target.style.borderColor = '#E54B1E'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
                  />
                </div>
              </div>

              {/* Services */}
              <div>
                <label
                  style={{
                    display: 'block',
                    color: '#ffffff',
                    fontSize: '14px',
                    fontWeight: 500,
                    marginBottom: '12px',
                  }}
                >
                  Gewünschte Services
                </label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {serviceOptions.map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => handleServiceChange(service)}
                      style={{
                        padding: '8px 12px',
                        borderRadius: '9999px',
                        fontSize: '13px',
                        fontWeight: 500,
                        transition: 'all 0.2s ease',
                        cursor: 'pointer',
                        border: formData.services.includes(service) ? 'none' : '1px solid rgba(255, 255, 255, 0.1)',
                        background: formData.services.includes(service)
                          ? 'linear-gradient(135deg, #E54B1E 0%, #CC0D3F 100%)'
                          : 'rgba(0, 0, 0, 0.5)',
                        color: formData.services.includes(service) ? '#ffffff' : 'rgba(255, 255, 255, 0.6)',
                      }}
                      className="sm:px-4 sm:py-2.5 sm:text-sm"
                    >
                      {service}
                    </button>
                  ))}
                </div>
                <input type="hidden" name="services" value={formData.services.join(', ')} />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  style={{
                    display: 'block',
                    color: '#ffffff',
                    fontSize: '14px',
                    fontWeight: 500,
                    marginBottom: '8px',
                  }}
                >
                  Nachricht *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  style={{
                    ...inputStyle,
                    resize: 'none',
                  }}
                  placeholder="Ihre Nachricht..."
                  onFocus={(e) => e.target.style.borderColor = '#E54B1E'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
                />
              </div>

              {/* Status Message */}
              {status.message && (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '16px',
                    borderRadius: '8px',
                    backgroundColor: status.type === 'success' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                    color: status.type === 'success' ? '#4ade80' : '#f87171',
                  }}
                >
                  {status.type === 'success' ? (
                    <CheckCircle style={{ height: '20px', width: '20px', flexShrink: 0 }} />
                  ) : (
                    <AlertCircle style={{ height: '20px', width: '20px', flexShrink: 0 }} />
                  )}
                  <span style={{ fontSize: '14px' }}>{status.message}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary"
                style={{
                  width: '100%',
                  padding: '16px 40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  opacity: isSubmitting ? 0.5 : 1,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                }}
              >
                <span>{isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}</span>
                <Send style={{ height: '16px', width: '16px' }} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
