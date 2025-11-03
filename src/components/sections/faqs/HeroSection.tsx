"use client";

import { ArrowRight, Sparkles, Globe, Heart, CheckCircle2, HelpCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import Image from "next/image";
import { IMAGE_URLS } from "@/constants/urls";
import { useTranslations } from 'next-intl';

export function HeroSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const t = useTranslations('faqs');
  
  return (
    <>
      {/* Hero Image Section */}
      <section className="relative min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGE_URLS.rabatSchoolClassroom2}
            alt="FAQs - Frequently Asked Questions"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#003c3a]/95 via-[#003c3a]/85 to-[#00a6a2]/75" />
        </div>

        {/* Content */}
        <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 py-12 md:py-16">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="mb-6 md:mb-8">
              <Badge className="inline-flex items-center gap-2 border-0 bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                <HelpCircle className="h-4 w-4" />
                <span>{t('heroBadge')}</span>
              </Badge>
            </div>

            {/* Heading */}
            <h1 className="mb-6 md:mb-8 font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white">
              {t('heroTitle')}
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-white/95 max-w-2xl">
              {t('heroDescription')}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative overflow-hidden bg-gray-50 py-12 md:py-16 lg:py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-start gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Left content */}
              <div className="space-y-6 md:space-y-8">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-[#00a6a2]/20 bg-[#00a6a2]/5 px-4 py-2 text-sm font-medium text-[#00a6a2]">
                  <Sparkles className="h-4 w-4" />
                  <span>{t('contentBadge')}</span>
                </div>

                {/* Main heading */}
                <div className="space-y-3 md:space-y-4">
                  <h2 className="text-balance font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-[#003c3a]">
                    {t('contentTitle')}{" "}
                    <span className="bg-gradient-to-r from-[#00a6a2] to-[#008a87] bg-clip-text text-transparent">{t('contentTitle')}</span>
                  </h2>
                </div>

                {/* Description */}
                <div className="space-y-4 text-pretty text-base sm:text-lg leading-relaxed text-gray-600">
                  <p>
                    {t('dreamDescription')}
                  </p>
                  <p className="font-medium text-[#003c3a]">{t('rightPlaceTitle')}</p>
                  <p>
                    {t('pathDescription')}
                  </p>
                </div>

                {/* CTA Card */}
                <Card className="relative overflow-hidden border-2 border-[#00a6a2]/20 bg-white/80 backdrop-blur-sm transition-all duration-300">
                  <button 
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="group flex w-full items-center justify-between p-4 sm:p-6 text-left transition-all hover:bg-[#00a6a2]/5 cursor-pointer"
                  >
                    <div className="space-y-1">
                      <h3 className="text-lg sm:text-xl font-semibold text-[#00a6a2]">{t('whyAmalCareTitle')}</h3>
                      <p className="text-sm text-gray-600">{t('whyAmalCareSubtitle')}</p>
                    </div>
                    <div className={`flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#00a6a2] text-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#00a6a2]/30 flex-shrink-0 ml-4 ${isExpanded ? 'rotate-90' : ''}`}>
                      <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                  </button>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className="border-t border-[#00a6a2]/10 p-4 sm:p-6 space-y-4 sm:space-y-6 animate-in fade-in slide-in-from-top-2 duration-300">
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        <strong className="text-[#003c3a]">{t('becauseYouDeserve')}</strong>
                      </p>
                      
                      <div>
                        <p className="font-semibold text-[#003c3a] mb-4 text-sm sm:text-base">{t('atAmalCareTitle')}</p>
                        <ul className="space-y-3">
                          {[
                            t('benefit1'),
                            t('benefit2'),
                            t('benefit3'),
                            t('benefit4'),
                            t('benefit5'),
                            t('benefit6')
                          ].map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-[#00a6a2] mt-0.5" />
                              <span className="text-xs sm:text-sm text-gray-600">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed italic">
                        {t('notAloneMessage')}
                      </p>

                      <Button 
                        size="lg"
                        className="w-full sm:w-auto bg-[#00a6a2] text-white hover:bg-[#008a87] shadow-lg shadow-[#00a6a2]/30"
                      >
                        {t('quickContactButton')}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </div>
                  )}
                </Card>
              </div>

              {/* Right content - Feature cards */}
              <div className="relative order-first relative top-20 lg:order-last">
                <div className="grid gap-4 md:gap-6">
                  {/* Feature card 1 */}
                  <Card className="group border-2 border-gray-200 bg-white p-4 sm:p-6 transition-all duration-300 hover:border-[#00a6a2]/40 hover:shadow-lg h-full">
                    <div className="flex items-start gap-3 sm:gap-4 h-full">
                      <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-[#00a6a2]/10 text-[#00a6a2] transition-colors group-hover:bg-[#00a6a2] group-hover:text-white">
                        <Globe className="h-5 w-5 sm:h-6 sm:w-6" />
                      </div>
                      <div className="space-y-2 flex-1">
                        <h3 className="text-base sm:text-lg font-semibold text-[#003c3a]">{t('journeySupportTitle')}</h3>
                        <p className="text-xs sm:text-sm leading-relaxed text-gray-600">
                          {t('journeySupportDescription')}
                        </p>
                      </div>
                    </div>
                  </Card>

                  {/* Feature card 2 */}
                  <Card className="group border-2 border-gray-200 bg-white p-4 sm:p-6 transition-all duration-300 hover:border-[#00a6a2]/40 hover:shadow-lg h-full">
                    <div className="flex items-start gap-3 sm:gap-4 h-full">
                      <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-[#00a6a2]/10 text-[#00a6a2] transition-colors group-hover:bg-[#00a6a2] group-hover:text-white">
                        <Heart className="h-5 w-5 sm:h-6 sm:w-6" />
                      </div>
                      <div className="space-y-2 flex-1">
                        <h3 className="text-base sm:text-lg font-semibold text-[#003c3a]">{t('careTrustTitle')}</h3>
                        <p className="text-xs sm:text-sm leading-relaxed text-gray-600">
                          {t('careTrustDescription')}
                        </p>
                      </div>
                    </div>
                  </Card>

                  {/* Stats card */}
                  <Card className="border-2 border-[#00a6a2]/20 bg-gradient-to-br from-[#00a6a2]/5 to-[#003c3a]/5 p-4 sm:p-6">
                    <div className="grid grid-cols-3 gap-3 sm:gap-4 text-center">
                      <div className="space-y-1">
                        <div className="text-xl sm:text-2xl font-bold text-[#00a6a2]">500+</div>
                        <div className="text-[10px] sm:text-xs text-gray-600">{t('placementsLabel')}</div>
                      </div>
                      <div className="space-y-1"> 
                        <div className="text-xl sm:text-2xl font-bold text-[#003c3a]">95%</div>
                        <div className="text-[10px] sm:text-xs text-gray-600">{t('successRateLabel')}</div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-xl sm:text-2xl font-bold text-[#00a6a2]">24/7</div>
                        <div className="text-[10px] sm:text-xs text-gray-600">{t('supportLabel')}</div>
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
