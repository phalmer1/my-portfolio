import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Nav from '../Nav/Nav';
import ContactMe from '../ContactMe/ContactMe';
import module from './Header.module.scss';
import Modal from '../UI/Modal';
import NavAnime from '../Nav/NavAnime';

const Header = ({ backGround }) => {

    const [isNavOpen, setIsNavOpen] = useState(false);
    const [firstNav, setFirstNav] = useState(false);

    const navTogle = () => {
        setFirstNav(true);
        setIsNavOpen(!isNavOpen);
        setIsContactOpen(false);
    }
    
    const [isContactOpen, setIsContactOpen] = useState(false);

    const contactTogle = () => {
        setIsContactOpen(!isContactOpen);
        setIsNavOpen(false);
    }

    console.log(firstNav)

    return (
        <header className='flex w-full h-[10vh] fixed z-[10000]'>
            {!isNavOpen ? <Modal
                className={`w-screen h-screen fixed top-0 left-0 ${backGround}`}
                initial={{ height: '100vh', y: 0 }}
                animate={{ height: '100vh', y: 1000 }}
                transition={{ delay: 1, duration: 0.4 }}

            >
                
                {firstNav && <motion.div
                className='pt-[54px]'
                initial={{ height: '100%', opacity: 1 }}
                >
                    <Nav isNavOpen={isNavOpen} backGround={backGround} />
                    <motion.div
                    className={`fixed w-screen h-screen left-0 top-0 z-[1000000] ${backGround}`}
                    initial={{ y: -100, height: '0vh', opacity: 1 }}
                    animate={{ y: -100, height: '100vh', opacity: 1 }}
                    transition={{ duration: 0.7 }}
                ></motion.div>
                </motion.div>}
                
            </Modal> :
                <div className='flex flex-col justify-between'>
                    <div></div>
                    <Modal
                        className={`w-screen pt-[54px] h-screen ${backGround} fixed top-0 left-0`}
                        initial={{ y: -1000 }}
                        animate={{ y: 0 }}
                        transition={{  duration: 0.7 }}
                    >

                        <NavAnime isNavOpen={isNavOpen} backGround={backGround} />
                    </Modal>
                </div>

            }
            <ContactMe isContactOpen={isContactOpen} />
            <div className='flex w-[80vw] h-full justify-between relative items-center  mx-auto'>
                <div className='flex w-[10vw] justify-around items-center'>
                    <div className=''>Logo</div>
                    <button onClick={navTogle}>
                        <motion.span
                            className=''
                            whileHover={{ letterSpacing: '2px' }}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.7 }}
                        >
                            <motion.div
                                initial={!isNavOpen ? { opacity: 0, y: 10 } : { opacity: 1, y: -10 }}
                                animate={!isNavOpen ? { opacity: 0, y: -12 } : { opacity: 1, y: 12 }}
                                transition={{ duration: 0.3 }}
                            >
                                Close
                            </motion.div>
                            <motion.div
                                initial={!isNavOpen ? { y: 10, opacity: 1 } : { y: -10, opacity: 0 }}
                                animate={!isNavOpen ? { y: -12, opacity: 1 } : { y: 12, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                Menu
                            </motion.div>
                        </motion.span>
                    </button>
                </div>
                <button onClick={contactTogle}>Contact me</button>
            </div>

        </header>
    );
};

export default Header;