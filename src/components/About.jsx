import React from 'react'
import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion'
import { styles } from '../style'
import { services } from '../constants'
import {fadeIn, textVariant } from '../utils/motion'
import {SectionWrapper} from '../hoc'


const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div 
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75 )}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly flex-col items-center '
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='text-secondary font-[16px] mt-4 max-w-3xl mx-auto leading-[30px]'
      >
        Hello stranger! 👋, my name is Iysah and I am a frontend engineer, passionate  about digital products that help people experience everyday life, not endure it.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about');