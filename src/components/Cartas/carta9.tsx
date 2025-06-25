"use client"

import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { Plus, Shield, Clock, Headphones } from "lucide-react"
import { motion, useAnimation } from "framer-motion"

export default function Carta9() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    const controls = useAnimation()

    const features = [
        {
            icon: Shield,
            title: "Garantía Total",
            description: "100% satisfacción garantizada o devolvemos tu dinero.",
            color: "from-green-500 to-emerald-500",
        },
        {
            icon: Clock,
            title: "30 Días Gratis",
            description: "Soporte completo incluido sin costo adicional.",
            color: "from-blue-500 to-cyan-500",
        },
        {
            icon: Headphones,
            title: "Soporte 24/7",
            description: "Expertos disponibles cuando los necesites.",
            color: "from-purple-500 to-pink-500",
        },
    ]

    useEffect(() => {
        if (inView) {
            controls.start("visible")
        }
    }, [inView, controls])

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
            },
        },
    }

    return (
        <div ref={ref} className="bg-white rounded-[2rem] p-8 md:py-[90px] md:px-[80px] relative overflow-hidden shadow-xl">
            <div className="relative z-10">
                {/* Header */}
                <h3 className="text-3xl md:text-[56px] font-bold mb-6 leading-none text-black">
                    Garantía Total.
                    <br />
                    <span className="text-gray-500 md:text-[36px] leading-none">Tranquilidad absoluta.</span>
                </h3>

                {/* Features Grid */}
                <motion.div
                    className="grid grid-cols-1 gap-3 mt-10"
                    initial="hidden"
                    animate={controls}
                    variants={containerVariants}
                >
                    {features.map((feature, index) => {
                        const IconComponent = feature.icon

                        return (
                            <motion.div
                                key={index}
                                className="bg-white/40 backdrop-blur-sm rounded-xl p-4 border border-white/20 shadow-sm hover:bg-white/50 transition-all duration-300"
                                variants={itemVariants}
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <div
                                        className={`w-6 h-6 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center`}
                                    >
                                        <IconComponent className="w-3 h-3 text-white" />
                                    </div>
                                    <span className="text-gray-800 font-semibold text-sm">{feature.title}</span>
                                </div>
                                <div className="text-gray-600 text-xs leading-normal pl-9">{feature.description}</div>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </div>

            {/* Botón Plus */}
            <div className="absolute bottom-8 right-8 w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <Plus className="w-5 h-5 text-white" />
            </div>
        </div>
    )
}
