import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Sparkles, CheckCircle } from 'lucide-react'

const benefits = [
  'Tiefenreinigung innen und außen',
  'Lackaufbereitung und Politur',
  'Keramikversiegelung',
  'Lederreinigung und -pflege',
  'Motorwäsche',
  'Geruchsneutralisierung',
]

const packages = [
  {
    name: 'Basic Detail',
    description: 'Gründliche Reinigung',
    features: [
      'Handwäsche außen',
      'Felgenreinigung',
      'Innenraumreinigung',
      'Staubsaugen',
      'Scheibenreinigung',
    ],
  },
  {
    name: 'Premium Detail',
    description: 'Umfassende Aufbereitung',
    features: [
      'Basic Detail +',
      'Lackpolitur (1-Stufen)',
      'Lederreinigung',
      'Kunststoffpflege',
      'Reifenpflege',
    ],
  },
  {
    name: 'Ultimate Detail',
    description: 'Showroom-Zustand',
    features: [
      'Premium Detail +',
      'Lackkorrektur (2-Stufen)',
      'Keramikversiegelung',
      'Motorwäsche',
      'Glasversiegelung',
    ],
  },
]

export default function Detailing() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/gallery-6.jpg"
            alt="Detailing"
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
              <Sparkles className="h-6 w-6 text-accent-orange" />
              <span className="text-accent-orange font-semibold uppercase tracking-wider">Detailing</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase mb-6">
              <span className="text-text-primary">High-End </span>
              <span className="gradient-text">Fahrzeugaufbereitung</span>
            </h1>
            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              Professionelle Fahrzeugaufbereitung mit Premium-Produkten. Von der gründlichen
              Reinigung bis zur Keramikversiegelung - für ein makelloses Finish.
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
                <span className="text-text-primary">Unsere </span>
                <span className="gradient-text">Leistungen</span>
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
                src="/images/gallery-8.jpg"
                alt="Detailing Prozess"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
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
              <span className="text-text-primary">Unsere </span>
              <span className="gradient-text">Pakete</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Wählen Sie das passende Detailing-Paket für Ihr Fahrzeug.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-primary-dark rounded-2xl p-8 border border-primary-gray/30 hover:border-accent-orange/50 transition-colors duration-300"
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-text-primary mb-2">{pkg.name}</h3>
                  <p className="text-accent-orange">{pkg.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-2 text-text-secondary">
                      <CheckCircle className="h-4 w-4 text-accent-orange" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/kontakt"
                  className="block w-full text-center border border-accent-orange px-6 py-3 rounded-full text-accent-orange font-semibold hover:bg-accent-orange hover:text-white transition-colors duration-200"
                >
                  Anfragen
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
