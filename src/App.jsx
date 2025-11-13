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
import Signup from './components/sections/Signup'
import Login from './components/sections/Login'
import Home from './components/sections/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
function App() {

  return (
    
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<>
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
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                <Card service="Towing & Recovery" quote="Ksh 10,000" image="/2 car towing.avif"/>
                <Card service="Battery Jumpstart" quote="Ksh 1,000" image="/CarBattery.jpg"/>
                <Card service="Tire Replacement" quote="Ksh 1,000" image="/Tyre.jpg"/>
                <Card service="Fuel Delivery" quote="Ksh 1,000" image="/Fuel Road Assistance.webp"/>
                <Card service="Vehicle Unlocking" quote="Ksh 1,500" image="/Unlockdoor1.jpg"/>
                <Card service="Rescue & Pull-Out" quote="Ksh 10,000" image="/Tow truck technician 6.jpg"/>
                <Card service="Technical Diagnosis" quote="Ksh 3,000" image="/Technician unsplash.jpg"/>
                <Card service="Hybrid System Diagnostics" quote="Ksh 3,500" image="/Plug-in recharge unsplash.jpg"/>
                <Card service="Towing for Electric & Hybrid Vehicles" quote="Ksh 12,500" image="/EVtowed.webp"/>
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
        </>} />
        
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home/>} />
              
            </Routes>
          </BrowserRouter>
          
  )
}

export default App
