"use client"
import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { Plus } from "lucide-react"

export default function Carta3() {
    const [currentDay, setCurrentDay] = useState(1)
    const [hasAnimated, setHasAnimated] = useState(false)
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    useEffect(() => {
        if (inView && !hasAnimated) {
            const totalDuration = 3000 // 3 segundos total
            const steps = 13 // de 1 a 14 (13 incrementos)
            const stepDuration = totalDuration / steps // ~230ms por paso

            const interval = setInterval(() => {
                setCurrentDay(prev => {
                    if (prev >= 14) {
                        clearInterval(interval)
                        setHasAnimated(true)
                        return 14
                    }
                    return prev + 1
                })
            }, stepDuration)

            return () => clearInterval(interval)
        }
    }, [inView, hasAnimated])

    return (
        <div ref={ref} className="bg-white rounded-[2rem] p-8 md:py-[90px] md:px-[80px] relative overflow-hidden shadow-xl">
            <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-none text-black">
                Entrega garantizada en 14 días.
                <br />
                <span className="text-gray-500">Sin fechas que se pierden.</span>
            </h3>

            <div className="flex justify-center mt-8">
                <div className="bg-white rounded-3xl p-8 w-48 h-48 flex flex-col items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100">



                    {/* Mes */}
                    <div className="text-red-500 font-bold text-4xl mb-2 tracking-wider">
                        DÍAS
                    </div>

                    {/* Número del día con animación suave */}
                    <div className={`
                        text-7xl font-bold transition-all duration-200 ease-out
                        ${currentDay === 14 ? 'text-black scale-105' : 'text-black scale-100'}
                    `}>
                        {currentDay}
                    </div>

                    {/* Barra de progreso sutil */}
                    <div className=" w-28 mt-2">
                        <div className="w-full bg-gray-200 rounded-full h-1">
                            <div
                                className={`
                                    h-1 rounded-full transition-all duration-200 ease-out
                                    ${currentDay === 14 ? 'bg-green-500' : 'bg-red-500'}
                                `}
                                style={{
                                    width: `${(currentDay / 14) * 100}%`,
                                    transition: 'width 200ms ease-out, background-color 300ms ease-out'
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Texto de estado */}
            <div className="text-center mt-2">
                <div className={`
                    text-base font-medium transition-colors duration-300
                    ${currentDay === 14 ? 'text-green-600' : 'text-gray-600'}
                `}>
                    {currentDay === 14 ? '¡Proyecto completado!' : `Desarrollando día ${currentDay}...`}
                </div>
            </div>
            <div className="absolute bottom-8 right-8 w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <Plus className="w-5 h-5 text-white" />
            </div>
        </div>
    );
}