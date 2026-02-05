import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function ServiceCard({ title, description, image, link, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl bg-primary-dark"
    >
      <Link to={link} className="block">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-black/90 via-primary-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-accent-orange transition-colors duration-200">
            {title}
          </h3>
          <p className="text-text-secondary text-sm line-clamp-2 mb-4">
            {description}
          </p>
          <span className="inline-flex items-center text-accent-orange text-sm font-semibold">
            Mehr erfahren
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </motion.div>
  )
}

export function FullServiceCard({ title, description, image, icon: Icon, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl bg-primary-dark border border-primary-gray/30 hover:border-accent-orange/50 transition-colors duration-300"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        {Icon && (
          <div className="w-12 h-12 rounded-full gradient-border flex items-center justify-center mb-4">
            <Icon className="h-6 w-6 text-text-primary" />
          </div>
        )}
        <h3 className="text-lg font-bold text-text-primary mb-2">
          {title}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  )
}

export function TestimonialCard({ quote, name, image, vehicles }) {
  return (
    <div className="bg-primary-dark rounded-2xl p-8 border border-primary-gray/30">
      <div className="flex items-start space-x-4 mb-6">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h4 className="text-text-primary font-bold">{name}</h4>
          <p className="text-text-secondary text-sm">{vehicles}</p>
        </div>
      </div>
      <blockquote className="text-text-secondary italic leading-relaxed">
        "{quote}"
      </blockquote>
    </div>
  )
}
