import { Play } from "lucide-react"
import Image from "next/image"
import { IMAGES } from "@/types"
import { useTranslations } from 'next-intl'

export function VideoSection() {
    const t = useTranslations('home')
    return (
        <section className="bg-white">
            <div className="container mx-auto max-w-9xl px-4 sm:px-6">
                <div className="mb-12 sm:mb-16 md:mb-20">
                    <p className="text-gray-600 text-base sm:text-lg mb-3 sm:mb-4">{t('pathWithAmalCare.title')}</p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-teal-500">{t('pathWithAmalCare.subtitle')}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    {/* German Video */}
                    <div className="relative group cursor-pointer">
                        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gray-100">
                            <Image
                                width={1200}
                                height={800}
                                src={IMAGES.ctaImage2}
                                alt="Training presentation in German"
                                className="w-full h-[280px] sm:h-[350px] md:h-[400px] object-cover"
                            />

                            {/* Country Flag */}
                            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden border-2 border-white shadow-lg">
                                <div className="w-full h-full bg-gradient-to-b from-black via-red-600 to-yellow-400"></div>
                            </div>

                            {/* Play Button */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-teal-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
                                    <Play className="w-7 h-7 sm:w-8 sm:h-8 text-white ml-1" fill="currentColor" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* UAE Video */}
                    <div className="relative group cursor-pointer">
                        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gray-100">
                            <Image
                                width={1200}
                                height={800}
                                src={IMAGES.ctaImage2}
                                alt="Training presentation in Arabic"
                                className="w-full h-[280px] sm:h-[350px] md:h-[400px] object-cover"
                            />

                            {/* Country Flag */}
                            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden border-2 border-white shadow-lg">
                                <div className="w-full h-full bg-gradient-to-b from-red-600 via-white to-black"></div>
                            </div>

                            {/* Play Button */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-teal-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
                                    <Play className="w-7 h-7 sm:w-8 sm:h-8 text-white ml-1" fill="currentColor" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
