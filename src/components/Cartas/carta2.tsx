"use client"
import { useEffect, useState } from "react"
import { motion, useAnimation, animate } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Plus } from "lucide-react"

const salesData = [
    { month: "Ene", height: 20, colors: ["#F472B6", "#EF4444"] },
    { month: "Mar", height: 40, colors: ["#F472B6", "#EF4444"] },
    { month: "May", height: 60, colors: ["#3B82F6", "#8B5CF6"] },
    { month: "Jul", height: 75, colors: ["#F97316", "#EC4899"] },
    { month: "Sep", height: 90, colors: ["#4ADE80", "#FBBF24"] }
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
}

const barVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: (custom: { height: number; colors: string[] }) => ({
        height: `${custom.height}%`,
        opacity: 1,
        background: `linear-gradient(to top, ${custom.colors[0]}, ${custom.colors[1]})`,
        transition: {
            height: { duration: 1, ease: "easeOut" },
            opacity: { duration: 0.5 },
            background: { duration: 1, ease: "linear" },
        },
    }),
}

function Counter({ to }: { to: number }) {
    const [value, setValue] = useState(0)

    useEffect(() => {
        const controls = animate(0, to, {
            duration: 2,
            onUpdate(latest) {
                setValue(Math.round(latest))
            },
        })
        return () => controls.stop()
    }, [to])

    return <motion.div>{`$${value.toLocaleString("en-US")}`}</motion.div>
}

export default function Carta2() {
    const controls = useAnimation()
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    useEffect(() => {
        if (inView) {
            controls.start("visible")
        }
    }, [controls, inView])

    return (
        <div ref={ref} className="bg-black rounded-[2rem] md:py-[90px] md:px-[80px] relative overflow-hidden shadow-xl">
            <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-none text-white">
                Incrementa tus ventas — por día, por semana, por mes.
            </h3>

            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-2 mt-8 shadow-2xl w-[90%] mx-auto">
                <div className="text-2xl font-bold text-white ml-2 mb-2">2025</div>

                <div className="flex flex-col bg-white/5  border border-white/10 rounded-2xl p-3 mt-2 shadow-xl">
                    <div className="text-white/70 text-xs font-light">Ventas Totales</div>
                    <div className="text-2xl font-bold text-white mb-2">{inView ? <Counter to={185430} /> : "$0"}</div>
                    <motion.div
                        className="flex items-end justify-between px-2 h-32 gap-1 mb-2"
                        variants={containerVariants}
                        initial="hidden"
                        animate={controls}
                    >
                        {salesData.map((sale) => (
                            <motion.div
                                key={sale.month}
                                className="w-8 rounded-t-lg"
                                custom={{ height: sale.height, colors: sale.colors }}
                                variants={barVariants}
                            ></motion.div>
                        ))}
                    </motion.div>

                    <div className="flex justify-between text-xs text-white/60 px-2">
                        {salesData.map((sale) => (
                            <span key={sale.month}>{sale.month}</span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 right-8 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <Plus className="w-5 h-5 text-black" />
            </div>
        </div>
    )
}
