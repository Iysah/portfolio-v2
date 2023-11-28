import React from 'react'
import {
    Hero,
    Navbar,
    About,
    Tech,
    Experience,
    Works,
    Feedbacks,
    Contact,
    StarsCanvas,
    Connect
  } from './components'

export default function HomePage() {
  return (
    <div className="relative z-0 bg-primary">
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar />
            <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
            <Contact />
            <StarsCanvas />
        </div>
        <Connect />
    </div>
  )
}
