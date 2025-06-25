"use client"

import { Plus } from "lucide-react"
import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

export const CartaSeguridad = () => {
    const [isAnimated, setIsAnimated] = useState(false)
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    })

    useEffect(() => {
        if (inView) {
            // Pequeño delay para que se vea más elegante
            setTimeout(() => {
                setIsAnimated(true)
            }, 200)
        }
    }, [inView])

    return (
        <div
            ref={ref}
            className="md:col-span-1 bg-gradient-to-br from-orange-400/75 to-pink-400/75 to-purple-500/75 rounded-[2rem] p-12 md:p-16 relative overflow-hidden shadow-xl"
        >
            <div className="relative z-10">
                <div className="text-white text-lg font-medium mb-4">Privacidad y Seguridad</div>

                <h3 className="text-4xl md:text-5xl font-bold leading-none text-white">
                    Tu sitio.
                    <br />
                    Tu información.
                    <br />
                    Tu negocio.
                </h3>

                {/* Logo con Animación de Candado */}
                <div className="relative w-40 h-auto mx-auto mt-18">
                    {/* Arco Animado - Efecto Candado */}
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-24 h-24">
                        <svg
                            width="100"
                            height="64"
                            viewBox="0 0 100 64"
                            className="absolute top-0 left-0"
                            style={{
                                filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
                            }}
                        >
                            <path
                                d="M 12 56 Q 12 8, 50 8 Q 88 8, 88 56"
                                stroke="white"
                                strokeWidth="9"
                                fill="none"
                                strokeLinecap="round"
                                className={`transition-all duration-1000 ease-out ${isAnimated ? "opacity-100" : "opacity-0"}`}
                                style={{
                                    strokeDasharray: isAnimated ? "none" : "140",
                                    strokeDashoffset: isAnimated ? "0" : "140",
                                    transition: "stroke-dashoffset 1.2s ease-out, opacity 0.5s ease-out",
                                }}
                            />
                        </svg>
                    </div>

                    {/* Logo */}
                    <img
                        src="/webgo-logo-blanco.png"
                        alt="shield"
                        className={`w-40 h-auto mx-auto transition-all duration-800 delay-500 ${isAnimated ? "opacity-100 transform translate-y-0" : "opacity-70 transform translate-y-2"
                            }`}
                    />

                    {/* Efecto de brillo sutil */}
                    <div
                        className={`absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent rounded-lg transition-opacity duration-1000 delay-700 ${isAnimated ? "opacity-100" : "opacity-0"
                            }`}
                    />
                </div>
            </div>

            <div className="absolute bottom-8 right-8 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Plus className="w-5 h-5 text-white" />
            </div>

            <style jsx>{`
        @keyframes subtle-glow {
          0%,
          100% {
            filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.3));
          }
          50% {
            filter: drop-shadow(0 0 15px rgba(255, 255, 255, 0.5));
          }
        }
        .animate-glow {
          animation: subtle-glow 3s ease-in-out infinite;
        }
      `}</style>
        </div>
    )
}
