"use client"

import { useTranslations } from 'next-intl'

const AboutSection = () => {
    const t = useTranslations('home')
    
    return (
        <div className="bg-white">
            <div className="container mx-auto max-w-6xl px-6 py-20 md:py-24">
                {/* Heading */}
                <div className="mb-12 sm:mb-16 text-center">
                    <p className="text-[#00a6a2] text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3 sm:mb-4">
                        {t('tagline')}
                    </p>
                    <h2 className="text-[#003c3a] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3 sm:mb-4">
                        {t('mission.title')}
                    </h2>
                    <div className="mx-auto h-0.5 sm:h-1 w-16 sm:w-20 rounded-full bg-gradient-to-r from-[#00a6a2] to-[#006b68]"></div>
                </div>

                {/* Content */}
                <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
                    {/* Mission Description */}
                    <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed text-center px-2">
                        {t('mission.description')}
                    </p>

                    {/* Divider */}
                    <div className="py-3 sm:py-4">
                        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#00a6a2]/20 to-transparent"></div>
                    </div>

                    {/* What We Do Section */}
                    <div className="space-y-4 sm:space-y-6">
                        <h3 className="text-[#003c3a] text-xl sm:text-2xl md:text-3xl font-semibold text-center">
                            {t('whatWeDo.title')}
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed text-center px-2">
                            {t('whatWeDo.description')}
                        </p>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed text-center px-2">
                            {t('whatWeDo.details')}
                        </p>
                    </div>

                    {/* Focus Badge */}
                    <div className="flex justify-center pt-3 sm:pt-4">
                        <span className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#006b68] font-medium px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#00a6a2]/5 border border-[#00a6a2]/20">
                            <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#00a6a2]"></span>
                            {t('whatWeDo.focus')}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection
