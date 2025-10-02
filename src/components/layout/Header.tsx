"use client"

import { Menu } from "lucide-react"
import ThemeToggle from "../ThemeToggle"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY
            setIsScrolled(scrollTop > 10)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className={`w-full flex bg-white items-center sticky top-0 z-50 transition-all duration-300 ${
            isScrolled ? 'h-[140px] shadow-2xl shadow-gray-800/80' : 'h-[220px] shadow-none'
        }`}>
            {/* AmalCare Logo - Centered */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
                <Link href="/" aria-label="Zur Startseite navigieren">
                    <Image
                        src="https://alamalhealthcare.com/wp-content/uploads/2025/02/Icon.png"
                        alt="AmalCare Logo"
                        width={isScrolled ? 120 : 150}
                        height={isScrolled ? 72 : 90}
                        className="h-auto transition-all duration-300"
                        priority
                    />
                </Link>
            </div>
            <div className="flex justify-end items-center w-[87%] gap-8">
                <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center">
                    </div>
                    <Link
                        href="/contact"
                        className="text-[#00a6a2] text-md font-medium tracking-wide hover:underline uppercase"
                        aria-label="Zur Seite Kontakt"
                    >
                        CONTACT
                    </Link>
                </div>
                <ThemeToggle />

                <button
                    className="bg-[#00a6a2] rounded-full flex items-center justify-center hover:bg-[#008a87] transition-colors w-[74px] h-[74px]"
                    aria-label="Menü öffnen"
                    title="Menü öffnen"
                    aria-controls="main-nav"
                    aria-expanded="false"
                >
                    <Menu className="text-white w-[25px] h-[25px] font-bold" />
                </button>
            </div>
        </header>
    )
}
