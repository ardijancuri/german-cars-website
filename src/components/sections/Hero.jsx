import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import 'swiper/css'
import 'swiper/css/effect-fade'

const heroSlides = [
  {
    image: '/images/herosection.jpeg',
    title: 'Protecting & Customising',
    highlight: 'Autopflege Aria',
    subtitle: 'Schutz, Optik, Performance',
  },
  {
    image: '/images/car-wraping.jpg',
    title: 'Premium',
    highlight: 'Car Wrapping',
    subtitle: 'Individuelle Designs für Ihr Fahrzeug',
  },
  {
    image: '/images/herosection2.jpeg',
    title: 'Professioneller',
    highlight: 'Lackschutz',
    subtitle: 'XPEL PPF Schutzfolien vom Experten',
  },
]

export default function Hero() {
  return (
    <section
      className="h-[60vh] lg:h-screen"
      style={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
      }}
    >
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        style={{ height: '100%', width: '100%' }}
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div style={{ position: 'relative', height: '100%', width: '100%' }}>
              {/* Background Image */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  transform: 'scale(1.05)',
                }}
              />

              {/* Radial Overlay like reference */}
              <div className="hero-overlay" style={{ position: 'absolute', inset: 0 }} />

              {/* Bottom black gradient - mobile only */}
              <div
                className="block lg:hidden"
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '40%',
                  background: 'linear-gradient(to top, #000000 0%, rgba(0,0,0,0.6) 40%, transparent 100%)',
                  pointerEvents: 'none',
                  zIndex: 1,
                }}
              />

              {/* Content - Centered */}
              <div
                style={{
                  position: 'relative',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    maxWidth: '1400px',
                    margin: '0 auto',
                    padding: '0 24px',
                    width: '100%',
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    style={{ textAlign: 'center' }}
                  >
                    <h1
                      style={{
                        fontSize: 'clamp(2rem, 7vw, 4.5rem)',
                        fontWeight: 900,
                        textTransform: 'uppercase',
                        lineHeight: 1.1,
                        letterSpacing: '-0.02em',
                      }}
                    >
                      <span style={{ color: '#ffffff', display: 'block' }}>{slide.title}</span>
                      <span style={{ display: 'block', marginTop: '8px' }}>
                        {slide.highlight}
                      </span>
                    </h1>

                    <p
                      style={{
                        color: '#FFFFFF',
                        fontSize: 'clamp(1.125rem, 3vw, 1.5rem)',
                        marginTop: '24px',
                        marginBottom: '40px',
                        fontWeight: 300,
                        letterSpacing: '0.05em',
                      }}
                    >
                      {slide.subtitle}
                    </p>

                    <Link to="/kontakt" className="btn-primary">
                      Angebot anfordern
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="hidden md:flex"
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <span
          style={{
            color: 'rgba(255, 255, 255, 0.4)',
            fontSize: '12px',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
          }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          style={{
            width: '20px',
            height: '32px',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '9999px',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '6px',
          }}
        >
          <div
            style={{
              width: '4px',
              height: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              borderRadius: '9999px',
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
