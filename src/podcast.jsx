import React from 'react'
import { Connect, Navbar } from './components'
import Blog from './components/Blog'

function Podcast() {
  return (
    <div className="relative z-0 bg-primary">
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar />
        </div>
        <Blog />
        <Connect />
    </div>
  )
}

export default Podcast