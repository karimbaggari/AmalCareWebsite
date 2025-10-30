'use client'

import { Play, X } from "lucide-react"
import Image from "next/image"
import { IMAGES } from "@/types"
import { useTranslations } from 'next-intl'
import { useState, useEffect } from 'react'

export function VideoSection() {
    const t = useTranslations('home')
    const tVideo = useTranslations('video')
    const [isVideoOpen, setIsVideoOpen] = useState(false)

    // Lock body scroll when modal is open
    useEffect(() => {
        if (isVideoOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => {
            document.body.style.overflow = ''
        }
    }, [isVideoOpen])

    // Close on ESC key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsVideoOpen(false)
        }
        window.addEventListener('keydown', handleEsc)
        return () => window.removeEventListener('keydown', handleEsc)
    }, [])

    return (
        <section className="bg-white">
            <div className="container mx-auto max-w-9xl px-6">
                <div className="mb-20">
                    <p className="text-gray-600 text-lg mb-4">{t('pathWithAmalCare.title')}</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-teal-500">{t('pathWithAmalCare.subtitle')}</h2>
                </div>

                <div className="flex justify-center">
                    {/* Video Thumbnail */}
                    <button 
                        onClick={() => setIsVideoOpen(true)}
                        className="relative group cursor-pointer max-w-3xl w-full"
                    >
                        <div className="relative overflow-hidden rounded-3xl bg-gray-100">
                            <Image
                                width={1200}
                                height={800}
                                src={IMAGES.ctaImage2}
                                alt={tVideo('trainingPresentationAlt')}
                                className="w-full h-[400px] object-cover"
                            />

                            {/* Country Flag */}
                            <div className="absolute top-4 right-4 w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow-lg">
                                <div className="w-full h-full bg-gradient-to-b from-black via-red-600 to-yellow-400"></div>
                            </div>

                            {/* Play Button */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-20 h-20 bg-teal-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
                                    <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                                </div>
                            </div>
                        </div>
                    </button>
                </div>
            </div>

            {/* Video Modal */}
            {isVideoOpen && (
                <div className="fixed inset-0 z-[99999] flex items-center justify-center">
                    {/* Dark Backdrop */}
                    <div 
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        onClick={() => setIsVideoOpen(false)}
                    />
                    
                    {/* Modal Content */}
                    <div className="relative z-10 w-full max-w-5xl mx-4 md:mx-8">
                        {/* Close Button */}
                        <button
                            onClick={() => setIsVideoOpen(false)}
                            className="absolute -top-12 right-0 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                            aria-label={tVideo('closeVideoAriaLabel')}
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Video Container */}
                        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                            <iframe
                                className="absolute inset-0 w-full h-full rounded-xl shadow-2xl"
                                src="https://www.youtube.com/embed/w518NqdTnQU?autoplay=1"
                                title={tVideo('youtubeVideoTitle')}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}
