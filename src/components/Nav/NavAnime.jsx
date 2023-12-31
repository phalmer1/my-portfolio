import React from 'react';
import { motion } from 'framer-motion';
import { BiLogoInstagram } from 'react-icons/bi';
import { AiFillGithub } from 'react-icons/ai';
import { HiEnvelope } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import module from './Nav.module.scss';


const NavAnime = () => {


    const leave = () => {

    }


    return (
        <div className='w-[80%] mx-auto h-full pt-[74px] flex flex-col gap-[20px]'>
            <div className={`flex w-full mt-[10vh] justify-between items-center `}>
                <motion.div
                    className='h-[3px] bg-red-800'
                    initial={{ width: 0 }}
                    animate={{ width: '30vw' }}
                    transition={{ delay: 0.7, duration: 0.7 }}
                ></motion.div>
                <motion.div
                    className={`flex ml-8 w-[30vw] justify-around items-center sm:text-xl md:text-2xl `}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.4, duration: 0.7 }}
                >
                    <BiLogoInstagram className='hover:text-white hover:scale-125'/>
                    <a target='_blank' href="https://github.com/phalmer1"><AiFillGithub className='hover:text-white hover:scale-125'/></a>
                    <Link to='/contactme'><HiEnvelope className='hover:text-white hover:scale-125'/></Link>
                </motion.div>
            </div>
            <div className={`w-full h-[60%] flex flex-col justify-around text-6xl font-secondary ${module.text}`}>
                <motion.span
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.7 }}
                >
                    <motion.div
                        whileHover={{ color: 'white', textShadow: '0 0 10px black' }}
                        transition={{ duration: 0.7 }}
                    >
                        <Link to='/' onClick={leave}>Home</Link>
                    </motion.div>
                </motion.span>
                <motion.span
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3, duration: 0.7 }}
                >
                    <motion.div
                        whileHover={{ color: 'white', textShadow: '0 0 10px black' }}
                        transition={{ duration: 0.7 }}
                    >
                        <Link to='/about'>About</Link>
                    </motion.div>
                </motion.span>
                <motion.span
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6, duration: 0.7 }}
                >
                    <motion.div
                        whileHover={{ color: 'white', textShadow: '0 0 10px black' }}
                        transition={{ duration: 0.7 }}
                    >
                        <Link to='/work'>Work</Link>
                    </motion.div>
                </motion.span>
                <motion.span
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.9, duration: 0.7 }}
                >
                    <motion.div
                        whileHover={{ color: 'white', textShadow: '0 0 10px black' }}
                        transition={{ duration: 0.7 }}
                    >
                        <Link className='' to='/contactme' onClick={leave}>Contact me</Link>
                    </motion.div>
                </motion.span>
            </div>
        </div>
    );
};

export default NavAnime;