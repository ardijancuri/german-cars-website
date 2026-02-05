import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Shield, CheckCircle, Award } from 'lucide-react'

const benefits = [
  'Schutz vor Steinschlägen und Kratzern',
  'UV-beständig und vergilbungsfrei',
  'Selbstheilende Oberfläche',
  'Unsichtbarer Schutz',
  '10 Jahre Garantie auf XPEL-Folien',
  'Rückstandslose Entfernung möglich',
]

const packages = [
  {
    name: 'Basis',
    description: 'Frontpartie-Schutz',
    features: ['Motorhaube', 'Stoßstange vorne', 'Scheinwerfer', 'Spiegel'],
  },
  {
    name: 'Premium',
    description: 'Erweiterter Schutz',
    features: ['Basis-Paket +', 'Kotflügel vorne', 'A-Säulen', 'Türkanten', 'Schweller'],
  },
  {
    name: 'Ultimate',
    description: 'Vollfolierung',
    features: ['Komplettes Fahrzeug', 'Alle lackierten Teile', 'Einstiegsleisten', 'Türgriffe'],
  },
]

export default function PaintProtection() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/gallery-1.jpg"
            alt="Lackschutzfolie"
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
              <Shield className="h-6 w-6 text-accent-orange" />
              <span className="text-accent-orange font-semibold uppercase tracking-wider">Lackschutz</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase mb-6">
              <span className="text-text-primary">XPEL PPF </span>
              <span className="gradient-text">Lackschutzfolie</span>
            </h1>
            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              Schützen Sie Ihren Lack mit der weltweit führenden Lackschutzfolie. XPEL PPF bietet
              unsichtbaren Schutz vor Steinschlägen, Kratzern und Umwelteinflüssen.
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
                src="/images/epic-cars-folierung-3.jpg"
                alt="PPF Anwendung"
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
              Wählen Sie das passende Schutzpaket für Ihr Fahrzeug.
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

      {/* XPEL Certification */}
      <section className="py-16 bg-primary-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-center md:text-left"
          >
            <Award className="h-16 w-16 text-accent-orange" />
            <div>
              <h3 className="text-xl font-bold text-text-primary mb-2">XPEL Zertifizierter Installateur</h3>
              <p className="text-text-secondary">
                Als zertifizierter XPEL-Partner garantieren wir höchste Qualität und professionelle Installation.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
