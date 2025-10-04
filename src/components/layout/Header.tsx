"use client"

import { Menu } from "lucide-react"
import ThemeToggle from "../ThemeToggle"
import LanguageSwitcher from "../ui/LanguageSwitcher"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useTranslations } from 'next-intl'

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
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
                    className="bg-[#00a6a2] rounded-full flex items-center justify-center hover:bg-[#008a87] transition-transform duration-300 hover:scale-105 w-10 h-10 sm:w-12 sm:h-12 md:w-[74px] md:h-[74px] shadow-lg"
                    aria-label={t('menu')}
                    title={t('menu')}
                    aria-controls="main-nav"
                    aria-expanded="false"
                >
                    <Menu className="text-white w-5 h-5 md:w-[25px] md:h-[25px] font-bold" />
                </button>
            </div>
        </header>
    )
}
