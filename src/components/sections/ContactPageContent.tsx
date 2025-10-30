"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Phone, MapPin, Send, Clock, Upload, X } from "lucide-react"
import { useTranslations } from 'next-intl'
import { SimpleImageHero } from './GenericHeroSection'
import ContactIntroSection from './ContactIntroSection'
import ContactPersonSection from './ContactPersonSection'
import { IMAGE_URLS } from '@/constants/urls'

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
      <SimpleImageHero
        image={IMAGE_URLS.teamMember2}
        imageAlt="Contact us - Healthcare professionals"
        backgroundColor="#00a6a2"
        height="h-[370px]"
        imageWidth={900}
        imageHeight={600}
      />

      <div className="h-56 mt-16 mb-16 relative bg-white"></div>

      <ContactIntroSection />
      <ContactPersonSection />

      <div className="min-h-screen bg-gradient-to-br from-[#f0f9f9] via-white to-[#e6f7f7] relative overflow-hidden pt-16">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00a6a2]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00a6a2]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      {/* Oversized decorative typography */}
      <div className="absolute top-20 left-0 right-0 pointer-events-none select-none overflow-hidden">
        <h1 className="text-[20vw] font-bold text-[#00a6a2]/[0.03] leading-none tracking-tighter text-center">
          {t('title')}
        </h1>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start max-w-7xl mx-auto mt-[200px]">
          {/* Left side - Contact Information */}
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-sm font-medium text-[#00a6a2] bg-[#00a6a2]/10 px-4 py-2 rounded-full">
                  {t('getInTouch')}
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                {t('mainTitle')}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                {t('description')}
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              <div className="group bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 hover:border-[#00a6a2]/30 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#00a6a2]/10 rounded-xl flex items-center justify-center group-hover:bg-[#00a6a2] transition-colors duration-300">
                    <Clock className="w-5 h-5 text-[#00a6a2] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">{t('hoursTitle')}</h3>
                    <p className="text-gray-600">
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
            <div className="bg-white/90 backdrop-blur-sm p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{t('formTitle')}</h3>
                <p className="text-gray-600">{t('formDescription')}</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                      {t('firstName')} *
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full h-12 px-4 bg-white border border-gray-200 rounded-lg focus:border-[#00a6a2] focus:ring-2 focus:ring-[#00a6a2]/20 focus:outline-none transition-colors"
                      placeholder={t('firstNamePlaceholder')}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                      {t('lastName')} *
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full h-12 px-4 bg-white border border-gray-200 rounded-lg focus:border-[#00a6a2] focus:ring-2 focus:ring-[#00a6a2]/20 focus:outline-none transition-colors"
                      placeholder={t('lastNamePlaceholder')}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    {t('emailLabel')} *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full h-12 px-4 bg-white border border-gray-200 rounded-lg focus:border-[#00a6a2] focus:ring-2 focus:ring-[#00a6a2]/20 focus:outline-none transition-colors"
                    placeholder={t('emailPlaceholder')}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                    {t('phoneLabel')}
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full h-12 px-4 bg-white border border-gray-200 rounded-lg focus:border-[#00a6a2] focus:ring-2 focus:ring-[#00a6a2]/20 focus:outline-none transition-colors"
                    placeholder={t('phonePlaceholder')}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="city" className="text-sm font-medium text-gray-700">
                    {t('cityLabel')}
                  </label>
                  <input
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full h-12 px-4 bg-white border border-gray-200 rounded-lg focus:border-[#00a6a2] focus:ring-2 focus:ring-[#00a6a2]/20 focus:outline-none transition-colors"
                    placeholder={t('cityPlaceholder')}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="organization" className="text-sm font-medium text-gray-700">
                    {t('organizationLabel')}
                  </label>
                  <input
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full h-12 px-4 bg-white border border-gray-200 rounded-lg focus:border-[#00a6a2] focus:ring-2 focus:ring-[#00a6a2]/20 focus:outline-none transition-colors"
                    placeholder={t('organizationPlaceholder')}
                  />
                </div>

                {/* Document Uploads */}
                <div className="space-y-4 pt-2">
                  <div className="space-y-2">
                    <label htmlFor="baccalaureate" className="text-sm font-medium text-gray-700">
                      {t('baccalaureateLabel')} <span className="text-xs text-gray-500">(PDF, max 5MB)</span>
                    </label>
                    {baccalaureate.file ? (
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900">{baccalaureate.name}</p>
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
                      <label className="flex flex-col items-center justify-center w-full h-24 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 hover:border-[#00a6a2] transition-colors">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <Upload className="w-8 h-8 mb-2 text-gray-400" />
                          <p className="mb-2 text-sm text-gray-500">
                            <span className="font-semibold">{t('clickToUpload')}</span> {t('orDragDrop')}
                          </p>
                          <p className="text-xs text-gray-500">PDF (MAX. 5MB)</p>
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

                  <div className="space-y-2">
                    <label htmlFor="diploma" className="text-sm font-medium text-gray-700">
                      {t('diplomaLabel')} <span className="text-xs text-gray-500">(PDF, max 5MB)</span>
                    </label>
                    {diploma.file ? (
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900">{diploma.name}</p>
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
                      <label className="flex flex-col items-center justify-center w-full h-24 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 hover:border-[#00a6a2] transition-colors">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <Upload className="w-8 h-8 mb-2 text-gray-400" />
                          <p className="mb-2 text-sm text-gray-500">
                            <span className="font-semibold">{t('clickToUpload')}</span> {t('orDragDrop')}
                          </p>
                          <p className="text-xs text-gray-500">PDF (MAX. 5MB)</p>
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

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">
                    {t('messageLabel')} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:border-[#00a6a2] focus:ring-2 focus:ring-[#00a6a2]/20 focus:outline-none transition-colors resize-none"
                    placeholder={t('messagePlaceholder')}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full h-14 bg-[#00a6a2] hover:bg-[#008581] text-white text-lg font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  {t('sendButton')}
                </button>

                <p className="text-sm text-gray-500 text-center">
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
