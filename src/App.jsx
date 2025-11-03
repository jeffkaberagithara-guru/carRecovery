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
      <SectionWrapper>
        <Testimonial />
      </SectionWrapper>
      <SectionWrapper>
        <Catalogue />
      </SectionWrapper>
    </>
  )
}

export default App
