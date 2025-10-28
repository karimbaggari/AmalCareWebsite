"use client"

import type React from "react"
import Link from "next/link"
import { Mail, MapPin, Phone, ArrowRight, Heart } from "lucide-react"
import { useState } from "react"
import { MAIN_NAVIGATION, LEGAL_LINKS, SOCIAL_MEDIA_LINKS } from "@/constants/navigation"
import { CONTACT_URLS } from "@/constants/urls"
// import { COLORS } from "@/types" // Unused for now
import { useTranslations } from 'next-intl'

export default function Footer() {
  const [email, setEmail] = useState("")
  const t = useTranslations('common')
  // const tNav = useTranslations('navigation') // Unused for now

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Newsletter signup:", email)
    setEmail("")
  }

  return (
    <footer className="relative bg-gradient-to-br from-[#00a6a2] via-[#008581] to-[#006b68] text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-white rounded-full blur-3xl"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-12">
          {/* Left Column - Brand */}
          <div>
            {/* Large decorative logo wordmark */}
            <div className="mb-8">
              <h2 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-none tracking-tight mb-4">
                <span className="block text-white/95">Amal</span>
                <span className="block text-white/80 -mt-3">Care</span>
              </h2>
              <div className="flex items-center gap-2 text-white/90 text-base">
                <Heart className="w-4 h-4 fill-current" />
                <span className="font-medium">Care with Heart</span>
              </div>
            </div>

            <p className="text-white/90 text-base leading-relaxed mb-8 max-w-lg">
              {t('welcome')} - Your cooperative placement agency for qualified nursing professionals from Morocco. We connect
              competence with humanity.
            </p>
          </div>

          {/* Right Column - Newsletter */}
          <div className="flex items-center">
            {/* Newsletter Signup */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 w-full">
              <h3 className="text-xl font-bold mb-2">Stay Informed</h3>
              <p className="text-white/80 mb-4 text-sm">Get updates on nursing professionals and industry news.</p>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-1 px-4 py-2.5 rounded-lg bg-white/20 border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/25 transition-all text-sm"
                  required
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-white text-[#00a6a2] rounded-lg font-semibold hover:bg-white/90 transition-all hover:scale-105 flex items-center gap-2 group text-sm"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-xs">© 2024 AmalCare eG. Alle Rechte vorbehalten.</p>
            <p className="text-white/60 text-xs italic">Dedicated to Compassion, Quality & Growth.</p>
          </div>
        </div>
      </div>

      {/* Large decorative text element at bottom */}
      <div className="absolute bottom-0 right-0 text-[20rem] font-bold text-white/5 leading-none pointer-events-none select-none hidden xl:block">
        AC
      </div>
    </footer>
  )
}
