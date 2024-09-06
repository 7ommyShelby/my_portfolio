import React from 'react'
import { motion } from "framer-motion"

const About = () => {
    return (
        <div id='about' className='border-b border-neutral-900 pb-4'>
            <h1 className='my-20 text-center text-4xl'>
                About <span className='text-neutral-500'>Me</span>
            </h1>
            <div className='flex flex-wrap'>
                <motion.div whileInView={{ opacity: 1, y: -50 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 0.5 }} className='w-full lg:p-8'>
                    {/* <p>At my core, I am an educator and leader, with a natural inclination towards teaching and effective communication. My approach is characterized by a strong managerial acumen and meticulous planning skills, ensuring that every project I undertake is executed with precision and care. Resilience is one of my defining traits; I possess the mental fortitude to remain fully devoted to my work, regardless of challenges. I embrace my imperfections, viewing them as opportunities for growth and self-improvement. My curiosity drives me to continuously explore and absorb new knowledge, while my adaptability allows me to embrace failures as learning experiences. This mindset not only fuels my personal development but also inspires those around me to strive for excellence.</p> */}
                    <p className='my-2 py-6'>I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 1 year of professional experience, I have worked with a variety of technologies, including JavaScript, Java, React.js, Node.js, Express.js and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and playing FPS shooter competetive Games.</p>
                </motion.div>
            </div>
        </div>
    )
}

export default About
