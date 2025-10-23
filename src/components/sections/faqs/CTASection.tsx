"use client";

import { ArrowRight, CheckCircle2, MessageCircle, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { IMAGES } from "@/types";
import Image from "next/image";
import { useTranslations } from 'next-intl';

export function CTASection() {
  const t = useTranslations('faqs.cta');
  return (
    <section className="relative overflow-hidden bg-gray-50 pt-32 lg:pt-40 pb-20 lg:pb-32">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#00a6a2]/10 blur-3xl" />
      </div>

      <div className="container mx-auto max-w-9xl px-6">
        <div className="mx-auto max-w-9xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-balance font-sans text-4xl font-bold leading-tight tracking-tight text-[#003c3a] lg:text-5xl xl:text-6xl">
                  {t('title')}{" "}
                  <span className="bg-gradient-to-r from-[#00a6a2] to-[#7c3aed] bg-clip-text text-transparent">{t('titleHighlight')}</span>
                </h2>

                <p className="text-pretty text-lg leading-relaxed text-gray-600 lg:text-xl">
                  {t('description1')}
                </p>

                <p className="text-pretty text-base leading-relaxed text-gray-600">
                  {t('description2')}
                </p>
              </div>

              {/* Benefits list */}
              <Card className="border-2 border-[#00a6a2]/20 bg-white p-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-[#003c3a]">{t('benefitsTitle')}</h3>
                  <ul className="space-y-3">
                    {['b1', 'b2', 'b3', 'b4'].map((key, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#00a6a2]" />
                        <span className="text-sm text-gray-600">{t(`benefits.${key}`)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  size="lg"
                  className="group bg-[#7c3aed] text-white shadow-lg shadow-[#7c3aed]/30 transition-all hover:bg-[#6d28d9] hover:shadow-xl hover:shadow-[#7c3aed]/40"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  {t('ctaButton1')}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#00a6a2]/20 bg-white transition-all hover:border-[#00a6a2]/40 hover:bg-[#00a6a2]/5 text-[#003c3a]"
                >
                  {t('ctaButton2')}
                </Button>
              </div>
            </div>

            {/* Right content - Image */}
            <div className="relative">
              <Card className="overflow-hidden border-2 border-[#00a6a2]/20 bg-white shadow-2xl shadow-[#00a6a2]/10">
                <div className="aspect-[4/5] overflow-hidden">
                  <Image
                    src={IMAGES.ctaImage2}
                    alt="Healthcare professionals in blue scrubs celebrating outdoors"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    width={800}
                    height={1000}
                  />
                </div>
                {/* Overlay badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <Card className="border-2 border-[#00a6a2]/20 bg-white p-4 shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00a6a2]/10">
                        <Heart className="h-5 w-5 text-[#00a6a2]" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-[#003c3a]">{t('badgeTitle')}</div>
                        <div className="text-xs text-gray-600">{t('badgeSubtitle')}</div>
                      </div>
                    </div>
                  </Card>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


