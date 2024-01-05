import React from 'react'
import { Connect, Navbar } from './components'
import Blog from './components/Blog'
import StateContextProvider from '../context/StateContext'

function Podcast() {
  return (
    <StateContextProvider>
      <div className="relative z-0 bg-primary">
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
              <Navbar />
          </div>
          <Blog />
          <Connect />
      </div>
    </StateContextProvider>
  )
}

export default Podcast