"use client";

import { ArrowRight } from "lucide-react"

interface CallToActionProps {
    subtitle: string;
    title: string;
    backgroundImage: string;
    backgroundColor: string;
}

export function CallToAction({
    subtitle,
    title,
    backgroundImage,
    backgroundColor,
}: CallToActionProps) {
    return (
        <div className="relative overflow-hidden rounded-3xl shadow-2xl h-[600px] w-[636px] flex justify-center items-center">
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
            <div className="relative z-10 p-6 h-full flex items-end">
                {/* Teal Content Card */}
                <div className={`${backgroundColor} rounded-2xl p-5 text-white w-full`}>
                    {/* Subtitle */}
                    <p className="text-xs font-medium mb-2 tracking-wide uppercase opacity-90">
                        {subtitle}
                    </p>

                    {/* Main Heading */}
                    <h1 className="text-lg font-bold leading-tight mb-4">
                        {title}
                    </h1>

                    {/* CTA Button */}
                    <div className="flex justify-end">
                        <button
                            className="bg-white text-[#00a6a2] rounded-full p-2.5 hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg group"
                        >
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
