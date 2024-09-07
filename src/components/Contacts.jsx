import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion"


const Contacts = () => {
    return (
        <div id='contact' className='border-b border-neutral-900 pb-20'>
            <h1 className='my-10 text-center text-4xl'>Contact <span className='text-neutral-500'>Me</span></h1>
            <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 1 }} className='text-center flex flex-col tracking-tighter'>
                <p className='my-4 text-2xl'>
                    Click on the link below to reach me
                </p>
                <div className='flex flex-col gap-5'>
                    <a href="mailto:aryaalsaher@gmail.com"><span className='font-bold'>Email</span> : aryaalsaher@gmail.com</a>
                    <h1 className='text-2xl font-semibold'>OR</h1>
                    <div className='flex gap-4 mb-9 text-2xl items-center justify-center'>
                        <a target='_blank' href="http://github.com/7ommyShelby">
                            <FaGithub className='hover:text-zinc-600 transition-all text-4xl ease-in-out' />
                        </a>
                        <a target='_blank' href="http://linkedin.com/in/aryakumar98">
                            <FaLinkedin className='hover:text-cyan-800 transition-all text-4xl ease-in-out' />
                        </a>
                        <a target='_blank' href="http://x.com/DeathDrogo">
                            <FaSquareXTwitter className='hover:text-zinc-600 transition-all text-4xl ease-in-out' />
                        </a>
                    </div>

                </div>
                <span>Peace💕</span>

            </motion.div>
        </div>
    )
}

export default Contacts
