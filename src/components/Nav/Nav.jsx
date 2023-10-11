import React from 'react';
import { BiLogoInstagram } from 'react-icons/bi';
import { AiFillGithub } from 'react-icons/ai';
import { HiEnvelope } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import module from './Nav.module.scss';


const Nav = () => {
    return (
        <div className='w-[80%] mx-auto h-full pt-[54px]'>
            <div className='flex w-full  items-center'>
                <div className='h-[3px] w-[20vw] bg-red-800'></div>
                <div className='flex ml-8 w-[10vw] justify-around text-xl '>
                    <BiLogoInstagram className='hover:text-white hover:scale-125' />
                    <AiFillGithub className='hover:text-white hover:scale-125' />
                    <HiEnvelope className='hover:text-white hover:scale-125' />
                </div>
            </div>
            <div className={`w-full h-[60%] flex flex-col justify-around text-4xl font-secondary ${module.text}`}>
                <span>
                    <Link to='/'>Home</Link>
                </span>
                <span>
                    <Link to='/about'>About</Link>
                </span>
                <span>
                    <Link to='/work'>Work</Link>
                </span>
                <span>
                    <Link to='/work'>Writing</Link>
                </span>
            </div>
        </div>
    );
};

export default Nav;