import React from 'react';
import LayOut from '../LayOut/LayOut';
import module from './contactMe.module.scss';
import { images } from '../../images/images'
import { motion } from 'framer-motion';

const ContactMe = () => {
    return (
        <LayOut backGround='bg-amber-100'>

            <div className='w-[80vw] mx-auto xs:h-[60vh] md:h-[80vh] flex rounded-lg shadow-lg'>
                <form action="" className={module.form}>
                    <div className={module.input__container}>
                        <input type="text" placeholder='Email' className={module.input} />
                    </div>
                    <div>
                        <textarea name="" placeholder='Message' className={module.textarea}></textarea>
                    </div>
                    <div className='flex w-full justify-start h-[10%]'>
                        <button className={module.btn}>Send</button>
                    </div>
                </form>
                <div className='md:w-1/2 md:block hidden bg-slate-300 '>
                    <div className=' h-[80vh] bg-slate-500 flex items-center'>
                        <p className='md:text-3xl text-center '>your advertisement could be here</p>
                    </div>
                </div>
            </div>
        </LayOut>
    );
};

export default ContactMe;