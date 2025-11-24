"use client";
import React, { useState } from "react";
import { IoMdDownload } from "react-icons/io";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const navLinks = [
        { name: "Projects", href: "#case-studies" },
        { name: "Experience", href: "#work-experience" },
        { name: "Hire me", href: "#collaborate" },
    ];

    return (
        <div className="bg-[#060608]/80 backdrop-blur-md text-white fixed top-0 left-0 right-0 z-[9999] px-5 border-b border-white/5">
            <div className="max-w-screen-xl mx-auto flex justify-between items-center md:py-6 py-4">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <div className="w-8 h-0.5 bg-white"></div>
                    <Link href="/" className="text-lg font-semibold tracking-widest">PORTFOLIO</Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8 font-medium text-sm">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="relative group text-gray-400 hover:text-white transition-colors">
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </div>

                {/* Contact */}
                <div className="hidden md:flex relative items-center justify-end">
                    <button
                        onClick={() => {
                            const link = document.createElement('a');
                            link.href = '/assets/Resume.pdf';
                            link.download = 'Resume.pdf';
                            link.click();
                        }}
                        className="flex items-center bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition-all duration-200 font-medium text-sm"
                    >
                        <IoMdDownload className="mr-2 text-lg" />
                        Resume
                    </button>
                </div>

                {/* Mobile Menu Icon */}
                <div className="md:hidden">
                    <button onClick={toggleDrawer} className="text-2xl p-2">
                        {isDrawerOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </div>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {isDrawerOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="bg-[#060608] border-t border-white/10 text-white overflow-hidden md:hidden"
                    >
                        <div className="p-5 flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-gray-300 hover:text-white"
                                    onClick={toggleDrawer}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <button
                                onClick={() => {
                                    const link = document.createElement('a');
                                    link.href = '/assets/Resume.pdf';
                                    link.download = 'Resume.pdf';
                                    link.click();
                                }}
                                className="flex items-center justify-center bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition-all duration-200 font-medium mt-4"
                            >
                                <IoMdDownload className="mr-2 text-lg" />
                                Resume
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Navbar;
