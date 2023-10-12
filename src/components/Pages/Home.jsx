import React, { useState } from 'react';
import LayOut from '../LayOut/LayOut';
import { motion } from 'framer-motion';

const Home = () => {


    return (
        <div className='font-secondary'>
            <LayOut backGround='bg-accent'>
                <motion.div
                    className='w-[60vw] mx-auto h-full pt-[170px] '
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 0.7 }}
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className='bg-slate-600 h-[80vh]'
                    >
                        <motion.div className='bg-slate-400 w-[30%] h-[70%]'>
                            <motion.img src='.' alt=''/>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className='bg-slate-400 h-[60vh]'
                    ></motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className='bg-slate-600 h-[60vh]'
                    ></motion.div>
                </motion.div>
            </LayOut>
        </div>
    );
};

export default Home;