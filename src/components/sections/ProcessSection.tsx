import React from 'react'
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { IMAGES } from "@/types"
import { useTranslations } from 'next-intl'

const ProcessSection = () => {
    const t = useTranslations('home')
    return (
        <div className="w-full bg-white flex items-center justify-center py-8 sm:py-12 md:py-16">
            {/* Main content container */}
            <div className="w-full container mx-auto px-4 sm:px-6 max-w-9xl">
                <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12">
                    {/* Left side with healthcare worker - responsive width */}
                    <div className="w-full lg:w-3/5 relative flex items-center justify-center">
                        <div className="relative w-full max-w-2xl">
                            <Image 
                                width={1200} 
                                height={800} 
                                src={IMAGES.processImage}
                                alt="Healthcare worker in blue scrubs" 
                                className="w-full h-auto object-cover rounded-2xl sm:rounded-3xl shadow-xl" 
                            />

                            {/* Medical icons scattered around - hidden on mobile, visible on larger screens */}
                            {/* Heart icon - top left */}
                            <div className="hidden md:block absolute top-4 left-4 lg:top-8 lg:left-8">
                                <svg
                                    className="w-8 h-8 lg:w-12 lg:h-12 text-purple-600"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                            </div>

                            {/* Stethoscope icon - top right */}
                            <div className="hidden md:block absolute top-12 right-8 lg:top-20 lg:right-16">
                                <svg
                                    className="w-10 h-10 lg:w-14 lg:h-14 text-purple-600"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path d="M11 2v6" />
                                    <path d="M5 2v6" />
                                    <path d="M5 8a7 7 0 0 0 7 7v0a7 7 0 0 0 7-7" />
                                    <path d="M8 15v6a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-6" />
                                    <circle cx="20" cy="10" r="2" />
                                </svg>
                            </div>

                            {/* Pills icon - bottom left */}
                            <div className="hidden sm:block absolute bottom-16 sm:bottom-20 left-8 sm:left-12 lg:left-16">
                                <svg
                                    className="w-8 h-8 lg:w-10 lg:h-10 text-purple-600"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path d="M10.5 20.5 10 21a2 2 0 0 1-2.83 0L4 17.83a2 2 0 0 1 0-2.83l.5-.5" />
                                    <path d="M8.5 8.5 12 5a2 2 0 0 1 2.83 0L18 8.17a2 2 0 0 1 0 2.83L14.5 14.5" />
                                    <path d="M10.5 20.5a2 2 0 0 0 2.83 0L16.5 17.33a2 2 0 0 0 0-2.83L13.33 11.5a2 2 0 0 0-2.83 0L7.33 14.67a2 2 0 0 0 0 2.83Z" />
                                </svg>
                            </div>

                            {/* Graduation cap icon - right */}
                            <div className="hidden md:block absolute top-1/2 right-4 lg:right-8">
                                <svg
                                    className="w-10 h-10 lg:w-12 lg:h-12 text-purple-600"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                                </svg>
                            </div>

                            {/* Medical book icon - bottom right */}
                            <div className="hidden sm:block absolute bottom-16 sm:bottom-20 right-8 lg:right-12">
                                <svg
                                    className="w-10 h-10 lg:w-12 lg:h-12 text-purple-600"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                                    <path d="M8 7h6" />
                                    <path d="M8 11h8" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Right content - responsive width */}
                    <div className="w-full lg:w-2/5">
                        <div className="max-w-lg mx-auto lg:mx-0">
                            <p className="text-gray-500 text-xs sm:text-sm font-medium tracking-wide uppercase mb-3 sm:mb-4">{t('process.subtitle')}</p>
                            <h1 className="text-teal-600 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-6 sm:mb-8">
                                {t('process.description')}
                            </h1>
                            <div className="space-y-4 sm:space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">
                                <p>
                                    {t('process.details')}
                                </p>
                            </div>
                        </div>

                        {/* Arrow button */}
                        <div className="mt-8 sm:mt-10 md:mt-12 flex justify-center lg:justify-start">
                            <button
                                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-teal-500 hover:bg-teal-600 flex justify-center items-center text-white p-0 shadow-lg transition-colors"
                            >
                                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProcessSection
