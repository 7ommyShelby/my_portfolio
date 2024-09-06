import React from 'react'
import { motion } from "framer-motion"
const Contacts = () => {
    return (
        <div className='border-b border-neutral-900 pb-20'>
            <h1 className='my-10 text-center text-4xl'>Contact <span className='text-neutral-500'>Me</span></h1>
            <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 1 }} className='text-center tracking-tighter'>
                <p className='my-4'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, error fugiat! Animi autem eligendi quis ducimus molestiae eos facere eveniet iusto maiores omnis, voluptates facilis nulla placeat laborum quibusdam fuga!
                </p>
                <p> <span className='font-bold'>Phone</span> :  +91 7992262411</p>
                <p> <span className='font-bold'>Email</span> : aryaalsaher@gmail.com</p>
            </motion.div>
        </div>
    )
}

export default Contacts