import Image from "next/image"
import { IMAGES } from "@/types"
import { useTranslations } from 'next-intl'

export function HeroSection() {
  const t = useTranslations('home')
  return (
    <section className="relative min-h-screen lg:h-[1300px] bg-gradient-to-br from-[#00a6a2] via-[#008b87] to-[#006b68] overflow-visible">
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
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20"></div>

      {/* Content container */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 pt-16 pb-8">
        <div className="max-w-7xl mx-auto md:mx-0 mb-16 md:mb-20">
          {/* Enhanced tagline with glassmorphism */}
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px w-16 bg-gradient-to-r from-white/40 to-transparent"></div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3">
              <p className="text-white text-xs lg:text-sm font-medium tracking-widest uppercase">
                {t('tagline')}
              </p>
            </div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/40"></div>
          </div>  

          {/* Enhanced title and paragraph with modern styling */}
          <div className="text-center md:text-left max-w-9xl mx-auto md:mx-0 mb-16 md:mb-20 md:ml-8">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-20 lg:gap-72">
              {/* Title with gradient text effect */}
              <div className="flex-1">
                <h1 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight text-balance">
                  <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                    {t("title")}
                  </span>
                </h1>
              </div>
              
              {/* Paragraph with glassmorphism card */}
              <div className="flex-[1.5]">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl w-[630px]">
                  <p className="text-white/95 text-lg sm:text-xl md:text-2xl leading-tight text-pretty font-light">
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
      <div className="absolute left-0 right-0 px-6 lg:px-12 z-[100] top-[32em]">
        <div className="max-w-9xl mx-auto md:ml-4">
          <Image
            src={IMAGES.heroImage}
            alt="Healthcare professionals with elderly patient in wheelchair outdoors"
            width={1200}
            height={600}
            className="w-full rounded-3xl shadow-2xl h-[880px] -mb-[88px] transition-transform duration-700 ease-out hover:scale-[1.02] origin-center"
            priority
          />
        </div>
      </div>
    </section>
  )
}