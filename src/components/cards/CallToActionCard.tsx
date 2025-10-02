"use client";

import { ArrowRight } from "lucide-react"
import { CallToActionCardProps } from "@/types"

export function CallToActionCard({
    subtitle,
    title,
    backgroundImage,
    backgroundColor,
    href = "#"
}: CallToActionCardProps) {
    return (
        <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl h-[600px] w-[685px] flex justify-center items-center">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundColor: '#f0f0f0' // Fallback color
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-opacity-20"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 p-6 h-full flex items-end w-[90%]">
                {/* Teal Content Card */}
                <div className={`${backgroundColor} rounded-[2.5rem] p-8 text-white w-full h-[220px] flex items-center`}>
                    {/* Left side - Text content */}
                    <div className="flex-1">
                        {/* Subtitle */}
                        <p className="text-sm font-medium mb-3 tracking-wide uppercase opacity-90">
                            {subtitle}
                        </p>

                        {/* Main Heading */}
                        <h1 className="text-2xl font-bold leading-tight" style={{fontSize: '2rem'}}>
                            {title}
                        </h1>
                    </div>

                    {/* Right side - CTA Button */}
                    <div className="flex items-center justify-center ml-6">
                        <a
                            href={href}
                            className="bg-white text-[#00a6a2] rounded-full p-3 hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg group"
                        >
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
