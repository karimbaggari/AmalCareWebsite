import React from 'react'
import { ArrowRight } from "lucide-react"
import Image from "next/image"

const LastComp = () => {
    return (
        <div className="w-full bg-white flex items-center justify-center py-16">
            {/* Main content container */}
            <div className="w-full flex items-center gap-x-7">
                {/* Left side with healthcare worker - 60% width */}
                <div className="w-3/5 relative flex items-center justify-center">
                    <div className="relative">
                        <Image 
                            width={1200} 
                            height={800} 
                            src="https://www.amal-care.de/fileadmin/_processed_/6/3/csm_amal-teaser-vermittlung_7933672b40.webp" 
                            alt="Healthcare worker in blue scrubs" 
                            className="w-full h-auto object-cover" 
                        />

                        {/* Medical icons scattered around */}
                        {/* Heart icon - top left */}
                        <div className="absolute">
                            <svg
                                className="w-12 h-12 text-purple-600"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                            </svg>
                        </div>

                        {/* Syringe icon - left middle */}
                        <div className="absolute top-32 left-8">
                            <svg
                                className="w-10 h-10 text-purple-600"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path d="m18 2 4 4" />
                                <path d="m17 7 3-3" />
                                <path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5" />
                                <path d="m9 11 4 4" />
                                <path d="m5 19-3 3" />
                                <path d="m14 4 6 6" />
                            </svg>
                        </div>

                        {/* Pills icon - bottom left */}
                        <div className="absolute bottom-32 left-16">
                            <svg
                                className="w-10 h-10 text-purple-600"
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

                        {/* Bandage icon - bottom left corner */}
                        <div className="absolute bottom-16 left-8">
                            <svg
                                className="w-12 h-12 text-purple-600"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path d="M12 2v4" />
                                <path d="m15.2 7.2 2.8-2.8" />
                                <path d="M20 12h4" />
                                <path d="m15.2 16.8 2.8 2.8" />
                                <path d="M12 20v4" />
                                <path d="m8.8 16.8-2.8 2.8" />
                                <path d="M4 12H0" />
                                <path d="m8.8 7.2-2.8-2.8" />
                            </svg>
                        </div>

                        {/* Certificate icon - bottom center */}
                        <div className="absolute bottom-12 left-32">
                            <svg
                                className="w-10 h-10 text-purple-600"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path d="M15 3v4a2 2 0 0 0 2 2h4" />
                                <path d="M18 18v-7h-3a2 2 0 0 1-2-2V5H9a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2Z" />
                                <path d="M8 12h8" />
                                <path d="M8 16h6" />
                            </svg>
                        </div>

                        {/* Stethoscope icon - top right */}
                        <div className="absolute top-20 right-16">
                            <svg
                                className="w-14 h-14 text-purple-600"
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

                        {/* Pill icon - right middle */}
                        <div className="absolute top-40 right-12">
                            <svg
                                className="w-8 h-8 text-purple-600"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path d="M10.5 20.5 10 21a2 2 0 0 1-2.83 0L4 17.83a2 2 0 0 1 0-2.83l.5-.5" />
                                <path d="M8.5 8.5 12 5a2 2 0 0 1 2.83 0L18 8.17a2 2 0 0 1 0 2.83L14.5 14.5" />
                            </svg>
                        </div>

                        {/* Graduation cap icon - right */}
                        <div className="absolute top-56 right-8">
                            <svg
                                className="w-12 h-12 text-purple-600"
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
                        <div className="absolute bottom-24 right-12">
                            <svg
                                className="w-12 h-12 text-purple-600"
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

                        {/* Lungs icon - bottom right corner */}
                        <div className="absolute bottom-40 right-4">
                            <svg
                                className="w-10 h-10 text-purple-600"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path d="M9 12V6a3 3 0 1 1 6 0v6" />
                                <path d="M12 12v6" />
                                <path d="M5 20a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h2" />
                                <path d="M19 20a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h-2" />
                            </svg>
                        </div>

                        {/* Chain link icon - bottom center right */}
                        <div className="absolute bottom-16 right-20">
                            <svg
                                className="w-8 h-8 text-purple-600"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Right content - 40% width */}
                <div className="w-2/5">
                    <div className="max-w-lg">
                        <p className="text-gray-500 text-sm font-medium tracking-wide uppercase mb-4">ABLAUF DER VERMITTLUNG</p>
                        <h1 className="text-teal-600 text-4xl font-bold leading-tight mb-8">
                            Wir begleiten – vor, während und nach der Vermittlung
                        </h1>
                        <div className="space-y-6 text-gray-700 text-base leading-relaxed">
                            <p>
                                AmalCare übernimmt den gesamten Vermittlungsprozess: von der Auswahl geeigneter Kandidat:innen über
                                Sprach- und Fachvorbereitung, Anerkennung und Visa bis hin zur Ankunft in Deutschland.
                            </p>
                            <p>
                                Auch nach dem Start bleiben wir verlässlicher Ansprechpartner – für Pflegefachkräfte und
                                Einrichtungen.
                            </p>
                        </div>
                    </div>

                    {/* Arrow button */}
                    <div className="mt-12">
                        <button
                            className="w-14 h-14 rounded-full bg-teal-500 hover:bg-teal-600 flex justify-center items-center text-white p-0 shadow-lg"
                        >
                            <ArrowRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LastComp
