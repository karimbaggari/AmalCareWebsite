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
    <section className="relative  sm:min-h-[700px] lg:min-h-[1100px] xl:min-h-[1300px] bg-gradient-to-br from-[#00a6a2] via-[#008b87] to-[#006b68] overflow-visible pb-6 md:pb-0">
      {/* Enhanced background with multiple layers */}
      <div className="absolute inset-0 opacity-100">
        <div className="absolute right-0 top-0 w-full md:w-1/2 h-full">
          <Image
            src={IMAGES.keyvisual}
            alt="AmalCare Keyvisual"
            width={700}
            height={300}
            className="h-full w-full object-cover opacity-100"
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
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 pt-6 sm:pt-10 md:pt-14 lg:pt-16 pb-4 sm:pb-6 md:pb-8">
        <div className="max-w-7xl mx-auto mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          {/* Enhanced tagline with glassmorphism */}
          <div className="flex items-center justify-center md:justify-start gap-3 md:gap-4 mb-8 sm:mb-10 md:mb-12 md:ml-8">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 sm:px-5 md:px-6 py-2 md:py-3">
              <p className="text-white text-[10px] sm:text-xs lg:text-sm font-medium tracking-widest uppercase">
                {t('tagline')}
              </p>
            </div>
            <div className="hidden sm:block h-px w-12 md:w-16 bg-gradient-to-l from-transparent to-white/40"></div>
          </div>  

          {/* Enhanced title and paragraph with modern styling */}
          <div className="text-center md:text-left max-w-9xl mx-auto md:mx-0 mb-8 sm:mb-12 md:mb-16 lg:mb-20 md:ml-8">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 sm:gap-8 md:gap-12 lg:gap-16">
              {/* Title with gradient text effect */}
              <div className="flex-1 w-full lg:max-w-[56ch]">
                <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-tight sm:leading-tight md:leading-[1.1] tracking-tight text-balance">
                  <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                    {titleText}
                  </span>
                </h1>
              </div>
              
              {/* Paragraph with glassmorphism card */}
              <div className="flex-1 w-full lg:flex-[1.5]">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-2xl w-full max-w-[630px] mx-auto lg:mx-0">
                  <p className="text-white/95 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-tight text-pretty font-light">
                    {t("subtitle")} {t("description").replace(/chez AmalCare/g, "chez\u00A0AmalCare")}
                  </p>
                  
                  {/* Decorative accent */}
                  <div className="mt-3 sm:mt-4 h-0.5 sm:h-1 w-16 sm:w-20 bg-gradient-to-r from-white/60 to-transparent rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Image positioned to overlap background and extend beyond */}
      <div className="relative md:absolute left-0 right-0 px-4 sm:px-6 lg:px-12 z-[100] max-w-9xl mx-auto container md:top-[28em] lg:top-[35em]">
        <div className="max-w-9xl mx-auto md:ml-4 overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl">
          <Image
            src={IMAGES.heroImage}
            alt="Healthcare professionals with elderly patient in wheelchair outdoors"
            width={1200}
            height={600}
            className="w-full h-[280px] sm:h-[400px] md:h-[500px] lg:h-[700px] xl:h-[880px] md:-mb-[88px] object-cover transition-transform duration-500 ease-in-out md:hover:scale-105"
            priority
          />
        </div>
      </div>
    </section>
  )
}