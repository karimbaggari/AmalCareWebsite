'use client'

import Image from "next/image"
import { IMAGES } from "@/types"
import { useTranslations } from 'next-intl'

export function HeroSection() {
  const t = useTranslations('home')
  const titleText = t("title")
    .replace(/to AmalCare/g, "to\u00A0AmalCare")
    .replace(/chez AmalCare/g, "chez\u00A0AmalCare")
  return (
    <section className="relative min-h-[700px] md:min-h-screen lg:h-[1300px] bg-gradient-to-br from-[#00a6a2] via-[#008b87] to-[#006b68] overflow-visible">
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

      {/* Animated floating orbs (hidden on small screens) */}
      <div className="hidden md:block absolute top-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" aria-hidden="true"></div>
      <div className="hidden md:block absolute bottom-40 left-20 w-80 h-80 bg-white/8 rounded-full blur-3xl animate-pulse" aria-hidden="true"></div>
      <div className="hidden md:block absolute top-1/2 left-1/3 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-pulse" aria-hidden="true"></div>
      
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20"></div>

      {/* Content container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 pt-10 sm:pt-14 md:pt-16 pb-6 sm:pb-8">
        <div className="max-w-7xl mx-auto md:mx-0 mb-12 sm:mb-14 md:mb-20">
          {/* Enhanced tagline with glassmorphism */}
          <div className="flex items-center gap-4 mb-12 ml-8">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3">
              <p className="text-white text-xs lg:text-sm font-medium tracking-widest uppercase">
                {t('tagline')}
              </p>
            </div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/40"></div>
          </div>  

          {/* Enhanced title and paragraph with modern styling */}
          <div className="text-center md:text-left max-w-9xl mx-auto md:mx-0 mb-12 sm:mb-16 md:mb-20 md:ml-8">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 sm:gap-24 md:gap-32 lg:gap-70">
              {/* Title with gradient text effect */}
              <div className="flex-1 max-w-[56ch]">
                <h1 className="text-white text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight sm:leading-tight md:leading-[1.1] tracking-tight text-balance">
                  <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                    {titleText}
                  </span>
                </h1>
              </div>
              
              {/* Paragraph with glassmorphism card */}
              <div className="flex-[1.5] w-full">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 sm:p-6 shadow-2xl w-full sm:w-[630px]">
                  <p className="text-white/95 text-base sm:text-lg md:text-xl lg:text-2xl leading-tight text-pretty font-light">
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

      {/* Image positioned to overlap background and extend beyond */}
      <div className="relative md:absolute left-0 right-0 px-4 sm:px-6 lg:px-12 z-[100]  max-w-9xl mx-auto container md:top-[35em]">
        <div className="max-w-9xl mx-auto md:ml-4 overflow-hidden rounded-2xl sm:rounded-3xl">
          <Image
            src={IMAGES.nursesGermany8}
            alt="Healthcare professionals with elderly patient in wheelchair outdoors"
            width={1200}
            height={600}
            className="w-full h-[320px] sm:h-[500px] md:h-[700px] lg:h-[880px] md:-mb-[88px] object-cover transition-transform duration-500 ease-in-out md:hover:scale-105"
            priority
          />z
        </div>
      </div>
    </section>
  )
}