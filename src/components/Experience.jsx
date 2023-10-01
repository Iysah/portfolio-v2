import React from 'react'
import {motion} from 'framer-motion'
import { styles } from '../style'
import { experiences } from '../constants'
import { textVariant } from '../utils/motion'
import {SectionWrapper} from '../hoc'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

const ExperienceCard = ({experience}) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: '#1d1836', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid #232631' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img src={experience.icon} alt={experience.company_name} className='h-[60%] w-[60%] object-contain' />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>{experience.company_name}</p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li key={`experience-point-${index}`} className='text-white-100 text-[14px] pl-1 tracking-wider'>{point}</li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h3 className={`${styles.sectionHeadText}`}><span className='section__gradient'>Places I've Worked So far</span> 💻</h3>
        <p className='text-secondary font-[16px] mt-4 leading-[30px]'>Each engagement has played a great impact in my competency.</p>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience}/>
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, 'work')