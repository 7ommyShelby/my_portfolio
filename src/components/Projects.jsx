import React from 'react'
import { motion } from "framer-motion"
import ascent from '../assets/ascent.png'
import codepen from '../assets/codepen.png'
import memory from '../assets/memory.png'
import gemini from '../assets/gemini.png'
import password from '../assets/password.png'
import todolist from '../assets/todolist.png'

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
            name: "Memory Game",
            desc: "A simple game designed to amp your memorization",
            link: "https://7ommyshelby.github.io/Match_Pair/",
            git: "https://github.com/7ommyShelby/Match_Pair",
            tech: ["HTML", "CSS", "JavaScript"],
            src: memory
        },
        {
            name: "To Do List",
            desc: "A list so that you do not forget your objectives",
            link: "https://todo-list-2-red.vercel.app/",
            git: "https://github.com/7ommyShelby/Todo-List-II",
            tech: ["React.js", "Tailwind CSS"],
            src: todolist
        },
        {
            name: "Password Generator",
            desc: "Get a password according your requirement here",
            link: "https://optimized-password-generator.vercel.app/",
            git: "https://github.com/7ommyShelby/optimized-password-generator",
            tech: ["React.js", "Tailwind CSS"],
            src: password
        },

    ]


    return (
        <div  id='projects' className='border-b border-neutral-800 pb-4'>
            <h1 className='text-center text-4xl my-20'>Projects</h1>
            <div>
                {
                    projects.map((e, idx) => {
                        return (
                            <>
                                <div key={idx} className='mb-8 py-4 flex border-b border-neutral-950 flex-wrap gap-16 lg:justify-center'>
                                    <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1 }} className='w-full lg:w-1/4'>
                                        <motion.img whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }} className='w-[250px] h-[150px] mb-6 rounded-lg' src={e.src} alt={e.name} />

                                    </motion.div>

                                    <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 1 }} className='w-full max-w-xl lg:w-3/4'>
                                        <h6 className='mb-2 font-semibold text-xl'>{e.name}</h6>
                                        <p className='mb-4 text-neutral-400'>{e.desc}</p>
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
                                            <a target='_blank' className='rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-green-800' href={e.link}>Live</a>
                                            <a target='_blank' className='rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-amber-900' href={e.git}>Code</a>
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
