"use client"

import { useTranslations } from 'next-intl'

export default function ContactIntroSection() {
  const t = useTranslations('contact')

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-12 sm:py-16 md:py-20 overflow-hidden">

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          <div className="inline-block">
            <span className="text-xs sm:text-sm font-semibold text-[#00a6a2] bg-[#00a6a2]/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full uppercase tracking-wider">
              {t('title')}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#003c3a] leading-tight">
            {t('introTitle')}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00a6a2] to-[#008581]">
              {t('introTitleHighlight')}
            </span>
          </h2>
          <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            <p>
              {t('introDescription1')}
            </p>
            <p>
              {t('introDescription2')}
            </p>
            <p>
              {t('introDescription3')}
            </p>
            <p className="font-semibold text-[#00a6a2] text-lg sm:text-xl">
              {t('introDescription4')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
