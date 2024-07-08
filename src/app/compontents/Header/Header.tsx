/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import handWave from '../../../../public/wave.json';

export default function Header() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.div 
            className="space-y-5 py-20 min-h-[100vh] snap-start relative"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div variants={itemVariants}>
                <h1 className="sm:leading-tight lg:leading-tight sm:text-[70px] md:text-[80px] lg:text-[85px] sm:text-4xl font-semibold">
                    hi 
                    <motion.div 
                        className="inline-block"
                        animate={{ rotate: [0, 15, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 2 }}
                    >
                        <Lottie animationData={handWave} className="w-[100px] inline-block"/>
                    </motion.div>
                    ,  
                    <motion.span 
                        className="font-bold relative"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        <span className="font-bold relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-black
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300">migs</span>
                        <motion.span 
                            className="absolute bottom-0 left-0 w-full h-[2px] bg-black"
                            initial={{ scaleX: 0 }}
                            whileHover={{ scaleX: 1 }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.span> here.
                </h1>
            </motion.div>
            <motion.h1 
                className="md:text-4xl sm:text-lg mb-5"
                variants={itemVariants}
            >
                bringing my imagination to life.
            </motion.h1>
            <motion.p 
                className="flex md:text-[22px] sm:text-[15px] text-justify max-w-[60%]"
                variants={itemVariants}
            >
                I'm a javascript developer based in The Philippines. 
                I have great interest in full-stack development and machine learning.
            </motion.p>
            <motion.p 
                className="md:text-lg sm:text-sm mb-5"
                variants={itemVariants}
            >
                Come say hi at {' '}
                <a className="underline" href={`mailto:lpawaon@gmail.com`}>lpawaon@gmail.com</a>
            </motion.p>
        </motion.div>
    );
}