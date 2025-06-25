"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/Carousel"
import { Play, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface VideoTestimonial {
    id: string
    videoUrl: string
    thumbnail: string
    title: string
    client: string
}

const TESTIMONIALS: VideoTestimonial[] = [
    {
        id: "1",
        videoUrl: "TRa0mlNWFVQ",
        thumbnail: "/testi1.webp",
        title: "Testimonio Oak Ore",
        client: "Oak Ore",
    },
    {
        id: "2",
        videoUrl: "UM8w-SLF9aw",
        thumbnail: "/testi2.webp",
        title: "Testimonio Bustos & Abogados",
        client: "Bustos & Abogados",
    },
    {
        id: "3",
        videoUrl: "https://vimeo.com/1096087808?share=copy",
        thumbnail: "/testi3.webp",
        title: "Testimonio Cliente 3",
        client: "Psicóloga Marcela",
    },
    {
        id: "4",
        videoUrl: "NYpIy4OaToE",
        thumbnail: "/testi4.webp",
        title: "Testimonio Cliente 4",
        client: "Sweethomes",
    },
    {
        id: "5",
        videoUrl: "7_sxkai-z9s",
        thumbnail: "/testi5.png",
        title: "Testimonio Cliente 5",
        client: "Dr Adriana Amelinckx",
    },
    {
        id: "6",
        videoUrl: "oy0NO4etOO4",
        thumbnail: "/testi6.png",
        title: "Testimonio Cliente 6",
        client: "Jdenx Solutions",
    },
]

export default function VideosTestimonios() {
    const [activeVideo, setActiveVideo] = useState<string | null>(null)

    const playVideo = useCallback((videoId: string) => {
        setActiveVideo(videoId)
    }, [])

    const stopVideo = useCallback(() => {
        setActiveVideo(null)
    }, [])

    return (
        <section className="py-20 px-4 bg-black">
            <div className="">
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-10">
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-7xl">No nos creas solo a nosotros.</h2>
                </div>

                {/* Video Carousel */}
                <Carousel
                    className="w-full"
                    opts={{
                        align: "start",
                        loop: true,
                        skipSnaps: false,
                        dragFree: true,
                    }}
                >
                    <CarouselContent className="-ml-4">
                        {TESTIMONIALS.map((testimonial) => (
                            <CarouselItem key={testimonial.id} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                                <VideoCard
                                    testimonial={testimonial}
                                    isActive={activeVideo === testimonial.id}
                                    onPlay={() => playVideo(testimonial.id)}
                                    onStop={stopVideo}
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <div className="flex justify-center mt-8 gap-4">
                        <CarouselPrevious className="relative left-0 top-0 translate-y-0 text-black  bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl transition-all duration-300 " />
                        <CarouselNext className="relative right-0 top-0 translate-y-0 text-black bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl transition-all duration-300" />
                    </div>
                </Carousel>
            </div>
        </section>
    )
}

interface VideoCardProps {
    testimonial: VideoTestimonial
    isActive: boolean
    onPlay: () => void
    onStop: () => void
}

function VideoCard({ testimonial, isActive, onPlay, onStop }: VideoCardProps) {
    const handleClick = useCallback(() => {
        if (!isActive) onPlay()
    }, [isActive, onPlay])

    const handleStopClick = useCallback(
        (e: React.MouseEvent) => {
            e.stopPropagation()
            onStop()
        },
        [onStop],
    )

    if (isActive) {
        const isVimeo = testimonial.videoUrl.includes("vimeo")

        const videoSrc = isVimeo
            ? `https://player.vimeo.com/video/${testimonial.videoUrl.split("/").pop()?.split("?")[0]}?autoplay=1&title=0&byline=0&portrait=0`
            : `https://www.youtube.com/embed/${testimonial.videoUrl}?autoplay=1&controls=1&modestbranding=1&rel=0&showinfo=0`

        return (
            <div className="relative aspect-[9/16] rounded-3xl overflow-hidden bg-black shadow-2xl">
                <iframe
                    src={videoSrc}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={testimonial.title}
                />
                <button
                    onClick={handleStopClick}
                    className="absolute top-4 right-4 w-10 h-10 bg-black/10 hover:bg-black/90 text-white rounded-full flex items-center justify-center z-10"
                    aria-label="Cerrar video"
                >
                    <X className="w-5 h-5" />
                </button>
            </div>
        )
    }

    return (
        <div
            className="group relative aspect-[9/16] rounded-3xl overflow-hidden bg-gray-100 cursor-pointer transform transition-all duration-500 hover:shadow-2xl"
            onClick={handleClick}
        >
            {/* Thumbnail Image */}
            <img
                src={testimonial.thumbnail || "/placeholder.svg"}
                alt={`Testimonio de ${testimonial.client}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div
                    className={cn(
                        "w-20 h-20 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl transition-all duration-300",
                        "group-hover:scale-110 group-hover:bg-white group-hover:shadow-3xl",
                        "border-4 border-white/20",
                    )}
                >
                    <Play
                        className="w-8 h-8 text-gray-800 ml-1 transition-colors duration-200 group-hover:text-black"
                        fill="currentColor"
                    />
                </div>
            </div>

            {/* Client Info */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-bold text-lg mb-1">{testimonial.client}</h3>

            </div>

            {/* Shine Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </div>
        </div>
    )
}
