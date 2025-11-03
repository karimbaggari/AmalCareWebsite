"use client";

import { BookOpen, Languages, GraduationCap, Users, CheckCircle2, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { IMAGE_URLS } from "@/constants/urls";
import { useTranslations } from 'next-intl';

export function LanguageSchoolSection() {
  const t = useTranslations('languageSchool');
  
  const features = [
    { icon: Languages, text: t('feature1') },
    { icon: Users, text: t('feature2') },
    { icon: GraduationCap, text: t('feature3') },
    { icon: BookOpen, text: t('feature4') },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGE_URLS.rabatSchoolClassroom1}
            alt="Language School Classroom"
            fill
            className="object-cover scale-105 animate-in zoom-in-0 duration-1000"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#00a6a2]/95 via-[#00a6a2]/90 to-[#006b68]/80" />
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#003c3a]/20 rounded-full blur-3xl" />
        </div>

        {/* Content */}
        <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left Column - Main Title */}
            <div className="space-y-6 md:space-y-8 animate-in fade-in slide-in-from-left-10 duration-700">
              {/* Badge */}
              <div className="inline-flex">
                <Badge className="inline-flex items-center gap-2 border-0 bg-white/20 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-md shadow-lg hover:bg-white/30 transition-all duration-300 hover:scale-105">
                  <BookOpen className="h-5 w-5" />
                  <span>{t('heroBadge')}</span>
                </Badge>
              </div>

              {/* Heading */}
              <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-white drop-shadow-2xl">
                {t('heroTitle')}
              </h1>

              {/* Decorative Line */}
              <div className="flex items-center gap-4">
                <div className="h-1 w-16 md:w-20 rounded-full bg-gradient-to-r from-white to-white/40" />
                <div className="h-1 w-8 md:w-12 rounded-full bg-white/40" />
              </div>
            </div>

            {/* Right Column - Description Card */}
            <div className="space-y-6 md:space-y-8 animate-in fade-in slide-in-from-right-10 duration-700 delay-150">
              {/* Card Container */}
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-6 md:p-8 lg:p-10 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-500 group">
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/20 to-transparent rounded-bl-3xl opacity-50" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/20 to-transparent rounded-tr-3xl opacity-50" />
                
                <div className="relative space-y-5 md:space-y-6">
                  {/* Description */}
                  <p className="text-base sm:text-lg md:text-xl leading-relaxed text-white/95 drop-shadow-md">
                    {t('heroDescription')}
                  </p>

                  {/* Icon decoration */}
                  <div className="flex items-center gap-3 pt-2">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 group-hover:scale-110 transition-transform duration-300">
                      <Languages className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 group-hover:scale-110 transition-transform duration-300 delay-75">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 group-hover:scale-110 transition-transform duration-300 delay-150">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated pattern overlay */}
        <div className="absolute inset-0 z-[1] opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full animate-pulse" />
          <div className="absolute top-32 right-24 w-2 h-2 bg-white rounded-full animate-pulse delay-300" />
          <div className="absolute bottom-24 left-32 w-2 h-2 bg-white rounded-full animate-pulse delay-700" />
          <div className="absolute bottom-32 right-16 w-2 h-2 bg-white rounded-full animate-pulse delay-500" />
        </div>
      </section>

      {/* Main Content Section */}
      <section className="relative overflow-hidden py-12 md:py-16 lg:py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
              {/* Left Column - Text Content */}
              <div className="space-y-6 md:space-y-8">
                {/* Subheading */}
                <div className="space-y-3 md:space-y-4">
                  <h2 className="text-balance text-2xl sm:text-3xl md:text-4xl font-bold text-[#003c3a]">
                    {t('subheading')}
                  </h2>
                  <p className="text-base sm:text-lg leading-relaxed text-gray-600">
                    {t('subDescription')}
                  </p>
                </div>

                {/* What makes our lessons special */}
                <Card className="bg-white/80 p-4 sm:p-6 backdrop-blur-sm">
                  <div className="space-y-4 md:space-y-5">
                    <h3 className="text-lg sm:text-xl font-semibold text-[#003c3a]">{t('specialTitle')}</h3>
                    <div className="grid gap-3 md:gap-4">
                      {features.map((feature, index) => {
                        const Icon = feature.icon
                        return (
                          <div
                            key={index}
                            className="group flex items-start gap-3 md:gap-4 rounded-lg bg-white/60 p-3 sm:p-4 transition-all duration-300 hover:bg-[#00a6a2]/5 shadow-sm hover:shadow-md"
                          >
                            <div className="flex h-9 w-9 md:h-10 md:w-10 shrink-0 items-center justify-center rounded-lg bg-[#00a6a2]/10 text-[#00a6a2] transition-colors group-hover:bg-[#00a6a2] group-hover:text-white">
                              <Icon className="h-4 w-4 md:h-5 md:w-5" />
                            </div>
                            <p className="pt-1 md:pt-1.5 text-sm sm:text-base leading-relaxed text-gray-600 group-hover:text-[#003c3a]">
                              {feature.text}
                            </p>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </Card>

                {/* Closing statement */}
                <Card className="bg-gradient-to-br from-[#7c3aed]/5 to-[#00a6a2]/5 p-4 sm:p-6">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="flex h-9 w-9 md:h-10 md:w-10 shrink-0 items-center justify-center rounded-full bg-[#00a6a2]/10">
                      <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-[#00a6a2]" />
                    </div>
                    <p className="pt-1 text-sm sm:text-base leading-relaxed text-[#003c3a]">
                      {t('conclusion')}
                    </p>
                  </div>
                </Card>
              </div>

              {/* Right Column - Images */}
              <div className="relative mx-auto w-full max-w-2xl lg:max-w-none order-first lg:order-last space-y-6">
                {/* Main Image Card */}
                <Card className="group relative overflow-hidden bg-white w-full shadow-2xl shadow-[#00a6a2]/10 transition-shadow duration-500 hover:shadow-[#00a6a2]/20">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={IMAGE_URLS.languageSchoolClass}
                      alt="Language school instructors with anatomical charts teaching nursing terminology"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                    />
                  </div>
                  {/* Overlay badge inside image - bottom left */}
                  <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4">
                    <Card className="bg-white/95 px-3 py-2 md:px-4 md:py-3 backdrop-blur-md shadow-lg">
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className="flex h-8 w-8 md:h-9 md:w-9 items-center justify-center rounded-full bg-[#00a6a2]/10">
                          <Languages className="h-4 w-4 md:h-5 md:w-5 text-[#00a6a2]" />
                        </div>
                        <div>
                          <div className="text-xs md:text-sm font-semibold text-[#003c3a] leading-none">{t('imageBadgeTitle')}</div>
                          <div className="text-[10px] md:text-[11px] text-gray-600 leading-none mt-1">{t('imageBadgeSubtitle')}</div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </Card>

                {/* Second Image Card */}
                <Card className="group relative overflow-hidden bg-white w-full shadow-xl shadow-[#00a6a2]/10 transition-shadow duration-500 hover:shadow-[#00a6a2]/20">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={IMAGE_URLS.rabatSchoolClassroom2}
                      alt="Language learning classroom environment"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                    />
                  </div>
                  {/* Overlay badge inside image - bottom right */}
                  <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4">
                    <Card className="bg-white/95 px-3 py-2 md:px-4 md:py-3 backdrop-blur-md shadow-lg">
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className="flex h-8 w-8 md:h-9 md:w-9 items-center justify-center rounded-full bg-[#00a6a2]/10">
                          <BookOpen className="h-4 w-4 md:h-5 md:w-5 text-[#00a6a2]" />
                        </div>
                        <div>
                          <div className="text-xs md:text-sm font-semibold text-[#003c3a] leading-none">Interactive Learning</div>
                          <div className="text-[10px] md:text-[11px] text-gray-600 leading-none mt-1">Modern Teaching Methods</div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </Card>

                {/* Floating badge */}
                <div className="absolute -right-2 -top-2 md:-right-4 md:-top-4 lg:-right-8 lg:-top-8">
                  <Card className="bg-white/95 p-3 md:p-4 shadow-xl backdrop-blur-md">
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-[#00a6a2]" />
                      <div className="space-y-0.5">
                        <div className="text-[10px] md:text-xs font-medium text-gray-500">{t('floatingBadgeLabel')}</div>
                        <div className="text-xs md:text-sm font-bold text-[#003c3a]">{t('floatingBadgeLocation')}</div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default LanguageSchoolSection;
