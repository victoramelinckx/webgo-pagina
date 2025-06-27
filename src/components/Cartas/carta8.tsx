"use client"

import { Plus, ChevronRight } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/Carousel"

const landingTemplates = [
    {
        id: 1,
        title: "Kluxur",
        background: "bg-gradient-to-br from-gray-700 to-gray-900",
        image: "/kluxur.png?height=420&width=280",
    },
    {
        id: 2,
        title: "Oakore",
        background: "bg-gradient-to-br from-blue-500 to-purple-600",
        image: "/oak-web.webp?height=420&width=280",
    },
    {
        id: 3,
        title: "You",
        background: "bg-gradient-to-br from-green-400 to-blue-500",
        image: "/you-web.webp?height=420&width=280",
    },
    {
        id: 4,
        title: "ECC",
        background: "bg-gradient-to-br from-pink-500 to-rose-500",
        image: "/ecc-web.webp?height=420&width=280",
    },
    {
        id: 5,
        title: "JD",
        background: "bg-gradient-to-br from-orange-400 to-red-500",
        image: "/jd-web.webp?height=420&width=280",
    },
    {
        id: 6,
        title: "Galindo",
        background: "bg-gradient-to-br from-teal-400 to-cyan-600",
        image: "/galindo-web.webp?height=420&width=280",
    },
    {
        id: 7,
        title: "JDenx",
        background: "bg-gradient-to-br from-indigo-500 to-purple-600",
        image: "/jdenx-web.webp?height=420&width=280",
    },
    {
        id: 8,
        title: "Hyperion",
        background: "bg-gradient-to-br from-indigo-500 to-purple-600",
        image: "/hyperion-web.webp?height=420&width=280",
    },
    {
        id: 9,
        title: "SweetHomes",
        background: "bg-gradient-to-br from-indigo-500 to-purple-600",
        image: "/sweethomes-web.webp?height=420&width=280",
    },
]

export default function Carta8() {
    return (
        <div className="md:col-span-2 bg-white rounded-[2rem] inset-shadow-xl min-h-[600px] pt-14 pb-20 px-8 md:p-0 md:pb-[70px] relative overflow-hidden shadow-xl">
            <div className="h-full flex flex-col ">


                {/* Simplified Header Text */}
                <div className="mb-8 md:px-[80px] md:pt-[90px]">
                    <h2 className="text-4xl md:text-6xl font-bold leading-none text-black">
                        Cada pixel pensado para tu marca.
                        <br />
                        <span className="text-gray-900/80 text-3xl">Diseño único que te diferencia.</span>
                    </h2>
                </div>

                {/* Perfect Carousel - Matching Apple's Layout */}
                <div className="flex-1 flex items-center justify-center">
                    <div className="w-full max-w-6xl ml-2 overflow-hidden">
                        <Carousel
                            className="w-full"
                            opts={{
                                align: "center",
                                loop: true,
                                dragFree: true,
                            }}
                        >
                            <CarouselContent className=" -ml-4 space-x-2">
                                {landingTemplates.map((template) => (
                                    <CarouselItem key={template.id} className="pl-4 basis-[200px] flex-shrink-0 mr-4 py-4">
                                        <div className="group cursor-pointer">
                                            <div className="rounded-3xl border-2 border-black  w-[200px] aspect-[9/16] relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
                                                {/* Background Image */}
                                                <div className={`absolute inset-0 ${template.background}`}>
                                                    <img
                                                        src={template.image || "/placeholder.svg"}
                                                        alt={template.title}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>






                                                {/* Bottom Text Content - Exact Apple Style */}
                                                {/* <div className="absolute bottom-4 left-4 right-4">
                                                    <h3 className="text-white font-semibold text-center text-lg mb-1 leading-tight">{template.title}</h3>
                                                </div> */}

                                                {/* Subtle Hover Overlay */}
                                                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
                                            </div>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel>
                    </div>
                </div>
            </div>

            {/* Plus Button */}
            {/* <div className="absolute bottom-8 right-8 w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <Plus className="w-5 h-5 text-white" />
            </div> */}
        </div>
    )
}
