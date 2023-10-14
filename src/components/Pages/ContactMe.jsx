import React from 'react';
import LayOut from '../LayOut/LayOut';
import module from './contactMe.module.scss';

const ContactMe = () => {
    return (
        <LayOut backGround='bg-amber-100'>
            <div className={`${module.container} w-1/2 mx-auto flex`}>

                <div className='w-1/2 bg-black h-4/5'></div>
                <form className={`${module.form} w-1/2  flex flex-col justify-around items-center bg-slate-600 py-[5vh] shadow-xl`}>
                    <div className='w-[80%] sm:text-lg md:text-2xl mb-[2vh] flex '>
                        <h1 className='text-white transition-all'>Send me something</h1>
                    </div>

                    <div className='w-full flex justify-center'>
                        <input type="text" placeholder='Your Name' className= {`${module.input} transition-all shadow-slate-500 shadow-md focus:border-white border-slate-600 border-b-2 rounded-md outline-0 p-[5%] bg-slate-600`} />
                    </div>
                    <div className='w-full flex justify-center'>
                        <input type="text" placeholder='Your Email' className= {`${module.input} transition-all shadow-slate-500 shadow-md focus:border-white border-slate-600 border-b-2 rounded-md outline-0 p-[5%] bg-slate-600`} />
                    </div>
                    <button onClick={() => { console.log('hello') }} className='text-white bg-slate-700 py-[3%] p-[10%] rounded-xl shadow-lg'>Send</button>
                </form>
            </div>
        </LayOut>
    );
};

export default ContactMe;