import React, { useState } from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion"
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    const variants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: "-100%" },
    }
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <nav className='mb-20 flex items-center justify-between py-6'>
                <div className='flex flex-shrink-0 items-center'>
                    <h1 className='text-3xl text-white'>AK</h1>
                </div>
                {/* <motion.div className='md:hidden' animate={isOpen ? "open" : "closed"}
                    variants={variants}>
                    {
                        ["home", "about", "tech", "projects", "contact"].map((e) => {
                            return (
                                <>
                                    <a href={`#${e}`} className='text-white capitalize hover:text-gray-300 mx-4
                                    transition duration-300 ease-in-out'>{e}</a>
                                </>
                            )
                        })
                    }
                </motion.div> */}
                {/* <GiHamburgerMenu className='md:hidden' onClick={() => setIsOpen(isOpen => !isOpen)} /> */}
                <div className='flex gap-4 text-2xl items-center justify-center'>
                    <a target='_blank' href="http://github.com/7ommyShelby">
                        <FaGithub className='hover:text-zinc-600 transition-all ease-in-out' />
                    </a>
                    <a target='_blank' href="http://linkedin.com/in/aryakumar98">
                        <FaLinkedin className='hover:text-cyan-800 transition-all ease-in-out' />
                    </a>
                    <a target='_blank' href="http://x.com/DeathDrogo">
                        <FaSquareXTwitter className='hover:text-zinc-600 transition-all ease-in-out' />
                    </a>
                </div>
            </nav>
        </>
    )
}

export default Navbar
