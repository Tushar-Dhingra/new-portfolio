"use client";
import React from "react";
import { motion } from "framer-motion";

const skills = [
    "React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express",
    "MongoDB", "PostgreSQL", "GraphQL", "Framer Motion", "Three.js", "Docker",
    "AWS", "Git", "Figma", "Redux", "Python", "Java", "TensorFlow", "PyTorch", "C++", "C#", "C"
];

const SkillGraph = () => {
    return (
        <div className="py-20 max-w-screen-xl mx-auto px-5">
            <div className="flex flex-wrap gap-3 items-center mb-16">
                <p className="text-white font-bold text-xl">03</p>
                <h2 className="text-3xl sm:text-4xl text-[#ABABB5] font-bold">Skills</h2>
            </div>

            <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm">
                <div className="absolute inset-0 flex flex-wrap justify-center items-center gap-4 p-10">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="bg-white/10 text-white px-6 py-3 rounded-full text-lg font-medium cursor-pointer border border-white/5 hover:bg-white hover:text-black transition-colors"
                            initial={{
                                x: Math.random() * 100 - 50,
                                y: Math.random() * 100 - 50,
                                opacity: 0
                            }}
                            animate={{
                                x: [Math.random() * 20 - 10, Math.random() * 20 - 10, Math.random() * 20 - 10],
                                y: [Math.random() * 20 - 10, Math.random() * 20 - 10, Math.random() * 20 - 10],
                                opacity: 1
                            }}
                            transition={{
                                duration: 5 + Math.random() * 5,
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "easeInOut",
                                delay: index * 0.1
                            }}
                            whileHover={{ scale: 1.2, zIndex: 10 }}
                            drag
                            dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
                        >
                            {skill}
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SkillGraph;
