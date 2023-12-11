import React from 'react'
import { Connect, Navbar, ProductList } from './components'
import StateContextProvider from '../context/StateContext'

const Shop = () => {
  return (
    <StateContextProvider>
      <div className="relative z-0 bg-primary">
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
              <Navbar />
          </div>
          <ProductList />
          <Connect />
      </div>
    </StateContextProvider>
  )
}

export default Shop;