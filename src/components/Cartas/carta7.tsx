"use client"

import { Plus } from "lucide-react"
import { useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

const features = ["E-commerce personalizado", "IA integrada", "Marketing automatizado", "Shopify headless"]

export default function Carta7() {
    const controls = useAnimation()
    const [currentFeature, setCurrentFeature] = useState(0)
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    })

    useEffect(() => {
        if (inView) {
            controls.start("visible")

            // Ciclo de características
            const interval = setInterval(() => {
                setCurrentFeature((prev) => (prev + 1) % features.length)
            }, 2000)

            return () => clearInterval(interval)
        }
    }, [controls, inView])

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    }

    const featureVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
        exit: {
            opacity: 0,
            x: 20,
            transition: {
                duration: 0.3,
            },
        },
    }

    return (
        <div ref={ref} className="bg-black rounded-[2rem] p-8 md:py-[90px] md:px-[80px] relative overflow-hidden shadow-xl">
            {/* Efectos de fondo */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 rounded-[2rem]"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-white/5 to-transparent rounded-full blur-3xl"></div>

            <div className="relative z-10">
                <motion.h3
                    className="text-4xl md:text-[60px] font-bold mb-8 leading-none"
                    variants={textVariants}
                    initial="hidden"
                    animate={controls}
                >
                    <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                        Software que impulsa
                    </span>
                    <br />
                    <span className="text-white">tu negocio.</span>
                </motion.h3>

                {/* Característica rotativa */}
                <div className="h-16 flex items-center mb-8">
                    <motion.div
                        key={currentFeature}
                        variants={featureVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="flex items-center gap-3"
                    >
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
                        <span className="text-gray-300 text-xl md:text-2xl font-medium">{features[currentFeature]}</span>
                    </motion.div>
                </div>

                {/* Línea de progreso */}
                <div className="w-32 h-0.5 bg-white/10 rounded-full mb-8 overflow-hidden">
                    <motion.div
                        className="h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />
                </div>

                {/* Tagline final */}
                <motion.p
                    className="text-gray-400 text-lg leading-relaxed max-w-md"
                    variants={textVariants}
                    initial="hidden"
                    animate={controls}
                    transition={{ delay: 0.3 }}
                >
                    Desde ideas hasta soluciones completas.
                    <br />
                    <span className="text-white/80">Tecnología que funciona.</span>
                </motion.p>

                {/* Elementos decorativos */}
                <div className="absolute top-20 right-20 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-75"></div>
                <div
                    className="absolute top-32 right-32 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-50"
                    style={{ animationDelay: "1s" }}
                ></div>
                <div
                    className="absolute bottom-32 left-20 w-1 h-1 bg-cyan-400 rounded-full animate-ping opacity-60"
                    style={{ animationDelay: "2s" }}
                ></div>
            </div>

            <div className="absolute bottom-8 right-8 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <Plus className="w-5 h-5 text-black" />
            </div>

            <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          background-size: 200% 100%;
          animation: shimmer 3s ease-in-out infinite;
        }
      `}</style>
        </div>
    )
}
