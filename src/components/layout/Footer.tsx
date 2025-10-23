"use client"

import type React from "react"
import Link from "next/link"
import { Mail, MapPin, Phone, ArrowRight, Heart } from "lucide-react"
import { useState } from "react"
import { MAIN_NAVIGATION, LEGAL_LINKS, SOCIAL_MEDIA_LINKS } from "@/constants/navigation"
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
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-14 md:gap-16 lg:gap-24 mb-16 sm:mb-18 md:mb-20">
          {/* Left Column - Brand & Newsletter */}
          <div>
            {/* Large decorative logo wordmark */}
            <div className="mb-8 sm:mb-10 md:mb-12">
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-none tracking-tight mb-4 sm:mb-5 md:mb-6">
                <span className="block text-white/95">Amal</span>
                <span className="block text-white/80 -mt-2 sm:-mt-3 md:-mt-4">Care</span>
              </h2>
              <div className="flex items-center gap-2 text-white/90 text-base sm:text-lg">
                <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                <span className="font-medium">Care with Heart</span>
              </div>
            </div>

            <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 md:mb-12 max-w-lg">
              {t('welcome')} - Your cooperative placement agency for qualified nursing professionals from Morocco. We connect
              competence with humanity.
            </p>

            {/* Newsletter Signup */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-7 md:p-8 border border-white/20">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Stay Informed</h3>
              <p className="text-white/80 text-sm sm:text-base mb-5 sm:mb-6">Get updates on nursing professionals and industry news.</p>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-1 px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl bg-white/20 border border-white/30 text-white text-sm sm:text-base placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/25 transition-all"
                  required
                />
                <button
                  type="submit"
                  className="px-5 sm:px-6 py-3 sm:py-3.5 bg-white text-[#00a6a2] rounded-xl font-semibold hover:bg-white/90 transition-all hover:scale-105 flex items-center justify-center gap-2 group text-sm sm:text-base"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>

          {/* Right Column - Navigation & Contact */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-12">
            {/* Navigation Links */}
            <div>
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider mb-5 sm:mb-6 text-white/70">Navigation</h3>
              <nav className="space-y-3 sm:space-y-4">
                {MAIN_NAVIGATION.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-white/90 hover:text-white text-base sm:text-lg hover:translate-x-2 transition-all group flex items-center gap-2"
                  >
                    <span className="w-0 group-hover:w-5 sm:group-hover:w-6 h-0.5 bg-white transition-all duration-300"></span>
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact & Legal */}
            <div>
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider mb-5 sm:mb-6 text-white/70">Kontakt</h3>
              <div className="space-y-4 sm:space-y-5 mb-8 sm:mb-10">
                <a
                  href="mailto:info@amal-care.de"
                  className="flex items-start gap-2.5 sm:gap-3 text-white/90 hover:text-white transition-colors group"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm sm:text-base">info@amal-care.de</span>
                </a>
                <a
                  href="tel:+49123456789"
                  className="flex items-start gap-2.5 sm:gap-3 text-white/90 hover:text-white transition-colors group"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm sm:text-base">+49 (0) 123 456789</span>
                </a>
                <div className="flex items-start gap-2.5 sm:gap-3 text-white/90">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mt-1 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Deutschland</span>
                </div>
              </div>

              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider mb-5 sm:mb-6 text-white/70">Rechtliches</h3>
              <nav className="space-y-2.5 sm:space-y-3 mb-8 sm:mb-10">
                {LEGAL_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-white/80 hover:text-white text-xs sm:text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Social Media */}
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider mb-5 sm:mb-6 text-white/70">Folgen Sie uns</h3>
              <div className="flex gap-2.5 sm:gap-3">
                {SOCIAL_MEDIA_LINKS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-sm flex items-center justify-center text-white transition-all hover:scale-110 border border-white/20"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 sm:pt-10 md:pt-12 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-5 md:gap-6 text-center md:text-left">
            <p className="text-white/70 text-xs sm:text-sm">© 2024 AmalCare eG. Alle Rechte vorbehalten.</p>
            <p className="text-white/60 text-xs sm:text-sm italic">Dedicated to Compassion, Quality & Growth.</p>
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
