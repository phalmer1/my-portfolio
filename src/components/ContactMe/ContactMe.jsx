import React from 'react';
import { motion } from 'framer-motion';
import Modal from '../UI/Modal';

const ContactMe = ({ isContactOpen }) => {
    return (
        <div>
            {isContactOpen && <motion.div
                className='w-screen pt-[54px] h-screen bg-accent fixed'
                initial={{ y: 0, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
            >
                <Modal
                    className={"w-[50vw] h-[30vh] bg-textColor fixed top-1/2 left-1/2 "}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <form action="" className='pt-[54px]'>
                        <input type="text" placeholder='Email' />
                        <input type="text" placeholder='Text' />
                        <button>Send</button>
                    </form>
                </Modal>
            </motion.div>}
        </div>
    );
};

export default ContactMe;