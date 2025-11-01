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
            className="object-cover scale-105 animate-in zoom-in-0 duration-1000"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#00a6a2]/95 via-[#00a6a2]/90 to-[#006b68]/80" />
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#003c3a]/20 rounded-full blur-3xl" />
        </div>

        {/* Content */}
        <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left Column - Main Title */}
            <div className="space-y-6 md:space-y-8 animate-in fade-in slide-in-from-left-10 duration-700">
              {/* Badge */}
              <div className="inline-flex">
                <Badge className="inline-flex items-center gap-2 border-0 bg-white/20 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-md shadow-lg hover:bg-white/30 transition-all duration-300 hover:scale-105">
                  <GraduationCap className="h-5 w-5" />
                  <span>{t('heroBadge')}</span>
                </Badge>
              </div>

              {/* Heading */}
              <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-white drop-shadow-2xl">
                {t('title')}
              </h1>

              {/* Decorative Line */}
              <div className="flex items-center gap-4">
                <div className="h-1 w-16 md:w-20 rounded-full bg-gradient-to-r from-white to-white/40" />
                <div className="h-1 w-8 md:w-12 rounded-full bg-white/40" />
              </div>
            </div>

            {/* Right Column - Subtitle and Description */}
            <div className="space-y-6 md:space-y-8 animate-in fade-in slide-in-from-right-10 duration-700 delay-150">
              {/* Card Container */}
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-6 md:p-8 lg:p-10 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-500 group">
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/20 to-transparent rounded-bl-3xl opacity-50" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/20 to-transparent rounded-tr-3xl opacity-50" />
                
                <div className="relative space-y-5 md:space-y-6">
                  {/* Subtitle */}
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight drop-shadow-lg">
                    {t('subtitle')}
                  </h2>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-white/40 via-white/60 to-white/40" />

                  {/* Description */}
                  <p className="text-base sm:text-lg md:text-xl leading-relaxed text-white/95 drop-shadow-md">
                    {t('description')}
                  </p>

                  {/* Icon decoration */}
                  <div className="flex items-center gap-3 pt-2">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 group-hover:scale-110 transition-transform duration-300">
                      <Activity className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 group-hover:scale-110 transition-transform duration-300 delay-75">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 group-hover:scale-110 transition-transform duration-300 delay-150">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated pattern overlay */}
        <div className="absolute inset-0 z-[1] opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full animate-pulse" />
          <div className="absolute top-32 right-24 w-2 h-2 bg-white rounded-full animate-pulse delay-300" />
          <div className="absolute bottom-24 left-32 w-2 h-2 bg-white rounded-full animate-pulse delay-700" />
          <div className="absolute bottom-32 right-16 w-2 h-2 bg-white rounded-full animate-pulse delay-500" />
        </div>
      </section>

      {/* Main Content Section */}
      <section className="relative overflow-hidden py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 md:space-y-20 lg:space-y-28">
            
            {/* Hands-on nursing section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#00a6a2]/10">
                      <Activity className="h-7 w-7 text-[#00a6a2]" />
                    </div>
                  </div>
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#003c3a] leading-tight">
                    {t('handsOnTitle')}
                  </h3>
                </div>
                
                <div className="space-y-5">
                  <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
                    {t('handsOnDescription')}
                  </p>
                  <div className="flex items-start gap-3 p-5 bg-[#00a6a2]/5 rounded-xl border-l-4 border-[#00a6a2]">
                    <CheckCircle2 className="h-6 w-6 text-[#00a6a2] flex-shrink-0 mt-1" />
                    <p className="text-base sm:text-lg text-[#003c3a] leading-relaxed font-medium">
                      {t('handsOnConclusion')}
                    </p>
                  </div>
                </div>

                {/* Feature badges */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                  <Card className="p-5 md:p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-[#00a6a2] bg-white">
                    <div className="flex flex-col gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#00a6a2]/10">
                        <Stethoscope className="h-6 w-6 text-[#00a6a2]" />
                      </div>
                      <div>
                        <div className="text-base font-bold text-[#003c3a] mb-1">{t('practicalTrainingTitle')}</div>
                        <div className="text-sm text-gray-600">{t('practicalTrainingSubtitle')}</div>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-5 md:p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-[#003c3a] bg-white">
                    <div className="flex flex-col gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#003c3a]/10">
                        <Users className="h-6 w-6 text-[#003c3a]" />
                      </div>
                      <div>
                        <div className="text-base font-bold text-[#003c3a] mb-1">{t('smallGroupsTitle')}</div>
                        <div className="text-sm text-gray-600">{t('smallGroupsSubtitle')}</div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Weekly Topics Card */}
              <div className="relative lg:sticky lg:top-24">
                <Card className="bg-gradient-to-br from-[#00a6a2]/5 via-white to-[#003c3a]/5 p-8 md:p-10 border-2 border-[#00a6a2]/20 shadow-xl">
                  <div className="space-y-8">
                    <div className="flex flex-col items-center text-center gap-4">
                      <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[#00a6a2] to-[#008a87] shadow-lg">
                        <Activity className="h-10 w-10 text-white" />
                      </div>
                      <h4 className="text-2xl md:text-3xl font-bold text-[#003c3a]">{t('weeklyTopicsTitle')}</h4>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[t('topic1'), t('topic2'), t('topic3'), t('topic4'), t('topic5'), t('topic6')].map((topic, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#00a6a2]/10 flex-shrink-0">
                            <span className="text-sm font-bold text-[#00a6a2]">{index + 1}</span>
                          </div>
                          <span className="text-sm font-medium text-gray-700">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Systematic learning section */}
            <div className="space-y-12">
              <div className="text-center space-y-6 max-w-3xl mx-auto">
                <div className="flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#00a6a2] to-[#008a87] shadow-lg">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#003c3a]">
                  {t('systematicTitle')}
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                {/* Module 1 */}
                <Card className="p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 shadow-lg group">
                  <div className="space-y-5">
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#00a6a2] to-[#008a87] shadow-md">
                        <span className="text-white text-lg font-bold">01</span>
                      </div>
                    </div>
                    <div>
                      <Badge className="bg-[#00a6a2]/10 text-[#00a6a2] border-0 mb-3">{t('module1Badge')}</Badge>
                      <h4 className="text-xl lg:text-2xl font-bold text-[#003c3a] mb-3 group-hover:text-[#00a6a2] transition-colors">{t('module1Title')}</h4>
                      <p className="text-base text-gray-600 leading-relaxed">
                        {t('module1Description')}
                      </p>
                    </div>
                  </div>
                </Card>

                {/* Module 2 */}
                <Card className="p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 shadow-lg group">
                  <div className="space-y-5">
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#003c3a] to-[#002928] shadow-md">
                        <span className="text-white text-lg font-bold">02</span>
                      </div>
                    </div>
                    <div>
                      <Badge className="bg-[#003c3a]/10 text-[#003c3a] border-0 mb-3">{t('module2Badge')}</Badge>
                      <h4 className="text-xl lg:text-2xl font-bold text-[#003c3a] mb-3 group-hover:text-[#00a6a2] transition-colors">{t('module2Title')}</h4>
                      <p className="text-base text-gray-600 leading-relaxed">
                        {t('module2Description')}
                      </p>
                    </div>
                  </div>
                </Card>

                {/* Module 3 */}
                <Card className="p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 shadow-lg group">
                  <div className="space-y-5">
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#00a6a2] to-[#008a87] shadow-md">
                        <span className="text-white text-lg font-bold">03</span>
                      </div>
                    </div>
                    <div>
                      <Badge className="bg-[#00a6a2]/10 text-[#00a6a2] border-0 mb-3">{t('module3Badge')}</Badge>
                      <h4 className="text-xl lg:text-2xl font-bold text-[#003c3a] mb-3 group-hover:text-[#00a6a2] transition-colors">{t('module3Title')}</h4>
                      <p className="text-base text-gray-600 leading-relaxed">
                        {t('module3Description')}
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="max-w-4xl mx-auto">
                <Card className="bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 p-8 md:p-10 shadow-lg">
                  <div className="space-y-6">
                    <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
                      {t('systematicDescription1')}
                    </p>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
                      {t('systematicDescription2')}
                    </p>
                    <div className="flex items-start gap-4 p-6 bg-[#00a6a2]/5 rounded-xl border-l-4 border-[#00a6a2] mt-8">
                      <Target className="h-6 w-6 text-[#00a6a2] flex-shrink-0 mt-1" />
                      <p className="text-base sm:text-lg lg:text-xl text-[#003c3a] leading-relaxed font-medium">
                        {t('systematicConclusion')}
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Quality section */}
            <div className="relative">
              <Card className="bg-gradient-to-br from-[#00a6a2] via-[#008a87] to-[#006b68] text-white p-10 md:p-14 lg:p-20 border-0 overflow-hidden relative shadow-2xl">
                <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
                  <Heart className="h-64 w-64 lg:h-96 lg:w-96" />
                </div>
                <div className="absolute bottom-0 left-0 opacity-5 pointer-events-none">
                  <GraduationCap className="h-48 w-48 lg:h-72 lg:w-72" />
                </div>
                <div className="relative z-10 text-center space-y-8 max-w-4xl mx-auto">
                  <div className="flex justify-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md shadow-xl border border-white/20">
                      <Heart className="h-10 w-10" />
                    </div>
                  </div>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    {t('qualityTitle')}
                  </h3>
                  <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed font-light">
                    {t('qualityDescription')}
                  </p>
                </div>
              </Card>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
