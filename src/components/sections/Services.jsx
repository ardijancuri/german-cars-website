import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules'
import { motion } from 'framer-motion'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

const services = [
  {
    title: 'Lackveredelung',
    description: 'Professionelle Lackaufbereitung, Politur und Versiegelung für neuwertigen Glanz.',
    image: '/images/detailing.jpg',
    link: '/lackveredelung',
  },
  {
    title: 'Keramik Beschichtung',
    description: 'Langzeitschutz durch professionelle Keramikversiegelung mit hydrophobem Effekt.',
    image: '/images/porche-car.jpeg',
    link: '/keramik-beschichtung',
  },
  {
    title: 'Felgen Beschichtung',
    description: 'Hochwertige Felgenbeschichtung für optimalen Schutz vor Bremsstaub und Korrosion.',
    image: '/images/lambo-car1.jpeg',
    link: '/felgen-beschichtung',
  },
  {
    title: 'Kratzer Entfernung',
    description: 'Professionelle Kratzerentfernung und Lackreparatur - farbtongenau und werterhaltend.',
    image: '/images/porche-car1.jpeg',
    link: '/kratzer-entfernung',
  },
  {
    title: 'Dellenentfernung',
    description: 'Lackschonende Dellenentfernung mit modernster PDR-Technik ohne Neulackierung.',
    image: '/images/mercedes-car.jpeg',
    link: '/dellenentfernung',
  },
  {
    title: 'Interieur',
    description: 'Professionelle Innenraumaufbereitung - Lederreinigung, Textilpflege und Tiefenreinigung.',
    image: '/images/interior.jpg',
    link: '/interieur',
  },
  {
    title: 'Leasing Rückläufer',
    description: 'Komplette Fahrzeugaufbereitung für eine reibungslose Leasingrückgabe ohne Nachzahlung.',
    image: '/images/herosection1.jpeg',
    link: '/leasing-ruecklaeufer',
  },
  {
    title: 'Scheibentönung',
    description: 'Professionelle Scheibentönung für mehr Privatsphäre, UV-Schutz und eine elegante Optik.',
    image: '/images/window-tinting.jpeg',
    link: '/scheibentoenung',
  },
]

export default function Services() {
  const [swiperInstance, setSwiperInstance] = useState(null)

  return (
    <section
      style={{
        padding: '80px 0',
        backgroundColor: '#000000',
        overflow: 'hidden',
      }}
      className="lg:py-28"
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 24px',
        }}
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          style={{
            textAlign: 'center',
            marginBottom: '40px',
          }}
          className="sm:mb-14 lg:mb-16"
        >
          <h2
            className="headline-decorated"
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
              fontWeight: 900,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '24px',
              color: '#ffffff',
            }}
          >
            Unsere Services
          </h2>
          <p
            style={{
              color: '#FFFFFF',
              maxWidth: '576px',
              margin: '0 auto',
              fontSize: '16px',
              lineHeight: 1.7,
            }}
            className="lg:text-lg"
          >
            Besondere Autos verdienen das Besondere. Entdecken Sie unser umfassendes Angebot für Ihr Fahrzeug.
          </p>
        </motion.div>
      </div>

      {/* Services Coverflow Slider */}
      <Swiper
        modules={[Autoplay, Pagination, EffectCoverflow]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1.2}
        spaceBetween={16}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: '.services-pagination',
        }}
        loop={true}
        onSwiper={setSwiperInstance}
        breakpoints={{
          640: {
            slidesPerView: 1.2,
            spaceBetween: 18,
          },
          768: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 1.8,
            spaceBetween: 22,
          },
          1280: {
            slidesPerView: 2.4,
            spaceBetween: 22,
          },
        }}
        style={{ padding: '0 24px 48px' }}
      >
        {services.map((service, index) => (
          <SwiperSlide key={service.title}>
            <Link
              to={service.link}
              className="group"
              style={{
                display: 'block',
                position: 'relative',
                aspectRatio: '4/3',
                borderRadius: '12px',
                overflow: 'hidden',
                backgroundColor: '#161616',
              }}
              onClick={() => {
                if (swiperInstance) {
                  swiperInstance.slideToLoop(index)
                }
              }}
            >
              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="img-zoom"
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />

              {/* Gradient Overlay */}
              <div className="service-card-overlay" style={{ position: 'absolute', inset: 0 }} />

              {/* Large Background Number */}
              <div
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '15px',
                  fontSize: 'clamp(60px, 15vw, 100px)',
                  fontWeight: 900,
                  fontFamily: 'Orbitron, sans-serif',
                  color: 'rgba(255, 255, 255, 0.5)',
                  lineHeight: 1,
                  userSelect: 'none',
                  zIndex: 1,
                }}
                className="lg:text-[120px]"
              >
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Content */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '16px',
                }}
                className="sm:p-5 lg:p-6"
              >
                <h3
                  style={{
                    color: '#ffffff',
                    fontSize: 'clamp(16px, 4vw, 20px)',
                    fontWeight: 700,
                    marginBottom: '8px',
                    transition: 'color 0.3s ease',
                  }}
                  className="lg:text-2xl group-hover:text-accent-orange"
                >
                  {service.title}
                </h3>
                <p
                  className="line-clamp-2"
                  style={{
                    color: 'rgba(255, 255, 255, 0.6)',
                    fontSize: '14px',
                    lineHeight: 1.6,
                    marginBottom: '16px',
                  }}
                >
                  {service.description}
                </p>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    color: '#E54B1E',
                    fontSize: '14px',
                    fontWeight: 600,
                  }}
                >
                  <span>Mehr erfahren</span>
                  <ArrowRight
                    className="group-hover:translate-x-1"
                    style={{
                      marginLeft: '8px',
                      height: '16px',
                      width: '16px',
                      transition: 'transform 0.3s ease',
                    }}
                  />
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination Dots */}
      <div
        className="services-pagination"
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '8px',
          marginTop: '32px',
        }}
      />
    </section>
  )
}
