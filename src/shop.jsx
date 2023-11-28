import React from 'react'
import { Connect, Navbar, ProductList } from './components'
// import ProductList from './components/ProductList'

const Shop = () => {
  return (
    <div className="relative z-0 bg-primary">
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar />
        </div>
        <ProductList />
        <Connect />
    </div>
  )
}

export default Shop;