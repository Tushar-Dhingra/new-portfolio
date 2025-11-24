"use client";
import React, { useState } from "react";
import { FiArrowUpRight, FiCopy, FiCheck } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Collaborate = () => {
    const [copied, setCopied] = useState(false);
    const email = "tushardhingra808@gmail.com"; // Replace with actual email

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="max-w-screen-xl mx-auto py-24 px-5 framer-animation" id="collaborate">
            <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
                <div>
                    <h1 className="md:text-7xl text-4xl font-bold text-white mb-6 leading-tight">
                        Let’s <br /> Collaborate
                    </h1>
                    <div className="flex items-center gap-4">
                        <p className="text-gray-400 text-2xl font-bold">
                            {email}
                        </p>
                        <button
                            onClick={handleCopy}
                            className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
                            title="Copy Email"
                        >
                            {copied ? <FiCheck className="text-green-500 text-xl" /> : <FiCopy className="text-xl" />}
                        </button>
                    </div>
                </div>

                <motion.div
                    className="relative w-52 h-52 group cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.location.href = `mailto:${email}`}
                >
                    {/* Circle Container */}
                    <div className="w-full h-full rounded-full bg-gradient-to-tr from-purple-600 to-blue-600 flex items-center justify-center transform transition-transform duration-300 ease-in-out shadow-2xl">
                        <FiArrowUpRight className="text-white text-4xl transform group-hover:rotate-45 transition-transform duration-300 ease-in-out" />
                    </div>
                    {/* Hover Effect Border */}
                    <div className="absolute inset-0 rounded-full border-2 border-white/20 group-hover:border-white/50 transition-all duration-500 ease-in-out scale-110 group-hover:scale-125 opacity-0 group-hover:opacity-100" />
                </motion.div>
            </div>
        </div>
    );
};

export default Collaborate;
