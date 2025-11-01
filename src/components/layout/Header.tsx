"use client"

import { Menu, X } from "lucide-react"
import LanguageSwitcher from "../ui/LanguageSwitcher"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { useTranslations, useLocale } from 'next-intl'
import { IMAGE_URLS } from "@/constants/urls"

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const t = useTranslations('common')
    const tHeader = useTranslations('header')
    const locale = useLocale()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        let ticking = false
        const handleScroll = () => {
            const currentY = window.scrollY
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setIsScrolled(prev => {
                        if (prev) return currentY > 40
                        return currentY > 80
                    })
                    ticking = false
                })
                ticking = true
            }
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll()
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        setMounted(true)
    }, [])

    // Close on ESC and robust scroll-lock while menu is open
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsMenuOpen(false)
        }
        document.addEventListener('keydown', onKey)

        const html = document.documentElement
        const body = document.body as HTMLBodyElement & { _lockTop?: string }

        if (isMenuOpen) {
            body._lockTop = `-${window.scrollY}px`
            body.style.position = 'fixed'
            body.style.top = body._lockTop
            body.style.width = '100%'
            body.style.overflow = 'hidden'
            html.style.overflow = 'hidden'
            html.style.overscrollBehavior = 'contain'
        } else {
            const top = body.style.top
            body.style.position = ''
            body.style.top = ''
            body.style.width = ''
            body.style.overflow = ''
            html.style.overflow = ''
            html.style.overscrollBehavior = ''
            if (top) {
                const y = -parseInt(top || '0', 10)
                window.scrollTo(0, y)
            }
        }

        return () => {
            document.removeEventListener('keydown', onKey)
            body.style.position = ''
            body.style.top = ''
            body.style.width = ''
            body.style.overflow = ''
            html.style.overflow = ''
            html.style.overscrollBehavior = ''
        }
    }, [isMenuOpen])

    return (
        <header className={`w-full sticky top-0 z-[9999] transition-all duration-500 ease-in-out ${
            isScrolled 
                ? 'bg-white/95 backdrop-blur-xl shadow-xl shadow-gray-900/10 h-20 md:h-28' 
                : 'bg-white/70 backdrop-blur-md h-24 md:h-36 lg:h-40'
        }`}>
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center relative">
                {/* AmalCare Logo - Centered and Clickable */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[9999]">
                    <Link 
                        href={`/${locale}`} 
                        aria-label={tHeader('homepageAriaLabel')}
                        className="block hover:opacity-80 transition-all duration-300 hover:scale-105"
                    >
                        <Image
                            src={IMAGE_URLS.logo}
                            alt="AmalCare Logo"
                            width={isScrolled ? 120 : 160}
                            height={isScrolled ? 72 : 96}
                            className={`h-auto transition-all duration-500 ${
                                isScrolled 
                                    ? 'w-[100px] md:w-[120px]' 
                                    : 'w-[120px] md:w-[140px] lg:w-[160px]'
                            }`}
                            priority
                        />
                    </Link>
                </div>
                
                {/* Right side - Language Switcher, Contact Link, Menu Button */}
                <div className="flex justify-end items-center w-full gap-3 md:gap-5 lg:gap-6 ml-auto z-[9998]">
                    <div className="hidden lg:block">
                        <LanguageSwitcher />
                    </div>
                    
                    <Link
                        href={`/${locale}/contact`}
                        className="hidden lg:inline-flex items-center text-[#003c3a] text-sm lg:text-base font-semibold tracking-wide hover:text-[#00a6a2] uppercase transition-all duration-300 hover:scale-105 whitespace-nowrap"
                        aria-label={t('contact')}
                    >
                        {t('contact')}
                    </Link>

                    {/* Desktop Menu Button - hidden on mobile */}
                    <button
                        className="hidden md:flex bg-gradient-to-br from-[#00a6a2] to-[#008a87] rounded-full items-center justify-center hover:from-[#008a87] hover:to-[#00a6a2] transition-all duration-300 hover:shadow-xl hover:shadow-[#00a6a2]/30 active:scale-95 w-14 h-14 lg:w-16 lg:h-16 shadow-lg flex-shrink-0"
                        aria-label={t('menu')}
                        title={t('menu')}
                        aria-controls="main-nav"
                        aria-expanded={isMenuOpen}
                        onClick={() => setIsMenuOpen(v => !v)}
                    >
                        {isMenuOpen ? (
                            <X className="text-white w-6 h-6 lg:w-7 lg:h-7" />
                        ) : (
                            <Menu className="text-white w-6 h-6 lg:w-7 lg:h-7" />
                        )}
                    </button>
                </div>
            </div>
            
            {/* Slide-in Drawer */}
            {mounted && createPortal(
            <div className={`fixed inset-0 z-[99999] transition-all duration-500 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} h-[100dvh] min-h-[100dvh] overscroll-contain`} aria-hidden={!isMenuOpen}>
                {/* Backdrop */}
                <div className="absolute inset-0 z-[99999] bg-gradient-to-br from-black/70 via-black/60 to-[#00a6a2]/20 backdrop-blur-md h-[100dvh]" onClick={() => setIsMenuOpen(false)}></div>
                {/* Drawer */}
                <nav id="main-nav" className={`absolute right-0 top-0 z-[100000] h-[100dvh] min-h-[100dvh] w-[90%] sm:w-[420px] bg-white shadow-2xl transition-all duration-500 ease-out overflow-y-auto ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    {/* Header */}
                    <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-6 border-b border-gray-200 bg-gradient-to-r from-white via-white to-[#00a6a2]/5 backdrop-blur">
                        <span className="text-[#003c3a] text-xl font-bold tracking-wide">{t('menu')}</span>
                        <button 
                            aria-label={tHeader('closeMenuAriaLabel')} 
                            className="p-2.5 rounded-full hover:bg-[#00a6a2]/10 transition-all duration-300 active:scale-90"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <X className="w-6 h-6 text-[#003c3a]" />
                        </button>
                    </div>
                    
                    <div className="px-6 py-6">
                        {/* Mobile-only Language Switcher */}
                        <div className="lg:hidden mb-8">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-sm font-bold text-[#003c3a] uppercase tracking-wider">{tHeader('changeLanguageAriaLabel')}</span>
                            </div>
                            <LanguageSwitcher />
                        </div>

                        {/* Navigation Links */}
                        <ul className="space-y-2 mb-8">
                            {[
                                { href: `/${locale}`, label: t('home') },
                                { href: `/${locale}/about`, label: t('about') },
                                { href: `/${locale}/language-school`, label: t('languageSchool') },
                                { href: `/${locale}/simulation-course`, label: t('simulationCourse') },
                                { href: `/${locale}/faqs`, label: t('faqs') },
                                { href: `/${locale}/contact`, label: t('contact') },
                            ].map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="group relative flex items-center justify-between rounded-2xl px-5 py-4 text-[#003c3a] hover:bg-gradient-to-r hover:from-[#00a6a2]/10 hover:to-[#00a6a2]/5 transition-all duration-300 overflow-hidden"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <span className="font-semibold tracking-wide text-lg relative z-10">{item.label}</span>
                                        <span className="text-[#00a6a2] text-xl opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">→</span>
                                        {/* Animated underline */}
                                        <span className="absolute bottom-2 left-5 h-0.5 w-0 bg-gradient-to-r from-[#00a6a2] to-[#008a87] group-hover:w-[calc(100%-40px)] transition-all duration-300"></span>
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* Action Buttons */}
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <Link 
                                href={`/${locale}/contact`} 
                                className="rounded-2xl bg-gradient-to-br from-[#00a6a2] to-[#008a87] text-white text-center py-4 text-sm font-bold shadow-lg hover:shadow-xl hover:shadow-[#00a6a2]/30 transition-all duration-300 hover:scale-105 active:scale-95" 
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {t('contact')}
                            </Link>
                            <button 
                                className="rounded-2xl border-2 border-[#00a6a2]/30 text-[#00a6a2] py-4 text-sm font-bold hover:bg-[#00a6a2]/10 hover:border-[#00a6a2] transition-all duration-300 hover:scale-105 active:scale-95" 
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {t('close')}
                            </button>
                        </div>

                        {/* Footer */}
                        <div className="pt-6 border-t border-gray-200">
                            <p className="text-xs text-gray-500">{tHeader('copyright')}</p>
                        </div>
                    </div>
                </nav>
            </div>, document.body)}
        </header>
    )
}
