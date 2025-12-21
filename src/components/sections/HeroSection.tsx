'use client'

import Image from "next/image"
import { IMAGE_URLS } from "@/constants/urls"
import { useTranslations } from 'next-intl'
import { Badge } from "@/components/ui/badge"
import { Info, GraduationCap, Users, Heart, CheckCircle2 } from "lucide-react"

export function HeroSection() {
  const t = useTranslations('home')
  
  return (
    <section className="relative min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={IMAGE_URLS.rabatSchoolClassroom1}
          alt="AmalCare Language School in Rabat, Morocco"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#00a6a2]/95 via-[#00a6a2]/85 to-[#008a87]/75" />
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#003c3a]/20 blur-3xl" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 py-12 md:py-16">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="mb-6 md:mb-8">
            <Badge className="inline-flex items-center gap-2 border-0 bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
              <Info className="h-4 w-4" />
              <span>AmalCare SARL</span>  
            </Badge>
          </div>

          {/* Heading */}
          <h1 className="mb-8 md:mb-12 font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white">
            {t("title")}
          </h1>

          {/* Visual Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="flex flex-col items-start gap-2 p-4 md:p-5 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-colors">
              <GraduationCap className="h-6 w-6 md:h-7 md:w-7 text-white mb-1" />
              <p className="text-white/90 text-sm md:text-base font-medium">Education</p>
            </div>
            <div className="flex flex-col items-start gap-2 p-4 md:p-5 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-colors">
              <Users className="h-6 w-6 md:h-7 md:w-7 text-white mb-1" />
              <p className="text-white/90 text-sm md:text-base font-medium">Support</p>
            </div>
            <div className="flex flex-col items-start gap-2 p-4 md:p-5 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-colors">
              <Heart className="h-6 w-6 md:h-7 md:w-7 text-white mb-1" />
              <p className="text-white/90 text-sm md:text-base font-medium">Care</p>
            </div>
            <div className="flex flex-col items-start gap-2 p-4 md:p-5 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-colors">
              <CheckCircle2 className="h-6 w-6 md:h-7 md:w-7 text-white mb-1" />
              <p className="text-white/90 text-sm md:text-base font-medium">Quality</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}