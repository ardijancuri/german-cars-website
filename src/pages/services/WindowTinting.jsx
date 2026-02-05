import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Sun, CheckCircle } from 'lucide-react'

const benefits = [
  'UV-Schutz bis zu 99%',
  'Wärmereduktion im Innenraum',
  'Erhöhte Privatsphäre',
  'Reduzierte Blendung',
  'Schutz der Innenausstattung',
  'Elegante Optik',
]

const tintLevels = [
  { name: '70%', description: 'Leicht - Fast unsichtbar', legal: 'Frontscheibe erlaubt' },
  { name: '50%', description: 'Mittel - Dezente Tönung', legal: 'Vordere Seitenscheiben' },
  { name: '35%', description: 'Dunkel - Guter Sichtschutz', legal: 'Hintere Scheiben' },
  { name: '20%', description: 'Sehr dunkel - Maximale Privatsphäre', legal: 'Nur hintere Scheiben' },
  { name: '5%', description: 'Limousine - Nahezu undurchsichtig', legal: 'Nur Heckscheibe' },
]

export default function WindowTinting() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/gallery-4.jpg"
            alt="Scheibentönung"
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
              <Sun className="h-6 w-6 text-accent-orange" />
              <span className="text-accent-orange font-semibold uppercase tracking-wider">Scheibentönung</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase mb-6">
              <span className="text-text-primary">Professionelle </span>
              <span className="gradient-text">Scheibentönung</span>
            </h1>
            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              Mehr Privatsphäre, weniger Hitze und ein eleganter Look. Unsere hochwertigen
              Tönungsfolien bieten optimalen Schutz und erfüllen alle gesetzlichen Anforderungen.
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
                src="/images/gallery-10.jpg"
                alt="Scheibentönung Beispiel"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tint Levels Section */}
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
              <span className="text-text-primary">Tönungsgrade </span>
              <span className="gradient-text">& Optionen</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Von dezent bis dunkel - wählen Sie den passenden Tönungsgrad für Ihr Fahrzeug.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {tintLevels.map((level, index) => (
              <motion.div
                key={level.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-primary-dark rounded-2xl p-6 border border-primary-gray/30 text-center"
              >
                <div
                  className="w-16 h-16 mx-auto mb-4 rounded-full border-4 border-accent-orange"
                  style={{
                    backgroundColor: `rgba(0, 0, 0, ${1 - parseInt(level.name) / 100})`,
                  }}
                />
                <h3 className="text-2xl font-bold text-text-primary mb-1">{level.name}</h3>
                <p className="text-accent-orange text-sm mb-2">{level.description}</p>
                <p className="text-text-secondary text-xs">{level.legal}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Info */}
      <section className="py-16 bg-primary-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-primary-black rounded-2xl p-8 border border-primary-gray/30"
          >
            <h3 className="text-xl font-bold text-text-primary mb-4">Rechtliche Hinweise</h3>
            <p className="text-text-secondary leading-relaxed">
              In Deutschland gelten strenge Vorschriften für die Scheibentönung. Die Frontscheibe und
              die vorderen Seitenscheiben müssen eine Lichtdurchlässigkeit von mindestens 70% aufweisen.
              Wir beraten Sie gerne zu den gesetzlichen Möglichkeiten und sorgen für eine fachgerechte
              Installation, die alle Vorschriften erfüllt.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-black uppercase mb-6">
              <span className="text-text-primary">Interesse </span>
              <span className="gradient-text">geweckt?</span>
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
