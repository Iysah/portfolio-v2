import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { styles } from '../style'
import emailjs from '@emailjs/browser'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn, textVariant } from '../utils/motion'


// template_xvm6c9x
// service_em26ovf
// 4N4rfaWPW0TgP-s5A

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const {name, value} = e.target;

    setForm({ ...form, [name]: value })
  }
  const handleSumbit = (e) => {
    e.preventDefault();
    setLoading(true)

    emailjs.send(
      'service_em26ovf',
      'template_xvm6c9x',
      {
        from_name: form.name,
        to_name: 'Iysah Yusuf',
        from_email: form.email,
        to_email: 'yusufiysah@gmail.com',
        message: form.message,
      },
      '4N4rfaWPW0TgP-s5A'
    ).then(() => {
      setLoading(false);
      alert('Thank you. I will get back to you as soon as possible');

      setForm({
        name: '',
        email: '',
        message: '',
      }, (error)  => {
        setLoading(false)

        console.log(error);
        alert('Something went wrong, Please try again!')
      }
      )
    })
  }

  return (
    <>
      <motion.div variants={textVariant()}>
        <h3 className={`${styles.sectionHeadText}`}><span className='section__gradient'>Sold Yet? </span> 😉</h3>
        <p className='text-secondary font-[18px] mt-4 leading-[30px]'>Thank you for visiting! I'm actively seeking to collaborate with a team of visionary designers and developers. If you believe our skills align and our synergy is promising, I'd love to connect.</p>
      </motion.div>

      <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
        <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
        >
          <p className={styles.sectionSubText}>Have an idea? 💭💡</p>
          <h3 className={styles.sectionHeadText}>Tell me about it</h3>
          <form
          ref={formRef}
          onSubmit={handleSumbit}
          className='mt-12 flex flex-col gap-8'
          >
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Name</span>
              <input 
              type={'text'}
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder={`What's your name?`}
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>

            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your email</span>
              <input 
              type={'email'}
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder={`What's your email address?`}
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>

            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>What's the Idea about?</span>
              <textarea 
              rows={'7'}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder={`Kindly tell me about the idea in detail. What's your budget?, What's the timeline?`}
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>

            <button
            className='bg-tertiary py-3 px-8 outline-none text-white w-fit font-bold shadow-md shadow-primary rounded-xl'
            >{loading ? 'Sending' : 'Send'}</button>
          </form>
        </motion.div>

        <motion.div 
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </>
  )
}

export default SectionWrapper(Contact, 'contact');