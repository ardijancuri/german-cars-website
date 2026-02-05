import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/navigation'

const testimonials = [
  {
    quote: 'Die Qualität der Arbeit ist erstklassig. Mein Porsche sieht besser aus als neu. Das Team hat sich um jedes Detail gekümmert und die Übergabe im Showroom war ein echtes Erlebnis.',
    name: 'Michael S.',
    vehicles: 'Porsche 911 GT3, BMW M4',
    image: '/images/testimonial-1.jpg',
  },
  {
    quote: 'Seit Jahren vertraue ich Epic Cars mit meinen Fahrzeugen. Die Lackschutzfolie hat meinen Ferrari vor Steinschlägen bewahrt und das Car Wrapping meines Zweitwagens ist perfekt.',
    name: 'Thomas K.',
    vehicles: 'Ferrari 488, Mercedes AMG GT',
    image: '/images/testimonial-2.jpg',
  },
  {
    quote: 'Professioneller Service von Anfang bis Ende. Die Abholung und Lieferung hat einwandfrei funktioniert, und das Ergebnis übertrifft alle Erwartungen.',
    name: 'Stefan M.',
    vehicles: 'Lamborghini Huracán',
    image: '/images/a68b06.jpeg',
  },
]

export default function Testimonials() {
  return (
    <section
      style={{
        padding: '80px 0',
        backgroundColor: '#000000',
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
            marginBottom: '56px',
          }}
          className="lg:mb-16"
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
            Was unsere Kunden sagen
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
            Erfahren Sie, warum unsere Kunden immer wieder zu uns kommen.
          </p>
        </motion.div>

        {/* Testimonials Slider */}
        <div style={{ position: 'relative' }}>
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: '.testimonial-prev',
              nextEl: '.testimonial-next',
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div
                  style={{
                    backgroundColor: '#161616',
                    borderRadius: '12px',
                    padding: '20px',
                    height: '100%',
                  }}
                  className="sm:p-6 lg:p-8"
                >
                  {/* Quote Icon */}
                  <Quote
                    style={{
                      height: '32px',
                      width: '32px',
                      color: '#E54B1E',
                      marginBottom: '20px',
                      opacity: 0.8,
                    }}
                  />

                  {/* Quote Text */}
                  <blockquote
                    style={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      fontSize: '16px',
                      lineHeight: 1.7,
                      marginBottom: '32px',
                    }}
                    className="lg:text-lg"
                  >
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                      }}
                    />
                    <div>
                      <h4 style={{ color: '#ffffff', fontWeight: 600 }}>{testimonial.name}</h4>
                      <p style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '14px' }}>{testimonial.vehicles}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <button
            className="testimonial-prev hidden lg:flex"
            style={{
              position: 'absolute',
              left: 0,
              top: '50%',
              transform: 'translate(-16px, -50%)',
              zIndex: 10,
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              backgroundColor: 'rgba(22, 22, 22, 0.8)',
              backdropFilter: 'blur(4px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              border: 'none',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#E54B1E'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(22, 22, 22, 0.8)'}
          >
            <ChevronLeft style={{ height: '20px', width: '20px' }} />
          </button>
          <button
            className="testimonial-next hidden lg:flex"
            style={{
              position: 'absolute',
              right: 0,
              top: '50%',
              transform: 'translate(16px, -50%)',
              zIndex: 10,
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              backgroundColor: 'rgba(22, 22, 22, 0.8)',
              backdropFilter: 'blur(4px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              border: 'none',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#E54B1E'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(22, 22, 22, 0.8)'}
          >
            <ChevronRight style={{ height: '20px', width: '20px' }} />
          </button>
        </div>
      </div>
    </section>
  )
}
