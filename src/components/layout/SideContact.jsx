import { useState } from 'react'
import { Phone, MessageCircle, Mail } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const contactOptions = [
  {
    id: 'phone',
    icon: Phone,
    label: 'Anrufen',
    value: '+49 123 456 7890',
    href: 'tel:+491234567890',
    color: 'bg-green-500',
  },
  {
    id: 'whatsapp',
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Chat starten',
    href: 'https://wa.me/491234567890',
    color: 'bg-green-600',
  },
  {
    id: 'email',
    icon: Mail,
    label: 'E-Mail',
    value: 'info@epic-cars.de',
    href: 'mailto:info@epic-cars.de',
    color: 'bg-accent-orange',
  },
]

export default function SideContact() {
  const [hoveredId, setHoveredId] = useState(null)
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="fixed right-4 bottom-4 md:right-8 md:bottom-8 z-40">
      {/* Contact Options */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-20 right-0 flex flex-col space-y-3"
          >
            {contactOptions.map((option, index) => (
              <motion.div
                key={option.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                className="relative flex items-center justify-end"
                onMouseEnter={() => setHoveredId(option.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Tooltip */}
                <AnimatePresence>
                  {hoveredId === option.id && (
                    <motion.div
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      className="absolute right-16 bg-primary-dark border border-primary-gray/30 rounded-lg px-4 py-2 shadow-xl whitespace-nowrap"
                    >
                      <p className="text-text-primary font-medium text-sm">{option.label}</p>
                      <p className="text-text-secondary text-xs">{option.value}</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <a
                  href={option.href}
                  target={option.id === 'whatsapp' ? '_blank' : undefined}
                  rel={option.id === 'whatsapp' ? 'noopener noreferrer' : undefined}
                  className={`${option.color} w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-200`}
                >
                  <option.icon className="h-5 w-5" />
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-14 h-14 rounded-full gradient-border flex items-center justify-center text-white shadow-xl hover:scale-105 transition-transform duration-200"
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={{ rotate: isExpanded ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {isExpanded ? (
            <span className="text-2xl font-light">+</span>
          ) : (
            <MessageCircle className="h-6 w-6" />
          )}
        </motion.div>
      </motion.button>
    </div>
  )
}
