import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const socialLinks = [
    {
        name: '👾 GITHUB',
        url: 'https://github.com/Iysah',
    },
    {
        name: '🐦 X (TWITTER)',
        url: 'https://twitter.com/d_product_dude',
    },
    {
        name: '💼 LINKEDIN',
        url: 'https://www.linkedin.com/in/yusuf-iysah/',
    },
    {
        name: '📹 YOUTUBE',
        url: 'https://youtube.com/@d_product_dude?si=3NuOLn80Ot4EaIBA',
    },
    {
        name: '🎙️ SPOTIFY',
        url: 'https://podcasters.spotify.com/pod/show/the-product-dude'
    }
]
const Connect = () => {
  return (
    <>
        <motion.div variants={textVariant()}>
            <h3 className={`${styles.sectionHeadText}`}><span className='section__gradient'>Dont remain a stranger! </span> 👋</h3>
            <p className='text-secondary text-[16px] mt-4 leading-[30px]'>Connect with me online.</p>
        </motion.div>

        <div className='my-10 flex flex-wrap gap-7'>
            <span  >
                {socialLinks.map((item, index) => (
                    <a href={item.url} target='_blank' key={index} className='text-secondary text-[18px] font-bold uppercase mr-4 leading-[30px]' >{item.name}</a>
                ))}
                <a rel="me" href="https://mastodon.social/@yusufiysah">Mastodon</a>
            </span>
        </div>
    </>
  )
}

export default SectionWrapper(Connect, 'connect');
