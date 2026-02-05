import { motion } from 'framer-motion'
import { Award, Users, Clock, Shield } from 'lucide-react'
import Partners from '../components/sections/Partners'

const stats = [
  { number: '500+', label: 'Zufriedene Kunden', icon: Users },
  { number: '10+', label: 'Jahre Erfahrung', icon: Clock },
  { number: '100%', label: 'Qualitätsgarantie', icon: Shield },
  { number: '50+', label: 'Zertifizierungen', icon: Award },
]

const team = [
  {
    name: 'Max Mustermann',
    role: 'Geschäftsführer',
    image: '/images/testimonial-1.jpg',
    description: 'Gründer und Inhaber mit über 15 Jahren Erfahrung in der Fahrzeugveredelung.',
  },
  {
    name: 'Thomas Schmidt',
    role: 'Leiter Werkstatt',
    image: '/images/testimonial-2.jpg',
    description: 'XPEL-zertifizierter Spezialist für Lackschutzfolien und Car Wrapping.',
  },
]

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-primary-black overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/showroom.jpg"
            alt="Epic Cars Showroom"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-black via-primary-black/80 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase mb-6">
              <span className="text-text-primary">Über </span>
              <span>Epic Cars</span>
            </h1>
            <p className="text-text-secondary text-lg leading-relaxed">
              Wir sind Ihr Partner für Fahrzeugveredelung, Performance und Schutz.
              Mit Leidenschaft und Expertise verwandeln wir besondere Autos in echte Unikate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
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
                <span>Geschichte</span>
              </h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  Was als Leidenschaft für außergewöhnliche Fahrzeuge begann, ist heute eines der
                  führenden Unternehmen für Fahrzeugveredelung in Deutschland.
                </p>
                <p>
                  Seit über 10 Jahren widmen wir uns der Perfektion. Jedes Fahrzeug, das unsere
                  Werkstatt verlässt, trägt unsere Handschrift - eine Kombination aus technischer
                  Expertise, hochwertigen Materialien und dem unermüdlichen Streben nach dem Besten.
                </p>
                <p>
                  Unsere Kunden vertrauen uns ihre wertvollsten Fahrzeuge an. Dieses Vertrauen ist
                  unsere größte Motivation und verpflichtet uns zu höchster Qualität.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden"
            >
              <img
                src="/images/epic-cars-service-qualifikation.jpg"
                alt="Epic Cars Team"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-border flex items-center justify-center">
                  <stat.icon className="h-8 w-8 text-text-primary" />
                </div>
                <div className="text-4xl font-black mb-2">{stat.number}</div>
                <div className="text-text-secondary">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-32 bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-black uppercase mb-4">
              <span className="text-text-primary">Unser </span>
              <span>Team</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Die Menschen hinter Epic Cars - leidenschaftlich, qualifiziert und engagiert.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-primary-black rounded-2xl p-6 border border-primary-gray/30"
              >
                <div className="flex items-start space-x-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-text-primary font-bold text-lg">{member.name}</h3>
                    <p className="text-accent-orange text-sm mb-2">{member.role}</p>
                    <p className="text-text-secondary text-sm">{member.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <Partners />
    </div>
  )
}
