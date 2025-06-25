"use client"
import { useState, useRef } from "react"
import Image from "next/image"
import { Play } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"

interface YouTubePlayerProps {
    videoId: string
    thumbnail: string
}

export const YouTubePlayer = ({ videoId, thumbnail }: YouTubePlayerProps) => {
    const [isPlaying, setIsPlaying] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    })

    const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1])

    const handlePlay = () => {
        setIsPlaying(true)
    }

    return (
        <motion.div
            ref={containerRef}
            className="relative max-w-[800px] mx-auto"
            style={{ scale }}
        >
            <div
                className="relative aspect-video overflow-hidden rounded-2xl"
                style={{
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
            >
                {isPlaying ? (
                    <iframe
                        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full"
                    ></iframe>
                ) : (
                    <div
                        className="relative w-full h-full cursor-pointer"
                        onClick={handlePlay}
                    >
                        <Image
                            src={"/vacio.jpg"}
                            alt="Video thumbnail"
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                            <div className="w-20 h-20 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/50 transition-colors duration-300">
                                <Play className="w-10 h-10 text-white" fill="white" />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </motion.div>
    )
} 