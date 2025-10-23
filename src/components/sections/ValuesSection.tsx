import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { IMAGES } from "@/types"
import { useTranslations } from 'next-intl'

const ValuesSection = () => {
    const t = useTranslations('home')
    return (
        <div className="bg-white">
            <div className="container mx-auto max-w-9xl px-4 sm:px-6 py-8 sm:py-12 md:py-16">
                <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden min-h-[500px] sm:min-h-[600px] md:min-h-[650px] lg:min-h-[600px]">
                <div 
                    className="absolute inset-0 rounded-2xl sm:rounded-3xl values-section-bg"
                    style={{ 
                        backgroundImage: `url(${IMAGES.keyvisual})`
                    }}
                ></div>

                {/* Main content container */}
                <div className="relative z-10 h-full flex flex-col lg:flex-row items-center lg:items-stretch">
                    {/* Left content */}
                    <div className="w-full lg:flex-1 px-6 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-10 md:py-12 flex flex-col justify-center">
                        <div className="max-w-lg">
                            <p className="text-white text-xs sm:text-sm font-medium tracking-wide uppercase mb-3 sm:mb-4">{t('whatMakesUsSpecial.subtitle')}</p>
                            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-6 sm:mb-8">{t('whatMakesUsSpecial.title')}</h1>
                            <div className="space-y-4 sm:space-y-6 text-white/90 text-sm sm:text-base leading-relaxed">
                                <p>
                                    {t('whatMakesUsSpecial.description')}
                                </p>
                                <p>{t('whatMakesUsSpecial.commitment')}</p>
                            </div>
                        </div>

                        {/* Arrow button */}
                        <div className="mt-8 sm:mt-10 md:mt-12">
                            <button className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white hover:bg-gray-100 flex justify-center items-center text-gray-900 p-0 shadow-lg transition-colors">
                                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                            </button>
                        </div>
                    </div>

                    {/* Right image - hidden on mobile, visible on large screens */}
                    <div className="hidden lg:flex lg:flex-1 relative items-center justify-center py-8">
                        <div className="relative w-full max-w-[500px] xl:max-w-[600px] aspect-square -mr-8 xl:-mr-12 -mt-12 lg:-mt-16">
                            <Image
                                src={IMAGES.valuesImage}
                                alt="AmalCare team and values"
                                width={700}
                                height={700}
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>

                    {/* Mobile image - shown only on small screens */}
                    <div className="lg:hidden w-full px-6 pb-6 flex justify-center">
                        <div className="relative w-64 sm:w-80 aspect-square">
                            <Image
                                src={IMAGES.valuesImage}
                                alt="AmalCare team and values"
                                width={400}
                                height={400}
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default ValuesSection
