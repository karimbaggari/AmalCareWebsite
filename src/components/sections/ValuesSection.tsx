import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { IMAGES } from "@/types"
import { useTranslations, useLocale } from 'next-intl'

const ValuesSection = () => {
    const t = useTranslations('home')
    const locale = useLocale()
    return (
        <div className="bg-white">
            <div className="container mx-auto max-w-9xl px-6 py-12 md:py-16">
                {/* Mobile: Stack vertically, Desktop: Side-by-side with overflow image */}
                <div className="relative w-full rounded-2xl md:rounded-3xl overflow-visible" style={{minHeight: '400px'}}>
                    <div 
                        className="absolute inset-0 rounded-2xl md:rounded-3xl"
                        style={{ 
                            backgroundColor: '#5A2574',
                            backgroundImage: `url(${IMAGES.keyvisual})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }}
                    ></div>

                    {/* Main content container */}
                    <div className="relative z-10 h-full flex flex-col md:flex-row items-center md:items-stretch">
                        {/* Left content */}
                        <div className="w-full md:flex-1 px-6 md:pl-8 lg:pl-16 md:pr-4 lg:pr-8 py-8 md:py-12 lg:py-16">
                            <div className="max-w-lg">
                                <p className="text-white text-xs sm:text-sm font-medium tracking-wide uppercase mb-3 sm:mb-4">{t('whatMakesUsSpecial.subtitle')}</p>
                                <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-6 sm:mb-8">{t('whatMakesUsSpecial.title')}</h2>
                                <div className="space-y-4 sm:space-y-6 text-white/90 text-sm sm:text-base leading-relaxed">
                                    <p>
                                        {t('whatMakesUsSpecial.description')}
                                    </p>
                                    <p>{t('whatMakesUsSpecial.commitment')}</p>
                                </div>
                            </div>

                            <div className="mt-8 sm:mt-12">
                                <Link href={`/${locale}/about`}>
                                    <button 
                                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white hover:bg-gray-100 flex justify-center items-center text-gray-900 p-0 shadow-lg transition-colors"
                                        aria-label="Learn more about AmalCare"
                                    >
                                        <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                                    </button>
                                </Link>
                            </div>
                        </div>

                        {/* Right side - Image (hidden on mobile, visible on larger screens) */}
                        <div className="hidden md:block md:flex-1 relative" style={{minHeight: '500px'}}>
                            <div className="absolute -top-12 lg:-top-20 -right-4 lg:-right-8 w-[400px] lg:w-[600px] xl:w-[700px] h-[400px] lg:h-[600px] xl:h-[700px] z-20">
                                <Image
                                    src={IMAGES.valuesImage}
                                    alt="AmalCare team and values"
                                    width={700}
                                    height={700}
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
