import { useRef, useEffect } from 'react'

const partners = [
  { name: '3M', logo: '/images/logo-3m.svg' },
  { name: 'Inozetek', logo: '/images/logo-inozetek.svg' },
  { name: 'XPEL', logo: '/images/logo-xpel.svg' },
  { name: 'Stealth', logo: '/images/logo-stealth.svg' },
  { name: 'PWF', logo: '/images/logo-pwf.svg' },
  { name: 'Avery Dennison', logo: '/images/logo-avery-dennison.svg' },
  { name: 'Ultimate Plus', logo: '/images/logo-ultimate-plus.svg' },
  { name: 'STEK', logo: '/images/logo-stek.png' },
  { name: 'CYS', logo: '/images/logo-cys.png' },
  { name: 'TeckWrap', logo: '/images/logo-teckwrap.png' },
]

export default function Partners() {
  const scrollRef = useRef(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId
    let scrollPos = 0
    const speed = 0.5

    const animate = () => {
      scrollPos += speed
      if (scrollPos >= scrollContainer.scrollWidth / 2) {
        scrollPos = 0
      }
      scrollContainer.scrollLeft = scrollPos
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <section
      style={{
        padding: '48px 0',
        backgroundColor: '#000000',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
      }}
      className="lg:py-16"
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 24px',
          marginBottom: '32px',
        }}
      >
        <h3
          style={{
            textAlign: 'center',
            fontSize: '14px',
            color: 'rgba(255, 255, 255, 0.4)',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
          }}
        >
          Unsere Partner & Materialien
        </h3>
      </div>

      {/* Scrolling Logos */}
      <div
        ref={scrollRef}
        style={{
          display: 'flex',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '64px',
            padding: '0 32px',
          }}
        >
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              style={{
                flexShrink: 0,
                opacity: 0.4,
                filter: 'grayscale(100%)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '1'
                e.currentTarget.style.filter = 'grayscale(0%)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '0.4'
                e.currentTarget.style.filter = 'grayscale(100%)'
              }}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                style={{
                  height: '32px',
                  width: 'auto',
                  objectFit: 'contain',
                }}
                className="lg:h-10"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
