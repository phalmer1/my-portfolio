import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({ children, className, initial, animate, transition,exit }) => {



    return (
        <motion.div
            initial={initial}
            animate={animate}
            transition={transition}
            className={className}
            exit={exit}
        >
            {children}  
        </motion.div>
    );
};

export default Modal;