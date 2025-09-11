import Banner from './components/Banner'
import WhyChooseUs from './components/WhyChooseUs'
import Services from './components/Services'
import Reviews from './components/Reviews'
import FAQ from './components/FAQ'
import CallButton from './components/CallButton'
import Whatsapp from './components/Wa'
import Header from './components/Header'
import Footer from './components/Footer'



export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 ">
      <Header/>
      <Banner />
      {/* <Slider/> */}
      <Services />
      <WhyChooseUs />
      <Reviews />
      {/* <Slider1 /> */}
      <FAQ />
      <Whatsapp />
      <CallButton />
      <Footer/>
    </main>
  )
}
