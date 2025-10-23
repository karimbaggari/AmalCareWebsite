"use client";

import { BookOpen, Languages, GraduationCap, Users, CheckCircle2, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { useTranslations } from 'next-intl';

export function LanguageSchoolSection() {
  const t = useTranslations('languageSchool');
  const features = [
    { icon: Languages, key: 'f1' },
    { icon: Users, key: 'f2' },
    { icon: GraduationCap, key: 'f3' },
    { icon: BookOpen, key: 'f4' },
  ];

  return (
    <section className="relative container bg-white overflow-hidden py-8 sm:py-10 md:py-12 lg:py-16">
      <div className="container mx-auto max-w-9xl px-4 sm:px-6">
        <div className="mx-auto max-w-9xl">
          <div className="flex flex-col gap-8 sm:gap-10 lg:gap-12">
            {/* Image section - now on top */}
            <div className="relative mx-auto w-full max-w-4xl">
              <Card className="group relative overflow-hidden bg-white w-full shadow-2xl shadow-[#00a6a2]/10 transition-shadow duration-500 hover:shadow-[#00a6a2]/20">
                <div className="overflow-hidden w-full">
                  <Image
                    src="https://www.amal-care.de/fileadmin/_processed_/0/9/csm_IMG_6994_e4e17c16e4.webp"
                    alt="Language school instructors with anatomical charts teaching nursing terminology"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 origin-center"
                    width={1000}
                    height={700}
                  />
                </div>
                {/* Overlay badge inside image - bottom left */}
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
                  <Card className="bg-white/95 px-3 py-2 sm:px-4 sm:py-3 backdrop-blur-md shadow-lg">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-[#7c3aed]/10">
                        <Languages className="h-4 w-4 sm:h-5 sm:w-5 text-[#7c3aed]" />
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-semibold text-[#003c3a] leading-none">{t('professionalTraining')}</div>
                        <div className="text-[10px] sm:text-[11px] text-gray-600 leading-none mt-1">{t('germanLanguage')}</div>
                      </div>
                    </div>
                  </Card>
                </div>
              </Card>

              {/* Floating badge */}
              <div className="absolute -right-2 -top-2 sm:-right-4 sm:-top-4 lg:-right-8 lg:-top-8">
                <Card className="bg-white/95 p-3 sm:p-4 shadow-xl backdrop-blur-md">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-[#00a6a2]" />
                    <div className="space-y-0.5">
                      <div className="text-[10px] sm:text-xs font-medium text-gray-500">{t('basedIn')}</div>
                      <div className="text-xs sm:text-sm font-bold text-[#003c3a]">{t('location')}</div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Decorative elements */}
            {/* Text content section - now below image */}
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              {/* Badge */}
              <Badge className="inline-flex items-center gap-2 border-0 bg-[#7c3aed]/10 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-[#7c3aed]">
                <BookOpen className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>{t('badge')}</span>
              </Badge>

              {/* Main heading */}
              <div className="space-y-2 sm:space-y-3">
                <h2 className="text-balance font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-[#003c3a]">
                  {t('title')}{" "}
                  <span className="bg-gradient-to-r from-[#00a6a2] to-[#7c3aed] bg-clip-text text-transparent">
                    {t('titleHighlight')}
                  </span>
                </h2>
              </div>

              {/* Description */}
              <p className="text-pretty text-base sm:text-lg leading-relaxed text-gray-600">
                {t('description')}
              </p>

              {/* Subheading */}
              <div className="space-y-2 pt-0">
                <h3 className="text-balance text-xl sm:text-2xl md:text-3xl font-bold text-[#003c3a]">
                  {t('subtitleMain')}
                </h3>
                <p className="text-pretty text-sm sm:text-base leading-relaxed text-gray-600">
                  {t('subtitleDescription')}
                </p>
              </div>

              {/* What makes our lessons special */}
              <Card className="bg-white/80 p-4 sm:p-5 md:p-6 backdrop-blur-sm">
                <div className="space-y-4 sm:space-y-5">
                  <h4 className="text-base sm:text-lg font-semibold text-[#003c3a]">{t('featuresTitle')}</h4>
                  <div className="grid gap-3 sm:gap-4">
                    {features.map((feature, index) => {
                      const Icon = feature.icon
                      return (
                        <div
                          key={index}
                          className="group flex items-start gap-3 sm:gap-4 rounded-lg bg-white/60 p-3 sm:p-4 transition-all duration-300 hover:bg-[#00a6a2]/5 shadow-sm hover:shadow-md"
                        >
                          <div className="flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg bg-[#00a6a2]/10 text-[#00a6a2] transition-colors group-hover:bg-[#00a6a2] group-hover:text-white">
                            <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                          </div>
                          <p className="pt-1 sm:pt-1.5 text-xs sm:text-sm leading-relaxed text-gray-600 group-hover:text-[#003c3a]">
                            {t(`features.${feature.key}`)}
                          </p>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </Card>

              {/* Closing statement */}
              <Card className="bg-gradient-to-br from-[#7c3aed]/5 to-[#00a6a2]/5 p-4 sm:p-5 md:p-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-[#7c3aed]/10">
                    <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-[#7c3aed]" />
                  </div>
                  <p className="pt-1 text-pretty text-sm sm:text-base leading-relaxed text-[#003c3a]">
                    {t('closingText')}
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LanguageSchoolSection;


