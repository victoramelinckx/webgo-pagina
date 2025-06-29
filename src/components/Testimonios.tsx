"use client"

import { ChevronDown, Star } from "lucide-react"
import Image from "next/image"
import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/Button"

const testimonials = [
    {
        id: 1,
        text: "Terminamos con un sitio web nuevo y enormemente mejorado.",
        rating: 5,
        author: {
            name: "Maggy Polier",
            handle: "Gerente General, ECC",
            avatar: "/maggy.webp",
        },
    },
    {
        id: 2,
        text: "Cuando comencé mi negocio, necesitaba una plataforma digital moderna, bien diseñada y funcional. ¡Los resultados superaron mis expectativas!",
        rating: 5,
        author: {
            name: "Adriana Amelinckx",
            handle: "Co-fundador, You Aesthetic Center",
            avatar: "/amelinckx.webp",
        },
    },
    {
        id: 3,
        text: "Hicieron un buen trabajo construyendo el sitio web de mi empresa.",
        rating: 5,
        author: {
            name: "Carlos Albertazzi",
            handle: "Fundador, Florida Taxes",
            avatar: "/carlos.webp",
        },
    },
    {
        id: 4,
        text: "Trabajar con WebGo ha sido una experiencia excelente. El equipo completó todo en un tiempo récord, entregando un ecommerce totalmente funcional en muy poco tiempo.",
        rating: 5,
        author: {
            name: "Macarena Cargo",
            handle: "Fundadora, Oak-Ore",
            avatar: "/maca.webp",
        },
    },
    {
        id: 5,
        text: "Estamos encantados con el trabajo de WebGo. Nuestra plataforma no solo funciona a la perfección, sino que ha transformado la manera en que nos conectamos con nuestros pacientes. Es visualmente atractiva, moderna y ha elevado la imagen de nuestra clínica.",
        rating: 5,
        author: {
            name: "Francisco Galindo",
            handle: "Dentista",
            avatar: "/galindoo.webp",
        },
    },
    {
        id: 6,
        text: "La rapidez y eficiencia del equipo de WebGo nos impresionaron. En solo 7 días, lograron entregar un sitio completamente operativo, superando nuestras expectativas en cuanto a calidad y funcionalidad.",
        rating: 5,
        author: {
            name: "Franklin Bustos",
            handle: "Cofundador, Bustos & Asociados Abogados",
            avatar: "/bustos.webp",
        },
    },
    {
        id: 7,
        text: "El proceso fue increíblemente fluido y el equipo de WebGo demostró un profesionalismo excepcional en cada etapa. ¡Totalmente recomendados!",
        rating: 5,
        author: {
            name: "Josedenx Davila",
            handle: "Jdenx Solutions",
            avatar: "/jose.PNG",
        },
    },
    {
        id: 8,
        text: "Desde que lanzamos nuestro nuevo sitio web, nuestras ventas han aumentado un 40%. La inversión ha valido cada céntimo. ¡Gracias, WebGo!",
        rating: 5,
        author: {
            name: "Rodrigo",
            handle: "Director de Marketing",
            avatar: "/rodri.PNG",
        },
    },
    {
        id: 9,
        text: "No solo crearon un diseño hermoso, sino que también se aseguraron de que la experiencia del usuario fuera intuitiva y eficiente. El feedback ha sido fantástico.",
        rating: 5,
        author: {
            name: "Marcela Sandía",
            handle: "Psicóloga",
            avatar: "/marcela.jpeg",
        },
    },
]

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
                <Star
                    key={i}
                    className={`w-4 h-4 transition-all duration-300 ${i < rating ? "fill-yellow-400 text-yellow-400 drop-shadow-sm" : "fill-gray-200 text-gray-200"
                        }`}
                />
            ))}
        </div>
    )
}

function TestimonialCard({
    testimonial,
}: {
    testimonial: (typeof testimonials)[0]
}) {
    return (
        <div
            className="group relative p-7 rounded-3xl cursor-pointer"
            style={{
                backdropFilter: "blur(25px) saturate(200%) contrast(120%)",
                WebkitBackdropFilter: "blur(25px) saturate(200%) contrast(120%)",
                background: `
          linear-gradient(135deg, 
            rgba(255, 255, 255, 0.25) 0%,
            rgba(255, 255, 255, 0.15) 50%,
            rgba(255, 255, 255, 0.05) 100%
          )
        `,
                border: "1px solid rgba(255, 255, 255, 0.4)",
                boxShadow: `
          0 20px 40px rgba(0, 0, 0, 0.1),
          0 8px 16px rgba(0, 0, 0, 0.06),
          inset 0 2px 0 rgba(255, 255, 255, 0.6),
          inset 0 -2px 0 rgba(255, 255, 255, 0.1),
          inset 2px 0 0 rgba(255, 255, 255, 0.2),
          inset -2px 0 0 rgba(255, 255, 255, 0.1)
        `,
            }}
        >
            {/* Multiple glass effect layers */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/40 via-white/20 to-transparent pointer-events-none" />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tl from-pink-300/8 via-transparent to-orange-300/8 pointer-events-none" />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

            {/* Noise texture overlay for realistic glass */}
            <div
                className="absolute inset-0 rounded-3xl opacity-30 pointer-events-none mix-blend-soft-light"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />

            {/* Animated border gradient */}
            <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                    background: `
            linear-gradient(45deg, 
              rgba(233, 188, 242, 0.3) 0%,
              rgba(254, 196, 154, 0.3) 25%,
              rgba(248, 183, 197, 0.3) 50%,
              rgba(233, 188, 242, 0.3) 75%,
              rgba(254, 196, 154, 0.3) 100%
            )
          `,
                    backgroundSize: "400% 400%",
                    animation: "gradientShift 3s ease infinite",
                    padding: "2px",
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "xor",
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                }}
            />

            <div className="relative z-10">
                <p className="text-gray-800 text-sm leading-relaxed mb-6 font-medium drop-shadow-sm transition-all duration-300 group-hover:text-gray-900">
                    {testimonial.text}
                </p>

                <StarRating rating={testimonial.rating} />

                <div className="flex items-center gap-3">
                    <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-400/20 to-orange-400/20 blur-sm group-hover:blur-none transition-all duration-300" />
                        <Image
                            src={testimonial.author.avatar || "/placeholder.svg"}
                            alt={testimonial.author.name}
                            width={44}
                            height={44}
                            className="relative rounded-full w-12 h-12 object-cover ring-2 ring-white/60 shadow-lg transition-all duration-300 group-hover:ring-white/80 group-hover:shadow-xl"
                        />
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 to-transparent pointer-events-none" />
                    </div>
                    <div>
                        <p className="font-semibold text-gray-900 text-sm drop-shadow-sm transition-all duration-300 group-hover:text-gray-950">
                            {testimonial.author.name}
                        </p>
                        <p className="text-gray-700 text-xs transition-all duration-300 group-hover:text-gray-800">
                            {testimonial.author.handle}
                        </p>
                    </div>
                </div>
            </div>

            {/* Hover glow effect */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 bg-gradient-to-r from-pink-300/5 via-orange-300/5 to-yellow-300/5 transition-all duration-700 pointer-events-none blur-xl" />
        </div>
    )
}

export default function TestimonialsSection() {
    const [scrollY, setScrollY] = useState(0)
    const sectionRef = useRef<HTMLElement>(null)
    const [isMobile, setIsMobile] = useState(false)
    const [visibleCount, setVisibleCount] = useState(3)

    useEffect(() => {
        const checkScreenSize = () => setIsMobile(window.innerWidth < 768)
        checkScreenSize()
        window.addEventListener("resize", checkScreenSize)

        const handleScroll = () => {
            if (sectionRef.current && !isMobile) {
                const rect = sectionRef.current.getBoundingClientRect()
                const viewportHeight = window.innerHeight
                if (rect.top < viewportHeight && rect.bottom >= 0) {
                    setScrollY(viewportHeight - rect.top)
                } else {
                    setScrollY(0)
                }
            }
        }

        const throttledScroll = () => requestAnimationFrame(handleScroll)
        window.addEventListener("scroll", throttledScroll, { passive: true })

        return () => {
            window.removeEventListener("resize", checkScreenSize)
            window.removeEventListener("scroll", throttledScroll)
        }
    }, [isMobile])

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)

    // Mobile View
    if (isMobile) {
        const visibleTestimonials = testimonials.slice(0, visibleCount)
        const showMore = visibleCount < testimonials.length

        return (
            <section
                className="py-20 px-4 relative"
                style={{
                    background: `linear-gradient(135deg, #fdfbff 0%, #f9f9f9 50%, #f3f4f6 100%)`,
                    maskImage: showMore
                        ? "linear-gradient(to bottom, black 80%, transparent 100%)"
                        : "none",
                    WebkitMaskImage: showMore
                        ? "linear-gradient(to bottom, black 80%, transparent 100%)"
                        : "none",
                }}

            >
                <div className="max-w-5xl mx-auto">
                    <div className="max-w-3xl mx-auto text-center mb-8">
                        <h2 className="text-5xl font-bold tracking-tight text-gray-900">
                            Clientes felices.
                        </h2>
                    </div>

                    <div
                        className="relative"

                    >
                        <div className="grid grid-cols-1 gap-2">
                            <AnimatePresence>
                                {visibleTestimonials.map((testimonial, i) => (
                                    <motion.div
                                        key={testimonial.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.5,
                                            ease: "easeOut",
                                            delay: i >= 3 ? (i - visibleCount + 3) * 0.1 : 0,
                                        }}
                                    >
                                        <TestimonialCard testimonial={testimonial} />
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>

                    {showMore && (

                        <div className="flex items-center justify-center my-2">
                            <div className="border-t border-gray-300 flex-grow"></div>
                            <button onClick={() => setVisibleCount((prev) => prev + 3)} className="text-xs hover:cursor-pointer text-gray-800 hover:text-black mx-4 flex items-center gap-1">
                                Mostrar más <ChevronDown className="w-3 h-3" />
                            </button>
                            <div className="border-t border-gray-300 flex-grow"></div>
                        </div>
                    )}
                </div>
            </section>
        )
    }

    // Desktop View (unchanged)
    const column1 = testimonials.slice(0, 3)
    const column2 = testimonials.slice(3, 6)
    const column3 = testimonials.slice(6, 9)

    return (
        <>
            <style jsx>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

            <section
                ref={sectionRef}
                className="pt-20 px-4 relative overflow-hidden -mb-40"
                style={{
                    background: `
            radial-gradient(circle at 20% 30%, rgba(233, 188, 242, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(254, 196, 154, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(209, 240, 188, 0.05) 0%, transparent 70%),
            linear-gradient(135deg, #fdfbff 0%, #f9f9f9 50%, #f3f4f6 100%)
          `,
                }}
            >
                {/* Enhanced animated background elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-200/5 rounded-full blur-3xl animate-pulse" />
                    <div
                        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-200/5 rounded-full blur-3xl animate-pulse"
                        style={{ animationDelay: "1s" }}
                    />
                    <div
                        className="absolute top-1/2 left-1/2 w-64 h-64 bg-green-200/5 rounded-full blur-3xl animate-pulse"
                        style={{ animationDelay: "2s" }}
                    />
                </div>

                <div className="max-w-5xl mx-auto relative z-10">
                    {/* Enhanced Header */}
                    <div className="max-w-3xl mx-auto text-center mb-32">
                        <h2 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl">
                            Clientes felices.
                        </h2>
                    </div>

                    {/* Enhanced Testimonials Grid with Advanced Parallax */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                        {/* Column 1 - Slowest parallax with easing */}
                        <div
                            className="space-y-2"
                            style={{
                                transform: `translateY(${-scrollY * 0.20 * easeOutCubic(Math.min(scrollY / 1000, 1))}px)`,
                                transition: "transform 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                            }}
                        >
                            {column1.map((testimonial) => (
                                <div key={testimonial.id}>
                                    <TestimonialCard testimonial={testimonial} />
                                </div>
                            ))}
                        </div>

                        {/* Column 2 - Medium parallax with easing */}
                        <div
                            className="space-y-2"
                            style={{
                                transform: `translateY(${-scrollY * 0.15 * easeOutCubic(Math.min(scrollY / 1000, 1))}px)`,
                                transition: "transform 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                            }}
                        >
                            {column2.map((testimonial) => (
                                <div key={testimonial.id}>
                                    <TestimonialCard testimonial={testimonial} />
                                </div>
                            ))}
                        </div>

                        {/* Column 3 - Fastest parallax with easing */}
                        <div
                            className="space-y-2"
                            style={{
                                transform: `translateY(${-scrollY * 0.25 * easeOutCubic(Math.min(scrollY / 1000, 1))}px)`,
                                transition: "transform 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                            }}
                        >
                            {column3.map((testimonial) => (
                                <div key={testimonial.id}>
                                    <TestimonialCard testimonial={testimonial} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
