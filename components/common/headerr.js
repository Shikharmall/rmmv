"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

const leftNavItems = [
    { label: "HOME", href: "/" },
    { label: "OUR HISTORY", href: "/ourHistory" },
    { label: "CONTRIBUTION", href: "/homee" },
    { label: "MEDIA", href: "/gallery" },
];

const rightNavItems = [
    { label: "ABOUT US", href: "/aboutUs" },
    { label: "CONTACT", href: "/contact" },
    { label: "DONATE", href: "/donate" },
];

export function Headerr() {
    const [searchOpen, setSearchOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (href) =>
        href === "/" ? pathname === "/" : pathname.startsWith(href);

    return (
        <header className="bg-[#fefee3] relative z-50">
            <div className="max-w-7xl mx-auto px-4">
                <nav className="flex items-center justify-between py-3">

                    {/* Left Navigation (Desktop) */}
                    <div className="hidden md:flex items-center gap-6">
                        {leftNavItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={`text-sm font-semibold tracking-wider transition ${isActive(item.href)
                                        ? "text-orange-500"
                                        : "text-gray-800 hover:text-orange-500"
                                    }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    {/* Center Logo */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
                        <Image
                            src="https://res.cloudinary.com/drb1ds8e3/image/upload/v1774178896/headLogo_vvrefk.png"
                            alt="Logo"
                            width={300}
                            height={300}
                            className="object-contain"
                            priority
                        />
                    </div>

                    {/* Hamburger (Mobile) */}
                    <button
                        className="md:hidden flex flex-col gap-1"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <span className="w-6 h-[2px] bg-gray-800"></span>
                        <span className="w-6 h-[2px] bg-gray-800"></span>
                        <span className="w-6 h-[2px] bg-gray-800"></span>
                    </button>

                    {/* Right Navigation (Desktop) */}
                    <div className="hidden md:flex items-center gap-6">
                        {rightNavItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={`text-sm font-semibold tracking-wider transition ${isActive(item.href)
                                        ? "text-orange-500"
                                        : "text-gray-800 hover:text-orange-500"
                                    }`}
                            >
                                {item.label}
                            </Link>
                        ))}

                        <button
                            onClick={() => setSearchOpen(!searchOpen)}
                            className="border border-gray-300 px-4 py-1.5 text-sm font-semibold text-gray-700 hover:border-orange-500 hover:text-orange-500 transition"
                        >
                            SEARCH
                        </button>
                    </div>
                </nav>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white shadow-lg border-t">
                    <div className="flex flex-col p-4 gap-4">

                        {[...leftNavItems, ...rightNavItems].map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                onClick={() => setMenuOpen(false)}
                                className={`text-sm font-semibold tracking-wider ${isActive(item.href)
                                        ? "text-orange-500"
                                        : "text-gray-800"
                                    }`}
                            >
                                {item.label}
                            </Link>
                        ))}

                        <button
                            onClick={() => setSearchOpen(!searchOpen)}
                            className="text-left border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700"
                        >
                            SEARCH
                        </button>
                    </div>
                </div>
            )}

            {/* Orange Line */}
            <div className="h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-400"></div>
        </header>
    );
}