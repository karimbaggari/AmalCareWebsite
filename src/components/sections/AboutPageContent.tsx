"use client"

import { ArrowRight, CheckCircle2, Info } from "lucide-react"
import { useState } from "react"
import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import Image from 'next/image'
import { IMAGE_URLS } from '@/constants/urls'
import { Badge } from '@/components/ui/badge'
import { VideoSection } from './VideoSection'

export default function AboutPageContent() {
  const t = useTranslations('about')
  const locale = useLocale()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const features = [
    {
      title: t('features.languageSchool.title'),
      description: t('features.languageSchool.description'),
    },
    {
      title: t('features.nursingKnowledge.title'),
      description: t('features.nursingKnowledge.description'),
    },
    {
      title: t('features.personalSupport.title'),
      description: t('features.personalSupport.description'),
    },
    {
      title: t('features.qualityAssurance.title'),
      description: t('features.qualityAssurance.description'),
    },
    {
      title: t('features.ourCommitment.title'),
      description: t('features.ourCommitment.description'),
    },
    {
      title: t('features.whoWeServe.title'),
      description: t('features.whoWeServe.description'),
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGE_URLS.nursesGermany13}
            alt="About AmalCare - Healthcare professionals"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#00a6a2]/95 via-[#00a6a2]/85 to-[#008a87]/75" />
        </div>

        {/* Content */}
        <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 py-12 md:py-16">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="mb-6 md:mb-8">
              <Badge className="inline-flex items-center gap-2 border-0 bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                <Info className="h-4 w-4" />
                <span>About AmalCare</span>
              </Badge>
            </div>

            {/* Heading */}
            <h1 className="mb-6 md:mb-8 font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white">
              Who We Are
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-white/95 max-w-2xl">
              We are AmalCare eG – a placement agency organized as a cooperative for nursing professionals from Morocco.
            </p>
          </div>
        </div>
      </section>

      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Main Content Section - Who We Are */}
        <section className="relative overflow-hidden py-12 md:py-16 lg:py-20">
          <div className="container relative mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mx-auto max-w-7xl space-y-8 md:space-y-12">
              {/* Eyebrow */}
              <div className="mb-4 md:mb-6 inline-flex items-center gap-2 rounded-full bg-[#00a6a2]/10 px-4 py-2 text-sm font-medium text-[#00a6a2]">
                <CheckCircle2 className="h-4 w-4" />
                {t('eyebrow')}
              </div>

              {/* Main Heading */}
              <h2 className="text-balance font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#003c3a]">
                {t('mainTitle')}
              </h2>

              {/* Content */}
              <div className="space-y-4 md:space-y-6 text-pretty text-base sm:text-lg leading-relaxed text-gray-700 max-w-4xl">
                <p>
                  {t('description1')}
                </p>
                <p>
                  {t('description2')}
                </p>
              </div>

              {/* Decorative Line */}
              <div className="h-1 w-20 md:w-24 rounded-full bg-gradient-to-r from-[#00a6a2] to-[#008a87]" />
            </div>
          </div>
        </section>

             {/* Video Section */}
             <div className="py-12 md:py-16 lg:py-20">
          <VideoSection />
        </div>

        {/* What Makes Us Unique Section */}
        <section className="relative py-12 md:py-16 lg:py-20">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mx-auto max-w-7xl space-y-12 md:space-y-16">
              {/* Section Header */}
              <div className="text-center">
                <h2 className="mb-4 md:mb-6 text-balance font-sans text-3xl sm:text-4xl md:text-5xl font-bold text-[#003c3a]">
                  {t('uniqueTitle')}
                </h2>
                <p className="mx-auto max-w-3xl text-pretty text-base sm:text-lg leading-relaxed text-gray-700 px-4">
                  {t('uniqueDescription')}
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:gap-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-2xl md:rounded-3xl bg-white p-6 md:p-8 shadow-sm ring-1 ring-gray-100 transition-all duration-300 hover:shadow-xl hover:ring-[#00a6a2]/20"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {/* Background Gradient on Hover */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#00a6a2]/0 to-[#00a6a2]/0 transition-all duration-300 group-hover:from-[#00a6a2]/5 group-hover:to-transparent" />

                    {/* Content */}
                    <div className="relative">
                      <div className="mb-4 flex items-start justify-between gap-4">
                        <h3 className="text-balance font-semibold text-lg sm:text-xl text-[#003c3a] transition-colors group-hover:text-[#00a6a2]">
                          {feature.title}
                        </h3>
                        <div className="flex-shrink-0">
                          <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#00a6a2]/10 text-[#00a6a2] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#00a6a2] group-hover:text-white">
                            <ArrowRight
                              className={`h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 ${
                                hoveredIndex === index ? "translate-x-1" : ""
                              }`}
                            />
                          </div>
                        </div>
                      </div>
                      <p className="text-pretty text-sm sm:text-base leading-relaxed text-gray-600">{feature.description}</p>
                    </div>

                    {/* Decorative Corner Element */}
                    <div className="pointer-events-none absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-[#00a6a2]/10 blur-2xl transition-all duration-300 group-hover:bg-[#00a6a2]/20" />
                  </div>
                ))}
              </div>

              {/* Bottom CTA */}
              <div className="text-center px-4">
                <div className="inline-flex flex-col items-center gap-4 rounded-2xl bg-gradient-to-br from-[#00a6a2] to-[#008a87] p-6 md:p-8 text-white shadow-lg">
                  <p className="text-balance text-base sm:text-lg font-medium">
                    {t('ctaText')}
                  </p>
                  <Link
                    href={`/${locale}/contact`}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm sm:text-base font-semibold text-[#00a6a2] transition-all hover:scale-105 hover:shadow-lg"
                  >
                    {t('ctaButton')}
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

   
      </div>
    </>
  )
}
