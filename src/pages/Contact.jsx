import { motion } from 'framer-motion'
import ContactForm from '../components/sections/ContactForm'

export default function Contact() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-primary-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase mb-6">
              <span className="text-text-primary">Kontaktieren </span>
              <span className="gradient-text">Sie uns</span>
            </h1>
            <p className="text-text-secondary text-lg max-w-3xl mx-auto">
              Haben Sie Fragen zu unseren Services oder möchten Sie ein individuelles Angebot?
              Wir freuen uns auf Ihre Nachricht.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />

      {/* Map Section */}
      <section className="py-16 bg-primary-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="aspect-[21/9] rounded-2xl overflow-hidden border border-primary-gray/30"
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
      <section className="py-16 bg-primary-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-2xl sm:text-3xl font-black uppercase mb-8">
              <span className="text-text-primary">Öffnungszeiten</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
              <div className="bg-primary-black rounded-lg p-4 border border-primary-gray/30">
                <h3 className="text-text-primary font-semibold mb-2">Montag - Freitag</h3>
                <p className="text-text-secondary">09:00 - 18:00 Uhr</p>
              </div>
              <div className="bg-primary-black rounded-lg p-4 border border-primary-gray/30">
                <h3 className="text-text-primary font-semibold mb-2">Samstag</h3>
                <p className="text-text-secondary">Nach Vereinbarung</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
