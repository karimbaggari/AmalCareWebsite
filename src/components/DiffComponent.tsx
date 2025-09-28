import React from 'react'
import { ArrowRight } from "lucide-react"
import Image from "next/image"
// import { Button } from "@/components/ui/button"

const DiffComponent = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="relative w-full max-w-7xl h-[600px] rounded-3xl overflow-hidden bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                >

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-opacity-30"></div>
                </div>

                {/* Main content container */}
                <div className="relative z-10 h-full flex items-center">
                    {/* Left content */}
                    <div className="flex-1 pl-16 pr-8">
                        <div className="max-w-lg">
                            <p className="text-white text-sm font-medium tracking-wide uppercase mb-4">FAIRNESS UND QUALITÄT</p>
                            <h1 className="text-white text-4xl font-bold leading-tight mb-8">Was AmalCare besonders macht</h1>
                            <div className="space-y-6 text-white/90 text-base leading-relaxed">
                                <p>
                                    AmalCare ist keine Vermittlung „von der Stange. Wir sind ein Team aus Pflegeprofis,
                                    Bildungsexpert:innen und interkulturell geschulten Begleiter:innen. Wir kennen den Pflegealltag. Wir
                                    verstehen die Herausforderungen. Und wir wissen, wie Integration gelingt.
                                </p>
                                <p>Wir sind da. Vor der Einreise, beim Ankommen und darüber hinaus.</p>
                            </div>
                        </div>

                        {/* Arrow button */}
                        <div className="mt-12">
                            <button
                                className="w-14 h-14 rounded-full bg-white hover:bg-gray-100 flex justify-center items-center text-gray-900 p-0 shadow-lg"
                            >
                                <ArrowRight className="w-6 h-6" />
                            </button>
                        </div>
                    </div>

                    {/* Right side with positioned elements */}
                    <div className="flex-1 relative h-full flex justify-center items-center">
                        <div className="relative z-[9999] w-full h-full">
                            <Image
                                src="https://www.amal-care.de/fileadmin/_processed_/b/d/csm_img-fairness-xxl-lg-1_9b644be1a5.webp"
                                alt="Fairness and Quality"
                                width={1200}
                                height={800}
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DiffComponent
