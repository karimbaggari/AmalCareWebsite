"use client"

import { Menu, X, Home, Info, School, Briefcase, HelpCircle, Phone } from "lucide-react"
import ThemeToggle from "../ThemeToggle"
import LanguageSwitcher from "../ui/LanguageSwitcher"
import { Link, usePathname } from '@/i18n/routing'
import Image from "next/image"
import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { useTranslations, useLocale } from 'next-intl'

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const t = useTranslations('common')
    const locale = useLocale()
    const pathname = usePathname()
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

    const mobileNavItems = [
        { href: '/', label: 'Home', icon: Home },
        { href: '/about', label: 'About', icon: Info },
        { href: '/language-school', label: 'School', icon: School },
        { href: '/faqs', label: 'FAQs', icon: HelpCircle },
        { href: '/contact', label: 'Contact', icon: Phone },
    ] as const

    return (
        <>
            <header className={`w-full flex items-center justify-between sticky top-0 z-[9999] bg-white shadow-md transition-[height,box-shadow] duration-300 ${
                isScrolled ? 'h-14 md:h-16 lg:h-[140px] shadow-lg' : 'h-16 md:h-20 lg:h-[220px]'
            }`}>
                {/* Mobile Top Bar (< md screens) - Logo and Language */}
                <div className="flex md:hidden items-center justify-between w-full px-4">
                    {/* Left: Language Switcher */}
                    <div className="z-10">
                        <LanguageSwitcher />
                    </div>

                    {/* Center: Logo */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <Link href="/" aria-label="Zur Startseite navigieren">
                            <Image
                                src="https://alamalhealthcare.com/wp-content/uploads/2025/02/Icon.png"
                                alt="AmalCare Logo"
                                width={100}
                                height={60}
                                className={`h-auto transition-all duration-300 ${isScrolled ? 'w-16' : 'w-20'}`}
                                priority
                            />
                        </Link>
                    </div>

                    {/* Right: Theme Toggle (optional, can be removed if not needed on mobile) */}
                    <div className="z-10">
                        <ThemeToggle />
                    </div>
                </div>

                {/* Desktop/Tablet Layout (>= md screens) */}
                <div className="hidden md:flex items-center justify-between w-full">
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <Link href="/" aria-label="Zur Startseite navigieren">
                            <Image
                                src="https://alamalhealthcare.com/wp-content/uploads/2025/02/Icon.png"
                                alt="AmalCare Logo"
                                width={150}
                                height={90}
                                className={`h-auto transition-transform duration-300 ${isScrolled ? 'scale-75 lg:scale-75' : 'scale-90 lg:scale-100'}`}
                                priority
                            />
                        </Link>
                    </div>
                    <div className="flex justify-end items-center w-full lg:w-[87%] pr-4 lg:pr-0 gap-4 lg:gap-6">
                        <LanguageSwitcher />
                        
                        <Link
                            href="/contact"
                            className="text-[#00a6a2] text-sm md:text-base font-medium tracking-wide hover:underline uppercase transition-colors duration-300"
                            aria-label={t('contact')}
                        >
                            {t('contact')}
                        </Link>
                        
                        <ThemeToggle />

                        <button
                            className="bg-[#00a6a2] rounded-full flex items-center justify-center hover:bg-[#008a87] transition-transform duration-300 hover:scale-105 w-12 h-12 lg:w-[74px] lg:h-[74px] shadow-lg cursor-pointer"
                            aria-label={t('menu')}
                            title={t('menu')}
                            aria-controls="main-nav"
                            aria-expanded={isMenuOpen}
                            onClick={() => setIsMenuOpen(v => !v)}
                        >
                            {isMenuOpen ? (
                                <X className="text-white w-5 h-5 lg:w-[25px] lg:h-[25px] font-bold" />
                            ) : (
                                <Menu className="text-white w-5 h-5 lg:w-[25px] lg:h-[25px] font-bold" />
                            )}
                        </button>
                    </div>
                </div>
                
                {/* Slide-in Drawer for desktop */}
                {mounted && createPortal(
                <div className={`fixed inset-0 z-[99999] transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} h-[100dvh] min-h-[100dvh] overscroll-contain`} aria-hidden={!isMenuOpen}>
                    <div className="absolute inset-0 z-[99999] bg-black/60 backdrop-blur-sm h-[100dvh]" onClick={() => setIsMenuOpen(false)}></div>
                    <nav id="main-nav" className={`absolute right-0 top-0 z-[100000] h-[100dvh] min-h-[100dvh] w-[88%] sm:w-[420px] bg-white shadow-2xl transition-transform duration-300 overflow-y-auto ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-5 border-b border-gray-200 bg-white/95 backdrop-blur">
                            <span className="text-[#003c3a] font-semibold tracking-wide">Menu</span>
                            <button aria-label="Close menu" className="p-2 rounded-full hover:bg-gray-100 cursor-pointer" onClick={() => setIsMenuOpen(false)}>
                                <X className="w-6 h-6 text-gray-700" />
                            </button>
                        </div>
                        <div className="px-6 py-6">
                            <ul className="space-y-2">
                                {mobileNavItems.map((item) => (
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
                </div>, document.body)}
            </header>

            {/* Mobile Bottom Floating Navigation Bar */}
            {mounted && (
                <nav className="md:hidden fixed bottom-0 left-0 right-0 z-[9998]">
                    <div className="relative mx-3 mb-3">
                        {/* Glassmorphism background with gradient */}
                        <div className="relative header-glassmorphism rounded-[24px]">
                            {/* Subtle gradient overlay */}
                            <div className="absolute inset-0 header-gradient-overlay rounded-[24px] pointer-events-none"></div>
                            
                            {/* Scrollable container */}
                            <div className="relative overflow-x-auto scrollbar-hide">
                                <div className="flex items-center gap-1 px-2 py-2.5 min-w-max">
                                    {mobileNavItems.map((item) => {
                                        const Icon = item.icon
                                        // For home, exact match only. For others, match if starts with the path
                                        const isActive = item.href === '/' 
                                            ? pathname === '/' 
                                            : pathname === item.href || pathname.startsWith(item.href + '/')
                                        return (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                className="relative flex flex-col items-center justify-center gap-1 px-4 py-2.5 min-w-[68px] group flex-shrink-0"
                                            >
                                                {/* Active background */}
                                                {isActive && (
                                                    <div className="absolute inset-0 bg-gradient-to-br from-[#00a6a2] to-[#008a87] rounded-2xl shadow-lg"></div>
                                                )}
                                                
                                                {/* Icon and label */}
                                                <div className="relative z-10 flex flex-col items-center gap-1">
                                                    <Icon 
                                                        className={`w-6 h-6 transition-all duration-300 ${
                                                            isActive 
                                                                ? 'text-white scale-105' 
                                                                : 'text-gray-600 group-hover:text-[#00a6a2] group-hover:scale-110'
                                                        }`}
                                                        strokeWidth={isActive ? 2.5 : 2}
                                                    />
                                                    <span className={`text-[9px] font-medium transition-all duration-300 whitespace-nowrap ${
                                                        isActive 
                                                            ? 'text-white font-semibold' 
                                                            : 'text-gray-600 group-hover:text-[#00a6a2]'
                                                    }`}>
                                                        {item.label}
                                                    </span>
                                                </div>

                                                {/* Ripple effect on tap */}
                                                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                                                    <div className={`absolute inset-0 transition-opacity duration-300 ${
                                                        isActive ? 'opacity-0' : 'opacity-0 group-active:opacity-100'
                                                    } bg-gray-100`}></div>
                                                </div>
                                            </Link>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            )}
        </>
    )
}
