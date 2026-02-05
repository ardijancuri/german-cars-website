import Hero from '../components/sections/Hero'
import Services from '../components/sections/Services'
import FullService from '../components/sections/FullService'
import Testimonials from '../components/sections/Testimonials'
import Gallery from '../components/sections/Gallery'
import Partners from '../components/sections/Partners'
import Process from '../components/sections/Process'
import ContactForm from '../components/sections/ContactForm'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <FullService />
      <Testimonials />
      <Gallery />
      <Partners />
      <Process />
      <ContactForm />
    </>
  )
}
