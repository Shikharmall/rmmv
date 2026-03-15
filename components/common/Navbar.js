"use client";
import { useContext, useState } from "react";
import Link from "next/link";
import LanguageContext from "@/context/languageContext";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { language } = useContext(LanguageContext);

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-xl font-semibold text-[#834e2f] font-serif"
            // className="text-xl font-semibold text-[#ad916c] font-serif"
            // className="text-xl font-semibold text-[#f47217] font-serif"
            // className="text-xl font-semibold text-[#caaf44] font-serif"
            >
              {language === "english" ? "Raja Madhav Mall Vishen" : "राजा माधव मल्ल विशेन"}
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="text-gray-700 hover:text-[#834e2f]">
              {language === "english" ? "Home" : "होम"}
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-[#834e2f]"
            >
              {language === "english" ? "About" : "वंशावली"}
            </Link>
            <Link
              href="/ourHistory"
              className="text-gray-700 hover:text-[#834e2f]"
            >
              {language === "english" ? "Our History" : "हमारा इतिहास"}
            </Link>
            <Link
              href="/gallery"
              className="text-gray-700 hover:text-[#834e2f]"
            >
              {language === "english" ? "Gallery" : "गैलरी"}
            </Link>
            <Link
              href="/donate"
              className="text-gray-700 hover:text-[#834e2f]"
            >
              {language === "english" ? "Donate" : "डोनेट"}
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-[#834e2f]"
            >
              {language === "english" ? "Contact" : "संपर्क"}
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="text-gray-600 focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>
      </div>
      {open && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-1">
          <Link href="/" className="block text-gray-700 hover:text-[#834e2f]">
            {language === "english" ? "Home" : "होम"}
          </Link>
          <Link
            href="/about"
            className="block text-gray-700 hover:text-[#834e2f]"
          >
            {language === "english" ? "Family Tree" : "वंशावली"}
          </Link>
          <Link
            href="/ourHistory"
            className="text-gray-700 hover:text-[#834e2f]"
          >
            {language === "english" ? "Our History" : "हमारा इतिहास"}
          </Link>
          <Link
            href="/gallery"
            className="block text-gray-700 hover:text-[#834e2f]"
          >
            {language === "english" ? "Gallery" : "गैलरी"}
          </Link>
          <Link
            href="/donate"
            className="text-gray-700 hover:text-[#834e2f]"
          >
            {language === "english" ? "Donate" : "डोनेट"}
          </Link>
          <Link
            href="/contact"
            className="block text-gray-700 hover:text-[#834e2f]"
          >
            {language === "english" ? "Contact" : "संपर्क"}
          </Link>
        </div>
      )}
    </nav>
  );
}
