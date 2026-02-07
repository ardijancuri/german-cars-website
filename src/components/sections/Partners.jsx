import { useRef, useEffect } from 'react'

const partners = [
  { name: 'D-Tec Dellentechnik', logo: '/images/header.png' },
  { name: 'Kern', logo: '/images/kern.png' },
  { name: 'Keller Blechtechnik', logo: '/images/keller.png' },
  { name: 'Ernst', logo: '/images/ernst.png' },
  { name: 'South-Germany Cars Unlimited', logo: '/images/south-germany.png' },
  { name: 'Bliss', logo: '/images/bliss.png' },
  { name: 'Auto Meyer', logo: '/images/auto-meyer.png' },
  { name: '1a Autoservice', logo: '/images/autoservice.png' },
  { name: 'M³ GmbH', logo: '/images/m3-geruestbau-logo.png' },
  { name: 'TECOBA GmbH', logo: '/images/TECOBA-GmbH_Logo.png' },
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
            color: '#ffffff',
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
            gap: '48px',
            padding: '0 24px',
          }}
          className="sm:gap-16 sm:px-8"
        >
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              style={{
                flexShrink: 0,
                width: '120px',
                height: '48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 0.5,
                filter: 'grayscale(100%) brightness(0.8) invert(0.8)',
                transition: 'all 0.3s ease',
              }}
              className="lg:w-[150px] lg:h-[56px]"
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '0.9'
                e.currentTarget.style.filter = 'grayscale(0%) brightness(1) invert(0)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '0.5'
                e.currentTarget.style.filter = 'grayscale(100%) brightness(0.8) invert(0.8)'
              }}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                style={{
                  maxHeight: '100%',
                  maxWidth: '100%',
                  width: 'auto',
                  height: 'auto',
                  objectFit: 'contain',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
