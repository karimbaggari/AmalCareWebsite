"use client";

import { ArrowRight, Sparkles, Globe, Heart, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useTranslations } from 'next-intl';

export function HeroSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const t = useTranslations('faqs.hero');
  return (
    <section className="relative overflow-hidden bg-gray-50 py-20 lg:py-32 pb-32 lg:pb-40">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[#00a6a2]/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-[#7c3aed]/5 blur-3xl" />
      </div>

      <div className="container mx-auto max-w-9xl px-6">
        <div className="mx-auto max-w-9xl">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[#00a6a2]/20 bg-[#00a6a2]/5 px-4 py-2 text-sm font-medium text-[#00a6a2]">
                <Sparkles className="h-4 w-4" />
                <span>{t('badge')}</span>
              </div>

              {/* Main heading */}
              <div className="space-y-4">
                <h1 className="text-balance font-sans text-5xl font-bold leading-tight tracking-tight text-[#003c3a] lg:text-6xl xl:text-7xl">
                  {t('title')}{" "}
                  <span className="bg-gradient-to-r from-[#00a6a2] to-[#7c3aed] bg-clip-text text-transparent">{t('titleHighlight')}</span>
                </h1>
              </div>

              {/* Description */}
              <div className="space-y-4 text-pretty text-lg leading-relaxed text-gray-600 lg:text-xl">
                <p>
                  {t('description1')}
                </p>
                <p className="font-medium text-[#003c3a]">{t('description2')}</p>
                <p>
                  {t('description3')}
                </p>
              </div>

              {/* CTA Card */}
              <Card className="relative overflow-hidden border-2 border-[#00a6a2]/20 bg-white/80 backdrop-blur-sm transition-all duration-300">
                <button 
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="group flex w-full items-center justify-between p-6 text-left transition-all hover:bg-[#00a6a2]/5 cursor-pointer"
                >
                  <div className="space-y-1">
                    <h3 className="text-xl font-semibold text-[#00a6a2]">{t('whyTitle')}</h3>
                    <p className="text-sm text-gray-600">{t('whySubtitle')}</p>
                  </div>
                  <div className={`flex h-12 w-12 items-center justify-center rounded-full bg-[#00a6a2] text-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#00a6a2]/30 ${isExpanded ? 'rotate-90' : ''}`}>
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </button>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="border-t border-[#00a6a2]/10 p-6 space-y-6 animate-in fade-in slide-in-from-top-2 duration-300">
                    <p className="text-gray-700 leading-relaxed">
                      <strong className="text-[#003c3a]">{t('whyStrong')}</strong>
                    </p>
                    
                    <div>
                      <p className="font-semibold text-[#003c3a] mb-4">{t('benefitsTitle')}</p>
                      <ul className="space-y-3">
                        {['b1', 'b2', 'b3', 'b4', 'b5', 'b6'].map((key, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 shrink-0 text-[#00a6a2] mt-0.5" />
                            <span className="text-sm text-gray-600">{t(`benefits.${key}`)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <p className="text-gray-700 leading-relaxed italic">
                      {t('closingText')}
                    </p>

                    <Button 
                      size="lg"
                      className="w-full sm:w-auto bg-[#7c3aed] text-white hover:bg-[#6d28d9] shadow-lg shadow-[#7c3aed]/30"
                    >
                      {t('ctaButton')}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                )}
              </Card>
            </div>

            {/* Right content - Feature cards */}
            <div className="relative">
              <div className="grid gap-6">
                {/* Feature card 1 */}
                <Card className="group border-2 border-gray-200 bg-white p-6 transition-all duration-300 hover:border-[#00a6a2]/40 hover:shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#00a6a2]/10 text-[#00a6a2] transition-colors group-hover:bg-[#00a6a2] group-hover:text-white">
                      <Globe className="h-6 w-6" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-[#003c3a]">{t('featureCard1Title')}</h3>
                      <p className="text-sm leading-relaxed text-gray-600">
                        {t('featureCard1Description')}
                      </p>
                    </div>
                  </div>
                </Card>

                {/* Feature card 2 */}
                <Card className="group border-2 border-gray-200 bg-white p-6 transition-all duration-300 hover:border-[#7c3aed]/40 hover:shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#7c3aed]/10 text-[#7c3aed] transition-colors group-hover:bg-[#7c3aed] group-hover:text-white">
                      <Heart className="h-6 w-6" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-[#003c3a]">{t('featureCard2Title')}</h3>
                      <p className="text-sm leading-relaxed text-gray-600">
                        {t('featureCard2Description')}
                      </p>
                    </div>
                  </div>
                </Card>

                {/* Stats card */}
                <Card className="border-2 border-[#00a6a2]/20 bg-gradient-to-br from-[#00a6a2]/5 to-[#7c3aed]/5 p-6">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="space-y-1">
                      <div className="text-2xl font-bold text-[#00a6a2]">{t('stat1')}</div>
                      <div className="text-xs text-gray-600">{t('stat1Label')}</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-2xl font-bold text-[#7c3aed]">{t('stat2')}</div>
                      <div className="text-xs text-gray-600">{t('stat2Label')}</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-2xl font-bold text-[#00a6a2]">{t('stat3')}</div>
                      <div className="text-xs text-gray-600">{t('stat3Label')}</div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

