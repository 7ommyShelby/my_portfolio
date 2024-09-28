import React from 'react'
import { FaReact, FaNodeJs, FaJava, FaGitAlt, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMui } from "react-icons/si";
import { animate, motion } from "framer-motion"


const Tech = () => {

    const animatevariants = (duration) => {
        return (
            {
                initial: { y: -10 },
                animate: {
                    y: [10, -10],
                    transition: {
                        duration: duration,
                        ease: "linear",
                        repeat: Infinity,
                        repeatType: "reverse"
                    }
                }
            }
        )
    }


    return (
        <div id='tech' className='border-b border-neutral-800 pb-24'>
            <motion.h1 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 100 }} transition={{ duration: 1 }} className='my-20 text-center text-4xl'>
                Technologies
            </motion.h1>

            <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 1 }} className='flex  flex-wrap items-center justify-center gap-4'>
            
                <motion.div variants={animatevariants(1)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaReact className='text-3xl  text-cyan-500' />
                </motion.div>

                <motion.div variants={animatevariants(2)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <DiMongodb className='text-3xl text-green-700' />
                </motion.div>

                <motion.div variants={animatevariants(1.5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiExpress className='text-3xl' />
                </motion.div>

                <motion.div variants={animatevariants(1)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaNodeJs className='text-3xl text-green-500' />
                </motion.div>

                <motion.div variants={animatevariants(2)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaJava className='text-3xl text-orange-400' />
                </motion.div>

                <motion.div variants={animatevariants(1.5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <IoLogoJavascript className='text-3xl text-yellow-500' />
                </motion.div>

                <motion.div variants={animatevariants(1)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaGitAlt className='text-3xl' />
                </motion.div>

                <motion.div variants={animatevariants(2)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <RiTailwindCssFill className='text-3xl text-blue-600' />
                </motion.div>

                <motion.div variants={animatevariants(1.5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiMui className='text-3xl text-amber-600' />
                </motion.div>

                <motion.div variants={animatevariants(1)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaCss3Alt className='text-3xl text-red-700' />
                </motion.div>

                <motion.div variants={animatevariants(1)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaHtml5 className='text-3xl text-cyan-700' />
                </motion.div>

            </motion.div>
        </div>
    )
}

export default Tech
