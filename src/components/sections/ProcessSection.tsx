import React from 'react'
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { IMAGES } from "@/types"
import { useTranslations, useLocale } from 'next-intl'

const ProcessSection = () => {
    const t = useTranslations('home')
    const locale = useLocale()
    return (
        <div className="w-full bg-white flex items-center justify-center py-12 md:py-16">
            {/* Main content container */}
            <div className="w-full container mx-auto max-w-9xl px-6 flex flex-col md:flex-row items-center gap-8 md:gap-x-7">
                {/* Left side with healthcare worker - hidden icons on mobile */}
                <div className="w-full md:w-3/5 relative flex items-center justify-center">
                    <div className="relative w-full">
                        <Image 
                            width={1200} 
                            height={800} 
                            src={IMAGES.processImage}
                            alt="Healthcare worker in blue scrubs" 
                            className="w-full h-auto object-cover rounded-2xl md:rounded-3xl" 
                        />
                    </div>
                </div>

                {/* Right content - stacks below on mobile */}
                <div className="w-full md:w-2/5">
                    <div className="max-w-lg">
                        <p className="text-gray-500 text-xs sm:text-sm font-medium tracking-wide uppercase mb-3 sm:mb-4">{t('process.subtitle')}</p>
                        <h2 className="text-[#00a6a2] text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-6 sm:mb-8">
                            {t('process.description')}
                        </h2>
                        <div className="space-y-4 sm:space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">
                            <p>
                                {t('process.details')}
                            </p>
                        </div>
                    </div>

                    {/* Arrow button */}
                    <div className="mt-8 sm:mt-12">
                        <Link href={`/${locale}/simulation-course`}>
                            <button
                                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#00a6a2] hover:bg-[#008a87] flex justify-center items-center text-white p-0 shadow-lg transition-colors"
                                aria-label="Learn more about simulation course"
                            >
                                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProcessSection
