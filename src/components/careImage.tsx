import Image from "next/image"

export function CareImage() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="relative">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-09-28%20at%2022.02.21.png-nIjW3pbVvByyV5Xm1m4nikxFYToGb1.jpeg"
          alt="Healthcare professionals with elderly patient in wheelchair outdoors"
          width={1200}
          height={800}
          className="w-full h-auto rounded-3xl shadow-2xl"
          priority
        />
      </div>
    </section>
  )
}
