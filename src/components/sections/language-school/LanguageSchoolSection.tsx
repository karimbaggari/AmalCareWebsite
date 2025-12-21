"use client";

import { BookOpen, Languages, GraduationCap, Users, CheckCircle2, DollarSign, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { IMAGE_URLS } from "@/constants/urls";
import { useTranslations } from 'next-intl';
import { ImageSlider } from "@/components/ui/image-slider";

export function LanguageSchoolSection() {
  const t = useTranslations('languageSchool');
  
  const features = [
    { icon: Languages, text: t('feature1') },
    { icon: Users, text: t('feature2') },
    { icon: GraduationCap, text: t('feature3') },
    { icon: BookOpen, text: t('feature4') },
  ];

  // Images for the slider
  const sliderImages = [
    IMAGE_URLS.rabatSchoolClassroom1,
    IMAGE_URLS.rabatSchoolClassroom2,
    IMAGE_URLS.rabatSchoolClassroom3,
    IMAGE_URLS.rabatSchoolClassroom4,
    IMAGE_URLS.rabatSchoolClassroom5,
    IMAGE_URLS.rabatSchoolClassroom6,
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex items-center overflow-hidden bg-gradient-to-br from-[#00a6a2] to-[#008a87]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGE_URLS.rabatSchoolClassroom1}
            alt={t('heroImageAlt')}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#00a6a2]/95 via-[#00a6a2]/90 to-[#008a87]/85" />
        </div>

        {/* Content */}
        <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-20 lg:py-24">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="mb-6 md:mb-8">
              <Badge className="inline-flex items-center gap-2 border-0 bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                <BookOpen className="h-4 w-4" />
                <span>{t('heroBadge')}</span>
              </Badge>
            </div>

            {/* Heading */}
            <h1 className="mb-6 md:mb-8 font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white">
              {t('heroTitle')}
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-white/95 max-w-3xl">
              {t('heroDescription')}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="relative overflow-hidden py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          {/* Section Header */}
          <div className="mb-12 md:mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#003c3a] mb-4">
              {t('subheading')}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              {t('subDescription')}
            </p>
          </div>

          {/* Image Slider */}
          <div className="mb-16 md:mb-20 max-w-3xl mx-auto">
            <ImageSlider
              images={sliderImages}
              alt={t('sliderAlt')}
              autoPlay={true}
              autoPlayInterval={4000}
              className="shadow-2xl"
            />
          </div>

          {/* Features Section */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003c3a] mb-8 md:mb-12 text-center">
              {t('specialTitle')}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div
                    key={index}
                    className="p-6 md:p-8 bg-gray-50 hover:bg-[#00a6a2]/5 transition-colors duration-200 border border-transparent hover:border-[#00a6a2]/20"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#00a6a2]/10 text-[#00a6a2]">
                        <Icon className="h-6 w-6" />
                      </div>
                      <p className="text-base md:text-lg leading-relaxed text-gray-700 pt-1">
                        {feature.text}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Closing statement */}
            <div className="mt-12 md:mt-16 p-6 md:p-8 bg-gradient-to-br from-[#00a6a2]/10 to-[#00a6a2]/5 border border-[#00a6a2]/20">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-7 w-7 text-[#00a6a2] shrink-0 mt-1" />
                <p className="text-lg md:text-xl leading-relaxed text-[#003c3a] font-medium">
                  {t('conclusion')}
                </p>
              </div>
            </div>
          </div>

          {/* Cost & Coverage Section */}
          <div className="mt-16 md:mt-20 max-w-6xl mx-auto">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003c3a] mb-8 md:mb-12 text-center">
              {t('costCoverageTitle')}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Students - Language Study Only */}
              <div className="p-6 md:p-8 bg-white border-2 border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center bg-gray-100 text-gray-600">
                    <DollarSign className="h-6 w-6" />
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold text-[#003c3a]">
                    {t('forStudentsTitle')}
                  </h4>
                </div>
                <p className="text-base md:text-lg text-gray-700 mb-4">
                  {t('forStudentsDescription')}
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-gray-400 shrink-0 mt-0.5" />
                    <p className="text-sm md:text-base text-gray-600">
                      {t('forStudentsCoverage')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Nurses - Full Program */}
              <div className="p-6 md:p-8 bg-gradient-to-br from-[#00a6a2]/10 to-[#00a6a2]/5 border-2 border-[#00a6a2]/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center bg-[#00a6a2]/20 text-[#00a6a2]">
                    <Shield className="h-6 w-6" />
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold text-[#003c3a]">
                    {t('forNursesTitle')}
                  </h4>
                </div>
                <p className="text-base md:text-lg text-gray-700 mb-4">
                  {t('forNursesDescription')}
                </p>
                <div className="space-y-2">
                  {[
                    t('forNursesCoverage1'),
                    t('forNursesCoverage2'),
                    t('forNursesCoverage3'),
                    t('forNursesCoverage4'),
                    t('forNursesCoverage5'),
                    t('forNursesCoverage6')
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[#00a6a2] shrink-0 mt-0.5" />
                      <p className="text-sm md:text-base text-gray-700">
                        {item}
                      </p>
                    </div>
                  ))}
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
