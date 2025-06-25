"use client"

import Image from "next/image"
import { useEffect, useState, useRef } from "react"

export default function Cta() {
    const [scrollProgress, setScrollProgress] = useState(0)
    const sectionRef = useRef<HTMLElement>(null)
    const lastScrollY = useRef(0)
    const [scrollDirection, setScrollDirection] = useState<"down" | "up">("down")

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return

            const currentScrollY = window.scrollY

            // Detectar dirección del scroll
            if (currentScrollY > lastScrollY.current) {
                setScrollDirection("down")
            } else if (currentScrollY < lastScrollY.current) {
                setScrollDirection("up")
            }
            lastScrollY.current = currentScrollY

            const rect = sectionRef.current.getBoundingClientRect()
            const windowHeight = window.innerHeight

            const sectionTop = rect.top
            const sectionBottom = rect.bottom
            const sectionHeight = rect.height

            // Activación mucho más tardía - solo cuando realmente estés dentro
            // Empezar cuando la sección está casi completamente visible
            const startPoint = windowHeight * 0.9 // Cambié de 0.8 a 0.9
            // Máximo cuando estás en el centro de la sección
            const centerPoint = windowHeight * 0.3 // Más restrictivo
            // Terminar cuando la sección está saliendo
            const endPoint = -sectionHeight * 0.1

            let progress = 0

            if (sectionTop <= startPoint && sectionTop >= centerPoint) {
                // Entrada muy tardía y gradual
                progress = ((startPoint - sectionTop) / (startPoint - centerPoint)) * 0.4
            } else if (sectionTop <= centerPoint && sectionTop >= endPoint) {
                // Fase de máxima visibilidad
                const centerProgress = (centerPoint - sectionTop) / (centerPoint - endPoint)
                progress = 0.4 + centerProgress * 0.6
            } else if (sectionTop < endPoint) {
                progress = 1
            }

            // Curvas de easing aún más sutiles
            let easedProgress
            if (scrollDirection === "down") {
                // Entrada ultra suave
                easedProgress = progress * progress * progress * progress * (progress * (progress * 6 - 15) + 10)
            } else {
                // Salida suave
                easedProgress = 1 - Math.pow(1 - progress, 3)
            }

            setScrollProgress(Math.min(Math.max(easedProgress, 0), 1))
        }

        window.addEventListener("scroll", handleScroll, { passive: true })
        handleScroll()

        return () => window.removeEventListener("scroll", handleScroll)
    }, [scrollDirection])

    return (
        <section ref={sectionRef} className="relative bg-white pt-24 pb-40 text-center overflow-hidden min-h-screen">
            {/* Gradiente base usando los colores exactos del CSS */}
            <div
                className="absolute inset-0 will-change-transform"
                style={{
                    opacity: scrollProgress * 0.4, // Aún más sutil
                    transition:
                        scrollDirection === "down"
                            ? "opacity 1.5s cubic-bezier(0.16, 1, 0.3, 1)"
                            : "opacity 0.8s cubic-bezier(0.76, 0, 0.24, 1)",
                    background: "linear-gradient(270deg, #f1c235 7%, #abcc21, #ef9f44, #df73a5, #c17ff0 80%)",
                    backgroundRepeat: "no-repeat",
                }}
            />

            {/* Radial gradients con los colores del CSS */}
            <div
                className="absolute inset-0 pointer-events-none will-change-transform"
                style={{
                    opacity: scrollProgress * 0.3,
                    transition:
                        scrollDirection === "down"
                            ? "opacity 1.8s cubic-bezier(0.16, 1, 0.3, 1)"
                            : "opacity 0.6s cubic-bezier(0.76, 0, 0.24, 1)",
                    transform: scrollDirection === "up" ? `translateY(${(1 - scrollProgress) * -3}px)` : "translateY(0)",
                    background: `
            radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.8) 10%, rgba(255, 255, 255, 0.3) 25%, rgba(255, 255, 255, 0) 45%),
            radial-gradient(at top left, rgba(250, 249, 253, 0.7) 5%, rgba(250, 249, 253, 0.2) 15%, rgba(250, 249, 253, 0) 30%),
            radial-gradient(at top right, rgba(251, 254, 250, 0.8) 8%, rgba(251, 254, 250, 0.3) 20%, rgba(251, 254, 250, 0) 35%),
            radial-gradient(ellipse 35% 20% at 25% 8%, rgba(241, 194, 53, 0.2) 0%, rgba(241, 194, 53, 0.05) 50%, transparent 100%),
            radial-gradient(ellipse 30% 15% at 75% 12%, rgba(171, 204, 33, 0.15) 0%, rgba(171, 204, 33, 0.03) 60%, transparent 100%)
          `,
                    backgroundRepeat: "no-repeat",
                }}
            />

            {/* Capa adicional muy sutil */}
            <div
                className="absolute inset-0 pointer-events-none will-change-transform"
                style={{
                    opacity: scrollProgress * 0.15,
                    transition:
                        scrollDirection === "down"
                            ? "all 2s cubic-bezier(0.16, 1, 0.3, 1)"
                            : "all 0.5s cubic-bezier(0.87, 0, 0.13, 1)",
                    transform:
                        scrollDirection === "up"
                            ? `scale(${0.99 + scrollProgress * 0.01}) translateY(${(1 - scrollProgress) * -2}px)`
                            : "scale(1) translateY(0)",
                    background: `
            radial-gradient(ellipse 50% 25% at 50% 15%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.05) 40%, transparent 70%),
            radial-gradient(ellipse 70% 35% at 30% 0%, rgba(104, 163, 208, 0.08) 0%, rgba(104, 163, 208, 0.02) 50%, transparent 80%)
          `,
                    backgroundRepeat: "no-repeat",
                }}
            />

            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex justify-center mb-0">
                    <Image src="/webgo.webp" alt="WebGo Logo" width={140} height={40} quality={100} />
                </div>
                <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight text-gray-900">
                    <span className="bg-gradient-to-r from-[#BE649C] to-[#6D80BE] bg-clip-text text-black leading-none">
                        Haz crecer tu negocio.
                    </span>
                </h1>
                <p className="mt-6 max-w-2xl mx-auto font-semibold text-xl leading-8 text-gray-700">
                    La web de tu empresa no es solo un sitio; es tu vendedor más poderoso, activo día y noche. Cada negocio tiene
                    una historia. La nuestra es hacer que la tuya venda.
                </p>
                <div className="mt-10">
                    <a
                        href="#"
                        className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-10 rounded-full shadow-lg transition-transform transform hover:scale-105 duration-300 ease-in-out"
                    >
                        ¡Obtén Tu Sitio Web Ya!
                    </a>
                </div>
            </div>


        </section>
    )
}
