"use client"

import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { Plus, Zap, Search, FileText, TrendingUp } from "lucide-react"
import { motion, useAnimation } from "framer-motion"

export default function Carta10() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    const controls = useAnimation()
    const [animatedValues, setAnimatedValues] = useState({
        speed: 0,
        seo: 0,
        content: 0,
        conversion: 0,
    })

    const performanceMetrics = [
        {
            icon: Zap,
            title: "Velocidad",
            metric: "0.8s",
            rating: 98,
            description: "Velocidad de carga",
            key: "speed",
        },
        {
            icon: Search,
            title: "SEO",
            metric: "Top 3",
            rating: 95,
            description: "Ranking promedio",
            key: "seo",
        },
        {
            icon: FileText,
            title: "Textos persuasivos",
            metric: "+340%",
            rating: 92,
            description: "Engagement mejorado",
            key: "content",
        },
        {
            icon: TrendingUp,
            title: "Conversión",
            metric: "+250%",
            rating: 96,
            description: "Conversión aumentada",
            key: "conversion",
        },
    ]

    useEffect(() => {
        if (inView) {
            controls.start("visible")

            // Animar los ratings progresivamente
            performanceMetrics.forEach((metric, index) => {
                setTimeout(() => {
                    const duration = 2000
                    const steps = 60
                    const increment = metric.rating / steps
                    let current = 0

                    const interval = setInterval(() => {
                        current += increment
                        if (current >= metric.rating) {
                            current = metric.rating
                            clearInterval(interval)
                        }

                        setAnimatedValues((prev) => ({
                            ...prev,
                            [metric.key]: Math.round(current),
                        }))
                    }, duration / steps)
                }, index * 200)
            })
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
        <div
            ref={ref}
            className="bg-gradient-to-br from-blue-500/80 to-green-500/80 rounded-[2rem] p-8 md:py-[90px] md:px-[80px] relative overflow-hidden shadow-xl"
        >
            <div className="relative z-10">
                {/* Header */}
                <h3 className="text-3xl md:text-[56px] font-bold mb-6 leading-none text-white">Rendimiento extremo</h3>
                <p className="text-white/80 text-xl font-medium">Sistemas y métodos que aseguran un alto rendimiento.</p>
                {/* Performance Cards - Vertical Stack */}
                <motion.div className="space-y-4 mt-2" initial="hidden" animate={controls} variants={containerVariants}>
                    {performanceMetrics.map((metric, index) => {
                        const IconComponent = metric.icon
                        const animatedRating = animatedValues[metric.key as keyof typeof animatedValues]

                        return (
                            <motion.div
                                key={index}
                                className="bg-white/20 backdrop-blur-xl rounded-2xl p-3 border border-white/30 shadow-lg hover:bg-white/25 hover:-translate-y-2 transition-all duration-300 ease-in-out"
                                variants={itemVariants}
                            >
                                <div className="flex items-center justify-between">
                                    {/* Left Side - Icon and Info */}
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30">
                                            <IconComponent className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-1 mb-1">
                                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                                <span className="text-white/80 text-sm font-medium">{metric.description}</span>
                                            </div>
                                            <h4 className="text-white text-lg font-semibold">{metric.title}</h4>
                                        </div>
                                    </div>

                                    {/* Right Side - Metrics */}
                                    <div className="text-right">
                                        <div className="text-white text-2xl md:text-2xl font-bold mb-1">{metric.metric}</div>
                                        <div className="text-white/80 text-sm font-mono">{animatedRating}/100</div>

                                        {/* Progress Bar */}
                                        <div className="w-24 bg-white/20 rounded-full h-1.5 mt-1">
                                            <motion.div
                                                className="bg-white rounded-full h-1.5"
                                                initial={{ width: 0 }}
                                                animate={{ width: `${animatedRating}%` }}
                                                transition={{ duration: 2, delay: index * 0.2 }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </div>

            {/* Botón Plus */}
            <div className="absolute bottom-8 right-8 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                <Plus className="w-5 h-5 text-white" />
            </div>
        </div>
    )
}
