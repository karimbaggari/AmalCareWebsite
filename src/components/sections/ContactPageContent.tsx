"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Phone, MapPin, Send, Clock, Upload, X, MessageCircle } from "lucide-react"
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import ContactIntroSection from './ContactIntroSection'
import ContactPersonSection from './ContactPersonSection'
import { IMAGE_URLS } from '@/constants/urls'
import { Badge } from '@/components/ui/badge'

interface FileData {
  file: File | null
  name: string
  size: number
}

function ContactPageContent() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    organization: "",
    message: "",
  })

  const [baccalaureate, setBaccalaureate] = useState<FileData>({ file: null, name: "", size: 0 })
  const [diploma, setDiploma] = useState<FileData>({ file: null, name: "", size: 0 })
  const [fileErrors, setFileErrors] = useState<{ baccalaureate?: string; diploma?: string }>({})

  const t = useTranslations('contact')

  const validateFile = (file: File, type: 'baccalaureate' | 'diploma'): string | null => {
    // Check file type
    if (file.type !== 'application/pdf') {
      return t('fileErrorPDFOnly')
    }
    
    // Check file size (5MB = 5 * 1024 * 1024 bytes)
    const maxSize = 5 * 1024 * 1024
    if (file.size > maxSize) {
      return t('fileErrorMaxSize')
    }
    
    return null
  }

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: 'baccalaureate' | 'diploma'
  ) => {
    const file = e.target.files?.[0]
    if (!file) return

    const error = validateFile(file, type)
    if (error) {
      setFileErrors(prev => ({ ...prev, [type]: error }))
      return
    }

    // Clear error and set file
    setFileErrors(prev => {
      const newErrors = { ...prev }
      delete newErrors[type]
      return newErrors
    })

    if (type === 'baccalaureate') {
      setBaccalaureate({ file, name: file.name, size: file.size })
    } else {
      setDiploma({ file, name: file.name, size: file.size })
    }
  }

  const removeFile = (type: 'baccalaureate' | 'diploma') => {
    if (type === 'baccalaureate') {
      setBaccalaureate({ file: null, name: "", size: 0 })
    } else {
      setDiploma({ file: null, name: "", size: 0 })
    }
    setFileErrors(prev => {
      const newErrors = { ...prev }
      delete newErrors[type]
      return newErrors
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Check for file errors
    if (Object.keys(fileErrors).length > 0) {
      alert(t('pleaseFixFileErrors'))
      return
    }
    
    // Prepare email content
    const subject = encodeURIComponent(`Contact Form Submission from ${formData.firstName} ${formData.lastName}`)
    
    let fileInfo = ''
    if (baccalaureate.file) {
      fileInfo += `\nBaccalaureate Document: ${baccalaureate.name} (${(baccalaureate.size / 1024 / 1024).toFixed(2)} MB)`
    }
    if (diploma.file) {
      fileInfo += `\nDiploma Document: ${diploma.name} (${(diploma.size / 1024 / 1024).toFixed(2)} MB)`
    }

    const body = encodeURIComponent(`
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
City: ${formData.city || 'Not provided'}
Organization: ${formData.organization || 'Not provided'}
${fileInfo}

Message:
${formData.message}

Note: Please attach the documents mentioned above to this email.
    `.trim())
    
    // Multiple recipients
    const recipients = 'kariim.baggarii@gmail.com,info@amal-care.de,nihal.naji@amal-care.de'
    
    // Create mailto link with multiple recipients
    const mailtoLink = `mailto:${recipients}?subject=${subject}&body=${body}`
    
    // Open email client
    window.location.href = mailtoLink
    
    // Show success message
    alert(`${t('emailClientMessage')}\n\n${t('fileAttachmentNote')}`)
    
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      city: "",
      organization: "",
      message: "",
    })
    setBaccalaureate({ file: null, name: "", size: 0 })
    setDiploma({ file: null, name: "", size: 0 })
    setFileErrors({})
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGE_URLS.teamMember2}
            alt="Contact us - Healthcare professionals"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#003c3a]/95 via-[#003c3a]/85 to-[#00a6a2]/75" />
        </div>

        {/* Content */}
        <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 py-12 md:py-16">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="mb-6 md:mb-8">
              <Badge className="inline-flex items-center gap-2 border-0 bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                <MessageCircle className="h-4 w-4" />
                <span>Get in Touch</span>
              </Badge>
            </div>

            {/* Heading */}
            <h1 className="mb-6 md:mb-8 font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white">
              Let&apos;s Connect
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-white/95 max-w-2xl">
              We&apos;re here to answer your questions and help you start your journey to a nursing career in Germany.
            </p>
          </div>
        </div>
      </section>

      <ContactIntroSection />
      <ContactPersonSection />

      <div className="min-h-screen relative overflow-hidden pt-8 sm:pt-12 md:pt-16 bg-white">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00a6a2]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00a6a2]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      {/* Oversized decorative typography */}
      <div className="absolute top-20 left-0 right-0 pointer-events-none select-none overflow-hidden">
        <h2 className="text-[20vw] font-bold text-[#00a6a2]/[0.03] leading-none tracking-tighter text-center">
          {t('title')}
        </h2>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-6 sm:py-8 md:py-12 lg:py-16 xl:py-24">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-20 items-start max-w-7xl mx-auto">
          {/* Left side - Contact Information */}
          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              <div className="inline-block">
                <span className="text-xs sm:text-sm font-medium text-[#00a6a2] bg-[#00a6a2]/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                  {t('getInTouch')}
                </span>
              </div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#003c3a] leading-tight">
                {t('mainTitle')}
              </h3>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl">
                {t('description')}
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4 sm:space-y-6">
              <div className="group bg-white/80 backdrop-blur-sm p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border border-gray-100 hover:border-[#00a6a2]/30 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#00a6a2]/10 rounded-xl flex items-center justify-center group-hover:bg-[#00a6a2] transition-colors duration-300 flex-shrink-0">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#00a6a2] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm sm:text-base font-semibold text-[#003c3a] mb-1">{t('hoursTitle')}</h4>
                    <p className="text-sm sm:text-base text-gray-600">
                      {t('hoursWeekdays')}
                      <br />
                      {t('hoursWeekends')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div className="lg:sticky lg:top-24">
            <div className="bg-white/90 backdrop-blur-sm p-5 sm:p-6 md:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100">
              <div className="mb-6 sm:mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#003c3a] mb-2">{t('formTitle')}</h3>
                <p className="text-sm sm:text-base text-gray-600">{t('formDescription')}</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
                <div className="grid md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                  <div className="space-y-1.5 sm:space-y-2">
                    <label htmlFor="firstName" className="text-xs sm:text-sm font-medium text-gray-700">
                      {t('firstName')} *
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full h-11 sm:h-12 px-3 sm:px-4 bg-white border border-gray-200 rounded-lg focus:border-[#00a6a2] focus:ring-2 focus:ring-[#00a6a2]/20 focus:outline-none transition-colors text-sm sm:text-base"
                      placeholder={t('firstNamePlaceholder')}
                    />
                  </div>
                  <div className="space-y-1.5 sm:space-y-2">
                    <label htmlFor="lastName" className="text-xs sm:text-sm font-medium text-gray-700">
                      {t('lastName')} *
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full h-11 sm:h-12 px-3 sm:px-4 bg-white border border-gray-200 rounded-lg focus:border-[#00a6a2] focus:ring-2 focus:ring-[#00a6a2]/20 focus:outline-none transition-colors text-sm sm:text-base"
                      placeholder={t('lastNamePlaceholder')}
                    />
                  </div>
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <label htmlFor="email" className="text-xs sm:text-sm font-medium text-gray-700">
                    {t('emailLabel')} *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full h-11 sm:h-12 px-3 sm:px-4 bg-white border border-gray-200 rounded-lg focus:border-[#00a6a2] focus:ring-2 focus:ring-[#00a6a2]/20 focus:outline-none transition-colors text-sm sm:text-base"
                    placeholder={t('emailPlaceholder')}
                  />
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <label htmlFor="phone" className="text-xs sm:text-sm font-medium text-gray-700">
                    {t('phoneLabel')}
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full h-11 sm:h-12 px-3 sm:px-4 bg-white border border-gray-200 rounded-lg focus:border-[#00a6a2] focus:ring-2 focus:ring-[#00a6a2]/20 focus:outline-none transition-colors text-sm sm:text-base"
                    placeholder={t('phonePlaceholder')}
                  />
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <label htmlFor="city" className="text-xs sm:text-sm font-medium text-gray-700">
                    {t('cityLabel')}
                  </label>
                  <input
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full h-11 sm:h-12 px-3 sm:px-4 bg-white border border-gray-200 rounded-lg focus:border-[#00a6a2] focus:ring-2 focus:ring-[#00a6a2]/20 focus:outline-none transition-colors text-sm sm:text-base"
                    placeholder={t('cityPlaceholder')}
                  />
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <label htmlFor="organization" className="text-xs sm:text-sm font-medium text-gray-700">
                    {t('organizationLabel')}
                  </label>
                  <input
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full h-11 sm:h-12 px-3 sm:px-4 bg-white border border-gray-200 rounded-lg focus:border-[#00a6a2] focus:ring-2 focus:ring-[#00a6a2]/20 focus:outline-none transition-colors text-sm sm:text-base"
                    placeholder={t('organizationPlaceholder')}
                  />
                </div>

                {/* Document Uploads */}
                <div className="space-y-3 sm:space-y-4 pt-2">
                  <div className="space-y-1.5 sm:space-y-2">
                    <label htmlFor="baccalaureate" className="text-xs sm:text-sm font-medium text-gray-700">
                      {t('baccalaureateLabel')} <span className="text-[10px] sm:text-xs text-gray-500">(PDF, max 5MB)</span>
                    </label>
                    {baccalaureate.file ? (
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                        <div className="flex-1">
                          <p className="text-sm font-medium text-[#003c3a]">{baccalaureate.name}</p>
                          <p className="text-xs text-gray-500">{(baccalaureate.size / 1024 / 1024).toFixed(2)} MB</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFile('baccalaureate')}
                          className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          aria-label={t('removeFile')}
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <label className="flex flex-col items-center justify-center w-full h-20 sm:h-24 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 hover:border-[#00a6a2] transition-colors">
                        <div className="flex flex-col items-center justify-center pt-4 sm:pt-5 pb-4 sm:pb-6">
                          <Upload className="w-6 h-6 sm:w-8 sm:h-8 mb-1.5 sm:mb-2 text-gray-400" />
                          <p className="mb-1.5 sm:mb-2 text-xs sm:text-sm text-gray-500">
                            <span className="font-semibold">{t('clickToUpload')}</span> {t('orDragDrop')}
                          </p>
                          <p className="text-[10px] sm:text-xs text-gray-500">PDF (MAX. 5MB)</p>
                        </div>
                        <input
                          id="baccalaureate"
                          type="file"
                          className="hidden"
                          accept="application/pdf"
                          onChange={(e) => handleFileChange(e, 'baccalaureate')}
                        />
                      </label>
                    )}
                    {fileErrors.baccalaureate && (
                      <p className="text-sm text-red-600">{fileErrors.baccalaureate}</p>
                    )}
                  </div>

                  <div className="space-y-1.5 sm:space-y-2">
                    <label htmlFor="diploma" className="text-xs sm:text-sm font-medium text-gray-700">
                      {t('diplomaLabel')} <span className="text-[10px] sm:text-xs text-gray-500">(PDF, max 5MB)</span>
                    </label>
                    {diploma.file ? (
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                        <div className="flex-1">
                          <p className="text-sm font-medium text-[#003c3a]">{diploma.name}</p>
                          <p className="text-xs text-gray-500">{(diploma.size / 1024 / 1024).toFixed(2)} MB</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFile('diploma')}
                          className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          aria-label={t('removeFile')}
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <label className="flex flex-col items-center justify-center w-full h-20 sm:h-24 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 hover:border-[#00a6a2] transition-colors">
                        <div className="flex flex-col items-center justify-center pt-4 sm:pt-5 pb-4 sm:pb-6">
                          <Upload className="w-6 h-6 sm:w-8 sm:h-8 mb-1.5 sm:mb-2 text-gray-400" />
                          <p className="mb-1.5 sm:mb-2 text-xs sm:text-sm text-gray-500">
                            <span className="font-semibold">{t('clickToUpload')}</span> {t('orDragDrop')}
                          </p>
                          <p className="text-[10px] sm:text-xs text-gray-500">PDF (MAX. 5MB)</p>
                        </div>
                        <input
                          id="diploma"
                          type="file"
                          className="hidden"
                          accept="application/pdf"
                          onChange={(e) => handleFileChange(e, 'diploma')}
                        />
                      </label>
                    )}
                    {fileErrors.diploma && (
                      <p className="text-sm text-red-600">{fileErrors.diploma}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <label htmlFor="message" className="text-xs sm:text-sm font-medium text-gray-700">
                    {t('messageLabel')} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-gray-200 rounded-lg focus:border-[#00a6a2] focus:ring-2 focus:ring-[#00a6a2]/20 focus:outline-none transition-colors resize-none text-sm sm:text-base"
                    placeholder={t('messagePlaceholder')}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full h-12 sm:h-14 md:h-14 bg-[#00a6a2] hover:bg-[#008a87] text-white text-base sm:text-lg font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  {t('sendButton')}
                </button>

                <p className="text-xs sm:text-sm text-gray-500 text-center">
                  {t('privacyNotice')}
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default ContactPageContent
