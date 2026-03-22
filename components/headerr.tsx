"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

const leftNavItems = [
    { label: "HOME", href: "/" },
    { label: "OUR HISTORY", href: "/ourHistory" },
    { label: "CONTRIBUTION", href: "/homee" },
    { label: "MEDIA", href: "/gallery" },
]

const rightNavItems = [
    { label: "ABOUT US", href: "/aboutUs" },
    { label: "CONTACT", href: "/contact" },
    { label: "DONATE", href: "/donate" },
]

export function Headerr() {
    const [searchOpen, setSearchOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header className="bg-[#fefee3] relative z-20">
            <div className="max-w-7xl mx-auto px-4">
                <nav className="flex items-center justify-between py-3">
                    {/* Left Navigation */}
                    <div className="flex items-center gap-6">
                        {leftNavItems?.map((item) => {
                            const isActive =
                                item?.href === "/"
                                    ? pathname === "/"
                                    : pathname?.startsWith(item?.href);

                            return (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className={`text-sm font-semibold tracking-wider transition ${isActive
                                        ? "text-orange-500"
                                        : "text-gray-800 hover:text-orange-500"
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Center Logo */}
                    {/* <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center pt-1"> */}
                    {/* <>
                            <div className="relative">
                                <svg width="70" height="80" viewBox="0 0 70 80" className="drop-shadow-sm">

                                    <path
                                        d="M5 5 L5 45 Q5 65 35 75 Q65 65 65 45 L65 5 Z"
                                        fill="white"
                                        stroke="#1a1a1a"
                                        strokeWidth="1.5"
                                    />

                                    <path
                                        d="M10 10 L10 43 Q10 60 35 70 Q60 60 60 43 L60 10 Z"
                                        fill="none"
                                        stroke="#1a1a1a"
                                        strokeWidth="0.5"
                                    />

                                    <path id="topArc" d="M15 22 Q35 12 55 22" fill="none" />
                                    <text className="text-[5px] fill-gray-700" fontWeight="500">
                                        <textPath href="#topArc" startOffset="50%" textAnchor="middle">
                                            जय जवान जय किसान
                                        </textPath>
                                    </text>

                                    <circle cx="35" cy="40" r="18" fill="#c41e3a" />
                                    <circle cx="35" cy="40" r="15" fill="#c41e3a" stroke="white" strokeWidth="0.5" />

                                    <g transform="translate(24, 32) scale(0.4)">
                                        <path
                                            d="M10 25 Q8 20 12 18 L14 10 Q16 8 18 10 L20 12 Q22 10 24 12 L26 18 Q28 16 32 18 L38 18 Q42 18 44 22 L46 28 Q48 32 44 34 L10 34 Q6 34 8 30 Z"
                                            fill="white"
                                        />
                                    </g>

                                    <text x="35" y="64" textAnchor="middle" className="text-[5px] fill-gray-700" fontWeight="500">
                                        RAJASTHAN
                                    </text>
                                </svg>
                            </div>

                            <div className="text-center -mt-1">
                                <p className="text-[11px] font-bold text-gray-800 tracking-widest">RAJASTHAN</p>
                                <p className="text-[10px] text-orange-500 italic font-medium">The Incredible State of India !</p>
                            </div>

                            <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-44">
                                <svg viewBox="0 0 180 30" className="w-full" preserveAspectRatio="none">
                                    <path
                                        d="M0 2 Q90 28 180 2"
                                        fill="none"
                                        stroke="#d97706"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </div>
                        </> */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center pt-1">
                        <Image
                            src="https://res.cloudinary.com/drb1ds8e3/image/upload/v1774178896/headLogo_vvrefk.png"
                            alt="Logo"
                            width={300}
                            height={300}
                            className="object-contain"
                            priority
                        />
                        {/* </div> */}
                    </div>

                    {/* Right Navigation */}
                    <div className="flex items-center gap-6">
                        {rightNavItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="text-sm font-semibold tracking-wider text-gray-800 hover:text-orange-500"
                            >
                                {item.label}
                            </Link>
                        ))}
                        <button
                            onClick={() => setSearchOpen(!searchOpen)}
                            className="flex items-center gap-2 border border-gray-300 px-4 py-1.5 text-sm font-semibold text-gray-700 hover:border-orange-500 hover:text-orange-500"
                        >
                            SEARCH
                            {/* <Search className="w-4 h-4" /> */}
                            {/* <p>Search</p> */}
                        </button>
                    </div>
                </nav>
            </div>

            {/* Orange Line */}
            <div className="h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-400"></div>
        </header>
    )
}
