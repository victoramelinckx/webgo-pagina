"use client"

import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { ArrowRight, Sparkles } from "lucide-react"
import { motion, useAnimation } from "framer-motion"

export default function CartaCTA() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    const controls = useAnimation()
    const [isHovered, setIsHovered] = useState(false)

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
                delayChildren: 0.2,
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
        <motion.div
            ref={ref}
            className="bg-black rounded-[2rem] p-8 md:py-[90px] md:px-[80px] relative overflow-hidden shadow-xl"
            initial="hidden"
            animate={controls}
            variants={containerVariants}
        >
            {/* Efectos de fondo sutiles */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/10 rounded-[2rem]"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>

            <div className="relative z-10 text-center">
                {/* Header */}
                <motion.div className="mb-8" variants={itemVariants}>
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <img src="/webgo-logo-blanco.png" alt="webgo" className="w-20 h-auto" />
                    </div>
                    <h3 className="text-3xl md:text-[56px] font-bold mb-4 leading-none text-white">Transforma tu negocio.</h3>
                    <p className="text-white/80 text-xl font-medium max-w-2xl mx-auto">
                        Únete a más de 500 empresas que ya están creciendo con nuestras soluciones.
                    </p>
                </motion.div>

                {/* CTA Button */}
                <motion.div className="mb-8" variants={itemVariants}>
                    <motion.button
                        className="group bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl px-8 py-4 text-white font-semibold text-lg hover:bg-white/25 transition-all duration-300 shadow-lg"
                        onHoverStart={() => setIsHovered(true)}
                        onHoverEnd={() => setIsHovered(false)}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <div className="flex items-center gap-3">
                            <span>Comenzar ahora</span>
                            <motion.div animate={isHovered ? { x: 4 } : { x: 0 }} transition={{ type: "spring", stiffness: 400 }}>
                                <ArrowRight className="w-5 h-5" />
                            </motion.div>
                        </div>
                    </motion.button>
                </motion.div>

                {/* Features List */}
                <motion.div className="space-y-1" variants={itemVariants}>
                    {["Configuración en menos de 24 horas", "Soporte dedicado incluido", "Garantía de satisfacción 100%"].map(
                        (feature, index) => (
                            <motion.div
                                key={index}
                                className="flex items-center justify-center gap-3 text-white/90"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                            >
                                <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                                <span className="text-sm font-medium">{feature}</span>
                            </motion.div>
                        ),
                    )}
                </motion.div>

                {/* Decorative Elements */}
                <motion.div
                    className="absolute top-20 left-20 opacity-20"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                    <Sparkles className="w-6 h-6 text-white" />
                </motion.div>

                <motion.div
                    className="absolute bottom-20 right-20 opacity-20"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                    <Sparkles className="w-4 h-4 text-white" />
                </motion.div>
            </div>
        </motion.div>
    )
}
