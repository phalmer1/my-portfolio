import React from 'react';
import { BiLogoInstagram } from 'react-icons/bi';
import { AiFillGithub } from 'react-icons/ai';
import { HiEnvelope } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import module from './Nav.module.scss';


const Nav = () => {
    return (
        <div className='w-[80%] mx-auto h-full pt-[74px] flex flex-col gap-[20px]'>
            <div className='flex w-full mt-[10vh] justify-between items-center'>
                <div className='h-[3px] w-[30vw] bg-red-800'></div>
                <div className='flex ml-8 w-[30vw] justify-around items-center sm:text-xl md:text-2xl'>
                    <BiLogoInstagram className='hover:text-white hover:scale-125' />
                    <AiFillGithub className='hover:text-white hover:scale-125' />
                    <HiEnvelope className='hover:text-white hover:scale-125' />
                </div>
            </div>
            <div className={`w-full h-[60%] flex flex-col justify-around text-6xl font-secondary ${module.text}`}>
                <span>
                    <div>
                        <Link to='/'>Home</Link>
                    </div>
                </span>
                <span>
                    <div>
                        <Link to='/about'>About</Link>
                    </div>
                </span>
                <span>
                    <div>
                        <Link to='/work'>Work</Link>
                    </div>
                </span>
                <span>
                    <div>
                        <Link to='/contactme'>COntact me</Link>
                    </div>
                </span>
            </div>
        </div>
    );
};

export default Nav;