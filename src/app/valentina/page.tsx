"use client"

import { Mail, Instagram, MessageCircle, MoreHorizontal } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Valentina() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeInOut",
            },
        },
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100">
            <motion.div
                className="w-full max-w-lg mx-auto p-6 space-y-6 -mt-20"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Profile Section */}
                <motion.div className="flex flex-col items-center text-center rounded-full" variants={itemVariants}>
                    <Image
                        src="/valen.JPG"
                        alt="Valentina Profile"
                        width={288}
                        height={288}
                        quality={100}
                        className="rounded-full object-cover w-36 h-36 mb-4 ring-2"
                    />
                    <h1 className="text-2xl font-bold text-gray-800">Valentina</h1>
                    <p className="text-gray-600">By: Valentina Guzman Cortes</p>
                    <div className="flex space-x-4 my-4">
                        <Link href="https://instagram.com/valenguzmanc" target="_blank" className="text-gray-600 hover:text-gray-900">
                            <Instagram size={28} />
                        </Link>
                        <Link href="mailto:valenguzmancortes@gmail.com" className="text-gray-600 hover:text-gray-900">
                            <Mail size={28} />
                        </Link>
                    </div>
                </motion.div>

                {/* Links Section */}
                <motion.div className="space-y-4" variants={containerVariants}>
                    <motion.div variants={itemVariants}>
                        <Link href="mailto:valenguzmancortes@gmail.com" className="group flex items-center justify-between w-full bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <Mail size={24} className="text-gray-700" />
                                <span className="font-semibold text-xl text-gray-700">GMAIL</span>
                            </div>
                            <MoreHorizontal size={24} className="text-gray-400 group-hover:text-gray-600 transition-colors" />
                        </Link>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <Link href="https://wa.me/13055104990" target="_blank" className="group flex items-center justify-between w-full bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <MessageCircle size={24} className="text-gray-700" />
                                <span className="font-semibold text-xl text-gray-700">Asesorías nutricionales 1:1</span>
                            </div>
                            <MoreHorizontal size={24} className="text-gray-400 group-hover:text-gray-600 transition-colors" />
                        </Link>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <Link href="https://instagram.com/valenguzmanc" target="_blank" className="group flex items-center justify-between w-full bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <Instagram size={24} className="text-gray-700" />
                                <span className="font-semibold text-xl text-gray-700">COLABORACIONES</span>
                            </div>
                            <MoreHorizontal size={24} className="text-gray-400 group-hover:text-gray-600 transition-colors" />
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Footer */}
                {/* <div className="text-center pt-4">
                    <Link href="https://linktr.ee/nicnutrition_" target="_blank" className="inline-flex items-center gap-2 bg-black/5 backdrop-blur-sm border border-black/10 rounded-full px-4 py-2 text-sm font-semibold text-gray-800">
                        <Image src="/linktree.svg" alt="Linktree" width={16} height={16} />
                        <span>nicnutrition_</span>
                    </Link>
                </div> */}
            </motion.div>
        </div>
    );
}