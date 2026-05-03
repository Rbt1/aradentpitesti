import dynamic from 'next/dynamic'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Manifesto from './components/Manifesto'
import Services from './components/Services'
import Technology from './components/Technology'
import DentalJourney from './components/DentalJourney'
import AboutDoctor from './components/AboutDoctor'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

// Dynamic imports pentru componente grele (codul e încărcat doar la scroll)
// const BeforeAfter = dynamic(() => import('./components/BeforeAfter'), {
//   ssr: false,
//   loading: () => (
//     <div className="bg-cream py-24 flex items-center justify-center">
//       <div className="w-8 h-8 border-2 border-forest border-t-transparent rounded-full animate-spin" />
//     </div>
//   ),
// })

const Booking = dynamic(() => import('./components/Booking'), {
  ssr: false,
  loading: () => (
    <div className="bg-forest py-24 flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-cream border-t-transparent rounded-full animate-spin" />
    </div>
  ),
})

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Manifesto />
        <Services />
        <DentalJourney />
        <Technology />
        <AboutDoctor />
        {/* <BeforeAfter /> */}
        <Testimonials />
        <Booking />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
