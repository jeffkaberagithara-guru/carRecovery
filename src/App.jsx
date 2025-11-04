import './App.css'
import Header from './components/layout/header'
import Hero from './components/sections/hero'
import Stats from './components/sections/stats'
import SectionWrapper from './components/common/wrapper'
import Expertise from './components/sections/expertise'
import Services from './components/sections/services'
import Explanation from './components/sections/explanation'
import Testimonial from './components/sections/testimonials'
import Catalogue from './components/sections/catalogue'
import Card from './components/common/card'
import Contact from './components/sections/contacts'
import Footer from './components/layout/footer'

function App() {

  return (
    <>
      <Header />
      <Hero />
      <SectionWrapper className="absolute top-160 left-0 right-0 mx-auto w-11/12 md:w-3/4 md:absolute md:top-125 md:left-0 md:right-0 md:mx-auto ">
        <Stats />
      </SectionWrapper>
      <SectionWrapper>
        <Expertise />
      </SectionWrapper>
      <SectionWrapper>
        <Services />
      </SectionWrapper>
      <SectionWrapper>
        <Explanation />
      </SectionWrapper>
      
      <SectionWrapper >
        <Catalogue />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <Card service="Towing & Recovery" cost="45454" image="/Classic car towed 1.jpg"/>
            <Card service="Battery Jumpstart" cost="1555" image="/Mechanic unsplash.jpg"/>
            <Card service="Tire Replacement" cost="1555" image="/Mechanic unsplash.jpg"/>
            <Card service="Fuel Delivery" cost="1555" image="/Mechanic unsplash.jpg"/>
            <Card service="Vehicle Unlocking" cost="1555" image="/Mechanic unsplash.jpg"/>
            <Card service="Rescue & Pull-Out" cost="1555" image="/Mechanic unsplash.jpg"/>
            <Card service="Technical Diagnosis" cost="1555" image="/Mechanic unsplash.jpg"/>
            <Card service="Hybrid System Diagnostics" cost="1555" image="/Mechanic unsplash.jpg"/>
            <Card service="Towing for Electric & Hybrid Vehicles" cost="1555" image="/EV car towed 1.jpg"/>
            </div>
       
      </SectionWrapper>
      <SectionWrapper>
        <Testimonial />
      </SectionWrapper>
      <SectionWrapper className="bg-cyan-600">
        <Contact />
      </SectionWrapper>
      <SectionWrapper className="bg-cyan-950">
        <Footer />
      </SectionWrapper>
    </>
  )
}

export default App
