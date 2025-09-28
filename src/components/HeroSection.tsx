import Image from "next/image";

export function HeroSection() {
    return (
      <section className="relative min-h-[800px] overflow-hidden" style={{ backgroundColor: "#00a6a2" }}>
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
        <div className="relative z-10 container mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left column - Heading */}
            <div className="space-y-6">
              <p className="text-white/90 text-sm font-medium tracking-wider uppercase">
                CARE CONNECTS. AMALCARE ACCOMPANIES.
              </p>
              <h1 className="text-white text-5xl lg:text-6xl font-light leading-tight">
                Welcome to
                <br />
                AmalCare
              </h1>
            </div>

            {/* Right column - Description */}
            <div className="space-y-6">
              <p className="text-white/95 text-lg leading-relaxed">
                We are <strong>AmalCare eG</strong> – a cooperative placement agency for nursing professionals from
                Morocco. What makes us special: We don&apos;t just place people – we prepare, support, and integrate them. From
                the first lesson in Rabat to their successful arrival in a German nursing facility.
              </p>
            </div>
          </div>
        </div>

        {/* Care Image - Below the text content */}
        <div className="relative z-10 flex items-center justify-center pb-16">
          <Image
            src="https://www.amal-care.de//fileadmin/_processed_/2/a/csm_AmalCare-28_c19a1c4d25.webp"
            alt="Healthcare professionals with elderly patient in wheelchair outdoors"
            width={1200}
            height={800}
            className="h-auto rounded-3xl shadow-2xl"
            priority
          />
        </div>
      </section>
    )
  }
  