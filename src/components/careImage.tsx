import Image from "next/image"
import { IMAGE_URLS } from "@/constants/urls"

export function CareImage() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="relative">
        <Image
          src={IMAGE_URLS.careTeamImage}
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
