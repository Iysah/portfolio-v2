import React from 'react'
import { motion, useAnimation } from 'framer-motion';
import { styles } from '../style'
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'
import { testimonials } from '../constants'
import Marquee from "react-fast-marquee";

const FeedbackCard =({ testimonial, designation,  name, company, image }) => {
  return (
    <div
      className='bg-black-200 p-5 rounded-3xl xs:w-[320px] w-full mr-5 mt-10'
    >
      {/* <p className='text-white font-black text-[48px]'>"</p> */}

      <div className='mt-1'>
        <p className='text-white tracking-wider text-[16px] font-rubik'>{testimonial}</p>

        <div className='mt-7 flex justify-between items-center gap-1'>
          <div className='flex flex-1 flex-col'>
            <p className='text-white font-medium text-[14px]'><span className='blue-text-gradient'>@</span>{name}</p>
            <p className='mt-1 text-secondary text-[12px] '>{designation}&nbsp;of&nbsp;{company}</p>
          </div>

          <img src={image} alt={`feedback-by-${name}`} className='w-10 h-10 object-contain rounded-full' />
        </div>

      </div>
    </div>
  )
}

const Feedbacks = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <h3 className={`${styles.sectionHeadText}`}><span className='section__gradient'>Mmmm, a little brag</span> 😉 </h3>
          <p className='text-secondary font-[16px] mt-4 leading-[30px]'>What my clientele and coworkers have said about me.</p>
        </motion.div>

       <Marquee >
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
       </Marquee>

       <Marquee direction='right' >
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
       </Marquee>
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, '');







