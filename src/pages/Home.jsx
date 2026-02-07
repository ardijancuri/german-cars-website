import SEO from '../components/SEO'
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
      <SEO
        description="Autopflege Aria - Ihr Experte für professionelle Fahrzeugpflege. XPEL Lackschutzfolie, Car Wrapping, Detailing und Scheibentönung. Schutz, Optik und Performance aus einer Hand."
        keywords="Autopflege, Fahrzeugpflege, Lackschutzfolie, XPEL PPF, Car Wrapping, Folierung, Detailing, Scheibentönung, Fahrzeugveredelung, Lackschutz, Autoaufbereitung, Keramikversiegelung"
        path="/"
      />
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
