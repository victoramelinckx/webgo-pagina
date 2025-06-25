"use client"
import { Button } from "@/components/ui/Button"
import { Globe, Calendar, TrendingUp } from "lucide-react"
import { YouTubePlayer } from "./YouTubePlayer"

interface HeroProps {
  headline: string
  subheadline: string
  cta1: string
}

export const Hero = ({ headline, subheadline, cta1 }: HeroProps) => {
  const handleCTAClick = () => {
    const contactSection = document.getElementById("contacto")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      className="relative overflow-hidden pt-10 min-h-screen"
      style={{
        background: "linear-gradient(90deg, #E9BCF2 7%, #F8B7C5, #FEC49A, #FFD493, #FFEDBE 80%, #FFF7E0)",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Radial gradient overlay - matching WordPress ::before */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 50% 100%, #D1F0BC 25%, rgba(209, 240, 188, 0) 55%),
            radial-gradient(at bottom left, #FAF9FD 10%, rgba(250, 249, 253, 0) 30%),
            radial-gradient(at bottom right, #FBFEFA 25%, rgba(251, 254, 250, 0) 40%)
          `,
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-20 h-full flex items-center">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Logo/Icon */}
          <div className="flex justify-center mb-2">
            <img src="/webgo-negro.png" alt="WebGo" className="w-16 h-auto" />
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black leading-[0.98]">{headline}</h1>

          {/* Subheadline as bullet points */}
          <div className="max-w-lg mx-auto space-y-0 text-lg md:text-xl text-black/80">
            <div className="flex items-center justify-start gap-1 md:gap-3">
              <div className="w-2 h-2 bg-black rounded-full" />
              <span>Diseño y desarrollo web.</span>
            </div>
            <div className="flex items-center justify-start gap-1 md:gap-3">
              <div className="w-2 h-2 bg-black rounded-full" />
              <span>E-commerce seguro y eficiente: vende 24/7 con confianza.</span>
            </div>
            <div className="flex items-center justify-start gap-1 md:gap-3">
              <div className="w-2 h-2 bg-black rounded-full" />
              <span>Software a medida: automatiza y crece tu empresa.</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="">
            <Button
              onClick={handleCTAClick}
              className="bg-black text-white hover:bg-black/80 px-8 py-6 text-lg rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              {cta1}
            </Button>
          </div>

          {/* Hero Image/Video Placeholder */}
          <div className="">
            <YouTubePlayer videoId="BjDlkHAETVI" thumbnail="/vacio.jpg" />
          </div>
        </div>
      </div>
    </section>
  )
}
