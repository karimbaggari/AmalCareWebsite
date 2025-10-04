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
      <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-20">
          {/* Left Column - Brand & Newsletter */}
          <div>
            {/* Large decorative logo wordmark */}
            <div className="mb-12">
              <h2 className="text-7xl lg:text-8xl xl:text-9xl font-bold leading-none tracking-tight mb-6">
                <span className="block text-white/95">Amal</span>
                <span className="block text-white/80 -mt-4">Care</span>
              </h2>
              <div className="flex items-center gap-2 text-white/90 text-lg">
                <Heart className="w-5 h-5 fill-current" />
                <span className="font-medium">Care with Heart</span>
              </div>
            </div>

            <p className="text-white/90 text-lg leading-relaxed mb-12 max-w-lg">
              {t('welcome')} - Your cooperative placement agency for qualified nursing professionals from Morocco. We connect
              competence with humanity.
            </p>

            {/* Newsletter Signup */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-3">Stay Informed</h3>
              <p className="text-white/80 mb-6">Get updates on nursing professionals and industry news.</p>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-1 px-5 py-3.5 rounded-xl bg-white/20 border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/25 transition-all"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3.5 bg-white text-[#00a6a2] rounded-xl font-semibold hover:bg-white/90 transition-all hover:scale-105 flex items-center gap-2 group"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>

          {/* Right Column - Navigation & Contact */}
          <div className="grid sm:grid-cols-2 gap-12">
            {/* Navigation Links */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-white/70">Navigation</h3>
              <nav className="space-y-4">
                {MAIN_NAVIGATION.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-white/90 hover:text-white text-lg hover:translate-x-2 transition-all group flex items-center gap-2"
                  >
                    <span className="w-0 group-hover:w-6 h-0.5 bg-white transition-all duration-300"></span>
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact & Legal */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-white/70">Kontakt</h3>
              <div className="space-y-5 mb-10">
                <a
                  href="mailto:info@amal-care.de"
                  className="flex items-start gap-3 text-white/90 hover:text-white transition-colors group"
                >
                  <Mail className="w-5 h-5 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-base">info@amal-care.de</span>
                </a>
                <a
                  href="tel:+49123456789"
                  className="flex items-start gap-3 text-white/90 hover:text-white transition-colors group"
                >
                  <Phone className="w-5 h-5 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-base">+49 (0) 123 456789</span>
                </a>
                <div className="flex items-start gap-3 text-white/90">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                  <span className="text-base">Deutschland</span>
                </div>
              </div>

              <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-white/70">Rechtliches</h3>
              <nav className="space-y-3 mb-10">
                {LEGAL_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-white/80 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Social Media */}
              <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-white/70">Folgen Sie uns</h3>
              <div className="flex gap-3">
                {SOCIAL_MEDIA_LINKS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-sm flex items-center justify-center text-white transition-all hover:scale-110 border border-white/20"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-white/70 text-sm">© {new Date().getFullYear()} AmalCare eG. Alle Rechte vorbehalten.</p>
            <p className="text-white/60 text-sm italic">Dedicated to Compassion, Quality & Growth.</p>
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
