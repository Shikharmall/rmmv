"use client";
import LanguageContext from "@/context/languageContext";
import { useContext } from "react";
import { FaFacebook, FaSearch, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Header() {
  const { language, setLanguage } = useContext(LanguageContext);
  return (
    <header
      // className="bg-[#082366] text-white border-b-3 border-green-500"
      // className="bg-[#ac1b2a] text-white border-b-1 border-[#834e2f]"
      className="bg-[#ad916c] text-white border-b-1 border-[#834e2f]"
    >
      <div className="container mx-auto flex justify-between items-center py-2 px-4">
        <div className="flex items-center space-x-4 text-sm">
          {/* <a className="hover:underline"></a> */}
          <span className="border-r border-white pr-4 hidden md:inline">
            shmall.21.2020@gmail.com
          </span>
          <button
            className="cursor-pointer px-2 py-1 border-1 rounded-sm"
            onClick={() => {
              language === "english"
                ? (setLanguage("hindi"),
                  localStorage.setItem("language", "hindi"))
                : (setLanguage("english"),
                  localStorage.setItem("language", "english"));
            }}
          >
            {language === "english" ? "हिंदी में देखें" : "Watch in English"}
          </button>
        </div>
        <div className="flex space-x-3 text-xl">
          <a href="" aria-label="Search">
            <FaSearch className="text-xl text-white" />
          </a>

          <a href="" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter className="text-xl text-white" />
          </a>

          <a href="" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <FaYoutube className="text-xl text-white" />
          </a>

          <a href="https://www.facebook.com/groups/1600187957853501" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook className="text-xl text-white" />
          </a>
        </div>
      </div>
    </header>
  );
}
