"use client"

import { useTranslations } from 'next-intl'

export default function ContactIntroSection() {
  const t = useTranslations('contact')

  return (
    <section className="relative bg-gradient-to-br from-white via-[#f0f9f9] to-white py-20 md:py-32 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00a6a2]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#00a6a2]/5 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block">
            <span className="text-sm font-semibold text-[#7c3aed] bg-[#7c3aed]/10 px-4 py-2 rounded-full uppercase tracking-wider">
              {t('title')}
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
            {t('introTitle')}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00a6a2] to-[#008581]">
              {t('introTitleHighlight')}
            </span>
          </h1>
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            <p>
              {t('introDescription1')}
            </p>
            <p>
              {t('introDescription2')}
            </p>
            <p>
              {t('introDescription3')}
            </p>
            <p className="font-semibold text-[#00a6a2] text-xl">
              {t('introDescription4')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
