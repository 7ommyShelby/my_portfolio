import React from 'react'
import { motion } from "framer-motion"
import ascent from '../assets/ascent.png'
import codepen from '../assets/codepen.png'
import memory from '../assets/memory.png'
import gemini from '../assets/gemini.png'
import password from '../assets/password.png'
import todolist from '../assets/todolist.png'
import todolistjs from '../assets/todolistjs.png'
import tictac from '../assets/tictac.png'
import emp from '../assets/emp.png'

const Projects = () => {

    let projects = [
        {
            name: "Ascent",
            desc: "Ascent is a dynamic social networking platform that celebrates shared experiences, creativity, and authentic connections",
            link: "https://socio-path-pedia-frontend.vercel.app/home",
            git: "https://github.com/7ommyShelby/SocioPathPedia-frontend",
            tech: ["React.js", "Express.js", "MongoDB", "Cloudinary", "Multer", "Material UI", " Redux toolkit",
                "Redux Persist", "React DropZone"],
            src: ascent
        },
        {
            name: "Employee Management System",
            desc: "A comprehensive Employee Management System built with React.js, Node.js, Express.js, and MongoDB. This system provides a user-friendly interface for managing employee data, including adding, updating, and deleting employee records.",
            link: "https://skyniche-client.vercel.app/",
            git: "https://github.com/7ommyShelby/skyniche_client",
            tech: ["React.js", "Express.js", "MongoDB", "Cloudinary", "Multer", "Tailwind CSS"],
            src: emp
        },
        {
            name: "ALL-Star AI",
            desc: "All-Star AI is an artificial interface tool to get your queries solved in real-time",
            link: "https://react-gemini-one.vercel.app/",
            git: "https://github.com/7ommyShelby/react-gemini",
            tech: ["React.js", "Google Studio.ai", "Tailwind CSS", "Redux Toolkit"],
            src: gemini
        },
        {
            name: "CodBox.io",
            desc: "Your persnol code editor on the go",
            link: "https://codepen-react-clone-2.vercel.app",
            git: "https://github.com/7ommyShelby/codepen-react-clone",
            tech: ["React.js", "Firebase", "Tailwind CSS",],
            src: codepen
        },
        {
            name: "Password Generator",
            desc: "Get a password according your requirement here",
            link: "https://optimized-password-generator.vercel.app/",
            git: "https://github.com/7ommyShelby/optimized-password-generator",
            tech: ["React.js", "Tailwind CSS"],
            src: password
        },
        {
            name: "Memory Game",
            desc: "A simple game designed to amp your memorization",
            link: "https://7ommyshelby.github.io/Match_Pair/",
            git: "https://github.com/7ommyShelby/Match_Pair",
            tech: ["HTML", "CSS", "JavaScript"],
            src: memory
        },

        {
            name: "To Do List (JavaScript)",
            desc: "A list so that you do not forget your objectives",
            link: "https://7ommyshelby.github.io/todolist_js/",
            git: "https://github.com/7ommyShelby/todolist_js",
            tech: ["JavaScript", "HTML", "CSS"],
            src: todolistjs
        },
        {
            name: "Tic Tac Toe",
            desc: "A Nostalgic Game from the back of a notebook",
            link: "https://7ommyshelby.github.io/miniJs_projects/tic_tac_toe/",
            git: "https://github.com/7ommyShelby/miniJs_projects/tree/main/tic_tac_toe",
            tech: ["JavaScript", "HTML", "CSS"],
            src: tictac
        },


    ]


    return (
        <div id='projects' className='border-b border-neutral-800 pb-4'>
            <h1 className='text-center text-4xl my-20'>Projects</h1>
            <div className='flex flex-col gap-12'>
                {
                    projects.map((e, idx) => {
                        return (
                            <>
                                <div key={idx} className='py-4 flex border-b border-neutral-950 flex-wrap gap-16 lg:justify-center'>
                                    <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1 }} className='w-full flex justify-center items-center lg:w-1/4'>
                                        <motion.img whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }} className='w-[250px] h-[150px] rounded-lg' src={e.src} alt={e.name} />

                                    </motion.div>

                                    <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 1 }} className='w-full px-1 max-w-xl flex flex-col gap-2 lg:w-3/4'>
                                        <h6 className='font-semibold text-xl'>{e.name}</h6>
                                        <p className=' text-neutral-400'>{e.desc}</p>
                                        <div className='flex gap-2 flex-wrap'>
                                            {
                                                e.tech.map((elem, index) => {
                                                    return (<>
                                                        <motion.span whileHover={{ scale: 1.1 }}
                                                            whileTap={{ scale: 0.9 }} className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900' key={index}>
                                                            {elem}
                                                        </motion.span>
                                                    </>)
                                                })
                                            }
                                        </div>
                                        <div className='mt-5 flex justify-between'>
                                            <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} target='_blank' className='rounded bg-neutral-900 px-2 hover:bg-zinc-950 py-1 text-sm font-medium text-green-800' href={e.link}>Live</motion.a>
                                            <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} target='_blank' className='rounded bg-neutral-900 px-2 hover:bg-zinc-950 py-1 text-sm font-medium text-amber-900' href={e.git}>Code</motion.a>
                                        </div>
                                    </motion.div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Projects
