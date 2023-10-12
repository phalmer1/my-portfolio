import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Nav from '../Nav/Nav';
import Modal from '../UI/Modal';
import NavAnime from '../Nav/NavAnime';

const Header = ({ backGround }) => {

    //SET BACKGROUND COLOR_______________________________________

    let bg;


    if (localStorage.getItem('backGround') !== backGround) {
        if (localStorage.getItem('backGround') === null) {
            localStorage.setItem('backGround', backGround);
            bg = localStorage.getItem('backGround');
        } else {
            bg = localStorage.getItem('backGround')
            setTimeout(() => {
                bg = backGround;
                localStorage.setItem('backGround', backGround);
            }, 1000)
        }

    } else {
        bg = localStorage.getItem('backGround')
    }


    //LEAVE ROUTE OR CLOSE NAV___________________________________

    const [closeNavAnime, setCloseNavAnime] = useState();

    const [isNavOpen, setIsNavOpen] = useState(false);

    const navTogle = () => {
        setIsNavOpen(!isNavOpen);
        setCloseNavAnime(closeNavAnime === undefined ? true : !closeNavAnime);
    }

    return (
        <>
            <header className='flex w-full h-[50px]  mt-[2vh] fixed z-[10000] '>
                {!isNavOpen ?
                    <Modal
                        className={`w-screen h-screen fixed top-0 left-0 ${bg}`}
                        initial={{ height: '100vh', y: 0 }}
                        animate={closeNavAnime === false ? { height: '100vh', y: -1000 } : { height: '100vh', y: 1000 }}
                        transition={{ delay: 0.8, duration: 0.7 }}

                    >
                        <Nav />
                        <motion.div
                            className={`w-full h-full fixed z-[10000] top-0 left-0 ${bg}`}
                            initial={{ height: '100vh', y: -800 }}
                            animate={{ height: '100vh', y: 0 }}
                            transition={{ delay: 0.2, duration: 0.4 }}

                        >
                        </motion.div>
                    </Modal> :
                    <div className='flex flex-col justify-between'>
                        <div></div>
                        <Modal
                            className={`w-screen  h-screen ${bg} fixed top-0 left-0`}
                            initial={{ y: -1000 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.7 }}
                        >
                            <NavAnime isNavOpen={isNavOpen} backGround={bg} />
                        </Modal>
                    </div>}
                <div className='flex w-[79vw] h-full justify-between relative items-center  mx-auto'>
                    <div className='flex w-[20vw] justify-between items-center'>
                        <motion.button
                            whileHover={{ letterSpacing: '2px' }}>Logo</motion.button>
                        <button onClick={navTogle}>
                            <motion.span
                            className='text-center'
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.7 }}
                            >
                                <motion.div
                                    initial={!isNavOpen ? { opacity: 0, y: 10 } : { opacity: 1, y: -10 }}
                                    animate={!isNavOpen ? { opacity: 0, y: -12 } : { opacity: 1, y: 12 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <motion.span whileHover={{ letterSpacing: '2px' }} transition={{ duration: 0.7 }}>Close</motion.span>
                                </motion.div>
                                <motion.div
                                    initial={!isNavOpen ? { y: 12, opacity: 1 } : { y: -12, opacity: 0 }}
                                    animate={!isNavOpen ? { y: -10, opacity: 1 } : { y: 10, opacity: 0 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <motion.span whileHover={{ letterSpacing: '2px' }} transition={{ duration: 0.7 }}>Menu</motion.span>
                                </motion.div>
                            </motion.span>
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;