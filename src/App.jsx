import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import About from './components/About'
import Marquee from './components/Marquee'
import Projects from './components/Projects'
import Reviews from './components/Reviews'
import CardScr from './components/CardScr'
import FooterMinus from './components/FooterMinus'
import Footer from './components/Footer'
import Eyes from './components/Eyes'
import LocomotiveScroll from 'locomotive-scroll';

function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <div data-scroll-container className='w-full min-h-screen text-white bg-zinc-800'>
        <Navbar />
        <LandingPage />
        <Marquee />
        <About />
        <Eyes />
        <Projects />
        <Reviews />
        <CardScr />
        <FooterMinus />
        <Footer />
      </div>
    </>
  )
}

export default App