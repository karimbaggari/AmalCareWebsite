"use client"

import { Phone, Mail, Clock, ArrowRight, Copy, Check, MapPin, Calendar } from "lucide-react"
import Image from "next/image"
import { useTranslations } from 'next-intl'
import { useState } from 'react'

export default function ContactPersonSection() {
  const t = useTranslations('contact')
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)

  const copyToClipboard = async (text: string, type: 'email' | 'phone') => {
    try {
      await navigator.clipboard.writeText(text)
      if (type === 'email') {
        setCopiedEmail(true)
        setTimeout(() => setCopiedEmail(false), 2000)
      } else {
        setCopiedPhone(true)
        setTimeout(() => setCopiedPhone(false), 2000)
      }
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  return (
    <section className="relative py-20 md:py-32 bg-white overflow-hidden">
      {/* Enhanced decorative background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f0f9f9] via-white to-[#e6f7f7]" />
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-[#00a6a2]/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-20 right-10 w-[300px] h-[300px] bg-[#7c3aed]/5 rounded-full blur-2xl" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left side - Contact Information */}
            <div className="space-y-8 order-2 lg:order-1">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="inline-block">
                    <span className="text-sm font-semibold text-[#7c3aed] bg-[#7c3aed]/10 px-4 py-2 rounded-full uppercase tracking-wider">
                      {t('contactPersonTitle')}
                    </span>
                  </div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    {t('contactPersonTitle')}
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {t('contactPersonDescription')}
                  </p>
                </div>

                <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-gray-100 space-y-6 hover:shadow-2xl transition-all duration-300">
                  <div className="text-center pb-6 border-b border-gray-100">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#00a6a2] to-[#008581] rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-white">
                        {t('contactPersonName').split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('companyName')}</h3>
                    <p className="text-lg text-[#00a6a2] font-semibold">{t('contactPersonName')}</p>
                    <p className="text-sm text-gray-500 mt-1">{t('contactPersonRole')}</p>
                  </div>

                  <div className="space-y-4">
                    <div className="group flex items-center justify-between p-4 bg-gray-50 rounded-2xl hover:bg-[#00a6a2]/5 transition-all duration-300">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-[#00a6a2]/10 rounded-xl flex items-center justify-center group-hover:bg-[#00a6a2] transition-colors duration-300">
                          <Phone className="w-5 h-5 text-[#00a6a2] group-hover:text-white transition-colors duration-300" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500 mb-1">{t('phoneLabel')}</p>
                          <a
                            href="tel:+4916294874044"
                            className="text-lg font-semibold text-gray-900 hover:text-[#00a6a2] transition-colors"
                          >
                            {t('phoneNumber')}
                          </a>
                        </div>
                      </div>
                      <button
                        onClick={() => copyToClipboard('+4916294874044', 'phone')}
                        className="p-2 rounded-lg bg-white hover:bg-gray-100 transition-colors duration-200"
                        title="Copy phone number"
                      >
                        {copiedPhone ? (
                          <Check className="w-4 h-4 text-green-600" />
                        ) : (
                          <Copy className="w-4 h-4 text-gray-400" />
                        )}
                      </button>
                    </div>

                    <div className="group flex items-center justify-between p-4 bg-gray-50 rounded-2xl hover:bg-[#00a6a2]/5 transition-all duration-300">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-[#00a6a2]/10 rounded-xl flex items-center justify-center group-hover:bg-[#00a6a2] transition-colors duration-300">
                          <Mail className="w-5 h-5 text-[#00a6a2] group-hover:text-white transition-colors duration-300" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500 mb-1">{t('emailLabel')}</p>
                          <a
                            href="mailto:rachid.amessegher@amal-care.de"
                            className="text-lg font-semibold text-gray-900 hover:text-[#00a6a2] transition-colors break-all"
                          >
                            {t('contactEmail')}
                          </a>
                        </div>
                      </div>
                      <button
                        onClick={() => copyToClipboard('rachid.amessegher@amal-care.de', 'email')}
                        className="p-2 rounded-lg bg-white hover:bg-gray-100 transition-colors duration-200"
                        title="Copy email address"
                      >
                        {copiedEmail ? (
                          <Check className="w-4 h-4 text-green-600" />
                        ) : (
                          <Copy className="w-4 h-4 text-gray-400" />
                        )}
                      </button>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
                      <div className="w-12 h-12 bg-[#00a6a2]/10 rounded-xl flex items-center justify-center">
                        <Clock className="w-5 h-5 text-[#00a6a2]" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500 mb-1">{t('availabilityLabel')}</p>
                        <p className="text-lg font-semibold text-gray-900">{t('availabilityHours')}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
                      <div className="w-12 h-12 bg-[#00a6a2]/10 rounded-xl flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-[#00a6a2]" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500 mb-1">{t('locationLabel')}</p>
                        <p className="text-lg font-semibold text-gray-900">{t('locationText')}</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <button className="flex items-center justify-center gap-2 h-12 bg-[#00a6a2] hover:bg-[#008581] text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] group">
                      <Phone className="w-4 h-4" />
                      {t('callButton')}
                    </button>
                    <button className="flex items-center justify-center gap-2 h-12 bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] group">
                      <Calendar className="w-4 h-4" />
                      {t('scheduleButton')}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Enhanced Image */}
            <div className="order-1 lg:order-2">
              <div className="relative group">
                {/* Enhanced decorative elements */}
                <div className="absolute -inset-6 bg-gradient-to-br from-[#00a6a2]/20 to-[#7c3aed]/20 rounded-[3rem] blur-2xl group-hover:blur-3xl transition-all duration-500" />
                <div className="absolute -inset-2 bg-gradient-to-br from-[#00a6a2]/10 to-[#7c3aed]/10 rounded-[2.5rem] blur-xl" />
                
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                  <Image
                    src="https://www.amal-care.de/fileadmin/_processed_/d/c/csm_AmalCare-60_90c893b951.webp"
                    alt="Rachid Amessegher - AmalCare eG"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Floating contact info */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#00a6a2] rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">RA</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{t('contactPersonName')}</p>
                        <p className="text-sm text-gray-600">{t('contactPersonRole')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
