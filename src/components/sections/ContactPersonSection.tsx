"use client"

import { Phone, Mail, Clock, Copy, Check, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { IMAGE_URLS } from "@/constants/urls"

export default function ContactPersonSection() {
  const t = useTranslations('contact')
  const [copiedSchoolEmail, setCopiedSchoolEmail] = useState(false)
  const [copiedSchoolPhone, setCopiedSchoolPhone] = useState(false)

  const copyToClipboard = async (text: string, type: 'email' | 'phone') => {
    try {
      await navigator.clipboard.writeText(text)
      if (type === 'email') {
        setCopiedSchoolEmail(true)
        setTimeout(() => setCopiedSchoolEmail(false), 2000)
      } else {
        setCopiedSchoolPhone(true)
        setTimeout(() => setCopiedSchoolPhone(false), 2000)
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
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
            {/* Left side - School Administration Contact Information */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="inline-block">
                    <span className="text-sm font-semibold text-[#00a6a2] bg-[#00a6a2]/10 px-4 py-2 rounded-full uppercase tracking-wider">
                      Language School
                    </span>
                  </div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    School in Rabat
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Contact our language school administration in Rabat, Morocco for more information about our programs.
                  </p>
                </div>

                <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-gray-100 space-y-6 hover:shadow-2xl transition-all duration-300">
                  <div className="text-center pb-6 border-b border-gray-100">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#00a6a2] to-[#008581] rounded-full flex items-center justify-center mx-auto mb-4">
                      <MapPin className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">AmalCare Language School</h3>
                    <p className="text-lg text-[#00a6a2] font-semibold">Rabat, Morocco</p>
                  </div>

                  <div className="space-y-4">
                    <div className="group flex items-center justify-between p-4 bg-gray-50 rounded-2xl hover:bg-[#00a6a2]/5 transition-all duration-300">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-[#00a6a2]/10 rounded-xl flex items-center justify-center group-hover:bg-[#00a6a2] transition-colors duration-300">
                          <Phone className="w-5 h-5 text-[#00a6a2] group-hover:text-white transition-colors duration-300" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500 mb-1">Phone</p>
                          <a
                            href="tel:+212623055683"
                            className="text-lg font-semibold text-gray-900 hover:text-[#00a6a2] transition-colors"
                          >
                            +212 623‑055683
                          </a>
                        </div>
                      </div>
                      <button
                        onClick={() => copyToClipboard('+212623055683', 'phone')}
                        className="p-2 rounded-lg bg-white hover:bg-gray-100 transition-colors duration-200"
                        title="Copy phone number"
                      >
                        {copiedSchoolPhone ? (
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
                          <p className="text-sm font-medium text-gray-500 mb-1">Email</p>
                          <a
                            href="mailto:info@amal-care.de"
                            className="text-lg font-semibold text-gray-900 hover:text-[#00a6a2] transition-colors break-all"
                          >
                            info@amal-care.de
                          </a>
                        </div>
                      </div>
                      <button
                        onClick={() => copyToClipboard('info@amal-care.de', 'email')}
                        className="p-2 rounded-lg bg-white hover:bg-gray-100 transition-colors duration-200"
                        title="Copy email address"
                      >
                        {copiedSchoolEmail ? (
                          <Check className="w-4 h-4 text-green-600" />
                        ) : (
                          <Copy className="w-4 h-4 text-gray-400" />
                        )}
                      </button>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl">
                      <div className="w-12 h-12 bg-[#00a6a2]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-[#00a6a2]" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500 mb-1">Address</p>
                        <p className="text-base font-semibold text-gray-900 leading-relaxed">
                          N°3 imm 9 rue Moulay Idriss Al Akbar Rabat Hassan, Rabat, Morocco
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <a href="tel:+212623055683" className="w-full">
                      <button className="flex items-center justify-center gap-2 h-12 bg-[#00a6a2] hover:bg-[#008581] text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] group w-full">
                        <Phone className="w-4 h-4" />
                        Call Now
                      </button>
                    </a>
                    <Link href="mailto:info@amal-care.de" className="w-full">
                      <button className="flex items-center justify-center gap-2 h-12 bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] group w-full">
                        <Mail className="w-4 h-4" />
                        Send Email
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Two Stacked Images */}
            <div className="space-y-6 flex flex-col justify-end">
              {/* First Team Member - Rachid Amessegher */}
              <div className="relative group">
                {/* Enhanced decorative elements */}
                <div className="absolute -inset-6 bg-gradient-to-br from-[#00a6a2]/20 to-[#7c3aed]/20 rounded-[3rem] blur-2xl group-hover:blur-3xl transition-all duration-500" />
                <div className="absolute -inset-2 bg-gradient-to-br from-[#00a6a2]/10 to-[#7c3aed]/10 rounded-[2.5rem] blur-xl" />
                
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500 h-[340px] w-full">
                  <Image
                    src={IMAGE_URLS.nurseInGermany1}
                    alt="Rachid Amessegher - AmalCare eG"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Floating contact info */}
                  <div className="absolute inset-0 flex items-end justify-center p-6">
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 max-w-md w-full">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-[#00a6a2] rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-sm">RA</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-gray-900">Rachid Amessegher</p>
                          <p className="text-xs text-gray-600 mb-1">Managing Director</p>
                          <a 
                            href="mailto:rachid.amessegher@amal-care.de" 
                            className="text-xs text-[#00a6a2] hover:text-[#008581] transition-colors break-all"
                          >
                            rachid.amessegher@amal-care.de
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second Team Member - Heike Steinbach */}
              <div className="relative group">
                {/* Enhanced decorative elements */}
                <div className="absolute -inset-6 bg-gradient-to-br from-[#7c3aed]/20 to-[#00a6a2]/20 rounded-[3rem] blur-2xl group-hover:blur-3xl transition-all duration-500" />
                <div className="absolute -inset-2 bg-gradient-to-br from-[#7c3aed]/10 to-[#00a6a2]/10 rounded-[2.5rem] blur-xl" />
                
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500 h-[340px] w-full">
                  <Image
                    src={IMAGE_URLS.schoolRabat}
                    alt="Heike Steinbach - Board Member Cooperative"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Floating contact info */}
                  <div className="absolute inset-0 flex items-end justify-center p-6">
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 max-w-md w-full">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-[#7c3aed] rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-sm">HS</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-gray-900">Heike Steinbach</p>
                          <p className="text-xs text-gray-600 mb-1">Board Member Cooperative</p>
                          <a 
                            href="mailto:heike.steinbach@amal-care.de" 
                            className="text-xs text-[#7c3aed] hover:text-[#6d28d9] transition-colors break-all"
                          >
                            heike.steinbach@amal-care.de
                          </a>
                        </div>
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
