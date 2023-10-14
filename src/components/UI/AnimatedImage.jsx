import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedImage = ({ image, imagePosition }) => {

    const { ref: ref, inView: inView } = useInView({
        threshold: 1,
        triggerOnce: true,
    });

    return (
        <motion.div
            ref={ref}
            className={`md:h-[40vh] sm:h-[50vh] flex ${imagePosition} align-bottom w-full bg-slate-200`}
        >

            <motion.div className={`${module.dotted} relative`}
                initial={{ opacity: 1, height: "100%", y: "30vh", width: "30%" }}
                animate={{ opacity: 1, height: "100%", y: 0, width: "30%" }}
            >
                {inView && (
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, height: 0, y: "30vh", width: "100%", backgroundColor: "white" }}
                        animate={{ opacity: 1, height: "100%", y: 0, width: "100%" }}
                        transition={{ delay: 1, duration: 0.5 }}
                    >

                        <motion.img
                            initial={{ opacity: 0, height: 0, y: "30vh", width: "100%" }}
                            animate={{ opacity: 1, height: "100%", y: 0, width: "100%" }}
                            transition={{ delay: 1.25, duration: 1 }}
                            src={image}
                            className="max-h-[100%] object-top object-cover relative "
                            alt="Anime"
                        />
                    </motion.div>)}
            </motion.div>
        </motion.div>
    );
};

export default AnimatedImage;