import { Menu } from "lucide-react"
import ThemeToggle from "./ThemeToggle"
import Link from "next/link"
import Logo from "./Logo"

export default function Navbar() {
    return (
        <div className="w-full flex bg-white h-[220px] items-center">

            {/* AmalCare Logo */}
            <div className="mb-2 self-center justify-end flex w-[57%]">
                <Logo />
            </div>
            <div className="flex justify-end items-center w-[30%]  gap-8">
                <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center">
                    </div>
                    <Link
                        href="/kontakt/anschrift"
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
        </div>
    )
}
