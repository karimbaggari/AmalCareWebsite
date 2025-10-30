"use client"

import { useTranslations } from 'next-intl';
import { SimpleImageHero } from './GenericHeroSection';
import { IMAGE_URLS } from '@/constants/urls';

export default function SimulationCourseContent() {
  const t = useTranslations('simulationCourse');

  return (
    <>
      <SimpleImageHero
        image={IMAGE_URLS.rabatSchoolClassroom1}
        imageAlt={t('heroAlt')}
        backgroundColor="#00a6a2"
        height="h-[600px]"
        imageWidth={900}
        imageHeight={600}
      />

      <section className="bg-white">
        <div className="container mx-auto max-w-6xl px-6 py-16 space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#003c3a] leading-tight">
              {t('title')}
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#00a6a2]">
              {t('subtitle')}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              {t('description')}
            </p>
          </div>

          {/* Hands-on nursing section */}
          <div className="bg-gradient-to-br from-[#f0f9f9] to-[#e6f7f7] rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-[#003c3a] mb-6">
              {t('handsOnTitle')}
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {t('handsOnDescription')}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-medium">
              {t('handsOnConclusion')}
            </p>
          </div>

          {/* Systematic learning section */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-[#003c3a] text-center">
              {t('systematicTitle')}
            </h3>
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {t('systematicDescription1')}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {t('systematicDescription2')}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed font-medium">
                {t('systematicConclusion')}
              </p>
            </div>
          </div>

          {/* Quality section */}
          <div className="bg-[#00a6a2] text-white rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-3xl font-bold mb-6">
              {t('qualityTitle')}
            </h3>
            <p className="text-lg leading-relaxed max-w-4xl mx-auto">
              {t('qualityDescription')}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
