import { Play } from "lucide-react"
import Image from "next/image"

export function VideoSection() {
    return (
        <section className="px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <p className="text-gray-600 text-lg mb-4">Gut vorbereitet nach Deutschland:</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-teal-500">Dein Weg mit Amal Care</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* German Video */}
                    <div className="relative group cursor-pointer">
                        <div className="relative overflow-hidden rounded-3xl bg-gray-100">
                            <Image
                                width={1200}
                                height={800}
                                src="https://www.amal-care.de/fileadmin/_processed_/7/0/csm_AmalCare-19_d532d38f2c.webp"
                                alt="Training presentation in German"
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
                    </div>

                    {/* UAE Video */}
                    <div className="relative group cursor-pointer">
                        <div className="relative overflow-hidden rounded-3xl bg-gray-100">
                            <Image
                                width={1200}
                                height={800}
                                src="https://www.amal-care.de/fileadmin/_processed_/7/0/csm_AmalCare-19_d532d38f2c.webp"
                                alt="Training presentation in Arabic"
                                className="w-full h-[400px] object-cover"
                            />

                            {/* Country Flag */}
                            <div className="absolute top-4 right-4 w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow-lg">
                                <div className="w-full h-full bg-gradient-to-b from-red-600 via-white to-black"></div>
                            </div>

                            {/* Play Button */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-20 h-20 bg-teal-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
                                    <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
