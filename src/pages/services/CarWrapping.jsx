import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Palette, CheckCircle } from 'lucide-react'

const benefits = [
  'Unbegrenzte Farbauswahl',
  'Schutz des Originallacks',
  'Jederzeit reversibel',
  'Individuelle Designs möglich',
  'Matt, Glanz, Satin, Chrom und mehr',
  'Wertsteigerung durch Unikat-Status',
]

const finishes = [
  { name: 'Glanz', description: 'Klassischer Hochglanz-Look', image: '/images/gallery-2.jpg' },
  { name: 'Matt', description: 'Elegante matte Oberfläche', image: '/images/gallery-5.jpg' },
  { name: 'Satin', description: 'Seidiger Halbglanz', image: '/images/gallery-7.jpg' },
  { name: 'Chrom', description: 'Spiegelnde Chromoptik', image: '/images/gallery-9.jpg' },
]

export default function CarWrapping() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/epic-cars-car-wrapping.jpg"
            alt="Car Wrapping"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-black via-primary-black/80 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="flex items-center space-x-2 mb-4">
              <Palette className="h-6 w-6 text-accent-orange" />
              <span className="text-accent-orange font-semibold uppercase tracking-wider">Car Wrapping</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase mb-6">
              <span className="text-text-primary">Individuelle </span>
              <span className="gradient-text">Fahrzeugfolierung</span>
            </h1>
            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              Verleihen Sie Ihrem Fahrzeug einen völlig neuen Look. Mit Premium-Folien von
              3M, Avery Dennison und Inozetek realisieren wir Ihre Vorstellungen.
            </p>
            <Link
              to="/kontakt"
              className="inline-block gradient-border px-8 py-4 rounded-full text-text-primary font-semibold uppercase tracking-wider hover:opacity-90 transition-opacity duration-200"
            >
              Angebot anfordern
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-32 bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-black uppercase mb-6">
                <span className="text-text-primary">Ihre </span>
                <span className="gradient-text">Vorteile</span>
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="h-6 w-6 text-accent-orange flex-shrink-0 mt-0.5" />
                    <span className="text-text-secondary">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-video rounded-2xl overflow-hidden"
            >
              <img
                src="/images/gallery-4.jpg"
                alt="Car Wrapping Prozess"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Finishes Gallery */}
      <section className="py-20 lg:py-32 bg-primary-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-black uppercase mb-4">
              <span className="text-text-primary">Oberflächen & </span>
              <span className="gradient-text">Finishes</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Von klassisch bis ausgefallen - wir bieten eine Vielzahl von Oberflächen für Ihren individuellen Stil.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {finishes.map((finish, index) => (
              <motion.div
                key={finish.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative aspect-[3/4] rounded-2xl overflow-hidden"
              >
                <img
                  src={finish.image}
                  alt={finish.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-black/90 via-primary-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-text-primary mb-1">{finish.name}</h3>
                  <p className="text-text-secondary text-sm">{finish.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-black uppercase mb-6">
              <span className="text-text-primary">Bereit für </span>
              <span className="gradient-text">Ihren neuen Look?</span>
            </h2>
            <p className="text-text-secondary text-lg mb-8">
              Kontaktieren Sie uns für eine kostenlose Beratung und ein individuelles Angebot.
            </p>
            <Link
              to="/kontakt"
              className="inline-block gradient-border px-8 py-4 rounded-full text-text-primary font-semibold uppercase tracking-wider hover:opacity-90 transition-opacity duration-200"
            >
              Jetzt anfragen
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
