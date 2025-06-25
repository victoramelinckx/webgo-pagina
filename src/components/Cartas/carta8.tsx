"use client"

import { Plus } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/Carousel"

const landingTemplates = [
    {
        id: 1,
        title: "E-commerce Premium",
        background: "bg-gradient-to-br from-blue-500 to-purple-600",
        image: "/kluxur.png?height=420&width=280",
    },
    {
        id: 2,
        title: "SaaS Moderno",
        background: "bg-gradient-to-br from-green-500 to-teal-600",
        image: "/kluxur.png?height=420&width=280",
    },
    {
        id: 3,
        title: "Restaurante Gourmet",
        background: "bg-gradient-to-br from-orange-500 to-red-600",
        image: "/kluxur.png?height=420&width=280",
    },
    {
        id: 4,
        title: "Fitness Studio",
        background: "bg-gradient-to-br from-pink-500 to-rose-600",
        image: "/kluxur.png?height=420&width=280",
    },
    {
        id: 5,
        title: "Consultoría Pro",
        background: "bg-gradient-to-br from-indigo-500 to-purple-600",
        image: "/kluxur.png?height=420&width=280",
    },
    {
        id: 5,
        title: "Consultoría Pro",
        background: "bg-gradient-to-br from-indigo-500 to-purple-600",
        image: "/kluxur.png?height=420&width=280",
    },
]

export default function Carta8() {
    return (
        <div className="md:col-span-2 bg-white rounded-[2rem] inset-shadow-xl min-h-[600px] p-8 md:p-0 md:pb-[70px] relative overflow-hidden shadow-xl">
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





                                                {/* Dark Gradient Overlay at Bottom - Exact Apple Style */}
                                                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                                                {/* Bottom Text Content - Exact Apple Style */}
                                                <div className="absolute bottom-4 left-4 right-4">
                                                    <h3 className="text-white font-semibold text-center text-lg mb-1 leading-tight">{template.title}</h3>
                                                </div>

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
