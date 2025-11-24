"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

const CaseStudyCard = ({ imgSrc, title, description, link }) => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e) => {
        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className="relative flex-1 group perspective-1000"
        >
            {/* Image Container with 3D effect */}
            <div style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}>
                <Image
                    width={600}
                    height={600}
                    src={imgSrc}
                    alt={title}
                    className="w-full h-[300px] md:h-[500px] object-contain rounded-[30px] md:rounded-[100px] transition-transform duration-300 ease-in-out group-hover:scale-105 shadow-2xl"
                />

                {/* Card Content */}
                <div className="flex flex-col md:flex-row justify-between items-center py-10 gap-6 px-5" style={{ transform: "translateZ(50px)" }}>
                    <div className="text-center md:text-left text-white">
                        <h2 className="text-md md:text-lg font-semibold">{title}</h2>
                        <p className="text-sm text-gray-400">{description}</p>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center gap-4">
                        <div className="border-2 hidden md:block border-gray-600 rounded-3xl px-6 py-4 text-white hover:text-black hover:bg-white transition duration-300 ease-in-out">
                            <FiArrowRight className="text-lg md:text-xl" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Hover Overlay with View Project Button */}
            <div
                className="absolute inset-0 bg-black/40 rounded-[30px] md:rounded-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex items-center justify-center pointer-events-none"
                style={{ transform: "translateZ(100px)" }}
            >
                <motion.div
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1.1 }}
                    className="bg-white text-black px-6 py-3 rounded-full font-bold pointer-events-auto cursor-pointer"
                >
                    <Link href={link}>VIEW PROJECT</Link>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default CaseStudyCard;
