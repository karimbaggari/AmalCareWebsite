"use client"

import { useTranslations } from 'next-intl'

const AboutSection = () => {
    const t = useTranslations('home')
    
    return (
        <div className="bg-white">
            <div className="container mx-auto max-w-9xl px-6 py-16">
                {/* Heading */}
                <div className="mb-10 text-center">
                    <p className="text-[#006b68] text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase mb-3">
                        {t('tagline')}
                    </p>
                    <h2 className="text-[#003c3a] text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                        {t('mission.title')}
                    </h2>
                    <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-[#00a6a2] via-[#008b87] to-[#006b68]"></div>
                </div>

                {/* Content (single column, simple and clean) */}
                <div className="max-w-5xl mx-auto space-y-8 md:space-y-10">
                    <p className="text-gray-800 text-lg text-center md:text-xl leading-relaxed">
                        {t('mission.description')}
                    </p>
                    <div className="h-px w-full bg-gradient-to-r from-[#00a6a2]/30 via-[#008b87]/20 to-transparent"></div>
                    <h3 className="text-[#003c3a] text-2xl md:text-3xl font-semibold tracking-tight text-center">
                        {t('whatWeDo.title')}
                    </h3>
                    <p className="text-gray-700 text-lg md:text-xl text-center leading-relaxed">
                        {t('whatWeDo.description')}
                    </p>
                    <p className="text-gray-700 text-lg md:text-xl text-center leading-relaxed">
                        {t('whatWeDo.details')}
                    </p>
                    <div className="flex justify-center">
                        <span className="inline-flex items-center gap-2 text-sm md:text-base text-[#006b68] font-semibold tracking-wide px-4 py-2 rounded-full bg-[#00a6a2]/10 border border-[#00a6a2]/20">
                            <span className="w-2 h-2 rounded-full bg-[#00a6a2]"></span>
                            {t('whatWeDo.focus')}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection
