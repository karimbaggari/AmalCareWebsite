import Image from "next/image"

interface GenericHeroSectionProps {
  backgroundColor?: string
  backgroundImage?: string
  backgroundImageOpacity?: number
  overlayImage?: string
  overlayImageAlt?: string
  overlayImagePosition?: 'top' | 'center' | 'bottom'
  height?: string
  children: React.ReactNode
}

export function GenericHeroSection({
  backgroundColor = "#00a6a2",
  backgroundImage,
  backgroundImageOpacity = 0.05,
  overlayImage,
  overlayImageAlt = "Background image",
  overlayImagePosition = 'center',
  height = "h-[1050px]",
  children
}: GenericHeroSectionProps) {
  return (
    <section 
      className={`relative ${height} overflow-visible`} 
      style={{ backgroundColor }}
    >
      {/* Background image */}
      {backgroundImage && (
        <div className="absolute inset-0 opacity-100">
          <div className="absolute right-0 top-0 w-1/2 h-full">
            <Image
              src={backgroundImage}
              alt={overlayImageAlt}
              width={700}
              height={600}
              className="h-full object-cover"
              style={{ opacity: backgroundImageOpacity }}
            />
          </div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 pt-16 pb-8">
        <div className="mx-auto h-[800px] w-[1400px]">
          {children}
        </div>
      </div>

      {/* Overlay image positioned to overlap background and extend beyond */}
      {overlayImage && (
        <div className={`absolute left-0 right-0 px-6 lg:px-12 z-20 ${
          overlayImagePosition === 'top' ? 'top-[20em]' : 
          overlayImagePosition === 'center' ? 'top-1/2 -translate-y-1/2' : 
          'bottom-0'
        }`}>
          <div className="container mx-auto h-[700px] w-[1400px]">
            <Image
              src={overlayImage}
              alt={overlayImageAlt}
              width={1200}
              height={600}
              className="w-full rounded-3xl shadow-2xl h-[800px]"
              priority
            />
          </div>
        </div>
      )}
    </section>
  )
}

// Pre-built hero section variants
export function HeroWithContent({
  tagline,
  title,
  description,
  backgroundColor = "#00a6a2",
  backgroundImage,
  overlayImage,
  overlayImageAlt = "Hero image"
}: {
  tagline?: string
  title: string
  description: string
  backgroundColor?: string
  backgroundImage?: string
  overlayImage?: string
  overlayImageAlt?: string
}) {
  return (
    <GenericHeroSection
      backgroundColor={backgroundColor}
      backgroundImage={backgroundImage}
      overlayImage={overlayImage}
      overlayImageAlt={overlayImageAlt}
    >
      {/* Tagline */}
      {tagline && (
        <p className="text-white text-xs lg:text-sm font-medium tracking-widest uppercase mb-8">
          {tagline}
        </p>
      )}

      {/* Two column layout for heading and description */}
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
        {/* Left column - Heading */}
        <div>
          <h1 className="text-white text-4xl lg:text-6xl font-bold leading-tight">
            {title}
          </h1>
        </div>

        {/* Right column - Description */}
        <div>
          <p className="text-white text-base lg:text-lg leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </GenericHeroSection>
  )
}

// Simple hero with just image
export function SimpleImageHero({
  image,
  imageAlt = "Hero image",
  backgroundColor = "#00a6a2",
  height = "h-[600px]",
  imageWidth = 900,
  imageHeight = 600
}: {
  image: string
  imageAlt?: string
  backgroundColor?: string
  height?: string
  imageWidth?: number
  imageHeight?: number
}) {
  return (
    <section 
      className={`relative ${height} overflow-visible`} 
      style={{ backgroundColor }}
    >
      {/* Image positioned to extend beyond background */}
      <div className="absolute left-0 right-0 top-[4rem] flex justify-center z-20">
        <div 
          className="rounded-3xl shadow-2xl overflow-hidden"
          style={{ width: `${imageWidth}px`, height: `${imageHeight}px` }}
        >
          <Image
            src={image}
            alt={imageAlt}
            width={imageWidth}
            height={imageHeight}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}
