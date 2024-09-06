import React from 'react'
import profile from '../assets/pro.jpeg'
import { motion } from "framer-motion"

const Hero = () => {



    return (
        <div id='home' className='border-b border-neutral-900 pb-4 lg:mb-36'>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center lg:items-start'>
                        <motion.h1 initial={{ x: -100, opacity: 0 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0 }} className='font-thin tracking-tight text-6xl pb-16 lg:mt-16 lg:text-6xl'>Arya Kumar</motion.h1>
                        <motion.span initial={{ x: -100, opacity: 0 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>
                            MERN Stack Developer
                        </motion.span>
                        <motion.p initial={{ x: -100, opacity: 0 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 1 }} className='my-2 max-w-xl py-6 font-light tracking-tighter'>I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 1 year of hands-on experience, I have honed my skills in front-end technologies like React.js, as well as back-end technologies like Node.js,Express.js, Mongo DB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.</motion.p>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 lg:p-8'>
                    <div className='flex justify-center '>
                        <motion.img initial={{x : 100, opacity : 0}} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 , delay : 0.5}} className='rounded-lg' src={profile} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
