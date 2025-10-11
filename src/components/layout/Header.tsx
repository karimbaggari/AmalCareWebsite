"use client"

import { Menu, X } from "lucide-react"
import ThemeToggle from "../ThemeToggle"
import LanguageSwitcher from "../ui/LanguageSwitcher"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useTranslations } from 'next-intl'

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const t = useTranslations('common')
    // const tNav = useTranslations('navigation') // Unused for now

    useEffect(() => {
        let ticking = false
        const handleScroll = () => {
            const currentY = window.scrollY
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setIsScrolled(prev => {
                        // Enter compact state after 80px, exit below 40px to avoid flicker
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

    // Close on ESC and robust scroll-lock while menu is open
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsMenuOpen(false)
        }
        document.addEventListener('keydown', onKey)

        const html = document.documentElement
        const body = document.body as HTMLBodyElement & { _lockTop?: string }

        if (isMenuOpen) {
            // Preserve scroll position and lock the page
            body._lockTop = `-${window.scrollY}px`
            body.style.position = 'fixed'
            body.style.top = body._lockTop
            body.style.width = '100%'
            body.style.overflow = 'hidden'
            html.style.overflow = 'hidden'
            html.style.overscrollBehavior = 'contain'
        } else {
            // Restore scroll position and unlock
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
            // Ensure unlock on unmount
            body.style.position = ''
            body.style.top = ''
            body.style.width = ''
            body.style.overflow = ''
            html.style.overflow = ''
            html.style.overscrollBehavior = ''
        }
    }, [isMenuOpen])

    return (
        <header className={`w-full flex items-center sticky top-0 z-[9999] bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 transition-[height,box-shadow] duration-300 ${
            isScrolled ? 'h-14 md:h-[140px] shadow-xl shadow-gray-800/30' : 'h-16 md:h-[220px] shadow-none'
        }`}>
            {/* AmalCare Logo - Centered */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <Link href="/" aria-label="Zur Startseite navigieren">
                    <Image
                        src="https://alamalhealthcare.com/wp-content/uploads/2025/02/Icon.png"
                        alt="AmalCare Logo"
                        width={150}
                        height={90}
                        className={`h-auto transition-transform duration-300 ${isScrolled ? 'scale-90 md:scale-75' : 'scale-100'}`}
                        priority
                    />
                </Link>
            </div>
            <div className="flex justify-end items-center w-full md:w-[87%] pr-4 md:pr-0 gap-3 sm:gap-4 md:gap-6">
                <LanguageSwitcher />
                
                <Link
                    href="/contact"
                    className="text-[#00a6a2] text-sm sm:text-base font-medium tracking-wide hover:underline uppercase transition-colors duration-300"
                    aria-label={t('contact')}
                >
                    {t('contact')}
                </Link>
                
                <ThemeToggle />

                <button
                    className="bg-[#00a6a2] rounded-full flex items-center justify-center hover:bg-[#008a87] transition-transform duration-300 hover:scale-105 w-10 h-10 sm:w-12 sm:h-12 md:w-[74px] md:h-[74px] shadow-lg cursor-pointer"
                    aria-label={t('menu')}
                    title={t('menu')}
                    aria-controls="main-nav"
                    aria-expanded={isMenuOpen}
                    onClick={() => setIsMenuOpen(v => !v)}
                >
                    {isMenuOpen ? (
                        <X className="text-white w-5 h-5 md:w-[25px] md:h-[25px] font-bold" />
                    ) : (
                        <Menu className="text-white w-5 h-5 md:w-[25px] md:h-[25px] font-bold" />
                    )}
                </button>
            </div>
            {/* Slide-in Drawer (previous design) */}
            <div className={`fixed inset-0 z-[99999] transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} h-[100dvh] min-h-[100dvh] overscroll-contain`} aria-hidden={!isMenuOpen}>
                {/* Backdrop */}
                <div className="absolute inset-0 z-[99999] bg-black/60 backdrop-blur-sm h-[100dvh]" onClick={() => setIsMenuOpen(false)}></div>
                {/* Drawer */}
                <nav id="main-nav" className={`absolute right-0 top-0 z-[100000] h-[100dvh] min-h-[100dvh] w-[88%] sm:w-[420px] bg-white shadow-2xl transition-transform duration-300 overflow-y-auto ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-5 border-b border-gray-200 bg-white/95 backdrop-blur">
                        <span className="text-[#003c3a] font-semibold tracking-wide">Menu</span>
                        <button aria-label="Close menu" className="p-2 rounded-full hover:bg-gray-100 cursor-pointer" onClick={() => setIsMenuOpen(false)}>
                            <X className="w-6 h-6 text-gray-700" />
                        </button>
                    </div>
                    <div className="px-6 py-6">
                        <ul className="space-y-2">
                            {[
                                { href: '/', label: 'Home' },
                                { href: '/about', label: 'About' },
                                { href: '/language-school', label: 'Language School' },
                                { href: '/become-a-nurse-in-germany', label: 'Become a Nurse' },
                                { href: '/faqs', label: 'FAQs' },
                                { href: '/contact', label: 'Contact' },
                            ].map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="group flex items-center justify-between rounded-xl px-4 py-4 text-[#003c3a] hover:bg-gray-50 transition-colors cursor-pointer"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <span className="font-medium tracking-wide">{item.label}</span>
                                        <span className="text-[#00a6a2] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-8 grid grid-cols-2 gap-3">
                            <Link href="/contact" className="rounded-full bg-[#7c3aed] text-white text-center py-3 font-semibold shadow-md hover:bg-[#6d28d9] transition-colors cursor-pointer" onClick={() => setIsMenuOpen(false)}>
                                {t('contact')}
                            </Link>
                            <button className="rounded-full border border-[#00a6a2]/30 text-[#00a6a2] py-3 font-semibold hover:bg-[#00a6a2]/5 transition-colors cursor-pointer" onClick={() => setIsMenuOpen(false)}>
                                Close
                            </button>
                        </div>

                        <div className="mt-10 text-xs text-gray-500">
                            <p>© 2024 AmalCare</p>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}
