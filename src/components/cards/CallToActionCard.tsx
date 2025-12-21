"use client";

import { ArrowRight } from "lucide-react"
import { CallToActionCardProps } from "@/types"
// import { useTranslations } from 'next-intl' // Unused for now

export function CallToActionCard({
    subtitle,
    title,
    backgroundImage,
    backgroundColor,
    href = "#"
}: CallToActionCardProps) {
    // const t = useTranslations('home') // Unused for now
    return (
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] shadow-[0_25px_100px_-20px_rgba(0,0,0,0.35)] h-[400px] sm:h-[480px] md:h-[560px] w-full flex justify-center items-center group">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-100 transition-transform duration-700 ease-out group-hover:scale-105"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundColor: '#f0f0f0' // Fallback color
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 p-4 sm:p-6 md:p-8 h-full flex items-end w-[92%]">
                {/* Teal Content Card */}
                <div className={`${backgroundColor} rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] px-5 sm:px-6 md:px-8 py-5 sm:py-6 md:py-7 text-white w-full min-h-[160px] sm:min-h-[180px] md:min-h-[200px] flex items-center justify-between gap-4 sm:gap-5 md:gap-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] backdrop-blur supports-[backdrop-filter]:bg-opacity-95`}>
                    {/* Left side - Text content */}
                    <div className="flex-1 min-w-0">
                        {/* Subtitle */}
                        <p className="text-[10px] sm:text-xs md:text-sm font-semibold mb-2 sm:mb-2.5 md:mb-3 tracking-[0.15em] sm:tracking-[0.18em] uppercase opacity-95">
                            {subtitle}
                        </p>

                        {/* Main Heading */}
                        <h1 className="text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold tracking-tight leading-tight">
                            {title}
                        </h1>
                    </div>

                    {/* Right side - CTA Button */}
                    <div className="flex items-center justify-center ml-2 sm:ml-4 md:ml-6 shrink-0">
                        <a
                            href={href}
                            className="bg-white text-[#00a6a2] rounded-full p-2.5 sm:p-3 md:p-3.5 hover:bg-gray-50 transition-transform duration-300 hover:scale-110 shadow-xl group"
                        >
                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform duration-300" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
