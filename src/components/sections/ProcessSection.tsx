import React from 'react'
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useTranslations, useLocale } from 'next-intl'

const ProcessSection = () => {
    const t = useTranslations('home')
    const locale = useLocale()
    return (
        <div className="w-full bg-white py-12 md:py-16 lg:py-20">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="relative bg-gradient-to-br from-[#00a6a2] to-[#008a87] rounded-2xl md:rounded-3xl overflow-hidden">
                    {/* Background decorative elements */}
                    <div className="absolute inset-0">
                        <div className="absolute top-0 start-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 end-0 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
                        <div className="absolute top-1/2 start-1/3 w-64 h-64 bg-white/3 rounded-full blur-2xl"></div>
                    </div>

                    {/* Grid pattern overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>

                    {/* Content */}
                    <div className="relative z-10 p-8 md:p-12 lg:p-16">
                        <div className="max-w-3xl">
                            <p className="text-white/90 text-xs sm:text-sm font-medium tracking-wide uppercase mb-4 sm:mb-6">
                                {t('process.subtitle')}
                            </p>
                            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 sm:mb-8 md:mb-10">
                                {t('process.description')}
                            </h2>
                            <div className="space-y-4 sm:space-y-6 text-white/90 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 md:mb-12">
                                <p>
                                    {t('process.details')}
                                </p>
                            </div>

                            {/* Arrow button */}
                            <div className="mt-8 sm:mt-10">
                                <Link href={`/${locale}/simulation-course`}>
                                    <button
                                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white hover:bg-gray-50 flex justify-center items-center text-[#00a6a2] p-0 shadow-lg transition-colors duration-200 cursor-pointer"
                                        aria-label="Learn more about simulation course"
                                    >
                                        <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 rtl:rotate-180" />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProcessSection
