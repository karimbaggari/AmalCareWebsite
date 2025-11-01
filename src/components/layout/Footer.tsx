"use client"

import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { Heart, Phone, MapPin, Mail, ArrowRight } from "lucide-react"

import { IMAGE_URLS } from "@/constants/urls"
import { useTranslations, useLocale } from 'next-intl'

export default function Footer() {
  const t = useTranslations('common')
  const tFooter = useTranslations('footer')
  const locale = useLocale()

  const quickLinks = [
    { href: `/${locale}`, label: t('home') },
    { href: `/${locale}/about`, label: t('about') },
    { href: `/${locale}/language-school`, label: t('languageSchool') },
    { href: `/${locale}/simulation-course`, label: t('simulationCourse') },
    { href: `/${locale}/faqs`, label: t('faqs') },
    { href: `/${locale}/contact`, label: t('contact') },
  ]

  return (
    <footer className="relative bg-gradient-to-br from-[#00a6a2] via-[#008581] to-[#006b68] text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-white rounded-full blur-3xl"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-20">
        {/* Top Section - Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12 mb-12">
          {/* Brand Section - Takes more space */}
          <div className="lg:col-span-5">
            {/* Logo - Clickable to Homepage */}
            <div className="mb-6">
              <Link 
                href={`/${locale}`}
                className="inline-block hover:opacity-80 transition-opacity duration-300 mb-4"
                aria-label={t('home')}
              >
                <Image
                  src={IMAGE_URLS.logo}
                  alt="AmalCare Logo"
                  width={180}
                  height={108}
                  className="h-auto w-36 sm:w-40 md:w-44 brightness-0 invert"
                  priority={false}
                />
              </Link>
              <div className="flex items-center gap-2 text-white/90 text-sm sm:text-base">
                <Heart className="w-4 h-4 fill-current" />
                <span className="font-medium">{t('careWithHeart')}</span>
              </div>
            </div>

            <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-6 max-w-md">
              {tFooter('description')}
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-semibold text-base sm:text-lg mb-4 md:mb-6">
              {tFooter('quickLinks')}
            </h3>
            <ul className="space-y-2 md:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center text-white/80 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information Section */}
          <div className="lg:col-span-4">
            <h3 className="text-white font-semibold text-base sm:text-lg mb-4 md:mb-6">
              {t('contact')}
            </h3>
            <div className="space-y-4 md:space-y-5">
              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-white/10 flex-shrink-0">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div>
                  <p className="text-white/70 text-xs sm:text-sm mb-1">{tFooter('phoneLabel')}</p>
                  <a 
                    href={`tel:${tFooter('phoneNumber').replace(/\s/g, '')}`}
                    className="text-white/90 hover:text-white transition-colors text-sm sm:text-base font-medium"
                  >
                    {tFooter('phoneNumber')}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-white/10 flex-shrink-0">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div>
                  <p className="text-white/70 text-xs sm:text-sm mb-1">{tFooter('emailLabel')}</p>
                  <a 
                    href={`mailto:${tFooter('emailAddress')}`}
                    className="text-white/90 hover:text-white transition-colors text-sm sm:text-base font-medium break-all"
                  >
                    {tFooter('emailAddress')}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-white/10 flex-shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div>
                  <p className="text-white/70 text-xs sm:text-sm mb-1">{tFooter('addressLabel')}</p>
                  <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                    {tFooter('addressLine1')}
                    <br />
                    {tFooter('addressLine2')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-white/70 text-xs sm:text-sm text-center sm:text-left">{tFooter('copyright')}</p>
            <p className="text-white/60 text-xs sm:text-sm italic text-center sm:text-right">{tFooter('tagline')}</p>
          </div>
        </div>
      </div>

      {/* Large decorative text element at bottom */}
      <div className="absolute bottom-0 right-0 text-[12rem] sm:text-[16rem] lg:text-[20rem] font-bold text-white/5 leading-none pointer-events-none select-none hidden md:block">
        AC
      </div>
    </footer>
  )
}
