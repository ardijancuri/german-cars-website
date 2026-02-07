import { useState } from 'react'
import { Phone, MessageCircle, Mail, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const contactOptions = [
  {
    id: 'phone',
    icon: Phone,
    label: 'Anrufen',
    value: '0176 725 671 99',
    href: 'tel:+4917672567199',
  },
  {
    id: 'whatsapp',
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Chat starten',
    href: 'https://wa.me/4917672567199',
  },
  {
    id: 'email',
    icon: Mail,
    label: 'E-Mail',
    value: 'autopflegearia@gmail.com',
    href: 'mailto:autopflegearia@gmail.com',
  },
]

export default function SideContact() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="fixed right-8 bottom-8 md:right-16 md:bottom-12 z-40">
      {/* Backdrop */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0"
            onClick={() => setIsExpanded(false)}
          />
        )}
      </AnimatePresence>

      {/* Contact Options */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-20 right-0"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}
          >
            {contactOptions.map((option, index) => (
              <motion.a
                key={option.id}
                href={option.href}
                target={option.id === 'whatsapp' ? '_blank' : undefined}
                rel={option.id === 'whatsapp' ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, x: 30, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 30, scale: 0.8 }}
                transition={{ duration: 0.25, delay: index * 0.06 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  justifyContent: 'flex-end',
                }}
              >
                {/* Label */}
                <motion.span
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  style={{
                    background: 'rgba(0, 0, 0, 0.6)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    borderRadius: '8px',
                    padding: '6px 14px',
                    color: '#ffffff',
                    fontSize: '13px',
                    fontWeight: 600,
                    letterSpacing: '0.02em',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {option.label}
                </motion.span>

                {/* Icon Button */}
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #E54B1E 0%, #CC0D3F 100%)',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <option.icon
                    style={{
                      width: '20px',
                      height: '20px',
                      color: '#ffffff',
                      transition: 'color 0.3s ease',
                    }}
                  />
                </div>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        whileTap={{ scale: 0.92 }}
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '14px',
          background: isExpanded
            ? '#1a1a1a'
            : 'linear-gradient(135deg, #E54B1E 0%, #CC0D3F 100%)',
          border: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: 'none',
          transition: 'all 0.3s ease',
        }}
      >
        {/* Pulse ring when closed */}
        {!isExpanded && (
          <motion.div
            animate={{
              scale: [1, 1.8, 1.8],
              opacity: [0.4, 0, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeOut',
            }}
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '14px',
              background: 'linear-gradient(135deg, #E54B1E 0%, #CC0D3F 100%)',
            }}
          />
        )}

        <motion.div
          animate={{ rotate: isExpanded ? 90 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          style={{ position: 'relative', zIndex: 1 }}
        >
          {isExpanded ? (
            <X style={{ width: '22px', height: '22px', color: '#E54B1E' }} />
          ) : (
            <MessageCircle style={{ width: '24px', height: '24px', color: '#ffffff' }} />
          )}
        </motion.div>
      </motion.button>
    </div>
  )
}
