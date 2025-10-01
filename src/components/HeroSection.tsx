import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative h-[1050px] overflow-visible" style={{ backgroundColor: "#00a6a2" }}>
      {/* Background keyvisual SVG */}
      <div className="absolute inset-0 opacity-100">
        <div className="absolute right-0 top-0 w-1/2 h-full">
          <Image
            src="https://www.amal-care.de/_assets/6020ad64298e304d8b844c8dc69c472e/Images//Frontend/keyvisual.svg"
            alt="AmalCare Keyvisual"
            width={700}
            height={600}
            className="h-full object-cover opacity-5"
            style={{ opacity: 1 }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 pt-16 pb-8">
        <div className="mx-auto h-[800px] w-[1400px]">
          {/* Tagline */}
          <p className="text-white text-xs lg:text-sm font-medium tracking-widest uppercase mb-8">
            PFLEGE VERBINDET. AMALCARE BEGLEITET.
          </p>

          {/* Two column layout for heading and description */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Left column - Heading */}
            <div>
              <h1 className="text-white text-4xl lg:text-6xl font-bold leading-tight">
                Willkommen bei
                <br />
                AmalCare
              </h1>
            </div>

            {/* Right column - Description */}
            <div>
              <p className="text-white text-base lg:text-lg leading-relaxed">
                Wir sind <strong>AmalCare eG</strong> – eine genossenschaftlich organisierte Vermittlungsagentur für
                Pflegefachkräfte aus Marokko. Was uns besonders macht:{" "}
                <strong>Wir vermitteln nicht nur – wir bereiten vor, begleiten und integrieren.</strong> Von der ersten{" "}
                <strong>Unterrichtsstunde in Rabat bis zur erfolgreichen Ankunft</strong> in einer deutschen
                Pflegeeinrichtung.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Image positioned to overlap background */}
      <div className="absolute left-0 right-0 px-6 lg:px-12 z-20 top-[20em]">
        <div className="container mx-auto h-[700px] w-[1400px]">
          <Image
            src="https://www.amal-care.de//fileadmin/_processed_/2/a/csm_AmalCare-28_c19a1c4d25.webp"
            alt="Healthcare professionals with elderly patient in wheelchair outdoors"
            width={1200}
            height={600}
            className="w-full rounded-3xl shadow-2xl h-[800px]"
            priority
          />
        </div>
      </div>
    </section>
  )
}
