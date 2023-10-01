import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
 
const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h3 className={`${styles.sectionHeadText}`}><span className='section__gradient'>Yeah, I work hard </span> 💼 </h3>
        <p className='text-secondary font-[16px] mt-4 leading-[30px]'>Each project is unique. Here are some of my recent works..</p>
      </motion.div>
    </>
  )
}

export default Works