import React from 'react'
import {motion} from 'framer-motion'
import { SectionWrapper } from '../hoc'
import { textVariant } from '../utils/motion'
import { styles } from '../style'
import { technologies } from '../constants'
import { BallCanvas } from './canvas'

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h3 className={`${styles.sectionHeadText}`}><span className='section__gradient'>Technologies I work with </span> 🚀 </h3>
        <p className='text-secondary font-[16px] mt-4 leading-[30px]'>Languages and tools that makes my craft.</p>
      </motion.div>

      <div className='flex flex-row flex-wrap justify-center gap-10 mt-10 '>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, '');