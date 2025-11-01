"use client"

import { useTranslations } from 'next-intl';
import { IMAGE_URLS } from '@/constants/urls';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Heart, Target, Users, CheckCircle2, Stethoscope, Activity } from 'lucide-react';

export default function SimulationCourseContent() {
  const t = useTranslations('simulationCourse');

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGE_URLS.rabatSchoolClassroom1}
            alt={t('heroAlt')}
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
                <GraduationCap className="h-4 w-4" />
                <span>{t('heroBadge')}</span>
              </Badge>
            </div>

            {/* Heading */}
            <h1 className="mb-4 md:mb-6 font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white">
              {t('title')}
            </h1>

            {/* Subtitle */}
            <h2 className="mb-6 md:mb-8 text-2xl sm:text-3xl md:text-4xl font-semibold text-white/90">
              {t('subtitle')}
            </h2>

            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-white/95 max-w-2xl">
              {t('description')}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="relative overflow-hidden py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="space-y-12 md:space-y-16 lg:space-y-20">
            
            {/* Hands-on nursing section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#00a6a2]/10">
                    <Activity className="h-6 w-6 text-[#00a6a2]" />
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-bold text-[#003c3a]">
                    {t('handsOnTitle')}
                  </h3>
                </div>
                
                <Card className="bg-gradient-to-br from-[#f0f9f9] to-[#e6f7f7] p-6 md:p-8 border-0">
                  <div className="space-y-4">
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                      {t('handsOnDescription')}
                    </p>
                    <div className="flex items-start gap-3 pt-2">
                      <CheckCircle2 className="h-5 w-5 text-[#00a6a2] flex-shrink-0 mt-1" />
                      <p className="text-base sm:text-lg text-[#003c3a] leading-relaxed font-medium">
                        {t('handsOnConclusion')}
                      </p>
                    </div>
                  </div>
                </Card>

                {/* Feature badges */}
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <Card className="p-4 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#00a6a2]/10">
                        <Stethoscope className="h-5 w-5 text-[#00a6a2]" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-[#003c3a]">{t('practicalTrainingTitle')}</div>
                        <div className="text-xs text-gray-600">{t('practicalTrainingSubtitle')}</div>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-4 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#003c3a]/10">
                        <Users className="h-5 w-5 text-[#003c3a]" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-[#003c3a]">{t('smallGroupsTitle')}</div>
                        <div className="text-xs text-gray-600">{t('smallGroupsSubtitle')}</div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Image placeholder or decorative element */}
              <div className="relative order-first lg:order-last">
                <Card className="bg-gradient-to-br from-[#00a6a2]/10 to-[#003c3a]/10 p-8 md:p-12 text-center">
                  <div className="space-y-6">
                    <div className="flex justify-center">
                      <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-lg">
                        <Activity className="h-10 w-10 text-[#00a6a2]" />
                      </div>
                    </div>
                    <h4 className="text-2xl font-bold text-[#003c3a]">{t('weeklyTopicsTitle')}</h4>
                    <div className="grid grid-cols-2 gap-3 text-left">
                      {[t('topic1'), t('topic2'), t('topic3'), t('topic4'), t('topic5'), t('topic6')].map((topic, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                          <div className="h-1.5 w-1.5 rounded-full bg-[#00a6a2]" />
                          {topic}
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Systematic learning section */}
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#00a6a2]/10">
                    <Target className="h-7 w-7 text-[#00a6a2]" />
                  </div>
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-[#003c3a]">
                  {t('systematicTitle')}
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {/* Module 1 */}
                <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 border-t-4 border-t-[#00a6a2]">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge className="bg-[#00a6a2]/10 text-[#00a6a2] border-0">{t('module1Badge')}</Badge>
                      <span className="text-2xl font-bold text-gray-300">01</span>
                    </div>
                    <h4 className="text-xl font-bold text-[#003c3a]">{t('module1Title')}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {t('module1Description')}
                    </p>
                  </div>
                </Card>

                {/* Module 2 */}
                <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 border-t-4 border-t-[#003c3a]">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge className="bg-[#003c3a]/10 text-[#003c3a] border-0">{t('module2Badge')}</Badge>
                      <span className="text-2xl font-bold text-gray-300">02</span>
                    </div>
                    <h4 className="text-xl font-bold text-[#003c3a]">{t('module2Title')}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {t('module2Description')}
                    </p>
                  </div>
                </Card>

                {/* Module 3 */}
                <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 border-t-4 border-t-[#00a6a2]">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge className="bg-[#00a6a2]/10 text-[#00a6a2] border-0">{t('module3Badge')}</Badge>
                      <span className="text-2xl font-bold text-gray-300">03</span>
                    </div>
                    <h4 className="text-xl font-bold text-[#003c3a]">{t('module3Title')}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {t('module3Description')}
                    </p>
                  </div>
                </Card>
              </div>

              <Card className="bg-white border border-gray-200 p-6 md:p-8 shadow-sm">
                <div className="space-y-4">
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    {t('systematicDescription1')}
                  </p>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    {t('systematicDescription2')}
                  </p>
                  <div className="flex items-start gap-3 pt-2">
                    <Target className="h-5 w-5 text-[#00a6a2] flex-shrink-0 mt-1" />
                    <p className="text-base sm:text-lg text-[#003c3a] leading-relaxed font-medium">
                      {t('systematicConclusion')}
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Quality section */}
            <Card className="bg-gradient-to-br from-[#00a6a2] to-[#008a87] text-white p-8 md:p-12 lg:p-16 border-0 overflow-hidden relative">
              <div className="absolute top-0 right-0 opacity-10">
                <Heart className="h-64 w-64" />
              </div>
              <div className="relative z-10 text-center space-y-6 max-w-4xl mx-auto">
                <div className="flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
                    <Heart className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                  {t('qualityTitle')}
                </h3>
                <p className="text-lg sm:text-xl md:text-2xl leading-relaxed">
                  {t('qualityDescription')}
                </p>
              </div>
            </Card>

          </div>
        </div>
      </section>
    </>
  );
}
