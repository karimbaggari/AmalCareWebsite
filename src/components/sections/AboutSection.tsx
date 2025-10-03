"use client"

import { useTranslations } from 'next-intl'

const AboutSection = () => {
    const t = useTranslations('home')
    
    return (
        <div className="bg-white mt-12">
            <div className="max-w-5xl mx-auto px-6 pb-16">
                {/* Mission Section */}
                <section className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-semibold text-[#00a6a2] mb-8">{t('mission.title')}</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        {t('mission.description')}
                    </p>
                </section>

                {/* Services Section */}
                <section className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-semibold text-[#00a6a2] mb-8">{t('whatWeDo.title')}</h2>

                    <div className="space-y-8">
                        <p className="text-lg text-gray-700 leading-relaxed">
                            {t('whatWeDo.description')}
                        </p>

                        <p className="text-lg text-gray-700 leading-relaxed">
                            {t('whatWeDo.details')}
                        </p>

                        <div className="pt-4">
                            <p className="text-lg text-[#00a6a2] font-medium leading-relaxed">
                                {t('whatWeDo.focus')}
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default AboutSection
