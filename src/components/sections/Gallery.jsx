import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules'
import { motion } from 'framer-motion'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

const galleryImages = [
  '/images/gallery-1.jpg',
  '/images/gallery-2.jpg',
  '/images/epic-cars-folierung-3.jpg',
  '/images/gallery-4.jpg',
  '/images/gallery-5.jpg',
  '/images/gallery-6.jpg',
  '/images/gallery-7.jpg',
  '/images/gallery-8.jpg',
  '/images/gallery-9.jpg',
  '/images/gallery-10.jpg',
]

export default function Gallery() {
  const [swiperInstance, setSwiperInstance] = useState(null)

  return (
    <section
      style={{
        padding: '80px 0',
        backgroundColor: '#ffffff',
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
              color: '#000000',
            }}
          >
            Unsere Impressionen
          </h2>
          <p
            style={{
              color: '#000000',
              maxWidth: '576px',
              margin: '0 auto',
              fontSize: '16px',
              lineHeight: 1.7,
            }}
            className="lg:text-lg"
          >
            Ein Blick auf unsere Arbeit und die Fahrzeuge, die wir veredelt haben.
          </p>
        </motion.div>
      </div>

      {/* Gallery Slider - Full Width with Center Focus */}
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
          el: '.gallery-pagination',
        }}
        loop={true}
        onSwiper={setSwiperInstance}
        breakpoints={{
          640: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 2.5,
            spaceBetween: 24,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }}
        style={{ padding: '0 24px 48px' }}
      >
        {galleryImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="gallery-slide-wrapper"
              style={{
                position: 'relative',
                aspectRatio: '4/3',
                borderRadius: '12px',
                overflow: 'hidden',
                cursor: 'pointer',
              }}
              onClick={() => {
                if (swiperInstance) {
                  swiperInstance.slideToLoop(index)
                }
              }}
              onMouseEnter={(e) => {
                const img = e.currentTarget.querySelector('img')
                const overlay = e.currentTarget.querySelector('.hover-overlay')
                if (img) img.style.transform = 'scale(1.1)'
                if (overlay) overlay.style.opacity = '1'
              }}
              onMouseLeave={(e) => {
                const img = e.currentTarget.querySelector('img')
                const overlay = e.currentTarget.querySelector('.hover-overlay')
                if (img) img.style.transform = 'scale(1)'
                if (overlay) overlay.style.opacity = '0'
              }}
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transform: 'scale(1)',
                  transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                }}
              />
              <div
                className="hover-overlay"
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 50%)',
                  opacity: 0,
                  transition: 'opacity 0.4s ease',
                  pointerEvents: 'none',
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination Dots */}
      <div
        className="gallery-pagination"
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
