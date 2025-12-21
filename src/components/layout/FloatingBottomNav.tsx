"use client"

import { Home, Info, BookOpen, GraduationCap, MessageCircle, Menu, Globe, Check } from "lucide-react"
import Link from "next/link"
import { useTranslations, useLocale } from 'next-intl'
import { usePathname, useRouter } from '@/i18n/routing'
import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

export default function FloatingBottomNav() {
  const t = useTranslations('common')
  const tHeader = useTranslations('header')
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'ar', name: 'العربية', flag: '🇲🇦' },
  ]

  const currentLanguage = languages.find((lang) => lang.code === locale) || languages[0]

  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale })
    setIsMenuOpen(false)
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const navItems = [
    { 
      href: `/${locale}`, 
      label: t('home'), 
      icon: Home,
      key: 'home'
    },
    { 
      href: `/${locale}/about`, 
      label: t('about'), 
      icon: Info,
      key: 'about'
    },
    { 
      href: `/${locale}/language-school`, 
      label: t('languageSchool'), 
      icon: BookOpen,
      key: 'languageSchool'
    },
    { 
      href: `/${locale}/simulation-course`, 
      label: t('simulationCourse'), 
      icon: GraduationCap,
      key: 'simulationCourse'
    },
    { 
      href: `/${locale}/contact`, 
      label: t('contact'), 
      icon: MessageCircle,
      key: 'contact'
    },
  ]

  const isActive = (href: string) => {
    if (href === `/${locale}`) {
      return pathname === `/${locale}` || pathname === '/'
    }
    return pathname === href
  }

  if (!mounted) return null

  return (
    <>
      {/* Floating Bottom Navigation - Mobile Only */}
      <nav className="fixed bottom-0 left-0 right-0 z-[9998] md:hidden">
        <div className="bg-white border-t border-gray-200 shadow-lg">
          <div className="flex items-center justify-around px-2 py-3">
            {navItems.slice(0, 4).map((item) => {
              const Icon = item.icon
              const active = isActive(item.href)
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  className={`flex flex-col items-center justify-center gap-1 px-2 py-2 rounded-xl transition-all duration-200 min-w-[60px] cursor-pointer ${
                    active 
                      ? 'text-[#00a6a2] bg-[#00a6a2]/10' 
                      : 'text-gray-600 hover:text-[#00a6a2] hover:bg-gray-50'
                  }`}
                  aria-label={item.label}
                >
                  <Icon className={`w-6 h-6 ${active ? 'scale-110' : ''}`} />
                  <span className={`text-[10px] font-medium leading-tight text-center ${active ? 'font-semibold' : ''}`}>
                    {item.label}
                  </span>
                </Link>
              )
            })}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`flex flex-col items-center justify-center gap-1 px-2 py-2 rounded-xl transition-all duration-200 min-w-[60px] cursor-pointer ${
                isMenuOpen 
                  ? 'text-[#00a6a2] bg-[#00a6a2]/10' 
                  : 'text-gray-600 hover:text-[#00a6a2] hover:bg-gray-50'
              }`}
              aria-label={t('menu')}
            >
              <Menu className="w-6 h-6" />
              <span className="text-[10px] font-medium leading-tight text-center">
                {t('menu')}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Expanded Menu Modal */}
      {mounted && createPortal(
        <div 
          className={`fixed inset-0 z-[99999] transition-opacity duration-300 md:hidden ${
            isMenuOpen 
              ? 'opacity-100 pointer-events-auto' 
              : 'opacity-0 pointer-events-none'
          }`}
          aria-hidden={!isMenuOpen}
          onClick={() => setIsMenuOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          
          {/* Menu Content - Slides up from bottom */}
          <div 
            className={`absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl transition-transform duration-300 transform ${
              isMenuOpen ? 'translate-y-0' : 'translate-y-full'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              {/* Handle bar */}
              <div className="flex justify-center mb-6">
                <div className="w-12 h-1 bg-gray-300 rounded-full" />
              </div>
              
              {/* Menu Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">{t('menu')}</h2>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
                  aria-label={t('close')}
                >
                  <span className="text-2xl text-gray-600">×</span>
                </button>
              </div>

              {/* All Menu Items */}
              <div className="space-y-2 mb-6">
                {navItems.map((item) => {
                  const Icon = item.icon
                  const active = isActive(item.href)
                  return (
                    <Link
                      key={item.key}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center gap-4 px-4 py-4 rounded-xl transition-colors cursor-pointer ${
                        active 
                          ? 'bg-[#00a6a2]/10 text-[#00a6a2]' 
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                      <span className="font-medium text-base">{item.label}</span>
                      {active && (
                        <span className="ml-auto text-[#00a6a2] font-bold">●</span>
                      )}
                    </Link>
                  )
                })}
              </div>

              {/* Additional Links */}
              <div className="pt-4 border-t border-gray-200 space-y-2">
                <Link
                  href={`/${locale}/faqs`}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-4 px-4 py-4 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <span className="font-medium text-base">FAQs</span>
                </Link>
              </div>

              {/* Language Switcher */}
              <div className="pt-4 border-t border-gray-200">
                <div className="px-4 py-2 mb-3">
                  <div className="flex items-center gap-2 text-sm font-semibold text-gray-600 uppercase tracking-wide">
                    <Globe className="w-4 h-4" />
                    <span>{tHeader('changeLanguageAriaLabel')}</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => handleLanguageChange(language.code)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all cursor-pointer ${
                        language.code === locale
                          ? 'bg-[#00a6a2]/10 text-[#00a6a2] border-2 border-[#00a6a2]/30 shadow-sm'
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border-2 border-transparent'
                      }`}
                    >
                      <span className="text-2xl">{language.flag}</span>
                      <div className="flex-1 text-left">
                        <span className="text-sm font-medium block">{language.name}</span>
                      </div>
                      {language.code === locale && (
                        <Check className="w-5 h-5 text-[#00a6a2]" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Safe area padding for devices with home indicator */}
            <div className="h-4 bg-white" />
          </div>
        </div>,
        document.body
      )}
    </>
  )
}

