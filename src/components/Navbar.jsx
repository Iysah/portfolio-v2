import React, { useState } from 'react'
import {styles} from '../style'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)

  return (
    <nav className={`${styles.paddingX} w-full flex items-center fixed py-5 top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link 
        className='flex items-center gap-2' 
        onClick={() => {
          setActive('')
          window.scrollTo(0, 0) 
        }} 
        to={'/'} >
          <img src={logo} alt='Product Dude' className='w-9 h-9 object-contain rounded-md' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>Iysah &nbsp; <span className='sm:block hidden'>| Product Dude</span></p>
        </Link>

        {/* links */}
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li key={link.id} 
            className={`${active === link.title ? 'text-white' : 'text-secondary'} hover:text-white cursor-pointer text-[18px] font-medium`}
            onClick={() => setActive(link.title)}>
              <a href={`${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className='hidden md:block'>
          <a href='#contact' className='text-white hover:text-white cursor-pointer text-[18px] w-[65px] rounded-3xl hire-button border-secondary px-5 py-3' >Hire Me</a>
        </div>

        {/* icons */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={ toggle ? close : menu} 
          alt="menu" 
          className='w-[28px] h-[28px] object-contain cursor-pointer' 
          onClick={() => setToggle(!toggle)}
          />

          <div className={`${!toggle ? 'hidden' : 'flex'} flex-col p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[240px] z-10 rounded-lg`}>

            <ul className='list-none flex flex-col gap-4 items-start justify-end'>
              {navLinks.map((link) => (
                <li key={link.id} 
                className={`${
                  active === link.title ? 'text-white' : 'text-secondary'}font-poppins cursor-pointer text-[16px] font-medium`}
                onClick={() => {
                  setActive(link.title)
                  setToggle(!toggle)
                }}>
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>

            <div className='mt-5' onClick={() => setToggle(!toggle)}>
              <a href='#contact' className='text-white hover:text-white cursor-pointer text-[16px] w-[40px] rounded-2xl hire-button border-secondary px-3 py-1' >Hire Me</a>
            </div>
          </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar