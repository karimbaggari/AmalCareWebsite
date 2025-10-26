"use client"

import { ArrowRight, CheckCircle2 } from "lucide-react"
import { useState } from "react"
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { SimpleImageHero } from './GenericHeroSection'
import { IMAGE_URLS } from '@/constants/urls'

export default function AboutPageContent() {
  const t = useTranslations('about')
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
      <SimpleImageHero
        image={IMAGE_URLS.nursesGermany13}
        imageAlt="About AmalCare - Healthcare professionals"
        backgroundColor="#00a6a2"
        height="h-[370px]"
        imageWidth={900}
        imageHeight={600}
      />

      <div className="min-h-screen mt-80 bg-gradient-to-b from-white to-gray-50">
        {/* Hero Section - Who We Are */}
        <section className="relative overflow-hidden bg-gradient-to-br from-teal-50 via-white to-teal-50/30 py-16 md:py-20 lg:py-24">
          {/* Decorative Elements */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-teal-100/40 blur-3xl" />
            <div className="absolute -left-32 top-1/2 h-96 w-96 rounded-full bg-teal-200/30 blur-3xl" />
          </div>

          <div className="container relative mx-auto max-w-9xl px-6">
            <div className="mx-auto max-w-7xl space-y-12">
              {/* Eyebrow */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-teal-100 px-4 py-2 text-sm font-medium text-teal-700">
                <CheckCircle2 className="h-4 w-4" />
                {t('eyebrow')}
              </div>

              {/* Main Heading */}
              <h1 className="text-balance font-serif text-5xl font-bold leading-tight text-gray-900 lg:text-6xl">
                {t('mainTitle')}
              </h1>

              {/* Content */}
              <div className="space-y-6 text-pretty text-lg leading-relaxed text-gray-700">
                <p>
                  {t('description1')}
                </p>
                <p>
                  {t('description2')}
                </p>
              </div>

              {/* Decorative Line */}
              <div className="h-1 w-24 rounded-full bg-gradient-to-r from-teal-500 to-teal-300" />
            </div>
          </div>
        </section>

        {/* What Makes Us Unique Section */}
        <section className="relative py-16 md:py-20 lg:py-24">
          {/* Decorative Elements (reused) */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-teal-100/40 blur-3xl" />
            <div className="absolute -left-32 top-1/2 h-96 w-96 rounded-full bg-teal-200/30 blur-3xl" />
          </div>
          <div className="container mx-auto max-w-9xl px-6">
            <div className="mx-auto max-w-7xl space-y-16">
              {/* Section Header */}
              <div className="text-center">
                <h2 className="mb-6 text-balance font-serif text-4xl font-bold text-gray-900 lg:text-5xl">
                  {t('uniqueTitle')}
                </h2>
                <p className="mx-auto max-w-3xl text-pretty text-lg leading-relaxed text-gray-700">
                  {t('uniqueDescription')}
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-100 transition-all duration-300 hover:shadow-xl hover:ring-teal-200"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {/* Background Gradient on Hover */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-teal-50/0 to-teal-50/0 transition-all duration-300 group-hover:from-teal-50/50 group-hover:to-transparent" />

                    {/* Content */}
                    <div className="relative">
                      <div className="mb-4 flex items-start justify-between gap-4">
                        <h3 className="text-balance font-semibold text-xl text-gray-900 transition-colors group-hover:text-teal-600">
                          {feature.title}
                        </h3>
                        <div className="flex-shrink-0">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-teal-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-teal-500 group-hover:text-white">
                            <ArrowRight
                              className={`h-5 w-5 transition-transform duration-300 ${
                                hoveredIndex === index ? "translate-x-1" : ""
                              }`}
                            />
                          </div>
                        </div>
                      </div>
                      <p className="text-pretty leading-relaxed text-gray-600">{feature.description}</p>
                    </div>

                    {/* Decorative Corner Element */}
                    <div className="pointer-events-none absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-teal-100/20 blur-2xl transition-all duration-300 group-hover:bg-teal-200/40" />
                  </div>
                ))}
              </div>

              {/* Bottom CTA */}
              <div className="text-center">
                <div className="inline-flex flex-col items-center gap-4 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-600 p-8 text-white shadow-lg">
                  <p className="text-balance text-lg font-medium">
                    {t('ctaText')}
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-teal-600 transition-all hover:scale-105 hover:shadow-lg"
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
