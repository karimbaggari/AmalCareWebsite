import { Menu } from "lucide-react"
import ThemeToggle from "./ThemeToggle"
import Logo from "./Logo"

export default function Navbar() {
    return (
        <nav className="w-full bg-white py-6 px-8">
            <div className="flex items-center justify-between max-w-7xl mx-auto h-[148px]">
                {/* Left side - empty for spacing */}
                <div className="flex-1"></div>

                {/* Center - Logo and brand */}
                <div className="flex flex-col items-center">
                    {/* AmalCare Logo */}
                    <div className="mb-2">
                        <Logo />
                    </div>

                </div>

                {/* Right side - Navigation items */}
                <div className="flex-1 flex items-center justify-end gap-6">
                    {/* Contact link */}
                    <span className="text-[#00a6a2] text-sm font-medium tracking-wide">KONTAKT</span>

                    {/* Theme toggle */}
                    <ThemeToggle />

                    {/* Hamburger menu */}
                    <button className="bg-[#00a6a2] rounded-full flex items-center justify-center hover:bg-[#008a87] transition-colors w-[74px] h-[74px]">
                        <Menu className="text-white w-[25px] h-[25px] font-bold" />
                    </button>
                </div>
            </div>
        </nav>
    )
}
