import React from 'react';
import LayOut from '../LayOut/LayOut';
import { motion } from 'framer-motion';
import { images } from '../../images/images';
import AnimatedImage from '../UI/AnimatedImage';
const Home = () => {




    return (
            <LayOut backGround='bg-accent'>
                <motion.div
                    className='sm:w-full md:w-[60%] mx-auto h-full'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.7 }}
                >
                    <motion.div className='w-full h-[80vh] bg-slate-500 flex items-center'>
                        <p className='md:text-3xl sm:text-lg text-center w-full'>your advertisement could be here</p>
                    </motion.div>
                    <motion.div className='w-full '>
                        <AnimatedImage image={images[4]} imagePosition={'justify-start'} />
                        <AnimatedImage image={images[5]} imagePosition={'justify-end'} />
                        <AnimatedImage image={images[1]} imagePosition={'justify-start'} />
                    </motion.div>
                    <motion.div className='w-full h-[80vh] bg-slate-500 flex items-center'>
                        <p className='md:text-3xl sm:text-lg text-center w-full'>and here too</p>
                    </motion.div>
                </motion.div>
            </LayOut>
    );
};

export default Home;