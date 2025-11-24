"use client";
import React from "react";
import { motion } from "framer-motion";
import MagneticButton from "../ui/MagneticButton";
import BannerIcon from "./BannerIcon";

const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Hero = () => {
    return (
        <div className="relative w-full min-h-screen bg-[#060608] overflow-hidden flex flex-col justify-center">
            {/* Background Gradients */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] bg-purple-900/20 rounded-full blur-[100px]"
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute top-[20%] -right-[10%] w-[40vw] h-[40vw] bg-blue-900/20 rounded-full blur-[100px]"
                    animate={{
                        scale: [1, 1.1, 1],
                        x: [0, -30, 0],
                        y: [0, 50, 0],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
            </div>

            <div className="max-w-screen-xl mx-auto px-5 z-10 w-full pt-20">
                <motion.div
                    className="flex flex-col justify-center items-start min-h-[80vh]"
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                >
                    {/* Introductory Text */}
                    <motion.p variants={itemVariants} className="text-[#C8C8CF] font-semibold mb-4 text-xl md:text-2xl">
                        Hello! I&apos;m Tushar.
                    </motion.p>

                    {/* Main Title */}
                    <motion.h1 variants={itemVariants} className="text-5xl md:text-8xl font-bold leading-tight text-white mb-6">
                        Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Digital</span> <br />
                        Experiences.
                    </motion.h1>

                    <motion.p variants={itemVariants} className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
                        A Fullstack Software Developer crafting high-performance web applications with a focus on design and user experience.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div variants={itemVariants} className="flex gap-6">
                        <MagneticButton
                            className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition"
                            onClick={() => {
                                const link = document.createElement('a');
                                link.href = '/assets/Resume.pdf';
                                link.download = 'Resume.pdf';
                                link.click();
                            }}
                        >
                            Resume
                        </MagneticButton>
                        <MagneticButton
                            className="bg-transparent border border-white/20 text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition backdrop-blur-sm"
                            onClick={() => document.getElementById('work-experience')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            View Work
                        </MagneticButton>
                    </motion.div>
                </motion.div>
            </div>

            {/* Tech Stack Marquee */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="w-full pb-10"
            >
                <BannerIcon />
            </motion.div>
        </div>
    );
};

export default Hero;
