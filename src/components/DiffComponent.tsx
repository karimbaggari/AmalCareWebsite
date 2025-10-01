import { ArrowRight } from "lucide-react"
import Image from "next/image"

const DiffComponent = () => {
    return (
        <div className="min-h-screen bg-white flex items-center justify-center p-4">
            <div className="relative w-full max-w-7xl h-[600px]">
                <div 
                    className="absolute inset-0 rounded-3xl"
                    style={{ 
                        backgroundColor: '#5A2574',
                        backgroundImage: "url('https://www.amal-care.de/_assets/6020ad64298e304d8b844c8dc69c472e/Images//Frontend/keyvisual.svg')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                ></div>

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
                            <button className="w-14 h-14 rounded-full bg-white hover:bg-gray-100 flex justify-center items-center text-gray-900 p-0 shadow-lg transition-colors">
                                <ArrowRight className="w-6 h-6" />
                            </button>
                        </div>
                    </div>

                    <div className="flex-1 relative h-full">
                        <div className="absolute -top-20 -right-8 w-[700px] h-[700px]">
                            <Image
                                src="https://www.amal-care.de/fileadmin/_processed_/b/d/csm_img-fairness-xxl-lg-1_9b644be1a5.webp"
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
    )
}

export default DiffComponent