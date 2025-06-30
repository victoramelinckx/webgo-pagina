"use client"

import { Element } from "react-scroll"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/Carousel"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

const projects = [
    {
        id: 1,
        title: "Oakore",
        description: "E-commerce de muebles premium con diseño minimalista",
        image: "/oakore1.webp?height=720&width=1280",
        mobileImage: "/oak-web.webp?height=1280&width=720",
        category: "E-commerce",
    },
    {
        id: 2,
        title: "Kodiak",
        description: "E-commerce de marca deportiva",
        image: "/kodiak1.webp?height=720&width=1280",
        category: "Salud",
    },
    {
        id: 3,
        title: "You",
        description: "Plataforma para negocio de salud y belleza en Miami.",
        image: "/you.webp?height=720&width=1280",
        mobileImage: "/you-web.webp?height=1280&width=720",
        category: "Salud y Belleza",
    },
    {
        id: 4,
        title: "ECC",
        description: "Sitio Web para clinica pediatra en Miami.",
        image: "/ecc.webp?height=720&width=1280",
        mobileImage: "/ecc-web.webp?height=1280&width=720",
        category: "Salud",
    },
    {
        id: 5,
        title: "JD",
        description: "E-commerce de productos de baños en Miami.",
        image: "/jd.webp?height=720&width=1280",
        mobileImage: "/jd-web.webp?height=1280&width=720",
        category: "Hogar",
    },
    {
        id: 6,
        title: "IQZone",
        description: "Sitio Web para asesoría educativa en Miami.",
        image: "/iqzone.webp?height=720&width=1280",
        category: "Educación",
    },
    {
        id: 7,
        title: "Galindo",
        description: "Sitio Web para odontología en Chile.",
        image: "/galindo.webp?height=720&width=1280",
        mobileImage: "/galindo-web.webp?height=1280&width=720",
        category: "Odontología",
    },
    {
        id: 8,
        title: "Miami Taxes",
        description: "Sitio Web para empresa de impuestos en Miami.",
        image: "/taxes.webp?height=720&width=1280",
        category: "Impuestos",
    },
    {
        id: 9,
        title: "SweetHomes",
        description: "Sitio Web para empresa de inmobiliaria en Miami.",
        image: "/sweethomes.webp?height=720&width=1280",
        category: "Inmobiliaria",
    },
    {
        id: 10,
        title: "JDenx",
        description: "Sitio Web para el mejor plomero de Miami.",
        image: "/jdenx.webp?height=720&width=1280",
        mobileImage: "/jdenx-web.webp?height=1280&width=720",
        category: "Hogar",
    },
    {
        id: 10,
        title: "IQZone",
        description: "Sitio Web para empresa de asesoría educativa en Miami.",
        image: "/iqzone.webp?height=720&width=1280",
        category: "Educación",
    },

]

export const Proyectos = () => {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth < 768) // Tailwind's 'md' breakpoint
        }

        checkIsMobile()
        window.addEventListener("resize", checkIsMobile)

        return () => window.removeEventListener("resize", checkIsMobile)
    }, [])

    const displayedProjects = isMobile
        ? projects.filter(p => p.mobileImage)
        : projects

    useEffect(() => {
        if (!api) {
            return
        }

        setCount(displayedProjects.length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api, displayedProjects])

    return (
        <Element name="proyectos" className="hidden md:block w-full bg-black py-20 sm:py-10">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-7xl">
                        Proyectos que hacen crecer negocios
                    </h2>
                </div>

                <div className="relative">
                    <Carousel
                        setApi={setApi}
                        opts={{
                            align: "start",
                            loop: true,
                            skipSnaps: false,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-4 pb-10">
                            {displayedProjects.map((project, index) => (
                                <CarouselItem key={project.id} className="pl-4 basis-[85%] md:basis-[75%] lg:basis-[800px]">
                                    <div className="group cursor-grab active:cursor-grabbing">
                                        <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500">
                                            {/* Image Container with 16:9 Aspect Ratio */}
                                            <div className="relative w-full aspect-[9/16] md:aspect-video overflow-hidden">
                                                <img
                                                    src={isMobile ? project.mobileImage : project.image || "/placeholder.svg"}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover"
                                                />


                                            </div>

                                            {/* Bottom Info */}
                                            <div className="p-6 bg-white">
                                                <p className="text-gray-600 font-medium text-sm leading-relaxed">{project.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        {/* Navigation Buttons - Bottom Right */}
                        <div className="absolute -bottom-5 right-20 flex gap-2 z-10">
                            <CarouselPrevious className="relative inset-auto translate-y-0 hover:cursor-pointer translate-x-0 bg-black text-white hover:bg-gray-100/50" />
                            <CarouselNext className="relative inset-auto translate-y-0 hover:cursor-pointer translate-x-0 bg-black text-white hover:bg-gray-100/50 " />
                        </div>
                    </Carousel>

                    {/* Functional Dots Indicator */}
                    <div className="flex justify-center gap-2 mt-0">
                        {Array.from({ length: count }, (_, index) => (
                            <button
                                key={index}
                                className={`w-2 h-2 rounded-full transition-colors duration-200 ${index + 1 === current ? "bg-gray-600" : "bg-gray-300 hover:bg-gray-400"
                                    }`}
                                onClick={() => api?.scrollTo(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </Element>
    )
}
