import { motion } from 'framer-motion'
import Gallery from '../components/sections/Gallery'

const showroomImages = [
  { src: '/images/gallery-1.jpg', title: 'Porsche 911 GT3', service: 'Lackschutzfolie' },
  { src: '/images/gallery-2.jpg', title: 'BMW M4', service: 'Car Wrapping' },
  { src: '/images/gallery-4.jpg', title: 'Mercedes AMG GT', service: 'Scheibentönung' },
  { src: '/images/gallery-5.jpg', title: 'Audi RS6', service: 'Detailing' },
  { src: '/images/gallery-6.jpg', title: 'Lamborghini Huracán', service: 'Vollfolierung' },
  { src: '/images/gallery-7.jpg', title: 'Ferrari 488', service: 'PPF & Detailing' },
  { src: '/images/gallery-8.jpg', title: 'McLaren 720S', service: 'Lackschutz' },
  { src: '/images/gallery-9.jpg', title: 'Porsche Taycan', service: 'Car Wrapping' },
  { src: '/images/gallery-10.jpg', title: 'BMW M8', service: 'Vollfolierung' },
  { src: '/images/epic-cars-car-wrapping.jpg', title: 'Custom Project', service: 'Car Wrapping' },
]

export default function Showroom() {
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
              <span className="text-text-primary">Unser </span>
              <span className="gradient-text">Showroom</span>
            </h1>
            <p className="text-text-secondary text-lg max-w-3xl mx-auto">
              Entdecken Sie unsere Arbeiten und lassen Sie sich von den Fahrzeugen inspirieren,
              die wir veredelt haben. Jedes Projekt ist ein Unikat.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {showroomImages.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-black/90 via-primary-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-text-primary font-bold text-lg">{item.title}</h3>
                  <p className="text-accent-orange text-sm">{item.service}</p>
                </div>
              </motion.div>
            ))}
          </div>
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
              <span className="text-text-primary">Ihr Fahrzeug </span>
              <span className="gradient-text">hier?</span>
            </h2>
            <p className="text-text-secondary text-lg mb-8">
              Kontaktieren Sie uns für ein unverbindliches Angebot und werden Sie Teil unserer Showroom-Galerie.
            </p>
            <a
              href="/kontakt"
              className="inline-block gradient-border px-8 py-4 rounded-full text-text-primary font-semibold uppercase tracking-wider hover:opacity-90 transition-opacity duration-200"
            >
              Jetzt anfragen
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
