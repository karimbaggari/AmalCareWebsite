"use client"

import { useLocale, useTranslations } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/routing'
import { Globe, ChevronDown } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'ar', name: 'العربية', flag: '🇲🇦' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
]

export default function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const tHeader = useTranslations('header')
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen])

  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0]

  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale })
    setIsOpen(false)
  }

  if (!mounted) {
    return (
      <div className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-gray-100">
        <div className="w-4 h-4 bg-gray-200 rounded animate-pulse"></div>
        <div className="w-6 h-4 bg-gray-200 rounded animate-pulse"></div>
        <div className="hidden sm:block w-16 h-4 bg-gray-200 rounded animate-pulse"></div>
      </div>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-[#00a6a2]/10 hover:bg-[#00a6a2]/20 border border-[#00a6a2]/20 transition-all duration-200 active:scale-95"
        aria-label={tHeader('changeLanguageAriaLabel')}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Globe className="w-4 h-4 text-[#00a6a2]" aria-hidden="true" />
        <span className="text-[#00a6a2] text-sm font-medium">{currentLanguage.flag}</span>
        <span className="hidden sm:inline text-[#003c3a] text-sm font-semibold">{currentLanguage.name}</span>
        <ChevronDown 
          className={`w-4 h-4 text-[#00a6a2] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>

      {isOpen && (
        <div 
          className="absolute top-full right-0 mt-2 w-52 bg-white rounded-xl shadow-2xl border border-gray-200 z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200"
          role="menu"
          aria-orientation="vertical"
        >
          <div className="py-2">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-[#00a6a2]/5 transition-colors ${
                  language.code === locale ? 'bg-[#00a6a2]/10 text-[#00a6a2]' : 'text-[#003c3a]'
                }`}
                role="menuitem"
                aria-current={language.code === locale ? 'true' : undefined}
              >
                <span className="text-lg" aria-hidden="true">{language.flag}</span>
                <span className="text-sm font-medium">{language.name}</span>
                {language.code === locale && (
                  <span className="ml-auto text-[#00a6a2] font-bold" aria-label="Selected">✓</span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
