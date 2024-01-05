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
    Connect,
    NewArrivals
  } from './components'
  import StateContextProvider from '../context/StateContext'

export default function HomePage() {
  return (
    <StateContextProvider>
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
          <NewArrivals />
          <div className='relative z-0'>
              <Contact />
              <StarsCanvas />
          </div>
          <Connect />
      </div>
    </StateContextProvider>
  )
}
