"use client"

import Image from "next/image"
import { IMAGES } from "@/types"
import { useTranslations } from "next-intl"

export function HeroSection() {
  const t = useTranslations("home")

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#00a6a2] via-[#008b87] to-[#006b68] overflow-hidden">
      {/* Enhanced background with multiple layers */}
      <div className="absolute inset-0 opacity-100">
        <div className="absolute right-0 top-0 w-1/2 h-full">
          <Image
            src={IMAGES.keyvisual}
            alt="AmalCare Keyvisual"
            width={700}
            height={600}
            className="h-full object-cover opacity-5"
            style={{ opacity: 1 }}
          />
        </div>
      </div>

      {/* Animated floating orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" aria-hidden="true"></div>
      <div className="absolute bottom-40 left-20 w-80 h-80 bg-white/8 rounded-full blur-3xl animate-pulse" aria-hidden="true"></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-pulse" aria-hidden="true"></div>
      
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

      <div className="relative z-20 container mx-auto px-6 lg:px-12 pt-24 md:pt-32 lg:pt-40">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced tagline with glassmorphism */}
          <div className="flex items-center justify-center md:justify-start gap-4 mb-16 md:mb-20">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/40"></div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3">
              <p className="text-white/95 text-xs md:text-sm font-semibold tracking-[0.3em] uppercase">
                {t("tagline")}
              </p>
            </div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/40"></div>
          </div>  

          {/* Enhanced title and paragraph with modern styling */}
          <div className="text-center md:text-left max-w-7xl mx-auto md:mx-0 mb-16 md:mb-20">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-16 lg:gap-32">
              {/* Title with gradient text effect */}
              <div className="flex-1">
                <h1 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight text-balance">
                  <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                    {t("title")}
                  </span>
                </h1>
              </div>
              
              {/* Paragraph with glassmorphism card */}
              <div className="flex-1">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl">
                  <p className="text-white/95 text-base sm:text-lg md:text-xl leading-tight text-pretty font-light">
                    {t("subtitle")} {t("description").replace(/chez AmalCare/g, "chez\u00A0AmalCare")}
                  </p>
                  
                  {/* Decorative accent */}
                  <div className="mt-4 h-1 w-20 bg-gradient-to-r from-white/60 to-transparent rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Image container below all content - Made more visible */}
      <div className="relative z-50 -mb-32 mt-8">
        <div className="w-[32rem] h-[17rem] mx-auto">
          <div className="group relative overflow-hidden rounded-3xl shadow-[0_25px_100px_-20px_rgba(0,0,0,0.6)] transition-all duration-700 hover:shadow-[0_40px_120px_-20px_rgba(0,0,0,0.8)] hover:scale-105">
            {/* Glowing border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-white/20 via-white/10 to-white/20 rounded-3xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="relative w-full h-full bg-white/5 backdrop-blur-sm border border-white/20 rounded-3xl overflow-hidden">
              <Image
                src={IMAGES.keyvisual || "/placeholder.svg"}
                alt="Healthcare professionals with elderly patient in wheelchair outdoors"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              />
              
              {/* Enhanced overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              {/* Floating badge with glassmorphism */}
              <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-md border border-white/30 px-4 py-2 rounded-full shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                <p className="text-white font-semibold text-sm flex items-center gap-2">
                  <span className="w-2 h-2 bg-white/80 rounded-full animate-pulse"></span>
                  Compassionate Care
                </p>
              </div>
              
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    
    </section>
  )
}
