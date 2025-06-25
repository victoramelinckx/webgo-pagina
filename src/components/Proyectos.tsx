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
        title: "You Glow",
        description: "Plataforma para negocio de salud y belleza en Miami.",
        image: "/you.webp?height=720&width=1280",
        category: "Salud y Belleza",
    },
    {
        id: 4,
        title: "ECC",
        description: "Sitio Web para clinica pediatra en Miami.",
        image: "/ecc.webp?height=720&width=1280",
        category: "Salud",
    },
    {
        id: 5,
        title: "JD",
        description: "E-commerce de productos de baños en Miami.",
        image: "/jd.webp?height=720&width=1280",
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
        title: "JDenx",
        description: "Sitio Web para el mejor plomero de Miami.",
        image: "/jdenx.webp?height=720&width=1280",
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

    useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    return (
        <Element name="proyectos" className="w-full bg-gray-100 py-20 sm:py-10">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-7xl">
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
                            {projects.map((project, index) => (
                                <CarouselItem key={project.id} className="pl-4 basis-[85%] md:basis-[75%] lg:basis-[800px]">
                                    <div className="group cursor-pointer">
                                        <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500">
                                            {/* Image Container with 16:9 Aspect Ratio */}
                                            <div className="relative w-full aspect-video overflow-hidden">
                                                <img
                                                    src={project.image || "/placeholder.svg"}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
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
                        <div className="absolute -bottom-16 right-16 flex gap-2 z-10">
                            <CarouselPrevious className="relative inset-auto translate-y-0 hover:cursor-pointer translate-x-0 bg-white/90 backdrop-blur-sm border border-gray-200/50 hover:bg-white shadow-lg">
                                <ChevronLeft className="h-4 w-4 text-gray-600" />
                            </CarouselPrevious>
                            <CarouselNext className="relative inset-auto translate-y-0 hover:cursor-pointer translate-x-0 bg-white/90 backdrop-blur-sm border border-gray-200/50 hover:bg-white shadow-lg">
                                <ChevronRight className="h-4 w-4 text-gray-600" />
                            </CarouselNext>
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
